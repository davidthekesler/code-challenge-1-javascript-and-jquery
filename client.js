console.log('js');

let counter = 0;

$(document).ready(readyNow);  //wait for doc to be ready before loading readyNow

//initiates event handlers
function readyNow () {
  $('#generateButton').on('click', generateDivs);
  $('#container').on('click', '.swap', swapColors);
  $('#container').on('click', '.delete', deleteDiv);
  }//end readyNow

//appends divs to DOM
function generateDivs() {
  counter ++;
  $('#container').append('<div class="redDiv"><p>' + counter + '</p><button class="swap">Swap Color</button><button class="delete">Delete</button>');
}

//switches Div between classes that designate yellow or red background
function swapColors() {
  $(this).parent().toggleClass('yellowDiv');
}

//deletes the selected div from DOM. NOTE: counter is not decremented, to reflect the gif example.
function deleteDiv() {
  $(this).parent().remove();
}
