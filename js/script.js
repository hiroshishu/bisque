$( document ).ready(function(){
	
	var body = document.body;

	var prefix = (function(i){
		var pre = 'Khtml O Moz ms Webkit'.split(' ');
		while( i-- ){
			if( typeof( body.style[ pre[i] + 'Transform' ] )  === 'string' ) {
				return '-' + pre[i][0].toLowerCase() + pre[i].substring(1) + '-';
			}
		}
	})(5);



	//demo: clock
	(function(){
		var h, m, s, i; 
			_h = $('#clock>div b'),
			_m = $('#clock>div i'),
			_s = $('#clock>div s');
	
		setInterval(function(){
			var curr = new Date(); 
			s = curr.getSeconds();
			_s.css( prefix + 'Transform', 'rotate(' + s * 6 + 'deg)');
			
			if( !s || !i ){
				m = curr.getMinutes();
				_m.css( prefix + 'Transform', 'rotate(' + m * 6 + 'deg)');

				if( !( m % 2 ) || !i ){
					h = curr.getHours() % 12;
					_h.css( prefix + 'Transform', 'rotate(' + ( h + +( m / 60 ).toFixed(1) ) * 30 + 'deg)');
				}
				i = 1;
			}
		}, 1000);
	})();
	



	//demo: color
	(function(){
		var input = $('#color>div>div>input'),
			clr = $('#color>div>div>i');

		input.on('change', function(){
			clr.css('background-color', 'hsl(' + this.value + ',60%,47%)');
		});
	})();




	//demo: music player
	(function(){
		var audio = $('audio');
		if( 'play' in audio[0] ){
			var buffer = $('.audio-buffer'),
				time = $('.time-update'),
				timeCtrl = $('.time-control'),
				
				volumeCtrl = $('.volume-control'),
				play = $('#player>div>div>em>b'),
				volume = $('#player>div>div>em>i'),
				
				onplay = function(){
					play[0].className = play[0].className.replace('play', 'pause');
					time.attr( 'max', this.duration );
					timeCtrl.attr( 'max', this.duration );
					buffer.attr( 'max', this.duration );
				},
				onpause = function(){
					play[0].className = play[0].className.replace('pause', 'play');
				};
			
			audio.on('progress', function(){
				var buffered = this.buffered;
				buffered.length && buffer.attr( 'value', buffered.end(0) );
			});
			
			audio.on("play", onplay);
			audio.on("pause", onpause);
			audio.on("ended", onpause);
			
			audio.on("timeupdate", function(){
				time.attr( 'value', audio[0].currentTime );
			});
			
			play.on('click', function(){
				if( this.className.match('play') ) audio[0].play();
				else if( this.className.match('pause') ) audio[0].pause();
			});
			
			volumeCtrl.on('change', function(){
				audio[0].volume = this.value / 100;
				if( !+this.value ) volume[0].className = volume[0].className.replace('normal', 'mute');
				else if( this.value < 50 ) volume[0].className = volume[0].className.replace(/loud|mute/, 'normal'	);
				else volume[0].className = volume[0].className.replace('normal', 'loud');
			});
			
			timeCtrl.on('change', function(){
				audio[0].currentTime = this.value;
			});
		}
	})();


});

