const hass = (passwd) => {
    return passwd.split('1').reverse().join('');
};

module.exports = hass;