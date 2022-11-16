import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

export default function Movies({ data }) {
  return (
    <div>
      <Card style={{ width: '200px' }}>
        <Card.Img style={{ width: '200px' }} variant="top" src={data.Poster} />
        <Card.Body>
          <Card.Title>{data.Title}</Card.Title>
          <Card.Text>
            {data.Year} --- Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { imdbID } = context.query;

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=1ecf8ec3&i=${imdbID}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
