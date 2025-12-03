import {
  Box,
  Card,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

const GenreList = () => {
  const { data, isLoading, error } = useGenres()
  const genres = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  if (error) return null

  if (isLoading)
    return (
      <>
        {genres.map((skeletonId) => (
          <Card key={skeletonId} padding={2} marginY={1}>
            <HStack spacing={4}>
              <SkeletonCircle size="8" />

              <Box width="100px">
                <SkeletonText noOfLines={1} skeletonHeight="4" />
              </Box>
            </HStack>
          </Card>
        ))}
      </>
    )

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'7px'}>
          <HStack>
            <Image
              boxSize={'32px'}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
