let personData = [
  {
    uid: 1,
    firstName: "Ali",
    lastName: "Mahdavi",
  },
  {
    uid: 2,
    firstName: "Reza",
    lastName: "Shahmardan",
  },
  {
    uid: 3,
    firstName: "Hassan",
    lastName: "Qolami",
  },
  {
    uid: 4,
    firstName: "Morteza",
    lastName: "Hamedani",
  },
  {
    uid: 5,
    firstName: "Sina",
    lastName: "Hejazi",
  },
  {
    uid: 6,
    firstName: "Hadi",
    lastName: "Sadri",
  },
];

let additionalPersonData = [
  {
    uid: 3,
    position: "UI Designer",
    city: "Biarjmand",
  },
  {
    uid: 1,
    position: "Back-End Develope",
    city: "Taleqan",
  },
  {
    uid: 2,
    position: "Front-End Developer",
    city: "Behbahan",
  },
  {
    uid: 4,
    position: "Devops",
    city: "Shiraz",
  },
  {
    uid: 6,
    position: "Server Admin",
    city: "Tehran",
  },
  {
    uid: 5,
    position: "Product Manager",
    city: "Hamedan",
  },
];

function mergeObjects(obj1, obj2) {
  let result = [];
  let len = obj1.length;

  for (var x = 0; x < len; x++) {
    for (var i = 0; i < len; i++) {
      if (obj1[x].uid === obj2[i].uid) {
        result[x] = { ...obj1[x], ...obj2[i] };
      }
    }
  }
  return result;
}

let result = mergeObjects(personData, additionalPersonData);

function read(obj) {
  return obj;
}

result = read(result);
console.log(result);

let newObj = {
  uid: 7,
  firstName: "Hosein",
  lastName: "Jalili",
  position: "Back-End Develope",
  city: "Tehran",
};

function create(newObj) {
  for (var x = 0; x < result.length; x++) {
    if (newObj.uid === result[x].uid) {
      return `${newObj.uid} already has in object`;
    } else if (newObj.uid > result[x].uid) {
      if (result[x].uid == result.length) {
        return (result = result.concat(newObj));
      }
    } else if (newObj.uid < result[x].uid) {
      return (result = result.concat(newObj));
    }
  }
}

// result = create(newObj);
// console.log(result);

let upObj = {
  uid: 4,
  firstName: "Mohammad",
  lastName: "Moradi",
  position: "Network Security",
  city: "Tabriz",
};

function update(upObj) {
  for (var x = 0; x < result.length; x++) {
    if (upObj.uid === result[x].uid) {
      result[x].firstName = upObj.firstName;
      result[x].lastName = upObj.lastName;
      result[x].position = upObj.position;
      result[x].city = upObj.city;
      return result[x];
    } else if (upObj.uid > result.length) {
      if (result[x].uid == result.length) {
        console.log(`This person isn't exists ==> ${upObj.uid}`);
      }
    } else if (upObj.uid < result[0].uid) {
      if (result[x].uid == result.length) {
        console.log(`This person isn't exists ==> ${upObj.uid}`);
      }
    }
  }
}

// update(upObj);

function deleted(Obj, prop, valu) {
  for (var i = 0; i < Obj.length; i++) {
    if (valu == Obj[i].uid) {
      let msg = `The person wit ${prop}: ${valu} => deleted successfully.`;
      let temp = Obj.filter(function (val) {
        return val[prop] !== valu;
      });
      console.log(temp);
      console.log(msg);
    } else if (valu > Obj[i].uid) {
      if (Obj[i].uid == Obj.length) {
        msg = `${prop}: ${valu} => This person isn't exists`;
        console.log(msg);
      }
    } else if (valu < Obj[0].uid) {
      if (Obj[i].uid == Obj.length) {
        msg = `${prop}: ${valu} => This person isn't exists.`;
        console.log(msg);
      }
    }
  }
}

deleted(result, "uid", 4);


