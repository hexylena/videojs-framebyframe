videojs-framebyframe
====================

Allows users to step frame-by-frame through a video. This has to make an unfortunate assumption about framerate, but it should be "ok" for general use.


```html
<!DOCTYPE html>
<html>
<head>
  <title>Video.js | HTML5 Video Player</title>

  <!-- Chang URLs to wherever Video.js files will be hosted -->
  <link href="video-js.css" rel="stylesheet" type="text/css">
  <!-- video.js must be in the <head> for older IEs to work. -->
  <script src="video.js"></script>

  <!-- Unless using the CDN hosted version, update the URL to the Flash SWF -->
  <script>
    videojs.options.flash.swf = "video-js.swf";
  </script>
  <script src="video-framebyframe.js"></script>
</head>
<body>

  <video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="640" height="264"
      poster="http://video-js.zencoder.com/oceans-clip.png"
      data-setup="{}">
    <source src="http://video-js.zencoder.com/oceans-clip.mp4" type='video/mp4' />
    <source src="http://video-js.zencoder.com/oceans-clip.webm" type='video/webm' />
    <source src="http://video-js.zencoder.com/oceans-clip.ogv" type='video/ogg' />
    <track kind="captions" src="demo.captions.vtt" srclang="en" label="English"></track><!-- Tracks need an ending tag thanks to IE9 -->
    <track kind="subtitles" src="demo.captions.vtt" srclang="en" label="English"></track><!-- Tracks need an ending tag thanks to IE9 -->
    <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
  </video>

  <script type='text/javascript'>
    var video = videojs("example_video_1", {
      controls: true,
      autoplay: true,
      preload: 'auto',
      plugins: {
        framebyframe: [
          { text: '-5', step: -5 },
          { text: '-1', step: -1 },
          { text: '+1', step: 1 },
          { text: '+5', step: 5 },
        ]
      }
    });
  </script>

</body>
</html>
```

## Framerate Issues

We have no way to get the actual framerate, so we make a guess.

- http://stackoverflow.com/questions/20336955/how-to-step-one-frame-forward-and-one-frame-backward-in-video-playback
- http://stackoverflow.com/questions/4298084/html5-frame-by-frame-viewing-frame-seeking
- https://github.com/videojs/video.js/issues/692
