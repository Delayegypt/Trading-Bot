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
    if (message.author.bot) return;

    if (message.channel.id === TRADING_CHANNEL_ID) {
        description: ' Keep chat out of trading please — use DMs or general.'
    }
});

client.login(process.env.TOKEN);