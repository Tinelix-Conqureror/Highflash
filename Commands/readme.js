module.exports = {
	name: 'readme',
	description: 'Руководство участника сервера Tinelix Team',
	async execute(message, client) { 
	if (message.author.id !== "484921597015359488") return;
    var chsname_embed = {
      embed: {
        color: 0x00a4d6,
        author: {
          name: "Справочная информация сервера"
        },
        description:
          "<#716943235431268385> - Журнал вход/выхода участников и перехода участников на новый уровень",
        fields: [
          {
            name: "Main (Главное)",
            value:
              "**<#716943914875092994> - правила сервера**\n<#718395547870036058> - канал с справочной информацией (на данный момент Вы уже здесь)\n<#739851089540546620> - новости с уже \"подписанных\" мной серверов\n<#716948512906149901> - новостная лента\n<#716944103559921685> - журнал страйков или, иначе говоря, предупреждений о нарушениях правил"
          },
          {
            name: "Commincation (Общение)",
            value:
              "<#716944393466019878> - (это понятно)\n<#716944492661571623> - канал для общения без ограничений (аналог оффтопа и щитпостинга)\n<#732517901306691595> - тоже самое, но только NSFW под запретом"
          },
          {
            name: "Voice (Голосовые каналы)",
            value:
              "Voice - голосовой чат\nMusic - музыка\nStream - стримы или радиотрансляция\nStream 2 - второй канал со стримами\nAFK - AFK-канал с таймаутом в 1 час"
          },
          {
            name: "Hobby (любимые занятия)",
            value:
              "<#741542011068350474> - игра в города. Правила просты, но не больше одного раза за 2 дня написать город, заканчивающую на какую букву.\n<#741542076033794120> - рекурсия в текстовом канале\n<#741542293407924242> - увлечение музыкой, например, игра на гитаре или создание композиций на FL Studio\n<#718114696968011856> - канал на тему телевидения, радио и ИТВ\n<#716944624610050128> - обсуждение процесса игры (например, Minecraft, Need for Speed, Geometry Dash, osu)\n<#741544328668774499> - канал, где можно присылать сюда свои фотки (своеобразный аналог Instagram)"
          },
          {
            name: "Advertisement (рекламная площадка)",
            value:
              "Всего четыре канала. Первые три - пиар YouTube-каналов, Discord-серверов, групп ВКонтакте. Четвертый - ссылки на другие сайты, например, Telegram-канал (пиар разрешен только для участников с ролями \"Member\" и выше.)\n\nВсе остальное - административные каналы."
          },
          {
            name: "Other (Другое)",
            value:
              "<#716998557575413802> - выбор цветов для себя"
          },
        ],
        footer: {
          text:
            "Последние изменения: 8 августа 2020 г., 11:54 МСК | Часть 1. Наименования каналов"
        }
      }
    };
    var rlsname_embed = {
      embed: {
        color: 0x00a4d6,
        author: {
          name: "Справочная информация сервера"
        },
        description:
          '**Owner** - владелец сервера\n\n**Administrative Bots** - административные боты\n\n**Bots** - боты без административных прав\n\n**Adminstrator** - (это и так понятно)\n\n**Junior administrator** - младший администратор\n\n**Super famous person** - суперизвестная личность.\nКак получить? Роль выдается только тем людям, кого я хорошо знаю на протяжении 2-3 лет.\n\n**Linuxoid** - (понятно, что это за роль)\nКак получить эту роль? Вы должны отправить скриншот, который доказывает Ваше использование Linux на постоянной основе. Я Вас прошу, только не Android, а присылайте свежий скриншот только нормальных дистрибутивов. Неважно, скриншот рабочего стола любимого окружения или скриншот открытых окон. Под скриншотом не забывайте указывать имя дистрибутива Linux. Все это отправляйте в личку (<@484921597015359488>). Но если у меня личка закрыта, добавляйте в друзья.\n\n**Heightened self-esteem** - люди с завышенным ЧСВ\n\n**My longtime subscriber** - мой давний подписчик\nКак получить? Получить роль можно только если Вы подписались на наш канал более 1 года. Если что, сообщите в личку <@484921597015359488>.\n\n**My subscriber** - мой подписчик\nКак получить? Получить можно, отправив в ЛС (<@484921597015359488>) скриншот с кнопкой "Вы подписаны". [YouTube-канал.](https://www.youtube.com/channel/UCSPjn_Y0pLdPy6Ncb9NAdww/) Если личка закрыта, добавляйте меня в друзья.\n\n**Member** - Участники\n\n**Newbie** - недавно зашедшие в наш сервер, иногда новореги. Роль теперь снимается спустя 5 дней после вступления, иногда с задержкой.',
        footer: {
          text:
            "Последние изменения: 8 августа 2020 г., 08:53 МСК | Часть 2. Наименования ролей"
        }
      }
    };
    var clrname_embed = {
      embed: {
        color: 0x00a4d6,
        author: {
          name: "Справочная информация сервера"
        },
        description:
          "**Красный, синий и зеленый цвета** - `juni!red`, `juni!green`, `juni!blue`\n\nТемно-красный, коричневый, темно-оливковый, темно-зеленый, темно-изумрудный, темно-голубой, темно-синий, темно-фиолетовый и темно-розовый - `juni!dark-red`, `juni!brown`, `juni!dark-olive`, `juni!dark-green`, `juni!dark-cyan`, `juni!dark-blue`, `juni!dark-violet`, `juni!dark-rose`\n\nОранжевый, оливковый, желтый, изумрудный, голубой, фиолетовый, розовый - `juni!orange`, `juni!olive`, `juni!yellow`, `juni!cyan`, `juni!sky-blue`, `juni-violet`, `juni!rose`\n\nСеребристый, персиковый и цвет кардинала - `juni!silver`, `juni!apricot`, `juni!cardinal`",
        footer: {
          text:
            "Последние изменения: 5 июня 2020 г., 13:50 МСК | Часть 3. Наименования команд для выбора цвета"
        }
      }
    };
    var botprefixes_embed = {
      embed: {
        color: 0x00a4d6,
        author: {
          name: "Справочная информация сервера"
        },
        description:
          "**Highflash** - `h.`, `xs.` (для справки - `h.help`)\nJuniperBot - `juni!` (для справки - `juni!help`)\nRythm - `r.` (для справки - `r.help`)\nNotSoBot - `.` (для справки - `.help`)\nShoBlet - `Sho` (для справки - `ShoHelp`)\nm1t3nk0v.b0t - `m!` (для справки `m!help`)\nZeolite - `z/` (для справки - `z/help`)\nSuperMaxusa Bot - `sm!` (для справки - `sm!help`)\nFlex - `f.` (для справки - `f.help`)\nSeo - `s!` (для справки - `s!help`)\nShindows 10 - `10!` (для справки - `10!help`)",
        footer: {
          text:
            "Последние изменения: 8 августа 2020 г., 11:54 МСК | Часть 4. Префиксы ботов"
        }
      }
    };
    message.channel.send(chsname_embed);
    message.channel.send(rlsname_embed);
    message.channel.send(clrname_embed);
    message.channel.send(botprefixes_embed);
}}
