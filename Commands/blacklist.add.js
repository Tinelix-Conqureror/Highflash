const fs = require("fs");
const { prefix } = require("../JSON/botconfig.json");

module.exports = {
  name: "blacklist.add",
  guildOnly: true,
  usage: `[wanted prefix]`,
  description: "Заносит в черный список пользователя для запрета или ограничения использования бота",
  execute(client, message, blacklist) {
	  
	let args = message.content.split(" -add ").slice(1);
	  
	let blerrEmbed = {
		embed: {
		color: 0xff0000,
		author: {
			name: "Ошибка",
			icon_url: client.user.avatarURL()
		},
		description:
			`Вы не можете выполнить эту команду, поскольку занести в черный список может только сам владелец и разработчик бота.`
		}
	};
	if (message.author.id !== "484921597015359488" || message.author.id !== "604363361085292560") return message.channel.send(blerrEmbed);
	try {
		console.log(args[0].length);
	} catch(ex) {
    if (args == "") {
    let blerr01Embed = {
     embed: {
      color: 0xff8800,
      author: {
        name: "Черный список",
        icon_url: client.user.avatarURL()
      },
      description:
        `Вы должны указать ID участника.`
    }
  };
      message.channel.send(blerr01Embed);
      return;
    }};
let block_timeout = new Date(message.createdAt + 604800000);
    blacklist[args[0]] = {
      id: args[0],
	  user: message.author.tag,
    block_timeout: block_timeout
    };

    fs.writeFile("./JSON/blacklist.json", JSON.stringify(blacklist), err => {
      if (err) console.log(err);
    });

let argsUser = client.users.cache.find(user => user.id === args[0]);

    let blacklistEmbed = {
     embed: {
      color: 0xff8800,
      author: {
        name: "Черный список",
        icon_url: client.user.avatarURL()
      },
      description:
        `Пользователь ` + argsUser.tag + ` занесен в черный список.`
    }
  };
    message.channel.send(blacklistEmbed);
  }
};
