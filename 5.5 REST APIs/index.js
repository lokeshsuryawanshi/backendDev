import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/


const yourBearerToken = "6b575565-2b54-474d-91b9-bdebe980ce0f";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});


// axios.post(url[, data[, config]])
app.post("/post-secret", async (req, res) => {
  const Nscore = req.body.score;
  const Nsecret = req.body.secret;
  try {
    const result = await axios.post(API_URL + "/secrets/", {
      secret: Nsecret,
      score: Nscore,
    }, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }

});


// axios.put(url[, data[, config]])
app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  const Nscore = req.body.score;
  const Nsecret = req.body.secret;
  try {
    const result = await axios.put(API_URL + "/secrets/" + searchId, {
      secret: Nsecret,
      score: Nscore,
    }, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  const Nscore = req.body.score;
  const Nsecret = req.body.secret;
  try {
    const result = await axios.patch(API_URL + "/secrets/" + searchId, {
      secret: Nsecret,
      score: Nscore,
    }, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.delete(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
