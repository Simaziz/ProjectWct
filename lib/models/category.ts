import {Schema, model,models} from "mongoose";

const CategorySchema=new Schema(
    {
        title: {Type:'String',required:true},
        user:{type:Schema.Types.ObjectId,ref:"User"},

    },
    {
        timestamps:true
    }
);


const Category =models.category ||model('category',CategorySchema);

export  default Category;