const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    //Check for Mongoose bad ID
    if(err.name === 'CastError' && err.kind === 'ObjectId') {
        message = 'Resource not Found'
        statusCode = 404;
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? 'U' : err.stack
    })
};

export {notFound, errorHandler};

// This code help us to handle errors more efficiently. All we have to do is throw new error and can set status of response.