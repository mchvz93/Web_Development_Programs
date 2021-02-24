//========Below are the Event Handlers Start======================
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';


var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

//===============Used for flipping through images===START==========
// const BTN_IMAGE_CONTAINER_SELECTOR = document.querySelector('.detail-image-frame');
// const BTN_DETAIL_IMG = document.querySelectorAll( '[data-image-role="frame"]',
// '[data-image-role="trigger"]');

// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');
// let counter = 1;
//===============Used for flipping through images===END============
//========Below are the Event Handlers End========================


function setDetails(imageUrl, titleText) {
    'use strict';   // forces browser use of most recent standard version Javascript 
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);


    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    frame.classList.remove(TINY_EFFECT_CLASS);
}

function showDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function() {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);

}

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function (event) {
        event.preventDefault();
        console.log(event.keyCode);

        if (event.keyCode === ESC_KEY) {
            hideDetails();
        }
    });
}

// nextBtn.addEventListener ('click', () => {
//     'use strict';
//     if (counter >= 10) return;
//     var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
//     detailImage.setAttribute('src', '');

//     var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
//     // detailTitle.textContent = titleText;
//     var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
//     var thumbnailArray = [].slice.call(thumbnails);


//     detailImage.style.transition = 'transform 0.4s ease-in-out';
//     detailTitle.style.transition = 'transform 0.4s ease-in-out';
//     counter++;
//     BTN_IMAGE_CONTAINER_SELECTOR.style.transform = 'translateX(' + (-thumbnailArray.length * counter) + 'px)';
// });

// prevBtn.addEventListener ('click', () => {
//     'use strict';
//     if (counter <= 0) return;


//     var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
//     detailImage.setAttribute('src', '');

//     var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
//     // detailTitle.textContent = titleText;

//     var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
//     var thumbnailArray = [].slice.call(thumbnails);

//     detailImage.style.transition = 'transform 0.4s ease-in-out';
//     detailTitle.style.transition = 'transform 0.4s ease-in-out';
//     counter--;
//     BTN_IMAGE_CONTAINER_SELECTOR.style.transform = 'translateX(' + (-thumbnailArray.length * counter) + 'px)';
// });

// BTN_IMAGE_CONTAINER_SELECTOR.addEventListener('transitioned', () => {
//     var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
//     var thumbnailArray = [].slice.call(thumbnails);
//     if (BTN_DETAIL_IMG[counter].imageUrl === 'otter5.jpg') {
//         BTN_IMAGE_CONTAINER_SELECTOR.style.transition = "none";
//         counter = BTN_DETAIL_IMG.length -2;
//         BTN_IMAGE_CONTAINER_SELECTOR.style.transform = 'translateX(' + (-thumbnailArray.length * counter) + 'px)';
//     }

//     if (BTN_DETAIL_IMG[counter].imageUrl === 'otter1.jpg') {
//         BTN_IMAGE_CONTAINER_SELECTOR.style.transition = "none";
//         counter = BTN_DETAIL_IMG.length - counter;
//         BTN_IMAGE_CONTAINER_SELECTOR.style.transform = 'translateX(' + (-thumbnailArray.length * counter) + 'px)';
//     }

// });


function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}
initializeEvents();