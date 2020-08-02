module.exports = {
	language: 'Russian',
	localization_ver: '0.02 Alpha',
	introductory_sample: 'yes',
	
	8ball: {
		title: 'Шар судьбы',
		answer_f: '💬 Ответ',
	},
	
	about: {
		title: 'О боте Highflash',
		version_f: 'Версия',
		developer_f: 'Разработчик',
		source_f: 'Исходные коды',
		copyright_f: 'Авторские права',
		copyright_v: 'Copyright © Tinelix, 2019-2020. Все права защищены.'
	},
	
	advertisement: {
		add: {
			errtitle: 'Ошибка',
			errdesc: '🚫 Команда будет доступна только, если Вы сделаете пожертвование.\n\nПодробнее: `h.donate` + ввод.'
		},
	},
	
	audio: {
		leave: {
			title: 'Аудиоплеер',
			msgdesc: '⏹️ Прослушивание трека остановлено.\nДля воспроизведения трека введите `h.audio play`'
		},
		play: {
			title: 'Аудиоплеер',
			error: {
				c1: ':no_entry_sign: <@' +message.author +'>, прежде чем прослушать трек, обязательно войдите в любой голосовой канал!',
				c2: ':no_entry_sign: Ошибка открытия ссылки ' +message.content.split(' play ').slice(1).join(' ') + '. \nПроверьте адрес ссылки и повторите попытку позднее.\nЕсли до сих пор не удается получить доступ к ссылке, введите другой адрес.',				
				c3: ':no_entry_sign: <@' + authorId + '>, по Вашему запросу либо ничего не найдено, либо с поиском произошла ошибка. Может, попробуете еще раз?',
			},
			loadingtext: ':hourglass_flowing_sand: Загрузка...',
			noinfotext: '(Нет информации)',
			playingdesc: '▶ <@' + authorId + '>: проигрывается **' + results[0].title + '** на ' + streamOptions.bitrate / 1000 + ' kbps',
			author_f: 'Автор',
			viewscount_f: 'Просмотров',
			publisheddate_f: 'Опубликовано'
		}
	},
	
	avatar: {
		title: 'Аватар пользователя ' + message.author.tag,
	},
	
	ban: {
		error: {
			c1: '🚫 Невозможно выполнить действия, поскольку бот/Вы не имеете права администратора.',
			c2: '🚫 Невозможно выполнить действие, поскольку в Вашем сервере нет этого участника, либо этот участник покинул Ваш сервер.',
			c3: '🚫 Для того, чтобы забанить участника, напишите `h.ban <упоминание> <причина>`',
			c4: '🚫 Произошла неизвестная ошибка. Повторите еще раз.'
		},
		title: 'Модерация | ' + user1.tag,
		bannedby_f: 'Забанен пользователем',
		reason_f: 'Причина',
		noreason: 'Не указано',
		noreason2: 'Причина не указана',
	},
	
	binary: {
		title: 'Конвертация в двоичный код'
	},
	
	calc: {
		error: {
			c1: 'Вы должны после команды `h.calc` указать математическое выражение.',
			c2: 'Ошибка вычисления'
		},
		usage_f: 'Пример'
	},
	
	channel: {
		nsfw_warn: '🔞 **На этом канале может содержать контент 18+. Так что, поосторожнее.**',
		title: 'О текстовом канале "' + message.channel.name + '"',
		topic_f: '📄 Описание',
		parent_f: '🌳 Категория',
	},
	
	user: {
		activity: {
			online: statuses[argsUser.presence.status],
			playing: `Играет в **${argsUser.presence.activities[0].name}**`,
			streaming: `Ведет стрим **${argsUser.presence.activities[0].name}**\n${argsUser.presence.activities[0].url}`,
			listening: `Слушает в Spotify **${argsUser.presence.activities[0].state} - ${argsUser.presence.activities[1].details}**`,
			watching: `Смотрит **${argsUser.presence.activities[0].name}**`,
			custom_status: `Пользовательский ${custstat}`,
			playing_cs: custemoji + `Играет **${argsUser.presence.activities[1].name}**`,
			streaming_cs: custemoji + `Ведет стрим **${argsUser.presence.activities[1].name}**`,
			listening_cs: custemoji + `Слушает в Spotify **${argsUser.presence.activities[1].state} - ${argsUser.presence.activities[1].details}**`,
			watching_cs: custemoji + `Смотрит **${argsUser.presence.activities[1].name}**`
		}
		status: {
			online: 'Онлайн',
			idle: `Отошел`,
			dnd: `Не беспокоить`,
			offline: `Оффлайн`
		},
		title: 'О пользователе "' + argsUser.tag + '"'
		notavaliable1: 'Отсутствует',
		notavaliable2: 'Отсутствуют',
		about_f: 'О себе',
		status_f: 'Статус:',
		regdate_f: 'Дата регистрации:',
		monthsago: 'мес. назад',
		daysago: 'дн. назад',
		joindate_f: 'Дата входа в сервер',
		moscowtime_designation: 'МСК',
		roles_f: 'Роли',	
	},
	
	server: {
		verifLvl: {
			zero: 'Без ограничений',
			one: 'Упрощенная проверка (1-я степень)',
			two: 'Средняя проверка (2-я степень)',
			three: 'Жесткая проверка (3-я степень)',
			four: 'Строгая проверка (4-я степень)',
		},
		title: 'О сервере "' + message.guild.name + '"',
		owner_f: 'Владелец',
		contents_f: 'Содержимое сервера',
		afkch_f: 'AFK-канал',
		region_f: 'Регион',
		verifLvl_f: 'Степень модерации',
		emojis_f: 'Эмоджи',
		server_created: 'Сервер создан ',
	},
	
	donate: {
		title: 'Пожертвование',
		description: '💵 За донат вы получите:\n1. Команду `h.ads +` для рекламы Вашего сервера!\n\nhttps://donationalerts.com/r/dmitryevpc\n\nМин. - 15 RUB (р.)/6 UAH (укр. гр.)/0.15 USD (долл. США)',
	},
	
	eval: {
		error: {
			title: 'Ошибка',
			c1: 'Команда `h.eval` недоступна обычным пользователям и используется исключительно для разработчиков.',
		},
	},
	
	health: {
		ping: {
			high: 'Бот работает в онлайне, но ответит с большой задержкой.',
			low: 'Бот работает в онлайне, оптимальная задержка.',
		},
		details_f: 'Сведения о хосте, на котором запущен бот',
		memusage_f: 'Используемая память',
		kilobyte_symbol: 'кБ',
		megabyte_symbol: 'МБ',
		platform_f: 'Программная платформа',
		processor_f: 'Процессор'
		network_f: 'Сетевая статистика',
		ping_f: 'Местный пинг',
		milliseconds_symbol: 'мсек',
		uptime_f: 'Время работы',
		botstats_f: 'Статистика бота',
		servers_symbol: 'сервер(ов)',
		users_symbol: 'пользователей',
		onlineusers_symbol: 'активных польз.',
		libused1: 'Highflash использует Node.js версии',
		libused2: ' и Discord.js версии 
	},
	
	help: {
		prefixes: 'Префикс: `h.` `h!` `хs.` `хs!`. Для выполнения пишите `<префикс><имя команды>`',
		help_category: 'Справка',
		tools_category: 'Опции',
		mod_category: 'Модератор',
		entertainment_category: 'Развлечения',
		audioplayer_category: 'Аудиоплеер',
		other_category: 'Другое',
		version: "Версия " + botconfig.version + " (" + botconfig.date + ") | Страница 1 из 2",		
	},
	
	kick: {
		error: {
			c1: '🚫 Невозможно выполнить действия, поскольку бот/Вы не имеете права администратора.',
			c2: '🚫 Невозможно выполнить действие, поскольку в Вашем сервере нет этого участника, либо этот участник покинул Ваш сервер.',
			c3: '🚫 Для того, чтобы кикнуть участника, напишите `h.kick <упоминание>`',
			c4: '🚫 Произошла неизвестная ошибка. Повторите еще раз.',
			title: 'Модерация | ' + user1.tag,
			kickedby_f: 'Кикнут пользователем',
		},
	},
	
	links: {
		title: 'Ссылки на наши ресурсы',
		description: '[Discord-сервер для общения](https://discord.gg/9husXQy)\n[YouTube-канал](https://www.youtube.com/channel/UCSPjn_Y0pLdPy6Ncb9NAdww)\n[ВКонтакте](https://vk.com/tinelixgroup)\n[Twitter](https://twitter.com/tinelix)\n[Telegram](https://t.me/tinelix)\n\n[Исходные коды бота Highflash](https://github.com/tinelix/highflash)\n[Приглашение бота](https://discordapp.com/oauth2/authorize?client_id=634271325057318943&permissions=8&scope=bot)',
	},
	
	meme: {
		title: 'Рандомные мемы',
		source_f: 'Источник: https://reddit.com/r/' + random,
	},
	
	photo: {
		title: 'Мир фотографий',
		source_f: 'Источник: https://reddit.com/r/' + random,
	},
	
	prune: {
		error: {
			c1: 'Пожалуйста, укажите после этой команды любое число от 2 до 100 для удаления.',
			c2: 'Невозможно удалить сообщения, поскольку Вы или бот не имеет прав на управление сообщениями.'
		},
		title: 'Пожалуйста, подождите...',
		description: ':hourglass_flowing_sand: Удаление сообщений...',
	},
	
	remoji: {
		title: 'Рандомные эмоджи',
	},

	report: {
		title: 'Служба безопасности Highflash',
		description: 'Автор бота ответит через некоторое время, дождитесь ответа.'
	},
	
	reverse: {
		title: 'Реверс',
		description: '<@' + message.author.id + '>, пожалуйста, введите любой текст для вывода в обратном порядке.',
	},
	
	say: {
		title: 'Ошибка',
		description: '<@' + message.author.id + '>, пожалуйста, введите после команды `h.say` любое слово или фразу.\n\n**Но будьте осторожны**, каждый раз, когда Вы напишете эту команду, будет высвечиваться тег автора.',
	},
	
	wiki: {
		title: 'Википедия',
		error: {
			c1: 'По Вашему запросу ничего не найдено.\n\nПопробуйте другой запрос.',
			c2: 'Не удается найти результаты.',
			c3: `При выполнении команды возникла ошибка: \`${err.message}\`. Повторите попытку позже.`,
		}
	},
	
}