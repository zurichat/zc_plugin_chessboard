// Node Core Modules 
const fs = require('fs');
const Path = require('path')

// Custom Modules
const formatMessage = require("./libs/formatMessage");

const game_end_handler = (socket)=>(msg)=>{
    game_id = msg.game_id
    var game_details ={
        "game_id" : game_id,
        "winner" : msg.winner,
        "looser" : msg.looser,
        "stale_mate" : msg.stale_mate
    }
    // game_details = JSON.stringify(game_details, null, 4);

    // Temporary
    save_game(game_details);

}

// Temporary
function save_game(game_data){
    const dbpath = Path.join(__dirname, "../db/mockdb.json")
    if(fs.existsSync(dbpath)){ 
        fs.readFile(dbpath, 'utf8', (err, data) => {
            if (err) {
                console.log(`Error reading database file: ${err}`);
            } else {
                // parse JSON string to JSON object
                var db_data = JSON.parse(data);
                console.log(db_data)
                // db_data = array(db_data)
                // add a new record
                db_data.push(game_data);
                // write new data back to the file
                fs.writeFile(dbpath, JSON.stringify(db_data, null, 4), (err) => {
                    if (err) {
                        console.log(`Error writing database file: ${err}`);
                    }
                });
            }
        
        });
    }else{
        fs.writeFile(dbpath, JSON.stringify(game_data, null, 4), (err) => {
            if (err) {
                console.log(`Error writing database file: ${err}`);
            }
        });
    }
}

module.exports = game_end_handler;