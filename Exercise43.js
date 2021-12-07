function returnDay(num) {
    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    if (num < 1 || num > 7) {
        return null;
    }
    
    return day[num - 1];
}
