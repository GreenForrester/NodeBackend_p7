import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  create(createOrderInput: CreateOrderInput) {
    const { orderItems, ...orderFields } = createOrderInput;
    return this.prisma.order.create({
      data: { ...orderFields, orderItems: { create: orderItems } },
      include: { orderItems: true }, //pn return
    });
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: { orderId: id },
      include: { orderItems: true },
    });
  }

  update(id: string, updateOrderInput: UpdateOrderInput) {
    const { orderItems, ...orderFields } = updateOrderInput;
    return this.prisma.order.update({
      where: { orderId: id },
      data: {
        ...orderFields,
        orderItems: {
          upsert: orderItems.map((item) => ({
            where: { orderItemId: item.orderItemId },
            create: item,
            update: item,
          })),
        },
      },
      include: { orderItems: true }, //pn return
    });
  }

  remove(id: string) {
    return this.prisma.order.delete({ where: { orderId: id } });
  }
}
