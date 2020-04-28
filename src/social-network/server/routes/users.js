const  {Router} = require('express')

const router = Router();

router.get('/api/users', (req,res) => {
    res.send('users')
})

module.exports = router