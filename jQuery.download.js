
jQuery.download = function(url, data, method){
    //url and data options required
    if (url && data) { 
        var inputs = '';
        var form = jQuery('<form>').appendTo('body')
                                   .attr("action", url)
                                   .attr("method", method || 'POST')
                                   .hide();

        if (typeof data == 'string') {
            jQuery.each(data.split('&'), function(){ 
                var pair = this.split('=');
                jQuery('<input>').attr('type', 'hidden')
                                .attr('name', pair[0])
                                .val(pair[1])
                                .appendTo(form)
            });
        } else {
            // if it isn't a string, then it is an object
            jQuery.each(data, function(key, val){
                jQuery('<input>').attr('type', 'hidden')
                                .attr('name', key)
                                .val(val)
                                .appendTo(form)
            });
        }
        //send request
        form.submit()
            .remove();
    };
};
