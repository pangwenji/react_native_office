declare namespace notice {
  type dataProp = {
    title: string,
    currentTime: string,
  }
  type itemState = {
    notice:dataState
  }
  interface dataState { 
     data:Array<dataProp>
  }
  
}