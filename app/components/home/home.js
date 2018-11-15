'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    ActivityIndicator
} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/homeActions'; //Import your actions
import Timeline from './Timeline';



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter:{
                NotVerified:false,
                NotFollow:false,
                NotDefaultProfile:false,
                NotLink:false,
                NotTruncated:false
            }
        };
        
        this.renderItem = this.renderItem.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
    }
    
    componentDidMount() {
        this.props.getTweetsTimeline(this.props.page, this.props.seed); //call our action
    }

    handleRefresh() {
        this.props.getTweetsTimeline(this.props.page, this.props.seed);
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        onEndReached={this.handleEnd}
                        onEndReachedThreshold={0}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        refreshing={this.props.refreshing}
                        onRefresh={this.handleRefresh}
                    />
                </View>
            );
        }
    }

    handleEnd() {
        this.props.getTweetsTimeline(this.props.page);
    }

    renderItem({item}) {
        return (
            <Timeline 
                tweet={item}
                navigation={this.props.navigation} 
            />
        )
        
        if (
                
          (!this.state.filter.NotVerified == item.user.verified)  
            && 
          (this.state.filter.NotFollow == item.user.following) 
            && 
          (!this.state.filter.NotDefaultProfile == item.user.default_profile) 
            &&
          (!this.state.filter.NotLink == (item.url.lenght > 0)) 
            && 
          (!this.state.filter.NotTruncated == item.truncated)

         )
         {
           return (
             <Timeline tweet={item} />
           )
         }
            
    }
};

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.homeReducer.loading,
        data: state.homeReducer.data,
        refreshing: state.homeReducer.refreshing,
        seed: state.homeReducer.seed,
        page: state.homeReducer.page,
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop:10,
  },
});