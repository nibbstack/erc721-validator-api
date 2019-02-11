# FROM node:8-alpine
FROM lambci/lambda:build-nodejs8.10

ENV AWS_DEFAULT_REGION eu-central-1

# RUN sudo yum update && sudo yum upgrade && \ 
#     sudo yum install --no-cache make curl gcc g++ python bash git

# RUN curl -O https://bootstrap.pypa.io/get-pip.py
# RUN python get-pip.py --user
# RUN export PATH=~/.local/bin:$PATH
# RUN ~/.local/bin/pip install awscli --upgrade --user
# RUN mkdir -p ~/.aws/ && touch ~/.aws/config && touch ~/.aws/credentials
# RUN echo "[profile 0xcert]" >> ~/.aws/config
# RUN echo "region = eu-central-1" >> ~/.aws/config

# RUN echo "[profile 0xcert]" >> ~/.aws/credentials
# RUN echo "aws_access_key_id = AKIAINQUAGY3YHC4NEYA" >> ~/.aws/credentials
# RUN echo "aws_secret_access_key = rMhIVXBi1PPGopoBBqMFnYmLvu9ABx7MbB806WkM" >> ~/.aws/credentials
# Assumes you have a .lambdaignore file with a list of files you don't want in your zip
# RUN cat .lambdaignore | xargs zip -9qyr lambda.zip . -x
# CMD aws lambda update-function-code --function-name mylambda --zip-file fileb://lambda.zip

RUN npm install -g typescript@2.6.2 claudia
RUN echo 'Upgraded TypeScript'

RUN mkdir -p /app
WORKDIR /app

CMD [ "./bin/install.sh" ]