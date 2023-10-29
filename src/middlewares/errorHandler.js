import httpStatus from "http-status";

export default function errorHandler(err, req, res, next) {
    switch(err.type) {
        case "notFound":
            return res.status(httpStatus.NOT_FOUND).send("rota errada");
        case "conflict":
            return res.status(httpStatus.CONFLICT).send("already registered")
        default:
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("ta errado");
    }
}