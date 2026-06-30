const Users = require('../MODEL/User');

const createUser = async (req,res)=>{
    const { FirstName, LastName, Email, Password } = req.body;
    const createdUser = await Users.create({FirstName:FirstName, LastName:LastName, Email:Email, Password:Password});
    res.send(createdUser);
}

module.exports = { createUser }