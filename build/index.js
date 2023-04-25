// var adresa = document.getElementById("ip");
// adresa.innerHTML = "FIX ME ROB";

// Step 1: Read the contents of the text file using XHR
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Step 2: Parse the contents of the text file
    var firstLine = this.responseText.split("\n")[0];

    // Step 3: Select the element on the webpage that you want to update
    var elementToUpdate = document.getElementById("ip");

    // Step 4: Update the content of the selected element with the first line of the text file
    elementToUpdate.innerHTML = firstLine;
  }
};
xhttp.open("GET", "ip.txt", true);
xhttp.send();
