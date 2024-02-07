import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { title, content, authorId, published } = body
  const user = await getCurrentUser();


  try {
    if (!user?.email) {
      return NextResponse.json({ message: 'Not Authenticated!' }, { status: 401 })
    }
    console.log(user?.email)


    const newPost = await prisma.post.create({
      data: {
        title: title,
        content: content,
        authorId: authorId,
        published: published
      }
    })
    return NextResponse.json({ newPost }, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 })
  }
}