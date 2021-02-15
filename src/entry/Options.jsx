import { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import ScoopOption from './ScoopOption'
import ToppingOption from './ToppingOption'

export default function Options({ optionType }) {
	const [items, setItems] = useState([])

	/**
	 *  scoop:
	 *    name: string
	 *    imagePath: string
	 *  topping:
	 *    name: string
	 *    imagePath: string
	 * */

	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then(({ data }) => {
				setItems(data)
			})
			.catch(err => console.log(err))
	}, [optionType])

	const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption

	const optionItems = items.map(item => (
		<ItemComponent
			key={item.name}
			name={`${item.name} ${optionType === 'scoops' ? 'scoop' : 'topping'}`}
			imagePath={item.imagePath}
		/>
	))

	return <Row>{optionItems}</Row>
}
