import { Iuser } from '../Databases/Entities/user.Interface'; // adjust path

declare global {
  namespace Express {
    interface Request {
      user?: Iuser;
    }
  }
}
