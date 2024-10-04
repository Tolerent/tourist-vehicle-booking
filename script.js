// script.js
const vehicles = document.querySelectorAll('.vehicle');
const priceDisplay = document.getElementById('price');
let selectedVehicle = '';

vehicles.forEach(vehicle => {
    vehicle.addEventListener('click', () => {
        selectedVehicle = vehicle.getAttribute('data-vehicle');
        alert(`${selectedVehicle} selected`);
        calculatePrice();
    });
});

document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!selectedVehicle) {
        alert("Please select a vehicle");
        return;
    }
    alert(`Booking confirmed for ${selectedVehicle}`);
});

function calculatePrice() {
    let price = 0;
    switch (selectedVehicle) {
        case 'Force Traveler':
            price = 1500;
            break;
        case 'Mini Bus':
            price = 2000;
            break;
        case 'Bus':
            price = 3000;
            break;
    }
    priceDisplay.textContent = price;
}
