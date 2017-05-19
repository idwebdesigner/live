// Initial set up video
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-bg', {
        videoId: 'ab0TSkLe-E0',
        playerVars: {
            playlist: 'ab0TSkLe-E0',
            autoplay: 1,
            loop: 1,
            color: 'white',
            controls: 0,
            showinfo: 0
        },
        events: {
            onReady: initialize
        }
    });
}

function initialize() {
    player.mute();
}

// Custom control
$('.video-bg-sound').on('click', function() {

    var muteToggle = $(this);

    if (player.isMuted()) {
        player.unMute();
        muteToggle.html('Turn music off');
    } else {
        player.mute();
        muteToggle.html('urn music on');
    }
});