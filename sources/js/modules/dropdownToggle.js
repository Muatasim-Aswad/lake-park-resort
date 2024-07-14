import { checkVariables } from '../utils/checkVariables.js';
import { headerManipulate } from './headerManipulate.js';

//dropdown menu - start:
/*display based on click*/
export const dropdownToggle = () => {
  const hamburgerButton = document.getElementById('hamburger-button');
  const closeButton = document.getElementById('close-button');
  const dropdownContainer = document.getElementById('dropdown-container');
  const overlay = document.getElementById('overlay');
  const header = document.getElementById('header');
  if (
    !checkVariables(
      'dropdownMenu',
      hamburgerButton,
      closeButton,
      dropdownContainer,
      overlay,
      header,
    )
  )
    return;

  const showDropdown = (event) => {
    event.stopPropagation();

    hamburgerButton.classList.add('hide');
    closeButton.classList.add('show');
    dropdownContainer.classList.add('show');
    overlay.classList.toggle('show');
    header.classList.add('primaryColor');

    window.removeEventListener('scroll', headerManipulate);
  };

  const closeDropdown = (event) => {
    if (
      dropdownContainer.classList.contains('show') &&
      (event.type === 'resize' ||
        event.type === 'hashchange' ||
        !dropdownContainer.contains(event.target))
    ) {
      hamburgerButton.classList.remove('hide');
      closeButton.classList.remove('show');
      dropdownContainer.classList.remove('show');
      overlay.classList.toggle('show');
      header.classList.remove('primaryColor');

      window.addEventListener('scroll', headerManipulate);
      headerManipulate();
    }
  };

  hamburgerButton.addEventListener('click', showDropdown);
  window.addEventListener('click', closeDropdown);
  window.addEventListener('resize', closeDropdown);
  window.addEventListener('hashchange', closeDropdown);
};
/*end - dropdown menu */
