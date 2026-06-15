import Container from "../layout/container";
import SectionHeading from "../common/section-heading";
import GithubCard from "../common/github-card";
import { getGithubRepos } from "@/lib/github";

export default async function GithubSection() {
  const repos = await getGithubRepos();

  return (
    <section className="relative py-28">
      <Container>
        <SectionHeading
          subtitle="GitHub"
          title="Latest Repositories & Open Source Work"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo: any) => (
            <GithubCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              stars={repo.stargazers_count}
              forks={repo.forks_count}
              url={repo.html_url}
              language={repo.language}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}