///made by Rob Boerman Edgehero 1.1 /// Edgehero.com ///
(function(e,t){var n=function(){};n.$=t;n.performHeroics=function(){t("head").append('<link rel="stylesheet" href="http://augmentedart.com/edgehero/edgeherostyle.css" type="text/css" />');var n=0;var r=0;t("[class^='link_'],[class*=' link_']").each(function(){var n=t(this).attr("class");var r="link_"+n.split("link_")[1].split(" ")[0];var i=r;t(this).attr("href",e[i]);t(this).replaceWith('<a id="'+t(this).attr("id")+'"  href="'+t(this).attr("href")+'" class="'+t(this).attr("class")+'" style="'+t(this).attr("style")+'">'+t(this).html()+"</a>")});t(".fullpage").each(function(){var e=t(this);e.css({"min-height":"100%",width:"100%",position:"relative",top:"0px"})});t("[class^='scroll_'],[class*=' scroll_']").each(function(){var e=t(this).attr("class");var n="#Stage_"+e.split("scroll_")[1].split(" ")[0];var r=n;var i=t(this).attr("style")+"display:block;";t(this).attr("href",r);t(this).replaceWith('<a id="'+t(this).attr("id")+'"  href="'+t(this).attr("href")+'" class="'+t(this).attr("class")+'" style="'+i+'">'+t(this).html()+"</a>");t('a[href^="#"]').click(function(e){var n=t(this).attr("href");var r=10;var i=t(n).offset().top-r;t("html, body").animate({scrollTop:i},500);e.preventDefault()});t(function(){var e=t("#pull");t(e).on("click",function(e){e.preventDefault()})})});t("[class^='hscroll_'],[class*=' hscroll_']").each(function(){var e=t(this).attr("class");var n="#Stage_"+e.split("scroll_")[1].split(" ")[0];var r=n;var i=t(this).attr("style")+"display:block;";t(this).attr("href",r);t(this).replaceWith('<a id="'+t(this).attr("id")+'"  href="'+t(this).attr("href")+'" class="'+t(this).attr("class")+'" style="'+i+'">'+t(this).html()+"</a>");t('a[href^="#"]').click(function(e){var n=t(this).attr("href");var r=10;var i=t(n).offset().left-r;t("html, body").animate({scrollLeft:i},500);e.preventDefault()});t(function(){var e=t("#pull");t(e).on("click",function(e){e.preventDefault()})})});t(".newwindow").each(function(){t(".newwindow").attr("target","_blank")});t(".backgroundimage").each(function(){var e;if(t.trim(t(".backgroundimage").attr("src"))!=""){var e=t(this).attr("src")}else{var n=t(this).css("background-image");var e=n.replace("url(","").replace(")","")}t(this).replaceWith('<div id="'+t(this).attr("id")+'"  style="'+t(this).attr("style")+" background-image: url("+e+');background-attachment: fixed;background-size: cover;-webkit-background-size: cover;background-position: 50% 50%;background-repeat: no-repeat no-repeat;" class="'+t(this).attr("class")+'" >'+t(this).html()+"</div>")});t("[class^='action_'],[class*=' action_']").each(function(){var n=t(this).attr("class");var r="action_"+n.split("action_")[1].split(" ")[0];var i=r;t(this).attr("method","post");t(this).attr("action",e[i])});t(".form").each(function(){var e=t(this).attr("style");t(this).replaceWith('<form id="'+t(this).attr("id")+'"method="'+t(this).attr("method")+'" action="'+t(this).attr("action")+'" class="'+t(this).attr("class")+'" style="'+e+'">'+t(this).html()+"</form>")});t(".input").each(function(){var e=t(this).attr("style");t(this).replaceWith('<input id="'+t(this).attr("id")+'" class="'+t(this).attr("class")+'" style="'+e+'">'+t(this).html()+"</input>")});t(".input-checkbox").each(function(){var e=t(this).attr("style");t(this).replaceWith('<input type="checkbox" id="'+t(this).attr("id")+'" class="'+t(this).attr("class")+'" style="'+e+'">'+t(this).html()+"</input>")});t(".input-email").each(function(){var e=t(this).attr("style");t(this).replaceWith('<input type="email" id="'+t(this).attr("id")+'" class="'+t(this).attr("class")+'" style="'+e+'">'+t(this).html()+"</input>")});t(".input-file").each(function(){var e=t(this).attr("style");t(this).replaceWith('<input type="file" id="'+t(this).attr("id")+'" class="'+t(this).attr("class")+'" style="'+e+'">'+t(this).html()+"</input>")});t(".input-password").each(function(){var e=t(this).attr("style");t(this).replaceWith('<input type="password" id="'+t(this).attr("id")+'" class="'+t(this).attr("class")+'" style="'+e+'">'+t(this).html()+"</input>")});t(".input-submit").each(function(){var e=t(this).attr("style");t(this).replaceWith('<input type="submit" value="Submit" id="'+t(this).attr("id")+'" class="'+t(this).attr("class")+'" style="'+e+'">'+t(this).html()+"</input>")});t(".span").each(function(){var e=t(this).attr("style");t(this).replaceWith('<span id="'+t(this).attr("id")+'" class="'+t(this).attr("class")+'" style="'+e+'">'+t(this).html()+"</span>")});t(".label").each(function(){var e=t(this).attr("style");t(this).replaceWith('<label id="'+t(this).attr("id")+'" class="'+t(this).attr("class")+'" style="'+e+'">'+t(this).html()+"</label>")});t(".canvas").each(function(){var e=t(this).attr("style");t(this).replaceWith('<canvas id="'+t(this).attr("id")+'" class="'+t(this).attr("class")+'" style="'+e+'">'+t(this).html()+"</canvas>")});t(".textarea").each(function(){var e=t(this).attr("style");t(this).replaceWith('<textarea id="'+t(this).attr("id")+'" class="'+t(this).attr("class")+'" style="'+e+'">'+t(this).html()+"</textarea>")});t("[class^='rows_'],[class*=' rows_']").each(function(){var e=t(this).attr("class");var n=e.split("rows_")[1].split(" ")[0];t(this).attr("rows",n)});t("[class^='cols_'],[class*=' cols_']").each(function(){var e=t(this).attr("class");var n=e.split("cols_")[1].split(" ")[0];t(this).attr("cols",n)});t("[class^='name_'],[class*=' name_']").each(function(){var e=t(this).attr("class");var n=e.split("name_")[1].split(" ")[0];t(this).attr("name",n)});t(".ul").each(function(){var e=t(this).attr("style");t(this).replaceWith('<ul id="'+t(this).attr("id")+'" class="'+t(this).attr("class")+'" style="'+e+'">'+t(this).html()+"</ul>")});t(".li").each(function(){var e=t(this).attr("style");t(this).replaceWith('<li id="'+t(this).attr("id")+'" class="'+t(this).attr("class")+'" style="list-style-type:none;'+e+'">'+t(this).html()+"</li>")});t("[class^='videolink'],[class*=' videolink']").each(function(){var n=t(this).attr("class");var r="videolink_"+n.split("videolink_")[1].split(" ")[0];var i=r;var s="."+i;var o=t(this).attr("style")+"display:block;";t(this).replaceWith('<video height="auto" id="'+t(this).attr("id")+'" class="'+n+'" style="'+o+'" webkit-playsinline>'+t(this).html()+"</video>");var u=".mp4";var a=".ogg";var f=".webm";var l=" "+e[i].replace(u,".mp4 ").replace(a,".ogg ").replace(f,".webm ");var c=l.split(" ");if(typeof c[1]==="undefined"){}else{if(c[1].indexOf(".mp4")>=1){t(s).append('<source src="'+c[1]+'" type="video/mp4">')}if(c[1].indexOf(".webm")>=1){t(s).append('<source src="'+c[1]+'" type="video/webm">')}if(c[1].indexOf(".ogg")>=1){t(s).append('<source src="'+c[1]+'" type="video/ogg">')}}if(typeof c[2]==="undefined"){}else{if(c[2].indexOf(".mp4")>=1){t(s).append('<source src="'+c[2]+'" type="video/mp4">')}if(c[2].indexOf(".webm")>=1){t(s).append('<source src="'+c[2]+'" type="video/webm">')}if(c[2].indexOf(".ogg")>=1){t(s).append('<source src="'+c[2]+'" type="video/ogg">')}}if(typeof c[3]==="undefined"){}else{if(c[3].indexOf(".mp4")>=1){t(s).append('<source src="'+c[3]+'" type="video/mp4">')}if(c[3].indexOf(".webm")>=1){t(s).append('<source src="'+c[3]+'" type="video/webm">')}if(c[3].indexOf(".ogg")>=1){t(s).append('<source src="'+c[3]+'" type="video/ogg">')}}});t("[class^='youtubelink_'],[class*=' youtubelink_']").each(function(){var n=t(this).attr("class");var r="youtubelink_"+n.split("youtubelink_")[1].split(" ")[0];var i=r;var s="//www.youtube.com/embed/"+e[i].split("watch?v=")[1].split(" ")[0]+"";t(this).attr("src",s);t(this).replaceWith('<iframe height="auto" allowfullscreen frameborder="0" id="'+t(this).attr("id")+'"  src="'+t(this).attr("src")+'" class="'+t(this).attr("class")+'" style="'+t(this).attr("style")+'">'+t(this).html()+"</iframe>")});t("[class^='vimeolink_'],[class*=' vimeolink_']").each(function(){var n=t(this).attr("class");var r="vimeolink_"+n.split("vimeolink_")[1].split(" ")[0];var i=r;var s="http://player.vimeo.com/video/"+e[i].split("vimeo.com/")[1].split(" ")[0]+"";t(this).attr("src",s);t(this).replaceWith('<iframe height="auto" webkitAllowFullScreen mozallowfullscreen allowfullscreen frameborder="0" id="'+t(this).attr("id")+'"  src="'+t(this).attr("src")+'" class="'+t(this).attr("class")+'" style="'+t(this).attr("style")+'">'+t(this).html()+"</iframe>")});t("[class^='backgroundvideo'],[class*=' backgroundvideo']").each(function(){var n=t(this).attr("class");var r="backgroundvideo_"+n.split("backgroundvideo_")[1].split(" ")[0];var i=r;var s="."+i;t(this).replaceWith('<video height="auto" id="'+t(this).attr("id")+'" class="'+n+'" style="display:block;position: absolute;bottom: 0px; right: 0px; min-width: 100%; min-height: 100%; width: auto; height: auto; overflow: hidden;" webkit-playsinline>'+t(this).html()+"</video>");var o=".mp4";var u=".ogg";var a=".webm";var f=" "+e[i].replace(o,".mp4 ").replace(u,".ogg ").replace(a,".webm ");var l=f.split(" ");if(typeof l[1]==="undefined"){}else{if(l[1].indexOf(".mp4")>=1){t(s).append('<source src="'+l[1]+'" type="video/mp4">')}if(l[1].indexOf(".webm")>=1){t(s).append('<source src="'+l[1]+'" type="video/webm">')}if(l[1].indexOf(".ogg")>=1){t(s).append('<source src="'+l[1]+'" type="video/ogg">')}}if(typeof l[2]==="undefined"){}else{if(l[2].indexOf(".mp4")>=1){t(s).append('<source src="'+l[2]+'" type="video/mp4">')}if(l[2].indexOf(".webm")>=1){t(s).append('<source src="'+l[2]+'" type="video/webm">')}if(l[2].indexOf(".ogg")>=1){t(s).append('<source src="'+l[2]+'" type="video/ogg">')}}if(typeof l[3]==="undefined"){}else{if(l[3].indexOf(".mp4")>=1){t(s).append('<source src="'+l[3]+'" type="video/mp4">')}if(l[3].indexOf(".webm")>=1){t(s).append('<source src="'+l[3]+'" type="video/webm">')}if(l[3].indexOf(".ogg")>=1){t(s).append('<source src="'+l[3]+'" type="video/ogg">')}}});t("[class^='poster_'],[class*=' poster_']").each(function(){var n=t(this).attr("class");var r="poster_"+n.split("poster_")[1].split(" ")[0];var i=r;t(this).attr("poster",e[i])});t(".controls").each(function(){t(".controls").attr("controls",true)});t(".autoplay").each(function(){t(".autoplay").attr("autoplay",true)});t(".loop").each(function(){t(".loop").attr("loop",true)});t(".muted").each(function(){t(".muted").prop("muted",true)});t("[class^='audiolink'],[class*=' audiolink']").each(function(){var n=t(this).attr("class");var r="audiolink_"+n.split("audiolink_")[1].split(" ")[0];var i=r;var s="."+i;t(this).replaceWith('<audio height="auto" id="'+t(this).attr("id")+'" class="'+n+'" style="'+t(this).attr("style")+'">'+t(this).html()+"</audio>");var o=".mp3";var u=".ogg";var a=".wav";var f=" "+e[i].replace(o,".mp3 ").replace(u,".ogg ").replace(a,".wav ");var l=f.split(" ");if(typeof l[1]==="undefined"){}else{if(l[1].indexOf(".wav")>=1){t(s).append('<source src="'+l[1]+'" type="audio/wav">')}if(l[1].indexOf(".mp3")>=1){t(s).append('<source src="'+l[1]+'" type="audio/mpeg">')}if(l[1].indexOf(".ogg")>=1){t(s).append('<source src="'+l[1]+'" type="audio/ogg">')}}if(typeof l[2]==="undefined"){}else{if(l[2].indexOf(".wav")>=1){t(s).append('<source src="'+l[2]+'" type="audio/wav">')}if(l[2].indexOf(".mp3")>=1){t(s).append('<source src="'+l[2]+'" type="audio/mpeg">')}if(l[2].indexOf(".ogg")>=1){t(s).append('<source src="'+l[2]+'" type="audio/ogg">')}}if(typeof l[3]==="undefined"){}else{if(l[3].indexOf(".wav")>=1){t(s).append('<source src="'+l[3]+'" type="audio/wav">')}if(l[3].indexOf(".mp3")>=1){t(s).append('<source src="'+l[3]+'" type="audio/mpeg">')}if(l[3].indexOf(".ogg")>=1){t(s).append('<source src="'+l[3]+'" type="audio/ogg">')}}});t("[class^='perspective_'],[class*=' perspective_']").each(function(){var e=t(this).attr("class");var n=e.split("perspective_")[1].split(" ")[0];t(this).css({perspective:n,"-webkit-perspective":n})});t("[class^='rotate'],[class*=' rotate']").each(function(){var e=t(this);var n=t(this).attr("class");if(!t(this).is('[class*="rotatex_"]')){var r=0}else{var r=n.split("rotatex_")[1].split(" ")[0]}if(!t(this).is('[class*="rotatey_"]')){var i=0}else{var i=n.split("rotatey_")[1].split(" ")[0]}if(!t(this).is('[class*="rotatez_"]')){var s=0}else{var s=n.split("rotatez_")[1].split(" ")[0]}var o="rotateX("+r+"deg) "+"rotateY("+i+"deg) "+"rotateZ("+s+"deg)";e.css({"-webkit-transform":o,"-moz-transform":o,"-o-transform":o,"-ms-transform":o,transform:o})});t(".cube3d").each(function(){var e=t(this).find(">:first-child");var n=t(this).find("div").eq(1);var r=t(this).find("div").eq(2);var i=t(this).find("div").eq(3);var s=t(this).find("div").eq(4);var o=t(this).find("div").eq(5);var u=e.height();var a=e.width();var f=e.width()/2;var l=e.height()/2;var c=o.width();var h=o.height();var p="translateZ("+f+"px)";var d="translateZ("+l+"px)";var v=f-u;var m=Math.abs(v);if(c==u){var g="translateZ("+l+"px)"}if(c>u){var g="translateZ(-"+m+"px)";if(f<u){var g="translateZ("+m+"px)"}}if(c<u){var g="translateZ("+m+"px)"}t(this).css({"-webkit-transform-style":"preserve-3d","-moz-transform-style":"preserve-3d","-o-transform-style":"preserve-3d","-ms-transform-style":"preserve-3d","transform-style":"preserve-3d"});o.addClass("sixth").css({height:a,"-webkit-transform":"rotateX(90deg)"+p,"-moz-transform":"rotateX(90deg)"+p,"-o-transform":"rotateX(90deg)"+p,"-ms-transform":"rotateX(90deg)"+p,transform:"rotateX(90deg)"+p});s.addClass("five").css({height:a,"-webkit-transform":"rotateX(-90deg)"+g+"rotate(180deg)","-moz-transform":"rotateX(-90deg)"+g+"rotate(180deg)","-o-transform":"rotateX(-90deg)"+g+"rotate(180deg)","-ms-transform":"rotateX(-90deg)"+g+"rotate(180deg)",transform:"rotateX(-90deg)"+g+"rotate(180deg)"});i.addClass("fourth").css({"-webkit-transform":"rotateY(-90deg)"+p,"-moz-transform":"rotateY(-90deg)"+p,"-o-transform":"rotateY(-90deg)"+p,"-ms-transform":"rotateY(-90deg)"+p,transform:"rotateY(-90deg)"+p});r.addClass("third").css({"-webkit-transform":"rotateY(180deg)"+p,"-moz-transform":"rotateY(180deg)"+p,"-o-transform":"rotateY(180deg)"+p,"-ms-transform":"rotateY(180deg)"+p,transform:"rotateY(180deg)"+p});n.addClass("second").css({"-webkit-transform":"rotateY(90deg)"+p,"-moz-transform":"rotateY(90deg)"+p,"-o-transform":"rotateY(90deg)"+p,"-ms-transform":"rotateY(90deg)"+p,transform:"rotateY(90deg)"+p});e.addClass("first").css({"-webkit-transform":p,"-moz-transform":p,"-o-transform":p,"-ms-transform":p,transform:p})});t(".triangle").each(function(){var e=t(this).find(">:first-child");var n=t(this).find("div").eq(1);var r=t(this).find("div").eq(2);t(this).css({"-webkit-transform-style":"preserve-3d","-moz-transform-style":"preserve-3d","-o-transform-style":"preserve-3d","-ms-transform-style":"preserve-3d","transform-style":"preserve-3d"});r.addClass("third").css({"-webkit-transform":"rotateY(180deg)","-moz-transform":"rotateY(180deg)","-o-transform":"rotateY(180deg)","-ms-transform":"rotateY(180deg)",transform:"rotateY(180deg)","-webkit-transform-origin":"50% 0%","-ms-transform-origin":"50% 0%","transform-origin":"50% 0%"});n.addClass("second").css({"-webkit-transform":"rotateY(-60deg)","-moz-transform":"rotateY(-60deg)","-o-transform":"rotateY(-60deg)","-ms-transform":"rotateY(-60deg)",transform:"rotateY(-60deg)","-webkit-transform-origin":"0% 50%","-ms-transform-origin":"0% 50%","transform-origin":"0% 50%"});e.addClass("first").css({"-webkit-transform":"rotateY(60deg)","-moz-transform":"rotateY(60deg)","-o-transform":"rotateY(60deg)","-ms-transform":"rotateY(60deg)",transform:"rotateY(60deg)","-webkit-transform-origin":"100% 50%","-ms-transform-origin":"100% 50%","transform-origin":"100% 50%"})});t("[class^='stop_'],[class*=' stop_']").click(function(){var e=t(this).attr("class");var n="."+e.split("stop_")[1].split(" ")[0];var r=t(n).attr("id");var i=document.getElementById(r);setTimeout(function(){i.pause();i.currentTime=0},100)});t("[class^='play_'],[class*=' play_']").click(function(){var e=t(this).attr("class");var n="."+e.split("play_")[1].split(" ")[0];var r=t(n).attr("id");var i=document.getElementById(r);if(i.paused){i.play()}else{i.pause()}});t("[class^='mute_'],[class*=' mute_']").click(function(){var e=t(this).attr("class");var n="."+e.split("mute_")[1].split(" ")[0];var r=t(n).attr("id");var i=document.getElementById(r);if(i.muted==false)i.muted=true;else i.muted=false});t("[class^='timebar_'],[class*=' timebar_']").each(function(){var e=t(this).attr("class");var n=t(this).attr("id");var r=t(this).attr("style")+"display:block;";t(this).replaceWith('<input type="range" id="'+n+'" class="'+e+'" style="'+r+'" value="0">');var i="."+e.split("timebar_")[1].split(" ")[0];var s=t(i).attr("id");var o=document.getElementById(s);var u=document.getElementById(n);u.addEventListener("change",function(){var e=o.duration*(u.value/100);o.currentTime=e});o.addEventListener("timeupdate",function(){var e=100/o.duration*o.currentTime;u.value=e});u.addEventListener("mousedown",function(){o.pause()});u.addEventListener("mouseup",function(){o.play()})});t("[class^='volumebar_'],[class*=' volumebar_']").each(function(){var e=t(this).attr("class");var n=t(this).attr("id");var r=t(this).attr("style")+"display:block;";t(this).replaceWith('<input type="range" id="'+n+'" class="'+e+'" style="'+r+'" min="0" max="1" step="0.1" value="1">');var i="."+e.split(" volumebar_")[1].split(" ")[0];var s=t(i).attr("id");var o=document.getElementById(s);var u=document.getElementById(n);u.addEventListener("change",function(){o.volume=u.value})});t("[class^='fullscreen_'],[class*='fullscreen_']").click(function(){var e=t(this).attr("class");var n="."+e.split("fullscreen_")[1].split(" ")[0];var r=t(n).attr("id");var i=document.getElementById(r);if(i.requestFullscreen){i.requestFullscreen()}else if(i.mozRequestFullScreen){i.mozRequestFullScreen()}else if(i.webkitRequestFullscreen){i.webkitRequestFullscreen()}});t("[class^='curtime_'],[class*=' curtime_']").each(function(){var e=t(this).attr("class");var n=t(this).attr("id");var r=t(this).attr("style")+"display:block;";t(this).replaceWith('<span id="'+n+'" class="'+e+'" style="'+r+'" >00:00</span>');var i="."+e.split("curtime_")[1].split(" ")[0];var s=t(i).attr("id");var o=document.getElementById(s);var u=document.getElementById(n);o.addEventListener("timeupdate",function(){var e=Math.floor(o.currentTime/60);var t=Math.floor(o.currentTime-e*60);if(t<10){t="0"+t}if(e<10){e="0"+e}u.innerHTML=e+":"+t})});t("[class^='durtime_'],[class*=' durtime_']").each(function(){var e=t(this).attr("class");var n=t(this).attr("id");var r=t(this).attr("style")+"display:block;";t(this).replaceWith('<span id="'+n+'" class="'+e+'" style="'+r+'" >00:00</span>');var i="."+e.split("durtime_")[1].split(" ")[0];var s=t(i).attr("id");var o=document.getElementById(s);var u=document.getElementById(n);o.addEventListener("timeupdate",function(){var e=Math.floor(o.duration/60);var t=Math.floor(o.duration-e*60);if(t<10){t="0"+t}if(e<10){e="0"+e}u.innerHTML=e+":"+t})});t(".slideshow").each(function(){function v(){p.each(function(e){t(this).animate({left:-(c*(Math.abs(a)-e))},{duration:2e3,step:function(){t(this).css({"background-position-x":-t(this).position().left/5})}})})}function m(){p.each(function(e){t(this).css("left",c*(e-a))})}function g(){var e=r.height();var n=r.width();c=n;p.each(function(e){t(this).css("left",c*(e-a))})}function b(){var e=setInterval(function(){w()},7e3);t(".prev_slideshow, .next_slideshow").on("click",function(t){clearInterval(e)})}function w(){if(a<l-1){a++}else{a=0}v()}var n=t(this).children();var r=t(this);var i=t(".prev_slideshow");var s=t(".next_slideshow");var o=t(".toc");var u=t(".slide");n.addClass("slide");t(this).find(i).removeClass("slide");t(this).find(s).removeClass("slide");t(this).find(o).removeClass("slide");var a=0;var f;var l;var c;var h;var p=t(this).children(".slide");var d=t(this).parent().children(".slide");t(function(){l=p.length;g();t(this).find(s).on("click",function(e){if(a<l-1){a++}else{a=0}v()});t(this).find(i).on("click",function(e){if(a>0){a--}else{a=l-1}v()});t(e).resize(function(){g()});b()});var y});t(".verticalslideshow").each(function(){function v(){p.each(function(e){t(this).animate({top:-(h*(Math.abs(a)-e))},{duration:2e3,step:function(){t(this).css({"background-position-x":-t(this).position().top/5})}})})}function m(){p.each(function(e){t(this).css("top",h*(e-a))})}function g(){var e=r.height();var n=r.width();c=n;h=e;p.each(function(e){t(this).css("top",h*(e-a))})}function b(){var e=setInterval(function(){w()},7e3);t(".prev_slideshow, .next_slideshow").on("click",function(t){clearInterval(e)})}function w(){if(a<l-1){a++}else{a=0}v()}var n=t(this).children();var r=t(this);var i=t(".prev_slideshow");var s=t(".next_slideshow");var o=t(".toc");var u=t(".slide");n.addClass("slide");t(this).find(i).removeClass("slide");t(this).find(s).removeClass("slide");t(this).find(o).removeClass("slide");var a=0;var f;var l;var c;var h;var p=t(this).children(".slide");var d=t(this).parent().children(".slide");t(function(){l=p.length;g();t(this).find(s).on("click",function(e){if(a<l-1){a++}else{a=0}v()});t(this).find(i).on("click",function(e){if(a>0){a--}else{a=l-1}v()});t(e).resize(function(){g()});b()});var y});t(".text3d").each(function(){t(this).css("text-shadow","rgb(104, 104, 104) 0px 0px 2px, rgb(221, 221, 221) 0px 1px 1px, rgb(214, 214, 214) 0px 2px 1px, rgb(204, 204, 204) 0px 3px 1px, rgb(197, 197, 197) 0px 4px 1px, rgb(193, 193, 193) 0px 5px 1px, rgb(187, 187, 187) 0px 6px 1px, rgb(119, 119, 119) 0px 7px 1px, rgba(100, 100, 100, 0.4) 0px 8px 3px, rgba(100, 100, 100, 0.0980392) 0px 9px 5px, rgba(100, 100, 100, 0.14902) 0px 10px 7px, rgba(100, 100, 100, 0.2) 0px 11px 9px, rgba(100, 100, 100, 0.247059) 0px 12px 11px, rgba(100, 100, 100, 0.298039) 0px 13px 15px")});t(".center").css({margin:"0px auto",position:"relative",left:"0px"});t("body").append(t(".fixed").css("position","fixed"))};e.EdgeHero=n})(window,jQuery);AdobeEdge.bootstrapCallback(function(e){setTimeout(function(){EdgeHero.performHeroics()},1)})