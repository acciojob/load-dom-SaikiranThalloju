//your JS code here. If required.
function addTextToBody() {
      const body = document.body;
      body.innerHTML = "DOM load success";
    }

    // Event listener to call the function when the DOM is loaded
    document.addEventListener("DOMContentLoaded", addTextToBody);