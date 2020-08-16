module.exports = {
	name: 'help',
	description: 'Справка бота',
	async execute(message, client, botconfig, usePrefix) { 
    let args = message.content.split(" ").slice(1);
    console.log("``" + args + "``")
    if (!args) return;
    var t_log = {
      embed: {
        color: 0x007700,
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
	let userPrefix = "";
	if (usePrefix === "forcustomprefixonly.") {
		userPrefix = "";
	} else { 
		userPrefix = " `" + usePrefix + "`";
	}
	
        var help_p1_embed = {
          embed: {
            color: 0x008be9,

            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            description:
              "Префикс: `" + botconfig.prefix + "` " + userPrefix + ". Для выполнения пишите после префикса любую команду. Например, `" + botconfig.prefix + "about`",
            fields: [
              {
                name: "❓ Справка",
                value:
                  "`about` - о боте " + botconfig.name + "\r\n`report <отчет об ошибке>` - пожаловаться или отправить отчет об ошибке\r\n`idea` - предложить идею для бота\r\n`ping` - пинг\r\n`links` - ссылки на ресурсы",
              },
              {
                name: ":tools: Опции",
                value:
                  "`health` - проверить состояние бота\r\n`srvlist` - список входящих серверов бота\r\n`goals` - цели сервера"
              },
              {
                name: ":hammer: Модератор",
                value:
                  "`prune <кол-во>` - удалить сообщения\r\n`ban` - забанить кого-то\r\n`kick` - выгнать кого-то\r\n`warn` - выдать кому-то предупреждение\r\n`avatar` - мой аватар\r\n`user` - о пользователе\r\n`server` - о сервере\r\n`channel` - о текстовом канале"
              }
            ],
            footer: {
              text:
                "Версия " +
                botconfig.version +
                " (" +
                botconfig.date +
                "), проект основан на Highflash | Страница 1 из 3"
            }
          }
        };
        var help_p2_embed = {
          embed: {
            color: 0x008be9,

            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            description:
              "Префикс: `" + botconfig.prefix + "` " + userPrefix + ". Для выполнения пишите после префикса любую команду. Например, `" + botconfig.prefix + "about`",
            fields: [
              {
                name: "👬 Развлечения",
                value:
                  '`8ball <вопрос>` - игра "Шар судьбы"\n`meme` - рандомные мемы\n`photo` - мир фотографий\n`remoji` - рандомные эмоджи\r\n`say` - сказать что-нибудь от имени бота'
              },
              {
                name: "Другое",
                value:
                  "`reverse <текст>` - реверс\r\n`binary <текст>` - конвертация в двоичный код\r\n`calc <выражение>` - калькулятор\r\n`wiki <поиск>` - поиск в Википедии\n`weather <поиск>` - погода"
              }
            ],
            footer: {
              text:
                "Версия " +
                botconfig.version +
                " (" +
                botconfig.date +
                "), проект основан на Highflash | Страница 2 из 3"
            }
          }
        };
        var help_p3_embed = {
          embed: {
            color: 0x008be9,

            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            description:
              "Префикс: `" + botconfig.prefix + "` " + userPrefix + ". Для выполнения пишите после префикса любую команду. Например, `" + botconfig.prefix + "about`",
            fields: [
              {
                name: "⚙️ Настройки (только для администраторов)",
                value:
                  '`settings -prefix <префикс>` - задать пользовательский префикс'
              },
            ],
            footer: {
              text:
                "Версия " +
                botconfig.version +
                " (" +
                botconfig.date +
                "), проект основан на Highflash | Страница 3 из 3"
            }
          }
        };
    client.channels.cache.get(botconfig.logs_channel).send(t_log);
    let hlp_m = await message.channel.send(help_p1_embed);
    await hlp_m.react("1️⃣");
    await hlp_m.react("2️⃣");
	await hlp_m.react("3️⃣");
    const collector = hlp_m.createReactionCollector(
      (reaction, user) =>
        reaction.emoji.name === "1️⃣" ||
        (reaction.emoji.name === "2️⃣" && user.id == message.author.id) || (reaction.emoji.name === "3️⃣" && user.id == message.author.id),
      { time: 40000 }
    );
    collector.on("collect", async r => {
      switch (r.emoji.name) {
        case "1️⃣":
          await hlp_m.edit(help_p1_embed);
          break;
        case "2️⃣":
          await hlp_m.edit(help_p2_embed);
          break;
		case "3️⃣":
          await hlp_m.edit(help_p3_embed);
          break;
      }
    });
}};
