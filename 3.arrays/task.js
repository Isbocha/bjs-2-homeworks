function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false
    }
    else if (arr1.every((element, index) => element === arr2[index])) {
      return true
    } else return false
  }

  function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((age, item, index, acc) => {
      age += item;
      if (index === acc.length - 1) {
        return age / acc.length;
      }
      return age;
    }, 0);
    return result;
  }