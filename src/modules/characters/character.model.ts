import { DataTypes } from "sequelize";
import BaseModel from "../shared/base.model";
import dbInstance from "src/config/db";

class Character extends BaseModel {}

Character.init(
  {
    status: {
      type: DataTypes.ENUM,
      values: ['Alive', 'Dead', 'unknown']
    },
    species: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['Female', 'Male', 'Genderless', 'unknown']
    },
    name: {
      type: DataTypes.STRING,
    },
    imagePath: {
      type: DataTypes.STRING,
    },
    isStarred: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    origin: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize: dbInstance,
  }
);
