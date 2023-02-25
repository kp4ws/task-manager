const consoleMiddleware = (req, res, next) => {
    if(process.env.NODE_ENV === 'development') {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    }
    next();
};

module.exports = consoleMiddleware;