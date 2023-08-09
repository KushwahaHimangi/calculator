function c(){
    document.getElementById("display").value="";
}
const disp = (value) => {
    document.getElementById("display").value += value;
}
const calc = () => {
    document.getElementById("display").value = eval(document.getElementById("display").value);
}
