import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

import Image from "next/image";

import './config.css'

export default function Configuration() {

  async function GET() {
    return NextResponse.json({ message: "Let's play!" })
  }

  async function POST(request: Request) {
    try {
      const prisma = new PrismaClient();

      const { pseudo, avatar } = await request.json();

      if (!pseudo) {
        return NextResponse.json({ message: "Pseudo is required" }, { status: 400 });
      }

      const result = await prisma.user.create({
        data: {
          pseudo,
          avatar,
        }
      })

      return NextResponse.json({ message: "New user created with the id ${result.id}" })
    } catch (err) {
      return NextResponse.json({ error: err })
    }
  }
  return (
    <main id="configuration-page">
      <Image
        src='/logo_mates.png'
        width={100}
        height={100}
        alt='Logo of Mates'
      />
      <section id="input-container">
        <label htmlFor="pseudo"></label>
        <input
          id="pseudo"
          name="pseudo"
          type="text"
          placeholder="Quel est ton pseudo?" />
        <label htmlFor="avatar"></label>
        <select
          id="avatar"
          name="avatar">
          <option value="">Choisis ton avatar</option>
        </select>
        <label htmlFor="plateform"></label>
        <select
          id="plateform"
          name="plateform">
          <option value="">Sur quelle plateforme tu joues?</option>
        </select>
        <label htmlFor="categorie"></label>
        <select
          id="categorie"
          name="categorie">
          <option value="">Tes categories preferees?</option>
        </select>
        <label htmlFor="game"></label>
        <select
          id="game"
          name="game">
          <option value="">Tes jeux preferes?</option>
        </select>
      </section>
      <div id="button-container-homepage">
        <a type='submit' href="/configuration" id='button-homepage'>Matchmaking</a>
      </div>
    </main>
  );
}
