import {
  Flex,
  //Box,
  //FormControl,
  //FormLabel,
  //Input,
  //Checkbox,
  Stack,
  //Link,
  //Button,
  Heading,
  //Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Amplify } from 'aws-amplify';
//import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../../aws-exports';
Amplify.configure(awsExports);

type Props = { isLogin: boolean };

const Login: React.FC<Props> = (props) => {
  const { isLogin } = props;
  //const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.100', 'gray.800')}
    >
      <Stack spacing={10} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              {user ? (
                <h1 className='font-bold text-white'>
                  <button
                    onClick={signOut}
                    className='inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-emerald-700 hover:bg-white lg:mt-0'
                  >
                    {isLogin ? 'LogIn' : 'LogOut'}
                  </button>
                  Manager：{user.username}
                </h1>
              ) : (
                <button
                  onClick={signOut}
                  className='inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-emerald-700 hover:bg-white lg:mt-0'
                >
                  LogOut
                </button>
              )}
            </main>
          )}
        </Authenticator>
        {/* <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id='name'>
              <FormLabel>Name</FormLabel>
              <Input type='name' />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input type='password' />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'green.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}
              >
                Sign In
              </Button>
            </Stack>
          </Stack>
        </Box> */}
      </Stack>
    </Flex>
  );
};
export default Login;
