interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem({ repository }: RepositoryItemProps) {

  const { name, description, html_url } = repository;

  return (
    <li>
      <header>
        <strong>{name}</strong>
        <p>{description}</p>
      </header>
      <footer>
        <a href={html_url} target="_blank">
          Acessar repositório
    </a>
      </footer>
    </li>
  )
}