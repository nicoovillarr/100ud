"use strict";(self.webpackChunk_100ud=self.webpackChunk_100ud||[]).push([[685],{685:(Bn,ae,l)=>{l.r(ae),l.d(ae,{ConfigureModule:()=>kn});var le=l(472),r=l(223),ue=l(914),mt=l(143),v=l(808),_t=l(76),Ct=l(306),vt=l(742),yt=l(421),Vt=l(669),Mt=l(403),At=l(268),bt=l(810),Ot=l(4);let ce=(()=>{class n{constructor(e,o){this._renderer=e,this._elementRef=o,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,o){this._renderer.setProperty(this._elementRef.nativeElement,e,o)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(r.Qsj),r.Y36(r.SBq))},n.\u0275dir=r.lG2({type:n}),n})(),m=(()=>{class n extends ce{}return n.\u0275fac=function(){let t;return function(o){return(t||(t=r.n5z(n)))(o||n)}}(),n.\u0275dir=r.lG2({type:n,features:[r.qOj]}),n})();const h=new r.OlP("NgValueAccessor"),Ft={provide:h,useExisting:(0,r.Gpc)(()=>O),multi:!0},Nt=new r.OlP("CompositionEventMode");let O=(()=>{class n extends ce{constructor(e,o,i){super(e,o),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function wt(){const n=(0,v.q)()?(0,v.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(r.Qsj),r.Y36(r.SBq),r.Y36(Nt,8))},n.\u0275dir=r.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,o){1&e&&r.NdJ("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[r._Bn([Ft]),r.qOj]}),n})();const u=new r.OlP("NgValidators"),p=new r.OlP("NgAsyncValidators");function Ve(n){return null!=n}function Me(n){const t=(0,r.QGY)(n)?(0,_t.D)(n):n;return(0,r.CqO)(t),t}function Ae(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function be(n,t){return t.map(e=>e(n))}function De(n){return n.map(t=>function St(n){return!n.validate}(t)?t:e=>t.validate(e))}function B(n){return null!=n?function Oe(n){if(!n)return null;const t=n.filter(Ve);return 0==t.length?null:function(e){return Ae(be(e,t))}}(De(n)):null}function I(n){return null!=n?function Ee(n){if(!n)return null;const t=n.filter(Ve);return 0==t.length?null:function(e){return function Dt(...n){const t=(0,Vt.jO)(n),{args:e,keys:o}=(0,vt.D)(n),i=new Ct.y(s=>{const{length:a}=e;if(!a)return void s.complete();const d=new Array(a);let C=a,V=a;for(let T=0;T<a;T++){let se=!1;(0,yt.Xf)(e[T]).subscribe((0,Mt.x)(s,Tn=>{se||(se=!0,V--),d[T]=Tn},()=>C--,void 0,()=>{(!C||!se)&&(V||s.next(o?(0,bt.n)(o,d):d),s.complete())}))}});return t?i.pipe((0,At.Z)(t)):i}(be(e,t).map(Me)).pipe((0,Ot.U)(Ae))}}(De(n)):null}function Fe(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function R(n){return n?Array.isArray(n)?n:[n]:[]}function F(n,t){return Array.isArray(n)?n.includes(t):n===t}function xe(n,t){const e=R(t);return R(n).forEach(i=>{F(e,i)||e.push(i)}),e}function Se(n,t){return R(t).filter(e=>!F(n,e))}class Ge{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=B(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=I(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class g extends Ge{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class c extends Ge{get formDirective(){return null}get path(){return null}}let ke=(()=>{class n extends class Pe{constructor(t){this._cd=t}is(t){var e,o,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(o=this._cd)||void 0===o?void 0:o.control)||void 0===i?void 0:i[t])}}{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(g,2))},n.\u0275dir=r.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,o){2&e&&r.ekj("ng-untouched",o.is("untouched"))("ng-touched",o.is("touched"))("ng-pristine",o.is("pristine"))("ng-dirty",o.is("dirty"))("ng-valid",o.is("valid"))("ng-invalid",o.is("invalid"))("ng-pending",o.is("pending"))},features:[r.qOj]}),n})();function M(n,t){(function H(n,t){const e=function we(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(Fe(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const o=function Ne(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(Fe(o,t.asyncValidator)):"function"==typeof o&&n.setAsyncValidators([o]);const i=()=>n.updateValueAndValidity();S(t._rawValidators,i),S(t._rawAsyncValidators,i)})(n,t),t.valueAccessor.writeValue(n.value),function Ut(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Be(n,t)})}(n,t),function jt(n,t){const e=(o,i)=>{t.valueAccessor.writeValue(o),i&&t.viewToModelUpdate(o)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Ht(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Be(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function qt(n,t){if(t.valueAccessor.setDisabledState){const e=o=>{t.valueAccessor.setDisabledState(o)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function S(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Be(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Y(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const A="VALID",P="INVALID",y="PENDING",b="DISABLED";function Z(n){return(k(n)?n.validators:n)||null}function Ue(n){return Array.isArray(n)?B(n):n||null}function z(n,t){return(k(t)?t.asyncValidators:n)||null}function He(n){return Array.isArray(n)?I(n):n||null}function k(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const W=n=>n instanceof Q;function Le(n){return(n=>n instanceof Ze)(n)?n.value:n.getRawValue()}function Ye(n,t){const e=W(n),o=n.controls;if(!(e?Object.keys(o):o).length)throw new r.vHH(1e3,"");if(!o[t])throw new r.vHH(1001,"")}function $e(n,t){W(n),n._forEachChild((o,i)=>{if(void 0===t[i])throw new r.vHH(1002,"")})}class J{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Ue(this._rawValidators),this._composedAsyncValidatorFn=He(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===A}get invalid(){return this.status===P}get pending(){return this.status==y}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Ue(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=He(t)}addValidators(t){this.setValidators(xe(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(xe(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Se(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Se(t,this._rawAsyncValidators))}hasValidator(t){return F(this._rawValidators,t)}hasAsyncValidator(t){return F(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=y,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=b,this.errors=null,this._forEachChild(o=>{o.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=A,this._forEachChild(o=>{o.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===y)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator=!0;const e=Me(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(o=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(o,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function Zt(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(e)),Array.isArray(t)&&0===t.length))return null;let o=n;return t.forEach(i=>{o=W(o)?o.controls.hasOwnProperty(i)?o.controls[i]:null:(n=>n instanceof Wt)(o)&&o.at(i)||null}),o}(this,t,".")}getError(t,e){const o=e?this.get(e):this;return o&&o.errors?o.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(P)?P:A}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){k(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class Ze extends J{constructor(t=null,e,o){super(Z(e),z(o,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(e)&&e.initialValueIsDefault&&(this.defaultValue=this._isBoxedValue(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(o=>o(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Y(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Y(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class Q extends J{constructor(t,e,o){super(Z(e),z(o,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,o={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,o={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){$e(this,t),Object.keys(t).forEach(o=>{Ye(this,o),this.controls[o].setValue(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(o=>{this.controls[o]&&this.controls[o].patchValue(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((o,i)=>{o.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,o)=>(t[o]=Le(e),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,o)=>!!o._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const o=this.controls[e];o&&t(o,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const o=this.controls[e];if(this.contains(e)&&t(o))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,o)=>((e.enabled||this.disabled)&&(t[o]=e.value),t))}_reduceChildren(t,e){let o=t;return this._forEachChild((i,s)=>{o=e(o,i,s)}),o}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class Wt extends J{constructor(t,e,o){super(Z(e),z(o,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,o={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:o.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,o={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){$e(this,t),t.forEach((o,i)=>{Ye(this,i),this.at(i).setValue(o,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((o,i)=>{this.at(i)&&this.at(i).patchValue(o,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((o,i)=>{o.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>Le(t))}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,o)=>!!o._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,o)=>{t(e,o)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const Xt={provide:g,useExisting:(0,r.Gpc)(()=>K)},Je=(()=>Promise.resolve(null))();let K=(()=>{class n extends g{constructor(e,o,i,s,a){super(),this._changeDetectorRef=a,this.control=new Ze,this._registered=!1,this.update=new r.vpe,this._parent=e,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=function L(n,t){if(!t)return null;let e,o,i;return Array.isArray(t),t.forEach(s=>{s.constructor===O?e=s:function $t(n){return Object.getPrototypeOf(n.constructor)===m}(s)?o=s:i=s}),i||o||e||null}(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const o=e.name.previousValue;this.formDirective.removeControl({name:o,path:this._getPath(o)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function j(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){M(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){Je.then(()=>{var o;this.control.setValue(e,{emitViewToModelChange:!1}),null===(o=this._changeDetectorRef)||void 0===o||o.markForCheck()})}_updateDisabled(e){const o=e.isDisabled.currentValue,i=""===o||o&&"false"!==o;Je.then(()=>{var s;i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),null===(s=this._changeDetectorRef)||void 0===s||s.markForCheck()})}_getPath(e){return this._parent?function N(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(c,9),r.Y36(u,10),r.Y36(p,10),r.Y36(h,10),r.Y36(r.sBO,8))},n.\u0275dir=r.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[r._Bn([Xt]),r.qOj,r.TTD]}),n})(),Xe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({}),n})(),Dn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[Xe]]}),n})(),On=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[Dn]}),n})();function En(n,t){if(1&n){const e=r.EpF();r.TgZ(0,"div",5)(1,"input",6),r.NdJ("keyup",function(i){const a=r.CHM(e).index;return r.oxw().answerValueChange(i,a)})("focusout",function(i){const a=r.CHM(e).index;return r.oxw().answerFocusOut(i,a)})("ngModelChange",function(i){return r.CHM(e).$implicit.value=i}),r.qZA()()}if(2&n){const e=t.$implicit;r.xp6(1),r.Q6J("ngModel",e.value)}}let Fn=(()=>{class n{constructor(){this.onClickDelete=new r.vpe,this.onChange=new r.vpe}ngOnInit(){}deleteQuestion(){this.onClickDelete.emit()}addAnswer(){this.question.answers.push({value:""})}removeAnswer(e){this.question.answers.splice(e,1)}answerValueChange(e,o){e.target.value.length&&o==this.question.answers.length-1&&this.addAnswer(),this.onchange()}answerFocusOut(e,o){!e.target.value.length&&o<this.question.answers.length-1&&this.removeAnswer(o)}onchange(){this.onChange.emit()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-config-item"]],inputs:{question:"question"},outputs:{onClickDelete:"onClickDelete",onChange:"onChange"},decls:6,vars:2,consts:[[1,"header"],["type","text",3,"ngModel","keyup","ngModelChange"],[1,"btn","btn-negative",3,"click"],[1,"body"],["class","answer",4,"ngFor","ngForOf"],[1,"answer"],["type","text",3,"ngModel","keyup","focusout","ngModelChange"]],template:function(e,o){1&e&&(r.TgZ(0,"div",0)(1,"input",1),r.NdJ("keyup",function(){return o.onchange()})("ngModelChange",function(s){return o.question.value=s}),r.qZA(),r.TgZ(2,"button",2),r.NdJ("click",function(){return o.deleteQuestion()}),r._uU(3," Eliminar "),r.qZA()(),r.TgZ(4,"div",3),r.YNc(5,En,2,1,"div",4),r.qZA()),2&e&&(r.xp6(1),r.Q6J("ngModel",o.question.value),r.xp6(4),r.Q6J("ngForOf",o.question.answers))},directives:[O,ke,K,v.sg],styles:[".header[_ngcontent-%COMP%]{display:flex}.header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;outline:none;border-bottom:2px solid darkslategray;flex:100%;flex-shrink:1;flex-grow:0;padding:0;margin-right:16px;font-size:18px}.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}.body[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]{display:flex}.body[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#eaeaea;border-radius:24px;border:none;outline:none;display:block;font-size:16px;padding:4px 12px;margin-top:8px;flex:100%}"]}),n})();function wn(n,t){if(1&n){const e=r.EpF();r.TgZ(0,"div",12)(1,"app-config-item",13),r.NdJ("onClickDelete",function(){const s=r.CHM(e).index;return r.oxw().deleteQuestion(s)})("onChange",function(){return r.CHM(e),r.oxw().questionChanged()}),r.qZA()()}if(2&n){const e=t.$implicit;r.xp6(1),r.Q6J("question",e)}}function Nn(n,t){1&n&&(r.TgZ(0,"div",14)(1,"p"),r._uU(2,"Ten\xe9s cambios sin guardar..."),r.qZA()())}const xn=[{path:"",component:(()=>{class n{constructor(e){this.configService=e,this.questions=[],this.unsavedConfig=!1}ngOnInit(){this.questions=this.configService.load();for(let e of this.questions)e.answers.push({value:""})}addQuestion(){this.questions.push({value:"",answers:[{value:""}]}),this.unsavedConfig=!0}deleteQuestion(e){this.questions.splice(e,1),this.unsavedConfig=!0}questionChanged(){this.unsavedConfig=!0}save(){this.questions=this.questions.filter(e=>e.value.trim().length),this.configService.save(this.questions),this.unsavedConfig=!1}export(){this.questions.length&&this.configService.export(this.questions)}import(){this.configService.import(e=>{for(let o of e)o.answers.push({value:""});this.questions=e,this.unsavedConfig=!0})}clear(){!confirm("\xbfEst\xe1s seguro de que quer\xe9s eliminar la configuraci\xf3n?")||(this.questions=[],this.unsavedConfig=!0)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(ue.E))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-config"]],decls:25,vars:4,consts:[["id","container"],["class","question",4,"ngFor","ngForOf"],["id","new-question-container"],[1,"btn",3,"click"],["id","controls"],[1,"card-btn",3,"ngClass","click"],["src","./assets/icons/save.png"],[1,"card-btn",3,"click"],["src","./assets/icons/download.png"],["src","./assets/icons/import.png"],["src","./assets/icons/delete.png"],["id","unsaved-container",4,"ngIf"],[1,"question"],[3,"question","onClickDelete","onChange"],["id","unsaved-container"]],template:function(e,o){1&e&&(r.TgZ(0,"main"),r._UZ(1,"app-back-bar"),r.TgZ(2,"div",0),r.YNc(3,wn,2,1,"div",1),r.qZA(),r.TgZ(4,"div",2)(5,"button",3),r.NdJ("click",function(){return o.addQuestion()}),r._uU(6," Agregar pregunta "),r.qZA()(),r.TgZ(7,"div",4)(8,"div",5),r.NdJ("click",function(){return o.save()}),r._UZ(9,"img",6),r.TgZ(10,"h2"),r._uU(11,"Guardar"),r.qZA()(),r.TgZ(12,"div",7),r.NdJ("click",function(){return o.export()}),r._UZ(13,"img",8),r.TgZ(14,"h2"),r._uU(15,"Exportar"),r.qZA()(),r.TgZ(16,"div",7),r.NdJ("click",function(){return o.import()}),r._UZ(17,"img",9),r.TgZ(18,"h2"),r._uU(19,"Cargar"),r.qZA()(),r.TgZ(20,"div",5),r.NdJ("click",function(){return o.clear()}),r._UZ(21,"img",10),r.TgZ(22,"h2"),r._uU(23,"Limpiar"),r.qZA()()(),r.YNc(24,Nn,3,0,"div",11),r.qZA()),2&e&&(r.xp6(3),r.Q6J("ngForOf",o.questions),r.xp6(5),r.Q6J("ngClass",o.unsavedConfig?"":"disabled"),r.xp6(12),r.Q6J("ngClass",0==o.questions.length?"disabled":""),r.xp6(4),r.Q6J("ngIf",o.unsavedConfig))},directives:[mt.L,v.sg,Fn,v.mk,v.O5],styles:['@import"https://fonts.googleapis.com/css?family=Noto+Sans";@import"https://fonts.googleapis.com/css?family=Poppins";[_nghost-%COMP%]   main[_ngcontent-%COMP%]{padding:16px 0;width:40%;margin:auto}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   #container[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 4px #00000040;padding:24px;border-radius:16px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   #container[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]:not(:last-child){margin-bottom:16px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   #new-question-container[_ngcontent-%COMP%]{margin-top:16px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   #new-question-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:#fff;width:100%;box-shadow:0 4px 4px #00000040;padding:16px 0;font-size:16px;border-radius:16px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   #controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:24px;margin-top:16px}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   #controls[_ngcontent-%COMP%]   .card-btn[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 4px #00000040;padding:24px;border-radius:16px;flex:50%;display:flex;flex-direction:column;align-items:center;cursor:pointer;font-family:Poppins;transition:transform .2s}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   #controls[_ngcontent-%COMP%]   .card-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;height:120px;object-fit:cover}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   #controls[_ngcontent-%COMP%]   .card-btn[_ngcontent-%COMP%]:hover{transform:scale(1.05)}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   #controls[_ngcontent-%COMP%]   .card-btn.disabled[_ngcontent-%COMP%]{pointer-events:none;opacity:.5}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   #unsaved-container[_ngcontent-%COMP%]{flex:100%;background-color:#90ee90;color:#000;padding:24px;font-size:21px;border-radius:16px;box-shadow:0 4px 4px #90ee9040;margin-top:16px;border-left:16px solid green;font-family:Noto Sans}']}),n})()}];let Sn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[le.Bz.forChild(xn)],le.Bz]}),n})();var Gn=l(250);let Pn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({providers:[ue.E],imports:[[On,Gn.I]]}),n})(),kn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[Sn,Pn]]}),n})()}}]);