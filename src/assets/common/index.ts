import { createIconSet } from 'react-native-vector-icons';
import iconfontMsg from '../office-icon/iconfont.json';
const iconMap: any = {};
iconfontMsg.glyphs.forEach(res => {
    iconMap[res.font_class] = `${res.unicode}`
})
export default createIconSet(iconMap, iconfontMsg.font_family, 'iconfont.ttf')