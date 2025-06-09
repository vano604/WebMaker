var data = new Date();
document.getElementById('an').innerHTML = data.getFullYear();

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " mobile";
    } else {
        x.className = "nav";
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxidtVD1x-dEm2m7p_lrF9Qdf1UZwg_8iNTkx3btlK-OYfN4ZfJYtVUIs3PzVIearl1/exec'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })