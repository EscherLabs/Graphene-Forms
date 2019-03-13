gform.stencils = {
    _container: `
    <form novalidate  {{^autocomplete}}autocomplete="false"{{/autocomplete}}>
    {{#legend}}<legend for="{{name}}"><h4>{{{legend}}}</h4></legend>{{/legend}}
    </form>
    <div class="row footer"></div>`,
text: `
<div class="row row-wrap">
<div class="column">
    {{>_label}}
    <input{{#limit}} maxlength="{{limit}}"{{/limit}}{{#min}} min="{{min}}"{{/min}}{{#max}} max="{{max}}"{{/max}} {{#step}} step="{{step}}"{{/step}} placeholder="{{placeholder}}" name="{{name}}" type="{{type}}" {{#selected}} checked {{/selected}} value="{{value}}" id="{{id}}" />
    {{>_error}}
    </div>
    </div>     
    </div>   
    {{>_actions}} 
`,
switch: `
{{>_label}}
<label class="switch">
<input name="{{name}}" type="checkbox" {{#selected}} checked {{/selected}} value="{{value}}" id="{{name}}" />
<span class="slider round"></span>
</label>
    
    {{>_error}}
    </div>
    {{>_actions}}   
`,  
checkbox: `
    {{>_label}}
    <input name="{{name}}" type="{{type}}" {{#selected}} checked {{/selected}} value="{{value}}" id="{{name}}" />
    <label class="label-inline" for="{{name}}"><span class="falseLabel">{{options.0.label}}</span><span class="trueLabel">{{options.1.label}}</span></label>
    {{>_error}}
    </div>
    {{>_actions}}   
`,    
hidden: `<input name="{{name}}" type="hidden" value="{{value}}" id="{{id}}" />{{>_error}}`,
textarea: `
<div class="row row-wrap">
<div class="column">
    {{>_label}}
    {{#limit}}<small class="column count" style="text-align:right">0/{{limit}}</small>{{/limit}}
    <textarea{{#limit}} maxlength="{{limit}}"{{/limit}} placeholder="{{placeholder}}" name="{{name}}" type="{{type}}" id="{{id}}" />{{value}}</textarea>
    {{>_error}}
    </div>
    {{>_actions}}   
</div>
</div> `,
select: `
    {{>_label}}    
    <select {{#multiple}}multiple=multiple{{/multiple}} {{#size}}size={{size}}{{/size}}  name="{{name}}{{#multiple}}[]{{/multiple}}" value="{{value}}" id="{{id}}" />
        {{#options}}
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
        {{/options}}

    </select>
    {{>_error}}
    {{>_actions}}       
`,
radio: `
    {{>_label}}
    <span class="">
    {{#options}}

    {{#multiple}}
        <div><input name="{{name}}_{{value}}" type="checkbox" {{#selected}} checked {{/selected}} value="{{value}}"/>
        <label class="label-inline" for="{{name}}_{{value}}">{{label}}</label></div>
    {{/multiple}}
    {{^multiple}}
        <label><input style="margin-right: 5px;" name="{{name}}" {{#selected}} checked=selected {{/selected}}  value="{{value}}" type="radio"><span style="font-weight:normal">{{label}}</span></label>        
    {{/multiple}}
    {{/options}}
    </span>
    {{>_error}}
    {{>_actions}}`,

scale: `
    {{>_label}}
    <table class="table table-striped">
    <thead>
        <tr>
            {{#format.low}}<th></th>{{/format.low}}
            {{#options}}
            <th><label for="{{name}}_{{i}}">{{label}}</label></th>
            {{/options}}
            {{#format.high}}<th></th>{{/format.high}}
        </tr>
    </thead>
    <tbody>
        <tr>
            {{#format.low}}<td><label style="font-weight: 500;" for="{{name}}_1">{{{format.low}}}</label></td>{{/format.low}}
            {{#options}}
            <td>
                <input id="{{name}}_{{i}}" style="margin-right: 5px;" name="{{name}}" {{#selected}} checked=selected {{/selected}}  value="{{value}}" type="radio">
            </td>
            {{/options}}
            {{#format.high}}<td><label style="font-weight: 500;" for="{{name}}_{{options.length}}">{{{format.high}}}</label></td>{{/format.high}}
        </tr>
    </tbody>
    </table>

    {{>_error}}
    {{>_actions}}`,
    _fieldset: `
    <fieldset id="{{id}}" name="{{name}}">
    {{>_error}}
    {{#array}}<hr style="margin: 0 0 10px;">{{/array}}
    <div class="row row-wrap">
    {{^section}}<legend class="column" for="{{name}}"><h5>{{{label}}}</h5></legend>{{/section}}
    {{>_actions}}
    </div>   
    </fieldset>
`,
grid: `
<fieldset id="{{id}}" name="{{name}}">

    {{>_label}}
    {{>_error}}

    <table class="table table-striped" style="margin-bottom:0">
    <thead>
        <tr>
            <th></th>
            {{#options}}
            <th><label>{{label}}</label></th>
            {{/options}}
            
        </tr>
    </thead>
    <tbody>
    {{#fields}}
        <tr>
            <td><label style="font-weight: 500;" for="{{id}}">{{{label}}}</label></td>
            {{#options}}
            <td>
            {{#multiple}}
                <div><input name="{{id}}" type="checkbox" {{#selected}} checked {{/selected}} value="{{value}}"/>
            {{/multiple}}
            {{^multiple}}
                <input style="margin-right: 5px;" name="{{id}}" {{#selected}} checked=selected {{/selected}}  value="{{value}}" type="radio">
            {{/multiple}}
            </td>
            {{/options}}
        </tr>
        {{/fields}}
    </tbody>
    </table>

    {{>_actions}}

    </fieldset>
`,
_actions: `      
    {{#array}}
    <div class="" style="float:right">
    <input data-id="{{id}}" style="padding: 0 ;padding:0 1.5rem; border-color:green;color:green;float:right;margin:0 5px" class="gform-add button button-outline" type="button" value="+">
    <input data-id="{{id}}" style="padding: 0 ;padding:0 1.5rem; border-color:red;color:red;float:right;margin:0 5px" class="gform-minus button button-outline" type="button" value="-">
    </div>
    {{/array}}
`,
_label: `      
<label class="" for="{{name}}">{{{label}}}{{#required}}{{{requiredText}}}{{/required}}{{suffix}}</label>     
<small class="column form-help" style="position:relative;left:-10px"> {{{help}}}</small>

`,
_error:`<small class="error-text" style="color:red;display:block;position:relative;top:-12px"></small><small class="valid" style="color:green;display:block;"></small>`,
button:`<button type="button" role="button" class="button {{modifiers}}" style="margin:0 15px 0">{{{label}}}</button>`,
tab_container: `
<form id="{{name}}" novalidate {{^autocomplete}}autocomplete="false"{{/autocomplete}} name="{{name}}" class="gform tab-content {{modifiers}}" {{#action}}action="{{action}}"{{/action}} onsubmit="return false;" {{#method}}method="{{method}}"{{/method}}>
{{^legendTarget}}{{#legend}}<legend>{{{legend}}}</legend>{{/legend}}{{/legendTarget}}
	<ul class="tabs">
		{{#fields}}
        {{#section}}
            <a href="#tabs{{id}}" data-toggle="tab"><li {{^index}}class="active"{{/index}}>{{{legend}}}</li></a>
	    {{/section}}		
		{{/fields}}
    </ul></form>
	<div class="footer"></div>`,
tab_fieldset: `{{#section}}<div class="tab-pane {{^index}}active{{/index}} " id="tabs{{id}}">{{/section}}{{>_fieldset}}{{#section}}</div>{{/section}}`,
modal_container:`<div class="modal">
<div class="modal-background"></div>
<div class="modal-card">
  <header class="modal-card-head">
    <legend class="modal-card-title">{{#legend}}{{{legend}}}{{/legend}}
    </legend>
    <span class="button button-outline close" aria-label="close" style="padding:0 1.5rem;margin:0">X</span>
  </header>
  <section class="modal-card-body">
    {{^sections}}
    <form id="{{name}}" style="overflow:hidden" {{^autocomplete}}autocomplete="false"{{/autocomplete}} name="{{name}}" class="gform {{^options.inline}} smart-form-horizontal form-horizontal{{/options.inline}} {{modifiers}}" {{#action}}action="{{action}}"{{/action}} onsubmit="return false;" {{#method}}method="{{method}}"{{/method}}></form>
    {{/sections}}
    {{#sections}}
    <form id="{{name}}" novalidate {{^autocomplete}}autocomplete="false"{{/autocomplete}} name="{{name}}" class="gform tab-content {{modifiers}}" {{#action}}action="{{action}}"{{/action}} onsubmit="return false;" {{#method}}method="{{method}}"{{/method}}>
	<ul class="tabs">
		{{#fields}}
        {{#section}}
		
            <a href="#tabs{{id}}" data-toggle="tab"><li {{^index}}class="active"{{/index}}>{{{legend}}}</li></a>
        
	    {{/section}}		
		{{/fields}}
    </ul></form>
    {{/sections}}
  </section>
  <footer class="modal-card-foot">
  <div class="footer" style="width:100%"></div>

  </footer>
</div>
</div>`
};

gform.columns = 12;
gform.columnClasses = _.map(['','10','20','25','33','40','50','60','66','75','80','90','100'],function(item){return 'column-'+item+' column'})
gform.prototype.opts.suffix = ""

gform.handleError = function(field){
    if(field.valid){
		if(field.satisfied(field.get())) {
        // field.el.querySelector('.valid').innerHTML = field.validtext||'';
        }
		field.el.classList.remove('error')		

        field.el.querySelector('.error-text').innerHTML = '';
    }else{
        field.el.querySelector('.error-text').innerHTML = field.errors;
        field.el.classList.add('error');

        field.el.querySelector('.valid').innerHTML = '';
    }
}
gform.types['cancel']   = _.defaultsDeep({}, gform.types['button'], {defaults:{
	label:"<i class=\"fa fa-times\"></i> Cancel",
	action:"cancel",
	modifiers: "button-outline",
	type:"button"}});
gform.types['save']   = _.defaultsDeep({}, gform.types['button'], {defaults:{
	label:"<i class=\"fa fa-check\"></i> Save",
	action:"save",
	modifiers: "float-right",
	type:"button"}});


