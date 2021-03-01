const fs = require('fs');
const path = require('path');
const user_db = path.join('data', 'users.json');



module.exports = {
    getUser : () => {
        return JSON.parse(fs.readFileSync(user_db, 'utf-8'));
    },
   
       setproductos : (data) => {
        fs.writeFileSync(__dirname+'/users.json',JSON.stringify(data,null,2),'utf-8');
    },
 }