# ERC721 Validator API

> REST API for validating ERC-721 contracts.

## REST API

This api operates as a global english-based service.

### Endpoints

Here is a list of available endpoints:

* **production**: https://URL

### Requests

The server speaks [JSON](https://en.wikipedia.org/wiki/JSON). It's recommended that every call to the server includes the `ContentType` header set to `application/json; charset=utf-8;`. 

Requests with `POST` or `PUT` methods must send data as `application/json` or `mutipart/form-data` when files are included in the request body.

```bash
$ curl -X 'POST' 'https://URL/example' \
       -H 'Content-Type: application/json; charset=utf-8' \
       -d $'{ "name": "John Smith" }'
```

### Responses

Server response always reflects user's abilities. This means that some routes return personalized data based on user's permissions.

Every response has a unique ID which helps identifying potential problems. It also includes a status code that helps identifying the cause of a problem.

Successful requests include a `data` key, which holds a valid response object, and a `meta` key, which holds additional information about the result.

```js
{
  "data": { ... },
  "id": ...,
  "meta": { ... },
  "status": ...,
}
```

In case of failur, the server responds with `errors` key, which holds a list of error objects.

```js
{
  "errors": [ ... ]
  "id": ...,
  "status": ...,
}
```

Query requests through `GET` method can return status codes `200`, `400`, `401`, `403` or `500`. Mutations through `POST`, `PUT` and `DELETE` can return also codes `201` and `422`. Invalid routes return status code `404`.

* **200**: Success.
* **201**: Successfully created.
* **400**: Invalid resource or resource not found.
* **401**: Unauthenticated access.
* **403**: Unauthorized access.
* **404**: Path not found.
* **422**: Data validation failed.
* **500**: System error.

### Error Handling

Errors include a unique code number and an error message. The code number helps identifying potential problems and points to the exact position in the system.

```js
{
  ...
  "errors": [
    {
      "code": 50033,
      "message": "Invalid path."
    }
  ]
}
```

Below is a complete list of handled errors.

| Code | Message
|-|-
| 50033 | Invalid path.
| 50034 | Unhandled system error.

### Routes

Most of the routes are `public` which means that user authentication is not required. The API requests and responses are based on user's abilities.

#### [public] GET /

> Returns the general server information.

#### [public] GET /basic

> Runs selected basic test.

##### Query parameters

| Name | Type | Default | Errors | Description
|-|-|-|-|-
| test | Number | - | - | Test case number - valid from 1 - 10.
| contract | String | - | - | Valid contract address.

#### [public] GET /token

> Runs selected basic test.

##### Query parameters

| Name | Type | Default | Errors | Description
|-|-|-|-|-
| test | Number | - | - | Test case number - valid from 1 - 3.
| contract | String | - | - | Valid contract address.
| token | String | - | - | Valid token id.

#### [public] GET /transfer

> Runs selected basic test.

##### Query parameters

| Name | Type | Default | Errors | Description
|-|-|-|-|-
| test | Number | - | - | Test case number - valid from 1 - 14.
| contract | String | - | - | Valid contract address.
| token | String | - | - | Valid token id.
| giver | String | - | - | Valid account address.

## Development

### Variables

Before you run the project, make sure you configure environment variables. You should create a configuration file for each environemnt:

* Development: `./bin/development/env.sh`
* Test: `./bin/test/env.sh`
* Production: `./bin/production/env.sh`

Here is how the file content should look like:

```bash
#!/bin/sh
export APP_ENV=development
export APP_SECRET=notasecret
export API_HOST='127.0.0.1'
export API_PORT=4444
export WEB3_URL='WEB3_URL'
```

### Source code

Run the commands below to install the service and all the required dependencies. Also make sure that you can access required repositories before running the commands below.

```
$ git clone git@github.com:0xcert/erc721-vaildator-api.git
$ cd erc721-vaildator-api
$ npm install
```

Run tests and start the server.

```
$ npm test
$ npm run development:start-http
```
