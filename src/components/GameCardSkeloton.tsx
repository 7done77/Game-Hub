import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeloton = () => {
  return (
    <Card width={'300px'} borderRadius={10} overflow={'hidden'}>
      <Skeleton height={'200px'}></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeloton
