import { combineReducers } from 'redux'

// const songReducer = () => {
//   return [
//     {
//       title: 'No scrubs',
//       duration: '4:05'
//     },
//     {
//       title: 'All star',
//       duration: '3:14'
//     },
//     {
//       title: 'Macarena',
//       duration: '2:30'
//     }
//   ];
// };
// const selectedSongReducer = (selectedSong = null, action) => {
//   if (action.type === 'SONG_SELECTED') {
//     return action.payload;
//   }
//   return selectedSong;
// };

export default combineReducers({
    replaceMe: () => 'dummy'
});