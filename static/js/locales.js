function getCookie(e){for(var a=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var t=n[o];" "==t.charAt(0);)t=t.substring(1);if(0==t.indexOf(a))return t.substring(a.length,t.length)}return""}$(document).ready((function(){var e=navigator.language,a=getCookie("darkTheme"),n=getCookie("colorTheme");""!=getCookie("language")&&(e=getCookie("language")),"ar"!=(e=(e=e.split("-"))[0])&&(e="en"),"true"==a&&$("body").addClass("theme-dark"),""!=n&&$("body").addClass(n),function(e){i18n.init({resStore:resources,lng:e}),$(document).i18n(),"en"!=e&&$('input[type="search"]').attr("placeholder","بحث")}(e),function(e){"en"==e?($(".panel-sidebare").removeClass("panel-right"),$(".navbar .navbar-inner .language").removeClass("right"),$(".panel-sidebare").addClass("panel-left"),$(".navbar .navbar-inner .language").addClass("left"),$(".navbar .navbar-inner .language a").attr("data-panel","left")):($(".panel-sidebare").removeClass("panel-left"),$(".navbar .navbar-inner .language").removeClass("left"),$(".panel-sidebare").addClass("panel-right"),$(".navbar .navbar-inner .language").addClass("right"),$(".navbar .navbar-inner .language a").attr("data-panel","right"))}(e),function(e){if("en"==e){const e=document.createElement("link");e.href="static/css/app.css",e.rel="stylesheet",document.head.append(e)}else{const e=document.createElement("link");e.href="static/css/app-rtl.css",e.rel="stylesheet",document.head.append(e)}}(e),$("#changeLang").val(e),$("#currentLang").text($("#changeLang").children("option:selected").text()),$("#changeLang").on("change",(function(){var e=this.value;document.cookie="language="+e,location.reload()})),$(".toggle-menu").on("click",(function(){$(".panel.panel-reveal").toggleClass("panel-in"),$("#app").append('<div class="panel-backdrop panel-backdrop-in"></div>'),$("html").toggleClass("with-panel").toggleClass("with-panel-right-reveal")})),$("body").on("click",".panel-backdrop-in",(function(){$(".panel.panel-reveal").removeClass("panel-in"),$(".panel-backdrop").remove(),$("html").removeClass("with-panel").removeClass("with-panel-right-reveal")})),$("body").on("click",".advgb-accordion-header",(function(){$(this).parents(".advgb-accordion-item").find(".advgb-accordion-body").hasClass("show")?($(".advgb-accordion-header-icon").removeClass("rotate"),$(".advgb-accordion-body").removeClass("show")):($(".advgb-accordion-header-icon").removeClass("rotate"),$(".advgb-accordion-body").removeClass("show"),$(this).parents(".advgb-accordion-item").find(".advgb-accordion-header-icon").addClass("rotate"),$(this).parents(".advgb-accordion-item").find(".advgb-accordion-body").addClass("show"))}))}));var resources={dev:{translation:{key:"value"}},ar:{translation:{"Ios Store":"Ios Store","Last Update":"آخر التحديثات","Top Plus Apps":"أشهر تطبيقات البلس","Trending Games":"أشهر الألعاب",Today:"اليوم",Games:"الألعاب",Apps:"التطبيقات",Updates:"التحديثات",Search:"بحث","Dark Mode":"الوضع المظلم",Language:"اللغة",Help:"مساعدة",Settings:"اعدادات",Version:"الاصدار",Download:"تحميل","Description App":"وصف البرنامج",Information:"معلومات",Developer:"المطور",Size:"الحجم",General:"عام",Colors:"الألوان","Update App":"تحديث التطبيق",Default:"تلقائي",White:"أبيض",Red:"أحمر",Green:"أخضر",Blue:"أزرق",Pink:"زهري",Yellow:"أصفر",Orange:"برتقالي",Gray:"رمادي",Black:"أسود",App:"التطبيق","App name":"اسم التطبيق",Ios Store:"Ios Store",Development:"تطوير","Hibaldz Hack":"هبلدز هكر","Ios Store":"تطبيق","Contact Us":"اتصل بنا"SnapChat:"سناب شات","sww_p,",Twitter:"تويتر",sww_p"not need to be updated":"النسخة التي لديك لا تحتاج إلى تحديث","Not found":"غير متوفرة",Sorry:"للأسف","Requested content not found":"الصفحة المطلوبة غير متوفرة","No Results":"لا يوجد نتائج"}},en:{translation:{"Prof Store":"Prof Store","Last Update":"Last Update","Top Plus Apps":"Top Plus Apps","Trending Games":"Trending Games",Today:"Today",Games:"Games",Apps:"Apps",Updates:"Updates",Search:"Search","Dark Mode":"Dark Mode",Language:"Language",Help:"Help",Settings:"Settings",Version:"Version",Download:"Download","Description App":"Description App",Information:"Information",Developer:"Developer",Size:"Size",General:"General",Colors:"Colors","Update App":"Update App",Default:"Default",White:"White",Red:"Red",Green:"Green",Blue:"Blue",Pink:"Pink",Yellow:"Yellow",Orange:"Orange",Gray:"Gray",Black:"Black",App:"App","App name":"App Name",Prof:"prof",Development:"Development","Digital Trends":"Digital Trends","PROF App":"PROF App","Contact Us":"Contact Us",Email:"Email",Facebook:"Facebook",Twitter:"Twitter","not need to be updated":"The version that you have does not need to be updated","Not found":"Not found",Sorry:"Sorry","Requested content not found":"Requested content not found","No Results":"No Results"}}};
