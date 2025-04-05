## asynpro.js

## Node.js Script: File Read & Future API Call
This is a simple Node.js script demonstrating how to:

1. Read data from a file using the fs module.
2. (Planned) Request data from an external API.
3. Print messages to the console.

### Files
index.js – The main Node.js script (you can rename your current file to this).

file.txt – A text file to be read by the script.

### Prerequisites
Node.js installed (version 12 or higher recommended)

### How to Run
1. Clone this repository or download the code.
2. Ensure there is a file.txt file in the same directory with some content.
3. Run the script:

![image](https://github.com/user-attachments/assets/6e681308-0056-4cf5-9501-7672b123daae)

## asynwait.js
## Async File Reader with async/await & Promise.allSettled
This Node.js script demonstrates how to asynchronously read multiple files using modern JavaScript features such as async/await and Promise.allSettled.

### Features
Reads two files (file.txt and data.txt) in parallel.

Uses Promise.allSettled() to handle multiple asynchronous file reads.

Handles errors gracefully using try...catch.

Displays the content and status of each file read operation.

### Requirements
Two files in the project directory:
file.txt
data.txt

### Dependencies
No external libraries required – uses built-in fs/promises.

### How to Run
1. Ensure file.txt and data.txt exist in the same directory.
2. Add some content to both files.
3. Run the script:

![image](https://github.com/user-attachments/assets/55fa8e7f-cf1b-4f67-8f9c-5a3dcf9437af)

## pomiseapp.js

## File Reader Using Promises (.then / .catch)
This Node.js script demonstrates how to read a file using the fs.promises API along with .then() and .catch() syntax for handling asynchronous operations.

### Features
Reads a file (file.txt) using promises.
Handles asynchronous file reading with .then() and .catch().
Provides basic understanding of promise states:

### Pending

Fulfilled (resolved)
Rejected (error)

### Requirements
Node.js installed on your system

### How to Use
Make sure you have a file named file.txt in the same directory.
Add some sample content to file.txt.
Run the script with the following command:

![image](https://github.com/user-attachments/assets/18e130ce-88e6-477d-9458-4a187cf6cd0f)

