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
type nameProps = keyof BottomStackTabParams;
interface screenType {
	name: nameProps,
	tabBarLabel: string,
	title: string,
	component: React.FC<any>
}
const BottomStackTab = createBottomTabNavigator<BottomStackTabParams>();

//tabBar渲染
const commonTarBarRender = (props: { focused: boolean, color: String, size: Number }, title: string) => {
	return props.focused ? <Icon color='#900' name={title} size={18} /> : <Icon color='#bfbfbf' name={title} size={18} />
}

const screen: Array<screenType> = [
	{ name: 'HomeScreen', tabBarLabel: '首页', title: 'shouye', component: HomeScreen },
	{ name: 'office', tabBarLabel: '办公', title: 'bangong', component: OfficeScreen },
	{ name: 'Settings', tabBarLabel: '设置', title: 'icon_shezhi', component: SettingsScreen },
]

const BottomTabs: React.FC = () => {
	return (
		<BottomStackTab.Navigator>
			{
				screen.map((res: screenType, index: number) => {
					return (
						<BottomStackTab.Screen
							key={index}
							name={res.name}
							options={{
								headerShown: false,
								tabBarLabel: res.tabBarLabel,
								tabBarActiveTintColor: '#d81e06',
								tabBarIcon: (props) => commonTarBarRender(props, res.title)
							}}
							component={res.component}
						/>
					)
				})
			}
		</BottomStackTab.Navigator>
	)
}

export default BottomTabs;
