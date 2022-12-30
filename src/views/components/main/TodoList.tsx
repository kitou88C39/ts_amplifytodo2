import { Flex, StackDivider, Text, VStack } from '@chakra-ui/react';
import TodoItem from './TodoItem';
import { useAppSelector } from '../../../stores/hooks';
import { selectTodoList } from '../../../stores/slices/todoSlice';

const TodoList: React.FC = () => {
  const TodoList = useAppSelector(selectTodoList);
  return (
    <Flex flexDir='column' align='center'>
      <VStack
        divider={<StackDivider borderColor='gray.300' />}
        align='stretch'
        w={{ base: '90vw', sm: '80vw', md: '70vw', lg: '60vw' }}
        border='2px'
        borderColor='gray.700'
        borderRadius='sm'
        p={3}
        maxH='65vh'
        overflow='scroll'
      >
        {TodoList.length === 0 ? (
          <Text align='center' fontWeight='bold' fontSize='lg'>
            No Todo
          </Text>
        ) : (
          TodoList.map((item: any) => {
            return (
              <TodoItem
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                isDone={item.isDone}
              />
            );
          })
        )}
        {/* <TodoItem id='fawhu' title='aaa' content='bbb' isDone={false} />
        <TodoItem id='cvvvv' title='ccc' content='ddd' isDone={true} /> */}
      </VStack>
    </Flex>
  );
};

export default TodoList;
