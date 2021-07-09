import { Box, TagLabel, Tag, HStack } from "@chakra-ui/react"
import Image from 'next/image'

const BlogCard = ({ blog, currentTheme }) => {

    return (
        <div style={{whiteSpace: 'initial'}}>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={blog.thumbnail} alt='asach kahitari' height='300' width='500' />
                <Box p="6">
                    <HStack spacing={2}>
                        {
                            blog.categories.slice(0,3).map((category, key) => {
                                return (
                                    <div key={key}>
                                        <Tag size="sm" borderRadius="md" variant="subtle" colorScheme={currentTheme.name === 'light' ? "cyan" : "purple"}>
                                            <TagLabel>{category}</TagLabel>
                                        </Tag>
                                    </div>
                                )
                            })
                        }
                    </HStack>
                    <Box
                        mt="1"
                        as="h4"
                        lineHeight="tight"
                    >
                        {blog.title}
                    </Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                        {blog.description.replace(/(<([^>]+)>)/ig, '').slice(0, 85) + ' . . .'}
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default BlogCard
