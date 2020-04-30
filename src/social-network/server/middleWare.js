const errorHandler = (req,res,next) => {
    res.sendHTTPError = (status,message) => {
        res.status(status).json({message})
    }
    next()
}
module.exports = {
    errorHandler
}