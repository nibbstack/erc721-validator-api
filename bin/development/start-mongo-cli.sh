#!/bin/sh

. ./bin/development/env.sh

echo 'Starting mongo client ...'
docker exec -it mongo /bin/bash -c "mongo $MONGO_URL/$MONGO_DB_NAME"
