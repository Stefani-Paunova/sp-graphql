import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseCarInput {
    @Field()
    @MaxLength(30)
    brand: string;

    @Field()
    @MaxLength(30)
    model: string;

    @Field()
    year: number;
}

@InputType()
export class CarInput extends BaseCarInput {
    @Field()
    _id: ObjectId;
}