import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card } from 'react-bootstrap';

export default function Movies({ data }) {
  if (data.Error) return <div>Nenhum filme encontrado</div>;
  return (
    <div className="d-flex">
      {data.Search.map(({ Poster, Title, Year }) => (
        <div key={Title}>
          <Card>
            <Card.Img style={{ width: '200px' }} variant="top" src={Poster} />
            <Card.Body>
              <Card.Text>
                {Year} --- Lorem ipsum dolor sit amet, consectetur adipiscing
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

export async function getServerSideProps(context) {
  const { key } = context.query;
  const res = await fetch(`http://www.omdbapi.com/?apikey=1ecf8ec3&s=${key}`);

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
