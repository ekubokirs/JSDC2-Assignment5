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

$(document).ready(render);