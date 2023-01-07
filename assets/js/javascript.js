


nasa = fetch ('https://api.nasa.gov/planetary/apod?api_key=ZHnqbTC06OGOwlbu8vN6Z7dzEHf2fQ15JW8qAmaS')

.then (response => response.json())

.then (data => {

 
    const explanationElement = document.querySelector('.explanation');
    explanationElement.textContent = data.explanation;
    
    const imageElement = document.querySelector('.image');
    imageElement.src = data.url;

    const titleElement = document.querySelector('.title');
    titleElement.textContent = data.title;

    const dateElement = document.querySelector('.date');
    dateElement.textContent = data.date;
    
  
  }


  
);









  
