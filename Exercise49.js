// Solution 1
function validUserNames(usernames) {
    return usernames.filter(function(username) {
        return username.length < 10;
    })
}

// Solution 2
function validUserNames(usernames) {
    return usernames.filter(username => {
        return username.length < 10;
    })
}
