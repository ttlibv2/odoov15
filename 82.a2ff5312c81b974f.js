"use strict";(self.webpackChunkTS24AppWeb=self.webpackChunkTS24AppWeb||[]).push([[82],{4259:(w,D,s)=>{s.r(D),s.d(D,{SigninModule:()=>Tt});var y=s(9808),c=s(8406),h=s(3075),E=s(520),p=s(8505),z=s(857),a=s(6431),O=s(6305),f=s(9690),A=s(750),t=s(5e3),d=s(1047),S=s(2683);const I=["input"];let u=(()=>{class i{constructor(){}ngOnInit(){}get element(){return this.input.nativeElement}get value(){return this.element.value}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["cy-security-form"]],viewQuery:function(e,n){if(1&e&&t.Gf(I,5,t.SBq),2&e){let o;t.iGM(o=t.CRH())&&(n.input=o.first)}},decls:7,vars:0,consts:[[1,"row"],[1,"col-12"],["for","security_key"],["type","password","id","security_key","placeholder","Nh\u1eadp kh\xf3a b\u1ea3o m\u1eadt","nz-input",""],["input",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"nz-input-group")(3,"label",2),t._uU(4,"Kh\xf3a b\u1ea3o m\u1eadt: "),t.qZA(),t._UZ(5,"input",3,4),t.qZA()()())},directives:[d.gB,S.w,d.Zp],styles:[""]}),i})();var C=s(4546),m=s(226),b=s(1314),v=s(4832),_=s(969),T=s(655),F=s(7579),Z=s(4968),L=s(727),B=s(9770),X=s(6451),U=s(9300),P=s(2722),j=s(1005),k=s(5698),W=s(3900),M=s(1721),N=s(1159),K=s(7429),$=s(8076);function q(i,r){if(1&i&&(t.ynx(0),t._uU(1),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(e.nzLabel)}}const tt=[[["nz-auto-option"]]],et=["nz-auto-option"],J=["*"],nt=["panel"],it=["content"];function ot(i,r){}function st(i,r){1&i&&t.YNc(0,ot,0,0,"ng-template")}function rt(i,r){1&i&&t.Hsn(0)}function lt(i,r){if(1&i&&(t.TgZ(0,"nz-auto-option",8),t._uU(1),t.qZA()),2&i){const e=r.$implicit;t.Q6J("nzValue",e)("nzLabel",e&&e.label?e.label:e),t.xp6(1),t.hij(" ",e&&e.label?e.label:e," ")}}function at(i,r){if(1&i&&t.YNc(0,lt,2,3,"nz-auto-option",7),2&i){const e=t.oxw(2);t.Q6J("ngForOf",e.nzDataSource)}}function ct(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",0,1),t.NdJ("@slideMotion.done",function(o){return t.CHM(e),t.oxw().onAnimationEvent(o)}),t.TgZ(2,"div",2)(3,"div",3),t.YNc(4,st,1,0,null,4),t.qZA()()(),t.YNc(5,rt,1,0,"ng-template",null,5,t.W1O),t.YNc(7,at,1,1,"ng-template",null,6,t.W1O)}if(2&i){const e=t.MAs(6),n=t.MAs(8),o=t.oxw();t.ekj("ant-select-dropdown-hidden",!o.showPanel)("ant-select-dropdown-rtl","rtl"===o.dir),t.Q6J("ngClass",o.nzOverlayClassName)("ngStyle",o.nzOverlayStyle)("nzNoAnimation",null==o.noAnimation?null:o.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",null==o.noAnimation?null:o.noAnimation.nzNoAnimation),t.xp6(4),t.Q6J("ngTemplateOutlet",o.nzDataSource?n:e)}}let ut=(()=>{class i{constructor(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:et,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(e,n){1&e&&(t.F$t(tt),t.TgZ(0,"div",0),t.YNc(1,q,2,1,"ng-container",1),t.qZA(),t.Hsn(2)),2&e&&(t.xp6(1),t.Q6J("nzStringTemplateOutlet",n.nzLabel))},directives:[_.f],encapsulation:2,changeDetection:0}),i})();class ht{constructor(r,e=!1){this.source=r,this.isUserInput=e}}let V=(()=>{class i{constructor(e,n,o,l){this.ngZone=e,this.changeDetectorRef=n,this.element=o,this.nzAutocompleteOptgroupComponent=l,this.nzDisabled=!1,this.selectionChange=new t.vpe,this.mouseEntered=new t.vpe,this.active=!1,this.selected=!1,this.destroy$=new F.x}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,Z.R)(this.element.nativeElement,"mouseenter").pipe((0,U.h)(()=>this.mouseEntered.observers.length>0),(0,P.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,Z.R)(this.element.nativeElement,"mousedown").pipe((0,P.R)(this.destroy$)).subscribe(e=>e.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(e=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),e&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,M.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(e=!1){this.selectionChange.emit(new ht(this,e))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(ut,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(e,n){1&e&&t.NdJ("click",function(){return n.selectViaInteraction()}),2&e&&(t.uIk("aria-selected",n.selected.toString())("aria-disabled",n.nzDisabled.toString()),t.ekj("ant-select-item-option-grouped",n.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",n.selected)("ant-select-item-option-active",n.active)("ant-select-item-option-disabled",n.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:J,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(e,n){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},encapsulation:2,changeDetection:0}),(0,T.gn)([(0,M.yF)()],i.prototype,"nzDisabled",void 0),i})();const pt={provide:h.JU,useExisting:(0,t.Gpc)(()=>H),multi:!0};let H=(()=>{class i{constructor(e,n,o,l,g,R){this.ngZone=e,this.elementRef=n,this.overlay=o,this.viewContainerRef=l,this.nzInputGroupWhitSuffixOrPrefixDirective=g,this.document=R,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new F.x,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,P.R)(this.destroy$)).subscribe(e=>{"void"===e.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(e){this.ngZone.runOutsideAngular(()=>Promise.resolve(null).then(()=>this.setTriggerValue(e)))}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.elementRef.nativeElement.disabled=e,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(e){const n=e.keyCode,o=n===N.LH||n===N.JH;n===N.hY&&e.preventDefault(),!this.panelOpen||n!==N.hY&&n!==N.Mf?this.panelOpen&&n===N.K5?this.nzAutocomplete.showPanel&&(e.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&o&&this.nzAutocomplete.showPanel&&(e.stopPropagation(),e.preventDefault(),n===N.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(e){const n=e.target,o=this.document;let l=n.value;"number"===n.type&&(l=""===l?null:parseFloat(l)),this.previousValue!==l&&(this.previousValue=l,this.onChange(l),this.canOpen()&&o.activeElement===e.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,p.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,j.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(e=>{this.setValueAndClose(e)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,U.h)(e=>!this.elementRef.nativeElement.contains(e.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function mt(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new K.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,P.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new b.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const e=[new b.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new b.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(e).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const e=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==e?(this.nzAutocomplete.setActiveItem(e),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(e){const n=e.nzValue;this.setTriggerValue(e.getLabel()),this.onChange(n),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(e){const n=this.nzAutocomplete.getOption(e),o=n?n.getLabel():e;this.elementRef.nativeElement.value=null!=o?o:"",this.nzAutocomplete.nzBackfill||(this.previousValue=o)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const e=this.elementRef.nativeElement;return!e.readOnly&&!e.disabled}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(b.aV),t.Y36(t.s_b),t.Y36(d.ke,8),t.Y36(y.K0,8))},i.\u0275dir=t.lG2({type:i,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(e,n){1&e&&t.NdJ("focusin",function(){return n.handleFocus()})("blur",function(){return n.handleBlur()})("input",function(l){return n.handleInput(l)})("keydown",function(l){return n.handleKeydown(l)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[t._Bn([pt])]}),i})(),gt=(()=>{class i{constructor(e,n,o,l){this.changeDetectorRef=e,this.ngZone=n,this.directionality=o,this.noAnimation=l,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(g,R)=>g===R,this.selectionChange=new t.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new F.x,this.animationStateChange=new t.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=L.w0.EMPTY,this.optionMouseEnterSubscription=L.w0.EMPTY,this.dataSourceChangeSubscription=L.w0.EMPTY,this.optionSelectionChanges=(0,B.P)(()=>this.options?(0,X.T)(...this.options.map(g=>g.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,k.q)(1),(0,W.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,B.P)(()=>this.options?(0,X.T)(...this.options.map(g=>g.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,k.q)(1),(0,W.w)(()=>this.optionMouseEnter)))}get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}ngOnInit(){var e;null===(e=this.directionality.change)||void 0===e||e.pipe((0,P.R)(this.destroy$)).subscribe(n=>{this.dir=n,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(e){this.animationStateChange.emit(e)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(e){const n=this.options.get(e);n&&!n.active?(this.activeItem=n,this.activeItemIndex=e,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(e){return this.options.reduce((n,o,l)=>-1===n?this.compareWith(e,o.nzValue)?l:-1:n,-1)}getOption(e){return this.options.find(n=>this.compareWith(e,n.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(n=>{!n.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(e,n=!1){this.options.forEach(o=>{o!==e&&(n&&o.deselect(),o.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,U.h)(e=>e.isUserInput)).subscribe(e=>{e.source.select(),e.source.setActiveStyles(),this.activeItem=e.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(e.source,!0),this.selectionChange.emit(e.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(e=>{e.setActiveStyles(),this.activeItem=e,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(e)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(m.Is,8),t.Y36(v.P,9))},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-autocomplete"]],contentQueries:function(e,n,o){if(1&e&&t.Suo(o,V,5),2&e){let l;t.iGM(l=t.CRH())&&(n.fromContentOptions=l)}},viewQuery:function(e,n){if(1&e&&(t.Gf(t.Rgc,5),t.Gf(nt,5),t.Gf(it,5),t.Gf(V,5)),2&e){let o;t.iGM(o=t.CRH())&&(n.template=o.first),t.iGM(o=t.CRH())&&(n.panel=o.first),t.iGM(o=t.CRH())&&(n.content=o.first),t.iGM(o=t.CRH())&&(n.fromDataSourceOptions=o)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:J,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(e,n){1&e&&(t.F$t(),t.YNc(0,ct,9,10,"ng-template"))},directives:[V,y.mk,y.PC,v.P,y.tP,y.sg],encapsulation:2,data:{animation:[$.mF]},changeDetection:0}),(0,T.gn)([(0,M.yF)()],i.prototype,"nzDefaultActiveFirstOption",void 0),(0,T.gn)([(0,M.yF)()],i.prototype,"nzBackfill",void 0),i})(),dt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[m.vT,y.ez,b.U8,h.u5,_.T,v.g,d.o7]]}),i})();var Q=s(6114),G=s(6042),ft=s(2643);function vt(i,r){if(1&i&&(t.TgZ(0,"div",4)(1,"nz-input-group",5),t._UZ(2,"input",23),t.qZA()()),2&i){t.oxw();const e=t.MAs(34);t.xp6(1),t.Q6J("nzPrefix",e)}}function yt(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"label",24),t.NdJ("nzCheckedChange",function(o){return t.CHM(e),t.oxw().isVisibleUrlDev=o}),t._uU(1,"Dev h\u1ec7 th\u1ed1ng"),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("nzChecked",e.isVisibleUrlDev)}}function zt(i,r){1&i&&t._UZ(0,"i",25)}function bt(i,r){1&i&&t._UZ(0,"i",26)}function Ct(i,r){1&i&&t._UZ(0,"i",27)}function At(i,r){1&i&&t._UZ(0,"i",28)}let Ot=(()=>{class i{constructor(e,n,o,l,g,R,Y){this.appVersion=e,this.config=n,this.fb=o,this.router=l,this.activeR=g,this.userCtrl=R,this.shared=Y,this.listUserAuto=[],this.isAsyncLogin=!1,this.isDebugDev=!1,this.isVisibleUrlDev=!1,this.redirectUrl=""}ngOnInit(){var e;if(this.userCtrl.read().isAuthenticated())this.router.navigate(["/",this.redirectUrl]);else{this.userLog=this.initUserLog(),this.listUserAuto=Object.values(this.userLog.list).map(g=>({label:g.name,value:g.name,obj:g}));let n=this.userLog.remember,o=this.userLog.login,l=null===(e=this.userLog.list[o])||void 0===e?void 0:e.pass;this.activeR.queryParams.subscribe(g=>{this.isDebugDev=g.debug,this.redirectUrl=g.redirect_url||""}),this.loginForm=this.fb.group({email:[o,h.kI.required],code:[l,h.kI.required],url_dev:[this.config.read().api_url_dev],remember:[n],isDev:!1})}}initUserLog(){const e=this.shared.getRememberLogin();return Object.assign({},{login:void 0,remember:!1,list:{}},e)}gotoSignUp(){this.shared.modal.create({nzMaskClosable:!1,nzMask:!0,nzClosable:!1,nzContent:u,nzOkText:"M\u1edf kh\xf3a",nzCancelText:null,nzOnOk:n=>this.onSubmitSecurityKey(n)}).afterClose.subscribe(n=>{this.router.navigate(["/","signup"])})}onLogin(){if(this.loginForm.invalid)return void this.shared.alert.error("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin.");const{remember:e,email:n,code:o,url_dev:l}=this.loginForm.getRawValue(),g="object"==typeof n?n.label:n;this.config.load().then(R=>{R=R.assign({api_url_dev:l,isDev:this.isDev,api_key:this.isDev?"api_url_dev":"api_url"},!0).saveBy(this.shared),this.saveRememberUser({remember:e,emailTx:g,code:o,url_dev:l});let Y=this.shared.loading("<b>\u0110ang ki\u1ec3m tra \u0111\u0103ng nh\u1eadp</b>");this.isAsyncLogin=!0,this.userCtrl.login(g,o).pipe((0,p.b)(x=>this.isAsyncLogin=!1)).subscribe({next:x=>{console.log("User Login: "+x.email),this.shared.alert.remove(Y.messageId);let xt=(0,f.oA)(x.config.isCfigDef||!1)?{save_default:1}:{};this.router.navigate(["/",this.redirectUrl],{queryParams:xt})},error:x=>{this.isAsyncLogin=!1,this.shared.alert.remove(Y.messageId),f.K$.log("Login Error",x),(0,f.Ft)(x.staus)&&!(0,f.EU)(x.msg)&&this.shared.alert.error(x.msg)}})})}get isDev(){return this.loginForm.get("isDev").value}changeApiUrl(e){console.log(e),this.loginForm.get("url_dev").setValue(e.url)}onSubmitSecurityKey(e){const n=(0,f._3)("yyyyMMdd")===e.value;return n||this.shared.alert.error("Sai kh\xf3a b\u1ea3o m\u1eadt"),Promise.resolve(n)}selectUser(e){let n=null==e?void 0:e.nzValue;(0,f.Ft)(n)||(this.loginForm.get("email").setValue(n.obj.name),this.loginForm.get("code").patchValue(n.obj.pass))}saveRememberUser(e){const n=e.remember?e.emailTx:void 0,o=Object.assign(this.userLog.list,{[e.emailTx]:{name:n,pass:e.code,isDev:this.isDebugDev}});this.shared.setRememberLogin({login:n,remember:e.remember,list:o})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(A.Ji),t.Y36(a.t),t.Y36(h.qu),t.Y36(c.F0),t.Y36(c.gz),t.Y36(z.a),t.Y36(O.W))},i.\u0275cmp=t.Xpm({type:i,selectors:[["cy-signin"]],decls:39,vars:16,consts:[["nz-form","",1,"login-form",3,"formGroup","ngSubmit"],[1,"row","pb-2"],[1,"col-12"],[1,"row"],[1,"col-12","form-group"],[3,"nzPrefix"],["type","text","id","email","nz-input","","formControlName","email","placeholder","E-mail NV",3,"nzAutocomplete"],["type","password","id","code","nz-input","","formControlName","code","placeholder","Nh\u1eadp MK"],["class","col-12 form-group",4,"ngIf"],[1,"col-12","d-flex","align-items-center","form-group"],["nz-checkbox","","formControlName","remember",1,"ml-auto"],["nz-checkbox","","class","ml-2",3,"nzChecked","nzCheckedChange",4,"ngIf"],[1,"col-6","d-grid","gap-2"],["nz-button","",1,"btn","btn-login",3,"nzType","disabled"],["class","fa-regular fa-right-to-bracket",4,"ngIf"],["class","fa-regular fa-arrows-spin fa-spin",4,"ngIf"],[1,"col-6","d-grid","gap-2","pdl-5"],["nz-button","","type","button",1,"btn","btn-signup",3,"disabled","click"],[1,"fa-regular","fa-user-plus"],["userIcon",""],["passwordIcon",""],[3,"nzDataSource","selectionChange"],["listUserRef",""],["type","text","id","url_dev","nz-input","","formControlName","url_dev","placeholder","Url Dev"],["nz-checkbox","",1,"ml-2",3,"nzChecked","nzCheckedChange"],[1,"fa-regular","fa-right-to-bracket"],[1,"fa-regular","fa-arrows-spin","fa-spin"],[1,"fa-regular","fa-user"],[1,"fa-regular","fa-lock"]],template:function(e,n){if(1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.onLogin()}),t.TgZ(1,"div",1)(2,"div",2)(3,"span"),t._uU(4,"Version: "),t.qZA(),t.TgZ(5,"em"),t._uU(6),t.ALo(7,"date"),t.qZA()()(),t.TgZ(8,"div",3)(9,"div",4)(10,"nz-input-group",5),t._UZ(11,"input",6),t.qZA()(),t.TgZ(12,"div",4)(13,"nz-input-group",5),t._UZ(14,"input",7),t.qZA()(),t.YNc(15,vt,3,1,"div",8),t.qZA(),t.TgZ(16,"div",3)(17,"div",9)(18,"label",10),t._uU(19,"Ghi nh\u1edb t\xe0i kho\u1ea3n"),t.qZA(),t.YNc(20,yt,2,1,"label",11),t.qZA()(),t.TgZ(21,"div",3)(22,"div",12)(23,"button",13),t.YNc(24,zt,1,0,"i",14),t.YNc(25,bt,1,0,"i",15),t.TgZ(26,"span"),t._uU(27,"\u0110\u0103ng nh\u1eadp"),t.qZA()()(),t.TgZ(28,"div",16)(29,"button",17),t.NdJ("click",function(){return n.gotoSignUp()}),t._UZ(30,"i",18),t.TgZ(31,"span"),t._uU(32,"\u0110\u0103ng k\xfd"),t.qZA()()()()(),t.YNc(33,Ct,1,0,"ng-template",null,19,t.W1O),t.YNc(35,At,1,0,"ng-template",null,20,t.W1O),t.TgZ(37,"nz-autocomplete",21,22),t.NdJ("selectionChange",function(l){return n.selectUser(l)}),t.qZA()),2&e){const o=t.MAs(34),l=t.MAs(36),g=t.MAs(38);t.Q6J("formGroup",n.loginForm),t.xp6(6),t.Oqu(t.xi3(7,13,n.appVersion,"yyyyMMddHHmmss")),t.xp6(4),t.Q6J("nzPrefix",o),t.xp6(1),t.Q6J("nzAutocomplete",g),t.xp6(2),t.Q6J("nzPrefix",l),t.xp6(2),t.Q6J("ngIf",n.isVisibleUrlDev),t.xp6(5),t.Q6J("ngIf",n.isDebugDev),t.xp6(3),t.Q6J("nzType","primary")("disabled",n.isAsyncLogin),t.xp6(1),t.Q6J("ngIf",!n.isAsyncLogin),t.xp6(1),t.Q6J("ngIf",n.isAsyncLogin),t.xp6(4),t.Q6J("disabled",n.isAsyncLogin),t.xp6(8),t.Q6J("nzDataSource",n.listUserAuto)}},directives:[h._Y,h.JL,C.Lr,h.sg,d.gB,S.w,d.ke,d.Zp,h.Fj,H,h.JJ,h.u,y.O5,Q.Ie,G.ix,ft.dQ,gt],pipes:[y.uU],styles:[".ant-form-item{margin:0}.login-form{max-width:300px;margin:50px auto auto}.login-form [nz-button]{margin-right:0}.login-form .row>*{padding-left:0;padding-right:0}.login-form .btn-login{float:left}.login-form .btn-login.btnGoogle{margin-left:6px}\n"],encapsulation:2}),i})();var St=s(4376),It=s(3087);const Dt=[{path:"",component:Ot}];let Tt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[y.ez,c.Bz.forChild(Dt),E.JF,h.u5,h.UX,E.JF,St.A0,d.o7,Q.Wr,G.sL,It.PV,C.U5,dt]]}),i})()},4707:(w,D,s)=>{s.d(D,{t:()=>h});var y=s(7579),c=s(6063);class h extends y.x{constructor(p=1/0,z=1/0,a=c.l){super(),this._bufferSize=p,this._windowTime=z,this._timestampProvider=a,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=z===1/0,this._bufferSize=Math.max(1,p),this._windowTime=Math.max(1,z)}next(p){const{isStopped:z,_buffer:a,_infiniteTimeWindow:O,_timestampProvider:f,_windowTime:A}=this;z||(a.push(p),!O&&a.push(f.now()+A)),this._trimBuffer(),super.next(p)}_subscribe(p){this._throwIfClosed(),this._trimBuffer();const z=this._innerSubscribe(p),{_infiniteTimeWindow:a,_buffer:O}=this,f=O.slice();for(let A=0;A<f.length&&!p.closed;A+=a?1:2)p.next(f[A]);return this._checkFinalizedStatuses(p),z}_trimBuffer(){const{_bufferSize:p,_timestampProvider:z,_buffer:a,_infiniteTimeWindow:O}=this,f=(O?1:2)*p;if(p<1/0&&f<a.length&&a.splice(0,a.length-f),!O){const A=z.now();let t=0;for(let d=1;d<a.length&&a[d]<=A;d+=2)t=d;t&&a.splice(0,t+1)}}}},1005:(w,D,s)=>{s.d(D,{g:()=>d});var y=s(4986),c=s(7272),h=s(5698),E=s(4482),p=s(5403),z=s(5032),O=s(9718),f=s(5577);function A(S,I){return I?u=>(0,c.z)(I.pipe((0,h.q)(1),function a(){return(0,E.e)((S,I)=>{S.subscribe((0,p.x)(I,z.Z))})}()),u.pipe(A(S))):(0,f.z)((u,C)=>S(u,C).pipe((0,h.q)(1),(0,O.h)(u)))}var t=s(5963);function d(S,I=y.z){const u=(0,t.H)(S,I);return A(()=>u)}},6950:(w,D,s)=>{s.d(D,{Ek:()=>O,d_:()=>d,e4:()=>I,hQ:()=>S,yW:()=>a});var y=s(655),c=s(1314),h=s(5e3),E=s(2722),p=s(4090),z=s(1721);const a={top:new c.tR({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"}),topCenter:new c.tR({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"}),topLeft:new c.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),topRight:new c.tR({originX:"end",originY:"top"},{overlayX:"end",overlayY:"bottom"}),right:new c.tR({originX:"end",originY:"center"},{overlayX:"start",overlayY:"center"}),rightTop:new c.tR({originX:"end",originY:"top"},{overlayX:"start",overlayY:"top"}),rightBottom:new c.tR({originX:"end",originY:"bottom"},{overlayX:"start",overlayY:"bottom"}),bottom:new c.tR({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"}),bottomCenter:new c.tR({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"}),bottomLeft:new c.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),bottomRight:new c.tR({originX:"end",originY:"bottom"},{overlayX:"end",overlayY:"top"}),left:new c.tR({originX:"start",originY:"center"},{overlayX:"end",overlayY:"center"}),leftTop:new c.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"}),leftBottom:new c.tR({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"bottom"})},O=[a.top,a.right,a.bottom,a.left];function d(u){for(const C in a)if(u.connectionPair.originX===a[C].originX&&u.connectionPair.originY===a[C].originY&&u.connectionPair.overlayX===a[C].overlayX&&u.connectionPair.overlayY===a[C].overlayY)return C}new c.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"bottom"}),new c.tR({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"bottom"}),new c.tR({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"top"});let S=(()=>{class u{constructor(m,b){this.cdkConnectedOverlay=m,this.nzDestroyService=b,this.nzArrowPointAtCenter=!1,this.cdkConnectedOverlay.backdropClass="nz-overlay-transparent-backdrop",this.cdkConnectedOverlay.positionChange.pipe((0,E.R)(this.nzDestroyService)).subscribe(v=>{this.nzArrowPointAtCenter&&this.updateArrowPosition(v)})}updateArrowPosition(m){const b=this.getOriginRect(),v=d(m);let _=0,T=0;"topLeft"===v||"bottomLeft"===v?_=b.width/2-14:"topRight"===v||"bottomRight"===v?_=-(b.width/2-14):"leftTop"===v||"rightTop"===v?T=b.height/2-10:("leftBottom"===v||"rightBottom"===v)&&(T=-(b.height/2-10)),(this.cdkConnectedOverlay.offsetX!==_||this.cdkConnectedOverlay.offsetY!==T)&&(this.cdkConnectedOverlay.offsetY=T,this.cdkConnectedOverlay.offsetX=_,this.cdkConnectedOverlay.overlayRef.updatePosition())}getFlexibleConnectedPositionStrategyOrigin(){return this.cdkConnectedOverlay.origin instanceof c.xu?this.cdkConnectedOverlay.origin.elementRef:this.cdkConnectedOverlay.origin}getOriginRect(){const m=this.getFlexibleConnectedPositionStrategyOrigin();if(m instanceof h.SBq)return m.nativeElement.getBoundingClientRect();if(m instanceof Element)return m.getBoundingClientRect();const b=m.width||0,v=m.height||0;return{top:m.y,bottom:m.y+v,left:m.x,right:m.x+b,height:v,width:b}}}return u.\u0275fac=function(m){return new(m||u)(h.Y36(c.pI),h.Y36(p.kn))},u.\u0275dir=h.lG2({type:u,selectors:[["","cdkConnectedOverlay","","nzConnectedOverlay",""]],inputs:{nzArrowPointAtCenter:"nzArrowPointAtCenter"},exportAs:["nzConnectedOverlay"],features:[h._Bn([p.kn])]}),(0,y.gn)([(0,z.yF)()],u.prototype,"nzArrowPointAtCenter",void 0),u})(),I=(()=>{class u{}return u.\u0275fac=function(m){return new(m||u)},u.\u0275mod=h.oAB({type:u}),u.\u0275inj=h.cJS({}),u})()}}]);