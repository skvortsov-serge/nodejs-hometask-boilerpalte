const responseMiddleware = (req, res, next) => {
    if (res.err)
        res.status(400).send({ error: true, message: res.err.message });

    if (res.data)
        res.status(200).send({ data: res.data });
    next();
}

exports.responseMiddleware = responseMiddleware;