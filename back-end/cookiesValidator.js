const cookiesValidator = async (cookies) => {
    // try {
    //     await externallyValidateCookies(cookies.testCookie);
    // } catch (error) {
    //     throw new Error("Invalid Cookie");
    // }

    if (cookies.testCookie == '1000') {
        console.log("Valid Cookie");
    } else {
        throw new Error("Invalid cookie");
    }
}

module.exports = cookiesValidator;