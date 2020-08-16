module.exports = {
	name: 'meme',
	description: 'Показывает случайные мемы с Reddit-источников',
	execute(message, client, randomPuppy, botconfig) { 
	    var t_log = {
      embed: {
        color: 0xff8800,
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
    // In this array,
    // you can put the subreddits you want to grab memes from
    const subReddits = ["dankmeme", "meme", "me_irl"];
    // Grab a random property from the array
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    // Get a random image from the subreddit page
    const imgaddr = async function(a, b) {
      await randomPuppy(random).then(url => {
        var meme_embed = {
          embed: {
            color: 0x3399cc,
            author: {
              name: "Рандомные мемы",
              icon_url: client.user.avatarURL()
            },
            image: {
              url: url
            },
            footer: {
              text: "Источник: https://reddit.com/r/" + random
            }
          }
        };
        message.channel.send(meme_embed);
      });
    };
    imgaddr();
	}
}
