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

//suppress repeated empty lines
function optionS(){
    let tempArr = [];
    let fileContent = getContentTogether();
    outputArr = fileContent.split("\r\n");
    for (let i = 1; i < outputArr.length; i++){
        if (outputArr[i] == "" && outputArr[i - 1] == "") {
            outputArr[i] = null;
        }
        else if (outputArr[i] == "" && outputArr[i - 1] == null) {
            outputArr[i] = null;
        }
    }
    // arr with multiple '' replaced by null 
    // console.table(contentArr);

    //push everything in tempArr except null
    for (let i = 0; i < outputArr.length; i++){
        if (outputArr[i] != null) {
            tempArr.push(outputArr[i]);
        }
    }
    outputArr = tempArr;
}

//option -b
function optionB(){
    let fileContent = getContentTogether();
    outputArr = fileContent.split("\r\n");
    let index = 1;
    for(let i=0; i<outputArr.length;i++){
        if (outputArr[i] == "" ) {
            outputArr[i] = outputArr[i];
        }
        else{
            outputArr[i] = index + ")" + outputArr[i];
            index += 1;
        }
    }
}

//option -append
function optionAppend(){
    let file2 = filesArr[1]; //2nd file
    let file1 = filesArr[0]; //1st file
    let content = fs.readFileSync(file1) + "";
    fs.appendFileSync(file2,content);
}

//option -heof
function optionHEOF(){
    let file1 = filesArr[0];
    let content = fs.readFileSync(file1) + "\r\n";
    content += "--> end of file <--";
    outputArr.push(content);
}

// option -w 
function optionW(){
    let file1 = filesArr[0];
    createFile();
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      })
      
      readline.question(``, input => {
        console.log(input)
        let content = input;
        fs.appendFileSync(file1,content);
        readline.close()
      })
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
    //not numbering empty lines
    else if(optionArr.includes("-b")){
        optionB();
    }
    //supress repeated empty line
    else if(optionArr.includes("-s")){
        optionS();
    }
    //append content of 1st file to 2ndfile
    else if(optionArr.includes("-append")){
        optionAppend();
    }
    //highlight end of file
    else if(optionArr.includes("-heof")){
        optionHEOF();
    }
    //write in existing file by taking input from console
    else if(optionArr.includes("-w")){
        optionW();
    }
    //reverse printing
    else if(optionArr.includes("-reverse")){

    }   
}

//final output
for(let i=0; i<outputArr.length; i++){
    console.log(outputArr[i]);
}