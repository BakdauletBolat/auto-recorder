const CronJob = require('cron').CronJob;
const {Client, LocalAuth} = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

const sendMessage = (client) => {
    const number = "+77471232552";
    const meNumber = "+77028363117"

    const text = "Здравствуйте я хочу записаться на Cycling в 19:00 \n" +
        "Бакдаулет, и 87028363117 Айгерим"
    const chatId = number.substring(1) + "@c.us";
    client.sendMessage(chatId, text);
}

const job = new CronJob('10 00 07 * * 1,5', function () {
    sendMessage(client);
    console.log('Message sended success деп ойлайм енды');
}, null, false, 'Asia/Almaty');


client.on('ready', () => {
    console.log('Client is ready!');
    job.start();
    console.log('Job started');
});

client.initialize();

