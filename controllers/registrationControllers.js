
const registerModel = require('../models/registrationModel');


function register(req, res){

    const { bvcID, fullName, address, status } = req.body;
    console.log(bvcID, fullName, address, status);//delete after deployment

    let fee = registerModel.calculateFee(status);
    console.log(fee);//delete after deployment

    const confirmUrl = `/confirmaion?id=${bvcID}&fullName=${fullName}&address=${address}&status=${status}&fee=${fee}`;
    console.log(confirmUrl);//delete after deployment

    res.type('text').send(confirmUrl);
};

module.exports = {register};