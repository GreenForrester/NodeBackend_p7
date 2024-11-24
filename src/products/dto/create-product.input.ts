import { InputType, Field, Int, ID } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

@InputType() // GraphQL decorator
export class CreateProductInput {
  //No need for productId here as its auto generated
  //Giving here as an example
  @Field(() => ID, { nullable: true }) //GraphQL decorator
  @IsOptional()
  @IsUUID()
  productId?: string; //? for optional ID

  @Field()
  @IsNotEmpty()
  @IsString()
  productName: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  productvendor: string;

  @Field()
  @IsString()
  productDescription: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  quantityInStock: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  buyPrice: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  msrp: number;
}
