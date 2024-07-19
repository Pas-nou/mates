import Image from "next/image";
import Nav from "../components/nav";
import ManetteClient from "../components/ManetteClient"
import AudioPlayer from '../components/AudioPlayer';

import './manette.css'

// * Déclaration des types

interface User {
    id: number,
    pseudo: string,
    avatarId: number | null,
}

// * Récupération des users

const getUser = async () => {
    const res = await fetch(`http://localhost:3000/api/user`, { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};

export default async function Manette() {

    const users = await getUser();

    const lastUser = users.findLast((user: User) => user.id !== null)

    return (
        <main id="manette-page">
            <section id="section-manette">
                <Image
                    src='/logo_mates.png'
                    width={100}
                    height={100}
                    alt='Logo of Mates'
                />
                <header id="title-container-manette">
                    <h1 id="title-manette">`#!-_${lastUser.pseudo}\$^;`</h1>
                </header>
                <h2 id="manette-texts">Oups ! Il semble que tu aies cliqué sur la mauvaise manette. C&apos;est un peu comme essayer de jouer à Tetris avec une manette de Guitar Hero. Essaie encore ! 😅</h2>
                <h3 id="manette-texts">Allez, chez Mates, on est sympa, on te donne un petit indice : ⬇️</h3>
                <div id="button-manette-page">
                    <ManetteClient userId={lastUser.id} />
                </div>
                <AudioPlayer />
            </section>
            <Nav />
        </main>
    );
}

