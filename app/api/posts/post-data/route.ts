import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { postId } = body;
  const id = parseInt(postId);

  try {
    const res = await prisma.post.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
      },
    });

    if (!res?.id) {
      return NextResponse.json({ error: "Invalid Post ID" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
