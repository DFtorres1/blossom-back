import { DataTypes, Model } from "sequelize";
import dbInstance from "src/config/db";

class BaseModel extends Model {}

BaseModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: dbInstance,
    timestamps: true,
    paranoid: true,
  }
);

export default BaseModel;
