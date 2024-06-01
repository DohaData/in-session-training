express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res, next) => {
    console.log("Request IP address: ", req.ip);
    let data = {
        first_favorite: "JavaScript",
        second_favorite: "Node.js",
        third_favorite: "Express.js",
        showFourthFavorite: true,
        fourth_favorite: "React",
        cities: ["New York", "San Francisco", "Austin", "Seattle"],
    };
  res.render("index", {
    title: "My favorite programming languages",
    data,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
