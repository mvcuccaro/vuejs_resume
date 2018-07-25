module.exports = SessionControl;

function SessionControl(){
	this.getData = function(arg_key){
		return window.localStorage[arg_key];
	}

	this.setData = function(arg_key, arg_value){
		window.localStorage[arg_key] = arg_value;
	}

	this.getAll = function(){
		return window.localStorage();
	}
}
