module.exports = {
	name: 'ping',
	description: 'Пинг',
	execute(message, client, botconfig) { 
          var ping_embed = {
          embed: {
            color: 0x3399cc,
            author: {
              name: "Пинг",
              icon_url: client.user.avatarURL()
            },
            description: "<@"+ message.author.id + ">, понг! Средняя задержка составляет около " + Math.round(client.ws.ping) + " миллисекунд. Более подробную информацию узнайте в команде `" + botconfig.prefix + "health`."
          }
        };
        message.channel.send(ping_embed);
  }
};