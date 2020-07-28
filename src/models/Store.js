import { types as t, getSnapshot } from 'mobx-state-tree'

import List from './List'

const Store = t.model({
	list: t.optional(List, {})
})

export default Store.create({})
