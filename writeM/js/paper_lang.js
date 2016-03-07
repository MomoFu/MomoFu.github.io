
function maing() {
	var j = "";

	function d(a) {
		return document.getElementById(a)
	}

	function p() {

		function a() {
			"number" == typeof window.orientation && 0 !== window.orientation || "function" != typeof p || location.reload()
		}
		window.onorientationchange = a;
		if ("number" == typeof window.orientation && 0 !== window.orientation) {
			alert(g.a1 || "请旋转您的手机为竖立状态，在横屏界面下无法操作！"), a();

		} else {
			p = null;
			var c = document.documentElement.clientWidth,
				b = c / 460;
			document.body.style.fontSize = 16 * b + "px";
			//document.body.style.width = c + "px";
			var q = d("canvas");
			//e = d("paperLogo");
			q.width = 300;
			q.height = 300 ;
			
			
			var f = new t(q);
			f.b = c;
			//window.PENSIZE && (f.c = window.PENSIZE);
			document.getElementById("repaint").onclick = function() {
				
				f.A();
				r = 0;
				l = ""
				
			_hmt.push(['_trackEvent', "guessWhat", "guessWhatRepaint"]);
			};

		}
	}

	

	function t(a) {
		if (a.nodeType) this.canvas = a;
		else if ("string" == typeof a) this.canvas = document.getElementById(a);
		else return;
		this.C()
	}
	var w = navigator.userAgent.match(/ OS (\d+).*? Mac OS/) || !1,
		l = "",
		r = 0,
		u = -1 !== navigator.userAgent.indexOf("NetType/WIFI"),
		s = -1 !== navigator.userAgent.indexOf("Messenger"),
		g = window.LANG || {};
		
	s && "" != "" ? "" : (t.prototype = {
		lineWidth: 1,
		color: "rgba(0,0,0, .6)",
		c: 8,
		b: 320,
		k: 0,
		C: function() {

			var a = this;
			if (this.canvas.getContext) {
				this.a = this.canvas.getContext("2d");
				this.a.strokeStyle = this.color;
				this.a.fillStyle = this.color;
				this.h(this.canvas, "selectstart", function() {
					return !1
				});
				

				//this.p.src = "data:image/png;base64," + j;
				var c = function(b) {
						var d, e;
						if ("touchstart" == b.type) {
							if (2 <= b.touches.length) return;
							d = b.touches[0].pageX;
							e = b.touches[0].pageY;
							a.f(a.canvas, "mousedown", c)
						} else d = b.pageX, e = b.pageY;
						a.D(d, e, b.type);
						b.preventDefault()
					};
				this.h(this.canvas, "touchstart", c);
				this.h(this.canvas, "mousedown", c)
			}
		},
		D: function(a, c, b) {//点击
			var d = this;
			this.i = this.canvas.getBoundingClientRect();
			//console.log(this.i)
			
			this.i = {
				left: this.i.left + (window.scrollX || window.pageXOffset),
				top: this.i.top + (window.scrollY || window.pageYOffset)
			};
		
			window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty();
			//isVer1() ? console.log(a) :  console.log(a);
			//console.log((a-(a-WW*0.13)) - this.i.left)
			this.a.moveTo(a - this.i.left, c - this.i.top);
			this.e = null;
			this.s = 0;
			this.d = [];
			this.lineWidth = this.c / 2 * (this.b / 320);
			this.g && (this.f(document, "mousemove", this.g), this.f(document, "touchmove", this.g), this.f(document, "mouseup", this.j), this.f(document, "touchend", this.j));
			this.g = function(a) {
				var b, c;
				if ("touchmove" == a.type) {
					if (2 <= a.touches.length) return;
					b = a.touches[0].pageX;
					c = a.touches[0].pageY
				} else b = a.pageX, c = a.pageY;
				d.t(b, c);
				a.preventDefault()
			};
			this.j = function() {
				d.F()
			};
			"touchstart" == b ? (this.h(document, "touchmove", this.g), this.h(document, "touchend", this.j)) : (this.h(document, "mousemove", this.g), this.h(document, "mouseup", this.j));
			this.w();
			this.t(a, c)
		},
		t: function(a, c) {
			var b;
			b = 0;
			a -= this.i.left;
			c -= this.i.top;
			if (this.d.length && (b = this.d[this.d.length - 1], b = Math.sqrt((b.x - a) * (b.x - a) + (b.y - c) * (b.y - c)), 0 == b)) return;
			this.k++;
			this.d.push({
				x: a,
				y: c,
				r: b
			});
			3 <= this.d.length && (b = this.d.shift(), this.q(b))
		},
		q: function(a, c) {
			var b = a.x,
				d = a.y,
				e = a.r,
				f = w ? 4 : 2;
			if (!this.e || 0 !== e) {
				var g = this.d.length ? this.d[0] : null;
				if (e) {
					this.a.moveTo(this.e.x, this.e.y);
					if (!this.s && (this.s = 1, g && e > g.r * f)) for (e /= 4, f = 1; 4 >= f; f++) this.u(b + f / 4 * (this.e.x - b), d + f / 4 * (this.e.y - d));
					c || (c = e < .003125 * this.b ? this.b / 320 * this.c * 1.625 : e < .00625 * this.b ? this.b / 320 * this.c * 1.375 : e < .009375 * this.b ? this.b / 320 * this.c * 1.25 : e < .015625 * this.b ? this.b / 320 * this.c * 1.125 : e < .021875 * this.b ? this.b / 320 * this.c : e < .028125 * this.b ? this.b / 320 * this.c * .875 : e < .034375 * this.b ? this.b / 320 * this.c * .75 : e < .046875 * this.b ? this.b / 320 * this.c * .625 : e < .0625 * this.b ? this.b / 320 * this.c * .5 : this.b / 320 * this.c * .375);
					this.n = c;
					Math.abs(this.lineWidth - this.n) > this.b / 320 * this.c * .025 && (this.lineWidth -= (this.lineWidth - this.n) / 8, this.a.lineWidth = this.lineWidth)
				}
				this.e = a;
				this.u(b, d)
			}
		},
		F: function() {//事件
			this.f(document, "mousemove", this.g);
			this.f(document, "touchmove", this.g);
			this.f(document, "mouseup", this.j);
			this.f(document, "touchend", this.j);
			--this.a.lineWidth;
			for (var a; this.d.length;) a = this.d.shift(), this.q(a, this.b / 320 * this.c / 4)
		},
		A: function() {
			this.e = null;
			this.os = null;
			this.k = 0;
			this.a.clearRect(0, 0, this.canvas.width, this.canvas.height);
			
			this.a.beginPath();
			
			
			
		},
		u: function(a, c) {
			var b, d, e;
			this.a.fillStyle = this.color;
			this.a.strokeStyle = this.color;
			this.a.lineTo(this.e.x, this.e.y);
			this.a.stroke();
			this.a.beginPath();
			this.a.strokeStyle = "rgba(0, 0, 0, 0)";
			if (this.l || this.m) if (b = this.l - a, d = this.m - c, e = Math.sqrt((this.l - a) * (this.l - a) + (this.m - c) * (this.m - c)), Math.abs(e) > this.lineWidth / 3) {
				e = Math.floor(Math.abs(e) / (this.lineWidth / 3));
				for (var f = 1; f <= e; f++) Math.abs(this.lineWidth - this.n) > this.b / 320 * this.c * .025 && (this.lineWidth -= Math.round(this.lineWidth - this.n) / 8, this.a.lineWidth = this.lineWidth), this.a.arc(this.l - f / e * b, this.m - f / e * d, this.lineWidth, 0, 2 * Math.PI), this.a.fill(), this.a.stroke(), this.a.beginPath()
			}
			this.a.arc(a, c, this.lineWidth, 0, 2 * Math.PI);
			this.a.fill();
			this.a.stroke();
			this.a.beginPath();
			this.l = a;
			this.m = c
		},
		w: function() {
			this.m = this.l = 0
		},
		h: function(a, c, b) {
			a.attachEvent ? a.attachEvent("on" + c, b) : a.addEventListener(c, b, !1)
		},
		f: function(a, c, b) {
			a.detachEvent ? a.detachEvent("on" + c, b) : a.removeEventListener(c, b, !1)
		},
		B: function(a, c) {
			var b;
			var d;
			//this.p.complete &&
			if (this.o.complete) {
				b = a || "png";
				d = c || .7;
				var e = document.createElement("canvas");
				e.width = e.height = 300;
				var f = e.getContext("2d");
				//this.o.onload=function(){
					f.drawImage(this.o, 0, 0, 300, 300);
					f.drawImage(this.canvas, 0, 0, 300, 300);
					//f.drawImage(this.p, 19, 16, 101, 39);
					b = e.toDataURL("image/" + b, d);
					f.clearRect(0, 0, this.canvas.width, this.canvas.height);
					e = null;
				//}
				
			} else b = "";
			return b
		}
	}, p())
};

function jg_restart() {
	//window.location = window.location;
};