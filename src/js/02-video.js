import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
import Throttle from 'lodash.throttle';

function onTimeUpdate(evt) {
    localStorage.setItem("videoplayer-current-time", evt.seconds);
    console.log(localStorage.getItem("videoplayer-current-time"));
}

if (localStorage.getItem("videoplayer-current-time") != 0) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
}

player.on('timeupdate', Throttle(onTimeUpdate, 1000));

// 