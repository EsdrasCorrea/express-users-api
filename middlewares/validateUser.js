function validateUser(req, res, next){
    const {name, email} = req.body;

    if(!name || !email) {
        return res.status(400).json({
            message: 'Name and email is required',
        });
    };

    if (!email || !email.includes('@')) {
        return res.status(400).json({
            message : 'Invalid email!'
        });
    }    
    
    next();
}

module.exports = validateUser;