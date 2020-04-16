import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
.App {
    text-align: center;
  }
  .App-logo {
    height: 40vmin;
  }
  
  .App-header {
    background-color: rgba(255, 255, 255, 0.75);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: rgb(0, 119, 255);
  }
  
  .App-sidebar {
    background-color:  rgb(0, 119, 255);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
   
  body {}
  
  .box h3{
    text-align:center;
      position:relative;
      top:80px;
  }
  .box {
      width:70%;
      height:200px;
      background:#FFF;
      margin:40px auto;
  }
  /*==================================================
   * Effect 1
   * ===============================================*/
  .effect1{
      -webkit-box-shadow: 0 10px 6px -6px #777;
         -moz-box-shadow: 0 10px 6px -6px #777;
              box-shadow: 0 10px 6px -6px #777;
  }`;