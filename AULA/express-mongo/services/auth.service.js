var jwt = require('jsonwebtoken');


/*module.exports.check = function (token, res) {
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
}*/

module.exports.check = function(token, res, next){
    
    if(!token) return res.status(401).json({message: 'Token not provided.'});

    jwt.verify(token, 'secret', (err,decoded)=>{
        
        if(err) return res.status(500).json({message: 'Failed to authenticate token.'});
        next();
    });
}