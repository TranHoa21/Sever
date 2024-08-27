import db from "../models/index.js";

export const createNewPlace = async (name, address) => {
    try {
        const newPlace = await db.Place.findOne({ where: { name } });
        if (newPlace) {
            return {
                err: 1,
                mes: 'Place name has been registered, please use another name',
            };
        }
        const getNewPlace = await db.Place.create({
            name,
            address,
        });
        return {
            err: 0,
            mes: 'Place created successfully.',
            place: getNewPlace,
        };
    } catch (error) {
        console.log('check err >>>', error);
        throw error;
    }
}

export const getAllPlace = async () => {
    try {
        const allPlaces = await db.Place.findAll();
        return allPlaces
    } catch (error) {
        console.log('check err >>>>', error);
        throw error;
    }
}