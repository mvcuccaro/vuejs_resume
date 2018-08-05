<template>
	<div id="audio_player">
		<div class="inner">
			<div id="audio_meta" v-html="current_time">
			</div>
			<div>
				<span class="button" @click="controlClick" id="button_play" :class="playClasses">play</span>
				<span class="button" @click="controlClick" id="button_pause" :class="pauseClasses">pause</span>
				<span class="button" @click="controlClick" id="button_stop" :class="stopClasses">stop</span>
				<span class="button" @click="controlClick" id="button_rewind" :class="rewindClasses">rew</span>
			</div>
			<div id="audio_list_container">
				<ul id="audio_list">
					<li v-for="item in audioSources" @click="changeAudioSource(item)" class="audio_source" :class="audioSourceSelected(item.src)">{{ item.name }}</li>
				</ul>
			</div>
		</div>
		<div id="footer">
			VueJS Audio Player by Michael Cuccaro
		</div>
		<audio id="html_player" :src="current_audio_source" ref="ap">
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

function audioRewind(){
	let ap = document.querySelector('#html_player');
	ap.currentTime = 0;
}

export default{
	props: ['audioSources'],
	data(){
		return {
			title: 'audio player',
			active_buttons: [],
			current_audio_source: this.audioSources[0].src,
			current_time: '00:00'
		}
	},
	methods:{
		controlClick(event){
			//clear active button classes
			this.active_buttons = [];

			//if a string is passed use it - otherwise use the implicit event argument
			let active_name = typeof event === 'string' ? event : event.target.id;

			setTimeout(() => {
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
				case 'button_rewind':
					this.active_buttons = [];
					audioRewind();
				}
			}, 50)

			
		},
		changeAudioSource(item){
			//simulate clicking the stop button 
			this.controlClick('button_stop');
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
		},
		stopClasses: function(){
			return this.active_buttons.indexOf("button_stop") ? { active: false } : { active: true }
		},
		rewindClasses: function(){
			return this.active_buttons.indexOf("button_rewind") ? { active: false } : { active: true }
		}
	},
	mounted: function(){
		let ap = this.$refs.ap;
		ap.addEventListener("timeupdate", () => {
			this.current_time = ap.currentTime.toFixed(2);
		})
	}
}
</script>


<style scoped>
span {
	margin:0px !important;
}
#audio_player {
	background: linear-gradient(to bottom right, black, grey);
	box-sizing:border-box;
	padding:3px;
}

#audio_player .inner {
	margin:4px;border:1px outset grey;
	padding:4px;
	height:100%;
}

#audio_player span.button {
	background-color:silver;
	color:white;
	display:inline-block;
	border:2px outset grey;
	width:25%;
	cursor:pointer;
	text-align:center;
	font-size:11px;
	font-weight:500;
	margin:0px !important;
	margin-right:-5px !important;
}

.active {
	border:2px inset grey !important;
}

#audio_list {
	color:grey;
	font-size:12px;
	padding-left:2px;
	padding-right:4px;
	list-style-type:none;
}

.audio_source {
	color:white;
}
.audio_source_selected {
	color:black;
	background-color:yellow;
}

#audio_list_container {
	margin-top:4px;
	height:60px;
	overflow:auto;
}

#footer {
	color:white;
	font-size:10px;
	text-align:right;
	padding-right:4px;
}

#audio_meta {
	background-color:black;
	border:1px inset white;
	color:yellow;
	text-align:right;
	padding-right:4px;
}

</style>