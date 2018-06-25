$(document).ready(readyNow);

function readyNow(){
$('#generate').on('click',addBox);
console.log('hey');
$('#box').on('click','.deleteButton',deleteBtn);


}
let count = 0
function addBox() {
$('#box').append(`<div id = "colorBox" ></div>`);
count ++;
$('#colorBox').append(`<p id = "newBox" >${count}</p>`);
$('#colorBox').append('<button id = "swapButton">SWAP</button><button class = "deleteButton">Delete</button>');

} 
 

function deleteBtn(){
    $(this).parent().remove();
}



