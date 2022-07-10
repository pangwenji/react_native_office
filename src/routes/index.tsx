import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react"
import BottomTabs from "../pages/tabs";
//定义路由栈
const IndexStack = createStackNavigator<any>()
//定义路由
const IndexStackSreen: React.FC<any> = (props: any) => {
    return (
        <IndexStack.Navigator

            screenOptions={() => ({ headerShown: false })}
        >
            <IndexStack.Screen
                name='root'
                component={BottomTabs}

            />
        </IndexStack.Navigator>
    )
}

const Navigator: React.FC = () => {
    return (
        <NavigationContainer>
            <IndexStackSreen />
        </NavigationContainer>
    )
}

export default Navigator;