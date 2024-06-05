module.exports = (err, req, res, next) => {
    console.log("ERROR handler");
    console.error(err.mmessage);
    res.status(500).send("An erroor occured");
};