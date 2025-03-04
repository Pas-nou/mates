import Image from "next/image";

import './home.css'

export default function Home() {
  return (
    <main id='homepage'>
      <Image
        src='/logo_mates.png'
        width={300}
        height={300}
        alt='Logo of Mates'
      />
      <div id='title-homepage-container'>
        <p id='title-homepage' >
          Fini de jouer solo !
        </p>
        <p id='title-homepage' >
          Trouve ton pote de jeu sur mates
        </p>
      </div>
      <div id="button-container-homepage">
        <a href="/user" id='button-homepage'>Start</a>
      </div>
    </main>
  );
}
