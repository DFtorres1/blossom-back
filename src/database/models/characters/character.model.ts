import { DataTypes } from 'sequelize';
import BaseModel from '../base.model';
import DB from 'database';

class Character extends BaseModel {
  public status!: string;
  public species!: string;
  public gender!: string;
  public name!: string;
  public image_path!: string;
  public is_starred!: boolean;
  public origin!: Object;
}

Character.init(
  {
    status: {
      type: DataTypes.ENUM,
      values: ['Alive', 'Dead', 'unknown'],
    },
    species: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['Female', 'Male', 'Genderless', 'unknown'],
    },
    name: {
      type: DataTypes.STRING,
    },
    image_path: {
      type: DataTypes.STRING,
    },
    is_starred: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    origin: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize: DB.sequelize,
  },
);

export default Character;
