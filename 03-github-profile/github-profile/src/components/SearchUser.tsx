'use client';
import { useState } from 'react';

export default function SearchUser() {
  const [search, setSearch] = useState('');

  const UserName = search.toLowerCase();

  return (
    <div className="justify-center items-center flex flex-col w-full h-screen bg-[var(--color-bg)]">
      <div className="border-2 px-10 py-10 rounded-2xl ">
        <h1 className="justify-center flex mb-2.5 font-bold text-xl">
          Busca Tu Usuario
        </h1>
        <input
          className=" border-2 px-1.5 py-2 rounded-2xl"
          type="text"
          placeholder="Ingrese el nombre del perfil"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <a
            href={`/users/${UserName}`}
            className="
                flex bg-[var(--color-button)] text-white px-3 py-1.5 rounded-md hover:opacity-90 transition"
          >
            Buscar
          </a>
        </button>
      </div>
    </div>
  );
}
