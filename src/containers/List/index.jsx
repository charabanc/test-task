import React from 'react'
import { inject, observer } from 'mobx-react'

class ListContainer extends React.Component {
	componentDidMount () {
		this.requestListData()
	}

	requestListData = async () => {
		const {store} = this.props

		try {
			await store.list.requestData()
		} catch (error) {
			alert('Произошла ошибка загрузки данных! Проверьте интернет.')
		}
	}

	render () {
		return this.props.children()
	}
}

export default inject('store')(observer(ListContainer))
