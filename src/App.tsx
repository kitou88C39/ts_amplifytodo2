import { VStack } from '@chakra-ui/layout';
import Top from './views/pages/Top';
import Login from './views/components/auth/Login';
import Main from './views/pages/Main';
import { Route, Routes } from 'react-router-dom';
const App: React.FC = () => {
  return (
    <VStack spacing={4} align='stretch' p={0}>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </VStack>
  );
};

export default App;
