/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["Category.html","c53cab44bb2662e9dce9dcfdb6b2a16b"],["Category1.html","a61053a79d03b158cf7a7cddf30af62a"],["Category2.html","70e465d4322f6d901fe01003ac2b825f"],["Database-gray-48.png","243fa39cdbf6642fe3479a3d7eb61a8d"],["Default-568h@2x.png","e2e49b3753512203bdfebb5e43b0d146"],["Default.png","83e735d973e2f44d55dc2b1535d3e45e"],["Default@2x.png","ca3167d40c47d6e5e137202d385c8a42"],["Gift-green-48copy.png","08bde2fb6cb703f5b0ff73c3f6ebb15e"],["Icon-60@2x.png","f788a55012b2cf54c115665d42c928d1"],["Icon-60@3x.png","4dd23cd4a2b2ecf8fe811e6b93c17d49"],["Icon-76.png","59602fa06093ed19b41880794f0be655"],["Icon-76@2x.png","42593f4f3db33b5637424117db6989c1"],["Icon@2x.png","00a1287d5104733ed0ec666bf1bee74a"],["Page1_1.html","76f7eceb0916350f0909b6d8d038ecfc"],["Page1_2.html","7204897fa9986b6a5e2f69b2f84eebaa"],["Page1_3.html","0058d1ed24fb8f8c3cd3f3cc1eb7efae"],["Page1_4.html","20609fdd5725e95fa7e93c9d7aab587a"],["Page1_5.html","21a9e0d7dfc4850c19e272fd88a3fa85"],["Page1_6.html","d04e252e5e41bc54bf2bf2646a2671c9"],["SamplelistArrow.png","490afb89064f62b3fa173d33c1faeca6"],["Untitled-1.png","1aee6e706dee6d75626ab92fc3d26de5"],["aboutus.css","0c2146f48270de9211316615f02975a8"],["aboutus.html","9830a70fed4a620bd0ff0011f8a7d057"],["alarm-icon.png","efa1f58341e6f260527af1b8e5452380"],["appsmenupageitem1.png","d3e65949f372999178bbdff31a646ac5"],["appsmenupageitem2.png","57c0f67058b640493543003a38173871"],["appsmenupageitem3.png","5f4ef76209400ac3735ba018f3ea3c57"],["book.png","ed3e1c131fe5a56173f15019a8f79d16"],["buttonmenupageitem.png","8a0daf437eb0cb345e36518bfbf223a3"],["buttonquik.png","2824dae3b4623f2a7165fea7fa1c940a"],["calculator-icon.png","18a2fb28966c43b52aa06b78fe2fbdef"],["calendar-icon.png","4fc7502d5225ee206cb150637c455b4b"],["camera-icon.png","dac26ba343624c9962a21052f8511df8"],["categories.png","6e9e49fd3fcfbaf86eeef76406eae3d2"],["circlepagemenuicon.png","f3fe7d45f89b27d2c0602813da5b34a3"],["circlepagemenuicon1.png","794bac966a40481d7cfd782ba9e8e9fe"],["circlepagemenuicon2.png","a4243eccc8f698250a36fc5a37a3c978"],["circlepagemenuicon3.png","49e0b375227e23a70eb822c90f3123bc"],["circlepagemenuicon4.png","03314db15a4dbfa61ab86c9bfda344e5"],["circlepagemenuicon5.png","5ced17dc06786ad629022c883887a204"],["circles_color.png","2824cf23a75b36cd03a1d711eeaccbcb"],["circlesimple.png","f6ee772746e2ae137c28ca073ec2bc19"],["coffee.png","48445caed5cebc30295c252bd2bad068"],["colormenupagearrow.png","000bc9063497c1f2b06a1b02154c06de"],["colormenupageitem1.png","a4f85a7c27dda9bc46e3d23e499e5ca1"],["content.png","8f7154d3f4c53ef90eb2785dddbab0af"],["cover.png","de7d96fdf17711ba816923ff40ade5e6"],["demo-image.jpg","9a7634be979318b399279ae60567b883"],["docs-icon.png","3bb8cc3d75a92cabff7129c4b10068c2"],["featured.png","fe390806e0148ab9f858f83ccd2648dc"],["feedback.html","4abb940cecb1a8cc5bea8c182b0d03a9"],["footer.png","b614cc5b728dedfa84182a05856709ff"],["footersidebar.png","ab6c9daa5ac8f2e9f58f44ee2d173426"],["framework7.css","05f3a19af03bb58794823e54919dd81c"],["framework7.js","afa3601732ced4f6a5dfffee5c73ca0e"],["galery1.png","99f9d82fd2fbcd590bbcdc9601e73824"],["gallery-icon.png","4cd3a153d25cc812a96c70d2b2124ac1"],["gallery.html","85fe64234bb39166e6fd7976db3f1b79"],["games-icon.png","b9acf02e9c5e4baad614ca2a74b73f40"],["gridmenuicon1.png","065d948eb197d8aea2ee742fb2819c12"],["gridmenuicon2.png","4db2b019c74b00a1328be7ca78756187"],["gridmenuicon3.png","e755fb2814e7cc2abd2f236cba4fdf09"],["gridmenuicon4.png","dfde1b6b33dd0de7da7a1429b5e7c8c0"],["header.png","59094349b39385b55f805658befc16ed"],["headimage.jpg","6d649572e8b687a515a261611f611558"],["healthyfood.jpg","7e0e7d92ea6addad422b06b4515989f4"],["healthyfood2.jpg","8ab4fd949b65605b16f5310d55d37215"],["healthyfood3.jpg","4ef95baee4c3fa9750fd67571e7c7d6f"],["help.png","b2a2fa3f47203aab80e9b9e291c4c73c"],["i-f7.png","3f3618c5655a34971b984c976f48ff6b"],["iPadheader.png","879329ea759101653c5305ce66693245"],["iPadrssheader.png","6a24344663b9da1297dd30ae4c1e875e"],["icon-72.png","b31287c56b9e26e1fb6d2cc6dd3d403b"],["icon-72@2x.png","975440a1341cff44645047c1618aceab"],["icon-albums-sel.png","271f11254f7ed2a74dad9039d73c1777"],["icon-albums-sel@2x.png","0c0ede168233a0cf0959bb80578f4e32"],["icon-albums.png","cca772d797d0c82d1ace64b3b5631da3"],["icon-albums@2x.png","5c524970cb859f5494e1ac075baa592f"],["icon-chat.png","ae20cd4f7c29a9a2b900314bbb146d54"],["icon-rss.png","41ce12f14dacbb24aac815f30345a6bf"],["icon-user.png","c0044588b0c8a0504f2bd217c3b556ab"],["icon.png","c4015b2697c9b7f4d3b7f23638543149"],["iconmenupagearrow.png","0bccef189f632a641fce5c48813094f6"],["iconmenupageitem1.png","eba889578b0a521c942a37de0cf5c412"],["iconmenupageitem2.png","9895c824f631029d040a137986d0b133"],["iconmenupageitem3.png","97fa7f84cd86751740d2bdf31e899136"],["iconmenupageitem4.png","650783add0025667f83101e0b49d8b31"],["iconmenupageitem5.png","c20e2669f6dd8e16591c798beaab915a"],["img1.png","60916ce41d4a8f13189b93d9f0fc560b"],["img2.png","bba12521436c70cf470c96f7c9870463"],["img4.png","0ca6fe841f875cea861ef050e81d1a3f"],["img5.png","5fcbe6b159cfdcd7aaa15f6a22a32273"],["img6.png","a1291fbae03b1a056c38836b1f98c97c"],["img7.png","d2f4bc1e89b524b7d8e548ea1d50c727"],["img8.png","c325ea57f7782d1efad63deb022beed9"],["img9.png","dc8e38431d952182145b69b012f2bfd0"],["index.html","4d10789d158400400df4d246fe62aa28"],["index.png","53d3b9c757cf7063337ff48628ddbe0d"],["info.png","2cf57a8ae9660e06571b8c0277e639c0"],["inventory.png","0aac4066a6a86d4725254914adc22be4"],["largebuttonmenuitembg.png","1f2a62ad9ce4d03fa34ecb5135d5f503"],["largeimg1.png","e2239783d5ef98b7374a075fad171ef6"],["largeimg2.png","8257e8fb49b3d5334b55fb9d29eb8601"],["largeimg3.png","84812ce77fbf20546ec147ccae4e43b5"],["largeimg4.png","70869356e29c0f1038d0ac933fdfc72e"],["letter.png","58195728decebc7d0a172099cd5e1ae5"],["listArrow.png","3d059e6b6957c1be7a1bfdb4316776e6"],["listArrowSel.png","ec8718a96a1d106878601c4aabe95bb7"],["location.png","ebaabaa775e51f3357522d159344e750"],["logo.png","11d4c7fb8adb976e4f0affcd1170ec32"],["magazinemenupagearrow.png","6c4de7916bbe41c468e31fdfd5365c88"],["magicon1.png","3458ed9c4ed835d88c5d6c407202f5a5"],["magicon2.png","47aa071554a279ee61c8865634312174"],["magicon3.png","b5ca71b3c500555aa495f5ba0abeceae"],["maps-icon.png","cbfb9e9d46e0e44956379bd31829a555"],["mediamenupageitem1.png","d3e65949f372999178bbdff31a646ac5"],["mediamenupageitem2.png","57c0f67058b640493543003a38173871"],["mediamenupageitem3.png","5f4ef76209400ac3735ba018f3ea3c57"],["menupagearrowright.png","a660e92205644331fc7a981e43b0e763"],["menupagearrowright2.png","566ac6bd8e4f01d7645121ffbdd0357c"],["menupageitem1.png","80dc016c76648b8ede41fa64054b8fd5"],["menupageitem2.png","ceb15594e71826f86645ea98d2362322"],["menupageitem3.png","58c8b70264e45f8ae98750497c1b124a"],["menupageitem4.png","9953fa3b95761e937cf017ae424f0812"],["messages-icon.png","86dc9e14d0dd1677d2d3c5a66dd9a334"],["mobilefacebook1.html","12efcfe9b8d27f39a82c46986e43c365"],["mobiletwitter1.html","d386e0dc20bad126af33bd1512d1bec9"],["mobileyoutube1.html","179372f99c0fa84c88bc3e51be62f142"],["music-icon.png","e67154c2bc079c9bcfdb08c4873f44e9"],["nearbylocations1.html","f9d111694ce2881aaef49c99cd9560cf"],["notef.png","e65f118d4c625aa21539c66f3ab298aa"],["notes-icon.png","1737b5d5ecec02ae877271960c53e7fe"],["notes.png","01952259077723a11cbd388b01ac7cc1"],["page-icon-calendar.png","c7497e2e733498348925a94b53a77cc1"],["page-icon-form.png","f32e41b0fa22f0ef53218f3ce424a9c5"],["page-icon-map.png","5e82416535439b758b7612569042360d"],["page-icon-mobile.png","d61bb7a10c5dae7d3f513302f11e8d98"],["page-icon-mobilefacebook.png","9f989bea49f8652de488a0a642b90172"],["page-icon-mobilelinkedin.png","0624fe81b6e7440f218ffce934af0c4d"],["page-icon-mobiletwitter.png","cb6b1916d4bf77d9e4d88f61f69758c0"],["page-icon-mobileyoutube.png","839d05dfa32b1e30709dce976b2c737a"],["page-icon-notes.png","e7455b2c865a2994e61c076476f62d38"],["page-icon-rss.png","773028b0004bcd9784b356c2ca85a973"],["pageicon1.png","3b32200da73ac05f7f6efebe87de9769"],["pageicon2.png","a0392c5302fe7fff13093538c66940ee"],["pageicon3.png","3ae1c8f07d590b19d30a9e7c88ae2bcf"],["people-icon.png","6368e86486af979d0d07356d146f4780"],["people.png","bca7fd09109545e159691fff0a784ba0"],["phone-icon.png","a1c9af5117d8898f2a0a3f4d1233abe3"],["podcast.html","cdfa5deb7d633187d70b1c6f566a9e1c"],["podcastpageheader.png","670d01812a22cce55204ba37dc700a46"],["podcastpagetwitterlogo.png","111d60a71f72630d0bddd82d616ef4ae"],["print.png","5631a49d5fc7834948f5898aadfaa752"],["protected.png","943d97f94f94e1b3f320c16626c81c8e"],["puzzle_greencopy.png","28340d5f77b3d3924db04aa95a053040"],["responsivepagemenuicon.png","2472ec5d0f5624f928535355654ff4f8"],["responsivepagemenuicon1.png","55ebc29f7c8e14a769813ca01d5773a6"],["responsivepagemenuicon2.png","31e8d297057011aca083dbb4f5826c18"],["responsivepagemenuicon3.png","14e4ef34cc4bcdfc7e8658042b868d82"],["responsivepagemenuicon4.png","c046ea86695b5e2ad5744573d0f1010c"],["responsivepagemenuicon5.png","511ab72c5b7bfae4bced977aa326bf27"],["rightsidepanel.css","c8e67e69c649f6915b255bff88b19571"],["rightsidepanel.js","b40b6004a3667cf1d6f2daafb9de1071"],["rss-noimage.png","73c9386f8cbea3fd9d518011de8eb3b7"],["rss.html","06a7fc60d6f3a423ca091e5dbbe62832"],["rssheader.png","f2425b8b4f119ab749a381a5e4026459"],["rssreader.js","7f0cad58ea6b7136008bb2c0513510b2"],["samplemenuicon.png","6817f9fbcc93f81083e38f436c3e0b5e"],["seting.png","1268b7a001de3ea0e3f726109ad47560"],["settings-icon.png","6d7253fc2d82e42912f64f3f0434bacf"],["shop.png","4d6d0658743d66995291e101da38cb56"],["sidebarmenuicon.png","5d6b701a4e1e47f03ca7a9362e6e4987"],["speech.png","47c3e096cc8f30abc15c7476c1fe7cae"],["squareimage.jpg","1eac192840bb4c16b242ddd615bf4bf5"],["star.png","7e58590050fe3c8ddc140a3ff38de141"],["stripesigram.png","9491000496947462b07148aa5728f2a4"],["stripesituns.png","8a0e23a3cc758de76add8129a5d3a228"],["stripespagefacebook.png","aa257c5df002e8bb54db214629393ce1"],["stripespagerssico.png","b0c820f42245790082de5a3bc54be718"],["stripespagetwitter.png","44519292189d4ebc8162afcebbf00dca"],["stripespageyoutube.png","02d79f64d37cfe277368eec9b2694040"],["style.css","75b5e112b9bae9976ca6fa2074d0855f"],["sw-precache-config.js","fde239028c0678f892d87fe3f5cd0741"],["tab2.html","21d4b968a573e928464a306576318223"],["tab3.html","85e4451e3f1000a21c8de06e8da8a3a2"],["toolbar.png","efbdff9579c20ccb08df3fa4f812f62f"],["toplogo.png","6de21d1dd37d5103e2a5d0b51031b4ce"],["toplogosidebar.png","4d4697846625408ba39c28c0e4f272a7"],["wallet-icon.png","d9a7f4a104b532f3a1dc9e61c2d0ad4b"],["weather.png","f3474a99e78ae4e90897e4e00ef69232"],["weather1.png","695fce209cb221f93afd4dd3e4f9ac7c"],["weather2.png","c20aa60363b71da0b1d0084e8f343674"],["weather3.png","423984b39e4311fab0c1efbbd0909b3e"],["weather4.png","1897eb7f4dd2a7552b7d56ae8bc278fe"],["wpapplicationsmenuicon.png","abe59f683515fe3eeb7820f0e80846d5"],["your-logo.png","974d9db1045d3ac7f0df207682664fa5"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







