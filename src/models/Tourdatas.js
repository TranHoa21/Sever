const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Tourdatas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Tourdatas.init({
        title_tour: DataTypes.STRING,
        name_day: DataTypes.TEXT,
        image_hotel: DataTypes.STRING,
        image_in_day: DataTypes.STRING,
        name_day_title: DataTypes.TEXT,
        name_hotel: DataTypes.TEXT,
        schedule: DataTypes.TEXT,
        hotel_introduction: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Tourdatas',
    });
    return Tourdatas;
};
