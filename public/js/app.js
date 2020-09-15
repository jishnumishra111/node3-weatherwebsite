
const weatherform = document.querySelector('form')
const messageOne= document.getElementById('message-1')
const messageTwo= document.getElementById('message-2')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const search = document.querySelector('input')
    const location = search.value

    messageTwo.textContent = ''
    messageOne.textContent = 'Fetching weather details....'



    fetch("/weather?location="+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageTwo.textContent = data.error
            messageOne.textContent = ''
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            
        }
        

    })

})
})


 
