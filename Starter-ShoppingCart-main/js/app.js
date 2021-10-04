// Variables
const courses = document.querySelector('#courses-list'),
    shoppingCartContent = document.querySelector('#cart-content tbody'),
    clearCartBtn = document.querySelector('#clear-cart');



// Listeners

loadEventListeners();

function loadEventListeners() {
    // When a new course is added
    courses.addEventListener('click', buyCourse);

    //when the remove button is clicked
    shoppingCartContent.addEventListener('click', removeCourse);

    // clear cart Btn
    clearCartBtn.addEventListener('click', clearCart);
}



// Functions

function buyCourse(e)  {
    e.preventDefault();
    //Use delegation to find the course that was added
    if(e.target.classList.contains('add-to-cart')) {
        // Read the course values
        const course = e.target.parentElement.parentElement;

        //read the values
        getCourseInfo(course);

    }
      
}
// Read the HTML information of the selected course
function getCourseInfo(course) {
    // Create an Object with Course Data
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    // Insert into the shopping cart
    addIntoCart(courseInfo);
}
//Display the selected course into the shopping cart

function addIntoCart(course) {
    // create a <tr>
    const row = document.createElement('tr');

    // Build the template
    row.innerHTML = `
        <tr>
            <td>
                <img src="${course.image}" width=100>
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>

        </tr>
    `;
    // add into the shopping cart
    shoppingCartContent.appendChild(row);
}
//remove course from the dom
function removeCourse(e) {

    if(e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
    }

}
//clears the shopping cart
function clearCart() {
    shoppingCartContent.innerHTML = '';

}