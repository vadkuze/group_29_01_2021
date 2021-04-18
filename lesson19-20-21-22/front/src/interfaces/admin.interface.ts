import { IUser } from "./user.interface";

export interface IAdmin extends IUser{
    role: string;
}