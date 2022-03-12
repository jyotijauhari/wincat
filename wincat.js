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

//copy content of 1st file to 2nd file (replace)
function copyFileContent(){
    let file2 = filesArr[1]; //2nd file
    let file1 = filesArr[0]; //1st file
    let content = fs.readFileSync(file1) + "";
    fs.writeFileSync(file2,content);
}

function getContentTogether(){
    let content = "";
    for(let i=0; i<filesArr.length;i++){
        let fileContent = fs.readFileSync(filesArr[i]);
        content += fileContent + "\r\n";
    }
    return content;
}

//print file content with line number
function printWithLineNo(){
    let fileContent = getContentTogether();
    outputArr = fileContent.split("\r\n");
    let index = 1;
    for(let i=0; i<outputArr.length;i++){
        outputArr[i] = index + ")"+ outputArr[i];
        index += 1;
    }
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
    //copy content of 1stfile to 2ndfile
    else if(optionArr.includes("-copy")){
        copyFileContent();
    }
    //display content of file preeciding with line no
    else if(optionArr.includes("-n")){
        printWithLineNo();
    }
    //not number empty lines
    else if(optionArr.includes("-b")){

    }
    //supress repeated empty line
    else if(optionArr.includes("-s")){

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