import { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import ScoopOption from './ScoopOption'

export default function Options({ optionType }) {
	const [items, setItems] = useState([])

	/**
	 *  scoop:
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

	// TODO replace null with ToppingOption implementation
	const ItemComponent = optionType === 'scoops' ? ScoopOption : null

	const optionItems = items.map(item => (
		<ItemComponent
			key={item.name}
			name={`${item.name} scoop`}
			imagePath={item.imagePath}
		/>
	))

	return <Row>{optionItems}</Row>
}
