import { Box, Stack, Heading, Flex, Button } from '@chakra-ui/react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';

type Props = { isLogin: boolean };
const Header: React.FC<Props> = (props) => {
  const { isLogin } = props;
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  //const { isOpen, onOpen, onClose } = useDisclosure();
  //const handleToggle = () => (isOpen ? onClose() : onOpen());

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
      p='3'
      rounded='md'
    >
      <Flex align='center' mr={5}>
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
      <Authenticator>
        {({ signOut, user }) => (
          <Box
            //display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            mt={{ base: 4, md: 0 }}
          >
            {user ? (
              <Button
                onClick={signOut}
                colorScheme='whatsapp'
                variant='outline'
                _hover={{ bg: 'green.200', borderColor: 'green.700' }}
              >
                {isLogin ? 'LogIn' : 'LogOut'}
              </Button>
            ) : (
              <Button
                onClick={signOut}
                colorScheme='whatsapp'
                variant='outline'
                _hover={{ bg: 'green.200', borderColor: 'green.700' }}
              >
                SignOut
              </Button>
            )}
          </Box>
        )}
      </Authenticator>
    </Flex>
  );
};

export default Header;
