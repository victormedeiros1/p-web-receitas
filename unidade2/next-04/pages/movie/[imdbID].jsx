import { useRouter } from 'next/router';

export default function Movies({ data }) {
  return (
    <div>
      <div style={{ maxWidth: 300, border: '1px solid gray', margin: 'auto' }}>
        <img src={data.Poster}></img>
        <br />
        <p style={{ fontFamily: 'verdana' }}>
          {data.Title}- {data.Year}
        </p>
      </div>
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
