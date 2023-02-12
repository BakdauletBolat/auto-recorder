const CronJob = require('cron').CronJob;
const {Client, LocalAuth} = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

const sendMessage = (client) => {
    const number = "+7471232552";
    const meNumber = "+77059943864"

    // Your message.
    const text = "Здравствуйте я хочу записаться на Cycling в 19:00 и на Stretching";

    const chatId = meNumber.substring(1) + "@c.us";

    client.sendMessage(chatId, text);
}

const job = new CronJob('10 58 09 * * 1,5', function () {
    sendMessage(client);
    console.log('Message sended');
}, null, false, 'Asia/Almaty');


client.on('ready', () => {
    console.log('Client is ready!');
    job.start();
    console.log('Job started');
});

client.initialize();

