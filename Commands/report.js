module.exports = {
	name: 'report',
	description: 'Пожаловаться боту',
	execute(message, client, botconfig) { 

	var args_err_embed = {
        embed: {
            color: 0xff0000,
            author: {
                name: "Ошибка",
                icon_url: client.user.avatarURL()
            },
			description: "Чтобы написать отчет об ошибке, необходимо написать текст после команды `" +  botconfig.prefix +"report`."
		}
	};
    if(!message.content.split(" ").slice(1).join()) return message.channel.send(args_err_embed)

	var reportmessage_embed = {
        embed: {
            color: 0xff0055,

            author: {
                name: "Служба безопасности " + botconfig.name,
                icon_url: client.user.avatarURL()
            },
  description: message.author.tag + " отправил жалобу: \"" + message.content.split(" ").slice(1).join(" ") + "\"",
  	   fields: [
    {
           name: "Имя и ID сервера",
           value: message.guild.name + " | " + message.guild.id,
	},
    {
           name: "Имя и ID канала",
           value: message.channel.name + " | " + message.channel.id
    },
    {
        name: "ID пользователя",
        value: message.author.id
    },
    ]
}};

	var t_log = {
			embed: {
			color: 0x2255ff,
			author: {
			name: "Commands Log",
		},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
		},
      ]
	}}
	var supportbug_embed = {
        embed: {
            color: 0xff0055,
            author: {
                name: "Служба безопасности " + botconfig.name,
                icon_url: client.user.avatarURL()
            },
			description: "❓ Автор бота ответит через некоторое время, дождитесь ответа.\n\nЖалобы, в котором содержатся нецензурная брань, угрозы или оскорбления, не приветствуются. За это карается \"черным списком\" вплоть до пожизненного срока. Благодарим Вас за внимание."
		}
	};
    message.channel.send(supportbug_embed);
			client.channels.cache.get(botconfig.logs_channel).send(t_log);

let str = "484921597015359488"; 

      client.users.fetch(str).then(user => {
        user.send(reportmessage_embed);
      });

      let str2 = "604363361085292560"

      
      client.users.fetch(str2).then(user => {user.send(reportmessage_embed)}
        )
}};
