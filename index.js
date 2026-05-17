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

    // Only run in trading channel
    if (message.channel.id === TRADING_CHANNEL_ID) {

        message.channel.send({
            embeds: [{
                title: '⚠️ Trading Chat Only',
                description:
                    '🚫 Keep chat out of trading.\nUse DMs or general for conversations.',
                color: 0xED4245,
                thumbnail: {
                    url: client.user.displayAvatarURL()
                }
            }]
        });

    }
});

client.login(process.env.TOKEN);