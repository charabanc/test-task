import { types as t, getSnapshot, flow } from 'mobx-state-tree'

import axios from 'axios'

const ListItem = t.model({
	id: t.number,
	firstName: t.string,
	lastName: t.string,
	email: t.string,
	phone: t.string,
	description: t.string,
	address: t.string
})

const List = t.model({
	data: t.optional(t.array(ListItem), [])
}).actions((self) => ({
	requestData: flow(function* (argument) {
		const response = yield axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')

		self.data = response.data.map((dataItem) => ListItem.create({
			...dataItem,
			address: dataItem.address.streetAddress
		}))
	})
}))

export default List
