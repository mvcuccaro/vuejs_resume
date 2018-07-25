module.exports = SessionControl;

function SessionControl(){
	this.getData = function(arg_key){
		ret = undefined;
		try {
			ret = JSON.parse(window.localStorage[arg_key]);
		} catch(e){
			ret = window.localStorage[arg_key];
		}

		return ret;
	}

	this.setData = function(arg_key, arg_value){
		window.localStorage[arg_key] = JSON.stringify(arg_value);
	}

	this.getAll = function(){
		return window.localStorage();
	}
}
