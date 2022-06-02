import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { BaseGarageInput } from "./garage-arguments";
import { Garage, GarageModel } from "../../entities/garage-entity";

@Resolver()
export class GarageResolver {

    @Query(returns => [Garage])
    async garages(): Promise<Garage[]> {
        return await GarageModel.find({})
    }

    @Query(returns => Garage)
    async garage(@Arg("_id") _id: string): Promise<Garage> {
        return await GarageModel.findById(_id);
    }

    @Mutation(returns => Garage)
    async createGarage(@Arg("data") data: BaseGarageInput): Promise<Garage> {
        const newUser = new GarageModel(data);
        await newUser.save();
        return newUser
    }

    @Mutation(returns => Garage)
    async deleteGarage(@Arg("_id") _id: string): Promise<Garage> {
        return await GarageModel.findByIdAndRemove(_id);
    }

    @Mutation(returns => Garage)
    async editGarage(@Arg("_id") _id: string, @Arg("data") data: BaseGarageInput): Promise<Garage> {
        return await GarageModel.findByIdAndUpdate(_id, data, { new: true });
    }
}