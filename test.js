// const regression = require('regression');
// let arrData = [
//     [1, 23],
//     [2, 29],
//     [3, 49],
//     [4, 64],
//     [4, 74],
//     [5, 87],
//     [6, 96],
//     [6, 97],
//     [7, 109],
//     [8, 119],
//     [9, 149],
//     [9, 145],
//     [10, 154],
//     [10, 166]
// ];
// const result = regression.linear(arrData, { order: 2, precision: 10 });
// const b0 = result.equation[0];
// const b1 = result.equation[1];
// console.log(result.predict(11));
// console.log(b0, b1);

const { CronJob } = require('cron');

var job = new CronJob('* * * * * *', function() {
    console.log('You will see this message every second');
}, null, true, 'Asia/Ho_Chi_Minh');
job.start();