(function($)
{
    $(function()
    {
        document.querySelectorAll('.wp-block-va-collapsible-list').forEach( block => {
            block.querySelector('.wp-block-button.clist-expand').addEventListener( 'click', _ => {
                block.classList.remove('clist-hide');
            });
        
            block.querySelector('.wp-block-button.clist-collapse').addEventListener( 'click', _ => {
                block.classList.add('clist-hide');
            });
        } );
    });
})(jQuery);