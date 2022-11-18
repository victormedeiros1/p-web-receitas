import useSWR from 'swr';
import Link from 'next/link';

const Movies = () => {
  const { data, error } = useSWR(
    `http://www.omdbapi.com/?apikey=1ecf8ec3&s=bagdad`,
    fetcher
  );

  if (error) return <div>falha na requisição...</div>;
  if (!data) return <div>carregando...</div>;

  return (
    <ul>
      {data.Search.map((m) => (
        <li style={{ padding: 8, fontFamily: 'verdana' }} key={m.imdbID}>
          <Link style={{ textDecoration: 'none' }} href={`/movie/${m.imdbID}`}>
            {m.Title}{' '}
          </Link>
          - {m.Year}
        </li>
      ))}
    </ul>
  );
};

async function fetcher(url) {
  const res = await fetch(url);

  const json = await res.json();

  return json;
}

export default Movies;
