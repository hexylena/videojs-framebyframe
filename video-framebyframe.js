// videojs-framebyframe-plugin
function framebyframe(options) {
    var player = this,
        frameTime = 1 / 30; // assume 30 fps

    videojs.FBFButton = videojs.Button.extend({
        init: function(player, options){
            videojs.Button.call(this, player, options);
	    frameTime = 1/options.fps;
            this.step_size = options.value;
            this.on('click', this.onClick);
        },
    });

    videojs.FBFButton.prototype.onClick = function() {
        //Start by pausing the player
        player.pause();
        // Calculate movement distance
        var dist = frameTime * this.step_size;
        player.currentTime(player.currentTime() + dist)
        // Now calculate movement distance
    }

    player.ready(function() {
        options.steps.forEach(function(opt) {
            player.controlBar.addChild(
                new videojs.FBFButton(player, {
                    el: videojs.Component.prototype.createEl(null, {
                        className: 'vjs-res-button vjs-control',
                        innerHTML: '<div class="vjs-control-content" style="font-size: 11px; line-height: 28px;"><span class="vjs-fbf">' + opt.text + '</span></div>',
                        role: 'button'
                    }),
                    value: opt.step,
		    fps: options.fps,
                })
            );
        });
    });
};
videojs.plugin('framebyframe', framebyframe);
