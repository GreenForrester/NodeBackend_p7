import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  productId: string;

  @Field()
  productName: string;

  @Field()
  productvendor: string;

  @Field()
  productDescription: string;

  @Field(() => Int)
  quantityInStock: number;

  @Field(() => Int)
  buyPrice: number;

  @Field(() => Int)
  msrp: number;
}
