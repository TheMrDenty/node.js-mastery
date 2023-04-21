// check username, password in post(login) request
// if it exists, create ew JWT
// send back-end to front-end

// setup authentication so only the request with JWT can access the dashboard

const jwt =require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error')

const login = async (req,res) => {
    const {username, password} = req.body;

    // mongoose validation
    // Joi
    // check in the controller

    if(!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400)
    }

    // just for demo, normally provided by DB!
    const id = new Date().getDate();

    // try to keep payload small, better experience for the user
    // the simple environment variable is just for demo, in production use long, complex, and unguessable string value
    const token = jwt.sign({id, username}, process.env.JWT_SECRET,{expiresIn:'30d'})

  
    res.status(200).json({msg:'user created', token})
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello, John Doe`, secret:`Here is your authorized date, your lucky number is ${luckyNumber}`});
}

module.exports = {
    login, dashboard
}