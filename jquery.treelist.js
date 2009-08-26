tl = {
  opts : {'expander' : '.expander'},
  
  treelist : function(opts) {
    tl.setup(opts);
    tl.$tree = this;
    jQuery('li:not(.open) ul', tl.$tree).hide();
    jQuery(tl.opts.expander, tl.$tree).click(tl.expand);
  },
  
  expand : function() {
    var $li = jQuery(this).closest('li');
    var $li_ul = jQuery('ul:first', $li)
    if ($li.hasClass('open')) {
      $li_ul.slideUp('fast');
      $li.removeClass('open');
    } else {
      $li.addClass('open');
      $li_ul.slideDown('fast');
    }
    return false;
  },
  
  setup : function(opts) {
    if (typeof opts == 'undefined') { return; }
    for (prop in opts) { 
       tl.opts[prop] = opts[prop];
    }
  }
}

jQuery.fn.extend(tl)