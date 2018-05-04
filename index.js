'use strict'
import dateformat from 'dateformat'

function yesterdayone(timestamp, format) {
	const date = new Date(timestamp)

	date.setDate(date.getDate() - 1)

	return dateformat(date, format)
}

export default yesterdayone