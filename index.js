const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const TRADING_CHANNEL_ID = '1395197351664029856';

let lastWarningMessage = null;

client.on('messageCreate', async (message) => {

    // Ignore bots
    if (message.author.bot) return;

    // Only run in trading channel
    if (message.channel.id === TRADING_CHANNEL_ID) {

        // Delete old warning message
        if (lastWarningMessage) {
            try {
                await lastWarningMessage.delete();
            } catch (err) {}
        }

        // Send new warning message
        lastWarningMessage = await message.channel.send({
            embeds: [{
                color: 0x2B2D31,

                title: 'Trading Chat Only',

                description:
`Please keep this channel strictly for trading posts.

• **No spamming**

• **Use DMs** for negotiations

• **Use general chat** for conversations

• Keep trading **clean** and **organized**`
            }]
        });

    }
});

client.login(process.env.TOKEN);