import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [
    {
      /**
       * NOTE: This is necessary to make the DTO validations work as expected
       */
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },

    /**
     * NOTE: Add custom providers below
     */
    AppService,
  ],
})
export class AppModule {}
