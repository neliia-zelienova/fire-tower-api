import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RoomsController } from './controllers/rooms/rooms.controller';
import { AuthGuard } from './guards/auth/auth.guard';
import { PrismaService } from './services/prisma/prisma.service';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [],
  controllers: [RoomsController],
  providers: [PrismaService, UsersService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
})
export class AppModule {}
