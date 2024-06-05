module.exports = (err, req, res, next) => {
    console.log("LOG error ");
    console.error(err.stack);
    next(err);
}