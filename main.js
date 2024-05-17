//Change the inner text of the heading according to button click

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



//Function to change image according to color and buttons
function changeImage(imageUrl) {

    let img = document.getElementById('hearImg')
    img.src = imageUrl

}

//Function to make button active on click
let activeBtn = document.querySelector('.active');

function handleClick(btn) {
    if (btn !== activeBtn) {
        activeBtn.classList.remove('active');
        btn.classList.add('active');
        activeBtn = btn;
    }

}





//Here is the process from which we can navigate through prev or next button
const btns = document.querySelectorAll('.btn');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Function to handle button clicks
function handleClick(btn) {
    
    btns.forEach(button => {
        button.classList.remove('active');
    });
  
    btn.classList.add('active');
}

// Function to handle previous button click
prevBtn.addEventListener('click', function () {
  
    let activeIndex = Array.from(btns).findIndex(button => button.classList.contains('active'));

    activeIndex = activeIndex === 0 ? btns.length - 1 : activeIndex - 1;
 
    btns[activeIndex].click();
});

// Function to handle next button click
nextBtn.addEventListener('click', function () {

    let activeIndex = Array.from(btns).findIndex(button => button.classList.contains('active'));
 
    activeIndex = activeIndex === btns.length - 1 ? 0 : activeIndex + 1;

    btns[activeIndex].click();
});

//click event listeners to buttons
btns.forEach(button => {
    button.addEventListener('click', function () {
        handleClick(button);
    });
});



const colorItems = document.querySelectorAll('.colorItems');

// Add click event listener to each color item
colorItems.forEach(colorItem => {
    colorItem.addEventListener('click', function () {
      
        colorItems.forEach(item => {
            item.classList.remove('selected-color');
        });
       
        colorItem.classList.add('selected-color');

       
    });
});