import { Colors } from "@/utils/colors";
import React from "react";
import { Text, View } from "react-native";
// import { WebView } from 'react-native-webview';
import NavigationBar from "../navigationbar";
import { goBack} from '@/utils/index';
const goBacks = (props:any) => { 
  goBack(props);
}

const error =()=> { 
	commonRender('页面打开失败!');
}

const load = () => {
	commonRender('加载中...');
}
 
const commonRender = (title:string) => { 
	return(
		<View>
			<Text style={{ alignSelf: 'center' }}>{ title }</Text>
		</View>
	  )
}
const WebViews: React.FC = (props:any) => { 
  const {webview} = props;
    return (
      <View style={{flex:1}}>
        <NavigationBar
          title={'详情'} titleColor={Colors.WHITE}
          backgroundColor={Colors.ORANGE} onLeftButtonPress={goBacks}
          leftButtonIcon={require('@/assets/office/icon-backs.png')} onRightButtonPress={() => { }}/>
        {/* <WebView
          scalesPageToFit={true}
          source={{uri: webview.webviewUrl}}
		  // renderError={error}
          onLoadStart={load}
         /> */}
      </View>
    );
}
export default WebViews;