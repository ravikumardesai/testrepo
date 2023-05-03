import { Dimensions } from "react-native";
import {useDeviceOrientation} from '@react-native-community/hooks'

// const orientation = useDeviceOrientation()

const {width,height} = Dimensions.get('window')


// if(orientation === 'landscape'){
//   width = Dimensions.get('window').height,
//   height = Dimensions.get('window').width
// }


const HEADING_NAV = 25;


const STYLES = {
  // button 
  buttons: {
    width: width - 120,
    borderRadius: (width - 120) / 3,
    height: width / 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#000"
  },
  buttonsText: {
    fontSize: width / 25,
    color: '#FFFFFF',
    fontFamily: 'montserrat_regular',
  }
}
export {HEADING_NAV,STYLES,width,height};