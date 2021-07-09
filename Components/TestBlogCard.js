import { Box, TagLabel, Tag, HStack } from "@chakra-ui/react"
import Image from 'next/image'

const TestBlogCard = ({ currentTheme }) => {

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src='https://cdn-images-1.medium.com/max/1024/1*sXfZ41D32iIFcONHvUvtCg.png' alt='asach kahitari' height='300' width='500' />
            <Box p="6">
                <HStack spacing={2}>
                    <Tag size="sm" borderRadius="md" variant="subtle" colorScheme={currentTheme.name === 'light' ? "cyan" : "purple"}>
                        <TagLabel>hello</TagLabel>
                    </Tag>
                    <Tag size="sm" borderRadius="md" variant="subtle" colorScheme={currentTheme.name === 'light' ? "cyan" : "purple"}>
                        <TagLabel>hello</TagLabel>
                    </Tag>
                </HStack>
                <Box
                    mt="1"
                    as="h4"
                    lineHeight="tight"
                >
                    Title here
                </Box>
                <Box as="span" color="gray.600" fontSize="sm">
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                </Box>
            </Box>
        </Box>
    )
}

export default TestBlogCard
