declare namespace Form { 
  interface IProps { 
    row: any,
    onUserInput: (key: any, value: any) => {},
    text?: any,
    staffList?: any,
    taskApproval?:any
  }
}