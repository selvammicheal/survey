import { DataSourceOptions, DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';

export const Config: DataSourceOptions = {
  type:'mysql',
  host:'localhost',
  port:3306,
  username:'root',
  password:'root123',
  database:'survey_app',
    entities: [User],
    synchronize: true,
  };
  const dataSource = new DataSource(Config);
  export default dataSource;