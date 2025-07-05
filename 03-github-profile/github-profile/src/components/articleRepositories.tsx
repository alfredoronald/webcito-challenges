import Image from 'next/image';

interface ArticleRepositoriesProps {
  username: string;
  descripcion?: string;
  framework?: string;
  language?: string[];
  visibility?: string;
}

export function ArticleRepositories({
  username,
  descripcion,
  framework,
  language,
  visibility,
}: Readonly<ArticleRepositoriesProps>) {
  return (
    <div className="grid mb-6 w-full p-3 sm:p-4 border rounded-xl shadow-sm bg-[var(--color-bg-card)]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
        <h2 className="text-[var(--color-title-card)] font-bold text-lg">
          {username}
          <span className="ml-2 text-amber-50 text-xs font-medium border-1 py-1 px-2 rounded-2xl">
            {visibility}
          </span>
        </h2>
        <button className="flex items-center gap-2 bg-[var(--color-button)] light:bg-[#2563eb] text-white px-3 py-1.5 rounded-md hover:opacity-90 transition">
          <Image
            src="/icons/star.svg"
            alt="Star"
            width={20}
            height={20}
            className="flex"
          />
          <span>Star</span>
        </button>
      </div>

      {descripcion && (
        <p className="text-[14px] text-[var(--color-font)] mb-2">
          {descripcion}
        </p>
      )}

      <div>
        {language && language.length > 0 ? (
          <ul className="flex flex-wrap gap-2 mt-2 text-xs">
            {language.map((lang, idx) => (
              <li
                className="text-[var(--color-title-card)] rounded-2xl bg-[var(--color-language-card)] light:bg-#1f6feb py-1 px-1.5"
                key={idx}
              >
                {lang}
              </li>
            ))}
          </ul>
        ) : (
          <span>No languages found</span>
        )}
        {framework && (
          <span className="text-xs text-gray-400 ">{framework}</span>
        )}
      </div>
    </div>
  );
}
