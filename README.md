# CONTENT
This project is for education purpose. How do an APIs in general works and how to apply it into your project.

## NASA EPIC API
In this project we will requesting data from NASA open source APIs , it is free and public data that NASA has maintains .

## Project built using : 
1- Html
2- CSS
3- Js
4- NASA EPIC API
  
## Dependencies
  - Generate API Key, [here](https://api.nasa.gov/). 
    
    -  1- Get started
    -  2- fill up your info
    -  3- grap your Api key 
  
  - your fav text editor (= !

## EPIC API Documentation Page.
Read more about the api from NASA api documentation [here](https://epic.gsfc.nasa.gov/about/api). 

## pages
  - /index.html
    - contains all html elemtnt.
  - /nasaApi.css
    - contains all the styling .
  - /nasaApi.js
    - contains how to fetch data from Api.
      #### use your api key
      ```
      let API_KEY = ""

      ```
      #### use which api link
      ```
      let response = await fetch(` your api link here ${API_KEY}`);

      ```
      #### NOTE* imges are updaeted daily , so you need to update the date into your link also
      ##### example today date is 2021 - 04 - 02 , change it to your current date (year , month , day) . 
      ```
      const image = `<img width=300px; height=300px; src="https://epic.gsfc.nasa.gov/archive/natural/2021/04/02/png/${Epic.image}.png"</img>`

      ```

