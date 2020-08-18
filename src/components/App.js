import React, {Component} from 'react';
//import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

//assets
import './App.css';
import "bulma/css/bulma.css";

//components
import Header from "./global/Header";
import Footer from "./global/Footer";
import Content from "./global/Content";


class App extends Component{
 
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', () => {

      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      if ($navbarBurgers.length > 0) {
    
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {
    
            const target = el.dataset.target;
            const $target = document.getElementById(target);
    
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
    
          });
          el.addEventListener("mouseleave",()=>{
            const target = el.dataset.target;
            const $target = document.getElementById(target);
    
            el.classList.remove('is-active');
            $target.classList.remove('is-active');
          })
        });
      }
    
    });

  }

  render(){
    const {children}= this.props;
    return (
      <div className="App">
          <Header/>
          <Content>
            {children}
          </Content>
          <Footer/>
      </div>
   
    );
  }
}
export default App;
