var jwt = require('jsonwebtoken');


module.exports.check = function (token, res) {
    if(token==null || token==undefined){
        res.status(401).json({
            title: 'Not Authenticated'
        })
        return false;
    } 
    if (!jwt.verify(token, 'secret')) {
        res.status(401).json({
            title: 'Not Authenticated'
        });
        return false;
    }return true;
}