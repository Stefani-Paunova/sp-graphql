import { ObjectType, Field, InputType } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb";

@ObjectType()
export class Garage {

    @Field()
    _id: ObjectId;

    @Prop({ required: true })
    @Field()
    street: string;

    @Prop({ required: true })
    @Field()
    number: number;

}

export const GarageModel = getModelForClass(Garage, { schemaOptions: { timestamps: true } })