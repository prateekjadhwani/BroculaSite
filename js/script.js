var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxCaption = document.getElementById('lightbox-caption');
    var images = [];
    var currentIndex = 0;

    // Push image URLs into the images array
    images.push("images/00.png");
    images.push("images/01.png");
    images.push("images/02.png");
    images.push("images/03.png");
    images.push("images/04.png");
    images.push("images/05.png");
    images.push("images/06.png");
    images.push("images/07.png");
    images.push("images/08.png");
    images.push("images/09.png");
    images.push("images/10.png");
    images.push("images/11.png");

    function openLightbox(imageSrc) {
        lightbox.style.display = 'block';
        lightboxImg.src = imageSrc;
        lightboxCaption.innerHTML = imageSrc;
        currentIndex = images.indexOf(imageSrc);
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function changeImage(n) {
        currentIndex += n;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        lightboxImg.src = images[currentIndex];
        lightboxCaption.innerHTML = images[currentIndex];
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeLightbox();
        } else if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        }
    });