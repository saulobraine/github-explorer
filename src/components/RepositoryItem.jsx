export function RepositoryItem(props) {

  const { repository } = props;

  return (
    <li>
      <header>
        <strong>{repository?.name}</strong>
        <p>{repository.description}</p>
      </header>
      <footer>
        <a href={repository.html_url} target="_blank">
          Acessar repositório
    </a>
      </footer>
    </li>
  )
}