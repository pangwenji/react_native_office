import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const onSelect = (el:any) => { }

interface IProps {
	children: Element[];
	selected: boolean;
	style: {
		backgroundColor: string;
		bottom: number;
	};
	onSelect: (el: any) => any;
	iconStyle?: string;
	selectedIconStyle?: string;
	locked?: boolean;
	selectedStyle?: string;
}

const TabBar: React.FC<IProps>= (props: IProps) => { 
	let { selected,children,style,iconStyle,selectedIconStyle,locked,selectedStyle} = props;
  if (!selected){
      React.Children.forEach(children, (el:any)=>{
          if (!selected || el.props.initial){
              selected = el.props.name;
          }
      });
  }
  return (
      <View style={[styles.tabbarView, style]}>
          {React.Children.map(children,(el:any)=>
              <TouchableOpacity key={el.props.name + "touch"}
                 style={[styles.iconView, iconStyle, el.props.name == selected ? selectedIconStyle || el.props.selectedIconStyle || {} : {} ]}
                 onPress={()=>!locked && onSelect(el)}
                 onLongPress={()=>locked && onSelect(el)}>
				  {   selected == el.props.name ?
					  React.cloneElement(el,
						  {
							  selected: true,
							  style: [
								  el.props.style,
								  selectedStyle,
								  el.props.selectedStyle]
						  }) : el
				  }
              </TouchableOpacity>
          )}
      </View>
  );
}
const styles = StyleSheet.create({
    tabbarView: {
        position:'absolute',
        right:0,
        left:0,
        height:50,
        opacity:1,
        backgroundColor:'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentView: {
        flex: 1
    }
});
export default TabBar;