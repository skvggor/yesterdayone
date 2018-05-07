# yesterdayone

Get the yesterday from the date (JavaScript's [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object standard).

---

## Install & run

Install:

```bash
npm i yesterdayone
```

Run:

```js
const yesterday = rewquire('yesterdayone')

yesterday(new Date(), 'dd-mm-yyyy') // '03-05-2018'
yesterday('2018-05-04T18:31:17.594Z', 'yyyy-mm-dd') // '2018-05-03'
yesterday('2018-05-04T22:20:20', 'dd/mm/yyyy') // '03/05/2018'
yesterday('Tue 01-01-2009 6:00', 'dd/mm/yyyy') // '31/12/2008'
```
---

## License

The MIT License ([MIT](https://github.com/marcker/yesterdayone/blob/master/license.md))

Copyright (c) 2018 marcker
