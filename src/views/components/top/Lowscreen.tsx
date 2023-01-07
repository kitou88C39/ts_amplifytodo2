import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
//import { AddIcon, ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons';
import { BsKeyboard, BsCheckSquare } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
//import { AiOutlineDoubleRight } from 'react-icons/Ai';
import { Center } from '@chakra-ui/react';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={20}
        h={20}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.800'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.800'}>{text}</Text>
    </Stack>
  );
};

export default function Lowerscreen() {
  return (
    <Box p={12}>
      <Text
        color={'black'}
        as={'span'}
        fontWeight='bold'
        fontSize={{ base: 'lg', lg: '2xl' }}
      >
        <Center color='black'>
          町内の情報と住民をつなぐ情報共有プラットホーム
        </Center>
      </Text>
      <br />
      <Text
        color={'black'}
        as={'span'}
        fontSize={{ base: 'lg', lg: '5xl' }}
        fontWeight='bold'
      >
        <Center color='black'>Kairanban</Center>
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={20} p={20}>
        <Center>
          <Feature
            icon={<Icon as={BiLogIn} w={14} h={14} />}
            title={'1. 新規登録及びログインする'}
            text={'New Registration and Login'}
          />
        </Center>
        {/* <h3>
          <AiOutlineDoubleRight />
        </h3> */}
        <Center>
          <Feature
            icon={<Icon as={BsKeyboard} w={14} h={14} />}
            title={'2. 情報を投稿する及び編集する'}
            text={'Posting and Editing Information'}
          />
        </Center>
        {/* <h3>
          <AiOutlineDoubleRight />
        </h3> */}
        <Center>
          <Feature
            icon={<Icon as={BsCheckSquare} w={14} h={14} />}
            title={'3. 他人の投稿記事を読んだら、既読チェックする'}
            text={'When you read someone else post, check your read'}
          />
        </Center>
      </SimpleGrid>
    </Box>
  );
}
