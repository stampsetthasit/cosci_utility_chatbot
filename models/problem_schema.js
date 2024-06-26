const { DataTypes } = require("sequelize");
const sequelize = require("../config/database").chatbotUtility;

const Problem = sequelize.define(
  "Problem",
  {
    id: {
      type: DataTypes.STRING(8),
      primaryKey: true,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      unique: true,
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    add_by: {
      type: DataTypes.CHAR(6),
      allowNull: false,
    },
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "problems",
  }
);

module.exports = Problem;
