#!/bin/sh

. ./bin/development/env.sh

echo 'Seeding stage ...'
./node_modules/.bin/ts-node ./src/scripts/seed.ts
echo 'Done!'
