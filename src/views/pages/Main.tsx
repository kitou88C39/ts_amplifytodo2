import { VStack } from '@chakra-ui/layout';
import AddTodo from '../components/main/AddTodo';
import Header from '../components/main/Header';
import TodoList from '../components/main/TodoList';

const Main: React.FC = () => {
  return (
    <VStack spacing={4} align='stretch' p={0}>
      <Header />
      <AddTodo />
      <TodoList />
    </VStack>
  );
};

export default Main;
