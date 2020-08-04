document.getElementById('create-pin').addEventListener('click', function(){
   const pinOutput = document.getElementById('pin-display');
   var output = Math.floor(1000 + Math.random() * 9000);
   document.getElementById('pin-display').value = output;
})

function inputNum(num){
   document.getElementById('pinMatchDisplay').value = document.getElementById('pinMatchDisplay').value + num;
}

function clean(){
   document.getElementById('pinMatchDisplay').value = '';
}

function back(){
   const exp = document.getElementById('pinMatchDisplay').value;
   document.getElementById('pinMatchDisplay').value = exp.substring(0, exp.length-1);
}

document.getElementById('submit').addEventListener('click', function(){
   const firstPinDisplay = document.getElementById('pin-display').value;
   const secondPinDisplay = document.getElementById('pinMatchDisplay').value;
   if(firstPinDisplay == secondPinDisplay){
       document.getElementById('right-message').style.display = 'block';
       document.getElementById('wrong-message').style.display = 'none';
   }
   else{
       document.getElementById('wrong-message').style.display = 'block';
       document.getElementById('right-message').style.display = 'none';
   }

   document.getElementById('pinMatchDisplay').value = " ";

})