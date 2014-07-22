// videojs-framebyframe-plugin

videojs.plugin('framebyframe', function(options) {
    var player = this,
        items = [],
        selectedItem;


    videojs.FrameByFrameMenuItem = videojs.MenuItem.extend({
        init: function(player, options) {
            videojs.MenuItem.call(this, player, options);
            this.on('click', this.onClick);
        }
    });
    videojs.FrameByFrameMenuItem.prototype.onClick = function(e) {
        //for (var i = 0, l = items.length; i < l; i++) {
            //items[i].selected(false);
        //}
	console.log(this)
    }

    videojs.FrameByFrameButton = videojs.MenuButton.extend({
        init: function(player, options){
            videojs.MenuButton.call(this, player, options);
        }
    });
    videojs.FrameByFrameButton.prototype.createItems = function() {
        var item;
        options.forEach(function(opt) {
            item = new videojs.FrameByFrameMenuItem(player, { label: opt.text, step: opt.step});
            if (opt.selected) {
                selectedItem = item;
            }
            items.push(item);
        });
        return items;
    }

    player.ready(function() {
        var button = new videojs.FrameByFrameButton(player, {
            el: videojs.Component.prototype.createEl(null, {
                className: 'vjs-res-button vjs-menu-button vjs-control',
                innerHTML: '<div class="vjs-control-content" style="font-size: 11px; line-height: 28px;"><span class="vjs-frame-step"></span></div>',
                role: 'button'
            })
        });
	player.controlBar.frameByFrameButton = player.controlBar.addChild(button);

        try {
            if (player.c.P.id.indexOf('html5') == -1) { // FIXME player.c.P
                button.hide();
            }
        } catch (err) {
            console.log("can't detect tech.");
        }
    });
});

