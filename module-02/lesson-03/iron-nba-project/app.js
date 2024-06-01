express = require("express");
hbs = require("hbs");
path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/players", (req, res) => {
  res.render("players", {
    players: [
      {
        name: "Lebron James",
        team: "Los Angeles Lakers",
        position: "SF",
      },
    ],
  });
});

app.get("/teams", (req, res) => {
  res.render("teams");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
