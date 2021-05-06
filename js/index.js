//Javascript file to take global header and footer section on each page

//Fetching data from header.html file.
fetch("./header.html")
  .then(response => {
    return response.text()
  })
  //Data return to the header tag of html file.
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("./footer.html")
  .then(response => {
    return response.text()
  })

  //Data return to the footer tag of html file.
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });