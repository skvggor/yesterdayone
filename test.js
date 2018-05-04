import yesterday from './index.js'
import test from 'ava'

test('get the yesterday when entering "2018-05-04T18:31:17.594Z"', t => {
	t.is( yesterday('2018-05-04T18:31:17.594Z', 'yyyy-mm-dd'), '2018-05-03' )
})

test('get the yesterday when entering "2018-05-04T22:20:20"', t => {
	t.is( yesterday('2018-05-04T22:20:20', 'dd/mm/yyyy'), '03/05/2018' )
})

test('get the yesterday when entering "Tue 01-01-2009 6:00"', t => {
	t.is( yesterday('Tue 01-01-2009 6:00', 'dd/mm/yyyy'), '31/12/2008' )
})

