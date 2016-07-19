var counter = {
  count: 0};

function render(){
  var source = $('#counter-template').html();
  var template = Handlebars.compile(source);
  var html = template(counter);

  $("#counter").html(html);
  $("#increase").click(increase);
  $("#decrease").click(decrease);
  $("#reset").click(reset);
  // console.log(counter);
  $('button').click(color);
}

function increase(){
 
  var number = counter.count;
  // console.log("count: "+ number);
  
  number = number+1;
  // console.log("number: "+ number);
  
  counter={
    count: number,
  };

  render();
}

function decrease(){
  var number = counter.count;
   number = number-1;
   counter ={
    count: number,
   };
   render();
}

function reset(){
  
  counter = {
    count: 0,
  };
  render();
}

function color(){
  var number = counter.count;
  // console.log(number);

  if (number<0){
    $('body').removeClass('').addClass('low');
    // console.log('low');
  }
  else if (number>100){
    $('body').removeClass().addClass('high');
  }
  // else if (number>100){
  //   $('body').removeClass().addClass('high');
  //   console.log('high');
  // }
  else{
    $('body').removeClass();
    // console.log("error");
  }
  render();
}

$(document).ready(render);