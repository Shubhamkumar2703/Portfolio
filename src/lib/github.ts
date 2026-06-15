export async function getGithubRepos() {
  const username =
    process.env.GITHUB_USERNAME;

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch GitHub repositories"
    );
  }

  return response.json();
}