import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseGarageInput {
    @Field()
    @MaxLength(30)
    street: string;

    @Field()
    number: number;
}

@InputType()
export class GarageInput extends BaseGarageInput {
    @Field()
    _id: ObjectId;
}