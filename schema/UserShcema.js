const { DataTypes } = require('sequelize');
const sequelize = require('../database/connectToDB'); // Import the configured sequelize instance

// Define a User model
const UserSchema = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: true, // Automatically create createdAt and updatedAt fields
});
sequelize.sync();
module.exports = UserSchema;
