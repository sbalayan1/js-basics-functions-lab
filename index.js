// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    if (x>=42) {
        return x - 42;
    } else {
        return 42 - x;
    }
    
}

function distanceFromHqInFeet(x) {
    if (x>=42) {
        return (x-42)*264;
    } else {
        return (42-x)*264;
    }
}

function distanceTravelledInFeet(x,y) {
    if (y>=x) {
    return (y-x)*264;
    } else {
        return (x-y)*264;
    }
}


//having issues with order of operations. function seems to work partially however 
function calculatesFarePrice(x,y) {
    if (distanceTravelledInFeet(x,y)<=400) {
        return 0;

    } else if (distanceTravelledInFeet(x,y)<=2000) {
        return (distanceTravelledInFeet(x,y)-400)*0.02;  
    
    } else if (distanceTravelledInFeet(x,y)>2500) {
        return 'cannot travel that far';

    } else if (distanceTravelledInFeet(x,y)>2000) {
        return 25;
    
    }
}
