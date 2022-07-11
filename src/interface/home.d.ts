declare namespace Home {
  type imageProp = {
    id: string,
    imageUrl: string,
  }
  type homeItemProp = {
    id: string,
    title: string,
    subTitle: string,
    imageUrl: string
  }
  type stateProp = {
    imageData: Array<imageProp>,
    homeItem: Array<homeItemProp>
  }
  type homeType = {
    home: stateProp
  }
  interface flatListProp {
    homeItem: Array<homeItemProp>
  }
}