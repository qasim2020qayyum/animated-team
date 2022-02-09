document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.nav-wrapper').classList.toggle('change');
});

// slideshow js

document.querySelector('.slideshow-wrapper').style.cssText = 'opacity: 1; visibility: visible';
document.querySelector('.slideshow').style.animation = 'slideshow 24s infinite';



// Team section js

const heading = 'Please Meet Our Team';
let i = 0;

const typing = () => {
    if (i < heading.length) {
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 150);
    }
}

typing();


// 3d slider js

let x = 0,
    bool = false,
    interval;

const rotate = () => {
    const cubes = document.querySelectorAll('.cube');

    Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
}

const changePlayPause = () => {
    const i = document.querySelector('.play-pause i');
    const cls = i.classList[1];
    if (cls === 'fa-play') {
        i.classList.remove('fa-play');
        i.classList.add('fa-pause');
    } else {
        i.classList.remove('fa-pause');
        i.classList.add('fa-play');
    }
}

const playPause = () => {
    if (!bool) {
        interval = setInterval(() => {
            x -= 90;
            rotate();
        }, 3000);
        changePlayPause();
        bool = true;
    } else {
        clearInterval(interval);
        changePlayPause();
        bool = false;
    }

}

document.querySelector('.left-arrow').addEventListener('click', () => {
    x += 90;
    rotate();
    if (bool) {
        playPause();
    }
});

document.querySelector('.left-arrow').addEventListener('mouseover', () => {
    x += 25;
    rotate();
});

document.querySelector('.left-arrow').addEventListener('mouseout', () => {
    x -= 25;
    rotate();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    x -= 90;
    rotate();
    if (bool) {
        playPause();
    }
});


document.querySelector('.right-arrow').addEventListener('mouseover', () => {
    x -= 25;
    rotate();
});

document.querySelector('.right-arrow').addEventListener('mouseout', () => {
    x += 25;
    rotate();
});

document.querySelector('.play-pause').addEventListener('click', () => {
    playPause();
});
