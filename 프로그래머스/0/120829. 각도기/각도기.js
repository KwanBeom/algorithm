const solution = (angle) => {
    switch(angle) {
        case 180: return 4;
        case 90: return 2;
        default: return angle > 90 ? 3 : 1;
    }
}