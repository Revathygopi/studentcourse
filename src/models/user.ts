

import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../config/config';
import bcrypt from 'bcrypt';

interface UserAttributes {
  id:number;
  name: string;
  email: string;
  password: string;
  phoneNumber:string;
  address:string;
  education:string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public phoneNumber!:string;
  public address!:string;
  public education!:string;



  public async comparePassword(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
  }
}

User.init({
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  education: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'users',
  timestamps:false
});

User.beforeCreate(async (user: User) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});
