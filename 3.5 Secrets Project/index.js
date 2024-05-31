import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const correctpassword = "ILoveProgramming";
var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next){
    const userPass = req.body["password"];
    if(userPass === correctpassword){
        userIsAuthorised = true;
    }
    next();
}
app.use(passwordCheck)

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/check', (req, res) => {
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.send('String is invalid.');
    } });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
