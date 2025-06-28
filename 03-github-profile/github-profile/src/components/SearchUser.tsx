'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchUser() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const UserName = search.toLowerCase();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/users/${search.toLowerCase()}`);
    }
  };

  return (
    <div className="justify-center items-center flex flex-col w-full h-screen bg-[var(--color-bg)]">
      <div className="border-2 px-10 py-10 rounded-2xl ">
        <h1 className="justify-center flex mb-2.5 font-bold text-xl">
          Busca Tu Usuario
        </h1>
        <form onSubmit={handleSearch}>
        <input
          className=" border-2 px-1.5 py-2 rounded-2xl mt-3"
          type="text"
          placeholder="Ingrese el nombre del perfil"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex justify-center items-center mt-4">
        <button type="submit" >
          <a
            href={`/users/${UserName}`}
            className="
                flex bg-[var(--color-button)] px-10 py-2 rounded-xl hover:opacity-90 transition"
          >
            Buscar
          </a>
        </button>
        </div>
        </form>
      </div>
    </div>
  );
}
