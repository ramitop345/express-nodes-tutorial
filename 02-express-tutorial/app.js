const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1> <a href= "/api/products">products</a>')
})
app.get('/api/products',(req,res) => {
const newProducts = products.map((product)=>{
    const {id,name,image} = product
    return{id,name,image}
    })

res.json(newProducts)
})

app.get('/api/products',(req,res)=>{
    
})


// //this method returns single product bei adding "1" after url
// app.get('/api/products/1',(req,res)=>{
//     const singleProduct = products.find((product)=>{
//         product.id === 1
//     })
//     res.json(singleProduct)
// })

//this method returns product y id
app.get('/api/products/:productID',(req,res)=>{
    //console.log(req)
    console.log(req.params)

    const {productID} = req.params;
    const singleProduct = products.find((product) =>
        product.id === Number(productID))
        if (!singleProduct){
            return res.status(404).send('Product Does Not Exist')
        }
        console.log(singleProduct)
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) =>{
    res.send('hello world')
})

app.get('/api/v1/query', (req,res) => {
    res.send('Hello  World')
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search){
    sortedProducts = sortedProducts.filter((product) =>{
return product.name.startsWith(search)
    })

}
if (limit){
return sortedProducts = sortedProducts.slice(0,Number(limit))
}
res.status(200).json(sortedProducts)
//res.send('Hello World')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})