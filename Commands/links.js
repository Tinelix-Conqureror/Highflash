module.exports = {
	name: 'links',
	description: 'Ссылки на наши ресурсы',
	execute(message, client, botconfig) { 
    var t_log = {
      embed: {
        color: 0x2255ff,
        author: {
          name: "Commands Log"
        },
        description:
          message.author.tag +
          " typing `" +
          message.content +
          "` on " +
          message.guild.name +
          "/" +
          message.channel.name,
        fields: [
          {
            name: "Server ID",
            value: message.guild.id
          },
          {
            name: "Channel ID",
            value: message.channel.id
          },
          {
            name: "User ID",
            value: message.author.id
          }
        ]
      }
    };
      client.channels.cache.get(botconfig.logs_channel).send(t_log);
      var links_embed = {
        embed: {
          color: 0xaa88ff,
          author: {
            name: "Ссылки на наши ресурсы",
            icon_url: client.user.avatarURL()
          },
          description: "[Discord-сервер поддержки](https://discord.gg/RDg3Fh)\n\n[Изучить исходные коды в репозитории Highflash](https://github.com/tinelix/highflash)\n[Пригласить бота на сервер](https://discord.com/api/oauth2/authorize?client_id=714494360925896805&permissions=8&scope=bot)",
        }
      };
      message.channel.send(links_embed);
	}
}
