module.exports = {
	name: 'idea',
	description: 'Предложить идею для бота',
	execute(message, client, botconfig) { 
    	var args_err_embed = {
        embed: {
            color: 0xff0000,
            author: {
                name: "Ошибка",
                icon_url: client.user.avatarURL()
            },
			description: "Чтобы написать предложение идеи, необходимо написать текст после команды `" +  botconfig.prefix +"idea`."
		}
	};
    if(!message.content.split(" ").slice(1).join()) return message.channel.send(args_err_embed)
	var idea_embed = {
        embed: {
            color: 0xff0055,
        author: {
                name: "London Monitor",
                icon_url: client.user.avatarURL()
            },
  description: message.author.tag + " предложил идею для бота London Monitor: \"" + message.content.split(" ").slice(1).join(" ") + "\"",
  	   fields: [
    {
           name: "Имя и ID сервера",
           value: message.guild.name,
	},
    {
           name: "Имя и ID канала",
           value: message.channel.name
    },
    {
        name: "ID пользователя",
        value: message.author.id
    },
    ]
}};

	var ideaSuccesed_embed = {
        embed: {
            color: 0xff0055,
            author: {
                name: "London Monitor",
                icon_url: client.user.avatarURL()
            },
			description: "Предложение идеи отправлено."
		}
	};
    message.channel.send(ideaSuccesed_embed);

client.channels.cache.get(botconfig.logs_channel).send(idea_embed)
  }
}