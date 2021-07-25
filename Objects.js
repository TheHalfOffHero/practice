//Object practice in javascript.
//To run the code in the console Nodejs  must be installed.
//to run the script >> node file.js

console.log("This is a test to get stuff to print through console")

//Make an object for making a "Book"

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    //there needs to be an info function to display this information easily for the user
    function info(){
        return (this.title + " by " + this.author + ", " + this.pages + ", " + this.read);
    }
}


