export async function getLanguages(username: string, repoName: string) {
  const api = process.env.NEXT_PUBLIC_GITHUB_API;
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  //https://api.github.com/repos/devferx/astro-blog/languages
  const response = await fetch(
    `${api}/repos/${username}/${repoName}/languages`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 60 },
    },
  );
  console.log('Fetching languages for:', username, repoName);
  if (!response.ok) throw new Error('Error fetching languages data');
  return await response.json();
}
