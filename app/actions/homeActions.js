import {GET_TIMELINE} from './types';
//http://192.168.0.229:8080
const ip = 'http://192.168.0.229:8080'; //192.168.0.229

export const getTweetsTimeline = () => {
  return (dispatch) => {
    fetch(`${ip}/timeline?count=50`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch({
          type: GET_TIMELINE,
          payload: responseJson
        })
      })
      .catch((error) =>{
        console.error(error);
      });
  }
}

