const { format } = require('date-fns');
const { CronJob } = require('cron');

// let job = new CronJob('* * 1 * * *', () => {
//     console.log(format(new Date(), 'Du doan 1 tieng ' + 'hh:mm (dd/MM/yyyy)'));
// }, null, true, 'Asia/Ho_Chi_Minh');
// job.start();

let task = new CronJob('1 * * * *', () => {
    console.log(format(new Date(), 'Du doan 1 phut ' + 'hh:mm (dd/MM/yyyy)'));
}, null, true, 'Asia/Ho_Chi_Minh');
task.start();

setInterval(() => {
    console.log('Du doan 1 phut ' + format(new Date(), 'hh:mm (dd/MM/yyyy)'));
}, 1000);