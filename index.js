function distanceFromHqInBlocks(customer1) {
    return (Math.abs(customer1 - 42));
}

function distanceFromHqInFeet(customer1) {
    return (Math.abs(customer1 - 42) * 264);
}

function distanceTravelledInFeet(start, end) {
    return (Math.abs(start - end) * 264);
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    const dist = distance - 400;

    if (distance < 400) {
        return 0;
    }
    else if (distance > 400 && distance < 2000) {
        return dist * 0.02;
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }

}
