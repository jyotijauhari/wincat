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

// console.log(inputArr);
// console.log(optionArr);
// console.log(filesArr);


function displayContent(){
    for(let i=0; i<filesArr.length; i++){
        let doesExist = fs.existsSync(filesArr[i]);
        if(!doesExist){
            console.log("file doesn't exist");
            return ;
        }
    }
    
    let content = "";
    for(let i=0; i<filesArr.length;i++){
        let fileContent = fs.readFileSync(filesArr[i]);
        content = fileContent + " ";
        outputArr.push(content);
    }
    // console.log(content);
}

//creating new empty file 
function createFile(){
    let filename = filesArr[0];
    fs.appendFileSync(filename,'');
}

let option = "";
//empty option array -> directly display content of file/files
if(optionArr.length == 0){
    displayContent();
}
else{
    //create a file
    if(optionArr.includes("-create")){
        option = "-create";
        createFile();
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

//final output
for(let i=0; i<outputArr.length; i++){
    console.log(outputArr[i]);
}