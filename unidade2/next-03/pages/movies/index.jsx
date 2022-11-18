import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';

export async function getServerSideProps(context) {
  const { text } = context.query;
  const res = await fetch(`http://www.omdbapi.com/?apikey=1ecf8ec3&s=${text}`);

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const Movies = ({ data }) => {
  return (
    <div>
      <form>
        <label htmlFor="text-input">Pesquise por título</label>
        <input id="text-input" name="text" type="text" />
        <input type="submit" value="Enviar" />
      </form>

      <div className="d-flex flex-wrap gap-4">
        {data.Error ? (
          <div>Nada encontrado</div>
        ) : (
          data.Search.map(({ imdbID, Year, Title, Poster }) => (
            <Card className="p-3" key={imdbID}>
              <img width="200" height="200" src={Poster} />
              {Title} --- {Year}
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Movies;
