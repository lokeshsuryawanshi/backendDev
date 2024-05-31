import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("solution.ejs", { numberOfLetters: numLetters });
});
app.post("/submit", (req, res) => {
  const total = req.body.fName.length + req.body.lName.length;
  res.render('index', { letters: len});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



