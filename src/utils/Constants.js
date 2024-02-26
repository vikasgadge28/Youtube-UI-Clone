/* 
if this api key not working 
1. Search Youtube Api Key auth
2. Go Credential Page
3. Generate key
*/
const GOGGLE_API_KEY ="AIzaSyBaCPwc44hSgj9UsxAw1-oab_ymx3AYMg0";

export const OFFSET_LIVE_CHAT= 30;

export const YOUTUDE_VIDEOS_API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+
GOGGLE_API_KEY;

export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
