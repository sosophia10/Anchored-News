// runs on min.js: https://github.com/remy/min.js 
function moveLine() {
    "use strict";
    var a = window.document.createElement("div");
    a.setAttribute("class", "slider"), a.setAttribute("id", "slider");
    var b = document.getElementById("js-responsive-nav");
    b.appendChild(a);
    var c = $("#slider"),
        d = $("#nav-item-home"),
        e = $("#nav-item-about"),
        f = $("#nav-item-trends"),
        g = $("#nav-item-search"),
        h = $("#nav-item-title"),
        i = $("#nav-item-6");
  
    d.onmouseover = function() {
      c.style.left = "0"
    }, e.onmouseover = function() {
      c.style.left = "16.665%"
    }, f.onmouseover = function() {
      c.style.left = "33.33%"
    }, g.onmouseover = function() {
      c.style.left = "49.995%"
    }, h.onmouseover = function() {
      c.style.left = "66.66%"
    }, i.onmouseover = function() {
      c.style.left = "83.325%"
    }, d.ontouchstart = function() {
      c.style.left = "0"
    }, e.ontouchstart = function() {
      c.style.left = "16.665%"
    }, f.ontouchstart = function() {
      c.style.left = "33.33%"
    }, g.ontouchstart = function() {
      c.style.left = "49.995%"
    }, h.ontouchstart = function() {
      c.style.left = "66.66%"
    }, i.ontouchstart = function() {
      c.style.left = "83.325%"
    }, d.onmouseout = function() {
      c.style.left = "0"
    }, e.onmouseout = function() {
      c.style.left = "0"
    }, f.onmouseout = function() {
      c.style.left = "0"
    }, g.onmouseout = function() {
      c.style.left = "0"
    }, h.onmouseout = function() {
      c.style.left = "0"
    }, i.onmouseout = function() {
      c.style.left = "0"
    }, d.ontouchend = function() {
      c.style.left = "0"
    }, e.ontouchend = function() {
      c.style.left = "0"
    }, f.ontouchend = function() {
      c.style.left = "0"
    }, g.ontouchend = function() {
      c.style.left = "0"
    }, h.ontouchend = function() {
      c.style.left = "0"
    }, i.ontouchend = function() {
      c.style.left = "0"
    }
  
  }
  function hasClass(a, b) {
    return new RegExp(" " + b + " ").test(" " + a.className + " ")
  }
  function toggleClass(a, b) {
    var c = " " + a.className.replace(/[\t\r\n]/g, " ") + " ";
    if (hasClass(a, b)) {
      for (; c.indexOf(" " + b + " ") >= 0;) c = c.replace(" " + b + " ", " ");
      a.className = c.replace(/^\s+|\s+$/g, "")
    } else a.className += " " + b
  }
  $ = function(a, b, c) {
    var d = Node.prototype,
        e = NodeList.prototype,
        f = "forEach",
        g = "trigger",
        h = [][f],
        i = a.createElement("i");
    return e[f] = h, b.on = d.on = function(a, b) {
      return this.addEventListener(a, b, !1), this
    }, e.on = function(a, b) {
      return this[f](function(c) {
        c.on(a, b)
      }), this
    }, b[g] = d[g] = function(b, c) {
      var d = a.createEvent("HTMLEvents");
      return d.initEvent(b, !0, !0), d.data = c || {}, d.eventName = b, d.target = this, this.dispatchEvent(d), this
    }, e[g] = function(a) {
      return this[f](function(b) {
        b[g](a)
      }), this
    }, c = function(b) {
      var c = a.querySelectorAll(b || "â˜º"),
          d = c.length;
      return 1 == d ? c[0] : c
    }, c.on = d.on.bind(i), c[g] = d[g].bind(i), c
  }(document, this), moveLine();
  /**
   * RESPONSIVE NAV JS
   * http://jsfiddle.net/csswizardry/ev598/
   * http://jsfiddle.net/shanomurphy/zp376/
   * =================
  */
  var responsiveNav = document.getElementById("js-responsive-nav"),
      toggleBtn = document.createElement("a");
  toggleBtn.setAttribute("href", "#"), toggleBtn.setAttribute("class", "responsive-nav__toggle"), responsiveNav.insertBefore(toggleBtn, responsiveNav.firstChild), toggleBtn.onclick = function() {
    toggleClass(this.parentNode, "responsive-nav--open")
  };
  
  var insertBtn = window.document.createElement("button");
  insertBtn.setAttribute("id", "toggleBtn");
  insertBtn.innerHTML="Toggle Background";
  var content = document.getElementById("content");
  content.appendChild(insertBtn);
  
  var navRoot = document.documentElement;
  navRoot.className = navRoot.className + " js";
  $('#toggleBtn').on('click', function (event) {
    toggleClass(navRoot, "bg-light")
  });