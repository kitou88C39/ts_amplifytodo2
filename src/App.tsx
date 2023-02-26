import { VStack } from '@chakra-ui/layout';
import Top from './views/pages/Top';
import Login from './views/components/auth/Login';
import Main from './views/pages/Main';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <VStack spacing={4} align='stretch' p={0}>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/Login' element={<Login isLogin={isLogin} />} />
        <Route path='/Main' element={<Main />} />
      </Routes>
    </VStack>
  );
};

export default App;
