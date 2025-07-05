// Select all boxes
const boxes =document.querySelectorAll('.box');
// Function to handle box click
boxes.forEach(box => {
	box.addEventListener('click',() =>{
		// Remove expanded class from all boxes
		boxes.forEach(b => b.classList.remove('expanded'));
		// Add expanded to the clicked one
		box.classList.add('expanded');
	});
});