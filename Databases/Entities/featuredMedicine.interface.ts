// entities/featuredMedicine.entity.ts

import mongoose from "mongoose";

export interface IFeaturedMedicine {
  title: string;              
  description: string;
  category: mongoose.Schema.Types.ObjectId;            
  discount?: number;          
  stock: number;                       
  imageUrl: string;          
  featured: boolean;         
  ratings?: number;          
  createdAt?: Date;
  updatedAt?: Date;
  updatedBy?: mongoose.Schema.Types.ObjectId;
}
