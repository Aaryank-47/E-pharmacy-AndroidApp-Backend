import { userSchema } from "../Schema/user.Schema.ts";
import { Iuser } from "../Entities/user.Interface.ts";
import {model} from 'mongoose';

const User = model<Iuser>("User", userSchema);
export default User;