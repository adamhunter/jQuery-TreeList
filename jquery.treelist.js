tl = {
  opts : {'expander' : '.expander', 'speed' : 'dev'},
  treelist : function(opts) {
    tl._setup(opts);
    tl.$tree = this;
    jQuery('li:not(.open) ul', tl.$tree).hide();
    jQuery(tl.opts.expander, tl.$tree).click(tl._expand);
  },
  _expand : function() {
    var $li = jQuery(this).closest('li');
    var $li_ul = jQuery('ul:first', $li)
		$li_ul.slideToggle(tl.opts.speed)
		$li.toggleClass('open');
    return false;
  },
  _setup : function(opts) {
    if (typeof opts == 'undefined') { return; }
    for (prop in opts) { tl.opts[prop] = opts[prop]; }
  }
}
jQuery.fn.extend(tl);