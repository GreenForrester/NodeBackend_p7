import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsPostalCode,
} from 'class-validator';

@InputType()
export class CreateCustomerInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  customerName: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  cemail: string;

  @Field()
  @IsNotEmpty()
  @IsPhoneNumber(null) // You can specify a region code if needed
  phone: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  address: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  city: string;

  @Field()
  @IsNotEmpty()
  @IsPostalCode(null) // You can specify a locale if needed
  postalCode: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  country: string;
}
