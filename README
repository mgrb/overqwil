# OVERQWIL
## _A API to record values from a gateway_
## Features

- create api users
- recive values from gateway

## Tech
This app uses these stack:
- [Express] - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [MongoDB] - A source-available cross-platform document-oriented database program.
- [Node.JS] - An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
- [JWT] - JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims.

## Installation

```sh
git clone https://github.com/mgrb/overqwil.git
cd overqwil
docker-compose up
```

## Using API

### Register a user
PORT: base_url/auth/register
Content-type: application/json
BODY TEMPLATE:
```json
{
	"name": "<<User Name>>",
	"login": "<<user_login>>",
	"password": "<<secret>>"
}
```

### Recover a active token
PORT: base_url/auth/login
Content-type: application/json
BODY TEMPLATE:
```json
{
	"login": "<<user_login>>",
	"password": "<<secret>>"
}
```
#### _Possible response_
```json
{
    "user": {  }, 
	"token": "some_jwt_token"
}
```
### Input a record from gateway
PORT: base_url/record
Content-type: application/json
BODY TEMPLATE:
```json
{
   "id": 31,
   "node": "00-80-e1-15-00-21-d4-b1",
   "time_utc": "2022-02-22 12:13:17",
   "rssi": -61,
   "snr": 10,
   "distance_01": 5.365,
   "distance_02": 5.365,
   "distance_03": 5.364,
   "distance_04": 5.367,
   "distance_05": 5.361,
   "distance_06": 5.368,
   "distance_07": 5.365,
   "distance_08": 5.367,
   "distance_09": 5.365,
   "distance_10": 5.367,
   "distance_11": 5.368,
   "distance_12": 5.363,
   "distance_13": 5.362,
   "distance_14": 5.365,
   "distance_15": 5.365,
   "distance_16": 5.369,
   "distance_17": 5.366,
   "distance_18": 5.365,
   "distance_19": 5.366,
   "distance_20": 5.365,
   "distance_21": 5.365,
   "distance_22": 5.367,
   "distance_23": 5.367,
   "distance_24": 5.364,
   "distance_25": 5.363,
   "distance_26": 5.363
 }
```
