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
    <div>
      {data.Search.map((m) => (
        <div key={m.imdbID}>
          <Link href={`/movie/${m.imdbID}`}>{m.Title}</Link>
          --- {m.Year}
        </div>
      ))}
    </div>
  );
};

async function fetcher(url) {
  const res = await fetch(url);

  const json = await res.json();

  return json;
}

export default Movies;
