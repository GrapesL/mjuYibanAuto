import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// 子模块加载
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // 加载连接数据库
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      host: 'sh-cynosdbmysql-grp-e9bo3jzs.sql.tencentcdb.com', // 数据库ip地址
      port: 29049, // 端口
      username: 'admin', // 登录名
      password: 'ABC123!@#', // 密码
      database: 'yiban', // 数据库名称
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
      synchronize: true, // 定义数据库表结构与实体类字段同步(这里一旦数据库少了字段就会自动加入,根据需要来使用)
    }),
    // 加载子模块
    UserModule,
  ],
})
export class AppModule {}
