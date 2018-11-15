import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        width:"100%",
        backgroundColor:"white",
        paddingTop:5,
        paddingBottom:5,
        alignItems:"center"
    },
    text:{
        width:"90%",
        fontSize:18,
        fontWeight:"bold",
        paddingLeft:10,
        color:"#547d8b"
    },
    icon:{
        position:"absolute",
        right:0
    }
})

class Option extends React.Component{

    constructor(){
        super();     
        this.state = {};

    }

    render(){
        
        return(
            <TouchableOpacity style={styles.container}>
                    <Text style={styles.text}>{this.props.content}</Text>
                    <Ionicons style={styles.icon} name={ this.props.checked ? "md-checkmark-circle" : "ios-radio-button-off"} size={30} color={this.props.checked ? "#547d8b" : "#ccc"}/>
            </TouchableOpacity>  
            
        )
    }
}

export default Option;