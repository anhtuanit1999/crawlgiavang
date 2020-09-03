const { formatToTimeZone } = require('date-fns-timezone')

const date = new Date(1599130069995)
const format = 'hh:mm (DD/MM/YYYY)'
const output = formatToTimeZone(new Date(1599130069995), 'hh:mm (DD/MM/YYYY)', { timeZone: 'Europe/Berlin' })
console.log(output);