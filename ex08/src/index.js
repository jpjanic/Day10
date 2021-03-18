function getUsername(email) {
  var username = "";
  // Only change code below this line
    var lookup = {
    "user1@mail.com": "user1",

    "user2@mail.com": "user2",

    "user3@mail.com": "user3",

    "user4@mail.com": "user4",

    "user5@mail.com": "user5",

    "user6@mail.com": "user6",
  };

  username = lookup[email];
  // Only change code above this line
  return username;
}

getUsername("user2@mail.com");

console.log(getUsername("user1@mail.com"));
console.log(getUsername("user2@mail.com"));
console.log(getUsername("user3@mail.com"));
console.log(getUsername("user4@mail.com"));
console.log(getUsername("user5@mail.com"));
console.log(getUsername("user6@mail.com"));
console.log(getUsername(""));
module.exports = getUsername;
