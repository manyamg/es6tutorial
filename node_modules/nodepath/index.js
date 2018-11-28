var exec = require("child_process").exec;


exports.get = function(callback){
	exec("npm prefix -g",function(err,stdout,stderr){
		callback && callback(stdout.trim());
	});
}