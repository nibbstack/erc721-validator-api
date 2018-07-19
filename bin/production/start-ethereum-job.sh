#!/bin/sh

. ./bin/production/env.sh

echo 'Retrieving environment variables ...'
./node_modules/.bin/ts-node ./src/scripts/print-env.ts
echo 'Working ...'
./node_modules/.bin/ts-node ./src/scripts/start-ethereum-job.ts
