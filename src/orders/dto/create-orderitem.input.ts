import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
  IsString,
  Min,
  IsOptional,
} from 'class-validator';

@InputType()
export class OrderItemInput {
  @Field({ nullable: true }) // Makes the field optional in GraphQL schema
  @IsUUID()
  @IsOptional() // Makes the field optional for validation
  orderItemId?: string;

  @Field()
  @IsUUID()
  @IsNotEmpty()
  productId: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  productName: string;

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  quantity: number;
}
