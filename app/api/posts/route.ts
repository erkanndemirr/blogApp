import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const res = NextResponse;
    const body = await req.json();
    const {title,content, authorId } = body
  const user = await getCurrentUser();

  try {
    if(!user?.email) {
      return NextResponse.json({ message: 'Not Authenticated!' }, { status: 401 })
    }
    const newPost = await prisma.post.create({
      data: {
        title : title,
        content: content,
        authorId: authorId ,
      }
    })
    return NextResponse.json({newPost}, { status: 200})

  } catch(error) {
    return NextResponse.json({ message: 'Something went wrong!'}, { status: 500 })
  }
}