import Link from 'next/link';

const Home = () => {
  return (
    <ul>
      <li>
        <Link href="/movies">Movies</Link>
      </li>
      <li>
        <Link href="/location">Location</Link>
      </li>
      <li>
        <Link href="/location2">Location2</Link>
      </li>
    </ul>
  );
};

export default Home;
