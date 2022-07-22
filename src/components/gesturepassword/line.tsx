import React from "react";
import { View } from "react-native";

interface IProp { 
  color?:string
}
const Line: React.FC<IProp> = (props:IProp) => { 
  return (
     <View />
   )
}
export default Line;