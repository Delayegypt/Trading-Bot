const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const TRADING_CHANNEL_ID = '1395197351664029856';

client.on('messageCreate', async (message) => {

    // Ignore bots
    if (message.author.bot) return;

    // Only send in trading channel
    if (message.channel.id === TRADING_CHANNEL_ID) {

        message.channel.send({
            embeds: [{
                color: 0xED4245,

                author: {
                    name: 'Trading Guidelines',
                    iconURL: 'https://i.imgur.com/8Km9tLL.png'
                },

                title: '⚠️ Trading Chat Only',

                description:
`Please keep this channel strictly for trading posts.

• Use DMs for negotiations
• Use general chat for conversations
• Keep trading clean and organized`,

                thumbnail: {
                    url: 'https://i.imgur.com/8Km9tLL.png'
                }
            }]
        });

    }
});

client.login(process.env.TOKEN);