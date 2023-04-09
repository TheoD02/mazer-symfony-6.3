#!/usr/bin/env bash

set -e # Exit with nonzero exit code if anything fails

SYMFONY_VERSION=6.2.8
# Current dotenv "PROJECT_NAME" value
PROJECT_NAME=$(sed -n 's/^PROJECT_NAME=//p' .env)

git config --global user.email "theo.d02290@gmail.com"
git config --global user.name "TheoD02"

# Install Symfony if project is not installed
if [ ! -f ./composer.json ]; then
  rm -rf ./webapp
  symfony new webapp --version="6.3.*@dev" --webapp --no-interaction
  cd ./webapp && rm docker-compose.yml docker-compose.override.yml && cd ..
  mv ./webapp/.env ./ && mv ./webapp/** ./ && rm -rf ./webapp
  # Add project name to .env
  echo "PROJECT_NAME=${PROJECT_NAME}" >> .env
fi

# Start PHP-FPM
php-fpm