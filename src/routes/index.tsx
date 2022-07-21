import StaffList from "@/components/form/components/stafflist";
import Table from "@/components/table";
import WebViews from "@/components/webview";
import ContactsScreen from "@/pages/address";
import ChangePassword from "@/pages/changepassword";
import Login from "@/pages/login";
import MessageScreen from "@/pages/message";
import NoticeScreen from "@/pages/notice";
import TodoScreen from "@/pages/todo";
import UserInfo from "@/pages/userinfo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react"
import BottomTabs from "../pages/tabs";

interface stackType {
    name: string,
    component: React.FunctionComponent<any>
}

const stack_sreen: Array<stackType> = [
    { name: 'root', component: BottomTabs },
    { name: 'notice', component: NoticeScreen },
    { name: 'todo', component: TodoScreen },
    { name: 'contacts', component: ContactsScreen },
    { name: 'message', component: MessageScreen },
    { name: 'WebViews', component: WebViews },
    { name: 'UserInfo', component: UserInfo },
    { name: 'Login', component: Login },
    { name: 'Login', component: ChangePassword },
    { name: 'StaffList', component: StaffList },
    { name: 'Table',component:Table}

]

//定义路由栈
const IndexStack = createStackNavigator<any>()
//定义路由
const IndexStackSreen: React.FC<any> = (props: any) => {
    return (
        <IndexStack.Navigator
            screenOptions={() => ({ headerShown: false })}
        >
            {
                stack_sreen.map((res: stackType, index: number) => {
                    return (
                        <IndexStack.Screen
                            key={index}
                            name={res.name}
                            component={res.component}
                        />
                    )
                })
            }
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