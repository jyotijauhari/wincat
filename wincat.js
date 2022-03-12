const fs = require("fs");

let inputArr = process.argv.slice(2); //[ 'hello', 'how', 'r', 'you' ]

let optionArr = [];

let filesArr = [];

let outputArr = [];

let outputAns = "";

for(let i=0; i<inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    
    if(firstChar == '-'){
        optionArr.push(inputArr[i])
    }
    else{
        filesArr.push(inputArr[i]);
    }
}

console.log(inputArr);
console.log(optionArr);
console.log(filesArr);

let option = "";
//empty option array -> directly display content of file/files
if(optionArr.length == 0){
    // displayContent();
}
else{
    //create a file
    if(optionArr.includes("-create")){
        option = "-create";
    }
    //display content of file preeciding with line no
    else if(optionArr.includes("-n")){

    }
    //not number empty lines
    else if(optionArr.includes("-b")){

    }
    //supress repeated empty line
    else if(optionArr.includes("-s")){

    }
    //copy content of 1stfile to 2ndfile
    else if(optionArr.includes("-copy")){

    }
    //append content of 1st file to 2ndfile
    else if(optionArr.includes("-append")){

    }
    //highlight end of file
    else if(optionArr.includes("-heof")){

    }
    //write in existing file by taking input from console
    else if(optionArr.includes("-w")){

    }
    //reverse printing
    else if(optionArr.includes("-reverse")){

    }
    
    
}

