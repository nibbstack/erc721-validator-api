#!/bin/sh

. ./bin/production/env.sh

echo 'Upgrading stage ...'
node ./dist/scripts/upgrade.js
echo 'Done!'