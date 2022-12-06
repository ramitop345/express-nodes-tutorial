const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const time = new Date().toUTCString()
    console.log(method,url,time)
    next()  // this is crutial to pass on to the nex middleware, else you encounter an error on thw website
}


module.exports =logger