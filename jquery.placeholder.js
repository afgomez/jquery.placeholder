(function($) {

  /**
  * testPlaceholder()
  * Test if browser support the HTML5 placeholder attribute
  *
  * @return {bool}
  */
  function testPlaceholder() {
    var input = document.createElement('input');
    return 'placeholder' in input;
  }

  function is_placeholder(el) {
    return el.val() == el.data('placeholder');
  }
  /**
  * jQuery.placeholder. Sets a default value for an input box that dissapears when
  * user focus on the field. Just like HTML5 'placeholder' attribute
  *
  * @param {object} options Object with user defined options
  * @return {jQuery}
  */
  $.fn.placeholder = function() {

    // Use native browser placeholder if available
    if (testPlaceholder()) {
      return this;
    } else {
      return this.each(function() {
        var t = $(this);
        var placeholder = t.attr('placeholder');

        // There's no placeholder. Next!
        if (!placeholder) {
          return;
        }

        // Store the default value
        t.data('placeholder', placeholder);
        t.val(placeholder);

        t.focus(function() {
          if ( is_placeholder(t) ) {
            t.val('');
          }
        }).blur(function() {
          if(!t.val()) {
            t.val(t.data('placeholder'));
          }
        }).closest('form').on('submit', function() {
          if ( is_placeholder(t) ) {
            t.val('');
          }
        });
      });
    }
  };
})(jQuery);
