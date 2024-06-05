module.exports = (err, req, res, next) => {
    console.log("CLIENT error handler");
    if(req.xhr) {
            res.status(500).send({error: 'something failed'});
    } else {
        next(err);
    }
}