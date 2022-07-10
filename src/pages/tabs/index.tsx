import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home';
import OfficeScreen from '../office';
import SettingsScreen from '../settings';
import Icon from '../../assets/common/index';
type BottomStackTabParams = {
  HomeScreen: {},
  office: {}
  Settings: {}
}
const BottomStackTab = createBottomTabNavigator<BottomStackTabParams>();

//tabBar渲染
const commonTarBarRender = (props: { focused: boolean, color: String, size: Number }, title: string) => {
  return props.focused ? <Icon color='#900' name={title} size={18} /> : <Icon color='#bfbfbf' name={title} size={18} />
}

const BottomTabs: React.FC = () => {
  return (
    <BottomStackTab.Navigator>
      <BottomStackTab.Screen
        name='HomeScreen'
        options={{
          headerShown: false,
          tabBarLabel: '首页',
          tabBarActiveTintColor: '#d81e06',
          tabBarIcon: (props) => commonTarBarRender(props, 'shouye')
        }}
        component={HomeScreen}
      />
      <BottomStackTab.Screen
        name='office'
        options={{
          headerShown: false,
          tabBarLabel: '办公',
          tabBarActiveTintColor: '#d81e06',
          tabBarIcon: (props) => commonTarBarRender(props, 'bangong')
        }} component={OfficeScreen}
      />
      <BottomStackTab.Screen
        name='Settings'
        options={{
          headerShown: false,
          tabBarLabel: '设置',
          tabBarActiveTintColor: '#d81e06',
          tabBarIcon: (props) => commonTarBarRender(props, 'icon_shezhi')
        }} component={SettingsScreen}
      />

    </BottomStackTab.Navigator>
  )
}

export default BottomTabs;
