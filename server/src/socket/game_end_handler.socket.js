// Node Core Modules 
const fs = require('fs');
const Path = require('path')

// Custom Modules
const formatMessage = require("./libs/formatMessage");

const game_end_handler = (socket)=>(msg)=>{
    var game_details =
    {
        "game_id" : msg.game_id,
        "winner" : msg.winner,
        "looser" : msg.looser,
        "stale_mate" : msg.stale_mate
    }

    // Temporary
    save_game(game_details);

    socket.emit("game save", {message:msg});
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
                // add a new record
                db_data = Object.assign(db_data,{[game_data.game_id]:game_data})
                // write new data back to the file
                fs.writeFile(dbpath, JSON.stringify(db_data, null, 4), (err) => {
                    if (err) {
                        console.log(`Error writing database file: ${err}`);
                    }
                });
            }
        
        });
    }else{
        db_data = {[game_data.game_id]:game_data}
        fs.writeFile(dbpath, JSON.stringify(db_data, null, 4), (err) => {
            if (err) {
                console.log(`Error writing database file: ${err}`);
            }
        });
    }
}

module.exports = game_end_handler;