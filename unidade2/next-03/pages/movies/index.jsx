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
  console.log(data);
  return (
    <div>
      <form>
        <label htmlFor="text-input">Pesquise por título</label>
        <input id="text-input" name="text" type="text" />
        <input type="submit" value="Enviar" />
      </form>

      <div>
        {data.Error ? (
          <div>Nada encontrado</div>
        ) : (
          data.Search.map(({ imdbID, Year, Title, Poster }) => (
            <div key={imdbID}>
              {Title} --- {Year}
              <img width="100 " src={Poster} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Movies;
