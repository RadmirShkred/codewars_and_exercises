// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'http://apxuapi.herokuapp.com/api/people';

const response = async url => {
    const res = await fetch(url);
    await console.log(res.status);
    return res.json();
};

response(targetUrl)
    .then(body => console.log(body.results[2].name));
