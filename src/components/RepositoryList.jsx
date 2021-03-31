import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// https://api.github.com/users/saulobraine/repos

export function RepositoryList() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/saulobraine/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))

    console.log(repositories);
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios: <small>@saulobraine</small></h1>
      <ul>
        {repositories.map(repository =>
          <RepositoryItem key={repository.id} repository={repository} />
        )}
      </ul>

    </section>
  )
}