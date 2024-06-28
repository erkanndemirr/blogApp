import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

interface RegisterData {
    nameSurname: string;
    username: string;
    password: string;
    email : string;
}

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const { nameSurname, username, password,email }: RegisterData = body;
    try {
        const userExist = await prisma.user.findUnique({
            where: { username: username }
        });

        if (userExist) {
            return NextResponse.json(
                { message: "This email address is already in use" },
                { status: 409 }
            )
        }

        const hashPass = await bcrypt.hash(password,10);

        const user = await prisma.user.create({
            data: {
                nameSurname : nameSurname,
              password: hashPass,
              username : username,
                email : email
            },
          });
        
          return NextResponse.json(
            { message: "User created successfully", data: user },
            { status: 201 });
    } catch (error) {
        return NextResponse.json(
            {
              error: "Something went wrong while creating the user",
              error_message: error,
            },
            { status: 500 }
        )
    }
}