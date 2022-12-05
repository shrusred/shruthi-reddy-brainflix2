import React from 'react';
import './styles/partials/_breakpoints.scss'
import './styles/partials/_colors.scss'
import './styles/partials/_fonts.scss'
import './styles/partials/_global.scss'
import './styles/partials/_mixins.scss'

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Create a method to fetch matching id video
//fetchVideo = (videoId) => {
    //axios
    //  .get(`…/videos/${videoId}`)
     // .then((response) =>
       // this.setState({
         // selectedMovie: response.data,
        //})
      //)
      //.catch((err) => console.error(err));
 // };