const User = require('../models/user');

const isAdmin = async(req, res, next) =>{
    const {token} = req.cookies;

    const user = await User.findById(req.user._id);
    if(!user || user.role != "admin"){
        res.status(403).json({Message:"Access Denied"})
    }
    next();
}

const isAuthenticated = async (req, res, next) => {
    const {token} = req.cookies;
    if (!user) {
      return res.status(401).send("Unauthorized");
    }
    next();
};



module.exports = { isAdmin, isAuthenticated };