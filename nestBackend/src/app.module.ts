import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Content } from './content.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'saltylion.db',  // creates this file in the backend folder
      entities: [Content],              // add entities later
      synchronize: true,         // auto-creates tables (good for dev, disable in prod)
      logging: true,             // shows queries in console for now
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}