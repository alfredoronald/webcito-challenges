'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchUser() {
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('dark'); // Default theme
  const router = useRouter();
  const UserName = search.toLowerCase();

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-theme', newTheme);
    }
  };
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/users/${search.toLowerCase()}`);
    }
  };

  return (
    <div className="justify-center items-center flex flex-col w-full h-screen bg-[var(--color-bg)] ">
      
      <div className="border-2 px-10 py-10 rounded-2xl light:border-black  ">
        <button
        type="button"
        onClick={toggleTheme}
        className="flex ml-32 mt-[-10px ] mb-2 px-3 py-1 rounded bg-[var(--color-button)] light:bg-[#2563eb] text-white"
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
        <h1 className="justify-center flex mb-2.5 font-bold text-xl">
          Busca Tu Usuario
        </h1>

        <form onSubmit={handleSearch}>
          <input
            className=" border-2 light:border-black  px-1.5 py-2 rounded-2xl mt-3"
            type="text"
            placeholder="Ingrese el nombre del perfil"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex justify-center items-center mt-4">
            <button
              type="submit"
              className="bg-[var(--color-button)] light:bg-[#2563eb] text-white rounded-2xl"
            >
              <a
                href={`/users/${UserName}`}
                className="
                flex px-10 py-2 rounded-xl hover:opacity-90 transition"
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
