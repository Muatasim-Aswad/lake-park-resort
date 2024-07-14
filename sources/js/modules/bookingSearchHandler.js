import { checkVariables } from '../utils/checkVariables.js';
//booking- search bar - start:
export const bookingSearchHandler = () => {
  const searchForm = document.getElementById('search-bar-form');
  const checkInDate = document.getElementById('check-in');
  const checkOutDate = document.getElementById('check-out');
  const numberOfVillas = document.getElementById('villas');

  checkVariables(
    'booking search',
    searchForm,
    checkInDate,
    checkOutDate,
    numberOfVillas,
  );

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
        event.target.style.color = '';
        firstCheckFlag = true;
        console.log('first true');
      } else {
        window.alert('Check out date cannot be earlier than check in date!');
        event.target.style.color = 'red';
        firstCheckFlag = false;
      }
    };

    //checks if the number on the limit
    const numberValidate = (event) => {
      const villasNumber = numberOfVillas.value;
      const regEx = /^[1-9]$/;
      if (regEx.test(villasNumber)) {
        event.target.style.color = '';
        secondCheckFlag = true;
        console.log('second true');
      } else {
        window.alert('Enter a number between 1 and 9!');
        event.target.style.color = 'red';
        secondCheckFlag = false;
      }
    };

    //set the date picker to today or later, earlier not allowed

    const setMinDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');

      const minDate = `${year}-${month}-${day}`;

      checkInDate.setAttribute('min', minDate);
      checkOutDate.setAttribute('min', minDate);
    };

    window.addEventListener('load', setMinDate);
    numberOfVillas.addEventListener('change', numberValidate);
    checkInDate.addEventListener('change', datesValidate);
    checkOutDate.addEventListener('change', datesValidate);
  })();

  const searchBooking = (event) => {
    event.preventDefault();

    checkFlag = firstCheckFlag && secondCheckFlag;
    console.log(firstCheckFlag);
    console.log(secondCheckFlag);
    console.log(checkFlag);
    if (!checkFlag) {
      window.alert('Some of the search bar fields are empty or wrong');
      event.preventDefault();
      return;
    }
    const availableVillas = document.getElementById('available-villas');
    const searchResult = document.getElementById('search-result');
    const tableRows = searchResult.getElementsByTagName('tr');

    checkVariables('booking search', availableVillas, searchResult, tableRows);

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

    if (searchResult.style.display !== 'grid') {
      searchResult.style.display = 'grid';
    } else {
      searchResult.style.display = 'none';
      const wait = setTimeout(() => {
        searchResult.style.display = 'grid';
      }, 500);
    }
  };
  searchForm.addEventListener('submit', searchBooking);
};
/*end - booking- search bar*/
