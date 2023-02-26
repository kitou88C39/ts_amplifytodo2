//import { VStack } from '@chakra-ui/layout';
import Highscreen from '../components/top/Highscreen';
import Lowscreen from '../components/top/Lowscreen';

const Top: React.FC = () => {
  return (
    // <VStack spacing={4} align='stretch' p={0}>
    <div className='Top'>
      <Highscreen />
      <Lowscreen />
    </div>
    // </VStack>
  );
};

export default Top;
