module.exports = {
	name: 'eval',
	description: 'Отладка кода JavaScript (только для разработчиков!)',
	execute(message, client) { 
    let args = message.content.split(" ").slice(1);
	var evalforowneronly_errmsg = {
        embed: {
          color: 0xff0000,
          author: {
            name: "Ошибка",
            icon_url: client.user.avatarURL()
          },
	  description: 'Команда `h.eval` недоступна обычным пользователям и используется исключительно для разработчиков.',
        }
      };
    if (
      message.author.id !== "484921597015359488" && message.author.id !== "743841271818485901"
    )
      return message.channel.send(evalforowneronly_errmsg);

    try {
	  var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
      var evalresult_embed = {
        embed: {
          color: 0xaa88ff,
          author: {
            name: "Отладчик",
            icon_url: client.user.avatarURL()
          },
          fields: [
            {
              name: "Листинг",
              value: "```" + message.content.split(" ").slice(1).join(" ") + "```"
            },
            {
              name: "Результат",
              value: "```js\n" + evaled + "```"
            }
          ],
          footer: {
            text:
              'Команда "eval" недоступна обычным пользователям и используется исключительно для разработчиков.'
          }
        }
      };
	    
    console.log('\n\nEval content:\n' + evaled + '\n\n')
      message.channel.send(evalresult_embed);
    } catch (err) {
      var evalerr_embed = {
        embed: {
          color: 0xaa88ff,
          author: {
            name: "Отладчик",
            icon_url: client.user.avatarURL()
          },
          fields: [
            {
              name: "Листинг",
              value: "```" + message.content.split(" ").slice(1).join(" ") + "```"
            },
            {
              name: "Описание ошибки",
              value: "```js\n" + err + "```"
            }
          ],
          footer: {
            text:
              'Команда "eval" не доступна обычным пользователям и используется исключительно для разработчиков.'
          }
        }
      };
      message.channel.send(evalerr_embed);
    }
}
}