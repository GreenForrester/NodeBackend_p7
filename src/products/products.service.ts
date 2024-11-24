import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  //prisma is already async , so no need for async await here
  create(createProductInput: CreateProductInput) {
    return this.prisma.product.create({ data: createProductInput });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({ where: { productId: id } });
  }

  update(id: string, updateProductInput: UpdateProductInput) {
    const { productId, ...productFields } = updateProductInput;
    return this.prisma.product.update({
      where: { productId: id }, //customer id in entity mapped
      data: productFields,
    });
  }

  remove(id: string) {
    return this.prisma.product.delete({ where: { productId: id } });
  }
}
