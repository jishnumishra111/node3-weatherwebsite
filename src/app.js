const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const request = 

console.log(path.join(__dirname,'../public'))
const app = express()

const port = process.env.PORT || 3000

//Define path configuration for Express
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)   

//setupstatic directory to serve
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather App',
        name:'Jishnu'

    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Jishu'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Web-server',
        api:'weather api',
        name:'Jishnu'


    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.location){
        return res.send({
            error:'Please enter a location'
        })

    }
    geocode(req.query.location,(error,{latitude,longitude,placename}={})=>{
        if(error){
            return res.send({
                error:error
            })
        }
        forecast(latitude,longitude,(error,forecastdata)=>{
            if(error){
                return res.send({
                    error:error
                    
                })
            }
            res.send({
                location:'you have entered '+placename,
                forecast: forecastdata
            })
        })
    })
    
})
app.get('/products',(req,res)=>{

    if(!req.query.search){
        return res.send({
            error:'Please provide a value in the search'
        })

    }
        res.send({
            prooducts:{}
        })

    
    console.log(req.query)
    
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        message: 'Help article',
        title:'404',
        name:'Jishnu'
    })

})
app.get('*',(req,res)=>{
    res.render('404',{
        message:'page',
        title:'404',
        name:'Jishnu'
    })


})

app.listen(port,()=>{   
console.log('server is up on port '+port)
})