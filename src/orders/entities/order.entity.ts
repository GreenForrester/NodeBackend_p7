import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { OrderItem } from './order-item.entity';
import { Customer } from '../../customers/entities/customer.entity';

@ObjectType()
export class Order {
  @Field(() => ID)
  orderId: string;

  @Field()
  orderDate: Date;

  @Field()
  customerId: string;

  @Field(() => Customer)
  customer: Customer;

  @Field()
  shippingDate: Date;

  @Field()
  status: string;

  @Field({ nullable: true })
  comments?: string;

  @Field(() => Float)
  total: number;

  @Field(() => [OrderItem])
  orderItems: OrderItem[];

  @Field()
  paid: boolean;
}
