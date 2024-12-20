import { request } from "http";
import connect from "../../../../../lib/db";
import User from "../../../../models/User";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

const ObjectId=require("mongoose").Types.ObjectId;


export const GET =async()=>{
    try{
        await connect();
        const users =await User.find();
        return new NextResponse(JSON.stringify(users),{status:200});
    }catch(error:any){
        return new NextResponse("error in fatching user "+error.message ,{
            status:500,

        })

    }
}

export const POST =async (request:Request)=>{
    try{
        const body=await request.json();
        await connect();
        const newUser=new User(body);
        await newUser.save();

        return new NextResponse(JSON.stringify({message:"User is Created",user:newUser})
        ,{status:200}
    );

    }catch(error: any){
        return new NextResponse("Error is creating user "+ error.message,{
            status:500,
        })

    }

}

export const PATCH = async (request: Request) => {
    try {
        const body = await request.json();
        const { userId, newUsername } = body;

        await connect();

        // Validate the inputs
        if (!userId || !newUsername) {
            return new NextResponse(
                JSON.stringify({ message: "User ID or new username is required" }),
                { status: 400 }
            );
        }
        // if(!Types.ObjectId.isValid(userId)){
        //     return new NextResponse(
        //         JSON.stringify({message:"invalid user Id"})
        //     )
        // }

        if (!Types.ObjectId.isValid(userId)) {
            return new NextResponse(
                JSON.stringify({ message: "Invalid User ID" }),
                { status: 400 }
            );
        }

        // Update user in the database
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { username: newUsername },
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return new NextResponse(
                JSON.stringify({ message: "User not found in the database" }),
                { status: 400 }
            );
        }

        return new NextResponse(
            JSON.stringify({ message: "User is updated", user: updatedUser }),
            { status: 200 }
        );
        
    }catch(error:any){
        return new NextResponse("Error in Update user"+error.message,{
            status:500,
        })

    }
}

export const DELETE =async(request:Request)=>{
    try{
        const {searchParams} =new URL(request.url);
        const userId = searchParams.get('userId');

        if (!userId ) {
            return new NextResponse(
                JSON.stringify({ message: "User ID or new username is not found" }),
                { status: 400 }
            );
        }
        if (!ObjectId.isValid(userId)) {
            return new NextResponse(
                JSON.stringify({ message: "Invalid User ID" }),
                { status: 400 }
            );
        }
        await connect();

        const deletedUser=await User.findByIdAndDelete(
            new Types.ObjectId(userId)
        );

        if(!deletedUser){
            return new NextResponse(
                JSON.stringify({message: "User not found in Database"})
            );
        }
        return new NextResponse(
            JSON.stringify({ message: "User is deleted", user: deletedUser }),
            { status: 200 }
        );


    }catch(error:any){

    }
}