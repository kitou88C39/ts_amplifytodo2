import { Box, Stack, Heading, Flex, Button } from '@chakra-ui/react';
//import { useAuthenticator } from '@aws-amplify/ui-react';
//import { Authenticator } from '@aws-amplify/ui-react';

import { Auth, Amplify } from 'aws-amplify';

//import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../../aws-exports';
Amplify.configure(awsExports);

type Props = { isLogin: boolean };
//const Header: React.FC = () => {
const Header: React.FC<Props> = (props) => {
  const { isLogin } = props;
  //const { user, signOut } = useAuthenticator((context) => [context.user]);

  //const { isOpen, onOpen, onClose } = useDisclosure();
  //const handleToggle = () => (isOpen ? onClose() : onOpen());

  // サインアウトボタンを設置
  const signOut = () => {
    Auth.signOut().catch((err: any) => console.log(err));
    //setCurrentUser(undefined);
  };

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding={4}
      bg='white'
      color='black'
      boxShadow='md'
      p='5'
      rounded='md'
    >
      <Flex align='center' mr={6}>
        <Heading as='h1' size='lg' letterSpacing={'tighter'}>
          Kairanban
        </Heading>
      </Flex>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        //display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems='center'
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      ></Stack>
      <Box>
        <Button
          onClick={signOut}
          colorScheme='whatsapp'
          variant='outline'
          _hover={{ bg: 'green.200', borderColor: 'green.700' }}
        >
          Sign Out
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
