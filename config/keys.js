module.exports = {
    port: process.env.PORT || 4000,
    nodeEnv: process.env.NODE_ENV || 'development',
    mongoURI: process.env.MONGO_URI || 'mongodb+srv://user97:user97@cluster0.hbcz8.mongodb.net/frequentResearch?retryWrites=true&w=majority',
    allowHost: process.env.ALLOW_HOST || 'http://prod-example.com'
}