import useSWR from 'swr';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

export default function Movies() {
  const [url, setUrl] = useState('');

  const { data, error } = useSWR(url, theFetcher);

  const onClickHandler = (e) => {
    e.preventDefault();

    if (url === '') setUrl('http://www.omdbapi.com/?apikey=1ecf8ec3&s=bagdad');
    else setUrl('');
  };

  return (
    <div>
      <TheLink url={url} handler={onClickHandler} />

      <TheMovies
        data={
          error ? { error: 'Erro na pesquisa' } : data ? data : { Search: '' }
        }
        show={url !== ''}
      />
    </div>
  );
}

async function theFetcher(url) {
  if (url === null || url === '') return { Search: '' };

  const res = await fetch(url);

  const json = await res.json();

  return json;
}

export function TheMovies({ data, show }) {
  if (!show) return <div></div>;

  if (data.error) return <div>falha na requisição</div>;

  if (data.Search === '') return <div>carregando...</div>;
  console.log(data);
  return (
    <div className="d-flex gap-3">
      {data.Search.map((m) => (
        <div>
          <Card>
            <Card.Img style={{ width: '200px' }} variant="top" src={m.Poster} />
            <Card.Body>
              <Card.Title>
                <Link href={`/movie/${m.imdbID}`}>{m.Title}</Link>
              </Card.Title>
              <Card.Text>
                {m.Year} --- Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export function TheLink({ url, handler }) {
  return (
    <div className="m-2">
      <Link href="/movies3.js" onClick={handler}>
        <button className="btn btn-primary">
          {url === '' ? 'Mostrar' : 'Ocultar'}
        </button>
      </Link>
      <Link href="/searchMovies">Procure por filmes...</Link>
    </div>
  );
}
