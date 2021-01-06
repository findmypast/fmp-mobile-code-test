# fmp-mobile-code-test

## Getting Started

This is a test API for the fmp mobile engineer position.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/findmypast/fmp-mobile-code-test.git
   ```
2. Install NPM packages
   ```sh
   npm i
   ```
3. Enter your API in `config.js`
   ```sh
   npm start
   ```
   
### Server

This will open a server on port 3001 and can be accessed at http://localhost:3001

Getting a list of all people on a particular tree can be achieved using a GET request:

```
http://localhost:3001/profiles/cgriswold
```

If successful, This will return an object containing an array of persons:

```
{
    "success": true,
    "data": [
        {
            "id": "001",
            "firstname": "Clark",
            "surname": "Griswold, Jr",
            "dob": "08101943",
            "image": "https://m.media-amazon.com/images/M/MV5BMTMwNTY2ODA4OV5BMl5BanBnXkFtZTcwOTE1NjAxMw@@._V1_UY317_CR15,0,214,317_AL_.jpg"
        },
        {
            "id": "002",
            "firstname": "Ellen",
            "surname": "Griswold",
            "dob": "15111951",
            "image": "https://m.media-amazon.com/images/M/MV5BMTMyNTk4ODU5NV5BMl5BanBnXkFtZTcwODU0OTgwMw@@._V1_UY317_CR6,0,214,317_AL_.jpg"
        },
        ...
    ]
}
```

Getting the relationships for a particular person, you can use a GET request like so:

```
http://localhost:3001/profile/001/cgriswold
```

If successful, this returns an object like so:

```
{
    "success": true,
    "data": {
        "id": "001",
        "firstname": "Clark",
        "surname": "Griswold, Jr",
        "dob": "08101943",
        "image": "https://m.media-amazon.com/images/M/MV5BMTMwNTY2ODA4OV5BMl5BanBnXkFtZTcwOTE1NjAxMw@@._V1_UY317_CR15,0,214,317_AL_.jpg",
        "relationships": {
            "spouse": "002",
            "mother": "008",
            "father": "007",
            "children": [
                "009",
                "010"
            ]
        }
    }
}
```

Good luck :)
