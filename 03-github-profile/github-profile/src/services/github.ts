export async function getUser(username: string) {
  const api = process.env.NEXT_PUBLIC_GITHUB_API;
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  console.log('Fetching user data for:', token);
  const response = await fetch(`${api}/users/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: 60 },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}
  