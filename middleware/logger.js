// @desc Logs request url and method to consoleç
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
};

module.exports = logger;