const user = {
    username:'batman',
    password:'Alfred1960ROCKS!',
}
    
function shouldOpenBatCave(x, y) {
    if (x == 'batman'&& y =='Alfred1960ROCKS!') {
        console.log('Welcome back batman!!')
    }
    else{
        console.log("Sorry, you can't enter the Batcave, try again..")    
    }
};

shouldOpenBatCave(user.username, user.password);