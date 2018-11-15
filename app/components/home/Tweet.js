'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    Image,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Moment from 'moment';

const Tweet = props => {

  let tweetMedia;

  //Some cases tweets doesnt have pictures
  if(props.tweet.entities.media) {
    //If there is a picture save it in tweetMedia, to render it later on
    tweetMedia = props.tweet.entities.media.map(picture => {
          return (
            <View style={styles.tweetInformation}>
              <Image
                  source={{uri: picture.media_url}}
                  key={picture.id_str}
                  style={styles.tweetPicture}
              />
            </View>
          )
      })
  }

	console.log(props.tweet);

  Moment.locale('en');
  let tweetDate = props.tweet.created_at;

	return (
    <View style={styles.container}>
      
      <View style={styles.userDataContainer}>
        <View style={styles.userPictureContainer}>
          <Image 
            source={{uri: props.tweet.user.profile_image_url}}
            style={styles.userImage}
          />
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.tweetUsername}>{props.tweet.user.name}</Text>
          <Text style={styles.tweetUsernameInfo}>@{props.tweet.user.screen_name}</Text>
        </View>
      </View>

      <View style={styles.tweetInformation}>
        <Text style={styles.tweetText}>{props.tweet.text}</Text>
      </View>

      {tweetMedia}

      <View style={styles.tweetInformation}>
        <Text>{Moment(tweetDate).format('H:mm a - D MMM. YY')}</Text>
      </View>

      <View style={styles.tweetStatus}>
        <View style={styles.retweets}>
          <Text>{props.tweet.retweet_count} Retweets</Text>
        </View>
        <View style={styles.likes}>
          <Text>{props.tweet.favorite_count} Likes</Text>
        </View>
      </View>

      <View style={styles.tweetIcons}>
        <View style={styles.heart}>
          <Ionicons name='md-heart' size={40} color='#FFF' />
        </View>
        <View style={styles.refresh}>
          <Ionicons name='md-refresh'size={40} color='#FFF' />
        </View>
        <View style={styles.send}>
          <Ionicons name='md-send' size={40} color='#FFF' />
        </View>
      </View>

    </View>
  )
}

export default Tweet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFF',
    paddingLeft: 10,
    paddingRight: 10,
  },

  userDataContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  userPictureContainer: {
    flex: 0.2,
  },

  userImage: {
    height: 60,
    borderRadius: 50,
    resizeMode: 'contain',
  },

  userInfoContainer: {
    flex: 0.8,
    justifyContent: 'center',
    paddingLeft: 10,
  },

  tweetUsername: {
    fontWeight: 'bold',
  },

  tweetUsernameInfo: {
    color: 'grey',
  },

  tweetInformation: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
  },

  tweetText: {
    flex: 1,
  },

  tweetPicture: {
    flex: 1,
    resizeMode: 'cover',
    height: 150,
  },

  tweetStatus: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },

  retweets: {
    flex: 0.3,
  },

  likes: {
    flex: 0.7,
  },

  tweetIcons: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    justifyContent: 'space-between',
  },

  heart: {
    flex: 0.2,
    padding:10,
    borderRadius: 50,
    height: 75,
    backgroundColor: '#e01a77',
    justifyContent: 'center',
    alignItems: 'center',
  },

  refresh: {
    flex: 0.2,
    padding:10,
    borderRadius: 50,
    height: 75,
    backgroundColor: '#3cc41a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  send: {
    flex: 0.2,
    padding:10,
    borderRadius: 50,
    height: 75,
    backgroundColor: '#1bd5cd',
    justifyContent: 'center',
    alignItems: 'center',
  },

});