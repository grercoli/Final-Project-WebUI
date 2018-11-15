'use strict';

import React from "react";
import {View, TouchableOpacity, StyleSheet, Text, Button} from "react-native";
import Option from "./option"
import CheckFilter from "../../actions/settingsActions"
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as Actions from "../../actions/settingsActions"; 
 

const styles = StyleSheet.create(
    {
        header:{         
            backgroundColor:"#a6b4c5",
            color:"white",
            fontSize:20
        }
    }
)

class Settings extends React.Component{

    render(){
        
        return(
            <View>
                <Text style={styles.header}>Silence notifications from...</Text>
            
                <Option checked={false} 
                    content="People who have not verified the account" />
                
                <Option checked={false} 
                    content="People who do not follow"/>
                
                <Option checked={false}  
                    content="People who have default profile information"/>
                
                <Option checked={false}
                    content="Tweets that contains a link"/>
                
                <Option checked={false} 
                    content="Tweets that has text truncated"/>
            </View>
        )
    }

}

function mapStateToProps (state) {
    return {
        filter: state.settingsReducer.filter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings);

//export default Settings;