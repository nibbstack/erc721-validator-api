#!/bin/sh

. ./bin/development/env.sh

echo 'Downgrading stage ...'
./node_modules/.bin/ts-node ./src/scripts/downgrade.ts
echo 'Done!'
