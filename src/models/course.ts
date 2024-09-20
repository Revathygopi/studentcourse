

import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../config/config';


interface CourseAttributes {
  id:number;
  name: string;
  duration: string;
  description: string;
  
}

interface CourseCreationAttributes extends Optional<CourseAttributes, 'id'> {}

export class Course extends Model<CourseAttributes, CourseCreationAttributes> implements CourseAttributes {
  public id!: number;
  public name!: string;
  public duration!: string;
  public description!:string;
  
}

Course.init({
 id:
 {
    type:DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
 },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
 description: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'courses',
  timestamps:false
});


