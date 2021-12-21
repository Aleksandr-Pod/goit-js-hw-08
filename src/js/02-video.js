import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


function onTimeUpdate(evt) {
    console.log(evt);
    localStorage.setItem("videoplayer-current-time", evt.seconds);
    console.log(localStorage.getItem("videoplayer-current-time"));
}

if (localStorage.getItem("videoplayer-current-time") !== null) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
}

player.on('timeupdate', Throttle(onTimeUpdate, 5000));

