const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})

router.use('/', (req, res, next) => {
    console.log('User req', req.originalUrl);
    next();
}, (req, res, next) => {
    console.log('Request type', req.method);
    next();
})

// router.use('/', (err, req, res, next) => {
//     try {
//         console.log('Role', req.cookies.role);
//     } catch(error) {
//         next(error);
//     }
// })

router.get('/:id', (req, res, next) => {
    if(req.params.id == '0') {
        next('route');
    } else {
        next();
    }
}, (req, res) => {
    res.send('regular');
})

router.use('/:id', (req, res) => {
    console.log(req.params.id);
    res.send('special');
})

module.exports = router;