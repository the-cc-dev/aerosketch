define([
   'knockout','underscore','transform',
   'draw','draw.history'
],function(ko,_,Transform,Draw){
	var clipboard = ko.observableArray([]),
		hide = function(){
			var shapes = Draw.selection();
			Draw.commit.apply(null,shapes);
			_(shapes).invoke('visible',false);
			Draw.selection.removeAll();
		},
		copy = function(){
			clipboard( _(Draw.selection()).map(function(shape){
				return shape.clone();
			}) );
		},
		cut = function(){
			copy();
			hide();
		},
		paste = function(){
			if(!clipboard()) return;

			var shapes = _(clipboard()).map(function(shape){
				return shape.clone();
			});

			Transform(shapes,{translate:{
				x:30/Draw.zoom(),
				y:30/Draw.zoom()
			}});

			Draw.add.apply(null,shapes);
			Draw.commit.apply(null,shapes);
			Draw.selection(shapes);
		};

	_(Draw).extend({
		clipboard:clipboard,
		hide:hide,
		cut:cut,
		copy:copy,
		paste:paste
	});

});
