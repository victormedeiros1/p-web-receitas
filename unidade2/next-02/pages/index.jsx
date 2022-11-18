import Card from '../src/components/Card';
import thumb from '/src/assets/images/thumb.jpg';

const Home = () => {
  return (
    <div>
      <Card
        title={'Flamengo x Real Madrid'}
        description={
          '"Vai ser 3x0 fácil com 2 de Gabigol e 1 de Pedro", diz José Victor torcedor do Flamengo no quarto Sonhar é de graça!'
        }
        thumb={thumb}
      />
    </div>
  );
};

export default Home;
