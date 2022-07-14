import Spinner from "@/components/spinner";
import TabBar from "@/components/tarbar";
import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import HomeScreen from "../home";
import Office from "../office";
import SettingsScreen from "../settings";



const ImageInfo = (name:string,url:string,paddingTop?:number) => { 
	return (
		<Image
			name={name}
			selectedStyle={
				{ tintColor: '#ef6c00' }
			}
			style={
				[
					{
						width: 22,
						height: 34,
						paddingTop:paddingTop ? paddingTop  : 0
					}
			    ]
			}
			selectedIconStyle={
				{
					borderTopWidth: 2, 
					borderTopColor: '#ef6c00'
				}}
			source={require(url)}
		/>
	)
}

const commonPage = (props:any) => { 
	switch (type) { 
		case 'infomation':
			return <HomeScreen {...this.props}/>
		case 'office':
			return <Office {...this.props}/>
		case 'setting':
			return <SettingsScreen {...this.props}/>
		default:
			break;
	}
}

const main: React.FC = (props) => { 
  return (
    <View style={styles.container}>
      <View style={styles.mainPage}>
        {commonPage(props)}
      </View>
    <TabBar selected={this.state.page} style={{backgroundColor:'#322a33', bottom:0,}}
      onSelect={el=>this.setState({page:el.props.name})}>
			  {
			     ImageInfo('message','../img/icon/icon-home-active.png')
			  }
			  {
			    ImageInfo('office','../img/icon/icon-office-active.png')
			  }
			   {
			    ImageInfo('setting','../img/icon/icon-setting-active.png',2)
			  }
    </TabBar >
    <View>
      <Spinner visible={this.state.loading} text={'更新中,请稍后...'}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	mainPage: {
	  height: Platform.OS === 'ios'? HEIGHT-50 : HEIGHT-75,
	}
  });
export default main;