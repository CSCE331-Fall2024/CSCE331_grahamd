function handleClick(checkbox) {

  if (checkbox.checked) {
    localStorage.setItem('styleCheckboxState', 'style2');
    changeStyle('style2');
  } else {
    localStorage.setItem('styleCheckboxState', 'style1');
    changeStyle('style1');
  }
}

function changeStyle(style) {
  const currentPage = localStorage.getItem('currentPage');
  document.getElementById("page-style").setAttribute("href", `../css/${style}_${currentPage}.css`);
  document.getElementById("nav-style").setAttribute("href", `../css/${style}_navbar.css`);

  if (style === 'style1') {
    document.getElementById("font-style").setAttribute("href", "https://fonts.googleapis.com/css?family=Lato");
  } else {
    document.getElementById("font-style").setAttribute("href", "https://fonts.googleapis.com/css?family=Open+Sans:400,600,300");
  }

  console.log("Changed page-style to ", `../css/${style}_${currentPage}.css`);
  console.log("Changed nav-style to ", `../css/${style}_navbar.css`, "\n")
}

// On page reload, check stored style checkbox state and assign it to the checkbox that exists on the current page.
document.addEventListener('DOMContentLoaded', function () {
  const styleCheckbox = document.getElementById('style-checkbox');
  const isStyleChecked = localStorage.getItem('styleCheckboxState') === 'style2';
  styleCheckbox.checked = isStyleChecked;

  changeStyle(isStyleChecked ? 'style2' : 'style1');
});