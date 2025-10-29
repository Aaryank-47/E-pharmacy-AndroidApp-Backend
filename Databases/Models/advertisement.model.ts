import {advertisementSchema} from '../Schema/advertisement.schema';
import { IAdvertisement } from '../Entities/advertisement.interface';
import { model } from 'mongoose';
const Advertisement = model<IAdvertisement>("Advertisement", advertisementSchema);
export default Advertisement;