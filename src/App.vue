<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.dis{
  display:flex;
  font-display: row;
}
/* 媒介查询 */

@media screen and(min-width: 1024px){
body{font-size: 12px}
} /*>=1024的设备屏幕*/
 
@media screen and(min-width: 1100px) {
body{font-size: 14px}
} /*>=1100的设备屏幕*/
@media (min-width: 1280px) {
body{font-size: 18px;}
} /*>=1280的设备屏幕*/
 
@media screen and(min-width: 1366px) {
body{font-size: 20px;}
} /*>=1366的设备屏幕*/ 
 
@media screen and(min-width: 1440px) {
body{font-size: 24px !important;}
} /*>=1440的设备屏幕*/ 
 
@media screen and(min-width: 1680px) {
body{font-size: 26px;}
}  /*>=1680的设备屏幕*/ 
@media screen and(min-width: 1920px) {
body{font-size: 30px;}
}  /*>=1920的设备屏幕*/ 
</style>
