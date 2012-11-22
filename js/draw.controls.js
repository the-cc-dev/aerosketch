define(['underscore','draw','draw.edit','draw.commit'
],function(_,Draw){
	return {
		load: function(params, require, callback){
			require(
				_(params.split(/[,| ]/)).map(function(control){
					return 'control/'+control;
				}),
				function(){
					Draw.controls(_(arguments).toArray());
					callback();
				}
			);
		}
	};
});
