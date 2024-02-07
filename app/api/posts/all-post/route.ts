import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async () => {

  try {
    const res = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true
        }
    });

    return NextResponse.json({ success: true, data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
