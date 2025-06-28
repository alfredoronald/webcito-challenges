import { useEffect, useState } from 'react';
import { getLanguages } from '@/services/getLanguages';

function useRepoLanguages(username: string, repoName: string) {
  const [languages, setLanguages] = useState<string[]>([]);

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
