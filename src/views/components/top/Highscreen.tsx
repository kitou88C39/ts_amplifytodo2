import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Upperscreen() {
  const navigate = useNavigate();

  return (
    <Flex
      w={'full'}
      h={'45vh'}
      background={'green.300'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.500, transparent)'}
      >
        <Stack maxW={'5xl'} align={'flex-start'} spacing={12}>
          <Text
            color={'white'}
            fontWeight={800}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '4xl', md: '4xl' })}
          >
            知り得た情報を速やかに投稿しよう
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'white'}
              rounded={'full'}
              color={'green.600'}
              _hover={{ bg: 'gray.200' }}
              onClick={() => navigate('/Login')}
            >
              Get start
            </Button>
            {/* <Button
            bg={'whiteAlpha.400'}
            rounded={'full'}
            color={'black'}
            _hover={{ bg: 'whiteAlpha.900' }}
          >
            Get Start
          </Button> */}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
