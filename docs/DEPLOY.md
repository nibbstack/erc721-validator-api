# ERC721 Validator API Deployment docs

Requirements:
* **Docker**: https://docs.docker.com/engine/installation/

## Explanation

This API uses native scripts to support crypto operations so it needs to be compiled in the Lambda native environment to run properly. 

## Deployment process

1. First compile the docker build image, based on AWS AMI Linux container that is used to run Lambda functions.
```bash
$ docker build -t erc721validator-build .
```

2. Then run the image to compile code and trigger the deployment process with the following command
```bash
$ docker run --rm -e AWS_ACCESS_KEY_ID=<KEY> -e AWS_SECRET_ACCESS_KEY=<SECRET> --rm -v $PWD:/app erc721validator-build
```

3. Wait for the job to finish and don't interrupt the process. This deploys the changes to Lambda.