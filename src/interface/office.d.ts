declare namespace office { 

  type urlProp  = {
    title: string
    type:string
  }
  interface stateProp { 
    images: Array<urlProp>,
  }
}