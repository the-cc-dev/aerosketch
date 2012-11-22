define(['underscore','transform','draw'],
function(_,Transform,Draw){
	var angle, trans,

		check = function(target){
			if(!target._selected)
				Draw.deselect();
			return '_selected' in target;
		},

		dragstart = function(e){
			Transform.on(Draw.selection());
			trans = true;
			angle = null;
		},

		drag = function(e){
			if(!angle) 
				angle = e.angle;
			if(e.shiftKey || e.button==2)
				Transform.set({
					origin:e.start,
					rotate:e.angle - angle
				});
			else
				Transform.set({translate:{
					x:e.distanceX,
					y:e.distanceY
				}});
		},

		finish = function(e){
			if(trans){
			}
			trans = false;
		},
		wheel = function(e){
			Transform.on(Draw.selection());
			Transform.set({origin:e.position, scale:1+e.delta});
		};

	return {
		check:check,
		dragstart:dragstart,
		drag:drag,
		release:finish,
		wheel:wheel
	}
});
