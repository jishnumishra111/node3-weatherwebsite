console.log('client side js file loaded')

const weatherform = document.querySelector('form')
const messageOne= document.getElementById('message-1')
const messageTwo= document.getElementById('message-2')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const search = document.querySelector('input')
    const location = search.value

    messageTwo.textContent = ''
    messageOne.textContent = 'Fetching weather details....'



    fetch("http://localhost:3000/weather?location="+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageTwo.textContent = data.error
            messageOne.textContent = ''
        }else{
            messageTwo.textContent = data.location
            messageTwo.textContent = data.forecast
            messageOne.textContent = ''
        }
        

    })

})
})


 