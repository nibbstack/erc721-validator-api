FROM node:9-alpine

# Set environment variables
ENV appDir /app
RUN mkdir -p /app

WORKDIR ${appDir}

RUN apk update && apk upgrade && \ 
    apk add --no-cache make gcc g++ python bash git openssh

RUN npm install -g typescript@2.6.2 pm2
RUN echo 'Upgraded TypeScript'

ADD ./package.json /app
RUN npm i --silent

RUN apk del make gcc g++ python

# Copy Other Files
ADD ./ /app/

WORKDIR ${appDir}

RUN npm run development:build-dist

EXPOSE 8080

# Start server
CMD ["pm2", "start", "processes.json", "--no-daemon"]
# CMD npm run production:start
