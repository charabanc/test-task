import React from 'react'
import { inject, observer } from 'mobx-react'

import ListContainer from 'containers/List'

import Table from 'components/Table'

const ListPage = (props) => {
	return (
		<ListContainer>
			{() => (
				<Table
					data={props.store.list.data.slice()}
				/>
			)}
		</ListContainer>
	)
}

export default inject('store')(observer(ListPage))
