import { VStack } from '@chakra-ui/layout';
import AddTodo from '../components/main/AddTodo';
import Header from '../components/main/Header';
import TodoList from '../components/main/TodoList';

//import { Auth, Amplify, API, DataStore, graphqlOperation } from 'aws-amplify';
import { Auth, Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './../../aws-exports';
import { useState } from 'react';
Amplify.configure(awsExports);

const Main: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  Auth.currentUserInfo()
    .then((user: any) => {
      if (user == null) setIsLogin(true);
      else if (user != null) setIsLogin(false);
    })
    .catch((e: any) => {
      console.log(e);
    });

  return (
    <VStack spacing={6} align='stretch' p={0}>
      <Header isLogin={isLogin} />
      <AddTodo />
      <TodoList />
    </VStack>
  );
};

export default Main;
