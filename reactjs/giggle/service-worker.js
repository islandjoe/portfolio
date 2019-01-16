/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/portfolio/reactjs/giggle/precache-manifest.30ac3fce14adf7ae66642a4b99d77a82.js"
=======
  "/precache-manifest.ac6ba17ecf27f6f4fa26ecaa88525bd1.js"
>>>>>>> 9fc9be65748b5c422e5d28e188bb58873eb2c64b
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

<<<<<<< HEAD
workbox.routing.registerNavigationRoute("/portfolio/reactjs/giggle/index.html", {
=======
workbox.routing.registerNavigationRoute("/index.html", {
>>>>>>> 9fc9be65748b5c422e5d28e188bb58873eb2c64b
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});
