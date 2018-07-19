#!/bin/sh

. ./bin/development/env.sh

echo 'Upgrading stage ...'
./node_modules/.bin/ts-node ./src/scripts/upgrade.ts
echo 'Done!'