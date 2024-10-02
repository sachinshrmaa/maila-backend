# API Documentation

List of all API endpoints with requests and response.

## Auth

#### Sign Up

**Endpoint:** http://localhost:3000/api/v1/auth/signup `POST`

Request:

```
{
    "name": "sachin",
    "email": "sachin@maila.in",
    "password": "123"
}
```

Response:

```
{
    "message": "User registered sucessfully"
}
```

#### Log In

**Endpoint:** http://localhost:3000/api/v1/auth/login `POST`

Request:

```
{
    "email": "sachin@maila.in",
    "password": "123"
}
```

Response:

```
{
    "message": "Logged in successfully",
    "user": {
        "user_id": "ehygM1dvTmuvSbctFJROV",
        "name": "sachin",
        "email": "sachin@maila.in",
        "is_active": true,
        "created_at": "2024-09-14T04:24:26.994Z"
    }
}
```

#### Deactivate Account

#### Update Account

```

```
