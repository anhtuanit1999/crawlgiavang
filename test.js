const passwd = 'u1h1u1s1o1a1c';

const hass = (passwd) => {
    console.log(passwd.split('1').reverse().join(''));
};

hass(passwd);