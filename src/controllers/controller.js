const res = require("express/lib/response");

exports.helloWorld = (req, res, next) => {
    res.send('<h1>Hello, world!</h1>');
};

exports.haiThere = (req, res, next) => {
    res.send('<h1>Halo Apa kabar kau di sana?</h1>');
};

exports.About = (req, res, next) => {
    res.send('<div><h1 style="color: blue;">My Contact Details</h1><p>My name: Oktavanus</p><p>Email: oktavanusskom@gmail.com</p><p>Address: Sungai Raya River, Kubu Raya Regency, West Borneo</p></div>');
};


