function appendToDisplay(value){
    document.getElementById('display').value += value;
}
function clearDisplay(value){
    document.getElementById('display').value ='';
}
function calculate(){
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result
}