#!/bin/bash

echo "Starting build script..."

TIMESTAMP="$(date +%s)"

echo $TIMESTAMP
echo "Running with: EB_APP_NAME=$EB_APP_NAME, APP_ENV=$EB_APP_ENV"

if [ "$1" == "build" ]
  then
  echo "Updating EB Environment..."

  aws elasticbeanstalk create-application-version --application-name $EB_APP_NAME --version-label $EB_APP_ENV-$TIMESTAMP --source-bundle S3Bucket=$EB_BUCKET,S3Key=$IMAGE_REPO_NAME-$BRANCH-$IMAGE_TAG.zip
  aws elasticbeanstalk update-environment --environment-name $EB_APP_ENV --version-label $EB_APP_ENV-$TIMESTAMP
else
  echo "Unknown parameter"
fi
