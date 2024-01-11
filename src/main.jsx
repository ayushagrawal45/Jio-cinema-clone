import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className='header_style'>List of 5 famous movies on jio cinema</h1>
    <App 
        imgsrc='https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/3x4-1703676311201.jpg?imformat=chrome'
        title='A Jio cinema original series'
        sname='The Amazing Spider man'
        link='https://www.jiocinema.com/movies/the-amazing-spider-man-hindi/3879083'
    />
    <App 
        imgsrc='https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/batman-begins-3x4-1683953005807.jpg?imformat=chrome'
        title='A Jio cinema original series'
        sname='Batman Begins'
        link='https://www.jiocinema.com/movies/batman-begins-hindi/3754706'
    />
    <App 
        imgsrc='https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/jurassic-park--1692952606684.jpg?imformat=chrome'
        title='A Jio cinema original series'
        sname='Jurrasic Park'
        link='https://www.jiocinema.com/movies/jurassic-park-hindi/3760968'
    />
    <App 
        imgsrc='https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/luka%20chuppi-1676037532252.jpg'
        title='A Jio cinema original series'
        sname='Lukka Chuppi'
        link='https://www.jiocinema.com/movies/luka-chuppi/3494266'
    />
    <App 
        imgsrc='https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/rockstar-1674227774430.jpg?imformat=chrome'
        title='A Jio cinema original series'
        sname='Rock star'
        link='https://www.jiocinema.com/movies/rockstar/3489694'
    />
  </React.StrictMode>,
)
