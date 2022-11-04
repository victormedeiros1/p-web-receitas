import useSWR from 'swr';

export default function Location() {
  const { data, error } = useSWR(
    'https://extreme-ip-lookup.com/json/?key=kCbsFJdk16GRNvqx4Alz',
    fetcher
  );

  if (error) return <div>falha na requisição...</div>;
  if (!data) return <div>carregando...</div>;

  const p = {
    borderBottom: '1px solid #ccc',
    fontFamily: 'Verdana, sans-serif',
    margin: 0,
    padding: '4px 0',
  };

  return (
    <div>
      {Object.keys(data).map((info) => (
        <div>
          <p style={p}>
            <b>{info}: </b>
            {data[info]}
          </p>
        </div>
      ))}
    </div>
  );
}

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();

  return json;
}
