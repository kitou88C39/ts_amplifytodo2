import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react';
//import { useAppDispatch } from '../../../stores/hooks';
//import { createTodo } from '../../../stores/slices/todoSlice';
import { createTodoApi } from '../../../stores/slices/todoAPI';

const AddTodo: React.FC = () => {
  //const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const onSubmit = async (data: { title: string; content: string }) => {
    //const { title, content } = data;
    //dispatch(createTodo(data));
    await createTodoApi(data);
    reset();
  };

  return (
    <Box display='flex' justifyContent='center'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          isInvalid={errors.title}
          w={{ base: '90vw', sm: '80vw', md: '70vw', lg: '60vw' }}
        >
          <Textarea
            id='title'
            color='black'
            placeholder='Enter Title'
            _placeholder={{ color: 'inherit' }}
            {...register('title', { required: 'Please enter title.' })}
          />

          <FormErrorMessage>
            {errors.title && errors.title.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={errors.content}
          w={{ base: '90vw', sm: '80vw', md: '70vw', lg: '60vw' }}
        >
          <Textarea
            id='content'
            color='black'
            placeholder='Enter Content'
            _placeholder={{ color: 'inherit' }}
            {...register('content', { required: 'Please enter content.' })}
          />
          <FormErrorMessage>
            {errors.content && errors.content.message}
          </FormErrorMessage>
        </FormControl>
        <Box w='100%' display='flex' justifyContent='flex-end'>
          <Button
            mt={4}
            colorScheme='whatsapp'
            isLoading={isSubmitting}
            type='submit'
            variant='outline'
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddTodo;
