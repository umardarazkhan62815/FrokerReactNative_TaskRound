import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
      flex: 1,
      backgroundColor: '#EF9644',
    },
    imageContainer: {
      backgroundColor: '#EEEEEE',
      height: '50%',
      resizeMode: 'contain',
      alignItems: 'center',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    galleryContainer:{
        backgroundColor: '#EEEEEE', 
        flex: 1
    },
    mainImage: {
      height: '90%',
      width: '90%',
      marginTop: 30,
      borderRadius: 30,
    },
    buttonView: {
      backgroundColor: '#EEEEEE',
      flexDirection: 'row',
      height: '6%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    downArrow: {
        height: 15,
        width: 15,
        marginTop: 5,
        marginLeft: 5,
      },
      galleryButton: {
        flexDirection: 'row',
        height: 'auto',
        width: 'auto',
      },
      pillsContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2e2f2e',
        bottom:30,
        height:50,
        borderRadius:60,
        position:'absolute',
        width:'85%',
        alignSelf:'center'
      },

      button: {
        backgroundColor: 'transparent',
        flexDirection:'row',
        padding: 10,
       
        margin: 5,
        borderRadius: 5,
      },
      selectedButton: {
        backgroundColor: '#fb7a3e',
        borderRadius:60,
        
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
      },
  });
  
  export default styles