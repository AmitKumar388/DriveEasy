let currentCarIndex = 0;
const cars = ['car1', 'car2'];

function nextCar() {
    currentCarIndex = (currentCarIndex + 1) % cars.length;
    updateCarDisplay();
}

function prevCar() {
    currentCarIndex = (currentCarIndex - 1 + cars.length) % cars.length;
    updateCarDisplay();
}

function updateCarDisplay() {
    cars.forEach((car, index) => {
        document.getElementById(car).style.display = index === currentCarIndex ? 'block' : 'none';
    });
}

// Initially display the first car
updateCarDisplay();