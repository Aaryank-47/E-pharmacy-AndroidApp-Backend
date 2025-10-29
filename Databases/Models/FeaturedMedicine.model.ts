import {featuredMedicineSchema} from '../Schema/featuredMedicine';
import { IFeaturedMedicine } from '../Entities/featuredMedicine.interface';
import { model } from 'mongoose';

const FeaturedMedicine = model<IFeaturedMedicine>("FeaturedMedicine", featuredMedicineSchema);
export default FeaturedMedicine;