var colorInc=100/3;$((function(){$("#percent-box").click((function(){$(this).select()})),$("#percent-box").keyup((function(){var e=$(this).val();if(""!=e&&!isNaN(e)&&e<=100&&e>=0){console.log(e);var r=e;e=100-e,0==r?($("#percent-box").val(0),$(".progress .percent").text("0%")):$(".progress .percent").text(r+"%"),$(".progress").parent().removeClass(),$(".progress .water").css("top",e+"%"),r<1*colorInc?$(".progress").parent().addClass("blue"):r<2*colorInc?$(".progress").parent().addClass("orange"):$(".progress").parent().addClass("green")}else $(".progress").parent().removeClass(),$(".progress").parent().addClass("green"),$(".progress .water").css("top","33%"),$(".progress .percent").text("67%"),$("#percent-box").val("")}))}));
//# sourceMappingURL=index.fe0896a2.js.map
