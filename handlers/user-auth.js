const firebase = require('firebase');


const login = (userParams,callback)=>{
    var userId = 'u12345';
        firebase.database().ref('users').once('value').then(function(snapshot) {
          
        var username = snapshot.val()[userId]['username'] ;
        var password =  snapshot.val()[userId]['password']  ;
        
        if(userParams.username === username && userParams.password === password ){
            callback( null, null); 
        }
    });

}

module.exports = {
    login : login
}