const SlackBot = require("slackbots");
const axios = require("axios");
// const fs = require('fs')

const bot = new SlackBot({
  // * lembrar de nao subir o token
  // Token para hackatober
  token: "", // * pegar o token separado
  name: "cesinhabot"
});

// Start Handler
bot.on("start", () => {
  const params = {
    icon_emoji: ":robot:"
  };

  bot.postMessageToChannel("general", "Ola! eu sou o bot Cesinha", params);
});

// Error Handler
bot.on("error", err => console.log(err));

// cria o modelo de json do horario
let horario = {
  Canal: "",
  Segunda: [],
  Terca: [],
  Quarta: [],
  Quinta: [],
  Sexta: []
};

// TODO: arrumar esse erro bizonho
// Message Handler
bot.on("message", data => {
  if (data.text.includes("Segunda")) {
    data.text.replace("Segunda:", "");
    const aulas = data.text.split(",");
    horario.Segunda = aulas;
  }
});
