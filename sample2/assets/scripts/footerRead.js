"use strict";
var isModePC = true;
var ua = navigator.userAgent;
if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPod') > -1 || ua.indexOf('Android') > -1) {
  isModePC = false;
}
if (isModePC) {
  document.writeln('<script type="text/javascript" src="/shared/cmn_footer/html/footer_nav.js" charset="utf-8"></script>');
} else {
  document.writeln('<script type="text/javascript" src="/sp/shared/cmn_footer/html/footer_nav.js" charset="utf-8"></script>');
}