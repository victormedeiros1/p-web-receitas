export default function Movies({ data }) {
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

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://extreme-ip-lookup.com/json/?key=kCbsFJdk16GRNvqx4Alz`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
