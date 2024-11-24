import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Order } from './order.entity';

@ObjectType()
export class OrderItem {
  @Field(() => ID)
  orderItemId: string;

  @Field()
  productId: string;

  @Field()
  productName: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => Order)
  order: Order;

  @Field()
  orderId: string;
}
