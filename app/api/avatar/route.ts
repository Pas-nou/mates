import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try{
        const avatars = await prisma.avatar.findMany();
        return NextResponse.json(avatars)
    } catch (error) {
        return NextResponse.json({error :'Erreur lors de la récupération des avatars'})
    }
}