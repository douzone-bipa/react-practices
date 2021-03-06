const errorRouter = require('./error');
const authorized = require('./authorized');
const models = require('../models');

const applicationRouter = {
    setup: async function(application) {
        application

        .all('*', function (req, res, next) {
            res.locals.req = req;
            res.locals.res = res;
            next();
        })

        .use('/api/user', require('./user'))
        .use('/api/guestbook', require('./guestbook'))
        .use('/api/gallery', require('./gallery'))

        .use(errorRouter.error404)
        .use(errorRouter.error500)
    }
};

module.exports = { applicationRouter };