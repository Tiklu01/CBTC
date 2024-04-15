import { Schema, Document, model, models } from "mongoose";

export interface ICatagory extends Document{
    _id: string;
    name: string;
}

const CategorySchema = new Schema({
   name: {type: String, required: true, unique: true} 
})

const Category = models.Category || model('category', CategorySchema)