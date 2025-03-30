import{a as Be,c as nt,d as dt}from"./chunk-OVQVMGIR.js";import{a as st,b as ct,c as z,d as N,f as lt,g as mt,h as G}from"./chunk-ZMN4BB23.js";import{$ as qe,A as Ne,Ba as rt,Ca as pt,E as Ge,W as Ve,X as $e,aa as je,ca as He,da as Ue,ea as Qe,fa as Ze,g as Ae,ga as Ye,ha as We,i as ze,ia as Je,ja as Xe,ka as Ke,la as et,ma as tt,q as oe,ua as re,va as it,xa as at,za as ot}from"./chunk-QIWUI2RB.js";import{$a as te,Aa as Ie,Da as F,E as P,Ga as K,Ha as p,I as se,Ib as Te,J as k,Ja as ee,Jb as Re,K as ce,L as W,Lb as M,Ma as w,Mb as A,N as s,Oa as xe,Pa as ke,Qa as n,Ra as r,S as g,Sa as m,T as v,Tb as Oe,U as le,Ua as C,Wa as u,X as me,Xa as S,Y as pe,Ya as Ce,Z as J,Za as De,_ as ue,_a as Ee,a as I,aa as be,ab as R,b as x,ba as T,bb as O,ca as X,e as de,f as E,fb as d,hb as y,ia as he,ib as Fe,la as _e,mb as we,na as fe,nb as Se,oa as ge,ob as Le,pa as l,pb as ie,qb as Me,rb as Pe,sa as ve,wb as L,xb as h,ya as b,yb as ae,za as ye}from"./chunk-MQMRXGMF.js";var ft=["input"],gt=["formField"],vt=["*"],B=class{source;value;constructor(i,e){this.source=i,this.value=e}},yt={provide:Ve,useExisting:se(()=>ne),multi:!0},ut=new W("MatRadioGroup"),It=new W("mat-radio-default-options",{providedIn:"root",factory:xt});function xt(){return{color:"accent",disabledInteractive:!1}}var ne=(()=>{class a{_changeDetector=s(L);_value=null;_name=s(oe).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new J;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;constructor(){}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new B(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=Ie({type:a,selectors:[["mat-radio-group"]],contentQueries:function(t,o,c){if(t&1&&Ee(c,V,5),t&2){let f;R(f=O())&&(o._radios=f)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",h],required:[2,"required","required",h],disabledInteractive:[2,"disabledInteractive","disabledInteractive",h]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[we([yt,{provide:ut,useExisting:a}])]})}return a})(),V=(()=>{class a{_elementRef=s(X);_changeDetector=s(L);_focusMonitor=s(Ae);_radioDispatcher=s(Be);_defaultOptions=s(It,{optional:!0});_ngZone=s(ue);_renderer=s(ve);_uniqueId=s(oe).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new J;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled;_required;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations;_injector=s(me);constructor(){s(ze).load(tt);let e=s(ut,{optional:!0}),t=s(he,{optional:!0}),o=s(new pe("tabindex"),{optional:!0});this.radioGroup=e,this._noopAnimations=t==="NoopAnimations",this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,o&&(this.tabIndex=ae(o,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new B(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let o=this._inputElement?.nativeElement;o&&(o.setAttribute("tabindex",t+""),this._previousTabIndex=t,_e(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===o&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===o&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=b({type:a,selectors:[["mat-radio-button"]],viewQuery:function(t,o){if(t&1&&(te(ft,5),te(gt,7,X)),t&2){let c;R(c=O())&&(o._inputElement=c.first),R(c=O())&&(o._rippleTrigger=c.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,o){t&1&&u("focus",function(){return o._inputElement.nativeElement.focus()}),t&2&&(K("id",o.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),ee("mat-primary",o.color==="primary")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("mat-mdc-radio-checked",o.checked)("mat-mdc-radio-disabled",o.disabled)("mat-mdc-radio-disabled-interactive",o.disabledInteractive)("_mat-animation-noopable",o._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",h],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ae(e)],checked:[2,"checked","checked",h],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",h],required:[2,"required","required",h],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",h]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:vt,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target",3,"click"],["type","radio",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,o){if(t&1){let c=C();Ce(),n(0,"div",2,0)(2,"div",3)(3,"div",4),u("click",function(D){return g(c),v(o._onTouchTargetClick(D))}),r(),n(4,"input",5,1),u("change",function(D){return g(c),v(o._onInputInteraction(D))}),r(),n(6,"div",6),m(7,"div",7)(8,"div",8),r(),n(9,"div",9),m(10,"div",10),r()(),n(11,"label",11),De(12),r()()}t&2&&(p("labelPosition",o.labelPosition),l(2),ee("mdc-radio--disabled",o.disabled),l(2),p("id",o.inputId)("checked",o.checked)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),K("name",o.name)("value",o.value)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),l(5),p("matRippleTrigger",o._rippleTrigger.nativeElement)("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0),l(2),p("for",o.inputId))},dependencies:[et,pt],styles:['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled])~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px);top:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-sys-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple>.mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio>.mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display, block)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}'],encapsulation:2,changeDetection:0})}return a})(),bt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=ye({type:a});static \u0275inj=ce({imports:[re,it,V,re]})}return a})();var $=class a{_fb=s(Je);initValues=T();onChangeFilters=be();filterForm;ngOnInit(){this.createForm()}createForm(){this.filterForm=this._fb.group({nome:[this.initValues()?.nome||""],faixaIdadeInicial:[this.initValues()?.faixaIdadeInicial||0],faixaIdadeFinal:[this.initValues()?.faixaIdadeFinal||0],sexo:[this.initValues()?.sexo||""],status:[this.initValues()?.status||"DESAPARECIDO"]})}handleCleanFilters(){this.filterForm.patchValue({nome:"",faixaIdadeInicial:0,faixaIdadeFinal:0,sexo:"",status:"DESAPARECIDO"})}handleFilter(){this.onChangeFilters.emit(this.filterForm.value)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["filter-form"]],inputs:{initValues:[1,"initValues"]},outputs:{onChangeFilters:"onChangeFilters"},decls:36,vars:1,consts:[[1,"grid","grid-cols-2","gap-4","p-4","border","border-gray-200","rounded-xl","shadow-xl","bg-white",3,"formGroup"],[1,"w-full","col-span-2","border-b","border-gray-300","pb-3","mb-1"],[1,"text-2xl","md:text-3xl","font-semibold"],[1,"text-sm","md:text-lg","text-gray-600"],[1,"col-span-2"],["type","text","matInput","","formControlName","nome"],["type","number","matInput","","formControlName","faixaIdadeInicial","min","0","max","99"],["type","number","matInput","","formControlName","faixaIdadeFinal","min","0","max","99"],["formControlName","sexo","aria-label","Selecione uma op\xE7\xE3o"],["value","MASCULINO"],["value","FEMININO"],["formControlName","status","aria-label","Selecione uma op\xE7\xE3o"],["value","DESAPARECIDO"],["value","LOCALIZADO"],["type","button","mat-stroked-button","","color","danger",3,"click"],["type","button","mat-flat-button","","color","primary",3,"click"]],template:function(e,t){e&1&&(n(0,"form",0)(1,"div",1)(2,"h2",2),d(3,"Fa\xE7a sua Busca"),r(),n(4,"span",3),d(5,"Aqui est\xE3o alguns par\xE2metros para voc\xEA filtrar sua consulta"),r()(),n(6,"mat-form-field",4)(7,"mat-label"),d(8,"Nome:"),r(),m(9,"input",5),r(),n(10,"mat-form-field")(11,"mat-label"),d(12,"M\xEDnima"),r(),m(13,"input",6),r(),n(14,"mat-form-field")(15,"mat-label"),d(16,"M\xE1xima"),r(),m(17,"input",7),r(),n(18,"mat-radio-group",8)(19,"mat-radio-button",9),d(20,"Masculino"),r(),n(21,"mat-radio-button",10),d(22,"Feminino"),r()(),n(23,"mat-radio-group",11)(24,"mat-radio-button",12),d(25,"Desaparecido(a)"),r(),n(26,"mat-radio-button",13),d(27,"Localizado(a)"),r()(),n(28,"button",14),u("click",function(){return t.handleCleanFilters()}),n(29,"mat-icon"),d(30,"close"),r(),d(31," Limpar Consulta "),r(),n(32,"button",15),u("click",function(){return t.handleFilter()}),n(33,"mat-icon"),d(34,"search"),r(),d(35," Consultar "),r()()),e&2&&p("formGroup",t.filterForm)},dependencies:[Xe,He,$e,Ue,qe,je,We,Ye,Ke,Qe,Ze,at,Ge,Ne,mt,lt,rt,ot,N,z,bt,ne,V],encapsulation:2})};var Dt=a=>["desaparecido",a],j=class a{desaparecido=T.required();static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["desaparecido-card"]],inputs:{desaparecido:[1,"desaparecido"]},decls:15,vars:15,consts:[[1,"bg-white","border","border-gray-200","shadow-sm","rounded-xl","flex","flex-col","h-full","cursor-pointer","hover:shadow-xl","duration-100","ease-in",3,"routerLink"],[1,"w-full","bg-gray-100","rounded-t-xl"],[1,"object-cover","w-full","h-80","rounded-t-xl",3,"src","alt"],[1,"p-4","flex","flex-col","text-center"],[1,"font-semibold","text-gray-800"],[1,"text-sm","text-gray-600"],[1,"border-b","border-gray-200","my-3"],[1,"text-sm"]],template:function(e,t){e&1&&(n(0,"div",0)(1,"div",1),m(2,"img",2),r(),n(3,"div",3)(4,"h2",4),d(5),r(),n(6,"span",5),d(7),ie(8,"titlecase"),r(),m(9,"div",6),n(10,"span",7),d(11),ie(12,"date"),r(),n(13,"span",7),d(14),r()()()),e&2&&(p("routerLink",Le(13,Dt,`${t.desaparecido().id}`)),l(2),p("src",t.desaparecido().urlFoto||"img/sem-foto.svg",fe)("alt","foto de "+t.desaparecido().nome),l(3),y(" ",t.desaparecido().nome," "),l(2),Fe(" ",Me(8,8,t.desaparecido().sexo),", ",t.desaparecido().idade?t.desaparecido().idade+" anos":"Idade n\xE3o informada"," "),l(4),y(" Data: ",Pe(12,10,t.desaparecido().ultimaOcorrencia.dtDesaparecimento,"dd/MM/yyyy '\xE0s' HH:mm"),", "),l(3),y(" Local: ",t.desaparecido().ultimaOcorrencia.localDesaparecimentoConcat," "))},dependencies:[Oe,Te,Re],encapsulation:2})};var H=class a{_http=s(A);getAll(i){return this._http.get(`${G.apiURL}/v1/pessoas/aberto/filtro`,{params:i})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"})};var U=class a{_api=s(H);_desaparecidosList$=new E([]);_pagination$=new E({pagina:0,porPagina:16,totalElements:0,totalPages:0});_params$=new E({faixaIdadeFinal:0,faixaIdadeInicial:0,nome:"",sexo:"",status:"DESAPARECIDO"});_isLoadingDesaparecidosList$=new E({isLoading:!1,mode:"initial"});load(){let i=new M({fromObject:x(I({},this.params),{pagina:this._pagination$.value.pagina,porPagina:this._pagination$.value.porPagina})});this.getList(i)}getList(i=new M,e="initial"){this.isLoadingDesaparecidosList={isLoading:!0,mode:e},this._api.getAll(i).subscribe({next:t=>{this.desaparecidosList=t.content,this.pagination={pagina:t.number,porPagina:t.size,totalElements:t.totalElements,totalPages:t.totalPages},this.isLoadingDesaparecidosList={isLoading:!1,mode:e}},error:()=>{this.isLoadingDesaparecidosList={isLoading:!1,mode:e}}})}filterList(i){this.params=i,this._pagination$.next(x(I({},this._pagination$.value),{porPagina:this.pagination?.porPagina||16,pagina:0}));let e=new M({fromObject:x(I({},this.params),{pagina:this._pagination$.value.pagina,porPagina:this._pagination$.value.porPagina})});this.getList(e,"filter")}handlePagination(i){let{pageSize:e,pageIndex:t}=i;this.pagination=x(I({},this.pagination),{pagina:t,porPagina:e});let o=new M({fromObject:x(I({},this.params),{pagina:this.pagination.pagina,porPagina:this.pagination.porPagina})});this.getList(o,"paging")}get desaparecidosList$(){return this._desaparecidosList$.asObservable()}set desaparecidosList(i){this._desaparecidosList$.next(i)}get pagination$(){return this._pagination$.asObservable()}get pagination(){return this._pagination$.value}set pagination(i){this._pagination$.next(i)}get params$(){return this._params$.asObservable()}get params(){return this._params$.value}set params(i){this._params$.next(i)}get isLoadingDesaparecidosList$(){return this._isLoadingDesaparecidosList$.asObservable()}set isLoadingDesaparecidosList(i){this._isLoadingDesaparecidosList$.next(i)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"})};var Q=class a{_http=s(A);getEstatisticas(){return this._http.get(`${G.apiURL}/v1/pessoas/aberto/estatistico`)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"})};var Z=class a{_service=s(Q);desaparecidosDisplayNumber=0;desaparecidosTargetNumber=0;localizadosDisplayNumber=0;localizadosTargetNumber=0;animationFrame;ngOnInit(){this._service.getEstatisticas().subscribe(i=>{this.desaparecidosTargetNumber=i.quantPessoasDesaparecidas,this.localizadosTargetNumber=i.quantPessoasEncontradas,this.startCounter()})}startCounter(){let e=null,t=o=>{e||(e=o);let c=Math.min((o-e)/2e3,1);this.desaparecidosDisplayNumber=Math.floor(c*this.desaparecidosTargetNumber),this.localizadosDisplayNumber=Math.floor(c*this.localizadosTargetNumber),c<1?this.animationFrame=requestAnimationFrame(t):(this.desaparecidosDisplayNumber=this.desaparecidosTargetNumber,this.localizadosDisplayNumber=this.localizadosTargetNumber)};this.animationFrame=requestAnimationFrame(t)}ngOnDestroy(){this.animationFrame&&cancelAnimationFrame(this.animationFrame)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["app-estatisticas"]],decls:15,vars:2,consts:[[1,"hero-section","h-[35vh]","-mb-[175px]","-z-10"],[1,"content"],[1,"flex","justify-center","gap-8"],[1,"flex","flex-col"],[1,"text-xs","sm:text-base"],[1,"text-2xl","sm:text-5xl","font-semibold"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 1440 320","preserveAspectRatio","none",1,"wave"],["fill","#ffffff","fill-opacity","1","d","M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,186.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"]],template:function(e,t){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),d(5,"Desaparecidos"),r(),n(6,"span",5),d(7),r()(),n(8,"div",3)(9,"h3",4),d(10,"Localizados"),r(),n(11,"span",5),d(12),r()()()(),le(),n(13,"svg",6),m(14,"path",7),r()()),e&2&&(l(7),y(" ",t.desaparecidosDisplayNumber," "),l(5),y(" ",t.localizadosDisplayNumber," "))},styles:['.hero-section[_ngcontent-%COMP%]{position:relative;background-image:url("./media/crowd-bg-MHDJXEOB.jpg");background-size:cover;background-position:center;background-repeat:no-repeat;overflow:hidden}.hero-section[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#160bafbb;z-index:0}.content[_ngcontent-%COMP%]{position:relative;z-index:1;text-align:center;padding-top:5vh;color:#fff}.wave[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;height:200px}']})};function Et(a,i){if(a&1){let e=C();n(0,"div",0)(1,"button",1),u("click",function(){g(e);let o=S();return v(o.scrollToTop())}),n(2,"mat-icon"),d(3,"arrow_upward"),r()()()}}var Y=class a{cdr=s(L);showScrollToTopButton=!1;scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}onWindowScroll(){let i=document.getElementById("listagem");if(i){let e=i.getBoundingClientRect(),t=window.innerHeight,o=document.documentElement.scrollHeight,c=e.bottom+window.scrollY,f=window.scrollY+t,D=f>c-t/2,_t=f<o-t-50;this.showScrollToTopButton=D&&_t,this.cdr.detectChanges()}}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["scroll-top-btn"]],hostBindings:function(e,t){e&1&&u("scroll",function(){return t.onWindowScroll()},!1,ge)},decls:1,vars:1,consts:[[1,"fixed","right-0","top-175"],["type","button","aria-label","Voltar ao topo da p\xE1gina",1,"bg-blue-500","text-white","p-2","rounded-l-xl","flex","justify-center","items-center","hover:bg-blue-700","cursor-pointer","ease-in","duration-75",3,"click"]],template:function(e,t){e&1&&F(0,Et,4,0,"div",0),e&2&&w(t.showScrollToTopButton?-1:0)},dependencies:[N,z],encapsulation:2})};var Ft=()=>[16,40,100],wt=(a,i)=>i.id;function St(a,i){a&1&&(n(0,"div",7),m(1,"mat-spinner"),n(2,"h2",12),d(3,"Carregando Dados!"),r(),n(4,"span",13),d(5,"Por favor, aguarde..."),r()())}function Lt(a,i){if(a&1&&m(0,"desaparecido-card",9),a&2){let e=i.$implicit;p("desaparecido",e)}}function Mt(a,i){a&1&&(n(0,"div",10),m(1,"img",14),n(2,"h2",15),d(3,"Opss!"),r(),n(4,"span",13),d(5,"Infelizmente n\xE3o encontramos nada ou algum problema ocorreu..."),r()())}function Pt(a,i){if(a&1){let e=C();n(0,"mat-paginator",16),u("page",function(o){g(e);let c=S();return v(c.handlePageEvent(o))}),r()}if(a&2){let e=S();p("length",e.pagination.totalElements)("pageIndex",e.pagination.pagina)("pageSize",e.pagination.porPagina)("pageSizeOptions",Se(4,Ft))}}var ht=class a{facade=s(U);desaparecidosList=[];pagination;isLoadingList=!1;_unsubscribeAll$=new de;ngOnInit(){this.facade.desaparecidosList$.pipe(P(this._unsubscribeAll$)).subscribe(i=>{this.desaparecidosList=i}),this.facade.isLoadingDesaparecidosList$.pipe(P(this._unsubscribeAll$)).subscribe(i=>{let{isLoading:e,mode:t}=i;this.isLoadingList=e,(t==="filter"||t==="paging")&&this.scrollToListagem()}),this.facade.pagination$.pipe(P(this._unsubscribeAll$)).subscribe(i=>{this.pagination=i}),this.facade.load()}handleChangeFilters(i){this.facade.filterList(i)}handlePageEvent(i){this.facade.handlePagination(i)}scrollToListagem(){let i=document.getElementById("listagem");i&&i.scrollIntoView({behavior:"smooth",block:"start"})}ngOnDestroy(){this._unsubscribeAll$.next(),this._unsubscribeAll$.complete()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=b({type:a,selectors:[["desaparecidos-list"]],decls:16,vars:4,consts:[[1,"max-w-7xl","w-full","mx-auto","my-8","z-40"],[1,"flex","flex-col","gap-4","mx-2","sm:mx-4"],[1,"flex","gap-2"],[1,"flex-1",3,"onChangeFilters","initValues"],[1,"max-w-xs","lg:max-w-sm","w-full","hidden","md:block"],["src","img/search-animation.svg","alt",""],["id","listagem",1,"text-3xl","mt-8","mb-2","font-semibold"],[1,"flex","flex-col","justify-center","items-center","my-6","p-4","border","rounded-xl","border-gray-300"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","gap-4"],[3,"desaparecido"],[1,"flex","flex-col","items-center","justify-center","sm:col-span-2","md:col-span-3","lg:col-span-4"],["showFirstLastButtons","","aria-label","Selecione uma P\xE1gina",3,"length","pageIndex","pageSize","pageSizeOptions"],[1,"text-xl","sm:text-3xl","font-semibold","mt-4"],[1,"sm:text-xl","text-gray-600"],["src","img/list-empty-animation.svg","alt","Ilustra\xE7\xE3o de lista vazia",1,"max-w-md"],[1,"text-xl","sm:text-3xl","font-semibold","-mt-8"],["showFirstLastButtons","","aria-label","Selecione uma P\xE1gina",3,"page","length","pageIndex","pageSize","pageSizeOptions"]],template:function(e,t){e&1&&(m(0,"app-estatisticas"),n(1,"div",0)(2,"div",1)(3,"div",2)(4,"filter-form",3),u("onChangeFilters",function(c){return t.handleChangeFilters(c)}),r(),n(5,"div",4),m(6,"img",5),r()(),n(7,"h2",6),d(8," Listagem de Desaparecidos "),r(),F(9,St,6,0,"div",7),n(10,"div",8),xe(11,Lt,1,1,"desaparecido-card",9,wt,!1,Mt,6,0,"div",10),r(),F(14,Pt,1,5,"mat-paginator",11),r()(),m(15,"scroll-top-btn")),e&2&&(l(4),p("initValues",t.facade.params),l(5),w(t.isLoadingList?9:-1),l(2),ke(t.desaparecidosList),l(3),w(t.desaparecidosList.length?14:-1))},dependencies:[ct,st,j,$,dt,nt,Z,Y],encapsulation:2})};export{ht as DesaparecidosComponent};
