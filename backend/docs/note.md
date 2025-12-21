# Note API Spec

## Create Note API

Endpoint : POST /api/notes

Headers :
- Authorization : token

Request Body :

```json
{
    "title" : "Title apa",
    "content" : "Content apa"
}
```

Response Body Success (201 Created) :

```json
{
    "data" : {
        "id" : 1,
        "title" : "Belajar Golang",
        "content" : "Materi struct dan interface",
        "createdAt": "2025-12-20T10:00:00.000Z",
    }
}
```

Response Body Error (400 Bad Request) :

```json
{
    "errors" : "Content & title is required"
}
```

## Update Note API

Endpoint : PUT api/notes/:id

Headers :
- Authorization : token

Request Body :

```json
{
    "title" : "Title apa",
    "content" : "Content apa"
}
```

Response Body Success (200 OK) :

```json
{
    "data" : {
        "id" : 1,
        "title" : "Belajar Golang Lanjut",
        "content" : "Materi Goroutines",
        "createdAt": "2025-12-20T10:00:00.000Z",
    }
}
```

Response Body Error (404 Not Found) :

```json
{
    "errors" : "Note is not found"
}
```

## Get Note API

Endpoint : GET /api/notes/:id

Headers :
- Authorization : token

Request Body :

Response Body Success (200 OK) :

```json
{
    "data" : {
        "id" : 1,
        "title" : "Belajar Golang Lanjut",
        "content" : "Materi Goroutines",
        "createdAt": "2025-12-20T10:00:00.000Z"
    }
}
```

Response Body Error (404 Not Found) :

```json
{
    "errors" : "Note is not found"
}
```

## Search Note API
Endpoint : GET /api/notes

Headers :
- Authorization : token

Query params :
- title : Search by title (optional)
- page : Page number (optional, default 1)
- size : Page size (optional, default 10)

Response Body Success (200 OK) :

```json
{
    "data" : [
        {
            "id" : 1,
            "title" : "Belajar Golang Lanjut",
            "content" : "Materi Goroutines",
            "createdAt": "2025-12-20T10:00:00.000Z",
        },
        {
            "id" : 2,
            "title" : "Belajar Golang Lanjut",
            "content" : "Materi Goroutines",
            "createdAt": "2025-12-20T10:00:00.000Z",
        },
    ],
    "paging" : {
        "page" : 1,
        "total_page" : 3,
        "total_item" : 50
    }
}
```

## Remove Note API
Endpoint : Delete api/notes/:id

Headers :
- Authorization : token

Response Body Success (200 OK) :

```json
{
    "data" : "ok"
}
```

Response Body Error (404 Not Found) :

```json
{
    "errors" : "Note is not found"
}
```