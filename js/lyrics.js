(function () {

    let lyricsSections = document.querySelectorAll('section[data-lyric]');

    lyricsSections.forEach((lyricsSection, lyricIndex) => {

        let paragraphs = [...lyricsSection.children];

        paragraphs.forEach((paragraph, index) => {
            let newSection = document.createElement('section');

            let newTitle = document.createElement('h6');
            let title = 'Lied ' + (lyricIndex + 1) + ': ' + lyricsSection.dataset.lyric + ', ' + (index + 1) + '/' + paragraphs.length;
            newTitle.innerHTML = title;
            newTitle.classList.add('lyric-title');
            newSection.appendChild(newTitle);

           newSection.appendChild(paragraph);
           lyricsSection.before(newSection);
        });

        lyricsSection.remove();
    });

    Reveal.addEventListener('slidechanged', function() {
        let video = document.querySelector('video');
        video.pause();
        video.currentTime = 0;
    }, false);

})();
