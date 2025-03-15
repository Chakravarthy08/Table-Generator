const generateInput = document.querySelector(".generate-input");
const startInput = document.querySelector(".start-input");
const endInput = document.querySelector(".end-input");

const button = document.querySelector(".generate-btn");
var storedValueofgenerate = "";
var storedValueofstart = "";
var storedValueofend = "";

button.addEventListener("click", () => {
  storedValueofgenerate = generateInput.value;
  storedValueofstart = startInput.value;
  storedValueofend = endInput.value;

  var num = parseInt(storedValueofgenerate);
  var start = parseInt(storedValueofstart); 
  var end = parseInt(storedValueofend);

  // default
  
  if (!num) {
    document.write("Enter the Number To Generate Table");    
  }
  
  else if(!start && !end){
    document.write(`Given Number: ${num}` + "<br>" + "1 to 10 is Default" + "<br>");    
    for (var i = 1; i <= 10; i++) {
          var result = num * i;
          document.write(num + "*" + i + "=" + result + "<br>");
          console.log('hello')
        }
      
  }
  else if (!start || !end) {
    document.write(`Given Number: ${num}` + "<br>");
    document.write("Please Enter the Values for Both(Start-No. & End-No.)");    
  }
  
  
  
  else{
   
    document.write(`Given Number: ${num}` + "<br>");
    // document.write(`Start No.: ${start}, End No.: ${end}<br>`);
    document.write(`<span class="output-style">Start No.: ${start}, End No.: ${end}</span><br>`);


    // user
    if (start < end) {
      for (var i1 = start; i1 <= end; i1++) {
        var result1 = num * i1;
        document.write(num + "*" + i1 + "=" + result1 + "<br>");
      }
        
    }
    else{
      for (var i1 = start; i1 >= end; i1--) {
        var result1 = num * i1;
        document.write(num + "*" + i1 + "=" + result1 + "<br>");
      }
      
    }   
  }
  
 
});
