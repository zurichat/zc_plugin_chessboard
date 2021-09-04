const axios = require('axios')

const plugin_id = '61328ac0a921b9ec34e20337'
const zuriCoreApi = 'https://zccore.herokuapp.com/data/write'
const savePlayerMove = async ({playerId, pieceId, initialPosition, finalPosition, gameId}) => {
    
    const payload = {playerId, pieceId, initialPosition, finalPosition, gameId}
    const organization_id = '61328ac0a921b9ec34e20337'
    const collection_name = 'moves'
    const body = {payload, plugin_id, organization_id, collection_name}

    try{
        const response = await axios.post(zuriCoreApi, body) 
        return response.data.data

    } catch(e){

    }
    
}

module.exports = {savePlayerMove}