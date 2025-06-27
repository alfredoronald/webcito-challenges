import { useEffect, useState } from 'react';
import { getLanguages } from '@/services/getLanguages';
import { RepoLanguages } from '@/interfaces/repoLanguages';
function useRepoLanguages(username: string, repoName: string) {
  const [languages, setLanguages] = useState<RepoLanguages[]>([]);

  useEffect(() => {
    getLanguages(username, repoName)
      .then((obj) => {
        setLanguages(Object.keys(obj));
      })
      .catch(() => {
        setLanguages([]);
      });
  }, [username, repoName]);

  return languages;
}

export default useRepoLanguages;
