function carRace() {
  let countOfCars = prompt("Enter Count Of Cars :");

  let test = countOfCars;
  countOfCars = Number(countOfCars);

  if (countOfCars == test) {
    let cars = [];
    let carsIndex = [];
    for (var i = 0; i < countOfCars; i++) {
      cars.push(prompt(`Enter ${i + 1} Car Name :`));
      carsIndex.push(Math.floor(Math.random() * 10) + 1);
    }

    for (var i = carsIndex.length - 1; i >= 0; i--) {
      for (var j = 0; j < i; j++) {
        if (carsIndex[j] == carsIndex[i]) {
          carsIndex[j] = 0;
        }
      }
    }

    let objCars = Object.assign.apply(
      {},
      cars.map((v, i) => ({ [v]: carsIndex[i] }))
    );

    console.log(objCars);
    console.log(carsIndex);

    let road = [];

    for (var i = 0; i < 300; i++) {
      road.push("-");
    }

    for (var i = 0; i < countOfCars; i++) {
      road[carsIndex[i]] = cars[i];
    }

    console.log(road.toString().split(",").join(""));

    for (var i = 0; i < countOfCars; i++) {
      road[road.indexOf(cars[i])] = "-";
    }

    while (Math.max(...carsIndex) <= 300) {
      for (var i = 0; i < countOfCars; i++) {
        carsIndex[i] += Math.floor(Math.random() * 10) + 1;
      }

      for (var i = carsIndex.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
          if (carsIndex[j] == carsIndex[i]) {
            carsIndex[j] = 0;
          }
        }
      }

      for (var i = 0; i < countOfCars; i++) {
        road[carsIndex[i]] = cars[i];
      }

      console.log(carsIndex);
      console.log(road.toString().split(",").join(""));
      for (var i = 0; i < countOfCars; i++) {
        road[road.indexOf(cars[i])] = "-";
      }
    }

    for (var i = 0; i < countOfCars; i++) {
      if (carsIndex[i] >= 300) {
        console.log(`Winner is : ${cars[i]}`);
      }
    }
  } else {
    alert("enter number => 1,2,3...");
  }
}

function main() {
  carRace();
}
