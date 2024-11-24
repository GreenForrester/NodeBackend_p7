/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  create(createCustomerInput: CreateCustomerInput) {
    return this.prisma.customer.create({
      data: createCustomerInput,
    });
  }

  findAll() {
    return this.prisma.customer.findMany();
  }

  findOne(id: string) {
    const customer = this.prisma.customer.findUnique({
      where: { customerId: id },
      include: { orders: true }, //find orders based on relation return [] if nothing found
    });

    return customer;
  }

  update(id: string, updateCustomerInput: UpdateCustomerInput) {
    const { customerId, ...customerFields } = updateCustomerInput;
    return this.prisma.customer.update({
      where: { customerId: id }, //customer id in entity mapped
      data: customerFields,
    });
  }

  remove(id: string) {
    return this.prisma.customer.delete({ where: { customerId: id } });
  }
}
