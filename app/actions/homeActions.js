import {GET_TWEETS, GET_MORETWEETS, REFRESH_TIMELINE, GET_TIMELINE} from './types';

const ip = 'http://192.168.0.229:8080'; //192.168.0.229

export const getTweetsTimeline = (page, seed) => {
  return (dispatch) => {
    fetch(`${ip}/timeline?count=20&seed=${seed}&page=${page}`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch({
          type: GET_TWEETS,
          payload: responseJson
        })
      })
      .catch((error) =>{
        console.error(error);
      });
  }
}

export const getMoreTweets = (page) => {
  return (dispatch) => {
    fetch(`${ip}/timeline?count=20&page=${page}`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch({
          type: GET_MORETWEETS,
          payload: responseJson
        })
      })
      .catch((error) =>{
        console.error(error);
      });
  }
}