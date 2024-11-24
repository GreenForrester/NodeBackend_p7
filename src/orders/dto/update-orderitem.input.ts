import { OrderItemInput } from './create-orderitem.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderItemInput extends PartialType(OrderItemInput) {
  @Field(() => String)
  orderItemId: string;
}
