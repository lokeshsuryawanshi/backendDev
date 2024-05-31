import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Whats the text for QR?'
    }];

inquirer.prompt(questions)
    .then(answers => {
        const text = answers.name;

        qr.image(text, { type: 'png' }) // Specify output format (png, svg, eps, pdf)
            .pipe(fs.createWriteStream('myqrcode.png'));


        fs.writeFile('myfile.txt', text, (err) => {
            if (err) throw err;
            console.log("Successfully wrote to the file!");
        });
    }
    ); 