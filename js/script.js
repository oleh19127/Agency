let hamburger = document.querySelector('.ham')
let body = document.querySelector('body')
let nav = document.querySelector('.nav')
let headerLink = document.querySelectorAll('.nav__link')
let load = document.querySelector('.loading')
let headerLogo = document.querySelector('.header__logo')

document.addEventListener("DOMContentLoaded", function () {

   // ? HAMBURGER AND LOGO AND NAV
   hamburger.onclick = function (params) {
      body.classList.toggle('lock')
      nav.classList.toggle('is-active')
      hamburger.classList.toggle('active')
   }
   headerLogo.onclick = function (params) {
      nav.classList.remove('is-active');
      hamburger.classList.remove('active')
      body.classList.remove('lock')
   }
   for (let i = 0; i < headerLink.length; i++) {
      headerLink[i].onclick = function () {
         nav.classList.remove('is-active');
         hamburger.classList.remove('active')
         body.classList.remove('lock')
      };
   }



   // ? IBG METHOD
   // function ibg() {
   //    $.each($('.ibg'), function (index, val) {
   //       if ($(this).find('img').length > 0) {
   //          $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
   //       }
   //    });
   // }
   // ibg();
});


// ? PRELOADER
window.onload = function () {
   load.classList.add('none');
}


// ? DYNAMIC ADAPTIVE
// * data-da="КУДА ПЕРЕМІСТИТИ(КЛАС),ЯКИМ ПО РАХУНКУ,ПРИ ЯКОМУ РОЗМІРІ ЕКРАНА"
// (function () {
//    let originalPositions = [];
//    let daElements = document.querySelectorAll('[data-da]');
//    let daElementsArray = [];
//    let daMatchMedia = [];
//    //Заполняем массивы
//    if (daElements.length > 0) {
//       let number = 0;
//       for (let index = 0; index < daElements.length; index++) {
//          const daElement = daElements[index];
//          const daMove = daElement.getAttribute('data-da');
//          if (daMove != '') {
//             const daArray = daMove.split(',');
//             const daPlace = daArray[1] ? daArray[1].trim() : 'last';
//             const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
//             const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
//             const daDestination = document.querySelector('.' + daArray[0].trim())
//             if (daArray.length > 0 && daDestination) {
//                daElement.setAttribute('data-da-index', number);
//                //Заполняем массив первоначальных позиций
//                originalPositions[number] = {
//                   "parent": daElement.parentNode,
//                   "index": indexInParent(daElement)
//                };
//                //Заполняем массив элементов 
//                daElementsArray[number] = {
//                   "element": daElement,
//                   "destination": document.querySelector('.' + daArray[0].trim()),
//                   "place": daPlace,
//                   "breakpoint": daBreakpoint,
//                   "type": daType
//                }
//                number++;
//             }
//          }
//       }
//       dynamicAdaptSort(daElementsArray);

//       //Создаем события в точке брейкпоинта
//       for (let index = 0; index < daElementsArray.length; index++) {
//          const el = daElementsArray[index];
//          const daBreakpoint = el.breakpoint;
//          const daType = el.type;

//          daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
//          daMatchMedia[index].addListener(dynamicAdapt);
//       }
//    }
//    //Основная функция
//    function dynamicAdapt(e) {
//       for (let index = 0; index < daElementsArray.length; index++) {
//          const el = daElementsArray[index];
//          const daElement = el.element;
//          const daDestination = el.destination;
//          const daPlace = el.place;
//          const daBreakpoint = el.breakpoint;
//          const daClassname = "_dynamic_adapt_" + daBreakpoint;

//          if (daMatchMedia[index].matches) {
//             //Перебрасываем элементы
//             if (!daElement.classList.contains(daClassname)) {
//                let actualIndex = indexOfElements(daDestination)[daPlace];
//                if (daPlace === 'first') {
//                   actualIndex = indexOfElements(daDestination)[0];
//                } else if (daPlace === 'last') {
//                   actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
//                }
//                daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
//                daElement.classList.add(daClassname);
//             }
//          } else {
//             //Возвращаем на место
//             if (daElement.classList.contains(daClassname)) {
//                dynamicAdaptBack(daElement);
//                daElement.classList.remove(daClassname);
//             }
//          }
//       }
//       customAdapt();
//    }

//    //Вызов основной функции
//    dynamicAdapt();

//    //Функция возврата на место
//    function dynamicAdaptBack(el) {
//       const daIndex = el.getAttribute('data-da-index');
//       const originalPlace = originalPositions[daIndex];
//       const parentPlace = originalPlace['parent'];
//       const indexPlace = originalPlace['index'];
//       const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
//       parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
//    }
//    //Функция получения индекса внутри родителя
//    function indexInParent(el) {
//       var children = Array.prototype.slice.call(el.parentNode.children);
//       return children.indexOf(el);
//    }
//    //Функция получения массива индексов элементов внутри родителя 
//    function indexOfElements(parent, back) {
//       const children = parent.children;
//       const childrenArray = [];
//       for (let i = 0; i < children.length; i++) {
//          const childrenElement = children[i];
//          if (back) {
//             childrenArray.push(i);
//          } else {
//             //Исключая перенесенный элемент
//             if (childrenElement.getAttribute('data-da') == null) {
//                childrenArray.push(i);
//             }
//          }
//       }
//       return childrenArray;
//    }
//    //Сортировка объекта
//    function dynamicAdaptSort(arr) {
//       arr.sort(function (a, b) {
//          if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
//       });
//       arr.sort(function (a, b) {
//          if (a.place > b.place) { return 1 } else { return -1 }
//       });
//    }
//    //Дополнительные сценарии адаптации
//    function customAdapt() {
//       //const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//    }
// }());
// ? HEADER ANIMATION
!function (t, n) { "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).Headroom = n() }(this, function () { "use strict"; function t() { return "undefined" != typeof window } function d(t) { return function (t) { return t && t.document && function (t) { return 9 === t.nodeType }(t.document) }(t) ? function (t) { var n = t.document, o = n.body, s = n.documentElement; return { scrollHeight: function () { return Math.max(o.scrollHeight, s.scrollHeight, o.offsetHeight, s.offsetHeight, o.clientHeight, s.clientHeight) }, height: function () { return t.innerHeight || s.clientHeight || o.clientHeight }, scrollY: function () { return void 0 !== t.pageYOffset ? t.pageYOffset : (s || o.parentNode || o).scrollTop } } }(t) : function (t) { return { scrollHeight: function () { return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight) }, height: function () { return Math.max(t.offsetHeight, t.clientHeight) }, scrollY: function () { return t.scrollTop } } }(t) } function n(t, s, e) { var n, o = function () { var n = !1; try { var t = { get passive() { n = !0 } }; window.addEventListener("test", t, t), window.removeEventListener("test", t, t) } catch (t) { n = !1 } return n }(), i = !1, r = d(t), l = r.scrollY(), a = {}; function c() { var t = Math.round(r.scrollY()), n = r.height(), o = r.scrollHeight(); a.scrollY = t, a.lastScrollY = l, a.direction = l < t ? "down" : "up", a.distance = Math.abs(t - l), a.isOutOfBounds = t < 0 || o < t + n, a.top = t <= s.offset[a.direction], a.bottom = o <= t + n, a.toleranceExceeded = a.distance > s.tolerance[a.direction], e(a), l = t, i = !1 } function h() { i || (i = !0, n = requestAnimationFrame(c)) } var u = !!o && { passive: !0, capture: !1 }; return t.addEventListener("scroll", h, u), c(), { destroy: function () { cancelAnimationFrame(n), t.removeEventListener("scroll", h, u) } } } function o(t) { return t === Object(t) ? t : { down: t, up: t } } function s(t, n) { n = n || {}, Object.assign(this, s.options, n), this.classes = Object.assign({}, s.options.classes, n.classes), this.elem = t, this.tolerance = o(this.tolerance), this.offset = o(this.offset), this.initialised = !1, this.frozen = !1 } return s.prototype = { constructor: s, init: function () { return s.cutsTheMustard && !this.initialised && (this.addClass("initial"), this.initialised = !0, setTimeout(function (t) { t.scrollTracker = n(t.scroller, { offset: t.offset, tolerance: t.tolerance }, t.update.bind(t)) }, 100, this)), this }, destroy: function () { this.initialised = !1, Object.keys(this.classes).forEach(this.removeClass, this), this.scrollTracker.destroy() }, unpin: function () { !this.hasClass("pinned") && this.hasClass("unpinned") || (this.addClass("unpinned"), this.removeClass("pinned"), this.onUnpin && this.onUnpin.call(this)) }, pin: function () { this.hasClass("unpinned") && (this.addClass("pinned"), this.removeClass("unpinned"), this.onPin && this.onPin.call(this)) }, freeze: function () { this.frozen = !0, this.addClass("frozen") }, unfreeze: function () { this.frozen = !1, this.removeClass("frozen") }, top: function () { this.hasClass("top") || (this.addClass("top"), this.removeClass("notTop"), this.onTop && this.onTop.call(this)) }, notTop: function () { this.hasClass("notTop") || (this.addClass("notTop"), this.removeClass("top"), this.onNotTop && this.onNotTop.call(this)) }, bottom: function () { this.hasClass("bottom") || (this.addClass("bottom"), this.removeClass("notBottom"), this.onBottom && this.onBottom.call(this)) }, notBottom: function () { this.hasClass("notBottom") || (this.addClass("notBottom"), this.removeClass("bottom"), this.onNotBottom && this.onNotBottom.call(this)) }, shouldUnpin: function (t) { return "down" === t.direction && !t.top && t.toleranceExceeded }, shouldPin: function (t) { return "up" === t.direction && t.toleranceExceeded || t.top }, addClass: function (t) { this.elem.classList.add.apply(this.elem.classList, this.classes[t].split(" ")) }, removeClass: function (t) { this.elem.classList.remove.apply(this.elem.classList, this.classes[t].split(" ")) }, hasClass: function (t) { return this.classes[t].split(" ").every(function (t) { return this.classList.contains(t) }, this.elem) }, update: function (t) { t.isOutOfBounds || !0 !== this.frozen && (t.top ? this.top() : this.notTop(), t.bottom ? this.bottom() : this.notBottom(), this.shouldUnpin(t) ? this.unpin() : this.shouldPin(t) && this.pin()) } }, s.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: t() ? window : null, classes: { frozen: "headroom--frozen", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom" } }, s.cutsTheMustard = !!(t() && function () { }.bind && "classList" in document.documentElement && Object.assign && Object.keys && requestAnimationFrame), s });

var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom = new Headroom(myElement);
// initialise
console.log(myElement);
headroom.init();