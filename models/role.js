import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const role = sequelize.define(
  "roles",
  {
    nameEn: {
      type: DataTypes.STRING,
    },
    nameAr: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export default role;
