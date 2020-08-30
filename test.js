const { format, formatDistance } = require('date-fns');
console.log(format(new Date(2020, 7, 30, 23, 9, 3), 'hh:mm:ss dd/MM/yyyy'));
console.log(format(new Date(2020, 7, 31, 2, 9, 3), 'hh:mm:ss dd/MM/yyyy'));
console.log(formatDistance(
    new Date(2020, 7, 30, 11, 9, 3),
    new Date(2020, 7, 31, 2, 9, 3), { addSuffix: 'true' }));