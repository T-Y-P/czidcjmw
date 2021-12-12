
(function() {
    var $ul = $("#proinfo");
    $lis = $ul.find("li");
    inter = false;
    $ul.click(function(event) {
        event.stopPropagation();
    });

    $lis.hover(function() {
      
        if (!$(this).hasClass('pros_last')) {
            var nub=$(".pros li").index($(this));
            $(this).addClass("proshover");
       
            $(".prosmore").hide();
           $(".prosmore").eq(''+nub+'').show();
        }
    },
    function() {
        if (!$(this).hasClass('pros_last')) {
            if ($(this).hasClass("proshover")) {
                $(this).removeClass("proshover");
            }
           
            $(this).find(".prosmore").addClass('hide');
     
        $(".prosmore").hide();
        }
    });
})();

jQuery(".bannerBox").slide({mainCell:".bd ul",autoPlay:true});