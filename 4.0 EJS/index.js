import express  from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000; 
const app = express()

app.set('view engine', 'ejs');



app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay()
    console.log(day); 
    
    let type = 'a weekday';
    let adv =  "it's time to work hard";

    if(day === 0 || day === 6){
        type = 'the weekend';
        adv = "it's time to take break and party"
    }
    res.render('index', { title: type, message: adv});
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
