import React from 'react';
import './resources/styles.css';
import Main from './components/core/Main.jsx';
import data from './questions.json'

 export default class App extends React.Component {
  render() {
    return (
      <div className="App">
          {/* <Header/> */}
          <Main />
          {
            data.map((item)=>{
              console.log(item)
            })
          }
          {/* <Footer/> */}
      </div>
  );
}
}
