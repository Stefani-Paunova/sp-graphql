import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { BaseCarInput } from "./car-arguments";
import { Car, CarModel } from "../../entities/car-entity";
import { UserRoles } from "../user/user-roles";

@Resolver()
export class CarResolver {

    @Query(returns => [Car])
    async cars(): Promise<Car[]> {
        return await CarModel.find({})
    }

    @Query(returns => Car)
    async car(@Arg("_id") _id: string): Promise<Car> {
        return await CarModel.findById(_id);
    }

    @Mutation(returns => Car)
    async createCar(@Arg("data") data: BaseCarInput): Promise<Car> {
        const newUser = new CarModel(data);
        await newUser.save();
        return newUser
    }

    @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
    @Mutation(returns => Car)
    async deleteCar(@Arg("_id") _id: string): Promise<Car> {
        return await CarModel.findByIdAndRemove(_id);
    }

    @Mutation(returns => Car)
    async editCar(@Arg("_id") _id: string, @Arg("data") data: BaseCarInput): Promise<Car> {
        return await CarModel.findByIdAndUpdate(_id, data, { new: true });
    }
}