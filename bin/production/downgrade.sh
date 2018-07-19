#!/bin/sh

. ./bin/production/env.sh

echo 'Downgrading stage ...'
node ./dist/scripts/downgrade.js
echo 'Done!'