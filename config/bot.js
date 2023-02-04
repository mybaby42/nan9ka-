module.exports = {
    emojis: {
        off:     '❌',
        error:   '⚠',
        queue:   '📊',
        music:   '🎶',
        success: '✔',
        report:  '📞',
        setup:   '📝',
        giveaway:'🎉',
        maske:   '🎭',
    },

    discord: {
        token: process.env.TOKEN,
        prefix: process.env.PREFIX,
        invite: `https://discord.com/oauth2/authorize?client_id=${process.env.USER_ID}&scope=bot+applications.commands+identify+guilds+applications.commands.permissions.update&response_type=code&permissions=2080374975`,
        server_support: "https://discord.gg/bNpqrdXNNn",
    },
    colors: {
      none:        "#2F3136",
      red:         "#ff4d4d",
      green:       "#ddcc33",
      uptime:      "#51ff23",
      purpledark:  "#6a006a",
      purplemedium:"#a958a5",
      purplelight: "#c481fb",
      orange:      "#ffa500",
      gold:        "#daa520",
      reddark:     "#8e2430",
      redlight:    "#ff0000",
      bluedark:    "#3b5998",
      cyan:        "#5780cd",
      bluelight:   "#ace9e7",
      aqua:        "#33a1ee",
      pink:        "#ff9dbb",
      greendark:   "#2ac075",
      greenlight:  "#a1ee33",
      white:       "#f9f9f6",
      cream:       "#ffdab9",
    },
    vip_role: ['', ''],
    filters: ['8D', 'gate', 'haas', 'phaser', 'treble', 'tremolo', 'vibrato', 'reverse', 'karaoke', 'flanger', 'mcompand', 'pulsator', 'subboost', 'bassboost', 'vaporwave', 'nightcore', 'normalizer', 'surrounding'],
    owner:  ['831934465609302056', '', ''],
};