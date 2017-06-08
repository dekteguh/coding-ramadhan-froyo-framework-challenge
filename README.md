## Coding Ramadhan Froyo Framework

![](https://cdn-images-1.medium.com/max/800/1*Tdom1L0dWj0emW5EDQ6Vyg.jpeg?raw=true)

### PROBLEM

Perbaiki potongan kode berikut agar saat user mengakses http://localhost:3000/average browser akan menampilkan hasilnya seperti berikut ini: {“average”:45.2}

Petunjuk: Jangan lupa install Expressjs lewat NPM.

### SOLVE

- [x] Download file soal-ramadhan.js using curl or wget
- [x] Install express using `npm install express --save`
- [x] Line 19 add comma (,) => every object in personData should be separated by comma (,)
- [x] Move function ageAverage outside get('/') => it can be accessed
- [x] Change a.age to a => a is sum
- [x] Add , 0 after (a + b.age) => check reduce function in documentation `developer.mozilla.org`
- [x] ParseInt b.age because age type is string
- [x] Run `node soal-ramadhan.js`
- [x] Open browser and hit http://localhost:3000/average