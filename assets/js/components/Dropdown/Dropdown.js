class Dropdown {
  constructor(element) {
    // Assign this.element to the dropdown element
    this.element = element;

    //console.log(this)

    // Get the element with the ".dropdown-button" class found 
    //in the dropdown element (look at the HTML for context)
    this.dropdownButton = document.querySelector(".dropdown-button");
    // assign the reference to the ".dropdown-content" class 
    //found in the dropdown element
    this.dropdownContent = document.querySelector('.dropdown-content');
    // Add a click handler to the button reference and call the 
    //toggleContent method.
    this.dropdownButton.addEventListener('click', () => this.toggleContent())
  }

  toggleContent() {

    // Toggle the ".dropdown-hidden" class off and on
    this.dropdownContent.classList.toggle('dropdown-hidden');
  }
}


// Nothing to do here, just study what the code is doing and move 
//on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown')
  .forEach(dropdown => new Dropdown(dropdown));