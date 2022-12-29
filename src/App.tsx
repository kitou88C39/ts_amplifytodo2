import { VStack } from '@chakra-ui/layout';
//import Main from './views/pages/Main';
import Top from './views/pages/Top';

const App: React.FC = () => {
  return (
    <VStack spacing={4} align='stretch' p={0}>
      <Top />
      {/* <Main /> */}
    </VStack>
  );
};

export default App;
