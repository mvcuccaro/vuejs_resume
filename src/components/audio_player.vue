<template>
	<div id="audio_player">
		<div class="inner">
			<span class="button" @click="controlClick" id="button_play" :class="playClasses">play</span>
			<span class="button" @click="controlClick" id="button_pause" :class="pauseClasses">pause</span>
			<span class="button" @click="controlClick" id="button_stop" :class="pauseClasses">stop</span>
			<span class="button" @click="controlClick" id="button_rewind" :class="pauseClasses">rew</span>
		</div>
		<div>
			<ul id="audio_list">
				<li v-for="item in audioSources" @click="changeAudioSource(item)" :class="audioSourceSelected(item.src)">{{ item.name }}</li>
			</ul>
		</div>
		<audio id="html_player" :src="current_audio_source">
			<source :src="current_audio_source">
		</audio>
	</div>
</template>

<!--
		<audio id="audio_controls" ref="audio_controls">
			<source src="http://thirdpartyinterface.com/mp3/3pi.call_of_shinebox.2014-4-25.mp3"></source>
		</audio>
-->

<script>
function audioPlay(){
	let ap = document.querySelector('#html_player');
	ap.play();
}

function audioPause(){
	let ap = document.querySelector('#html_player');
	ap.pause();
}

function audioStop(){
	let ap = document.querySelector('#html_player');
	ap.pause();
	ap.currentTime = 0;
}

export default{
	props: ['audioSources'],
	data(){
		return {
			title: 'audio player',
			active_buttons: [],
			current_audio_source: this.audioSources[0].src
		}
	},
	methods:{
		controlClick(event){
			console.log(this.current_audio_source)
			console.log(event);
			this.active_buttons = [];
			let active_name = event.target.id;
			this.active_buttons.push(active_name);
			switch(active_name){
				case 'button_play':
					audioPlay();
					break;
				case 'button_pause':
					audioPause();
					break;
				case 'button_stop':
					this.active_buttons = [];
					audioStop();
					break;
			}
		},
		changeAudioSource(item){
			this.current_audio_source = item.src
		},
		audioSourceSelected(arg_src){
			console.log(arg_src);
			return { audio_source_selected: arg_src == this.current_audio_source ? true : false }
		}
	},
	computed:{
		playClasses: function(){
			return this.active_buttons.indexOf("button_play") ? { active: false } : { active: true }
		},
		pauseClasses: function(){
			return this.active_buttons.indexOf("button_pause") ? { active: false } : { active: true }
		}
	}
}
</script>


<style scoped>
span {
	margin:0px !important;
}
#audio_player {
	background: linear-gradient(to bottom right, black, #000055);
	box-sizing:border-box;
	padding:4px;
}

#audio_player .inner {
	margin:4px;border:1px outset grey;
	padding:2px;
	height:100%;
}

#audio_player span.button {
	color:white;
	display:inline-block;
	border:1px inset white;
	width:50px;
	cursor:pointer;
	text-align:center;
	font-size:11px;
	font-weight:500;
	margin:0px !important;
}

.active {
	border:1px inset darkblue !important;
}

#audio_list {
	color:grey;
	font-size:12px;
	padding-left:4px;
	list-style-type:none;
}

.audio_source_selected {
	background-color:yellow;
}
</style>