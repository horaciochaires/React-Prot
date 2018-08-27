import { StyleSheet } from "react-native";

export default StyleSheet.create({
  view: {
    height: "100%"
  },
  input: {
    textAlign: "center",
    width: "90%",
    marginBottom: 7,
    height: 40,
    borderRadius: 5,
    fontSize: 20
  },
  button: {
    width: '100%',
      height: 40,
      width: 120,
    borderRadius:50,
    backgroundColor: "#FE8C07",
    
  },
  loginButtonSection: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:"100%",
 },
  textButton: {
    fontSize: 20,
    marginTop:5,
    textAlign: "center",
    color: "#FFFFFF"
  },
  
  submit:{
    marginRight:"37%",
    marginLeft:"37%",
    marginTop:0,
    paddingTop:32,
    paddingBottom:3,
    backgroundColor:'#113070',
    borderRadius:70,
    // borderWidth: 1,
    // borderColor: '#fff'
  },
  submitText:{
    width:"70%",
    height:"70%",
      color:'#fff',
      textAlign:'center',
      justifyContent: 'center',
      marginLeft:"15%",
      marginTop:"15%",
      paddingTop:"15%"
  }
});
