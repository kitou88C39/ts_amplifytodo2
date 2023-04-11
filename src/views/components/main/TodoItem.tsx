import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Icon,
  Text,
  Textarea,
  Button,
  Container,
} from '@chakra-ui/react';
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from 'react-icons/ri';
import moment from 'moment';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { useAppDispatch } from '../../../stores/hooks';
import { editTodoRealTime } from '../../../stores/slices/todoSlice';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { updateTodoApi, deleteTodoApi } from '../../../stores/slices/todoAPI';
//import { useAuthenticator } from '@aws-amplify/ui-react';
type Props = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

const TodoItem: React.FC<Props> = ({ id, title, content, isDone }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(content);
  const dispatch = useAppDispatch();

  const handleUpdate = async () => {
    try {
      const switchIsDone = !isDone;
      const data = { id, isDone: switchIsDone };
      await updateTodoApi(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    if (isEdit) {
      dispatch(editTodoRealTime({ id: id, content: text }));
    }
    setIsEdit(!isEdit);
  };
  const handleDelete = async () => {
    try {
      const data = { id };
      await deleteTodoApi(data);
    } catch (error) {
      console.error(error);
    }
  };

  //Read配列とUser配列を結合して、Todo配列のプロパティに誰が既読したかを入れた後、その結合させた配列をforを使って既読した人を表示
  interface Todo {
    id: number;
    title: string;
    content: string;
    isRead: boolean;
    readers: string[];
  }

  interface User {
    id: number;
    name: string;
  }

  interface Read {
    todoId: number;
    readerId: String;
  }

  const todos: Todo[] = [
    { id: 1, title: '', content: '', isRead: false, readers: [] },
    { id: 2, title: '', content: '', isRead: false, readers: [] },
    { id: 3, title: '', content: '', isRead: false, readers: [] },
  ];

  const users: User[] = [
    { id: 1, name: '' },
    { id: 2, name: '' },
    { id: 3, name: '' },
  ];

  const reads: Read[] = [
    { todoId: 1, readerId: '' },
    { todoId: 2, readerId: '' },
    { todoId: 3, readerId: '' },
  ];

  // const Todos = todos.map((todo) => {
  //   const readers = reads
  //     .filter((read) => read.todoId === todo.id)
  //     .map((read) => users.find((user) => user.id === read.todoId)?.name ?? '');
  //   return { ...todo, readers };
  // });

  const Todos = todos.map((todo) => {
    const readers = reads
      .filter((read) => read.todoId === todo.id)
      .map((read) => users.find((user) => user.id === read.todoId)?.name ?? '');
    const isRead = readers.length > 0; // readers配列が空でなければisReadをtrueに設定する
    return { ...todo, readers, isRead };
  });

  for (const todo of Todos) {
    if (todo.isRead) {
      console.log(
        `Todo ${
          (todo.title, todo.content)
        } is already read by ${todo.readers.join(', ')}`
      );
    }
  }

  return (
    <>
      <Flex w='100%' align='center' justify='space-between'>
        <Flex align='center'>
          <Icon
            as={isDone ? RiCheckboxCircleFill : RiCheckboxBlankCircleLine}
            color='orange'
            cursor='pointer'
            h={6}
            mr={2}
            w={6}
            onClick={handleUpdate}
          />
          <Text fontSize='xl' onClick={onOpen}>
            <p color='gray.600'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            {title}
          </Text>
        </Flex>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          {/* <ModalContent h='600px' w='1000px'> */}
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <Container bg='green.500' maxW='2xl' color='white'>
              <ModalCloseButton />
              <ModalBody>
                {isEdit ? (
                  <Textarea
                    value={text}
                    onChange={(event) => {
                      setText(event.target.value);
                    }}
                  />
                ) : (
                  <ReactMarkdown>{content}</ReactMarkdown>
                )}
              </ModalBody>
            </Container>
            <ModalFooter gap={7}>
              <Icon
                as={BsPencil}
                color='orange'
                cursor='pointer'
                h={6}
                w={6}
                onClick={handleEdit}
              />
              <Icon
                as={BsTrash}
                color='orange'
                cursor='pointer'
                h={6}
                w={6}
                onClick={handleDelete}
              />
              <Button
                mt={1}
                colorScheme='whatsapp'
                type='submit'
                variant='outline'
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export default TodoItem;
