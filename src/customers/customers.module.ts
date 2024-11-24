import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { PrismaModule } from 'nestjs-prisma';

//Using Prisma ORM

@Module({
  imports: [PrismaModule],
  providers: [CustomersResolver, CustomersService],
})
export class CustomersModule {}
