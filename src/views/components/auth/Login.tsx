import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { Amplify } from 'aws-amplify';
//import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
//import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../../aws-exports';
import awsconfig from '../../../aws-exports';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
Amplify.configure(awsExports);
Amplify.configure(awsconfig);
Auth.federatedSignIn();

awsconfig.oauth.redirectSignIn = `${window.location.origin}/`;
awsconfig.oauth.redirectSignOut = `${window.location.origin}/`;
Amplify.configure(awsconfig);

type Props = { isLogin: boolean };

const Login: React.FC<Props> = (props) => {
  const login = (name: string, password: string) => {
    console.log(name, password, navigate);
  };
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(name, password);
  };

  //const { isLogin } = props;
  //const { user, signOut } = useAuthenticator((context) => [context.user]);

  if (process.env.REACT_APP_AWS_BRANCH === 'master') {
    awsconfig.oauth.redirectSignIn = '<Your prod URL>';
    awsconfig.oauth.redirectSignOut = '<Your prod URL>';
  } else {
    awsconfig.oauth.redirectSignIn = '<Your dev URL>';
    awsconfig.oauth.redirectSignOut = '<Your dev URL>';
  }
  Amplify.configure(awsconfig);

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

        <Box
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
                onClick={() => navigate('/Main')}
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
        </Box>
      </Stack>
    </Flex>
  );
};
export default Login;
