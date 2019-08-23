const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
  token: 'xoxb-724695465043-724699644722-LinCAuDlYOoNN13hKhtvzDJP',
  name: 'cesinhabot'
});

// Start Handler
bot.on('start', () => {
  const params = {
    icon_emoji: ':robot:'
  };

  bot.postMessageToChannel('general','Ola! eu sou o bot Cesinha', params);
});

// Error Handler
bot.on('error', err => console.log(err));
