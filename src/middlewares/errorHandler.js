import httpStatus from "http-status";

export default function errorHandler(err, req, res, next) {
    console.log(err);
    switch(err.type) {
        case "notFound":
            return res.status(httpStatus.NOT_FOUND).send(err.message);
        case "conflict":
            return res.status(httpStatus.CONFLICT).send(err.message);
        case "unprocessable":
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(err.message);
        default:
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}