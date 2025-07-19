'use client';
import { ArticleRepositories } from './articleRepositories';
import useRepoLanguages from '@/hooks/useLanguages';

type RepoItemProps = {
  username: string;
  repo: {
    name: string;
    description: string;
    language: string;
    visibility: string;
  };
};

function RepoItem({ username, repo }: RepoItemProps) {
  const languages = useRepoLanguages(username, repo.name);

  return (
    <ArticleRepositories
      username={repo.name}
      descripcion={repo.description}
      framework={repo.language}
      language={languages}
      visibility={repo.visibility}
      url={repo.html_url || "no url provided"}
    />
  );
}
export default RepoItem;
