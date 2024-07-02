document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');

    let countItem = items.length;
    let itemActive = 0;

    next.addEventListener('click', function() {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
    });

    prev.addEventListener('click', function() {
        itemActive = (itemActive - 1 + countItem) % countItem;
        showSlider();
    });

    function showSlider() {
        console.log('Current Active Item:', itemActive);

        let itemActiveOld = document.querySelector('.slider .list .item.active');
        let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');

        if (itemActiveOld) {
            itemActiveOld.classList.remove('active');
        }
        if (thumbnailActiveOld) {
            thumbnailActiveOld.classList.remove('active');
        }

        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
    }

    // Initialize the slider to show the first item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
});

