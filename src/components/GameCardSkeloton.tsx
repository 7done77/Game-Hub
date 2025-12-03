import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeloton = () => {
  return (
    <Card>
      <Skeleton height={'200px'}></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeloton
