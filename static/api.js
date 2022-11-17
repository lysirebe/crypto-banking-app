// this is used for acsessng api data with node. 
// const fetch = require('isomorphic-fetch')

async function getCoinData(){
    try{
        const response = await fetch('https://api.coingecko.com/api/v3/coins/list?include_platform=true')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

