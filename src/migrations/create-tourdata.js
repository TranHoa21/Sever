'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Tourdatas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title_tour: {
                type: Sequelize.STRING,
                allowNull: false,

            },

            name_day: {
                type: Sequelize.TEXT,

            },
            image_hotel: {
                type: DataTypes.STRING,
            },
            image_in_day: {
                type: DataTypes.STRING,
            },
            name_day_title: {
                type: Sequelize.TEXT,

            },
            name_hotel: {
                type: Sequelize.TEXT,
            },
            schedule: {
                type: Sequelize.TEXT,
            },
            hotel_introduction: {
                type: Sequelize.TEXT,
            },

            createdAt: {
                allowNull: false,
                type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                allowNull: false,
                type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },


        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Tourdatas');
    }
};

