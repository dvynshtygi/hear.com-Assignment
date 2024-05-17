
const changeText = document.querySelector('#changeText');
const buttons = document.querySelectorAll('.btn');
const colorPickers = document.querySelectorAll('.color-picker');
const imageAll = document.querySelectorAll('.imageAll');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        changeText.innerText = button.innerText;

    });
});



// Function to hide all color pickers except the specified one
function showColorPicker(colorPickerToShow) {
    colorPickers.forEach(colorPicker => {
        colorPicker.style.display = colorPicker === colorPickerToShow ? 'flex' : 'none';
    });

}

// Event listeners for buttons to show respective color pickers
btn1.addEventListener('click', () => {
    showColorPicker(colorPicker);

});

btn2.addEventListener('click', () => {
    showColorPicker(colorPicker1);

});

btn3.addEventListener('click', () => {
    showColorPicker(colorPicker2);

});

btn4.addEventListener('click', () => {
    showColorPicker(colorPicker3);

});




function changeImage(imageUrl) {

    let img = document.getElementById('hearImg')
    img.src = imageUrl

}


let activeBtn = document.querySelector('.active');

function handleClick(btn) {
    if (btn !== activeBtn) {
        activeBtn.classList.remove('active');
        btn.classList.add('active');
        activeBtn = btn;
    }
    // Your existing onclick functionality goes here
}



// hociubiubiub lorenoznobo'bc ro'3b'orbc'c


const btns = document.querySelectorAll('.btn');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Function to handle button clicks
function handleClick(btn) {
    // Remove 'active' class from all buttons
    btns.forEach(button => {
        button.classList.remove('active');
    });
    // Add 'active' class to the clicked button
    btn.classList.add('active');
}

// Function to handle previous button click
prevBtn.addEventListener('click', function() {
    // Find the index of the currently active button
    let activeIndex = Array.from(btns).findIndex(button => button.classList.contains('active'));
    // Move to the previous button
    activeIndex = activeIndex === 0 ? btns.length - 1 : activeIndex - 1;
    // Trigger click event on the previous button
    btns[activeIndex].click();
});

// Function to handle next button click
nextBtn.addEventListener('click', function() {
    // Find the index of the currently active button
    let activeIndex = Array.from(btns).findIndex(button => button.classList.contains('active'));
    // Move to the next button
    activeIndex = activeIndex === btns.length - 1 ? 0 : activeIndex + 1;
    // Trigger click event on the next button
    btns[activeIndex].click();
});

// Attach click event listeners to buttons
btns.forEach(button => {
    button.addEventListener('click', function() {
        handleClick(button);
    });
});



const colorItems = document.querySelectorAll('.colorItems');

// Add click event listener to each color item
colorItems.forEach(colorItem => {
    colorItem.addEventListener('click', function() {
        // Remove the 'selected-color' class from all color items
        colorItems.forEach(item => {
            item.classList.remove('selected-color');
        });
        // Add the 'selected-color' class to the clicked color item
        colorItem.classList.add('selected-color');
        
        // Here you can perform additional actions when a color is selected, if needed
    });
});