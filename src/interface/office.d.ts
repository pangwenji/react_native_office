declare namespace office { 

  type urlProp  = {
    url:string
  }
  interface stateProp { 
    images:Array<urlProp>
  }
}