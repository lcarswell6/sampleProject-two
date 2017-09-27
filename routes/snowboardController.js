const express = require('express')
const router = express.Router({mergeParams: true});


router.get('/', (request, response) => {
    const companyId = request.params.companyId

    CompanyModel.findbyId(companyId)
    .then((company) => {
        const snowboards = company.snowboards
    })
    .catch((error) => {
        console.log(error)
    })
})


module.exports = router