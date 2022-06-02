import { MaxLength, MinLength, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { CarInput } from "../car/car-arguments";
import { GarageInput } from "../garage/garage-arguments";

@InputType()
export class CreateUserInput {
    @Field()
    @MaxLength(30)
    firstName: string;

    @Field()
    @MaxLength(30)
    lastName: string;

    @Field()
    @IsEmail()
    email: string;

    @Field()
    @MinLength(6)
    password: string;
}

@InputType()
export class EditUserInput {

    @Field({ nullable: true })
    @MaxLength(30)
    firstName?: string;

    @Field({ nullable: true })
    @MaxLength(30)
    lastName?: string;

    @Field({ nullable: true })
    @IsEmail()
    email?: string;

    @Field({ nullable: true })
    @MinLength(6)
    password?: string;

    @Field(type => [CarInput])
    cars?: CarInput[]

    @Field(type => [GarageInput])
    garages?: GarageInput[]
}