var MetaMaskOnboarding=function(){"use strict";function e(e,t,r,s){return new(r||(r=Promise))(function(i,n){function o(e){try{c(s.next(e))}catch(e){n(e)}}function a(e){try{c(s.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(o,a)}c((s=s.apply(e,t||[])).next())})}function t(e,t){var r,s,i,n,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return n={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function a(n){return function(a){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,s&&(i=2&n[0]?s.return:n[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,n[1])).done)return i;switch(s=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return o.label++,{value:n[1],done:!1};case 5:o.label++,s=n[1],n=[0];continue;case 7:n=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){o=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){o.label=n[1];break}if(6===n[0]&&o.label<i[1]){o.label=i[1],i=n;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(n);break}i[2]&&o.ops.pop(),o.trys.pop();continue}n=t.call(e,o)}catch(e){n=[6,e],s=0}finally{r=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,a])}}}const r={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},s={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},i={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},n={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},o={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class a{static getFirstMatch(e,t){const r=t.match(e);return r&&r.length>0&&r[1]||""}static getSecondMatch(e,t){const r=t.match(e);return r&&r.length>1&&r[2]||""}static matchAndReturnConst(e,t,r){if(e.test(t))return r}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){const t=e.split(".").splice(0,2).map(e=>parseInt(e,10)||0);if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){const t=e.split(".").splice(0,2).map(e=>parseInt(e,10)||0);if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,t,r=!1){const s=a.getVersionPrecision(e),i=a.getVersionPrecision(t);let n=Math.max(s,i),o=0;const c=a.map([e,t],e=>{const t=n-a.getVersionPrecision(e),r=e+new Array(t+1).join(".0");return a.map(r.split("."),e=>new Array(20-e.length).join("0")+e).reverse()});for(r&&(o=n-Math.min(s,i)),n-=1;n>=o;){if(c[0][n]>c[1][n])return 1;if(c[0][n]===c[1][n]){if(n===o)return 0;n-=1}else if(c[0][n]<c[1][n])return-1}}static map(e,t){const r=[];let s;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(s=0;s<e.length;s+=1)r.push(t(e[s]));return r}static find(e,t){let r,s;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,s=e.length;r<s;r+=1){const s=e[r];if(t(s,r))return s}}static assign(e,...t){const r=e;let s,i;if(Object.assign)return Object.assign(e,...t);for(s=0,i=t.length;s<i;s+=1){const e=t[s];if("object"==typeof e&&null!==e){Object.keys(e).forEach(t=>{r[t]=e[t]})}}return e}static getBrowserAlias(e){return r[e]}static getBrowserTypeByAlias(e){return s[e]||""}}const c=/version\/(\d+(\.?_?\d+)+)/i,d=[{test:[/googlebot/i],describe(e){const t={name:"Googlebot"},r=a.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/opera/i],describe(e){const t={name:"Opera"},r=a.getFirstMatch(c,e)||a.getFirstMatch(/(?:opera)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe(e){const t={name:"Opera"},r=a.getFirstMatch(/(?:opr|opios)[\s\/](\S+)/i,e)||a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe(e){const t={name:"Samsung Internet for Android"},r=a.getFirstMatch(c,e)||a.getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe(e){const t={name:"NAVER Whale Browser"},r=a.getFirstMatch(c,e)||a.getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe(e){const t={name:"MZ Browser"},r=a.getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i,e)||a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/focus/i],describe(e){const t={name:"Focus"},r=a.getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i,e)||a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/swing/i],describe(e){const t={name:"Swing"},r=a.getFirstMatch(/(?:swing)[\s\/](\d+(?:\.\d+)+)/i,e)||a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/coast/i],describe(e){const t={name:"Opera Coast"},r=a.getFirstMatch(c,e)||a.getFirstMatch(/(?:coast)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe(e){const t={name:"Yandex Browser"},r=a.getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.?_?\d+)+)/i,e)||a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe(e){const t={name:"UC Browser"},r=a.getFirstMatch(c,e)||a.getFirstMatch(/(?:ucbrowser)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe(e){const t={name:"Maxthon"},r=a.getFirstMatch(c,e)||a.getFirstMatch(/(?:Maxthon|mxios)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe(e){const t={name:"Epiphany"},r=a.getFirstMatch(c,e)||a.getFirstMatch(/(?:epiphany)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe(e){const t={name:"Puffin"},r=a.getFirstMatch(c,e)||a.getFirstMatch(/(?:puffin)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe(e){const t={name:"Sleipnir"},r=a.getFirstMatch(c,e)||a.getFirstMatch(/(?:sleipnir)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe(e){const t={name:"K-Meleon"},r=a.getFirstMatch(c,e)||a.getFirstMatch(/(?:k-meleon)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe(e){const t={name:"WeChat"},r=a.getFirstMatch(/(?:micromessenger)[\s\/](\d+(\.?_?\d+)+)/i,e)||a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe(e){const t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=a.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[\/](\d+(\.?_?\d+)+)/i,e)||a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe(e){const t={name:"Internet Explorer"},r=a.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe(e){const t={name:"Microsoft Edge"},r=a.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe(e){const t={name:"Microsoft Edge"},r=a.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe(e){const t={name:"Vivaldi"},r=a.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe(e){const t={name:"SeaMonkey"},r=a.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe(e){const t={name:"Sailfish"},r=a.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe(e){const t={name:"Amazon Silk"},r=a.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe(e){const t={name:"PhantomJS"},r=a.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe(e){const t={name:"SlimerJS"},r=a.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){const t={name:"BlackBerry"},r=a.getFirstMatch(c,e)||a.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe(e){const t={name:"WebOS Browser"},r=a.getFirstMatch(c,e)||a.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe(e){const t={name:"Bada"},r=a.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe(e){const t={name:"Tizen"},r=a.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe(e){const t={name:"QupZilla"},r=a.getFirstMatch(/(?:qupzilla)[\s\/](\d+(\.?_?\d+)+)/i,e)||a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe(e){const t={name:"Firefox"},r=a.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe(e){const t={name:"Electron"},r=a.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe(e){const t={name:"Chromium"},r=a.getFirstMatch(/(?:chromium)[\s\/](\d+(\.?_?\d+)+)/i,e)||a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe(e){const t={name:"Chrome"},r=a.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe(e){const t={name:"Google Search"},r=a.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test(e){const t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe(e){const t={name:"Android Browser"},r=a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe(e){const t={name:"PlayStation 4"},r=a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe(e){const t={name:"Safari"},r=a.getFirstMatch(c,e);return r&&(t.version=r),t}},{test:[/.*/i],describe(e){const t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:a.getFirstMatch(t,e),version:a.getSecondMatch(t,e)}}}];var u=[{test:[/Roku\/DVP/],describe(e){const t=a.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:n.Roku,version:t}}},{test:[/windows phone/i],describe(e){const t=a.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:n.WindowsPhone,version:t}}},{test:[/windows /i],describe(e){const t=a.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=a.getWindowsVersionName(t);return{name:n.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe(e){const t=a.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return{name:n.iOS,version:t}}},{test:[/macintosh/i],describe(e){const t=a.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=a.getMacOSVersionName(t),s={name:n.MacOS,version:t};return r&&(s.versionName=r),s}},{test:[/(ipod|iphone|ipad)/i],describe(e){const t=a.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:n.iOS,version:t}}},{test(e){const t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe(e){const t=a.getFirstMatch(/android[\s\/-](\d+(\.\d+)*)/i,e),r=a.getAndroidVersionName(t),s={name:n.Android,version:t};return r&&(s.versionName=r),s}},{test:[/(web|hpw)[o0]s/i],describe(e){const t=a.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:n.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(e){const t=a.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||a.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||a.getFirstMatch(/\bbb(\d+)/i,e);return{name:n.BlackBerry,version:t}}},{test:[/bada/i],describe(e){const t=a.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:n.Bada,version:t}}},{test:[/tizen/i],describe(e){const t=a.getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i,e);return{name:n.Tizen,version:t}}},{test:[/linux/i],describe:()=>({name:n.Linux})},{test:[/CrOS/],describe:()=>({name:n.ChromeOS})},{test:[/PlayStation 4/],describe(e){const t=a.getFirstMatch(/PlayStation 4[\/\s](\d+(\.\d+)*)/i,e);return{name:n.PlayStation4,version:t}}}],h=[{test:[/googlebot/i],describe:()=>({type:"bot",vendor:"Google"})},{test:[/huawei/i],describe(e){const t=a.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:i.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:()=>({type:i.tablet,vendor:"Nexus"})},{test:[/ipad/i],describe:()=>({type:i.tablet,vendor:"Apple",model:"iPad"})},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe:()=>({type:i.tablet,vendor:"Apple",model:"iPad"})},{test:[/kftt build/i],describe:()=>({type:i.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"})},{test:[/silk/i],describe:()=>({type:i.tablet,vendor:"Amazon"})},{test:[/tablet(?! pc)/i],describe:()=>({type:i.tablet})},{test(e){const t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe(e){const t=a.getFirstMatch(/(ipod|iphone)/i,e);return{type:i.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:()=>({type:i.mobile,vendor:"Nexus"})},{test:[/[^-]mobi/i],describe:()=>({type:i.mobile})},{test:e=>"blackberry"===e.getBrowserName(!0),describe:()=>({type:i.mobile,vendor:"BlackBerry"})},{test:e=>"bada"===e.getBrowserName(!0),describe:()=>({type:i.mobile})},{test:e=>"windows phone"===e.getBrowserName(),describe:()=>({type:i.mobile,vendor:"Microsoft"})},{test(e){const t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:()=>({type:i.tablet})},{test:e=>"android"===e.getOSName(!0),describe:()=>({type:i.mobile})},{test:e=>"macos"===e.getOSName(!0),describe:()=>({type:i.desktop,vendor:"Apple"})},{test:e=>"windows"===e.getOSName(!0),describe:()=>({type:i.desktop})},{test:e=>"linux"===e.getOSName(!0),describe:()=>({type:i.desktop})},{test:e=>"playstation 4"===e.getOSName(!0),describe:()=>({type:i.tv})},{test:e=>"roku"===e.getOSName(!0),describe:()=>({type:i.tv})}],l=[{test:e=>"microsoft edge"===e.getBrowserName(!0),describe(e){if(/\sedg\//i.test(e))return{name:o.Blink};const t=a.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:o.EdgeHTML,version:t}}},{test:[/trident/i],describe(e){const t={name:o.Trident},r=a.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:e=>e.test(/presto/i),describe(e){const t={name:o.Presto},r=a.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test(e){const t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe(e){const t={name:o.Gecko},r=a.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:()=>({name:o.Blink})},{test:[/(apple)?webkit/i],describe(e){const t={name:o.WebKit},r=a.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];class g{constructor(e,t=!1){if(null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const e=a.find(d,e=>{if("function"==typeof e.test)return e.test(this);if(e.test instanceof Array)return e.test.some(e=>this.test(e));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const e=a.find(u,e=>{if("function"==typeof e.test)return e.test(this);if(e.test instanceof Array)return e.test.some(e=>this.test(e));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){const{name:t}=this.getOS();return e?String(t).toLowerCase()||"":t||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){const{type:t}=this.getPlatform();return e?String(t).toLowerCase()||"":t||""}parsePlatform(){this.parsedResult.platform={};const e=a.find(h,e=>{if("function"==typeof e.test)return e.test(this);if(e.test instanceof Array)return e.test.some(e=>this.test(e));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const e=a.find(l,e=>{if("function"==typeof e.test)return e.test(this);if(e.test instanceof Array)return e.test.some(e=>this.test(e));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return a.assign({},this.parsedResult)}satisfies(e){const t={};let r=0;const s={};let i=0;if(Object.keys(e).forEach(n=>{const o=e[n];"string"==typeof o?(s[n]=o,i+=1):"object"==typeof o&&(t[n]=o,r+=1)}),r>0){const e=Object.keys(t),r=a.find(e,e=>this.isOS(e));if(r){const e=this.satisfies(t[r]);if(void 0!==e)return e}const s=a.find(e,e=>this.isPlatform(e));if(s){const e=this.satisfies(t[s]);if(void 0!==e)return e}}if(i>0){const e=Object.keys(s),t=a.find(e,e=>this.isBrowser(e,!0));if(void 0!==t)return this.compareVersion(s[t])}}isBrowser(e,t=!1){const r=this.getBrowserName().toLowerCase();let s=e.toLowerCase();const i=a.getBrowserTypeByAlias(s);return t&&i&&(s=i.toLowerCase()),s===r}compareVersion(e){let t=[0],r=e,s=!1;const i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(s=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(s=!0,r=e.substr(1)),t.indexOf(a.compareVersions(i,r,s))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(e=>this.is(e))}}var m={INSTALLED:"INSTALLED",NOT_INSTALLED:"NOT_INSTALLED",REGISTERED:"REGISTERED",REGISTERING:"REGISTERING",RELOADING:"RELOADING"},p={CHROME:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",FIREFOX:"https://addons.mozilla.org/firefox/addon/ether-metamask/",DEFAULT:"https://metamask.io"},b="REGISTRATION_IN_PROGRESS";return function(){function r(e){var t=void 0===e?{}:e,s=t.forwarderOrigin,i=void 0===s?"https://fwd.metamask.io":s,n=t.forwarderMode,o=void 0===n?r.FORWARDER_MODE.INJECT:n;this.forwarderOrigin=i,this.forwarderMode=o,this.state=r.isMetaMaskInstalled()?m.INSTALLED:m.NOT_INSTALLED;var a=r._detectBrowser();this.downloadUrl=a?p[a]:p.DEFAULT,this._onMessage=this._onMessage.bind(this),this._onMessageFromForwarder=this._onMessageFromForwarder.bind(this),this._openForwarder=this._openForwarder.bind(this),this._openDownloadPage=this._openDownloadPage.bind(this),this.startOnboarding=this.startOnboarding.bind(this),this.stopOnboarding=this.stopOnboarding.bind(this),window.addEventListener("message",this._onMessage),o===r.FORWARDER_MODE.INJECT&&"true"===sessionStorage.getItem(b)&&r._injectForwarder(this.forwarderOrigin)}return r.prototype._onMessage=function(e){if(e.origin===this.forwarderOrigin)return"metamask:reload"===e.data.type?this._onMessageFromForwarder(e):void console.debug("Unknown message from '"+e.origin+"' with data "+JSON.stringify(e.data))},r.prototype._onMessageUnknownStateError=function(e){throw new Error("Unknown state: '"+e+"'")},r.prototype._onMessageFromForwarder=function(s){return e(this,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:switch(this.state){case m.RELOADING:return[3,1];case m.NOT_INSTALLED:return[3,2];case m.INSTALLED:return[3,3];case m.REGISTERING:return[3,5];case m.REGISTERED:return[3,6]}return[3,7];case 1:return console.debug("Ignoring message while reloading"),[3,8];case 2:return console.debug("Reloading now to register with MetaMask"),this.state=m.RELOADING,location.reload(),[3,8];case 3:return console.debug("Registering with MetaMask"),this.state=m.REGISTERING,[4,r._register()];case 4:return e.sent(),this.state=m.REGISTERED,s.source.postMessage({type:"metamask:registrationCompleted"},s.origin),this.stopOnboarding(),[3,8];case 5:return console.debug("Already registering - ignoring reload message"),[3,8];case 6:return console.debug("Already registered - ignoring reload message"),[3,8];case 7:this._onMessageUnknownStateError(this.state),e.label=8;case 8:return[2]}})})},r.prototype.startOnboarding=function(){sessionStorage.setItem(b,"true"),this._openDownloadPage(),this._openForwarder()},r.prototype.stopOnboarding=function(){"true"===sessionStorage.getItem(b)&&(this.forwarderMode===r.FORWARDER_MODE.INJECT&&(console.debug("Removing forwarder"),r._removeForwarder()),sessionStorage.setItem(b,"false"))},r.prototype._openForwarder=function(){this.forwarderMode===r.FORWARDER_MODE.OPEN_TAB?window.open(this.forwarderOrigin,"_blank"):r._injectForwarder(this.forwarderOrigin)},r.prototype._openDownloadPage=function(){window.open(this.downloadUrl,"_blank")},r.isMetaMaskInstalled=function(){return Boolean(window.ethereum&&window.ethereum.isMetaMask)},r._register=function(){return window.ethereum.request({method:"wallet_registerOnboarding"})},r._injectForwarder=function(e){var t=document.body,r=document.createElement("iframe");r.setAttribute("height","0"),r.setAttribute("width","0"),r.setAttribute("style","display: none;"),r.setAttribute("src",e),r.setAttribute("id","FORWARDER_ID"),t.insertBefore(r,t.children[0])},r._removeForwarder=function(){var e;null===(e=document.getElementById("FORWARDER_ID"))||void 0===e||e.remove()},r._detectBrowser=function(){var e=class{static getParser(e,t=!1){if("string"!=typeof e)throw new Error("UserAgent should be a string");return new g(e,t)}static parse(e){return new g(e).getResult()}static get BROWSER_MAP(){return s}static get ENGINE_MAP(){return o}static get OS_MAP(){return n}static get PLATFORMS_MAP(){return i}}.parse(window.navigator.userAgent);return"Firefox"===e.browser.name?"FIREFOX":["Chrome","Chromium"].includes(e.browser.name||"")?"CHROME":null},r.FORWARDER_MODE={INJECT:"INJECT",OPEN_TAB:"OPEN_TAB"},r}()}();
