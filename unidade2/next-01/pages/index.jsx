import Success from './success';
import { Failure } from './failure';

const Home = () => {
  Success();
  Failure();
  return <h1>Running Next!</h1>;
};

export default Home;
