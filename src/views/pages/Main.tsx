import { VStack } from '@chakra-ui/layout';
import AddTodo from '../components/AddTodo';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

const Main: React.FC = () => {
  return (
    <VStack spacing={10} align='stretch' p={0}>
      <Header />
      <AddTodo />
      <TodoList />
    </VStack>
  );
};

export default Main;
