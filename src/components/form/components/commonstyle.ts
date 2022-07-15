import { Colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:Colors.WHITE,
    borderBottomColor: Colors.LIGHT_GREY,
		borderBottomWidth: 1,
  },
  titleContainer: {
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 12,
    marginBottom: 12,
  },
  title: {
    textAlign: 'right',
    fontSize: 16,
    color: Colors.BLACK,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight:16,
  },
});

export default commonStyles