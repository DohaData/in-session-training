const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const port = 3000;
const User = require("./models/User.model");
const Product = require("./models/Product.model");

const users = [
  {
    username: "Alice",
    email: "alice.wonderland@gmail.com",
    password: "hello123",
  },
  { username: "Bob", email: "bob@gmail.com", password: "hello123" },
  { username: "Charlie", email: "charlie@gmail.com", password: "hello123" },
];

const products = [
  { name: "iPhone", price: 500, description: "Awesome phone" },
  { name: "Samsung", price: 400, description: "Awesome phone" },
  { name: "Huawei", price: 300, description: "Awesome phone" },
];

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
hbs.registerPartials(__dirname + "/views/partials");

mongoose
  .connect("mongodb://localhost:27017/demo-app")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  //   .then(() => {
  //     User.insertMany(users);
  //     Product.insertMany(products);
  //   })
  //     .then(() => {
  //     console.log("Users and Products inserted");
  //     })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

app.get("/", (req, res) => {
  Product.find().then((products) => {
    res.render("index", { products });
  });
});

app.get("/products/:id", (req, res) => {
  Product.findById(req.params.id).then((product) => {
    res.render("product", { product });
  });
});

app.get("/products", (req, res) => { //display a  form to add product
    res.render("create-products");
});
app.post("/products", (req, res) => { // create a new product
    const data = {
        name: req.body.name,
        price: Number(req.body.price),
        description: req.body.description,
    };
    Product.create(data).then(() => {
        res.redirect("/");
    }).catch((err) => {
        console.log(err);
    });
});

app.get("/filter-products", (req, res) => {
    if (req.query.minPrice && req.query.maxPrice) {
        Product.find({
            price: { $gte: req.query.minPrice, $lte: req.query.maxPrice },
        })
            .then((products) => {
                console.log(products);
                res.render("filter-products", { products });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send("Internal Server Error");
            });
    } else {
        res.render("filter-products");
    }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
