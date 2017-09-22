const students = [
  {name: 'Aaron H.', female: false, currentAbility: 'higher', separateFrom: 'Daveon H.'},
  {name: 'Bailey H.', female: true, currentAbility: 'higher', separateFrom: 'Carmen H.',},
  {name: 'Carmen H.', female: true, currentAbility: 'higher', separateFrom: '',},
  {name: 'Daveon H.', female: false, currentAbility: 'higher', separateFrom: '',},
  {name: 'Evelyn H.', female: true, currentAbility: 'higher', separateFrom: '',},
  {name: 'Frances H.', female: true, currentAbility: 'higher', separateFrom: '',},
  {name: 'Greggory H.', female: false, currentAbility: 'higher', separateFrom: '',},
  {name: 'Heinrich H.', female: false, currentAbility: 'higher', separateFrom: '',},
  {name: 'Isabella H.', female: true, currentAbility: 'higher', separateFrom: '',},
  {name: 'Jaquelyn M.', female: true, currentAbility: 'middle', separateFrom: '',},
  {name: 'Kyle M.', female: false, currentAbility: 'middle', separateFrom: '',},
  {name: 'Leonard M.', female: false, currentAbility: 'middle', separateFrom: '',},
  {name: 'Madison M.', female: true, currentAbility: 'middle', separateFrom: '',},
  {name: 'Nadine M.', female: true, currentAbility: 'middle', separateFrom: '',},
  {name: 'Oscar M.', female: false, currentAbility: 'middle', separateFrom: '',},
  {name: 'Paula M.', female: true, currentAbility: 'middle', separateFrom: '',},
  {name: 'Quinton M.', female: false, currentAbility: 'middle', separateFrom: '',},
  {name: 'Rashaad M.', female: false, currentAbility: 'middle', separateFrom: '',},
  {name: 'Samantha L.', female: true, currentAbility: 'lower', separateFrom: '',},
  {name: 'Teresea L.', female: true, currentAbility: 'lower', separateFrom: '',},
  {name: 'Ulrich L.', female: false, currentAbility: 'lower', separateFrom: '',},
  {name: 'Viktor L.', female: false, currentAbility: 'lower', separateFrom: '',},
  {name: 'Willow L.', female: true, currentAbility: 'lower', separateFrom: '',},
  {name: 'Xavior L.', female: false, currentAbility: 'lower', separateFrom: '',},
  {name: 'Yekaterina L.', female: true, currentAbility: 'lower', separateFrom: '',},
  {name: 'Zoe L.', female: true, currentAbility: 'lower', separateFrom: '',}
]

const shuffle = arr => {
  let length = arr.length;
  let newArr = [];
  for (let i = 0; i < length; i++) {
    let splicedIndex = (arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    newArr.push(splicedIndex);
  }
  return newArr;
}

// Sort students by gender
function sortGirls(arr) {
  let array = arr.filter(function (stud) {
    return stud.female === true;
  });
  return shuffle(array);
}
function sortBoys(arr) {
  let array = arr.filter(function (stud) {
    return stud.female === false;
  });
  return shuffle(array);
}

// Sort students by currentAbility
function sortHigher(arr) {
  let array = arr.filter(function (stud) {
    return stud.currentAbility === 'higher';
  });
  return shuffle(array);
}
function sortMiddle(arr) {
  let array = arr.filter(function (stud) {
    return stud.currentAbility === 'middle';
  });
  return shuffle(array);
}
function sortLower(arr) {
  let array = arr.filter(function (stud) {
    return stud.currentAbility === 'lower';
  });
  return shuffle(array);
}


// Combine arrays
function twoArrays (arr1, arr2, size) {
  let groups = []
  let group = [];
  let len = Math.max(arr1.length, arr2.length);
  for (var i = 0; i < len; i++) {
    if (arr1[i]) {
      group.push(arr1[i].name);
    }
    if (arr2[i]) {
      group.push(arr2[i].name);
    }
    if (group.length === size) {
      groups.push(group);
      group = [];
    }
  }
  return groups
}

function threeArrays (arr1, arr2, arr3, size) {
  let groups = [];
  let group = [];
  function pushGroup (arrIndex, groupArr, size) {
    if (arrIndex) {
      group.push(arrIndex.name);
    }
    if (groupArr.length === size) {
      groups.push(groupArr);
      group = [];
    }
  }
  let len = Math.max(arr1.length, arr2.length, arr3.length);
  for (var i = 0; i < len; i++) {
    pushGroup(arr1[i], group, size);
    pushGroup(arr2[i], group, size);
    pushGroup(arr3[i], group, size);
    if (i === len - 1) {
      groups.push(group);
    }
  }
  return groups;
}

function pairMixGender(array) {
  let boys = shuffle(sortBoys(array));
  let girls = shuffle(sortGirls(array));
  return twoArrays(boys, girls, 2);
}

console.log(pairMixGender(students));

// Sorts one arr into groups of num
function sortIntoGroups(array, size) {
  let arr = shuffle(array)
  let groups = [];
  let group = [];

  for (var i = 0; i < arr.length; i++) {
    group.push(arr[i].name);
    if(group.length === size) {
    	groups.push(group);
      group = [];
    }
    if(i === arr.length - 1){
      groups.push(group);
      group = [];
    }
  }
  return groups;
}

// console.log('temp:', temp);
console.log('sortIntoGroups:', sortIntoGroups(students, 3))
// console.log(pairArrays(sortBoys(students), sortGirls(students), 2));
// console.log('threeArrays: ', threeArrays(sortHigher(students), sortLower(students), sortMiddle(students), 5));
