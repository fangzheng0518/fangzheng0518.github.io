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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4e6388e10e1e6bbb3a69e25adc7f8ca2"
  },
  {
    "url": "About/index.html",
    "revision": "8d736aa87295de07bf8c4933ab94e5e9"
  },
  {
    "url": "assets/css/0.styles.9894935f.css",
    "revision": "357f1a508b1a524ce5952048f88c6416"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e8f88356.js",
    "revision": "1b74a7c8bc3288aebf8f8dde5ce08ff5"
  },
  {
    "url": "assets/js/100.d564af88.js",
    "revision": "e9d8ebde6815490bae292e6656cafa6e"
  },
  {
    "url": "assets/js/101.ed359fa2.js",
    "revision": "4e0ac183644db2845deed5393fd170e2"
  },
  {
    "url": "assets/js/102.94fcd251.js",
    "revision": "176e99e68090ca352d8d13d3d2235c22"
  },
  {
    "url": "assets/js/103.02b7b2f9.js",
    "revision": "598996ba8b29c14a2850bf89a29337b7"
  },
  {
    "url": "assets/js/104.24959504.js",
    "revision": "bcbcf859e782260d3c8d482dda5ab48c"
  },
  {
    "url": "assets/js/105.e0d6c513.js",
    "revision": "03c9765a8b811860c0e159593127b07e"
  },
  {
    "url": "assets/js/106.baf829ea.js",
    "revision": "16fbe7165ebbe2077733883b82063612"
  },
  {
    "url": "assets/js/107.30956718.js",
    "revision": "4f14fc77ae71e4549ddc8aba6c5e2e72"
  },
  {
    "url": "assets/js/108.fe4a1842.js",
    "revision": "f419a5f28781ce827af2622b365b7efa"
  },
  {
    "url": "assets/js/109.c4bab523.js",
    "revision": "bc319b7d011439174cc0a3a7a0351525"
  },
  {
    "url": "assets/js/11.6bcd991e.js",
    "revision": "2a508b47f8927e5ae483473f6f7be689"
  },
  {
    "url": "assets/js/110.77ef5a75.js",
    "revision": "101ed06cc1d6434ff89b1fb2ca278b04"
  },
  {
    "url": "assets/js/111.c88a3e80.js",
    "revision": "3c1a1203815556a67e85581b251a0459"
  },
  {
    "url": "assets/js/112.defa6a72.js",
    "revision": "001d9ad471a720acfcb23a39dc1f4d12"
  },
  {
    "url": "assets/js/113.baffbf93.js",
    "revision": "45eea1b0f3aa3abe3999bb748a11f12a"
  },
  {
    "url": "assets/js/114.c48ed354.js",
    "revision": "bd985390ca36d843d5e8ffaa9ba7f952"
  },
  {
    "url": "assets/js/115.af4c952f.js",
    "revision": "c2031dd37990d44964baec31ac1ee484"
  },
  {
    "url": "assets/js/116.075913cf.js",
    "revision": "c0c15cf9c860fce7ad4bc766a869660f"
  },
  {
    "url": "assets/js/117.520ca35f.js",
    "revision": "cd73504605f689afc054f7a7d857b2aa"
  },
  {
    "url": "assets/js/118.3dfffd58.js",
    "revision": "663ad388116b02c98f87c93c6cc95fb0"
  },
  {
    "url": "assets/js/119.94e601ba.js",
    "revision": "223efccb1fc7a24bc8ae92ba27b4b242"
  },
  {
    "url": "assets/js/12.4e778070.js",
    "revision": "d9b446f117ddb741eb31230ffd58107b"
  },
  {
    "url": "assets/js/120.91317a15.js",
    "revision": "b73179ae00042f7ba5e90e79387fb255"
  },
  {
    "url": "assets/js/121.a059e4c3.js",
    "revision": "a87311bcabce93a5641e28e713539db6"
  },
  {
    "url": "assets/js/122.9f78087b.js",
    "revision": "a902a446bd688d7681d6f7276e3e4edf"
  },
  {
    "url": "assets/js/123.b9bb61e0.js",
    "revision": "4f5c5b5700a3973fae45c350a8d0a07e"
  },
  {
    "url": "assets/js/124.4c8994fe.js",
    "revision": "e42c447363565c0e4e82003e0c6e754c"
  },
  {
    "url": "assets/js/125.e8c2c3d9.js",
    "revision": "1ab672f74e86bc0f5bfb7ad5803a6e1c"
  },
  {
    "url": "assets/js/126.0b8a54cc.js",
    "revision": "b4063475300f9cb764eef2ab7f39bef8"
  },
  {
    "url": "assets/js/127.d4b342c3.js",
    "revision": "8e171aee38dc8fd3bd1d087d55e0664a"
  },
  {
    "url": "assets/js/128.5bddd0d0.js",
    "revision": "fd13717a1acdeae7783d1d8d80636923"
  },
  {
    "url": "assets/js/129.ae586f13.js",
    "revision": "aa5647861574d817a6fee0bb3ace939e"
  },
  {
    "url": "assets/js/13.b8c77261.js",
    "revision": "a6c262049e22d669d1468cea3fdaee07"
  },
  {
    "url": "assets/js/130.396e6504.js",
    "revision": "9c4a3473a4f53be648319e61dfc07a15"
  },
  {
    "url": "assets/js/131.2d55dceb.js",
    "revision": "981c06544b6785a8b72f29d35a394182"
  },
  {
    "url": "assets/js/132.900ca269.js",
    "revision": "9eda8d592b770e42a9aeba90de3bfe74"
  },
  {
    "url": "assets/js/133.062ada46.js",
    "revision": "e1a0767670c636ed8fa879a4e0151ee4"
  },
  {
    "url": "assets/js/134.b3faeb99.js",
    "revision": "cab1b11af5c1533934258f050c6e586b"
  },
  {
    "url": "assets/js/135.9097b849.js",
    "revision": "589a0f535c9f251de682fa8e12040aa2"
  },
  {
    "url": "assets/js/136.aa650ff3.js",
    "revision": "485654f4a7128a97af0c520588d21e97"
  },
  {
    "url": "assets/js/137.0241ae99.js",
    "revision": "c37c502187754945f865669f5b8172dd"
  },
  {
    "url": "assets/js/138.12b49ab7.js",
    "revision": "135d7bc49a773ef0f51caa10a3353b06"
  },
  {
    "url": "assets/js/139.b50d7e75.js",
    "revision": "8e0e87e0c8c52955c9885d3ae97f6b6d"
  },
  {
    "url": "assets/js/14.2d8e25a1.js",
    "revision": "e1d7891f3b666b9b0d3d01bf55c5432f"
  },
  {
    "url": "assets/js/140.3b8b6427.js",
    "revision": "51516316d9cd1e4fc4cb01caeff48eac"
  },
  {
    "url": "assets/js/141.578527b6.js",
    "revision": "7ac2822cc0540e0250432d3096a0385d"
  },
  {
    "url": "assets/js/142.2d0a60fa.js",
    "revision": "4dbb810003936608e04c5ef1513ceaa8"
  },
  {
    "url": "assets/js/143.2e5603d5.js",
    "revision": "394477689a6b75cd09f7307910f7c7bf"
  },
  {
    "url": "assets/js/144.4f0519b8.js",
    "revision": "7e1d32340bafbfa284f41b8cfe020fef"
  },
  {
    "url": "assets/js/145.ef91129b.js",
    "revision": "c55d88cf07d6992cf5d74a7a3e76a620"
  },
  {
    "url": "assets/js/146.afa67b28.js",
    "revision": "6754be03ef1a69336b90bc6c6cd8fe19"
  },
  {
    "url": "assets/js/147.dbfed115.js",
    "revision": "5cf55c5817b64b609a80ad0665fc1d47"
  },
  {
    "url": "assets/js/148.52076f62.js",
    "revision": "72bf7c6d32d433fa0e04033c7fb27a75"
  },
  {
    "url": "assets/js/149.413ca0d4.js",
    "revision": "cbe4b8aaf87ef364ae351b9fd4ec8835"
  },
  {
    "url": "assets/js/15.5c39353a.js",
    "revision": "c6346aa8eb498a1f7ac35d7dba1efb5a"
  },
  {
    "url": "assets/js/150.5ca28815.js",
    "revision": "e614e43751dd96c5267d3411baf37c23"
  },
  {
    "url": "assets/js/151.66147548.js",
    "revision": "de4ec099b19afe6516742c936b700bbc"
  },
  {
    "url": "assets/js/152.e7e8d56f.js",
    "revision": "21ff1503fc91bb1fbea00aeb6aee9633"
  },
  {
    "url": "assets/js/153.10e5489e.js",
    "revision": "3bd2fe8b183668b5dfd1b1a1ee61a03f"
  },
  {
    "url": "assets/js/154.609bedd8.js",
    "revision": "f9169cd9c2ae09c822380483cc0a0161"
  },
  {
    "url": "assets/js/155.89b0b0f8.js",
    "revision": "ebd4b9186249e2d95178293ef8071f86"
  },
  {
    "url": "assets/js/156.e817e4b5.js",
    "revision": "020d0ea73bb053e2a2f31838b72acd7b"
  },
  {
    "url": "assets/js/157.4fe6170a.js",
    "revision": "80fdd4e0780915cf9f6c0b7f3f8090f2"
  },
  {
    "url": "assets/js/158.0d185e2c.js",
    "revision": "49f3abb02ade31a6e45f73a094d953f2"
  },
  {
    "url": "assets/js/159.c57a28b7.js",
    "revision": "f3135bff770ea9c33cdfb0dc71508122"
  },
  {
    "url": "assets/js/16.1b28cb6d.js",
    "revision": "23c36415fbc0f82b6e4304d25f1a4dbd"
  },
  {
    "url": "assets/js/17.dc692cbc.js",
    "revision": "6fdc551f276ef23076f7013bda5e2f73"
  },
  {
    "url": "assets/js/18.b4495b5c.js",
    "revision": "592d0e8c133998e37e6234f5070cc8dc"
  },
  {
    "url": "assets/js/19.5bf5eb61.js",
    "revision": "fa4777848d658fc8be279919f97f4772"
  },
  {
    "url": "assets/js/2.a52632a4.js",
    "revision": "b59a3cf24f18c0b15ed9ed83324d458c"
  },
  {
    "url": "assets/js/20.b4e87a71.js",
    "revision": "1eaaca6bef50361fc82e2f9510f9445e"
  },
  {
    "url": "assets/js/21.e800ff02.js",
    "revision": "84f20c4d733291348339f62a75097284"
  },
  {
    "url": "assets/js/22.3445f85c.js",
    "revision": "afa1a4eb35f499a91a6f9d4e2d158d7c"
  },
  {
    "url": "assets/js/23.7cce4328.js",
    "revision": "7c8eef4ade48c9f4cc57c529822e65a5"
  },
  {
    "url": "assets/js/24.d322e90b.js",
    "revision": "f4ce9469cfb5b8f771678e6af08780bd"
  },
  {
    "url": "assets/js/25.bfc014f1.js",
    "revision": "1b07f5219de25c9d816129946d791c37"
  },
  {
    "url": "assets/js/26.5ebea46f.js",
    "revision": "53a75e33ffaeca26f53feb8b1ee8527f"
  },
  {
    "url": "assets/js/27.914a84c1.js",
    "revision": "3421d7e2b98835d889557395097b35d1"
  },
  {
    "url": "assets/js/28.bc782b8d.js",
    "revision": "2b27a7af3496ef79b01f713fdc91c93d"
  },
  {
    "url": "assets/js/29.62493a18.js",
    "revision": "18c3414956f7ca38ab68bdf80c63206c"
  },
  {
    "url": "assets/js/3.f3f7654f.js",
    "revision": "5c31baf48bfdfeb53d9f5e1d3171a4ec"
  },
  {
    "url": "assets/js/30.bad9e501.js",
    "revision": "30412d2a66119fd39c6dd9be542b95d1"
  },
  {
    "url": "assets/js/31.4a38bdbd.js",
    "revision": "eda76ce9804134f7bdb99965f32b9f1d"
  },
  {
    "url": "assets/js/32.903a497d.js",
    "revision": "ffd32bd4f100c092c51ea352b77071ce"
  },
  {
    "url": "assets/js/33.03b83687.js",
    "revision": "309ba43a027c397fcd26a8bc7d755b13"
  },
  {
    "url": "assets/js/34.f706b788.js",
    "revision": "69b68b9e0e92b69edfee49440cf3d5e9"
  },
  {
    "url": "assets/js/35.99a12707.js",
    "revision": "1f36085686d4a65d0145bfcb1aba2bd2"
  },
  {
    "url": "assets/js/36.90fd2978.js",
    "revision": "4004292ac2e54ceaac0e5433489a686a"
  },
  {
    "url": "assets/js/37.60451941.js",
    "revision": "340003eb3f8c663e39fbd1dd248987d6"
  },
  {
    "url": "assets/js/38.28c89a9d.js",
    "revision": "b47202c9b2f44114309c04715e70c37b"
  },
  {
    "url": "assets/js/39.25838682.js",
    "revision": "dd9972cf864857a1a1e19c79a440b193"
  },
  {
    "url": "assets/js/4.202991e4.js",
    "revision": "3f119edd8d4600b9e304d2906b972e9e"
  },
  {
    "url": "assets/js/40.9e68dc50.js",
    "revision": "2209d6e4694bb206cd38ecce3dd27495"
  },
  {
    "url": "assets/js/41.d8e72043.js",
    "revision": "244495bb579ed716676e3be5eb37bc0b"
  },
  {
    "url": "assets/js/42.15b4371f.js",
    "revision": "abda5e97cefeb867d2de7b2edff9a9d5"
  },
  {
    "url": "assets/js/43.658c6921.js",
    "revision": "5be231857075a1ae2b1c23cfc04adfc5"
  },
  {
    "url": "assets/js/44.76f5b021.js",
    "revision": "32f152b2eb00a4579cea702d777090ee"
  },
  {
    "url": "assets/js/45.a8f9ec74.js",
    "revision": "0ea00d36f6e2b0abc1b23b716a0d34ce"
  },
  {
    "url": "assets/js/46.5eb0a761.js",
    "revision": "26c6ec35369baadd2f98e4aa6af669f7"
  },
  {
    "url": "assets/js/47.a42dd1d2.js",
    "revision": "f3f370d1f42561d2f2cf1c8ca27de9f9"
  },
  {
    "url": "assets/js/48.3845bd0a.js",
    "revision": "292b8411c39c9ce95d5af289f221b8bd"
  },
  {
    "url": "assets/js/49.bf2c89ab.js",
    "revision": "54fca04dc74ada8f198607cf96bfaa98"
  },
  {
    "url": "assets/js/5.17bb93d9.js",
    "revision": "ef5a1669ac192bb2a536699384c3bbbc"
  },
  {
    "url": "assets/js/50.52c379d1.js",
    "revision": "e5e6932c631997cce867b6eb67fb6a38"
  },
  {
    "url": "assets/js/51.870e4f39.js",
    "revision": "49d9598aefea3844f0080829a54bff64"
  },
  {
    "url": "assets/js/52.62a0a49e.js",
    "revision": "de17667963d5bd00d3daa8a97a4d9a4b"
  },
  {
    "url": "assets/js/53.427dbff8.js",
    "revision": "500603101df6a5ff09bde98abd69e652"
  },
  {
    "url": "assets/js/54.4635e630.js",
    "revision": "e74c47591033965606d70d6ae0ee373d"
  },
  {
    "url": "assets/js/55.cd4343b0.js",
    "revision": "6b0d2838f82db800fef8fd05c20d8386"
  },
  {
    "url": "assets/js/56.3abdfddd.js",
    "revision": "aad30f26edfcb6277ae410796a2cde91"
  },
  {
    "url": "assets/js/57.0117eb4a.js",
    "revision": "68206f01c8b0e5b6edcf1a94ecbe1ac5"
  },
  {
    "url": "assets/js/58.55ab06d5.js",
    "revision": "b42a68114e5ddf8115c7cc2e93ec0a0d"
  },
  {
    "url": "assets/js/59.b1e6a01d.js",
    "revision": "3f7ef58148006ce43e78623f6199b911"
  },
  {
    "url": "assets/js/6.cac134c0.js",
    "revision": "1865c83c98f028281579315549b99a90"
  },
  {
    "url": "assets/js/60.d9bb9e13.js",
    "revision": "a73c527a5508d5bf108235f3d8b4fda4"
  },
  {
    "url": "assets/js/61.729595e5.js",
    "revision": "951cd21bdbd8a65bcbc991120420029f"
  },
  {
    "url": "assets/js/62.4fec0c49.js",
    "revision": "1791441918fe0d1e44dae63680090b17"
  },
  {
    "url": "assets/js/63.b9c92e6a.js",
    "revision": "cc2fb20f6d02ce946224165853946bf9"
  },
  {
    "url": "assets/js/64.63b8c6b1.js",
    "revision": "b052347f54c8e1f8985dcfaf5744f7c8"
  },
  {
    "url": "assets/js/65.158270ae.js",
    "revision": "fcb6ce6ef7cb153260ae8fbb49b27159"
  },
  {
    "url": "assets/js/66.3415f3e3.js",
    "revision": "ab018362ac4bb0bc31e89d7d7585d66f"
  },
  {
    "url": "assets/js/67.f04a4d7a.js",
    "revision": "50d1c4a83e669889e9b2bd090dfd2d15"
  },
  {
    "url": "assets/js/68.23a5849e.js",
    "revision": "826f3bc42a583477fe08c5a1e5287c75"
  },
  {
    "url": "assets/js/69.ea5e16f5.js",
    "revision": "f8684873826554d104908dae722752d1"
  },
  {
    "url": "assets/js/7.8e78b236.js",
    "revision": "b235321c75b70a2918b244bfe4a075aa"
  },
  {
    "url": "assets/js/70.e857237f.js",
    "revision": "66e9fa1bac7f39b3e8df04dc9d9bfe81"
  },
  {
    "url": "assets/js/71.fa576592.js",
    "revision": "3b86e3314fa75752331e902acf001f50"
  },
  {
    "url": "assets/js/72.365c06ee.js",
    "revision": "d5325c9452b66babd67633ee057c5d00"
  },
  {
    "url": "assets/js/73.0f0f1b47.js",
    "revision": "ccb54e08dda7d12572ebca54c8f87601"
  },
  {
    "url": "assets/js/74.69873580.js",
    "revision": "2ae6b77a9694ed84b077a17c82c467e5"
  },
  {
    "url": "assets/js/75.97e039ae.js",
    "revision": "d48ad49057a5354177d6806b7ff86bac"
  },
  {
    "url": "assets/js/76.cb612fbb.js",
    "revision": "b8a068989b073423f1c751f90b522418"
  },
  {
    "url": "assets/js/77.1ea90dfe.js",
    "revision": "b9538b2dfadd2107f20db35bd837369f"
  },
  {
    "url": "assets/js/78.615aa35c.js",
    "revision": "4ad45ade273ed4595949a52a2410e9ce"
  },
  {
    "url": "assets/js/79.aab26661.js",
    "revision": "bf15eb1886539fb951cc62c50a27ea08"
  },
  {
    "url": "assets/js/8.4522daab.js",
    "revision": "edd6987fdb0b7a66b5bdbcfe001dcdd3"
  },
  {
    "url": "assets/js/80.1d4975ac.js",
    "revision": "717a3c95b1572ed34c3f46c36a234306"
  },
  {
    "url": "assets/js/81.9c3be0a0.js",
    "revision": "017f749a7ac71c379a108ebcee1876d9"
  },
  {
    "url": "assets/js/82.a1bbb975.js",
    "revision": "56672b19ecaae65fce7bba3c0c31c7aa"
  },
  {
    "url": "assets/js/83.a750334d.js",
    "revision": "97fc1826def9390ca9562c04cb8bb8b4"
  },
  {
    "url": "assets/js/84.de429a3c.js",
    "revision": "178289912a972f1587d7f97741af9d0f"
  },
  {
    "url": "assets/js/85.d041d296.js",
    "revision": "86d34b679e6137f2e62562bd9fe16946"
  },
  {
    "url": "assets/js/86.0e0bbf44.js",
    "revision": "80ac2fe407d80484475dbe41376f6533"
  },
  {
    "url": "assets/js/87.4f84d9ab.js",
    "revision": "a70c7a5aa71eae3718296a48f42ea1a5"
  },
  {
    "url": "assets/js/88.ccabef36.js",
    "revision": "fe7456a3b9de7b6e7d7d78c8d529d8e7"
  },
  {
    "url": "assets/js/89.2c400fa8.js",
    "revision": "b8d1f6d81f39fbc82b6142382bc5e6a2"
  },
  {
    "url": "assets/js/9.8def527a.js",
    "revision": "4326b8f99a407d650edcd3c774035e6b"
  },
  {
    "url": "assets/js/90.43053d57.js",
    "revision": "c984b0982abd0a1a9cd432ed627868cf"
  },
  {
    "url": "assets/js/91.1e3fdb77.js",
    "revision": "9622b250794a06c24ad5f9dbeac6ecaf"
  },
  {
    "url": "assets/js/92.3f07495e.js",
    "revision": "d91a949b60ce3873fcc383ed1f723c80"
  },
  {
    "url": "assets/js/93.6644ee1c.js",
    "revision": "7e2223345f68302f6eee395d26c091e0"
  },
  {
    "url": "assets/js/94.b1e6ce61.js",
    "revision": "911b3ac5060a25f89fb48e03c81e85cb"
  },
  {
    "url": "assets/js/95.bb1bd51a.js",
    "revision": "fd2a359f575f423d995def1bb57bea65"
  },
  {
    "url": "assets/js/96.9e2056ef.js",
    "revision": "869a722f5e08746f9b890bb9de070db7"
  },
  {
    "url": "assets/js/97.efbeddb2.js",
    "revision": "ef49a20d43852c37b6d92557aceb9e18"
  },
  {
    "url": "assets/js/98.ae0038a0.js",
    "revision": "71d3ebe8da3b1cb6bb886c6b42efc871"
  },
  {
    "url": "assets/js/99.433a2542.js",
    "revision": "65ed14900acb2f56915b44a66475d600"
  },
  {
    "url": "assets/js/app.180c00c5.js",
    "revision": "7fe43199cc234b719e47bfd6ac9b494d"
  },
  {
    "url": "BigData/Flume/1.flume-introduce.html",
    "revision": "bba1dd08285865b252609c776553f0b7"
  },
  {
    "url": "BigData/Flume/2.flume-install-use.html",
    "revision": "b7c38a335861c6d7571895bd692defa1"
  },
  {
    "url": "BigData/Flume/3.flume-use-exapmles.html",
    "revision": "fe14db65dd447f9b085a9e9ee770c493"
  },
  {
    "url": "BigData/Flume/index.html",
    "revision": "0f6ea6879c9a7011632d42c513089401"
  },
  {
    "url": "BigData/Hadoop/hadoop-ecological-system.html",
    "revision": "14de15516540c61b850a54ff33a09197"
  },
  {
    "url": "BigData/Hadoop/hadoop-hdfs.html",
    "revision": "48921388adebc133710f75d475a5ee27"
  },
  {
    "url": "BigData/Hadoop/hadoop-introduce.html",
    "revision": "ac9340edcbb63e0e035c8c114729e615"
  },
  {
    "url": "BigData/Hadoop/hadoop-local-install.html",
    "revision": "5b3731e8f217df3196e8d91ac5447ffb"
  },
  {
    "url": "BigData/Hadoop/hadoop1.1.2-install.html",
    "revision": "8bec62a568c58d8b0254f7c81b5643fa"
  },
  {
    "url": "BigData/Hadoop/index.html",
    "revision": "096e4ab47e1bab985a734730001f919b"
  },
  {
    "url": "BigData/Hbase/1.hbase-install-introduce.html",
    "revision": "355137a473de2ce782e6ba8fb7d5c128"
  },
  {
    "url": "BigData/Hbase/2.hbase-shell.html",
    "revision": "1573d96ad5bd345e84d170f094ca8872"
  },
  {
    "url": "BigData/Hbase/index.html",
    "revision": "94b122f7a04633842e361e47158b7032"
  },
  {
    "url": "BigData/Hive/1.hive-introduce-install.html",
    "revision": "d400afa3d4f18227d3192b2c5ca0e882"
  },
  {
    "url": "BigData/Hive/2.hive-ddl.html",
    "revision": "fa448ee992e1ea0115227538bfefb8aa"
  },
  {
    "url": "BigData/Hive/3.hive-hiveserver2.html",
    "revision": "7bf6e93b9334eef639f55746fa51854a"
  },
  {
    "url": "BigData/Hive/4.hive-webui.html",
    "revision": "1b132a3ba2ff8b914b156633f47832f8"
  },
  {
    "url": "BigData/Hive/5.hive-charset-utf8.html",
    "revision": "c560be76143ae803ad23d7eedcfa6719"
  },
  {
    "url": "BigData/Hive/6.hive-Read-past-end-of-RLE-integer-from-compressed-stream.html",
    "revision": "243b28cb82875c4e2907cd7377796c64"
  },
  {
    "url": "BigData/Hive/index.html",
    "revision": "0851a6de231b9fcaff1493f656a7b2c9"
  },
  {
    "url": "BigData/index.html",
    "revision": "45749934a632340789202991b644b85e"
  },
  {
    "url": "BigData/Kafka/index.html",
    "revision": "7ac73c4fb4c6c2f7f9452108e44918bd"
  },
  {
    "url": "BigData/Kafka/kafka-install.html",
    "revision": "7049d67487dc4e5e9576e54c4223d1de"
  },
  {
    "url": "BigData/Kylin/1.kylin-cube-buid.html",
    "revision": "3baccb30972a3afc298b12ede5c9b6bd"
  },
  {
    "url": "BigData/Kylin/2.kylin-cube-optimize.html",
    "revision": "e699b87e73e5b6c9135542a7b3be1fca"
  },
  {
    "url": "BigData/Kylin/index.html",
    "revision": "907ff2d012cdf01796321905a8df9275"
  },
  {
    "url": "BigData/Sqoop/index.html",
    "revision": "15435bbe5694b8830f97002bd686f578"
  },
  {
    "url": "BigData/Sqoop/sqoop-Unable-to-find-valid-Kerberos-ticket-cache.html",
    "revision": "ca92bce98cf26d0e9bfd2014da4edd2b"
  },
  {
    "url": "BigData/Sqoop/sqoop1-99-7-mysql-to-hdfs.html",
    "revision": "7544e53c83a1438660e058b778c94c17"
  },
  {
    "url": "BigData/Sqoop/sqoop2-install.html",
    "revision": "6ad561fc50196529c9417e0b40161fed"
  },
  {
    "url": "BigData/Tez/index.html",
    "revision": "518f494d0f50d0cbad91c5cad3ca99bf"
  },
  {
    "url": "BigData/Tez/tez-install.html",
    "revision": "9b1214eef57fa955922700098a92cd49"
  },
  {
    "url": "BigData/Zookeeper/index.html",
    "revision": "15b525be6b29870f257cc3311ab37753"
  },
  {
    "url": "BigData/Zookeeper/zookeeper3-4-10-cluster-installation.html",
    "revision": "0f8017b563fe121c7ce5bed4a57729f1"
  },
  {
    "url": "DataBase/index.html",
    "revision": "0c9e8be4e2f4ba2cbf08b7a51a0afe3d"
  },
  {
    "url": "DataBase/MySQL/1.centos6-10-install-mysql5-6.html",
    "revision": "145b3f434ccc60651b8cb841ffa842cb"
  },
  {
    "url": "DataBase/MySQL/2.mysql-binlog.html",
    "revision": "33cefffcf6d16d86600909d0c4bd4123"
  },
  {
    "url": "DataBase/MySQL/3.mysql-binlog-with-canal.html",
    "revision": "def28a866186bd55dbef928ba1dfdaac"
  },
  {
    "url": "DataBase/MySQL/index.html",
    "revision": "2080fbd93334b6243e13da91697b41fb"
  },
  {
    "url": "DatawareHouse/1.dw-framework.html",
    "revision": "20ad880fc306dca771ab6de1170abbc2"
  },
  {
    "url": "DatawareHouse/2.dw-with-ods-difference.html",
    "revision": "88b0bd7a6634135bb8be34c42fb4b1a2"
  },
  {
    "url": "DatawareHouse/3.datawarehouse-specification.html",
    "revision": "22e9133aaa6cce45935eff44b3712d4b"
  },
  {
    "url": "DatawareHouse/4.how-to-guarantee-data-quality.html",
    "revision": "a1d2010727ea614da232460f1efc0319"
  },
  {
    "url": "DatawareHouse/5.how-to-reduce-derivative-demand.html",
    "revision": "bb7ab3458ed97bf129574efb4f3c684f"
  },
  {
    "url": "DatawareHouse/6.canal+kafka+hbase+hive.html",
    "revision": "03992f93fd032e9912d6f28ff186ce2d"
  },
  {
    "url": "DatawareHouse/7.data_quality.html",
    "revision": "a4c4f697244abf3aec0a7f8af9fc20a6"
  },
  {
    "url": "DatawareHouse/index.html",
    "revision": "41f1fb2f93a09d84a36e379d876b0631"
  },
  {
    "url": "hero.png",
    "revision": "d41f26ae77a4bb3f9ec495bb019591c1"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "ba8adf3512b4745c910f0d2428f18ff8"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "caf3fa68eb7536fcf76c4ae2186da40e"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "60e4982a750b5eb464c15fef4abcc655"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "523c0fb8f57f93b468e0ed78ecdf86e8"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "c38228266f233432c21c871626ffaacd"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "7f78124d42ce759625665a6b36ecba5b"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "0f3cc531ed40a48f2dfaac0c236c173d"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "220c53a703dfabc0bdbfa56063264a00"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4ffkyzgrj30u60awjtp.jpg",
    "revision": "da1f9aa09cf6045e43bf79d5fb63cc08"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fi34y0nj31d60sa451.jpg",
    "revision": "42a215e737f42338f95bbcf9a27a9a0f"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fivlr1qj31de0gyn0f.jpg",
    "revision": "9019bcfd9b28af617317b4ea7d81cd74"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fjbs3jwj31dk0qewjq.jpg",
    "revision": "59d9c3d1fe0b004786b7d58ad37b5cc3"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fk991pmj30v00fimzm.jpg",
    "revision": "74dcb8c412b5dc7f9d8ddde0b5fd7a51"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fkg47a5j31go02hgls.jpg",
    "revision": "05613e67364f652ea2265eee11d759cf"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fkiiv5aj30fe08haaw.jpg",
    "revision": "b03d670df64a9b6a50dea330709ecc13"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fklsm3pj30z80o0jz2.jpg",
    "revision": "0399af1f7011b3e67b7c32f00f6fe6c7"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fkpb9dej30o80ss7a8.jpg",
    "revision": "bd5a484ad3842788b54de678b1cc1621"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fkxsx06j30zw0pen94.jpg",
    "revision": "ad43d2f7d3817395c5d233b685eb429e"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fnizxnsj30uc0audhm.jpg",
    "revision": "81786a718cfac85a200358b89f44e2b7"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fnl4066j31kw03675m.jpg",
    "revision": "7a67bd5f0c245bb9156e3c79e5dfa582"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fvn3nynj31kw06dq78.jpg",
    "revision": "4fd0bdc0cdbe51aa9efc4fb757a73139"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fvrdd50j31kw05442h (1).jpg",
    "revision": "a2acd0a2943ff9805f242ab999ef9cba"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fvrdd50j31kw05442h.jpg",
    "revision": "a2acd0a2943ff9805f242ab999ef9cba"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fvtksyyj31kw02wacv.jpg",
    "revision": "abdcfdfa334526fed6a8be6039cc3644"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4fvyf9blj31kw047wi4.jpg",
    "revision": "ce96bc26b885bf3ac5ba898a3e7b4aa7"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4g0poxlxj31kw03j76v.jpg",
    "revision": "61413caee8ea615027e95923889b650e"
  },
  {
    "url": "img/BigData/Flume/0069RVTdgy1fu4g0wo695j31kw03oq4t.jpg",
    "revision": "954414ac8cbad82bd36aa41f5f3a3684"
  },
  {
    "url": "img/BigData/Flume/006tNbRwgy1fw12dg67clj310w06wqfb.jpg",
    "revision": "6f2237897bc08391614572b17b943990"
  },
  {
    "url": "img/BigData/Hadoop/006tKfTcly1fq50mbhut0j30sy0s6dk9.jpg",
    "revision": "a0d23826e7caab451ca863eb939a91da"
  },
  {
    "url": "img/BigData/Hadoop/006tKfTcly1fq50mca0b7j30z80muq9k.jpg",
    "revision": "eeb86ca14b2727c1777ad11fa6d2c4c6"
  },
  {
    "url": "img/BigData/Hadoop/006tKfTcly1fq50md73hcj316s044adt.jpg",
    "revision": "53801fc99b85e1d25f633791e1ad0ef8"
  },
  {
    "url": "img/BigData/Hadoop/006tKfTcly1fq50mebzzjj317s0oan8x.jpg",
    "revision": "f958843216b01ff24b73a9a912cf9a35"
  },
  {
    "url": "img/BigData/Hadoop/006tKfTcly1fq50mfqlxnj30oy0d0whx.jpg",
    "revision": "af3d219b0b4cdd9e4e93a2671de46310"
  },
  {
    "url": "img/BigData/Hadoop/006tKfTcly1fq50mh2kz8j318e0ty7j3.jpg",
    "revision": "a7660102cea42121ad13c0d6e1fcdf04"
  },
  {
    "url": "img/BigData/Hadoop/006tKfTcly1fq50mhud9kj30yc01owej.jpg",
    "revision": "b435576679c566813b3cd2dc1083ac2b"
  },
  {
    "url": "img/BigData/Hadoop/006tKfTcly1fq50mit5ffj315u050tam.jpg",
    "revision": "c7324ffa9fa13f42a73a1d68b61652dc"
  },
  {
    "url": "img/BigData/Hadoop/006tKfTcly1fq50mkbo17j31240tqqcd.jpg",
    "revision": "b18a1798479c296edb6ca95301284ee0"
  },
  {
    "url": "img/BigData/Hadoop/006tKfTcly1fq50mlfddxj31eo114157.jpg",
    "revision": "ef12158d959db143c5729247525379d7"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7nez9hccj30fs0b7tg1.jpg",
    "revision": "be3b0b8e5f0a3ea226c6d591bd19006a"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7nfabg1ej30ks0ag437 (1).jpg",
    "revision": "e393310424539eab795a3ec320205265"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7nfabg1ej30ks0ag437.jpg",
    "revision": "e393310424539eab795a3ec320205265"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7nfkw99wj30rh0ew7f7 (1).jpg",
    "revision": "99aba116bc9b8949c1ef83967c0d0cb6"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7nfkw99wj30rh0ew7f7.jpg",
    "revision": "99aba116bc9b8949c1ef83967c0d0cb6"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7nla75m3j30f20bw3zv.jpg",
    "revision": "7d58b2ebd9e10e95d582755ca68a120c"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7nlb9q5xj30bd03cdfy.jpg",
    "revision": "5b965da20e64281712207b2793973e21"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7nlc8l2uj30j00btq3q.jpg",
    "revision": "5f49adbc1fc41e47382aebd96b8c4c7b"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7ot1voh7j30go0a3dgq.jpg",
    "revision": "2dd871c315d8f60ba5a14cf028e006f4"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7ot2u6xsj30ir0aw0tr.jpg",
    "revision": "b5b0f55a39594eea4d67ba78893bd8a8"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7ot3brltj308t09faa4.jpg",
    "revision": "5221a95ef18e0213eec4ecdc36b5d616"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7ot4oxmij30go0b7my2.jpg",
    "revision": "b95f6f4697e68759832b0ae8a470f1a5"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7ot5jcn3j30jm0bejsb.jpg",
    "revision": "16e4618bd980a20cc58717971031cbe9"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7oufy230j30go0bdq4d.jpg",
    "revision": "a1ce31b69037a830b654042850b94fa8"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7ow1viz4j30h60ajwfp.jpg",
    "revision": "55fb539abd996e5e7d55b4a3e3b88385"
  },
  {
    "url": "img/BigData/Hadoop/006tNc79ly1fz7ownlnl2j30iu0b7ab3.jpg",
    "revision": "fc566ad7994acfa84ed6ddc95e507e0e"
  },
  {
    "url": "img/BigData/Hadoop/hadoop-logo.jpg",
    "revision": "12dc962bcf4ce81caa21b314dd036e9e"
  },
  {
    "url": "img/BigData/Hbase/006tNbRwgy1fuih8lou9jj31f412qtdo.jpg",
    "revision": "a229defadb7736bcae03d0f4df7ab6bf"
  },
  {
    "url": "img/BigData/Hive/006tKfTcly1fqkdd0pf9qj30go0963zf.jpg",
    "revision": "af087fb7c834d2afc02cfd5e0d79e5bc"
  },
  {
    "url": "img/BigData/Hive/006tKfTcly1fqkdjefm16j30gp09zwfd.jpg",
    "revision": "faa785603da9b72bf59fb550c0e93a1a"
  },
  {
    "url": "img/BigData/Hive/006tKfTcly1fqnuanpf4rj30m601i0sq.jpg",
    "revision": "471afdd93948d5eee373694d9eccb0eb"
  },
  {
    "url": "img/BigData/Hive/006tKfTcly1fqo30fhfozj30x009owg0.jpg",
    "revision": "3100c641b4641df1d9849932f223d6f6"
  },
  {
    "url": "img/BigData/Hive/006tKfTcly1fqo31n0blvj30zy0740ux.jpg",
    "revision": "8a47e48cc1845ca7bfb12f56be00c8c2"
  },
  {
    "url": "img/BigData/Hive/006tKfTcly1fqo37vmnrdj30zq0degpo.jpg",
    "revision": "2e9432781e1ba9a76f9a22d9a43c6853"
  },
  {
    "url": "img/BigData/Hive/006tKfTcly1fqo3k4k3cfj316e05smz1.jpg",
    "revision": "104cf5f008c6de27c6b9d11bbeee328d"
  },
  {
    "url": "img/BigData/Hive/006tNbRwgy1fwy6trxe92j30k60dwtdd.jpg",
    "revision": "01179aa11adef6712dd9ea740d12f46f"
  },
  {
    "url": "img/BigData/Hive/006tNc79ly1fqlnbse65gj31kw0iltbw.jpg",
    "revision": "138ea380d8952432611515d6400d8d1e"
  },
  {
    "url": "img/BigData/Hive/006tNc79ly1fqlnfwiraej31kw0ibn0m.jpg",
    "revision": "d3f137b7451fbebe3c830f4f8b7745d3"
  },
  {
    "url": "img/BigData/Hive/006tNc79ly1fqlnincnv9j31kw0uy7b1.jpg",
    "revision": "d093016c401660180c8d2c4a760b3bd7"
  },
  {
    "url": "img/BigData/Hive/hive_logo_medium.jpg",
    "revision": "01e58512cd43aa821c640462845fc534"
  },
  {
    "url": "img/BigData/Kafka/006tNbRwly1fw6rro423pj31fy0fytcg.jpg",
    "revision": "75be05ddf475653e314e5b7a6359fd2d"
  },
  {
    "url": "img/BigData/Kafka/006tNbRwly1fw6t5sgn9lj31ik0ji0up.jpg",
    "revision": "8d6e54ecd954ac2c65285ca0c733a329"
  },
  {
    "url": "img/BigData/Kylin/kylin_logo.png",
    "revision": "21d86c6af2f3a3ff2935c4d2e19faae6"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7nsad4xsj30vg07iabu.jpg",
    "revision": "18d27d92b5879e2df445eabf58741a6f"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7nzok0tgj30pa04q0tg.jpg",
    "revision": "4d901ded7643f7fd2097ed2287ea0fb5"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7nzrkmd8j315a0g8n1h.jpg",
    "revision": "eca0a9fbc6384be0cdaae6cc4d3b1093"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7o01f09mj323m02gt9k.jpg",
    "revision": "b6c733d23f39b6ae99457b56cba22e08"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7o0280glj322802s0tu.jpg",
    "revision": "a86553be27e0d301f37b73e0eff60a6e"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7o04yd22j323e068tcj.jpg",
    "revision": "66dbffcc0bfacc225b577dc13fb28ece"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7o14apn2j30pk076jrq (1).jpg",
    "revision": "f47ab7af03be6284f967c9d60a28d391"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7o14apn2j30pk076jrq.jpg",
    "revision": "f47ab7af03be6284f967c9d60a28d391"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7o2zu1i4j31p40e479z.jpg",
    "revision": "e30546ef77e43c8e2cec080b75ec4dad"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7o9l8wtbj31e802qmxs.jpg",
    "revision": "8681d42b638a37baa6f8362b21d6addf"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7o9wgeqxj327405umzq.jpg",
    "revision": "78967989750ad18bb1aa05ce6bd0b670"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7obcmda2j326m040q4x.jpg",
    "revision": "a213aafde0afbfc2af0ebe7bdf9ad18c"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7od4oqxij326y02ut9v.jpg",
    "revision": "f0899b1ef3c93918bf37189fa5abbddb"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7odlo6pxj3274078q85.jpg",
    "revision": "13b97d6b3c06a207a0ed0c367bd1a03c"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7olbyhz3j318p0u0ajj.jpg",
    "revision": "e94564ce9a8a3a1c81ffb48fa0d6ffde"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7olgykloj30si0g2dmu.jpg",
    "revision": "2d59d16014493a29bbf838d8d633ab5c"
  },
  {
    "url": "img/BigData/Sqoop/006tNc79ly1fz7olio3vyj319i03yjst.jpg",
    "revision": "5054ec1110a9728b05427ddb636f7c79"
  },
  {
    "url": "img/BigData/Tez/006tKfTcly1ft1acatagxj31kw07agn3.jpg",
    "revision": "858dae91819df1b6c6496336c6a53bc7"
  },
  {
    "url": "img/BigData/Tez/006tKfTcly1ft1atl6kd3j317i0n8td7.jpg",
    "revision": "63db10898ed263bb22717e873c89256c"
  },
  {
    "url": "img/BigData/Tez/006tKfTcly1ft1axl7ijdj30wu076ab9.jpg",
    "revision": "943f490a899a5f931c0701473967c0f8"
  },
  {
    "url": "img/DataBase/MySQL/006tNbRwly1fvndcxf4qrj31140hg784.jpg",
    "revision": "c3573dc37c0534cea304a5b772e36c57"
  },
  {
    "url": "img/DataBase/MySQL/parse-binlog.png",
    "revision": "88a35714e5e6d85243d7d82ae2bda8e4"
  },
  {
    "url": "img/DatawareHouse/006tNbRwly1fvnr6jw5pvj30fy086gmu.jpg",
    "revision": "6287bed85d52ed279fc7fe7e69a0c2e7"
  },
  {
    "url": "img/DatawareHouse/006tNbRwly1fvnrjz9j2oj30ds0avq4u.jpg",
    "revision": "534e0b5550e38c25b5d5cbfe56f088e0"
  },
  {
    "url": "img/DatawareHouse/006tNbRwly1fvns2b30cmj30mi095jsl.jpg",
    "revision": "7aede946b6209b673f25548ad0001919"
  },
  {
    "url": "img/DatawareHouse/006tNbRwly1fvns2ccu8bj30qn0h8t9l.jpg",
    "revision": "b604392c4bdedac0b1dc76a3b834e4d5"
  },
  {
    "url": "img/DatawareHouse/006tNc79ly1g25qddulezj30xo0h8wgo.jpg",
    "revision": "7b2e8b3dc7ac8e28b470bb7167cbf6eb"
  },
  {
    "url": "img/DatawareHouse/006y8mN6ly1g78fp3v9tkj30vs0g81dd.jpg",
    "revision": "34eefbdbcb0c4d8812b9add766ffb1ea"
  },
  {
    "url": "img/DatawareHouse/006y8mN6ly1g7czkvqqjtj311h0jcqcj.jpg",
    "revision": "8ddb280f6916ffdfc9ba4854f7c07ef0"
  },
  {
    "url": "img/DatawareHouse/datawarehouse.jpg",
    "revision": "7b2e8b3dc7ac8e28b470bb7167cbf6eb"
  },
  {
    "url": "img/DatawareHouse/export_data.jpg",
    "revision": "2cca91b9e4094c0c83a762a65fa63f90"
  },
  {
    "url": "img/Java/Basic/006tKfTcgy1fq51o2jgchj30bh0aeglr.jpg",
    "revision": "a24636fe9fa1f05a8d8f18cc0013a825"
  },
  {
    "url": "img/Java/Basic/006tKfTcgy1fq51p08zv1j30az05e0sv.jpg",
    "revision": "270246183ee4032b148e53f1d96c9b2c"
  },
  {
    "url": "img/Java/Basic/006tKfTcgy1fq51pjduz1j30hz0ckdgq.jpg",
    "revision": "23387cea6b8b4c49a4bad1d4c31750e6"
  },
  {
    "url": "img/Java/Basic/006tKfTcgy1fq51pt5gadj30ev07l74s.jpg",
    "revision": "68173b165e32db92e9aa6f185849c620"
  },
  {
    "url": "img/Java/Basic/006tKfTcgy1fq51q1hnsxj30er07dt9c.jpg",
    "revision": "9f9e472311fc03885b7ad03c069fb02c"
  },
  {
    "url": "img/Java/Basic/006tKfTcgy1fq51qawogfj30eu07f0te.jpg",
    "revision": "e5b3597bdaaab2f5248e3d57684459dc"
  },
  {
    "url": "img/Java/Basic/006tKfTcly1fq51qjlkgsj30ev07kt9e.jpg",
    "revision": "87ba86626f9f95239a69bac2c36db09e"
  },
  {
    "url": "img/Java/Basic/006tKfTcly1fq51qsmc9ij30er0kdgpi.jpg",
    "revision": "4d41cbe8ae63662fd2846a758f971838"
  },
  {
    "url": "img/Java/Basic/006tNbRwgy1fvn4u2nr8fj30dw07974r.jpg",
    "revision": "fcbcc5288d52beea50439928f24fe41e"
  },
  {
    "url": "img/Java/Basic/006tNbRwgy1fvn4u4036gj30dw076aaq.jpg",
    "revision": "266d13e79dda268d29c667a6c6c2aaef"
  },
  {
    "url": "img/Java/Basic/006tNbRwgy1fvn4u4vu31j30dw0853zb.jpg",
    "revision": "995ec3e5296fc536bb8fb19b4e7553fc"
  },
  {
    "url": "img/Java/Basic/006tNbRwgy1fvn4u6e0ezj30dv08zq3x.jpg",
    "revision": "e2b243f73b8fa17d0b2989c1d4f42235"
  },
  {
    "url": "img/Java/Basic/006tNbRwgy1fvn4u73wzaj30dw07w74l.jpg",
    "revision": "75e3ab445ab9f0a84356e0b7c3fd0cb4"
  },
  {
    "url": "img/Java/Basic/006tNbRwgy1fvn4u8aaxlj30aj03sweb.jpg",
    "revision": "ad8a5380885e9eea35599421e96565ff"
  },
  {
    "url": "img/Java/Basic/006tNbRwgy1fvn4u921plj30dw08v75d.jpg",
    "revision": "202f4665f4742a0f520c970efd72d201"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcgy1fq516g5ef7j30dh07saak.jpg",
    "revision": "9076c8617e2eb0932a1ac6e3f39cdb85"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcgy1fq51ga8fkuj30l20efmyr.jpg",
    "revision": "b21292218d00fee6c390204c3fcd14c6"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcgy1fq51gwxqlhj30fu086wfg.jpg",
    "revision": "34a93bb5917abb2769ee216210d15290"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcgy1fq51ije38vj30ev06ggly.jpg",
    "revision": "05270f717e6fd2b3695a69f5b0f5cd2f"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcgy1fq51it5jewj30jy0biq4b.jpg",
    "revision": "6276981fdabdece3a31f1d66ed3a61fb"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcgy1fq51j0fqo4j30lp0bbjsy.jpg",
    "revision": "3de8bfcbb77fb58d546e0e0e1e2c3f15"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcgy1fq51kgkk0bj307p077js6.jpg",
    "revision": "8f0e956b98612586fd3508c712f68e30"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcly1fq514iyppnj30gj08umxs.jpg",
    "revision": "d1262a65127e6e69e500ae8a66182a14"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcly1fq517dclh7j307r099jry.jpg",
    "revision": "7be5095f07a476c9768feef7b70503c5"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcly1fq517we4t6j30e107gmxl.jpg",
    "revision": "5d38b17cb4c96c2cbca547b2803e7751"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcly1fq5189nidyj30jq0aqabb.jpg",
    "revision": "f24b67183d7112055ba2285eeba30276"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcly1fq518ynpoaj30eu0aswff.jpg",
    "revision": "ae28dd2242458fc2df84802b33006930"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcly1fq519ubgm2j30jn06ht9a.jpg",
    "revision": "f1b6d903c866f2618201352ae30eb64c"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcly1fq51heumjkj30c905bdg2.jpg",
    "revision": "f78e3e89756d5b01d5aacfed4a291909"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcly1fq51i33nzwj30cf07mdg3.jpg",
    "revision": "9050dcf12b6238faec196d8c8b9d9add"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcly1fq51jatjiwj30jn0brab6.jpg",
    "revision": "3d91465c177fff37856288773743443d"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcly1fq51k6utxnj30go0aljs3.jpg",
    "revision": "154bdc809043adcf4ebc7a9eaa774b7c"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcly1fq51lq02e4j30e9053mxb.jpg",
    "revision": "449a54b81f4140b83d375e8c1434d236"
  },
  {
    "url": "img/Java/DesignPattern/006tKfTcly1fq51mz12s3j30cj0a5glw.jpg",
    "revision": "d083e2765cfdcbeba1f51d26460c2e78"
  },
  {
    "url": "img/Java/JVM/006tNbRwgy1fvmt0vur8jj30qs0mkq84.jpg",
    "revision": "f97315ae2fdbcf2ad5891dcae4466fa4"
  },
  {
    "url": "img/Java/Maven/006tKfTcgy1fq50z2yqt8j309r03a0sm.jpg",
    "revision": "2a7278869be174fdbd200d09b90aba5f"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79gy1fq6elw92bxj30ss0f20yd.jpg",
    "revision": "89c18e412edbb69e109b693026916589"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79gy1fq6emoh76tj31gy0wk12p.jpg",
    "revision": "f34dc1633eaa25a40f0ef9bc07c0db3e"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79gy1fq6fbif7raj30ms09w0u1.jpg",
    "revision": "a0ac93dfa47691406d61f0413aa1f809"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79gy1fq6haoodgrj31gy0wkn0l.jpg",
    "revision": "dfa89d49854963e83a18b4779625ed55"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79gy1fq6hd0r5r9j31gy0wkdm0.jpg",
    "revision": "ce429f4a7006f8bf94f14a59a16d48a4"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79gy1fq6heov92dj31gy0wkgp1.jpg",
    "revision": "b8ada222bb4d9645609692bb65cdd05b"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79gy1fq6hgqsfqdj31kw0zq7lq.jpg",
    "revision": "68b1242c83735ff0734cf0db72c8a5cb"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79ly1fq6enqblmwj31gy0wk0ux.jpg",
    "revision": "12c44e6a02db7d30b67e8c2bdc9eee5c"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79ly1fq6eonar70j31gy0wkgp2.jpg",
    "revision": "68894a4c5c29ca1193c1d271ee5d86c6"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79ly1fq6ex1p6apj31880a20w5.jpg",
    "revision": "6898d1e4f89e09e29ff570576915103b"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79ly1fq6f0z2rg0j30kw060aaq.jpg",
    "revision": "05de8f8871bd02614ff029aaf511ffb4"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79ly1fq6f8yxv2xj30p40my40i.jpg",
    "revision": "8b2b51924e8dd2f32b8e22cb82a02b12"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79ly1fq6fdpd20lj31kw0k4at7.jpg",
    "revision": "86dd34acea5a80b68bd2684088f3f6d2"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79ly1fq6h2x0q0ej30o80tmq5s.jpg",
    "revision": "c99c162383ccec1074dbe58afc45365e"
  },
  {
    "url": "img/Java/SpringBoot/006tNc79ly1fq6h9oe5qtj31gy0wkwiy.jpg",
    "revision": "679c608c89f8dd4e35842e8dff14897d"
  },
  {
    "url": "img/Other/BlockChain/006tKfTcgy1fqcbvfp3tnj31940roq7d.jpg",
    "revision": "7c016bcc1447af3838a278c686422ae5"
  },
  {
    "url": "img/Other/Finance/006tNbRwly1fvnrbuaszrj30te0oeamn.jpg",
    "revision": "67a4e5dbe2580366378226f4bb32be69"
  },
  {
    "url": "img/Other/Git/006tNbRwgy1fw34hx6o4nj31kg14g4qq.jpg",
    "revision": "1492a6e7b9c1604f4e3c0f038fcd113b"
  },
  {
    "url": "img/Other/Git/006tNbRwgy1fys4bm0jwlj306p027t8h.jpg",
    "revision": "cdc7b0b27b0403c1284a9d517d92e9cf"
  },
  {
    "url": "img/Other/Git/006tNbRwgy1fysayytl3lj30bb00nglj.jpg",
    "revision": "e554282070c5df50f590d86610b05fee"
  },
  {
    "url": "img/Other/Git/006tNc79gy1fyusvixfokj31780jiq7u.jpg",
    "revision": "e775264a947d93fd2feda7e7078327c5"
  },
  {
    "url": "img/Other/Vue/006tNc79ly1fz5bywfmowj30pu0s4dil.jpg",
    "revision": "d6848e26ac4e05ca1df02eb65813750a"
  },
  {
    "url": "img/Other/Vue/006tNc79ly1fz5cnih8poj319u0soaf1.jpg",
    "revision": "3f3246a56eee482ed33a9d2be59bbe51"
  },
  {
    "url": "img/Other/Vue/006tNc79ly1fz5csbhe9dj30qu0pe430.jpg",
    "revision": "4cdef8774b9745c93da5fff005397337"
  },
  {
    "url": "img/Other/Vue/006tNc79ly1fz5cx9tf0jj309k0qc0uh.jpg",
    "revision": "b16dad608d9b804621cf34300259185b"
  },
  {
    "url": "img/Other/Vue/006tNc79ly1fz5d3l5fwuj31520k4415.jpg",
    "revision": "6c5ab2e5ca6c0b93ea49f02c0c0f68e5"
  },
  {
    "url": "img/Other/VuePress/006tNc79ly1g28d4ctk8gj30ho0e8dh7.jpg",
    "revision": "30dd7d934e92b31c3f288a4e7072f798"
  },
  {
    "url": "img/Other/VuePress/006tNc79ly1g28d5i8bnpj30dk0gugmk.jpg",
    "revision": "21cfc3c5e6bd5b88e79ef376ed323513"
  },
  {
    "url": "img/Other/VuePress/006tNc79ly1g28dblkc7uj31ag0kedjp.jpg",
    "revision": "d6e7c875afaea43f6f91e7a35de0ed25"
  },
  {
    "url": "img/Python/Basic/006tKfTcgy1fq59dotb55j30n60uy0vs.jpg",
    "revision": "6e8b6d05305ba86d22bb8a841a931717"
  },
  {
    "url": "img/Python/Basic/006tNc79gy1fz72tldd2nj31j10u0too.jpg",
    "revision": "4119caa5fa29a1075f3e0cf61b2b2f5e"
  },
  {
    "url": "img/Python/Basic/006tNc79gy1g24oikguvlj315f0u00yl.jpg",
    "revision": "528d0b8833fd52747bf6768d2203fd95"
  },
  {
    "url": "img/Python/Basic/006tNc79ly1g24of9bkhaj31bl0u0whv.jpg",
    "revision": "1fb3d75e44e272b7ab700742806f615b"
  },
  {
    "url": "img/Python/Basic/006tNc79ly1g24ogcoiiyj31bl0u0dj8.jpg",
    "revision": "868e473eea633ec99f878fd15c3b8d9e"
  },
  {
    "url": "img/Python/Basic/006tNc79ly1g24oow0b48j315f0u0dlq.jpg",
    "revision": "ab45c1cb495c22c57c6160c4744191b1"
  },
  {
    "url": "img/Python/Django/006tNbRwgy1fxgvyn08nfj30la0bwq4h.jpg",
    "revision": "1cdcabd6cfa4efd71775e989845d9218"
  },
  {
    "url": "img/Python/Django/006tNbRwgy1fxgvzkhze5j30he0b4t9n.jpg",
    "revision": "70eb9d481f7f2cdd370eff8259188469"
  },
  {
    "url": "img/Python/Django/006tNbRwgy1fxgw30b01nj30fe0c4js7.jpg",
    "revision": "102b65dd5d3a75019c308b15ec904d2b"
  },
  {
    "url": "img/Python/Django/006tNbRwgy1fxgw4nuef4j30r20xen5p.jpg",
    "revision": "f52b2ae6bd217a0143dfa5a82f8246b3"
  },
  {
    "url": "img/Python/Django/006tNbRwgy1fxgw9acpgbj31ke0p8jtf.jpg",
    "revision": "a35973c6eca447f8c2f94a2e6dac0091"
  },
  {
    "url": "img/Python/Flask/006tNbRwly1fxssn7w2zqj312o08i3z7.jpg",
    "revision": "c96c35fe3a6ceab6de997c1495580444"
  },
  {
    "url": "img/Python/Flask/006tNbRwly1fxssplamdnj30jm04qmx7.jpg",
    "revision": "9fcbad77859fb0a37aabeb77b09a84ad"
  },
  {
    "url": "img/Python/Flask/006tNbRwly1fy0um6wv7cj30ki04i0t7.jpg",
    "revision": "eafa262267195a63dcb4505f84875842"
  },
  {
    "url": "img/Python/Flask/006tNbRwly1fy0wwpsr9kj31i40liq8p.jpg",
    "revision": "dd00de27d414a4148a6e819cae9ea557"
  },
  {
    "url": "img/Python/Flask/006tNbRwly1fy0wyjrgehj30ju08imxt.jpg",
    "revision": "2a8f541dc0a73623ff912a6c3b7e788d"
  },
  {
    "url": "img/Python/Flask/006tNbRwly1fybc5btgjhj30ia04odg2.jpg",
    "revision": "8e38ec72c8b9426f6bdc4940761d5b30"
  },
  {
    "url": "img/Python/Flask/006tNbRwly1fybc5x7jgyj30hg04kdfw.jpg",
    "revision": "9aecaec2c135c56f80afedb6533da8ca"
  },
  {
    "url": "img/Python/Flask/006tNbRwly1fybcujbjhej30i60lkmz3.jpg",
    "revision": "8378420ef78a4d6132b3bbdb002cd1c4"
  },
  {
    "url": "img/Python/Flask/006tNbRwly1fychnm2stej30gu0b6t9b.jpg",
    "revision": "4f0e389589d3575153bcbf7f1deb2e52"
  },
  {
    "url": "img/Python/Flask/006tNbRwly1fychnsdmfgj30iu08kwf4.jpg",
    "revision": "4aa948bbd513c0438f1f4c6222686609"
  },
  {
    "url": "img/Python/Flask/006tNbRwly1fydmv1n09lj31ra0i243d.jpg",
    "revision": "06d9ba3f351259ffaf287ad850acee8e"
  },
  {
    "url": "img/Python/Flask/006tNbRwly1fyp8gsczdpj31d00bm436.jpg",
    "revision": "dc19878252b8537139ee73a81377d2cf"
  },
  {
    "url": "img/Python/Flask/006tNc79ly1fyx66z1e36j31kw0icwv9.jpg",
    "revision": "c1d57b77662268052a3d6989f0cde859"
  },
  {
    "url": "img/Python/Flask/006tNc79ly1fyx6aesebwj30xs0nwdo5.jpg",
    "revision": "7ea9e83c8234933fc5f8931703b72f7c"
  },
  {
    "url": "img/Python/Flask/006tNc79ly1fyx6hks4mdj320o0n87pd.jpg",
    "revision": "1811c32135ab22d20f5d419db77f24cb"
  },
  {
    "url": "img/Python/Pandas/006tNbRwly1fy8nth9hzfj31500nkahe.jpg",
    "revision": "47f7545ce2e51e7561c5812cfa49e0ce"
  },
  {
    "url": "img/Python/Pandas/006tNbRwly1fy8nvuup9tj308405gmx2.jpg",
    "revision": "b3ca71a85524401ac088a4d47b640274"
  },
  {
    "url": "img/Python/Pandas/006tNbRwly1fy8p0ns228j30hy094dg5.jpg",
    "revision": "398135eef1b47ffd89c13acf276e38d8"
  },
  {
    "url": "img/Python/Pandas/006tNbRwly1fy8pxbwm52j30j00d2dgm.jpg",
    "revision": "7e8e1f9d7e2708fce5f85c2955098f0e"
  },
  {
    "url": "img/System/Linux/006tNbRwgy1fvn3obr6gdj30x40iu44a.jpg",
    "revision": "0f804002c8cd04a98412669bda4ff7bf"
  },
  {
    "url": "img/System/Linux/006y8mN6ly1g78gej7rilj314w06sdgo.jpg",
    "revision": "c4260965d233e8a0ef9319f375323512"
  },
  {
    "url": "img/System/Mac/006y8mN6ly1g78gcqy9vcj31kw03omxx.jpg",
    "revision": "ca7a95dd406d7effc3665719ac660cc3"
  },
  {
    "url": "img/System/Mac/006y8mN6ly1g78gde2o29j31kw0b1jt2.jpg",
    "revision": "b82c4aa0fdfdb9ea18654ddeff2cbc91"
  },
  {
    "url": "img/System/Mac/006y8mN6ly1g78gdnnk57j31kw05aq31.jpg",
    "revision": "3506c03f31036f75ecbc90609d5702d4"
  },
  {
    "url": "img/System/Mac/006y8mN6ly1g78gdxsppgj30yz0u0tal.jpg",
    "revision": "600420f37acbd0cc131b66243d12dfe5"
  },
  {
    "url": "img/Tools/Eclipse/006tNbRwgy1fvn0aymuerj30jf0auq3t.jpg",
    "revision": "d731fce62f256d16c126ed68df6661aa"
  },
  {
    "url": "img/Tools/Eclipse/006tNbRwgy1fvn0azvkw0j30kt0fot9t.jpg",
    "revision": "680f219f01d63f613a1b82870246f288"
  },
  {
    "url": "img/Tools/Eclipse/006tNbRwgy1fvn0b10wc1j309a0e00sz.jpg",
    "revision": "0b10e3aac50164aefa22b6d3a68762dd"
  },
  {
    "url": "img/Tools/Eclipse/006tNbRwgy1fvn0b1wlpqj30jk07daae.jpg",
    "revision": "2eee5264e0e55117db8f2d633a10286d"
  },
  {
    "url": "img/Tools/Eclipse/006tNbRwgy1fvn0b2vyx0j30hz0gadg6.jpg",
    "revision": "08414c2594b45683a90b7200e864e0fd"
  },
  {
    "url": "img/Tools/Eclipse/006tNbRwgy1fvn0b3wtt7j30i00g9dgh.jpg",
    "revision": "debdffce46fa4f90d28bb79dd8b8b346"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn173t831j31kw13o0yr.jpg",
    "revision": "48a062c140f26810a50b23158b3bd6d1"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn175ihuwj31kw13owk0.jpg",
    "revision": "9f6a5e70ddde71efe4e32b42b97336a6"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn176tp3ej31kw13owj8.jpg",
    "revision": "18513355738e651f6426690e26440c19"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn178ymzdj30vu0ck0x8.jpg",
    "revision": "c6e5acb00d8c499c81886b0eb5c63c23"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1acdg1qj30yc0gsdjj.jpg",
    "revision": "f35641c504549c6ac0d825613c1e57ce"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1adckqej30r807aabr.jpg",
    "revision": "aa305f6432f2681a6df9b061ae34b90d"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1aefpc5j314o16gafx.jpg",
    "revision": "5e22873c5fe83ff89b0e53c17328685f"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1agae1fj30ku0a4gm7.jpg",
    "revision": "0bf9252f91a4b929e37c79ff9aa3549b"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1aiifjpj30tq0ocwkk.jpg",
    "revision": "8ce679bcae4219aa85ee3a6e1c2eed4d"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1akblnxj310014odq0.jpg",
    "revision": "fd1421f4bf0ba3fd72fdbe8969cc5171"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1al5tz2j311q0u2t9q.jpg",
    "revision": "dfbc865dda3b968ea40b07e60a531dbc"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1am3y4cj30lu0g43zx.jpg",
    "revision": "c7c7bc93098b1415822c6d7244771180"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1anaqpkj30yc0g8q6q.jpg",
    "revision": "db082939d0647dbfc1aafb58b314cd7e"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vfi67wj31gy0wk767.jpg",
    "revision": "01d190be9935450a98c8c4bd374057d3"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vgvsqcj31kw0d3tdp.jpg",
    "revision": "e7fd2f7dcba402674fd0bb2a5f36d7e9"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vibcsuj30no0gk0wo.jpg",
    "revision": "b816041122fa0124ec99f532d975d484"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vjb07oj30hc076t8u.jpg",
    "revision": "ec5daca26083a01a7b945ccba9a865ee"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vk7bvvj30hg0380sq.jpg",
    "revision": "7da24ccb155cdf6ff22c9f7cd1e88796"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vl5rn8j30m203i3yt.jpg",
    "revision": "a31f203be2871dde9e30a29432540ff0"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vmgqorj31ko0pi0wh.jpg",
    "revision": "dbcdfd28fe4669f63b669bfb78ef45f6"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vnzdsdj31gy0wkqc0.jpg",
    "revision": "0611f28469f104433bda30c8d7e35bb8"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vow51nj30es03at8r.jpg",
    "revision": "3fdb4f820f7abdce125663b9985a91b6"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vpub3nj30i807w0t1.jpg",
    "revision": "b973069dc1a97c3126b5504379a1c634"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vr3wllj31gy0wkq60.jpg",
    "revision": "10961a0f1271d337d53641d018e07811"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vsg3mwj30uo06m40r.jpg",
    "revision": "819efd92c1a55609f50b27020241660b"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vta66yj31gy0wkab3.jpg",
    "revision": "90f892d5d84ba6d0714ee858b5d668c9"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vu8bm8j30k40dgdgo.jpg",
    "revision": "9be8f06304a1f612a9242840359098c3"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn1vvl99qj30fw0aq0t4.jpg",
    "revision": "e584679e27db1e2f6ea806d6a94dd6b0"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn273zmb6j30le0o6jto.jpg",
    "revision": "5760c873c37845b29759d5744b9d70d9"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn279085hj31kw0eqac1.jpg",
    "revision": "b07f041795e2323fbcb0f49c99c6432b"
  },
  {
    "url": "img/Tools/IDEA/006tNbRwgy1fvn27tswfkj30k005iglx.jpg",
    "revision": "76151148560356c0dd1ca50d69b46ab9"
  },
  {
    "url": "img/Tools/IDEA/006tNc79gy1fznmim22g2j318a096n57.jpg",
    "revision": "85d1a961ec2d255f45e38d01e7130277"
  },
  {
    "url": "img/Tools/IDEA/006tNc79gy1fznmiwloofj31860cqjzg.jpg",
    "revision": "cf513148d374049e3167a6958877eafb"
  },
  {
    "url": "img/Tools/IDEA/006tNc79gy1fznmjk5avgj313g0u0x24.jpg",
    "revision": "43ce9ddd2f036bf7a926da3128db0c05"
  },
  {
    "url": "img/Tools/IDEA/006tNc79gy1fznmjz4liej30vu06un1l.jpg",
    "revision": "362b8f09a0994fe7076bcfce5838a07a"
  },
  {
    "url": "img/Tools/IDEA/006tNc79gy1fznmk6k64vj30pc0dytee.jpg",
    "revision": "608740ddc8b301b4571720b232a70134"
  },
  {
    "url": "img/Tools/IDEA/006tNc79gy1fznmkmvhgtj317m0m4hdt.jpg",
    "revision": "12e0b1501908af18510de68d729385cc"
  },
  {
    "url": "img/Tools/IDEA/006tNc79gy1fznmluqloxj311y0p04al.jpg",
    "revision": "4b51ccf7f9553abd073975afbfebcad7"
  },
  {
    "url": "img/Tools/IDEA/006tNc79gy1fznmmrqmryj30wq0ge49n.jpg",
    "revision": "51746d4b4ba22dbb4ccebf5a6d54ec38"
  },
  {
    "url": "img/Tools/Markdown/006tKfTcgy1fq50s1avtrj30uk0mx42y.jpg",
    "revision": "c79ae3a7f499e5671cdd1ea1ef177a74"
  },
  {
    "url": "img/Tools/SublimeText/006tKfTcgy1fq5j0fxf6gj30wa0zy7dj.jpg",
    "revision": "dd9a74c032d7ea928c98ea4211202186"
  },
  {
    "url": "img/Tools/SublimeText/006tKfTcgy1fq5j7uucgzj30w00g8gnz.jpg",
    "revision": "ad1863e7caac3d3d22cc89413ae8d2ae"
  },
  {
    "url": "img/Tools/SublimeText/006tKfTcgy1fq5j9fmbsmj30vq0kq41m.jpg",
    "revision": "8e992270174d827334203a9410f2af55"
  },
  {
    "url": "img/Tools/SublimeText/006tKfTcly1fq5ivjnvrfj30qi0ikn2d.jpg",
    "revision": "8b0f564f3296fa4946d7320d0ac66ba4"
  },
  {
    "url": "img/Tools/VirtualBox/006tKfTcly1fq50mmgndkj30jw0do75y.jpg",
    "revision": "65d5c2e79c13ed1aec4a06fbf3166831"
  },
  {
    "url": "img/Tools/VirtualBox/006tKfTcly1fq50mmxtkzj30jw0aqdh8.jpg",
    "revision": "7b7b7f8f901baadc4a958a4169041b46"
  },
  {
    "url": "img/Tools/VirtualBox/006tKfTcly1fq50mnwp12j311c0iediv.jpg",
    "revision": "9bc62154c4bc62214853a81ec427f397"
  },
  {
    "url": "img/Tools/VirtualBox/006tKfTcly1fq50moyncxj311c0iegos.jpg",
    "revision": "51ccacada0ca12acb3fd81e04bb37cc9"
  },
  {
    "url": "img/Tools/VirtualBox/006tKfTcly1fq50mptg7sj30n006ct9o.jpg",
    "revision": "1c5d5bdb076394bd42627798df904dc0"
  },
  {
    "url": "img/Tools/VirtualBox/006tKfTcly1fq50mqrietj30n207m0tz.jpg",
    "revision": "a0cb65fe236d49fd4191f86a9b13f18c"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn31rtvxwj30rq0najtq.jpg",
    "revision": "a58fcd9230ded264ac367f4f7fa79256"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn31spxicj30q4052js9.jpg",
    "revision": "423387c86a962299e424679e16bc3323"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn31u0izsj31kw0guaei.jpg",
    "revision": "46fdeededbc8266ea859024233fad74e"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn31vhxjdj31kw0hyjvq.jpg",
    "revision": "c6852ecf4127763745ad5d2d727514f7"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn31wqja0j30rq0na0xd.jpg",
    "revision": "d0058246da14951af716fcf2b9325fc6"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn31xqyd7j31400osdgk (1).jpg",
    "revision": "503ccdd70c02f22079639061ca966ec4"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn31xqyd7j31400osdgk.jpg",
    "revision": "503ccdd70c02f22079639061ca966ec4"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn3si27nbj30hs0bcjsf.jpg",
    "revision": "d35be597f4eceb9b9bbbbad6f0f0e2a0"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn3sjblibj30k50dhtau.jpg",
    "revision": "0f1ccdbd82246ff0d507c20829410a61"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn3sk8cqij30hs0bj3zm (1).jpg",
    "revision": "a6188dd1e3f5d86f6607475e6094badc"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn3sk8cqij30hs0bj3zm.jpg",
    "revision": "a6188dd1e3f5d86f6607475e6094badc"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn3utv37tj30d1072jrf.jpg",
    "revision": "326da88928e4d2794323dcc05167a262"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41fa9bvj30b408d74x.jpg",
    "revision": "ac37e575fb714072d3c373b9dfe9cbfc"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41fvyppj30b408zaab.jpg",
    "revision": "c4dfea7c2c2541f202bc5ea673709014"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41gb08cj30b4074t8u.jpg",
    "revision": "3f418a7432a48062fbe8801764327071"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41gupbtj30b4094q3e.jpg",
    "revision": "c97593adb0c0b92afa306565651e59b3"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41ids56j30b308tt96.jpg",
    "revision": "d83c0e45f6dd8b5689a249a80e6dad9d"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41j7n62j30b40980tc.jpg",
    "revision": "e86fd3d22dce9517c8adccca6106caa3"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41k54mrj30dw077t96.jpg",
    "revision": "8acd61102a93e47fe7d6cb7c0cf9e01f"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41lzav6j30b408ct96.jpg",
    "revision": "9281b9d2243a7006b430a9b773fb3971"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41n1zqzj30b40870th.jpg",
    "revision": "0447d4c19c64cbd9aebb0b5d196a3a0d"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41nuo8bj30b409bwex.jpg",
    "revision": "d201b7bd10952557000f96a13211502c"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41oeqazj30b308dt9i.jpg",
    "revision": "c1251c1c860d3cf1028e052a3d76cebd"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41r63p6j30b3088js6.jpg",
    "revision": "ca6651213d323971d5fb27e71d0c4598"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41s2sytj30b40880th.jpg",
    "revision": "c8f31bde2081d6d9fbbeef1a3ebc0ff5"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41t4wy1j30b4088t8x.jpg",
    "revision": "3658e0b8adfdd8fadfeb011c23bede0b"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn41uwnjpj30b306caal.jpg",
    "revision": "ffca1c0ed0b8aaa4b142fda1d8bf623c"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn43mtzezj30b409aq3f.jpg",
    "revision": "a3c44591522a86378c7bfe276f56ef74"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn43x02c1j30b409a74t.jpg",
    "revision": "9cae9c9cd614938f380ab6a7454b9b8d"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn440d53cj30b4095wfd.jpg",
    "revision": "5f0ae1bacdc94d7586eddb1e2a3429b1"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn4496yxsj30b4098mxs.jpg",
    "revision": "4fa8b0c4a69b04ccf07b7d3fba84aa9b"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn44cgifoj30b40990tc.jpg",
    "revision": "27f561f589c176bef282e4d41095d665"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn44h07zaj30b408aaaj.jpg",
    "revision": "eb3d98269e219c6980576c5db6f6e506"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn45iah9yj30b40870tj.jpg",
    "revision": "4ae7a14e9404441864ec079a982f30b8"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn45sz4w4j30b40893z4.jpg",
    "revision": "3192f2e378fea57ef3a12ded9a1ef4f5"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn460sx43j30b408jgm9.jpg",
    "revision": "2b69a22518aa6acd03e8c62346628404"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn468e2sgj30b4087gm9.jpg",
    "revision": "59d6d9f69056d17f47d9ebe1c20fba06"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn46ewvihj30b408sq3w.jpg",
    "revision": "194ebaf62999a2bca4f7d750d35e6bb1"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn46zp0lnj30b4088mxj.jpg",
    "revision": "72aecebb87afa00f40fe0f6f654989b3"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn472rd73j30b408b3yz.jpg",
    "revision": "e831f89e2fccbcbfe6bed5d16d50cd69"
  },
  {
    "url": "img/Tools/VirtualBox/006tNbRwgy1fvn47iwomqj30b408y3z5.jpg",
    "revision": "8e8f4a653133de3a68dd8d6c99adebd4"
  },
  {
    "url": "img/Tools/VirtualBox/165110398.png",
    "revision": "ca6993fa061d93830a1a1b27576380e8"
  },
  {
    "url": "img/Tools/VirtualBox/165150527.png",
    "revision": "586f8a2347382a5af35dfe7a06d49978"
  },
  {
    "url": "img/Tools/VirtualBox/165227933.png",
    "revision": "cdd61bae4c716cc706ec6b0b38f4aece"
  },
  {
    "url": "index.html",
    "revision": "c9d1e6be39b870abc74d2c85615554da"
  },
  {
    "url": "Java/Basic/css-custom-scroll.html",
    "revision": "a1a836e832ca5c1a8e62470fa26cc043"
  },
  {
    "url": "Java/Basic/index.html",
    "revision": "04c7f6cc934204fde6cacc09d4f6ef16"
  },
  {
    "url": "Java/Basic/java-send-messge.html",
    "revision": "a5acf65926c98b37f901d024e0a490a5"
  },
  {
    "url": "Java/Basic/线程的优先级.html",
    "revision": "e2218d9cf061a76ea89bc0be8760e9c1"
  },
  {
    "url": "Java/Basic/线程的同步之Synchronized在单例模式中的应用.html",
    "revision": "2a8e9be2034ffdb5fd7dfadcdf53efee"
  },
  {
    "url": "Java/Basic/线程的同步之Synchronized的使用.html",
    "revision": "f8384cf174b582b18626cfeab09fb291"
  },
  {
    "url": "Java/Basic/线程的基本概念.html",
    "revision": "f6d8fac2e2b7e3a9fdbc0df00e7ed8c1"
  },
  {
    "url": "Java/Basic/线程的死锁.html",
    "revision": "49990b52953fe945c24eca977c9e2441"
  },
  {
    "url": "Java/Basic/线程的状态和常用操作.html",
    "revision": "60e7880e10f1fa0a7bf6c0cb4ad66cf0"
  },
  {
    "url": "Java/DesignPattern/index.html",
    "revision": "55b3077146d05927c3814d8daf3eb8c6"
  },
  {
    "url": "Java/DesignPattern/享元模式（FlyWeight）.html",
    "revision": "cb92eceda968fe10a30da062b344f9b8"
  },
  {
    "url": "Java/DesignPattern/代理模式（Proxy）.html",
    "revision": "f2c5b90df4aa9a65237ed5882a059d9f"
  },
  {
    "url": "Java/DesignPattern/单例模式（Singleton）.html",
    "revision": "301cf9f7e28f56484a66a560e6485c87"
  },
  {
    "url": "Java/DesignPattern/原型模式（Prototype）.html",
    "revision": "9a10e8d8775fb9a9f7c21641a60ebbb9"
  },
  {
    "url": "Java/DesignPattern/外观模式（Facade）.html",
    "revision": "76ad6e2cc33af59ae8dc8f93d9a7de59"
  },
  {
    "url": "Java/DesignPattern/工厂模式（Factory）.html",
    "revision": "bc611740bce05ee2a28677db926ac8bf"
  },
  {
    "url": "Java/DesignPattern/建造者模式（Builder和Director）.html",
    "revision": "f3e52c7be4325e40d2da534218cb9674"
  },
  {
    "url": "Java/DesignPattern/桥接模式（Bridge）.html",
    "revision": "0a2f47cc2df101742b833d010719ec2d"
  },
  {
    "url": "Java/DesignPattern/组合模式（Composite）.html",
    "revision": "c68c769df6e3268512bb74ef282bd4c8"
  },
  {
    "url": "Java/DesignPattern/装饰器模式（Decorator）.html",
    "revision": "bd8fd6890f981a09a5d28475d9127db5"
  },
  {
    "url": "Java/DesignPattern/适配器模式（Adpater）.html",
    "revision": "e740b99702448348a535dceaa45a8938"
  },
  {
    "url": "Java/index.html",
    "revision": "654ccd324216a17e5e7cfa756c5247ec"
  },
  {
    "url": "Java/JVM/index.html",
    "revision": "d003079ca1d8edbfedb215e6391ee6db"
  },
  {
    "url": "Java/JVM/jvm-runtime.html",
    "revision": "147bd8bbaa50dc5c2d53bc22f81fb575"
  },
  {
    "url": "Java/Maven/index.html",
    "revision": "1eadd5561d92558b16b65f1a57b38118"
  },
  {
    "url": "Java/Maven/Maven入门-1-介绍及搭建开发环境.html",
    "revision": "bfcabf11168700f8accd4505b427421f"
  },
  {
    "url": "Java/Maven/Maven入门-2-Maven一些核心概念介绍.html",
    "revision": "0071b38b0125691a0bd068cadf1cdcc9"
  },
  {
    "url": "Java/Maven/Maven入门-3-pom文件.html",
    "revision": "0b00eb5c8a6e3babb38ccdb2fc21b2a5"
  },
  {
    "url": "Java/SpringBoot/index.html",
    "revision": "f960792fa754ce4d6994ecc3b3382561"
  },
  {
    "url": "Java/SpringBoot/springboot-helloword.html",
    "revision": "587d4cd28f368f52f3527ac50c236ff9"
  },
  {
    "url": "Java/SpringBoot/springboot-helloword2.html",
    "revision": "e89c2f0c1883484125b57be22c391cdb"
  },
  {
    "url": "Java/SpringBoot/springboot-SpringBootApplication.html",
    "revision": "a5b9b5b4a75848cab5ccb5abec13a16b"
  },
  {
    "url": "Other/BlockChain/Creating-a-blockchain-with-Javascript.html",
    "revision": "2b6a505c669f4d138b768c5230389228"
  },
  {
    "url": "Other/BlockChain/index.html",
    "revision": "11b06026c9dd56c0b2e1a8fe1d9e18aa"
  },
  {
    "url": "Other/Finance/china_financial.html",
    "revision": "232720ff410e2d37698421766d3aa089"
  },
  {
    "url": "Other/Finance/index.html",
    "revision": "9c05ad572d19ded2e51ba15d150b5bc1"
  },
  {
    "url": "Other/Git/git-keys.html",
    "revision": "ff060d306c918d52a252a28a54c2b18d"
  },
  {
    "url": "Other/Git/index.html",
    "revision": "321a4abb086d5be4dcd12e75a3d7aab0"
  },
  {
    "url": "Other/Hexo/hexo-sync.html",
    "revision": "49d5c997ee298619a0c96e41e00ed56d"
  },
  {
    "url": "Other/Hexo/index.html",
    "revision": "85f65034fd2a68eb1d8c55551fb16b88"
  },
  {
    "url": "Other/index.html",
    "revision": "440d39f4f3d16b66acfc7aff3fbb30eb"
  },
  {
    "url": "Other/Vue/1.vue-element-ui.html",
    "revision": "d2ff25f5c2fcd7e111496fbe104431b3"
  },
  {
    "url": "Other/Vue/index.html",
    "revision": "3bf30f1e893aa88b61137de5f7d462bc"
  },
  {
    "url": "Other/VuePress/1.vuepress-auto-sidebar.html",
    "revision": "bafc9cff807329ae0c5055da5b2ac5b3"
  },
  {
    "url": "Other/VuePress/index.html",
    "revision": "96ad33c39252b3f4b45123fa0f346c77"
  },
  {
    "url": "Python/Basic/1.python-basic.html",
    "revision": "cf35fc66e4c66a89c03f6c3f9c78e5dd"
  },
  {
    "url": "Python/Basic/2.install-python2-and-python3-in-macos.html",
    "revision": "5f1e5bafe3195b1fed2b105f74b4f407"
  },
  {
    "url": "Python/Basic/dash_study.html",
    "revision": "e44f70e542dac4e26cf241fa1083ac21"
  },
  {
    "url": "Python/Basic/index.html",
    "revision": "6734b075c02550ab11b79429f5517e87"
  },
  {
    "url": "Python/Basic/Install-pymssql-on-MacOS-using-python.html",
    "revision": "a99e8cec596a989ddb5b98e142e62946"
  },
  {
    "url": "Python/Basic/python-file-share.html",
    "revision": "a1391c28ca39b36dcdc6eae87cef9850"
  },
  {
    "url": "Python/Basic/python-splinter.html",
    "revision": "bf6dd25d41703c225dc389e47672fd9c"
  },
  {
    "url": "Python/Basic/python-txt-xls.html",
    "revision": "383416fb909387d92b66d35cc4fbd88b"
  },
  {
    "url": "Python/Basic/python-virtualenv.html",
    "revision": "594a2f53e48d9899e64f2602ad1d9977"
  },
  {
    "url": "Python/Django/index.html",
    "revision": "56dfe163a16c5626efd374129fe06f18"
  },
  {
    "url": "Python/Django/python-django-xadmin.html",
    "revision": "f538d27c1fd50bf7c31a59602c95dc36"
  },
  {
    "url": "Python/Flask/index.html",
    "revision": "e6d642c6b2250071a41c15023d990b6e"
  },
  {
    "url": "Python/Flask/python-flask-click.html",
    "revision": "543868bfc3066f7f6a25f2859ae54f22"
  },
  {
    "url": "Python/Flask/python-flask.html",
    "revision": "7f53c867c2238b32580bf58046b0ae00"
  },
  {
    "url": "Python/index.html",
    "revision": "b14fe3ed72e447bfd69f05071da180d5"
  },
  {
    "url": "Python/Pandas/1.pandas-introduce.html",
    "revision": "978e9bc8a23d0905729af64b9d37f20f"
  },
  {
    "url": "Python/Pandas/2.pandas-api.html",
    "revision": "8d1f893e392569df8b308b24f5d6a2da"
  },
  {
    "url": "Python/Pandas/index.html",
    "revision": "0dd825c32ce2bfa78cc5af9a57b733f2"
  },
  {
    "url": "Python/SqlAlchemy/1.sqlalchemy-basics.html",
    "revision": "531810c5a551936c740d0d438aafa2be"
  },
  {
    "url": "Python/SqlAlchemy/index.html",
    "revision": "a7e4168da3793dc2e642610a68bcf26f"
  },
  {
    "url": "System/index.html",
    "revision": "6fe5b0042b10945e3d8554c6696773db"
  },
  {
    "url": "System/Linux/1.shell-study.html",
    "revision": "d694e2b503df03b38d647009cb41cc18"
  },
  {
    "url": "System/Linux/2.linux-yum-rpm.html",
    "revision": "594b0d8312791700a174724e80b200a5"
  },
  {
    "url": "System/Linux/3.linux-date.html",
    "revision": "726cd48a9e7b426a1f93832195ebbc2b"
  },
  {
    "url": "System/Linux/4.shell-style-guide.html",
    "revision": "1ddb39f818719b9d11938072ab1f7c31"
  },
  {
    "url": "System/Linux/5.shell-batch-exec.html",
    "revision": "319e8d1c5cc496bbc27d7d5214861e32"
  },
  {
    "url": "System/Linux/index.html",
    "revision": "91283dd04c5a18736059e07b8804108f"
  },
  {
    "url": "System/Mac/index.html",
    "revision": "32bed6f52cc06e15125ead85c25107cd"
  },
  {
    "url": "System/Mac/mac-tips.html",
    "revision": "7eeb48ab9665dc3cb668baea457e21f6"
  },
  {
    "url": "Tools/Chrome/chrome-vimium.html",
    "revision": "eb8cf08341b0de93fc030960669bf59d"
  },
  {
    "url": "Tools/Chrome/index.html",
    "revision": "0a6791d3076c63fb3f61f37c6486d4e3"
  },
  {
    "url": "Tools/Eclipse/eclipse-create-maven2-5.html",
    "revision": "12f5ee9ceac9426cf30fb411c8c6027c"
  },
  {
    "url": "Tools/Eclipse/eclipse-svn.html",
    "revision": "b0e3a771c8b992e02fd71048f4a4288f"
  },
  {
    "url": "Tools/Eclipse/index.html",
    "revision": "5520e539d587342ff17cca920c418373"
  },
  {
    "url": "Tools/Eclipse/MyEclipseKey注册码生成工具.html",
    "revision": "e9fa2ead7e045ca9da4c46ec7f3e3cef"
  },
  {
    "url": "Tools/IDEA/idea-buid-jar.html",
    "revision": "6d72aab8ce5f719ecc35fae8da6198d5"
  },
  {
    "url": "Tools/IDEA/idea-for-mac-keys.html",
    "revision": "ab53163eed789d4949d937450eba8f26"
  },
  {
    "url": "Tools/IDEA/IDEA-Maven-Spring-SpringMVC-Mybatis.html",
    "revision": "e296f967e46cc63536b7ce9338c86583"
  },
  {
    "url": "Tools/IDEA/idea-with-git.html",
    "revision": "e8a3f28257e3063c9265ac5ef3d095f8"
  },
  {
    "url": "Tools/IDEA/idea-with-maven.html",
    "revision": "6098ae45d88ba87f0f6a05bba3109037"
  },
  {
    "url": "Tools/IDEA/index.html",
    "revision": "af7ccfa98a43f37ba8f52f39af9edad4"
  },
  {
    "url": "Tools/index.html",
    "revision": "2b681a93d80f339845f8b97522180c3a"
  },
  {
    "url": "Tools/iTerm2/index.html",
    "revision": "6ba1b5aeb32b65e2845536762afd6932"
  },
  {
    "url": "Tools/iTerm2/iTerm2-keys.html",
    "revision": "0733897bc936b72e4ce78aecfb8e0065"
  },
  {
    "url": "Tools/Markdown/index.html",
    "revision": "cc511a2eb97d0f4a893a431fd10f3a5d"
  },
  {
    "url": "Tools/Markdown/Markdown学习笔记.html",
    "revision": "bb39785c55a437bd030e28aa046e555c"
  },
  {
    "url": "Tools/SublimeText/index.html",
    "revision": "f854a2886c4a3137b66b0a71d6bfd543"
  },
  {
    "url": "Tools/SublimeText/sublime-install.html",
    "revision": "f33e762f1e2d5dc54f6e0b38a8de09bb"
  },
  {
    "url": "Tools/SublimeText/SublimeText3快捷键汇总.html",
    "revision": "3414b2f38b9abe77fa213214afa94c8d"
  },
  {
    "url": "Tools/VirtualBox/index.html",
    "revision": "9ce9696a4bbbe57cc7dd22067ba24547"
  },
  {
    "url": "Tools/VirtualBox/virtualbox-4-network.html",
    "revision": "b5bcff66a9e787d551765df032f4a72a"
  },
  {
    "url": "Tools/VirtualBox/virtualbox-clone-system.html",
    "revision": "1fa1d40dbb05ca72c19e6a16b35b6f49"
  },
  {
    "url": "Tools/VirtualBox/virtualbox-Expansion-disk.html",
    "revision": "d6be4e74eca1f3b8593dcd63e6342e66"
  },
  {
    "url": "Tools/VirtualBox/virtualbox-install-centos.html",
    "revision": "960516e399710c7b1ce07f08da03698b"
  },
  {
    "url": "Tools/VirtualBox/virtualbox-install-redhat9-0.html",
    "revision": "71532612faa9f740ca4088f1ffef9a07"
  },
  {
    "url": "Tools/VirtualBox/virtualbox-network.html",
    "revision": "fb69b9e54581527f61fd8289f6ab4eb8"
  },
  {
    "url": "Tools/WebStrom/index.html",
    "revision": "463ccba88669de6093f8107c8964dcef"
  },
  {
    "url": "Tools/WebStrom/WebStrom-keys.html",
    "revision": "b2280640a56ccd5224681d772f148ed0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
