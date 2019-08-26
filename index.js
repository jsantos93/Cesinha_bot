const SlackBot = require('slackbots');
const axios = require('axios');

// 
const bot = new SlackBot({
  // * lembrar de nao subir o token
  token: '',  // * pegar o token separado  
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

// começou a bugar e eu to com sono
// TODO: arrumar esse erro bizonho
// Message Handler
bot.on("message", data => {
  if (message == "Novo horario" || message == "Novo horário") {
    bot.postMessageToChannel(data.channel, 'Aulas de segunda: ')

    bot.on('message', data => {
      const Segunda = data.text.split(' e ')
      console.log(Segunda)
    })
  }  

})

