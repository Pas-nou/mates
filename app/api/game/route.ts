import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try{
        const games = await prisma.game.findMany();
        return NextResponse.json(games)
    } catch (error) {
        return NextResponse.json({error :'Erreur lors de la récupération des jeux'})
    }
}