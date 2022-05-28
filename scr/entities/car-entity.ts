import { ObjectType, Field, InputType } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb";

@ObjectType()
export class Car {

    @Field()
    _id: ObjectId;

    @Prop({ required: true })
    @Field()
    brand: string;

    @Prop({ required: true })
    @Field()
    model: string;

    @Prop({ required: true })
    @Field()
    year: number;

}

export const CarModel = getModelForClass(Car, { schemaOptions: { timestamps: true } })