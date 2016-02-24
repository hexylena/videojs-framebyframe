videojs-framebyframe
====================

[Check out the demo!](http://erasche.github.io/videojs-framebyframe)

Allows users to step frame-by-frame through a video.

This has to make an unfortunate assumption about framerate, but it should be
"ok" for general use. If you can run framerate detection on the server side,
this plugin works perfectly for you.

## Framerate Issues

We have no easy way to calculate framerate in Javascript, so we make a guess.
If you're serving the video yourself or otherwise can calculate the FPS value,
then you should use that and supply it to your videojs instance.

- http://stackoverflow.com/questions/20336955/how-to-step-one-frame-forward-and-one-frame-backward-in-video-playback
- http://stackoverflow.com/questions/4298084/html5-frame-by-frame-viewing-frame-seeking
- https://github.com/videojs/video.js/issues/692

## Other

- There's 4.X videojs code in the similarly named branch.


## Contributors

- Eric Rasche (@erasche)
- Miguel Grinberg (@miguelgrinberg)

## License

GPL3.

If you need BSD, just ask. I'm pretty likely to add it.
