import joi from "joi";

export const travelsSchema = joi.object({
    passengerId: joi.number().integer().required(),
    flightId: joi.number().integer().required(),
});