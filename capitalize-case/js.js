$("#b").click(function(){
    // let str = document.getElementById("k").value;
    //       var string = str.toUpperCase();
    //       $("#result").html(string);   

    // var txt1 = $("#k").val();
    // txt = GFG_Fun()
    // console.log(txt);

    // function GFG_Fun() {
    //     $('#k').attr('id', 'capital');
       
    // }


// document.getElementById("result").value = output; 

var txt1 = $("#k").val();


const str = $("#k").val();

//split the above string into an array of strings 
//whenever a blank space is encountered

const arr = str.split(" ");

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
console.log(str2);
$("#result").html(str2);
  });

