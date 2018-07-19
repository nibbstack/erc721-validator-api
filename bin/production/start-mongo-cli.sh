#!/bin/sh

. ./bin/production/env.sh

echo 'Starting mongo client ...'
mongo $MONGO_URL/$MONGO_DB
