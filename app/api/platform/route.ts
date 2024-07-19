import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const platforms = await prisma.platform.findMany();
        return NextResponse.json(platforms)
    } catch (error: any) {
        return NextResponse.json({ error })
    }
}