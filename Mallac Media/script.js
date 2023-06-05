

'use strict';


const gallery = document.querySelectorAll('.collection .gallery');

gallery.forEach(el => {
el.addEventListener('mouseenter', handleMouseEnter);
el.addEventListener('mouseleave', handleMouseLeave);
});


function handleMouseEnter(event) {
const progress = event.currentTarget.querySelector('.progress');
const video = event.currentTarget.querySelector('.video');

progress.value = 0;
video.currentTime = 0;
video.play();


const intervalId = setInterval(() => {
interval(progress, video, intervalId);
}, 10);
}


function handleMouseLeave(event) {
const progress = event.currentTarget.querySelector('.progress');
const video = event.currentTarget.querySelector('.video');

progress.value = 0;
video.pause();


clearInterval(event.currentTarget.intervalId);
}


function interval(progress, video, intervalId) {
if (video.ended) {
progress.value = 100;
clearInterval(intervalId);
} else {
const percent = (video.currentTime / video.duration) * 100;
progress.value = percent;
}
}
