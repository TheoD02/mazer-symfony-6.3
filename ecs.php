<?php

declare(strict_types=1);

use PhpCsFixer\Fixer\Import\NoUnusedImportsFixer;
use PhpCsFixer\Fixer\Phpdoc\AlignMultilineCommentFixer;
use Symplify\EasyCodingStandard\Config\ECSConfig;
use Symplify\EasyCodingStandard\ValueObject\Set\SetList;

return function (ECSConfig $ecsConfig): void {
    $ecsConfig->paths([
        __DIR__ . '/config',
        __DIR__ . '/public',
        __DIR__ . '/src',
        __DIR__ . '/tests',
    ]);

    // this way you add a single rule
    $ecsConfig->rules([
        NoUnusedImportsFixer::class,
    ]);
    $ecsConfig->ruleWithConfiguration(AlignMultilineCommentFixer::class, [
        'comment_type' => 'all_multiline',
    ]);

    $ecsConfig->cacheDirectory(__DIR__ . '/var/cache/ecs');
    $ecsConfig->lineEnding("\n");


    $ecsConfig->dynamicSets([
        '@Symfony',
        '@PHP80Migration',
        '@PHP81Migration',
        '@PHP82Migration',
    ]);

    // this way you can add sets - group of rules
    $ecsConfig->sets([
        SetList::PSR_12,
        SetList::CLEAN_CODE,
        SetList::SYMPLIFY,
        SetList::ARRAY,
        SetList::COMMON,
        SetList::COMMENTS,
        SetList::CONTROL_STRUCTURES,
        SetList::DOCBLOCK,
        SetList::NAMESPACES,
        SetList::PHPUNIT,
        SetList::SPACES,
        SetList::STRICT,
        SetList::DOCTRINE_ANNOTATIONS,
    ]);
};
