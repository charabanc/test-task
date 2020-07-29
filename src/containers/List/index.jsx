import React from 'react'
import { inject, observer } from 'mobx-react'

class ListContainer extends React.Component {
	state = {
		loading: false
	}

	componentDidMount () {
		this.requestListData()
	}

	requestListData = async () => {
		const {store} = this.props

		try {
			this.setState({loading: true})

			await store.list.requestData()
		} catch (error) {
			alert('Произошла ошибка загрузки данных! Проверьте интернет.')
		} finally {
			this.setState({loading: false})
		}
	}

	render () {
		return this.props.children({
			loading: this.state.loading
		})
	}
}

export default inject('store')(observer(ListContainer))
