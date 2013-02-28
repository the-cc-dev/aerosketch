define([
   'knockout','underscore','lib/knockout/svgtemplate',
],function(ko,_,svgTemplate,Factory){
	function Layer(options){
		options = _(options || {}).defaults({
			name:'',
			visible:true,
			shapes:[]
		});
		this.name = ko.observable(options.name);
		this.visible = ko.observable(options.visible);
		this.shapes = ko.observableArray(options.shapes);

		this.shapesTemplate = svgTemplate(this.shapes,function(shape){
			return '<'+shape.type+' data-bind="visible:visible,aniattr:attr" />';
		});
		/*
		self.serialize = function(){
			return {
				name: self.name(),
				visible: self.visible(),
				shapes: _.chain(self.shapes())
					.filter(function(shape){ return shape.visible(); })
					.invoke('serialize').value()
			};
		}
		*/
	}
	_(Layer.prototype).extend({
		post:function(shape){

		}
	});
	return Layer;
});
