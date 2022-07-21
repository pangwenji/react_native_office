import { Colors } from "@/utils/colors";
import React, { useState } from "react";
import { Image, ScrollView, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewProps } from "react-native";
import NavigationBar from "../navigationbar";
import ToastTip from "../notification";

const goBack = () => { }

const sizeChangeToSmaller = () => { 
	// this.refs.scrollview.scrollTo({x: 0, y: 0});
    // if (this.state.circleStyles.cell.width*this.state.tableData.titleVo.length > WIDTH) {
    //   cellWide*=5/6;
    //   cellHigh*=5/6;
    //   wordSize*=5/6;
    //   this.setState({
    //     wordSize:wordSize,
    //     circleStyles:{
    //       cell: {
    //         borderWidth: 1,
    //         width: cellWide,
    //         height: cellHigh,
    //         borderColor: '#999',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         overflow: 'hidden',
    //       }
    //     }
    //   })
    // }
}

const sizeChangeToBigger = () => { 
	// if (this.state.wordSize < 50) {
	// 	cellWide*=6/5;
	// 	cellHigh*=6/5;
	// 	wordSize*=6/5;
	//    this.setState({
	// 	 wordSize:wordSize,
	// 	 circleStyles:{
	// 	   cell: {
	// 		 borderWidth: 1,
	// 		 width: cellWide,
	// 		 height: cellHigh,
	// 		 borderColor: '#999',
	// 		 alignItems: 'center',
	// 		 justifyContent: 'center',
	// 		 overflow: 'hidden',
	// 	   }
	// 	 }
	//    })
	//  }
}

const commonRenderTouchable = (icon:string,fn:Function) => { 
	return (
	<TouchableOpacity style={styles.btnSty} onPress={sizeChangeToBigger}>
		<Image style={{width: 32,height: 32}} source={require(icon)}/>
	</TouchableOpacity>
	)
}

const sum = (key: any,tableData:tableProps) => { 
	let sum:number= 0;
    tableData.data.map((rowData)=>{
      if(rowData[key] != undefined && rowData[key] != ''){
        sum += parseFloat(rowData[key])
      }
    });
	// sum = sum.toFixed(3);
	<ToastTip message={`${key}合计:${sum}`} />
}
type tableProps = {
	titleVo: Array<any>,
	data: Array<any>,
	code?: string
}
const defaultTableData: tableProps= {
	titleVo: [],
	data: [],
	code:''
}

type cellProps ={ 
	 borderWidth: number,
	  width: number,
	  height: number,
	  borderColor: string,
	  alignItems: string,
	  justifyContent: string,
	  overflow: string,
}

const defaultCircleStyles: {cell: cellProps |StyleProp<ViewProps> | any} =  {
	cell: {
	  borderWidth: 1,
	  width: 48,
	  height: 112,
	  borderColor: '#999',
	  alignItems: 'center',
	  justifyContent: 'center',
	  overflow: 'hidden',
	}
  }

const Table: React.FC = () => {
	let [tableData,setTableData] = useState(defaultTableData);
	let [circleStyles, setCircleStyles] = useState(defaultCircleStyles);
	let [wordSize, setWordSize] = useState(17);
    let  titleName = tableData.code? tableData.code: '';
 
  return(
    <View style={styles.background}>
      <NavigationBar
        title={titleName} titleColor={Colors.WHITE}
        backgroundColor={Colors.ORANGE} onLeftButtonPress={goBack}
        leftButtonIcon={require('@/assets/office/icon-backs.png')}/>
        <ScrollView horizontal={true}>
          <View >
            <View style={{flexDirection: 'row'}}>
					  {
						tableData.titleVo.map((rowData:any,idx:number)=>{
							if(rowData.type && rowData.type === 'int'){
							  return (
								<View key={idx} style={circleStyles.cell}>
								  <TouchableOpacity onPress={()=>sum(idx,tableData)}>
									<Text style={{color: Colors.ORANGE,fontSize:wordSize}}>{rowData.title}</Text>
								  </TouchableOpacity>
								</View>
							  );
							}else{
							  return (
								<View style={circleStyles.cell}>
								  <Text style={{fontSize:wordSize}}>{rowData.title}</Text>
								</View>
							  );
							}
						  })
			  }
            </View>
				  {
					  tableData.data.map((rowData:any,index:number)=>{
						return(
						  <View key={index} style={{flexDirection: 'row'}}>
								{
								tableData.titleVo.map((row:any,index:number)=>{
									let key = row.title;
									let value = rowData[key] ? rowData[key] : '';
									return (
									  <TouchableOpacity key={index} onPress={()=>{
											<ToastTip message={`${key} \n ${value}`} />
									  }}>
										<View style={circleStyles.cell}>
										  <Text numberOfLines = {2} style={{fontSize:wordSize}}>{rowData[key]}</Text>
										</View>
									  </TouchableOpacity>
									);
								  })	
							}
						  </View>
						);
					  })
			}
          </View>
          </ScrollView>
		  { commonRenderTouchable('@/assets/img/icon/zoom_out.png',sizeChangeToSmaller)}
		  { commonRenderTouchable('@/assets/img/icon/zoom_in.png',sizeChangeToBigger)}
    </View>
  );
}
 
const styles = StyleSheet.create({
	btnSty: {
		width: 56,
		height: 56,
		borderRadius: 28,
		backgroundColor: Colors.ORANGE,
		position: 'absolute',
		bottom: 10,
		right: 80,
		elevation: 4,
		justifyContent: 'center',
		alignItems: 'center'
	},
	background: {
		flex: 1,
		backgroundColor: Colors.GRAY_GAY,
	  },
})

export default Table;