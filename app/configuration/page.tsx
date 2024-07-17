import Image from "next/image";

import './configuration.css'

export default function Configuration() {
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
        <a href="/configuration" id='button-homepage'>Matchmaking</a>
      </div>
    </main>
  );
}
