carbon.stencils = {
    _container: `<form id="{{name}}" {{^autocomplete}}autocomplete="false"{{/autocomplete}} name="{{name}}" class="carbon {{^options.inline}} smart-form-horizontal form-horizontal{{/options.inline}} {{modifiers}}" {{#action}}action="{{action}}"{{/action}} onsubmit="return false;" {{#method}}method="{{method}}"{{/method}}>{{^legendTarget}}{{#legend}}<legend>{{{legend}}}</legend>{{/legend}}{{/legendTarget}}</form>`,
    text: `<div class="row clearfix form-group {{modifiers}} {{#array}}dupable" data-min="{{multiple.min}}" data-max="{{multiple.max}}{{/array}}" name="{{name}}" data-type="{{type}}">
	{{>_label}}
	{{#label}}
	{{#inline}}<div class="col-md-12">{{/inline}}
	{{^inline}}<div class="col-md-8">{{/inline}}
	{{/label}}
	{{^label}}
	<div class="col-md-12">
	{{/label}}
		{{#pre}}<div class="input-group col-xs-12"><span class="input-group-addon">{{{pre}}}</span>{{/pre}}
    {{^pre}}{{#post}}<div class="input-group">{{/post}}{{/pre}}
		<input {{^autocomplete}}autocomplete="off"{{/autocomplete}} class="form-control" {{^enabled}}readonly{{/enabled}} {{#maxLength}}maxlength="{{maxLength}}"{{/maxLength}}{{#min}} min="{{min}}"{{/min}}{{#max}} max="{{max}}"{{/max}} {{#step}} step="{{step}}"{{/step}} placeholder="{{placeholder}}" type="{{elType}}{{^elType}}{{type}}{{/elType}}" name="{{name}}" id="{{name}}" value="{{value}}" />
    {{#post}}<span class="input-group-addon">{{{post}}}</span></div>{{/post}}
    {{^post}}{{#pre}}</div>{{/pre}}{{/post}}
		{{>_addons}}
		{{>_actions}}
	</div>
</div>`,
hidden: `<input type="hidden" name="{{name}}" value="{{value}}" />`,
    textarea: `<div class="row clearfix form-group {{modifiers}} {{#array}}dupable" data-min="{{multiple.min}}" data-max="{{multiple.max}}{{/array}}" name="{{name}}" data-type="{{type}}">
	{{>_label}}
	{{#label}}
	{{#inline}}<div class="col-md-12" {{#advanced}}style="padding:0px 13px"{{/advanced}}>{{/inline}}
	{{^inline}}<div class="col-md-8" {{#advanced}}style="padding:0px 13px"{{/advanced}}>{{/inline}}
	{{/label}}
	{{^label}}
	<div class="col-md-12" {{#advanced}}style="padding:0px 13px"{{/advanced}}>
	{{/label}}
		<textarea class="form-control"  {{^enabled}}readonly{{/enabled}} {{#maxLength}}maxlength="{{maxLength}}"{{/maxLength}} style="width:100%;height:auto;min-height:20px" rows="{{rows}}{{^rows}}3{{/rows}}" name="{{name}}" id="{{guid}}" placeholder="{{placeholder}}">{{content}}{{value}}</textarea>
			{{>_addons}}
			{{>_actions}}
	</div>
</div>`,
    select: `<div class="row clearfix form-group {{modifiers}} {{#array}}dupable" data-min="{{multiple.min}}" data-max="{{multiple.max}}{{/array}}" name="{{name}}" data-type="{{type}}">
	{{>_label}}
	{{#label}}
	{{#inline}}<div class="col-md-12">{{/inline}}
	{{^inline}}<div class="col-md-8">{{/inline}}
	{{/label}}
	{{^label}}
	<div class="col-md-12">
	{{/label}}
		{{#pre}}<div class="input-group"><span class="input-group-addon">{{{pre}}}</span>{{/pre}}
		{{^pre}}{{#post}}<div class="input-group">{{/post}}{{/pre}}
			<select class="form-control"  name="{{name}}" {{^enabled}}readonly disabled="true"{{/enabled}}  {{#multiple_enable}}multiple{{/multiple_enable}} >
			{{#options}}{{#options}}

				{{^section}}
				<option {{#selected}}selected='selected'{{/selected}} {{^enabled}}disabled{{/enabled}} {{^visible}}hidden{{/visible}}  value="{{value}}">{{{label}}}</option>
				{{/section}}

				
				{{#section}}
				{{#section.label}}
				<optgroup label="{{label}}" data-id="{{section.id}} {{^enabled}}disabled{{/enabled}} {{^visible}}hidden{{/visible}}">
				{{/section.label}}
					{{#options}}
					<option data-id="{{section.id}}" {{#selected}}selected='selected'{{/selected}} {{^enabled}}disabled{{/enabled}} {{^visible}}hidden{{/visible}}  value="{{value}}">{{{label}}}</option>
					{{/options}}
					{{#section.label}}
				</optgroup>
				{{/section.label}}
				{{/section}}

			{{/options}}{{/options}}
			</select>
		{{#post}}<span class="input-group-addon">{{{post}}}</span></div>{{/post}}
		{{^post}}{{#pre}}</div>{{/pre}}{{/post}}
		{{>_addons}}
		{{>_actions}}
	</div>
</div>`,
select_options:`
{{>select_options}}

`,
    radio: `<div class="row clearfix form-group {{modifiers}} {{#array}}dupable" data-min="{{multiple.min}}" data-max="{{multiple.max}}{{/array}}" name="{{name}}" data-type="{{type}}">
	{{>_label}}
	{{#label}}
	{{#inline}}<div class="col-md-12">{{/inline}}
	{{^inline}}<div class="col-md-8">{{/inline}}
	{{/label}}
	{{^label}}
	<div class="col-md-12">
	{{/label}}
		{{#pre}}<div class="input-group"><span class="input-group-addon">{{{pre}}}</span>{{/pre}}
		{{^pre}}{{#post}}<div class="input-group">{{/post}}{{/pre}}
			{{#options.options}}
			<div class="radio">
				<label {{#inline}}class="radio-inline"{{/inline}}>
					<input data-label="{{label}}" name="{{name}}" value="{{value}}" {{^enabled}}readonly{{/enabled}} type="radio" {{#selected}}checked=checked{{/selected}} >
					{{{label}}}{{^label}}&nbsp;{{/label}}
				</label>
			</div>
			{{/options.options}}
		{{#post}}<span class="input-group-addon">{{{post}}}</span></div>{{/post}}
		{{^post}}{{#pre}}</div>{{/pre}}{{/post}}
		{{>_addons}}
		{{>_actions}}
	</div>
</div>`,
    _fieldset: `<fieldset data-type="fieldset" name="{{name}}" id="{{id}}" class="{{modifiers}} {{#array}}dupable" data-min="{{multiple.min}}" data-max="{{multiple.max}}{{/array}}" >
{{#array}}
<hr>
<div class="btn-group actions">
	<div class="carbon-add btn btn-white"><i class="fa fa-plus text-success"></i></div><div class="btn btn-white carbon-minus"><i class="fa fa-minus text-danger"></i></div>
</div>
{{/array}}
{{^hideLabel}}
{{#item.legend}}<legend>{{{item.legend}}}</legend>{{/item.legend}}
{{^item.legend}}
{{#item.label}}<legend>{{{item.label}}}</legend>{{/item.label}}
{{/item.legend}}
{{/hideLabel}}
<div style="position:relative;top:-20px">{{>_addons}}</div>
</fieldset>`,
	_actions: `{{#array}}
	<div class="btn-group actions pull-right">
	<div class="carbon-add btn btn-white"><i class="fa fa-plus text-success"></i></div>
	<div class="btn btn-white carbon-minus"><i class="fa fa-minus text-danger"></i></div>
	</div>
	{{/array}}`,
    _label: `
    {{^hideLabel}}
	{{#label}}<label for="{{guid}}" {{#inline}}style="text-align:left"{{/inline}} class="control-label col-md-{{#inline}}12{{/inline}}{{^inline}}4{{/inline}}">
  {{{label}}}{{suffix}}{{#validate.required}}{{requiredText}}{{/validate.required}}
</label>{{/label}}
{{/hideLabel}}
    `,
    _addons:`<span class="help-inline"> {{{help}}}</span>
<span class="font-xs text-danger" style="display:block;"></span>`,
    checkbox:`<div class="row clearfix {{modifiers}} {{#array}}dupable" data-min="{{multiple.min}}" data-max="{{multiple.max}}{{/array}}" name="{{name}}" data-type="{{type}}">
	{{>_label}}
	{{#label}}
	{{#inline}}<div class="col-md-12" style="margin:0 0 5px">{{/inline}}
	{{^inline}}<div class="col-md-8" style="margin:0 0 15px">{{/inline}}
	{{/label}}
	{{^label}}
	{{#inline}}<div class="col-md-12" style="margin: -10px 0 5px;"">{{/inline}}
	{{^inline}}<div class="col-md-8" style="margin: -5px 0 10px">{{/inline}}
	{{/label}}
		<div class="checkbox">
			<label class="{{alt-display}}">
				<input name="{{name}}" type="checkbox" {{^enabled}}disabled{{/enabled}} {{#value}}checked=checked{{/value}}>{{#container}}<{{container}}  style="position:relative;display:inline-block;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;">{{{text}}}</{{container}}>{{/container}}
			</label>
		</div>
	{{#post}}<span class="input-group-addon">{{{post}}}</span></div>{{/post}}
		{{>_addons}}
		{{>_actions}}
	</div>
</div>`,
//     tabs_container: _.template(`<div class="carbon">
//     <ul class="nav nav-tabs" style="margin-bottom:15px">
//     <% _.forEach(fields, function(field) { %> 
//         <% if(field.section){%><li>
//             <a href="#tab<%=field.index%>" data-toggle="tab"><%=field.label%></a>
//         </li>
//         <%}%><% }); %>
//     </ul>
//     <form>
//         <legend for="<%= name %>"><h4><%= legend %></h4></legend>
//     </form>
//     </div>`),
//     tabs_fieldset: _.template(`<div class="carbon">
//         <fieldset name="<%= name %>" <%if(!isChild){ %>class="hello there"<% }; %>>
//             <legend for="<%= name %>"><h5><%= label %></h5></legend><hr>
//             <%if(array){%><%=carbon.render("actions")%><%}; %>        
//         </fieldset>
//     </div>`)
};


carbon.columns = 12;

carbon.columnClasses = _.map(new Array(13),function(item,i){return 'col-md-'+i})

carbon.handleError = function(field){
	if(!field.valid){
		field.el.classList.add('has-error')		
	}
    field.el.querySelector('.font-xs.text-danger').innerHTML = field.errors;
}