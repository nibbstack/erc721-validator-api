#!/bin/sh

. ./bin/production/env.sh

echo 'Seeding stage ...'
node ./dist/scripts/seed.js
echo 'Done!'
