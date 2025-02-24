// bookingSearchHandler.js

// Initialize booking search handler
export const bookingSearchHandler = () => {
  const searchForm = document.getElementById("search-bar-form");
  const checkInDate = document.getElementById("check-in");
  const checkOutDate = document.getElementById("check-out");
  const numberOfVillas = document.getElementById("villas");

  setMinDate(checkInDate, checkOutDate);

  numberOfVillas.addEventListener("change", () =>
    validateNumberOfVillas(numberOfVillas),
  );
  checkInDate.addEventListener("change", () =>
    validateDates(checkInDate, checkOutDate),
  );
  checkOutDate.addEventListener("change", () =>
    validateDates(checkInDate, checkOutDate),
  );

  searchForm.addEventListener("submit", (event) =>
    forwardToURL(event, checkInDate, checkOutDate, numberOfVillas),
  );
};

// Validate check-in and check-out dates
function validateDates(checkInDate, checkOutDate) {
  if (!checkInDate.value || !checkOutDate.value) {
    return false;
  }

  const inDate = new Date(checkInDate.value);
  const outDate = new Date(checkOutDate.value);

  if (inDate < outDate) {
    checkInDate.style.color = "";
    checkOutDate.style.color = "";
    return true;
  } else {
    window.alert("Check-out date cannot be earlier than check-in date!");
    checkInDate.style.color = "red";
    checkOutDate.style.color = "red";
    return false;
  }
}

// Validate number of villas
function validateNumberOfVillas(numberOfVillas) {
  const villasNumber = numberOfVillas.value;
  const regEx = /^[1-9]$/;
  if (regEx.test(villasNumber)) {
    numberOfVillas.style.color = "";
    return true;
  } else {
    window.alert("Enter a number between 1 and 9!");
    numberOfVillas.style.color = "red";
    return false;
  }
}

// Set minimum date for check-in and check-out
function setMinDate(checkInDate, checkOutDate) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const minDate = `${year}-${month}-${day}`;

  checkInDate.setAttribute("min", minDate);
  checkOutDate.setAttribute("min", minDate);
}

// Handle booking search
// after connecting the client api to the serverless function
// the endpoint is .netlify/functions/bookingSearchHandler
/*function handleBookingSearch(event, checkInDate, checkOutDate, numberOfVillas) {
  event.preventDefault();

  const isDatesValid = validateDates(checkInDate, checkOutDate);
  const isNumberOfVillasValid = validateNumberOfVillas(numberOfVillas);

  if (!isDatesValid || !isNumberOfVillasValid) {
    window.alert("Some of the search bar fields are empty or incorrect");
    return;
  }

  const availableVillas = document.getElementById("available-villas");
  const searchResult = document.getElementById("search-result");
  const tableRows = searchResult.getElementsByTagName("tr");

  const inDate = new Date(checkInDate.value);
  const outDate = new Date(checkOutDate.value);
  const villasNumber = numberOfVillas.value;

  const totalDays = (outDate - inDate) / (1000 * 60 * 60 * 24);
  const priceDayVilla = 200;
  const totalPrice = priceDayVilla * villasNumber * totalDays;
  const discountRate = 0.005 * Math.round(villasNumber * 0.5) * totalDays;
  const offerPrice = Math.floor(totalPrice - discountRate * totalPrice);

  availableVillas.innerText = villasNumber;

  tableRows[0].children[1].innerText = inDate.toDateString();
  tableRows[1].children[1].innerText = outDate.toDateString();
  tableRows[2].children[1].innerText = totalDays;
  tableRows[3].children[1].innerText = villasNumber;
  tableRows[4].children[1].innerText = `$${priceDayVilla}`;
  tableRows[5].children[1].innerText = `$${totalPrice}`;
  tableRows[6].children[1].innerText = `$${offerPrice}`;

  if (searchResult.style.display !== "grid") {
    searchResult.style.display = "grid";
  } else {
    searchResult.style.display = "none";
    setTimeout(() => {
      searchResult.style.display = "grid";
    }, 500);
  }
}*/

// Forward to URL
function forwardToURL(event, checkInDate, checkOutDate, numberOfVillas) {
  event.preventDefault();
  const baseURL = "https://wa.me/905374507515";
  const checkIn = checkInDate.value;
  const checkOut = checkOutDate.value;
  const villas = numberOfVillas.value;
  const text = encodeURI(
    `Hello, I would like to book ${villas} villas from ${checkIn} to ${checkOut}`,
  );

  const url = `${baseURL}?text=${text}`;
  window.open(url, "_blank");
}
