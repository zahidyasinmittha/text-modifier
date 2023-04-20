"use strict"
let textstr = document.getElementById('text')
let output_text = document.getElementById('output_text')
let counter = document.getElementById('counter')
textstr.addEventListener('input', () => {
    let words,letter;
    if (textstr.value === '') {
        words=0;
        letter=0;
        output_text.style.display = 'none';
    }
    else{
        words = remove_spacing(false);
        words = words.match(/\S+/g);
        words= words.length;
        letter = textstr.value;
        letter = letter.length;
    }
    counter.innerText = `words: ${words} letters:${letter}`
    });
let remove_spacing = (a)=>{
    if(textstr.value == ''){
        alert('please type something')
    }
    else{
    let exp = /\s+\s/g;
    let input =textstr.value;
    let output = input.replace(exp,' ');
    if(a){
    output_text.style.display = 'block'
    textstr.value = output;
    }
    else
    return output
    }
}
let first_letter = (a) =>{
    if(textstr.value == ''){
        alert('please type something')
    }
    else{
    let input = remove_spacing(false);
    let output = input.split(' ');
    output.forEach((element,i) => {
        if(a)
        output[i]= element.charAt(0).toUpperCase() + element.slice(1)
        else
        output[i]= element.charAt(0).toLowerCase() + element.slice(1)
    });
    output= output.join(' ')
    output_text.style.display = 'block'
    textstr.value = output;
    }
}
let all_letter = (a)=>{
    if(textstr.value == ''){
        alert('please type something')
    }
    else{
    let input = textstr.value;
    let output;
    if(a)
    output = input.toUpperCase();
    else
    output = input.toLowerCase();
    output_text.style.display = 'block'
    textstr.value = output;
    }
}