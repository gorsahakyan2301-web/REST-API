/* 1. Hello API
Create an API with one endpoint:
GET /helloIt should return:
{
  "message": "Hello, World!"
} */
/* const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.json({
    message: "Hello, World!"
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
}); */


/* 2. About Me API
Create:
GET /aboutReturn information about yourself:

{
  "name": "John",
  "age": 20,
  "country": "Armenia"
} */
/* const express = require('express');
const app = express();
app.get('/about',(req, res) =>{
    res.json({
        name: "John",
        age: 20,
        country: "Armenia"
    });
});
app.listen(3000, () =>{
    console.log("Server is running on http://localhost:3000");
}); */


/* 3. Users API
Create:
GET /usersReturn an array of 3 users:
[
  {
    "id": 1,
    "name": "Anna"
  },
  {
    "id": 2,
    "name": "Aram"
  },
  {
    "id": 3,
    "name": "David"
  }
] */
/* const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Anna"
    },
    {
      id: 2,
      name: "Aram"
    },
    {
      id: 3,
      name: "David"
    }
  ]);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
}); */


/* 4. Get One User
Using the same users array, create:
GET /users/:idFor example:
GET /users/2should return:
{
  "id": 2,
  "name": "Aram"
}If the user doesn't exist, return:

{
  "error": "User not found"
} */
/* const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Aram" },
  { id: 3, name: "David" }
];

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  res.json(user);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
}); */


/* 5. Query Parameters
Create:
GET /searchThe endpoint should accept a name query parameter.
Example:
GET /search?name=AnnaResponse:

{
  "message": "Searching for Anna"
} */
/* const express = require("express");

const app = express();

app.get("/search", (req, res) => {
  const name = req.query.name;

  res.json({
    message: `Searching for ${name}`
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
}); */


/* 6. Simple Calculator API
Create:
GET /add?a=10&b=5Response:

{
  "result": 15
}Then create:
GET /multiply?a=10&b=5Response:

{
  "result": 50
} */
/* const express = require("express");

const app = express();

app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({
    result: a + b
  });
});

app.get("/multiply", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({
    result: a * b
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
}); */


/* 7. POST User
Create:
POST /usersThe client sends:

{
  "name": "Armen"
}Add the user to the users array and return:

{
  "id": 4,
  "name": "Armen"
} */
/* const express = require("express");

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Aram" },
  { id: 3, name: "David" }
];
app.get("/users", (req, res) => {
  res.json(users);
});
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);

  res.json(newUser);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
}); */


/* 8. DELETE User
Create:
DELETE /users/:idFor example:
DELETE /users/2Remove the user from the array and return:

{
  "message": "User deleted"
} */
/* const express = require("express");

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Aram" },
  { id: 3, name: "David" }
];
app.get("/users", (req, res) => {
  res.json(users);
});
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  users.splice(index, 1);

  res.json({
    message: "User deleted"
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
}); */


/* 9. Update User
Create:
PUT /users/:idRequest:

{
  "name": "New Name"
}Update the user's name and return the updated user. */
/* const express = require("express");

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Aram" },
  { id: 3, name: "David" }
];

app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const newName = req.body.name;

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  user.name = newName;

  res.json(user);
});
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
}); */


/* 10. Mini Project — Books API
Create a small REST API for books.
Each book should have:

{
  "id": 1,
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "year": 1937
}Implement:
GET    /books
GET    /books/:id
POST   /books
PUT    /books/:id
DELETE /books/:idRequirements:
Store books in an array.Use req.params for IDs.Use req.body for POST/PUT.Return JSON responses.Return an appropriate error when a book doesn't exist.Suggested learning order
1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10
This gives students the progression:
GET → params → query → POST → DELETE → PUT → complete REST API. */
/* const express = require("express");

const app = express();

app.use(express.json());

let books = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1949
  },
  {
    id: 3,
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
  }
];
app.get("/books", (req, res) => {
  res.json(books);
});
app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find(book => book.id === id);

  if (!book) {
    return res.status(404).json({
      error: "Book not found"
    });
  }

  res.json(book);
});


app.post("/books", (req, res) => {
  const newBook = {
    id: books.length
      ? Math.max(...books.map(book => book.id)) + 1
      : 1,

    title: req.body.title,
    author: req.body.author,
    year: req.body.year
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

app.put("/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find(book => book.id === id);

  if (!book) {
    return res.status(404).json({
      error: "Book not found"
    });
  }

  book.title = req.body.title;
  book.author = req.body.author;
  book.year = req.body.year;

  res.json(book);
});
app.delete("/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = books.findIndex(book => book.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Book not found"
    });
  }

  books.splice(index, 1);

  res.json({
    message: "Book deleted"
  });
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
}); */