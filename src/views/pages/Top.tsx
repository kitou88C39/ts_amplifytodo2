import Highscreen from '../components/top/Highscreen';
import Lowscreen from '../components/top/Lowscreen';

const Top: React.FC = () => {
  return (
    <div className='Top'>
      <Highscreen />
      <Lowscreen />
    </div>
  );
};

export default Top;
