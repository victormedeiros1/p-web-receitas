import Success from './success';
import { Failure } from './failure';

const Home = () => {
  Success();
  Failure();
  return (
    <div>
      <h1>Running NextJS</h1>
      <h2>Verify functions in console!</h2>
    </div>
  );
};

export default Home;
