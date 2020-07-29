import React, {useState, useMemo} from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
	root: {
		fontSize: 16
	}
})

export default () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>Загружается ..</div>
	)
}
