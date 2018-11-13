'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Timeline = props => {
	
	let tweetMedia;

	//Some cases tweets doesnt have pictures
	if(props.tweet.entities.media) {
		//If there is a picture save it in tweetMedia, to render it later on
		tweetMedia = props.tweet.entities.media.map(picture => {
        	return (
            	<Image
                	source={{uri: picture.media_url}}
                	key={picture.id}
                	style={styles.tweetPicture}
            	/>
        	)
    	})
	}

    return (
    	<View style={styles.row}>
            <View style={styles.userPictureContainer}>
                <Image 
                    source={{uri: props.tweet.user.profile_image_url}}
                    style={styles.userProfileImage}
                />
            </View>
	        <View style={styles.tweetContainer}>
	            <View>
	                <Text style={styles.tweetUsername}>
	                    {props.tweet.user.name} <Text style={styles.tweetUsernameInfo}>@{props.tweet.user.screen_name} </Text>
	                </Text>
	        	</View>
	            <View>
	                <Text>
	        	        {props.tweet.text}
	                </Text>
	            </View>
	            <View style={styles.tweetMedia}>
	                {tweetMedia}                                            
	            </View>
	            <View style={styles.socialIconsContainer}>
	            	<View style={styles.socialIcon}>
	            		<Ionicons name='md-heart' size={25} color='#000' />
	            		<Text style={styles.socialIconCounter}>{props.tweet.favorite_count}</Text>
	            	</View>
	            	<View style={styles.socialIcon}>
	            		<Ionicons name='md-refresh'size={25} color='#000' />
	            		<Text style={styles.socialIconCounter}>{props.tweet.retweet_count}</Text>
	            	</View>
	            	<View style={styles.socialIcon}>
	            		<Ionicons name='md-send' size={25} color='#000' />
	            		<Text></Text>
	            	</View>
	            </View>
	        </View>
        </View>
    )
}

export default Timeline;

const styles = StyleSheet.create({
    row:{
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 15,
    },

    userPictureContainer: {
        flex: 0.2,
    },

    userProfileImage: {
    	height: 40,
    	borderRadius: 60,
    	resizeMode: 'contain', 
    },

    tweetContainer: {
        flex: 0.8,
    },

    tweetUsername: {
        fontWeight: 'bold',
    },

    tweetUsernameInfo: {
        color: 'grey',
    },

    tweetMedia: {
    	marginTop: 10,
    },

    tweetPicture: {
    	resizeMode: 'cover',
    	height: 150,
  	},

  	socialIconsContainer: {
  		flex: 1,
  		flexDirection: 'row',
  		justifyContent: 'space-between',
  		marginTop: 10,
  	},

  	socialIcon: {
  		flexDirection: 'row',
  	},

  	socialIconCounter: {
  		marginLeft: 5,
  	},
});