

/*===============================
/media/mod_zentools/js/zentools.js
================================================================================*/;
jQuery(document).ready(function($){$('.zentools li').fadeThis({speed:800,reverse:false,baseName:'animate-'});});!function(a,b,c){var d=null,e=[],f=a(b),g=function(){};g.prototype={globals:{pluginName:"fadeThis",bufferTime:300},defaults:{baseName:"slide-",speed:500,easing:"swing",offset:0,reverse:!0,distance:50,scrolledIn:null,scrolledOut:null},init:function(a,b){this.addElements(a,b),this._setEvent(),this._checkVisibleElements()},addElements:function(d,e){var f=d===c.body?b:d,g=a(f===b?"body":f),h=this,i=e&&e.baseName?e.baseName:this.defaults.baseName;return g.is("[class^='"+i+"']")?h._addElement(g,e):g.find("[class^='"+i+"']").each(function(){h._addElement(a(this),e)}),g},_addElement:function(b,c){var d=b.data("plugin-options"),f=a.extend({},this.defaults,c,d),g={element:b,options:f,invp:!1};return e.push(g),this._prepareElement(g),b},_prepareElement:function(a){var b={opacity:0,visibility:"visible",position:"relative"},c=null;if(a.element.hasClass(a.options.baseName+"right"))c="left";else if(a.element.hasClass(a.options.baseName+"left"))c="right";else if(a.element.hasClass(a.options.baseName+"top"))c="bottom";else{if(!a.element.hasClass(a.options.baseName+"bottom"))return!1;c="top"}b[c]=a.options.distance,a.element.css(b)},_setEvent:function(){var a=this;f.on("scroll",function(b){d||(d=setTimeout(function(){a._checkVisibleElements(b),d=null},a.globals.bufferTime))})},_checkVisibleElements:function(b){var c=this;a.each(e,function(a,d){c._isVisible(d)?d.invp||(d.invp=!0,c._triggerFading(d),d.options.scrolledIn&&d.options.scrolledIn.call(d.element,b),d.element.trigger("fadethisscrolledin",b)):d.invp&&(d.invp=!1,d.options.reverse&&c._triggerFading(d,!1),d.options.scrolledOut&&d.options.scrolledOut.call(d.element,b),d.element.trigger("fadethisscrolledout",b))})},_isVisible:function(a){var b=f.scrollTop()+a.options.offset,c=b+f.height()-2*a.options.offset,d=a.element.offset().top,e=d+a.element.height();return e>=b&&c>=d&&c>=e&&d>=b},_triggerFading:function(a,b){b="undefined"!=typeof b?b:!0;var c={opacity:1},d={opacity:0},e=null;if(a.element.hasClass(a.options.baseName+"right"))e="left";else if(a.element.hasClass(a.options.baseName+"left"))e="right";else if(a.element.hasClass(a.options.baseName+"top"))e="bottom";else{if(!a.element.hasClass(a.options.baseName+"bottom"))return!1;e="top"}c[e]=0,d[e]=a.options.distance,b?a.element.stop(!0).animate(c,a.options.speed,a.options.easing):a.element.stop(!0).animate(d,a.options.speed,a.options.easing)}},g.defaults=g.prototype.defaults,g.globals=g.prototype.globals,b.Plugin=new g,a.fn[g.globals.pluginName]=function(c){return this.each(function(){a.data(b,"plugin_"+g.globals.pluginName)?a.data(this,"plugin_"+g.globals.pluginName)||a.data(this,"plugin_"+g.globals.pluginName,b.Plugin.addElements(this,c)):(a.data(b,"plugin_"+g.globals.pluginName,"set"),a.data(this,"plugin_"+g.globals.pluginName,b.Plugin.init(this,c)))}),this}}(jQuery,window,document);


/*===============================
/plugins/system/t3/base-bs3/bootstrap/js/bootstrap.js
================================================================================*/;
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';var version=$.fn.jquery.split(' ')[0].split('.')
if((version[0]<2&&version[1]<9)||(version[0]==1&&version[1]==9&&version[2]<1)){throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')}}(jQuery);+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false
var $el=this
$(this).one('bsTransitionEnd',function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition)return
$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.VERSION='3.3.4'
Alert.TRANSITION_DURATION=150
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=$(selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.closest('.alert')}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.VERSION='3.3.4'
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state=state+'Text'
if(data.resetText==null)$el.data('resetText',$el[val]())
setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state])
if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked')&&this.$element.hasClass('active'))changed=false
else $parent.find('.active').removeClass('active')}
if(changed)$input.prop('checked',!this.$element.hasClass('active')).trigger('change')}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'))}
if(changed)this.$element.toggleClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
Plugin.call($btn,'toggle')
e.preventDefault()}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=null
this.sliding=null
this.interval=null
this.$active=null
this.$items=null
this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this))
this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))}
Carousel.VERSION='3.3.4'
Carousel.TRANSITION_DURATION=600
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true,keyboard:true}
Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return
switch(e.which){case 37:this.prev();break
case 39:this.next();break
default:return}
e.preventDefault()}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item')
return this.$items.index(item||this.$active)}
Carousel.prototype.getItemForDirection=function(direction,active){var activeIndex=this.getItemIndex(active)
var willWrap=(direction=='prev'&&activeIndex===0)||(direction=='next'&&activeIndex==(this.$items.length-1))
if(willWrap&&!this.options.wrap)return active
var delta=direction=='prev'?-1:1
var itemIndex=(activeIndex+delta)%this.$items.length
return this.$items.eq(itemIndex)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||this.getItemForDirection(type,$active)
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var that=this
if($next.hasClass('active'))return(this.sliding=false)
var relatedTarget=$next[0]
var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
this.$element.trigger(slideEvent)
if(slideEvent.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator&&$nextIndicator.addClass('active')}
var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger(slidEvent)}
isCycling&&this.cycle()
return this}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
var old=$.fn.carousel
$.fn.carousel=Plugin
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
var clickHandler=function(e){var href
var $this=$(this)
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
if(!$target.hasClass('carousel'))return
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
Plugin.call($target,options)
if(slideIndex){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()}
$(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler)
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
Plugin.call($carousel,$carousel.data())})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.$trigger=$('[data-toggle="collapse"][href="#'+element.id+'"],'+'[data-toggle="collapse"][data-target="#'+element.id+'"]')
this.transitioning=null
if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}
if(this.options.toggle)this.toggle()}
Collapse.VERSION='3.3.4'
Collapse.TRANSITION_DURATION=350
Collapse.DEFAULTS={toggle:true}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var activesData
var actives=this.$parent&&this.$parent.children('.panel').children('.in, .collapsing')
if(actives&&actives.length){activesData=actives.data('bs.collapse')
if(activesData&&activesData.transitioning)return}
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
if(actives&&actives.length){Plugin.call(actives,'hide')
activesData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded',true)
this.$trigger.removeClass('collapsed').attr('aria-expanded',true)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded',false)
this.$trigger.addClass('collapsed').attr('aria-expanded',false)
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element)
this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()}
Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass('in')
$element.attr('aria-expanded',isOpen)
$trigger.toggleClass('collapsed',!isOpen).attr('aria-expanded',isOpen)}
function getTargetFromTrigger($trigger){var href
var target=$trigger.attr('data-target')||(href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
return $(target)}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&/show|hide/.test(option))options.toggle=false
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.collapse
$.fn.collapse=Plugin
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var $this=$(this)
if(!$this.attr('data-target'))e.preventDefault()
var $target=getTargetFromTrigger($this)
var data=$target.data('bs.collapse')
var option=data?'toggle':$this.data()
Plugin.call($target,option)})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.VERSION='3.3.4'
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.trigger('focus').attr('aria-expanded','true')
$parent.toggleClass('open').trigger('shown.bs.dropdown',relatedTarget)}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if((!isActive&&e.which!=27)||(isActive&&e.which==27)){if(e.which==27)$parent.find(toggle).trigger('focus')
return $this.trigger('click')}
var desc=' li:not(.disabled):visible a'
var $items=$parent.find('[role="menu"]'+desc+', [role="listbox"]'+desc)
if(!$items.length)return
var index=$items.index(e.target)
if(e.which==38&&index>0)index--
if(e.which==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).trigger('focus')}
function clearMenus(e){if(e&&e.which===3)return
$(backdrop).remove()
$(toggle).each(function(){var $this=$(this)
var $parent=getParent($this)
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.attr('aria-expanded','false')
$parent.removeClass('open').trigger('hidden.bs.dropdown',relatedTarget)})}
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','[role="menu"]',Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','[role="listbox"]',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$dialog=this.$element.find('.modal-dialog')
this.$backdrop=null
this.isShown=null
this.originalBodyPad=null
this.scrollbarWidth=0
this.ignoreBackdropClick=false
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.3.4'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.$dialog.on('mousedown.dismiss.bs.modal',function(){that.$element.one('mouseup.dismiss.bs.modal',function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true})})
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
that.adjustDialog()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in').attr('aria-hidden',false)
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$dialog.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').attr('aria-hidden',true).off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal')
this.$dialog.off('mousedown.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false
return}
if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus():this.hide()},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
Modal.prototype.handleUpdate=function(){this.adjustDialog()}
Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth
if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect()
fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left)}
this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth
this.scrollbarWidth=this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
this.originalBodyPad=document.body.style.paddingRight||''
if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right',this.originalBodyPad)}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=null
this.options=null
this.enabled=null
this.timeout=null
this.hoverState=null
this.$element=null
this.init('tooltip',element,options)}
Tooltip.VERSION='3.3.4'
Tooltip.TRANSITION_DURATION=150
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$(this.options.viewport.selector||this.options.viewport)
if(this.$element[0]instanceof document.constructor&&!this.options.selector){throw new Error('`selector` option must be specified when initializing '+this.type+' on the window.document object!')}
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(self&&self.$tip&&self.$tip.is(':visible')){self.hoverState='in'
return}
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!inDom)return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id',tipId)
this.$element.attr('aria-describedby',tipId)
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var orgPlacement=placement
var $container=this.options.container?$(this.options.container):this.$element.parent()
var containerDim=this.getPosition($container)
placement=placement=='bottom'&&pos.bottom+actualHeight>containerDim.bottom?'top':placement=='top'&&pos.top-actualHeight<containerDim.top?'bottom':placement=='right'&&pos.right+actualWidth>containerDim.width?'left':placement=='left'&&pos.left-actualWidth<containerDim.left?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
var complete=function(){var prevHoverState=that.hoverState
that.$element.trigger('shown.bs.'+that.type)
that.hoverState=null
if(prevHoverState=='out')that.leave(that)}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top=offset.top+marginTop
offset.left=offset.left+marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
if(delta.left)offset.left+=delta.left
else offset.top+=delta.top
var isVertical=/top|bottom/.test(placement)
var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
var arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)}
Tooltip.prototype.replaceArrow=function(delta,dimension,isVertical){this.arrow().css(isVertical?'left':'top',50*(1-delta/dimension)+'%').css(isVertical?'top':'left','')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(callback){var that=this
var $tip=$(this.$tip)
var e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach()
that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type)
callback&&callback()}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
var elRect=el.getBoundingClientRect()
if(elRect.width==null){elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top})}
var elOffset=isBody?{top:0,left:0}:$element.offset()
var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()}
var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null
return $.extend({},elRect,scroll,outerDims,elOffset)}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
if(!this.$viewport)return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
var rightEdgeOffset=pos.left+viewportPadding+actualWidth
if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.width){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
return delta}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
while(document.getElementById(prefix))
return prefix}
Tooltip.prototype.tip=function(){return(this.$tip=this.$tip||$(this.options.template))}
Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=this
if(e){self=$(e.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
$(e.currentTarget).data('bs.'+this.type,self)}}
self.tip().hasClass('in')?self.leave(self):self.enter(self)}
Tooltip.prototype.destroy=function(){var that=this
clearTimeout(this.timeout)
this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type)})}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.3.4'
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content').children().detach().end()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';function ScrollSpy(element,options){this.$body=$(document.body)
this.$scrollElement=$(element).is(document.body)?$(window):$(element)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||'')+' .nav li > a'
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on('scroll.bs.scrollspy',$.proxy(this.process,this))
this.refresh()
this.process()}
ScrollSpy.VERSION='3.3.4'
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
ScrollSpy.prototype.refresh=function(){var that=this
var offsetMethod='offset'
var offsetBase=0
this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position'
offsetBase=this.$scrollElement.scrollTop()}
this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){that.offsets.push(this[0])
that.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.getScrollHeight()
var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(this.scrollHeight!=scrollHeight){this.refresh()}
if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}
if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null
return this.clear()}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(offsets[i+1]===undefined||scrollTop<offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
this.clear()
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}
ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.scrollspy
$.fn.scrollspy=Plugin
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
Plugin.call($spy,$spy.data())})})}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
Tab.VERSION='3.3.4'
Tab.TRANSITION_DURATION=150
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
var $previous=$ul.find('.active:last a')
var hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]})
var showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]})
$previous.trigger(hideEvent)
$this.trigger(showEvent)
if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return
var $target=$(selector)
this.activate($this.closest('li'),$ul)
this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]})
$this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&(($active.length&&$active.hasClass('fade'))||!!container.find('> .fade').length)
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false)
element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true)
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu').length){element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true)}
callback&&callback()}
$active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next()
$active.removeClass('in')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tab
$.fn.tab=Plugin
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
var clickHandler=function(e){e.preventDefault()
Plugin.call($(this),'show')}
$(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler)}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=null
this.unpin=null
this.pinnedOffset=null
this.checkPosition()}
Affix.VERSION='3.3.4'
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0,target:window}
Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
var targetHeight=this.$target.height()
if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false
if(this.affixed=='bottom'){if(offsetTop!=null)return(scrollTop+this.unpin<=position.top)?false:'bottom'
return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:'bottom'}
var initializing=this.affixed==null
var colliderTop=initializing?scrollTop:position.top
var colliderHeight=initializing?targetHeight:height
if(offsetTop!=null&&scrollTop<=offsetTop)return'top'
if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom))return'bottom'
return false}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var height=this.$element.height()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
var scrollHeight=$(document.body).height()
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom)
if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix')}
if(affix=='bottom'){this.$element.offset({top:scrollHeight-height-offsetBottom})}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.affix
$.fn.affix=Plugin
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom
if(data.offsetTop!=null)data.offset.top=data.offsetTop
Plugin.call($spy,data)})})}(jQuery);


/*===============================
/media/mod_zentools/js/lightbox/jackbox-packed.min.js
================================================================================*/;
(function(c){function E(c,k){k||(delete c.swipeLeft,delete c.swipeRight,delete c.stopProp);delete c.newPageX;delete c.pageX}function s(c){var k=c.touches?c.touches[0]:c;this.stopProp&&c.stopImmediatePropagation();this.pageX=k.pageX;this.addEventListener(X,Ba);this.addEventListener(L,n)}function n(c){var k=this.newPageX=(c.touches?c.touches[0]:c).pageX;10<Math.abs(this.pageX-k)&&c.preventDefault()}function Ba(){var c=this.newPageX,k=this.pageX,l=this.cjThumbs;this.removeEventListener(L,n);this.removeEventListener(X,
Ba);30>Math.abs(k-c)||(l||this.removeEventListener(y,s),k>c?this.swipeLeft&&(c=this.swipeLeft,E(this,l),c()):this.swipeRight&&(c=this.swipeRight,E(this,l),c(1)))}var X,L,y,l={touchSwipe:function(c,k){l.touchSwipeLeft(c,k);l.touchSwipeRight(c,k)},touchSwipeLeft:function(c,k,n){n&&(c.stopProp=!0);c.swipeLeft||(c.swipeLeft=k);c.swipeRight||c.addEventListener(y,s)},touchSwipeRight:function(c,k,n){n&&(c.stopProp=!0);c.swipeRight||(c.swipeRight=k);c.swipeLeft||c.addEventListener(y,s)},unbindSwipe:function(c){c.removeEventListener(y,
s);c.removeEventListener(L,n);c.removeEventListener(X,Ba);E(c)}};"ontouchend"in document?(X="touchend",L="touchmove",y="touchstart"):(X="mouseup",L="mousemove",y="mousedown");c.fn.cjSwipe=function(c,k,n){l[c](this[0],k,n)}})(jQuery);
(function(c){function E(){qa=c(window);Ac=c("body");Tb=c("body, html");$=c("<div />").addClass("jackbox-modal");aa=c("<div />").addClass("jackbox-holder");ab=c("<div />").addClass("jackbox-wrapper");Qa=c("<div />").addClass("jackbox-preloader");bb=c("<span />").addClass("jackbox-panel jackbox-panel-left");kb=c("<span />").addClass("jackbox-panel jackbox-panel-right");var a=M.createDocumentFragment();a.appendChild(ab[0]);a.appendChild(Qa[0]);$[0].appendChild(a);a=M.createDocumentFragment();a.appendChild(bb[0]);
a.appendChild(kb[0]);a.appendChild(aa[0]);ab[0].appendChild(a);cb=c("<div />").addClass("jackbox-container");lb||(a=c("<span />").addClass("jackbox-pre-outside").appendTo(Qa),c("<span />").addClass("jackbox-pre-inside").appendTo(a));U*=2;Kb=0;a=M.createDocumentFragment();e&&(G=c(e).hide(),a.appendChild(G[0]));a.appendChild(cb[0]);r&&(x=c(r).hide(),a.appendChild(x[0]));aa[0].appendChild(a);jc=-(la+f);mb=[];Lb=[];ta=[];ua=[];kc.each(s);db&&(c.address.internalChange(L),c.address.externalChange(X));Bc=
!0;Mb&&(db?setTimeout(Mb,250):Mb(),Mb=null);kc=Lb=e=r=mb=null}function s(){var a=c(this).attr("data-group").split(" ").join("").toLowerCase();if(lb){for(var b=ua.length,d=!1;b--;)if(ua[b]===a){d=!0;break}d||n(a)}else-1===ua.indexOf(a)&&n(a)}function n(a){ua[ua.length]=a;Lb=[];c(".jackbox[data-group="+a+"]").each(Ba);ta[ta.length]=Lb;Vb++}function Ba(a){isNaN(a)?w=a:(w=c(this).data({id:a,cat:Vb}),Lb[a]=w);if(S=w.attr("href")||w.attr("data-href")){var b;a="#"!==S.charAt(0)?S.toLowerCase().split(".").pop():
"inline";if(b=-1!==S.search("youtube.com")?"youtube":-1!==S.search("vimeo.com")?"vimeo":"mp4"===a?"local":!1)w.data("type",b),w.attr("data-thumbnail")||("vimeo"===b?xb(w,S):"youtube"===b&&w.attr("data-thumbnail","http://img.youtube.com/vi/"+S.split("http://www.youtube.com/watch?v=")[1]+"/1.jpg"));else if("jpg"===a||"png"===a||"jpeg"===a||"gif"===a)w.data("type","image");else switch(a){case "mp3":w.data("type","audio");break;case "swf":w.data("type","swf");break;case "inline":w.data("type","inline");
break;default:w.data("type","iframe")}w.on("click.jackbox",R);if(Ca=w.attr("data-description")){if(mb)if(a=mb.indexOf(Ca),-1===a){Ca=c(Ca);if(!Ca.length)return;mb[mb.length]=Ca}else Ca=mb[a];else if(Ca=c(Ca),!Ca.length)return;w.data("description",Ca)}}}function X(a){if(Cc){Cc=!1;var b=M.URL.split("?url=");if(2===b.length){window.location=b[0]+"#/"+b[1];return}}clearTimeout(Nb);y(a.value);-1!==ma?Dc?(Dc=!1,L()):Nb=setTimeout(L,750):eb&&J()}function L(a){"object"===typeof a&&(clearTimeout(Nb),y(a.value));
-1!==ma?ra():eb&&J()}function y(a){va&&(!fb&&!yb)&&ba[C].removeClass("jb-thumb-active");"/"!==a?(a=a.split("/"),3===a.length?(C=parseInt(a[2],10)-1,isNaN(C)&&(C=0),zb=a[1]):isNaN(a[1])?(C=0,zb=a[1]):(C=parseInt(a[1],10)-1,zb="/")):(zb="/",C=0);if("/"!==zb)for(a=Vb;a--;){if(ua[a]===zb){ma=a;Da=ta[ma].length;Ka=1!==Da;break}}else ma=-1;yb=!1}function l(){clearTimeout(N);N=setTimeout(nb,100)}function R(a){a.stopPropagation();a.preventDefault();a=c(this).data();k(a.cat,a.id,!0)}function k(a,b,d){clearTimeout(Nb);
if(!d){if(va)for(d=ba.length;d--;)ba[d].off("click.jackbox");bb.off(".jackbox");kb.off(".jackbox");Ab&&Bb.off("keydown.jackbox");P&&lc&&F.cjSwipe("unbindSwipe")}db?c.address.value(ua[a]+"/"+(b+1)):(va&&(!fb&&!yb)&&ba[C].removeClass("jb-thumb-active"),C=b,ma=a,Da=ta[ma].length,Ka=1!==Da,ra())}function Y(a){if(a&&(a.stopPropagation(),Ob))return!1;eb&&(va&&!fb&&ba[C].removeClass("jb-thumb-active"),C<ta[ma].length-1?C++:C=0,yb=!0,k(ma,C))}function ga(a){if(a&&(a.stopPropagation(),Ob))return!1;eb&&(va&&
!fb&&ba[C].removeClass("jb-thumb-active"),0<C?C--:C=ta[ma].length-1,yb=!0,k(ma,C))}function T(){for(var a=[$[0],ab[0],aa[0],cb[0]],b=4;b--;)a[b].removeEventListener("touchstart",v,!1),a[b].removeEventListener("touchmove",v,!1),a[b].removeEventListener("touchend",v,!1)}function ra(){Wb=ta[ma];if(w=Wb[C]){if(P)for(var a=[$[0],ab[0],aa[0],cb[0]],b=4;b--;)a[b].addEventListener("touchstart",v,!1),a[b].addEventListener("touchmove",v,!1),a[b].addEventListener("touchend",v,!1);S=w.attr("href")||w.attr("data-href");
if(eb)Ob=!0,u(),Q();else{eb=!0;P||Tb.stop();Kb=qa.scrollTop();$.appendTo(Ac).one("click.jackbox",gb);Cb||(Ec=$.parents().each(Ra));if(Ab)Bb.on("keydown.jackbox_keyboard",m);Fc||(Fc=!0,Xb=parseInt(aa.css("padding-left"),10)+parseInt(aa.css("padding-right"),10),Db=parseInt(aa.css("padding-top"),10)+parseInt(aa.css("padding-bottom"),10),mc=parseInt(bb.css("width"),10)+14,Yb=Db+U,q=la+(f<<1),Zb=parseInt(Qa.css("margin-top"),10),Gc=Zb-(q>>1),Hc=parseInt(aa.css("padding-left"),10),Ic=parseInt(aa.css("padding-top"),
10),Ea=c(".jackbox-fullscreen"),Ea.length||(Ea=null),g=!P&&"safari"!==$b&&("webkitRequestFullScreen"in $[0]||"mozFullScreenEnabled"in M));hb=!nc&&ac&&Ka?0:jc;na=qa.width();wa=qa.height();aa.css({width:na,height:wa,marginLeft:-(na>>1)-Hc,marginTop:-(wa>>1)-Ic});Jacked.fadeIn($[0],{callback:xa});Jc=setTimeout(Q,250);ab.on("click.jackbox",ob)}}}function Ra(){c(this).addClass("jackbox-overflow")}function ya(){c(this).removeClass("jackbox-overflow")}function xa(){Cb||qa[0].scrollTo(0,0)}function Q(){va&&
(ba[C].addClass("jb-thumb-active"),fb?fb=!1:Kc(!1,!0));var fa;fa=w.attr("data-autoplay")?w.attr("data-autoplay"):Lc;fa="true"===fa||!0===fa;var e=w.data("description")||null,Ub=w.attr("data-title")||"",x;bc="true"===w.attr("data-scaleUp");cc=e&&"string"!==typeof e?e.html():!1;Fa=w.data("type");fa="true"===fa||!0===fa;Ub?(oc=Ub,Eb=escape(oc)):(Eb=!1,"undefined"!==typeof ia&&(ia.data("links")&&ia.data("links").off(".jackbox"),ia.empty()));P&&(lc="image"===Fa,"inline"!==Fa&&"iframe"!==Fa&&M.addEventListener("touchmove",
v,!1));"image"!==Fa&&ja();568<na?Qa.css("margin-top",0===hb?Gc:Zb):Qa.css("margin-top",Zb);ab.show();Qa.addClass("jackbox-spin-preloader");switch(Fa){case "image":dc=!0;F=c("<img />").addClass("jackbox-content").one("load.jackbox",ec).prependTo(cb);P&&(F[0].addEventListener("touchstart",v,!1),F[0].addEventListener("touchmove",v,!1),F[0].addEventListener("touchend",v,!1));F.attr("src",S);break;case "youtube":Fb(d.split("{url}").join(S.split("watch?v=")[1]).split("{autoplay}").join(fa?1:0));break;case "vimeo":Fb(b.split("{url}").join(S.substring(S.lastIndexOf("/"))).split("{autoplay}").join(fa));
break;case "local":var e=V(),Ub="true"===w.attr("data-firefoxUsesFlash")?"true":"false",r=w.attr("data-flashHasPriority")?w.attr("data-flashHasPriority"):Mc.toString();x="false"===r&&g&&"firefox"!==$b;e=w.attr("data-poster")?e+w.attr("data-poster"):"false";Fb(Pb+"?video="+S+"&autoplay="+fa+"&flashing="+r+"&width="+Ga+"&height="+Ha+"&poster="+e+"&firefox="+Ub,!0);break;case "audio":V();Fb(a+"?audio="+S+"&title="+(w.attr("data-audiotitle")?w.attr("data-audiotitle"):Eb)+"&autoplay="+fa);break;case "swf":V();
Fb(La+"?swf="+S+"&width="+(H.toString()+"&height="+B.toString()));break;case "inline":fa=c(S);fa=fa.length?fa.html():"";F=c("<div />").addClass("jackbox-content jackbox-html").html(fa).prependTo(cb);F.css("width",H).find("a").on("click",z);w.attr("data-height",F.outerHeight(!0));ja();ec();break;default:Fb(S,!1,!0)}g&&(!x?Ea.show():Ea.hide())}function V(){if(-1===S.search("http")){var a=M.URL.split("#")[0];"/"!==a[a.length-1]&&(a=a.substring(0,a.lastIndexOf("/")+1));S=a+S;return a}}function za(a){switch(a.keyCode){case 39:Y();
break;case 37:ga();break;case 40:pc();break;case 38:pc()}}function m(a){27===a.keyCode&&gb(a)}function W(){ka.css("visibility","hidden")}function Ia(){I.data("offLeft",I.offset().left)}function sa(){Gb.css({opacity:0,visibility:"hidden"})}function Sa(a){"object"===typeof a&&a.stopPropagation();ca<Da-ib&&(ca++,qc(!1,!0))}function Ta(a){"object"===typeof a&&a.stopPropagation();0<ca&&(ca--,qc(!1,!0))}function jb(a){a.stopPropagation();a=c(this).parent();a.addClass("jb-thumb-fadein");P||a.addClass("jb-thumb-hover");
a.data("id")===C&&a.addClass("jb-thumb-active")}function p(a){a.stopPropagation();if(Ob)return!1;a=c(this).data("id");a!==C&&(va&&ba[C].removeClass("jb-thumb-active"),C=a,fb=!0,k(ma,C))}function t(){Ma?Z():(qa.off(".jackbox"),Ma=!0,M.mozFullScreenEnabled?(M.addEventListener("mozfullscreenchange",h,!1),$[0].mozRequestFullScreen()):$[0].webkitRequestFullScreen&&(M.addEventListener("webkitfullscreenchange",h,!1),$[0].webkitRequestFullScreen()))}function h(){M.webkitIsFullScreen||M.mozFullScreen?nb():
Z(!0)}function oa(a){M.removeEventListener(a.type,oa,!1);nb();qa.on("resize.jackbox",l)}function Z(a){Ma=!1;M.mozFullScreenEnabled?(M.removeEventListener("mozfullscreenchange",h,!1),a?(nb(),qa.on("resize.jackbox",l)):(M.addEventListener("mozfullscreenchange",oa,!1),M.mozCancelFullScreen())):$[0].webkitRequestFullScreen&&(M.removeEventListener("webkitfullscreenchange",h,!1),a?(nb(),qa.on("resize.jackbox",l)):(M.addEventListener("webkitfullscreenchange",oa,!1),M.webkitCancelFullScreen()))}function ja(){dc=
!1;Ga=w.attr("data-width")?parseInt(w.attr("data-width"),10):Nc;Ha=w.attr("data-height")?parseInt(w.attr("data-height"),10):Oc;bc="true"===w.attr("data-scaleUp");pa()}function pa(){fc=Ga+Xb+mc+U;rc=Ha+Yb;nb("true")}function u(){clearTimeout(Jc);Jacked.stopTween(aa[0]);qa.off(".jackbox");P&&M.removeEventListener("touchmove",v,!1);F&&(Jacked.stopTween(F[0]),F.remove(),F=null);G&&(Jacked.stopTween(G[0],!0),G.hide());x&&(Jacked.stopTween(x[0],!0),x.hide());da&&(da.removeClass("jb-info-inactive"),Jacked.stopTween(Aa[0]),
Aa.empty().hide())}function gb(a){a.stopPropagation();db?c.address.value(""):J()}function J(){clearTimeout(Nb);u();$.unbind(".jackbox");Ab&&Bb.off("keydown.jackbox_keyboard");if(Ka){Ab&&Bb.off("keydown.jackbox");pb&&pb.off(".jackbox");qb&&qb.off(".jackbox");Qb&&I&&I.off(".jackbox");Jacked.stopTween(kb[0],!0);Jacked.stopTween(bb[0],!0);var a={opacity:0,visibility:"hidden"};kb.off(".jackbox").css(a);bb.off(".jackbox").css(a)}else rb&&rb.show(),ha&&ha.show();ab.hide().off(".jackbox");Qa.removeClass("jackbox-spin-preloader");
"undefined"!==typeof ia&&(ia.data("links")&&ia.data("links").off(".jackbox"),ia.empty());g&&Ea.off(".jackbox");sb&&sb.unbind(".jackbox");da&&da.off(".jackbox");if(va){Jacked.stopTween(Ua[0]);for(Ua.off(".jackbox").hide();ba.length;)a=ba[0],Jacked.stopTween(a[0]),a.remove(),ba.shift();Va.off(".jackbox").hide();O.off(".jackbox").hide();P&&I.cjSwipe("unbindSwipe");Jacked.stopTween(Ja[0]);Ja.empty().css("margin-left",0);ha&&(ha.off(".jackbox"),ha&&(Na.hide(),Wa.show()));va=ba=null}Cb||Ec.each(ya);Jacked.fadeOut($[0],
{duration:1E3,callback:D});aa.css({marginLeft:cd,marginTop:dd});P&&(T(),M.removeEventListener("touchmove",v,!1));setTimeout(Oa,10);ka&&(ka.css("visibility","hidden"),P&&(ka[0].removeEventListener("touchstart",z,!1),ka[0].removeEventListener("touchmove",z,!1),ka[0].removeEventListener("touchend",z,!1)));w=eb=Ma=fb=sc=gc=yb=tc=Hb=null}function Oa(){0!==Kb&&(!Cb&&!P?Tb.animate({scrollTop:Kb},{duration:300,queue:!1}):Tb.scrollTop(Kb))}function D(){$.detach()}function Rb(a){!a?Y():ga()}function v(a){a.preventDefault()}
function xb(a,b){c.getJSON("http://vimeo.com/api/v2/video/"+b.split("http://vimeo.com/")[1]+".json?callback=?",{format:"json"},function(b){a.attr("data-thumbnail",b[0].thumbnail_small)})}function Xa(){var a=c(this),b=a.next("img"),d=b.attr("src");b.length&&(a=c("<img />").attr({width:b.attr("width"),height:b.attr("height")}).data("parent",a).one("load.jackbox",K).insertAfter(b),b.remove(),a.attr("src",d))}function K(){var a=c(this),b=a.data("parent"),d=parseInt(b.css("width"),10)||b.width(),e=parseInt(b.css("height"),
10)||b.height(),b=c("<canvas />").addClass("jackbox-canvas-blur").attr({width:d,height:e}).insertBefore(b),e=Date.now(),d=e+1,e=e+2;a.attr("id",d);b.attr("id",e);StackBlurImage(d,e,29)}function Pa(){var a=c(this);a.parent().data({tip:a,tipWidth:a.width()-27,tipHeight:a.height()+17}).on("mouseenter.jackbox",Ib).on("mouseleave.jackbox",tb)}function Ib(){var a=c(this),b=a.offset(),d=a.data();d.tipX=b.left;d.tipY=b.top;d.tip.css({opacity:1,visibility:"visible"});a.on("mousemove.jackbox",ed)}function tb(){var a=
c(this).off("mousemove.jackbox");lb?a.data("tip").css("opacity",0):a.data("tip").css({opacity:0,visibility:"hidden"})}function z(a){a.stopImmediatePropagation()}function ob(a){c(a.target).is("a")||(a.stopPropagation(),a.preventDefault())}var A={useThumbs:!0,deepLinking:!0,autoPlayVideo:!1,flashVideoFirst:!1,defaultVideoWidth:960,defaultVideoHeight:540,thumbnailWidth:75,thumbnailHeight:50,useThumbTooltips:!0,preloadGraphics:!0,showInfoByDefault:!1,thumbsStartHidden:!1,showPageScrollbar:!1,useKeyboardControls:!0,
fullscreenScalesContent:!0,defaultShareImage:"jackbox/img/default_share.jpg"},U=10,f=2,La="jackbox/modules/jackbox_swf.html",Pb="jackbox/modules/jackbox_video.html",a="jackbox/modules/jackbox_audio.html",b="http://player.vimeo.com/video{url}?title=0&byline=0&portrait=0&autoplay={autoplay}&color=FFFFFF&wmode=transparent",d="http://www.youtube.com/embed/{url}?autoplay={autoplay}&autohide=1&hd=1&iv_load_policy=3&showinfo=0&showsearch=0&wmode=transparent",e='<div class="jackbox-top clearfix"><div class="jackbox-top-icons"><span class="jackbox-fullscreen"><span class="jackbox-button jackbox-fs"></span><span class="jackbox-button jackbox-ns"></span></span><span class="jackbox-button jackbox-button-margin jackbox-close"></span></div><div />',
r='<div class="jackbox-bottom clearfix"><div class="jackbox-controls"><span class="jackbox-button jackbox-arrow-left"></span><span class="jackbox-button jackbox-arrow-right"></span></div><div class="jackbox-title-text"><span class="jb-current"></span><span class="jb-divider">/</span><span class="jb-total"></span><span class="jackbox-title-txt"></span></div><div class="jackbox-bottom-icons"><span class="jackbox-button jackbox-info"></span><span class="jackbox-button-margin jackbox-button-thumbs"><span class="jackbox-button jackbox-hide-thumbs"></span><span class="jackbox-button jackbox-show-thumbs"></span></span></div></div>',
N,x,g,Hc,Ic,ea,q,hc,jc,Ma,uc,Pc,Db,Xb,Qc,ka,mc,vc,Ja,I,wc,O,G,Aa,Ya,Na,Wa,kb,Ea,Kb,bb,Eb,Va,cb,Qa,ib,mb,xc,oc,lc,Hb,Gb,hb,ha,sb,cc,rb,Rc,Qb,Sc,ub,Jb,ca,ab,vb,qb,Ka,Zb,pb,bc,Tc,P,Yb,ic,Sb,$,ia,w,Lb,da,Bb,M,S,H,qa,Da,Uc,ua,B,zb,ta,lb,wb,yc,Jc,Mb,ba,Ac,aa,kc,Ga,Vc,Nb,Wc,F,Ha,dc,na,wa,fc,rc,Fa,Ec,$b,Za,Ca,eb,Fc,Tb,Ab,ac,Ob,fb,va,dd,sc,Wb,Cb,db,Ua,gc,Gc,cd,Xc,yb,zc,tc,Lc,$a,Bc,la,Mc,Yc,nc,Nc,Oc,C=1,ma=-1,Vb=0,Dc=!0,Cc=!0,Zc={init:function(a,b){!Xc&&"undefined"!==typeof Jacked&&(b&&c.extend(A,b),ac=A.useThumbs,
db=A.deepLinking,Qb=A.useThumbTooltips,Lc=A.autoPlayVideo,Ab=A.useKeyboardControls,Cb=A.showPageScrollbar,$a=A.thumbnailWidth,Wc=A.fullscreenScalesContent,la=A.thumbnailHeight,Mc=A.flashVideoFirst,Yc=A.showInfoByDefault,nc=A.thumbsStartHidden,Nc=A.defaultVideoWidth,Oc=A.defaultVideoHeight,M=document,Bb=c(document),Xc=!0,Za=$a+f,Vc=-1!==M.URL.search("file:///"),Jacked.setEngines({ios:!0,safari:!0,opera:!0,firefox:!0}),kc=a,A=null,lb=Jacked.getIE(),P=Jacked.getMobile(),$b=Jacked.getBrowser(),Uc="ie"===
$b,P&&(Cb=!1),"undefined"!==typeof c.address&&db?Uc?(E(),c.address.update()):c.address.init(E):(db=!1,E()),"undefined"!==typeof StackBlurImage&&(!Vc&&!lb)&&c(".jackbox-hover-blur").each(Xa),c(".jackbox-tooltip").each(Pa))},frameReady:function(){eb&&ec()},newItem:function(a,b){var d=ua.length,c=-1,e;if(b&&"object"===typeof b){var g,x,r;for(g in b)"trigger"!==g&&(x="data-"+g,r=b[g],a.attr(x,r),"group"===g&&(e=r))}else b=null;e||(e=a.attr("data-group"));if(e){for(e=e.split(" ").join("").toLowerCase();d--;)if(ua[d]===
e){c=d;break}if(-1<c){e=ta[c];for(var h in e)if(e[h[0]][0]===a[0])return;d=e.length;e[d]=a}else c=ua.length,d=ta.length,ua[c]=e,Vb++,ta[d]=[a],d=0;Ba(a);a.data({id:d,cat:c});b&&b.trigger&&a.trigger("click")}}},Fb=function(){var a={type:"text/html",frameborder:0,mozallowfullscreen:"mozallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",allowfullscreen:"allowfullscreen"};return function(b,d,e){a.width=H;a.height=B;a.scrolling=!e?"no":"auto";F=c("<iframe />").attr(a).addClass("jackbox-content").prependTo(cb);
if(!d)F.one("load.jackbox",ec);F.attr("src",b)}}(),ec=function(){var a={};return function(b){b&&b.stopPropagation();dc&&(Ga=this.width||F.width(),Ha=this.height||F.height(),pa());a.width=H;a.height=B;F.css(a);$c(!0);uc&&uc();qa.on("resize.jackbox",l)}}(),$c=function(){var a={},b={},d={};return function(c){if(c){260>H&&(wb+=260-H);c=Math.max(H,260);if(c===Hb&&B===xc){ad();return}a.callback=ad;a.duration=Hb?50<Math.abs(c-Hb)||50<Math.abs(B-xc)?600:300:600}else c=H,d.width=c,a.duration=300,delete a.callback,
G&&Jacked.tween(G[0],d,a),x&&Jacked.tween(x[0],d,a),d.height=B,Jacked.stopTween(F[0],!0),Jacked.tween(F[0],d,a);b.marginLeft=-((wb>>1)+0.5|0);b.marginTop=-((yc>>1)+0.5|0);b.height=B;b.width=c;Hb||(b.opacity=1);Jacked.tween(aa[0],b,a);Hb=c;xc=B}}(),ad=function(){var a={},b={opacity:1,visibility:"visible"};return function(){fd();Qa.removeClass("jackbox-spin-preloader");var d=Math.max(H,260);a.duration=600;dc&&!lb?Jacked.fadeIn(F[0],a):(F.show(),("audio"===Fa||"local"===Fa)&&F[0].contentWindow.cjInit());
a.duration=300;lb?(G&&G.css("width",d).show(),x&&x.css("width",d).show()):(G&&(G.css("width",d),Jacked.fadeIn(G[0],a)),x&&(x.css("width",d),Jacked.fadeIn(x[0],a)));da&&cc?(da.show(),Aa.html(cc).show(),Ya=-Aa.outerHeight(),ka.css("height",-Ya<B?-Ya:B),Yc?(Jb=!0,da.addClass("jb-info-inactive"),Aa.css({visibility:"visible",marginTop:0})):(Jb=!1,Aa.css("margin-top",Ya))):da&&(da.hide(),Aa.hide());Ob=!1;!gc&&Ka&&(bb.css(b),kb.css(b));if(!tc&&ac&&Ka){var d=ta[ma],e=[],r=Da,h,f,k,N,q;for(tc=!0;r--;)k=d[r],
k.attr("data-thumbnail")?e[r]=!1:(h=k.children("img"),h.length?(k.attr("data-thumbnail",h.attr("src")),e[r]=h):("image"===k.data("type")?k.attr("data-thumbnail",k.attr("href")||k.attr("data-href")):k.attr("data-thumbnail","media/mod_zentools/images/lightbox/graphics/thumb/default.jpg"),e[r]=!1));ba=[];Ua||(r=M.createDocumentFragment(),k=la>>1,Ua=c("<div />").addClass("jackbox-thumb-holder").css("height",la).appendTo($),I=c("<div />").addClass("jackbox-thumb-panel").css("height",la),O=c("<div />").addClass("jackbox-thumb-right"),
Va=c("<div />").addClass("jackbox-thumb-left"),r.appendChild(I[0]),r.appendChild(O[0]),r.appendChild(Va[0]),I[0].cjThumbs=!0,Ua[0].appendChild(r),Ja=c("<div />").addClass("jackbox-thumb-strip").appendTo(I),Va.css("top",k),O.css("top",k));k=M.createDocumentFragment();for(r=0;r<Da;r++){f=ba[r]=c("<div />").data("id",r).addClass("jackbox-thumb").css({width:$a,height:la,left:Za*r}).on("click.jackbox",p);if(Qb&&(h=Wb[r].attr("data-thumbTooltip")||Wb[r].attr("data-title")))f.data("theTitle",h).on("mouseenter.jackbox",
gd).on("mouseleave.jackbox",sa);k.appendChild(f[0]);h=c("<img />").addClass("jb-thumb").one("load.jackbox",jb).appendTo(f);f.data("theThumb",h);e[r]?(f=e[r].attr("width")||e[r].width(),N=e[r].attr("height")||e[r].height()):(f=$a,N=la);f>$a&&N>la&&(q=f>N?$a/f:la/N,f*=q,N*=q,N<la&&(q=(la-N)/la,f+=f*q,N+=N*q),f<$a&&(q=($a-f)/$a,f+=f*q,N+=N*q),f!==(f|0)&&(f=f+1|0),N!==(N|0)&&(N=N+1|0));h.attr({width:f,height:N,src:d[r].attr("data-thumbnail")})}Ja[0].appendChild(k);Qc=ba.length;wc=Za*r;va=!0;ca=0;Ua.on("click.jackbox",
ob).show();bd();ha&&(nc?(Wa.hide(),Na.show(),Ua.css("bottom",hb)):(Na.hide(),Wa.show(),Ua.css("bottom",0)),ha.on("click.jackbox",pc))}if(!gc){gc=!0;if(g)Ea.on("click.jackbox",t);if(sb)sb.one("click.jackbox",gb);if(da)da.on("click.jackbox",hd);if(Ka){if(qb)qb.on("click.jackbox",Y);if(pb)pb.on("click.jackbox",ga);if(Qb&&I)I.on("mouseenter.jackbox",Ia);P&&ka&&(ka[0].addEventListener("touchstart",z,!1),ka[0].addEventListener("touchmove",z,!1),ka[0].addEventListener("touchend",z,!1))}}P&&(F[0].removeEventListener("touchstart",
v,!1),F[0].removeEventListener("touchmove",v,!1),F[0].removeEventListener("touchend",v,!1),T());if(Ka){if(va)for(d=ba.length;d--;)ba[d].on("click.jackbox",p);bb.on("click.jackbox",ga);kb.on("click.jackbox",Y);if(Ab)Bb.on("keydown.jackbox",za);P&&lc&&F.cjSwipe("touchSwipe",Rb)}}}(),fd=function(){return function(){if(!Rc){Rc=!0;Sb=c(".jb-total");da=c(".jackbox-info");ub=c(".jb-divider");vb=c(".jb-current");sb=c(".jackbox-close");ic=c(".jackbox-title-text");ia=c(".jackbox-title-txt");rb=c(".jackbox-controls");
pb=c(".jackbox-arrow-left");qb=c(".jackbox-arrow-right");ha=c(".jackbox-button-thumbs");Na=c(".jackbox-show-thumbs");Wa=c(".jackbox-hide-thumbs");ia.length||(ia=null);ic.length||(ic=null);pb.length||(pb=null);ub.length||(ub=null);qb.length||(qb=null);rb.length||(rb=null);sb.length||(sb=null);if(!vb.length||!Sb.length)vb=null;g?(c(".jackbox-ns").hide(),Ea.length||(Ea=g=null)):Ea&&Ea.hide();ac?ha.length&&Na.length&&Wa.length?Na.hide():ha=Na=Wa=null:(ha.hide(),ha=Na=Wa=null);da.length?(ka=c("<div />").addClass("jackbox-info-text").appendTo(cb).css("visibility",
"hidden"),Aa=c("<div />").addClass("jackbox-description-text").appendTo(ka)):da=null;Qb&&(Gb=c("<span />").addClass("jackbox-thumb-tip").css("bottom",la),ea=c("<span />").addClass("jackbox-thumb-tip-text").text("render me").appendTo(Gb),Gb.appendTo($),Pc=(parseInt(Gb.css("padding-left"),10)<<1)-(f<<1))}Ka||(rb&&rb.hide(),ha&&ha.hide());if(ic){"false"===Eb&&(Eb=!1);var a=ia&&Eb;vb&&Ka?(vb.text(C+1).show(),Sb.html(Da).show(),ub&&ub.show()):(Sb&&Sb.hide(),vb&&vb.hide(),ub&&ub.hide());a&&(ia.html("&nbsp;-&nbsp;"+
oc),a=ia.find("a"),a.length&&(a.on("click.jackbox",z),ia.data("links",a)))}}}(),hd=function(){var a={},b={duration:300};return function(d){d&&d.stopPropagation();Jb?(a.marginTop=Ya,b.callback=W,da.removeClass("jb-info-inactive")):(da.addClass("jb-info-inactive"),ka.css("visibility","visible"),a.marginTop=0,delete b.callback);Jacked.tween(Aa[0],a,b);Jb=!Jb}}(),gd=function(){var a={opacity:1,visibility:"visible"};return function(){P&&(clearTimeout(Tc),Tc=setTimeout(sa,2E3));var b=c(this),d,e,g;ea.text(b.data("theTitle"));
d=parseInt(ea.css("width"),10);g=I.data("offLeft");b=b.offset().left;e=g+I.width()-d-Pc;a.width=d;a.left=b<g?g:b>e?e:b;Gb.css(a)}}(),pc=function(){var a={},b={duration:300};return function(d){d&&d.stopPropagation();0===hb?(hb=jc,ha&&(Wa.hide(),Na.show())):(hb=0,ha&&(Na.hide(),Wa.show()));a.bottom=hb;Jacked.tween(Ua[0],a,b);569>na||(nb("true"),$c())}}(),bd=function(){var a={};return function(b){var d=na-160;wc<d?(ib=Qc,zc=!1):(ib=d/Za|0,zc=!0);hc=Za*ib-f;vc=ib-1;a.marginLeft=-(hc>>1)-f;a.width=hc;
I.css(a);Ja.css("width",wc);Kc(b)}}(),Kc=function(){var a={},b={duration:300};return function(d,c){if(d)ca=C,0!==C&&C+ib>Da&&(ca=Da-ib),Jacked.stopTween(Ja[0]),Ja.css("left",ca*-Za);else{if(0===C)ca=0;else if(C>ca+vc)for(;C>ca+vc;)ca++;c?(a.left=ca*-Za,Jacked.tween(Ja[0],a,b)):(Jacked.stopTween(Ja[0]),Ja.css("left",ca*-Za))}qc(d,!1)}}(),qc=function(){var a={},b={duration:300};return function(d,c){Va.off(".jackbox");O.off(".jackbox");if(zc)if(P&&I.cjSwipe("unbindSwipe"),ca<Da-ib?(O.on("click.jackbox",
Sa).show(),P&&I.cjSwipe("touchSwipeLeft",Sa,!0)):O.hide(),0<ca?(Va.on("click.jackbox",Ta).show(),P&&I.cjSwipe("touchSwipeRight",Ta,!0)):Va.hide(),c)a.left=ca*-Za,Jacked.tween(Ja[0],a,b);else{if(d||!sc){var e=I.offset().left;Va.css("left",e);O.css("left",e+hc);sc=!0}}else Va.hide(),O.hide()}}(),nb=function(){var a={opacity:1},b={};return function(d){na=qa.width();wa=Math.max(qa.height(),226);var c=568<na&&0===hb?q:0;Sc="audio"!==Fa&&"inline"!==Fa?!Ma?bc:bc||Wc:!1;if(fc<na&&rc+c<wa&&!Sc)H=Ga,B=Ha;else{H=
na/fc;B=wa/rc;var e=H>B?B:H;H=Ga*e;B=Ha*e;na>wa?B+Yb+c>wa&&(B=wa-Db-U-c,H=Ga*(B/Ha)):H>B?H+fc>na&&(H=na-U,B=Ha*(H/Ga)):B+Yb+c>wa&&(B=wa-Db-U-c,H=Ga*(B/Ha));H!==(H|0)&&(H=H+1|0);B!==(B|0)&&(B=B+1|0)}if("inline"===Fa){var e=na-Xb-mc-U,g=wa-Db-U-c;H=Ga>e?e:Ga;B=Ha<g?Ha:B}wb=H+Xb;yc=B+Db+c;"true"!==d&&(Jacked.stopTween(aa[0],!1,!0),F&&Jacked.stopTween(F[0],!0,!0),260>H&&(wb+=260-H),d=Math.max(260,H),a.width=d,a.height=B,b.marginLeft=-(0.5*wb+0.5|0),b.marginTop=-(0.5*yc+0.5|0),b.width=d,b.height=B,aa.css(b),
F.css(a),x&&(Jacked.stopTween(x[0]),x.css("width",d)),G&&(Jacked.stopTween(G[0]),G.css("width",d)),da&&cc&&(Ya=-Aa.outerHeight(),ka.css("height",-Ya<B?-Ya:B),Jb||(Jacked.stopTween(Aa[0],!1,!0),Aa.css("margin-top",Ya))),va&&bd(!0))}}(),ed=function(){var a={};return function(b){var d=c(this).data();a.left=b.pageX-d.tipX-d.tipWidth;a.top=b.pageY-d.tipY-d.tipHeight;d.tip.css(a)}}();c.fn.jackBox=function(a,b){if(Zc.hasOwnProperty(a))Zc[a](this,b)};c.jackBox={available:function(a){a&&(Bc?db?setTimeout(a,
250):a():Mb=a)},itemLoaded:function(a){uc=a}}})(jQuery);function jackboxFrameReady(){jQuery.fn.jackBox("frameReady")}
(function(){function c(){t=!1;for(h=W;h--;){Z=Q[h];if(!Z)break;Z.isCSS||(Z.cycle()?t=!0:Z.stop(!1,Z.complete,!1,!0))}Y?t?Y(c):(ga(c),Z=p=null):t?za||(jb=setInterval(c,ob)):(clearInterval(jb),Z=p=null);za=t}function E(a){a.cjFadeIn?(delete a.cjFadeIn,a.style.opacity=1,a.style.visibility="visible"):a.cjFadeOut&&(delete a.cjFadeOut,a.style.display="none")}function s(){za||c()}function n(a,b,d,c){Q.splice(Q.indexOf(a),1);W=Q.length;d&&d(b,c)}function Ba(a){a.stopPropagation();(a=this.cj)&&a.stop(a.complete)}
function X(a,b,d){var c={},r;b=b.to;for(r in b)b.hasOwnProperty(r)&&(c[r]=b[r]);Jacked.tween(a,c,d)}function L(a,b){return this["webkit"+a+b]||this["moz"+a+b]||this["o"+a+b]||this[a+b]||null}function y(a){var b;if(b=tb.exec(a))return[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16),1];if(b=Ib.exec(a))return[17*parseInt(b[1],16),17*parseInt(b[2],16),17*parseInt(b[3],16),1]}function l(){for(var a in z)if(z.hasOwnProperty(a)&&a===sa){Sa=z[a];break}}function R(){if("ontouchend"in document){if(-1!==
ra.search("iphone")||-1!==ra.search("ipad"))return"ios";if(-1!==ra.search("android")||-1!==ra.search("applewebkit"))return"android";if(-1!==ra.search("msie"))return"winMobile"}return null}var k=window.getComputedStyle?document.defaultView.getComputedStyle:null,Y=L("Request","AnimationFrame"),ga=L("Cancel","AnimationFrame"),T=document.createElement("span").style,ra=navigator.userAgent.toLowerCase(),Ra="Quint.easeOut",ya=500,xa=function(){var a=ra.search("msie");if(-1===a)return[33.3,0];a=parseInt(ra.substr(a+
4,a+5),10);return[9<=a?16.6:33.3,a]}(),Q=[],V="WebkitTransition"in T?["webkitTransitionEnd","-webkit-transition",-1!==ra.search("chrome")?"chrome":"safari"]:"MozTransition"in T?["transitionend","-moz-transition","firefox"]:"MSTransition"in T?["transitionend","-ms-transition","ie"]:"OTransition"in T?["otransitionend","-o-transition","opera"]:"transition"in T?["transitionend","transition",null]:null,za,m,W=0,Ia,sa,Sa,Ta,jb,p,t,h,oa,Z,ja,pa,u,gb,J,Oa=/,/g,D=/[A-Z]/g,Rb=/ cj-tween/g,v=/^\s+|\s+$/g,xb=
/{props}/,Xa=/{easing}/,K=/{duration}/,Pa=/(right|bottom|center)/,Ib=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/,tb=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/,z={ios:!1,android:!1,winMobile:!1,firefox:!1,chrome:!1,safari:!1,opera:!1,ie:!1},ob=xa[0],xa=xa[1],A=0!==xa&&9>xa;if(!Y||!ga)Y=ga=null;if(V){var U=V[1],f=document.createElement("style");m="WebkitTransform"in T?"WebkitTransform":"MozTransform"in T?"MozTransform":"msTransform"in T?"msTransform":"OTransform"in T?"OTransform":"transform"in
T?"transform":null;pa=R();f.type="text/css";f.innerHTML=".cj-tween{"+U+"-property:none !important;}";document.getElementsByTagName("head")[0].appendChild(f);Ia=U+"-property:{props};"+U+"-duration:{duration}s;"+U+"-timing-function:cubic-bezier({easing});";sa=!pa?V[2]:pa;J=/(chrome|opera)/.test(sa);V=V[0];l()}if(A)if(8===xa)ja=/(#|rgb|red|blue|green|black|white|yellow|pink|gray|grey|orange|purple)/,u=/(auto|inherit|rgb|%|#|red|blue|green|black|white|yellow|pink|gray|grey|orange|purple)/,gb={red:"#F00",
blue:"#00F",green:"#0F0",black:"#000",white:"#FFF",yellow:"#FF0",pink:"#FFC0CB",gray:"#808080",grey:"#808080",orange:"#FFA500",purple:"#800080"};else return;else ja=/(#|rgb)/,u=/(auto|inherit|rgb|%|#)/;Array.prototype.indexOf||(Array.prototype.indexOf=function(a){for(var b=this.length;b--;)if(this[b]===a)return b;return-1});Date.now||(Date.now=function(){return+new Date});this.Jacked={ready:function(a){window.onload=a},setEngines:function(a){for(var b in a)z.hasOwnProperty(b)&&(z[b]=a[b]);l()},tween:function(a,
b,d){a.cj&&a.cj.stop();d||(d={});d.mode?"timeline"===d.mode||!V?new CJ(a,b,d):new CJcss(a,b,d):!V||!Sa?new CJ(a,b,d):new CJcss(a,b,d)},fadeIn:function(a,b){b||(b={});b.fadeIn=!0;Jacked.tween(a,{opacity:1},b)},fadeOut:function(a,b){b||(b={});b.fadeOut=!0;Jacked.tween(a,{opacity:0},b)},percentage:function(a,b,d){a.cj&&a.cj.stop();if("from"in b&&"to"in b){d||(d={});var c=d.mode;c?"css3"===c&&V?X(a,b,d):new CJpercentage(a,b,d):V&&Sa?X(a,b,d):new CJpercentage(a,b,d)}},special:function(a,b){a.cj&&a.cj.stop();
new CJspecial(a,b)},transform:function(a,b,d,c){a.cj&&a.cj.stop();V&&m?(d||(d={}),d.mode="css3","transform"in b&&(b[m]=b.transform,delete b.transform),new Jacked.tween(a,b,d)):c&&new Jacked.tween(a,c,d)},stopTween:function(a,b,d){(a=a.cj)&&(a.isCSS?a.stop(d):a.stop(b,d))},stopAll:function(a){ga?ga(c):clearInterval(jb);var b=Q.length,d;for(W=0;b--;)d=Q[b],d.isCSS?d.stop(!1,!0):d.stop(a,!1,!0,!0);Q=[];za=!1;p=null},setEase:function(a){var b=a.toLowerCase().split(".");2>b.length||La[b[0]]&&La[b[0]][b[1]]&&
(Ra=a)},setDuration:function(a){isNaN(a)||(ya=a)},getMobile:function(){return pa},getIE:function(){return A},getBrowser:function(){return sa},getTransition:function(){return V},getEngine:function(){return za},getTransform:function(){return m}};this.CJ=function(a,b,d){W=Q.length;var e=a.cj=Q[W++]=this;this.runner=function(r){e.obj=a;e.complete=d.callback;e.completeParams=d.callbackParams;if(!0===r)e.transitions=[];else{var f;r=0;var x=[],g=a.style,h=d.duration||ya,k=(d.ease||Ra).toLowerCase().split("."),
k=La[k[0]][k[1]];g.visibility="visible";d.fadeIn&&(g.display=d.display||"block",g.opacity=0);A&&"opacity"in b&&(g.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+(d.fadeIn?0:100)+")");b.borderColor&&!J&&(g=b.borderColor,b.borderTopColor=g,b.borderRightColor=g,b.borderBottomColor=g,b.borderLeftColor=g,delete b.borderColor);for(f in b)b.hasOwnProperty(f)&&("backgroundPosition"!==f?x[r++]=e.animate(a,f,b[f],h,k):x[r++]=e.bgPosition(a,f,b[f],h,k));e.transitions=x;za?setTimeout(s,10):c()}};d.fadeOut?
a.cjFadeOut=!0:d.fadeIn&&(a.cjFadeIn=!0);0===d.duration?(this.runner(!0),this.stop()):d.delay?this.delayed=setTimeout(this.runner,d.delay):this.runner()};CJ.prototype.cycle=function(){p=this.transitions;if(!p)return!0;oa=p.length;for(Ta=!1;oa--;)p[oa]()&&(Ta=!0);return Ta};CJ.prototype.animate=function(a,b,d,c,r){function f(){s=Date.now();y+=s-m;g=r(y,p,v,c);m=s;g=!ea||A?Ma?g+0.5|0:g-0.5|0:g.toFixed(2);if(g===L)return!0;if(Ma){if(g>=d)return h[b]=t,!1}else if(g<=d)return h[b]=t,!1;L=g;h[b]=g+l;return!0}
function x(){return!1}var g,h,n,ea="opacity"===b,q=!0;!ea||!A?(h=a.style,n=h[b],g=""!==n?n:k?k(a,null)[b]:a.currentStyle[b]):(h=a.filters.item("DXImageTransform.Microsoft.Alpha"),b="Opacity",g=h[b],d*=100);if(u.test(g))if(ja.test(g)){if(-1===d.search("rgb"))return A&&g in gb&&(g=gb[g]),this.color(a,b,g,d,c,r);q=!1}else g=0;else g=parseFloat(g);var l=!ea?"px":0,v=d-g,Ma=g<d,m=Date.now(),p=g,y=0,t,L,s;t=d+l;!ea||A?Ma?d-=0.25:d+=0.25:Ma?d-=0.025:d+=0.025;if(q)return f.stored=[b,t],f;x.stored=[b,t];return x};
CJ.prototype.color=function(a,b,d,c,r,f){function h(){v=Date.now();t+=v-n;n=v;d=f(t,0,1,r);if(0.99>d){m=-1;for(u="rgb(";3>++m;)p=q[m],u+=p+d*(l[m]-p)|0,2>m&&(u+=",");ea[b]=u+")";return!0}ea[b]=k;return!1}function g(){return!1}var k=(-1!==c.search("#")?"":"#")+c,n=Date.now(),ea=a.style;a=!1;var q=[],l=[],t=0,m=-1,v,p,u;if(-1!==d.search("rgb")){m=-1;for(q=d.split("(")[1].split(")")[0].split(",");3>++m;)q[m]=parseInt(q[m],10)}else q=y(d);l=y(c);for(m=-1;3>++m;)q[m]!==l[m]&&(a=!0);if(a)return h.stored=
[b,k],h;g.stored=[b,k];return g};CJ.prototype.bgPosition=function(a,b,d,c,r){function f(){K=Date.now();l+=K-m;m=K;D=r(l,0,1,c);if(0.99>D){s&&(I=O+E*D+0.5|0);L&&(z=G+J*D+0.5|0);if(I===p&&z===y)return!0;p=I;y=z;q?(g.backgroundPositionX=I+"px",g.backgroundPositionY=z+"px"):g.backgroundPosition=I+"px "+z+"px";return!0}q?(g.backgroundPositionX=u,g.backgroundPositionY=t):g[b]=v;return!1}function h(){return!1}var g=a.style,n=g[b],m=Date.now(),ea=!0,q=A,l=0,u,t,v,p,y,s,L,E,J,D,K,I,z,O,G;if(q){O=a.currentStyle.backgroundPositionX;
G=a.currentStyle.backgroundPositionY;if(Pa.test(O)||Pa.test(G))ea=!1;"left"===O&&(O=0);"top"===G&&(G=0)}else D=""!==n?n.split(" "):k(a,null).backgroundPosition.split(" "),O=D[0],G=D[1];-1!==O.search("%")&&"0%"!==O&&(ea=!1);-1!==G.search("%")&&"0%"!==G&&(ea=!1);O=parseInt(O,10);G=parseInt(G,10);d.hasOwnProperty("x")?(I=d.x,s=!0):(I=O,s=!1);d.hasOwnProperty("y")?(z=d.y,L=!0):(z=G,L=!1);s=s&&O!==I;L=L&&G!==z;!s&&!L&&(ea=!1);E=I-O;J=z-G;u=I+"px";t=z+"px";v=!q?u+" "+t:[u,t];if(ea)return f.stored=[b,v],
f;h.stored=[b,v];return h};CJ.prototype.stop=function(a,b,d){var c=this.obj;if(c){delete c.cj;if(a){a=this.transitions;for(var f=a.length,h,k;f--;)if(h=a[f].stored,k=h[0],A)switch(k){case "Opacity":c.filters.item("DXImageTransform.Microsoft.Alpha").Opacity=100*h[1];break;case "backgroundPosition":k=c.style;k.backgroundPositionX=h[1][0];k.backgroundPositionY=h[1][1];break;default:c.style[k]=h[1]}else c.style[k]=h[1]}E(c);b&&(b=this.complete);d||n(this,c,b,this.completeParams)}else clearTimeout(this.delayed),
this.runner(!0),this.stop(a,b)};this.CJcss=function(a,b,d){W=Q.length;var c=a.cj=Q[W++]=this,f=a.style,h=m in b;this.isCSS=!0;this.storage=a;this.complete=d.callback;this.completeParams=d.callbackParams;this.runner=function(){d.cssStep?(f.visibility="visible",c.stepped=setTimeout(c.step,30)):c.step()};this.step=function(x){c.obj=a;if(!0===x)c.moves="";else{var g,n,m,l,q,t=0,p;p=[];var s=[];x=a.getAttribute("style")||"";var L=d.duration||ya,y=(d.ease||Ra).toLowerCase().split(".");for(n in b)if(b.hasOwnProperty(n)){m=
n;if(q=m.match(D))for(g=q.length;g--;)l=q[g],m=m.replace(RegExp(l,"g"),"-"+l.toLowerCase());l=g=b[n];q="backgroundPosition"===n;if(!u.test(l)&&"opacity"!==n&&!q&&!h)l+="px;";else if(q){l=g.x;g=g.y;q=isNaN(l);var z=isNaN(g);if(!q&&!z)l+="px",g+="px";else{var A=f.backgroundPosition,A=""!==A?A.split(" "):k(a,null).backgroundPosition.split(" ");!q?l+="px":l=A[0];!z?g+="px":g=A[1]}l=l+" "+g+";"}else l+=";";p[t]=m+":"+l;s[t++]=m;if(x&&(q=x.search(m),-1!==q)){m=x.length-1;for(g=q-1;++g<m&&";"!==x[g];);x=
x.split(x.substring(q,g+1)).join("")}}c.moves=n=Ia.replace(xb,s.toString()).replace(K,(0.0010*L).toFixed(2)).replace(Xa,Pb[y[0]][y[1]]);p=p.toString();h||(p=p.replace(Oa,""));a.className=a.className.replace(Rb,"");a.addEventListener(V,Ba,!1);a.setAttribute("style",x.replace(v,"")+n+p)}};d.fadeIn?(a.cjFadeIn=!0,f.display=d.display||"block",f.opacity=0):d.fadeOut&&(a.cjFadeOut=!0);0===d.duration?(this.runner(!0),this.stop()):(d.cssStep||(f.visibility="visible"),this.delayed=d.delay?setTimeout(this.runner,
30<d.delay?d.delay:30):setTimeout(this.runner,30))};CJcss.prototype.stop=function(a,b){var d=this.obj;a&&(a=this.complete);d?(delete d.cj,d.removeEventListener(V,Ba,!1),d.className+=" cj-tween",d.setAttribute("style",d.getAttribute("style").split(this.moves).join(";").split(";;").join(";")),E(d)):(clearTimeout(this.delayed),clearTimeout(this.stepped),E(this.storage));b||n(this,d,a,this.completeParams)};this.CJpercentage=function(a,b,d){W=Q.length;var e=a.cj=Q[W++]=this;this.obj=a;this.complete=d.callback;
this.completeParams=d.callbackParams;this.runner=function(){var f=0,h=[],k,g,l,n=b.to,m=b.from,q=d.duration||ya,p=(d.ease||Ra).toLowerCase().split("."),p=La[p[0]][p[1]];for(k in m)m.hasOwnProperty(k)&&(l=parseInt(n[k],10),g=parseInt(m[k],10),h[f++]=[l>g,k,l,g]);a.style.visibility="visible";e.transitions=e.animate(a,h,q,p);za?setTimeout(s,10):c()};0===d.duration?this.stop():d.delay?this.delayed=setTimeout(this.runner,d.delay):this.runner()};CJpercentage.prototype.cycle=function(){return this.transitions()};
CJpercentage.prototype.animate=function(a,b,d,c){var f,h=0,k=Date.now(),g,l,m=a.style,n=b.length,q,p;return function(a){g=Date.now();h+=g-k;k=g;f=c(h,0,1,d);l=n;if(0.99>f&&!a){for(;l--;)q=b[l],p=q[3],m[q[1]]=q[0]?p+(q[2]-p)*f+"%":p-(p-q[2])*f+"%";return!0}for(;l--;)q=b[l],m[q[1]]=q[2]+"%";return!1}};CJpercentage.prototype.stop=function(a,b,d){"delayed"in this&&clearTimeout(this.delayed);var c=this.obj;delete c.cj;a&&this.transitions&&this.transitions(!0);b&&(b=this.complete);d||n(this,c,b,this.completeParams)};
this.CJspecial=function(a,b){if(b&&b.callback){W=Q.length;Q[W++]=a.cj=this;var d=this.complete=b.callback,e=b.ease||Ra,e=e.toLowerCase().split("."),e=La[e[0]][e[1]];this.obj=a;this.transitions=this.numbers(a,b.duration||ya,e,d);za?setTimeout(s,10):c()}};CJspecial.prototype.cycle=function(){return this.transitions()};CJspecial.prototype.numbers=function(a,b,d,c){var f,h=0,k=Date.now(),g;return function(){g=Date.now();h+=g-k;k=g;f=d(h,0,1,b);return 0.97>f?(c(a,f),!0):!1}};CJspecial.prototype.stop=function(a,
b,d,c){var f=this.obj;f&&(delete f.cj,d||n(this),(a||c)&&this.complete(f,1,b))};var La={linear:{easenone:function(a,b,d,c){return d*a/c+b},easein:function(a,b,d,c){return d*a/c+b},easeout:function(a,b,d,c){return d*a/c+b},easeinout:function(a,b,d,c){return d*a/c+b}},quint:{easeout:function(a,b,d,c){return d*((a=a/c-1)*a*a*a*a+1)+b},easein:function(a,b,d,c){return d*(a/=c)*a*a*a*a+b},easeinout:function(a,b,d,c){return 1>(a/=c/2)?d/2*a*a*a*a*a+b:d/2*((a-=2)*a*a*a*a+2)+b}},quad:{easein:function(a,b,
c,e){return c*(a/=e)*a+b},easeout:function(a,b,c,e){return-c*(a/=e)*(a-2)+b},easeinout:function(a,b,c,e){return 1>(a/=e/2)?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b}},quart:{easein:function(a,b,c,e){return c*(a/=e)*a*a*a+b},easeout:function(a,b,c,e){return-c*((a=a/e-1)*a*a*a-1)+b},easeinout:function(a,b,c,e){return 1>(a/=e/2)?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b}},cubic:{easein:function(a,b,c,e){return c*(a/=e)*a*a+b},easeout:function(a,b,c,e){return c*((a=a/e-1)*a*a+1)+b},easeinout:function(a,b,c,e){return 1>
(a/=e/2)?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b}},circ:{easein:function(a,b,c,e){return-c*(Math.sqrt(1-(a/=e)*a)-1)+b},easeout:function(a,b,c,e){return c*Math.sqrt(1-(a=a/e-1)*a)+b},easeinout:function(a,b,c,e){return 1>(a/=e/2)?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b}},sine:{easein:function(a,b,c,e){return-c*Math.cos(a/e*(Math.PI/2))+c+b},easeout:function(a,b,c,e){return c*Math.sin(a/e*(Math.PI/2))+b},easeinout:function(a,b,c,e){return-c/2*(Math.cos(Math.PI*a/e)-1)+b}},expo:{easein:function(a,
b,c,e){return 0===a?b:c*Math.pow(2,10*(a/e-1))+b},easeout:function(a,b,c,e){return a===e?b+c:c*(-Math.pow(2,-10*a/e)+1)+b},easeinout:function(a,b,c,e){return 0===a?b:a===e?b+c:1>(a/=e/2)?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b}}},Pb={linear:{easenone:"0.250, 0.250, 0.750, 0.750",easein:"0.420, 0.000, 1.000, 1.000",easeout:"0.000, 0.000, 0.580, 1.000",easeinout:"0.420, 0.000, 0.580, 1.000"},quint:{easein:"0.755, 0.050, 0.855, 0.060",easeout:"0.230, 1.000, 0.320, 1.000",easeinout:"0.860, 0.000, 0.070, 1.000"},
quad:{easein:"0.550, 0.085, 0.680, 0.530",easeout:"0.250, 0.460, 0.450, 0.940",easeinout:"0.455, 0.030, 0.515, 0.955"},quart:{easein:"0.895, 0.030, 0.685, 0.220",easeout:"0.165, 0.840, 0.440, 1.000",easeinout:"0.770, 0.000, 0.175, 1.000"},cubic:{easein:"0.550, 0.055, 0.675, 0.190",easeout:"0.215, 0.610, 0.355, 1.000",easeinout:"0.645, 0.045, 0.355, 1.000"},circ:{easein:"0.600, 0.040, 0.980, 0.335",easeout:"0.075, 0.820, 0.165, 1.000",easeinout:"0.785, 0.135, 0.150, 0.860"},sine:{easein:"0.470, 0.000, 0.745, 0.715",
easeout:"0.390, 0.575, 0.565, 1.000",easeinout:"0.445, 0.050, 0.550, 0.950"},expo:{easein:"0.950, 0.050, 0.795, 0.035",easeout:"0.190, 1.000, 0.220, 1.000",easeinout:"1.000, 0.000, 0.000, 1.000"}},xa=T=null})(window);
(function(c){c.address=function(){var E=function(a){a=c.extend(c.Event(a),function(){for(var a={},d=c.address.parameterNames(),e=0,f=d.length;e<f;e++)a[d[e]]=c.address.parameter(d[e]);return{value:c.address.value(),path:c.address.path(),pathNames:c.address.pathNames(),parameterNames:d,parameters:a,queryString:c.address.queryString()}}.call(c.address));c(c.address).trigger(a);return a},s=function(a){return Array.prototype.slice.call(a)},n=function(a,b,d){c().bind.apply(c(c.address),Array.prototype.slice.call(arguments));
return c.address},Ba=function(a,b){c().unbind.apply(c(c.address),Array.prototype.slice.call(arguments));return c.address},X=function(){return Oa.pushState&&h.state!==m},L=function(){return("/"+D.pathname.replace(RegExp(h.state),"")+D.search+(y()?"#"+y():"")).replace(xb,"/")},y=function(){var a=D.href.indexOf("#");return-1!=a?k(D.href.substr(a+1),t):""},l=function(){return X()?L():y()},R=function(a){a=a.toString();return(h.strict&&"/"!=a.substr(0,1)?"/":"")+a},k=function(a,b){return h.crawlable&&b?
(""!==a?"!":"")+a:a.replace(/^\!/,"")},Y=function(a,b){return parseInt(a.css(b),10)},ga=function(){if(!z){var a=l();decodeURI(f)!=decodeURI(a)&&(ja&&7>Z?D.reload():(ja&&(!Xa&&h.history)&&v(ya,50),_old=f,f=a,T(t)))}},T=function(a){var b=E(Sa);a=E(a?Ta:jb);v(Ra,10);(b.isDefaultPrevented()||a.isDefaultPrevented())&&ra()},ra=function(){f=_old;X()?Oa.popState({},"",h.state.replace(/\/$/,"")+(""===f?"/":f)):(z=p,pa?h.history?D.hash="#"+k(f,p):D.replace("#"+k(f,p)):f!=l()&&(h.history?D.hash="#"+k(f,p):D.replace("#"+
k(f,p))),ja&&!Xa&&h.history&&v(ya,50),pa?v(function(){z=t},1):z=t)},Ra=function(){if("null"!==h.tracker&&h.tracker!==W){var a=c.isFunction(h.tracker)?h.tracker:u[h.tracker],b=(D.pathname+D.search+(c.address&&!X()?c.address.value():"")).replace(/\/\//,"/").replace(/^\/$/,"");c.isFunction(a)?a(b):c.isFunction(u.urchinTracker)?u.urchinTracker(b):u.pageTracker!==m&&c.isFunction(u.pageTracker._trackPageview)?u.pageTracker._trackPageview(b):u._gaq!==m&&c.isFunction(u._gaq.push)&&u._gaq.push(["_trackPageview",
decodeURI(b)])}},ya=function(){var a="javascript:"+t+";document.open();document.writeln('<html><head><title>"+J.title.replace(/\'/g,"\\'")+"</title><script>var "+Ia+' = "'+encodeURIComponent(l()).replace(/\'/g,"\\'")+(J.domain!=D.hostname?'";document.domain="'+J.domain:"")+"\";\x3c/script></head></html>');document.close();";7>Z?K.src=a:K.contentWindow.location.replace(a)},xa=function(){if(Pa&&-1!=Ib){var a,b,c=Pa.substr(Ib+1).split("&");for(a=0;a<c.length;a++)b=c[a].split("="),/^(autoUpdate|crawlable|history|strict|wrap)$/.test(b[0])&&
(h[b[0]]=isNaN(b[1])?/^(true|yes)$/i.test(b[1]):0!==parseInt(b[1],10)),/^(state|tracker)$/.test(b[0])&&(h[b[0]]=b[1]);Pa=W}_old=f;f=l()},Q=function(){if(!ob){ob=p;xa();var a=function(){V.call(this);za.call(this)},b=c("body").ajaxComplete(a);a();h.wrap&&(c("body > *").wrapAll('<div style="padding:'+(Y(b,"marginTop")+Y(b,"paddingTop"))+"px "+(Y(b,"marginRight")+Y(b,"paddingRight"))+"px "+(Y(b,"marginBottom")+Y(b,"paddingBottom"))+"px "+(Y(b,"marginLeft")+Y(b,"paddingLeft"))+'px;" />').parent().wrap('<div id="'+
Ia+'" style="height:100%;overflow:auto;position:relative;'+(pa&&!window.statusbar.visible?"resize:both;":"")+'" />'),c("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"}),pa&&c('<style type="text/css" />').appendTo("head").text("#"+Ia+"::-webkit-resizer { background-color: #fff; }"));ja&&!Xa&&(a=J.getElementsByTagName("frameset")[0],K=J.createElement((a?"":"i")+"frame"),K.src="javascript:"+t,a?(a.insertAdjacentElement("beforeEnd",K),a[a.cols?"cols":"rows"]+=",0",K.noResize=p,K.frameBorder=
K.frameSpacing=0):(K.style.display="none",K.style.width=K.style.height=0,K.tabIndex=-1,J.body.insertAdjacentElement("afterBegin",K)),v(function(){c(K).bind("load",function(){var a=K.contentWindow;_old=f;f=a[Ia]!==m?a[Ia]:"";f!=l()&&(T(t),D.hash=k(f,p))});K.contentWindow[Ia]===m&&ya()},50));v(function(){E("init");T(t)},1);X()||(ja&&7<Z||!ja&&Xa?u.addEventListener?u.addEventListener(sa,ga,t):u.attachEvent&&u.attachEvent("on"+sa,ga):Rb(ga,50));"state"in window.history&&c(window).trigger("popstate")}},
V=function(){var a,b=c("a"),d=b.size(),e=-1,f=function(){++e!=d&&(a=c(b.get(e)),a.is('[rel*="address:"]')&&a.address('[rel*="address:"]'),v(f,1))};v(f,1)},za=function(){if(h.crawlable){var a=D.pathname.replace(/\/$/,"");-1!=c("body").html().indexOf("_escaped_fragment_")&&c('a[href]:not([href^=http]), a[href*="'+document.domain+'"]').each(function(){var b=c(this).attr("href").replace(/^http:/,"").replace(RegExp(a+"/?$"),"");(""===b||-1!=b.indexOf("_escaped_fragment_"))&&c(this).attr("href","#"+encodeURI(decodeURIComponent(b.replace(/\/(.*)\?_escaped_fragment_=(.*)$/,
"!$2"))))})}},m,W=null,Ia="jQueryAddress",sa="hashchange",Sa="change",Ta="internalChange",jb="externalChange",p=!0,t=!1,h={autoUpdate:p,crawlable:t,history:p,strict:p,wrap:t},oa=c.browser,Z=parseFloat(oa.version),ja=!c.support.opacity,pa=oa.webkit||oa.safari,u;try{u=top.document!==m&&top.document.title!==m?top:window}catch(gb){u=window}var J=u.document,Oa=u.history,D=u.location,Rb=setInterval,v=setTimeout,xb=/\/{2,9}/g,oa=navigator.userAgent,Xa="on"+sa in u,K,Pa=c("script:last").attr("src"),Ib=Pa?
Pa.indexOf("?"):-1,tb=J.title,z=t,ob=t,A=p,U=t,f=l();_old=f;if(ja){Z=parseFloat(oa.substr(oa.indexOf("MSIE")+4));J.documentMode&&J.documentMode!=Z&&(Z=8!=J.documentMode?7:8);var La=J.onpropertychange;J.onpropertychange=function(){La&&La.call(J);J.title!=tb&&-1!=J.title.indexOf("#"+l())&&(J.title=tb)}}Oa.navigationMode&&(Oa.navigationMode="compatible");if("complete"==document.readyState)var Pb=setInterval(function(){c.address&&(Q(),clearInterval(Pb))},50);else xa(),c(Q);c(window).bind("popstate",function(){decodeURI(f)!=
decodeURI(l())&&(_old=f,f=l(),T(t))}).bind("unload",function(){u.removeEventListener?u.removeEventListener(sa,ga,t):u.detachEvent&&u.detachEvent("on"+sa,ga)});return{bind:function(a,b,c){return n.apply(this,s(arguments))},unbind:function(a,b){return Ba.apply(this,s(arguments))},init:function(a,b){return n.apply(this,["init"].concat(s(arguments)))},change:function(a,b){return n.apply(this,[Sa].concat(s(arguments)))},internalChange:function(a,b){return n.apply(this,[Ta].concat(s(arguments)))},externalChange:function(a,
b){return n.apply(this,[jb].concat(s(arguments)))},baseURL:function(){var a=D.href;-1!=a.indexOf("#")&&(a=a.substr(0,a.indexOf("#")));/\/$/.test(a)&&(a=a.substr(0,a.length-1));return a},autoUpdate:function(a){return a!==m?(h.autoUpdate=a,this):h.autoUpdate},crawlable:function(a){return a!==m?(h.crawlable=a,this):h.crawlable},history:function(a){return a!==m?(h.history=a,this):h.history},state:function(a){if(a!==m){h.state=a;var b=L();h.state!==m&&(Oa.pushState?"/#/"==b.substr(0,3)&&D.replace(h.state.replace(/^\/$/,
"")+b.substr(2)):"/"!=b&&b.replace(/^\/#/,"")!=y()&&v(function(){D.replace(h.state.replace(/^\/$/,"")+"/#"+b)},1));return this}return h.state},strict:function(a){return a!==m?(h.strict=a,this):h.strict},tracker:function(a){return a!==m?(h.tracker=a,this):h.tracker},wrap:function(a){return a!==m?(h.wrap=a,this):h.wrap},update:function(){U=p;this.value(f);U=t;return this},title:function(a){return a!==m?(v(function(){tb=J.title=a;A&&(K&&K.contentWindow&&K.contentWindow.document)&&(K.contentWindow.document.title=
a,A=t)},50),this):J.title},value:function(a){if(a!==m){a=R(a);"/"==a&&(a="");if(f==a&&!U)return;_old=f;f=a;if(h.autoUpdate||U)if(T(p),X())Oa[h.history?"pushState":"replaceState"]({},"",h.state.replace(/\/$/,"")+(""===f?"/":f));else z=p,pa?h.history?D.hash="#"+k(f,p):D.replace("#"+k(f,p)):f!=l()&&(h.history?D.hash="#"+k(f,p):D.replace("#"+k(f,p))),ja&&!Xa&&h.history&&v(ya,50),pa?v(function(){z=t},1):z=t;return this}return R(f)},path:function(a){if(a!==m){var b=this.queryString(),c=this.hash();this.value(a+
(b?"?"+b:"")+(c?"#"+c:""));return this}return R(f).split("#")[0].split("?")[0]},pathNames:function(){var a=this.path(),b=a.replace(xb,"/").split("/");("/"==a.substr(0,1)||0===a.length)&&b.splice(0,1);"/"==a.substr(a.length-1,1)&&b.splice(b.length-1,1);return b},queryString:function(a){if(a!==m){var b=this.hash();this.value(this.path()+(a?"?"+a:"")+(b?"#"+b:""));return this}a=f.split("?");return a.slice(1,a.length).join("?").split("#")[0]},parameter:function(a,b,d){var e,f;if(b!==m){var h=this.parameterNames();
f=[];b=b===m||b===W?"":b.toString();for(e=0;e<h.length;e++){var k=h[e],g=this.parameter(k);"string"==typeof g&&(g=[g]);k==a&&(g=b===W||""===b?[]:d?g.concat([b]):[b]);for(var l=0;l<g.length;l++)f.push(k+"="+g[l])}-1==c.inArray(a,h)&&(b!==W&&""!==b)&&f.push(a+"="+b);this.queryString(f.join("&"));return this}if(b=this.queryString()){d=[];f=b.split("&");for(e=0;e<f.length;e++)b=f[e].split("="),b[0]==a&&d.push(b.slice(1).join("="));if(0!==d.length)return 1!=d.length?d:d[0]}},parameterNames:function(){var a=
this.queryString(),b=[];if(a&&-1!=a.indexOf("="))for(var a=a.split("&"),d=0;d<a.length;d++){var e=a[d].split("=")[0];-1==c.inArray(e,b)&&b.push(e)}return b},hash:function(a){if(a!==m)return this.value(f.split("#")[0]+(a?"#"+a:"")),this;a=f.split("#");return a.slice(1,a.length).join("#")}}}();c.fn.address=function(E){var s;"string"==typeof E&&(s=E,E=void 0);c(this).attr("address")||c(s?s:this).live("click",function(n){if(n.shiftKey||n.ctrlKey||n.metaKey||2==n.which)return!0;c(this).is("a")&&(n.preventDefault(),
n=E?E.call(this):/address:/.test(c(this).attr("rel"))?c(this).attr("rel").split("address:")[1].split(" ")[0]:void 0!==c.address.state()&&!/^\/?$/.test(c.address.state())?c(this).attr("href").replace(RegExp("^(.*"+c.address.state()+"|\\.)"),""):c(this).attr("href").replace(/^(#\!?|\.)/,""),c.address.value(n))}).live("submit",function(n){c(this).is("form")&&(n.preventDefault(),n=c(this).attr("action"),n=E?E.call(this):(-1!=n.indexOf("?")?n.replace(/&$/,""):n+"?")+c(this).serialize(),c.address.value(n))}).attr("address",
!0);return this}})(jQuery);
(function(c){function E(s){if("string"===typeof s.data){var n=s.handler,E=s.data.toLowerCase().split(" "),X="text password number email url range date month week time datetime datetime-local search color".split(" ");s.handler=function(s){if(!(this!==s.target&&(/textarea|select/i.test(s.target.nodeName)||-1<c.inArray(s.target.type,X)))){var y="keypress"!==s.type&&c.hotkeys.specialKeys[s.which],l=String.fromCharCode(s.which).toLowerCase(),R="",k={};s.altKey&&"alt"!==y&&(R+="alt+");s.ctrlKey&&"ctrl"!==
y&&(R+="ctrl+");s.metaKey&&(!s.ctrlKey&&"meta"!==y)&&(R+="meta+");s.shiftKey&&"shift"!==y&&(R+="shift+");y?k[R+y]=!0:(k[R+l]=!0,k[R+c.hotkeys.shiftNums[l]]=!0,"shift+"===R&&(k[c.hotkeys.shiftNums[l]]=!0));y=0;for(l=E.length;y<l;y++)if(k[E[y]])return n.apply(this,arguments)}}}}c.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",
45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}};c.each(["keydown","keyup","keypress"],function(){c.event.special[this]=
{add:E}})})(jQuery);



/*===============================
/components/com_rsform/assets/js/script.js
================================================================================*/;
var RSFormProCalendars={};var RSFormProPrices={};if(typeof RSFormPro!='object'){var RSFormPro={};}
var RSFormProUtils={hasClass:function(el,name){return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className);},addClass:function(el,name){if(!RSFormProUtils.hasClass(el,name)){el.className+=(el.className?' ':'')+name;}},removeClass:function(el,name){if(RSFormProUtils.hasClass(el,name)){el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g,'');}}};RSFormPro.Forms={};function isset(){var a=arguments,l=a.length,i=0,undef;if(l===0){throw new Error('Empty isset');}
while(i!==l){if(a[i]===undef||a[i]===null){return false;}
i++;}
return true;}
function refreshCaptcha(componentId,captchaPath)
{if(!captchaPath)captchaPath='index.php?option=com_rsform&task=captcha&componentId='+componentId;document.getElementById('captcha'+componentId).src=captchaPath+'&'+Math.random();document.getElementById('captchaTxt'+componentId).value='';document.getElementById('captchaTxt'+componentId).focus();}
function number_format(number,decimals,dec_point,thousands_sep)
{var n=number,prec=decimals;n=!isFinite(+n)?0:+n;prec=!isFinite(+prec)?0:Math.abs(prec);var sep=(typeof thousands_sep=="undefined")?',':thousands_sep;var dec=(typeof dec_point=="undefined")?'.':dec_point;var s=(prec>0)?n.toFixed(prec):Math.round(n).toFixed(prec);var abs=Math.abs(n).toFixed(prec);var _,i;if(abs>=1000){_=abs.split(/\D/);i=_[0].length%3||3;_[0]=s.slice(0,i+(n<0))+
_[0].slice(i).replace(/(\d{3})/g,sep+'$1');s=_.join(dec);}else{s=s.replace('.',dec);}
return s;}
function buildXmlHttp()
{var xmlHttp;try
{xmlHttp=new XMLHttpRequest();}
catch(e)
{try
{xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");}
catch(e)
{try
{xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}
catch(e)
{alert("Your browser does not support AJAX!");return false;}}}
return xmlHttp;}
function ajaxValidation(form,page)
{try
{var el=form.elements.length;}
catch(err)
{form=this;}
var xmlHttp=buildXmlHttp();var url='';if(typeof rsfp_ajax_root!='undefined')
url=rsfp_ajax_root+'/';url+='index.php?option=com_rsform&task=ajaxValidate';if(page)
url+='&page='+page;var params=new Array();var submits=new Array();var success=false;var formId=0;for(i=0;i<form.elements.length;i++)
{if(!form.elements[i].name)continue;if(form.elements[i].name.length==0)continue;if(form.elements[i].type=='checkbox'&&form.elements[i].checked==false)continue;if(form.elements[i].type=='radio'&&form.elements[i].checked==false)continue;if(form.elements[i].type=='submit')
{submits.push(form.elements[i]);form.elements[i].disabled=true;}
if(form.elements[i].type=='select-multiple')
{for(var j=0;j<form.elements[i].options.length;j++)
if(form.elements[i].options[j].selected)
params.push(form.elements[i].name+'='+encodeURIComponent(form.elements[i].options[j].value));continue;}
if(form.elements[i].name=='form[formId]')
formId=form.elements[i].value;params.push(form.elements[i].name+'='+encodeURIComponent(form.elements[i].value));}
if(typeof ajaxExtraValidationScript[formId]=='function'){ajaxExtraValidationScript[formId]('beforeSend',formId,{'url':url,'params':params});}
params=params.join('&');xmlHttp.open("POST",url,false);xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlHttp.send(params);var success=true;if(xmlHttp.responseText.indexOf("\n")!=-1)
{var response=xmlHttp.responseText.split("\n");var ids=response[0].split(',');for(var i=0;i<ids.length;i++)
if(!isNaN(parseInt(ids[i]))&&document.getElementById('component'+ids[i]))
document.getElementById('component'+ids[i]).className='formNoError';var ids=response[1].split(',');for(var i=0;i<ids.length;i++)
if(!isNaN(parseInt(ids[i]))&&document.getElementById('component'+ids[i]))
{document.getElementById('component'+ids[i]).className='formError';success=false;}
if(response.length==4)
{page=parseInt(response[2])-1;totalPages=parseInt(response[3]);rsfp_changePage(formId,page,totalPages,false);}
if(typeof ajaxExtraValidationScript[formId]=='function'){ajaxExtraValidationScript[formId]('afterSend',formId,{'url':url,'params':params,'response':response});}}
for(var i=0;i<submits.length;i++)
submits[i].disabled=false;if(success==false&&document.getElementById('rsform_error_'+formId))
{try{document.getElementById('rsform_error_'+formId).style.display='block';}
catch(err){}}
if(success==true){try{document.getElementById('rsform_error_'+formId).style.display='none';}
catch(err){}}
return success;}
var ajaxExtraValidationScript={};function rsfp_addEvent(obj,evType,fn){if(obj.addEventListener){obj.addEventListener(evType,fn,false);return true;}else if(obj.attachEvent){var r=obj.attachEvent("on"+evType,fn);return r;}else{return false;}}
function rsfp_getForm(formId)
{if(typeof RSFormPro.Forms[formId]=='undefined'){var formIds=document.getElementsByName('form[formId]');for(var i=0;i<formIds.length;i++)
{if(parseInt(formIds[i].value)!=parseInt(formId))
continue;var form=formIds[i].parentNode;if(form.tagName=='FORM'||form.nodeName=='FORM'){RSFormPro.Forms[formId]=form;return form;}
while(form.parentNode)
{form=form.parentNode;if(form.tagName=='FORM'||form.nodeName=='FORM'){RSFormPro.Forms[formId]=form;return form;}}}}
return RSFormPro.Forms[formId];}
function rsfp_setCalculationsEvents(formId,fields){var func=window["rsfp_Calculations"+formId];var thefields=fields?fields:RSFormProPrices;var isIE8=navigator.userAgent.match(/MSIE 8\.0/);var event='click';for(field in thefields){field=field.replace(formId+'_','');objects=rsfp_getFieldsByName(formId,field);for(i=0;i<objects.length;i++){tagName=objects[i].tagName||objects[i].nodeName;if(tagName=='INPUT'||tagName=='SELECT'){if(tagName=='INPUT'&&isIE8&&objects[i].type&&objects[i].type.toLowerCase()=='checkbox'){event='click';}else{event='change';}
rsfp_addEvent(objects[i],event,function(){if(typeof func=="function"){func();}});}}}}
function rsfp_getValue(formId,name){form=rsfp_getForm(formId);values=[];if(typeof form!='undefined')
{for(var i=0;i<form.elements.length;i++)
{var element=form.elements[i];var tagName=element.tagName||element.nodeName;switch(tagName)
{case'INPUT':if(element.type)
switch(element.type.toUpperCase())
{case'TEXT':case'HIDDEN':if(!element.name||element.name!='form['+name+']')continue;return element.value;break;case'RADIO':if(!element.name||element.name!='form['+name+']')continue;if(element.checked==true){values.push(element.value);}
break;case'CHECKBOX':if(!element.name||element.name!='form['+name+'][]')continue;if(element.checked==true){values.push(element.value);}
break;}
break;case'SELECT':if(!element.name||element.name!='form['+name+'][]')continue;if(element.options)
for(var o=0;o<element.options.length;o++)
if(element.options[o].selected)
{values.push(element.options[o].value);}
break;}}}
return values;}
function rsfp_toNumber(number,decimal,thousands){if(number.indexOf(thousands)>-1){number=number.split(thousands).join('');}
if(number.indexOf(decimal)>-1){number=parseFloat(number.split(decimal).join('.'));}
return parseFloat(number);}
function rsfp_verifyChecked(formId,name,value){isChecked=false;form=rsfp_getForm(formId);if(typeof form!='undefined')
{primary_loop:for(var i=0;i<form.elements.length;i++)
{var element=form.elements[i];var tagName=element.tagName||element.nodeName;switch(tagName)
{case'INPUT':if(element.type)
switch(element.type.toUpperCase())
{case'RADIO':if(!element.name||element.name!='form['+name+']')continue;if(element.checked==true&&element.value==value)
{isChecked=true;break primary_loop;}
break;case'CHECKBOX':if(!element.name||element.name!='form['+name+'][]')continue;if(element.checked==true&&element.value==value)
{isChecked=true;break primary_loop;}
break;}
break;case'SELECT':if(!element.name||element.name!='form['+name+'][]')continue;if(element.options)
for(var o=0;o<element.options.length;o++)
if(element.options[o].selected&&element.options[o].value==value)
{isChecked=true;break primary_loop;}
break;}}}
return isChecked;}
function rsfp_addCondition(formId,name,fnCondition){form=rsfp_getForm(formId);if(typeof form!='undefined'){for(var i=0;i<form.elements.length;i++){var element=form.elements[i];var tagName=element.tagName||element.nodeName;if(element.name&&(element.name=='form['+name+']'||element.name=='form['+name+'][]')){if(tagName=='SELECT'){rsfp_addEvent(element,'change',function(){fnCondition();});}else{rsfp_addEvent(element,'click',function(){fnCondition();});}}}}}
function rsfp_getBlock(formId,block){form=rsfp_getForm(formId);var possible=false;if(typeof form!='undefined'){if(blocks=getElementsByClassName('rsform-block')){for(i=0;i<blocks.length;i++){var classes=blocks[i].className.split(' ');for(c=0;c<classes.length;c++){if(classes[c]=='rsform-block-'+block){if(blocks[i].parentNode){current_block=blocks[i];if(current_block==form)
return[blocks[i]];while(current_block.parentNode){current_block=current_block.parentNode;if(current_block==form)
return[blocks[i]];}}
possible=[blocks[i]];}}}}}
return possible;}
function rsfp_getFieldsByName(formId,name){form=rsfp_getForm(formId);var results=[];if(typeof form!='undefined'){for(var i=0;i<form.elements.length;i++){var element=form.elements[i];pushed=false;if(element.name&&(element.name=='form['+name+']'||element.name=='form['+name+'][]'||element.name=='form['+name+'][d]'||element.name=='form['+name+'][m]'||element.name=='form['+name+'][y]')){results.push(element);pushed=true;}
if(pushed){if(element.id&&element.id.indexOf('txtcal')>-1){var suffix=element.id.replace('txtcal','');results.push(document.getElementById('btn'+suffix));}
var labels=form.getElementsByTagName('label');for(var l=0;l<labels.length;l++){if(labels[l].htmlFor&&labels[l].htmlFor==element.id)
results.push(labels[l]);}}}}
return results;}
function rsfp_setDisplay(items,value){for(i=0;i<items.length;i++)
items[i].style.display=value;}
function rsfp_checkValidDate(fieldName){var theDate=new Date();for(var day=1;day<=31;day++){var year=parseInt(document.getElementById(fieldName+'y').value);var month=parseInt(document.getElementById(fieldName+'m').value)-1;var index=day-1;if(document.getElementById(fieldName+'d').options[0].value==''){index++;}
document.getElementById(fieldName+'d').options[index].disabled=false;if(!isNaN(year)&&!isNaN(month)){if(typeof theDate.__msh_oldSetFullYear=='function'){theDate.__msh_oldSetFullYear(year,month,day);}else{theDate.setFullYear(year,month,day);}
if(theDate.getDate()!=day||theDate.getMonth()!=month){document.getElementById(fieldName+'d').options[index].disabled=true;}}}
if(document.getElementById(fieldName+'d').options[document.getElementById(fieldName+'d').selectedIndex].disabled==true){for(var day=31;day>=28;day--){var index=day-1;if(document.getElementById(fieldName+'d').options[0].value==''){index++;}
if(document.getElementById(fieldName+'d').options[index].disabled==false){document.getElementById(fieldName+'d').value=day;break;}}}}
function rsfp_geolocation(term,id,mapid,map,marker,geocoder,type){var content=document.getElementById('rsform_geolocation'+id);var address=document.getElementById(mapid).clientWidth;document.getElementById('rsform_geolocation'+id).style.width=address+'px';document.getElementById('rsform_geolocation'+id).style.display='none';document.getElementById('rsform_geolocation'+id).innerHTML='';if(term!=''){geocoder.geocode({'address':term},function(results,status){if(status=='OK'){for(var i=0;i<results.length;i++){var item=results[i];var theli=document.createElement('li');var thea=document.createElement('a');thea.setAttribute('href','javascript:void(0)');thea.innerHTML=item.formatted_address;rsfp_addEvent(thea,'click',(function(){var mapValue=type?item.formatted_address:item.geometry.location.lat().toFixed(5)+','+item.geometry.location.lng().toFixed(5);var mapId=mapid;var location=new google.maps.LatLng(item.geometry.location.lat().toFixed(5),item.geometry.location.lng().toFixed(5));return function(){document.getElementById(mapId).value=mapValue;marker.setPosition(location);map.setCenter(location);document.getElementById('rsform_geolocation'+id).style.display='none';}})());theli.appendChild(thea);content.appendChild(theli);}
document.getElementById('rsform_geolocation'+id).style.display='';}});}}
function rsfp_runAllConditions(formId){var func=window["rsfp_runAllConditions"+formId];if(typeof func=="function"){func();}}
var getElementsByClassName=function(className,tag,elm){if(document.getElementsByClassName){getElementsByClassName=function(className,tag,elm){elm=elm||document;var elements=elm.getElementsByClassName(className),nodeName=(tag)?new RegExp("\\b"+tag+"\\b","i"):null,returnElements=[],current;for(var i=0,il=elements.length;i<il;i+=1){current=elements[i];if(!nodeName||nodeName.test(current.nodeName)){returnElements.push(current);}}
return returnElements;};}
else if(document.evaluate){getElementsByClassName=function(className,tag,elm){tag=tag||"*";elm=elm||document;var classes=className.split(" "),classesToCheck="",xhtmlNamespace="http://www.w3.org/1999/xhtml",namespaceResolver=(document.documentElement.namespaceURI===xhtmlNamespace)?xhtmlNamespace:null,returnElements=[],elements,node;for(var j=0,jl=classes.length;j<jl;j+=1){classesToCheck+="[contains(concat(' ', @class, ' '), ' "+classes[j]+" ')]";}
try{elements=document.evaluate(".//"+tag+classesToCheck,elm,namespaceResolver,0,null);}
catch(e){elements=document.evaluate(".//"+tag+classesToCheck,elm,null,0,null);}
while((node=elements.iterateNext())){returnElements.push(node);}
return returnElements;};}
else{getElementsByClassName=function(className,tag,elm){tag=tag||"*";elm=elm||document;var classes=className.split(" "),classesToCheck=[],elements=(tag==="*"&&elm.all)?elm.all:elm.getElementsByTagName(tag),current,returnElements=[],match;for(var k=0,kl=classes.length;k<kl;k+=1){classesToCheck.push(new RegExp("(^|\\s)"+classes[k]+"(\\s|$)"));}
for(var l=0,ll=elements.length;l<ll;l+=1){current=elements[l];match=false;for(var m=0,ml=classesToCheck.length;m<ml;m+=1){match=classesToCheck[m].test(current.className);if(!match){break;}}
if(match){returnElements.push(current);}}
return returnElements;};}
return getElementsByClassName(className,tag,elm);};function rsfp_changePage(formId,page,totalPages,validate)
{if(validate)
{var form=rsfp_getForm(formId);if(!ajaxValidation(form,page))
return false;}
for(var i=0;i<=totalPages;i++)
{var thePage=document.getElementById('rsform_'+formId+'_page_'+i);if(thePage)
rsfp_hidePage(thePage);}
var thePage=document.getElementById('rsform_'+formId+'_page_'+page);if(thePage)
{rsfp_showPage(thePage);try{var func=window["rsfp_showProgress_"+formId];if(typeof func=="function"){func(page);}}
catch(err){}}}
function rsfp_hidePage(thePage){RSFormProUtils.addClass(thePage,'formHidden');}
function rsfp_showPage(thePage){RSFormProUtils.removeClass(thePage,'formHidden');}


/*===============================
/media/modals/js/jquery.colorbox-min.js
================================================================================*/;
/*!
 Colorbox 1.5.14
 license: MIT
 http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(z+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),y.focus())}function c(t){c.str!==t&&(y.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){z=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),z=W.index(_.el),-1===z&&(W=W.add(_.el),z=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),L=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(L),D=T.height()+k.height()+b.outerHeight(!0)-b.height(),j=C.width()+H.width()+b.outerWidth(!0)-b.width(),A=L.outerHeight(!0),N=L.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(l!==!1?Math.min(h,a(l,"x")):h)-N-j,_.h=(f!==!1?Math.min(s,a(f,"y")):s)-A-D,L.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),y.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){y||(V=!1,E=t(i),y=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),S=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),x=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),I=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),R=n("button","Slideshow"),S),B=t('<button type="button"/>').attr({id:Z+"Close"}),x.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(I).add(R)),e.body&&!y.parent().length&&t(e.body).append(v,y.append(x,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return y?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-A-D:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-N-j:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-N-j,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-A-D,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){S.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=new Image,t(U).addClass(Z+"Photo").bind("error",function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;t.each(["alt","longdesc","aria-describedby"],function(e,i){var n=t(_.el).attr(i)||t(_.el).attr("data-"+i);n&&U.setAttribute(i,n)}),_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[z+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,y,x,b,T,C,H,k,W,E,L,M,S,F,I,R,K,P,B,O,_,D,j,A,N,z,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[z+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){R.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),y.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),R.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),y.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,R.hide(),t(),ae.unbind(ne,e).unbind(ie,t),y.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),R.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;if(e=e||{},t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;return o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(y[0].style.width,10)-j+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(y[0].style.height,10)-D+"px"}var r,h,s,l=0,d=0,c=y.offset();if(E.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,y.css({position:"fixed"})):(l=h,d=s,y.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-N-j-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-N-j,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-A-D-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-A-D,0)/2),y.css({top:c.top,left:c.left,visibility:"visible"}),x[0].style.width=x[0].style.height="9999px",r={width:_.w+N+j,height:_.h+A+D,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||y.css(r),y.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,x[0].style.width=_.w+N+j+"px",x[0].style.height=_.h+A+D+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-N-j),t.innerWidth&&(_.w=a(t.innerWidth,"x")),L.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-A-D),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=L.scrollTop(),L.css({height:"auto"}),_.h=L.height()),L.css({height:_.h}),e&&L.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||L.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||L.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");L.remove(),L=n(se,"LoadedContent").append(i),L.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),S.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),L.show(),a>1?("string"==typeof _.get("current")&&I.html(_.get("current").replace("{current}",z+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>z?"show":"hide"]().html(_.get("next")),P[_.get("loop")||z?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=e.createElement("iframe"),"frameBorder"in n&&(n.frameBorder=0),"allowTransparency"in n&&(n.allowTransparency="true"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0}).one("load",o).appendTo(L),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?y.fadeTo(g,1,i):i())},"fade"===_.get("transition")?y.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[z+1])&&(z=h(1),f(W[z]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||z)&&(z=h(-1),f(W[z]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),y.stop().fadeTo(_.get("fadeOut")||0,0,function(){y.hide(),v.hide(),u(he),L.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),v.remove(),G=!1,y=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);


/*===============================
/media/modals/js/script.min.js
================================================================================*/;
/*
 * Copyright © 2014 NoNumber All Rights Reserved
 * License http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
 */
(function($){$(document).ready(function(){if(typeof(window['modal_defaults'])!="undefined"){initModals();}});initModals=function(){$.each($('.'+modal_class),function(i,el){var $el=$(el);var defaults=$.extend({},modal_defaults);$.each(el.attributes,function(index,attr){if(attr.name.indexOf("data-modal-")===0){var key=$.camelCase(attr.name.substring(11));defaults[key]=attr.value;}});if(defaults['innerWidth']!=undefined){delete defaults['width'];}
if(defaults['innerHeight']!=undefined){delete defaults['height'];}if(defaults['delay']!=undefined){if(defaults['open']!=undefined){delete defaults['open'];}else{delete defaults['delay'];}}for(key in defaults){if(defaults[key]=='true'){defaults[key]=true;}else if(defaults[key]=='false'){defaults[key]=false;}else if(!isNaN(defaults[key])){defaults[key]=parseFloat(defaults[key]);}}var onOpen=defaults['onOpen'];defaults['onOpen']=function(){onOpen!='undefined'&&setTimeout(onOpen,1);};var onLoad=defaults['onLoad'];defaults['onLoad']=function(){onLoad!='undefined'&&setTimeout(onLoad,1);};var onCleanup=defaults['onCleanup'];defaults['onCleanup']=function(){onCleanup!='undefined'&&setTimeout(onCleanup,1);};var autocloseTimeout=false;var onComplete=defaults['onComplete'];defaults['onComplete']=function(){onComplete!='undefined'&&setTimeout(onComplete,1);modalsResize();if(defaults['autoclose']!=undefined&&defaults['autoclose']){var time=parseInt(defaults['autoclose']);time=time==1?5000:time;$('#cboxTitle .countdown').animate({width:0,},time,'linear');autocloseTimeout=setTimeout(function(){$el.colorbox.close()},time);}$('#colorbox').addClass('complete');};var onClosed=defaults['onClosed'];defaults['onClosed']=function(){onClosed!='undefined'&&setTimeout(onClosed,1);clearTimeout(autocloseTimeout);$('#colorbox').removeClass('complete');};$el.colorbox(defaults);if(defaults['delay']!=undefined){setTimeout(function(){$el.click();},defaults['delay']);}
if(modal_disable_on_mobile){if($(window).width()<=767){$el.colorbox.remove();if(el.href.match(/([\?&](ml|iframe))=1/g)){el.href=el.href.replace(/([\?&](ml|iframe))=1/g,'$1=0');}}
$(window).resize(function(){if($(window).width()<=767){$el.colorbox.remove();if(el.href.match(/([\?&](ml|iframe))=1/g)){el.href=el.href.replace(/([\?&](ml|iframe))=1/g,'$1=0');}}else{if(el.href.match(/([\?&](ml|iframe))=0/g)){el.href=el.href.replace(/([\?&](ml|iframe))=0/g,'$1=1');}
$el.colorbox(defaults);}});}});};modalsResize=function(){$.each($('#colorbox'),function(i,el){var $el=$(el);var $title=$('#cboxTitle');var $content=$('#cboxLoadedContent');var $title_height=$title.outerHeight()+1;var $margin_top=parseInt($content.css('marginTop'));if($title_height>$margin_top){var $div_height=$title_height-$margin_top;$content.css('marginTop',$title_height);if(parseInt($el.css('top'))<23){$content.css('height',parseInt($content.css('height'))-$div_height);}else{$el.css('height',parseInt($el.css('height'))+$div_height);$el.css('top',parseInt($el.css('top'))-($div_height/2));$('#cboxWrapper').css('height',parseInt($('#cboxWrapper').css('height'))+$div_height);$('#cboxContent').css('height',parseInt($('#cboxContent').css('height'))+$div_height);$('#cboxMiddleLeft').css('height',parseInt($('#cboxMiddleLeft').css('height'))+$div_height);$('#cboxMiddleRight').css('height',parseInt($('#cboxMiddleRight').css('height'))+$div_height);}}});};})(jQuery);


/*===============================
/plugins/system/t3/base-bs3/js/jquery.tap.min.js
================================================================================*/;
!function(a,b){"use strict";var c,d,e,f="._tap",g="._tapActive",h="tap",i="clientX clientY screenX screenY pageX pageY".split(" "),j={count:0,event:0},k=function(a,c){var d=c.originalEvent,e=b.Event(d);e.type=a;for(var f=0,g=i.length;g>f;f++)e[i[f]]=c[i[f]];return e},l=function(a){if(a.isTrigger)return!1;var c=j.event,d=Math.abs(a.pageX-c.pageX),e=Math.abs(a.pageY-c.pageY),f=Math.max(d,e);return a.timeStamp-c.timeStamp<b.tap.TIME_DELTA&&f<b.tap.POSITION_DELTA&&(!c.touches||1===j.count)&&o.isTracking},m=function(a){if(!e)return!1;var c=Math.abs(a.pageX-e.pageX),d=Math.abs(a.pageY-e.pageY),f=Math.max(c,d);return Math.abs(a.timeStamp-e.timeStamp)<750&&f<b.tap.POSITION_DELTA},n=function(a){if(0===a.type.indexOf("touch")){a.touches=a.originalEvent.changedTouches;for(var b=a.touches[0],c=0,d=i.length;d>c;c++)a[i[c]]=b[i[c]]}a.timeStamp=Date.now?Date.now():+new Date},o={isEnabled:!1,isTracking:!1,enable:function(){o.isEnabled||(o.isEnabled=!0,c=b(a.body).on("touchstart"+f,o.onStart).on("mousedown"+f,o.onStart).on("click"+f,o.onClick))},disable:function(){o.isEnabled&&(o.isEnabled=!1,c.off(f))},onStart:function(a){a.isTrigger||(n(a),(!b.tap.LEFT_BUTTON_ONLY||a.touches||1===a.which)&&(a.touches&&(j.count=a.touches.length),o.isTracking||(a.touches||!m(a))&&(o.isTracking=!0,j.event=a,a.touches?(e=a,c.on("touchend"+f+g,o.onEnd).on("touchcancel"+f+g,o.onCancel)):c.on("mouseup"+f+g,o.onEnd))))},onEnd:function(a){var c;a.isTrigger||(n(a),l(a)&&(c=k(h,a),d=c,b(j.event.target).trigger(c)),o.onCancel(a))},onCancel:function(a){a&&"touchcancel"===a.type&&a.preventDefault(),o.isTracking=!1,c.off(g)},onClick:function(a){return!a.isTrigger&&d&&d.isDefaultPrevented()&&d.target===a.target&&d.pageX===a.pageX&&d.pageY===a.pageY&&a.timeStamp-d.timeStamp<750?(d=null,!1):void 0}};b(a).ready(o.enable),b.tap={POSITION_DELTA:10,TIME_DELTA:400,LEFT_BUTTON_ONLY:!0}}(document,jQuery);


/*===============================
/plugins/system/t3/base-bs3/js/script.js
================================================================================*/;
!function($){if($.browser==undefined||$.browser.msie==undefined){$.browser={msie:false,version:0};if(match=navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)||navigator.userAgent.match(/Trident.*rv:([0-9]{1,}[\.0-9]{0,})/)){$.browser.msie=true;$.browser.version=match[1];}}
if($.browser.msie){$('html').addClass('ie'+Math.floor($.browser.version));}
$(document).ready(function(){if(!window.getComputedStyle){window.getComputedStyle=function(el,pseudo){this.el=el;this.getPropertyValue=function(prop){var re=/(\-([a-z]){1})/g;if(prop=='float')prop='styleFloat';if(re.test(prop)){prop=prop.replace(re,function(){return arguments[2].toUpperCase();});}
return el.currentStyle[prop]?el.currentStyle[prop]:null;}
return this;}}
var fromClass='body-data-holder',prop='content',$inspector=$('<div>').css('display','none').addClass(fromClass).appendTo($('body'));try{var computedStyle=window.getComputedStyle($inspector[0],':before');if(computedStyle){var attrs=computedStyle.getPropertyValue(prop);if(attrs){var matches=attrs.match(/([\da-z\-]+)/gi),data={};if(matches&&matches.length){for(var i=0;i<matches.length;i++){data[matches[i++]]=i<matches.length?matches[i]:null;}}
$('body').data(data);}}}finally{$inspector.remove();}});(function(){$.support.t3transform=(function(){var style=document.createElement('div').style,vendors=['t','webkitT','MozT','msT','OT'],transform,i=0,l=vendors.length;for(;i<l;i++){transform=vendors[i]+'ransform';if(transform in style){return transform;}}
return false;})();})();(function(){$('html').addClass('ontouchstart'in window?'touch':'no-touch');})();$(document).ready(function(){(function(){if(window.MooTools&&window.MooTools.More&&Element&&Element.implement){var mthide=Element.prototype.hide,mtshow=Element.prototype.show,mtslide=Element.prototype.slide;Element.implement({show:function(args){if(arguments.callee&&arguments.callee.caller&&arguments.callee.caller.toString().indexOf('isPropagationStopped')!==-1){return this;}
return $.isFunction(mtshow)&&mtshow.apply(this,args);},hide:function(){if(arguments.callee&&arguments.callee.caller&&arguments.callee.caller.toString().indexOf('isPropagationStopped')!==-1){return this;}
return $.isFunction(mthide)&&mthide.apply(this,arguments);},slide:function(args){if(arguments.callee&&arguments.callee.caller&&arguments.callee.caller.toString().indexOf('isPropagationStopped')!==-1){return this;}
return $.isFunction(mtslide)&&mtslide.apply(this,args);}})}})();$.fn.tooltip.Constructor&&$.fn.tooltip.Constructor.DEFAULTS&&($.fn.tooltip.Constructor.DEFAULTS.html=true);$.fn.popover.Constructor&&$.fn.popover.Constructor.DEFAULTS&&($.fn.popover.Constructor.DEFAULTS.html=true);$.fn.tooltip.defaults&&($.fn.tooltip.defaults.html=true);$.fn.popover.defaults&&($.fn.popover.defaults.html=true);(function(){if(window.jomsQuery&&jomsQuery.fn.collapse){$('[data-toggle="collapse"]').on('click',function(e){$($(this).attr('data-target')).eq(0).collapse('toggle');e.stopPropagation();return false;});jomsQuery('html, body').off('touchstart.dropdown.data-api');}})();(function(){if($.fn.chosen&&$(document.documentElement).attr('dir')=='rtl'){$('select').addClass('chzn-rtl');}})();});$(window).load(function(){if(!$(document.documentElement).hasClass('off-canvas-ready')&&($('.navbar-collapse-fixed-top').length||$('.navbar-collapse-fixed-bottom').length)){var btn=$('.btn-navbar[data-toggle="collapse"]');if(!btn.length){return;}
if(btn.data('target')){var nav=$(btn.data('target'));if(!nav.length){return;}
var fixedtop=nav.closest('.navbar-collapse-fixed-top').length;btn.on('click',function(){var wheight=(window.innerHeight||$(window).height());if(!$.support.transition){nav.parent().css('height',!btn.hasClass('collapsed')&&btn.data('t3-clicked')?'':wheight);btn.data('t3-clicked',1);}
nav.addClass('animate').css('max-height',wheight-
(fixedtop?(parseFloat(nav.css('top'))||0):(parseFloat(nav.css('bottom'))||0)));});nav.on('shown hidden',function(){nav.removeClass('animate');});}}});}(jQuery);


/*===============================
/plugins/system/t3/base-bs3/js/menu.js
================================================================================*/;
;(function($){var T3Menu=function(elm,options){this.$menu=$(elm);if(!this.$menu.length){return;}
this.options=$.extend({},$.fn.t3menu.defaults,options);this.child_open=[];this.loaded=false;this.start();};T3Menu.prototype={constructor:T3Menu,start:function(){if(this.loaded){return;}
this.loaded=true;var self=this,options=this.options,$menu=this.$menu;this.$items=$menu.find('li');this.$items.each(function(idx,li){var $item=$(this),$child=$item.children('.dropdown-menu'),$link=$item.children('a'),item={$item:$item,child:$child.length,link:$link.length,clickable:!($link.length&&$child.length),mega:$item.hasClass('mega'),status:'close',timer:null,atimer:null};$item.data('t3menu.item',item);if($child.length&&!options.hover){$item.on('click',function(e){e.stopPropagation();if($item.hasClass('group')){return;}
if(item.status=='close'){e.preventDefault();self.show(item);}});}else{$item.on('click',function(e){e.stopPropagation()});}
$item.find('a > .caret').on('click tap',function(e){item.clickable=false;});if(options.hover){$item.on('mouseover',function(e){if($item.hasClass('group'))
return;var $target=$(e.target);if($target.data('show-processed'))
return;$target.data('show-processed',true);setTimeout(function(){$target.data('show-processed',false);},10);self.show(item);}).on('mouseleave',function(e){if($item.hasClass('group'))
return;var $target=$(e.target);if($target.data('hide-processed'))
return;$target.data('hide-processed',true);setTimeout(function(){$target.data('hide-processed',false);},10);self.hide(item,$target);});if($link.length&&$child.length){$link.on('click',function(e){return item.clickable;});}}});$(document.body).on('tap hideall.t3menu',function(e){clearTimeout(self.timer);self.timer=setTimeout($.proxy(self.hide_alls,self),e.type=='tap'?500:self.options.hidedelay);});$menu.find('.mega-dropdown-menu').on('hideall.t3menu',function(e){e.stopPropagation();e.preventDefault();return false;});$menu.find('input, select, textarea, label').on('click tap',function(e){e.stopPropagation();});var $megatab=$menu.find('.mega-tab');if($megatab.length){$megatab.each(function(){var $tabul=$(this).find('>div>ul'),$tabs=$tabul.find('>li>.dropdown-menu'),tabheight=0;$tabul.data('mega-tab',0);var $p=$tabul.parents('.dropdown-menu');$p.each(function(){var $this=$(this);$this.data('prev-style',$this.attr('style')).css({visibility:"visible",display:"block"});})
$tabs.each(function(){var $this=$(this),thisstyle=$this.attr('style');$this.css({visibility:"hidden",display:"block"});tabheight=Math.max(tabheight,$this.children().innerHeight());if(thisstyle){$this.attr('style',thisstyle);}else{$this.removeAttr('style');}});$tabul.css('min-height',tabheight);$p.each(function(){var $this=$(this);if($this.data('prev-style'))
$this.attr('style',$this.data('prev-style'));else
$this.removeAttr('style');$this.removeData('prev-style');})})}},show:function(item){if($.inArray(item,this.child_open)<this.child_open.length-1){this.hide_others(item);}
$(document.body).trigger('hideall.t3menu',[this]);clearTimeout(this.timer);clearTimeout(item.timer);clearTimeout(item.ftimer);clearTimeout(item.ctimer);if(item.status!='open'||!item.$item.hasClass('open')||!this.child_open.length){if(item.mega){clearTimeout(item.astimer);clearTimeout(item.atimer);this.position(item.$item);item.astimer=setTimeout(function(){item.$item.addClass('animating')},10);item.atimer=setTimeout(function(){item.$item.removeClass('animating')},this.options.duration+50);item.timer=setTimeout(function(){item.$item.addClass('open');},100);}else{item.$item.addClass('open');}
item.status='open';if(item.child&&$.inArray(item,this.child_open)==-1){this.child_open.push(item);}}
item.ctimer=setTimeout($.proxy(this.clickable,this,item),300);var $megatab=item.$item.find('.mega-tab');if($megatab.length){var $tabul=$megatab.find('>div>ul');$tabul.children().eq($tabul.data('mega-tab')).addClass('open');}
if(item.$item.parent().data('mega-tab')!==null){item.$item.parent().data('mega-tab',item.$item.index());}},hide:function(item,$target){clearTimeout(this.timer);clearTimeout(item.timer);clearTimeout(item.astimer);clearTimeout(item.atimer);clearTimeout(item.ftimer);if($target&&$target.is('input',item.$item)){return;}
if(item.mega){item.$item.addClass('animating');item.atimer=setTimeout(function(){item.$item.removeClass('animating')},this.options.duration);item.timer=setTimeout(function(){item.$item.removeClass('open')},100);}else{item.timer=setTimeout(function(){item.$item.removeClass('open');},100);}
item.status='close';for(var i=this.child_open.length;i--;){if(this.child_open[i]===item){this.child_open.splice(i,1);}}
item.ftimer=setTimeout($.proxy(this.hidden,this,item),this.options.duration);this.timer=setTimeout($.proxy(this.hide_alls,this),this.options.hidedelay);},hidden:function(item){if(item.status=='close'){item.clickable=false;}},hide_others:function(item){var self=this;$.each(this.child_open.slice(),function(idx,open){if(!item||(open!=item&&!open.$item.has(item.$item).length)){self.hide(open);}});},hide_alls:function(e,inst){if(!e||e.type=='tap'||(e.type=='hideall'&&this!=inst)){var self=this;$.each(this.child_open.slice(),function(idx,item){item&&self.hide(item);});}},clickable:function(item){item.clickable=true;},position:function($item){var sub=$item.children('.mega-dropdown-menu'),is_show=sub.is(':visible');if(!is_show){sub.show();}
var offset=$item.offset(),width=$item.outerWidth(),screen_width=$(window).width()
-this.options.sb_width,sub_width=sub.outerWidth(),level=$item.data('level');if(!is_show){sub.css('display','');}
sub.css({left:'',right:''});if(level==1){var align=$item.data('alignsub'),align_offset=0,align_delta=0,align_trans=0;if(align=='justify'){return;}
if(!align){align='left';}
if(align=='center'){align_offset=offset.left+(width/2);if(!$.support.t3transform){align_trans=-sub_width/2;sub.css(this.options.rtl?'right':'left',align_trans+width/2);}}else{align_offset=offset.left
+((align=='left'&&this.options.rtl||align=='right'&&!this.options.rtl)?width:0);}
if(this.options.rtl){if(align=='right'){if(align_offset+sub_width>screen_width){align_delta=screen_width-align_offset
-sub_width;sub.css('left',align_delta);if(screen_width<sub_width){sub.css('left',align_delta+sub_width
-screen_width);}}}else{if(align_offset<(align=='center'?sub_width/2:sub_width)){align_delta=align_offset
-(align=='center'?sub_width/2:sub_width);sub.css('right',align_delta+align_trans);}
if(align_offset
+(align=='center'?sub_width/2:0)
-align_delta>screen_width){sub.css('right',align_offset
+(align=='center'?(sub_width+width)/2:0)+align_trans
-screen_width);}}}else{if(align=='right'){if(align_offset<sub_width){align_delta=align_offset-sub_width;sub.css('right',align_delta);if(sub_width>screen_width){sub.css('right',sub_width-screen_width
+align_delta);}}}else{if(align_offset
+(align=='center'?sub_width/2:sub_width)>screen_width){align_delta=screen_width
-align_offset
-(align=='center'?sub_width/2:sub_width);sub.css('left',align_delta+align_trans);}
if(align_offset
-(align=='center'?sub_width/2:0)
+align_delta<0){sub.css('left',(align=='center'?(sub_width+width)/2:0)
+align_trans
-align_offset);}}}}else{if(this.options.rtl){if($item.closest('.mega-dropdown-menu').parent().hasClass('mega-align-right')){if(offset.left+width+sub_width>screen_width){$item.removeClass('mega-align-right');if(offset.left-sub_width<0){sub.css('right',offset.left+width
-sub_width);}}}else{if(offset.left-sub_width<0){$item.removeClass('mega-align-left').addClass('mega-align-right');if(offset.left+width+sub_width>screen_width){sub.css('left',screen_width-offset.left
-sub_width);}}}}else{if($item.closest('.mega-dropdown-menu').parent().hasClass('mega-align-right')){if(offset.left-sub_width<0){$item.removeClass('mega-align-right');if(offset.left+width+sub_width>screen_width){sub.css('left',screen_width-offset.left
-sub_width);}}}else{if(offset.left+width+sub_width>screen_width){$item.removeClass('mega-align-left').addClass('mega-align-right');if(offset.left-sub_width<0){sub.css('right',offset.left+width
-sub_width);}}}}}}};$.fn.t3menu=function(option){return this.each(function(){var $this=$(this),data=$this.data('megamenu'),options=typeof option=='object'&&option;if($this.parents('#off-canvas-nav').length)
return;if($this.parents('#t3-off-canvas').length)
return;if(!data){$this.data('megamenu',(data=new T3Menu(this,options)));}else{if(typeof option=='string'&&data[option]){data[option]()}}})};$.fn.t3menu.defaults={duration:400,timeout:100,hidedelay:200,hover:true,sb_width:20};$(document).ready(function(){var mm_duration=$('.t3-megamenu').data('duration')||0;if(mm_duration){$('<style type="text/css">'
+'.t3-megamenu.animate .animating > .mega-dropdown-menu,'
+'.t3-megamenu.animate.slide .animating > .mega-dropdown-menu > div {'
+'transition-duration: '
+mm_duration+'ms !important;'
+'-webkit-transition-duration: '
+mm_duration+'ms !important;'
+'}'+'</style>').appendTo('head');}
var mm_timeout=mm_duration?100+mm_duration:500,mm_rtl=$(document.documentElement).attr('dir')=='rtl',mm_trigger=$(document.documentElement).hasClass('mm-hover'),sb_width=(function(){var parent=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),child=parent.children(),width=child.innerWidth()
-child.height(100).innerWidth();parent.remove();return width;})();if(!$.support.transition){$('.t3-megamenu').removeClass('animate');mm_timeout=100;}
$('ul.nav').has('.dropdown-menu').t3menu({duration:mm_duration,timeout:mm_timeout,rtl:mm_rtl,sb_width:sb_width,hover:mm_trigger});$(window).load(function(){$('ul.nav').has('.dropdown-menu').t3menu({duration:mm_duration,timeout:mm_timeout,rtl:mm_rtl,sb_width:sb_width,hover:mm_trigger});});});})(jQuery);


/*===============================
/plugins/system/t3/base-bs3/js/nav-collapse.js
================================================================================*/;
jQuery(document).ready(function($){$('.t3-navbar').each(function(){var $navwrapper=$(this),$menu=null,$placeholder=null;if($navwrapper.find('.t3-megamenu').length){$menu=$navwrapper.find('ul.level0').clone(),$placeholder=$navwrapper.prev('.navbar-collapse');if(!$placeholder.length){$placeholder=$navwrapper.closest('.container, .t3-mainnav').find('.navbar-collapse:empty');}
var lis=$menu.find('li[data-id]'),liactive=lis.filter('.current');lis.removeClass('mega dropdown mega-align-left mega-align-right mega-align-center mega-align-adjust');lis.each(function(){var $li=$(this),$child=$li.find('>:first-child');if($child[0].nodeName=='DIV'){$child.find('>:first-child').prependTo($li);$child.remove();}
if($li.data('hidewcol')){$child.find('.caret').remove();$child.nextAll().remove();return;}
var subul=$li.find('ul.level'+$li.data('level'));if(subul.length){$ul=$('<ul class="level'+$li.data('level')+' dropdown-menu">');subul.each(function(){if($(this).parents('.mega-col-nav').data('hidewcol'))return;$(this).find('>li').appendTo($ul);});if($ul.children().length){$ul.appendTo($li);}}
$li.find('>div').remove();if(!$li.children('ul').length){$child.find('.caret').remove();}
var divider=$li.hasClass('divider');for(var x in $li.data()){$li.removeAttr('data-'+x)}
$child.removeAttr('class');for(var x in $child.data()){$child.removeAttr('data-'+x)}
if(divider){$li.addClass('divider');}});liactive.addClass('current active');}else{$menu=$navwrapper.find('ul.nav').clone();$placeholder=$('.t3-navbar-collapse:empty, .navbar-collapse:empty').eq(0);}
$menu.find('a[data-toggle="dropdown"]').removeAttr('data-toggle').removeAttr('data-target');$menu.find('> li > ul.dropdown-menu').prev('a').attr('data-toggle','dropdown').attr('data-target','#').parent('li').addClass(function(){return'dropdown'+($(this).data('level')>1?' dropdown-submenu':'');});$menu.appendTo($placeholder);});});


/*===============================
/media/fitvids/jquery.fitvids.min.js
================================================================================*/;
(function(d){d.fn.fitVids=function(f){var e={customSelector:null};if(!document.getElementById("fit-vids-style")){var c=document.createElement("div"),g=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];c.className="fit-vids-style";c.id="fit-vids-style";c.style.display="none";c.innerHTML="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
g.parentNode.insertBefore(c,g)}f&&d.extend(e,f);return this.each(function(){var b="iframe[src*='player.vimeo.com'] iframe[src*='youtube.com'] iframe[src*='youtube-nocookie.com'] iframe[src*='kickstarter.com'][src*='video.html'] object embed".split(" ");e.customSelector&&b.push(e.customSelector);b=d(this).find(b.join(","));b=b.not("object object");b.each(function(){var a=d(this);if(!("embed"===this.tagName.toLowerCase()&&a.parent("object").length||a.parent(".fluid-width-video-wrapper").length)){var b=
"object"===this.tagName.toLowerCase()||a.attr("height")&&!isNaN(parseInt(a.attr("height"),10))?parseInt(a.attr("height"),10):a.height(),c=isNaN(parseInt(a.attr("width"),10))?a.width():parseInt(a.attr("width"),10),b=b/c;a.attr("id")||(c="fitvid"+Math.floor(999999*Math.random()),a.attr("id",c));a.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*b+"%");a.removeAttr("height").removeAttr("width")}})})}})(window.jQuery||window.Zepto);


/*===============================
/modules/mod_jaimagehotspot/assets/js/modernizr.custom.63321.js
================================================================================*/;
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


/*===============================
/modules/mod_jaimagehotspot/assets/js/jquery.dropdown.js
================================================================================*/;
;(function($,window,undefined){'use strict';$.jaDropDown=function(options,element){this.$el=$(element);this._init(options);};$.jaDropDown.defaults={speed:300,easing:'ease',gutter:0,stack:true,delay:0,random:false,rotated:false,slidingIn:false,onOptionSelect:function(opt){return false;}};$.jaDropDown.prototype={_init:function(options){this.options=$.extend(true,{},$.jaDropDown.defaults,options);this._layout();this._initEvents();},_layout:function(){var self=this;this.minZIndex=1000;var value=this._transformSelect();this.opts=this.listopts.children('li');this.optsCount=this.opts.length;this.size={width:this.dd.width(),height:this.dd.height()};var elName=this.$el.attr('name'),elId=this.$el.attr('id'),inputName=elName!==undefined?elName:elId!==undefined?elId:'cd-dropdown-'+(new Date()).getTime();this.inputEl=$('<input type="hidden" name="'+inputName+'" value="'+value+'"></input>').insertAfter(this.selectlabel);this.selectlabel.css('z-index',this.minZIndex+this.optsCount);this._positionOpts();if(Modernizr.csstransitions){setTimeout(function(){self.opts.css('transition','all '+self.options.speed+'ms '+self.options.easing);},25);}},_transformSelect:function(){var optshtml='',selectlabel='',value=-1;this.$el.children('option').each(function(){var $this=$(this),val=isNaN($this.attr('value'))?$this.attr('value'):Number($this.attr('value')),classes=$this.attr('class'),selected=$this.attr('selected'),label=$this.text();if(val!==-1){optshtml+=classes!==undefined?'<li data-value="'+val+'"><span class="'+classes+'" title="'+(label.replace(/'/g,"\\'"))+'">'+label+'</span></li>':'<li data-value="'+val+'"><span title="'+(label.replace(/'/g,"\\'"))+'">'+label+'</span></li>';}
if(selected){selectlabel=label;value=val;}});this.listopts=$('<ul/>').append(optshtml);this.selectlabel=$('<span/>').append(selectlabel);this.dd=$('<div class="cd-dropdown"/>').append(this.selectlabel,this.listopts).insertAfter(this.$el);this.$el.remove();return value;},_positionOpts:function(anim){var self=this;this.listopts.css('height','auto');this.opts.each(function(i){$(this).css({zIndex:self.minZIndex+self.optsCount-1-i,top:self.options.slidingIn?(i+1)*(self.size.height+self.options.gutter):0,left:0,marginLeft:self.options.slidingIn?i%2===0?self.options.slidingIn:-self.options.slidingIn:0,opacity:self.options.slidingIn?0:1,transform:'none'});});if(!this.options.slidingIn){this.opts.eq(this.optsCount-1).css({top:this.options.stack?9:0,left:this.options.stack?4:0,width:this.options.stack?this.size.width-8:this.size.width,transform:'none'}).end().eq(this.optsCount-2).css({top:this.options.stack?6:0,left:this.options.stack?2:0,width:this.options.stack?this.size.width-4:this.size.width,transform:'none'}).end().eq(this.optsCount-3).css({top:this.options.stack?3:0,left:0,transform:'none'});}},_initEvents:function(){var self=this;this.selectlabel.on('mousedown.dropdown',function(event){self.opened?self.close():self.open();return false;});this.opts.on('click.dropdown',function(){if(self.opened){var opt=$(this);self.options.onOptionSelect(opt);self.inputEl.val(opt.data('value'));self.selectlabel.html(opt.html());self.close();}});},open:function(){var self=this;this.dd.toggleClass('cd-active');this.listopts.css('height',(this.optsCount+1)*(this.size.height+this.options.gutter));this.opts.each(function(i){$(this).css({opacity:1,top:self.options.rotated?self.size.height+self.options.gutter:(i+1)*(self.size.height+self.options.gutter),left:self.options.random?Math.floor(Math.random()*11-5):0,width:self.size.width,marginLeft:0,transform:self.options.random?'rotate('+Math.floor(Math.random()*11-5)+'deg)':self.options.rotated?self.options.rotated==='right'?'rotate(-'+(i*5)+'deg)':'rotate('+(i*5)+'deg)':'none',transitionDelay:self.options.delay&&Modernizr.csstransitions?self.options.slidingIn?(i*self.options.delay)+'ms':((self.optsCount-1-i)*self.options.delay)+'ms':0});});this.opened=true;},close:function(){var self=this;this.dd.toggleClass('cd-active');if(this.options.delay&&Modernizr.csstransitions){this.opts.each(function(i){$(this).css({'transition-delay':self.options.slidingIn?((self.optsCount-1-i)*self.options.delay)+'ms':(i*self.options.delay)+'ms'});});}
this._positionOpts(true);this.opened=false;}}
$.fn.jadropdown=function(options){var instance=$.data(this,'dropdown');if(typeof options==='string'){var args=Array.prototype.slice.call(arguments,1);this.each(function(){instance[options].apply(instance,args);});}
else{this.each(function(){instance?instance._init():instance=$.data(this,'dropdown',new $.jaDropDown(options,this));});}
return instance;};})(jQuery,window);


/*===============================
/media/mod_zentools/js/responsive/response.min.js
================================================================================*/;
/*! Response 0.7.3 | @link responsejs.com | @author ryanve | @license MIT */
(function(e,p,k){var j=e.jQuery||e.Zepto||e.ender||e.elo;"undefined"!=typeof module&&module.exports?module.exports=k(j):e[p]=k(j)})(this,"Response",function(e){function p(){return q.clientWidth}function k(){return q.clientHeight}function j(a){throw new TypeError(a?l+"."+a:l);}function z(a){return"string"==typeof a?r(a.split(" ")):L(a)?r(a):[]}function i(a,b,c){if(null==a)return a;for(var d=0,g=a.length;d<g;)b.call(c||a[d],a[d],d++,a);return a}function M(a,b,c){for(var d=[],g=a.length,m=0,f,b=b||"",
c=c||"";m<g;)f=a[m++],null==f||d.push(b+f+c);return d}function r(a,b,c){var d,g=0,m=0,f,e=[],h,i="function"==typeof b;if(!a)return e;c=(h=!0===c)?null:c;for(d=a.length;m<d;m++)f=a[m],h===!(i?b.call(c,f,m,a):b?typeof f===b:f)&&(e[g++]=f);return e}function N(a,b){if(!a||!b)return a;var c,d=b.length;if("function"!=typeof b&&"number"==typeof d&&d===d){for(c=0;c<d;c++)void 0===b[c]||(a[c]=b[c]);a.length>c||(a.length=c)}else for(c in b)qa.call(b,c)&&void 0!==b[c]&&(a[c]=b[c]);return a}function t(a,b,c){if(null==
a)return a;"object"==typeof a&&!a.nodeType&&"number"==typeof a.length&&a.length===a.length?i(a,b,c):b.call(c||a,a);return a}function A(a){return function(b,c){var d,g=a();d=g>=(b||0);return!c?d:d&&g<=c}}function u(a){var b=s.devicePixelRatio;if(null==a)return b||(u(2)?2:u(1.5)?1.5:u(1)?1:0);if(!isFinite(a))return!1;if(b&&0<b)return b>=a;a="only all and (min--moz-device-pixel-ratio:"+a+")";return O(a).matches?!0:!!O(a.replace("-moz-","")).matches}function Y(a){return a.replace(P,"$1").replace(ra,function(a,
c){return c.toUpperCase()})}function B(a){return"data-"+(a?a.replace(P,"$1").replace(sa,"$1-$2").toLowerCase():a)}function Z(a){var b;return!a||"string"!=typeof a?a:"true"===a?!0:"false"===a?!1:"undefined"===a?b:"null"===a?null:(b=parseFloat(a))===+b?b:a}function C(a){return!a?!1:1===a.nodeType?a:a[0]&&1===a[0].nodeType?a[0]:!1}function D(a,b){var c=arguments.length,d=C(this),g={},e=!1,f;if(c){L(a)&&(e=!0,a=a[0]);if("string"===typeof a){a=B(a);if(1===c)return g=d.getAttribute(a),e?Z(g):g;if(this===
d||2>(f=this.length||1))d.setAttribute(a,b);else for(;f--;)f in this&&D.apply(this[f],arguments)}else if(a instanceof Object)for(f in a)a.hasOwnProperty(f)&&D.call(this,f,a[f]);return this}if(d.dataset&&DOMStringMap)return d.dataset;i(d.attributes,function(a){if(a&&(f=String(a.name).match(P)))g[Y(f[1])]=a.value});return g}function $(a){this&&"string"===typeof a&&(a=z(a),t(this,function(b){i(a,function(a){a&&b.removeAttribute(B(a))})}));return this}function E(a,b,c){return D.apply(a,ta.call(arguments,
1))}function aa(a,b){return $.call(a,b)}function ba(a){for(var b,c=[],d=0,g=a.length;d<g;)(b=a[d++])&&c.push("["+B(b.replace(Q,"").replace(".","\\."))+"]");return c.join()}function R(a,b){var c=a.getBoundingClientRect?a.getBoundingClientRect():{},b="number"==typeof b?b||0:0;return{top:(c.top||0)-b,left:(c.left||0)-b,bottom:(c.bottom||0)+b,right:(c.right||0)+b}}function S(a,b){var c=R(C(a),b);return!!c&&0<=c.bottom&&c.top<=k()&&0<=c.right&&c.left<=p()}function ca(a){var b={img:1,input:1,source:3,embed:3,
track:3,iframe:5,audio:5,video:5,script:5}[a.tagName.toLowerCase()]||-1;return 4>b?b:"string"===typeof a.getAttribute("src")?5:-5}function da(a,b,c){var d;(!a||null==b)&&j("store");c="string"==typeof c&&c;t(a,function(a){d=c?a.getAttribute(c):0<ca(a)?a.getAttribute("src"):a.innerHTML;null==d?aa(a,b):E(a,b,d)});return h}function T(a,b){var c=[];a&&b&&i(z(b),function(b){c.push(E(a,b))},a);return c}function U(a){v.on("resize",a);return h}function ea(a){t(a,function(a){"object"==typeof a||j("create @args");
var c=V(fa).configure(a),d,g=c.verge,a=c.breakpoints,e=F("scroll"),f=F("resize");a.length&&(d=a[0]||a[1]||!1,G(function(){function a(){c.reset();i(c.$e,function(a,b){c[b].decideValue().updateDOM()}).trigger(h)}function b(){i(c.$e,function(a,b){S(c[b].$e,g)&&c[b].updateDOM()})}var h=W.allLoaded,j=!!c.lazy;i(c.target().$e,function(a,b){c[b]=V(c).prepareData(a);(!j||S(c[b].$e,g))&&c[b].updateDOM()});c.dynamic&&(c.custom||d<w)&&U(a,f);j&&(v.on(e,b),c.$e.one(h,function(){v.off(e,b)}))}))});return h}function ga(a,
b){if("function"==typeof a&&a.fn){if(b||void 0===a.fn.dataset)a.fn.dataset=D;if(b||void 0===a.fn.deletes)a.fn.deletes=$;var c=a.fn;i(["inX","inY","inViewport"],function(d){(b||!c[d])&&(c[d]=function(b,c){return a(r(this,function(a){return!!a&&!c===h[d](a,b)}))})})}return h}if("function"!=typeof e)throw"Response unable to run due to missing dep.";var H=this,h,l="Response",ua=H[l],ha="init"+l,s=window,ia=document,q=ia.documentElement,G=e.domReady||e,v=e(s),x=s.screen,L=Array.isArray||function(a){return a instanceof
Array},qa={}.hasOwnProperty,ta=[].slice,va=[].concat,ja=[].map,ka=ja?function(a,b,c){return ja.call(a,b,c)}:function(a,b,c){var d,g=a.length,e=[];for(d=0;d<g;d++)d in a&&(e[d]=b.call(c,a[d],d,a));return e},la={width:[0,320,481,641,961,1025,1281],height:[0,481],ratio:[1,1.5,2]},fa,X,y={},n={},ma={},I={all:[]},wa=1,J=x.width,K=x.height,w=J>K?J:K,xa=J+K-w,na=function(){return J},oa=function(){return K},ya=/[^a-z0-9_\-\.]/gi,Q=/^[\W\s]+|[\W\s]+$|/g,sa=/([a-z])([A-Z])/g,ra=/-(.)/g,P=/^data-(.+)$/,O=s.matchMedia||
s.msMatchMedia||Object,V=Object.create||function(a){function b(){}b.prototype=a;return new b},F=function(a,b){b=b||l;return a.replace(Q,"")+"."+b.replace(Q,"")},W={allLoaded:F("allLoaded"),crossover:F("crossover")},x=A(p);X=A(k);y.band=A(na);y.wave=A(oa);var za=function(a){return"string"==typeof a?a.toLowerCase().replace(ya,""):""},pa=W.crossover,Aa=Math.min;fa={$e:0,mode:0,breakpoints:null,prefix:null,prop:"width",keys:[],dynamic:null,custom:0,values:[],fn:0,verge:null,newValue:0,currValue:1,aka:null,
lazy:null,i:0,uid:null,reset:function(){for(var a=this.breakpoints,b=a.length,c=0;!c&&b--;)this.fn(a[b])&&(c=b);c!==this.i&&(v.trigger(pa).trigger(this.prop+pa),this.i=c||0);return this},configure:function(a){N(this,a);var b,c,d=!0;b=this.prop;this.uid=wa++;this.verge=isFinite(this.verge)?this.verge:Aa(w,500);this.fn=n[b]||j("create @fn");"boolean"!=typeof this.dynamic&&(this.dynamic="device"!==b.substring(0,6));this.custom=ma[b];c=this.prefix?r(ka(z(this.prefix),za)):["min-"+b+"-"];a=1<c.length?
c.slice(1):0;this.prefix=c[0];c=this.breakpoints;L(c)?(i(c,function(a){if(!a&&0!==a)throw"invalid breakpoint";d=d&&isFinite(a)}),c=d?c.sort(function(a,b){return a-b}):c,c.length||j("create @breakpoints")):c=la[b]||la[b.split("-").pop()]||j("create @prop");this.breakpoints=d?r(c,function(a){return a<=w}):c;this.keys=M(this.breakpoints,this.prefix);this.aka=null;if(a){c=[];for(b=a.length;b--;)c.push(M(this.breakpoints,a[b]));this.aka=c;this.keys=va.apply(this.keys,c)}I.all=I.all.concat(I[this.uid]=
this.keys);return this},target:function(){this.$e=e(ba(I[this.uid]));da(this.$e,ha);this.keys.push(ha);return this},decideValue:function(){for(var a=null,b=this.breakpoints,c=b.length,d=c;null==a&&d--;)this.fn(b[d])&&(a=this.values[d]);this.newValue="string"===typeof a?a:this.values[c];return this},prepareData:function(a){this.$e=e(a);this.mode=ca(a);this.values=T(this.$e,this.keys);if(this.aka)for(a=this.aka.length;a--;)this.values=N(this.values,T(this.$e,this.aka[a]));return this.decideValue()},
updateDOM:function(){if(this.currValue===this.newValue)return this;this.currValue=this.newValue;0<this.mode?this.$e[0].setAttribute("src",this.newValue):null==this.newValue?this.$e.empty&&this.$e.empty():this.$e.html?this.$e.html(this.newValue):(this.$e.empty&&this.$e.empty(),this.$e[0].innerHTML=this.newValue);return this}};n.width=x;n.height=X;n["device-width"]=y.band;n["device-height"]=y.wave;n["device-pixel-ratio"]=u;h={deviceMin:function(){return xa},deviceMax:function(){return w},noConflict:function(a){H[l]===
h&&(H[l]=ua);"function"==typeof a&&a.call(H,h);return h},chain:function(a,b){a=arguments.length?a:e;return ga(a,b)},bridge:ga,create:ea,addTest:function(a,b){"string"==typeof a&&"function"==typeof b&&(n[a]=b,ma[a]=1);return h},datatize:B,camelize:Y,render:Z,store:da,access:T,target:function(a){return e(ba(z(a)))},object:V,crossover:function(a,b){var c,d=W.crossover;"function"==typeof a&&(c=b,b=a,a=c);v.on(a?""+a+d:d,b);return h},action:function(a){t(a,function(a){G(a);U(a)});return h},resize:U,ready:G,
affix:M,sift:r,dpr:u,deletes:aa,scrollX:function(){return window.pageXOffset||q.scrollLeft},scrollY:function(){return window.pageYOffset||q.scrollTop},deviceW:na,deviceH:oa,device:y,inX:function(a,b){var c=R(C(a),b);return!!c&&0<=c.right&&c.left<=p()},inY:function(a,b){var c=R(C(a),b);return!!c&&0<=c.bottom&&c.top<=k()},route:t,merge:N,media:O,wave:X,band:x,map:ka,each:i,inViewport:S,dataset:E,viewportH:k,viewportW:p};G(function(){var a,b=E(ia.body,"responsejs");b&&((a=!!s.JSON&&JSON.parse)?b=a(b):
e.parseJSON&&(b=e.parseJSON(b)),b&&b.create&&ea(b.create));q.className=q.className.replace(/(^|\s)(no-)?responsejs(\s|$)/,"$1$3")+" responsejs "});return h});



/*===============================
/modules/mod_aikon_easy_parallax/assets//js/jqueryparallax.js
================================================================================*/;
(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}
i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}
h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);(function($){var $window=$(window);var windowHeight=$window.height();$window.resize(function(){windowHeight=$window.height();});$.fn.parallax=function(xpos,speedFactor,outerHeight){var $this=$(this);var getHeight;var firstTop;var paddingTop=0;$this.each(function(){firstTop=$this.offset().top;});if(outerHeight){getHeight=function(jqo){return jqo.outerHeight(true);};}else{getHeight=function(jqo){return jqo.height();};}
if(arguments.length<1||xpos===null)xpos="50%";if(arguments.length<2||speedFactor===null)speedFactor=0.1;if(arguments.length<3||outerHeight===null)outerHeight=true;function update(){var pos=$window.scrollTop();$this.each(function(){var $element=$(this);var top=$element.offset().top;var height=getHeight($element);if(top+height<pos||top>pos+windowHeight){return;}
$this.css('backgroundPosition',xpos+" "+Math.round((firstTop-pos)*speedFactor)+"px");});}
$window.bind('scroll',update).resize(update);update();};})(jQuery);AikonParallaxManager=function(){var resizeHeightThrottle,resizeWidthThrottle,resizeCoolDown=300,forcedContainerWidth=100,debug=false,that=this,resizeEvents='resize orientationchange click',selectors={},options={heightMode:'px',heightPx:'200',heightViewPort:'80',ratio:'0.2',forceFullWidth:'false'};that.initParallaxDisplay=function(){var vw=jQuery(window).width();if(vw>1025){jQuery(selectors.target).parallax("50%",options.ratio);}};that.setParallaxHeight=function(){var targetSize,vh;switch(options.heightMode){case'viewPort':vh=jQuery(window).height();targetSize=Math.round((vh/100)*options.heightViewPort);break;case'px':default:targetSize=options.heightPx;break;}
jQuery(selectors.target).add(selectors.container).height(targetSize);that.initParallaxDisplay();};that.bindOrientationEvents=function(){jQuery(window).on(resizeEvents,function(e){clearTimeout(resizeHeightThrottle);resizeHeightThrottle=setTimeout(function(){that.setParallaxHeight();that.initParallaxDisplay();},resizeCoolDown);});};that.initForceFullWidth=function(){var containerWidth,marginLeft,windowWidth=jQuery(window).width();jQuery(selectors.container).css({'position':'relative','width':'100%','margin':'auto'});containerWidth=jQuery(selectors.container).width();marginLeft=Math.round(((windowWidth-containerWidth)/2))+1;jQuery(selectors.target).css({'position':'absolute','overflow':'hidden','left':'0','width':(windowWidth)+'px','margin-left':'-'+marginLeft+'px'});};that.bindForceFullWidthHandler=function(){jQuery(window).on(resizeEvents,function(e){clearTimeout(resizeWidthThrottle);resizeWidthThrottle=setTimeout(function(){var windowWidth=jQuery(window).width(),containerWidth=jQuery(selectors.container).width(),marginLeft=Math.round(((windowWidth-containerWidth)/2))+1;jQuery(selectors.target).css({'width':(windowWidth)+'px','margin-left':'-'+marginLeft+'px'});},resizeCoolDown);});};that.init=function(externalOptions){if(externalOptions.hasOwnProperty('heightMode')){jQuery.extend(options,externalOptions);}
selectors.target='#'+options.id;selectors.container='#'+jQuery(selectors.target).parent().attr('id');that.bindOrientationEvents();that.setParallaxHeight();if(externalOptions.forceFullWidth=='true'){that.initForceFullWidth();that.bindForceFullWidthHandler();}
that.initParallaxDisplay();};return this;};window.aikonParallaxGlobal={};