#!/bin/sh

. ./bin/development/env.sh

echo 'Retrieving routes ...'
./node_modules/.bin/ts-node ./src/scripts/print-routes.ts
echo 'Done!'
