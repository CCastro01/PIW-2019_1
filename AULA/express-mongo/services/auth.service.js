var jwt = require('jsonwebtoken');

module.exports.check = function(token, res, next){
    
    if(!token) return res.status(401).json({message: 'Token not provided.', auth:false});

    jwt.verify(token, 'secret', (err,decoded)=>{
        
        if(err) return res.status(500).json({message: 'Failed to authenticate token.', auth:false});
        next();
    });
}