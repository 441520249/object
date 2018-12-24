document.addEventListener("DOMContentLoaded",function(){
	 jQuery(function($){
            var $ampBox=$("#ampBox");
            var $img=$("#ampBox img");
            var $sp=$(".sp");
            var $imgBox=$(".imgBox");
            var $imgBig=$(".imgBox img");
            $ampBox.on("mouseover",function(){
                $sp.css("display","block");
                $imgBox.css("display","block"); 
            }).on("mouseout",function(){
                $sp.css("display","none");
                $imgBox.css("display","none"); 
            }).on("mousemove",function(e){
                var scale=3;
                $sp.css({width:$ampBox.outerWidth()/scale,height:$ampBox.outerHeight()/scale});
                $imgBig.attr("src",$img[0].src).css({width:$ampBox.outerWidth()*scale});
                var $ox=e.pageX-$ampBox[0].offsetLeft-$sp.outerWidth()/2;
                var $oy=e.pageY-$ampBox[0].offsetTop-$sp.outerHeight()/2;
                if($ox<=0){
                    $ox=0
                }else if($ox>=$ampBox.outerWidth()-$sp.outerWidth()){
                    $ox=$ampBox.outerWidth()-$sp.outerWidth();
                }
                if($oy<=0){
                    $oy=0
                }else if($oy>=$ampBox.outerHeight()-$sp.outerHeight()){
                    $oy=$ampBox.outerHeight()-$sp.outerHeight();
                }
                $sp.css({left:$ox,top:$oy});
                $imgBig.css({marginTop:-$oy*scale,marginLeft:-$ox*scale});

            })
        })
})