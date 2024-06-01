import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = 3000;
const apiKey = process.env.RAPIDAPI_KEY;
const hostKey = process.env.RAPIDAPI_HOST;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { verse: null });
});

app.post('/get-verse', async (req, res) => {
  const { chapter, verse } = req.body;
  const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${verse}/`;


  const options = {
    method: 'GET',
    url: url,
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': hostKey
    }
  };

  try {
    const response = await axios.request(options);
    const verseData = response.data;

    // Limit to the first two translations
    const limitedVerseData = {
      id: verseData.id,
      verse_number: verseData.verse_number,
      chapter_number: verseData.chapter_number,
      text: verseData.text,
      translations: verseData.translations.slice(0, 2)
    };

    res.render('index', { verse: limitedVerseData });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
