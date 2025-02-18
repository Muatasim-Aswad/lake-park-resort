//booking- search bar - start:
export const bookingSearchHandler = () => {
  const searchForm = document.getElementById("search-bar-form");
  const checkInDate = document.getElementById("check-in");
  const checkOutDate = document.getElementById("check-out");
  const numberOfVillas = document.getElementById("villas");

  //validate inputs
  let checkFlag = false;
  let firstCheckFlag = false;
  let secondCheckFlag = false;

  (() => {
    //checks if the order of dates logical
    const datesValidate = (event) => {
      if (!checkInDate.value || !checkOutDate.value) {
        return;
      }

      const inDate = new Date(checkInDate.value);
      const outDate = new Date(checkOutDate.value);

      if (inDate < outDate) {
        event.target.style.color = "";
        firstCheckFlag = true;
      } else {
        window.alert("Check out date cannot be earlier than check in date!");
        event.target.style.color = "red";
        firstCheckFlag = false;
      }
    };

    //checks if the number on the limit
    const numberValidate = (event) => {
      const villasNumber = numberOfVillas.value;
      const regEx = /^[1-9]$/;
      if (regEx.test(villasNumber)) {
        event.target.style.color = "";
        secondCheckFlag = true;
      } else {
        window.alert("Enter a number between 1 and 9!");
        event.target.style.color = "red";
        secondCheckFlag = false;
      }
    };

    //set the date picker to today or later, earlier not allowed
    const setMinDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");

      const minDate = `${year}-${month}-${day}`;

      checkInDate.setAttribute("min", minDate);
      checkOutDate.setAttribute("min", minDate);
    };

    window.addEventListener("load", setMinDate);
    numberOfVillas.addEventListener("change", numberValidate);
    checkInDate.addEventListener("change", datesValidate);
    checkOutDate.addEventListener("change", datesValidate);
  })();

  const searchBooking = (event) => {
    event.preventDefault();

    checkFlag = firstCheckFlag && secondCheckFlag;

    if (!checkFlag) {
      window.alert("Some of the search bar fields are empty or wrong");
      event.preventDefault();
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
    availableVillas.innerHTML = villasNumber;

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
  };

  //temporary handler until the backend is ready
  const forwardToURL = (event) => {
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
  };
  searchForm.addEventListener("submit", forwardToURL);
};
/*end - booking- search bar*/
