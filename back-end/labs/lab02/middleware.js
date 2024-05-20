module.exports = (option) =>  {
    return (req, res, next) => {
        try {
            console.log('Middleware', option);
            if (req.cookies.role === 'admin')
                next();
            else
                throw new Error("You are not admin");
        } catch(err) {
            next(err);
        }

     }
 }