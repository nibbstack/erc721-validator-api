#!/bin/sh

. ./bin/development/env.sh

echo 'Retrieving environment variables ...'
./node_modules/.bin/ts-node ./src/scripts/print-env.ts
echo 'Importing contacts from SendGrid ...'
./node_modules/.bin/ts-node ./src/scripts/import-applicants.ts
