const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const querystring = require('querystring');

const app = express();
const port = 3001;

const clientId = '1214987228883714139';
const clientSecret = 'hcrugkM9xme8l_vqrmtCKZkYMUEuf1vr';
const redirectUri = 'http://localhost:3001/callback';

app.use(cors());
app.use(bodyParser.json()); // Добавляем body-parser для работы с JSON

app.get('/login', (req, res) => {
  res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=http://localhost:3001/callback&response_type=code&scope=identify`);
});
app.get('/callback', (req, res) => {
  const code = req.query.code; // Получаем параметр code из запроса

  // Перенаправляем на http://localhost:3000/ с параметром code
  res.redirect(`http://localhost:3000/?code=${code}`);
});
app.get('/guildMembersCount/:guildId', async (req, res) => {
  const guildId = req.params.guildId;
  try {
      const response = await axios.get(`https://discord.com/api/v9/guilds/${guildId}`, {
          headers: {
              Authorization: 'Bot MTIxNDk4NzIyODg4MzcxNDEzOQ.Gl5ARI.7mXIy2L5pUZBLRy11abd_crNVayD8zXaEJBz94'
          }
      });
      const membersCount = response.data.member_count;
      res.json({ membersCount });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching guild members count' });
  }
});
app.post('/callback', async (req, res) => {
  const code = req.body.code; // Извлекаем код из тела запроса

  const data = querystring.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri,
    scope: 'identify'
  });

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  try {
    const response = await axios.post('https://discord.com/api/oauth2/token', data, config);
    const accessToken = response.data.access_token;
  
    // Действия после успешной авторизации пользователя через OAuth2
    const userInfoResponse = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const user = userInfoResponse.data;
    
    res.json(user); // Отправляем объект пользователя в формате JSON
  } catch (error) {
    console.error(error);
    res.status(500).send('Error during authorization');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});