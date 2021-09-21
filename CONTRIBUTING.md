# Contributing

### Cloud

### Deployment

If everything is properly set up, we should be able to deploy lambda functions by running the commands below:

```sh
$ nvm use 14
$ npm run build
$ npm run deploy -- --stage production
```

We can remove an already deployed lambda function:

```sh
$ npm run deploy:remove -- --stage production
```
