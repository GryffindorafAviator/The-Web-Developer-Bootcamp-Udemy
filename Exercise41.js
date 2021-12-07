function lastElement(array) {
    let len = array.length;
    
    if (len === 0) {
        return null;
    }
    
    return array[len - 1];
}
