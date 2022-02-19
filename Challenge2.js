// Friend or Foe?

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// if a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours. otherwise, you can be sure he's not...

function friend(friends) {
    return friends.filter(el => el.length === 4);
}