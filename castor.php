<?php

use Castor\Attribute\AsTask;
use Symfony\Component\Console\Style\SymfonyStyle;

use function Castor\capture;
use function Castor\io;
use function Castor\parallel;
use function Castor\run;

#[AsTask(namespace: 'devilbox', description: 'Start devilbox', aliases: ['start'])]
function start(): void
{
    $whoami = capture('whoami');

    if ($whoami === 'devilbox') {
        io()->warning('You are already in devilbox');
        return;
    }

    run('docker-compose up -d', path: "/home/$whoami/devilbox");
    io()->success('Devilbox started');
}

#[AsTask(namespace: 'devilbox', description: 'Stop devilbox', aliases: ['stop'])]
function stop(): void
{
    $whoami = capture('whoami');

    if ($whoami === 'devilbox') {
        io()->warning('You are in devilbox, you can\'t stop it from here. Please exit devilbox first with `exit`');
        return;
    }

    run('docker-compose stop', path: "/home/$whoami/devilbox");
    io()->success('Devilbox stopped');
}

#[AsTask(namespace: 'composer', description: 'Install project', aliases: ['c:i', 'install'])]
function install(): void
{
    run('composer install');
    io()->success('Composer dependencies installed');
    run('npm install');
    io()->success('NPM dependencies installed');
    run('npm run build');
    io()->success('Assets built');
}


#[AsTask(namespace: 'sf', description: 'Clear cache', aliases: ['sf:cc'])]
function cacheClear(): void
{
    run('php bin/console cache:clear');
}

#[AsTask(namespace: 'sf', description: 'Doctrine Schema Create', aliases: ['sf:ddc'])]
function schemaCreate(): void
{
    run('php bin/console doctrine:schema:create');
}

#[AsTask(namespace: 'sf', description: 'Doctrine Schema Update', aliases: ['sf:ddu'])]
function schemaUpdate(): void
{
    run('php bin/console doctrine:schema:update --force');
    io()->success('Successfully updated database schema');
}

#[AsTask(namespace: 'sf', description: 'Doctrine Schema Drop', aliases: ['sf:ddd'])]
function schemaDrop(): void
{
    run('php bin/console doctrine:schema:drop --force');
    io()->success('Successfully dropped database schema');
}

#[AsTask(namespace: 'sf', description: 'Doctrine Migrations Migrate', aliases: ['sf:dm'])]
function migrationsMigrate(): void
{
    run('php bin/console doctrine:migrations:migrate --no-interaction');
    io()->success('Successfully migrated database');
}

#[AsTask(namespace: 'sf', description: 'Doctrine Migrations Diff', aliases: ['sf:diff'])]
function migrationsDiff(): void
{
    run('php bin/console doctrine:migrations:diff');
    io()->success('Successfully generated migration');
}

#[AsTask(namespace: 'sf', description: 'Doctrine Migrations Generate', aliases: ['sf:dmg'])]
function migrationsGenerate(): void
{
    run('php bin/console doctrine:migrations:generate');
    io()->success('Successfully generated migration');
}

#[AsTask(namespace: 'sf', description: 'Doctrine Migrations Status', aliases: ['sf:dmst'])]
function migrationsStatus(): void
{
    run('php bin/console doctrine:migrations:status');
}

#[AsTask(namespace: 'sf', description: 'Doctrine Fixtures Load', aliases: ['sf:dfl'])]
function fixturesLoad(): void
{
    if (!file_exists('./vendor/bin/doctrine-fixtures')) {
        io()->warning('You called `sf:dfl` but doctrine-fixtures is not installed. Please install it with `composer require --dev orm-fixtures`');
        return;
    }

    run('php bin/console doctrine:fixtures:load --no-interaction');
    io()->success('Successfully loaded fixtures');
}

#[AsTask(namespace: 'sf', description: 'Doctrine Full Reset', aliases: ['sf:reset'])]
function fullReset(): void
{
    schemaDrop();
    schemaCreate();
    schemaUpdate();
    fixturesLoad();
}

/**
 * QA
 */

#[AsTask(namespace: 'qa', description: 'Run PHPStan', aliases: ['qa:phpstan'])]
function phpstan(): void
{
    if (!file_exists('./vendor/bin/phpstan')) {
        io()->warning('You called `qa:phpstan` but phpstan is not installed. Please install it with `composer require --dev phpstan/phpstan`');
        return;
    }

    run('./vendor/bin/phpstan analyse -c phpstan.neon');
}

#[AsTask(namespace: 'qa', description: 'Run ECS', aliases: ['qa:ecs'])]
function ecs(): void
{
    if (!file_exists('./vendor/bin/ecs')) {
        io()->warning('You called `qa:ecs` but ecs is not installed. Please install it with `composer require --dev symplify/easy-coding-standard`');
        return;
    }

    run('./vendor/bin/ecs check');
}

#[AsTask(namespace: 'qa', description: 'Run Rector', aliases: ['qa:rector'])]
function rector(): void
{
    if (!file_exists('./vendor/bin/rector')) {
        io()->warning('You called `qa:rector` but rector is not installed. Please install it with `composer require --dev rector/rector`');
        return;
    }

    run('./vendor/bin/rector process');
}

#[AsTask(namespace: 'qa', description: 'Run Symfony Linters', aliases: ['qa:lint'])]
function lint(): void
{
    run('php bin/console lint:container');
    run('php bin/console lint:twig templates/');
    run('php bin/console lint:yaml config/');
    run('php bin/console lint:xliff translations/');
}

#[AsTask(namespace: 'qa', description: 'Run unit tests', aliases: ['qa:unit'])]
function unit(): void
{
    if (!file_exists('./vendor/bin/phpunit')) {
        io()->warning('You called `qa:unit` but phpunit is not installed. Please install it with `composer require --dev phpunit/phpunit`');
        return;
    }

    run('./vendor/bin/phpunit --testsuite=unit');
}

#[AsTask(namespace: 'test', description: 'Run all tests', aliases: ['test'])]
function all(): void
{
    lint();
    run('./vendor/bin/grumphp run');
}