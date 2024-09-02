// Track and store checkbox changes. Added a temporary alert until new style is added next week.
document.getElementById("style-checkbox").addEventListener("change", function () {
  localStorage.setItem('styleCheckboxState', this.checked);
  if (this.checked) {
    alert("There's no second style yet, sorry!");
  }
});

// On page reload, check stored style checkbox state and assign it to the checkbox that exists on the current page.
document.addEventListener('DOMContentLoaded', function () {
  const styleCheckbox = document.getElementById('style-checkbox');
  const isStyleChecked = localStorage.getItem('styleCheckboxState') === 'true';
  styleCheckbox.checked = isStyleChecked;
});