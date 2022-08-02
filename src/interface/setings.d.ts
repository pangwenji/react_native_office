declare namespace setings { 
  type userProp = {
    username:string
  }
  interface stateProp { 
    userInfo: userProp
  }
}