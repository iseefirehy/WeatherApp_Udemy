var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Hongyu'
    };
    setTimeout(()=>{
        callback(user);
    },3000);

};

getUser(31,(userObject)=>{
    console.log(userObject);
});