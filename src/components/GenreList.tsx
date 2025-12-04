import {
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react'
import useGenres, { type Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
    <>
      <Heading fontFamily={'2xl'} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={'7px'}>
            <HStack>
              <Image
                boxSize={'32px'}
                borderRadius={8}
                objectFit={'cover'}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
                onClick={() => onSelectGenre(genre)}
                fontSize={'lg'}
                variant={'link'}
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
