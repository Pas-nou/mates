import Image from "next/image";
import Nav from "../components/nav";

import BoomClient from "../components/BoomClient";

import './boom.css'

// * Déclaration des types

interface User {
  id: number,
  pseudo: string,
  avatarId: number | null,
}

interface Avatar {
  id: number,
  url: string,
}

// * Récupération des users

const getUser = async () => {
  const res = await fetch(`http://localhost:3000/api/user`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

// * Récupération des avatars

const getAvatar = async () => {
  const res = await fetch(`http://localhost:3000/api/avatar`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Boom() {

  const users = await getUser();
  const avatars = await getAvatar();

  const lastUser = users.findLast((user: User) => user.id !== null)
  const avatarUser = avatars.find((avatar: Avatar) => avatar.id === lastUser.avatarId)

  return (
    <main id='boom-page'>
      <Image
        src='/logo_mates.png'
        width={100}
        height={100}
        alt='Logo of Mates'
      />
      <header id="title-container-boom">
        <h1 id="title-boom">Bienvenue {lastUser.pseudo}</h1>
      </header>
      <section id="troll-content">
        <p id="text-boom">Tu ne l&apos;avais pas vu, mais voilà l&apos;avatar que tu as choisi : </p>
        <Image
          src={`/${avatarUser.url}`}
          width={150}
          height={150}
          alt="Avatar de l'utilisateur"
          id="avatar-boom"
        />
        <p id="text-boom">L&apos;application n'étant pas fonctionnelle (du moins pour le moment), saches que tu as perdu 5 minutes de ta vie</p>
        <p id="text-boom">Rassures toi, tu n'es pas tout seul, les personnes ci-dessous sont comme toi : </p>
        <section id="list-boom-container">
          <ul id="list-boom">
            {users.map((user: User) => (
              <li key={user.id}>{user.pseudo}</li>
            ))}
          </ul>
        </section>
        <p id="text-boom">
          PS: Ne cliques pas sur la les boutons en bas, ils sont juste là pour la décoration 😉<br />
          Si jamais tu veux supprimer ton pseudo de la liste, cliques sur la manette <BoomClient userId={lastUser.id} />.
        </p>
      </section>
      <Nav />
    </main>
  )
}
