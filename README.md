# wincat
cat commands for windows
<br>
<br>
### Commands :

1. To view a single file
```
node wincat.js filename
```
eg.
```
node wincat.js f1.txt
```
<br>

2. To view contents of multiple files
```
node wincat.js fileone filetwo filethree
```
eg.
```
node wincat.js f1.txt f2.txt
```
<br>

3. To view content of file with line number
```
node wincat.js -n filename
```
eg.
```
node wincat.js -n f1.txt
```
<br>

4. To create a new file
```
node wincat.js -create filename
```
eg.
```
node wincat.js -create f3.txt
```
<br>

5. Copy content of one file to other (fileone to filetwo)
```
node wincat.js -copy fileone filetwo
```
eg.
```
node wincat.js -copy f1.txt f2.txt
```
<br>

6. cat command to suppress repeated empty lines
```
node wincat.js -s filename
```
eg.
```
node wincat.js -s f1.txt
```
<br>

7. cat command to not number empty files (numbering non empty/non blank lines only)
```
node wincat.js -b filename
```
eg.
```
node wincat.js -b f1.txt
```
<br>

8. Command to append content of one file at end of other file. (from fileone to end of filetwo)
```
node wincat.js -append fileone filetwo
```
eg.
```
node wincat.js -append f1.txt f2.txt
```
<br>

9. Highlight end of file
```
node wincat.js -highlight filename
```
eg.
```
node wincat.js -highlight f1.txt
```
<br>

10. Cat command to write in existing file (or it will create new file if file doesn't exists)
```
node wincat.js -w filename
this is data you want to write
```
eg.
```
node wincat.js -w f6.txt
i am writing data in file f6 write after creation from console
```
<br>

11. Reverse print file
```
node wincat.js -reverse filename
```
eg.
```
node wincat.js -reverse f1.txt
```
