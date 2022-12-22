import { Box, Text, Flex, Image } from "@chakra-ui/react";

// type SubmenuItemProps = {
//   title: string;
//   desc: string;
//   toggler: Function;
//   img_url: string;
// };

export default function SubmenuItem({
  title,
  desc,
  toggler,
  img_url,
  url,
}) {
  return (
    <a href={url}>
      <Flex onClick={() => toggler()} gap="1rem">
        <Box>
          <Image w="30px" src={img_url} />
        </Box>
        <Box _hover={{ color: "blue" }}>
          <Text mb="0.5rem" fontWeight="medium" transition="0.2s all ease-in">
            {title}
          </Text>
          <Text
            color="#4C5157"
            fontWeight="medium"
            fontFamily="sans-serif"
            mb="1rem"
            maxW="12rem"
          >
            {desc}
          </Text>
        </Box>
      </Flex>
    </a>
  );
}
