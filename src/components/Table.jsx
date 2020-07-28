import React, {useState, useMemo} from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
	table: {
		margin: 30,

		'& tr td': {
			border: '1px solid #ccc',
			margin: 2,

			'&:hover': {
				background: '#f2f2f2'
			}
		},
	}
})

export default ({data: listItems}) => {
	if (!listItems || !listItems.length) {
		return null
	}

	const [sortCondition, setSortCondition] = useState({
		property: 'id',
		increase: true
	})

	const classes = useStyles()
	const properties = Object.keys(listItems[0])
	const sortedItems = useMemo(() => {
		if (!sortCondition) return listItems

		const sorted = listItems.slice().sort()

		return sortCondition.increase ? sorted : sorted.reverse()
	}, [sortCondition, listItems])

	return (
		<table className={classes.table}>
			<tbody>
				<tr>
					{properties.map((currentProperty, index) => (
						<td key={index} onClick={() => {
							setSortCondition({
								property: currentProperty,
								increase: sortCondition && sortCondition.property === currentProperty ? !sortCondition.increase : true
							})
						}}>
							{currentProperty}
						</td>
					))}
				</tr>
				{sortedItems.map((currentListItem, index) => (
					<tr key={index}>
						{properties.map((currentProperty, index) => (
							<td key={index}>{currentListItem[currentProperty]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
