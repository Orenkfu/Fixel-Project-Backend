module.exports = function asyncMiddleware(handler) {
    return async (req, res, next) => {
        try {
            await handler();
        } catch (e) {
            console.log(e);
            next(e)
        }
    };
}
