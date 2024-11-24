import { OrderItemInput } from './create-orderitem.input';
import { GraphQLISODateTime } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
  IsString,
  Min,
  IsDate,
  IsBoolean,
  IsArray,
  ArrayMinSize,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType() // GraphQL decorator
export class CreateOrderInput {
  @Field()
  @IsNotEmpty()
  @IsUUID()
  customerId: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsOptional()
  @IsDate()
  shippingDate: Date;

  @Field()
  @IsNotEmpty()
  @IsString()
  status: string;

  @Field()
  @IsString()
  comments: string;

  @Field(() => Int)
  @IsNumber()
  @Min(0)
  total: number;

  @Field(() => Boolean)
  @IsBoolean()
  paid: boolean;

  @Field(() => [OrderItemInput]) //graphql
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrderItemInput)
  orderItems: OrderItemInput[];
}
