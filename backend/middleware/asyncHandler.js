//Here we will create our own async handler. Or one can use express-async-handler package.

const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

export default asyncHandler;