module.exports = {
	name: 'help',
	description: 'Справка бота',
	async execute(message, client, botconfig) { 
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
      if (message.author.id === "484921597015359488") {
        var help_p1_embed = {
          embed: {
            color: 0x008be9,

            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            description:
              "Префикс: `h.` `h!` `хs.` `хs!`. Для выполнения пишите `<префикс><имя команды>`",
            fields: [
              {
                name: "❓ Справка",
                value:
                  "`about` - о боте Highflash\r\n`report <описание жалобы>` - пожаловаться\r\n`donate` - помочь проекту\r\n`links` - ссылки на наши ресурсы"
              },
              {
                name: ":tools: Опции",
                value:
                  "`health` - проверить состояние бота\r\n`srvlist` - список входящий серверов бота\r\n`goals` - цели сервера"
              },
              {
                name: ":hammer: Модератор",
                value:
                  "`prune <кол-во>` - удалить сообщения\r\n`ban` - забанить кого-то\r\n`kick` - выгнать кого-то\r\n`warn` - выдать кому-то предупреждение\r\n`avatar` - мой аватар\r\n`user` - о пользователе\r\n`server` - о сервере"
              }
            ],
            footer: {
              text:
                "Версия " +
                botconfig.version +
                " (" +
                botconfig.date +
                ") | Страница 1 из 2"
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
              "Префикс: `h.` `h!` `xs.` `xs!`. Для выполнения пишите `<префикс><имя команды>`",
            fields: [
              {
                name: "👬 Развлечения",
                value:
                  '`8ball <вопрос>` - игра "Шар судьбы"\n`meme` - рандомные мемы\n`photo` - мир фотографий\n`remoji` - рандомные эмоджи\r\n`say` - сказать что-нибудь от имени бота'
              },
              {
                name: "🎵 Аудиоплеер",
                value:
                  "`audio play <поиск>` - воспроизведение трека\r\n`audio stop` - остановка трека и выход из голосового канала"
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
                ") | Страница 2 из 2"
            }
          }
        };
      } else {
        var help_p1_embed = {
          embed: {
            color: 0x008be9,

            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            description:
              "Префикс: `h.` `h!` `xs.` `xs!`. Для выполнения пишите `<префикс><имя команды>`",
            fields: [
              {
                name: "❓ Справка",
                value:
                  "`about` - о боте Highflash\r\n`report <описание жалобы>` - пожаловаться\r\n`donate` - помочь проекту\r\n`links` - ссылки на наши ресурсы",
              },
              {
                name: ":tools: Опции",
                value:
                  "`health` - проверить состояние бота\r\n`srvlist` - список входящий серверов бота\r\n`goals` - цели сервера"
              },
              {
                name: ":hammer: Модератор",
                value:
                  "`prune <кол-во>` - удалить сообщения\r\n`ban` - забанить кого-то\r\n`kick` - выгнать кого-то\r\n`warn` - выдать кому-то предупреждение\r\n`avatar` - мой аватар\r\n`user` - о пользователе\r\n`server` - о сервере\n`weather <поиск>` - погода"
              }
            ],
            footer: {
              text:
                "Версия " +
                botconfig.version +
                " (" +
                botconfig.date +
                ") | Страница 1 из 2"
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
              "Префикс: `h.` `h!` `xs.` `xs!`. Для выполнения пишите `<префикс><имя команды>`",
            fields: [
              {
                name: "👬 Развлечения",
                value:
                  '`8ball <вопрос>` - игра "Шар судьбы"\n`meme` - рандомные мемы\n`photo` - мир фотографий\n`remoji` - рандомные эмоджи\r\n`say` - сказать что-нибудь от имени бота'
              },
              {
                name: "🎵 Аудиоплеер",
                value:
                  "`audio play <ссылка или поисковой запрос>` - воспроизведение трека\r\n`audio leave` - остановка трека и выход из голосового канала"
              },
              {
                name: "Другое",
                value:
                  "`reverse <текст>` - реверс\r\n`binary <текст>` - конвертация в двоичный код\r\n`calc <выражение>` - калькулятор\r\n`wiki <поиск>` - поиск в Википедии"
              }
            ],
            footer: {
              text:
                "Версия " +
                botconfig.version +
                " (" +
                botconfig.date +
                ") | Страница 2 из 2"
            }
          }
        };
      }
    client.channels.cache.get("564022728143929370").send(t_log);
    let hlp_m = await message.channel.send(help_p1_embed);
    await hlp_m.react("1️⃣");
    await hlp_m.react("2️⃣");
    const collector = hlp_m.createReactionCollector(
      (reaction, user) =>
        reaction.emoji.name === "1️⃣" ||
        (reaction.emoji.name === "2️⃣" && user.id == message.author.id),
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
      }
    });
}};
