module.exports = {
	name: 'channel',
	description: 'Показывает информацию о текущем канале',
	execute(message, client, strftime, botconfig) { 
    var t_log = {
      embed: {
        color: 0x2200ff,
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
      var parentes = "";
      var topic = "";
      var nsfwwarn = "";
      if (!message.channel.topic) {
        topic = "Отсутствует";
      } else {
        topic = message.channel.topic;
      }
      if (!message.channel.parent) {
        parentes = "Без категории";
      } else {
        parentes = message.channel.parent;
      }
      if (message.channel.nsfw == false) {
        nsfwwarn = "";
      } else {
        nsfwwarn = "🔞 **На этом канале может содержать контент 18+. Так что, поосторожнее.**";
      }

      var ci_info = {
        embed: {
          color: 0x7b50ff,
          author: {
            name: 'О текстовом канале "' + message.channel.name + '"',
            icon_url: client.user.avatarURL()
          },
          description: nsfwwarn,
          fields: [
            {
              name: "ID",
              value: message.channel.id
            },
            {
              name: "📄 Описание",
              value: topic
            },
            {
              name: "🌳 Категория",
              value: parentes
            }
          ],
          footer: {
            text:
              "Текстовой канал создан " +
              strftime(
                "%d.%m.%Y в %H:%M МСК",
                new Date(
                  new Date(message.channel.createdTimestamp).toLocaleString(
                    "en-US",
                    { timeZone: "Europe/Moscow" }
                  )
                )
              )
          }
        }
      };
      message.channel.send(ci_info);
	}
}
