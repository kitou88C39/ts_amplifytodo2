import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Icon,
  Text,
  Button,
} from '@chakra-ui/react';

import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from 'react-icons/ri';

import moment from 'moment';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { useAppDispatch } from '../../stores/hooks';
import {
  deleteTodo,
  editTodo,
  updateTodo,
} from '../../stores/slices/todoSlice';

type Props = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

const TodoItem: React.FC<Props> = ({ id, title, content, isDone }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useAppDispatch();
  const handleUpdate = () => {
    dispatch(updateTodo(id));
  };
  const handleEdit = () => {
    dispatch(editTodo(id));
  };
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
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
          <p color='gray.400'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
          {title}
          {/* {content} */}
        </Text>
      </Flex>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h='600px' w='1000px'>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{content}</ModalBody>
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
  );
};

export default TodoItem;
