import { Box, TagLabel, Tag, HStack } from "@chakra-ui/react"
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Work.module.css'

const BlogCard = ({ blog, currentTheme }) => {

    return (
        <div style={{ whiteSpace: 'initial' }}>
            <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden" bg={currentTheme.secondary}>
                <Image src={blog.thumbnail} alt='asach kahitari' height='300' width='500' />
                <Box p="6">
                    <HStack spacing={2}>
                        {
                            blog.categories.slice(0, 3).map((category, key) => {
                                return (
                                    <div key={key}>
                                        <Tag size="sm" borderRadius="md" variant="outline" colorScheme="blue">
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
                    <Box as="span" color={currentTheme.subtext} fontSize="sm">
                        {blog.description.replace(/(<([^>]+)>)/ig, '').slice(0, 85) + ' . . .'}
                    </Box>
                    <div style={{marginTop: '1rem'}}>
                        <Box>
                            <Link href={blog.link}><a className={styles.cta2} style={{ color: '#3182ce' }}>View More</a></Link>
                        </Box>
                    </div>
                </Box>
            </Box>
        </div>
    )
}

export default BlogCard
