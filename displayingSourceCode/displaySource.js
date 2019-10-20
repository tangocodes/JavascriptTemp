// alert('hello')

document.documentElement.innerHTML =
  "<pre>" + document.documentElement.innerHTML.replace(/</g, "&lt;") + "</pre>";

const addPara=document.createElement('p')
        addPara.textContent="Passwords Didn't match"
        document.querySelector('div').appendChild(addPara)
