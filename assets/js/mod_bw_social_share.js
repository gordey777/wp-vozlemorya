$j = jQuery.noConflict();

$j(document).ready(function () {
    mod_bw_social_share_styles();
    $j(window).resize(function () {
        mod_bw_social_share_styles();
    });

});

function mod_bw_social_share_styles() {
    if ($j('.bw-social-share-buttons-small').length > 0) {
        //alert(1);
        $j('.bw-social-share-buttons li').addClass('small');
        $j('.bw-social-share-buttons li').css('width', '42px');
        $j('.rrssb-buttons').removeClass('large-format');
    }
    if ($j('.bw-social-share-buttons-large').length > 0) {
        if ($j(window).width() > 320) {
            setTimeout(function () {
                $j('.bw-social-share-buttons li').removeClass('small');
                $j('.bw-social-share-buttons li').css('width', 'calc(50%)');
            }, 500);
        } else {
            setTimeout(function () {
                $j('.bw-social-share-buttons li').removeClass('small');
                $j('.bw-social-share-buttons li').css('height', '100%');
                $j('.bw-social-share-buttons li').css('width', 'calc(100%)');
            }, 500);
        }
    }
}