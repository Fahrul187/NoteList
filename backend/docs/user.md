# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
    "username" : "brrads",
    "password" : "rahasia",
    "name" : "Fahrul M Siddiq"
}
```

Response Body Success (201 Created) :

```json
{
    "data" : {
        "username" : "brrads",
        "name" : "Fahrul M Siddiq"
    }
}
```

Response Body Error (400 Bad Request) : 

```json
{
    "errors" : "Username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
    "username" : "brads",
    "password" : "rahasia"
}
```

Response Body Success (200 OK) :

```json
{
    "data" : {
        "token" : "unique-token",
    }
}
```

Response Body Error (401 Unauthorized) : 

```json
{
    "errors" : "username or password wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :
- Authorization : token

Request Body : 

```json
{
    "name" : "Fahrul Lagi",
    "password" : "new password"
}
```

Response Body Success (200 OK) :

```json
{
    "data" : {
        "username" : "brads",
        "name" : "Fahrul M Siddiq"
    }
}
```

Response Body Error (400 Bad Request) :

```json
{
    "errors" : "Name length max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success (200 OK):

```json
{
    "data" : {
        "username" : "brads",
        "name" : "Fahrul M Siddiq"
    }
}
```

Response Body Error (401 Unauthorized) :

```json
{
    "errors" : "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :
- Authorization : token

Response Body Success (200 OK) :

```json
{
    "data" : "ok"
}
```

Response Body Error (401 Unauthorized) :

```json
{
    "errors" : "Unauthorized"
}
```