'use client';
import { useGithubProfile } from '@/hooks/useGithubProfile';
import { textFont } from '@/config/fonts';
import RepoItem from './itemRepository';
import { ProfileAside } from './profileAside';
import { useState } from 'react';

interface Props {
  username: string;
}
export default function UseCard({ username }: Props) {
  const { user, repos, error } = useGithubProfile(username);
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-theme', newTheme);
    }
  };
  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p>Cargando...</p>;

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className={`${textFont.className} w-fit mx-auto mt-6 font-semibold grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6 md:gap-20 text-[var(--color-font)]`}
    >
      <ProfileAside user={user} />

      <main className="grid grid-cols-1 w-full max-w-4xl">
        <div className="flex items-center justify-between mb-4">
          <h1
            className={`${textFont.className} font-semibold text-lg sm:text-xl mb-2`}
          >
            Repositorios ({user.public_repos})
          </h1>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex ml-4 px-3 py-1 rounded bg-[var(--color-button)] text-white light:bg-[#2563eb]"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
        <nav className="flex items-center gap-2 flex-wrap my-4">
          <input
            className="flex-1 border-2 rounded-lg border-[var(--color-font)] px-4 py-1"
            type="text"
            placeholder="Find a repository"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex items-center gap-2">
            <form className="flex-1" action="#">
              <select
                className="bg-[var(--color-button)] light:bg-[#2563eb] rounded-lg border-none px-2 py-2"
                name="lenguajes"
                id="lang"
              >
                <option value="selecciona">Type</option>
                <option value="all">All</option>
                <option value="sources">Sources</option>
                <option value="fork">Fork</option>
                <option value="archived">Archived</option>
                <option value="mirror">Mirror</option>
              </select>
            </form>

            <form className="flex-1" action="#">
              <select
                className="bg-[var(--color-button)] light:bg-[#2563eb] rounded-lg border-none pl-2 py-2 pr-8"
                name="lenguajes"
                id="lang"
              >
                <option value="selecciona">Lenguaje</option>
                <option value="javascript">JavaScript</option>
                <option value="php">PHP</option>
                <option value="java">Java</option>
                <option value="golang">Golang</option>
                <option value="python">Python</option>
                <option value="c#">C#</option>
                <option value="C++">C++</option>
                <option value="erlang">Erlang</option>
              </select>
            </form>

            <form className="flex-1" action="#">
              <select
                className="bg-[var(--color-button)] light:bg-[#2563eb] rounded-lg border-none px-2 py-2"
                name="lenguajes"
                id="lang"
              >
                <option value="selecciona">Sort</option>
                <option value="all">All</option>
              </select>
            </form>
          </div>
        </nav>

        {filteredRepos.length > 0 && (
          <ul>
            {filteredRepos.map((repo) => (
              <li key={repo.id}>
                <RepoItem username={username} repo={repo} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
