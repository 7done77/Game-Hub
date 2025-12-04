import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
  onSelectSordOrder: (sortOrder: string) => void
  sortOrder: string
}

const SortSelector = ({ onSelectSordOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevace' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacitic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ]

  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSordOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
