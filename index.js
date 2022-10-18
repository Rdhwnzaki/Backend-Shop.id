const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

let dataProducts = [
    {
        id_product: 1,
        name_product: 'Baju',
        stock_product: 50,
        price_product: 170000
    },
    {
        id_product: 2,
        name_product: 'Celana',
        stock_product: 30,
        price_product: 210000
    }
]

const Middle = function (req, res, next) {
    const { username, password } = req.body
    if (username == 'ridhwan' && password == 'ridhwan') {
        console.log('Berhasil menghapus data products')
        next()
    } else {
        console.log('Username dan Password salah')
        res.json({ message: 'Username dan Password salah' })
    }
}

app.get('/products', (req, res) => {
    res.json(dataProducts)
})

app.post('/products', (req, res) => {
    dataProducts = [...dataProducts, req.body]
    res.json({ status: 200, message: 'Berhasil memasukan data', dataProducts: dataProducts })
})
app.put('/products/:id_product', (req, res) => {
    let { id_product, name_product, stock_product, price_product } = req.body
    let newItem = { id_product, name_product, stock_product, price_product }

    let newDataProducts = dataProducts.map(item => {
        if (item.id_product == req.params.id_product) {
            return req.body
        } else {
            return item
        }
    })
    dataProducts = [...newDataProducts]
    res.json({ status: 200, message: 'Berhasil mengubah data', dataProducts: dataProducts })
})

app.delete('/products/:id_product', Middle, (req, res) => {
    let id_product = req.params.id_product
    let newDataProducts = []
    dataProducts.forEach(item => {
        if (item.id_product != id_product) {
            newDataProducts = [...newDataProducts, item]
        }
    })
    dataProducts = [...newDataProducts]
    res.json({ status: 200, message: `Berhasil menghapus data ke ${id_product}`, dataProducts: dataProducts })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})