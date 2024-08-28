function btnEncrypt(){
    let input = document.querySelector(".input_box");
    let output = document.querySelector(".output_box");
    
    let message = input.value.toLowerCase();
    
    message = message.replaceAll("e","enter");
    message = message.replaceAll("i","imes");
    message = message.replaceAll("a","ai");
    message = message.replaceAll("o","ober");
    message = message.replaceAll("u","ufat");

    output.value = message;
    input.value = "";
}

function btnDecrypt(){
    let input = document.querySelector(".input_box");
    let output = document.querySelector(".output_box");
    
    let message = input.value.toLowerCase();
    
    message = message.replaceAll("enter","e");
    message = message.replaceAll("imes","i");
    message = message.replaceAll("ai","a");
    message = message.replaceAll("ober","o");
    message = message.replaceAll("ufat","u");

    output.value = message;
    input.value = "";
}