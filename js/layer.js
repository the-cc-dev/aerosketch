define(['knockout','underscore','lib/knockout/svgtemplate'],
function(ko,_,svgTemplate){
	return function(){
		var self = this;
		self.name = ko.observable();
		self.visible = ko.observable(true);
		self.locked = ko.observable(false);

		self.shapes = ko.observableArray();
		self.shapesTemplate = svgTemplate(self.shapes,function(shape){
			return shape.view || 
				'<'+shape.getType()+
				' data-bind="visible:visible,attr:attr" />';
		});
	}
});