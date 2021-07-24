// Console Warning Workaround
console.warn = (function () {
  const prevConsole = console.warn.bind(console);
  const previousWarnings = [];
  return function (...args) {
    const key = args.join("");
    if (previousWarnings.includes(key)) {
      return;
    }
    previousWarnings.push(key);
    return prevConsole(...args);
  };
})();

import * as _THREE from 'three/build/three.min.js'

window.THREE = _THREE

export function speRuntimeFactory(exports) {
  'use strict'
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
  var extendStatics = function (e, t) {
    return (extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t
        }) ||
      function (e, t) {
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
      })(e, t)
  }
  function __extends(e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError(
        'Class extends value ' + String(t) + ' is not a constructor or null'
      )
    function i() {
      this.constructor = e
    }
    extendStatics(e, t),
      (e.prototype =
        null === t ? Object.create(t) : ((i.prototype = t.prototype), new i()))
  }
  var __assign = function () {
    return (__assign =
      Object.assign ||
      function (e) {
        for (var t, i = 1, r = arguments.length; i < r; i++)
          for (var n in (t = arguments[i]))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        return e
      }).apply(this, arguments)
  }
  function __awaiter(e, t, i, r) {
    return new (i || (i = Promise))(function (n, a) {
      function o(e) {
        try {
          l(r.next(e))
        } catch (e) {
          a(e)
        }
      }
      function s(e) {
        try {
          l(r.throw(e))
        } catch (e) {
          a(e)
        }
      }
      function l(e) {
        var t
        e.done
          ? n(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t)
                })).then(o, s)
      }
      l((r = r.apply(e, t || [])).next())
    })
  }
  function __generator(e, t) {
    var i,
      r,
      n,
      a,
      o = {
        label: 0,
        sent: function () {
          if (1 & n[0]) throw n[1]
          return n[1]
        },
        trys: [],
        ops: []
      }
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      'function' == typeof Symbol &&
        (a[Symbol.iterator] = function () {
          return this
        }),
      a
    )
    function s(a) {
      return function (s) {
        return (function (a) {
          if (i) throw new TypeError('Generator is already executing.')
          for (; o; )
            try {
              if (
                ((i = 1),
                r &&
                  (n =
                    2 & a[0]
                      ? r.return
                      : a[0]
                      ? r.throw || ((n = r.return) && n.call(r), 0)
                      : r.next) &&
                  !(n = n.call(r, a[1])).done)
              )
                return n
              switch (((r = 0), n && (a = [2 & a[0], n.value]), a[0])) {
                case 0:
                case 1:
                  n = a
                  break
                case 4:
                  return o.label++, { value: a[1], done: !1 }
                case 5:
                  o.label++, (r = a[1]), (a = [0])
                  continue
                case 7:
                  ;(a = o.ops.pop()), o.trys.pop()
                  continue
                default:
                  if (
                    !((n = o.trys),
                    (n = n.length > 0 && n[n.length - 1]) ||
                      (6 !== a[0] && 2 !== a[0]))
                  ) {
                    o = 0
                    continue
                  }
                  if (3 === a[0] && (!n || (a[1] > n[0] && a[1] < n[3]))) {
                    o.label = a[1]
                    break
                  }
                  if (6 === a[0] && o.label < n[1]) {
                    ;(o.label = n[1]), (n = a)
                    break
                  }
                  if (n && o.label < n[2]) {
                    ;(o.label = n[2]), o.ops.push(a)
                    break
                  }
                  n[2] && o.ops.pop(), o.trys.pop()
                  continue
              }
              a = t.call(e, o)
            } catch (e) {
              ;(a = [6, e]), (r = 0)
            } finally {
              i = n = 0
            }
          if (5 & a[0]) throw a[1]
          return { value: a[0] ? a[1] : void 0, done: !0 }
        })([a, s])
      }
    }
  }
  function __values(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      i = t && e[t],
      r = 0
    if (i) return i.call(e)
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return (
            e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          )
        }
      }
    throw new TypeError(
      t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    )
  }
  function __read(e, t) {
    var i = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!i) return e
    var r,
      n,
      a = i.call(e),
      o = []
    try {
      for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
        o.push(r.value)
    } catch (e) {
      n = { error: e }
    } finally {
      try {
        r && !r.done && (i = a.return) && i.call(a)
      } finally {
        if (n) throw n.error
      }
    }
    return o
  }
  function __spread() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e = e.concat(__read(arguments[t]))
    return e
  }
  var Raycaster = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        __extends(t, e),
        (t.prototype.setFromCamera = function (e, t) {
          'OrthographicCamera' === t.cameraType
            ? (this.ray.origin.set(e.x, e.y, -1).unproject(t),
              this.ray.direction
                .set(0, 0, -1)
                .transformDirection(t.matrixWorld),
              (this.camera = t))
            : 'PerspectiveCamera' === t.cameraType
            ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
              this.ray.direction
                .set(e.x, e.y, 0.5)
                .unproject(t)
                .sub(this.ray.origin)
                .normalize(),
              (this.camera = t))
            : console.error('Raycaster: Unsupported camera type.')
        }),
        (t.prototype.createRaycastLineHelper = function () {
          var e = new THREE.LineBasicMaterial({
              color: 16711680,
              linewidth: 10
            }),
            t = new THREE.Geometry(),
            i = new THREE.Vector3(
              this.ray.origin.x,
              this.ray.origin.y,
              this.ray.origin.z
            ),
            r = new THREE.Vector3(
              this.ray.direction.x,
              this.ray.direction.y,
              this.ray.direction.z
            ),
            n = new THREE.Vector3().lerpVectors(i, r, 0.5)
          return (
            r.multiplyScalar(0),
            t.vertices.push(i),
            t.vertices.push(n),
            t.vertices.push(r),
            new THREE.Line(t, e)
          )
        }),
        t
      )
    })(THREE.Raycaster),
    CylinderGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a,
            o,
            s = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    radialSegments: 64,
                    heightSegments: 1,
                    openEnded: !1,
                    thetaStart: 0,
                    thetaLength: 360,
                    cornerRadius: 0,
                    cornerSegments: 8,
                    hollow: 0
                  },
              e.parameters
            ),
            l = s.width / 2,
            c = null !== (r = s.radiusTop) && void 0 !== r ? r : l,
            h = null !== (n = s.radiusBottom) && void 0 !== n ? n : l
          return (
            c === h
              ? ((c = l), (h = l))
              : c > h
              ? (h = (h * l) / (c = l))
              : ((c = (c * l) / h), (h = l)),
            {
              parameters: Object.assign(s, {
                width: Math.abs(s.width),
                height: Math.abs(
                  null !== (a = s.height) && void 0 !== a ? a : s.width
                ),
                depth: Math.abs(
                  null !== (o = s.depth) && void 0 !== o ? o : s.width
                ),
                radiusTop: c,
                radiusBottom: h
              })
            }
          )
        }),
        (e.build = function (e) {
          var t = e.parameters,
            i = t.width,
            r = t.depth,
            n = t.height,
            a = t.radialSegments,
            o = t.heightSegments,
            s = t.openEnded,
            l = t.thetaStart,
            c = t.thetaLength,
            h = t.radiusTop,
            u = t.radiusBottom,
            d = t.cornerRadius,
            f = t.cornerSegments,
            p = t.hollow,
            m = new RoundedCylinderBufferGeometry(
              h,
              u,
              n,
              a,
              o,
              s,
              l,
              (c * Math.PI) / 180,
              d,
              d,
              f,
              p
            )
          return (
            m.scale(1, 1, r / i),
            Object.assign(m, {
              userData: __assign(__assign({}, e), { type: 'CylinderGeometry' })
            })
          )
        }),
        e
      )
    })()
  function two2three(e, t, i) {
    ;(i.x = e.x * t.x), (i.y = e.y), (i.z = e.x * t.y)
  }
  function flip(e) {
    return new THREE.Vector2(e.y, -e.x)
  }
  var RoundedCylinderBufferGeometry = (function (e) {
      function t(t, i, r, n, a, o, s, l, c, h, u, d, f) {
        void 0 === f && (f = !1)
        var p = e.call(this) || this
        ;(p.type = 'RoundedCylinderBufferGeometry'),
          (t = void 0 !== t ? t : 1),
          (i = void 0 !== i ? i : 1),
          (r = r || 1),
          (n = Math.floor(n) || 8),
          (a = Math.floor(a) || 1),
          (o = void 0 !== o && o),
          (s = void 0 !== s ? s : 0),
          (l = void 0 !== l ? l : 2 * Math.PI),
          o && ((c = 0), (h = 0))
        var m = [],
          g = [],
          v = [],
          y = [],
          E = 0,
          A = r / 2,
          x = new THREE.Vector3(),
          T = new THREE.Vector3()
        f && 0 == t && (t = c), f && 0 == i && (i = h)
        var w = new THREE.Vector2(t, A),
          b = new THREE.Vector2(i, -A),
          S = null,
          C = null,
          _ = null,
          D = null,
          O = w.clone().sub(b),
          R = 0,
          M = 0,
          L = 0
        d > 0 && ((R = Math.min(t, i) * (1 - d)), (M = t - R), (L = i - R))
        var B = w.clone()
        B.x -= R
        var P = Math.PI - O.angle(),
          H = O.angle(),
          I = Math.tan(H / 2),
          N = Math.tan(P / 2),
          F = I + N,
          z = d ? F : N,
          U = d ? F : I
        if (
          ((c = Math.min(c, (t - M) / z, O.length() / F)),
          (h = Math.min(h, (i - L) / U, O.length() / F)),
          c > 0)
        ) {
          var G = c / I
          ;(S = w.clone().sub(new THREE.Vector2(G, c))),
            d && ((_ = S.clone()).x -= R - F * c),
            w.sub(O.clone().setLength(G))
        }
        if (h > 0) {
          G = h / N
          ;(C = b.clone().sub(new THREE.Vector2(G, -h))),
            b.add(O.clone().setLength(G)),
            d &&
              (((D = C.clone()).x -= R - F * h), B.sub(O.clone().setLength(G)))
        }
        for (
          var V = (O = w.clone().sub(b)).length() < 0.5, k = [], j = 0;
          j <= n;
          j++
        ) {
          var Y = [],
            Q = j / n,
            W = Q * l + s,
            $ = new THREE.Vector2(Math.sin(W), Math.cos(W))
          if (
            (D && C
              ? (ae(Y, Q, $, P, h, D, -1, !0), ae(Y, Q, $, H, h, C, -1, !1))
              : C
              ? (oe(Y, $, C.x, 0, -1), ae(Y, Q, $, H, h, C, -1, !1))
              : o || oe(Y, $, i, L, -1),
            two2three(flip(O).normalize(), $, x),
            !V)
          )
            for (var J = 0; J <= a; J++) {
              var X = J / a
              two2three(O.clone().multiplyScalar(X).add(b), $, T),
                g.push(T.x, T.y, T.z),
                v.push(x.x, x.y, x.z),
                y.push(Q, 0.5 + T.y / r),
                Y.push(E++)
            }
          if (
            (_ && S
              ? (ae(Y, Q, $, P, c, S, 1, !1), ae(Y, Q, $, H, c, _, 1, !0))
              : S
              ? (ae(Y, Q, $, P, c, S, 1, !1), oe(Y, $, S.x, 0, 1))
              : o || oe(Y, $, t, M, 1),
            d && !V)
          ) {
            two2three(flip(O).multiplyScalar(-1).normalize(), $, x)
            for (J = 0; J <= a; J++) {
              X = J / a
              two2three(O.clone().multiplyScalar(-X).add(B), $, T),
                g.push(T.x, T.y, T.z),
                v.push(x.x, x.y, x.z),
                y.push(Q, 0.5 + T.y / r),
                Y.push(E++)
            }
          }
          d && !o && Y.push(Y[0]), k.push(Y)
        }
        for (var K = 0; K < k.length - 1; K++)
          for (var q = 0; q < k[0].length - 1; q++)
            if (!o || !d || q != a) {
              var Z = k[K][q],
                ee = k[K + 1][q],
                te = k[K + 1][q + 1],
                ie = k[K][q + 1],
                re = g[3 * te + 0],
                ne = g[3 * te + 2]
              m.push(Z, ee, ie), (0 == re && 0 == ne) || m.push(ee, te, ie)
            }
        function ae(e, t, i, n, a, o, s, l) {
          for (var c = 0; c < u + 1; c++) {
            var h = c / u,
              d = s < 0 ? h : 1 - h
            l && (d -= 1), (d *= n)
            var f = new THREE.Vector2(Math.sin(d), Math.cos(d) * s)
            two2three(f.clone().multiplyScalar(a).add(o), i, T),
              g.push(T.x, T.y, T.z),
              two2three(f, i, x),
              v.push(x.x, x.y, x.z),
              y.push(t, 0.5 + T.y / r),
              e.push(E++)
          }
        }
        function oe(e, t, i, r, n) {
          var a,
            o,
            s = new THREE.Vector3(),
            l = new THREE.Vector2(),
            c = [i, r]
          n < 0 && c.reverse()
          try {
            for (var h = __values(c), u = h.next(); !u.done; u = h.next()) {
              var d = u.value
              l.set(d, A * n),
                two2three(l, t, s),
                g.push(s.x, s.y, s.z),
                v.push(0, n, 0),
                y.push(0.5, 0.5),
                e.push(E++)
            }
          } catch (e) {
            a = { error: e }
          } finally {
            try {
              u && !u.done && (o = h.return) && o.call(h)
            } finally {
              if (a) throw a.error
            }
          }
        }
        function se(e, r, n) {
          var a,
            o,
            s = new THREE.Vector2(Math.sin(n), Math.cos(n)),
            l = new THREE.Vector2(-Math.cos(n), Math.sin(n)),
            c = new THREE.Vector3(),
            h =
              e < 0
                ? function (e, t, i) {
                    return m.push(e, t, i)
                  }
                : function (e, t, i) {
                    return m.push(e, i, t)
                  }
          two2three(new THREE.Vector2((t + i + M + L) / 4, 0), s, c),
            g.push(c.x, c.y, c.z),
            v.push(l.x, 0, l.y),
            y.push(0.5, 0.5)
          var u = E++
          try {
            for (var d = __values(r), f = d.next(); !f.done; f = d.next()) {
              var p = f.value,
                A = g.slice(3 * p, 3 * p + 3)
              g.push.apply(g, __spread(A)), v.push(l.x, 0, l.y)
              var x = y.slice(2 * p, 2 * p + 2)
              y.push.apply(y, __spread(x)), E++
            }
          } catch (e) {
            a = { error: e }
          } finally {
            try {
              f && !f.done && (o = d.return) && o.call(d)
            } finally {
              if (a) throw a.error
            }
          }
          for (var T = u + 1; T < E - 1; T++) h(u, T, T + 1)
          h(u, E - 1, u + 1)
        }
        return (
          l < 2 * Math.PI && (se(-1, k[0], s), se(1, k[k.length - 1], s + l)),
          p.setIndex(m),
          p.setAttribute('position', new THREE.Float32BufferAttribute(g, 3)),
          p.setAttribute('normal', new THREE.Float32BufferAttribute(v, 3)),
          p.setAttribute('uv', new THREE.Float32BufferAttribute(y, 2)),
          p
        )
      }
      return __extends(t, e), t
    })(THREE.BufferGeometry),
    ConeGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    radialSegments: 32,
                    heightSegments: 32,
                    openEnded: !1,
                    thetaStart: 0,
                    thetaLength: 360,
                    cornerRadiusTop: 0,
                    cornerRadiusBottom: 0,
                    cornerSegments: 8
                  },
              e.parameters
            )
          return {
            parameters: Object.assign(a, {
              width: Math.abs(a.width),
              height: Math.abs(
                null !== (r = a.height) && void 0 !== r ? r : a.width
              ),
              depth: Math.abs(
                null !== (n = a.depth) && void 0 !== n ? n : a.width
              )
            })
          }
        }),
        (e.build = function (e) {
          var t,
            i = e.parameters,
            r = i.width,
            n = i.depth,
            a = i.height,
            o = i.radialSegments,
            s = i.heightSegments,
            l = i.openEnded,
            c = i.thetaStart,
            h = i.thetaLength,
            u = i.cornerRadiusTop,
            d = i.cornerRadiusBottom,
            f = i.cornerSegments
          return (
            (t =
              u > 0 || d > 0 || h < 360
                ? new RoundedCylinderBufferGeometry(
                    0,
                    r / 2,
                    a,
                    o,
                    s,
                    l,
                    c,
                    (h * Math.PI) / 180,
                    u,
                    d,
                    f,
                    0,
                    !0
                  )
                : new THREE.ConeBufferGeometry(r / 2, a, o, s, l)).scale(
              1,
              1,
              n / r
            ),
            Object.assign(t, {
              userData: __assign(__assign({}, e), { type: 'ConeGeometry' })
            })
          )
        }),
        e
      )
    })(),
    CubeGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    widthSegments: 1,
                    heightSegments: 1,
                    depthSegments: 1,
                    cornerRadius: 0,
                    cornerSegments: 8
                  },
              e.parameters
            )
          return {
            parameters: Object.assign(a, {
              width: Math.abs(a.width),
              height: Math.abs(
                null !== (r = a.height) && void 0 !== r ? r : a.width
              ),
              depth: Math.abs(
                null !== (n = a.depth) && void 0 !== n ? n : a.width
              )
            })
          }
        }),
        (e.build = function (e) {
          var t,
            i = e.parameters,
            r = i.width,
            n = i.height,
            a = i.depth,
            o = i.widthSegments,
            s = i.heightSegments,
            l = i.depthSegments,
            c = i.cornerRadius,
            h = i.cornerSegments
          return (
            (t =
              0 == c
                ? new THREE.BoxBufferGeometry(r, n, a, o, s, l)
                : new RoundedBoxBufferGeometry(r, n, a, o, s, l, c, h)),
            Object.assign(t, {
              userData: __assign(__assign({}, e), { type: 'CubeGeometry' })
            })
          )
        }),
        e
      )
    })(),
    pi2 = Math.PI / 2,
    RoundedBoxBufferGeometry = (function (e) {
      function t(t, i, r, n, a, o, s, l) {
        void 0 === t && (t = 1),
          void 0 === i && (i = 1),
          void 0 === r && (r = 1),
          void 0 === n && (n = 1),
          void 0 === a && (a = 1),
          void 0 === o && (o = 1),
          void 0 === s && (s = 0),
          void 0 === l && (l = 4)
        var c = e.call(this) || this
        c.type = 'BoxBufferGeometry'
        var h = c
        ;(n = Math.floor(n)),
          (a = Math.floor(a)),
          (o = Math.floor(o)),
          (l = Math.floor(l)),
          (s = Math.min(s, t / 2, i / 2, r / 2))
        var u = [],
          d = [],
          f = [],
          p = [],
          m = 0,
          g = 0
        function v(e, t, i, r, n, a, o, l, c, v, y) {
          for (
            var E = (a - 2 * s) / c,
              A = (o - 2 * s) / v,
              x = a / 2 - s,
              T = o / 2 - s,
              w = l / 2,
              b = c + 1,
              S = v + 1,
              C = 0,
              _ = 0,
              D = new THREE.Vector3(),
              O = 0;
            O < S;
            O++
          )
            for (var R = O * A - T, M = 0; M < b; M++) {
              var L = M * E - x
              ;(D[e] = L * r),
                (D[t] = R * n),
                (D[i] = w),
                d.push(D.x, D.y, D.z),
                (D[e] = 0),
                (D[t] = 0),
                (D[i] = l > 0 ? 1 : -1),
                f.push(D.x, D.y, D.z),
                p.push(M / c),
                p.push(1 - O / v),
                (C += 1)
            }
          for (O = 0; O < v; O++)
            for (M = 0; M < c; M++) {
              var B = m + M + b * O,
                P = m + M + b * (O + 1),
                H = m + (M + 1) + b * (O + 1),
                I = m + (M + 1) + b * O
              u.push(B, P, I), u.push(P, H, I), (_ += 6)
            }
          h.addGroup(g, _, y), (g += _), (m += C)
        }
        function y(e, t, i, r, n, a, o, c, v, y, E) {
          for (
            var A = (o - 2 * s) / y,
              x = o / 2 - s,
              T = c / 2 - s,
              w = v / 2,
              b = y + 1,
              S = 0,
              C = 0,
              _ = new THREE.Vector3(),
              D = new THREE.Vector3(),
              O = 0;
            O < l + 1;
            O++
          ) {
            var R = (O / l) * pi2,
              M = Math.sin(R) * s,
              L = (1 - Math.cos(R)) * s,
              B = Math.sin(R),
              P = Math.cos(R)
            ;(_[t] = (T + M) * n),
              (_[i] = (w - L) * a),
              (D[e] = 0),
              (D[t] = B * Math.sign(_[t])),
              (D[i] = P * Math.sign(_[i]))
            for (var H = 0; H < b; H++) {
              var I = H * A - x
              ;(_[e] = I * r),
                d.push(_.x, _.y, _.z),
                f.push(D.x, D.y, D.z),
                p.push(H / y),
                p.push(0),
                (S += 1)
            }
          }
          for (O = 0; O < l; O++)
            for (H = 0; H < y; H++) {
              R = m + H + b * O
              var N = m + H + b * (O + 1),
                F = m + (H + 1) + b * (O + 1),
                z = m + (H + 1) + b * O
              u.push(R, N, z), u.push(N, F, z), (C += 6)
            }
          h.addGroup(g, C, E), (g += C), (m += S)
        }
        function E(e, n, a) {
          var o = new THREE.Vector3(),
            c = new THREE.Vector3(t / 2, i / 2, r / 2)
          c.subScalar(s)
          for (
            var h = [],
              g =
                e * n * a > 0
                  ? function (e, t, i) {
                      return u.push(e, t, i)
                    }
                  : function (e, t, i) {
                      return u.push(e, i, t)
                    },
              v = 0;
            v <= l;
            v++
          ) {
            for (
              var y = [],
                E = pi2 * (1 - v / l),
                A = Math.cos(E),
                x = Math.sin(E),
                T = 0,
                w = 0;
              w <= v;
              w++
            ) {
              var b = Math.cos(T),
                S = Math.sin(T)
              ;(o.x = A * b), (o.y = x), (o.z = A * S)
              var C = c.clone().addScaledVector(o, s)
              d.push(e * C.x, n * C.y, a * C.z),
                f.push(e * o.x, n * o.y, a * o.z),
                p.push(0, 0),
                y.push(m++),
                (T += pi2 / v)
            }
            h.push(y)
          }
          for (var _ = h.length - 1, D = 0; D < _; D++) {
            var O = h[D],
              R = h[D + 1],
              M = O.length - 1
            g(O[0], R[1], R[0])
            for (var L = 1; L <= M; L++)
              g(O[L - 1], O[L], R[L]), g(O[L], R[L + 1], R[L])
          }
        }
        return (
          v('z', 'y', 'x', -1, -1, r, i, t, o, a, 0),
          v('z', 'y', 'x', 1, -1, r, i, -t, o, a, 1),
          v('x', 'z', 'y', 1, 1, t, r, i, n, o, 2),
          v('x', 'z', 'y', 1, -1, t, r, -i, n, o, 3),
          v('x', 'y', 'z', 1, -1, t, i, r, n, a, 4),
          v('x', 'y', 'z', -1, -1, t, i, -r, n, a, 5),
          s > 0 &&
            (y('z', 'y', 'x', -1, -1, 1, r, i, t, o, 0),
            y('z', 'y', 'x', 1, -1, -1, r, i, t, o, 1),
            y('z', 'y', 'x', -1, 1, -1, r, i, t, o, 1),
            y('z', 'y', 'x', 1, 1, 1, r, i, t, o, 0),
            y('x', 'y', 'z', -1, -1, -1, t, i, r, n, 0),
            y('x', 'y', 'z', 1, -1, 1, t, i, r, n, 1),
            y('x', 'y', 'z', -1, 1, 1, t, i, r, n, 0),
            y('x', 'y', 'z', 1, 1, -1, t, i, r, n, 1),
            y('y', 'x', 'z', -1, -1, 1, i, t, r, a, 0),
            y('y', 'x', 'z', 1, -1, -1, i, t, r, a, 1),
            y('y', 'x', 'z', 1, 1, 1, i, t, r, a, 1),
            y('y', 'x', 'z', -1, 1, -1, i, t, r, a, 0),
            E(1, 1, 1),
            E(-1, 1, 1),
            E(1, -1, 1),
            E(-1, -1, 1),
            E(1, 1, -1),
            E(-1, 1, -1),
            E(1, -1, -1),
            E(-1, -1, -1)),
          c.setIndex(u),
          c.setAttribute('position', new THREE.Float32BufferAttribute(d, 3)),
          c.setAttribute('normal', new THREE.Float32BufferAttribute(f, 3)),
          c.setAttribute('uv', new THREE.Float32BufferAttribute(p, 2)),
          c
        )
      }
      return __extends(t, e), t
    })(THREE.BufferGeometry),
    DodecahedronGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : { width: 100, detail: 0 },
              e.parameters
            )
          return {
            parameters: Object.assign(a, {
              width: Math.abs(a.width),
              height: Math.abs(
                null !== (r = a.height) && void 0 !== r ? r : a.width
              ),
              depth: Math.abs(
                null !== (n = a.depth) && void 0 !== n ? n : a.width
              )
            })
          }
        }),
        (e.build = function (e) {
          var t = e.parameters,
            i = t.width,
            r = t.height,
            n = t.depth,
            a = t.detail,
            o = new THREE.DodecahedronBufferGeometry(0.5 * i, a)
          return (
            o.scale(1, r / i, n / i),
            Object.assign(o, {
              userData: __assign(__assign({}, e), {
                type: 'DodecahedronGeometry'
              })
            })
          )
        }),
        e
      )
    })(),
    asVec = function (e, t) {
      var i = t.x - e.x,
        r = t.y - e.y,
        n = Math.sqrt(i * i + r * r),
        a = i / n,
        o = r / n
      return { x: i, y: r, len: n, nx: a, ny: o, ang: Math.atan2(o, a) }
    },
    roundShapePolygon = function (e, t, i) {
      var r,
        n,
        a,
        o,
        s,
        l,
        c,
        h,
        u,
        d,
        f,
        p,
        m,
        g,
        v = t.length
      for (o = t[v - 2], e.curves = [], r = 1; r < v - 1; r++) {
        ;(s = t[r % v]), (l = t[(r + 1) % v])
        var y = asVec(s, o),
          E = asVec(s, l)
        ;(c = y.nx * E.ny - y.ny * E.nx),
          (h = y.nx * E.nx - y.ny * -E.ny),
          (f = Math.asin(c)),
          (u = 1),
          (d = !1),
          h < 0
            ? f < 0
              ? (f = Math.PI + f)
              : ((f = Math.PI - f), (u = -1), (d = !0))
            : f > 0 && ((u = -1), (d = !0)),
          (p = f / 2),
          (g = Math.abs((Math.cos(p) * i) / Math.sin(p))) >
          Math.min(y.len / 2, E.len / 2)
            ? ((g = Math.min(y.len / 2, E.len / 2)),
              (m = Math.abs((g * Math.sin(p)) / Math.cos(p))))
            : (m = i),
          (n = s.x + E.nx * g),
          (a = s.y + E.ny * g),
          (n += -E.ny * m * u),
          (a += E.nx * m * u),
          e.absarc(
            n,
            a,
            m,
            y.ang + (Math.PI / 2) * u,
            E.ang - (Math.PI / 2) * u,
            d
          ),
          (o = s),
          (s = l)
      }
      e.closePath()
    },
    resizeGeometry = function (e, t) {
      var i = t.width,
        r = t.height,
        n = t.depth
      ;(i = Math.abs(i)), (r = Math.abs(r)), (n = Math.abs(n))
      var a,
        o,
        s,
        l = e.userData.parameters
      0 === i ? ((i = l.width), (a = 1)) : (a = i / l.width),
        0 === r ? ((r = l.height), (o = 1)) : (o = r / l.height),
        0 === n ? ((n = l.depth), (s = 1)) : (s = n / l.depth),
        e.scale(a, o, s),
        (l.width = i),
        (l.height = r),
        (l.depth = n)
    },
    fixUvs = function (e, t, i) {
      var r = e.getAttribute('uv')
      if (r)
        for (var n = 0; n < r.count; n++) {
          var a = r.getX(n),
            o = r.getY(n)
          r.setXY(n, (a + t / 2) / t, 1 - ((o - i / 2) / i) * -1)
        }
    },
    EllipseGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    depth: 0,
                    spikes: 128,
                    angle: 360,
                    innerRadius: 0
                  },
              e.parameters
            )
          return {
            parameters: Object.assign(n, {
              width: Math.abs(n.width),
              height: Math.abs(
                null !== (r = n.height) && void 0 !== r ? r : n.width
              )
            })
          }
        }),
        (e.build = function (e) {
          var t,
            i = e.parameters,
            r = i.width,
            n = i.height,
            a = i.spikes,
            o = i.angle,
            s = i.innerRadius
          if (s > 0) {
            var l = 0.5 * r,
              c = (s * l) / 100
            ;(t = new THREE.RingBufferGeometry(
              c,
              l,
              a,
              1,
              Math.PI / 2,
              (o * Math.PI) / 180
            )).scale(1, Math.abs(n) / Math.abs(r), 1)
          } else {
            for (
              var h = 0.5 * r,
                u = 0.5 * n,
                d = (((o * Math.PI) / 180) * -1) / a,
                f = new THREE.Shape(),
                p = 0;
              p <= a;
              p++
            ) {
              var m = d * p,
                g = 0 + Math.sin(m) * h,
                v = 0 + Math.cos(m) * u
              f.lineTo(g, v)
            }
            360 === o && (f.curves = f.curves.slice(1)),
              (t = new THREE.ShapeBufferGeometry(f)),
              fixUvs(t, r, n)
          }
          return Object.assign(t, {
            userData: __assign(__assign({}, e), { type: 'EllipseGeometry' })
          })
        }),
        e
      )
    })(),
    HelixGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    revolutions: 2,
                    segments: 40,
                    pathRadius: 10,
                    pathType: 0,
                    pathSegments: 30,
                    cornerRadius: 30,
                    cornerSegments: 4
                  },
              e.parameters
            ),
            o = Math.abs(a.width),
            s = Math.abs(null !== (r = a.height) && void 0 !== r ? r : o),
            l = Math.abs(null !== (n = a.depth) && void 0 !== n ? n : o),
            c = Math.abs(Math.min(o, l)) / 2
          return {
            parameters: Object.assign(a, {
              width: o,
              height: s,
              depth: l,
              radius: c,
              segments: Math.round(a.segments),
              pathSegments: Math.round(a.pathSegments),
              cornerSegments: Math.round(a.cornerSegments)
            })
          }
        }),
        (e.build = function (e) {
          var t = e.parameters,
            i = t.width,
            r = t.height,
            n = t.depth,
            a = t.radius,
            o = t.revolutions,
            s = t.segments,
            l = t.pathRadius,
            c = t.pathType,
            h = t.pathSegments,
            u = t.cornerRadius,
            d = t.cornerSegments,
            f = new HelixBufferGeometry(!1, i, r, n, a, o, s, l, c, h, u, d)
          return Object.assign(f, {
            userData: __assign(__assign({}, e), { type: 'HelixGeometry' })
          })
        }),
        e
      )
    })(),
    HelixBufferGeometry = (function (e) {
      function t(t, i, r, n, a, o, s, l, c, h, u, d) {
        var f,
          p,
          m,
          g,
          v,
          y,
          E,
          A,
          x = e.call(this) || this,
          T = [],
          w = [],
          b = [],
          S = [],
          C = [],
          _ = [],
          D = [],
          O = new THREE.Vector3(),
          R = new THREE.Vector3(),
          M = new THREE.Vector3(),
          L = new THREE.Vector3(),
          B = new THREE.Vector3(),
          P = new THREE.Vector3(),
          H = new THREE.Vector3(),
          I = new THREE.Vector3(),
          N = new THREE.Vector3(),
          F = new THREE.Vector3(),
          z = new THREE.Vector3(),
          U = a - l,
          G = r - 2 * l + 0.001,
          V = G / o,
          k = Math.ceil(s * o),
          j = G / k,
          Y = -G / 2,
          Q = (2 * Math.PI) / h,
          W = Math.PI / 2 / d,
          $ = Math.min((1 - u / 100) * l, l - 0.1),
          J = l - $
        function X(e, i) {
          var r = Math.PI / 2
          ;(y = i * j),
            (A = (2 * Math.PI * (y % V)) / V + r),
            (y += Y),
            (E = Math.sin(A) * U),
            (v = Math.cos(A) * U),
            t ? e.set(v, E, y) : e.set(v, y, E)
        }
        X(M, -1), X(L, 0), B.copy(M)
        for (
          var K = M.distanceTo(L), q = K * k + 2 * J, Z = q - J, ee = 0;
          ee <= k;
          ee++
        ) {
          X(O, ee),
            z.subVectors(O, B).normalize(),
            B.copy(O),
            N.copy(O)
              .setComponent(+t + 1, 0)
              .normalize(),
            F.crossVectors(z, N).normalize()
          for (
            var te = 0 == ee ? (3 * Math.PI) / 2 : W,
              ie = 0 == ee ? 0 : Z,
              re = 0,
              ne = 0;
            re <= h;
            ne = ++re * Q
          ) {
            if (
              (P.addVectors(
                M.copy(N).multiplyScalar(l * Math.cos(ne)),
                L.copy(F).multiplyScalar(l * Math.sin(ne))
              ),
              I.copy(P).normalize(),
              0 == ee || ee == k)
            ) {
              L.copy(I).multiplyScalar($), R.addVectors(O, L)
              for (var ae = 0, oe = te; ae < d; oe = ++ae * W + te) {
                H.addVectors(
                  M.copy(z).multiplyScalar(J * Math.sin(oe)),
                  L.copy(I).multiplyScalar(J * Math.cos(oe))
                ),
                  L.addVectors(R, H),
                  H.normalize(),
                  C.push(L.x, L.y, L.z),
                  _.push(H.x, H.y, H.z)
                var se = +(0 == ee) + Math.sin(oe)
                D.push((ie + J * se) / q, re / h, 0)
              }
            }
            L.addVectors(O, P),
              w.push(L.x, L.y, L.z),
              b.push(I.x, I.y, I.z),
              S.push((J + ee * K) / q, re / h)
          }
        }
        var le = C.length / 2
        for (re = 0; re < d; re++)
          for (ae = 0; ae <= h; ae++) {
            var ce = le + 3 * (ae * d + re),
              he = 3 * ((h - ae) * d + d - re - 1)
            w.push.apply(w, __spread(C.slice(ce, ce + 3))),
              w.unshift.apply(w, __spread(C.slice(he, he + 3))),
              b.push.apply(b, __spread(_.slice(ce, ce + 3))),
              b.unshift.apply(b, __spread(_.slice(he, he + 3))),
              S.push.apply(S, __spread(D.slice(ce, ce + 2))),
              S.unshift.apply(S, __spread(D.slice(he, he + 2)))
          }
        var ue = h + 1
        for (re = 0; re < k + 2 * d; re++)
          for (ae = 0; ae < ue - 1; ae++)
            (m = (f = re * ue + ae) + ue),
              (g = (p = f + 1) + ue),
              T.push(f, p, m, p, g, m)
        if (((f = w.length / 3 - h - 1), !t || o < 1))
          for (re = 0; re < h - 2; re++)
            T.push(f, f + re + 1, f + re + 2), T.push(0, re + 2, re + 1)
        return (
          x.setIndex(T),
          x.setAttribute('position', new THREE.Float32BufferAttribute(w, 3)),
          x.setAttribute('normal', new THREE.Float32BufferAttribute(b, 3)),
          x.setAttribute('uv', new THREE.Float32BufferAttribute(S, 2)),
          x
        )
      }
      return __extends(t, e), t
    })(THREE.BufferGeometry),
    IcosahedronGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : { width: 100, detail: 0 },
              e.parameters
            )
          return {
            parameters: Object.assign(a, {
              width: Math.abs(a.width),
              height: Math.abs(
                null !== (r = a.height) && void 0 !== r ? r : a.width
              ),
              depth: Math.abs(
                null !== (n = a.depth) && void 0 !== n ? n : a.width
              )
            })
          }
        }),
        (e.build = function (e) {
          var t = e.parameters,
            i = t.width,
            r = t.height,
            n = t.depth,
            a = t.detail,
            o = new THREE.IcosahedronBufferGeometry(0.5 * i, a)
          return (
            o.scale(1, r / i, n / i),
            Object.assign(o, {
              userData: __assign(__assign({}, e), {
                type: 'IcosahedronGeometry'
              })
            })
          )
        }),
        e
      )
    })(),
    LatheGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    segments: 64,
                    verticalSegments: 64,
                    points: [
                      { x: 0, y: -50, id: 0 },
                      { x: 50, y: -50, id: 1 },
                      { x: 50, y: 50, id: 2 },
                      { x: 0, y: 50, id: 3 }
                    ]
                  },
              e.parameters
            )
          return {
            parameters: Object.assign(a, {
              width: Math.abs(a.width),
              height: Math.abs(
                null !== (r = a.height) && void 0 !== r ? r : a.width
              ),
              depth: Math.abs(
                null !== (n = a.depth) && void 0 !== n ? n : a.width
              )
            })
          }
        }),
        (e.build = function (e) {
          var t = e.parameters,
            i = t.points,
            r = t.segments,
            n = t.verticalSegments,
            a = new THREE.Shape()
          a.moveTo(i[0].x, i[0].y),
            a.bezierCurveTo(i[1].x, i[1].y, i[2].x, i[2].y, i[3].x, i[3].y)
          var o = new THREE.LatheBufferGeometry(a.extractPoints(n).shape, r)
          return (
            o.rotateZ(Math.PI),
            Object.assign(o, {
              userData: __assign(__assign({}, e), { type: 'LatheGeometry' })
            })
          )
        }),
        e
      )
    })(),
    ABC = ['a', 'b', 'c']
  function getFaceIndexByString(e, t) {
    switch (t) {
      case 'c':
        return e.c
      case 'b':
        return e.b
      case 'a':
      default:
        return e.a
    }
  }
  function getEdge(e, t, i) {
    var r = Math.min(e, t) + '_' + Math.max(e, t)
    return i.get(r)
  }
  function processEdge(e, t, i, r, n, a) {
    var o,
      s = Math.min(e, t),
      l = Math.max(e, t),
      c = s + '_' + l
    r.has(c)
      ? (o = r.get(c))
      : ((o = { a: i[s], b: i[l], newEdge: null, faces: [] }), r.set(c, o))
    o.faces.push(n), a[e].edges.push(o), a[t].edges.push(o)
  }
  function generateLookups(e, t, i, r) {
    var n, a, o
    for (n = 0, a = e.length; n < a; n++) i[n] = { edges: [] }
    for (n = 0, a = t.length; n < a; n++)
      processEdge((o = t[n]).a, o.b, e, r, o, i),
        processEdge(o.b, o.c, e, r, o, i),
        processEdge(o.c, o.a, e, r, o, i)
  }
  function newFace(e, t, i, r, n) {
    e.push(new THREE.Face3(t, i, r, void 0, void 0, n))
  }
  function midpoint(e, t) {
    return Math.abs(t - e) / 2 + Math.min(e, t)
  }
  function newUv(e, t, i, r) {
    e.push([t.clone(), i.clone(), r.clone()])
  }
  var SubdivisionModifier = (function () {
      function e(e) {
        void 0 === e && (e = 1), (this.subdivisions = e)
      }
      return (
        (e.prototype.modify = function (e) {
          ;(e =
            e instanceof THREE.BufferGeometry
              ? new THREE.Geometry().fromBufferGeometry(e)
              : e.clone()).mergeVertices()
          for (var t = this.subdivisions; t-- > 0; ) this._smooth(e)
          return e.computeFaceNormals(), e.computeVertexNormals(), e
        }),
        (e.prototype._smooth = function (e) {
          var t,
            i,
            r,
            n,
            a,
            o,
            s,
            l = new THREE.Vector3(),
            c = e.vertices,
            h = e.faces,
            u = e.faceVertexUvs[0],
            d = void 0 !== u && u.length > 0,
            f = [],
            p = new Map()
          generateLookups(c, h, f, p)
          var m,
            g,
            v,
            y,
            E,
            A,
            x,
            T,
            w,
            b,
            S,
            C,
            _,
            D,
            O = []
          try {
            for (
              var R = __values(Array.from(p.keys())), M = R.next();
              !M.done;
              M = R.next()
            ) {
              var L = M.value
              for (
                g = p.get(L),
                  v = new THREE.Vector3(),
                  E = 3 / 8,
                  A = 1 / 8,
                  2 != (x = g.faces.length) && ((E = 0.5), (A = 0)),
                  v.addVectors(g.a, g.b).multiplyScalar(E),
                  l.set(0, 0, 0),
                  o = 0;
                o < x;
                o++
              ) {
                for (
                  y = g.faces[o], s = 0;
                  s < 3 &&
                  ((m = c[getFaceIndexByString(y, ABC[s])]) === g.a ||
                    m === g.b);
                  s++
                );
                m && l.add(m)
              }
              l.multiplyScalar(A), v.add(l), (g.newEdge = O.length), O.push(v)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              M && !M.done && (i = R.return) && i.call(R)
            } finally {
              if (t) throw t.error
            }
          }
          var B = []
          for (n = 0, a = c.length; n < a; n++) {
            for (
              _ = c[n],
                3 == (r = (C = f[n].edges).length)
                  ? (T = 3 / 16)
                  : r > 3 && (T = 3 / (8 * r)),
                w = 1 - r * Number(T),
                b = T,
                r <= 2 && 2 == r && ((w = 3 / 4), (b = 1 / 8)),
                D = _.clone().multiplyScalar(w),
                l.set(0, 0, 0),
                o = 0;
              o < r;
              o++
            )
              (m = (S = C[o]).a !== _ ? S.a : S.b), l.add(m)
            l.multiplyScalar(Number(b)), D.add(l), B.push(D)
          }
          var P,
            H,
            I,
            N,
            F,
            z,
            U,
            G = B.concat(O),
            V = B.length,
            k = [],
            j = [],
            Y = new THREE.Vector2(),
            Q = new THREE.Vector2(),
            W = new THREE.Vector2()
          for (n = 0, a = h.length; n < a; n++)
            (y = h[n]),
              newFace(
                k,
                (P = Number(getEdge(y.a, y.b, p).newEdge) + V),
                (H = Number(getEdge(y.b, y.c, p).newEdge) + V),
                (I = Number(getEdge(y.c, y.a, p).newEdge) + V),
                y.materialIndex
              ),
              newFace(k, y.a, P, I, y.materialIndex),
              newFace(k, y.b, H, P, y.materialIndex),
              newFace(k, y.c, I, H, y.materialIndex),
              d &&
                ((F = (N = u[n])[0]),
                (z = N[1]),
                (U = N[2]),
                Y.set(midpoint(F.x, z.x), midpoint(F.y, z.y)),
                Q.set(midpoint(z.x, U.x), midpoint(z.y, U.y)),
                W.set(midpoint(F.x, U.x), midpoint(F.y, U.y)),
                newUv(j, Y, Q, W),
                newUv(j, F, Y, W),
                newUv(j, z, Q, Y),
                newUv(j, U, W, Q))
          ;(e.vertices = G), (e.faces = k), d && (e.faceVertexUvs[0] = j)
        }),
        e
      )
    })(),
    _size = new THREE.Vector3(),
    NonParametricGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a =
              null !==
                (r =
                  null !== (i = e.geometry) && void 0 !== i
                    ? i
                    : null == t
                    ? void 0
                    : t.geometry) && void 0 !== r
                ? r
                : new THREE.BufferGeometry().copy(
                    new THREE.BoxBufferGeometry(100, 100, 100)
                  )
          void 0 === t
            ? (a.computeBoundingBox(),
              a.boundingBox.getSize(_size),
              (n = {
                width: _size.x,
                height: _size.y,
                depth: _size.z,
                subdivisions: 0
              }))
            : (n = t.parameters)
          var o = __assign(__assign({}, n), e.parameters)
          return {
            parameters: {
              width: Math.abs(o.width),
              height: Math.abs(o.height),
              depth: Math.abs(o.depth),
              subdivisions: Math.abs(o.subdivisions)
            },
            geometry: a
          }
        }),
        (e.build = function (e) {
          var t,
            i = e.parameters,
            r = i.width,
            n = i.height,
            a = i.depth,
            o = i.subdivisions,
            s =
              null !== (t = e.geometry) && void 0 !== t
                ? t
                : new THREE.BufferGeometry().copy(
                    new THREE.BoxBufferGeometry(100, 100, 100)
                  ),
            l = s.userData.parameters
          void 0 === l
            ? (s.computeBoundingBox(), s.boundingBox.getSize(_size))
            : _size.set(l.width, l.height, l.depth),
            (r === _size.x && n === _size.y && a === _size.z) ||
              s.scale(
                0 === _size.x ? 1 : r / _size.x,
                0 === _size.y ? 1 : n / _size.y,
                0 === _size.z ? 1 : a / _size.z
              )
          var c = s.originalGeometry
          if (o > 0) {
            if (void 0 === c || (null == l ? void 0 : l.subdivisions) !== o) {
              void 0 === c && (c = s)
              var h = new SubdivisionModifier(o)
              s = new THREE.BufferGeometry().fromGeometry(h.modify(c))
            }
          } else void 0 !== c && (s = c), (c = void 0)
          return (
            void 0 !== c && Object.assign(s, { originalGeometry: c }),
            delete e.geometry,
            Object.assign(s, {
              userData: __assign(__assign({}, e), {
                type: 'NonParametricGeometry'
              })
            })
          )
        }),
        (e.loadFromUrl = function (e, t, i) {
          var r = this
          new THREE.BufferGeometryLoader(i).load(e, function (e) {
            var i = r.normalizeInputs({ geometry: e })
            e.boundingBox.getSize(_size)
            var n = 100 / _size.x
            Object.assign(i.parameters, {
              width: 100,
              height: _size.y * n,
              depth: _size.z * n
            }),
              t(r.build(i))
          })
        }),
        e
      )
    })(),
    PolygonGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    depth: 0,
                    spikes: 5,
                    cornerRadius: 0,
                    extrudeDepth: 0,
                    extrudeBevelSize: 0,
                    extrudeBevelSegments: 1
                  },
              e.parameters
            )
          return {
            parameters: Object.assign(n, {
              width: Math.abs(n.width),
              height: Math.abs(
                null !== (r = n.height) && void 0 !== r ? r : n.width
              )
            })
          }
        }),
        (e.build = function (e) {
          for (
            var t,
              i = e.parameters,
              r = i.width,
              n = i.height,
              a = i.spikes,
              o = i.cornerRadius,
              s = i.extrudeDepth,
              l = i.extrudeBevelSize,
              c = i.extrudeBevelSegments,
              h = 0.5 * r,
              u = 0.5 * n,
              d = (2 * Math.PI) / a,
              f = new THREE.Shape(),
              p = 0;
            p <= a;
            p++
          ) {
            var m = d * p,
              g = 0 + Math.sin(m) * h,
              v = 0 + Math.cos(m) * u
            f.lineTo(g, v)
          }
          return (
            0 !== o && roundShapePolygon(f, f.getPoints(), o),
            (t =
              s > 0
                ? new THREE.ExtrudeBufferGeometry(f, {
                    curveSegments: 64,
                    steps: 1,
                    depth: s,
                    bevelEnabled: !0,
                    bevelThickness: l,
                    bevelSize: l,
                    bevelOffset: 0,
                    bevelSegments: c
                  })
                : new THREE.ShapeBufferGeometry(f, 32)),
            fixUvs(t, r, n),
            Object.assign(t, {
              userData: __assign(__assign({}, e), { type: 'PolygonGeometry' })
            })
          )
        }),
        e
      )
    })(),
    PyramidGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    radialSegments: 4,
                    heightSegments: 1,
                    cornerRadius: 0,
                    cornerSegments: 8,
                    openEnded: !1
                  },
              e.parameters
            )
          return {
            parameters: Object.assign(a, {
              width: Math.abs(a.width),
              height: Math.abs(
                null !== (r = a.height) && void 0 !== r ? r : a.width
              ),
              depth: Math.abs(
                null !== (n = a.depth) && void 0 !== n ? n : a.width
              )
            })
          }
        }),
        (e.build = function (e) {
          var t = e.parameters,
            i = t.width,
            r = t.height,
            n = t.depth,
            a = t.radialSegments,
            o = t.heightSegments,
            s = t.openEnded,
            l = t.cornerRadius,
            c = t.cornerSegments,
            h = new RoundedPyramidBufferGeometry(0.5 * i, r, a, o, s, l, c)
          return (
            h.scale(1, 1, n / i),
            Object.assign(h, {
              userData: __assign(__assign({}, e), { type: 'PyramidGeometry' })
            })
          )
        }),
        e
      )
    })()
  function two2three$1(e, t, i) {
    ;(i.x = e.x * t.x), (i.y = e.y), (i.z = e.x * t.y)
  }
  function offset3d(e, t, i, r, n, a) {
    var o = t.clone().sub(e),
      s = i.clone().sub(e),
      l = o.angleTo(s)
    if ((o.normalize(), s.normalize(), r === n)) {
      var c = o.add(s).normalize()
      a.copy(e).addScaledVector(c, r / Math.sin(l / 2))
    } else {
      var h = o.angleTo(s)
      a.copy(e),
        a.addScaledVector(o, n / Math.sin(h)),
        a.addScaledVector(s, r / Math.sin(h))
    }
  }
  function projectOntoLine(e, t, i) {
    var r = e.clone().sub(t),
      n = i.clone().sub(t)
    return r.projectOnVector(n), r.add(t)
  }
  var RoundedPyramidBufferGeometry = (function (e) {
      function t(t, i, r, n, a, o, s) {
        var l
        void 0 === t && (t = 0.5),
          void 0 === i && (i = 1),
          void 0 === r && (r = 4),
          void 0 === a && (a = !1),
          void 0 === o && (o = 0),
          void 0 === s && (s = 4)
        var c = e.call(this) || this
        ;(r = Math.floor(Math.max(3, r))), (s = Math.floor(s))
        var h,
          u = [],
          d = [],
          f = [],
          p = [],
          m = 0,
          g = i / 2,
          v = Math.PI / r,
          y = t * Math.cos(Math.PI / r),
          E = (2 * Math.PI) / r,
          A = ((r - 2) * Math.PI) / r,
          x = Math.PI - A,
          T = new THREE.Vector3(0, -g, 0),
          w = new THREE.Vector3(0, g, 0),
          b = new THREE.Vector2(t, -g),
          S = new THREE.Vector2(y, -g),
          C = new THREE.Vector2(0, w.y).sub(S),
          _ = new THREE.Vector2(0, w.y).sub(b),
          D = new THREE.Vector2(C.y, -C.x).normalize(),
          O = new THREE.Vector2(_.y, -_.x).normalize(),
          R =
            t * Math.cos(Math.PI / r) * Math.tan((Math.PI - C.angle()) / 2) -
            1e-8
        o = Math.min(o, R)
        var M = new THREE.Vector3(D.x, D.y, 0),
          L = new THREE.Vector3(Math.cos(E) * M.x, M.y, Math.sin(E) * M.x)
        h = M.angleTo(L)
        var B = o / Math.tan((Math.PI - C.angle()) / 2),
          P = o / Math.tan((Math.PI - h) / 2),
          H = new THREE.Vector3()
        if (!a) {
          d.push(T.x, T.y, T.z), f.push(0, -1, 0), p.push(0, 0)
          var I = m++,
            N = [],
            F = b.clone(),
            z = B / Math.cos(Math.PI / r)
          F.x -= z
          for (var U = 0; U < r; U++) {
            var G = (U / r) * Math.PI * 2 + v
            two2three$1(F, new THREE.Vector2(Math.sin(G), Math.cos(G)), H),
              d.push(H.x, H.y, H.z),
              f.push(0, -1, 0),
              p.push(0, 0),
              N.push(m++)
          }
          for (U = 0; U < N.length; U++) u.push(N[U], I, N[(U + 1) % N.length])
        }
        M = new THREE.Vector3()
        var V = new THREE.Vector3(),
          k = new THREE.Vector3(),
          j = new THREE.Vector3(),
          Y = new THREE.Vector3(),
          Q = new THREE.Vector3()
        for (U = 0; U < r; U++) {
          var W = (U / r) * Math.PI * 2 + v,
            $ = ((U + 0.5) / r) * Math.PI * 2 + v,
            J = ((U + 1) / r) * Math.PI * 2 + v,
            X = new THREE.Vector2(Math.sin(W), Math.cos(W)),
            K = new THREE.Vector2(Math.sin($), Math.cos($)),
            q = new THREE.Vector2(Math.sin(J), Math.cos(J))
          two2three$1(b, X, V),
            two2three$1(b, q, k),
            two2three$1(D, K, M),
            offset3d(w, V, k, P, P, j),
            d.push(j.x, j.y, j.z),
            offset3d(V, w, k, P, B, Y),
            d.push(Y.x, Y.y, Y.z),
            offset3d(k, V, w, B, P, Q),
            d.push(Q.x, Q.y, Q.z),
            f.push(M.x, M.y, M.z),
            f.push(M.x, M.y, M.z),
            f.push(M.x, M.y, M.z),
            p.push(0, 0),
            p.push(0, 0),
            p.push(0, 0)
          var Z = m++,
            ee = m++,
            te = m++
          if ((u.push(Z, ee, te), o > 0)) {
            I = V.clone().add(k).multiplyScalar(0.5)
            var ie = w.clone().sub(I).normalize(),
              re = T.clone()
                .sub(I)
                .normalize()
                .add(ie)
                .normalize()
                .multiplyScalar(-1)
            De(I, Q.clone().sub(Y), re, C.angle())
            var ne,
              ae = void 0
            two2three$1(O, q, (re = new THREE.Vector3())),
              (ne = (l = __read(
                De(
                  (I = projectOntoLine(
                    (I = Q.clone().add(j).multiplyScalar(0.5)),
                    k,
                    w
                  )),
                  Q.clone().sub(j),
                  re,
                  h,
                  j.y
                ),
                2
              ))[0]),
              (ae = l[1])
            var oe = (I = ne).clone().setY(0).normalize(),
              se = new THREE.Vector3(0, -1, 0),
              le = oe.clone().cross(se)
            Oe(I, oe, se, le)
            var ce = C.angle(),
              he = Math.PI - ce
            ;(I = w.clone()).y -= o / Math.sin(ce - Math.PI / 2)
            for (var ue = new THREE.Vector3(), de = [], fe = 0; fe < s; fe++) {
              for (
                var pe = [],
                  me = Math.PI / 2 - (he * fe) / s,
                  ge = Math.cos(me),
                  ve = Math.sin(me),
                  ye = $,
                  Ee = 0;
                Ee <= fe;
                Ee++
              ) {
                var Ae = Math.cos(ye),
                  xe = Math.sin(ye)
                ;(M.x = ge * xe),
                  (M.y = ve),
                  (M.z = ge * Ae),
                  ue.copy(I).addScaledVector(M, o),
                  d.push(ue.x, ue.y, ue.z),
                  f.push(M.x, M.y, M.z),
                  p.push(0, 0),
                  pe.push(m++),
                  (ye += (2 * Math.PI) / fe / r)
              }
              de.push(pe)
            }
            ae.reverse(), de.push(ae)
            for (var Te = de.length - 1, we = 0; we < Te; we++) {
              var be = de[we],
                Se = de[we + 1],
                Ce = be.length - 1
              u.push(Se[1], be[0], Se[0])
              for (var _e = 1; _e <= Ce; _e++)
                u.push(be[_e], be[_e - 1], Se[_e]),
                  u.push(Se[_e + 1], be[_e], Se[_e])
            }
          }
        }
        function De(e, t, i, r, n) {
          var a = -r / 2,
            l = (Math.PI - r) / 2,
            c = t.clone().normalize().cross(i)
          e.addScaledVector(i, -o / Math.sin(l))
          for (
            var h = new THREE.Vector3(),
              g = new THREE.Vector3(),
              v = m,
              y = [],
              E = 0;
            E <= s;
            E++
          ) {
            var A = a + (E / s) * r
            g.set(0, 0, 0),
              g.addScaledVector(c, Math.sin(A)),
              g.addScaledVector(i, Math.cos(A))
            for (var x = 0; x <= 1; x++) {
              var T = x / 1 - 0.5
              if (
                (h.copy(e),
                h.addScaledVector(t, T),
                h.addScaledVector(g, o),
                null != n)
              ) {
                var w = Math.max(0, h.y - n)
                h.addScaledVector(t, -w / t.y)
              }
              d.push(h.x, h.y, h.z),
                f.push(g.x, g.y, g.z),
                p.push(0, 0),
                0 === x && y.push(m),
                m++
            }
          }
          for (E = 0; E < s; E++)
            for (x = 0; x < 1; x++) {
              var b = (A = v + x + 2 * E) + 2,
                S = b + 1,
                C = A + 1
              u.push(A, b, C), u.push(b, S, C)
            }
          return [e.clone().addScaledVector(t, 0.5), y]
        }
        function Oe(e, t, i, r) {
          for (
            var n = Math.PI / 2,
              a = _.angle() - n,
              l = [],
              c = new THREE.Vector3(),
              h = new THREE.Vector3(),
              g = 0;
            g <= s;
            g++
          ) {
            for (var v = [], y = g / s, E = 0; E <= g; E++) {
              var A = ((g ? E / g : 0) - 0.5) * x,
                T = Math.cos(A),
                w = Math.sin(A),
                b = (n + Math.atan(Math.tan(a) * T)) * y,
                S = Math.cos(b),
                C = Math.sin(b)
              c.set(0, 0, 0),
                c.addScaledVector(t, C * T),
                c.addScaledVector(i, S),
                c.addScaledVector(r, C * w),
                h.copy(e).addScaledVector(c, o),
                d.push(h.x, h.y, h.z),
                f.push(c.x, c.y, c.z),
                p.push(0, 0),
                v.push(m++)
            }
            l.push(v)
          }
          for (var D = l.length - 1, O = 0; O < D; O++) {
            var R = l[O],
              M = l[O + 1],
              L = R.length - 1
            u.push(R[0], M[1], M[0])
            for (var B = 1; B <= L; B++)
              u.push(R[B - 1], R[B], M[B]), u.push(R[B], M[B + 1], M[B])
          }
        }
        return (
          c.setIndex(u),
          c.setAttribute('position', new THREE.Float32BufferAttribute(d, 3)),
          c.setAttribute('normal', new THREE.Float32BufferAttribute(f, 3)),
          c.setAttribute('uv', new THREE.Float32BufferAttribute(p, 2)),
          c
        )
      }
      return __extends(t, e), t
    })(THREE.BufferGeometry),
    RectangleGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    depth: 0,
                    cornerRadius: [0, 0, 0, 0],
                    cornerType: 1,
                    extrudeDepth: 0,
                    extrudeBevelSize: 0,
                    extrudeBevelSegments: 1
                  },
              e.parameters
            ),
            o = Object.assign(
              null !== (r = null == t ? void 0 : t.ui) && void 0 !== r
                ? r
                : { enabledIndieCorners: !1 },
              e.ui
            )
          return {
            parameters: Object.assign(a, {
              width: Math.abs(a.width),
              height: Math.abs(
                null !== (n = a.height) && void 0 !== n ? n : a.width
              )
            }),
            ui: o
          }
        }),
        (e.build = function (e) {
          var t = e.parameters,
            i = t.width,
            r = t.height,
            n = t.cornerRadius,
            a = t.cornerType,
            o = t.extrudeDepth,
            s = t.extrudeBevelSize,
            l = t.extrudeBevelSegments,
            c = { x: 0.5 * i, y: 0.5 * r },
            h = { x: -c.x, y: -c.y },
            u = { x: c.x, y: c.y }
          function d(e, t, n) {
            return t > i && n > r
              ? Math.min((e * i) / t, (e * r) / n)
              : t > i
              ? (e * i) / t
              : n > r
              ? (e * r) / n
              : e
          }
          var f = []
          ;(f[0] = 0 === n[0] ? 0 : d(n[0], n[0] + n[3], n[0] + n[1])),
            (f[1] = 0 === n[1] ? 0 : d(n[1], n[1] + n[2], n[1] + n[0])),
            (f[2] = 0 === n[2] ? 0 : d(n[2], n[2] + n[1], n[2] + n[3])),
            (f[3] = 0 === n[3] ? 0 : d(n[3], n[3] + n[0], n[3] + n[2]))
          var p,
            m = h.x,
            g = u.x,
            v = u.y,
            y = h.y,
            E = new THREE.Shape()
          if ((E.moveTo(m, v - f[0]), 1 == a))
            n[0] > 0 && E.quadraticCurveTo(m, v, m + f[0], v),
              E.lineTo(g - f[1], v),
              n[1] > 0 && E.quadraticCurveTo(g, v, g, v - f[1]),
              E.lineTo(g, y + f[2]),
              n[2] > 0 && E.quadraticCurveTo(g, y, g - f[2], y),
              E.lineTo(m + f[3], y),
              n[3] > 0 && E.quadraticCurveTo(m, y, m, y + f[3]),
              E.lineTo(m, v - f[0])
          else {
            var A = (4 * (Math.SQRT2 - 1)) / 3
            n[0] > 0 &&
              E.bezierCurveTo(
                m,
                v + f[0] * (A - 1),
                m - f[0] * (A - 1),
                v,
                m + f[0],
                v
              ),
              E.lineTo(g - f[1], v),
              n[1] > 0 &&
                E.bezierCurveTo(
                  g + f[1] * (A - 1),
                  v,
                  g,
                  v + f[1] * (A - 1),
                  g,
                  v - f[1]
                ),
              E.lineTo(g, y + f[2]),
              n[2] > 0 &&
                E.bezierCurveTo(
                  g,
                  y - f[2] * (A - 1),
                  g + f[2] * (A - 1),
                  y,
                  g - f[2],
                  y
                ),
              E.lineTo(m + f[3], y),
              n[3] > 0 &&
                E.bezierCurveTo(
                  m - f[3] * (A - 1),
                  y,
                  m,
                  y - f[3] * (A - 1),
                  m,
                  y + f[3]
                )
          }
          return (
            E.lineTo(m, v - f[0]),
            (p =
              o > 0
                ? new THREE.ExtrudeBufferGeometry(E, {
                    curveSegments: 64,
                    steps: 1,
                    depth: o,
                    bevelEnabled: !0,
                    bevelThickness: s,
                    bevelSize: s,
                    bevelOffset: 0,
                    bevelSegments: l
                  })
                : new THREE.ShapeBufferGeometry(E, 32)),
            fixUvs(p, i, r),
            Object.assign(p, {
              userData: __assign(__assign({}, e), { type: 'RectangleGeometry' })
            })
          )
        }),
        e
      )
    })(),
    SphereGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    widthSegments: 64,
                    heightSegments: 64,
                    phiStart: 0,
                    phiLength: 2 * Math.PI,
                    thetaStart: 0,
                    thetaLength: Math.PI
                  },
              e.parameters
            )
          return {
            parameters: Object.assign(a, {
              width: Math.abs(a.width),
              height: Math.abs(
                null !== (r = a.height) && void 0 !== r ? r : a.width
              ),
              depth: Math.abs(
                null !== (n = a.depth) && void 0 !== n ? n : a.width
              )
            })
          }
        }),
        (e.build = function (e) {
          var t = e.parameters,
            i = t.width,
            r = void 0 === i ? 100 : i,
            n = t.height,
            a = void 0 === n ? r : n,
            o = t.depth,
            s = void 0 === o ? r : o,
            l = t.widthSegments,
            c = void 0 === l ? 64 : l,
            h = t.heightSegments,
            u = void 0 === h ? 64 : h,
            d = t.phiStart,
            f = t.phiLength,
            p = t.thetaStart,
            m = t.thetaLength,
            g = new THREE.SphereBufferGeometry(0.5 * r, c, u, d, f, p, m)
          return (
            g.scale(1, a / r, s / r),
            Object.assign(g, {
              userData: __assign(__assign({}, e), { type: 'SphereGeometry' })
            })
          )
        }),
        e
      )
    })(),
    StarGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    depth: 0,
                    innerRadiusPercent: 38.19,
                    spikes: 5,
                    cornerRadius: 0,
                    angle: 360,
                    extrudeDepth: 0,
                    extrudeBevelSize: 0,
                    extrudeBevelSegments: 1
                  },
              e.parameters
            )
          return {
            parameters: Object.assign(n, {
              width: Math.abs(n.width),
              height: Math.abs(
                null !== (r = n.height) && void 0 !== r ? r : n.width
              )
            })
          }
        }),
        (e.build = function (e) {
          var t,
            i = e.parameters,
            r = i.width,
            n = i.height,
            a = i.innerRadiusPercent,
            o = i.spikes,
            s = i.cornerRadius,
            l = i.angle,
            c = i.extrudeDepth,
            h = i.extrudeBevelSize,
            u = i.extrudeBevelSegments,
            d = 0.5 * r,
            f = 0.5 * n,
            p = (l * Math.PI) / 360 / o,
            m = (Math.PI / 2) * 3 * -1,
            g = (d * a) / 100,
            v = (f * a) / 100,
            y = new THREE.Shape()
          if (3 == o && 50 == a) {
            p = (2 * Math.PI) / o
            for (var E = 0; E <= o; E++) {
              var A = p * E,
                x = 0 + Math.sin(A) * d,
                T = 0 + Math.cos(A) * f
              y.lineTo(x, T)
            }
          } else {
            y.moveTo(0, 0 + l == 360 ? f : 0)
            for (E = 0; E < o; E++) {
              ;(x = 0 + Math.cos(m) * d), (T = 0 + Math.sin(m) * f)
              y.lineTo(x, T),
                (m += p),
                (x = 0 + Math.cos(m) * g),
                (T = 0 + Math.sin(m) * v),
                y.lineTo(x, T),
                (m += p)
            }
            y.lineTo(0, 0 + l == 360 ? f : 0)
          }
          return (
            0 !== s && roundShapePolygon(y, y.getPoints(), s),
            (t =
              c > 0
                ? new THREE.ExtrudeBufferGeometry(y, {
                    steps: 1,
                    depth: c,
                    bevelEnabled: !0,
                    bevelThickness: h,
                    bevelSize: h,
                    bevelOffset: 0,
                    bevelSegments: u
                  })
                : new THREE.ShapeBufferGeometry(y)),
            fixUvs(t, r, n),
            Object.assign(t, {
              userData: __assign(__assign({}, e), { type: 'StarGeometry' })
            })
          )
        }),
        e
      )
    })(),
    TextFrameGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : { width: 100, depth: 0 },
              e.parameters
            )
          return {
            parameters: Object.assign(n, {
              width: Math.abs(n.width),
              height: Math.abs(
                null !== (r = n.height) && void 0 !== r ? r : n.width
              ),
              depth: Math.abs(n.depth)
            })
          }
        }),
        (e.build = function (e) {
          var t = e.parameters,
            i = t.width,
            r = t.height,
            n = new THREE.PlaneBufferGeometry(i, r)
          return Object.assign(n, {
            userData: __assign(__assign({}, e), { type: 'TextFrameGeometry' })
          })
        }),
        e
      )
    })(),
    TorusGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    radialSegments: 64,
                    tubularSegments: 64,
                    arc: 2 * Math.PI,
                    cornerRadius: 30,
                    cornerSegments: 8
                  },
              e.parameters
            ),
            o = Math.abs(a.width),
            s = Math.abs(null !== (r = a.height) && void 0 !== r ? r : a.width),
            l = Math.abs(
              null !== (n = a.depth) && void 0 !== n ? n : 0.25 * a.width
            )
          return {
            parameters: Object.assign(a, { width: o, height: s, depth: l })
          }
        }),
        (e.build = function (e) {
          var t = e.parameters,
            i = t.width,
            r = t.height,
            n = t.depth,
            a = t.radialSegments,
            o = t.tubularSegments,
            s = genTorus(
              i,
              r,
              n,
              0.5 * i,
              t.arc,
              a,
              0,
              0,
              o,
              t.cornerRadius,
              t.cornerSegments
            )
          return (
            s.scale(1, r / i, 1),
            Object.assign(s, {
              userData: __assign(__assign({}, e), { type: 'TorusGeometry' })
            })
          )
        }),
        e
      )
    })()
  function genTorus(e, t, i, r, n, a, o, s, l, c, h) {
    var u
    return (
      (t = (u = __read([i, t], 2))[0]),
      (i = u[1]),
      (o = t / 2),
      1 == (n /= 2 * Math.PI) && (c = 0),
      new HelixBufferGeometry(!0, e, t, i, r, n, a, o, s, l, c, h)
    )
  }
  var TorusKnotGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    depth: 1,
                    tube: 50,
                    tubularSegments: 64,
                    radialSegments: 32,
                    p: 2,
                    q: 3
                  },
              e.parameters
            )
          return {
            parameters: Object.assign(a, {
              width: Math.abs(a.width),
              height: Math.abs(
                null !== (r = a.height) && void 0 !== r ? r : a.width
              ),
              depth: Math.abs(null !== (n = a.depth) && void 0 !== n ? n : 1)
            })
          }
        }),
        (e.build = function (e) {
          var t = e.parameters,
            i = t.width,
            r = t.tube,
            n = t.tubularSegments,
            a = t.radialSegments,
            o = t.p,
            s = t.q,
            l = 0.5 * i - r,
            c = new THREE.TorusKnotBufferGeometry(l, r, n, a, o, s)
          return Object.assign(c, {
            userData: __assign(__assign({}, e), { type: 'TorusKnotGeometry' })
          })
        }),
        e
      )
    })(),
    TriangleGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    depth: 0,
                    spikes: 5,
                    cornerRadius: 0,
                    extrudeDepth: 0,
                    extrudeBevelSize: 0,
                    extrudeBevelSegments: 1,
                    isRect: !1
                  },
              e.parameters
            )
          return {
            parameters: Object.assign(n, {
              width: Math.abs(n.width),
              height: Math.abs(
                null !== (r = n.height) && void 0 !== r
                  ? r
                  : n.width * (n.isRect ? 1 : Math.sqrt(3) / 2)
              )
            })
          }
        }),
        (e.build = function (e) {
          var t,
            i = e.parameters,
            r = i.width,
            n = void 0 === r ? 100 : r,
            a = i.height,
            o = i.cornerRadius,
            s = i.extrudeDepth,
            l = i.extrudeBevelSize,
            c = i.extrudeBevelSegments,
            h = i.isRect,
            u = new THREE.Shape()
          if (h)
            u.moveTo(0.5 * -n, 0.5 * a),
              u.lineTo(0.5 * n, 0.5 * -a),
              u.lineTo(0.5 * -n, 0.5 * -a),
              u.lineTo(0.5 * -n, 0.5 * a)
          else {
            var d = { x: 0.5 * n, y: 0.5 * a }
            u.moveTo(0, d.y),
              u.lineTo(d.x, -d.y),
              u.lineTo(-d.x, -d.y),
              u.lineTo(0, d.y)
          }
          return (
            0 !== o && roundShapePolygonTriangle(u, u.getPoints(), o),
            (t =
              s > 0
                ? new THREE.ExtrudeBufferGeometry(u, {
                    curveSegments: 64,
                    steps: 1,
                    depth: s,
                    bevelEnabled: !0,
                    bevelThickness: l,
                    bevelSize: l,
                    bevelOffset: 0,
                    bevelSegments: c
                  })
                : new THREE.ShapeBufferGeometry(u, 32)),
            fixUvs(t, n, a),
            Object.assign(t, {
              userData: __assign(__assign({}, e), { type: 'TriangleGeometry' })
            })
          )
        }),
        e
      )
    })()
  function roundShapePolygonTriangle(e, t, i) {
    var r,
      n,
      a,
      o,
      s,
      l,
      c,
      h,
      u,
      d,
      f,
      p,
      m,
      g,
      v = function (e, t) {
        var i = t.x - e.x,
          r = t.y - e.y,
          n = Math.sqrt(i * i + r * r),
          a = i / n,
          o = r / n
        return { x: i, y: r, len: n, nx: a, ny: o, ang: Math.atan2(o, a) }
      },
      y = t.length - 1
    for (o = t[y - 1], e.curves = [], r = 0; r < y; r++) {
      ;(s = t[r % y]), (l = t[(r + 1) % y])
      var E = v(s, o),
        A = v(s, l)
      ;(c = E.nx * A.ny - E.ny * A.nx),
        (h = E.nx * A.nx - E.ny * -A.ny),
        (f = Math.asin(c)),
        (u = 1),
        (d = !1),
        h < 0
          ? f < 0
            ? (f = Math.PI + f)
            : ((f = Math.PI - f), (u = -1), (d = !0))
          : f > 0 && ((u = -1), (d = !0)),
        (p = 0.5 * f),
        (g = Math.abs((Math.cos(p) * i) / Math.sin(p))) >
        Math.min(0.5 * E.len, 0.5 * A.len)
          ? ((g = Math.min(0.5 * E.len, 0.5 * A.len)),
            (m = Math.abs((g * Math.sin(p)) / Math.cos(p))))
          : (m = i),
        (n = s.x + A.nx * g),
        (a = s.y + A.ny * g),
        (n += -A.ny * m * u),
        (a += A.nx * m * u),
        e.absarc(
          n,
          a,
          m,
          E.ang + (Math.PI / 2) * u,
          A.ang - (Math.PI / 2) * u,
          d
        ),
        (o = s),
        (s = l)
    }
    e.closePath()
  }
  var Point = (function () {
      function e(e) {
        ;(this.position = new THREE.Vector2()),
          (this.startPosition = new THREE.Vector2()),
          (this.uuid = THREE.MathUtils.generateUUID()),
          (this.position = e.clone())
      }
      return (
        (e.prototype.start = function () {
          this.reset()
        }),
        (e.prototype.reset = function () {
          this.startPosition.copy(this.position)
        }),
        (e.prototype.applyOffset = function (e) {
          this.position.copy(this.startPosition).add(e)
        }),
        (e.prototype.copy = function (e) {
          return (
            this.position.copy(e.position),
            this.startPosition.copy(e.startPosition),
            this
          )
        }),
        (e.prototype.clone = function () {
          return new e(this.position).copy(this)
        }),
        (e.prototype.toJSON = function () {
          return [this.position.x, this.position.y]
        }),
        e
      )
    })(),
    BezierControl = (function (e) {
      function t(t) {
        var i = e.call(this, t.position) || this
        return (i.parent = t), i
      }
      return (
        __extends(t, e),
        (t.prototype.copy = function (t) {
          return e.prototype.copy.call(this, t), this
        }),
        (t.prototype.clone = function () {
          return new t(this.parent).copy(this)
        }),
        t
      )
    })(Point),
    BezierPoint = (function (e) {
      function t(t) {
        var i = e.call(this, t) || this
        return (
          (i.controls = []),
          (i.roundness = 0),
          (i.areControlsDirectionsMirrored = !0),
          i.controls.push(new BezierControl(i), new BezierControl(i)),
          i
        )
      }
      return (
        __extends(t, e),
        (t.prototype.getOppositeControl = function (e) {
          var t = this.controls.indexOf(e)
          return 0 === t ? this.controls[1] : 1 === t ? this.controls[0] : null
        }),
        (t.prototype.applyOffsetToControls = function (e, t) {
          void 0 === t && (t = 1)
          for (var i = 0, r = this.controls.length; i < r; i++) {
            var n = this.controls[i]
            this.position.distanceTo(n.position) <= t
              ? n.position.copy(this.position)
              : n.applyOffset(e)
          }
        }),
        (t.prototype.controlsMoved = function () {
          return !(
            this.position.equals(this.controls[0].position) &&
            this.position.equals(this.controls[1].position)
          )
        }),
        (t.prototype.copy = function (t) {
          return (
            e.prototype.copy.call(this, t),
            this.controls[0].copy(t.controls[0]),
            this.controls[1].copy(t.controls[1]),
            this
          )
        }),
        (t.prototype.clone = function () {
          return new t(this.position).copy(this)
        }),
        (t.prototype.toJSON = function () {
          return e.prototype.toJSON
            .call(this)
            .concat(this.controls[0].toJSON(), this.controls[1].toJSON(), [
              this.roundness
            ])
        }),
        t
      )
    })(Point),
    toTCurve = function (e) {
      return e
    },
    tempV2 = new THREE.Vector2(),
    tempbV2 = new THREE.Vector2(),
    tempaV3 = new THREE.Vector3(),
    tempbV3 = new THREE.Vector3()
  function isStraightLine(e, t) {
    return (
      e.position.equals(e.controls[1].position) &&
      t.position.equals(t.controls[0].position)
    )
  }
  function pointsToBuffer(e, t, i, r) {
    void 0 === i && (i = 12), void 0 === r && (r = !0)
    for (var n, a = tempbV3.set(0, 0, 0), o = 0, s = 0; s < t.length; s++)
      for (
        var l = toTCurve(t[s]), c = tempV2, h = getCurveDivision(l, i), u = 0;
        u <= h;
        u++
      )
        if (
          l instanceof THREE.CubicBezierCurve ||
          l instanceof THREE.LineCurve
        ) {
          if (
            (l.getPoint(u / h, c),
            a.set(c.x, c.y, 0),
            null == n ? void 0 : n.equals(a))
          )
            continue
          void 0 === n && (n = tempaV3),
            n.copy(a),
            e.setXYZ(o, a.x, a.y, a.z),
            o++
        }
    return (
      r &&
        o > 1 &&
        (e.getX(o - 1) !== e.getX(0) ||
          e.getY(o - 1) !== e.getY(0) ||
          e.getZ(o - 1) !== e.getZ(0)) &&
        (e.setXYZ(o, e.getX(0), e.getY(0), e.getZ(0)), o++),
      e
    )
  }
  function pointsSegmentsToBuffer(e, t, i, r, n) {
    void 0 === r && (r = 12), void 0 === n && (n = !0)
    for (var a = tempbV3.set(0, 0, 0), o = 0, s = [], l = 0; l < t.length; l++)
      if (!1 !== i[l]) {
        var c = void 0,
          h = toTCurve(t[l]),
          u = tempV2,
          d = getCurveDivision(h, r)
        s.push(d)
        for (var f = 0; f <= d; f++)
          if (
            h instanceof THREE.CubicBezierCurve ||
            h instanceof THREE.LineCurve
          ) {
            if (
              (h.getPoint(f / d, u),
              a.set(u.x, u.y, 0),
              null == c ? void 0 : c.equals(a))
            )
              continue
            void 0 === c
              ? (c = tempaV3)
              : (e.setXYZ(o, c.x, c.y, c.z),
                o++,
                e.setXYZ(o, a.x, a.y, a.z),
                o++),
              c.copy(a)
          }
      }
    return (
      n &&
        o > 1 &&
        (e.getX(o - 1) !== e.getX(0) ||
          e.getY(o - 1) !== e.getY(0) ||
          e.getZ(o - 1) !== e.getZ(0)) &&
        (e.setXYZ(o, e.getX(0), e.getY(0), e.getZ(0)), o++),
      s
    )
  }
  function getCurvesDivisions(e, t) {
    void 0 === t && (t = 12)
    for (var i = [], r = 0; r < e.length; r++) i.push(getCurveDivision(e[r], t))
    return i
  }
  function getCurveDivision(e, t) {
    return (
      void 0 === t && (t = 12),
      e && e instanceof THREE.EllipseCurve
        ? 2 * t
        : e && (e instanceof THREE.LineCurve || e instanceof THREE.LineCurve3)
        ? 1
        : e && e instanceof THREE.SplineCurve
        ? t * e.points.length
        : t
    )
  }
  function pointsToFlatArray(e, t, i, r) {
    var n
    void 0 === i && (i = 12), void 0 === r && (r = !0)
    for (var a = 0, o = 0; o < t.length; o++)
      for (
        var s = toTCurve(t[o]), l = getCurveDivision(s, i), c = tempV2, h = 0;
        h <= l;
        h++
      )
        if (
          s instanceof THREE.CubicBezierCurve ||
          s instanceof THREE.LineCurve
        ) {
          if ((s.getPoint(h / l, c), null == n ? void 0 : n.equals(c))) continue
          void 0 === n && (n = tempbV2), n.copy(c), e.push(c.x, c.y), a++
        }
    return (
      r &&
        a > 1 &&
        (e[a - 1] !== e[1] || e[a - 2] !== e[0]) &&
        (e.push(e[0], e[1]), a++),
      e
    )
  }
  var ts1V2 = new THREE.Vector2(),
    ts2V2 = new THREE.Vector2(),
    ts3V2 = new THREE.Vector2(),
    ts4V2 = new THREE.Vector2(),
    ts5V2 = new THREE.Vector2(),
    VectorShape = (function (e) {
      function t(t, i) {
        void 0 === t && (t = 100), void 0 === i && (i = 100)
        var r = e.call(this) || this
        return (
          (r.points = []),
          (r.shapeHoles = []),
          (r.eventDispatcher = new THREE.EventDispatcher()),
          (r.plane = new THREE.Plane(new THREE.Vector3(0, 0, -1))),
          (r.isClosed = !1),
          (r.uuid = THREE.MathUtils.generateUUID()),
          (r._width = t),
          (r._height = i),
          r
        )
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'width', {
          get: function () {
            return this._width
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'height', {
          get: function () {
            return this._height
          },
          enumerable: !1,
          configurable: !0
        }),
        (t.prototype.applySize = function (e, t) {
          0 === e && (e = 0.001),
            0 === t && (t = 0.001),
            this.applyScale(e / this.width, t / this.height),
            (this._width = e),
            (this._height = t)
        }),
        (t.prototype.applyScale = function (e, t) {
          for (
            var i = ts1V2.set(e, t), r = 0, n = this.points.length;
            r < n;
            r++
          ) {
            var a = this.points[r]
            a.position.multiply(i),
              a.controls[0].position.multiply(i),
              a.controls[1].position.multiply(i)
          }
          this.update()
        }),
        (t.prototype.createPoint = function (e, t) {
          var i
          return (
            void 0 === t && (t = 0),
            (i = e instanceof THREE.Vector2 ? e : new THREE.Vector2(e, t)),
            new BezierPoint(i)
          )
        }),
        (t.prototype.addPoint = function (e) {
          this.points.push(e), this._update()
        }),
        (t.prototype.addPointAt = function (e, t) {
          this.points.splice(t, 0, e), this._update()
        }),
        (t.prototype.getLastPoint = function () {
          return this.points[this.points.length - 1]
        }),
        (t.prototype.removePoint = function (e) {
          var t = this.points.indexOf(e)
          t >= 0 && this.points.splice(t, 1), this._update()
        }),
        (t.prototype.splitCurveAt = function (e, t, i) {
          void 0 === i && (i = 0.5)
          var r = this.points.indexOf(e),
            n = this.points.indexOf(t)
          if (r < 0 || n < 0) return null
          var a = isStraightLine(e, t),
            o = new THREE.Vector2(),
            s = new BezierPoint(o)
          if (a)
            o
              .subVectors(t.position, e.position)
              .multiplyScalar(i)
              .add(e.position),
              s.position.copy(o),
              s.controls[0].position.copy(o),
              s.controls[1].position.copy(o)
          else {
            var l = ts1V2
                .subVectors(e.controls[1].position, e.position)
                .multiplyScalar(i)
                .add(e.position),
              c = ts2V2
                .subVectors(t.controls[0].position, e.controls[1].position)
                .multiplyScalar(i)
                .add(e.controls[1].position),
              h = ts3V2
                .subVectors(t.position, t.controls[0].position)
                .multiplyScalar(i)
                .add(t.controls[0].position),
              u = l,
              d = ts4V2.subVectors(c, l).multiplyScalar(i).add(l),
              f = ts5V2.subVectors(h, c).multiplyScalar(i).add(c),
              p = h
            o.subVectors(f, d).multiplyScalar(i).add(d),
              s.position.copy(o),
              s.controls[0].position.copy(d),
              s.controls[1].position.copy(f),
              e.controls[1].position.copy(u),
              t.controls[0].position.copy(p)
          }
          return this.points.splice(r + 1, 0, s), this._update(), s
        }),
        (t.prototype.update = function () {
          this._update()
        }),
        (t.prototype.extractShapePointsToBuffer = function (e, t) {
          return (
            void 0 === t && (t = 12),
            (this.curveDivisions = getCurvesDivisions(this.curves, t)),
            pointsToBuffer(e, this.curves, t, this.autoClose),
            this.curveDivisions.reduce(function (e, t) {
              return e + t
            }, 0) + 1
          )
        }),
        (t.prototype.extractFilteredShapePointsToBuffer = function (e, t, i) {
          return (
            void 0 === i && (i = 12),
            2 *
              pointsSegmentsToBuffer(
                e,
                this.curves,
                t,
                i,
                this.autoClose
              ).reduce(function (e, t) {
                return e + t
              }, 0)
          )
        }),
        (t.prototype.extractShapePointsToFlatArray = function (e, t) {
          return (
            void 0 === t && (t = 12),
            (this.curveDivisions = getCurvesDivisions(this.curves, t)),
            pointsToFlatArray(e, this.curves, t, this.autoClose)
          )
        }),
        (t.prototype.getCurveIndexFromVertexId = function (e) {
          var t = 0
          if (!this.curveDivisions) throw Error('no cache curveDivisions cache')
          for (var i = 0, r = this.curveDivisions.length; i < r; i++) {
            var n = this.curveDivisions[i]
            if (e < t + n) return [i, (e - t + 1) / n]
            t += n
          }
          return [0, 1]
        }),
        (t.prototype.getCurveT = function (e, t, i) {
          var r = this.points[e],
            n = this.points[e >= this.points.length - 1 ? 0 : e + 1],
            a = this.curveDivisions,
            o = a[e]
          if (isStraightLine(r, n)) {
            var s = r.position.distanceTo(n.position)
            return r.position.distanceTo(ts1V2.set(i.x, i.y)) / s
          }
          for (var l = 0, c = 0; c < e; c++) l += a[c]
          return (t - l + 1) / o
        }),
        (t.prototype.dispose = function () {
          this.eventDispatcher = null
        }),
        (t.prototype._update = function () {
          var e
          this.curves = []
          for (var t = 0, i = this.points.length; t < i; t++) {
            var r = this.points[t]
            if (0 === t) this.moveTo(r.position.x, r.position.y)
            else
              isStraightLine((n = this.points[t - 1]), r)
                ? this.lineTo(r.position.x, r.position.y)
                : this.bezierCurveTo(
                    n.controls[1].position.x,
                    n.controls[1].position.y,
                    r.controls[0].position.x,
                    r.controls[0].position.y,
                    r.position.x,
                    r.position.y
                  )
          }
          if (this.isClosed) {
            var n
            r = this.points[0]
            isStraightLine((n = this.points[this.points.length - 1]), r)
              ? this.lineTo(r.position.x, r.position.y)
              : this.bezierCurveTo(
                  n.controls[1].position.x,
                  n.controls[1].position.y,
                  r.controls[0].position.x,
                  r.controls[0].position.y,
                  r.position.x,
                  r.position.y
                )
          }
          null === (e = this.eventDispatcher) ||
            void 0 === e ||
            e.dispatchEvent({ type: 'update' })
        }),
        (t.prototype.clone = function () {
          var e = new t(this._width, this._height)
          return (
            (e.points = this.points.map(function (e) {
              return e.clone()
            })),
            (e.isClosed = this.isClosed),
            e
          )
        }),
        (t.prototype.toJSON = function () {
          return {
            points: this.points.reduce(function (e, t) {
              return e.concat(t.toJSON())
            }, []),
            isClosed: this.isClosed
          }
        }),
        (t.prototype.fromJSON = function (e) {
          this.points = []
          for (var t = e.points.length / 7, i = 0; i < t; i++) {
            var r = 7 * i,
              n = e.points[r + 0],
              a = e.points[r + 1],
              o = e.points[r + 2],
              s = e.points[r + 3],
              l = e.points[r + 4],
              c = e.points[r + 5],
              h = e.points[r + 6],
              u = new BezierPoint(new THREE.Vector2(n, a))
            u.controls[0].position.set(o, s),
              u.controls[1].position.set(l, c),
              (u.roundness = h),
              this.points.push(u)
          }
          return (this.isClosed = e.isClosed), this._update(), this
        }),
        t
      )
    })(THREE.Shape),
    WINDING,
    ELEMENT
  function assert(e, t) {
    if (!e) throw t || 'Assertion Failed!'
  }
  !(function (e) {
    ;(e[(e.ODD = 0)] = 'ODD'),
      (e[(e.NONZERO = 1)] = 'NONZERO'),
      (e[(e.POSITIVE = 2)] = 'POSITIVE'),
      (e[(e.NEGATIVE = 3)] = 'NEGATIVE'),
      (e[(e.ABS_GEQ_TWO = 4)] = 'ABS_GEQ_TWO')
  })(WINDING || (WINDING = {})),
    (function (e) {
      ;(e[(e.POLYGONS = 0)] = 'POLYGONS'),
        (e[(e.CONNECTED_POLYGONS = 1)] = 'CONNECTED_POLYGONS'),
        (e[(e.BOUNDARY_CONTOURS = 2)] = 'BOUNDARY_CONTOURS')
    })(ELEMENT || (ELEMENT = {}))
  var Geom = (function () {
      function e() {}
      return (
        (e.vertEq = function (e, t) {
          return e.s === t.s && e.t === t.t
        }),
        (e.vertLeq = function (e, t) {
          return e.s < t.s || (e.s === t.s && e.t <= t.t)
        }),
        (e.transLeq = function (e, t) {
          return e.t < t.t || (e.t === t.t && e.s <= t.s)
        }),
        (e.edgeGoesLeft = function (t) {
          return e.vertLeq(t.Dst, t.Org)
        }),
        (e.edgeGoesRight = function (t) {
          return e.vertLeq(t.Org, t.Dst)
        }),
        (e.vertL1dist = function (e, t) {
          return Math.abs(e.s - t.s) + Math.abs(e.t - t.t)
        }),
        (e.edgeEval = function (t, i, r) {
          assert(e.vertLeq(t, i) && e.vertLeq(i, r))
          var n = i.s - t.s,
            a = r.s - i.s
          return n + a > 0
            ? n < a
              ? i.t - t.t + (t.t - r.t) * (n / (n + a))
              : i.t - r.t + (r.t - t.t) * (a / (n + a))
            : 0
        }),
        (e.edgeSign = function (t, i, r) {
          assert(e.vertLeq(t, i) && e.vertLeq(i, r))
          var n = i.s - t.s,
            a = r.s - i.s
          return n + a > 0 ? (i.t - r.t) * n + (i.t - t.t) * a : 0
        }),
        (e.transEval = function (t, i, r) {
          assert(e.transLeq(t, i) && e.transLeq(i, r))
          var n = i.t - t.t,
            a = r.t - i.t
          return n + a > 0
            ? n < a
              ? i.s - t.s + (t.s - r.s) * (n / (n + a))
              : i.s - r.s + (r.s - t.s) * (a / (n + a))
            : 0
        }),
        (e.transSign = function (t, i, r) {
          assert(e.transLeq(t, i) && e.transLeq(i, r))
          var n = i.t - t.t,
            a = r.t - i.t
          return n + a > 0 ? (i.s - r.s) * n + (i.s - t.s) * a : 0
        }),
        (e.vertCCW = function (e, t, i) {
          return e.s * (t.t - i.t) + t.s * (i.t - e.t) + i.s * (e.t - t.t) >= 0
        }),
        (e.interpolate = function (e, t, i, r) {
          return (e = e < 0 ? 0 : e) <= (i = i < 0 ? 0 : i)
            ? 0 === i
              ? (t + r) / 2
              : t + (e / (e + i)) * (r - t)
            : r + (i / (e + i)) * (t - r)
        }),
        (e.intersect = function (t, i, r, n, a) {
          var o, s, l
          e.vertLeq(t, i) || ((l = t), (t = i), (i = l)),
            e.vertLeq(r, n) || ((l = r), (r = n), (n = l)),
            e.vertLeq(t, r) ||
              ((l = t), (t = r), (r = l), (l = i), (i = n), (n = l)),
            e.vertLeq(r, i)
              ? e.vertLeq(i, n)
                ? ((o = e.edgeEval(t, r, i)) + (s = e.edgeEval(r, i, n)) < 0 &&
                    ((o = -o), (s = -s)),
                  (a.s = e.interpolate(o, r.s, s, i.s)))
                : ((o = e.edgeSign(t, r, i)) + (s = -e.edgeSign(t, n, i)) < 0 &&
                    ((o = -o), (s = -s)),
                  (a.s = e.interpolate(o, r.s, s, n.s)))
              : (a.s = (r.s + i.s) / 2),
            e.transLeq(t, i) || ((l = t), (t = i), (i = l)),
            e.transLeq(r, n) || ((l = r), (r = n), (n = l)),
            e.transLeq(t, r) ||
              ((l = t), (t = r), (r = l), (l = i), (i = n), (n = l)),
            e.transLeq(r, i)
              ? e.transLeq(i, n)
                ? ((o = e.transEval(t, r, i)) + (s = e.transEval(r, i, n)) <
                    0 && ((o = -o), (s = -s)),
                  (a.t = e.interpolate(o, r.t, s, i.t)))
                : ((o = e.transSign(t, r, i)) + (s = -e.transSign(t, n, i)) <
                    0 && ((o = -o), (s = -s)),
                  (a.t = e.interpolate(o, r.t, s, n.t)))
              : (a.t = (r.t + i.t) / 2)
        }),
        e
      )
    })(),
    TESSface = function () {
      ;(this.next = null),
        (this.prev = null),
        (this.anEdge = null),
        (this.trail = null),
        (this.n = 0),
        (this.marked = !1),
        (this.inside = !1)
    },
    TESShalfEdge = (function () {
      function e(e) {
        ;(this.side = e),
          (this.next = null),
          (this.Org = null),
          (this.Sym = null),
          (this.Onext = null),
          (this.Lnext = null),
          (this.Lface = null),
          (this.activeRegion = null),
          (this.winding = 0)
      }
      return (
        Object.defineProperty(e.prototype, 'Rface', {
          get: function () {
            return this.Sym.Lface
          },
          set: function (e) {
            this.Sym.Lface = e
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'Dst', {
          get: function () {
            return this.Sym.Org
          },
          set: function (e) {
            this.Sym.Org = e
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'Oprev', {
          get: function () {
            return this.Sym.Lnext
          },
          set: function (e) {
            this.Sym.Lnext = e
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'Lprev', {
          get: function () {
            return this.Onext.Sym
          },
          set: function (e) {
            this.Onext.Sym = e
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'Dprev', {
          get: function () {
            return this.Lnext.Sym
          },
          set: function (e) {
            this.Lnext.Sym = e
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'Rprev', {
          get: function () {
            return this.Sym.Onext
          },
          set: function (e) {
            this.Sym.Onext = e
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'Dnext', {
          get: function () {
            return this.Sym.Onext.Sym
          },
          set: function (e) {
            this.Sym.Onext.Sym = e
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'Rnext', {
          get: function () {
            return this.Sym.Lnext.Sym
          },
          set: function (e) {
            this.Sym.Lnext.Sym = e
          },
          enumerable: !0,
          configurable: !0
        }),
        e
      )
    })(),
    TESSvertex = function () {
      ;(this.next = null),
        (this.prev = null),
        (this.anEdge = null),
        (this.coords = [0, 0, 0]),
        (this.s = 0),
        (this.t = 0),
        (this.pqHandle = 0),
        (this.n = 0),
        (this.idx = 0)
    },
    TESSmesh = (function () {
      function e() {
        var e = new TESSvertex(),
          t = new TESSface(),
          i = new TESShalfEdge(0),
          r = new TESShalfEdge(1)
        ;(e.next = e.prev = e),
          (e.anEdge = null),
          (t.next = t.prev = t),
          (i.next = i),
          (i.Sym = r),
          (r.next = r),
          (r.Sym = i),
          (this.vHead = e),
          (this.fHead = t),
          (this.eHead = i),
          (this.eHeadSym = r)
      }
      return (
        (e.prototype.makeEdge_ = function (e) {
          var t = new TESShalfEdge(0),
            i = new TESShalfEdge(1)
          e.Sym.side < e.side && (e = e.Sym)
          var r = e.Sym.next
          return (
            (i.next = r),
            (r.Sym.next = t),
            (t.next = e),
            (e.Sym.next = i),
            (t.Sym = i),
            (t.Onext = t),
            (t.Lnext = i),
            (t.Org = null),
            (t.Lface = null),
            (t.winding = 0),
            (t.activeRegion = null),
            (i.Sym = t),
            (i.Onext = i),
            (i.Lnext = t),
            (i.Org = null),
            (i.Lface = null),
            (i.winding = 0),
            (i.activeRegion = null),
            t
          )
        }),
        (e.prototype.splice_ = function (e, t) {
          var i = e.Onext,
            r = t.Onext
          ;(i.Sym.Lnext = t), (r.Sym.Lnext = e), (e.Onext = r), (t.Onext = i)
        }),
        (e.prototype.makeVertex_ = function (e, t, i) {
          var r = e
          assert(r, "Vertex can't be null!")
          var n = i.prev
          ;(r.prev = n),
            (n.next = r),
            (r.next = i),
            (i.prev = r),
            (r.anEdge = t)
          var a = t
          do {
            ;(a.Org = r), (a = a.Onext)
          } while (a !== t)
        }),
        (e.prototype.makeFace_ = function (e, t, i) {
          var r = e
          assert(r, "Face can't be null")
          var n = i.prev
          ;(r.prev = n),
            (n.next = r),
            (r.next = i),
            (i.prev = r),
            (r.anEdge = t),
            (r.trail = null),
            (r.marked = !1),
            (r.inside = i.inside)
          var a = t
          do {
            ;(a.Lface = r), (a = a.Lnext)
          } while (a !== t)
        }),
        (e.prototype.killEdge_ = function (e) {
          e.Sym.side < e.side && (e = e.Sym)
          var t = e.next,
            i = e.Sym.next
          ;(t.Sym.next = i), (i.Sym.next = t)
        }),
        (e.prototype.killVertex_ = function (e, t) {
          var i = e.anEdge,
            r = i
          do {
            ;(r.Org = t), (r = r.Onext)
          } while (r !== i)
          var n = e.prev,
            a = e.next
          ;(a.prev = n), (n.next = a)
        }),
        (e.prototype.killFace_ = function (e, t) {
          var i = e.anEdge,
            r = i
          do {
            ;(r.Lface = t), (r = r.Lnext)
          } while (r !== i)
          var n = e.prev,
            a = e.next
          ;(a.prev = n), (n.next = a)
        }),
        (e.prototype.makeEdge = function () {
          var e = new TESSvertex(),
            t = new TESSvertex(),
            i = new TESSface(),
            r = this.makeEdge_(this.eHead)
          return (
            this.makeVertex_(e, r, this.vHead),
            this.makeVertex_(t, r.Sym, this.vHead),
            this.makeFace_(i, r, this.fHead),
            r
          )
        }),
        (e.prototype.splice = function (e, t) {
          var i = !1,
            r = !1
          if (e !== t) {
            if (
              (t.Org !== e.Org && ((r = !0), this.killVertex_(t.Org, e.Org)),
              t.Lface !== e.Lface &&
                ((i = !0), this.killFace_(t.Lface, e.Lface)),
              this.splice_(t, e),
              !r)
            ) {
              var n = new TESSvertex()
              this.makeVertex_(n, t, e.Org), (e.Org.anEdge = e)
            }
            if (!i) {
              var a = new TESSface()
              this.makeFace_(a, t, e.Lface), (e.Lface.anEdge = e)
            }
          }
        }),
        (e.prototype.delete = function (e) {
          var t = e.Sym,
            i = !1
          if (
            (e.Lface !== e.Rface &&
              ((i = !0), this.killFace_(e.Lface, e.Rface)),
            e.Onext === e)
          )
            this.killVertex_(e.Org, null)
          else if (
            ((e.Rface.anEdge = e.Oprev),
            (e.Org.anEdge = e.Onext),
            this.splice_(e, e.Oprev),
            !i)
          ) {
            var r = new TESSface()
            this.makeFace_(r, e, e.Lface)
          }
          t.Onext === t
            ? (this.killVertex_(t.Org, null), this.killFace_(t.Lface, null))
            : ((e.Lface.anEdge = t.Oprev),
              (t.Org.anEdge = t.Onext),
              this.splice_(t, t.Oprev)),
            this.killEdge_(e)
        }),
        (e.prototype.addEdgeVertex = function (e) {
          var t = this.makeEdge_(e),
            i = t.Sym
          this.splice_(t, e.Lnext), (t.Org = e.Dst)
          var r = new TESSvertex()
          return this.makeVertex_(r, i, t.Org), (t.Lface = i.Lface = e.Lface), t
        }),
        (e.prototype.splitEdge = function (e) {
          var t = this.addEdgeVertex(e).Sym
          return (
            this.splice_(e.Sym, e.Sym.Oprev),
            this.splice_(e.Sym, t),
            (e.Dst = t.Org),
            (t.Dst.anEdge = t.Sym),
            (t.Rface = e.Rface),
            (t.winding = e.winding),
            (t.Sym.winding = e.Sym.winding),
            t
          )
        }),
        (e.prototype.connect = function (e, t) {
          var i = !1,
            r = this.makeEdge_(e),
            n = r.Sym
          if (
            (t.Lface !== e.Lface &&
              ((i = !0), this.killFace_(t.Lface, e.Lface)),
            this.splice_(r, e.Lnext),
            this.splice_(n, t),
            (r.Org = e.Dst),
            (n.Org = t.Org),
            (r.Lface = n.Lface = e.Lface),
            (e.Lface.anEdge = n),
            !i)
          ) {
            var a = new TESSface()
            this.makeFace_(a, r, e.Lface)
          }
          return r
        }),
        (e.prototype.zapFace = function (e) {
          var t,
            i,
            r,
            n,
            a,
            o = e.anEdge
          i = o.Lnext
          do {
            ;(i = (t = i).Lnext),
              (t.Lface = null),
              null === t.Rface &&
                (t.Onext === t
                  ? this.killVertex_(t.Org, null)
                  : ((t.Org.anEdge = t.Onext), this.splice_(t, t.Oprev)),
                (r = t.Sym).Onext === r
                  ? this.killVertex_(r.Org, null)
                  : ((r.Org.anEdge = r.Onext), this.splice_(r, r.Oprev)),
                this.killEdge_(t))
          } while (t != o)
          ;(n = e.prev), ((a = e.next).prev = n), (n.next = a)
        }),
        (e.prototype.countFaceVerts_ = function (e) {
          var t = e.anEdge,
            i = 0
          do {
            i++, (t = t.Lnext)
          } while (t !== e.anEdge)
          return i
        }),
        (e.prototype.mergeConvexFaces = function (e) {
          var t, i, r, n, a
          for (t = this.fHead.next; t !== this.fHead; t = t.next)
            if (t.inside)
              for (
                a = (i = t.anEdge).Org;
                (r = i.Lnext),
                  (n = i.Sym) &&
                    n.Lface &&
                    n.Lface.inside &&
                    this.countFaceVerts_(t) +
                      this.countFaceVerts_(n.Lface) -
                      2 <=
                      e &&
                    Geom.vertCCW(i.Lprev.Org, i.Org, n.Lnext.Lnext.Org) &&
                    Geom.vertCCW(n.Lprev.Org, n.Org, i.Lnext.Lnext.Org) &&
                    ((r = n.Lnext), this.delete(n), (i = null), (n = null)),
                  !i || i.Lnext.Org !== a;

              )
                i = r
          return !0
        }),
        (e.prototype.check = function () {
          var e,
            t,
            i,
            r,
            n,
            a,
            o = this.fHead,
            s = this.vHead,
            l = this.eHead
          for (t = o, t = o; (e = t.next) !== o; t = e) {
            assert(e.prev === t), (n = e.anEdge)
            do {
              assert(n.Sym !== n),
                assert(n.Sym.Sym === n),
                assert(n.Lnext.Onext.Sym === n),
                assert(n.Onext.Sym.Lnext === n),
                assert(n.Lface === e),
                (n = n.Lnext)
            } while (n !== e.anEdge)
          }
          for (
            assert(e.prev === t && null === e.anEdge), r = s, r = s;
            (i = r.next) !== s;
            r = i
          ) {
            assert(i.prev === r), (n = i.anEdge)
            do {
              assert(n.Sym !== n),
                assert(n.Sym.Sym === n),
                assert(n.Lnext.Onext.Sym === n),
                assert(n.Onext.Sym.Lnext === n),
                assert(n.Org === i),
                (n = n.Onext)
            } while (n !== i.anEdge)
          }
          for (
            assert(i.prev === r && null === i.anEdge), a = l, a = l;
            (n = a.next) !== l;
            a = n
          )
            assert(n.Sym.next === a.Sym),
              assert(n.Sym !== n),
              assert(n.Sym.Sym === n),
              assert(null !== n.Org),
              assert(null !== n.Dst),
              assert(n.Lnext.Onext.Sym === n),
              assert(n.Onext.Sym.Lnext === n)
          assert(
            n.Sym.next === a.Sym &&
              n.Sym === this.eHeadSym &&
              n.Sym.Sym === n &&
              null === n.Org &&
              null === n.Dst &&
              null === n.Lface &&
              null === n.Rface
          )
        }),
        e
      )
    })(),
    PQnode = function () {
      this.handle = null
    },
    PQhandleElem = function () {
      ;(this.key = null), (this.node = 0)
    },
    PriorityQ = (function () {
      function e(e, t) {
        ;(this.leq = t),
          (this.max = 0),
          (this.nodes = []),
          (this.handles = []),
          (this.initialized = !1),
          (this.freeList = 0),
          (this.size = 0),
          (this.max = e),
          (this.nodes = []),
          (this.handles = [])
        for (var i = 0; i < e + 1; i++)
          (this.nodes[i] = new PQnode()), (this.handles[i] = new PQhandleElem())
        ;(this.initialized = !1),
          (this.nodes[1].handle = 1),
          (this.handles[1].key = null)
      }
      return (
        (e.prototype.floatDown_ = function (e) {
          var t,
            i,
            r,
            n = this.nodes,
            a = this.handles
          for (t = n[e].handle; ; ) {
            if (
              ((r = e << 1) < this.size &&
                this.leq(a[n[r + 1].handle].key, a[n[r].handle].key) &&
                ++r,
              assert(r <= this.max),
              (i = n[r].handle),
              r > this.size || this.leq(a[t].key, a[i].key))
            ) {
              ;(n[e].handle = t), (a[t].node = e)
              break
            }
            ;(n[e].handle = i), (a[i].node = e), (e = r)
          }
        }),
        (e.prototype.floatUp_ = function (e) {
          var t,
            i,
            r,
            n = this.nodes,
            a = this.handles
          for (t = n[e].handle; ; ) {
            if (
              ((i = n[(r = e >> 1)].handle),
              0 === r || this.leq(a[i].key, a[t].key))
            ) {
              ;(n[e].handle = t), (a[t].node = e)
              break
            }
            ;(n[e].handle = i), (a[i].node = e), (e = r)
          }
        }),
        (e.prototype.init = function () {
          for (var e = this.size; e >= 1; --e) this.floatDown_(e)
          this.initialized = !0
        }),
        (e.prototype.min = function () {
          return this.handles[this.nodes[1].handle].key
        }),
        (e.prototype.insert = function (e) {
          var t, i
          if (2 * (t = ++this.size) > this.max) {
            var r, n
            for (
              this.max *= 2,
                n = this.nodes.length,
                this.nodes.length = this.max + 1,
                r = n;
              r < this.nodes.length;
              r++
            )
              this.nodes[r] = new PQnode()
            for (
              n = this.handles.length,
                this.handles.length = this.max + 1,
                r = n;
              r < this.handles.length;
              r++
            )
              this.handles[r] = new PQhandleElem()
          }
          return (
            0 === this.freeList
              ? (i = t)
              : ((i = this.freeList), (this.freeList = this.handles[i].node)),
            (this.nodes[t].handle = i),
            (this.handles[i].node = t),
            (this.handles[i].key = e),
            this.initialized && this.floatUp_(t),
            i
          )
        }),
        (e.prototype.extractMin = function () {
          var e = this.nodes,
            t = this.handles,
            i = e[1].handle,
            r = t[i].key
          return (
            this.size > 0 &&
              ((e[1].handle = e[this.size].handle),
              (t[e[1].handle].node = 1),
              (t[i].key = null),
              (t[i].node = this.freeList),
              (this.freeList = i),
              --this.size,
              this.size > 0 && this.floatDown_(1)),
            r
          )
        }),
        (e.prototype.delete = function (e) {
          var t,
            i = this.nodes,
            r = this.handles
          assert(e >= 1 && e <= this.max && null !== r[e].key),
            (i[(t = r[e].node)].handle = i[this.size].handle),
            (r[i[t].handle].node = t),
            --this.size,
            t <= this.size &&
              (t <= 1 || this.leq(r[i[t >> 1].handle].key, r[i[t].handle].key)
                ? this.floatDown_(t)
                : this.floatUp_(t)),
            (r[e].key = null),
            (r[e].node = this.freeList),
            (this.freeList = e)
        }),
        e
      )
    })(),
    ActiveRegion = function () {
      ;(this.eUp = null),
        (this.nodeUp = null),
        (this.windingNumber = 0),
        (this.inside = !1),
        (this.sentinel = !1),
        (this.dirty = !1),
        (this.fixUpperEdge = !1)
    },
    DictNode = function () {
      ;(this.key = null), (this.next = null), (this.prev = null)
    },
    Dict = (function () {
      function e(e, t) {
        ;(this.frame = e),
          (this.leq = t),
          (this.head = new DictNode()),
          (this.head.next = this.head),
          (this.head.prev = this.head)
      }
      return (
        (e.prototype.min = function () {
          return this.head.next
        }),
        (e.prototype.max = function () {
          return this.head.prev
        }),
        (e.prototype.insert = function (e) {
          return this.insertBefore(this.head, e)
        }),
        (e.prototype.search = function (e) {
          var t = this.head
          do {
            t = t.next
          } while (null !== t.key && !this.leq(this.frame, e, t.key))
          return t
        }),
        (e.prototype.insertBefore = function (e, t) {
          do {
            e = e.prev
          } while (null !== e.key && !this.leq(this.frame, e.key, t))
          var i = new DictNode()
          return (
            (i.key = t),
            (i.next = e.next),
            (e.next.prev = i),
            (i.prev = e),
            (e.next = i),
            i
          )
        }),
        (e.prototype.delete = function (e) {
          ;(e.next.prev = e.prev), (e.prev.next = e.next)
        }),
        e
      )
    })(),
    Sweep = (function () {
      function e() {}
      return (
        (e.regionBelow = function (e) {
          return e.nodeUp.prev.key
        }),
        (e.regionAbove = function (e) {
          return e.nodeUp.next.key
        }),
        (e.debugEvent = function (e) {}),
        (e.addWinding = function (e, t) {
          ;(e.winding += t.winding), (e.Sym.winding += t.Sym.winding)
        }),
        (e.edgeLeq = function (e, t, i) {
          var r = e.event,
            n = t.eUp,
            a = i.eUp
          return n.Dst === r
            ? a.Dst === r
              ? Geom.vertLeq(n.Org, a.Org)
                ? Geom.edgeSign(a.Dst, n.Org, a.Org) <= 0
                : Geom.edgeSign(n.Dst, a.Org, n.Org) >= 0
              : Geom.edgeSign(a.Dst, r, a.Org) <= 0
            : a.Dst === r
            ? Geom.edgeSign(n.Dst, r, n.Org) >= 0
            : Geom.edgeEval(n.Dst, r, n.Org) >= Geom.edgeEval(a.Dst, r, a.Org)
        }),
        (e.deleteRegion = function (e, t) {
          t.fixUpperEdge && assert(0 === t.eUp.winding),
            (t.eUp.activeRegion = null),
            e.dict.delete(t.nodeUp)
        }),
        (e.fixUpperEdge = function (e, t, i) {
          assert(t.fixUpperEdge),
            e.mesh.delete(t.eUp),
            (t.fixUpperEdge = !1),
            (t.eUp = i),
            (i.activeRegion = t)
        }),
        (e.topLeftRegion = function (t, i) {
          var r,
            n = i.eUp.Org
          do {
            i = e.regionAbove(i)
          } while (i.eUp.Org === n)
          if (i.fixUpperEdge) {
            if (
              null ===
              (r = t.mesh.connect(e.regionBelow(i).eUp.Sym, i.eUp.Lnext))
            )
              return null
            e.fixUpperEdge(t, i, r), (i = e.regionAbove(i))
          }
          return i
        }),
        (e.topRightRegion = function (t) {
          var i = t.eUp.Dst
          do {
            t = e.regionAbove(t)
          } while (t.eUp.Dst === i)
          return t
        }),
        (e.addRegionBelow = function (e, t, i) {
          var r = new ActiveRegion()
          return (
            (r.eUp = i),
            (r.nodeUp = e.dict.insertBefore(t.nodeUp, r)),
            (r.fixUpperEdge = !1),
            (r.sentinel = !1),
            (r.dirty = !1),
            (i.activeRegion = r),
            r
          )
        }),
        (e.isWindingInside = function (e, t) {
          switch (e.windingRule) {
            case WINDING.ODD:
              return 0 != (1 & t)
            case WINDING.NONZERO:
              return 0 !== t
            case WINDING.POSITIVE:
              return t > 0
            case WINDING.NEGATIVE:
              return t < 0
            case WINDING.ABS_GEQ_TWO:
              return t >= 2 || t <= -2
          }
          throw new Error('Invalid winding rulle')
        }),
        (e.computeWinding = function (t, i) {
          ;(i.windingNumber = e.regionAbove(i).windingNumber + i.eUp.winding),
            (i.inside = e.isWindingInside(t, i.windingNumber))
        }),
        (e.finishRegion = function (t, i) {
          var r = i.eUp,
            n = r.Lface
          ;(n.inside = i.inside), (n.anEdge = r), e.deleteRegion(t, i)
        }),
        (e.finishLeftRegions = function (t, i, r) {
          for (var n, a = null, o = i, s = i.eUp; o !== r; ) {
            if (
              ((o.fixUpperEdge = !1),
              (n = (a = e.regionBelow(o)).eUp).Org != s.Org)
            ) {
              if (!a.fixUpperEdge) {
                e.finishRegion(t, o)
                break
              }
              ;(n = t.mesh.connect(s.Lprev, n.Sym)), e.fixUpperEdge(t, a, n)
            }
            s.Onext !== n && (t.mesh.splice(n.Oprev, n), t.mesh.splice(s, n)),
              e.finishRegion(t, o),
              (s = a.eUp),
              (o = a)
          }
          return s
        }),
        (e.addRightEdges = function (t, i, r, n, a, o) {
          var s,
            l,
            c,
            h,
            u = !0
          c = r
          do {
            assert(Geom.vertLeq(c.Org, c.Dst)),
              e.addRegionBelow(t, i, c.Sym),
              (c = c.Onext)
          } while (c !== n)
          for (
            null === a && (a = e.regionBelow(i).eUp.Rprev), l = i, h = a;
            (c = (s = e.regionBelow(l)).eUp.Sym).Org === h.Org;

          )
            c.Onext !== h &&
              (t.mesh.splice(c.Oprev, c), t.mesh.splice(h.Oprev, c)),
              (s.windingNumber = l.windingNumber - c.winding),
              (s.inside = e.isWindingInside(t, s.windingNumber)),
              (l.dirty = !0),
              !u &&
                e.checkForRightSplice(t, l) &&
                (e.addWinding(c, h), e.deleteRegion(t, l), t.mesh.delete(h)),
              (u = !1),
              (l = s),
              (h = c)
          ;(l.dirty = !0),
            assert(l.windingNumber - c.winding === s.windingNumber),
            o && e.walkDirtyRegions(t, l)
        }),
        (e.spliceMergeVertices = function (e, t, i) {
          e.mesh.splice(t, i)
        }),
        (e.vertexWeights = function (e, t, i) {
          var r = Geom.vertL1dist(t, e),
            n = Geom.vertL1dist(i, e),
            a = (0.5 * n) / (r + n),
            o = (0.5 * r) / (r + n)
          ;(e.coords[0] += a * t.coords[0] + o * i.coords[0]),
            (e.coords[1] += a * t.coords[1] + o * i.coords[1]),
            (e.coords[2] += a * t.coords[2] + o * i.coords[2])
        }),
        (e.getIntersectData = function (t, i, r, n, a, o) {
          ;(i.coords[0] = i.coords[1] = i.coords[2] = 0),
            (i.idx = -1),
            e.vertexWeights(i, r, n),
            e.vertexWeights(i, a, o)
        }),
        (e.checkForRightSplice = function (t, i) {
          var r = e.regionBelow(i),
            n = i.eUp,
            a = r.eUp
          if (Geom.vertLeq(n.Org, a.Org)) {
            if (Geom.edgeSign(a.Dst, n.Org, a.Org) > 0) return !1
            Geom.vertEq(n.Org, a.Org)
              ? n.Org !== a.Org &&
                (t.pq.delete(n.Org.pqHandle),
                e.spliceMergeVertices(t, a.Oprev, n))
              : (t.mesh.splitEdge(a.Sym),
                t.mesh.splice(n, a.Oprev),
                (i.dirty = r.dirty = !0))
          } else {
            if (Geom.edgeSign(n.Dst, a.Org, n.Org) < 0) return !1
            ;(e.regionAbove(i).dirty = i.dirty = !0),
              t.mesh.splitEdge(n.Sym),
              t.mesh.splice(a.Oprev, n)
          }
          return !0
        }),
        (e.checkForLeftSplice = function (t, i) {
          var r,
            n = e.regionBelow(i),
            a = i.eUp,
            o = n.eUp
          if (
            (assert(!Geom.vertEq(a.Dst, o.Dst)), Geom.vertLeq(a.Dst, o.Dst))
          ) {
            if (Geom.edgeSign(a.Dst, o.Dst, a.Org) < 0) return !1
            ;(e.regionAbove(i).dirty = i.dirty = !0),
              (r = t.mesh.splitEdge(a)),
              t.mesh.splice(o.Sym, r),
              (r.Lface.inside = i.inside)
          } else {
            if (Geom.edgeSign(o.Dst, a.Dst, o.Org) > 0) return !1
            ;(i.dirty = n.dirty = !0),
              (r = t.mesh.splitEdge(o)),
              t.mesh.splice(a.Lnext, o.Sym),
              (r.Rface.inside = i.inside)
          }
          return !0
        }),
        (e.checkForIntersect = function (t, i) {
          var r,
            n,
            a = e.regionBelow(i),
            o = i.eUp,
            s = a.eUp,
            l = o.Org,
            c = s.Org,
            h = o.Dst,
            u = s.Dst,
            d = new TESSvertex()
          if (
            (assert(!Geom.vertEq(u, h)),
            assert(Geom.edgeSign(h, t.event, l) <= 0),
            assert(Geom.edgeSign(u, t.event, c) >= 0),
            assert(l !== t.event && c !== t.event),
            assert(!i.fixUpperEdge && !a.fixUpperEdge),
            l === c)
          )
            return !1
          if (Math.min(l.t, h.t) > Math.max(c.t, u.t)) return !1
          if (Geom.vertLeq(l, c)) {
            if (Geom.edgeSign(u, l, c) > 0) return !1
          } else if (Geom.edgeSign(h, c, l) < 0) return !1
          return (
            e.debugEvent(t),
            Geom.intersect(h, l, u, c, d),
            assert(Math.min(l.t, h.t) <= d.t),
            assert(d.t <= Math.max(c.t, u.t)),
            assert(Math.min(u.s, h.s) <= d.s),
            assert(d.s <= Math.max(c.s, l.s)),
            Geom.vertLeq(d, t.event) && ((d.s = t.event.s), (d.t = t.event.t)),
            (r = Geom.vertLeq(l, c) ? l : c),
            Geom.vertLeq(r, d) && ((d.s = r.s), (d.t = r.t)),
            Geom.vertEq(d, l) || Geom.vertEq(d, c)
              ? (e.checkForRightSplice(t, i), !1)
              : (!Geom.vertEq(h, t.event) &&
                  Geom.edgeSign(h, t.event, d) >= 0) ||
                (!Geom.vertEq(u, t.event) && Geom.edgeSign(u, t.event, d) <= 0)
              ? u === t.event
                ? (t.mesh.splitEdge(o.Sym),
                  t.mesh.splice(s.Sym, o),
                  (i = e.topLeftRegion(t, i)),
                  (o = e.regionBelow(i).eUp),
                  e.finishLeftRegions(t, e.regionBelow(i), a),
                  e.addRightEdges(t, i, o.Oprev, o, o, !0),
                  !0)
                : h === t.event
                ? (t.mesh.splitEdge(s.Sym),
                  t.mesh.splice(o.Lnext, s.Oprev),
                  (a = i),
                  (i = e.topRightRegion(i)),
                  (n = e.regionBelow(i).eUp.Rprev),
                  (a.eUp = s.Oprev),
                  (s = e.finishLeftRegions(t, a, null)),
                  e.addRightEdges(t, i, s.Onext, o.Rprev, n, !0),
                  !0)
                : (Geom.edgeSign(h, t.event, d) >= 0 &&
                    ((e.regionAbove(i).dirty = i.dirty = !0),
                    t.mesh.splitEdge(o.Sym),
                    (o.Org.s = t.event.s),
                    (o.Org.t = t.event.t)),
                  Geom.edgeSign(u, t.event, d) <= 0 &&
                    ((i.dirty = a.dirty = !0),
                    t.mesh.splitEdge(s.Sym),
                    (s.Org.s = t.event.s),
                    (s.Org.t = t.event.t)),
                  !1)
              : (t.mesh.splitEdge(o.Sym),
                t.mesh.splitEdge(s.Sym),
                t.mesh.splice(s.Oprev, o),
                (o.Org.s = d.s),
                (o.Org.t = d.t),
                (o.Org.pqHandle = t.pq.insert(o.Org)),
                e.getIntersectData(t, o.Org, l, h, c, u),
                (e.regionAbove(i).dirty = i.dirty = a.dirty = !0),
                !1)
          )
        }),
        (e.walkDirtyRegions = function (t, i) {
          for (var r, n, a = e.regionBelow(i); ; ) {
            for (; a.dirty; ) (i = a), (a = e.regionBelow(a))
            if (
              !i.dirty &&
              ((a = i), null === (i = e.regionAbove(i)) || !i.dirty)
            )
              return
            if (
              ((i.dirty = !1),
              (r = i.eUp),
              (n = a.eUp),
              r.Dst !== n.Dst &&
                e.checkForLeftSplice(t, i) &&
                (a.fixUpperEdge
                  ? (e.deleteRegion(t, a),
                    t.mesh.delete(n),
                    (n = (a = e.regionBelow(i)).eUp))
                  : i.fixUpperEdge &&
                    (e.deleteRegion(t, i),
                    t.mesh.delete(r),
                    (r = (i = e.regionAbove(a)).eUp))),
              r.Org !== n.Org)
            )
              if (
                r.Dst === n.Dst ||
                i.fixUpperEdge ||
                a.fixUpperEdge ||
                (r.Dst !== t.event && n.Dst !== t.event)
              )
                e.checkForRightSplice(t, i)
              else if (e.checkForIntersect(t, i)) return
            r.Org === n.Org &&
              r.Dst === n.Dst &&
              (e.addWinding(n, r),
              e.deleteRegion(t, i),
              t.mesh.delete(r),
              (i = e.regionAbove(a)))
          }
        }),
        (e.connectRightVertex = function (t, i, r) {
          var n,
            a = r.Onext,
            o = e.regionBelow(i),
            s = i.eUp,
            l = o.eUp,
            c = !1
          s.Dst !== l.Dst && e.checkForIntersect(t, i),
            Geom.vertEq(s.Org, t.event) &&
              (t.mesh.splice(a.Oprev, s),
              (i = e.topLeftRegion(t, i)),
              (a = e.regionBelow(i).eUp),
              e.finishLeftRegions(t, e.regionBelow(i), o),
              (c = !0)),
            Geom.vertEq(l.Org, t.event) &&
              (t.mesh.splice(r, l.Oprev),
              (r = e.finishLeftRegions(t, o, null)),
              (c = !0)),
            c
              ? e.addRightEdges(t, i, r.Onext, a, a, !0)
              : ((n = Geom.vertLeq(l.Org, s.Org) ? l.Oprev : s),
                (n = t.mesh.connect(r.Lprev, n)),
                e.addRightEdges(t, i, n, n.Onext, n.Onext, !1),
                (n.Sym.activeRegion.fixUpperEdge = !0),
                e.walkDirtyRegions(t, i))
        }),
        (e.connectLeftDegenerate = function (t, i, r) {
          var n, a, o, s, l
          return (
            (n = i.eUp),
            Geom.vertEq(n.Org, r)
              ? (assert(!1), void e.spliceMergeVertices(t, n, r.anEdge))
              : Geom.vertEq(n.Dst, r)
              ? (assert(!1),
                (i = e.topRightRegion(i)),
                (a = s = (o = (l = e.regionBelow(i)).eUp.Sym).Onext),
                l.fixUpperEdge &&
                  (assert(a !== o),
                  e.deleteRegion(t, l),
                  t.mesh.delete(o),
                  (o = a.Oprev)),
                t.mesh.splice(r.anEdge, o),
                Geom.edgeGoesLeft(a) || (a = null),
                void e.addRightEdges(t, i, o.Onext, s, a, !0))
              : (t.mesh.splitEdge(n.Sym),
                i.fixUpperEdge &&
                  (t.mesh.delete(n.Onext), (i.fixUpperEdge = !1)),
                t.mesh.splice(r.anEdge, n),
                void e.sweepEvent(t, r))
          )
        }),
        (e.connectLeftVertex = function (t, i) {
          var r,
            n,
            a,
            o,
            s,
            l,
            c = new ActiveRegion()
          if (
            ((c.eUp = i.anEdge.Sym),
            (r = t.dict.search(c).key),
            (n = e.regionBelow(r)))
          )
            if (
              ((o = r.eUp), (s = n.eUp), 0 !== Geom.edgeSign(o.Dst, i, o.Org))
            )
              if (
                ((a = Geom.vertLeq(s.Dst, o.Dst) ? r : n),
                r.inside || a.fixUpperEdge)
              ) {
                if (a === r) l = t.mesh.connect(i.anEdge.Sym, o.Lnext)
                else l = t.mesh.connect(s.Dnext, i.anEdge).Sym
                a.fixUpperEdge
                  ? e.fixUpperEdge(t, a, l)
                  : e.computeWinding(t, e.addRegionBelow(t, r, l)),
                  e.sweepEvent(t, i)
              } else e.addRightEdges(t, r, i.anEdge, i.anEdge, null, !0)
            else e.connectLeftDegenerate(t, r, i)
        }),
        (e.sweepEvent = function (t, i) {
          ;(t.event = i), e.debugEvent(t)
          for (var r = i.anEdge; null === r.activeRegion; )
            if ((r = r.Onext) === i.anEdge)
              return void e.connectLeftVertex(t, i)
          var n = e.topLeftRegion(t, r.activeRegion)
          assert(null !== n)
          var a = e.regionBelow(n),
            o = a.eUp,
            s = e.finishLeftRegions(t, a, null)
          s.Onext === o
            ? e.connectRightVertex(t, n, s)
            : e.addRightEdges(t, n, s.Onext, o, o, !0)
        }),
        (e.addSentinel = function (e, t, i, r) {
          var n = new ActiveRegion(),
            a = e.mesh.makeEdge()
          ;(a.Org.s = i),
            (a.Org.t = r),
            (a.Dst.s = t),
            (a.Dst.t = r),
            (e.event = a.Dst),
            (n.eUp = a),
            (n.windingNumber = 0),
            (n.inside = !1),
            (n.fixUpperEdge = !1),
            (n.sentinel = !0),
            (n.dirty = !1),
            (n.nodeUp = e.dict.insert(n))
        }),
        (e.initEdgeDict = function (t) {
          t.dict = new Dict(t, e.edgeLeq)
          var i = t.bmax[0] - t.bmin[0],
            r = t.bmax[1] - t.bmin[1],
            n = t.bmin[0] - i,
            a = t.bmax[0] + i,
            o = t.bmin[1] - r,
            s = t.bmax[1] + r
          e.addSentinel(t, n, a, o), e.addSentinel(t, n, a, s)
        }),
        (e.doneEdgeDict = function (t) {
          for (var i, r = 0; null !== (i = t.dict.min().key); )
            i.sentinel || (assert(i.fixUpperEdge), assert(1 == ++r)),
              assert(0 === i.windingNumber),
              e.deleteRegion(t, i)
        }),
        (e.removeDegenerateEdges = function (t) {
          var i,
            r,
            n,
            a = t.mesh.eHead
          for (i = a.next; i !== a; i = r)
            (r = i.next),
              (n = i.Lnext),
              Geom.vertEq(i.Org, i.Dst) &&
                i.Lnext.Lnext !== i &&
                (e.spliceMergeVertices(t, n, i),
                t.mesh.delete(i),
                (n = (i = n).Lnext)),
              n.Lnext === i &&
                (n !== i &&
                  ((n !== r && n !== r.Sym) || (r = r.next), t.mesh.delete(n)),
                (i !== r && i !== r.Sym) || (r = r.next),
                t.mesh.delete(i))
        }),
        (e.initPriorityQ = function (e) {
          var t,
            i,
            r,
            n = 0
          for (i = (r = e.mesh.vHead).next; i !== r; i = i.next) n++
          for (
            n += 8,
              t = e.pq = new PriorityQ(n, Geom.vertLeq),
              i = (r = e.mesh.vHead).next;
            i !== r;
            i = i.next
          )
            i.pqHandle = t.insert(i)
          return i === r && (t.init(), !0)
        }),
        (e.donePriorityQ = function (e) {
          e.pq = null
        }),
        (e.removeDegenerateFaces = function (t, i) {
          var r, n, a
          for (r = i.fHead.next; r !== i.fHead; r = n)
            (n = r.next),
              assert((a = r.anEdge).Lnext !== a),
              a.Lnext.Lnext === a &&
                (e.addWinding(a.Onext, a), t.mesh.delete(a))
          return !0
        }),
        (e.computeInterior = function (t, i) {
          var r, n
          if (
            (void 0 === i && (i = !0),
            e.removeDegenerateEdges(t),
            !e.initPriorityQ(t))
          )
            return !1
          for (e.initEdgeDict(t); null !== (r = t.pq.extractMin()); ) {
            for (; null !== (n = t.pq.min()) && Geom.vertEq(n, r); )
              (n = t.pq.extractMin()),
                e.spliceMergeVertices(t, r.anEdge, n.anEdge)
            e.sweepEvent(t, r)
          }
          return (
            (t.event = t.dict.min().key.eUp.Org),
            e.debugEvent(t),
            e.doneEdgeDict(t),
            e.donePriorityQ(t),
            !!e.removeDegenerateFaces(t, t.mesh) && (i && t.mesh.check(), !0)
          )
        }),
        e
      )
    })(),
    Tesselator = (function () {
      function e() {
        ;(this.mesh = new TESSmesh()),
          (this.normal = [0, 0, 0]),
          (this.sUnit = [0, 0, 0]),
          (this.tUnit = [0, 0, 0]),
          (this.bmin = [0, 0]),
          (this.bmax = [0, 0]),
          (this.windingRule = WINDING.ODD),
          (this.dict = null),
          (this.pq = null),
          (this.event = null),
          (this.vertexIndexCounter = 0),
          (this.vertices = []),
          (this.vertexIndices = []),
          (this.vertexCount = 0),
          (this.elements = []),
          (this.elementCount = 0)
      }
      return (
        (e.prototype.dot_ = function (e, t) {
          return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
        }),
        (e.prototype.normalize_ = function (e) {
          var t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
          if (!t) throw 'Zero-size vector!'
          ;(t = Math.sqrt(t)), (e[0] /= t), (e[1] /= t), (e[2] /= t)
        }),
        (e.prototype.longAxis_ = function (e) {
          var t = 0
          return (
            Math.abs(e[1]) > Math.abs(e[0]) && (t = 1),
            Math.abs(e[2]) > Math.abs(e[t]) && (t = 2),
            t
          )
        }),
        (e.prototype.computeNormal_ = function (e) {
          var t,
            i,
            r,
            n,
            a,
            o,
            s = [0, 0, 0],
            l = [0, 0, 0],
            c = [0, 0, 0],
            h = [0, 0, 0],
            u = [0, 0, 0],
            d = [null, null, null],
            f = [null, null, null],
            p = this.mesh.vHead
          t = p.next
          for (var m = 0; m < 3; ++m)
            (n = t.coords[m]), (l[m] = n), (f[m] = t), (s[m] = n), (d[m] = t)
          for (t = p.next; t !== p; t = t.next)
            for (var g = 0; g < 3; ++g)
              (n = t.coords[g]) < l[g] && ((l[g] = n), (f[g] = t)),
                n > s[g] && ((s[g] = n), (d[g] = t))
          var v = 0
          if (
            (s[1] - l[1] > s[0] - l[0] && (v = 1),
            s[2] - l[2] > s[v] - l[v] && (v = 2),
            l[v] >= s[v])
          )
            return (e[0] = 0), (e[1] = 0), void (e[2] = 1)
          for (
            o = 0,
              i = f[v],
              r = d[v],
              c[0] = i.coords[0] - r.coords[0],
              c[1] = i.coords[1] - r.coords[1],
              c[2] = i.coords[2] - r.coords[2],
              t = p.next;
            t !== p;
            t = t.next
          )
            (h[0] = t.coords[0] - r.coords[0]),
              (h[1] = t.coords[1] - r.coords[1]),
              (h[2] = t.coords[2] - r.coords[2]),
              (u[0] = c[1] * h[2] - c[2] * h[1]),
              (u[1] = c[2] * h[0] - c[0] * h[2]),
              (u[2] = c[0] * h[1] - c[1] * h[0]),
              (a = u[0] * u[0] + u[1] * u[1] + u[2] * u[2]) > o &&
                ((o = a), (e[0] = u[0]), (e[1] = u[1]), (e[2] = u[2]))
          o <= 0 && ((e[0] = e[1] = e[2] = 0), (e[this.longAxis_(c)] = 1))
        }),
        (e.prototype.checkOrientation_ = function () {
          for (
            var e,
              t,
              i = this.mesh.fHead,
              r = this.mesh.vHead,
              n = 0,
              a = i.next;
            a !== i;
            a = a.next
          )
            if (!((t = a.anEdge).winding <= 0))
              do {
                ;(n += (t.Org.s - t.Dst.s) * (t.Org.t + t.Dst.t)), (t = t.Lnext)
              } while (t !== a.anEdge)
          if (n < 0) {
            for (e = r.next; e !== r; e = e.next) e.t = -e.t
            ;(this.tUnit[0] = -this.tUnit[0]),
              (this.tUnit[1] = -this.tUnit[1]),
              (this.tUnit[2] = -this.tUnit[2])
          }
        }),
        (e.prototype.projectPolygon_ = function () {
          var e,
            t,
            i = this.mesh.vHead,
            r = [0, 0, 0],
            n = !1
          ;(r[0] = this.normal[0]),
            (r[1] = this.normal[1]),
            (r[2] = this.normal[2]),
            r[0] || r[1] || r[2] || (this.computeNormal_(r), (n = !0)),
            (e = this.sUnit),
            (t = this.tUnit)
          var a = this.longAxis_(r)
          ;(e[a] = 0),
            (e[(a + 1) % 3] = 1),
            (e[(a + 2) % 3] = 0),
            (t[a] = 0),
            (t[(a + 1) % 3] = 0),
            (t[(a + 2) % 3] = r[a] > 0 ? 1 : -1)
          for (var o = i.next; o !== i; o = o.next)
            (o.s = this.dot_(o.coords, e)), (o.t = this.dot_(o.coords, t))
          n && this.checkOrientation_()
          for (var s = !0, l = i.next; l !== i; l = l.next)
            s
              ? ((this.bmin[0] = this.bmax[0] = l.s),
                (this.bmin[1] = this.bmax[1] = l.t),
                (s = !1))
              : (l.s < this.bmin[0] && (this.bmin[0] = l.s),
                l.s > this.bmax[0] && (this.bmax[0] = l.s),
                l.t < this.bmin[1] && (this.bmin[1] = l.t),
                l.t > this.bmax[1] && (this.bmax[1] = l.t))
        }),
        (e.prototype.addWinding_ = function (e, t) {
          ;(e.winding += t.winding), (e.Sym.winding += t.Sym.winding)
        }),
        (e.prototype.tessellateMonoRegion_ = function (e, t) {
          var i, r
          if ((i = t.anEdge).Lnext === i || i.Lnext.Lnext === i)
            throw 'Mono region invalid'
          for (; Geom.vertLeq(i.Dst, i.Org); i = i.Lprev);
          for (; Geom.vertLeq(i.Org, i.Dst); i = i.Lnext);
          r = i.Lprev
          for (; i.Lnext !== r; )
            if (Geom.vertLeq(i.Dst, r.Org)) {
              for (
                ;
                r.Lnext !== i &&
                (Geom.edgeGoesLeft(r.Lnext) ||
                  Geom.edgeSign(r.Org, r.Dst, r.Lnext.Dst) <= 0);

              )
                r = e.connect(r.Lnext, r).Sym
              r = r.Lprev
            } else {
              for (
                ;
                r.Lnext !== i &&
                (Geom.edgeGoesRight(i.Lprev) ||
                  Geom.edgeSign(i.Dst, i.Org, i.Lprev.Org) >= 0);

              )
                i = e.connect(i, i.Lprev).Sym
              i = i.Lnext
            }
          if (r.Lnext === i) throw 'Mono region invalid'
          for (; r.Lnext.Lnext !== i; ) r = e.connect(r.Lnext, r).Sym
          return !0
        }),
        (e.prototype.tessellateInterior_ = function (e) {
          for (var t, i = e.fHead.next; i !== e.fHead; i = t)
            if (((t = i.next), i.inside && !this.tessellateMonoRegion_(e, i)))
              return !1
          return !0
        }),
        (e.prototype.discardExterior_ = function (e) {
          for (var t, i = e.fHead.next; i !== e.fHead; i = t)
            (t = i.next), i.inside || e.zapFace(i)
        }),
        (e.prototype.setWindingNumber_ = function (e, t, i) {
          for (var r, n = e.eHead.next; n !== e.eHead; n = r)
            (r = n.next),
              n.Rface.inside !== n.Lface.inside
                ? (n.winding = n.Lface.inside ? t : -t)
                : i
                ? e.delete(n)
                : (n.winding = 0)
        }),
        (e.prototype.getNeighbourFace_ = function (e) {
          return e.Rface && e.Rface.inside ? e.Rface.n : -1
        }),
        (e.prototype.outputPolymesh_ = function (e, t, i, r) {
          var n,
            a,
            o = 0,
            s = 0
          i > 3 && e.mergeConvexFaces(i)
          for (var l = e.vHead.next; l !== e.vHead; l = l.next) l.n = -1
          for (var c = e.fHead.next; c !== e.fHead; c = c.next)
            if (((c.n = -1), c.inside)) {
              ;(n = c.anEdge), (a = 0)
              do {
                ;-1 === (l = n.Org).n && ((l.n = s), s++), a++, (n = n.Lnext)
              } while (n !== c.anEdge)
              if (a > i) throw 'Face vertex greater that support polygon'
              ;(c.n = o), ++o
            }
          ;(this.elementCount = o),
            t === ELEMENT.CONNECTED_POLYGONS && (o *= 2),
            (this.elements = []),
            (this.elements.length = o * i),
            (this.vertexCount = s),
            (this.vertices = []),
            (this.vertices.length = s * r),
            (this.vertexIndices = []),
            (this.vertexIndices.length = s)
          for (l = e.vHead.next; l !== e.vHead; l = l.next)
            if (-1 !== l.n) {
              var h = l.n * r
              ;(this.vertices[h + 0] = l.coords[0]),
                (this.vertices[h + 1] = l.coords[1]),
                r > 2 && (this.vertices[h + 2] = l.coords[2]),
                (this.vertexIndices[l.n] = l.idx)
            }
          var u = 0
          for (c = e.fHead.next; c !== e.fHead; c = c.next)
            if (c.inside) {
              ;(n = c.anEdge), (a = 0)
              do {
                l = n.Org
                ;(this.elements[u++] = l.n), a++, (n = n.Lnext)
              } while (n !== c.anEdge)
              for (var d = a; d < i; ++d) this.elements[u++] = -1
              if (t === ELEMENT.CONNECTED_POLYGONS) {
                n = c.anEdge
                do {
                  ;(this.elements[u++] = this.getNeighbourFace_(n)),
                    (n = n.Lnext)
                } while (n !== c.anEdge)
                for (var f = a; f < i; ++f) this.elements[u++] = -1
              }
            }
        }),
        (e.prototype.outputContours_ = function (e, t) {
          var i,
            r,
            n = 0,
            a = 0
          ;(this.vertexCount = 0), (this.elementCount = 0)
          for (var o = e.fHead.next; o !== e.fHead; o = o.next)
            if (o.inside) {
              r = i = o.anEdge
              do {
                this.vertexCount++, (i = i.Lnext)
              } while (i !== r)
              this.elementCount++
            }
          ;(this.elements = []),
            (this.elements.length = 2 * this.elementCount),
            (this.vertices = []),
            (this.vertices.length = this.vertexCount * t),
            (this.vertexIndices = []),
            (this.vertexIndices.length = this.vertexCount)
          var s = 0,
            l = 0,
            c = 0
          n = 0
          for (o = e.fHead.next; o !== e.fHead; o = o.next)
            if (o.inside) {
              ;(a = 0), (r = i = o.anEdge)
              do {
                ;(this.vertices[s++] = i.Org.coords[0]),
                  (this.vertices[s++] = i.Org.coords[1]),
                  t > 2 && (this.vertices[s++] = i.Org.coords[2]),
                  (this.vertexIndices[l++] = i.Org.idx),
                  a++,
                  (i = i.Lnext)
              } while (i !== r)
              ;(this.elements[c++] = n), (this.elements[c++] = a), (n += a)
            }
        }),
        (e.prototype.addContour = function (e, t) {
          null === this.mesh && (this.mesh = new TESSmesh()),
            e < 2 && (e = 2),
            e > 3 && (e = 3)
          for (var i = null, r = 0; r < t.length; r += e)
            null === i
              ? ((i = this.mesh.makeEdge()), this.mesh.splice(i, i.Sym))
              : (this.mesh.splitEdge(i), (i = i.Lnext)),
              (i.Org.coords[0] = t[r + 0]),
              (i.Org.coords[1] = t[r + 1]),
              (i.Org.coords[2] = e > 2 ? t[r + 2] : 0),
              (i.Org.idx = this.vertexIndexCounter++),
              (i.winding = 1),
              (i.Sym.winding = -1)
        }),
        (e.prototype.tesselate = function (e, t, i, r, n, a) {
          if (
            (void 0 === e && (e = WINDING.ODD),
            void 0 === t && (t = ELEMENT.POLYGONS),
            void 0 === a && (a = !0),
            (this.vertices = []),
            (this.elements = []),
            (this.vertexIndices = []),
            (this.vertexIndexCounter = 0),
            n &&
              ((this.normal[0] = n[0]),
              (this.normal[1] = n[1]),
              (this.normal[2] = n[2])),
            (this.windingRule = e),
            r < 2 && (r = 2),
            r > 3 && (r = 3),
            !this.mesh)
          )
            return !1
          this.projectPolygon_(), Sweep.computeInterior(this, a)
          var o = this.mesh
          return (
            t === ELEMENT.BOUNDARY_CONTOURS
              ? this.setWindingNumber_(o, 1, !0)
              : this.tessellateInterior_(o),
            a && o.check(),
            t === ELEMENT.BOUNDARY_CONTOURS
              ? this.outputContours_(o, r)
              : this.outputPolymesh_(o, t, i, r),
            !0
          )
        }),
        e
      )
    })()
  function tesselate(e) {
    var t = e.windingRule,
      i = void 0 === t ? WINDING.ODD : t,
      r = e.elementType,
      n = void 0 === r ? ELEMENT.POLYGONS : r,
      a = e.polySize,
      o = void 0 === a ? 3 : a,
      s = e.vertexSize,
      l = void 0 === s ? 2 : s,
      c = e.normal,
      h = void 0 === c ? [0, 0, 1] : c,
      u = e.contours,
      d = void 0 === u ? [] : u,
      f = e.strict,
      p = void 0 === f || f,
      m = e.debug,
      g = void 0 !== m && m
    if (!d && p) throw new Error("Contours can't be empty")
    if (d) {
      for (var v = new Tesselator(), y = 0; y < d.length; y++)
        v.addContour(l || 2, d[y])
      return (
        v.tesselate(i, n, o, l, h, p),
        {
          vertices: v.vertices,
          vertexIndices: v.vertexIndices,
          vertexCount: v.vertexCount,
          elements: v.elements,
          elementCount: v.elementCount,
          mesh: g ? v.mesh : void 0
        }
      )
    }
  }
  var WINDING_ODD = WINDING.ODD,
    WINDING_NONZERO = WINDING.NONZERO,
    WINDING_POSITIVE = WINDING.POSITIVE,
    WINDING_NEGATIVE = WINDING.NEGATIVE,
    WINDING_ABS_GEQ_TWO = WINDING.ABS_GEQ_TWO,
    POLYGONS = ELEMENT.POLYGONS,
    CONNECTED_POLYGONS = ELEMENT.CONNECTED_POLYGONS,
    BOUNDARY_CONTOURS = ELEMENT.BOUNDARY_CONTOURS,
    VectorSurfaceGeometry = (function (e) {
      function t(t, i, r, n) {
        void 0 === i && (i = 12),
          void 0 === r && (r = 100),
          void 0 === n && (n = {})
        var a = e.call(this) || this
        return (
          (a.type = 'ShapeGeometry'),
          (a.windingRule = WINDING.ODD),
          (a.elementType = ELEMENT.POLYGONS),
          (a.polySize = 3),
          (a.vertexSize = 2),
          (a.strict = !0),
          (a._drawCount = 0),
          (a._shape = t),
          (a._curveSegments = i),
          (a._maxCount = r),
          (a._maxDrawCount = 3 * r),
          (a._triangulationOptions = Object.assign(
            {
              windingRule: WINDING.ODD,
              elementType: ELEMENT.POLYGONS,
              polySize: 3,
              vertexSize: 2,
              strict: !0
            },
            n
          )),
          (a._positionAttribute = new THREE.BufferAttribute(
            new Float32Array(3 * r),
            3
          )),
          (a._normalAttribute = new THREE.BufferAttribute(
            new Float32Array(3 * r),
            3
          )),
          (a._uvAttribute = new THREE.BufferAttribute(
            new Float32Array(2 * r),
            2
          )),
          (a._indexAttribute = new THREE.BufferAttribute(
            new Uint32Array(3 * r),
            1
          )),
          a.setAttribute('position', a._positionAttribute),
          a.setAttribute('normal', a._normalAttribute),
          a.setAttribute('uv', a._uvAttribute),
          a.setIndex(a._indexAttribute),
          a.updateFromShape(),
          a
        )
      }
      return (
        __extends(t, e),
        (t.prototype.copy = function (t) {
          return (
            (this._drawCount = t.drawCount),
            (this._maxDrawCount = t._maxDrawCount),
            (this._maxCount = t.maxCount),
            e.prototype.copy.call(this, t)
          )
        }),
        Object.defineProperty(t.prototype, 'curveSegments', {
          get: function () {
            return this._curveSegments
          },
          set: function (e) {
            ;(this._curveSegments = e), this.updateFromShape()
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'drawCount', {
          get: function () {
            return this._drawCount
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'maxDrawCount', {
          get: function () {
            return this._maxDrawCount
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'maxCount', {
          get: function () {
            return this._maxCount
          },
          enumerable: !1,
          configurable: !0
        }),
        (t.prototype.updateFromShape = function () {
          for (
            var e,
              t,
              i,
              r = this._shape.extractShapePointsToFlatArray(
                [],
                this._curveSegments
              ),
              n = !0,
              a = !0,
              o = 0,
              s = r.length / 2;
            o < s;
            o++
          ) {
            var l = r[(p = 2 * o) + 0],
              c = r[p + 1]
            if (
              (void 0 !== t && l !== t && (n = !1),
              void 0 !== i && c !== i && (a = !1),
              (t = l),
              (i = c),
              !n && !a)
            )
              break
          }
          if (
            (n ||
              a ||
              (e = tesselate({
                contours: [r],
                windingRule: this._triangulationOptions.windingRule,
                elementType: this._triangulationOptions.elementType,
                polySize: this._triangulationOptions.polySize,
                vertexSize: this._triangulationOptions.vertexSize,
                strict: this._triangulationOptions.strict
              })),
            e)
          ) {
            this._drawCount = 0
            var h = 1 / 0,
              u = -1 / 0,
              d = 1 / 0,
              f = -1 / 0
            for (o = 0, s = e.vertexCount; o < s; o++) {
              var p = 2 * o
              ;(l = e.vertices[p + 0]) < h && (h = l),
                l > u && (u = l),
                (c = e.vertices[p + 1]) < d && (d = c),
                c > f && (f = c)
            }
            var m = u - h,
              g = f - d
            for (o = 0, s = e.vertexCount; o < s; o++) {
              p = 2 * o
              var v = ((l = e.vertices[p + 0]) - h) / m,
                y = ((c = e.vertices[p + 1]) - d) / g
              this._positionAttribute.setXYZ(o, l, c, 0),
                this._normalAttribute.setXYZ(o, 0, 0, 1),
                this._uvAttribute.setXY(o, v, y)
            }
            for (o = 0, s = e.elementCount; o < s; o++) {
              var E = 3 * o,
                A = e.elements[E + 0],
                x = e.elements[E + 1],
                T = e.elements[E + 2]
              this._indexAttribute.setX(E + 0, A),
                this._indexAttribute.setX(E + 1, x),
                this._indexAttribute.setX(E + 2, T),
                (this._drawCount += 3)
            }
            ;(this._positionAttribute.needsUpdate = !0),
              (this._normalAttribute.needsUpdate = !0),
              (this._uvAttribute.needsUpdate = !0),
              (this._indexAttribute.needsUpdate = !0),
              this.setDrawRange(0, this._drawCount)
          }
          return this._drawCount > this._maxDrawCount
        }),
        t
      )
    })(THREE.BufferGeometry),
    isCW = function (e) {
      for (var t = 0, i = e.length / 2, r = i - 1, n = 0; n < i; r = n++)
        t += e[2 * r + 0] * e[2 * n + 1] - e[2 * n + 0] * e[2 * r + 1]
      return t < 0
    },
    VectorExtrusionGeometry = (function (e) {
      function t(t, i, r) {
        var n
        void 0 === r && (r = 12)
        var a = e.call(this) || this
        ;(a.type = 'ShapeGeometry'),
          (a._vertCount = 0),
          (a.vertCache = {}),
          (a._shape = t),
          (a._depth = i)
        var o = a._shape.extractShapePointsToFlatArray([], r),
          s = tesselate({
            windingRule: WINDING.ODD,
            elementType: ELEMENT.POLYGONS,
            polySize: 3,
            vertexSize: 2,
            strict: !0,
            contours: [o]
          })
        if (!s) throw new Error('error generating geometry')
        for (
          var l = 1 / 0,
            c = -1 / 0,
            h = 1 / 0,
            u = -1 / 0,
            d = 0,
            f = s.vertexCount;
          d < f;
          d++
        ) {
          var p = 2 * d
          ;(y = s.vertices[p + 0]) < l && (l = y),
            y > c && (c = y),
            (E = s.vertices[p + 1]) < h && (h = E),
            E > u && (u = E)
        }
        ;(a._minX = l), (a._minY = h), (a._width = c - l), (a._height = u - h)
        var m = 2 * s.vertexCount + 4 * s.vertexCount + 4 * s.vertexCount
        ;(a._positions = new Float32Array(3 * m)),
          (a._normals = new Float32Array(3 * m)),
          (a._uvs = new Float32Array(2 * m)),
          (a._indices = new Uint32Array(3 * m))
        var g = 0,
          v = []
        for (d = 0, f = s.vertexCount; d < f; d++) {
          var y = s.vertices[2 * d + 0],
            E = s.vertices[2 * d + 1],
            A = 3 * (a._vertCount + 0),
            x = 3 * (a._vertCount + 1),
            T = 2 * (a._vertCount + 0),
            w = 2 * (a._vertCount + 1)
          ;(a._positions[A + 0] = y),
            (a._positions[A + 1] = E),
            (a._positions[A + 2] = i),
            (a._normals[A + 0] = 0),
            (a._normals[A + 1] = 0),
            (a._normals[A + 2] = 1),
            (a._uvs[T + 0] = (y - l) / a._width),
            (a._uvs[T + 1] = (E - h) / a._height),
            (a._positions[x + 0] = y),
            (a._positions[x + 1] = E),
            (a._positions[x + 2] = 0),
            (a._normals[x + 0] = 0),
            (a._normals[x + 1] = 0),
            (a._normals[x + 2] = -1),
            (a._uvs[w + 0] = (y - l) / a._width),
            (a._uvs[w + 1] = (E - h) / a._height),
            (v[d] = a._vertCount),
            (a._vertCount += 2)
        }
        for (d = 0, f = s.elementCount; d < f; d++) {
          var b = 3 * d,
            S = s.elements[b + 0],
            C = s.elements[b + 1],
            _ = s.elements[b + 2]
          ;(a._indices[g + 0] = v[S] + 0),
            (a._indices[g + 1] = v[C] + 0),
            (a._indices[g + 2] = v[_] + 0),
            (a._indices[g + 3] = v[_] + 1),
            (a._indices[g + 4] = v[C] + 1),
            (a._indices[g + 5] = v[S] + 1),
            (g += 6)
        }
        var D = tesselate({
          windingRule: WINDING.ODD,
          elementType: ELEMENT.BOUNDARY_CONTOURS,
          vertexSize: 2,
          strict: !0,
          contours: [o]
        })
        if (!D) throw new Error('error generating geometry')
        var O = !1
        O = 1 === D.elementCount ? !isCW(o) : D.elementCount % 2 == 1
        for (d = 0, f = D.elementCount; d < f; d++) {
          p = 2 * d
          var R = D.elements[p + 0],
            M = D.elements[p + 1],
            L = R + M,
            B = L - 2,
            P = L - 1,
            H = R,
            I = R + 1
          do {
            var N = a.buildVert(D, [B, P, H], 'pre', O),
              F = a.buildVert(D, [P, H, I], 'post', O)
            ;(a._indices[g + 0] = F.bottom),
              (a._indices[g + 1] = F.top),
              (a._indices[g + 2] = N.bottom),
              (a._indices[g + 3] = F.top),
              (a._indices[g + 4] = N.top),
              (a._indices[g + 5] = N.bottom),
              (g += 6),
              (B = (n = __read([P, H, I, I + 1], 4))[0]),
              (P = n[1]),
              (H = n[2]),
              (I = n[3]) >= L && (I -= M)
          } while (H !== R)
          O = !O
        }
        var z = new THREE.BufferAttribute(
            a._positions.slice(0, 3 * a._vertCount),
            3
          ),
          U = new THREE.BufferAttribute(
            a._normals.slice(0, 3 * a._vertCount),
            3
          ),
          G = new THREE.BufferAttribute(a._uvs.slice(0, 2 * a._vertCount), 2),
          V = new THREE.BufferAttribute(a._indices.slice(0, g), 1)
        return (
          (z.needsUpdate = !0),
          (U.needsUpdate = !0),
          (G.needsUpdate = !0),
          (V.needsUpdate = !0),
          a.setAttribute('position', z),
          a.setAttribute('normal', U),
          a.setAttribute('uv', G),
          a.setIndex(V),
          a
        )
      }
      return (
        __extends(t, e),
        (t.prototype.buildVert = function (e, t, i, r) {
          var n = 1
          r && (t.reverse(), (i = 'pre' === i ? 'post' : 'pre'), (n = -1))
          var a,
            o = __read(t, 3),
            s = o[0],
            l = o[1],
            c = o[2],
            h = e.vertexIndices[l],
            u = e.vertices[2 * l + 0],
            d = e.vertices[2 * l + 1]
          if (h < 0)
            if ('post' === i) {
              var f = e.vertices[2 * s + 0],
                p = e.vertices[2 * s + 1]
              a = new THREE.Vector2(f - u, p - d).normalize()
            } else {
              var m = e.vertices[2 * c + 0],
                g = e.vertices[2 * c + 1]
              a = new THREE.Vector2(u - m, d - g).normalize()
            }
          else {
            var v = __read(this._shape.getCurveIndexFromVertexId(h - 1), 2),
              y = v[0],
              E = v[1],
              A = this._shape.curves.length,
              x = E > 0 && E < 1
            0 === E && 'pre' === i
              ? ((y = (y - 1 + A) % A), (E = 1))
              : 1 === E && 'post' === i && ((y = (y + 1) % A), (E = 0))
            var T = 'pre' === i ? 'post' : 'pre',
              w = this.vertCache['' + l + T]
            if (w && x) return w
            if (
              ((a = this._shape.curves[y].getTangent(E)),
              w && a.dot(w.tangent) > 0.9)
            )
              return w
          }
          var b = {
              top: this._vertCount + 0,
              bottom: this._vertCount + 1,
              tangent: a
            },
            S = 3 * (this._vertCount + 0),
            C = 3 * (this._vertCount + 1),
            _ = 2 * (this._vertCount + 0),
            D = 2 * (this._vertCount + 1)
          return (
            (this._positions[S + 0] = u),
            (this._positions[S + 1] = d),
            (this._positions[S + 2] = this._depth),
            (this._normals[S + 0] = -a.y * n),
            (this._normals[S + 1] = a.x * n),
            (this._normals[S + 2] = 0),
            (this._uvs[_ + 0] = (u - this._minX) / this._width),
            (this._uvs[_ + 1] = (d - this._minY) / this._height),
            (this._positions[C + 0] = u),
            (this._positions[C + 1] = d),
            (this._positions[C + 2] = 0),
            (this._normals[C + 0] = -a.y * n),
            (this._normals[C + 1] = a.x * n),
            (this._normals[C + 2] = 0),
            (this._uvs[D + 0] = (u - this._minX) / this._width),
            (this._uvs[D + 1] = (d - this._minY) / this._height),
            (this._vertCount += 2),
            (this.vertCache['' + l + i] = b),
            b
          )
        }),
        t
      )
    })(THREE.BufferGeometry),
    VectorGeometry = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          return this.build(this.normalizeInputs(e))
        }),
        (e.normalizeInputs = function (e, t) {
          var i,
            r,
            n,
            a = Object.assign(
              {},
              null !== (i = null == t ? void 0 : t.parameters) && void 0 !== i
                ? i
                : {
                    width: 100,
                    depth: 0,
                    subdivisions: 40,
                    extrudeDepth: 0,
                    surfaceMaxCount: 100
                  },
              e.parameters
            ),
            o = Math.abs(a.width),
            s = Math.abs(null !== (r = a.height) && void 0 !== r ? r : a.width),
            l =
              null !== (n = e.shape) && void 0 !== n
                ? n
                : null == t
                ? void 0
                : t.shape
          void 0 !== l &&
            (l instanceof VectorShape
              ? (l.width === o && l.height === s) || l.applySize(o, s)
              : (l = new VectorShape(o, s).fromJSON(l)))
          var c = null != l ? l : new VectorShape(o, s)
          return {
            parameters: Object.assign(a, { width: o, height: s }),
            shape: c
          }
        }),
        (e.build = function (e) {
          var t,
            i = e.parameters,
            r = i.extrudeDepth,
            n = i.subdivisions,
            a = i.surfaceMaxCount
          return (
            (t =
              r <= 0
                ? new VectorSurfaceGeometry(e.shape, n, a)
                : new VectorExtrusionGeometry(e.shape, r, n)),
            Object.assign(t, {
              userData: __assign(__assign({}, e), { type: 'VectorGeometry' })
            })
          )
        }),
        e
      )
    })(),
    _sphere = new THREE.Sphere(),
    _inverseMatrix = new THREE.Matrix4(),
    _ray = new THREE.Ray(),
    vStart = new THREE.Vector3(),
    vEnd = new THREE.Vector3(),
    interSegment = new THREE.Vector3(),
    interRay = new THREE.Vector3(),
    VectorLineGeometry = (function (e) {
      function t(t) {
        void 0 === t && (t = 500)
        var i = e.call(this) || this
        return (
          (i._drawCount = 0),
          (i.positions = new THREE.BufferAttribute(new Float32Array(3 * t), 3)),
          i.setAttribute('position', i.positions),
          i
        )
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'drawCount', {
          get: function () {
            return this._drawCount
          },
          set: function (e) {
            ;(this._drawCount = e), this.setDrawRange(0, e)
          },
          enumerable: !1,
          configurable: !0
        }),
        t
      )
    })(THREE.BufferGeometry),
    geometries = {
      ConeGeometry: ConeGeometry,
      CubeGeometry: CubeGeometry,
      CylinderGeometry: CylinderGeometry,
      DodecahedronGeometry: DodecahedronGeometry,
      EllipseGeometry: EllipseGeometry,
      HelixGeometry: HelixGeometry,
      IcosahedronGeometry: IcosahedronGeometry,
      LatheGeometry: LatheGeometry,
      NonParametricGeometry: NonParametricGeometry,
      PolygonGeometry: PolygonGeometry,
      PyramidGeometry: PyramidGeometry,
      RectangleGeometry: RectangleGeometry,
      SphereGeometry: SphereGeometry,
      StarGeometry: StarGeometry,
      TextFrameGeometry: TextFrameGeometry,
      TorusGeometry: TorusGeometry,
      TorusKnotGeometry: TorusKnotGeometry,
      TriangleGeometry: TriangleGeometry,
      VectorGeometry: VectorGeometry
    },
    createGeometry = function (e) {
      return geometries[e.type].create(e)
    },
    isEntity = function (e) {
      return 'isEntity' in e
    },
    isMeshEntity = function (e) {
      return 'isAbstractMesh' in e
    },
    isHelperableEntity = function (e) {
      return 'objectHelper' in e
    },
    _box3 = new THREE.Box3(),
    _center = new THREE.Vector3(),
    _halfSize = new THREE.Vector3(),
    _matrix = new THREE.Matrix4(),
    _traverseSetFromObjectSize = function (e, t, i, r) {
      if (isMeshEntity(e)) {
        var n = e.geometry.userData.parameters,
          a = e.geometry.getAttribute('position')
        _box3.setFromArray(a.array),
          _box3.getCenter(_center),
          e.forceComputeSize
            ? _box3.getSize(_halfSize).multiplyScalar(0.5)
            : _halfSize.set(n.width, n.height, n.depth).multiplyScalar(0.5)
      } else if (isHelperableEntity(e) && !0 === r) {
        a = e.geometryHelper.getAttribute('position')
        _box3.setFromArray(a.array),
          _box3.getCenter(_center),
          _box3.getSize(_halfSize).multiplyScalar(0.5)
      } else _center.setScalar(0), _halfSize.setScalar(0)
      _matrix.copy(t).multiply(e.matrixWorld),
        0 === _halfSize.x && 0 === _halfSize.y && 0 === _halfSize.z
          ? i.push(
              new THREE.Vector3(_center.x, _center.y, _center.z).applyMatrix4(
                _matrix
              )
            )
          : i.push(
              new THREE.Vector3(-_halfSize.x, _halfSize.y, _halfSize.z)
                .add(_center)
                .applyMatrix4(_matrix),
              new THREE.Vector3(-_halfSize.x, -_halfSize.y, _halfSize.z)
                .add(_center)
                .applyMatrix4(_matrix),
              new THREE.Vector3(_halfSize.x, -_halfSize.y, _halfSize.z)
                .add(_center)
                .applyMatrix4(_matrix),
              new THREE.Vector3(_halfSize.x, _halfSize.y, _halfSize.z)
                .add(_center)
                .applyMatrix4(_matrix),
              new THREE.Vector3(-_halfSize.x, _halfSize.y, -_halfSize.z)
                .add(_center)
                .applyMatrix4(_matrix),
              new THREE.Vector3(-_halfSize.x, -_halfSize.y, -_halfSize.z)
                .add(_center)
                .applyMatrix4(_matrix),
              new THREE.Vector3(_halfSize.x, -_halfSize.y, -_halfSize.z)
                .add(_center)
                .applyMatrix4(_matrix),
              new THREE.Vector3(_halfSize.x, _halfSize.y, -_halfSize.z)
                .add(_center)
                .applyMatrix4(_matrix)
            )
    },
    Box3 = (function (e) {
      function t(t, i) {
        var r = e.call(this, t, i) || this
        return (
          (r.transform = new THREE.Matrix4()),
          (r.vertices = []),
          (r.faces = []),
          (r.edges = []),
          (r.centerEdges = []),
          r
        )
      }
      return (
        __extends(t, e),
        (t.prototype.setFromObjectSize = function (e, t) {
          void 0 === t && (t = !1),
            e.updateWorldMatrix(!1, !1),
            this.makeEmpty(),
            (this.transform = e.matrixWorld)
          var i = new THREE.Matrix4().getInverse(e.matrixWorld)
          return this.expandByObjectSize(e, i, t)
        }),
        (t.prototype.expandByObjectSize = function (e, t, i) {
          void 0 === i && (i = !1)
          var r = []
          return (
            !0 === i
              ? e.traverseEntity(function (i) {
                  return _traverseSetFromObjectSize(
                    i,
                    t,
                    r,
                    'enableHelper' in e && e.enableHelper
                  )
                })
              : _traverseSetFromObjectSize(
                  e,
                  t,
                  r,
                  'enableHelper' in e && e.enableHelper
                ),
            this.setFromPoints(r)
          )
        }),
        (t.prototype.getCenter = function (t) {
          return (
            (t = e.prototype.getCenter.call(this, t)).applyMatrix4(
              this.transform
            ),
            t
          )
        }),
        (t.prototype.getPositionToCenter = function (t) {
          return (t = e.prototype.getCenter.call(this, t))
        }),
        (t.prototype.computeVertices = function () {
          this.getSize(_halfSize).multiplyScalar(0.5),
            this.getCenter(_center),
            _matrix.copy(this.transform).setPosition(_center),
            (this.vertices = [
              new THREE.Vector3(
                -_halfSize.x,
                _halfSize.y,
                _halfSize.z
              ).applyMatrix4(_matrix),
              new THREE.Vector3(
                -_halfSize.x,
                -_halfSize.y,
                _halfSize.z
              ).applyMatrix4(_matrix),
              new THREE.Vector3(
                _halfSize.x,
                -_halfSize.y,
                _halfSize.z
              ).applyMatrix4(_matrix),
              new THREE.Vector3(
                _halfSize.x,
                _halfSize.y,
                _halfSize.z
              ).applyMatrix4(_matrix),
              new THREE.Vector3(
                -_halfSize.x,
                _halfSize.y,
                -_halfSize.z
              ).applyMatrix4(_matrix),
              new THREE.Vector3(
                -_halfSize.x,
                -_halfSize.y,
                -_halfSize.z
              ).applyMatrix4(_matrix),
              new THREE.Vector3(
                _halfSize.x,
                -_halfSize.y,
                -_halfSize.z
              ).applyMatrix4(_matrix),
              new THREE.Vector3(
                _halfSize.x,
                _halfSize.y,
                -_halfSize.z
              ).applyMatrix4(_matrix)
            ])
        }),
        (t.prototype.computeEdges = function () {
          this.vertices.length > 0 && this.computeVertices(),
            (this.edges = [
              new THREE.Line3(this.vertices[0], this.vertices[3]),
              new THREE.Line3(this.vertices[1], this.vertices[2]),
              new THREE.Line3(this.vertices[5], this.vertices[6]),
              new THREE.Line3(this.vertices[4], this.vertices[7]),
              new THREE.Line3(this.vertices[0], this.vertices[1]),
              new THREE.Line3(this.vertices[3], this.vertices[2]),
              new THREE.Line3(this.vertices[7], this.vertices[6]),
              new THREE.Line3(this.vertices[4], this.vertices[5]),
              new THREE.Line3(this.vertices[0], this.vertices[4]),
              new THREE.Line3(this.vertices[1], this.vertices[5]),
              new THREE.Line3(this.vertices[2], this.vertices[6]),
              new THREE.Line3(this.vertices[3], this.vertices[7])
            ]),
            (this.centerEdges = this.edges.map(function (e) {
              return e.getCenter(new THREE.Vector3())
            }))
        }),
        (t.prototype.computeFaces = function () {
          this.vertices.length > 0 && this.computeVertices(),
            (this.faces = [
              new THREE.Vector3()
                .copy(this.vertices[0])
                .sub(this.vertices[2])
                .multiplyScalar(0.5)
                .add(this.vertices[2]),
              new THREE.Vector3()
                .copy(this.vertices[7])
                .sub(this.vertices[5])
                .multiplyScalar(0.5)
                .add(this.vertices[5]),
              new THREE.Vector3()
                .copy(this.vertices[4])
                .sub(this.vertices[1])
                .multiplyScalar(0.5)
                .add(this.vertices[1]),
              new THREE.Vector3()
                .copy(this.vertices[3])
                .sub(this.vertices[6])
                .multiplyScalar(0.5)
                .add(this.vertices[6]),
              new THREE.Vector3()
                .copy(this.vertices[4])
                .sub(this.vertices[3])
                .multiplyScalar(0.5)
                .add(this.vertices[3]),
              new THREE.Vector3()
                .copy(this.vertices[1])
                .sub(this.vertices[6])
                .multiplyScalar(0.5)
                .add(this.vertices[6])
            ])
        }),
        t
      )
    })(THREE.Box3)
  function slerp(e, t, i, r) {
    if (0 === r) return i.copy(e)
    if (1 === r) return i.copy(t)
    var n = e.w * t.w + e.x * t.x + e.y * t.y + e.z * t.z
    if (n >= 1) return i.copy(e)
    var a = 1 - n * n
    if (a <= Number.EPSILON) {
      var o = 1 - r
      return (
        (i.w = o * e.w + r * t.w),
        (i.x = o * e.x + r * t.x),
        (i.y = o * e.y + r * t.y),
        (i.z = o * e.z + r * t.z),
        i.normalize(),
        i
      )
    }
    var s = Math.sqrt(a),
      l = Math.atan2(s, n),
      c = Math.sin((1 - r) * l) / s,
      h = Math.sin(r * l) / s
    return (
      (i.w = e.w * c + t.w * h),
      (i.x = e.x * c + t.x * h),
      (i.y = e.y * c + t.y * h),
      (i.z = e.z * c + t.z * h),
      i
    )
  }
  var interactionTargets = new Set(),
    INTERACTION_EASING
  !(function (e) {
    ;(e[(e.LINEAR = 0)] = 'LINEAR'),
      (e[(e.EASE = 1)] = 'EASE'),
      (e[(e.EASE_IN = 2)] = 'EASE_IN'),
      (e[(e.EASE_OUT = 3)] = 'EASE_OUT'),
      (e[(e.EASE_IN_OUT = 4)] = 'EASE_IN_OUT'),
      (e[(e.CUBIC = 5)] = 'CUBIC'),
      (e[(e.SPRING = 6)] = 'SPRING')
  })(INTERACTION_EASING || (INTERACTION_EASING = {}))
  var InteractionTarget = (function () {
      function e() {
        ;(this.easing = INTERACTION_EASING.EASE_IN_OUT),
          (this.duration = 1e3),
          (this.delay = 0),
          (this.cubicControls = [0.5, 0.05, 0.1, 0.3]),
          (this.springParameters = {
            mass: 1,
            stiffness: 80,
            damping: 10,
            velocity: 0
          }),
          (this.repeat = !1),
          (this.cycle = !1),
          (this.rewind = !1)
      }
      return (
        Object.defineProperty(e.prototype, 'sp_mass', {
          get: function () {
            return this.springParameters.mass
          },
          set: function (e) {
            this.springParameters.mass = e
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'sp_stiffness', {
          get: function () {
            return this.springParameters.stiffness
          },
          set: function (e) {
            this.springParameters.stiffness = e
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'sp_damping', {
          get: function () {
            return this.springParameters.damping
          },
          set: function (e) {
            this.springParameters.damping = e
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'sp_velocity', {
          get: function () {
            return this.springParameters.velocity
          },
          set: function (e) {
            this.springParameters.velocity = e
          },
          enumerable: !1,
          configurable: !0
        }),
        (e.prototype.copy = function (e) {
          return (
            (this.easing = e.easing),
            (this.duration = e.duration),
            (this.delay = e.delay),
            (this.cubicControls = __spread(e.cubicControls)),
            (this.springParameters = __assign({}, e.springParameters)),
            (this.repeat = e.repeat),
            (this.cycle = e.cycle),
            (this.rewind = e.rewind),
            this
          )
        }),
        (e.prototype.clone = function () {
          return new e().copy(this)
        }),
        (e.prototype.toJSON = function () {
          var e = {
            easing: this.easing,
            duration: this.duration,
            delay: this.delay,
            cubicControls: this.cubicControls,
            springParameters: __assign({}, this.springParameters)
          }
          return (
            !0 === this.repeat && (e.repeat = !0),
            !0 === this.cycle && (e.cycle = !0),
            !0 === this.rewind && (e.rewind = !0),
            void 0 !== this.object && (e.object = this.object.uuid),
            void 0 !== this.state && (e.state = this.state.uuid),
            e
          )
        }),
        (e.prototype.fromJSON = function (e, t, i) {
          return (
            (this.easing = e.easing),
            (this.duration = e.duration),
            (this.delay = e.delay),
            (this.cubicControls = __spread(e.cubicControls)),
            (this.springParameters.mass = e.springParameters.mass),
            (this.springParameters.stiffness = e.springParameters.stiffness),
            (this.springParameters.damping = e.springParameters.damping),
            (this.springParameters.velocity = e.springParameters.velocity),
            void 0 !== e.repeat && (this.repeat = e.repeat),
            void 0 !== e.cycle && (this.cycle = e.cycle),
            void 0 !== e.rewind && (this.rewind = e.rewind),
            void 0 !== e.object && (this.object = t[e.object]),
            void 0 !== e.state && (this.state = i[e.state]),
            this
          )
        }),
        e
      )
    })(),
    INTERACTION_EVENT
  function isIOS() {
    return (
      [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ].includes(navigator.platform) ||
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    )
  }
  !(function (e) {
    ;(e[(e.MOUSE_DOWN = 0)] = 'MOUSE_DOWN'),
      (e[(e.MOUSE_UP = 1)] = 'MOUSE_UP'),
      (e[(e.MOUSE_HOVER = 2)] = 'MOUSE_HOVER'),
      (e[(e.MOUSE_ENTER = 3)] = 'MOUSE_ENTER'),
      (e[(e.MOUSE_LEAVE = 4)] = 'MOUSE_LEAVE'),
      (e[(e.KEY_DOWN = 5)] = 'KEY_DOWN'),
      (e[(e.KEY_UP = 6)] = 'KEY_UP'),
      (e[(e.START = 7)] = 'START'),
      (e[(e.OPEN_LINK = 8)] = 'OPEN_LINK'),
      (e[(e.LOOK_AT = 9)] = 'LOOK_AT'),
      (e[(e.FOLLOW = 10)] = 'FOLLOW')
  })(INTERACTION_EVENT || (INTERACTION_EVENT = {}))
  var InteractionEvent = (function () {
    function e(e, t) {
      ;(this.targets = []),
        (this.ui = { isCollapsed: !1 }),
        (this._type = e),
        (this.key = t)
    }
    return (
      Object.defineProperty(e.prototype, 'type', {
        get: function () {
          return this._type
        },
        set: function (e) {
          ;(this._type = e),
            e === INTERACTION_EVENT.LOOK_AT
              ? (this.distance = 1e3)
              : (this.distance = void 0),
            e !== INTERACTION_EVENT.KEY_DOWN &&
              e !== INTERACTION_EVENT.KEY_UP &&
              (this.key = void 0)
        },
        enumerable: !1,
        configurable: !0
      }),
      (e.prototype.newTarget = function (e) {
        var t = new InteractionTarget()
        if (((t.object = e), void 0 !== e)) {
          var i = e.interaction.states
          i.length > 0 && (t.state = i[i.length - 1])
        }
        return this.targets.push(t), interactionTargets.add(t), t
      }),
      (e.prototype.addTarget = function (e, t) {
        void 0 === t && (t = 0),
          this.targets.splice(t, 0, e),
          interactionTargets.add(e)
      }),
      (e.prototype.removeTarget = function (e) {
        interactionTargets.delete(this.targets[e]), this.targets.splice(e, 1)
      }),
      (e.prototype.dispatchReverse = function () {
        for (var e = 0, t = this.targets.length; e < t; ++e) {
          var i = this.targets[e]
          void 0 !== i.state &&
            void 0 !== i.object &&
            i.object.interaction.reverse(i)
        }
      }),
      (e.prototype.dispatch = function () {
        if (
          void 0 === this.url ||
          (this._type !== INTERACTION_EVENT.OPEN_LINK &&
            this._type !== INTERACTION_EVENT.MOUSE_DOWN &&
            this._type !== INTERACTION_EVENT.MOUSE_UP &&
            this._type !== INTERACTION_EVENT.KEY_DOWN &&
            this._type !== INTERACTION_EVENT.KEY_UP)
        )
          for (var e = 0, t = this.targets.length; e < t; ++e) {
            var i = this.targets[e]
            void 0 !== i.state &&
              void 0 !== i.object &&
              i.object.interaction.play(i)
          }
        else
          isIOS()
            ? window.location.assign(this.url)
            : window.open(this.url, '_blank')
      }),
      (e.prototype.copy = function (e) {
        return (
          (this._type = e.type),
          (this.key = e.key),
          (this.url = e.url),
          (this.distance = e.distance),
          (this.ui.isCollapsed = e.ui.isCollapsed),
          this
        )
      }),
      (e.prototype.clone = function () {
        return new e().copy(this)
      }),
      (e.prototype.toJSON = function () {
        var e = {
          type: this._type,
          key: this.key,
          ui: { isCollapsed: this.ui.isCollapsed }
        }
        if (
          (void 0 !== this.url && (e.url = this.url),
          void 0 !== this.distance && (e.distance = this.distance),
          this.targets.length > 0)
        ) {
          e.targets = []
          for (var t = 0, i = this.targets.length; t < i; ++t)
            e.targets.push(this.targets[t].toJSON())
        }
        return e
      }),
      (e.prototype.fromJSON = function (e, t, i) {
        if (
          ((this._type = e.type),
          (this.key = e.key),
          (this.targets = []),
          (this.ui = { isCollapsed: e.ui.isCollapsed }),
          (this.url = e.url),
          void 0 !== e.distance && (this.distance = e.distance),
          void 0 !== e.targets)
        )
          for (var r = 0, n = e.targets.length; r < n; ++r)
            this.addTarget(
              new InteractionTarget().fromJSON(e.targets[r], t, i),
              r
            )
        return this
      }),
      e
    )
  })()
  const Layer = function (e, t) {
    ;(this.id = e), (this.next = void 0), this.setValues(t)
  }
  Layer.prototype = {
    constructor: Layer,
    setValues: function (e) {
      if (void 0 === e) return
      const t = this.id
      switch (
        ((this.type = e.type),
        (this.uniforms = {}),
        (this.defines = {}),
        (this.uniforms[`f${t}_alpha`] = {
          value: void 0 !== e.alpha ? e.alpha : 1
        }),
        (this.uniforms[`f${t}_mode`] = {
          value: void 0 !== e.mode ? e.mode : 0
        }),
        (this.varProgram = `\n\t\t\t// SPE: Default uniforms ********************\n\t\t\tuniform float f${t}_alpha;\n\t\t\tuniform int f${t}_mode;\n\t\t\t// ******************************************\n\t\t\t`),
        e.type)
      ) {
        case 'light':
          ;(this.paramNames = ['alpha', 'mode']),
            (this.getProgram = function () {
              return `\n\t\t\t\t\t\t// SPE: Light base layer shader-code *****************************************************************************\n\t\t\t\t\t\t// @todo: instead of == use absolute distance for vector comparison\n\t\t\t\t\t\tif ( outgoingLight != diffuseColor.rgb ) {\n\t\t\t\t\t\t\tfloat lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );\n\t\t\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * f${this.id}_alpha * lightAccu;\n\t\t\t\t\t\t\toutgoingLight = spe_blend( diffuseColor.rgb, outgoingLight, f${this.id}_alpha, f${this.id}_mode );\n\t\t\t\t\t\t}\n\t\t\t\t\t\t// ***************************************************************************************************************\n\t\t\t\t\t`
            }),
            (this.fromJSON = function (e) {
              return (
                (this.uniforms[`f${this.id}_alpha`].value =
                  e.uniforms[`f${this.id}_alpha`].value),
                (this.uniforms[`f${this.id}_mode`].value =
                  e.uniforms[`f${this.id}_mode`].value),
                this
              )
            })
          break
        case 'color':
          ;(this.paramNames = ['alpha', 'mode', 'color']),
            (this.uniforms[`f${t}_color`] = {
              value: e.color ? e.color : new THREE.Color(5855577)
            }),
            (this.varProgram += `\n\t\t\t\t\t// SPE: Color layer uniforms *******\n\t\t\t\t\tuniform vec3 f${t}_color;\n\t\t\t\t\t// *********************************\n\t\t\t\t\t`),
            (this.getProgram = function (e) {
              return `\n\t\t\t\t\t\t// SPE: Color layer shader-code *********************************************************************\n\t\t\t\t\t\tfloat f${this.id}_calpha = f${this.id}_alpha / clamp( f${this.id}_alpha + accumAlpha, 0.00001, 1.0 );\n\t\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * f${this.id}_alpha;\n\t\t\t\t\t\t${e} = spe_blend( ${e}, f${this.id}_color, f${this.id}_calpha, f${this.id}_mode );\n\t\t\t\t\t\t// **************************************************************************************************\n\t\t\t\t\t`
            }),
            (this.fromJSON = function (e) {
              return (
                (this.uniforms[`f${this.id}_alpha`].value =
                  e.uniforms[`f${this.id}_alpha`].value),
                (this.uniforms[`f${this.id}_mode`].value =
                  e.uniforms[`f${this.id}_mode`].value),
                this.uniforms[`f${this.id}_color`].value.set(
                  e.uniforms[`f${this.id}_color`].value
                ),
                this
              )
            })
          break
        case 'texture':
          ;(this.paramNames = ['alpha', 'mode', 'texture', 'crop']),
            (e.texture = e.texture || new THREE.Texture()),
            (this.defines.USE_UV = ''),
            (this.uniforms[`f${t}_texture`] = { value: e.texture }),
            (this.uniforms[`f${t}_mat`] = { value: e.texture.matrix }),
            (this.uniforms[`f${t}_crop`] = { value: e.crop ? e.crop : 0 }),
            (this.varProgram += `\n\t\t\t\t\t// SPE: Texture layer uniforms ******************\n\t\t\t\t\tuniform sampler2D f${t}_texture;\n\t\t\t\t\tuniform mat3 f${t}_mat;\n\t\t\t\t\tuniform float f${t}_crop;\n\t\t\t\t\t// **********************************************\n\t\t\t\t\t`),
            (this.getProgram = function (e) {
              return `\n\t\t\t\t\t\t// SPE: Texture layer shader-code ************************************************************************\n\t\t\t\t\t\tvec2 f${this.id}_vUv = ( f${this.id}_mat * vec3( vUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;\n\t\t\t\t\t\tvec4 f${this.id}_tmp = texture2D( f${this.id}_texture, f${this.id}_vUv );\n\t\t\t\t\t\tvec3 f${this.id}_col = f${this.id}_tmp.rgb;\n\t\t\t\t\t\tfloat f${this.id}_lalpha = f${this.id}_alpha * f${this.id}_tmp.a;\n\t\t\t\t\t\tif ( f${this.id}_crop > 0.5 ) {\n\t\t\t\t\t\t\tif ( f${this.id}_vUv.x < 0.0 || f${this.id}_vUv.x > 1.0 ||\n\t\t\t\t\t\t\t\t f${this.id}_vUv.y < 0.0 || f${this.id}_vUv.y > 1.0 ) \n\t\t\t\t\t\t\t\tf${this.id}_lalpha = 0.;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfloat f${this.id}_calpha =  f${this.id}_lalpha / clamp( f${this.id}_lalpha + accumAlpha, 0.00001, 1.0 );\n\t\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * f${this.id}_lalpha;\n\t\t\t\t\t\t${e} = spe_blend( ${e}, f${this.id}_col, f${this.id}_calpha, f${this.id}_mode );\n\t\t\t\t\t\t// *******************************************************************************************************\n\t\t\t\t\t`
            }),
            (this.fromJSON = function (e, t) {
              let i
              return (
                (this.uniforms[`f${this.id}_alpha`].value =
                  e.uniforms[`f${this.id}_alpha`].value),
                (this.uniforms[`f${this.id}_mode`].value =
                  e.uniforms[`f${this.id}_mode`].value),
                (i = e.uniforms[`f${this.id}_texture`]
                  ? t[e.uniforms[`f${this.id}_texture`].value]
                  : t[e.uniforms[`f${this.id}_tex`].value]),
                (this.uniforms[`f${this.id}_texture`].value = i),
                (this.uniforms[`f${this.id}_mat`].value = i.matrix.fromArray(
                  e.uniforms[`f${this.id}_mat`].value.elements
                )),
                (this.uniforms[`f${this.id}_crop`].value =
                  e.uniforms[`f${this.id}_crop`].value),
                this
              )
            }),
            (this.dispose = function () {
              this.uniforms[`f${this.id}_texture`].value instanceof
                THREE.VideoTexture &&
                this.uniforms[`f${this.id}_texture`].value.image.pause(),
                this.uniforms[`f${this.id}_texture`].value.dispose()
            })
          break
        case 'normal':
          ;(this.paramNames = ['alpha', 'mode', 'cnormal']),
            (this.defines.USE_LAYER_NORMAL = ''),
            (this.uniforms[`f${t}_cnormal`] = {
              value: e.cnormal ? e.cnormal : new THREE.Vector3(1, 1, 1)
            }),
            (this.varProgram += `\n\t\t\t\t\t// SPE: Normal layer uniforms ************\n\t\t\t\t\tuniform vec3 f${t}_cnormal;\n\t\t\t\t\t// ***************************************\n\t\t\t\t\t`),
            (this.getProgram = function (e) {
              return `\n\t\t\t\t\t\t// SPE: Normal layer shader-code *******************************************************************\n\t\t\t\t\t\tvec3 f${this.id}_normal = packNormalToRGB( normal ).rgb;\n\t\t\t\t\t\tf${this.id}_normal *= step( vec3(0.5), f${t}_cnormal );\n\t\t\t\t\t\tfloat f${this.id}_calpha = f${this.id}_alpha / clamp( f${this.id}_alpha + accumAlpha, 0.00001, 1.0 );\n\t\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * f${this.id}_alpha;\n\t\t\t\t\t\t${e} = spe_blend( ${e}, f${this.id}_normal, f${this.id}_calpha, f${this.id}_mode );\n\t\t\t\t\t\t// *************************************************************************************************\n\t\t\t\t\t`
            }),
            (this.fromJSON = function (e) {
              ;(this.uniforms[`f${this.id}_alpha`].value =
                e.uniforms[`f${this.id}_alpha`].value),
                (this.uniforms[`f${this.id}_mode`].value =
                  e.uniforms[`f${this.id}_mode`].value)
              let t = e.uniforms[`f${this.id}_cnormal`].value
              return (
                this.uniforms[`f${this.id}_cnormal`].value.set(t.x, t.y, t.z),
                this
              )
            })
          break
        case 'depth':
          ;(this.paramNames = [
            'alpha',
            'mode',
            'near',
            'far',
            'origin',
            'isVector',
            'colorA',
            'colorB'
          ]),
            (this.defines.USE_LAYER_DEPTH = ''),
            (this.uniforms[`f${t}_near`] = { value: e.near ? e.near : 700 }),
            (this.uniforms[`f${t}_far`] = { value: e.far ? e.far : 1e3 }),
            (this.uniforms[`f${t}_origin`] = {
              value: e.origin ? e.origin : new THREE.Vector3()
            }),
            (this.uniforms[`f${t}_isVector`] = {
              value: e.isVector ? e.isVector : 0
            }),
            (this.uniforms[`f${t}_colorA`] = {
              value: e.colorA ? e.colorA : new THREE.Color()
            }),
            (this.uniforms[`f${t}_colorB`] = {
              value: e.colorB ? e.colorB : new THREE.Color(0, 0, 0)
            }),
            (this.varProgram += `\n\t\t\t\t\t// SPE: Depth layer uniforms ******************************\n\t\t\t\t\tuniform float f${t}_near;\n\t\t\t\t\tuniform float f${t}_far;\n\t\t\t\t\tuniform float f${t}_isVector;\n\t\t\t\t\tuniform vec3 f${t}_origin;\n\t\t\t\t\tuniform vec3 f${t}_colorA;\n\t\t\t\t\tuniform vec3 f${t}_colorB;\n\t\t\t\t\t// ********************************************************\n\t\t\t\t\t`),
            (this.getProgram = function (e) {
              return `\n\t\t\t\t\t\t// SPE: Depth layer shader-code ******************************************************************************\n\t\t\t\t\t\tvec3 base${this.id} = ( f${this.id}_isVector > 0.5 ) ?  f${this.id}_origin : cameraPosition;\n\t\t\t\t\t\tfloat dist${this.id} = length( dWorldPosition.xyz - base${this.id} );\n\n\t\t\t\t\t\tfloat dep${this.id} = ( dist${this.id} - f${this.id}_near ) / ( f${this.id}_far - f${this.id}_near );\n\t\t\t\t\t\tvec3 f${this.id}_depth =  mix( f${this.id}_colorB, f${this.id}_colorA, 1.0 - clamp( dep${this.id}, 0., 1. ) );\n\n\t\t\t\t\t\tfloat f${this.id}_calpha = f${this.id}_alpha / clamp( f${this.id}_alpha + accumAlpha, 0.001, 1.0 );\n\t\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * f${this.id}_alpha;\n\n\t\t\t\t\t\t${e} = spe_blend( ${e}, f${this.id}_depth, f${this.id}_calpha, f${this.id}_mode );\n\t\t\t\t\t\t// ***********************************************************************************************************\n\t\t\t\t\t`
            }),
            (this.fromJSON = function (e) {
              ;(this.uniforms[`f${this.id}_alpha`].value =
                e.uniforms[`f${this.id}_alpha`].value),
                (this.uniforms[`f${this.id}_mode`].value =
                  e.uniforms[`f${this.id}_mode`].value),
                (this.uniforms[`f${this.id}_near`].value =
                  e.uniforms[`f${this.id}_near`].value),
                (this.uniforms[`f${this.id}_far`].value =
                  e.uniforms[`f${this.id}_far`].value),
                (this.uniforms[`f${this.id}_isVector`].value =
                  e.uniforms[`f${this.id}_isVector`].value)
              let t = e.uniforms[`f${this.id}_colorA`].value
              this.uniforms[`f${this.id}_colorA`].value.set(t)
              let i = e.uniforms[`f${this.id}_colorB`].value
              this.uniforms[`f${this.id}_colorB`].value.set(i)
              let r = e.uniforms[`f${this.id}_origin`].value
              return (
                this.uniforms[`f${this.id}_origin`].value.set(r.x, r.y, r.z),
                this
              )
            })
          break
        case 'noise':
          ;(this.paramNames = [
            'alpha',
            'mode',
            'scale',
            'move',
            'distortion',
            'fA',
            'fB',
            'colorA',
            'colorB',
            'colorC',
            'colorD',
            'intA',
            'intB',
            'intC',
            'intD'
          ]),
            (this.defines.NUM_OCTAVES = 5),
            (this.defines.USE_UV = ''),
            (this.defines.USE_LAYER_NOISE = ''),
            (this.uniforms[`f${t}_scale`] = {
              value: e.scale ? e.scale : 2,
              type: 'f'
            }),
            (this.uniforms[`f${t}_move`] = {
              value: e.move ? e.move : 1,
              type: 'f'
            }),
            (this.uniforms[`f${t}_distortion`] = {
              value: e.distortion ? e.distortion : new THREE.Vector2(1, 1),
              type: 'v2'
            }),
            (this.uniforms[`f${t}_fA`] = {
              value: e.fA ? e.fA : new THREE.Vector2(1.7, 9.2),
              type: 'v2'
            }),
            (this.uniforms[`f${t}_fB`] = {
              value: e.fB ? e.fB : new THREE.Vector2(8.3, 2.8),
              type: 'v2'
            }),
            (this.uniforms[`f${t}_colorA`] = {
              value: e.colorA ? e.colorA : new THREE.Color(0.4, 0.4, 0.4),
              type: 'v3'
            }),
            (this.uniforms[`f${t}_colorB`] = {
              value: e.colorB ? e.colorB : new THREE.Color(0.4, 0.4, 0.4),
              type: 'v3'
            }),
            (this.uniforms[`f${t}_colorC`] = {
              value: e.colorC ? e.colorC : new THREE.Color(1, 1, 1),
              type: 'v3'
            }),
            (this.uniforms[`f${t}_colorD`] = {
              value: e.colorD ? e.colorD : new THREE.Color(1, 1, 1),
              type: 'v3'
            }),
            (this.uniforms[`f${t}_intA`] = { value: e.intA ? e.intA : 10 }),
            (this.uniforms[`f${t}_intB`] = { value: e.intB ? e.intB : 10 }),
            (this.uniforms[`f${t}_intC`] = { value: e.intC ? e.intC : 10 }),
            (this.uniforms[`f${t}_intD`] = { value: e.intD ? e.intD : 10 }),
            (this.varProgram += `\n\t\t\t\t\t// SPE: Noise layer uniforms *******************\n\t\t\t\t\tuniform float f${t}_scale;\n\t\t\t\t\tuniform float f${t}_move;\n\t\t\t\t\tuniform vec2 f${t}_fA;\n\t\t\t\t\tuniform vec2 f${t}_fB;\n\t\t\t\t\tuniform vec2 f${t}_distortion;\n\t\t\t\t\tuniform vec3 f${t}_colorA;\n\t\t\t\t\tuniform vec3 f${t}_colorB;\n\t\t\t\t\tuniform vec3 f${t}_colorC;\n\t\t\t\t\tuniform vec3 f${t}_colorD;\n\t\t\t\t\tuniform float f${t}_intA;\n\t\t\t\t\tuniform float f${t}_intB;\n\t\t\t\t\tuniform float f${t}_intC;\n\t\t\t\t\tuniform float f${t}_intD;\n\t\t\t\t\t// *********************************************\n\t\t\t\t`),
            (this.getProgram = function (e) {
              let t = `f${this.id}_`
              return `\n\t\t\t\t\t\t// SPE: Noise layer shader-code **************************************************************\n\t\t\t\t\t\tvec2 ${t}st = vUv * ${t}scale;\n\t\t\t\t\t\tvec3 ${t}color;\n\n\t\t\t\t\t\tvec2 ${t}q = vec2( fbm( ${t}st ), fbm( ${t}st + vec2(1.0) ) );\n\n\t\t\t\t\t\tvec2 ${t}r = vec2( fbm( ${t}st + ${t}distortion * ${t}q + ${t}fA + ${t}move ),\n\t\t\t\t\t\t\t\t\t   \t\t fbm( ${t}st + ${t}distortion * ${t}q + ${t}fB + ${t}move ) );\n\n\t\t\t\t\t\tfloat ${t}f = fbm( ${t}st + ${t}r );\n\n\t\t\t\t\t\t${t}color = mix( ${t}colorA * ${t}intA, ${t}colorB * ${t}intB,\n\t\t\t\t\t\t\t\t\t clamp((${t}f*${t}f)*4.0,0.0,1.0) );\n\n\t\t\t\t\t\t${t}color = mix( ${t}color, ${t}colorC * ${t}intC,\n\t\t\t\t\t\t\t\t\t clamp( length(${t}q), 0.0, 1.0 ) );\n\n\t\t\t\t\t\t${t}color = mix( ${t}color, ${t}colorD * ${t}intD,\n\t\t\t\t\t\t\t\t\t clamp( length(${t}r.x), 0.0, 1.0 ) );\n\n\t\t\t\t\t\tvec3 ${t}noise = clamp( vec3( ${t}f * ${t}color ), 0.0, 1.0 );\n\n\t\t\t\t\t\tfloat ${t}calpha = ${t}alpha / clamp( ${t}alpha + accumAlpha, 0.001, 1.0 );\n\t\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * ${t}alpha;\n\n\t\t\t\t\t\t${e} = spe_blend( ${e}, ${t}noise, ${t}calpha, ${t}mode );\n\t\t\t\t\t\t// *******************************************************************************************\n\t\t\t\t\t`
            }),
            (this.fromJSON = function (e) {
              ;(this.uniforms[`f${this.id}_alpha`].value =
                e.uniforms[`f${this.id}_alpha`].value),
                (this.uniforms[`f${this.id}_mode`].value =
                  e.uniforms[`f${this.id}_mode`].value),
                (this.uniforms[`f${this.id}_scale`].value =
                  e.uniforms[`f${this.id}_scale`].value),
                (this.uniforms[`f${this.id}_move`].value =
                  e.uniforms[`f${this.id}_move`].value),
                (this.uniforms[`f${this.id}_intA`].value =
                  e.uniforms[`f${this.id}_intA`].value),
                (this.uniforms[`f${this.id}_intB`].value =
                  e.uniforms[`f${this.id}_intB`].value),
                (this.uniforms[`f${this.id}_intC`].value =
                  e.uniforms[`f${this.id}_intC`].value),
                (this.uniforms[`f${this.id}_intD`].value =
                  e.uniforms[`f${this.id}_intD`].value)
              let t = e.uniforms[`f${this.id}_colorA`].value
              this.uniforms[`f${this.id}_colorA`].value.set(t)
              let i = e.uniforms[`f${this.id}_colorB`].value
              this.uniforms[`f${this.id}_colorB`].value.set(i)
              let r = e.uniforms[`f${this.id}_colorC`].value
              this.uniforms[`f${this.id}_colorC`].value.set(r)
              let n = e.uniforms[`f${this.id}_colorD`].value
              this.uniforms[`f${this.id}_colorD`].value.set(n)
              let a = e.uniforms[`f${this.id}_distortion`].value
              this.uniforms[`f${this.id}_distortion`].value.set(a.x, a.y)
              let o = e.uniforms[`f${this.id}_fA`].value
              this.uniforms[`f${this.id}_fA`].value.set(o.x, o.y)
              let s = e.uniforms[`f${this.id}_fB`].value
              return this.uniforms[`f${this.id}_fB`].value.set(s.x, s.y), this
            })
          break
        case 'fresnel':
          ;(this.paramNames = [
            'alpha',
            'mode',
            'bias',
            'scale',
            'intensity',
            'factor',
            'color'
          ]),
            (this.defines.USE_LAYER_FRESNEL = ''),
            (this.uniforms[`f${t}_bias`] = { value: e.bias ? e.bias : 0.1 }),
            (this.uniforms[`f${t}_scale`] = { value: e.scale ? e.scale : 1 }),
            (this.uniforms[`f${t}_intensity`] = {
              value: e.intensity ? e.intensity : 2
            }),
            (this.uniforms[`f${t}_factor`] = {
              value: e.factor ? e.factor : 1
            }),
            (this.uniforms[`f${t}_color`] = {
              value: e.color ? e.color : new THREE.Color()
            }),
            (this.varProgram += `\n\t\t\t\t\t// SPE: Fresnel layer uniforms **************************************************\n\t\t\t\t\tuniform float f${t}_bias;\n\t\t\t\t\tuniform float f${t}_scale;\n\t\t\t\t\tuniform float f${t}_intensity;\n\t\t\t\t\tuniform float f${t}_factor;\n\t\t\t\t\tuniform vec3 f${t}_color;\n\t\t\t\t\t// ******************************************************************************\n\t\t\t\t\t`),
            (this.getProgram = function (e) {
              let t = `f${this.id}_`
              return `\n\t\t\t\t\t\t// SPE: Fresnel layer shader-code *******************************************************************************************************************\n\t\t\t\t\t\tfloat ${t}fresnel = ${t}bias + ${t}scale * pow( ${t}factor + dot( normalize( vWorldViewDir ), normalize( vWorldNormal ) ), ${t}intensity );\n\t\t\t\t\t\tfloat ${t}lalpha = clamp( ${t}fresnel, 0.0, 1.0 ) * ${t}alpha;\n\t\t\t\t\t\tfloat ${t}calpha = ${t}lalpha / clamp( ${t}lalpha + accumAlpha, 0.001, 1.0 );\n\t\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * ${t}lalpha;\n\t\t\t\t\t\t${e} = spe_blend( ${e}, ${t}color, ${t}calpha, ${t}mode );\n\t\t\t\t\t\t// **************************************************************************************************************************************************\n\t\t\t\t\t`
            }),
            (this.fromJSON = function (e) {
              ;(this.uniforms[`f${this.id}_alpha`].value =
                e.uniforms[`f${this.id}_alpha`].value),
                (this.uniforms[`f${this.id}_mode`].value =
                  e.uniforms[`f${this.id}_mode`].value),
                (this.uniforms[`f${this.id}_bias`].value =
                  e.uniforms[`f${this.id}_bias`].value),
                (this.uniforms[`f${this.id}_scale`].value =
                  e.uniforms[`f${this.id}_scale`].value),
                (this.uniforms[`f${this.id}_intensity`].value =
                  e.uniforms[`f${this.id}_intensity`].value),
                (this.uniforms[`f${this.id}_factor`].value =
                  e.uniforms[`f${this.id}_factor`].value)
              let t = e.uniforms[`f${this.id}_color`].value
              return this.uniforms[`f${this.id}_color`].value.set(t), this
            })
          break
        case 'gradient':
          let i, r
          ;(this.paramNames = [
            'alpha',
            'mode',
            'gl_type',
            'num',
            'smooth',
            'colors',
            'steps',
            'offset',
            'morph',
            'angle'
          ]),
            (this.defines.USE_UV = ''),
            (this.defines.GRAD_MAX = '10'),
            void 0 === e.colors
              ? ((i = new Array(10)
                  .fill()
                  .map((e) => new THREE.Vector4(0, 0, 0, 1))),
                i[1].set(1, 1, 1, 1))
              : (i = e.colors),
            void 0 === e.steps
              ? ((r = new Array(10).fill(1)), (r[0] = 0))
              : (r = e.steps),
            (this.uniforms[`f${t}_gl_type`] = {
              value: e.gl_type ? e.gl_type : 0
            }),
            (this.uniforms[`f${t}_num`] = { value: e.num ? e.num : 2 }),
            (this.uniforms[`f${t}_smooth`] = { value: !!e.smooth && e.smooth }),
            (this.uniforms[`f${t}_colors`] = { value: i }),
            (this.uniforms[`f${t}_steps`] = { value: r }),
            (this.uniforms[`f${t}_offset`] = {
              value: e.offset ? e.offset : new THREE.Vector2(0, 0)
            }),
            (this.uniforms[`f${t}_morph`] = {
              value: e.morph ? e.morph : new THREE.Vector2(0, 0)
            }),
            (this.uniforms[`f${t}_angle`] = { value: e.angle ? e.angle : 0 }),
            (this.varProgram += `\n\t\t\t\t\t// SPE: Gradient layer uniforms ****************\n\t\t\t\t\tuniform int f${t}_gl_type;\n\t\t\t\t\tuniform int f${t}_num;\n\t\t\t\t\tuniform bool f${t}_smooth;\n\t\t\t\t\tuniform vec4 f${t}_colors[GRAD_MAX];\n\t\t\t\t\tuniform float f${t}_steps[GRAD_MAX];\n\t\t\t\t\tuniform vec2 f${t}_offset;\n\t\t\t\t\tuniform vec2 f${t}_morph;\n\t\t\t\t\tuniform float f${t}_angle;\n\t\t\t\t\t// *********************************************\n\t\t\t\t\t`),
            (this.getProgram = function (e) {
              let t = `f${this.id}_`
              return `\n\t\t\t\t\t\t// SPE: Gradient layer shader-code **************************************************************************\n\t\t\t\t\t\tvec4 ${t}color = ${t}colors[0];\n\n\t\t\t\t\t\tvec2 ${t}m = ${t}morph / vUv.xy;\n\n\t\t\t\t\t\tvec2 ${t}rot = vec2( 0.5 + ${t}m.x, ${t}m.y );\n\n\t\t\t\t\t\tvec2 ${t}dt = vec2(\n\t\t\t\t\t\t\tcos( ${t}angle ) * ${t}rot.x - sin( ${t}angle ) * ${t}rot.y,\n\t\t\t\t\t\t\tsin( ${t}angle ) * ${t}rot.x + cos( ${t}angle ) * ${t}rot.y\n\t\t\t\t\t\t);\n\n\t\t\t\t\t\tvec2 ${t}pt = ( vUv - 0.5 + ${t}offset ) / 2.0 + ${t}dt / 2.0;\n\t\t\t\t\t\tfloat ${t}t = dot( ${t}pt, ${t}dt ) / dot( ${t}dt, ${t}dt );\n\n\t\t\t\t\t\tif ( ${t}gl_type == 1 ) {\n\n\t\t\t\t\t\t\t${t}t = distance (\n\t\t\t\t\t\t\t\t( vUv + ${t}morph ) * 3.0,\n\t\t\t\t\t\t\t\t( vUv + ${t}offset ) + 1.0\n\t\t\t\t\t\t\t) + ${t}angle;\n\n\t\t\t\t\t\t} else if ( ${t}gl_type == 2 ) {\n\n\t\t\t\t\t\t\tfloat ${t}polar = atan(\n\t\t\t\t\t\t\t\tvUv.x + ${t}morph.x - 0.5 + ${t}offset.x,\n\t\t\t\t\t\t\t\tvUv.y + ${t}morph.y - 0.5 + ${t}offset.y\n\t\t\t\t\t\t\t) * -1.0;\n\t\t\t\t\t\t\t${t}t = fract( ( ${t}angle / PI / -2.0 ) + 0.5 * ( ${t}polar / PI ) );\n\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tfloat ${t}p;\n\n\t\t\t\t\t\tfor ( int i = 1; i < GRAD_MAX; i++ ) {\n\n\t\t\t\t\t\t\tif ( i < ${t}num ) {\n\n\t\t\t\t\t\t\t\t${t}p = clamp( ( ${t}t - ${t}steps[i-1] ) / ( ${t}steps[i] - ${t}steps[i-1] ), 0.0, 1.0 );\n\n\t\t\t\t\t\t\t\t${t}color = mix( ${t}color, ${t}colors[i],\n\t\t\t\t\t\t\t\t\t( ${t}smooth ) ? smoothstep( 0.0, 1.0, ${t}p ) : ${t}p\n\t\t\t\t\t\t\t\t);\n\n\t\t\t\t\t\t\t} else {\n\n\t\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tfloat ${t}lalpha = ${t}alpha * ${t}color.a;\n\n\t\t\t\t\t\tfloat ${t}calpha =  ${t}lalpha / clamp( ${t}lalpha + accumAlpha, 0.00001, 1.0 );\n\t\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * ${t}lalpha;\n\n\t\t\t\t\t\t${e} = spe_blend( ${e}, ${t}color.xyz, ${t}calpha, ${t}mode );\n\t\t\t\t\t\t// **********************************************************************************************************\n\t\t\t\t\t`
            }),
            (this.fromJSON = function (e) {
              ;(this.uniforms[`f${this.id}_alpha`].value =
                e.uniforms[`f${this.id}_alpha`].value),
                (this.uniforms[`f${this.id}_mode`].value =
                  e.uniforms[`f${this.id}_mode`].value),
                e.uniforms[`f${this.id}_gl_type`]
                  ? (this.uniforms[`f${this.id}_gl_type`].value =
                      e.uniforms[`f${this.id}_gl_type`].value)
                  : (this.uniforms[`f${this.id}_gl_type`].value =
                      e.uniforms[`f${this.id}_type`].value),
                (this.uniforms[`f${this.id}_num`].value =
                  e.uniforms[`f${this.id}_num`].value),
                (this.uniforms[`f${this.id}_smooth`].value =
                  e.uniforms[`f${this.id}_smooth`].value),
                (this.uniforms[`f${this.id}_angle`].value =
                  e.uniforms[`f${this.id}_angle`].value)
              let i = e.uniforms[`f${this.id}_offset`].value
              this.uniforms[`f${this.id}_offset`].value.set(i.x, i.y)
              let r = e.uniforms[`f${this.id}_morph`].value
              this.uniforms[`f${this.id}_morph`].value.set(r.x, r.y)
              let n = e.uniforms[`f${t}_colors`].value,
                a = this.uniforms[`f${t}_colors`].value
              for (let e = 0; e < n.length; e++) {
                let t = n[e]
                a[e].set(t.x, t.y, t.z, t.w)
              }
              let o = e.uniforms[`f${t}_steps`].value,
                s = this.uniforms[`f${t}_steps`].value
              for (let e = 0; e < o.length; e++) s[e] = o[e]
              return this
            })
          break
        case 'points':
          ;(this.paramNames = [
            'alpha',
            'mode',
            'pl_color',
            'pl_useBack',
            'pl_threshold'
          ]),
            (this.defines.USE_LAYER_POINTS = ''),
            (this.uniforms[`f${t}_pl_color`] = {
              value: e.pl_color ? e.pl_color : new THREE.Color(12237498)
            }),
            (this.uniforms[`f${t}_pl_useBack`] = {
              value: !e.pl_useBack || e.pl_useBack
            }),
            (this.uniforms[`f${t}_pl_threshold`] = {
              value: e.pl_threshold ? e.pl_threshold : 0.9
            }),
            (this.varProgram += `\n\t\t\t\t\t// SPE: Points layer uniforms **************\n\t\t\t\t\tuniform vec3 f${t}_pl_color;\n\t\t\t\t\tuniform bool f${t}_pl_useBack;\n\t\t\t\t\tuniform float f${t}_pl_threshold;\n\t\t\t\t\t// *****************************************\n\t\t\t\t`),
            (this.getProgram = function (e) {
              return `\n\t\t\t\t\t\t// SPE: Points layer shader-code *********************************************************************************\n\t\t\t\t\t\tfloat f${this.id}_dist = length( vBarycentric );\n\t\t\t\t\t\tfloat f${this.id}_edge = aastep( f${this.id}_pl_threshold, f${this.id}_dist, 0.00 );\n\t\t\t\t\t\tfloat f${this.id}_factor = gl_FrontFacing ? 1.0 : ( f${this.id}_pl_useBack ? 0.5 : 0.0 );\n\t\t\t\t\t\t${e} = spe_blend( ${e}, f${this.id}_factor * f${this.id}_pl_color, f${this.id}_alpha * f${this.id}_edge, f${this.id}_mode );\n\t\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * f${this.id}_alpha * f${this.id}_edge;\n\t\t\t\t\t\t// ***************************************************************************************************************\n\t\t\t\t\t`
            }),
            (this.fromJSON = function (e) {
              return (
                (this.uniforms[`f${this.id}_alpha`].value =
                  e.uniforms[`f${this.id}_alpha`].value),
                (this.uniforms[`f${this.id}_mode`].value =
                  e.uniforms[`f${this.id}_mode`].value),
                this.uniforms[`f${this.id}_pl_color`].value.set(
                  e.uniforms[`f${this.id}_pl_color`].value
                ),
                this.uniforms[`f${this.id}_pl_useBack`].value.set(
                  e.uniforms[`f${this.id}_pl_useBack`].value
                ),
                this
              )
            })
          break
        case 'lines':
          ;(this.paramNames = [
            'alpha',
            'mode',
            'll_color',
            'll_thickeness',
            'll_useBack',
            'll_smoothOffset'
          ]),
            (this.defines.USE_LAYER_LINES = ''),
            (this.uniforms[`f${t}_ll_color`] = {
              value: e.ll_color ? e.ll_color : new THREE.Color(12237498)
            }),
            (this.uniforms[`f${t}_ll_thickness`] = {
              value: e.ll_thickness ? e.ll_thickness : 0.01
            }),
            (this.uniforms[`f${t}_ll_useBack`] = {
              value: !e.ll_useBack || e.ll_useBack
            }),
            (this.uniforms[`f${t}_ll_smoothOffset`] = {
              value: e.ll_smoothOffset ? e.ll_smoothOffset : 0.03
            }),
            (this.varProgram += `\n\t\t\t\t\t// SPE: Lines layer uniforms *************************\n\t\t\t\t\tuniform vec3 f${t}_ll_color;\n\t\t\t\t\tuniform float f${t}_ll_thickness;\n\t\t\t\t\tuniform bool f${t}_ll_useBack;\n\t\t\t\t\tuniform float f${t}_ll_smoothOffset;\n\t\t\t\t\t// **************************************************\n\t\t\t\t`),
            (this.getProgram = function (e) {
              return `\n\t\t\t\t\t\t// SPE: Lines layer shader-code **********************************************************************************************\n\t\t\t\t\t\tfloat f${this.id}_dist = min( vBarycentric.x, min( vBarycentric.y, vBarycentric.z ) );\n\t\t\t\t\t\tfloat f${this.id}_comp_thickness = f${this.id}_ll_thickness;\n\t\t\t\t\t\tfloat f${this.id}_edge = 1.0 - aastep( f${this.id}_comp_thickness, f${this.id}_dist, f${this.id}_ll_smoothOffset );\n\t\t\t\t\t\tfloat f${this.id}_factor = gl_FrontFacing ? 1.0 : ( f${this.id}_ll_useBack ? 0.5 : 0.0 );\n\t\t\t\t\t\t${e} = spe_blend( ${e}, f${this.id}_factor * f${this.id}_ll_color, f${this.id}_alpha * f${this.id}_edge, f${this.id}_mode );\n\t\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * f${this.id}_alpha * f${this.id}_edge;\n\t\t\t\t\t\t// ***************************************************************************************************************************\n\t\t\t\t\t`
            }),
            (this.fromJSON = function (e) {
              return (
                (this.uniforms[`f${this.id}_alpha`].value =
                  e.uniforms[`f${this.id}_alpha`].value),
                (this.uniforms[`f${this.id}_mode`].value =
                  e.uniforms[`f${this.id}_mode`].value),
                this.uniforms[`f${this.id}_ll_color`].value.set(
                  e.uniforms[`f${this.id}_ll_color`].value
                ),
                this.uniforms[`f${this.id}_ll_thickness`].value.set(
                  e.uniforms[`f${this.id}_ll_thickness`].value
                ),
                this.uniforms[`f${this.id}_ll_useBack`].value.set(
                  e.uniforms[`f${this.id}_ll_useBack`].value
                ),
                this.uniforms[`f${this.id}_ll_smoothOffset`].value.set(
                  e.uniforms[`f${this.id}_ll_smoothOffset`].value
                ),
                this
              )
            })
      }
    },
    getValues: function () {
      const e = { type: this.type }
      for (let t = 0, i = this.paramNames.length; t < i; ++t) {
        const i = this.paramNames[t],
          r = this.uniforms[`f${this.id}_` + i]
        if (((e[i] = {}), Array.isArray(r.value))) {
          const t = r.value.length
          e[i] = new Array(t)
          for (let n = 0, a = t; n < a; n++) {
            const t = r.value[n]
            e[i][n] = void 0 !== t.clone ? t.clone() : t
          }
        } else r.value.clone ? (e[i] = r.value.clone()) : (e[i] = r.value)
      }
      return e
    },
    copyUniforms: function (e) {
      if ('texture' === this.type) {
        const t = e.uniforms[`f${e.id}_texture`].value.clone()
        ;(this.uniforms[`f${this.id}_alpha`] = {
          value: e.uniforms[`f${e.id}_alpha`].value
        }),
          (this.uniforms[`f${this.id}_mode`] = {
            value: e.uniforms[`f${e.id}_mode`].value
          }),
          (this.uniforms[`f${this.id}_texture`] = { value: t }),
          (this.uniforms[`f${this.id}_mat`] = { value: t.matrix }),
          (this.uniforms[`f${this.id}_crop`] = {
            value: e.uniforms[`f${e.id}_crop`].value
          })
      } else
        for (let t = 0, i = e.paramNames.length; t < i; ++t) {
          const i = `f${this.id}_${e.paramNames[t]}`,
            r = `f${e.id}_${e.paramNames[t]}`
          if (
            ((this.uniforms[i] = {}),
            void 0 !== e.uniforms[r].type &&
              (this.uniforms[i].type = e.uniforms[r].type),
            Array.isArray(e.uniforms[r].value))
          ) {
            const t = e.uniforms[r].value.length
            this.uniforms[i].value = new Array(t)
            let n = this.uniforms[i].value
            for (let i = 0, a = t; i < a; i++) {
              const t = e.uniforms[r].value[i]
              n[i] = void 0 !== t.clone ? t.clone() : t
            }
          } else
            e.uniforms[r].value.clone
              ? (this.uniforms[i].value = e.uniforms[r].value.clone())
              : (this.uniforms[i].value = e.uniforms[r].value)
        }
      return this
    },
    copy: function (e) {
      if (
        ((this.id = e.id),
        (this.type = e.type),
        (this.paramNames = e.paramNames),
        (this.varProgram = e.varProgram),
        (this.getProgram = e.getProgram),
        (this.uniforms = {}),
        (this.defines = { ...e.defines }),
        'texture' === this.type)
      ) {
        const t = e.uniforms[`f${e.id}_texture`].value.clone()
        ;(this.uniforms[`f${this.id}_alpha`] = {
          value: e.uniforms[`f${e.id}_alpha`].value
        }),
          (this.uniforms[`f${this.id}_mode`] = {
            value: e.uniforms[`f${e.id}_mode`].value
          }),
          (this.uniforms[`f${this.id}_texture`] = { value: t }),
          (this.uniforms[`f${this.id}_mat`] = { value: t.matrix }),
          (this.uniforms[`f${this.id}_crop`] = {
            value: e.uniforms[`f${e.id}_crop`].value
          })
      } else
        for (let [t, i] of Object.entries(e.uniforms))
          if (
            ((this.uniforms[t] = {}),
            void 0 !== i.type && (this.uniforms[t].type = i.type),
            Array.isArray(i.value))
          ) {
            const e = i.value.length
            this.uniforms[t].value = new Array(e)
            const r = this.uniforms[t].value
            for (let t = 0, n = e; t < n; t++) {
              const e = i.value[t]
              r[t] = e.clone ? e.clone() : e
            }
          } else
            i.value.clone
              ? (this.uniforms[t].value = i.value.clone())
              : (this.uniforms[t].value = i.value)
      return this
    },
    clone: function () {
      return new this.constructor().copy(this)
    },
    toJSON(e) {
      let t = {}
      if (
        ((t.id = this.id),
        (t.type = this.type),
        (t.defines = JSON.parse(JSON.stringify(this.defines))),
        'texture' === this.type)
      ) {
        const i = this.uniforms[`f${this.id}_texture`]
        ;(t.uniforms = {}),
          (t.uniforms[`f${this.id}_alpha`] = {
            value: this.uniforms[`f${this.id}_alpha`].value
          }),
          (t.uniforms[`f${this.id}_mode`] = {
            value: this.uniforms[`f${this.id}_mode`].value
          }),
          (t.uniforms[`f${this.id}_texture`] = {
            value: i.value.toJSON(e).uuid
          }),
          (t.uniforms[`f${this.id}_mat`] = {
            value: JSON.parse(
              JSON.stringify(this.uniforms[`f${this.id}_mat`].value)
            )
          }),
          (t.uniforms[`f${this.id}_crop`] = {
            value: this.uniforms[`f${this.id}_crop`].value
          })
      } else t.uniforms = JSON.parse(JSON.stringify(this.uniforms))
      return (t.next = null == this.next ? void 0 : this.next.toJSON(e)), t
    }
  }
  const CreateLayerFromJSON = function (e, t) {
      const i = e.id,
        r = e.type
      return new Layer(i, { type: r }).fromJSON(e, t)
    },
    LayerStack = function (e, t, i) {
      ;(this.id = 2),
        (this.shader = void 0),
        (this.needsUpdate = !1),
        (this.head = new Layer(0, { type: 'color', color: e, alpha: t })),
        (this.head.next = new Layer(1, { type: 'light' })),
        (this.uuid = void 0 !== i ? i : THREE.Math.generateUUID())
    }
  LayerStack.prototype = {
    constructor: LayerStack,
    addLayer: function (e) {
      let t = this.head
      const i = new Layer(e.id ? e.id : ++this.id, e)
      for (; null != t.next; ) t = t.next
      return (t.next = i), (this.uuid = THREE.Math.generateUUID()), i
    },
    addLayerBeforeAt: function (e, t) {
      let i = this.head
      const r = new Layer(e.id ? e.id : ++this.id, e)
      if (((r.next = t), i === t)) this.head = r
      else {
        for (; i.next !== t; ) i = i.next
        i.next = r
      }
      return (this.uuid = THREE.Math.generateUUID()), r
    },
    addLayerAt: function (e, t) {
      let i,
        r = this.head
      const n = new Layer(t.id, t)
      if (0 == e) return (n.next = this.head), (this.head = n), n
      ;(i = this.head), (r = this.head.next)
      for (let t = 0; t < e - 1; t++) (i = r), (r = r.next)
      return (
        (n.next = r), (i.next = n), (this.uuid = THREE.Math.generateUUID()), n
      )
    },
    removeLayer: function (e) {
      let t,
        i = this.head,
        r = 0
      if (i.id == e) this.head = i.next
      else
        for (r = 1, t = i, i = i.next; null != i; ) {
          if (i.id == e) {
            t.next = i.next
            break
          }
          r++, (t = i), (i = i.next)
        }
      return (this.uuid = THREE.Math.generateUUID()), r
    },
    changeLayer: function (e, t) {
      let i,
        r = this.head,
        n = new Layer(e, t)
      if (r.id == e)
        (n.next = r.next),
          (this.head = n),
          (n.uniforms[`f${e}_mode`].value = r.uniforms[`f${e}_mode`].value),
          (n.uniforms[`f${e}_alpha`].value = r.uniforms[`f${e}_alpha`].value)
      else
        for (i = r, r = r.next; null != r; ) {
          if (r.id == e) {
            ;(i.next = n),
              (n.next = r.next),
              (n.uniforms[`f${e}_mode`].value = r.uniforms[`f${e}_mode`].value),
              (n.uniforms[`f${e}_alpha`].value =
                r.uniforms[`f${e}_alpha`].value)
            break
          }
          ;(i = r), (r = r.next)
        }
      return (this.uuid = THREE.Math.generateUUID()), n
    },
    getLayer: function (e) {
      let t = this.head
      for (; null != t && t.id != e; ) t = t.next
      return t
    },
    getLayers: function () {
      let e = [],
        t = this.head
      for (; null != t; ) e.push(t), (t = t.next)
      return e
    },
    getLayerPosition: function (e) {
      let t = this.head,
        i = 0
      for (; void 0 !== t && t.id != e; ) i++, (t = t.next)
      return i
    },
    getDefines: function () {
      let e = ''
      const t = {}
      let i = this.head
      for (; null != i; ) {
        for (let [e, r] of Object.entries(i.defines)) t[e] = r
        i = i.next
      }
      for (let [i, r] of Object.entries(t)) e += `#define ${i} ${r}\n`
      return e
    },
    getBeforeProgram: function () {
      let e = '',
        t = this.head
      for (; 'light' != t.type; ) (e += t.getProgram('bef')), (t = t.next)
      return e
    },
    getLightingProgram: function () {
      let e = this.head
      for (; 'light' != e.type; ) e = e.next
      return e.getProgram()
    },
    getAfterProgram: function () {
      let e = '',
        t = this.head
      for (; 'light' != t.type; ) t = t.next
      for (t = t.next; null != t; ) (e += t.getProgram('aft')), (t = t.next)
      return e
    },
    getVarPrograms: function () {
      let e = '',
        t = this.head
      for (; null != t; ) (e += t.varProgram), (t = t.next)
      return e
    },
    getUniforms: function () {
      const e = {}
      let t = this.head
      for (; null != t; ) {
        for (let [i, r] of Object.entries(t.uniforms)) e[i] = r
        t = t.next
      }
      return e
    },
    moveLayer: function (e, t) {
      let i,
        r,
        n = this.head
      if (0 == e) (i = this.head), (this.head = i.next)
      else {
        for (let t = 0; t < e; t++) (r = n), (n = n.next)
        ;(r.next = n.next), (i = n)
      }
      if (((n = this.head), (r = void 0), 0 == t))
        (i.next = this.head), (this.head = i)
      else {
        for (let e = 0; e < t - 1; e++) n = n.next
        ;(i.next = n.next), (n.next = i)
      }
      this.uuid = THREE.Math.generateUUID()
    },
    updateLayerUniform: function (e, t) {
      const i = this.getLayer(e)
      i && this.updateLayerUniformByLayer(i, t)
    },
    updateLayerUniformByLayer: function (e, t) {
      this.shader &&
        (this.shader.uniforms[t]
          ? (this.shader.uniforms[t].value = e.uniforms[t].value)
          : (this.shader.uniforms[t] = { value: e.uniforms[t].value }),
        (this.uuid = THREE.Math.generateUUID()))
    },
    copy: function (e) {
      ;(this.id = e.id),
        (this.uuid = e.uuid),
        (this.shader = e.shader),
        (this.needsUpdate = !1),
        (this.head = e.head.clone())
      let t = this.head,
        i = e.head
      for (; null != i.next; )
        (t.next = i.next.clone()), (t = t.next), (i = i.next)
      return this
    },
    clone: function () {
      return new this.constructor().copy(this)
    },
    toJSON: function (e) {
      let t = {}
      return (
        (t.id = this.id),
        (t.uuid = this.uuid),
        (t.head = this.head.toJSON(e)),
        t
      )
    },
    fromJSON: function (e, t) {
      ;(this.id = e.id),
        (this.uuid = e.uuid),
        (this.head = new Layer(e.head.id, { type: e.head.type }).fromJSON(
          e.head,
          t
        ))
      let i = e.head.next,
        r = this.head
      for (; null != i; )
        (r.next = new Layer(i.id, { type: i.type }).fromJSON(i, t)),
          (i = i.next),
          (r = r.next)
      return this
    },
    dispose: function () {
      let e = this.head
      for (; void 0 !== e; )
        !0 === e.hasOwnProperty('dispose') && e.dispose(), (e = e.next)
    }
  }
  const ShaderLib = {
    setup: function (e, t) {
      ;(t.userData && t.userData.category) || ShaderLib.setCategory(t)
      let i = t.userData.category
      return (
        (e.fragmentShader =
          '\n\t\t\t/* SPE-Blending helper functions */\n\t\t\t#define SPE_BLENDING_NORMAL 0\n\t\t\t#define SPE_BLENDING_MULTIPLY 1\n\t\t\t#define SPE_BLENDING_SCREEN 2\n\t\t\t#define SPE_BLENDING_OVERLAY 3\n\n\t\t\tvec3 spe_normalBlend( vec3 a, vec3 b, float alpha ) {\n\t\t\t\treturn mix( a, b, alpha );\n\t\t\t}\n\t\t\tvec3 spe_multiplyBlend( vec3 a, vec3 b, float alpha ) {\n\t\t\t\treturn mix( a, a * b, alpha );\n\t\t\t}\n\t\t\tvec3 spe_screenBlend( vec3 a, vec3 b, float alpha ) {\n\t\t\t\tvec3 tmp = 1.0 - ( 1.0 - a ) * ( 1.0 - b );\n\t\t\t\treturn mix( a, tmp, alpha );\n\t\t\t}\n\t\t\tvec3 spe_overlayBlend( vec3 a, vec3 b, float alpha ) {\n\t\t\t\tvec3 tmp = mix( 1. - 2. * (1. - a) * (1. - b), 2. * a * b, step( a, vec3(.5) ) );\n\t\t\t\treturn clamp( mix( a, tmp, alpha ), 0.0, 1.0 );\n\t\t\t}\n\t\t\tvec3 spe_blend( vec3 a, vec3 b, float alpha, int mode ) {\n\t\t\t\t/**/ if ( mode == SPE_BLENDING_NORMAL ) return spe_normalBlend( a, b, alpha );\n\t\t\t\telse if ( mode == SPE_BLENDING_MULTIPLY ) return spe_multiplyBlend( a, b, alpha );\n\t\t\t\telse if ( mode == SPE_BLENDING_SCREEN ) return spe_screenBlend( a, b, alpha );\n\t\t\t\telse if ( mode == SPE_BLENDING_OVERLAY ) return spe_overlayBlend( a, b, alpha );\n\t\t\t\treturn vec3( 1.0 );\n\t\t\t}\n\t\t\t' +
          e.fragmentShader),
        (e.vertexShader =
          '\n\t\t\t#ifdef USE_LAYER_FRESNEL\n\t\t\t\tvarying vec3 vWorldViewDir;\n\t\t\t\tvarying vec3 vWorldNormal;\n\t\t\t#endif /* USE_LAYER_FRESNEL */\n\t\t\t' +
          e.vertexShader),
        (e.fragmentShader =
          '\n\t\t\t#ifdef USE_LAYER_FRESNEL\n\t\t\t\tvarying vec3 vWorldViewDir;\n\t\t\t\tvarying vec3 vWorldNormal;\n\t\t\t#endif /* USE_LAYER_FRESNEL */\n\t\t\t' +
          e.fragmentShader),
        (e.vertexShader = e.vertexShader.replace(
          '#include <project_vertex>',
          '\n\t\t\t#include <project_vertex>\n\t\t\t#ifdef USE_LAYER_FRESNEL\n\t\t\t\tvec4 fWorldPosition = modelMatrix * vec4( position, 1.0 );\n\t\t\t\tvWorldViewDir = isPerspectiveMatrix( projectionMatrix ) ? \n\t\t\t\t\t\t\t\t\t( fWorldPosition.xyz - cameraPosition ) : vec3( -viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2] );\n\t\t\t\tvWorldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\n\t\t\t#endif /* USE_LAYER_FRESNEL */\n\t\t\t'
        )),
        (e.vertexShader =
          '\n\t\t\t#if defined( USE_LAYER_POINTS ) || defined( USE_LAYER_LINES )\n\t\t\t\tattribute vec3 barycentric;\n\t\t\t\tvarying vec3 vBarycentric;\n\t\t\t#endif /* USE_LAYER_POINTS || USE_LAYER_LINES */\n\t\t' +
          e.vertexShader),
        (e.vertexShader = e.vertexShader.replace(
          '#include <begin_vertex>',
          '\n\t\t\t#include <begin_vertex>\n\t\t\t#if defined( USE_LAYER_POINTS ) || defined( USE_LAYER_LINES )\n\t\t\t\tvBarycentric = barycentric;\n\t\t\t#endif /* USE_LAYER_POINTS || USE_LAYER_LINES */\n\t\t\t'
        )),
        (e.fragmentShader =
          '\n\t\t\t#if defined( USE_LAYER_POINTS ) || defined( USE_LAYER_LINES )\n\t\t\t\tvarying vec3 vBarycentric;\n\n\t\t\t\tfloat aastep( float threshold, float dist, float smoothOffset ) {\n\t\t\t\t\tfloat afwidth = fwidth( dist ) * 0.5;\n\t\t\t\t\treturn smoothstep( threshold - afwidth - smoothOffset, threshold + afwidth + smoothOffset, dist );\n\t\t\t\t}\n\t\t\t#endif /* USE_LAYER_POINTS || USE_LAYER_LINES */\n\t\t' +
          e.fragmentShader),
        (e.fragmentShader =
          '\n\t\t\t#ifdef USE_LAYER_NOISE\n\n\t\t\t\tfloat random ( in vec2 _st ) {\n\t\t\t\t\treturn sin(sin(dot(_st.xy, vec2(12.834,77.212))) * 320.3456); // Ale: I am usin sin() instead of fract() to create a different noise.\n\t\t\t\t}\n\n\t\t\t\tfloat noise ( in vec2 _st ) {\n\t\t\t\t\tvec2 i = floor(_st);\n\t\t\t\t\tvec2 f = fract(_st);\n\n\t\t\t\t\t// Four corners in 2D of a tile\n\t\t\t\t\tfloat a = random(i);\n\t\t\t\t\tfloat b = random(i + vec2(1.0, 0.0)); // Ale: By incrementing disproportionally these values. You get a geometrical distortion.\n\t\t\t\t\tfloat c = random(i + vec2(0.0, 1.0));\n\t\t\t\t\tfloat d = random(i + vec2(1.0, 1.0));\n\n\t\t\t\t\tvec2 u = f * f * (3.0 - 2.0 * f);\n\n\t\t\t\t\treturn mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;\n\t\t\t\t}\n\n\t\t\t\tfloat fbm ( in vec2 _st ) {\n\t\t\t\t\tfloat v = 0.0;\n\t\t\t\t\tfloat a = 0.5;\n\t\t\t\t\tvec2 shift = vec2(100.0);\n\n\t\t\t\t\t// Rotate to reduce axial bias\n\t\t\t\t\tmat2 rot = mat2(cos(0.5), sin(0.5),\n\t\t\t\t\t\t\t\t\t-sin(0.5), cos(0.50));\n\t\t\t\t\tfor (int i = 0; i < NUM_OCTAVES; ++i) {\n\t\t\t\t\t\tv += a * noise(_st);\n\t\t\t\t\t\t_st = rot * _st * 2.0 + shift;\n\t\t\t\t\t\ta *= 0.5;\n\t\t\t\t\t}\n\t\t\t\t\treturn v;\n\t\t\t\t}\n\t\t\t#endif /* USE_LAYER_NOISE */\n\t\t\t' +
          e.fragmentShader),
        (e.fragmentShader = e.fragmentShader.replace(
          '#include <normal_fragment_begin>',
          ''
        )),
        (e.fragmentShader = e.fragmentShader.replace(
          '#include <normal_fragment_maps>',
          ''
        )),
        'Basic' == i &&
          ((e.fragmentShader = e.fragmentShader.replace(
            '#include <lights_phong_fragment>\n\t\t\t\t#include <lights_fragment_begin>\n\t\t\t\t#include <lights_fragment_maps>\n\t\t\t\t#include <lights_fragment_end>',
            ''
          )),
          (e.fragmentShader = e.fragmentShader.replace(
            'vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;',
            'vec3 outgoingLight = diffuseColor.rgb;'
          ))),
        'Lambert' == i &&
          ((e.vertexShader =
            '\n\t\t\t\t#ifdef USE_LAYER_NORMAL\n\t\t\t\t\tvarying vec3 vNormal;\n\t\t\t\t#endif /* USE_LAYER_NORMAL */\n\t\t\t\t' +
            e.vertexShader),
          (e.vertexShader = e.vertexShader.replace(
            '#include <defaultnormal_vertex>',
            '\n\t\t\t\t#include <defaultnormal_vertex>\n\t\t\t\t#ifdef USE_LAYER_NORMAL\n\t\t\t\t\tvNormal = normalize( transformedNormal );\n\t\t\t\t#endif /* USE_LAYER_NORMAL */\n\t\t\t\t'
          )),
          (e.fragmentShader =
            '\n\t\t\t\t#ifdef USE_LAYER_NORMAL\n\t\t\t\t\tvarying vec3 vNormal;\n\t\t\t\t#endif /* USE_LAYER_NORMAL */\n\t\t\t\t' +
            e.fragmentShader),
          (e.fragmentShader = e.fragmentShader.replace(
            'vec4 diffuseColor = vec4( diffuse, opacity );',
            '\n\t\t\t\t#ifdef USE_LAYER_NORMAL\n\t\t\t\t\t#include <normal_fragment_begin>\n\t\t\t\t\t#include <normal_fragment_maps>\n\t\t\t\t#endif /* USE_LAYER_NORMAL */\n\n\t\t\t\t\tfloat accumAlpha = 0.0;\n\t\t\t\t\tvec3 bef = vec3( 1.0 );\n\t\t\t\t\t#before\n\t\t\t\t\tvec4 diffuseColor = vec4( bef, 1.0 );\n\t\t\t\t'
          ))),
        ('Basic' != i &&
          'Lambert' != i &&
          'Phong' != i &&
          'Physical' != i &&
          'Toon' != i) ||
          ((e.vertexShader = e.vertexShader.replace(
            '#include <common>',
            '\n\t\t\t\t#include <common>\n\n\t\t\t\t#ifdef USE_LAYER_DEPTH\n\t\t\t\t\tvarying vec4 dWorldPosition;\n\t\t\t\t#endif /* USE_LAYER_DEPTH */\n\t\t\t\t'
          )),
          (e.vertexShader = e.vertexShader.replace(
            '#include <worldpos_vertex>',
            '\n\t\t\t\t#include <worldpos_vertex>\n\t\t\t\t#ifdef USE_LAYER_DEPTH\n\t\t\t\t\tdWorldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t\t\t\t#endif\n\t\t\t\t'
          )),
          (e.fragmentShader =
            '\n\t\t\t\t#ifdef USE_LAYER_DEPTH\n\t\t\t\t\tvarying vec4 dWorldPosition;\n\t\t\t\t#endif /* USE_LAYER_DEPTH */\n\t\t\t\t' +
            e.fragmentShader),
          (e.fragmentShader = e.fragmentShader.replace(
            'vec4 diffuseColor = vec4( diffuse, opacity );',
            '\n\t\t\t\t\t#include <normal_fragment_begin>\n\t\t\t\t\t#include <normal_fragment_maps>\n\t\t\t\t\tfloat accumAlpha = 0.0;\n\t\t\t\t\tvec3 bef = vec3( 1.0 );\n\t\t\t\t\t#before\n\t\t\t\t\tvec4 diffuseColor = vec4( bef, 1.0 );\n\t\t\t\t'
          )),
          (e.fragmentShader = e.fragmentShader.replace(
            'gl_FragColor = vec4( outgoingLight, diffuseColor.a );',
            '\n\t\t\t\t\t#lighting\n\t\t\t\t\tvec3 aft = outgoingLight;\n\t\t\t\t\t#after\n\t\t\t\t\tgl_FragColor = vec4( aft, accumAlpha * opacity );\n\t\t\t\t'
          ))),
        e
      )
    },
    createCallback: function (material) {
      let string = ''
      for (let e = 0; e < material.uuid.length; ++e) {
        const t = material.uuid[e]
        '-' != t && (string += t)
      }
      return eval(
        `shader => {\n\t\t\tconst __hash___${string} = true;\n\t\t\tconst layers = material.userData.layers;\n\n\t\t\tShaderLib.setup( shader, material );\n\n\t\t\t// uniforms\n\t\t\tshader.uniforms = THREE.UniformsUtils.merge( [\n\t\t\t\tshader.uniforms, layers.getUniforms()\n\t\t\t] );\n\n\t\t\t// UPDATE WITH CORE FUNCTION - !IMPORTANT!\n\t\t\tfor ( let [key, uniform] of Object.entries( shader.uniforms ) ) {\n\n\t\t\t\tif ( uniform.value && uniform.value.isTexture ) {\n\t\t\t\t\tuniform.value.needsUpdate = true;\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\t// uniform program\n\t\t\tshader.fragmentShader = layers.getVarPrograms() + shader.fragmentShader;\n\n\t\t\t// before lighting\n\t\t\tshader.fragmentShader = shader.fragmentShader.replace(\n\t\t\t\t'#before', layers.getBeforeProgram()\n\t\t\t);\n\n\t\t\t// lighting\n\t\t\tshader.fragmentShader = shader.fragmentShader.replace(\n\t\t\t\t'#lighting', layers.getLightingProgram()\n\t\t\t);\n\n\t\t\t// after lighting\n\t\t\tshader.fragmentShader = shader.fragmentShader.replace(\n\t\t\t\t'#after', layers.getAfterProgram()\n\t\t\t);\n\n\t\t\t// defines\n\t\t\tconst defs = layers.getDefines();\n\t\t\tshader.vertexShader = defs + shader.vertexShader;\n\t\t\tshader.fragmentShader = defs + shader.fragmentShader;\n\n\t\t\t// reference\n\t\t\tlayers.shader = shader;\n\t\t}`
      )
    },
    setCategory: function (e) {
      let t
      switch (e.type) {
        case 'MeshBasicMaterial':
          t = 'Basic'
          break
        case 'MeshLambertMaterial':
          t = 'Lambert'
          break
        case 'MeshPhongMaterial':
          t = 'Phong'
          break
        case 'MeshPhysicalMaterial':
          t = 'Physical'
          break
        case 'MeshToonMaterial':
          t = 'Toon'
      }
      ;(e.userData = e.userData || {}), (e.userData.category = t)
    }
  }
  var InteractionState = (function () {
      function e() {
        ;(this.uuid = THREE.MathUtils.generateUUID()),
          (this.name = ''),
          (this.position = new THREE.Vector3()),
          (this.rotation = new THREE.Euler()),
          (this.scale = new THREE.Vector3()),
          (this.hiddenMatrix = new THREE.Matrix4())
      }
      return (
        (e.prototype.update = function (e) {
          this.updateMatrix(e),
            'geometry' in e && this.updateGeometry(e),
            'material' in e && this.updateMaterial(e),
            'CombinedCamera' === e.objectType && this.updateCamera(e)
        }),
        (e.prototype.updateCamera = function (e) {
          this.camera = {
            zoomPersp: e.perspCamera.zoom,
            zoomOrtho: e.orthoCamera.zoom
          }
        }),
        (e.prototype.updateMatrix = function (e) {
          this.position.copy(e.position),
            this.rotation.copy(e.rotation),
            this.scale.copy(e.scale),
            'hiddenMatrix' in e && this.hiddenMatrix.copy(e.hiddenMatrix)
        }),
        (e.prototype.updateGeometry = function (e) {
          if ('geometry' in e) {
            var t = e.geometry.userData.parameters,
              i = t.width,
              r = t.height,
              n = t.depth
            this.geometry = { width: i, height: r, depth: n }
          }
        }),
        (e.prototype.updateMaterial = function (e) {
          if ('material' in e)
            if (e.material instanceof Array) {
              this.material = []
              for (var t = 0, i = e.material.length; t < i; ++t) {
                for (var r = [], n = e.material[t].layersList.head; n; )
                  r.push(n.clone()), (n = n.next)
                this.material.push({ layersList: r })
              }
            } else {
              for (r = [], n = e.material.layersList.head; n; )
                r.push(n.clone()), (n = n.next)
              this.material = { layersList: r }
            }
        }),
        (e.prototype.execute = function (e) {
          if (
            (e.position.copy(this.position),
            e.rotation.copy(this.rotation),
            e.scale.copy(this.scale),
            'hiddenMatrix' in e && e.hiddenMatrix.copy(this.hiddenMatrix),
            'geometry' in e && void 0 !== this.geometry)
          ) {
            var t = e.geometry.userData.parameters,
              i = this.geometry
            ;(i.width === t.width &&
              i.height === t.height &&
              i.depth === t.depth) ||
              e.updateGeometry({
                parameters: { width: i.width, height: i.height, depth: i.depth }
              })
          }
          if ('material' in e) {
            var r = e.material
            if (r instanceof Array)
              for (var n = 0, a = (c = this.material).length; n < a; ++n) {
                for (
                  var o = r[n].layersList.head, s = c[n].layersList, l = 0;
                  o;

                )
                  o.copy(s[l++]), (o = o.next)
                r[n].dispose()
              }
            else {
              var c
              for (
                n = 0,
                  o = r.layersList.head,
                  s = (c = this.material).layersList;
                o;

              )
                o.copyUniforms(s[n++]), (o = o.next)
              r.dispose()
            }
          }
          this.camera &&
            'CombinedCamera' === e.objectType &&
            ((e.zoom =
              'OrthographicCamera' === e.cameraType
                ? this.camera.zoomOrtho
                : this.camera.zoomPersp),
            e.updateProjectionMatrix())
        }),
        (e.prototype.copy = function (e) {
          if (
            ((this.name = e.name),
            this.position.copy(e.position),
            this.rotation.copy(e.rotation),
            this.scale.copy(e.scale),
            this.hiddenMatrix.copy(e.hiddenMatrix),
            void 0 !== e.geometry &&
              (this.geometry = {
                width: e.geometry.width,
                height: e.geometry.height,
                depth: e.geometry.depth
              }),
            void 0 !== e.material)
          )
            if (e.material instanceof Array) {
              this.material = []
              for (var t = 0, i = e.material.length; t < i; ++t)
                this.material.push({
                  layersList: e.material[t].layersList.map(function (e) {
                    return e.clone()
                  })
                })
            } else
              this.material = {
                layersList: e.material.layersList.map(function (e) {
                  return e.clone()
                })
              }
          return (
            void 0 !== e.camera &&
              (this.camera = {
                zoomPersp: e.camera.zoomPersp,
                zoomOrtho: e.camera.zoomOrtho
              }),
            this
          )
        }),
        (e.prototype.clone = function () {
          return new e().copy(this)
        }),
        (e.prototype.toJSON = function (e) {
          var t = {
            uuid: this.uuid,
            name: this.name,
            position: this.position.toArray(),
            rotation: this.rotation.toArray(),
            scale: this.scale.toArray(),
            hiddenMatrix: this.hiddenMatrix.toArray()
          }
          if (
            (void 0 !== this.geometry &&
              (t.geometry = {
                width: this.geometry.width,
                height: this.geometry.height,
                depth: this.geometry.depth
              }),
            void 0 !== this.material)
          )
            if (this.material instanceof Array) {
              t.material = []
              for (var i = 0, r = this.material.length; i < r; ++i)
                t.material.push({
                  layersList: this.material[i].layersList.map(function (t) {
                    return t.toJSON(e)
                  })
                })
            } else
              t.material = {
                layersList: this.material.layersList.map(function (t) {
                  return t.toJSON(e)
                })
              }
          return (
            void 0 !== this.camera &&
              (t.camera = {
                zoomPersp: this.camera.zoomPersp,
                zoomOrtho: this.camera.zoomOrtho
              }),
            t
          )
        }),
        (e.prototype.fromJSON = function (e, t) {
          if (
            ((this.uuid = e.uuid),
            (this.name = e.name),
            this.position.fromArray(e.position),
            this.rotation.fromArray(e.rotation),
            this.scale.fromArray(e.scale),
            this.hiddenMatrix.fromArray(e.hiddenMatrix),
            void 0 !== e.geometry &&
              (this.geometry = {
                width: e.geometry.width,
                height: e.geometry.height,
                depth: e.geometry.depth
              }),
            void 0 !== e.material)
          )
            if (e.material instanceof Array) {
              this.material = []
              for (var i = 0, r = e.material.length; i < r; ++i)
                this.material.push({
                  layersList: e.material[i].layersList.map(function (e) {
                    return CreateLayerFromJSON(e, t)
                  })
                })
            } else
              this.material = {
                layersList: e.material.layersList.map(function (e) {
                  return CreateLayerFromJSON(e, t)
                })
              }
          return (
            void 0 !== e.camera &&
              (this.camera = {
                zoomPersp: e.camera.zoomPersp,
                zoomOrtho: e.camera.zoomOrtho
              }),
            this
          )
        }),
        e
      )
    })(),
    defaultInstanceSettings = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: 'normal',
      autoplay: !0,
      timelineOffset: 0,
      rewind: !0
    },
    defaultTweenSettings = {
      duration: 1e3,
      delay: 0,
      endDelay: 0,
      easing: 'easeOutElastic(1, .5)',
      round: 0
    },
    validTransforms = [
      'translateX',
      'translateY',
      'translateZ',
      'rotate',
      'rotateX',
      'rotateY',
      'rotateZ',
      'scale',
      'scaleX',
      'scaleY',
      'scaleZ',
      'skew',
      'skewX',
      'skewY',
      'perspective',
      'matrix',
      'matrix3d'
    ],
    cache = { CSS: {}, springs: {} }
  function minMax(e, t, i) {
    return Math.min(Math.max(e, t), i)
  }
  function stringContains(e, t) {
    return e.indexOf(t) > -1
  }
  function applyArguments(e, t) {
    return e.apply(null, t)
  }
  var is = {
    arr: function (e) {
      return Array.isArray(e)
    },
    obj: function (e) {
      return stringContains(Object.prototype.toString.call(e), 'Object')
    },
    pth: function (e) {
      return is.obj(e) && e.hasOwnProperty('totalLength')
    },
    svg: function (e) {
      return e instanceof SVGElement
    },
    inp: function (e) {
      return e instanceof HTMLInputElement
    },
    dom: function (e) {
      return e.nodeType || is.svg(e)
    },
    str: function (e) {
      return 'string' == typeof e
    },
    fnc: function (e) {
      return 'function' == typeof e
    },
    und: function (e) {
      return void 0 === e
    },
    hex: function (e) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
    },
    rgb: function (e) {
      return /^rgb/.test(e)
    },
    hsl: function (e) {
      return /^hsl/.test(e)
    },
    col: function (e) {
      return is.hex(e) || is.rgb(e) || is.hsl(e)
    },
    key: function (e) {
      return (
        !defaultInstanceSettings.hasOwnProperty(e) &&
        !defaultTweenSettings.hasOwnProperty(e) &&
        'targets' !== e &&
        'keyframes' !== e
      )
    }
  }
  function parseEasingParameters(e) {
    var t = /\(([^)]+)\)/.exec(e)
    return t
      ? t[1].split(',').map(function (e) {
          return parseFloat(e)
        })
      : []
  }
  function spring(e, t) {
    var i = parseEasingParameters(e),
      r = minMax(is.und(i[0]) ? 1 : i[0], 0.1, 100),
      n = minMax(is.und(i[1]) ? 100 : i[1], 0.1, 100),
      a = minMax(is.und(i[2]) ? 10 : i[2], 0.1, 100),
      o = minMax(is.und(i[3]) ? 0 : i[3], 0.1, 100),
      s = Math.sqrt(n / r),
      l = a / (2 * Math.sqrt(n * r)),
      c = l < 1 ? s * Math.sqrt(1 - l * l) : 0,
      h = l < 1 ? (l * s - o) / c : -o + s
    function u(e) {
      var i = t ? (t * e) / 1e3 : e
      return (
        (i =
          l < 1
            ? Math.exp(-i * l * s) * (1 * Math.cos(c * i) + h * Math.sin(c * i))
            : (1 + h * i) * Math.exp(-i * s)),
        0 === e || 1 === e ? e : 1 - i
      )
    }
    return t
      ? u
      : function () {
          var t = cache.springs[e]
          if (t) return t
          for (var i = 1 / 6, r = 0, n = 0; ; )
            if (1 === u((r += i))) {
              if (++n >= 16) break
            } else n = 0
          var a = r * i * 1e3
          return (cache.springs[e] = a), a
        }
  }
  function steps(e) {
    return (
      void 0 === e && (e = 10),
      function (t) {
        return Math.ceil(minMax(t, 1e-6, 1) * e) * (1 / e)
      }
    )
  }
  var bezier = (function () {
      var e = 0.1
      function t(e, t) {
        return 1 - 3 * t + 3 * e
      }
      function i(e, t) {
        return 3 * t - 6 * e
      }
      function r(e) {
        return 3 * e
      }
      function n(e, n, a) {
        return ((t(n, a) * e + i(n, a)) * e + r(n)) * e
      }
      function a(e, n, a) {
        return 3 * t(n, a) * e * e + 2 * i(n, a) * e + r(n)
      }
      return function (t, i, r, o) {
        if (0 <= t && t <= 1 && 0 <= r && r <= 1) {
          var s = new Float32Array(11)
          if (t !== i || r !== o)
            for (var l = 0; l < 11; ++l) s[l] = n(l * e, t, r)
          return function (e) {
            return (t === i && r === o) || 0 === e || 1 === e
              ? e
              : n(c(e), i, o)
          }
        }
        function c(i) {
          for (var o = 0, l = 1; 10 !== l && s[l] <= i; ++l) o += e
          --l
          var c = o + ((i - s[l]) / (s[l + 1] - s[l])) * e,
            h = a(c, t, r)
          return h >= 0.001
            ? (function (e, t, i, r) {
                for (var o = 0; o < 4; ++o) {
                  var s = a(t, i, r)
                  if (0 === s) return t
                  t -= (n(t, i, r) - e) / s
                }
                return t
              })(i, c, t, r)
            : 0 === h
            ? c
            : (function (e, t, i, r, a) {
                var o,
                  s,
                  l = 0
                do {
                  ;(o = n((s = t + (i - t) / 2), r, a) - e) > 0
                    ? (i = s)
                    : (t = s)
                } while (Math.abs(o) > 1e-7 && ++l < 10)
                return s
              })(i, o, o + e, t, r)
        }
      }
    })(),
    penner =
      ((eases = {
        linear: function () {
          return function (e) {
            return e
          }
        }
      }),
      (functionEasings = {
        Sine: function () {
          return function (e) {
            return 1 - Math.cos((e * Math.PI) / 2)
          }
        },
        Circ: function () {
          return function (e) {
            return 1 - Math.sqrt(1 - e * e)
          }
        },
        Back: function () {
          return function (e) {
            return e * e * (3 * e - 2)
          }
        },
        Bounce: function () {
          return function (e) {
            for (var t, i = 4; e < ((t = Math.pow(2, --i)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - i) -
              7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            )
          }
        },
        Elastic: function (e, t) {
          void 0 === e && (e = 1), void 0 === t && (t = 0.5)
          var i = minMax(e, 1, 10),
            r = minMax(t, 0.1, 2)
          return function (e) {
            return 0 === e || 1 === e
              ? e
              : -i *
                  Math.pow(2, 10 * (e - 1)) *
                  Math.sin(
                    ((e - 1 - (r / (2 * Math.PI)) * Math.asin(1 / i)) *
                      (2 * Math.PI)) /
                      r
                  )
          }
        }
      }),
      ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'].forEach(function (e, t) {
        functionEasings[e] = function () {
          return function (e) {
            return Math.pow(e, t + 2)
          }
        }
      }),
      Object.keys(functionEasings).forEach(function (e) {
        var t = functionEasings[e]
        ;(eases['easeIn' + e] = t),
          (eases['easeOut' + e] = function (e, i) {
            return function (r) {
              return 1 - t(e, i)(1 - r)
            }
          }),
          (eases['easeInOut' + e] = function (e, i) {
            return function (r) {
              return r < 0.5 ? t(e, i)(2 * r) / 2 : 1 - t(e, i)(-2 * r + 2) / 2
            }
          })
      }),
      eases),
    eases,
    functionEasings
  function parseEasings(e, t) {
    if (is.fnc(e)) return e
    var i = e.split('(')[0],
      r = penner[i],
      n = parseEasingParameters(e)
    switch (i) {
      case 'spring':
        return spring(e, t)
      case 'cubicBezier':
        return applyArguments(bezier, n)
      case 'steps':
        return applyArguments(steps, n)
      default:
        return applyArguments(r, n)
    }
  }
  function selectString(e) {
    try {
      return document.querySelectorAll(e)
    } catch (e) {
      return
    }
  }
  function filterArray(e, t) {
    for (
      var i = e.length,
        r = arguments.length >= 2 ? arguments[1] : void 0,
        n = [],
        a = 0;
      a < i;
      a++
    )
      if (a in e) {
        var o = e[a]
        t.call(r, o, a, e) && n.push(o)
      }
    return n
  }
  function flattenArray(e) {
    return e.reduce(function (e, t) {
      return e.concat(is.arr(t) ? flattenArray(t) : t)
    }, [])
  }
  function toArray(e) {
    return is.arr(e)
      ? e
      : (is.str(e) && (e = selectString(e) || e),
        e instanceof NodeList || e instanceof HTMLCollection
          ? [].slice.call(e)
          : [e])
  }
  function arrayContains(e, t) {
    return e.some(function (e) {
      return e === t
    })
  }
  function cloneObject(e) {
    var t = {}
    for (var i in e) t[i] = e[i]
    return t
  }
  function replaceObjectProps(e, t) {
    var i = cloneObject(e)
    for (var r in e) i[r] = t.hasOwnProperty(r) ? t[r] : e[r]
    return i
  }
  function mergeObjects(e, t) {
    var i = cloneObject(e)
    for (var r in t) i[r] = is.und(e[r]) ? t[r] : e[r]
    return i
  }
  function rgbToRgba(e) {
    var t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e)
    return t ? 'rgba(' + t[1] + ',1)' : e
  }
  function hexToRgba(e) {
    var t = e.replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        function (e, t, i, r) {
          return t + t + i + i + r + r
        }
      ),
      i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)
    return (
      'rgba(' +
      parseInt(i[1], 16) +
      ',' +
      parseInt(i[2], 16) +
      ',' +
      parseInt(i[3], 16) +
      ',1)'
    )
  }
  function hslToRgba(e) {
    var t,
      i,
      r,
      n =
        /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
        /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
      a = parseInt(n[1], 10) / 360,
      o = parseInt(n[2], 10) / 100,
      s = parseInt(n[3], 10) / 100,
      l = n[4] || 1
    function c(e, t, i) {
      return (
        i < 0 && (i += 1),
        i > 1 && (i -= 1),
        i < 1 / 6
          ? e + 6 * (t - e) * i
          : i < 0.5
          ? t
          : i < 2 / 3
          ? e + (t - e) * (2 / 3 - i) * 6
          : e
      )
    }
    if (0 == o) t = i = r = s
    else {
      var h = s < 0.5 ? s * (1 + o) : s + o - s * o,
        u = 2 * s - h
      ;(t = c(u, h, a + 1 / 3)), (i = c(u, h, a)), (r = c(u, h, a - 1 / 3))
    }
    return 'rgba(' + 255 * t + ',' + 255 * i + ',' + 255 * r + ',' + l + ')'
  }
  function colorToRgb(e) {
    return is.rgb(e)
      ? rgbToRgba(e)
      : is.hex(e)
      ? hexToRgba(e)
      : is.hsl(e)
      ? hslToRgba(e)
      : void 0
  }
  function getUnit(e) {
    var t =
      /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
        e
      )
    if (t) return t[1]
  }
  function getTransformUnit(e) {
    return stringContains(e, 'translate') || 'perspective' === e
      ? 'px'
      : stringContains(e, 'rotate') || stringContains(e, 'skew')
      ? 'deg'
      : void 0
  }
  function getFunctionValue(e, t) {
    return is.fnc(e) ? e(t.target, t.id, t.total) : e
  }
  function getAttribute(e, t) {
    return e.getAttribute(t)
  }
  function convertPxToUnit(e, t, i) {
    if (arrayContains([i, 'deg', 'rad', 'turn'], getUnit(t))) return t
    var r = cache.CSS[t + i]
    if (!is.und(r)) return r
    var n = document.createElement(e.tagName),
      a =
        e.parentNode && e.parentNode !== document ? e.parentNode : document.body
    a.appendChild(n), (n.style.position = 'absolute'), (n.style.width = 100 + i)
    var o = 100 / n.offsetWidth
    a.removeChild(n)
    var s = o * parseFloat(t)
    return (cache.CSS[t + i] = s), s
  }
  function getCSSValue(e, t, i) {
    if (t in e.style) {
      var r = t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
        n = e.style[t] || getComputedStyle(e).getPropertyValue(r) || '0'
      return i ? convertPxToUnit(e, n, i) : n
    }
  }
  function getAnimationType(e, t) {
    return is.dom(e) &&
      !is.inp(e) &&
      (getAttribute(e, t) || (is.svg(e) && e[t]))
      ? 'attribute'
      : is.dom(e) && arrayContains(validTransforms, t)
      ? 'transform'
      : is.dom(e) && 'transform' !== t && getCSSValue(e, t)
      ? 'css'
      : null != e[t]
      ? 'object'
      : void 0
  }
  function getElementTransforms(e) {
    if (is.dom(e)) {
      for (
        var t,
          i = e.style.transform || '',
          r = /(\w+)\(([^)]*)\)/g,
          n = new Map();
        (t = r.exec(i));

      )
        n.set(t[1], t[2])
      return n
    }
  }
  function getTransformValue(e, t, i, r) {
    var n = stringContains(t, 'scale') ? 1 : 0 + getTransformUnit(t),
      a = getElementTransforms(e).get(t) || n
    return (
      i && (i.transforms.list.set(t, a), (i.transforms.last = t)),
      r ? convertPxToUnit(e, a, r) : a
    )
  }
  function getOriginalTargetValue(e, t, i, r) {
    switch (getAnimationType(e, t)) {
      case 'transform':
        return getTransformValue(e, t, r, i)
      case 'css':
        return getCSSValue(e, t, i)
      case 'attribute':
        return getAttribute(e, t)
      default:
        return e[t] || 0
    }
  }
  function getRelativeValue(e, t) {
    var i = /^(\*=|\+=|-=)/.exec(e)
    if (!i) return e
    var r = getUnit(e) || 0,
      n = parseFloat(t),
      a = parseFloat(e.replace(i[0], ''))
    switch (i[0][0]) {
      case '+':
        return n + a + r
      case '-':
        return n - a + r
      case '*':
        return n * a + r
    }
  }
  function validateValue(e, t) {
    if (is.col(e)) return colorToRgb(e)
    if (/\s/g.test(e)) return e
    var i = getUnit(e),
      r = i ? e.substr(0, e.length - i.length) : e
    return t ? r + t : r
  }
  function getDistance(e, t) {
    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
  }
  function getCircleLength(e) {
    return 2 * Math.PI * getAttribute(e, 'r')
  }
  function getRectLength(e) {
    return 2 * getAttribute(e, 'width') + 2 * getAttribute(e, 'height')
  }
  function getLineLength(e) {
    return getDistance(
      { x: getAttribute(e, 'x1'), y: getAttribute(e, 'y1') },
      { x: getAttribute(e, 'x2'), y: getAttribute(e, 'y2') }
    )
  }
  function getPolylineLength(e) {
    for (var t, i = e.points, r = 0, n = 0; n < i.numberOfItems; n++) {
      var a = i.getItem(n)
      n > 0 && (r += getDistance(t, a)), (t = a)
    }
    return r
  }
  function getPolygonLength(e) {
    var t = e.points
    return (
      getPolylineLength(e) +
      getDistance(t.getItem(t.numberOfItems - 1), t.getItem(0))
    )
  }
  function getTotalLength(e) {
    if (e.getTotalLength) return e.getTotalLength()
    switch (e.tagName.toLowerCase()) {
      case 'circle':
        return getCircleLength(e)
      case 'rect':
        return getRectLength(e)
      case 'line':
        return getLineLength(e)
      case 'polyline':
        return getPolylineLength(e)
      case 'polygon':
        return getPolygonLength(e)
    }
  }
  function setDashoffset(e) {
    var t = getTotalLength(e)
    return e.setAttribute('stroke-dasharray', t), t
  }
  function getParentSvgEl(e) {
    for (var t = e.parentNode; is.svg(t) && is.svg(t.parentNode); )
      t = t.parentNode
    return t
  }
  function getParentSvg(e, t) {
    var i = t || {},
      r = i.el || getParentSvgEl(e),
      n = r.getBoundingClientRect(),
      a = getAttribute(r, 'viewBox'),
      o = n.width,
      s = n.height,
      l = i.viewBox || (a ? a.split(' ') : [0, 0, o, s])
    return {
      el: r,
      viewBox: l,
      x: l[0] / 1,
      y: l[1] / 1,
      w: o / l[2],
      h: s / l[3]
    }
  }
  function getPath(e, t) {
    var i = is.str(e) ? selectString(e)[0] : e,
      r = t || 100
    return function (e) {
      return {
        property: e,
        el: i,
        svg: getParentSvg(i),
        totalLength: getTotalLength(i) * (r / 100)
      }
    }
  }
  function getPathProgress(e, t) {
    function i(i) {
      void 0 === i && (i = 0)
      var r = t + i >= 1 ? t + i : 0
      return e.el.getPointAtLength(r)
    }
    var r = getParentSvg(e.el, e.svg),
      n = i(),
      a = i(-1),
      o = i(1)
    switch (e.property) {
      case 'x':
        return (n.x - r.x) * r.w
      case 'y':
        return (n.y - r.y) * r.h
      case 'angle':
        return (180 * Math.atan2(o.y - a.y, o.x - a.x)) / Math.PI
    }
  }
  function decomposeValue(e, t) {
    var i = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
      r = validateValue(is.pth(e) ? e.totalLength : e, t) + ''
    return {
      original: r,
      numbers: r.match(i) ? r.match(i).map(Number) : [0],
      strings: is.str(e) || t ? r.split(i) : []
    }
  }
  function parseTargets(e) {
    return filterArray(
      e ? flattenArray(is.arr(e) ? e.map(toArray) : toArray(e)) : [],
      function (e, t, i) {
        return i.indexOf(e) === t
      }
    )
  }
  function getAnimatables(e) {
    var t = parseTargets(e)
    return t.map(function (e, i) {
      return {
        target: e,
        id: i,
        total: t.length,
        transforms: { list: getElementTransforms(e) }
      }
    })
  }
  function normalizePropertyTweens(e, t) {
    var i = cloneObject(t)
    if (
      (/^spring/.test(i.easing) && (i.duration = spring(i.easing)), is.arr(e))
    ) {
      var r = e.length
      2 === r && !is.obj(e[0])
        ? (e = { value: e })
        : is.fnc(t.duration) || (i.duration = t.duration / r)
    }
    var n = is.arr(e) ? e : [e]
    return n
      .map(function (e, i) {
        var r = is.obj(e) && !is.pth(e) ? e : { value: e }
        return (
          is.und(r.delay) && (r.delay = i ? 0 : t.delay),
          is.und(r.endDelay) &&
            (r.endDelay = i === n.length - 1 ? t.endDelay : 0),
          r
        )
      })
      .map(function (e) {
        return mergeObjects(e, i)
      })
  }
  function flattenKeyframes(e) {
    for (
      var t = filterArray(
          flattenArray(
            e.map(function (e) {
              return Object.keys(e)
            })
          ),
          function (e) {
            return is.key(e)
          }
        ).reduce(function (e, t) {
          return e.indexOf(t) < 0 && e.push(t), e
        }, []),
        i = {},
        r = function (r) {
          var n = t[r]
          i[n] = e.map(function (e) {
            var t = {}
            for (var i in e)
              is.key(i) ? i == n && (t.value = e[i]) : (t[i] = e[i])
            return t
          })
        },
        n = 0;
      n < t.length;
      n++
    )
      r(n)
    return i
  }
  function getProperties(e, t) {
    var i = [],
      r = t.keyframes
    for (var n in (r && (t = mergeObjects(flattenKeyframes(r), t)), t))
      is.key(n) && i.push({ name: n, tweens: normalizePropertyTweens(t[n], e) })
    return i
  }
  function normalizeTweenValues(e, t) {
    var i = {}
    for (var r in e) {
      var n = getFunctionValue(e[r], t)
      is.arr(n) &&
        1 ===
          (n = n.map(function (e) {
            return getFunctionValue(e, t)
          })).length &&
        (n = n[0]),
        (i[r] = n)
    }
    return (
      (i.duration = parseFloat(i.duration)), (i.delay = parseFloat(i.delay)), i
    )
  }
  function normalizeTweens(e, t) {
    var i
    return e.tweens.map(function (r) {
      var n = normalizeTweenValues(r, t),
        a = n.value,
        o = is.arr(a) ? a[1] : a,
        s = getUnit(o),
        l = getOriginalTargetValue(t.target, e.name, s, t),
        c = i ? i.to.original : l,
        h = is.arr(a) ? a[0] : c,
        u = getUnit(h) || getUnit(l),
        d = s || u
      return (
        is.und(o) && (o = c),
        (n.from = decomposeValue(h, d)),
        (n.to = decomposeValue(getRelativeValue(o, h), d)),
        (n.start = i ? i.end : 0),
        (n.end = n.start + n.delay + n.duration + n.endDelay),
        (n.easing = parseEasings(n.easing, n.duration)),
        (n.isPath = is.pth(a)),
        (n.isColor = is.col(n.from.original)),
        n.isColor && (n.round = 1),
        (i = n),
        n
      )
    })
  }
  var setProgressValue = {
    css: function (e, t, i) {
      return (e.style[t] = i)
    },
    attribute: function (e, t, i) {
      return e.setAttribute(t, i)
    },
    object: function (e, t, i) {
      return (e[t] = i)
    },
    transform: function (e, t, i, r, n) {
      if ((r.list.set(t, i), t === r.last || n)) {
        var a = ''
        r.list.forEach(function (e, t) {
          a += t + '(' + e + ') '
        }),
          (e.style.transform = a)
      }
    }
  }
  function setTargetsValue(e, t) {
    getAnimatables(e).forEach(function (e) {
      for (var i in t) {
        var r = getFunctionValue(t[i], e),
          n = e.target,
          a = getUnit(r),
          o = getOriginalTargetValue(n, i, a, e),
          s = getRelativeValue(validateValue(r, a || getUnit(o)), o),
          l = getAnimationType(n, i)
        setProgressValue[l](n, i, s, e.transforms, !0)
      }
    })
  }
  function createAnimation(e, t) {
    var i = getAnimationType(e.target, t.name)
    if (i) {
      var r = normalizeTweens(t, e),
        n = r[r.length - 1]
      return {
        type: i,
        property: t.name,
        animatable: e,
        tweens: r,
        duration: n.end,
        delay: r[0].delay,
        endDelay: n.endDelay
      }
    }
  }
  function getAnimations(e, t) {
    return filterArray(
      flattenArray(
        e.map(function (e) {
          return t.map(function (t) {
            return createAnimation(e, t)
          })
        })
      ),
      function (e) {
        return !is.und(e)
      }
    )
  }
  function getInstanceTimings(e, t) {
    var i = e.length,
      r = function (e) {
        return e.timelineOffset ? e.timelineOffset : 0
      },
      n = {}
    return (
      (n.duration = i
        ? Math.max.apply(
            Math,
            e.map(function (e) {
              return r(e) + e.duration
            })
          )
        : t.duration),
      (n.delay = i
        ? Math.min.apply(
            Math,
            e.map(function (e) {
              return r(e) + e.delay
            })
          )
        : t.delay),
      (n.endDelay = i
        ? n.duration -
          Math.max.apply(
            Math,
            e.map(function (e) {
              return r(e) + e.duration - e.endDelay
            })
          )
        : t.endDelay),
      n
    )
  }
  var instanceID = 0
  function createNewInstance(e) {
    var t = replaceObjectProps(defaultInstanceSettings, e),
      i = replaceObjectProps(defaultTweenSettings, e),
      r = getProperties(i, e),
      n = getAnimatables(e.targets),
      a = getAnimations(n, r),
      o = getInstanceTimings(a, i),
      s = instanceID
    return (
      instanceID++,
      mergeObjects(t, {
        id: s,
        children: [],
        animatables: n,
        animations: a,
        duration: o.duration,
        delay: o.delay,
        endDelay: o.endDelay
      })
    )
  }
  var activeInstances = [],
    pausedInstances = [],
    raf,
    engine = (function () {
      function e() {
        raf = requestAnimationFrame(t)
      }
      function t(t) {
        var i = activeInstances.length
        if (i) {
          for (var r = 0; r < i; ) {
            var n = activeInstances[r]
            if (n.paused) {
              var a = activeInstances.indexOf(n)
              a > -1 &&
                (activeInstances.splice(a, 1), (i = activeInstances.length))
            } else n.tick(t)
            r++
          }
          e()
        } else raf = cancelAnimationFrame(raf)
      }
      return e
    })()
  function handleVisibilityChange() {
    document.hidden
      ? (activeInstances.forEach(function (e) {
          return e.pause()
        }),
        (pausedInstances = activeInstances.slice(0)),
        (anime.running = activeInstances = []))
      : pausedInstances.forEach(function (e) {
          return e.play()
        })
  }
  function anime(e) {
    void 0 === e && (e = {})
    var t,
      i = 0,
      r = 0,
      n = 0,
      a = 0,
      o = null
    function s(e) {
      var t =
        window.Promise &&
        new Promise(function (e) {
          return (o = e)
        })
      return (e.finished = t), t
    }
    var l = createNewInstance(e)
    s(l)
    function c() {
      var e = l.direction
      'alternate' !== e &&
        (l.direction = 'normal' !== e ? 'normal' : 'reverse'),
        (l.reversed = !l.reversed),
        t.forEach(function (e) {
          return (e.reversed = l.reversed)
        })
    }
    function h(e) {
      return l.reversed ? l.duration - e : e
    }
    function u() {
      ;(i = 0), (r = h(l.currentTime) * (1 / anime.speed))
    }
    function d(e, t) {
      t && t.seek(e - t.timelineOffset)
    }
    function f(e) {
      var t = 0,
        i = l.animations,
        r = i.length
      for (
        !0 === l.reversePlayback && !1 === l.rewind && (e = l.duration - e);
        t < r;

      ) {
        var n = i[t],
          a = n.animatable,
          o = n.tweens,
          s = o.length - 1,
          c = o[s]
        s &&
          (c =
            filterArray(o, function (t) {
              return e < t.end
            })[0] || c)
        for (
          var h = minMax(e - c.start - c.delay, 0, c.duration) / c.duration,
            u = isNaN(h) ? 1 : c.easing(h),
            d = c.to.strings,
            f = c.round,
            p = [],
            m = c.to.numbers.length,
            g = void 0,
            v = 0;
          v < m;
          v++
        ) {
          var y = void 0
          if (!0 === l.reversePlayback && !1 === l.rewind)
            var E = c.to.numbers[v],
              A = c.from.numbers[v] || 0
          else (A = c.to.numbers[v]), (E = c.from.numbers[v] || 0)
          ;(y = c.isPath ? getPathProgress(c.value, u * A) : E + u * (A - E)),
            f && ((c.isColor && v > 2) || (y = Math.round(y * f) / f)),
            p.push(y)
        }
        var x = d.length
        if (x) {
          g = d[0]
          for (var T = 0; T < x; T++) {
            d[T]
            var w = d[T + 1],
              b = p[T]
            isNaN(b) || (g += w ? b + w : b + ' ')
          }
        } else g = p[0]
        setProgressValue[n.type](a.target, n.property, g, a.transforms),
          (n.currentValue = g),
          t++
      }
    }
    function p(e) {
      l[e] && !l.passThrough && l[e](l)
    }
    function m(e) {
      var u = l.duration,
        m = l.delay,
        g = u - l.endDelay,
        v = h(e)
      ;(l.progress = minMax((v / u) * 100, 0, 100)),
        (l.reversePlayback = v < l.currentTime),
        t &&
          (function (e) {
            if (l.reversePlayback) for (var i = a; i--; ) d(e, t[i])
            else for (var r = 0; r < a; r++) d(e, t[r])
          })(v),
        !l.began && l.currentTime > 0 && ((l.began = !0), p('begin')),
        !l.loopBegan &&
          l.currentTime > 0 &&
          ((l.loopBegan = !0), p('loopBegin')),
        v <= m && 0 !== l.currentTime && f(0),
        ((v >= g && l.currentTime !== u) || !u) && f(u),
        v > m && v < g
          ? (l.changeBegan ||
              ((l.changeBegan = !0),
              (l.changeCompleted = !1),
              p('changeBegin')),
            p('change'),
            f(v))
          : l.changeBegan &&
            ((l.changeCompleted = !0),
            (l.changeBegan = !1),
            p('changeComplete')),
        (l.currentTime = minMax(v, 0, u)),
        l.began && p('update'),
        e >= u &&
          ((r = 0),
          l.remaining && !0 !== l.remaining && l.remaining--,
          l.remaining
            ? ((i = n),
              p('loopComplete'),
              (l.loopBegan = !1),
              'alternate' === l.direction && c())
            : ((l.paused = !0),
              l.completed ||
                ((l.completed = !0),
                p('loopComplete'),
                p('complete'),
                !l.passThrough && 'Promise' in window && (o(), s(l)))))
    }
    return (
      (l.reset = function () {
        var e = l.direction
        ;(l.passThrough = !1),
          (l.currentTime = 0),
          (l.progress = 0),
          (l.paused = !0),
          (l.began = !1),
          (l.loopBegan = !1),
          (l.changeBegan = !1),
          (l.completed = !1),
          (l.changeCompleted = !1),
          (l.reversePlayback = !1),
          (l.reversed = 'reverse' === e),
          (l.remaining = l.loop),
          (t = l.children)
        for (var i = (a = t.length); i--; ) l.children[i].reset()
        ;((l.reversed && !0 !== l.loop) ||
          ('alternate' === e && 1 === l.loop)) &&
          l.remaining++,
          f(l.reversed ? l.duration : 0)
      }),
      (l.set = function (e, t) {
        return setTargetsValue(e, t), l
      }),
      (l.tick = function (e) {
        ;(n = e), i || (i = n), m((n + (r - i)) * anime.speed)
      }),
      (l.seek = function (e) {
        m(h(e))
      }),
      (l.pause = function () {
        ;(l.paused = !0), u()
      }),
      (l.play = function () {
        l.paused &&
          (l.completed && l.reset(),
          (l.paused = !1),
          activeInstances.push(l),
          u(),
          raf || engine())
      }),
      (l.reverse = function () {
        c(), (l.completed = !l.reversed), u()
      }),
      (l.restart = function () {
        l.reset(), l.play()
      }),
      l.reset(),
      l.autoplay && l.play(),
      l
    )
  }
  function removeTargetsFromAnimations(e, t) {
    for (var i = t.length; i--; )
      arrayContains(e, t[i].animatable.target) && t.splice(i, 1)
  }
  function removeTargets(e) {
    for (var t = parseTargets(e), i = activeInstances.length; i--; ) {
      var r = activeInstances[i],
        n = r.animations,
        a = r.children
      removeTargetsFromAnimations(t, n)
      for (var o = a.length; o--; ) {
        var s = a[o],
          l = s.animations
        removeTargetsFromAnimations(t, l),
          l.length || s.children.length || a.splice(o, 1)
      }
      n.length || a.length || r.pause()
    }
  }
  function stagger(e, t) {
    void 0 === t && (t = {})
    var i = t.direction || 'normal',
      r = t.easing ? parseEasings(t.easing) : null,
      n = t.grid,
      a = t.axis,
      o = t.from || 0,
      s = 'first' === o,
      l = 'center' === o,
      c = 'last' === o,
      h = is.arr(e),
      u = h ? parseFloat(e[0]) : parseFloat(e),
      d = h ? parseFloat(e[1]) : 0,
      f = getUnit(h ? e[1] : e) || 0,
      p = t.start || 0 + (h ? u : 0),
      m = [],
      g = 0
    return function (e, t, v) {
      if ((s && (o = 0), l && (o = (v - 1) / 2), c && (o = v - 1), !m.length)) {
        for (var y = 0; y < v; y++) {
          if (n) {
            var E = l ? (n[0] - 1) / 2 : o % n[0],
              A = l ? (n[1] - 1) / 2 : Math.floor(o / n[0]),
              x = E - (y % n[0]),
              T = A - Math.floor(y / n[0]),
              w = Math.sqrt(x * x + T * T)
            'x' === a && (w = -x), 'y' === a && (w = -T), m.push(w)
          } else m.push(Math.abs(o - y))
          g = Math.max.apply(Math, m)
        }
        r &&
          (m = m.map(function (e) {
            return r(e / g) * g
          })),
          'reverse' === i &&
            (m = m.map(function (e) {
              return a ? (e < 0 ? -1 * e : -e) : Math.abs(g - e)
            }))
      }
      return p + (h ? (d - u) / g : u) * (Math.round(100 * m[t]) / 100) + f
    }
  }
  function timeline(e) {
    void 0 === e && (e = {})
    var t = anime(e)
    return (
      (t.duration = 0),
      (t.add = function (i, r) {
        var n = activeInstances.indexOf(t),
          a = t.children
        function o(e) {
          e.passThrough = !0
        }
        n > -1 && activeInstances.splice(n, 1)
        for (var s = 0; s < a.length; s++) o(a[s])
        var l = mergeObjects(i, replaceObjectProps(defaultTweenSettings, e))
        l.targets = l.targets || e.targets
        var c = t.duration
        ;(l.autoplay = !1),
          (l.direction = t.direction),
          (l.timelineOffset = is.und(r) ? c : getRelativeValue(r, c)),
          o(t),
          (l.rewind = t.rewind),
          t.seek(l.timelineOffset)
        var h = anime(l)
        o(h), a.push(h)
        var u = getInstanceTimings(a, e)
        return (
          (t.delay = u.delay),
          (t.endDelay = u.endDelay),
          (t.duration = u.duration),
          t.seek(0),
          t.reset(),
          t.autoplay && t.play(),
          t
        )
      }),
      t
    )
  }
  'undefined' != typeof document &&
    document.addEventListener('visibilitychange', handleVisibilityChange),
    (anime.version = '3.2.0'),
    (anime.speed = 1),
    (anime.running = activeInstances),
    (anime.remove = removeTargets),
    (anime.get = getOriginalTargetValue),
    (anime.set = setTargetsValue),
    (anime.convertPx = convertPxToUnit),
    (anime.path = getPath),
    (anime.setDashoffset = setDashoffset),
    (anime.stagger = stagger),
    (anime.timeline = timeline),
    (anime.easing = parseEasings),
    (anime.penner = penner),
    (anime.random = function (e, t) {
      return Math.floor(Math.random() * (t - e + 1)) + e
    })
  var InteractionStatesManager = (function () {
    function e(e) {
      this.i = e
    }
    return (
      (e.prototype.updateObject = function () {
        void 0 !== this.i.selectedState &&
          this.i.states[this.i.selectedState].updateMatrix(this.i.object)
      }),
      (e.prototype.updateCamera = function () {
        void 0 !== this.i.selectedState &&
          'CombinedCamera' === this.i.object.objectType &&
          (this.i.states[this.i.selectedState].updateMatrix(this.i.object),
          this.i.states[this.i.selectedState].updateCamera(this.i.object))
      }),
      (e.prototype.updateGeometry = function () {
        void 0 !== this.i.selectedState &&
          !1 !== isMeshEntity(this.i.object) &&
          (this.i.states[this.i.selectedState].updateMatrix(this.i.object),
          this.i.states[this.i.selectedState].updateGeometry(this.i.object))
      }),
      (e.prototype.updateSceneGraph = function (e, t) {
        var i = new THREE.Matrix4(),
          r = new THREE.Matrix4()
        e.updateWorldMatrix(!0, !1), r.getInverse(e.matrixWorld)
        for (var n = 0, a = this.i.states.length; n < a; ++n) {
          var o = this.i.states[n]
          i.copy(r),
            null !== this.i.object.parent &&
              (this.i.object.parent.updateWorldMatrix(!0, !1),
              i.multiply(this.i.object.parent.matrixWorld)),
            o.hiddenMatrix.premultiply(i)
        }
      }),
      (e.prototype.updateMaterialLayer = function (e) {
        if (
          void 0 !== this.i.selectedState &&
          !1 !== isMeshEntity(this.i.object)
        ) {
          var t = this.i.object.selectedMaterial,
            i = this.i.states[this.i.selectedState],
            r = (void 0 !== t ? i.material[t] : i.material).layersList.find(
              function (t) {
                return t.id === e.id
              }
            )
          null == r || r.copy(e)
        }
      }),
      (e.prototype.pushMaterialLayer = function (e) {
        if (0 !== this.i.states.length && !1 !== isMeshEntity(this.i.object)) {
          var t = this.i.object
          if (t.material instanceof Array) {
            var i = t.selectedMaterial
            if (void 0 !== i)
              for (var r = 0, n = this.i.states.length; r < n; ++r) {
                var a = e.clone()
                this.i.selectedState !== r &&
                  (a.uniforms['f' + a.id + '_alpha'].value = 0),
                  this.i.states[r].material[i].layersList.push(a)
              }
          } else
            for (r = 0, n = this.i.states.length; r < n; ++r) {
              a = e.clone()
              this.i.selectedState !== r &&
                (a.uniforms['f' + a.id + '_alpha'].value = 0),
                this.i.states[r].material.layersList.push(a)
            }
        }
      }),
      (e.prototype.popMaterialLayer = function () {
        if (0 !== this.i.states.length && !1 !== isMeshEntity(this.i.object)) {
          var e = this.i.object
          if (e.material instanceof Array) {
            var t = e.selectedMaterial
            if (void 0 !== t)
              for (var i = 0, r = this.i.states.length; i < r; ++i) {
                this.i.states[i].material[t].layersList.pop()
              }
          } else
            for (i = 0, r = this.i.states.length; i < r; ++i) {
              this.i.states[i].material.layersList.pop()
            }
        }
      }),
      (e.prototype.removeMaterialLayer = function (e) {
        if (0 === this.i.states.length || !1 === isMeshEntity(this.i.object))
          return null
        var t = this.i.object,
          i = []
        if (t.material instanceof Array)
          for (var r = 0, n = this.i.states.length; r < n; ++r) {
            var a = t.selectedMaterial
            if (void 0 !== a) {
              var o = this.i.states[r].material[a]
              i.push({ layer: o.layersList[e] }), o.layersList.splice(e, 1)
            }
          }
        else
          for (r = 0, n = this.i.states.length; r < n; ++r) {
            o = this.i.states[r].material
            i.push({ layer: o.layersList[e] }), o.layersList.splice(e, 1)
          }
        return { states: i, pos: e }
      }),
      (e.prototype.restoreMaterialLayerRemoved = function (e) {
        if (0 !== this.i.states.length && !1 !== isMeshEntity(this.i.object)) {
          var t = this.i.object
          if (t.material instanceof Array)
            for (var i = 0, r = this.i.states.length; i < r; ++i) {
              var n = t.selectedMaterial
              if (void 0 !== n)
                this.i.states[i].material[n].layersList.splice(
                  e.pos,
                  0,
                  e.states[i].layer
                )
            }
          else
            for (i = 0, r = this.i.states.length; i < r; ++i) {
              this.i.states[i].material.layersList.splice(
                e.pos,
                0,
                e.states[i].layer
              )
            }
        }
      }),
      (e.prototype.changeMaterialLayer = function (e) {
        if (0 === this.i.states.length || !1 === isMeshEntity(this.i.object))
          return null
        var t = this.i.object,
          i = [],
          r = 0
        if (t.material instanceof Array) {
          var n = t.selectedMaterial
          if (void 0 !== n) {
            for (
              var a = 0,
                o = (c =
                  this.i.states[Number(this.i.selectedState)].material[n]
                    .layersList).length;
              a < o;
              ++a
            )
              if (c[a].id === e.id) {
                r = a
                break
              }
            for (a = 0, o = this.i.states.length; a < o; ++a) {
              var s = this.i.states[a].material[n].layersList[r],
                l = e.clone()
              this.i.selectedState !== a &&
                (l.uniforms['f' + l.id + '_alpha'].value = Number(
                  s.uniforms['f' + s.id + '_alpha'].value
                )),
                (this.i.states[a].material[n].layersList[r] = l),
                i.push({ layer: s })
            }
          }
        } else {
          var c
          for (
            a = 0,
              o = (c =
                this.i.states[Number(this.i.selectedState)].material.layersList)
                .length;
            a < o;
            ++a
          )
            if (c[a].id === e.id) {
              r = a
              break
            }
          for (a = 0, o = this.i.states.length; a < o; ++a) {
            ;(s = this.i.states[a].material.layersList[r]), (l = e.clone())
            this.i.selectedState !== a &&
              (l.uniforms['f' + l.id + '_alpha'].value = Number(
                s.uniforms['f' + s.id + '_alpha'].value
              )),
              (this.i.states[a].material.layersList[r] = l),
              i.push({ layer: s })
          }
        }
        return { states: i, pos: r }
      }),
      (e.prototype.restoreMaterialLayerChanged = function (e) {
        if (0 !== this.i.states.length && !1 !== isMeshEntity(this.i.object)) {
          var t = this.i.object
          if (t.material instanceof Array) {
            var i = t.selectedMaterial
            if (void 0 !== i)
              for (var r = 0, n = this.i.states.length; r < n; ++r)
                this.i.states[r].material[i].layersList[e.pos] =
                  e.states[r].layer
          } else
            for (r = 0, n = this.i.states.length; r < n; ++r)
              this.i.states[r].material.layersList[e.pos] = e.states[r].layer
        }
      }),
      (e.prototype.moveMaterialLayer = function (e, t) {
        if (0 !== this.i.states.length && !1 !== isMeshEntity(this.i.object)) {
          var i = this.i.object
          if (i.material instanceof Array) {
            var r = i.selectedMaterial
            if (void 0 !== r)
              for (var n = 0, a = this.i.states.length; n < a; ++n) {
                var o = (s = this.i.states[n].material[r].layersList)[e]
                ;(s[e] = s[t]), (s[t] = o)
              }
          } else
            for (n = 0, a = this.i.states.length; n < a; ++n) {
              var s
              o = (s = this.i.states[n].material.layersList)[e]
              ;(s[e] = s[t]), (s[t] = o)
            }
        }
      }),
      (e.prototype.restoreMaterialLayerMoved = function (e, t) {
        this.moveMaterialLayer(e, t)
      }),
      (e.prototype.setMaterialLayers = function (e) {
        var t = this.i.object,
          i = []
        if (t.material instanceof Array) {
          var r = t.selectedMaterial
          if (void 0 !== r)
            for (var n = 0, a = this.i.states.length; n < a; ++n) {
              var o = this.i.states[n].material[r]
              i.push({ layersList: o.layersList })
              var s = e.head
              for (o.layersList = []; void 0 !== s; )
                o.layersList.push(s.clone()), (s = s.next)
            }
        } else
          for (n = 0, a = this.i.states.length; n < a; ++n) {
            o = this.i.states[n].material
            i.push({ layersList: o.layersList })
            s = e.head
            for (o.layersList = []; void 0 !== s; )
              o.layersList.push(s.clone()), (s = s.next)
          }
        return { states: i }
      }),
      (e.prototype.restoreMaterialLayersSet = function (e) {
        var t = this.i.object
        if (t.material instanceof Array) {
          var i = t.selectedMaterial
          if (void 0 !== i)
            for (var r = 0, n = this.i.states.length; r < n; ++r)
              this.i.states[r].material[i].layersList = e.states[r].layersList
        } else
          for (r = 0, n = this.i.states.length; r < n; ++r)
            this.i.states[r].material.layersList = e.states[r].layersList
      }),
      e
    )
  })()
  function serialize(e, t, i) {
    return void 0 === e[t.uuid] && (e[t.uuid] = t.toJSON(i)), t.uuid
  }
  function serializeGeometry(e, t) {
    if (void 0 === e[t.uuid])
      if ('NonParametricGeometry' === t.userData.type) {
        var i = t.originalGeometry
        if (void 0 !== i) {
          var r = t.userData
          ;(t = i).userData = r
        }
        e[t.uuid] = t.toJSON()
      } else {
        if ('VectorGeometry' === (r = t.userData).type) {
          var n = t.userData.shape
          r = Object.assign({}, r, { shape: n.toJSON() })
        }
        e[t.uuid] = { uuid: t.uuid, userData: r }
      }
    return t.uuid
  }
  function extractFromCache(e) {
    var t = []
    for (var i in e) {
      var r = e[i]
      delete r.metadata, t.push(r)
    }
    return t
  }
  var Interaction = (function () {
      function e(e) {
        ;(this.object = e),
          (this.uuid = THREE.MathUtils.generateUUID()),
          (this.states = []),
          (this.events = []),
          (this.statesManager = new InteractionStatesManager(this))
      }
      return (
        (e.prototype.computeCache = function () {
          return (
            (this.cache = {
              mouseDown: this.events.find(function (e) {
                return e.type === INTERACTION_EVENT.MOUSE_DOWN
              }),
              mouseUp: this.events.find(function (e) {
                return e.type === INTERACTION_EVENT.MOUSE_UP
              }),
              mouseHover: this.events.find(function (e) {
                return e.type === INTERACTION_EVENT.MOUSE_HOVER
              }),
              start: this.events.find(function (e) {
                return e.type === INTERACTION_EVENT.START
              }),
              lookAt: this.events.find(function (e) {
                return e.type === INTERACTION_EVENT.LOOK_AT
              }),
              follow: this.events.find(function (e) {
                return e.type === INTERACTION_EVENT.FOLLOW
              }),
              keyDown: this.events.filter(function (e) {
                return e.type === INTERACTION_EVENT.KEY_DOWN
              }),
              keyUp: this.events.filter(function (e) {
                return e.type === INTERACTION_EVENT.KEY_UP
              })
            }),
            this.cache
          )
        }),
        (e.prototype.newState = function (e) {
          var t = new InteractionState()
          return (
            (t.name = e),
            t.update(this.object),
            (this.selectedState = this.states.length),
            this.states.push(t),
            t
          )
        }),
        (e.prototype.addState = function (e, t) {
          this.states.splice(t, 0, e)
        }),
        (e.prototype.removeState = function (e) {
          this.selectedState === e && (this.selectedState = void 0),
            this.states.splice(e, 1)
        }),
        (e.prototype.selectState = function (e) {
          void 0 !== e && this.states[e].execute(this.object),
            (this.selectedState = e)
        }),
        (e.prototype.hasEventType = function (e, t) {
          return e === INTERACTION_EVENT.KEY_DOWN ||
            e === INTERACTION_EVENT.KEY_UP
            ? void 0 !== t &&
                this.events.some(function (i) {
                  return i.type === e && i.key === t
                })
            : this.events.some(function (t) {
                return t.type === e
              })
        }),
        (e.prototype.newEvent = function () {
          var e = this,
            t = [
              INTERACTION_EVENT.MOUSE_DOWN,
              INTERACTION_EVENT.MOUSE_UP,
              INTERACTION_EVENT.MOUSE_HOVER,
              INTERACTION_EVENT.KEY_DOWN
            ].find(function (t) {
              return !1 === e.hasEventType(t)
            }),
            i = new InteractionEvent(t)
          return this.events.push(i), i
        }),
        (e.prototype.addEvent = function (e, t) {
          this.events.splice(t, 0, e)
          for (var i = this.events[t].targets, r = 0, n = i.length; r < n; ++r)
            void 0 !== i[r].object && interactionTargets.add(i[r])
        }),
        (e.prototype.removeEvent = function (e) {
          for (var t = this.events[e].targets, i = 0, r = t.length; i < r; ++i)
            void 0 !== t[i].object && interactionTargets.delete(t[i])
          this.events.splice(e, 1)
        }),
        (e.prototype.copy = function (e) {
          this.selectedState = e.selectedState
          for (var t = 0, i = e.states.length; t < i; ++t)
            this.addState(e.states[t].clone(), t)
          for (t = 0, i = e.events.length; t < i; ++t) {
            this.addEvent(e.events[t].clone(), t)
            for (var r = e.events[t].targets, n = 0, a = r.length; n < a; ++n) {
              var o = r[n].clone()
              r[n].object === e.object
                ? ((o.object = this.object),
                  (o.state = this.states[e.states.indexOf(r[n].state)]))
                : ((o.object = r[n].object), (o.state = r[n].state)),
                this.events[t].addTarget(o, n)
            }
          }
          return this
        }),
        (e.prototype.clone = function (t) {
          return new e(t).copy(this)
        }),
        (e.prototype.toJSON = function (e) {
          void 0 === e &&
            (e = {
              geometries: {},
              materials: {},
              textures: {},
              images: {},
              interactionStates: {}
            })
          var t = { uuid: this.uuid }
          if (
            (void 0 !== this.selectedState &&
              (t.selectedState = this.selectedState),
            this.states.length > 0)
          ) {
            t.states = []
            for (var i = 0, r = this.states.length; i < r; ++i)
              t.states.push(serialize(e.interactionStates, this.states[i], e))
          }
          if (this.events.length > 0) {
            t.events = []
            for (i = 0, r = this.events.length; i < r; ++i)
              t.events.push(this.events[i].toJSON())
          }
          return t
        }),
        (e.prototype.fromJSON = function (e, t, i) {
          if (
            ((this.uuid = e.uuid),
            (this.selectedState = e.selectedState),
            (this.states = []),
            (this.events = []),
            void 0 !== e.states)
          )
            for (var r = 0, n = e.states.length; r < n; ++r)
              this.states.push(i[e.states[r]])
          if (void 0 !== e.events)
            for (r = 0, n = e.events.length; r < n; ++r)
              this.events.push(
                new InteractionEvent().fromJSON(e.events[r], t, i)
              )
          return this
        }),
        (e.prototype.start = function () {
          void 0 !== this._animation &&
            (this._animation.pause(),
            (this._animation = void 0),
            this._removeBackLayer()),
            this.states.length > 1
              ? (this.states[0].execute(this.object),
                (this._currentState = this.states[0]),
                (this._prevState = void 0))
              : void 0 !== this._state0
              ? this._state0.execute(this.object)
              : this.events.some(function (e) {
                  return (
                    e.type === INTERACTION_EVENT.LOOK_AT ||
                    e.type === INTERACTION_EVENT.FOLLOW
                  )
                }) &&
                ((this._state0 = new InteractionState()),
                this._state0.update(this.object))
        }),
        (e.prototype.end = function () {
          var e
          void 0 !== this._animation &&
            (this._animation.pause(),
            (this._animation = void 0),
            this._removeBackLayer()),
            this.states.length > 1
              ? this.states[
                  null !== (e = this.selectedState) && void 0 !== e ? e : 0
                ].execute(this.object)
              : void 0 !== this._state0 &&
                (this._state0.execute(this.object), (this._state0 = void 0)),
            (this._currentState = void 0),
            (this._prevState = void 0)
        }),
        (e.prototype.lookAt = function (e) {
          var t,
            i = this
          this.object.lookAt(e),
            null === (t = this._animation) ||
              void 0 === t ||
              t.finished.then(function () {
                i.lookAt(e)
              })
        }),
        (e.prototype.follow = function (e) {
          this.object.position.copy(e),
            null !== this.object.parent &&
              this.object.position.applyMatrix4(
                new THREE.Matrix4().getInverse(this.object.parent.matrixWorld)
              ),
            this.object.position.applyMatrix4(
              new THREE.Matrix4().getInverse(this.object.hiddenMatrix)
            )
        }),
        (e.prototype.play = function (e) {
          this.object.visible && void 0 !== e.state && this.animate(e.state, e)
        }),
        (e.prototype.reverse = function (e) {
          this.object.visible &&
            void 0 !== this._prevState &&
            this.animate(this._prevState, e)
        }),
        (e.prototype._removeBackLayer = function () {
          if ('material' in this.object) {
            var e = this.object.material
            if (e instanceof Array)
              for (var t = 0, i = e.length; t < i; ++t)
                for (var r = (a = e[t].layersList).head; r; )
                  if (r.backLayer) {
                    delete r.backLayer
                    var n = r.next
                    a.removeLayer(r.id), (r = n)
                  } else
                    r.isBack ? (delete r.isBack, (r = r.next)) : (r = r.next)
            else {
              var a
              for (r = (a = e.layersList).head; r; )
                for (; r; )
                  if (r.backLayer) {
                    delete r.backLayer
                    n = r.next
                    a.removeLayer(r.id), (r = n)
                  } else
                    r.isBack ? (delete r.isBack, (r = r.next)) : (r = r.next)
            }
          }
        }),
        (e.prototype.getTimingFunction = function (e, t, i) {
          switch (e) {
            case INTERACTION_EASING.LINEAR:
              return 'cubicBezier( 0, 0, 1, 1 )'
            case INTERACTION_EASING.EASE:
              return 'cubicBezier( .25, .1, .25, 1 )'
            case INTERACTION_EASING.EASE_IN:
              return 'cubicBezier( .42, 0, 1, 1 )'
            case INTERACTION_EASING.EASE_OUT:
              return 'cubicBezier( 0, 0, .58, 1 )'
            case INTERACTION_EASING.EASE_IN_OUT:
              return 'cubicBezier( .42, 0, .58, 1 )'
            case INTERACTION_EASING.CUBIC:
              return (
                'cubicBezier( ' +
                t[0] +
                ', ' +
                t[1] +
                ', ' +
                t[2] +
                ', ' +
                t[3] +
                ' )'
              )
            case INTERACTION_EASING.SPRING:
              return (
                'spring( ' +
                i.mass +
                ', ' +
                i.stiffness +
                ', ' +
                i.damping +
                ', ' +
                i.velocity +
                ' )'
              )
          }
        }),
        (e.prototype.animate = function (e, t) {
          var i,
            r,
            n,
            a,
            o,
            s,
            l = this
          if (this._currentState === e) {
            if (
              null === (i = this._animation) || void 0 === i
                ? void 0
                : i.reversed
            ) {
              var c =
                null !==
                  (n =
                    null === (r = this._animation) || void 0 === r
                      ? void 0
                      : r.currentTime) && void 0 !== n
                  ? n
                  : 0
              null === (a = this._animation) || void 0 === a || a.reset(),
                null === (o = this._animation) || void 0 === o || o.seek(c),
                null === (s = this._animation) || void 0 === s || s.play()
            }
          } else
            (this._prevState = this._currentState),
              (this._currentState = e),
              void 0 !== this._animation && this._animation.pause(),
              this._removeBackLayer(),
              !0 === t.cycle && !0 === t.repeat
                ? (this._animation = anime.timeline({
                    duration: t.duration,
                    delay: t.delay / 2,
                    endDelay: t.delay / 2,
                    direction: 'alternate',
                    loop: !0,
                    rewind: t.rewind,
                    easing: this.getTimingFunction(
                      t.easing,
                      t.cubicControls,
                      t.springParameters
                    )
                  }))
                : !0 === t.cycle && !1 === t.repeat
                ? (this._animation = anime.timeline({
                    duration: t.duration,
                    delay: t.delay,
                    endDelay: t.delay / 2,
                    direction: 'alternate',
                    rewind: t.rewind,
                    easing: this.getTimingFunction(
                      t.easing,
                      t.cubicControls,
                      t.springParameters
                    )
                  }))
                : !1 === t.cycle && !0 === t.repeat
                ? (this._animation = anime.timeline({
                    duration: t.duration,
                    delay: t.delay,
                    direction: 'normal',
                    loop: !0,
                    easing: this.getTimingFunction(
                      t.easing,
                      t.cubicControls,
                      t.springParameters
                    )
                  }))
                : (this._animation = anime.timeline({
                    duration: t.duration,
                    delay: t.delay,
                    direction: 'normal',
                    easing: this.getTimingFunction(
                      t.easing,
                      t.cubicControls,
                      t.springParameters
                    )
                  })),
              this._animation.finished.then(function () {
                l._removeBackLayer(),
                  (l._animation = void 0),
                  (l._currentState = void 0)
              }),
              this.animateMatrix(e),
              this.animateGeometry(e),
              this.animateMaterial(e),
              this.animateCamera(e)
        }),
        (e.prototype.animateMatrix = function (e) {
          var t,
            i,
            r,
            n,
            a = this
          if (!1 === this.object.position.equals(e.position)) {
            var o = this.object.position.clone(),
              s = { t: 0 }
            null === (t = this._animation) ||
              void 0 === t ||
              t.add(
                {
                  targets: s,
                  t: 1,
                  update: function () {
                    a.object.position.lerpVectors(o, e.position, s.t)
                  }
                },
                0
              )
          }
          if (!1 === this.object.scale.equals(e.scale)) {
            var l = this.object.scale.clone(),
              c = { t: 0 }
            null === (i = this._animation) ||
              void 0 === i ||
              i.add(
                {
                  targets: c,
                  t: 1,
                  update: function () {
                    a.object.scale.lerpVectors(l, e.scale, c.t)
                  }
                },
                0
              )
          }
          if (!1 === this.object.rotation.equals(e.rotation)) {
            var h = this.object.quaternion.clone(),
              u = { t: 0 },
              d = {
                x: this.object.rotation.x - e.rotation.x,
                y: this.object.rotation.y - e.rotation.y,
                z: this.object.rotation.z - e.rotation.z
              },
              f = e.rotation.clone(),
              p = 0.01 * THREE.MathUtils.DEG2RAD,
              m = 359.99 * THREE.MathUtils.DEG2RAD
            d.x === 2 * Math.PI
              ? 0 === f.x
                ? (f.x = p)
                : f.x === 2 * Math.PI && (f.x = m)
              : d.x === 2 * -Math.PI &&
                (0 === f.x ? (f.x = -p) : f.x === 2 * Math.PI && (f.x = -m)),
              d.y === 2 * Math.PI
                ? 0 === f.y
                  ? (f.y = p)
                  : f.y === 2 * Math.PI && (f.y = m)
                : d.y === 2 * -Math.PI &&
                  (0 === f.y ? (f.y = -p) : f.y === 2 * Math.PI && (f.y = -m)),
              d.z === 2 * Math.PI
                ? 0 === f.z
                  ? (f.z = p)
                  : f.z === 2 * Math.PI && (f.z = m)
                : d.z === 2 * -Math.PI &&
                  (0 === f.z ? (f.z = -p) : f.z === 2 * Math.PI && (f.z = -m))
            var g = new THREE.Quaternion().setFromEuler(f)
            null === (r = this._animation) ||
              void 0 === r ||
              r.add(
                {
                  targets: u,
                  t: 1,
                  update: function () {
                    slerp(h, g, a.object.quaternion, u.t)
                  }
                },
                0
              )
          }
          var v = new THREE.Vector3(),
            y = new THREE.Quaternion(),
            E = new THREE.Vector3(),
            A = new THREE.Vector3(),
            x = new THREE.Quaternion(),
            T = new THREE.Vector3(),
            w = new THREE.Vector3(),
            b = new THREE.Quaternion(),
            S = new THREE.Vector3()
          if (
            (e.hiddenMatrix.decompose(A, x, T),
            'hiddenMatrix' in this.object &&
              (this.object.hiddenMatrix.decompose(v, y, E),
              !1 === this.object.hiddenMatrix.equals(e.hiddenMatrix)))
          ) {
            var C = { t: 0 },
              _ = this.object.hiddenMatrix
            null === (n = this._animation) ||
              void 0 === n ||
              n.add(
                {
                  targets: C,
                  t: 1,
                  update: function () {
                    THREE.Quaternion.slerp(y, x, b, C.t),
                      w.lerpVectors(v, A, C.t),
                      S.lerpVectors(E, T, C.t),
                      _.compose(w, b, S)
                  }
                },
                0
              )
          }
        }),
        (e.prototype.animateGeometry = function (e) {
          var t
          if ('geometry' in this.object && void 0 !== e.geometry) {
            var i = this.object.geometry.userData.parameters,
              r = e.geometry
            if (
              r.width !== i.width ||
              r.height !== i.height ||
              r.depth !== i.depth
            ) {
              var n = this.object
              null === (t = this._animation) ||
                void 0 === t ||
                t.add(
                  {
                    targets: i,
                    width: r.width,
                    height: r.height,
                    depth: r.depth,
                    update: function () {
                      n.updateGeometry({
                        parameters: {
                          width: i.width,
                          height: i.height,
                          depth: i.depth
                        }
                      })
                    }
                  },
                  0
                )
            }
          }
        }),
        (e.prototype.animateMaterial = function (e) {
          var t = this
          if ('material' in this.object) {
            var i = function (e, i, r, n) {
                var a, o, s, l, c
                void 0 === n && (n = i.paramNames)
                for (
                  var h = e.layersList,
                    u = function (e, c) {
                      var u = n[e],
                        d = 'f' + i.id + '_' + u,
                        f = 'f' + r.id + '_' + u,
                        p = i.uniforms[d],
                        m = r.uniforms[f]
                      if ('mode' === u || 'boolean' == typeof p.value)
                        return (
                          p.value !== m.value &&
                            ('boolean' == typeof p.value
                              ? (p.value = m.value)
                              : (p.value = Number(m.value)),
                            h.updateLayerUniformByLayer(i, d)),
                          'continue'
                        )
                      if ('number' == typeof p.value)
                        return (
                          p.value !== m.value &&
                            (null === (a = t._animation) ||
                              void 0 === a ||
                              a.add(
                                {
                                  targets: p,
                                  value: Number(m.value),
                                  update: function () {
                                    h.updateLayerUniformByLayer(i, d)
                                  }
                                },
                                0
                              )),
                          'continue'
                        )
                      if (('isVector2' in p.value)) {
                        var g = m.value
                        return (
                          !1 === (v = p.value).equals(g) &&
                            (null === (o = t._animation) ||
                              void 0 === o ||
                              o.add(
                                {
                                  targets: v,
                                  x: g.x,
                                  y: g.y,
                                  update: function () {
                                    h.updateLayerUniformByLayer(i, d)
                                  }
                                },
                                0
                              )),
                          'continue'
                        )
                      }
                      if (('isVector3' in p.value)) {
                        g = m.value
                        return (
                          !1 === (v = p.value).equals(g) &&
                            (null === (s = t._animation) ||
                              void 0 === s ||
                              s.add(
                                {
                                  targets: v,
                                  x: g.x,
                                  y: g.y,
                                  z: g.z,
                                  update: function () {
                                    h.updateLayerUniformByLayer(i, d)
                                  }
                                },
                                0
                              )),
                          'continue'
                        )
                      }
                      if (('isColor' in p.value)) {
                        var v
                        g = m.value
                        return (
                          !1 === (v = p.value).equals(g) &&
                            (null === (l = t._animation) ||
                              void 0 === l ||
                              l.add(
                                {
                                  targets: v,
                                  r: g.r,
                                  g: g.g,
                                  b: g.b,
                                  update: function () {
                                    h.updateLayerUniformByLayer(i, d)
                                  }
                                },
                                0
                              )),
                          'continue'
                        )
                      }
                    },
                    d = 0,
                    f = n.length;
                  d < f;
                  ++d
                )
                  u(d)
                if (i.backLayer) {
                  var p = i.backLayer.id,
                    m = 'f' + p + '_alpha',
                    g = i.backLayer.uniforms[m]
                  null === (c = t._animation) ||
                    void 0 === c ||
                    c.add(
                      {
                        targets: g,
                        value: 0,
                        update: function () {
                          h.updateLayerUniform(p, m)
                        }
                      },
                      0
                    )
                }
              },
              r = function (e, i, r) {
                var n,
                  a = e.layersList
                if (void 0 === i.backLayer) {
                  var o = r.getValues()
                  ;(o.alpha = 0),
                    (i.backLayer = a.addLayerBeforeAt(o, i)),
                    (i.backLayer.isBack = !0),
                    e.dispose()
                }
                var s = 'f' + i.id + '_alpha',
                  l = 'f' + i.backLayer.id + '_alpha',
                  c = i.uniforms[s],
                  h = i.backLayer.uniforms[l]
                null === (n = t._animation) ||
                  void 0 === n ||
                  n
                    .add(
                      {
                        targets: c,
                        value: 0,
                        update: function () {
                          a.updateLayerUniformByLayer(i, s)
                        }
                      },
                      0
                    )
                    .add(
                      {
                        targets: h,
                        value: Number(r.uniforms['f' + r.id + '_alpha'].value),
                        update: function () {
                          i.backLayer &&
                            a.updateLayerUniformByLayer(i.backLayer, l)
                        }
                      },
                      0
                    )
              },
              n = function (e, r, n) {
                var a,
                  o = e.layersList,
                  s = 'f' + r.id + '_mat',
                  l = 'f' + r.id + '_texture',
                  c = r.uniforms[l].value,
                  h = n.uniforms['f' + n.id + '_texture'].value,
                  u = r.uniforms['f' + r.id + '_crop'],
                  d = n.uniforms['f' + n.id + '_crop']
                u.value !== d.value &&
                  ((u.value = Number(d.value)),
                  o.updateLayerUniformByLayer(r, 'f' + r.id + '_crop')),
                  (c.wrapS === h.wrapS && c.wrapT === h.wrapT) ||
                    ((c.wrapS = h.wrapS),
                    (c.wrapT = h.wrapT),
                    (c.needsUpdate = !0),
                    o.updateLayerUniformByLayer(r, l))
                var f = c.matrix,
                  p = h.matrix
                if (!1 === f.equals(p)) {
                  var m = {
                    repeatX: c.repeat.x,
                    repeatY: c.repeat.y,
                    offsetX: c.offset.x,
                    offsetY: c.offset.y
                  }
                  null === (a = t._animation) ||
                    void 0 === a ||
                    a.add(
                      {
                        targets: m,
                        repeatX: h.repeat.x,
                        repeatY: h.repeat.y,
                        offsetX: h.offset.x,
                        offsetY: h.offset.y,
                        update: function () {
                          c.repeat.set(m.repeatX, m.repeatY),
                            c.offset.set(m.offsetX, m.offsetY),
                            c.updateMatrix(),
                            o.updateLayerUniformByLayer(r, s)
                        }
                      },
                      0
                    )
                }
                i(e, r, n, ['alpha', 'mode'])
              },
              a = function (e, r, n) {
                var a,
                  o = e.layersList,
                  s = r.uniforms['f' + r.id + '_num'],
                  l = n.uniforms['f' + n.id + '_num'],
                  c = 'f' + r.id + '_steps',
                  h = 'f' + n.id + '_steps',
                  u = r.uniforms[c],
                  d = n.uniforms[h],
                  f = 'f' + r.id + '_colors',
                  p = 'f' + n.id + '_colors',
                  m = r.uniforms[f],
                  g = n.uniforms[p]
                if (s.value <= l.value) {
                  for (
                    var v = m.value[s.value - 1], y = Number(s.value);
                    y < l.value;
                    ++y
                  )
                    (u.value[y] = 1),
                      o.updateLayerUniformByLayer(r, f),
                      m.value[y].set(v.x, v.y, v.z, v.w),
                      o.updateLayerUniformByLayer(r, c)
                  s.value !== l.value &&
                    ((s.value = Number(l.value)),
                    o.updateLayerUniformByLayer(r, 'f' + r.id + '_num'))
                  var E = function (e) {
                    var i = m.value[e],
                      n = g.value[e],
                      s = u.value[e],
                      l = d.value[e]
                    if (s !== l || !1 === i.equals(n)) {
                      var h = { value: s }
                      null === (a = t._animation) ||
                        void 0 === a ||
                        a.add(
                          {
                            targets: [h, i],
                            value: l,
                            x: n.x,
                            y: n.y,
                            z: n.z,
                            w: n.w,
                            update: function () {
                              ;(u.value[e] = h.value),
                                o.updateLayerUniformByLayer(r, c),
                                o.updateLayerUniformByLayer(r, f)
                            }
                          },
                          0
                        )
                    }
                  }
                  for (y = 0; y < l.value; ++y) E(y)
                } else {
                  var A = [],
                    x = function (e) {
                      var i = m.value[e],
                        n = g.value[e]
                      ;(u.value[e] === d.value[e] && !1 !== i.equals(n)) ||
                        A.push(
                          new Promise(function (a) {
                            var s,
                              l = { value: u.value[e] }
                            null === (s = t._animation) ||
                              void 0 === s ||
                              s.add(
                                {
                                  targets: [l, i],
                                  value: d.value[e],
                                  x: n.x,
                                  y: n.y,
                                  z: n.z,
                                  w: n.w,
                                  update: function () {
                                    ;(u.value[e] = l.value),
                                      o.updateLayerUniformByLayer(r, c),
                                      o.updateLayerUniformByLayer(r, f)
                                  },
                                  complete: function () {
                                    a(e)
                                  }
                                },
                                0
                              )
                          })
                        )
                    }
                  for (y = 0; y < l.value; ++y) x(y)
                  var T = g.value[l.value - 1],
                    w = function (e) {
                      var i = m.value[e]
                      ;(u.value[e] === d.value[e] && !1 !== i.equals(T)) ||
                        A.push(
                          new Promise(function (n) {
                            var a,
                              s = { value: u.value[e] }
                            null === (a = t._animation) ||
                              void 0 === a ||
                              a.add(
                                {
                                  targets: [s, i],
                                  value: 1,
                                  x: T.x,
                                  y: T.y,
                                  z: T.z,
                                  w: T.w,
                                  update: function () {
                                    ;(u.value[e] = s.value),
                                      o.updateLayerUniformByLayer(r, c),
                                      o.updateLayerUniformByLayer(r, f)
                                  },
                                  complete: function () {
                                    n(e)
                                  }
                                },
                                0
                              )
                          })
                        )
                    }
                  for (y = Number(l.value); y < s.value; ++y) w(y)
                  Promise.all(A).then(
                    function () {
                      ;(s.value = Number(l.value)),
                        o.updateLayerUniformByLayer(r, 'f' + r.id + '_num')
                    },
                    function () {}
                  )
                }
                i(e, r, n, [
                  'alpha',
                  'mode',
                  'gl_type',
                  'smooth',
                  'offset',
                  'morph',
                  'angle'
                ])
              }
            if (this.object.material instanceof Array)
              for (var o = 0, s = this.object.material.length; o < s; ++o)
                l(this.object.material[o], e.material[o])
            else l(this.object.material, e.material)
          }
          function l(e, t) {
            for (var o = e.layersList.head, s = 0; o; )
              if (!0 !== o.isBack) {
                var l = t.layersList[s++]
                if ('texture' === o.type) {
                  var c = o.uniforms['f' + o.id + '_texture'].value,
                    h = l.uniforms['f' + l.id + '_texture'].value
                  c.image === h.image ? n(e, o, l) : r(e, o, l)
                } else
                  'gradient' === o.type
                    ? o.uniforms['f' + o.id + '_gl_type'].value ===
                      l.uniforms['f' + l.id + '_gl_type'].value
                      ? a(e, o, l)
                      : r(e, o, l)
                    : i(e, o, l)
                o = o.next
              } else o = o.next
          }
        }),
        (e.prototype.animateCamera = function (e) {
          var t
          if (
            'CombinedCamera' === this.object.objectType &&
            void 0 !== e.camera
          ) {
            var i = this.object,
              r =
                'OrthographicCamera' === i.cameraType
                  ? e.camera.zoomOrtho
                  : e.camera.zoomPersp
            i.zoom !== r &&
              (null === (t = this._animation) ||
                void 0 === t ||
                t.add(
                  {
                    targets: i,
                    zoom: r,
                    update: function () {
                      i.updateProjectionMatrix()
                    }
                  },
                  0
                ))
          }
        }),
        e
      )
    })(),
    Object3DMixin = function (e) {
      return (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          __extends(t, e),
          (t.prototype.hasEntityChild = function () {
            return this.children.some(function (e) {
              return isEntity(e)
            })
          }),
          (t.prototype.attach = function (e, t) {
            this.updateWorldMatrix(!0, !1)
            var i = new THREE.Matrix4().getInverse(this.matrixWorld)
            return (
              null !== e.parent &&
                (e.parent.updateWorldMatrix(!0, !1),
                i.multiply(e.parent.matrixWorld)),
              isEntity(e) ? e.hiddenMatrix.premultiply(i) : e.applyMatrix4(i),
              e.updateWorldMatrix(!1, !1),
              this.add(e),
              void 0 !== t &&
                (this.children.pop(), this.children.splice(t, 0, e)),
              this
            )
          }),
          (t.prototype.toJSON = function (e) {
            var t,
              i,
              r = void 0 === e,
              n = { object: { uuid: '', objectType: '' } }
            void 0 === e &&
              ((e = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                interactionStates: {}
              }),
              (n.metadata = {
                version: 1.4,
                type: 'Object',
                generator: 'Object3D.toJSON'
              }))
            var a = { uuid: this.uuid, objectType: this.type }
            if (
              ('' !== this.name && (a.name = this.name),
              (a.matrix = this.matrix.toArray()),
              !0 === this.castShadow && (a.castShadow = !0),
              !0 === this.receiveShadow && (a.receiveShadow = !0),
              !1 === this.visible && (a.visible = !1),
              !1 === this.frustumCulled && (a.frustumCulled = !1),
              0 !== this.renderOrder && (a.renderOrder = this.renderOrder),
              (a.layers = this.layers.mask),
              '{}' !== JSON.stringify(this.userData) &&
                (a.userData = this.userData),
              this.children.length > 0)
            ) {
              a.children = []
              try {
                for (
                  var o = __values(this.children), s = o.next();
                  !s.done;
                  s = o.next()
                ) {
                  var l = s.value
                  ;(isEntity(l) || l instanceof THREE.Light) &&
                    a.children.push(l.toJSON(e).object)
                }
              } catch (e) {
                t = { error: e }
              } finally {
                try {
                  s && !s.done && (i = o.return) && i.call(o)
                } finally {
                  if (t) throw t.error
                }
              }
            }
            if (r) {
              var c = extractFromCache(e.geometries),
                h = extractFromCache(e.materials),
                u = extractFromCache(e.textures),
                d = extractFromCache(e.images),
                f = extractFromCache(e.interactionStates)
              c.length > 0 && (n.geometries = c),
                h.length > 0 && (n.materials = h),
                u.length > 0 && (n.textures = u),
                d.length > 0 && (n.images = d),
                f.length > 0 && (n.interactionStates = f)
            }
            return (n.object = a), n
          }),
          (t.prototype.fromJSON = function (e) {
            return (
              (this.uuid = e.uuid),
              void 0 !== e.name && (this.name = e.name),
              void 0 !== e.matrix
                ? (this.matrix.fromArray(e.matrix),
                  void 0 !== e.matrixAutoUpdate &&
                    (this.matrixAutoUpdate = e.matrixAutoUpdate),
                  this.matrixAutoUpdate &&
                    this.matrix.decompose(
                      this.position,
                      this.quaternion,
                      this.scale
                    ))
                : (void 0 !== e.position && this.position.fromArray(e.position),
                  void 0 !== e.rotation && this.rotation.fromArray(e.rotation),
                  void 0 !== e.quaternion &&
                    this.quaternion.fromArray(e.quaternion),
                  void 0 !== e.scale && this.scale.fromArray(e.scale)),
              void 0 !== e.castShadow && (this.castShadow = e.castShadow),
              void 0 !== e.receiveShadow &&
                (this.receiveShadow = e.receiveShadow),
              void 0 !== e.visible && (this.visible = e.visible),
              void 0 !== e.frustumCulled &&
                (this.frustumCulled = e.frustumCulled),
              void 0 !== e.renderOrder && (this.renderOrder = e.renderOrder),
              void 0 !== e.layers && (this.layers.mask = e.layers),
              void 0 !== e.userData && (this.userData = e.userData),
              this
            )
          }),
          t
        )
      })(e)
    },
    isEntity$1 = function (e) {
      return 'isEntity' in e
    },
    isMeshEntity$1 = function (e) {
      return 'isAbstractMesh' in e
    },
    isHelperableEntity$1 = function (e) {
      return 'objectHelper' in e
    },
    EntityMixin = function (e) {
      return (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (
            (t.objectType = ''),
            (t.isEntity = !0),
            (t.raycastLock = !1),
            (t.scaleLock = !1),
            (t.hiddenMatrix = new THREE.Matrix4()),
            (t.interaction = new Interaction(t)),
            (t.forceComputeSize = !1),
            t
          )
        }
        return (
          __extends(t, e),
          Object.defineProperty(t.prototype, 'visibility', {
            get: function () {
              return this.visible
            },
            set: function (e) {
              var t, i
              this.visible = e
              try {
                for (
                  var r = __values(this.children), n = r.next();
                  !n.done;
                  n = r.next()
                ) {
                  var a = n.value
                  isEntity$1(a) &&
                    a.traverseEntity(function (t) {
                      isHelperableEntity$1(t) &&
                        t.visible &&
                        (t.objectHelper.visible = e)
                    })
                }
              } catch (e) {
                t = { error: e }
              } finally {
                try {
                  n && !n.done && (i = r.return) && i.call(r)
                } finally {
                  if (t) throw t.error
                }
              }
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'interactionCache', {
            get: function () {
              return (
                void 0 === this.interaction.cache &&
                  this.interaction.computeCache(),
                this.interaction.cache
              )
            },
            enumerable: !1,
            configurable: !0
          }),
          (t.prototype.traverseEntity = function (e) {
            var t, i
            e(this)
            try {
              for (
                var r = __values(this.children), n = r.next();
                !n.done;
                n = r.next()
              ) {
                var a = n.value
                isEntity$1(a) && a.traverseEntity(e)
              }
            } catch (e) {
              t = { error: e }
            } finally {
              try {
                n && !n.done && (i = r.return) && i.call(r)
              } finally {
                if (t) throw t.error
              }
            }
          }),
          (t.prototype.computeSingleBoundingBox = function () {
            this.singleBoundingBox || (this.singleBoundingBox = new Box3()),
              this.singleBoundingBox.setFromObjectSize(this, !1),
              this.singleBoundingBox.computeVertices(),
              this.singleBoundingBox.computeEdges(),
              this.singleBoundingBox.computeFaces()
          }),
          (t.prototype.computeComplexBoundingBox = function (e) {
            this.complexBoundingBox || (this.complexBoundingBox = new Box3()),
              this.complexBoundingBox.setFromObjectSize(this, e),
              this.complexBoundingBox.computeVertices(),
              this.complexBoundingBox.computeEdges(),
              this.complexBoundingBox.computeFaces()
          }),
          (t.prototype.updateMatrixWorld = function (e) {
            var t, i
            this.matrixAutoUpdate && this.updateMatrix(),
              (this.matrixWorldNeedsUpdate || e) &&
                (null === this.parent
                  ? this.matrixWorld.multiplyMatrices(
                      this.hiddenMatrix,
                      this.matrix
                    )
                  : (this.matrixWorld.multiplyMatrices(
                      this.parent.matrixWorld,
                      this.hiddenMatrix
                    ),
                    this.matrixWorld.multiplyMatrices(
                      this.matrixWorld,
                      this.matrix
                    )),
                (this.matrixWorldNeedsUpdate = !1),
                (e = !0))
            try {
              for (
                var r = __values(this.children), n = r.next();
                !n.done;
                n = r.next()
              ) {
                n.value.updateMatrixWorld(e)
              }
            } catch (e) {
              t = { error: e }
            } finally {
              try {
                n && !n.done && (i = r.return) && i.call(r)
              } finally {
                if (t) throw t.error
              }
            }
          }),
          (t.prototype.updateWorldMatrix = function (e, t) {
            var i,
              r,
              n = this.parent
            if (
              (e && null !== n && n.updateWorldMatrix(!0, !1),
              this.matrixAutoUpdate && this.updateMatrix(),
              null === this.parent
                ? this.matrixWorld.multiplyMatrices(
                    this.hiddenMatrix,
                    this.matrix
                  )
                : (this.matrixWorld.multiplyMatrices(
                    this.parent.matrixWorld,
                    this.hiddenMatrix
                  ),
                  this.matrixWorld.multiplyMatrices(
                    this.matrixWorld,
                    this.matrix
                  )),
              t)
            )
              try {
                for (
                  var a = __values(this.children), o = a.next();
                  !o.done;
                  o = a.next()
                ) {
                  o.value.updateWorldMatrix(!1, !0)
                }
              } catch (e) {
                i = { error: e }
              } finally {
                try {
                  o && !o.done && (r = a.return) && r.call(a)
                } finally {
                  if (i) throw i.error
                }
              }
          }),
          (t.prototype.shallowClone = function (e) {
            return new this.constructor().shallowCopy(this, e)
          }),
          (t.prototype.shallowCopy = function (t, i) {
            var r, n
            void 0 === i && (i = !0)
            var a = t.children
            if (
              ((t.children = []),
              e.prototype.copy.call(this, t),
              (t.children = a),
              (this.raycastLock = t.raycastLock),
              (this.scaleLock = t.scaleLock),
              this.hiddenMatrix.copy(t.hiddenMatrix),
              void 0 !== t.interaction && this.interaction.copy(t.interaction),
              !0 === i)
            )
              try {
                for (var o = __values(a), s = o.next(); !s.done; s = o.next()) {
                  var l = s.value
                  isEntity$1(l) && this.add(l.shallowClone())
                }
              } catch (e) {
                r = { error: e }
              } finally {
                try {
                  s && !s.done && (n = o.return) && n.call(o)
                } finally {
                  if (r) throw r.error
                }
              }
            return this
          }),
          (t.prototype.clone = function (e) {
            return new this.constructor().copy(this, e)
          }),
          (t.prototype.copy = function (t, i) {
            var r, n
            void 0 === i && (i = !0)
            var a = t.children
            if (
              ((t.children = []),
              e.prototype.copy.call(this, t),
              (t.children = a),
              (this.raycastLock = t.raycastLock),
              (this.scaleLock = t.scaleLock),
              this.hiddenMatrix.copy(t.hiddenMatrix),
              void 0 !== t.interaction && this.interaction.copy(t.interaction),
              !0 === i)
            )
              try {
                for (var o = __values(a), s = o.next(); !s.done; s = o.next()) {
                  var l = s.value
                  isEntity$1(l) && this.add(l.clone())
                }
              } catch (e) {
                r = { error: e }
              } finally {
                try {
                  s && !s.done && (n = o.return) && n.call(o)
                } finally {
                  if (r) throw r.error
                }
              }
            return this
          }),
          (t.prototype.keepChildrenMatrixWorld = function () {
            var e,
              t,
              i = new THREE.Matrix4(),
              r = this.matrixWorld.clone()
            this.updateWorldMatrix(!1, !1),
              i.getInverse(this.matrixWorld),
              i.multiply(r)
            try {
              for (
                var n = __values(this.children), a = n.next();
                !a.done;
                a = n.next()
              ) {
                var o = a.value
                isEntity$1(o) && o.hiddenMatrix.premultiply(i)
              }
            } catch (t) {
              e = { error: t }
            } finally {
              try {
                a && !a.done && (t = n.return) && t.call(n)
              } finally {
                if (e) throw e.error
              }
            }
          }),
          (t.prototype.toJSON = function (t) {
            var i = e.prototype.toJSON.call(this, t),
              r = i.object
            return (
              !0 === this.raycastLock && (r.raycastLock = !0),
              !0 === this.scaleLock && (r.scaleLock = !0),
              (r.hiddenMatrix = this.hiddenMatrix.toArray()),
              void 0 !== this.interaction &&
                (r.interaction = this.interaction.toJSON(t)),
              i
            )
          }),
          (t.prototype.fromJSON = function (t) {
            return (
              e.prototype.fromJSON.call(this, t),
              void 0 !== t.raycastLock && (this.raycastLock = t.raycastLock),
              void 0 !== t.scaleLock && (this.scaleLock = t.scaleLock),
              this.hiddenMatrix.fromArray(t.hiddenMatrix),
              this
            )
          }),
          (t.prototype.fromObject3D = function (e) {
            var t = e.children
            return (
              (e.children = []),
              Object.assign(e, {
                raycastLock: !1,
                scaleLock: !1,
                hiddenMatrix: new THREE.Matrix4()
              }),
              this.copy(e),
              (e.children = t),
              this
            )
          }),
          t
        )
      })(Object3DMixin(e))
    },
    Cloner = (function (e) {
      function t(t, i) {
        void 0 === i && (i = {})
        var r = e.call(this) || this
        ;(r.object = t), t.computeComplexBoundingBox(!0)
        var n = t.complexBoundingBox.getSize(new THREE.Vector3()),
          a = 0.1
        return (
          (r.parameters = {
            type: void 0 !== i.type ? i.type : 'radial',
            hideBase: void 0 !== i.hideBase && i.hideBase,
            count: void 0 !== i.count ? i.count : 3,
            ra_radius:
              void 0 !== i.ra_radius ? i.ra_radius : 2 * Math.max(n.x, n.y),
            ra_startAngle: void 0 !== i.ra_startAngle ? i.ra_startAngle : 0,
            ra_endAngle: void 0 !== i.ra_endAngle ? i.ra_endAngle : 360,
            ra_align: void 0 !== i.ra_align && i.ra_align,
            ra_axis: void 0 !== i.ra_axis ? i.ra_axis : 'y',
            ra_scale:
              void 0 !== i.ra_scale ? i.ra_scale.clone() : new THREE.Vector3(),
            ra_rotation:
              void 0 !== i.ra_rotation
                ? i.ra_rotation.clone()
                : new THREE.Euler(),
            ra_position:
              void 0 !== i.ra_position
                ? i.ra_position.clone()
                : new THREE.Vector3(),
            li_scale:
              void 0 !== i.li_scale ? i.li_scale.clone() : new THREE.Vector3(),
            li_rotation:
              void 0 !== i.li_rotation
                ? i.li_rotation.clone()
                : new THREE.Euler(),
            li_position:
              void 0 !== i.li_position
                ? i.li_position.clone()
                : new THREE.Vector3(n.x + n.x * a, 0, 0).round(),
            gr_count:
              void 0 !== i.gr_count
                ? i.gr_count.clone()
                : new THREE.Vector3(2, 2, 2),
            gr_size:
              void 0 !== i.gr_size
                ? i.gr_size.clone()
                : new THREE.Vector3(
                    n.x + n.x * a,
                    n.y + n.y * a,
                    n.z + n.z * a
                  ).round(),
            gr_fromCenter: void 0 === i.gr_fromCenter || i.gr_fromCenter
          }),
          r.update(),
          r.setHideBase(r.parameters.hideBase),
          r
        )
      }
      return (
        __extends(t, e),
        (t.prototype.refreshMaterial = function () {
          var e, t
          if ('material' in this.object)
            try {
              for (
                var i = __values(this.children), r = i.next();
                !r.done;
                r = i.next()
              ) {
                r.value.material = this.object.material
              }
            } catch (t) {
              e = { error: t }
            } finally {
              try {
                r && !r.done && (t = i.return) && t.call(i)
              } finally {
                if (e) throw e.error
              }
            }
        }),
        (t.prototype.setHideBase = function (e) {
          var t, i, r, n, a, o, s, l, c, h, u, d
          if ('material' in this.object) {
            if (Array.isArray(this.object.material)) {
              if (this.children.length > 0) {
                try {
                  for (
                    var f = __values(this.object.material), p = f.next();
                    !p.done;
                    p = f.next()
                  ) {
                    ;(T = p.value).visible = !0
                  }
                } catch (e) {
                  t = { error: e }
                } finally {
                  try {
                    p && !p.done && (i = f.return) && i.call(f)
                  } finally {
                    if (t) throw t.error
                  }
                }
                if (e) {
                  var m = this.object.material.map(function (e) {
                    return e.clone()
                  })
                  try {
                    for (
                      var g = __values(this.children), v = g.next();
                      !v.done;
                      v = g.next()
                    ) {
                      v.value.material = m
                    }
                  } catch (e) {
                    r = { error: e }
                  } finally {
                    try {
                      v && !v.done && (n = g.return) && n.call(g)
                    } finally {
                      if (r) throw r.error
                    }
                  }
                } else
                  try {
                    for (
                      var y = __values(this.children), E = y.next();
                      !E.done;
                      E = y.next()
                    ) {
                      E.value.material = this.object.material
                    }
                  } catch (e) {
                    a = { error: e }
                  } finally {
                    try {
                      E && !E.done && (o = y.return) && o.call(y)
                    } finally {
                      if (a) throw a.error
                    }
                  }
              }
              try {
                for (
                  var A = __values(this.object.material), x = A.next();
                  !x.done;
                  x = A.next()
                ) {
                  ;(T = x.value).visible = !e
                }
              } catch (e) {
                s = { error: e }
              } finally {
                try {
                  x && !x.done && (l = A.return) && l.call(A)
                } finally {
                  if (s) throw s.error
                }
              }
            } else {
              if (this.children.length > 0)
                if (((this.object.material.visible = !0), e)) {
                  var T = this.object.material.clone()
                  try {
                    for (
                      var w = __values(this.children), b = w.next();
                      !b.done;
                      b = w.next()
                    ) {
                      b.value.material = T
                    }
                  } catch (e) {
                    c = { error: e }
                  } finally {
                    try {
                      b && !b.done && (h = w.return) && h.call(w)
                    } finally {
                      if (c) throw c.error
                    }
                  }
                } else
                  try {
                    for (
                      var S = __values(this.children), C = S.next();
                      !C.done;
                      C = S.next()
                    ) {
                      C.value.material = this.object.material
                    }
                  } catch (e) {
                    u = { error: e }
                  } finally {
                    try {
                      C && !C.done && (d = S.return) && d.call(S)
                    } finally {
                      if (u) throw u.error
                    }
                  }
              this.object.material.visible = !e
            }
            this.parameters.hideBase = e
          }
        }),
        (t.prototype.update = function () {
          switch ((this._updateCount(), this.parameters.type)) {
            case 'radial':
              this._updateRadial(this.parameters)
              break
            case 'linear':
              this._updateLinear(this.parameters)
              break
            case 'grid':
              this._updateGrid(this.parameters)
          }
        }),
        (t.prototype._updateCount = function () {
          var e =
            'grid' === this.parameters.type
              ? this.parameters.gr_count.x *
                this.parameters.gr_count.y *
                this.parameters.gr_count.z
              : this.parameters.count
          if (this.children.length !== e)
            if (this.children.length < e)
              for (var t = 0, i = e - this.children.length; t < i; ++t) {
                var r = this.object.shallowClone(!1)
                ;(r.visible = !0),
                  this.add(r),
                  this.parameters.hideBase && this.setHideBase(!0)
              }
            else
              for (t = 0, i = this.children.length - e; t < i; ++t)
                this.remove(this.children[0])
        }),
        (t.prototype._updateRadial = function (e) {
          var t,
            i,
            r,
            n = e.ra_startAngle * THREE.MathUtils.DEG2RAD,
            a = n - e.ra_endAngle * THREE.MathUtils.DEG2RAD,
            o = new THREE.Euler(
              e.ra_rotation.x * THREE.MathUtils.DEG2RAD,
              e.ra_rotation.y * THREE.MathUtils.DEG2RAD,
              e.ra_rotation.z * THREE.MathUtils.DEG2RAD
            )
          switch (e.ra_axis) {
            case 'x':
              r = new THREE.Vector3(1, 0, 0)
              break
            case 'y':
              r = new THREE.Vector3(0, 1, 0)
              break
            case 'z':
              r = new THREE.Vector3(0, 0, 1)
          }
          try {
            for (
              var s = __values(this.children.entries()), l = s.next();
              !l.done;
              l = s.next()
            ) {
              var c = __read(l.value, 2),
                h = c[0],
                u = c[1]
              u.hiddenMatrix.identity(),
                (u.scale.x = e.ra_scale.x + 1),
                (u.scale.y = e.ra_scale.y + 1),
                (u.scale.z = e.ra_scale.z + 1),
                u.position.setScalar(0)
              var d = (a / e.count) * h - n
              switch (e.ra_axis) {
                case 'x':
                  u.rotation.set(0, d, 0)
                  break
                case 'y':
                  u.rotation.set(0, 0, d)
                  break
                case 'z':
                  u.rotation.set(d, 0, 0)
              }
              u.translateOnAxis(r, e.ra_radius),
                u.position.add(e.ra_position),
                !0 === e.ra_align
                  ? ((u.rotation.x += o.x),
                    (u.rotation.y += o.y),
                    (u.rotation.z += o.z))
                  : u.rotation.copy(o)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              l && !l.done && (i = s.return) && i.call(s)
            } finally {
              if (t) throw t.error
            }
          }
        }),
        (t.prototype._updateLinear = function (e) {
          var t, i
          if ('linear' !== e.type) throw new Error()
          var r = new THREE.Euler(
            e.li_rotation.x * THREE.MathUtils.DEG2RAD,
            e.li_rotation.y * THREE.MathUtils.DEG2RAD,
            e.li_rotation.z * THREE.MathUtils.DEG2RAD
          )
          try {
            for (
              var n = __values(this.children.entries()), a = n.next();
              !a.done;
              a = n.next()
            ) {
              var o = __read(a.value, 2),
                s = o[0],
                l = o[1]
              l.hiddenMatrix.identity(),
                (l.scale.x = e.li_scale.x * s + 1),
                (l.scale.y = e.li_scale.y * s + 1),
                (l.scale.z = e.li_scale.z * s + 1),
                (l.rotation.x = r.x * s),
                (l.rotation.y = r.y * s),
                (l.rotation.z = r.z * s),
                (l.position.x = e.li_position.x * s),
                (l.position.y = e.li_position.y * s),
                (l.position.z = e.li_position.z * s)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              a && !a.done && (i = n.return) && i.call(n)
            } finally {
              if (t) throw t.error
            }
          }
        }),
        (t.prototype._updateGrid = function (e) {
          var t = 0
          if (!0 === e.gr_fromCenter)
            for (
              var i = {
                  x: e.gr_count.x % 2 == 0 ? 2 : 1,
                  y: e.gr_count.y % 2 == 0 ? 2 : 1,
                  z: e.gr_count.z % 2 == 0 ? 2 : 1
                },
                r = new THREE.Vector3(
                  e.gr_size.x * (e.gr_count.x - i.x) * 0.5,
                  e.gr_size.y * (e.gr_count.y - i.y) * 0.5,
                  e.gr_size.z * (e.gr_count.z - i.z) * 0.5
                ),
                n = 0;
              n < e.gr_count.x;
              n++
            )
              for (var a = 0; a < e.gr_count.y; a++)
                for (var o = 0; o < e.gr_count.z; o++) {
                  ;(s = this.children[t++]).hiddenMatrix.identity(),
                    s.scale.setScalar(1),
                    s.rotation.set(0, 0, 0),
                    (s.position.x = e.gr_size.x * n - r.x),
                    (s.position.y = e.gr_size.y * a - r.y),
                    (s.position.z = e.gr_size.z * o - r.z)
                }
          else
            for (n = 0; n < e.gr_count.x; n++)
              for (a = 0; a < e.gr_count.y; a++)
                for (o = 0; o < e.gr_count.z; o++) {
                  var s
                  ;(s = this.children[t++]).hiddenMatrix.identity(),
                    s.scale.setScalar(1),
                    s.rotation.set(0, 0, 0),
                    (s.position.x = e.gr_size.x * n),
                    (s.position.y = -e.gr_size.y * a),
                    (s.position.z = -e.gr_size.z * o)
                }
        }),
        (t.prototype.toJSON = function () {
          return {
            type: 'Cloner',
            parameters: {
              type: this.parameters.type,
              hideBase: this.parameters.hideBase,
              count: this.parameters.count,
              ra_radius: this.parameters.ra_radius,
              ra_startAngle: this.parameters.ra_startAngle,
              ra_endAngle: this.parameters.ra_endAngle,
              ra_align: this.parameters.ra_align,
              ra_axis: this.parameters.ra_axis,
              ra_scale: this.parameters.ra_scale.toArray(),
              ra_rotation: this.parameters.ra_rotation.toArray(),
              ra_position: this.parameters.ra_position.toArray(),
              li_scale: this.parameters.li_scale.toArray(),
              li_rotation: this.parameters.li_rotation.toArray(),
              li_position: this.parameters.li_position.toArray(),
              gr_count: this.parameters.gr_count.toArray(),
              gr_size: this.parameters.gr_size.toArray(),
              gr_fromCenter: this.parameters.gr_fromCenter
            }
          }
        }),
        (t.prototype.fromJSON = function (e) {
          var t = e.parameters
          return (
            (this.parameters.type = t.type),
            (this.parameters.hideBase = t.hideBase),
            (this.parameters.count = t.count),
            (this.parameters.ra_radius = t.ra_radius),
            (this.parameters.ra_startAngle = t.ra_startAngle),
            (this.parameters.ra_endAngle = t.ra_endAngle),
            (this.parameters.ra_align = t.ra_align),
            (this.parameters.ra_axis = t.ra_axis),
            this.parameters.ra_scale.fromArray(t.ra_scale),
            this.parameters.ra_rotation.fromArray(t.ra_rotation),
            this.parameters.ra_position.fromArray(t.ra_position),
            this.parameters.li_scale.fromArray(t.li_scale),
            this.parameters.li_rotation.fromArray(t.li_rotation),
            this.parameters.li_position.fromArray(t.li_position),
            this.parameters.gr_count.fromArray(t.gr_count),
            this.parameters.gr_size.fromArray(t.gr_size),
            (this.parameters.gr_fromCenter = t.gr_fromCenter),
            this.update(),
            this.setHideBase(this.parameters.hideBase),
            this
          )
        }),
        t
      )
    })(THREE.Object3D),
    AbstractMesh = (function (e) {
      function t(t, i) {
        var r = e.call(this, t, i) || this
        return (
          (r.isAbstractMesh = !0),
          Array.isArray(i) && (r.selectedMaterial = 0),
          r
        )
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'cloner', {
          get: function () {
            return this._cloner
          },
          set: function (e) {
            this._cloner && this.remove(this._cloner),
              e && this.add(e),
              (this._cloner = e)
          },
          enumerable: !1,
          configurable: !0
        }),
        (t.prototype.updateGeometry = function (e) {
          var t = this.geometry,
            i = geometries[t.userData.type],
            r =
              'NonParametric' === this.objectType
                ? Object.assign({}, t.userData, { geometry: t })
                : t.userData,
            n = i.build(i.normalizeInputs(e, r))
          this.geometry.dispose(),
            (this.geometry = n),
            this.geometry.computeBoundingSphere()
        }),
        (t.prototype.resizeGeometry = function (e, t, i) {
          resizeGeometry(this.geometry, { width: e, height: t, depth: i })
        }),
        (t.prototype.shallowClone = function (e) {
          return new this.constructor(this.geometry, this.material).shallowCopy(
            this,
            e
          )
        }),
        (t.prototype.clone = function (e) {
          var t =
              'NonParametric' === this.objectType
                ? Object.assign({}, this.geometry.userData, {
                    geometry: this.geometry
                  })
                : this.geometry.userData,
            i = createGeometry(t),
            r = Array.isArray(this.material)
              ? this.material.map(function (e) {
                  return e.clone()
                })
              : this.material.clone()
          return new this.constructor(i, r).copy(this, e)
        }),
        (t.prototype.copy = function (t, i) {
          return (
            void 0 === i && (i = !0),
            e.prototype.copy.call(this, t, i),
            t.cloner &&
              ((this.cloner = new Cloner(t, t.cloner.parameters)),
              this.add(this.cloner)),
            this
          )
        }),
        (t.prototype.toJSON = function (t) {
          var i = e.prototype.toJSON.call(this, t),
            r = i.object
          if (
            (void 0 !== this.cloner && (r.cloner = this.cloner.toJSON()),
            (r.geometry = serializeGeometry(t.geometries, this.geometry)),
            Array.isArray(this.material))
          ) {
            for (var n = [], a = 0, o = this.material.length; a < o; a++)
              n.push(serialize(t.materials, this.material[a], t))
            r.material = n
          } else r.material = serialize(t.materials, this.material, t)
          return i
        }),
        (t.prototype.fromJSON = function (t) {
          return (
            e.prototype.fromJSON.call(this, t),
            void 0 !== t.selectedMaterial &&
              (this.selectedMaterial = t.selectedMaterial),
            void 0 !== t.cloner &&
              (this.cloner = new Cloner(this).fromJSON(t.cloner)),
            this
          )
        }),
        t
      )
    })(EntityMixin(THREE.Mesh)),
    HelperMixin = function (e) {
      var t
      return (
        ((t = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this
            return (t.isObjectHelper = !0), t
          }
          return __extends(t, e), t
        })(e)).geometryHelper = new THREE.BoxBufferGeometry(30, 30, 30)),
        t
      )
    },
    _ray$1 = new THREE.Ray(),
    _sphere$1 = new THREE.Sphere(),
    _inverseMatrix$1 = new THREE.Matrix4(),
    helperRaycast = function (e, t, i, r) {
      var n = t,
        a = e.matrixWorld
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        _sphere$1.copy(n.boundingSphere),
        _sphere$1.applyMatrix4(a),
        !1 !== i.ray.intersectsSphere(_sphere$1) &&
          (_inverseMatrix$1.getInverse(a),
          _ray$1.copy(i.ray).applyMatrix4(_inverseMatrix$1),
          null === n.boundingBox || !1 !== _ray$1.intersectsBox(n.boundingBox)))
      ) {
        var o,
          s,
          l,
          c,
          h,
          u,
          d = n.index,
          f = n.attributes.position,
          p = n.drawRange
        for (
          h = Math.max(0, p.start), u = Math.min(d.count, p.start + p.count);
          h < u;
          h += 3
        )
          if (
            ((s = d.getX(h)),
            (l = d.getX(h + 1)),
            (c = d.getX(h + 2)),
            (o = m(e, i, _ray$1, f, s, l, c)))
          )
            return (o.faceIndex = Math.floor(h / 3)), void r.push(o)
      }
      function m(e, t, i, r, n, a, o) {
        var s = new THREE.Vector3(),
          l = new THREE.Vector3(),
          c = new THREE.Vector3(),
          h = new THREE.Vector3(),
          u = new THREE.Vector3()
        if (
          (s.fromBufferAttribute(r, n),
          l.fromBufferAttribute(r, a),
          c.fromBufferAttribute(r, o),
          null === i.intersectTriangle(s, l, c, !1, h))
        )
          return null
        u.copy(h), u.applyMatrix4(e.matrixWorld)
        var d = t.ray.origin.distanceTo(u)
        return d < t.near || d > t.far
          ? null
          : { faceIndex: 1, distance: d, point: u.clone(), object: e }
      }
    },
    CombinedCameraHelper = (function (e) {
      function t(t) {
        var i = e.call(this, t) || this
        i.object = t
        var r = new THREE.SphereGeometry(15, 4, 2),
          n = new THREE.MeshBasicMaterial({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
          }),
          a = new THREE.Mesh(r, n)
        return (
          i.add(a),
          (i.object = t),
          (i.name = 'CombinedCameraHelper: ' + t.uuid),
          i
        )
      }
      return (
        __extends(t, e),
        (t.prototype.raycast = function (e, i) {
          helperRaycast(this.object, t.geometryHelper, e, i)
        }),
        t
      )
    })(HelperMixin(THREE.CameraHelper)),
    DirectionalLightHelper = (function (e) {
      function t(t, i, r) {
        void 0 === i && (i = 15), void 0 === r && (r = 10066329)
        var n = e.call(this, t, i, r) || this
        return (n.object = t), (n.name = 'DirectionalLightHelper: ' + t.uuid), n
      }
      return (
        __extends(t, e),
        (t.prototype.raycast = function (e, i) {
          helperRaycast(this.object, t.geometryHelper, e, i)
        }),
        t
      )
    })(HelperMixin(THREE.DirectionalLightHelper)),
    EmptyObjectHelper = (function (e) {
      function t(t, i) {
        void 0 === i && (i = 15)
        var r = e.call(this, i) || this
        return (
          (r.object = t),
          r.object.updateMatrixWorld(),
          (r.name = 'EmptyObjectHelper: ' + t.uuid),
          (r.matrix = t.matrixWorld),
          (r.matrixAutoUpdate = !1),
          r
        )
      }
      return (
        __extends(t, e),
        (t.prototype.raycast = function (e, i) {
          helperRaycast(this.object, t.geometryHelper, e, i)
        }),
        (t.prototype.update = function () {}),
        t
      )
    })(HelperMixin(THREE.AxesHelper)),
    PointLightHelper = (function (e) {
      function t(t, i, r) {
        void 0 === i && (i = 15), void 0 === r && (r = 6710886)
        var n = e.call(this, t, i, r) || this
        return (n.object = t), (n.name = 'PointLightHelper: ' + t.uuid), n
      }
      return (
        __extends(t, e),
        (t.prototype.raycast = function (e, i) {
          helperRaycast(this.object, t.geometryHelper, e, i)
        }),
        t
      )
    })(HelperMixin(THREE.PointLightHelper)),
    SpotLightHelper = (function (e) {
      function t(t, i) {
        void 0 === i && (i = 6710886)
        var r = e.call(this, t, i) || this
        return (r.object = t), (r.name = 'SpotLightHelper: ' + t.uuid), r
      }
      return (
        __extends(t, e),
        (t.prototype.raycast = function (e, i) {
          helperRaycast(this.object, t.geometryHelper, e, i)
        }),
        (t.prototype.update = function () {
          if (void 0 !== this.object) {
            var e = t._vector,
              i = this.object.distance ? this.object.distance : 1e3,
              r = i * Math.tan(this.object.angle)
            this.cone.scale.set(r, r, i),
              e.setFromMatrixPosition(this.object.target.matrixWorld),
              this.cone.lookAt(e)
            var n = void 0 !== this.color ? this.color : this.light.color
            if (this.cone.material instanceof Array)
              for (var a = 0, o = this.cone.material.length; a < o; a++)
                this.cone.material[a].color.set(n)
            else this.cone.material.color.set(n)
          }
        }),
        (t._vector = new THREE.Vector3()),
        t
      )
    })(HelperMixin(THREE.SpotLightHelper)),
    _sphere$2 = new THREE.Sphere(),
    _inverseMatrix$2 = new THREE.Matrix4(),
    _ray$2 = new THREE.Ray(),
    _position = new THREE.Vector3(),
    thresholdBase = 10,
    VectorHelperPoints = (function (e) {
      function t(t, i, r) {
        var n = e.call(this) || this
        return (
          (n.defaultTexture = t),
          (n.selectedTexture = i),
          (n.count = r),
          (n.drawCount = 0),
          (n._mouseThreshold = 4),
          (n._cameraZoom = 1),
          (n.positionAttribute = new THREE.BufferAttribute(
            new Float32Array(3 * r),
            3
          )),
          (n.selectionAttribute = new THREE.BufferAttribute(
            new Uint16Array(r),
            1
          )),
          (n.geometry = new THREE.BufferGeometry()),
          n.geometry.setAttribute('position', n.positionAttribute),
          n.geometry.setAttribute('aSelection', n.selectionAttribute),
          (n.material = new THREE.PointsMaterial({
            map: t,
            size: 16,
            sizeAttenuation: !1,
            transparent: !0,
            depthTest: !1
          })),
          (n.material.onBeforeCompile = function (e) {
            ;(e.uniforms.uSelectedTexture = { value: i }),
              (e.vertexShader =
                'attribute float aSelection;\nvarying float vSelection;\n' +
                e.vertexShader),
              (e.vertexShader = e.vertexShader.replace(
                '#include <begin_vertex>',
                '#include <begin_vertex>\n\n\tvSelection = aSelection;\n'
              )),
              (e.fragmentShader =
                'uniform sampler2D uSelectedTexture;\nvarying float vSelection;\n' +
                e.fragmentShader),
              (e.fragmentShader = e.fragmentShader.replace(
                '#include <map_particle_fragment>',
                '\n\t\t\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\n\t\t\t\tvec4 defaultMapTexel = texture2D( map, uv );\n\t\t\t\tvec4 selectedMapTexel = texture2D( uSelectedTexture, uv );\n\t\t\t\tdiffuseColor *= mapTexelToLinear( mix(defaultMapTexel, selectedMapTexel, vSelection) );\n\t\t\t\t'
              ))
          }),
          (n.mesh = new THREE.Points(n.geometry, n.material)),
          n.add(n.mesh),
          n
        )
      }
      return (
        __extends(t, e),
        (t.prototype.setXYZ = function (e, t, i, r) {
          void 0 === r && (r = 0), this.positionAttribute.setXYZ(e, t, i, r)
        }),
        (t.prototype.setPositionAt = function (e, t) {
          this.positionAttribute.setXYZ(e, t.x, t.y, 'z' in t ? t.z : 0)
        }),
        Object.defineProperty(t.prototype, 'cameraZoom', {
          get: function () {
            return this._cameraZoom
          },
          set: function (e) {
            ;(this._cameraZoom = e), (this._mouseThreshold = thresholdBase / e)
          },
          enumerable: !1,
          configurable: !0
        }),
        (t.prototype.update = function () {
          ;(this.positionAttribute.needsUpdate = !0),
            this.geometry.computeBoundingSphere()
        }),
        (t.prototype.raycast = function (e, t) {
          var i = this.geometry,
            r = this.matrixWorld,
            n = this,
            a = n._mouseThreshold,
            o = n.scale,
            s = n.drawCount
          if (
            (null === i.boundingSphere && i.computeBoundingSphere(),
            _sphere$2.copy(i.boundingSphere),
            _sphere$2.applyMatrix4(r),
            (_sphere$2.radius += a),
            !1 === e.ray.intersectsSphere(_sphere$2))
          )
            return t
          _inverseMatrix$2.getInverse(r), _ray$2.copy(e.ray)
          for (
            var l = a / ((o.x + o.y + o.z) / 3),
              c = l * l,
              h = this.positionAttribute,
              u = 0,
              d = s;
            u < d;
            u++
          )
            _position.fromBufferAttribute(h, u).applyMatrix4(r),
              this._testPoint(_position, u, c, r, e, t)
          return t
        }),
        (t.prototype._testPoint = function (e, t, i, r, n, a) {
          var o = _ray$2.distanceSqToPoint(e)
          if (o < i) {
            var s = new THREE.Vector3()
            _ray$2.closestPointToPoint(e, s), s.applyMatrix4(r)
            var l = n.ray.origin.distanceTo(s)
            if (l < n.near || l > n.far) return
            a.push({
              distance: l,
              distanceToRay: Math.sqrt(o),
              point: s,
              index: t,
              face: null,
              object: this
            })
          }
        }),
        (t.prototype.setSelection = function (e, t, i) {
          void 0 === i && (i = !1),
            this.selectionAttribute.setX(e, t ? 1 : 0),
            i && (this.selectionAttribute.needsUpdate = !0)
        }),
        (t.prototype.getSelection = function (e) {
          return 1 === this.selectionAttribute.getX(e)
        }),
        (t.prototype.clearSelection = function (e) {
          void 0 === e && (e = !1)
          for (var t = 0; t < this.count; t++)
            this.selectionAttribute.setX(t, 0)
          e && (this.selectionAttribute.needsUpdate = !0)
        }),
        (t.prototype.updateSelection = function () {
          this.selectionAttribute.needsUpdate = !0
        }),
        (t.prototype.setDrawRange = function (e, t) {
          ;(t = Math.min(t, this.count)),
            this.geometry.setDrawRange(e, t),
            (this.drawCount = t)
        }),
        t
      )
    })(THREE.Object3D),
    vertexHeader =
      '\nattribute float aSelection;\nattribute float aVisibility;\nvarying float vSelection;\nvarying float vVisibility;\n',
    vertexVaryingsSet =
      '\n\tvSelection = aSelection;\n\tvVisibility = aVisibility;\n',
    fragmentHeader =
      '\nuniform sampler2D uSelectedTexture;\n\nvarying float vSelection;\nvarying float vVisibility;\n',
    fragmentMap =
      '\n\tif (vVisibility < 0.5) discard;\n\t\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\n\tvec4 defaultMapTexel = texture2D( map, uv );\n\tvec4 selectedMapTexel = texture2D( uSelectedTexture, uv );\n\tdiffuseColor *= mapTexelToLinear( mix(defaultMapTexel, selectedMapTexel, vSelection) );\n',
    VectorHelperControls = (function (e) {
      function t(t, i, r) {
        var n = e.call(this, t, i, r) || this
        return (
          (n._visibilityAttribute = new THREE.BufferAttribute(
            new Uint16Array(r),
            1
          )),
          n.geometry.setAttribute('aVisibility', n._visibilityAttribute),
          (n.material.onBeforeCompile = function (e) {
            ;(e.uniforms.uSelectedTexture = { value: i }),
              (e.vertexShader = vertexHeader + e.vertexShader),
              (e.vertexShader = e.vertexShader.replace(
                '#include <begin_vertex>',
                '#include <begin_vertex>' + vertexVaryingsSet
              )),
              (e.fragmentShader = fragmentHeader + e.fragmentShader),
              (e.fragmentShader = e.fragmentShader.replace(
                '#include <map_particle_fragment>',
                fragmentMap
              ))
          }),
          n
        )
      }
      return (
        __extends(t, e),
        (t.prototype.setVisibility = function (e, t) {
          this._visibilityAttribute.setX(e, t ? 1 : 0)
        }),
        (t.prototype.update = function () {
          e.prototype.update.call(this),
            (this._visibilityAttribute.needsUpdate = !0)
        }),
        t
      )
    })(VectorHelperPoints),
    VectorHelperDefaultLine = (function (e) {
      function t(t) {
        var i = e.call(this) || this
        return (
          (i.geometry = new VectorLineGeometry(t)),
          (i.material = new THREE.LineBasicMaterial({
            color: 11184810,
            depthTest: !1,
            linewidth: 2
          })),
          (i.mesh = new THREE.Line(i.geometry, i.material)),
          i.add(i.mesh),
          i
        )
      }
      return (
        __extends(t, e),
        (t.prototype.update = function (e, t) {
          var i = e.extractShapePointsToBuffer(this.geometry.positions, t)
          ;(this.geometry.drawCount = i),
            (this.geometry.positions.needsUpdate = !0),
            this.geometry.computeBoundingSphere()
        }),
        t
      )
    })(THREE.Object3D),
    VectorHelperSelectedLine = (function (e) {
      function t(t) {
        var i = e.call(this) || this
        return (
          (i.selection = []),
          (i.geometry = new VectorLineGeometry(t)),
          (i.material = new THREE.LineBasicMaterial({
            color: 16777215,
            depthTest: !1,
            linewidth: 2
          })),
          (i.mesh = new THREE.LineSegments(i.geometry, i.material)),
          i.add(i.mesh),
          i
        )
      }
      return (
        __extends(t, e),
        (t.prototype.setSelection = function (e) {
          this.selection = e
        }),
        (t.prototype.update = function (e, t) {
          for (var i = [], r = 0, n = e.points.length; r < n; r++)
            i.push(this.selection.indexOf(r) >= 0)
          var a = e.extractFilteredShapePointsToBuffer(
            this.geometry.positions,
            i,
            t
          )
          ;(this.geometry.drawCount = a),
            (this.geometry.positions.needsUpdate = !0),
            this.geometry.computeBoundingSphere()
        }),
        t
      )
    })(THREE.Object3D),
    VectorHelperSegments = (function (e) {
      function t(t, i) {
        void 0 === i && (i = {})
        var r = e.call(this) || this
        return (
          (r.drawCount = 0),
          (r._positions = new THREE.Float32BufferAttribute(
            new Float32Array(3 * t),
            3
          )),
          (r.geometry = new THREE.BufferGeometry()),
          r.geometry.setAttribute('position', r._positions),
          (r.material = new THREE.LineBasicMaterial(i)),
          (r.segments = new THREE.LineSegments(r.geometry, r.material)),
          r.add(r.segments),
          (r.segments.frustumCulled = !1),
          r
        )
      }
      return (
        __extends(t, e),
        (t.prototype.setPositionAt = function (e, t) {
          this._positions.setXYZ(e, t.x, t.y, 'z' in t ? t.z : 0)
        }),
        (t.prototype.setXYZ = function (e, t, i, r) {
          void 0 === r && (r = 0), this._positions.setXYZ(e, t, i, r)
        }),
        (t.prototype.getX = function (e) {
          return this._positions.getX(e)
        }),
        (t.prototype.getY = function (e) {
          return this._positions.getY(e)
        }),
        (t.prototype.getZ = function (e) {
          return this._positions.getZ(e)
        }),
        (t.prototype.update = function () {
          this._positions.needsUpdate = !0
        }),
        (t.prototype.setDrawRange = function (e, t) {
          this.geometry.setDrawRange(e, t), (this.drawCount = t)
        }),
        t
      )
    })(THREE.Object3D),
    MAX_POINTS = 500,
    MAX_SUBDIVISIONS = 40,
    textureLoader = new THREE.TextureLoader(),
    vectorPointDefaultTexture,
    vectorControlDefaultTexture,
    vectorPointSelectedTexture,
    vectorControlSelectedTexture,
    tempV2a = new THREE.Vector2(),
    tempV2b = new THREE.Vector2(),
    tempV2c = new THREE.Vector2(),
    quarterPI = 0.25 * Math.PI,
    halfPI = 0.5 * Math.PI,
    snapBase = 4,
    VectorHelper = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t.count = 0),
          (t.raycaster = new THREE.Raycaster()),
          (t.nextPointDest = new THREE.Vector3()),
          (t.useAngleSnapping = !1),
          (t.showAllControls = !1),
          (t._subdivisions = 20),
          (t._snapThreshold = snapBase),
          (t._snapEnabled = !1),
          (t._cameraZoom = 1),
          (t._onShapeUpdate = function () {
            t.update()
          }),
          (t._onGeometryUpdate = function () {
            if (void 0 !== t.object) {
              var e = t.object.geometry.userData.parameters
              t.subdivisions = e.subdivisions
            }
          }),
          (t.matrixAutoUpdate = !1),
          (t.visible = !1),
          t.loadTextures(),
          (t.vectorLineMesh = new VectorHelperDefaultLine(
            MAX_POINTS * MAX_SUBDIVISIONS
          )),
          t.add(t.vectorLineMesh),
          (t.vectorSelectedLineMesh = new VectorHelperSelectedLine(
            MAX_POINTS * MAX_SUBDIVISIONS
          )),
          t.add(t.vectorSelectedLineMesh),
          (t.controlLines = new VectorHelperSegments(4 * MAX_POINTS, {
            transparent: !0,
            opacity: 0.3,
            depthTest: !1
          })),
          t.add(t.controlLines),
          (t.nextLine = new VectorHelperSegments(6, {
            linewidth: 2,
            depthTest: !1
          })),
          t.add(t.nextLine),
          (t.snapLines = new VectorHelperSegments(12, {
            linewidth: 2,
            depthTest: !1,
            color: 16711680
          })),
          t.add(t.snapLines),
          (t.points = new VectorHelperPoints(
            vectorPointDefaultTexture,
            vectorPointSelectedTexture,
            MAX_POINTS
          )),
          t.add(t.points),
          (t.controls = new VectorHelperControls(
            vectorControlDefaultTexture,
            vectorControlSelectedTexture,
            MAX_POINTS
          )),
          t.add(t.controls),
          (t.nextPoint = new VectorHelperPoints(
            vectorPointDefaultTexture,
            null,
            1
          )),
          t.add(t.nextPoint),
          (t.splitPoint = new VectorHelperPoints(
            vectorPointDefaultTexture,
            null,
            1
          )),
          t.add(t.splitPoint),
          t.hideNextLine(),
          t
        )
      }
      return (
        __extends(t, e),
        (t.prototype.loadTextures = function () {
          ;(vectorPointDefaultTexture = textureLoader.load(
            '/_assets/_vectors/point_default_out.png'
          )),
            (vectorControlDefaultTexture = textureLoader.load(
              '/_assets/_vectors/control_default.png'
            )),
            (vectorPointSelectedTexture = textureLoader.load(
              '/_assets/_vectors/point_selected_out.png'
            )),
            (vectorControlSelectedTexture = textureLoader.load(
              '/_assets/_vectors/control_selected.png'
            ))
        }),
        (t.prototype.setLineSelection = function (e) {
          this.vectorSelectedLineMesh.setSelection(e), this.update()
        }),
        (t.prototype.show = function (e) {
          var t
          void 0 !== this.object && this.clear(),
            (this.object = e),
            null === (t = this.object.shape.eventDispatcher) ||
              void 0 === t ||
              t.addEventListener('update', this._onShapeUpdate),
            this.object.eventDispatcher.addEventListener(
              'geometryUpdate',
              this._onGeometryUpdate
            ),
            this._onGeometryUpdate(),
            this.updateHelperMatrix(),
            this.update(),
            (this.visible = !0)
        }),
        (t.prototype.hide = function () {
          this.visible = !1
        }),
        (t.prototype.setEnableSnapping = function (e) {
          this._snapEnabled = e
        }),
        Object.defineProperty(t.prototype, 'cameraZoom', {
          get: function () {
            return this._cameraZoom
          },
          set: function (e) {
            ;(this._cameraZoom = e),
              (this._snapThreshold = snapBase / e),
              (this.points.cameraZoom = e),
              (this.controls.cameraZoom = e)
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'snapThreshold', {
          get: function () {
            return this._snapThreshold
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'subdivisions', {
          get: function () {
            return this._subdivisions
          },
          set: function (e) {
            ;(this._subdivisions = e), this.update()
          },
          enumerable: !1,
          configurable: !0
        }),
        (t.prototype.showNextLine = function () {
          ;(this.nextLine.visible =
            !!this.object && this.object.shape.points.length > 0),
            (this.nextPoint.visible = !0)
        }),
        (t.prototype.hideNextLine = function () {
          ;(this.nextLine.visible = !1), (this.nextPoint.visible = !1)
        }),
        (t.prototype.showSplitPoint = function () {
          this.splitPoint.visible = !0
        }),
        (t.prototype.hideSplitPoint = function () {
          this.splitPoint.visible = !1
        }),
        (t.prototype.clear = function () {
          var e, t, i
          null ===
            (t =
              null === (e = this.object) || void 0 === e
                ? void 0
                : e.shape.eventDispatcher) ||
            void 0 === t ||
            t.removeEventListener('update', this._onShapeUpdate),
            null === (i = this.object) ||
              void 0 === i ||
              i.eventDispatcher.removeEventListener(
                'geometryUpdate',
                this._onGeometryUpdate
              ),
            (this.object = void 0)
        }),
        (t.prototype.getPointByInstanceId = function (e, t) {
          var i
          void 0 === t && (t = !1)
          var r = Math.floor(e / 3),
            n = e % 3,
            a =
              null === (i = this.object) || void 0 === i
                ? void 0
                : i.shape.points[r]
          if (a) {
            var o = a.controlsMoved()
            return t || o
              ? n > 0
                ? a.controls[n - 1]
                : t && !o
                ? a.controls[0]
                : a
              : a
          }
          return null
        }),
        (t.prototype.setSnapLines = function (e, t, i, r) {
          void 0 === e && (e = null),
            void 0 === t && (t = null),
            void 0 === i && (i = null),
            void 0 === r && (r = null),
            null === e &&
              null === t &&
              null !== i &&
              null !== r &&
              ((e = i), (t = r), (i = null), (r = null))
          var n = 0
          null !== e &&
            null !== t &&
            (this.snapLines.setPositionAt(0, e),
            this.snapLines.setPositionAt(1, t),
            (n += 2)),
            null !== i &&
              null !== r &&
              (this.snapLines.setPositionAt(2, i),
              this.snapLines.setPositionAt(3, r),
              (n += 2)),
            this.snapLines.setDrawRange(0, n),
            this.snapLines.update()
        }),
        (t.prototype.hideSnapLines = function () {
          this.setSnapLines()
        }),
        (t.prototype.updateHelperMatrix = function () {
          var e, t
          if (void 0 !== this.object) {
            var i = this.object,
              r = i.parent
            null !== r && r.updateWorldMatrix(!0, !1),
              i.matrixAutoUpdate && i.updateMatrix(),
              null !== r
                ? (this.matrixWorld.multiplyMatrices(
                    r.matrixWorld,
                    i.hiddenMatrix
                  ),
                  this.matrixWorld.multiplyMatrices(this.matrixWorld, i.matrix))
                : this.matrixWorld.multiplyMatrices(i.hiddenMatrix, i.matrix),
              this.matrix.copy(this.matrixWorld)
            try {
              for (
                var n = __values(this.children), a = n.next();
                !a.done;
                a = n.next()
              ) {
                a.value.matrixWorld.copy(this.matrixWorld)
              }
            } catch (t) {
              e = { error: t }
            } finally {
              try {
                a && !a.done && (t = n.return) && t.call(n)
              } finally {
                if (e) throw e.error
              }
            }
            i.updateWorldMatrix(!0, !0)
          }
        }),
        (t.prototype.snap = function (e, t, i, r) {
          var n
          if (((t.x = e.x), (t.y = e.y), !this._snapEnabled)) return t
          var a = tempV2a.set(e.x, e.y),
            o = null === (n = this.object) || void 0 === n ? void 0 : n.shape
          if (void 0 === o) return t
          for (
            var s,
              l,
              c = !1,
              h = !1,
              u = a.x,
              d = a.y,
              f = 0,
              p = o.points.length;
            f < p;
            f++
          ) {
            var m = o.points[f]
            if (void 0 === i || m !== i) {
              var g = m.position
              Math.abs(g.x - a.x) < this._snapThreshold &&
                ((u = g.x), (s = m.position), (c = !0)),
                Math.abs(g.y - a.y) < this._snapThreshold &&
                  ((d = g.y), (l = m.position), (h = !0))
            }
          }
          if (this.useAngleSnapping && void 0 !== r) {
            var v = tempV2b.set(r.x, r.y)
            a.set(u, d)
            var y = v.distanceTo(a),
              E = tempV2c.subVectors(v, a).angle() + Math.PI,
              A = (Math.round(E / quarterPI) * quarterPI) % (2 * Math.PI)
            if (!0 === c && A !== halfPI && A !== 1.5 * Math.PI) {
              var x = u - v.x
              ;(d = v.y + Math.tan(A) * x), (l = v)
            } else if (!0 === h && 0 !== A && A !== Math.PI) {
              var T = d - v.y
              ;(u = v.x - T / Math.tan(Math.PI - A)), (s = v)
            } else
              (u = v.x + Math.cos(A) * y),
                (d = v.y + Math.sin(A) * y),
                (s = v),
                (l = void 0)
            ;(c = !0), (h = !0)
          }
          return (
            c && (t.x = u),
            h && (t.y = d),
            this.setSnapLines(
              c ? t : null,
              c ? s : null,
              h ? t : null,
              h ? l : null
            ),
            t
          )
        }),
        (t.prototype.setNextPointDest = function (e) {
          if (void 0 !== this.object) {
            var t
            void 0 !== e &&
              (t = this.snap(
                e,
                tempV2a,
                void 0,
                this.object.shape.getLastPoint().position
              ))
            var i = null == t ? void 0 : t.x,
              r = null == t ? void 0 : t.y,
              n = this.nextLine.getX(0),
              a = this.nextLine.getY(0)
            this.nextLine.setXYZ(1, null != i ? i : n, null != r ? r : a),
              this.nextLine.update(),
              this.nextPoint.setXYZ(0, null != i ? i : n, null != r ? r : a, 0),
              this.nextPoint.update(),
              this.nextPointDest.set(null != i ? i : n, null != r ? r : a, 0)
          }
        }),
        (t.prototype.setSplitPointDest = function (e, t, i) {
          void 0 === i && (i = 0), this.splitPoint.position.set(e, t, i)
        }),
        (t.prototype.update = function () {
          if (void 0 !== this.object && void 0 !== this.object.shape) {
            for (
              var e = 0,
                t = 0,
                i = 0,
                r = this.object.shape.points.length,
                n = 0;
              n < r;
              n++
            ) {
              var a = 0 === n ? r - 1 : n - 1,
                o = n === r - 1 ? 0 : n + 1,
                s = this.object.shape.points[n],
                l = s.controls[0],
                c = s.controls[1],
                h = s.position.distanceTo(l.position),
                u = s.position.distanceTo(c.position),
                d =
                  this.showAllControls ||
                  this.points.getSelection(n) ||
                  this.points.getSelection(a) ||
                  this.points.getSelection(o)
              this.points.setPositionAt(e, s.position),
                e++,
                this.controls.setPositionAt(t, l.position),
                this.controls.setVisibility(t, d && h > this._snapThreshold),
                t++,
                this.controls.setPositionAt(t, c.position),
                this.controls.setVisibility(t, d && u > this._snapThreshold),
                t++,
                d &&
                  (this.controlLines.setPositionAt(i + 0, s.position),
                  this.controlLines.setPositionAt(i + 1, l.position),
                  this.controlLines.setPositionAt(i + 2, s.position),
                  this.controlLines.setPositionAt(i + 3, c.position),
                  (i += 4))
            }
            var f = this.object.shape.points[r - 1]
            f &&
              (this.nextLine.setPositionAt(0, f.position),
              this.nextLine.update()),
              this.controlLines.setDrawRange(0, i),
              this.controlLines.update(),
              this.vectorLineMesh.update(this.object.shape, this._subdivisions),
              this.vectorSelectedLineMesh.update(
                this.object.shape,
                this._subdivisions
              ),
              this.points.update(),
              this.points.setDrawRange(0, e),
              this.controls.update(),
              this.controls.setDrawRange(0, t)
          }
        }),
        (t.prototype.clearPointSelection = function () {
          this.points.clearSelection()
        }),
        (t.prototype.setPointSelection = function (e) {
          var t = this
          this.clearPointSelection(),
            e.forEach(function (e) {
              t._selectPoint(e)
            }),
            this.points.updateSelection(),
            this.update()
        }),
        (t.prototype._selectPoint = function (e) {
          this.points.setSelection(e, !0)
        }),
        t
      )
    })(EntityMixin(THREE.Group)),
    EntityHelperMixin = function (e, t) {
      return (function (e) {
        function i() {
          var i = (null !== e && e.apply(this, arguments)) || this
          return (i.objectHelper = new t(i)), (i.enableHelper = !1), i
        }
        return (
          __extends(i, e),
          Object.defineProperty(i.prototype, 'visibility', {
            get: function () {
              return this.visible
            },
            set: function (e) {
              ;(this.visible = e),
                this.setHelperVisibility(e),
                this.setHelperChildrenVisibility(e)
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(i.prototype, 'geometryHelper', {
            get: function () {
              return t.geometryHelper
            },
            enumerable: !1,
            configurable: !0
          }),
          (i.prototype.setHelperVisibility = function (e) {
            this.objectHelper.visible = e
          }),
          (i.prototype.setHelperChildrenVisibility = function (e) {
            var t, i
            try {
              for (
                var r = __values(this.children), n = r.next();
                !n.done;
                n = r.next()
              ) {
                var a = n.value
                isEntity$1(a) &&
                  a.traverseEntity(function (t) {
                    isHelperableEntity$1(t) &&
                      t.visible &&
                      (t.objectHelper.visible = e)
                  })
              }
            } catch (e) {
              t = { error: e }
            } finally {
              try {
                n && !n.done && (i = r.return) && i.call(r)
              } finally {
                if (t) throw t.error
              }
            }
          }),
          (i.prototype.raycast = function (e, t) {
            this.objectHelper.raycast(e, t)
          }),
          (i.prototype.copy = function (t, i) {
            return (
              void 0 === i && (i = !0),
              e.prototype.copy.call(this, t, i),
              void 0 !== t.enableHelper && (this.enableHelper = t.enableHelper),
              void 0 !== t.objectHelper &&
                (this.objectHelper.visible = t.objectHelper.visible),
              this
            )
          }),
          (i.prototype.toJSON = function (t) {
            var i = e.prototype.toJSON.call(this, t)
            return (i.object.enableHelper = this.enableHelper), i
          }),
          (i.prototype.fromJSON = function (t) {
            return (
              e.prototype.fromJSON.call(this, t),
              void 0 !== t.enableHelper && (this.enableHelper = !0),
              this
            )
          }),
          i
        )
      })(e)
    },
    CombinedCamera = (function (e) {
      function t(t, i, r, n, a) {
        void 0 === t && (t = 100),
          void 0 === i && (i = 100),
          void 0 === r && (r = 45),
          void 0 === n && (n = 50),
          void 0 === a && (a = 5e4)
        var o = e.call(this) || this
        return (
          (o.objectType = 'CombinedCamera'),
          (o.width = window.innerWidth),
          (o.height = window.innerHeight),
          (o.orthoCamera = new THREE.OrthographicCamera(
            -0.5 * t,
            0.5 * t,
            0.5 * i,
            -0.5 * i,
            n,
            a
          )),
          (o.perspCamera = new THREE.PerspectiveCamera(r, t / i, n, a)),
          (o._cameraType = 'OrthographicCamera'),
          (o.left = o.orthoCamera.left),
          (o.right = o.orthoCamera.right),
          (o.top = o.orthoCamera.top),
          (o.bottom = o.orthoCamera.bottom),
          (o.far = o.orthoCamera.far),
          (o.view = o.orthoCamera.view),
          (o.aspect = o.perspCamera.aspect),
          (o.fov = o.perspCamera.fov),
          (o.focus = o.perspCamera.focus),
          (o.filmGauge = o.perspCamera.filmGauge),
          (o.filmOffset = o.perspCamera.filmOffset),
          (o.targetOffset = 1e3),
          o.toOrthographic(!0),
          o
        )
      }
      return (
        __extends(t, e),
        (t.prototype.setDefault = function () {
          ;(this.name = 'Default Camera'),
            (this.isEntity = !1),
            (this.enableHelper = !1),
            (this.objectHelper.visible = !1)
        }),
        Object.defineProperty(t.prototype, 'cameraType', {
          get: function () {
            return this._cameraType
          },
          set: function (e) {
            'PerspectiveCamera' === e
              ? this.toPerspective()
              : this.toOrthographic()
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'near', {
          get: function () {
            return 'PerspectiveCamera' === this._cameraType
              ? this.perspCamera.near
              : this.orthoCamera.near
          },
          set: function (e) {
            'PerspectiveCamera' === this._cameraType
              ? (this.perspCamera.near = e)
              : (this.orthoCamera.near = e)
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'zoom', {
          get: function () {
            return 'PerspectiveCamera' === this._cameraType
              ? this.perspCamera.zoom
              : this.orthoCamera.zoom
          },
          set: function (e) {
            e >= 0 &&
              ('PerspectiveCamera' === this._cameraType
                ? (this.perspCamera.zoom = e)
                : (this.orthoCamera.zoom = e))
          },
          enumerable: !1,
          configurable: !0
        }),
        (t.prototype.getTarget = function (e) {
          var t = this.getWorldDirection(new THREE.Vector3()).multiplyScalar(
            this.targetOffset
          )
          return e.copy(this.position).add(t), e
        }),
        (t.prototype.getViewFrontToObject = function (e) {
          var t = e.getWorldPosition(new THREE.Vector3()),
            i = e
              .getWorldDirection(new THREE.Vector3())
              .multiplyScalar(this.targetOffset)
          return { position: t.clone().add(i), target: t }
        }),
        (t.prototype.getViewToObject = function (e) {
          var t = e.getWorldPosition(new THREE.Vector3()),
            i = this.getWorldDirection(new THREE.Vector3()).multiplyScalar(
              this.targetOffset
            )
          return { position: t.clone().sub(i), target: t }
        }),
        (t.prototype.setViewplaneSize = function (e, t) {
          ;(this.left = 0.5 * -e),
            (this.right = 0.5 * e),
            (this.top = 0.5 * t),
            (this.bottom = 0.5 * -t),
            (this.aspect = e / t),
            this.updateProjectionMatrix()
        }),
        (t.prototype.toOrthographic = function (e) {
          ;(this.orthoCamera.left = this.left),
            (this.orthoCamera.right = this.right),
            (this.orthoCamera.top = this.top),
            (this.orthoCamera.bottom = this.bottom),
            (this.orthoCamera.view = this.view),
            (this.orthoCamera.far = this.far),
            this.orthoCamera.updateProjectionMatrix(),
            (this.projectionMatrix = this.orthoCamera.projectionMatrix),
            (this.projectionMatrixInverse =
              this.orthoCamera.projectionMatrixInverse),
            (this._cameraType = 'OrthographicCamera'),
            (!0 !== this.enableHelper && !0 !== e) || this.objectHelper.update()
        }),
        (t.prototype.toPerspective = function (e) {
          ;(this.perspCamera.aspect = this.aspect),
            (this.perspCamera.fov = this.fov),
            (this.perspCamera.view = this.view),
            (this.perspCamera.far = this.far),
            this.perspCamera.updateProjectionMatrix(),
            (this.projectionMatrix = this.perspCamera.projectionMatrix),
            (this.projectionMatrixInverse =
              this.perspCamera.projectionMatrixInverse),
            (this._cameraType = 'PerspectiveCamera'),
            (!0 !== this.enableHelper && !0 !== e) || this.objectHelper.update()
        }),
        (t.prototype.setFocalLength = function (e) {
          this.perspCamera.setFocalLength(e), this.toPerspective()
        }),
        (t.prototype.getFocalLength = function () {
          return this.perspCamera.getFocalLength()
        }),
        (t.prototype.getEffectiveFOV = function () {
          return this.perspCamera.getEffectiveFOV()
        }),
        (t.prototype.getFilmWidth = function () {
          return this.perspCamera.getFilmWidth()
        }),
        (t.prototype.getFilmHeight = function () {
          return this.perspCamera.getFilmHeight()
        }),
        (t.prototype.setViewOffset = function (e, t, i, r, n, a) {
          'PerspectiveCamera' === this._cameraType
            ? (this.perspCamera.setViewOffset(e, t, i, r, n, a),
              this.toPerspective())
            : (this.orthoCamera.setViewOffset(e, t, i, r, n, a),
              this.toOrthographic())
        }),
        (t.prototype.clearViewOffset = function () {
          'PerspectiveCamera' === this._cameraType
            ? (this.perspCamera.clearViewOffset(), this.toPerspective())
            : (this.orthoCamera.clearViewOffset(), this.toOrthographic())
        }),
        (t.prototype.updateProjectionMatrix = function (e) {
          'PerspectiveCamera' === this._cameraType
            ? this.toPerspective(e)
            : 'OrthographicCamera' === this._cameraType &&
              this.toOrthographic(e)
        }),
        (t.prototype.updateMatrixWorld = function (t) {
          e.prototype.updateMatrixWorld.call(this, t),
            this.matrixWorldInverse.getInverse(this.matrixWorld)
        }),
        (t.prototype.updateWorldMatrix = function (t, i) {
          e.prototype.updateWorldMatrix.call(this, t, i),
            this.matrixWorldInverse.getInverse(this.matrixWorld)
        }),
        (t.prototype.raycast = function (e, t) {
          this.enableHelper &&
            this.objectHelper.visible &&
            this.objectHelper.raycast(e, t)
        }),
        (t.prototype.copy = function (t, i) {
          return (
            e.prototype.copy.call(this, t, i),
            this.orthoCamera.copy(t.orthoCamera),
            this.perspCamera.copy(t.perspCamera),
            (this.left = t.left),
            (this.right = t.right),
            (this.top = t.top),
            (this.bottom = t.bottom),
            (this.far = t.far),
            (this.view = null === t.view ? null : Object.assign({}, t.view)),
            (this._cameraType = t._cameraType),
            (this.aspect = t.aspect),
            (this.fov = t.fov),
            (this.focus = t.focus),
            (this.filmGauge = t.filmGauge),
            (this.filmOffset = t.filmOffset),
            (this.targetOffset = t.targetOffset),
            this.updateProjectionMatrix(),
            this
          )
        }),
        (t.prototype.fromCameraRender = function (e) {
          var t = { near: this.orthoCamera.near, far: this.orthoCamera.far },
            i = { near: this.perspCamera.near, far: this.perspCamera.far }
          return (
            this.copy(e),
            (this.name = ''),
            (this.isEntity = !0),
            (this.enableHelper = !0),
            (this.objectHelper.visible = !0),
            (this.orthoCamera.near = t.near),
            (this.orthoCamera.far = t.far),
            (this.perspCamera.near = i.near),
            (this.perspCamera.far = i.far),
            this.updateProjectionMatrix(),
            this
          )
        }),
        (t.prototype.toJSON = function (t) {
          var i = e.prototype.toJSON.call(this, t),
            r = i.object
          return (
            (r.objectType = 'CombinedCamera'),
            (r.cameraType = this.cameraType),
            (r.targetOffset = this.targetOffset),
            (r.left = this.left),
            (r.right = this.right),
            (r.top = this.top),
            (r.bottom = this.bottom),
            null !== this.view && (r.view = Object.assign({}, this.view)),
            (r.zoomOrtho = this.orthoCamera.zoom),
            (r.nearOrtho = this.orthoCamera.near),
            (r.far = this.far),
            (r.aspect = this.aspect),
            (r.fov = this.fov),
            (r.focus = this.focus),
            (r.filmGauge = this.filmGauge),
            (r.filmOffset = this.filmOffset),
            (r.zoomPersp = this.perspCamera.zoom),
            (r.nearPersp = this.perspCamera.near),
            i
          )
        }),
        (t.prototype.fromJSON = function (t) {
          return (
            e.prototype.fromJSON.call(this, t),
            (this.cameraType = t.cameraType),
            void 0 !== t.targetOffset && (this.targetOffset = t.targetOffset),
            void 0 !== t.left && (this.left = t.left),
            void 0 !== t.right && (this.right = t.right),
            void 0 !== t.top && (this.top = t.top),
            void 0 !== t.bottom && (this.bottom = t.bottom),
            void 0 !== t.view && (this.view = Object.assign({}, t.view)),
            void 0 !== t.zoomOrtho && (this.orthoCamera.zoom = t.zoomOrtho),
            void 0 !== t.nearOrtho && (this.orthoCamera.near = t.nearOrtho),
            void 0 !== t.far && (this.far = t.far),
            void 0 !== t.aspect && (this.aspect = t.aspect),
            void 0 !== t.fov && (this.fov = t.fov),
            void 0 !== t.focus && (this.focus = t.focus),
            void 0 !== t.filmGauge && (this.filmGauge = t.filmGauge),
            void 0 !== t.filmOffset && (this.filmOffset = t.filmOffset),
            void 0 !== t.zoomPersp && (this.perspCamera.zoom = t.zoomPersp),
            void 0 !== t.nearPersp && (this.perspCamera.near = t.nearPersp),
            this.updateProjectionMatrix(),
            this
          )
        }),
        t
      )
    })(EntityHelperMixin(EntityMixin(THREE.Camera), CombinedCameraHelper)),
    EmptyObject = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.objectType = 'EmptyObject'), t
      }
      return (
        __extends(t, e),
        (t.prototype.toJSON = function (t) {
          var i = e.prototype.toJSON.call(this, t)
          return (i.object.objectType = 'EmptyObject'), i
        }),
        t
      )
    })(EntityHelperMixin(EntityMixin(THREE.Group), EmptyObjectHelper)),
    LightDirectional = (function (e) {
      function t() {
        for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i]
        var r = e.apply(this, __spread(t)) || this
        ;(r.objectType = 'LightDirectional'),
          (r._gizmos = {}),
          (r.shadow.mapSize.width = 1024),
          (r.shadow.mapSize.height = 1024)
        var n = r.shadow,
          a = n.camera
        ;(a.top = 1250),
          (a.bottom = -1250),
          (a.right = 1250),
          (a.left = -1250),
          (a.near = 1),
          (a.far = 2500)
        var o = new THREE.CameraHelper(r.shadow.camera)
        return (o.visible = !1), (r._gizmos.shadowmap = o), r.update(), r
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'gizmos', {
          get: function () {
            return this._gizmos
          },
          enumerable: !1,
          configurable: !0
        }),
        (t.prototype.showGizmos = function () {
          for (var e in this._gizmos) {
            var t = this._gizmos[e]
            t instanceof THREE.CameraHelper && (t.visible = !0)
          }
        }),
        (t.prototype.hideGizmos = function () {
          for (var e in this._gizmos) {
            var t = this._gizmos[e]
            t instanceof THREE.CameraHelper && (t.visible = !1)
          }
        }),
        (t.prototype.update = function () {
          for (var e in (this.shadow.camera.updateProjectionMatrix(),
          this._gizmos)) {
            var t = this._gizmos[e]
            t instanceof THREE.CameraHelper && t.update()
          }
        }),
        (t.prototype.updateMatrixWorld = function (t) {
          e.prototype.updateMatrixWorld.call(this, t),
            !0 === this.enableHelper &&
              !0 === this.objectHelper.visible &&
              this.objectHelper.update()
        }),
        (t.prototype.toJSON = function (t) {
          var i = e.prototype.toJSON.call(this, t),
            r = i.object
          return (
            (r.objectType = 'LightDirectional'),
            (r.color = this.color.getHex()),
            (r.intensity = this.intensity),
            (r.shadow = this.shadow.toJSON()),
            i
          )
        }),
        (t.prototype.fromJSON = function (t) {
          e.prototype.fromJSON.call(this, t),
            this.color.set(t.color),
            (this.intensity = t.intensity),
            (this.shadow.radius = t.shadow.radius),
            this.shadow.mapSize.fromArray(t.shadow.mapSize)
          var i = this.shadow.camera,
            r = t.shadow.camera
          return (
            (i.near = r.near),
            (i.far = r.far),
            (i.zoom = r.zoom),
            (i.left = r.left),
            (i.right = r.right),
            (i.top = r.top),
            (i.bottom = r.bottom),
            void 0 !== r.view && (i.view = Object.assign({}, r.view)),
            this
          )
        }),
        t
      )
    })(
      EntityHelperMixin(
        EntityMixin(THREE.DirectionalLight),
        DirectionalLightHelper
      )
    ),
    LightPoint = (function (e) {
      function t() {
        for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i]
        var r = e.apply(this, __spread(t)) || this
        ;(r.objectType = 'LightPoint'),
          (r._gizmos = {}),
          (r.shadow.mapSize.width = 1024),
          (r.shadow.mapSize.height = 1024)
        var n = r.shadow,
          a = n.camera
        ;(a.fov = 90), (a.aspect = 1), (a.near = 100), (a.far = 2500)
        var o = new THREE.Vector3(
            -a.far + r.position.x,
            -a.far + r.position.y,
            -a.far + r.position.z
          ),
          s = new THREE.Vector3(
            a.far + r.position.x,
            a.far + r.position.y,
            a.far + r.position.z
          ),
          l = new THREE.Box3(o, s),
          c = new THREE.Box3Helper(l, new THREE.Color(16755200))
        return (c.visible = !1), (r._gizmos.shadowmap = c), r.update(), r
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'gizmos', {
          get: function () {
            return this._gizmos
          },
          enumerable: !1,
          configurable: !0
        }),
        (t.prototype.showGizmos = function () {
          for (var e in this._gizmos) {
            var t = this._gizmos[e]
            t instanceof THREE.Box3Helper && (t.visible = !0)
          }
        }),
        (t.prototype.hideGizmos = function () {
          for (var e in this._gizmos) {
            var t = this._gizmos[e]
            t instanceof THREE.Box3Helper && (t.visible = !1)
          }
        }),
        (t.prototype.update = function () {
          if (
            this.shadow &&
            (this.shadow.camera.updateProjectionMatrix(), this._gizmos)
          )
            for (var e in this._gizmos) {
              var t = this._gizmos[e]
              if (t instanceof THREE.Box3Helper) {
                var i = this.shadow.camera,
                  r = new THREE.Vector3(
                    -i.far + this.position.x,
                    -i.far + this.position.y,
                    -i.far + this.position.z
                  ),
                  n = new THREE.Vector3(
                    i.far + this.position.x,
                    i.far + this.position.y,
                    i.far + this.position.z
                  )
                t.box.set(r, n), t.updateMatrixWorld(!0)
              }
            }
        }),
        (t.prototype.updateMatrixWorld = function (t) {
          e.prototype.updateWorldMatrix.call(this, t),
            !0 === this.enableHelper &&
              !0 === this.objectHelper.visible &&
              this.objectHelper.update()
        }),
        (t.prototype.toJSON = function (t) {
          var i = e.prototype.toJSON.call(this, t),
            r = i.object
          return (
            (r.objectType = 'LightPoint'),
            (r.color = this.color.getHex()),
            (r.intensity = this.intensity),
            (r.distance = this.distance),
            (r.decay = this.decay),
            (r.shadow = this.shadow.toJSON()),
            i
          )
        }),
        (t.prototype.fromJSON = function (t) {
          e.prototype.fromJSON.call(this, t),
            this.color.set(t.color),
            (this.intensity = t.intensity),
            (this.distance = t.distance),
            (this.decay = t.decay),
            (this.shadow.radius = t.shadow.radius),
            this.shadow.mapSize.fromArray(t.shadow.mapSize)
          var i = this.shadow.camera,
            r = t.shadow.camera
          return (
            (i.near = r.near),
            (i.far = r.far),
            (i.zoom = r.zoom),
            (i.fov = r.fov),
            (i.focus = r.focus),
            (i.aspect = r.aspect),
            (i.filmGauge = r.filmGauge),
            (i.filmOffset = r.filmOffset),
            void 0 !== r.view && (i.view = Object.assign({}, r.view)),
            this
          )
        }),
        t
      )
    })(EntityHelperMixin(EntityMixin(THREE.PointLight), PointLightHelper)),
    _v1 = new THREE.Vector3(),
    _position$1 = new THREE.Vector3(),
    _quaternion = new THREE.Quaternion(),
    LightSpot = (function (e) {
      function t() {
        for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i]
        var r = e.apply(this, __spread(t)) || this
        ;(r.objectType = 'LightSpot'),
          (r._gizmos = {}),
          (r.shadow.mapSize.width = 1024),
          (r.shadow.mapSize.height = 1024)
        var n = r.shadow,
          a = n.camera
        ;(a.fov = 2 * THREE.MathUtils.RAD2DEG * r.angle),
          (a.aspect = 1),
          (a.near = 100),
          (a.far = 2500)
        var o = new THREE.CameraHelper(r.shadow.camera)
        return (o.visible = !1), (r._gizmos.shadowmap = o), r.update(), r
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'gizmos', {
          get: function () {
            return this._gizmos
          },
          enumerable: !1,
          configurable: !0
        }),
        (t.prototype.showGizmos = function () {
          for (var e in this._gizmos) {
            var t = this._gizmos[e]
            t instanceof THREE.CameraHelper && (t.visible = !0)
          }
        }),
        (t.prototype.hideGizmos = function () {
          for (var e in this._gizmos) {
            var t = this._gizmos[e]
            t instanceof THREE.CameraHelper && (t.visible = !1)
          }
        }),
        (t.prototype.update = function () {
          for (var e in (this.shadow.camera.updateProjectionMatrix(),
          this._gizmos)) {
            var t = this._gizmos[e]
            t instanceof THREE.CameraHelper && t.update()
          }
        }),
        (t.prototype.updateMatrixWorld = function (t) {
          e.prototype.updateWorldMatrix.call(this, t),
            _position$1.setFromMatrixPosition(this.matrixWorld),
            _quaternion.setFromRotationMatrix(this.matrixWorld),
            _v1
              .copy(this.up)
              .applyQuaternion(_quaternion)
              .negate()
              .multiplyScalar(this.distance),
            this.target.position.copy(_position$1).add(_v1),
            this.target.updateMatrixWorld(),
            !0 === this.enableHelper &&
              !0 === this.objectHelper.visible &&
              this.objectHelper.update()
        }),
        (t.prototype.toJSON = function (t) {
          var i = e.prototype.toJSON.call(this, t),
            r = i.object
          return (
            (r.objectType = 'LightSpot'),
            (r.color = this.color.getHex()),
            (r.intensity = this.intensity),
            (r.distance = this.distance),
            (r.angle = this.angle),
            (r.decay = this.decay),
            (r.penumbra = this.penumbra),
            (r.shadow = this.shadow.toJSON()),
            i
          )
        }),
        (t.prototype.fromJSON = function (t) {
          e.prototype.fromJSON.call(this, t),
            this.color.set(t.color),
            (this.intensity = t.intensity),
            (this.distance = t.distance),
            (this.angle = t.angle),
            (this.decay = t.decay),
            (this.penumbra = t.penumbra),
            (this.shadow.radius = t.shadow.radius),
            this.shadow.mapSize.fromArray(t.shadow.mapSize)
          var i = this.shadow.camera,
            r = t.shadow.camera
          return (
            (i.near = r.near),
            (i.far = r.far),
            (i.zoom = r.zoom),
            (i.fov = r.fov),
            (i.focus = r.focus),
            (i.aspect = r.aspect),
            (i.filmGauge = r.filmGauge),
            (i.filmOffset = r.filmOffset),
            void 0 !== r.view && (i.view = Object.assign({}, r.view)),
            this
          )
        }),
        t
      )
    })(EntityHelperMixin(EntityMixin(THREE.SpotLight), SpotLightHelper))
  class BasicMaterial extends THREE.MeshPhongMaterial {
    constructor(e) {
      let t
      void 0 === e && (e = {}),
        void 0 === e.color && (e.color = 5855577),
        void 0 === e.transparent && (e.transparent = !0),
        void 0 === e.side && (e.side = THREE.DoubleSide),
        void 0 !== e.map && ((t = e.map), delete e.map),
        super(e),
        (this.userData.type = 'BasicMaterial'),
        (this.userData.category = 'Basic'),
        (this.userData.layers = new LayerStack(this.color, this.opacity)),
        t &&
          (async () => {
            for (; void 0 === t.image; )
              await new Promise((e) => requestAnimationFrame(e))
            this.userData.layers.addLayerAt(1, {
              id: this.userData.layers.id++,
              type: 'texture',
              texture: t
            }),
              this.dispose()
          })(),
        (this.onBeforeCompile = ShaderLib.createCallback(this))
    }
    get layersList() {
      return this.userData.layers
    }
    set layersList(e) {
      this.userData.layers = e
    }
    equals(e) {
      return (
        this.userData.type === e.userData.type &&
        this.userData.layers.uuid == e.userData.layers.uuid
      )
    }
    copy(e) {
      if (
        void 0 !== e.userData.layers &&
        e.userData.layers instanceof LayerStack == !0
      ) {
        const t = e.userData.layers
        ;(e.userData.layers = void 0),
          super.copy(e),
          (e.userData.layers = t),
          (this.userData.layers = t.clone())
      } else super.copy(e)
      return this
    }
    toJSON(e) {
      const t = this.userData.layers
      this.userData.layers = void 0
      let i = super.toJSON(e)
      return (
        (i.userData = JSON.parse(JSON.stringify(this.userData))),
        (i.userData.layers = t.toJSON(e)),
        (this.userData.layers = t),
        i
      )
    }
    static fromMaterial(e) {
      const t = {}
      return (
        e.color && (t.color = e.color),
        e.opacity && (t.opacity = e.opacity),
        e.map && (t.map = e.map),
        new PhongMaterial(t)
      )
    }
    static fromJSON(e, t) {
      const i = new BasicMaterial()
      return (
        i.copy(e),
        (i.userData.layers = new LayerStack().fromJSON(e.userData.layers, t)),
        i
      )
    }
    dispose() {
      super.dispose(), this.userData.layers.dispose()
    }
  }
  class LambertMaterial extends THREE.MeshLambertMaterial {
    constructor(e) {
      void 0 === e && (e = {}),
        void 0 === e.color && (e.color = 5855577),
        void 0 === e.transparent && (e.transparent = !0),
        void 0 === e.side && (e.side = THREE.FrontSide)
      const t = e.map
      void 0 !== e.map && delete e.map,
        super(e),
        (this.userData.type = 'LambertMaterial'),
        (this.userData.category = 'Lambert'),
        (this.userData.layers = new LayerStack(this.color, this.opacity)),
        t &&
          (async () => {
            for (; void 0 === t.image; )
              await new Promise((e) => requestAnimationFrame(e))
            this.userData.layers.addLayerAt(1, {
              id: this.userData.layers.id++,
              type: 'texture',
              texture: t
            }),
              this.dispose()
          })(),
        (this.onBeforeCompile = ShaderLib.createCallback(this))
    }
    get layersList() {
      return this.userData.layers
    }
    set layersList(e) {
      this.userData.layers = e
    }
    equals(e) {
      return (
        this.userData.type === e.userData.type &&
        this.userData.layers.uuid == e.userData.layers.uuid
      )
    }
    copy(e) {
      if (
        void 0 !== e.userData.layers &&
        e.userData.layers instanceof LayerStack == !0
      ) {
        const t = e.userData.layers
        ;(e.userData.layers = void 0),
          super.copy(e),
          (e.userData.layers = t),
          (this.userData.layers = t.clone())
      } else super.copy(e)
      return this
    }
    toJSON(e) {
      const t = this.userData.layers
      this.userData.layers = void 0
      let i = super.toJSON(e)
      return (
        (i.userData = JSON.parse(JSON.stringify(this.userData))),
        (i.userData.layers = t.toJSON(e)),
        (this.userData.layers = t),
        i
      )
    }
    static fromJSON(e, t) {
      const i = new LambertMaterial()
      return (
        i.copy(e),
        (i.userData.layers = new LayerStack().fromJSON(e.userData.layers, t)),
        i
      )
    }
    dispose() {
      super.dispose(), this.userData.layers.dispose()
    }
  }
  class PhongMaterial$1 extends THREE.MeshPhongMaterial {
    constructor(e) {
      let t
      void 0 === e && (e = {}),
        void 0 === e.color && (e.color = 5855577),
        void 0 === e.transparent && (e.transparent = !0),
        void 0 === e.side && (e.side = THREE.FrontSide),
        void 0 !== e.map && ((t = e.map), delete e.map),
        super(e),
        (this.userData.type = 'PhongMaterial'),
        (this.userData.category = 'Phong'),
        (this.userData.layers = new LayerStack(this.color, this.opacity)),
        t &&
          (async () => {
            for (; void 0 === t.image; )
              await new Promise((e) => requestAnimationFrame(e))
            this.userData.layers.addLayerAt(1, {
              id: this.userData.layers.id++,
              type: 'texture',
              texture: t
            }),
              this.dispose()
          })(),
        (this.onBeforeCompile = ShaderLib.createCallback(this))
    }
    get layersList() {
      return this.userData.layers
    }
    set layersList(e) {
      this.userData.layers = e
    }
    equals(e) {
      return (
        this.userData.type === e.userData.type &&
        this.userData.layers.uuid == e.userData.layers.uuid
      )
    }
    copy(e) {
      if (
        void 0 !== e.userData.layers &&
        e.userData.layers instanceof LayerStack == !0
      ) {
        const t = e.userData.layers
        ;(e.userData.layers = void 0),
          super.copy(e),
          (e.userData.layers = t),
          (this.userData.layers = t.clone())
      } else super.copy(e)
      return this
    }
    static fromMaterial(e) {
      const t = {}
      return (
        e.color && (t.color = e.color),
        e.opacity && (t.opacity = e.opacity),
        e.map && (t.map = e.map),
        new PhongMaterial$1(t)
      )
    }
    toJSON(e) {
      const t = this.userData.layers
      this.userData.layers = void 0
      let i = super.toJSON(e)
      return (
        (i.userData = JSON.parse(JSON.stringify(this.userData))),
        (i.userData.layers = t.toJSON(e)),
        (this.userData.layers = t),
        i
      )
    }
    static fromJSON(e, t) {
      const i = new PhongMaterial$1()
      return (
        i.copy(e),
        (i.userData.layers = new LayerStack().fromJSON(e.userData.layers, t)),
        i
      )
    }
    dispose() {
      super.dispose(), this.userData.layers.dispose()
    }
  }
  class PhysicalMaterial extends THREE.MeshPhysicalMaterial {
    constructor(e) {
      void 0 === e && (e = {}),
        void 0 === e.color && (e.color = 5855577),
        void 0 === e.transparent && (e.transparent = !0),
        void 0 === e.side && (e.side = THREE.FrontSide),
        void 0 === e.roughness && (e.roughness = 0.3)
      const t = e.map
      void 0 !== e.map && delete e.map,
        super(e),
        (this.userData.type = 'PhysicalMaterial'),
        (this.userData.category = 'Physical'),
        (this.userData.layers = new LayerStack(this.color, this.opacity)),
        t &&
          (async () => {
            for (; void 0 === t.image; )
              await new Promise((e) => requestAnimationFrame(e))
            this.userData.layers.addLayerAt(1, {
              id: this.userData.layers.id++,
              type: 'texture',
              texture: t
            }),
              this.dispose()
          })(),
        (this.onBeforeCompile = ShaderLib.createCallback(this))
    }
    get layersList() {
      return this.userData.layers
    }
    set layersList(e) {
      this.userData.layers = e
    }
    equals(e) {
      return (
        this.userData.type === e.userData.type &&
        this.userData.layers.uuid == e.userData.layers.uuid
      )
    }
    copy(e) {
      if (
        void 0 !== e.userData.layers &&
        e.userData.layers instanceof LayerStack == !0
      ) {
        const t = e.userData.layers
        ;(e.userData.layers = void 0),
          super.copy(e),
          (e.userData.layers = t),
          (this.userData.layers = t.clone())
      } else super.copy(e)
      return this
    }
    toJSON(e) {
      const t = this.userData.layers
      this.userData.layers = void 0
      let i = super.toJSON(e)
      return (
        (i.userData = JSON.parse(JSON.stringify(this.userData))),
        (i.userData.layers = t.toJSON(e)),
        (this.userData.layers = t),
        i
      )
    }
    static fromJSON(e, t) {
      const i = new PhysicalMaterial()
      return (
        i.copy(e),
        (i.userData.layers = new LayerStack().fromJSON(e.userData.layers, t)),
        i
      )
    }
    dispose() {
      super.dispose(), this.userData.layers.dispose()
    }
  }
  class ToonMaterial extends THREE.MeshToonMaterial {
    constructor(e) {
      void 0 === e && (e = {}),
        void 0 === e.color && (e.color = 5855577),
        void 0 === e.transparent && (e.transparent = !0),
        void 0 === e.side && (e.side = THREE.FrontSide)
      const t = e.map
      void 0 !== e.map && delete e.map,
        super(e),
        (this.userData.type = 'ToonMaterial'),
        (this.userData.category = 'Toon'),
        (this.userData.layers = new LayerStack(this.color, this.opacity)),
        t &&
          (async () => {
            for (; void 0 === t.image; )
              await new Promise((e) => requestAnimationFrame(e))
            this.userData.layers.addLayerAt(1, {
              id: this.userData.layers.id++,
              type: 'texture',
              texture: t
            }),
              this.dispose()
          })(),
        (this.onBeforeCompile = ShaderLib.createCallback(this))
    }
    get layersList() {
      return this.userData.layers
    }
    set layersList(e) {
      this.userData.layers = e
    }
    equals(e) {
      return (
        this.userData.type === e.userData.type &&
        this.userData.layers.uuid == e.userData.layers.uuid
      )
    }
    copy(e) {
      if (
        void 0 !== e.userData.layers &&
        e.userData.layers instanceof LayerStack == !0
      ) {
        const t = e.userData.layers
        ;(e.userData.layers = void 0),
          super.copy(e),
          (e.userData.layers = t),
          (this.userData.layers = t.clone())
      } else super.copy(e)
      return this
    }
    toJSON(e) {
      const t = this.userData.layers
      this.userData.layers = void 0
      let i = super.toJSON(e)
      return (
        (i.userData = JSON.parse(JSON.stringify(this.userData))),
        (i.userData.layers = t.toJSON(e)),
        (this.userData.layers = t),
        i
      )
    }
    static fromJSON(e, t) {
      const i = new ToonMaterial()
      return (
        i.copy(e),
        (i.userData.layers = new LayerStack().fromJSON(e.userData.layers, t)),
        i
      )
    }
    dispose() {
      super.dispose(), this.userData.layers.dispose()
    }
  }
  var speMaterials = {
      BasicMaterial: BasicMaterial,
      PhongMaterial: PhongMaterial$1,
      LambertMaterial: LambertMaterial,
      PhysicalMaterial: PhysicalMaterial,
      ToonMaterial: ToonMaterial
    },
    isVideoElement = function (e) {
      return 'VIDEO' === e.tagName
    },
    TextureUtils = (function () {
      function e() {}
      return (
        (e.resize = function (e, t, i) {
          var r,
            n = e / t
          if (i.image) {
            var a = i.image
            n >
              (r = isVideoElement(a)
                ? a.videoWidth / a.videoHeight
                : a.width / a.height) &&
              ('WEBCAM' == i.imageType
                ? i.repeat.set(-1, (1 * r) / n)
                : i.repeat.set(1, (1 * r) / n)),
              n < r &&
                ('WEBCAM' == i.imageType
                  ? i.repeat.set(((1 * n) / r) * -1, 1)
                  : i.repeat.set((1 * n) / r, 1)),
              n == r &&
                ('WEBCAM' == i.imageType
                  ? i.repeat.set(-1, 1)
                  : i.repeat.set(1, 1))
          }
        }),
        (e.resizeTextureLayer = function (e, t, i) {
          var r,
            n = e / t,
            a = i.image.width / i.image.height
          ;(r =
            n > a
              ? { x: 1, y: a / n }
              : n < a
              ? { x: n / a, y: 1 }
              : { x: 1, y: 1 }),
            i.repeat.set(r.x, r.y),
            i.updateMatrix()
        }),
        (e.resizeTextureLayers = function (t, i, r) {
          for (
            var n = r.userData.layers, a = n.getLayers(), o = 0;
            o < a.length;
            o++
          ) {
            var s = a[o]
            if ('texture' === s.type) {
              var l = s.id
              e.resizeTextureLayer(
                t,
                i,
                s.uniforms['f' + l + '_texture'].value
              ),
                n.updateLayerUniform(l, 'f' + l + '_mat')
            }
          }
        }),
        (e.resizeComplex = function (e, t, i, r) {
          var n,
            a = e / t,
            o = i.image
          ;(n = isVideoElement(o)
            ? o.videoWidth / o.videoHeight
            : o.width / o.height),
            r.geometry.type.includes('Shape')
              ? (a > n &&
                  ('WEBCAM' == i.imageType
                    ? i.repeat.set((1 / e) * -1, ((1 / t) * n) / a)
                    : i.repeat.set(1 / e, ((1 / t) * n) / a)),
                a < n &&
                  ('WEBCAM' == i.imageType
                    ? i.repeat.set((((1 / e) * a) / n) * -1, 1 / t)
                    : i.repeat.set(((1 / e) * a) / n, 1 / t)),
                a == n &&
                  ('WEBCAM' == i.imageType
                    ? i.repeat.set((1 / e) * -1, 1 / t)
                    : i.repeat.set(1 / e, 1 / t)))
              : (a > n &&
                  ('WEBCAM' == i.imageType
                    ? i.repeat.set(-1, (1 * n) / a)
                    : i.repeat.set(1, (1 * n) / a)),
                a < n &&
                  ('WEBCAM' == i.imageType
                    ? i.repeat.set(((1 * a) / n) * -1, 1)
                    : i.repeat.set((1 * a) / n, 1)),
                a == n &&
                  ('WEBCAM' == i.imageType
                    ? i.repeat.set(-1, 1)
                    : i.repeat.set(1, 1)))
        }),
        e
      )
    })(),
    Mesh2D = (function (e) {
      function t(t, i) {
        void 0 === i && (i = new BasicMaterial())
        var r = e.call(this, t, i) || this
        return (
          (r.objectType = 'Mesh2D'),
          (r.castShadow = !0),
          (r.receiveShadow = !0),
          r
        )
      }
      return (
        __extends(t, e),
        (t.prototype.updateGeometry = function (t) {
          e.prototype.updateGeometry.call(this, t),
            this.material.userData.layers &&
              TextureUtils.resizeTextureLayers(
                this.geometry.userData.parameters.width,
                this.geometry.userData.parameters.height,
                this.material
              )
        }),
        (t.prototype.resizeGeometry = function (t, i) {
          e.prototype.resizeGeometry.call(this, t, i, 0),
            this.material.userData.layers &&
              TextureUtils.resizeTextureLayers(
                this.geometry.userData.parameters.width,
                this.geometry.userData.parameters.height,
                this.material
              )
        }),
        (t.prototype.toJSON = function (t) {
          var i = e.prototype.toJSON.call(this, t)
          return (i.object.objectType = 'Mesh2D'), i
        }),
        (t.fromTexture = function (e) {
          var i, r
          if (e instanceof THREE.VideoTexture) {
            var n = e.image
            ;(i = 0.5 * n.videoWidth), (r = 0.5 * n.videoHeight)
          } else {
            var a = e.image
            ;(i = 0.5 * a.width), (r = 0.5 * a.height)
          }
          var o = RectangleGeometry.create({
              parameters: { width: i, height: r }
            }),
            s = new BasicMaterial()
          return (
            s.layersList.changeLayer(0, { type: 'texture', texture: e }),
            s.layersList.moveLayer(0, 1),
            s.dispose(),
            new t(o, s)
          )
        }),
        t
      )
    })(AbstractMesh),
    Mesh3D = (function (e) {
      function t(t, i) {
        void 0 === i && (i = new PhongMaterial$1())
        var r = e.call(this, t, i) || this
        return (
          (r.objectType = 'Mesh3D'),
          (r.castShadow = !0),
          (r.receiveShadow = !0),
          r
        )
      }
      return (
        __extends(t, e),
        (t.prototype.toJSON = function (t) {
          var i = e.prototype.toJSON.call(this, t)
          return (i.object.objectType = 'Mesh3D'), i
        }),
        t
      )
    })(AbstractMesh),
    NonParametric = (function (e) {
      function t(t, i) {
        void 0 === i && (i = new PhongMaterial$1())
        var r = e.call(this, t, i) || this
        return (r.objectType = 'NonParametric'), r
      }
      return (
        __extends(t, e),
        (t.prototype.toJSON = function (t) {
          var i = e.prototype.toJSON.call(this, t)
          return (i.object.objectType = 'NonParametric'), i
        }),
        t
      )
    })(Mesh3D),
    PlayMode = (function () {
      function e(e, t, i) {
        var r = this
        ;(this.isEnable = !1),
          (this._enableEvent = {}),
          (this._map = {}),
          (this._prevAncestors = []),
          (this._raycaster = new Raycaster()),
          (this._intersection = new THREE.Vector3()),
          (this._plane = new THREE.Plane()),
          (this._normal = new THREE.Vector3()),
          (this._position = new THREE.Vector3()),
          (this._onMouseDown = function (e) {
            r._raycaster.setFromCamera(
              r._getPointer(e.clientX, e.clientY),
              r._camera
            ),
              r._handleMouseDownEvent()
          }),
          (this._onMouseUp = function (e) {
            r._raycaster.setFromCamera(
              r._getPointer(e.clientX, e.clientY),
              r._camera
            ),
              r._handleMouseUpEvent()
          }),
          (this._onMouseMove = function (e) {
            r._raycaster.setFromCamera(
              r._getPointer(e.clientX, e.clientY),
              r._camera
            ),
              r._camera.getWorldDirection(r._normal),
              r._normal.negate(),
              r._handleMouseHoverEvent(),
              r._handleLookAtEvent(),
              r._handleFollowEvent()
          }),
          (this._onTouchStart = function (e) {
            1 === e.touches.length &&
              (e.preventDefault(),
              r._raycaster.setFromCamera(
                r._getPointer(e.touches[0].clientX, e.touches[0].clientY),
                r._camera
              ),
              r._camera.getWorldDirection(r._normal),
              r._normal.negate(),
              r._handleMouseDownEvent(),
              r._handleMouseHoverEvent(),
              r._handleLookAtEvent(),
              r._handleFollowEvent())
          }),
          (this._onTouchEnd = function () {
            r._handleMouseUpEvent(), r._handleMouseHoverEvent(!0)
          }),
          (this._onTouchMove = function (e) {
            1 === e.touches.length &&
              (e.preventDefault(),
              e.stopPropagation(),
              r._raycaster.setFromCamera(
                r._getPointer(e.touches[0].clientX, e.touches[0].clientY),
                r._camera
              ),
              r._camera.getWorldDirection(r._normal),
              r._normal.negate(),
              r._handleMouseHoverEvent(),
              r._handleLookAtEvent(),
              r._handleFollowEvent())
          }),
          (this._onKeyDown = function (e) {
            r._handleKeyDownEvent(e.key)
          }),
          (this._onKeyUp = function (e) {
            r._handleKeyUpEvent(e.key)
          }),
          (this._domElement = e),
          (this._scene = t),
          (this._camera = i)
      }
      return (
        (e.prototype.activate = function () {
          var e = this
          ;(this.isEnable = !0),
            this._scene.traverseEntity(function (t) {
              var i, r
              if (void 0 !== t.interaction) {
                t.interaction.start()
                try {
                  for (
                    var n = __values(t.interaction.events), a = n.next();
                    !a.done;
                    a = n.next()
                  ) {
                    var o = a.value.type
                    ;(e._enableEvent[o] = !0),
                      (o !== INTERACTION_EVENT.KEY_DOWN &&
                        o !== INTERACTION_EVENT.KEY_UP &&
                        o !== INTERACTION_EVENT.START &&
                        o !== INTERACTION_EVENT.LOOK_AT &&
                        o !== INTERACTION_EVENT.FOLLOW) ||
                        (void 0 === e._map[o] && (e._map[o] = []),
                        e._map[o].push(t))
                  }
                } catch (e) {
                  i = { error: e }
                } finally {
                  try {
                    a && !a.done && (r = n.return) && r.call(n)
                  } finally {
                    if (i) throw i.error
                  }
                }
              }
            }),
            void 0 !== this._enableEvent[INTERACTION_EVENT.START] &&
              this._handleStartEvent(),
            void 0 !== this._enableEvent[INTERACTION_EVENT.MOUSE_DOWN] &&
              (this._domElement.addEventListener(
                'mousedown',
                this._onMouseDown,
                !1
              ),
              this._domElement.addEventListener(
                'touchstart',
                this._onTouchStart,
                !1
              )),
            void 0 !== this._enableEvent[INTERACTION_EVENT.MOUSE_UP] &&
              (this._domElement.addEventListener(
                'mouseup',
                this._onMouseUp,
                !1
              ),
              this._domElement.addEventListener(
                'touchend',
                this._onTouchEnd,
                !1
              )),
            (void 0 === this._enableEvent[INTERACTION_EVENT.MOUSE_HOVER] &&
              void 0 === this._enableEvent[INTERACTION_EVENT.LOOK_AT] &&
              void 0 === this._enableEvent[INTERACTION_EVENT.FOLLOW]) ||
              (this._domElement.addEventListener(
                'mousemove',
                this._onMouseMove,
                !1
              ),
              this._domElement.addEventListener(
                'touchstart',
                this._onTouchStart,
                !1
              ),
              this._domElement.addEventListener(
                'touchend',
                this._onTouchEnd,
                !1
              ),
              this._domElement.addEventListener(
                'touchmove',
                this._onTouchMove,
                !1
              )),
            void 0 !== this._enableEvent[INTERACTION_EVENT.KEY_DOWN] &&
              document.addEventListener('keydown', this._onKeyDown, !1),
            void 0 !== this._enableEvent[INTERACTION_EVENT.KEY_UP] &&
              document.addEventListener('keyup', this._onKeyUp, !1)
        }),
        (e.prototype.deactivate = function () {
          this._scene.traverseEntity(function (e) {
            void 0 !== e.interaction && e.interaction.end(),
              (e.interaction.cache = void 0)
          }),
            this._domElement.removeEventListener(
              'mousedown',
              this._onMouseDown
            ),
            this._domElement.removeEventListener('mouseup', this._onMouseUp),
            this._domElement.removeEventListener(
              'mousemove',
              this._onMouseMove
            ),
            this._domElement.removeEventListener(
              'touchstart',
              this._onTouchStart
            ),
            this._domElement.removeEventListener('touchend', this._onTouchEnd),
            this._domElement.removeEventListener(
              'touchmove',
              this._onTouchMove
            ),
            document.removeEventListener('keydown', this._onKeyDown),
            document.removeEventListener('keyup', this._onKeyUp),
            (this._enableEvent = {}),
            (this._map = {}),
            (this.isEnable = !1)
        }),
        (e.prototype.reset = function () {
          this._scene.traverseEntity(function (e) {
            e.interaction.start()
          }),
            this._handleStartEvent()
        }),
        (e.prototype._getPointer = function (e, t) {
          var i = this._domElement.getBoundingClientRect()
          return {
            x: ((e - i.left) / i.width) * 2 - 1,
            y: (-(t - i.top) / i.height) * 2 + 1
          }
        }),
        (e.prototype._handleStartEvent = function () {
          var e
          null === (e = this._map[INTERACTION_EVENT.START]) ||
            void 0 === e ||
            e.forEach(function (e) {
              var t
              null === (t = e.interactionCache.start) ||
                void 0 === t ||
                t.dispatch()
            })
        }),
        (e.prototype._handleMouseDownEvent = function () {
          for (
            var e, t = this._raycastMesh(this._raycaster), i = 0, r = t.length;
            i < r;
            ++i
          ) {
            var n = t[i].object
            if (
              (null === (e = n.interactionCache.mouseDown) ||
                void 0 === e ||
                e.dispatch(),
              n.traverseAncestors(function (e) {
                var t
                e instanceof EmptyObject &&
                  (null === (t = e.interactionCache.mouseDown) ||
                    void 0 === t ||
                    t.dispatch())
              }),
              !n.interactionCache.follow)
            )
              break
          }
        }),
        (e.prototype._handleMouseUpEvent = function () {
          for (
            var e, t = this._raycastMesh(this._raycaster), i = 0, r = t.length;
            i < r;
            ++i
          ) {
            var n = t[i].object
            if (
              (null === (e = n.interactionCache.mouseUp) ||
                void 0 === e ||
                e.dispatch(),
              n.traverseAncestors(function (e) {
                var t
                e instanceof EmptyObject &&
                  (null === (t = e.interactionCache.mouseUp) ||
                    void 0 === t ||
                    t.dispatch())
              }),
              !n.interactionCache.follow)
            )
              break
          }
        }),
        (e.prototype._handleMouseHoverEvent = function (e) {
          var t,
            i,
            r = this
          if (
            (void 0 === e && (e = !1),
            void 0 !== this._enableEvent[INTERACTION_EVENT.MOUSE_HOVER])
          ) {
            var n = void 0
            if (!e) {
              var a = this._raycastMesh(this._raycaster).find(function (e) {
                return !e.object.interactionCache.follow
              })
              n = a ? a.object : void 0
            }
            if (this._prevObject !== n) {
              void 0 !== this._prevObject &&
                (null === (t = this._prevObject.interactionCache.mouseHover) ||
                  void 0 === t ||
                  t.dispatchReverse()),
                void 0 !== n &&
                  (null === (i = n.interactionCache.mouseHover) ||
                    void 0 === i ||
                    i.dispatch())
              var o = []
              null == n ||
                n.traverseAncestors(function (e) {
                  e instanceof EmptyObject &&
                    e.interactionCache.mouseHover &&
                    o.push(e)
                }),
                this._prevAncestors.filter(function (e) {
                  var t
                  return (
                    !o.includes(e) &&
                    (null === (t = e.interactionCache.mouseHover) ||
                      void 0 === t ||
                      t.dispatchReverse(),
                    !0)
                  )
                })
              var s = o.filter(function (e) {
                  var t
                  return (
                    !r._prevAncestors.includes(e) &&
                    (null === (t = e.interactionCache.mouseHover) ||
                      void 0 === t ||
                      t.dispatch(),
                    !0)
                  )
                }),
                l = this._prevAncestors.filter(function (e) {
                  return o.includes(e)
                })
              this._prevAncestors = __spread(l, s)
            }
            this._prevObject = n
          }
        }),
        (e.prototype._handleLookAtEvent = function () {
          var e,
            t = this
          null === (e = this._map[INTERACTION_EVENT.LOOK_AT]) ||
            void 0 === e ||
            e.forEach(function (e) {
              var i,
                r =
                  null === (i = e.interactionCache.lookAt) || void 0 === i
                    ? void 0
                    : i.distance
              void 0 !== r &&
                (t._plane.set(t._normal, -r),
                t._raycaster.ray.intersectPlane(t._plane, t._intersection),
                e.interaction.lookAt(t._intersection))
            })
        }),
        (e.prototype._handleFollowEvent = function () {
          var e,
            t = this
          null === (e = this._map[INTERACTION_EVENT.FOLLOW]) ||
            void 0 === e ||
            e.forEach(function (e) {
              t._plane.setFromNormalAndCoplanarPoint(
                t._normal,
                e.getWorldPosition(t._position)
              ),
                t._raycaster.ray.intersectPlane(t._plane, t._intersection),
                e.interaction.follow(t._intersection)
            })
        }),
        (e.prototype._handleKeyDownEvent = function (e) {
          var t
          null === (t = this._map[INTERACTION_EVENT.KEY_DOWN]) ||
            void 0 === t ||
            t.forEach(function (t) {
              var i,
                r =
                  null === (i = t.interactionCache.keyDown) || void 0 === i
                    ? void 0
                    : i.find(function (t) {
                        return t.key === e
                      })
              null == r || r.dispatch()
            })
        }),
        (e.prototype._handleKeyUpEvent = function (e) {
          var t
          null === (t = this._map[INTERACTION_EVENT.KEY_UP]) ||
            void 0 === t ||
            t.forEach(function (t) {
              var i,
                r =
                  null === (i = t.interactionCache.keyUp) || void 0 === i
                    ? void 0
                    : i.find(function (t) {
                        return t.key === e
                      })
              null == r || r.dispatch()
            })
        }),
        (e.prototype._raycastMesh = function (e) {
          var t = [],
            i = function (r) {
              var n, a
              try {
                for (
                  var o = __values(r.children), s = o.next();
                  !s.done;
                  s = o.next()
                ) {
                  var l = s.value
                  isEntity$1(l) &&
                    !l.raycastLock &&
                    l.visible &&
                    (isMeshEntity$1(l) && e.intersectObject(l, !1, t), i(l))
                }
              } catch (e) {
                n = { error: e }
              } finally {
                try {
                  s && !s.done && (a = o.return) && a.call(o)
                } finally {
                  if (n) throw n.error
                }
              }
            }
          return i(this._scene), t
        }),
        e
      )
    })(),
    OrbitControls = function (e, t) {
      var i, r, n, a, o
      void 0 === t &&
        console.warn(
          'THREE.OrbitControls: The second parameter "domElement" is now mandatory.'
        ),
        t === document &&
          console.error(
            'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
          ),
        (this.object = e),
        (this.domElement = t),
        (this.enabled = !0),
        (this.target = new THREE.Vector3()),
        (this.minDistance = 0),
        (this.maxDistance = 1 / 0),
        (this.minZoom = 0),
        (this.maxZoom = 1 / 0),
        (this.minPolarAngle = 0),
        (this.maxPolarAngle = Math.PI),
        (this.minAzimuthAngle = -1 / 0),
        (this.maxAzimuthAngle = 1 / 0),
        (this.enableDamping = !1),
        (this.dampingFactor = 0.05),
        (this.enableZoom = !0),
        (this.zoomSpeed = 1),
        (this.enableRotate = !0),
        (this.rotateSpeed = 1),
        (this.enablePan = !0),
        (this.panSpeed = 1),
        (this.screenSpacePanning = !1),
        (this.keyPanSpeed = 7),
        (this.autoRotate = !1),
        (this.autoRotateSpeed = 2),
        (this.enableKeys = !0),
        (this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }),
        (this.mouseButtons = {
          LEFT: THREE.MOUSE.ROTATE,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.PAN
        }),
        (this.touches = {
          ONE: THREE.TOUCH.ROTATE,
          TWO: THREE.TOUCH.DOLLY_PAN
        }),
        (this.target0 = this.target.clone()),
        (this.position0 = this.object.position.clone()),
        (this.zoom0 = this.object.zoom),
        (this.getPolarAngle = function () {
          return p.phi
        }),
        (this.getAzimuthalAngle = function () {
          return p.theta
        }),
        (this.saveState = function () {
          s.target0.copy(s.target),
            s.position0.copy(s.object.position),
            (s.zoom0 = s.object.zoom)
        }),
        (this.reset = function () {
          s.target.copy(s.target0),
            s.object.position.copy(s.position0),
            (s.object.zoom = s.zoom0),
            s.object.updateProjectionMatrix(),
            s.dispatchEvent(l),
            s.update(),
            (d = u.NONE)
        }),
        (this.update =
          ((i = new THREE.Vector3()),
          (r = new THREE.Quaternion().setFromUnitVectors(
            e.up,
            new THREE.Vector3(0, 1, 0)
          )),
          (n = r.clone().inverse()),
          (a = new THREE.Vector3()),
          (o = new THREE.Quaternion()),
          function () {
            var e = s.object.position
            return (
              i.copy(e).sub(s.target),
              i.applyQuaternion(r),
              p.setFromVector3(i),
              s.autoRotate &&
                d === u.NONE &&
                O(((2 * Math.PI) / 60 / 60) * s.autoRotateSpeed),
              s.enableDamping
                ? ((p.theta += m.theta * s.dampingFactor),
                  (p.phi += m.phi * s.dampingFactor))
                : ((p.theta += m.theta), (p.phi += m.phi)),
              (p.theta = Math.max(
                s.minAzimuthAngle,
                Math.min(s.maxAzimuthAngle, p.theta)
              )),
              (p.phi = Math.max(
                s.minPolarAngle,
                Math.min(s.maxPolarAngle, p.phi)
              )),
              p.makeSafe(),
              (p.radius *= g),
              (p.radius = Math.max(
                s.minDistance,
                Math.min(s.maxDistance, p.radius)
              )),
              !0 === s.enableDamping
                ? s.target.addScaledVector(v, s.dampingFactor)
                : s.target.add(v),
              i.setFromSpherical(p),
              i.applyQuaternion(n),
              e.copy(s.target).add(i),
              s.object.lookAt(s.target),
              !0 === s.enableDamping
                ? ((m.theta *= 1 - s.dampingFactor),
                  (m.phi *= 1 - s.dampingFactor),
                  v.multiplyScalar(1 - s.dampingFactor))
                : (m.set(0, 0, 0), v.set(0, 0, 0)),
              (g = 1),
              !!(
                y ||
                a.distanceToSquared(s.object.position) > f ||
                8 * (1 - o.dot(s.object.quaternion)) > f
              ) &&
                (s.dispatchEvent(l),
                a.copy(s.object.position),
                o.copy(s.object.quaternion),
                (y = !1),
                !0)
            )
          })),
        (this.dispose = function () {
          s.domElement.removeEventListener('contextmenu', q, !1),
            s.domElement.removeEventListener('mousedown', j, !1),
            s.domElement.removeEventListener('wheel', W, !1),
            s.domElement.removeEventListener('touchstart', J, !1),
            s.domElement.removeEventListener('touchend', K, !1),
            s.domElement.removeEventListener('touchmove', X, !1),
            document.removeEventListener('mousemove', Y, !1),
            document.removeEventListener('mouseup', Q, !1),
            s.domElement.removeEventListener('keydown', $, !1)
        })
      var s = this,
        l = { type: 'change' },
        c = { type: 'start' },
        h = { type: 'end' },
        u = {
          NONE: -1,
          ROTATE: 0,
          DOLLY: 1,
          PAN: 2,
          TOUCH_ROTATE: 3,
          TOUCH_PAN: 4,
          TOUCH_DOLLY_PAN: 5,
          TOUCH_DOLLY_ROTATE: 6
        },
        d = u.NONE,
        f = 1e-6,
        p = new THREE.Spherical(),
        m = new THREE.Spherical(),
        g = 1,
        v = new THREE.Vector3(),
        y = !1,
        E = new THREE.Vector2(),
        A = new THREE.Vector2(),
        x = new THREE.Vector2(),
        T = new THREE.Vector2(),
        w = new THREE.Vector2(),
        b = new THREE.Vector2(),
        S = new THREE.Vector2(),
        C = new THREE.Vector2(),
        _ = new THREE.Vector2()
      function D() {
        return Math.pow(0.95, s.zoomSpeed)
      }
      function O(e) {
        m.theta -= e
      }
      function R(e) {
        m.phi -= e
      }
      var M = (function () {
          var e = new THREE.Vector3()
          return function (t, i) {
            e.setFromMatrixColumn(i, 0), e.multiplyScalar(-t), v.add(e)
          }
        })(),
        L = (function () {
          var e = new THREE.Vector3()
          return function (t, i) {
            !0 === s.screenSpacePanning
              ? e.setFromMatrixColumn(i, 1)
              : (e.setFromMatrixColumn(i, 0), e.crossVectors(s.object.up, e)),
              e.multiplyScalar(t),
              v.add(e)
          }
        })(),
        B = (function () {
          var e = new THREE.Vector3()
          return function (t, i) {
            var r = s.domElement
            if ('PerspectiveCamera' === s.object.cameraType) {
              var n = s.object.position
              e.copy(n).sub(s.target)
              var a = e.length()
              ;(a *= Math.tan(((s.object.fov / 2) * Math.PI) / 180)),
                M((2 * t * a) / r.clientHeight, s.object.matrix),
                L((2 * i * a) / r.clientHeight, s.object.matrix)
            } else
              'OrthographicCamera' === s.object.cameraType
                ? (M(
                    (t * (s.object.right - s.object.left)) /
                      s.object.zoom /
                      r.clientWidth,
                    s.object.matrix
                  ),
                  L(
                    (i * (s.object.top - s.object.bottom)) /
                      s.object.zoom /
                      r.clientHeight,
                    s.object.matrix
                  ))
                : (console.warn(
                    'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.'
                  ),
                  (s.enablePan = !1))
          }
        })()
      function P(e) {
        'PerspectiveCamera' === s.object.cameraType
          ? (g /= e)
          : 'OrthographicCamera' === s.object.cameraType
          ? ((s.object.zoom = Math.max(
              s.minZoom,
              Math.min(s.maxZoom, s.object.zoom * e)
            )),
            s.object.updateProjectionMatrix(),
            (y = !0))
          : (console.warn(
              'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
            ),
            (s.enableZoom = !1))
      }
      function H(e) {
        'PerspectiveCamera' === s.object.cameraType
          ? (g *= e)
          : 'OrthographicCamera' === s.object.cameraType
          ? ((s.object.zoom = Math.max(
              s.minZoom,
              Math.min(s.maxZoom, s.object.zoom / e)
            )),
            s.object.updateProjectionMatrix(),
            (y = !0))
          : (console.warn(
              'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
            ),
            (s.enableZoom = !1))
      }
      function I(e) {
        E.set(e.clientX, e.clientY)
      }
      function N(e) {
        T.set(e.clientX, e.clientY)
      }
      function F(e) {
        if (1 == e.touches.length) E.set(e.touches[0].pageX, e.touches[0].pageY)
        else {
          var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
            i = 0.5 * (e.touches[0].pageY + e.touches[1].pageY)
          E.set(t, i)
        }
      }
      function z(e) {
        if (1 == e.touches.length) T.set(e.touches[0].pageX, e.touches[0].pageY)
        else {
          var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
            i = 0.5 * (e.touches[0].pageY + e.touches[1].pageY)
          T.set(t, i)
        }
      }
      function U(e) {
        var t = e.touches[0].pageX - e.touches[1].pageX,
          i = e.touches[0].pageY - e.touches[1].pageY,
          r = Math.sqrt(t * t + i * i)
        S.set(0, r)
      }
      function G(e) {
        if (1 == e.touches.length) A.set(e.touches[0].pageX, e.touches[0].pageY)
        else {
          var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
            i = 0.5 * (e.touches[0].pageY + e.touches[1].pageY)
          A.set(t, i)
        }
        x.subVectors(A, E).multiplyScalar(s.rotateSpeed)
        var r = s.domElement
        O((2 * Math.PI * x.x) / r.clientHeight),
          R((2 * Math.PI * x.y) / r.clientHeight),
          E.copy(A)
      }
      function V(e) {
        if (1 == e.touches.length) w.set(e.touches[0].pageX, e.touches[0].pageY)
        else {
          var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
            i = 0.5 * (e.touches[0].pageY + e.touches[1].pageY)
          w.set(t, i)
        }
        b.subVectors(w, T).multiplyScalar(s.panSpeed), B(b.x, b.y), T.copy(w)
      }
      function k(e) {
        var t = e.touches[0].pageX - e.touches[1].pageX,
          i = e.touches[0].pageY - e.touches[1].pageY,
          r = Math.sqrt(t * t + i * i)
        C.set(0, r),
          _.set(0, Math.pow(C.y / S.y, s.zoomSpeed)),
          P(_.y),
          S.copy(C)
      }
      function j(e) {
        if (!1 !== s.enabled) {
          var t
          switch (
            (e.preventDefault(),
            s.domElement.focus ? s.domElement.focus() : window.focus(),
            e.button)
          ) {
            case 0:
              t = s.mouseButtons.LEFT
              break
            case 1:
              t = s.mouseButtons.MIDDLE
              break
            case 2:
              t = s.mouseButtons.RIGHT
              break
            default:
              t = -1
          }
          switch (t) {
            case THREE.MOUSE.DOLLY:
              if (!1 === s.enableZoom) return
              !(function (e) {
                S.set(e.clientX, e.clientY)
              })(e),
                (d = u.DOLLY)
              break
            case THREE.MOUSE.ROTATE:
              if (e.ctrlKey || e.metaKey || e.shiftKey) {
                if (!1 === s.enablePan) return
                N(e), (d = u.PAN)
              } else {
                if (!1 === s.enableRotate) return
                I(e), (d = u.ROTATE)
              }
              break
            case THREE.MOUSE.PAN:
              if (e.ctrlKey || e.metaKey || e.shiftKey) {
                if (!1 === s.enableRotate) return
                I(e), (d = u.ROTATE)
              } else {
                if (!1 === s.enablePan) return
                N(e), (d = u.PAN)
              }
              break
            default:
              d = u.NONE
          }
          d !== u.NONE &&
            (document.addEventListener('mousemove', Y, !1),
            document.addEventListener('mouseup', Q, !1),
            s.dispatchEvent(c))
        }
      }
      function Y(e) {
        if (!1 !== s.enabled)
          switch ((e.preventDefault(), d)) {
            case u.ROTATE:
              if (!1 === s.enableRotate) return
              !(function (e) {
                A.set(e.clientX, e.clientY),
                  x.subVectors(A, E).multiplyScalar(s.rotateSpeed)
                var t = s.domElement
                O((2 * Math.PI * x.x) / t.clientHeight),
                  R((2 * Math.PI * x.y) / t.clientHeight),
                  E.copy(A),
                  s.update()
              })(e)
              break
            case u.DOLLY:
              if (!1 === s.enableZoom) return
              !(function (e) {
                C.set(e.clientX, e.clientY),
                  _.subVectors(C, S),
                  _.y > 0 ? P(D()) : _.y < 0 && H(D()),
                  S.copy(C),
                  s.update()
              })(e)
              break
            case u.PAN:
              if (!1 === s.enablePan) return
              !(function (e) {
                w.set(e.clientX, e.clientY),
                  b.subVectors(w, T).multiplyScalar(s.panSpeed),
                  B(b.x, b.y),
                  T.copy(w),
                  s.update()
              })(e)
          }
      }
      function Q(e) {
        !1 !== s.enabled &&
          (document.removeEventListener('mousemove', Y, !1),
          document.removeEventListener('mouseup', Q, !1),
          s.dispatchEvent(h),
          (d = u.NONE))
      }
      function W(e) {
        !1 === s.enabled ||
          !1 === s.enableZoom ||
          (d !== u.NONE && d !== u.ROTATE) ||
          (e.preventDefault(),
          e.stopPropagation(),
          s.dispatchEvent(c),
          (function (e) {
            e.deltaY < 0 ? H(D()) : e.deltaY > 0 && P(D()), s.update()
          })(e),
          s.dispatchEvent(h))
      }
      function $(e) {
        !1 !== s.enabled &&
          !1 !== s.enableKeys &&
          !1 !== s.enablePan &&
          (function (e) {
            var t = !1
            switch (e.keyCode) {
              case s.keys.UP:
                B(0, s.keyPanSpeed), (t = !0)
                break
              case s.keys.BOTTOM:
                B(0, -s.keyPanSpeed), (t = !0)
                break
              case s.keys.LEFT:
                B(s.keyPanSpeed, 0), (t = !0)
                break
              case s.keys.RIGHT:
                B(-s.keyPanSpeed, 0), (t = !0)
            }
            t && (e.preventDefault(), s.update())
          })(e)
      }
      function J(e) {
        if (!1 !== s.enabled) {
          switch ((e.preventDefault(), e.touches.length)) {
            case 1:
              switch (s.touches.ONE) {
                case THREE.TOUCH.ROTATE:
                  if (!1 === s.enableRotate) return
                  F(e), (d = u.TOUCH_ROTATE)
                  break
                case THREE.TOUCH.PAN:
                  if (!1 === s.enablePan) return
                  z(e), (d = u.TOUCH_PAN)
                  break
                default:
                  d = u.NONE
              }
              break
            case 2:
              switch (s.touches.TWO) {
                case THREE.TOUCH.DOLLY_PAN:
                  if (!1 === s.enableZoom && !1 === s.enablePan) return
                  !(function (e) {
                    s.enableZoom && U(e), s.enablePan && z(e)
                  })(e),
                    (d = u.TOUCH_DOLLY_PAN)
                  break
                case THREE.TOUCH.DOLLY_ROTATE:
                  if (!1 === s.enableZoom && !1 === s.enableRotate) return
                  !(function (e) {
                    s.enableZoom && U(e), s.enableRotate && F(e)
                  })(e),
                    (d = u.TOUCH_DOLLY_ROTATE)
                  break
                default:
                  d = u.NONE
              }
              break
            default:
              d = u.NONE
          }
          d !== u.NONE && s.dispatchEvent(c)
        }
      }
      function X(e) {
        if (!1 !== s.enabled)
          switch ((e.preventDefault(), e.stopPropagation(), d)) {
            case u.TOUCH_ROTATE:
              if (!1 === s.enableRotate) return
              G(e), s.update()
              break
            case u.TOUCH_PAN:
              if (!1 === s.enablePan) return
              V(e), s.update()
              break
            case u.TOUCH_DOLLY_PAN:
              if (!1 === s.enableZoom && !1 === s.enablePan) return
              !(function (e) {
                s.enableZoom && k(e), s.enablePan && V(e)
              })(e),
                s.update()
              break
            case u.TOUCH_DOLLY_ROTATE:
              if (!1 === s.enableZoom && !1 === s.enableRotate) return
              !(function (e) {
                s.enableZoom && k(e), s.enableRotate && G(e)
              })(e),
                s.update()
              break
            default:
              d = u.NONE
          }
      }
      function K(e) {
        !1 !== s.enabled && (s.dispatchEvent(h), (d = u.NONE))
      }
      function q(e) {
        !1 !== s.enabled && e.preventDefault()
      }
      s.domElement.addEventListener('contextmenu', q, !1),
        s.domElement.addEventListener('mousedown', j, !1),
        s.domElement.addEventListener('wheel', W, !1),
        s.domElement.addEventListener('touchstart', J, !1),
        s.domElement.addEventListener('touchend', K, !1),
        s.domElement.addEventListener('touchmove', X, !1),
        s.domElement.addEventListener('keydown', $, !1),
        -1 === s.domElement.tabIndex && (s.domElement.tabIndex = 0),
        this.update()
    }
  ;(OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype)),
    (OrbitControls.prototype.constructor = OrbitControls)
  var MapControls = function (e, t) {
    OrbitControls.call(this, e, t),
      (this.mouseButtons.LEFT = THREE.MOUSE.PAN),
      (this.mouseButtons.RIGHT = THREE.MOUSE.ROTATE),
      (this.touches.ONE = THREE.TOUCH.PAN),
      (this.touches.TWO = THREE.TOUCH.DOLLY_ROTATE)
  }
  ;(MapControls.prototype = Object.create(THREE.EventDispatcher.prototype)),
    (MapControls.prototype.constructor = MapControls)
  /**
   * postprocessing v6.21.1 build Mon Mar 08 2021
   * https://github.com/vanruesc/postprocessing
   * Copyright 2021 Raoul van RÃ¼schen
   * @license Zlib
   */
  var ColorChannel = { RED: 0, GREEN: 1, BLUE: 2, ALPHA: 3 },
    shader_default2 =
      'varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}',
    shader_default3 =
      'uniform sampler2D inputBuffer;uniform sampler2D cocBuffer;uniform vec2 texelSize;uniform float scale;\n#if PASS == 1\nuniform vec4 kernel64[32];\n#else\nuniform vec4 kernel16[8];\n#endif\nvarying vec2 vUv;void main(){\n#ifdef FOREGROUND\nvec2 CoCNearFar=texture2D(cocBuffer,vUv).rg;float CoC=CoCNearFar.r*scale;\n#else\nfloat CoC=texture2D(cocBuffer,vUv).g*scale;\n#endif\nif(CoC==0.0){gl_FragColor=texture2D(inputBuffer,vUv);}else{\n#ifdef FOREGROUND\nvec2 step=texelSize*max(CoC,CoCNearFar.g*scale);\n#else\nvec2 step=texelSize*CoC;\n#endif\n#if PASS == 1\nvec4 acc=vec4(0.0);for(int i=0;i<32;++i){vec4 kernel=kernel64[i];vec2 uv=step*kernel.xy+vUv;acc+=texture2D(inputBuffer,uv);uv=step*kernel.zw+vUv;acc+=texture2D(inputBuffer,uv);}gl_FragColor=acc/64.0;\n#else\nvec4 maxValue=texture2D(inputBuffer,vUv);for(int i=0;i<8;++i){vec4 kernel=kernel16[i];vec2 uv=step*kernel.xy+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);uv=step*kernel.zw+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);}gl_FragColor=maxValue;\n#endif\n}}',
    BokehMaterial = class extends THREE.ShaderMaterial {
      constructor(e = !1, t = !1) {
        super({
          type: 'BokehMaterial',
          defines: { PASS: e ? '2' : '1' },
          uniforms: {
            kernel64: new THREE.Uniform(null),
            kernel16: new THREE.Uniform(null),
            inputBuffer: new THREE.Uniform(null),
            cocBuffer: new THREE.Uniform(null),
            texelSize: new THREE.Uniform(new THREE.Vector2()),
            scale: new THREE.Uniform(1)
          },
          fragmentShader: shader_default3,
          vertexShader: shader_default2,
          blending: THREE.NoBlending,
          depthWrite: !1,
          depthTest: !1
        }),
          (this.toneMapped = !1),
          t && (this.defines.FOREGROUND = '1'),
          this.generateKernel()
      }
      generateKernel() {
        const e = new Float32Array(128),
          t = new Float32Array(32)
        let i = 0,
          r = 0
        for (let n = 0; n < 80; ++n) {
          const a = 2.39996323 * n,
            o = Math.sqrt(n) / Math.sqrt(80),
            s = o * Math.cos(a),
            l = o * Math.sin(a)
          n % 5 == 0
            ? ((t[r++] = s), (t[r++] = l))
            : ((e[i++] = s), (e[i++] = l))
        }
        const n = [],
          a = []
        for (let t = 0; t < 128; )
          n.push(new THREE.Vector4(e[t++], e[t++], e[t++], e[t++]))
        for (let e = 0; e < 32; )
          a.push(new THREE.Vector4(t[e++], t[e++], t[e++], t[e++]))
        ;(this.uniforms.kernel64.value = n), (this.uniforms.kernel16.value = a)
      }
      setTexelSize(e, t) {
        this.uniforms.texelSize.value.set(e, t)
      }
    },
    shader_default4 =
      '#include <common>\n#include <packing>\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nuniform highp sampler2D depthBuffer;\n#else\nuniform mediump sampler2D depthBuffer;\n#endif\nuniform float focusDistance;uniform float focalLength;uniform float cameraNear;uniform float cameraFar;varying vec2 vUv;float readDepth(const in vec2 uv){\n#if DEPTH_PACKING == 3201\nreturn unpackRGBAToDepth(texture2D(depthBuffer,uv));\n#else\nreturn texture2D(depthBuffer,uv).r;\n#endif\n}void main(){float depth=readDepth(vUv);\n#ifdef PERSPECTIVE_CAMERA\nfloat viewZ=perspectiveDepthToViewZ(depth,cameraNear,cameraFar);float linearDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);\n#else\nfloat linearDepth=depth;\n#endif\nfloat signedDistance=linearDepth-focusDistance;float magnitude=smoothstep(0.0,focalLength,abs(signedDistance));gl_FragColor.rg=vec2(step(signedDistance,0.0)*magnitude,step(0.0,signedDistance)*magnitude);}',
    CircleOfConfusionMaterial = class extends THREE.ShaderMaterial {
      constructor(e) {
        super({
          type: 'CircleOfConfusionMaterial',
          defines: { DEPTH_PACKING: '0' },
          uniforms: {
            depthBuffer: new THREE.Uniform(null),
            focusDistance: new THREE.Uniform(0),
            focalLength: new THREE.Uniform(0),
            cameraNear: new THREE.Uniform(0.3),
            cameraFar: new THREE.Uniform(1e3)
          },
          fragmentShader: shader_default4,
          vertexShader: shader_default2,
          blending: THREE.NoBlending,
          depthWrite: !1,
          depthTest: !1
        }),
          (this.toneMapped = !1),
          this.adoptCameraSettings(e)
      }
      get depthPacking() {
        return Number(this.defines.DEPTH_PACKING)
      }
      set depthPacking(e) {
        ;(this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0)
      }
      adoptCameraSettings(e = null) {
        null !== e &&
          ((this.uniforms.cameraNear.value = e.near),
          (this.uniforms.cameraFar.value = e.far),
          e instanceof THREE.PerspectiveCamera
            ? (this.defines.PERSPECTIVE_CAMERA = '1')
            : delete this.defines.PERSPECTIVE_CAMERA,
          (this.needsUpdate = !0))
      }
    },
    shader_default5 =
      'varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;\n#if EDGE_DETECTION_MODE != 0\nvarying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;\n#endif\n#if EDGE_DETECTION_MODE == 1\n#include <common>\n#endif\n#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nuniform highp sampler2D depthBuffer;\n#else\nuniform mediump sampler2D depthBuffer;\n#endif\nfloat readDepth(const in vec2 uv){\n#if DEPTH_PACKING == 3201\nreturn unpackRGBAToDepth(texture2D(depthBuffer,uv));\n#else\nreturn texture2D(depthBuffer,uv).r;\n#endif\n}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}\n#elif PREDICATION_MODE == 2\nuniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}\n#endif\n#if PREDICATION_MODE != 0\nvec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}\n#endif\n#if EDGE_DETECTION_MODE != 0\nuniform sampler2D inputBuffer;\n#endif\nvoid main(){\n#if EDGE_DETECTION_MODE == 0\nconst vec2 threshold=vec2(DEPTH_THRESHOLD);\n#elif PREDICATION_MODE != 0\nvec2 threshold=calculatePredicatedThreshold();\n#else\nconst vec2 threshold=vec2(EDGE_THRESHOLD);\n#endif\n#if EDGE_DETECTION_MODE == 0\nvec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);\n#elif EDGE_DETECTION_MODE == 1\nfloat l=linearToRelativeLuminance(texture2D(inputBuffer,vUv).rgb);float lLeft=linearToRelativeLuminance(texture2D(inputBuffer,vUv0).rgb);float lTop=linearToRelativeLuminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=linearToRelativeLuminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=linearToRelativeLuminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=linearToRelativeLuminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=linearToRelativeLuminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);\n#elif EDGE_DETECTION_MODE == 2\nvec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);\n#endif\n}',
    shader_default6 =
      'uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;\n#if EDGE_DETECTION_MODE != 0\nvarying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;\n#endif\nvoid main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);\n#if EDGE_DETECTION_MODE != 0\nvUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);\n#endif\ngl_Position=vec4(position.xy,1.0,1.0);}',
    shader_default7 =
      '#include <common>\n#include <dithering_pars_fragment>\nuniform sampler2D inputBuffer;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;\n#include <dithering_fragment>\n}',
    shader_default8 =
      'uniform vec2 texelSize;uniform vec2 halfTexelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize*vec2(kernel)+halfTexelSize)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}',
    ConvolutionMaterial = class extends THREE.ShaderMaterial {
      constructor(e = new THREE.Vector2()) {
        super({
          type: 'ConvolutionMaterial',
          uniforms: {
            inputBuffer: new THREE.Uniform(null),
            texelSize: new THREE.Uniform(new THREE.Vector2()),
            halfTexelSize: new THREE.Uniform(new THREE.Vector2()),
            kernel: new THREE.Uniform(0),
            scale: new THREE.Uniform(1)
          },
          fragmentShader: shader_default7,
          vertexShader: shader_default8,
          blending: THREE.NoBlending,
          depthWrite: !1,
          depthTest: !1
        }),
          (this.toneMapped = !1),
          this.setTexelSize(e.x, e.y),
          (this.kernelSize = KernelSize.LARGE)
      }
      getKernel() {
        return kernelPresets[this.kernelSize]
      }
      setTexelSize(e, t) {
        this.uniforms.texelSize.value.set(e, t),
          this.uniforms.halfTexelSize.value.set(e, t).multiplyScalar(0.5)
      }
    },
    kernelPresets = [
      new Float32Array([0, 0]),
      new Float32Array([0, 1, 1]),
      new Float32Array([0, 1, 1, 2]),
      new Float32Array([0, 1, 2, 2, 3]),
      new Float32Array([0, 1, 2, 3, 4, 4, 5]),
      new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])
    ],
    KernelSize = {
      VERY_SMALL: 0,
      SMALL: 1,
      MEDIUM: 2,
      LARGE: 3,
      VERY_LARGE: 4,
      HUGE: 5
    },
    shader_default9 =
      'uniform sampler2D inputBuffer;uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;\n#include <encodings_fragment>\n}',
    CopyMaterial = class extends THREE.ShaderMaterial {
      constructor() {
        super({
          type: 'CopyMaterial',
          uniforms: {
            inputBuffer: new THREE.Uniform(null),
            opacity: new THREE.Uniform(1)
          },
          fragmentShader: shader_default9,
          vertexShader: shader_default2,
          blending: THREE.NoBlending,
          depthWrite: !1,
          depthTest: !1
        }),
          (this.toneMapped = !1)
      }
    },
    EdgeDetectionMaterial = class extends THREE.ShaderMaterial {
      constructor(e = new THREE.Vector2(), t = EdgeDetectionMode.COLOR) {
        super({
          type: 'EdgeDetectionMaterial',
          defines: {
            LOCAL_CONTRAST_ADAPTATION_FACTOR: '2.0',
            EDGE_THRESHOLD: '0.1',
            DEPTH_THRESHOLD: '0.01',
            PREDICATION_MODE: '0',
            PREDICATION_THRESHOLD: '0.01',
            PREDICATION_SCALE: '2.0',
            PREDICATION_STRENGTH: '1.0',
            DEPTH_PACKING: '0'
          },
          uniforms: {
            inputBuffer: new THREE.Uniform(null),
            depthBuffer: new THREE.Uniform(null),
            predicationBuffer: new THREE.Uniform(null),
            texelSize: new THREE.Uniform(e)
          },
          fragmentShader: shader_default5,
          vertexShader: shader_default6,
          blending: THREE.NoBlending,
          depthWrite: !1,
          depthTest: !1
        }),
          (this.toneMapped = !1),
          this.setEdgeDetectionMode(t)
      }
      get depthPacking() {
        return Number(this.defines.DEPTH_PACKING)
      }
      set depthPacking(e) {
        ;(this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0)
      }
      setEdgeDetectionMode(e) {
        ;(this.defines.EDGE_DETECTION_MODE = e.toFixed(0)),
          (this.needsUpdate = !0)
      }
      setLocalContrastAdaptationFactor(e) {
        ;(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR = e.toFixed('6')),
          (this.needsUpdate = !0)
      }
      setEdgeDetectionThreshold(e) {
        ;(this.defines.EDGE_THRESHOLD = e.toFixed('6')),
          (this.defines.DEPTH_THRESHOLD = (0.1 * e).toFixed('6')),
          (this.needsUpdate = !0)
      }
      setPredicationMode(e) {
        ;(this.defines.PREDICATION_MODE = e.toFixed(0)), (this.needsUpdate = !0)
      }
      setPredicationBuffer(e) {
        this.uniforms.predicationBuffer.value = e
      }
      setPredicationThreshold(e) {
        ;(this.defines.PREDICATION_THRESHOLD = e.toFixed('6')),
          (this.needsUpdate = !0)
      }
      setPredicationScale(e) {
        ;(this.defines.PREDICATION_SCALE = e.toFixed('6')),
          (this.needsUpdate = !0)
      }
      setPredicationStrength(e) {
        ;(this.defines.PREDICATION_STRENGTH = e.toFixed('6')),
          (this.needsUpdate = !0)
      }
    },
    EdgeDetectionMode = { DEPTH: 0, LUMA: 1, COLOR: 2 },
    PredicationMode = { DISABLED: 0, DEPTH: 1, CUSTOM: 2 },
    shader_default17 =
      '#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\nuniform sampler2D inputBuffer;\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nuniform highp sampler2D depthBuffer;\n#else\nuniform mediump sampler2D depthBuffer;\n#endif\nuniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;float readDepth(const in vec2 uv){\n#if DEPTH_PACKING == 3201\nreturn unpackRGBAToDepth(texture2D(depthBuffer,uv));\n#else\nreturn texture2D(depthBuffer,uv).r;\n#endif\n}float getViewZ(const in float depth){\n#ifdef PERSPECTIVE_CAMERA\nreturn perspectiveDepthToViewZ(depth,cameraNear,cameraFar);\n#else\nreturn orthographicDepthToViewZ(depth,cameraNear,cameraFar);\n#endif\n}FRAGMENT_HEADvoid main(){FRAGMENT_MAIN_UVvec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGEgl_FragColor=color0;\n#ifdef ENCODE_OUTPUT\n#include <encodings_fragment>\n#endif\n#include <dithering_fragment>\n}',
    shader_default18 =
      'uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEADvoid main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORTgl_Position=vec4(position.xy,1.0,1.0);}',
    EffectMaterial = class extends THREE.ShaderMaterial {
      constructor(e = null, t = null, i = null, r, n = !1) {
        super({
          type: 'EffectMaterial',
          defines: { DEPTH_PACKING: '0', ENCODE_OUTPUT: '1' },
          uniforms: {
            inputBuffer: new THREE.Uniform(null),
            depthBuffer: new THREE.Uniform(null),
            resolution: new THREE.Uniform(new THREE.Vector2()),
            texelSize: new THREE.Uniform(new THREE.Vector2()),
            cameraNear: new THREE.Uniform(0.3),
            cameraFar: new THREE.Uniform(1e3),
            aspect: new THREE.Uniform(1),
            time: new THREE.Uniform(0)
          },
          blending: THREE.NoBlending,
          depthWrite: !1,
          depthTest: !1,
          dithering: n
        }),
          (this.toneMapped = !1),
          null !== e && this.setShaderParts(e),
          null !== t && this.setDefines(t),
          null !== i && this.setUniforms(i),
          this.adoptCameraSettings(r)
      }
      get depthPacking() {
        return Number(this.defines.DEPTH_PACKING)
      }
      set depthPacking(e) {
        ;(this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0)
      }
      setShaderParts(e) {
        return (
          (this.fragmentShader = shader_default17
            .replace(Section.FRAGMENT_HEAD, e.get(Section.FRAGMENT_HEAD))
            .replace(Section.FRAGMENT_MAIN_UV, e.get(Section.FRAGMENT_MAIN_UV))
            .replace(
              Section.FRAGMENT_MAIN_IMAGE,
              e.get(Section.FRAGMENT_MAIN_IMAGE)
            )),
          (this.vertexShader = shader_default18
            .replace(Section.VERTEX_HEAD, e.get(Section.VERTEX_HEAD))
            .replace(
              Section.VERTEX_MAIN_SUPPORT,
              e.get(Section.VERTEX_MAIN_SUPPORT)
            )),
          (this.needsUpdate = !0),
          this
        )
      }
      setDefines(e) {
        for (const t of e.entries()) this.defines[t[0]] = t[1]
        return (this.needsUpdate = !0), this
      }
      setUniforms(e) {
        for (const t of e.entries()) this.uniforms[t[0]] = t[1]
        return this
      }
      adoptCameraSettings(e = null) {
        null !== e &&
          ((this.uniforms.cameraNear.value = e.near),
          (this.uniforms.cameraFar.value = e.far),
          e instanceof THREE.PerspectiveCamera
            ? (this.defines.PERSPECTIVE_CAMERA = '1')
            : delete this.defines.PERSPECTIVE_CAMERA,
          (this.needsUpdate = !0))
      }
      setSize(e, t) {
        const i = Math.max(e, 1),
          r = Math.max(t, 1)
        this.uniforms.resolution.value.set(i, r),
          this.uniforms.texelSize.value.set(1 / i, 1 / r),
          (this.uniforms.aspect.value = i / r)
      }
    },
    Section = {
      FRAGMENT_HEAD: 'FRAGMENT_HEAD',
      FRAGMENT_MAIN_UV: 'FRAGMENT_MAIN_UV',
      FRAGMENT_MAIN_IMAGE: 'FRAGMENT_MAIN_IMAGE',
      VERTEX_HEAD: 'VERTEX_HEAD',
      VERTEX_MAIN_SUPPORT: 'VERTEX_MAIN_SUPPORT'
    },
    shader_default20 =
      '#include <common>\nuniform sampler2D inputBuffer;\n#ifdef RANGE\nuniform vec2 range;\n#elif defined(THRESHOLD)\nuniform float threshold;uniform float smoothing;\n#endif\nvarying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=linearToRelativeLuminance(texel.rgb);\n#ifdef RANGE\nfloat low=step(range.x,l);float high=step(l,range.y);l*=low*high;\n#elif defined(THRESHOLD)\nl=smoothstep(threshold,threshold+smoothing,l);\n#endif\n#ifdef COLOR\ngl_FragColor=vec4(texel.rgb*l,l);\n#else\ngl_FragColor=vec4(l);\n#endif\n}',
    LuminanceMaterial = class extends THREE.ShaderMaterial {
      constructor(e = !1, t = null) {
        const i = null !== t
        super({
          type: 'LuminanceMaterial',
          uniforms: {
            inputBuffer: new THREE.Uniform(null),
            threshold: new THREE.Uniform(0),
            smoothing: new THREE.Uniform(1),
            range: new THREE.Uniform(i ? t : new THREE.Vector2())
          },
          fragmentShader: shader_default20,
          vertexShader: shader_default2,
          blending: THREE.NoBlending,
          depthWrite: !1,
          depthTest: !1
        }),
          (this.toneMapped = !1),
          (this.colorOutput = e),
          (this.useThreshold = !0),
          (this.useRange = i)
      }
      get threshold() {
        return this.uniforms.threshold.value
      }
      set threshold(e) {
        this.uniforms.threshold.value = e
      }
      get smoothing() {
        return this.uniforms.smoothing.value
      }
      set smoothing(e) {
        this.uniforms.smoothing.value = e
      }
      get useThreshold() {
        return void 0 !== this.defines.THRESHOLD
      }
      set useThreshold(e) {
        e ? (this.defines.THRESHOLD = '1') : delete this.defines.THRESHOLD,
          (this.needsUpdate = !0)
      }
      get colorOutput() {
        return void 0 !== this.defines.COLOR
      }
      set colorOutput(e) {
        e ? (this.defines.COLOR = '1') : delete this.defines.COLOR,
          (this.needsUpdate = !0)
      }
      setColorOutputEnabled(e) {
        this.colorOutput = e
      }
      get useRange() {
        return void 0 !== this.defines.RANGE
      }
      set useRange(e) {
        e ? (this.defines.RANGE = '1') : delete this.defines.RANGE,
          (this.needsUpdate = !0)
      }
      get luminanceRange() {
        return this.useRange
      }
      set luminanceRange(e) {
        this.useRange = e
      }
      setLuminanceRangeEnabled(e) {
        this.useRange = e
      }
    },
    shader_default21 =
      'uniform sampler2D maskTexture;uniform sampler2D inputBuffer;\n#if MASK_FUNCTION != 0\nuniform float strength;\n#endif\nvarying vec2 vUv;void main(){\n#if COLOR_CHANNEL == 0\nfloat mask=texture2D(maskTexture,vUv).r;\n#elif COLOR_CHANNEL == 1\nfloat mask=texture2D(maskTexture,vUv).g;\n#elif COLOR_CHANNEL == 2\nfloat mask=texture2D(maskTexture,vUv).b;\n#else\nfloat mask=texture2D(maskTexture,vUv).a;\n#endif\n#if MASK_FUNCTION == 0\n#ifdef INVERTED\nif(mask>0.0){discard;}\n#else\nif(mask==0.0){discard;}\n#endif\n#else\nmask=clamp(mask*strength,0.0,1.0);\n#ifdef INVERTED\nmask=(1.0-mask);\n#endif\n#if MASK_FUNCTION == 1\ngl_FragColor=mask*texture2D(inputBuffer,vUv);\n#else\ngl_FragColor=vec4(mask*texture2D(inputBuffer,vUv).rgb,mask);\n#endif\n#endif\n}',
    MaskMaterial = class extends THREE.ShaderMaterial {
      constructor(e = null) {
        super({
          type: 'MaskMaterial',
          uniforms: {
            maskTexture: new THREE.Uniform(e),
            inputBuffer: new THREE.Uniform(null),
            strength: new THREE.Uniform(1)
          },
          fragmentShader: shader_default21,
          vertexShader: shader_default2,
          blending: THREE.NoBlending,
          depthWrite: !1,
          depthTest: !1
        }),
          (this.toneMapped = !1),
          (this.colorChannel = ColorChannel.RED),
          (this.maskFunction = MaskFunction.DISCARD)
      }
      set maskTexture(e) {
        this.uniforms.maskTexture.value = e
      }
      set colorChannel(e) {
        ;(this.defines.COLOR_CHANNEL = e.toFixed(0)), (this.needsUpdate = !0)
      }
      set maskFunction(e) {
        ;(this.defines.MASK_FUNCTION = e.toFixed(0)), (this.needsUpdate = !0)
      }
      get inverted() {
        return void 0 !== this.defines.INVERTED
      }
      set inverted(e) {
        this.inverted && !e
          ? delete this.defines.INVERTED
          : e && (this.defines.INVERTED = '1'),
          (this.needsUpdate = !0)
      }
      get strength() {
        return this.uniforms.strength.value
      }
      set strength(e) {
        this.uniforms.strength.value = e
      }
    },
    MaskFunction = { DISCARD: 0, MULTIPLY: 1, MULTIPLY_RGB_SET_ALPHA: 2 },
    shader_default24 =
      '#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)\n#if __VERSION__ < 300\n#define round(v) floor(v + 0.5)\n#endif\nuniform sampler2D inputBuffer;uniform sampler2D areaTexture;uniform sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){\n#if !defined(DISABLE_CORNER_DETECTION)\nvec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);\n#endif\n}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){\n#if !defined(DISABLE_CORNER_DETECTION)\nvec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);\n#endif\n}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){\n#if !defined(DISABLE_DIAG_DETECTION)\nweights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){\n#endif\nvec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);\n#if !defined(DISABLE_DIAG_DETECTION)\n}else{e.r=0.0;}\n#endif\n}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}',
    shader_default25 =
      'uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}',
    SMAAWeightsMaterial = class extends THREE.ShaderMaterial {
      constructor(e = new THREE.Vector2(), t = new THREE.Vector2()) {
        super({
          type: 'SMAAWeightsMaterial',
          defines: {
            MAX_SEARCH_STEPS_INT: '16',
            MAX_SEARCH_STEPS_FLOAT: '16.0',
            MAX_SEARCH_STEPS_DIAG_INT: '8',
            MAX_SEARCH_STEPS_DIAG_FLOAT: '8.0',
            CORNER_ROUNDING: '25',
            CORNER_ROUNDING_NORM: '0.25',
            AREATEX_MAX_DISTANCE: '16.0',
            AREATEX_MAX_DISTANCE_DIAG: '20.0',
            AREATEX_PIXEL_SIZE: '(1.0 / vec2(160.0, 560.0))',
            AREATEX_SUBTEX_SIZE: '(1.0 / 7.0)',
            SEARCHTEX_SIZE: 'vec2(66.0, 33.0)',
            SEARCHTEX_PACKED_SIZE: 'vec2(64.0, 16.0)'
          },
          uniforms: {
            inputBuffer: new THREE.Uniform(null),
            areaTexture: new THREE.Uniform(null),
            searchTexture: new THREE.Uniform(null),
            texelSize: new THREE.Uniform(e),
            resolution: new THREE.Uniform(t)
          },
          fragmentShader: shader_default24,
          vertexShader: shader_default25,
          blending: THREE.NoBlending,
          depthWrite: !1,
          depthTest: !1
        }),
          (this.toneMapped = !1)
      }
      setOrthogonalSearchSteps(e) {
        const t = Math.min(Math.max(e, 0), 112)
        ;(this.defines.MAX_SEARCH_STEPS_INT = t.toFixed('0')),
          (this.defines.MAX_SEARCH_STEPS_FLOAT = t.toFixed('1')),
          (this.needsUpdate = !0)
      }
      setDiagonalSearchSteps(e) {
        const t = Math.min(Math.max(e, 0), 20)
        ;(this.defines.MAX_SEARCH_STEPS_DIAG_INT = t.toFixed('0')),
          (this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT = t.toFixed('1')),
          (this.needsUpdate = !0)
      }
      setCornerRounding(e) {
        const t = Math.min(Math.max(e, 0), 100)
        ;(this.defines.CORNER_ROUNDING = t.toFixed('4')),
          (this.defines.CORNER_ROUNDING_NORM = (t / 100).toFixed('4')),
          (this.needsUpdate = !0)
      }
      get diagonalDetection() {
        return void 0 === this.defines.DISABLE_DIAG_DETECTION
      }
      set diagonalDetection(e) {
        e
          ? delete this.defines.DISABLE_DIAG_DETECTION
          : (this.defines.DISABLE_DIAG_DETECTION = '1'),
          (this.needsUpdate = !0)
      }
      get cornerRounding() {
        return void 0 === this.defines.DISABLE_CORNER_DETECTION
      }
      set cornerRounding(e) {
        e
          ? delete this.defines.DISABLE_CORNER_DETECTION
          : (this.defines.DISABLE_CORNER_DETECTION = '1'),
          (this.needsUpdate = !0)
      }
    },
    dummyCamera = new THREE.Camera(),
    geometry = null
  function getFullscreenTriangle() {
    if (null === geometry) {
      const e = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
        t = new Float32Array([0, 0, 2, 0, 0, 2])
      void 0 !== (geometry = new THREE.BufferGeometry()).setAttribute
        ? (geometry.setAttribute('position', new THREE.BufferAttribute(e, 3)),
          geometry.setAttribute('uv', new THREE.BufferAttribute(t, 2)))
        : (geometry.addAttribute('position', new THREE.BufferAttribute(e, 3)),
          geometry.addAttribute('uv', new THREE.BufferAttribute(t, 2)))
    }
    return geometry
  }
  var Pass = class {
      constructor(e = 'Pass', t = new THREE.Scene(), i = dummyCamera) {
        ;(this.name = e),
          (this.scene = t),
          (this.camera = i),
          (this.screen = null),
          (this.rtt = !0),
          (this.needsSwap = !0),
          (this.needsDepthTexture = !1),
          (this.enabled = !0)
      }
      get renderToScreen() {
        return !this.rtt
      }
      set renderToScreen(e) {
        if (this.rtt === e) {
          const t = this.getFullscreenMaterial()
          null !== t && (t.needsUpdate = !0), (this.rtt = !e)
        }
      }
      getFullscreenMaterial() {
        return null !== this.screen ? this.screen.material : null
      }
      setFullscreenMaterial(e) {
        let t = this.screen
        null !== t
          ? (t.material = e)
          : ((t = new THREE.Mesh(getFullscreenTriangle(), e)),
            (t.frustumCulled = !1),
            null === this.scene && (this.scene = new THREE.Scene()),
            this.scene.add(t),
            (this.screen = t))
      }
      getDepthTexture() {
        return null
      }
      setDepthTexture(e, t = 0) {}
      render(e, t, i, r, n) {
        throw new Error('Render method not implemented!')
      }
      setSize(e, t) {}
      initialize(e, t, i) {}
      dispose() {
        const e = this.getFullscreenMaterial()
        null !== e && e.dispose()
        for (const e of Object.keys(this)) {
          const t = this[e]
          if (null !== t && 'function' == typeof t.dispose) {
            if (t instanceof THREE.Scene) continue
            this[e].dispose()
          }
        }
      }
    },
    AUTO_SIZE = -1,
    Resizer = class {
      constructor(e, t = AUTO_SIZE, i = AUTO_SIZE, r = 1) {
        ;(this.resizable = e),
          (this.base = new THREE.Vector2(1, 1)),
          (this.target = new THREE.Vector2(t, i)),
          (this.s = r)
      }
      get scale() {
        return this.s
      }
      set scale(e) {
        ;(this.s = e),
          (this.target.x = AUTO_SIZE),
          (this.target.y = AUTO_SIZE),
          this.resizable.setSize(this.base.x, this.base.y)
      }
      get width() {
        const e = this.base,
          t = this.target
        let i
        return (
          (i =
            t.x !== AUTO_SIZE
              ? t.x
              : t.y !== AUTO_SIZE
              ? Math.round(t.y * (e.x / e.y))
              : Math.round(e.x * this.s)),
          i
        )
      }
      set width(e) {
        ;(this.target.x = e), this.resizable.setSize(this.base.x, this.base.y)
      }
      get height() {
        const e = this.base,
          t = this.target
        let i
        return (
          (i =
            t.y !== AUTO_SIZE
              ? t.y
              : t.x !== AUTO_SIZE
              ? Math.round(t.x / (e.x / e.y))
              : Math.round(e.y * this.s)),
          i
        )
      }
      set height(e) {
        ;(this.target.y = e), this.resizable.setSize(this.base.x, this.base.y)
      }
      static get AUTO_SIZE() {
        return AUTO_SIZE
      }
    },
    BlurPass = class extends Pass {
      constructor({
        resolutionScale: e = 0.5,
        width: t = Resizer.AUTO_SIZE,
        height: i = Resizer.AUTO_SIZE,
        kernelSize: r = KernelSize.LARGE
      } = {}) {
        super('BlurPass'),
          (this.renderTargetA = new THREE.WebGLRenderTarget(1, 1, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            stencilBuffer: !1,
            depthBuffer: !1
          })),
          (this.renderTargetA.texture.name = 'Blur.Target.A'),
          (this.renderTargetB = this.renderTargetA.clone()),
          (this.renderTargetB.texture.name = 'Blur.Target.B'),
          (this.resolution = new Resizer(this, t, i, e)),
          (this.convolutionMaterial = new ConvolutionMaterial()),
          (this.ditheredConvolutionMaterial = new ConvolutionMaterial()),
          (this.ditheredConvolutionMaterial.dithering = !0),
          (this.dithering = !1),
          (this.kernelSize = r)
      }
      get width() {
        return this.resolution.width
      }
      set width(e) {
        this.resolution.width = e
      }
      get height() {
        return this.resolution.height
      }
      set height(e) {
        this.resolution.height = e
      }
      get scale() {
        return this.convolutionMaterial.uniforms.scale.value
      }
      set scale(e) {
        ;(this.convolutionMaterial.uniforms.scale.value = e),
          (this.ditheredConvolutionMaterial.uniforms.scale.value = e)
      }
      get kernelSize() {
        return this.convolutionMaterial.kernelSize
      }
      set kernelSize(e) {
        ;(this.convolutionMaterial.kernelSize = e),
          (this.ditheredConvolutionMaterial.kernelSize = e)
      }
      getResolutionScale() {
        return this.resolution.scale
      }
      setResolutionScale(e) {
        this.resolution.scale = e
      }
      render(e, t, i, r, n) {
        const a = this.scene,
          o = this.camera,
          s = this.renderTargetA,
          l = this.renderTargetB
        let c = this.convolutionMaterial,
          h = c.uniforms
        const u = c.getKernel()
        let d,
          f,
          p,
          m = t
        for (this.setFullscreenMaterial(c), f = 0, p = u.length - 1; f < p; ++f)
          (d = 0 == (1 & f) ? s : l),
            (h.kernel.value = u[f]),
            (h.inputBuffer.value = m.texture),
            e.setRenderTarget(d),
            e.render(a, o),
            (m = d)
        this.dithering &&
          ((c = this.ditheredConvolutionMaterial),
          (h = c.uniforms),
          this.setFullscreenMaterial(c)),
          (h.kernel.value = u[f]),
          (h.inputBuffer.value = m.texture),
          e.setRenderTarget(this.renderToScreen ? null : i),
          e.render(a, o)
      }
      setSize(e, t) {
        const i = this.resolution
        i.base.set(e, t)
        const r = i.width,
          n = i.height
        this.renderTargetA.setSize(r, n),
          this.renderTargetB.setSize(r, n),
          this.convolutionMaterial.setTexelSize(1 / r, 1 / n),
          this.ditheredConvolutionMaterial.setTexelSize(1 / r, 1 / n)
      }
      initialize(e, t, i) {
        t ||
          i !== THREE.UnsignedByteType ||
          ((this.renderTargetA.texture.format = THREE.RGBFormat),
          (this.renderTargetB.texture.format = THREE.RGBFormat)),
          void 0 !== i &&
            ((this.renderTargetA.texture.type = i),
            (this.renderTargetB.texture.type = i))
      }
      static get AUTO_SIZE() {
        return Resizer.AUTO_SIZE
      }
    },
    ClearMaskPass = class extends Pass {
      constructor() {
        super('ClearMaskPass', null, null), (this.needsSwap = !1)
      }
      render(e, t, i, r, n) {
        const a = e.state.buffers.stencil
        a.setLocked(!1), a.setTest(!1)
      }
    },
    color = new THREE.Color(),
    ClearPass = class extends Pass {
      constructor(e = !0, t = !0, i = !1) {
        super('ClearPass', null, null),
          (this.needsSwap = !1),
          (this.color = e),
          (this.depth = t),
          (this.stencil = i),
          (this.overrideClearColor = null),
          (this.overrideClearAlpha = -1)
      }
      render(e, t, i, r, n) {
        const a = this.overrideClearColor,
          o = this.overrideClearAlpha,
          s = e.getClearAlpha(),
          l = null !== a,
          c = o >= 0
        l
          ? (color.copy(e.getClearColor(color)), e.setClearColor(a, c ? o : s))
          : c && e.setClearAlpha(o),
          e.setRenderTarget(this.renderToScreen ? null : t),
          e.clear(this.color, this.depth, this.stencil),
          l ? e.setClearColor(color, s) : c && e.setClearAlpha(s)
      }
    },
    workaroundEnabled = !1,
    OverrideMaterialManager = class {
      constructor(e = null) {
        ;(this.originalMaterials = new Map()),
          (this.material = null),
          (this.materials = null),
          (this.materialsBackSide = null),
          (this.materialsDoubleSide = null),
          this.setMaterial(e),
          (this.meshCount = 0),
          (this.replaceMaterial = (e) => {
            if (e.isMesh) {
              let t
              switch (e.material.side) {
                case THREE.DoubleSide:
                  t = this.materialsDoubleSide
                  break
                case THREE.BackSide:
                  t = this.materialsBackSide
                  break
                default:
                  t = this.materials
              }
              this.originalMaterials.set(e, e.material),
                e.isSkinnedMesh
                  ? (e.material = t[2])
                  : e.isInstancedMesh
                  ? (e.material = t[1])
                  : (e.material = t[0]),
                ++this.meshCount
            }
          })
      }
      setMaterial(e) {
        if ((this.disposeMaterials(), (this.material = e), null !== e)) {
          const t = (this.materials = [e.clone(), e.clone(), e.clone()])
          for (const i of t)
            (i.uniforms = Object.assign({}, e.uniforms)),
              (i.side = THREE.FrontSide)
          ;(t[2].skinning = !0),
            (this.materialsBackSide = t.map((t) => {
              const i = t.clone()
              return (
                (i.uniforms = Object.assign({}, e.uniforms)),
                (i.side = THREE.BackSide),
                i
              )
            })),
            (this.materialsDoubleSide = t.map((t) => {
              const i = t.clone()
              return (
                (i.uniforms = Object.assign({}, e.uniforms)),
                (i.side = THREE.DoubleSide),
                i
              )
            }))
        }
      }
      render(e, t, i) {
        const r = e.shadowMap.enabled
        if (((e.shadowMap.enabled = !1), workaroundEnabled)) {
          const r = this.originalMaterials
          ;(this.meshCount = 0),
            t.traverse(this.replaceMaterial),
            e.render(t, i)
          for (const e of r) e[0].material = e[1]
          this.meshCount !== r.size && r.clear()
        } else {
          const r = t.overrideMaterial
          ;(t.overrideMaterial = this.material),
            e.render(t, i),
            (t.overrideMaterial = r)
        }
        e.shadowMap.enabled = r
      }
      disposeMaterials() {
        if (null !== this.material) {
          const e = this.materials
            .concat(this.materialsBackSide)
            .concat(this.materialsDoubleSide)
          for (const t of e) t.dispose()
        }
      }
      dispose() {
        this.originalMaterials.clear(), this.disposeMaterials()
      }
      static get workaroundEnabled() {
        return workaroundEnabled
      }
      static set workaroundEnabled(e) {
        workaroundEnabled = e
      }
    },
    RenderPass = class extends Pass {
      constructor(e, t, i = null) {
        super('RenderPass', e, t),
          (this.needsSwap = !1),
          (this.clearPass = new ClearPass()),
          (this.overrideMaterialManager =
            null === i ? null : new OverrideMaterialManager(i))
      }
      get renderToScreen() {
        return super.renderToScreen
      }
      set renderToScreen(e) {
        ;(super.renderToScreen = e), (this.clearPass.renderToScreen = e)
      }
      get overrideMaterial() {
        const e = this.overrideMaterialManager
        return null !== e ? e.material : null
      }
      set overrideMaterial(e) {
        const t = this.overrideMaterialManager
        null !== e
          ? null !== t
            ? t.setMaterial(e)
            : (this.overrideMaterialManager = new OverrideMaterialManager(e))
          : null !== t && (t.dispose(), (this.overrideMaterialManager = null))
      }
      get clear() {
        return this.clearPass.enabled
      }
      set clear(e) {
        this.clearPass.enabled = e
      }
      getClearPass() {
        return this.clearPass
      }
      render(e, t, i, r, n) {
        const a = this.scene,
          o = this.camera,
          s = a.background,
          l = this.renderToScreen ? null : t
        this.clear &&
          (null !== this.clearPass.overrideClearColor && (a.background = null),
          this.clearPass.render(e, t)),
          e.setRenderTarget(l),
          null !== this.overrideMaterialManager
            ? this.overrideMaterialManager.render(e, a, o)
            : e.render(a, o),
          a.background !== s && (a.background = s)
      }
    },
    DepthPass = class extends Pass {
      constructor(
        e,
        t,
        {
          resolutionScale: i = 1,
          width: r = Resizer.AUTO_SIZE,
          height: n = Resizer.AUTO_SIZE,
          renderTarget: a
        } = {}
      ) {
        super('DepthPass'),
          (this.needsSwap = !1),
          (this.renderPass = new RenderPass(
            e,
            t,
            new THREE.MeshDepthMaterial({
              depthPacking: THREE.RGBADepthPacking
            })
          ))
        const o = this.renderPass.getClearPass()
        ;(o.overrideClearColor = new THREE.Color(16777215)),
          (o.overrideClearAlpha = 1),
          (this.renderTarget = a),
          void 0 === this.renderTarget &&
            ((this.renderTarget = new THREE.WebGLRenderTarget(1, 1, {
              minFilter: THREE.NearestFilter,
              magFilter: THREE.NearestFilter,
              stencilBuffer: !1
            })),
            (this.renderTarget.texture.name = 'DepthPass.Target')),
          (this.resolution = new Resizer(this, r, n, i))
      }
      get texture() {
        return this.renderTarget.texture
      }
      getResolutionScale() {
        return this.resolutionScale
      }
      setResolutionScale(e) {
        ;(this.resolutionScale = e),
          this.setSize(this.resolution.base.x, this.resolution.base.y)
      }
      render(e, t, i, r, n) {
        const a = this.renderToScreen ? null : this.renderTarget
        this.renderPass.render(e, a)
      }
      setSize(e, t) {
        const i = this.resolution
        i.base.set(e, t), this.renderTarget.setSize(i.width, i.height)
      }
    },
    BlendFunction = {
      SKIP: 0,
      ADD: 1,
      ALPHA: 2,
      AVERAGE: 3,
      COLOR_BURN: 4,
      COLOR_DODGE: 5,
      DARKEN: 6,
      DIFFERENCE: 7,
      EXCLUSION: 8,
      LIGHTEN: 9,
      MULTIPLY: 10,
      DIVIDE: 11,
      NEGATION: 12,
      NORMAL: 13,
      OVERLAY: 14,
      REFLECT: 15,
      SCREEN: 16,
      SOFT_LIGHT: 17,
      SUBTRACT: 18
    },
    shader_default28 =
      'vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x+y,1.0)*opacity+x*(1.0-opacity);}',
    shader_default29 =
      'vec3 blend(const in vec3 x,const in vec3 y,const in float opacity){return y*opacity+x*(1.0-opacity);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){float a=min(y.a,opacity);return vec4(blend(x.rgb,y.rgb,a),max(x.a,a));}',
    shader_default30 =
      'vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y)*0.5*opacity+x*(1.0-opacity);}',
    shader_default31 =
      'float blend(const in float x,const in float y){return(y==0.0)? y : max(1.0-(1.0-x)/y,0.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}',
    shader_default32 =
      'float blend(const in float x,const in float y){return(y==1.0)? y : min(x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}',
    shader_default33 =
      'vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x,y)*opacity+x*(1.0-opacity);}',
    shader_default34 =
      'vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return abs(x-y)*opacity+x*(1.0-opacity);}',
    shader_default35 =
      'vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y-2.0*x*y)*opacity+x*(1.0-opacity);}',
    shader_default36 =
      'vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x,y)*opacity+x*(1.0-opacity);}',
    shader_default37 =
      'vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return x*y*opacity+x*(1.0-opacity);}',
    shader_default38 =
      'float blend(const in float x,const in float y){return(y>0.0)? min(x/y,1.0): 1.0;}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}',
    shader_default39 =
      'vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-abs(1.0-x-y))*opacity+x*(1.0-opacity);}',
    shader_default40 =
      'vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y*opacity+x*(1.0-opacity);}',
    shader_default41 =
      'float blend(const in float x,const in float y){return(x<0.5)?(2.0*x*y):(1.0-2.0*(1.0-x)*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}',
    shader_default42 =
      'float blend(const in float x,const in float y){return(y==1.0)? y : min(x*x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}',
    shader_default43 =
      'vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-(1.0-x)*(1.0-y))*opacity+x*(1.0-opacity);}',
    shader_default44 =
      'float blend(const in float x,const in float y){return(y<0.5)?(2.0*x*y+x*x*(1.0-2.0*y)):(sqrt(x)*(2.0*y-1.0)+2.0*x*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}',
    shader_default45 =
      'vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x+y-1.0,0.0)*opacity+x*(1.0-opacity);}',
    blendFunctions = new Map([
      [BlendFunction.SKIP, null],
      [BlendFunction.ADD, shader_default28],
      [BlendFunction.ALPHA, shader_default29],
      [BlendFunction.AVERAGE, shader_default30],
      [BlendFunction.COLOR_BURN, shader_default31],
      [BlendFunction.COLOR_DODGE, shader_default32],
      [BlendFunction.DARKEN, shader_default33],
      [BlendFunction.DIFFERENCE, shader_default34],
      [BlendFunction.EXCLUSION, shader_default35],
      [BlendFunction.LIGHTEN, shader_default36],
      [BlendFunction.MULTIPLY, shader_default37],
      [BlendFunction.DIVIDE, shader_default38],
      [BlendFunction.NEGATION, shader_default39],
      [BlendFunction.NORMAL, shader_default40],
      [BlendFunction.OVERLAY, shader_default41],
      [BlendFunction.REFLECT, shader_default42],
      [BlendFunction.SCREEN, shader_default43],
      [BlendFunction.SOFT_LIGHT, shader_default44],
      [BlendFunction.SUBTRACT, shader_default45]
    ]),
    BlendMode = class extends THREE.EventDispatcher {
      constructor(e, t = 1) {
        super(), (this.blendFunction = e), (this.opacity = new THREE.Uniform(t))
      }
      getBlendFunction() {
        return this.blendFunction
      }
      setBlendFunction(e) {
        ;(this.blendFunction = e), this.dispatchEvent({ type: 'change' })
      }
      getShaderCode() {
        return blendFunctions.get(this.blendFunction)
      }
    },
    Effect = class extends THREE.EventDispatcher {
      constructor(
        e,
        t,
        {
          attributes: i = EffectAttribute.NONE,
          blendFunction: r = BlendFunction.SCREEN,
          defines: n = new Map(),
          uniforms: a = new Map(),
          extensions: o = null,
          vertexShader: s = null
        } = {}
      ) {
        super(),
          (this.name = e),
          (this.attributes = i),
          (this.fragmentShader = t),
          (this.vertexShader = s),
          (this.defines = n),
          (this.uniforms = a),
          (this.extensions = o),
          (this.blendMode = new BlendMode(r)),
          this.blendMode.addEventListener('change', (e) => this.setChanged())
      }
      setChanged() {
        this.dispatchEvent({ type: 'change' })
      }
      getAttributes() {
        return this.attributes
      }
      setAttributes(e) {
        ;(this.attributes = e), this.setChanged()
      }
      getFragmentShader() {
        return this.fragmentShader
      }
      setFragmentShader(e) {
        ;(this.fragmentShader = e), this.setChanged()
      }
      getVertexShader() {
        return this.vertexShader
      }
      setVertexShader(e) {
        ;(this.vertexShader = e), this.setChanged()
      }
      setDepthTexture(e, t = 0) {}
      update(e, t, i) {}
      setSize(e, t) {}
      initialize(e, t, i) {}
      dispose() {
        for (const e of Object.keys(this)) {
          const t = this[e]
          if (null !== t && 'function' == typeof t.dispose) {
            if (t instanceof THREE.Scene) continue
            this[e].dispose()
          }
        }
      }
    },
    EffectAttribute = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 }
  function findSubstrings(e, t) {
    const i = []
    let r
    for (; null !== (r = e.exec(t)); ) i.push(r[1])
    return i
  }
  function prefixSubstrings(e, t, i) {
    let r, n
    for (const a of t) {
      ;(r = '$1' + e + a.charAt(0).toUpperCase() + a.slice(1)),
        (n = new RegExp('([^\\.])(\\b' + a + '\\b)', 'g'))
      for (const e of i.entries())
        null !== e[1] && i.set(e[0], e[1].replace(n, r))
    }
  }
  function integrateEffect(e, t, i, r, n, a, o) {
    const s = /(?:\w+\s+(\w+)\([\w\s,]*\)\s*{[^}]+})/g,
      l = /(?:varying\s+\w+\s+(\w*))/g,
      c = t.blendMode,
      h = new Map([
        ['fragment', t.getFragmentShader()],
        ['vertex', t.getVertexShader()]
      ]),
      u = void 0 !== h.get('fragment') && /mainImage/.test(h.get('fragment')),
      d = void 0 !== h.get('fragment') && /mainUv/.test(h.get('fragment'))
    let f = [],
      p = [],
      m = !1,
      g = !1
    if (void 0 === h.get('fragment'))
      console.error('Missing fragment shader', t)
    else if (d && 0 != (o & EffectAttribute.CONVOLUTION))
      console.error(
        'Effects that transform UV coordinates are incompatible with convolution effects',
        t
      )
    else if (u || d) {
      if (
        (d &&
          (i.set(
            Section.FRAGMENT_MAIN_UV,
            i.get(Section.FRAGMENT_MAIN_UV) + '\t' + e + 'MainUv(UV);\n'
          ),
          (m = !0)),
        null !== h.get('vertex') && /mainSupport/.test(h.get('vertex')))
      ) {
        let t = '\t' + e + 'MainSupport('
        ;/mainSupport *\([\w\s]*?uv\s*?\)/.test(h.get('vertex')) &&
          (t += 'vUv'),
          (t += ');\n'),
          i.set(
            Section.VERTEX_MAIN_SUPPORT,
            i.get(Section.VERTEX_MAIN_SUPPORT) + t
          ),
          (f = f.concat(findSubstrings(l, h.get('vertex')))),
          (p = p.concat(f).concat(findSubstrings(s, h.get('vertex'))))
      }
      if (
        ((p = p
          .concat(findSubstrings(s, h.get('fragment')))
          .concat(
            Array.from(t.defines.keys()).map((e) =>
              e.replace(/\([\w\s,]*\)/g, '')
            )
          )
          .concat(Array.from(t.uniforms.keys()))),
        t.uniforms.forEach((t, i) =>
          a.set(e + i.charAt(0).toUpperCase() + i.slice(1), t)
        ),
        t.defines.forEach((t, i) =>
          n.set(e + i.charAt(0).toUpperCase() + i.slice(1), t)
        ),
        prefixSubstrings(e, p, n),
        prefixSubstrings(e, p, h),
        r.set(c.blendFunction, c),
        u)
      ) {
        const t = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/
        let r = e + 'MainImage(color0, UV, '
        0 != (o & EffectAttribute.DEPTH) &&
          t.test(h.get('fragment')) &&
          ((r += 'depth, '), (g = !0)),
          (r += 'color1);\n\t')
        const n = e + 'BlendOpacity'
        a.set(n, c.opacity),
          (r +=
            'color0 = blend' +
            c.getBlendFunction() +
            '(color0, color1, ' +
            n +
            ');\n\n\t'),
          i.set(
            Section.FRAGMENT_MAIN_IMAGE,
            i.get(Section.FRAGMENT_MAIN_IMAGE) + r
          ),
          i.set(
            Section.FRAGMENT_HEAD,
            i.get(Section.FRAGMENT_HEAD) + 'uniform float ' + n + ';\n\n'
          )
      }
      i.set(
        Section.FRAGMENT_HEAD,
        i.get(Section.FRAGMENT_HEAD) + h.get('fragment') + '\n'
      ),
        null !== h.get('vertex') &&
          i.set(
            Section.VERTEX_HEAD,
            i.get(Section.VERTEX_HEAD) + h.get('vertex') + '\n'
          )
    } else
      console.error(
        'The fragment shader contains neither a mainImage nor a mainUv function',
        t
      )
    return { varyings: f, transformedUv: m, readDepth: g }
  }
  var EffectPass = class extends Pass {
      constructor(e, ...t) {
        super('EffectPass'),
          this.setFullscreenMaterial(new EffectMaterial(null, null, null, e)),
          (this.effects = t.sort((e, t) => t.attributes - e.attributes)),
          (this.skipRendering = !1),
          (this.uniforms = 0),
          (this.varyings = 0),
          (this.minTime = 1),
          (this.maxTime = Number.POSITIVE_INFINITY)
      }
      get encodeOutput() {
        return void 0 !== this.getFullscreenMaterial().defines.ENCODE_OUTPUT
      }
      set encodeOutput(e) {
        if (this.encodeOutput !== e) {
          const t = this.getFullscreenMaterial()
          ;(t.needsUpdate = !0),
            e ? (t.defines.ENCODE_OUTPUT = '1') : delete t.defines.ENCODE_OUTPUT
        }
      }
      get dithering() {
        return this.getFullscreenMaterial().dithering
      }
      set dithering(e) {
        const t = this.getFullscreenMaterial()
        t.dithering !== e && ((t.dithering = e), (t.needsUpdate = !0))
      }
      verifyResources(e) {
        const t = e.capabilities
        let i = Math.min(t.maxFragmentUniforms, t.maxVertexUniforms)
        this.uniforms > i &&
          console.warn(
            "The current rendering context doesn't support more than " +
              i +
              ' uniforms, but ' +
              this.uniforms +
              ' were defined'
          ),
          (i = t.maxVaryings),
          this.varyings > i &&
            console.warn(
              "The current rendering context doesn't support more than " +
                i +
                ' varyings, but ' +
                this.varyings +
                ' were defined'
            )
      }
      updateMaterial() {
        const e = /\bblend\b/g,
          t = new Map([
            [Section.FRAGMENT_HEAD, ''],
            [Section.FRAGMENT_MAIN_UV, ''],
            [Section.FRAGMENT_MAIN_IMAGE, ''],
            [Section.VERTEX_HEAD, ''],
            [Section.VERTEX_MAIN_SUPPORT, '']
          ]),
          i = new Map(),
          r = new Map(),
          n = new Map(),
          a = new Set()
        let o,
          s = 0,
          l = 0,
          c = 0,
          h = !1,
          u = !1
        for (const e of this.effects)
          if (e.blendMode.getBlendFunction() === BlendFunction.SKIP)
            c |= e.getAttributes() & EffectAttribute.DEPTH
          else if (
            0 != (c & EffectAttribute.CONVOLUTION) &&
            0 != (e.getAttributes() & EffectAttribute.CONVOLUTION)
          )
            console.error('Convolution effects cannot be merged', e)
          else if (
            ((c |= e.getAttributes()),
            (o = integrateEffect('e' + s++, e, t, i, r, n, c)),
            (l += o.varyings.length),
            (h = h || o.transformedUv),
            (u = u || o.readDepth),
            null !== e.extensions)
          )
            for (const t of e.extensions) a.add(t)
        for (const r of i.values())
          t.set(
            Section.FRAGMENT_HEAD,
            t.get(Section.FRAGMENT_HEAD) +
              r.getShaderCode().replace(e, 'blend' + r.getBlendFunction()) +
              '\n'
          )
        0 != (c & EffectAttribute.DEPTH)
          ? (u &&
              t.set(
                Section.FRAGMENT_MAIN_IMAGE,
                'float depth = readDepth(UV);\n\n\t' +
                  t.get(Section.FRAGMENT_MAIN_IMAGE)
              ),
            (this.needsDepthTexture = null === this.getDepthTexture()))
          : (this.needsDepthTexture = !1),
          h
            ? (t.set(
                Section.FRAGMENT_MAIN_UV,
                'vec2 transformedUv = vUv;\n' + t.get(Section.FRAGMENT_MAIN_UV)
              ),
              r.set('UV', 'transformedUv'))
            : r.set('UV', 'vUv'),
          t.forEach((e, t, i) => i.set(t, e.trim().replace(/^#/, '\n#'))),
          (this.uniforms = n.size),
          (this.varyings = l),
          (this.skipRendering = 0 === s),
          (this.needsSwap = !this.skipRendering)
        const d = this.getFullscreenMaterial()
        if (
          (d.setShaderParts(t).setDefines(r).setUniforms(n),
          (d.extensions = {}),
          a.size > 0)
        )
          for (const e of a) d.extensions[e] = !0
        this.needsUpdate = !1
      }
      recompile(e) {
        this.updateMaterial(), void 0 !== e && this.verifyResources(e)
      }
      getDepthTexture() {
        return this.getFullscreenMaterial().uniforms.depthBuffer.value
      }
      setDepthTexture(e, t = THREE.BasicDepthPacking) {
        const i = this.getFullscreenMaterial()
        ;(i.uniforms.depthBuffer.value = e),
          (i.depthPacking = t),
          (i.needsUpdate = !0)
        for (const i of this.effects) i.setDepthTexture(e, t)
      }
      render(e, t, i, r, n) {
        const a = this.getFullscreenMaterial(),
          o = a.uniforms.time.value + r
        this.needsUpdate && this.recompile(e)
        for (const i of this.effects) i.update(e, t, r)
        ;(this.skipRendering && !this.renderToScreen) ||
          ((a.uniforms.inputBuffer.value = t.texture),
          (a.uniforms.time.value = o <= this.maxTime ? o : this.minTime),
          e.setRenderTarget(this.renderToScreen ? null : i),
          e.render(this.scene, this.camera))
      }
      setSize(e, t) {
        this.getFullscreenMaterial().setSize(e, t)
        for (const i of this.effects) i.setSize(e, t)
      }
      initialize(e, t, i) {
        this.capabilities = e.capabilities
        for (const r of this.effects)
          r.initialize(e, t, i),
            r.addEventListener('change', (e) => this.handleEvent(e))
        this.updateMaterial(), this.verifyResources(e)
      }
      dispose() {
        super.dispose()
        for (const e of this.effects) e.dispose()
      }
      handleEvent(e) {
        switch (e.type) {
          case 'change':
            this.needsUpdate = !0
        }
      }
    },
    LuminancePass = class extends Pass {
      constructor({
        width: e = Resizer.AUTO_SIZE,
        height: t = Resizer.AUTO_SIZE,
        renderTarget: i,
        luminanceRange: r,
        colorOutput: n
      } = {}) {
        super('LuminancePass'),
          this.setFullscreenMaterial(new LuminanceMaterial(n, r)),
          (this.needsSwap = !1),
          (this.renderTarget = i),
          void 0 === this.renderTarget &&
            ((this.renderTarget = new THREE.WebGLRenderTarget(1, 1, {
              minFilter: THREE.LinearFilter,
              magFilter: THREE.LinearFilter,
              format: n ? THREE.RGBAFormat : THREE.LuminanceFormat,
              stencilBuffer: !1,
              depthBuffer: !1
            })),
            (this.renderTarget.texture.name = 'LuminancePass.Target'),
            (this.renderTarget.texture.generateMipmaps = !1)),
          (this.resolution = new Resizer(this, e, t))
      }
      get texture() {
        return this.renderTarget.texture
      }
      render(e, t, i, r, n) {
        ;(this.getFullscreenMaterial().uniforms.inputBuffer.value = t.texture),
          e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
          e.render(this.scene, this.camera)
      }
      setSize(e, t) {
        const i = this.resolution
        i.base.set(e, t), this.renderTarget.setSize(i.width, i.height)
      }
    },
    MaskPass = class extends Pass {
      constructor(e, t) {
        super('MaskPass', e, t),
          (this.needsSwap = !1),
          (this.clearPass = new ClearPass(!1, !1, !0)),
          (this.inverse = !1)
      }
      get clear() {
        return this.clearPass.enabled
      }
      set clear(e) {
        this.clearPass.enabled = e
      }
      render(e, t, i, r, n) {
        const a = e.getContext(),
          o = e.state.buffers,
          s = this.scene,
          l = this.camera,
          c = this.clearPass,
          h = this.inverse ? 0 : 1,
          u = 1 - h
        o.color.setMask(!1),
          o.depth.setMask(!1),
          o.color.setLocked(!0),
          o.depth.setLocked(!0),
          o.stencil.setTest(!0),
          o.stencil.setOp(a.REPLACE, a.REPLACE, a.REPLACE),
          o.stencil.setFunc(a.ALWAYS, h, 4294967295),
          o.stencil.setClear(u),
          o.stencil.setLocked(!0),
          this.clear &&
            (this.renderToScreen
              ? c.render(e, null)
              : (c.render(e, t), c.render(e, i))),
          this.renderToScreen
            ? (e.setRenderTarget(null), e.render(s, l))
            : (e.setRenderTarget(t),
              e.render(s, l),
              e.setRenderTarget(i),
              e.render(s, l)),
          o.color.setLocked(!1),
          o.depth.setLocked(!1),
          o.stencil.setLocked(!1),
          o.stencil.setFunc(a.EQUAL, 1, 4294967295),
          o.stencil.setOp(a.KEEP, a.KEEP, a.KEEP),
          o.stencil.setLocked(!0)
      }
    },
    ShaderPass = class extends Pass {
      constructor(e, t = 'inputBuffer') {
        super('ShaderPass'),
          this.setFullscreenMaterial(e),
          (this.uniform = null),
          this.setInput(t)
      }
      setInput(e) {
        const t = this.getFullscreenMaterial()
        if (((this.uniform = null), null !== t)) {
          const i = t.uniforms
          void 0 !== i && void 0 !== i[e] && (this.uniform = i[e])
        }
      }
      render(e, t, i, r, n) {
        null !== this.uniform && null !== t && (this.uniform.value = t.texture),
          e.setRenderTarget(this.renderToScreen ? null : i),
          e.render(this.scene, this.camera)
      }
    },
    EffectComposer = class {
      constructor(
        e = null,
        {
          depthBuffer: t = !0,
          stencilBuffer: i = !1,
          multisampling: r = 0,
          frameBufferType: n
        } = {}
      ) {
        ;(this.renderer = e),
          (this.inputBuffer = null),
          (this.outputBuffer = null),
          null !== this.renderer &&
            ((this.renderer.autoClear = !1),
            (this.inputBuffer = this.createBuffer(t, i, n, r)),
            (this.outputBuffer = this.inputBuffer.clone()),
            this.enableExtensions()),
          (this.copyPass = new ShaderPass(new CopyMaterial())),
          (this.depthTexture = null),
          (this.passes = []),
          (this.autoRenderToScreen = !0)
      }
      get multisampling() {
        return this.inputBuffer instanceof THREE.WebGLMultisampleRenderTarget
          ? this.inputBuffer.samples
          : 0
      }
      set multisampling(e) {
        const t = this.inputBuffer,
          i = this.multisampling
        i > 0 && e > 0
          ? ((this.inputBuffer.samples = e), (this.outputBuffer.samples = e))
          : i !== e &&
            (this.inputBuffer.dispose(),
            this.outputBuffer.dispose(),
            (this.inputBuffer = this.createBuffer(
              t.depthBuffer,
              t.stencilBuffer,
              t.texture.type,
              e
            )),
            (this.inputBuffer.depthTexture = this.depthTexture),
            (this.outputBuffer = this.inputBuffer.clone()))
      }
      getRenderer() {
        return this.renderer
      }
      enableExtensions() {
        const e = this.inputBuffer.texture.type,
          t = this.renderer.capabilities,
          i = this.renderer.getContext()
        e !== THREE.UnsignedByteType &&
          (t.isWebGL2
            ? i.getExtension('EXT_color_buffer_float')
            : i.getExtension('EXT_color_buffer_half_float'))
      }
      replaceRenderer(e, t = !0) {
        const i = this.renderer
        if (null !== i && i !== e) {
          const r = i.getSize(new THREE.Vector2()),
            n = e.getSize(new THREE.Vector2()),
            a = i.domElement.parentNode
          ;(this.renderer = e),
            (this.renderer.autoClear = !1),
            r.equals(n) || this.setSize(),
            t &&
              null !== a &&
              (a.removeChild(i.domElement), a.appendChild(e.domElement)),
            this.enableExtensions()
        }
        return i
      }
      createDepthTexture() {
        const e = (this.depthTexture = new THREE.DepthTexture())
        return (
          (this.inputBuffer.depthTexture = e),
          this.inputBuffer.dispose(),
          this.inputBuffer.stencilBuffer
            ? ((e.format = THREE.DepthStencilFormat),
              (e.type = THREE.UnsignedInt248Type))
            : (e.type = THREE.UnsignedIntType),
          e
        )
      }
      deleteDepthTexture() {
        if (null !== this.depthTexture) {
          this.depthTexture.dispose(),
            (this.depthTexture = null),
            (this.inputBuffer.depthTexture = null),
            this.inputBuffer.dispose()
          for (const e of this.passes) e.setDepthTexture(null)
        }
      }
      createBuffer(e, t, i, r) {
        const n = this.renderer.getDrawingBufferSize(new THREE.Vector2()),
          a = {
            format:
              this.renderer.getContext().getContextAttributes().alpha ||
              i !== THREE.UnsignedByteType
                ? THREE.RGBAFormat
                : THREE.RGBFormat,
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            stencilBuffer: t,
            depthBuffer: e,
            type: i
          },
          o =
            r > 0
              ? new THREE.WebGLMultisampleRenderTarget(n.width, n.height, a)
              : new THREE.WebGLRenderTarget(n.width, n.height, a)
        return (
          r > 0 && (o.samples = r),
          (o.texture.name = 'EffectComposer.Buffer'),
          (o.texture.generateMipmaps = !1),
          o
        )
      }
      addPass(e, t) {
        const i = this.passes,
          r = this.renderer,
          n = r.getDrawingBufferSize(new THREE.Vector2()),
          a = r.getContext().getContextAttributes().alpha,
          o = this.inputBuffer.texture.type
        if (
          (e.setSize(n.width, n.height),
          e.initialize(r, a, o),
          this.autoRenderToScreen &&
            (i.length > 0 && (i[i.length - 1].renderToScreen = !1),
            e.renderToScreen && (this.autoRenderToScreen = !1)),
          void 0 !== t ? i.splice(t, 0, e) : i.push(e),
          this.autoRenderToScreen && (i[i.length - 1].renderToScreen = !0),
          e.needsDepthTexture || null !== this.depthTexture)
        )
          if (null === this.depthTexture) {
            const t = this.createDepthTexture()
            for (e of i) e.setDepthTexture(t)
          } else e.setDepthTexture(this.depthTexture)
      }
      removePass(e) {
        const t = this.passes,
          i = t.indexOf(e)
        if (-1 !== i && t.splice(i, 1).length > 0) {
          if (null !== this.depthTexture) {
            const i = (e, t) => e || t.needsDepthTexture
            t.reduce(i, !1) ||
              (e.getDepthTexture() === this.depthTexture &&
                e.setDepthTexture(null),
              this.deleteDepthTexture())
          }
          this.autoRenderToScreen &&
            i === t.length &&
            ((e.renderToScreen = !1),
            t.length > 0 && (t[t.length - 1].renderToScreen = !0))
        }
      }
      removeAllPasses() {
        const e = this.passes
        this.deleteDepthTexture(),
          e.length > 0 &&
            (this.autoRenderToScreen && (e[e.length - 1].renderToScreen = !1),
            (this.passes = []))
      }
      render(e) {
        const t = this.renderer,
          i = this.copyPass
        let r,
          n,
          a,
          o = this.inputBuffer,
          s = this.outputBuffer,
          l = !1
        for (const c of this.passes)
          c.enabled &&
            (c.render(t, o, s, e, l),
            c.needsSwap &&
              (l &&
                ((i.renderToScreen = c.renderToScreen),
                (r = t.getContext()),
                (n = t.state.buffers.stencil),
                n.setFunc(r.NOTEQUAL, 1, 4294967295),
                i.render(t, o, s, e, l),
                n.setFunc(r.EQUAL, 1, 4294967295)),
              (a = o),
              (o = s),
              (s = a)),
            c instanceof MaskPass
              ? (l = !0)
              : c instanceof ClearMaskPass && (l = !1))
      }
      setSize(e, t, i) {
        const r = this.renderer
        if (void 0 === e || void 0 === t) {
          const i = r.getSize(new THREE.Vector2())
          ;(e = i.width), (t = i.height)
        } else r.setSize(e, t, i)
        const n = r.getDrawingBufferSize(new THREE.Vector2())
        this.inputBuffer.setSize(n.width, n.height),
          this.outputBuffer.setSize(n.width, n.height)
        for (const e of this.passes) e.setSize(n.width, n.height)
      }
      reset() {
        this.dispose(), (this.autoRenderToScreen = !0)
      }
      dispose() {
        for (const e of this.passes) e.dispose()
        ;(this.passes = []),
          null !== this.inputBuffer && this.inputBuffer.dispose(),
          null !== this.outputBuffer && this.outputBuffer.dispose(),
          this.deleteDepthTexture(),
          this.copyPass.dispose()
      }
    },
    shader_default46 =
      'uniform sampler2D texture;uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=clamp(texture2D(texture,uv)*intensity,0.0,1.0);}',
    BloomEffect = class extends Effect {
      constructor({
        blendFunction: e = BlendFunction.SCREEN,
        luminanceThreshold: t = 0.9,
        luminanceSmoothing: i = 0.025,
        resolutionScale: r = 0.5,
        intensity: n = 1,
        width: a = Resizer.AUTO_SIZE,
        height: o = Resizer.AUTO_SIZE,
        kernelSize: s = KernelSize.LARGE
      } = {}) {
        super('BloomEffect', shader_default46, {
          blendFunction: e,
          uniforms: new Map([
            ['texture', new THREE.Uniform(null)],
            ['intensity', new THREE.Uniform(n)]
          ])
        }),
          (this.renderTarget = new THREE.WebGLRenderTarget(1, 1, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            stencilBuffer: !1,
            depthBuffer: !1
          })),
          (this.renderTarget.texture.name = 'Bloom.Target'),
          (this.renderTarget.texture.generateMipmaps = !1),
          (this.uniforms.get('texture').value = this.renderTarget.texture),
          (this.blurPass = new BlurPass({
            resolutionScale: r,
            width: a,
            height: o,
            kernelSize: s
          })),
          (this.blurPass.resolution.resizable = this),
          (this.luminancePass = new LuminancePass({
            renderTarget: this.renderTarget,
            colorOutput: !0
          })),
          (this.luminancePass.resolution = this.resolution),
          (this.luminanceMaterial.threshold = t),
          (this.luminanceMaterial.smoothing = i)
      }
      get texture() {
        return this.renderTarget.texture
      }
      get luminanceMaterial() {
        return this.luminancePass.getFullscreenMaterial()
      }
      get resolution() {
        return this.blurPass.resolution
      }
      get width() {
        return this.resolution.width
      }
      set width(e) {
        this.resolution.width = e
      }
      get height() {
        return this.resolution.height
      }
      set height(e) {
        this.resolution.height = e
      }
      get dithering() {
        return this.blurPass.dithering
      }
      set dithering(e) {
        this.blurPass.dithering = e
      }
      get kernelSize() {
        return this.blurPass.kernelSize
      }
      set kernelSize(e) {
        this.blurPass.kernelSize = e
      }
      get distinction() {
        return (
          console.warn(
            this.name,
            'The distinction field has been removed, use luminanceMaterial.threshold and luminanceMaterial.smoothing instead.'
          ),
          1
        )
      }
      set distinction(e) {
        console.warn(
          this.name,
          'The distinction field has been removed, use luminanceMaterial.threshold and luminanceMaterial.smoothing instead.'
        )
      }
      get intensity() {
        return this.uniforms.get('intensity').value
      }
      set intensity(e) {
        this.uniforms.get('intensity').value = e
      }
      getResolutionScale() {
        return this.resolution.scale
      }
      setResolutionScale(e) {
        this.resolution.scale = e
      }
      update(e, t, i) {
        const r = this.renderTarget
        this.luminancePass.enabled
          ? (this.luminancePass.render(e, t, r), this.blurPass.render(e, r, r))
          : this.blurPass.render(e, t, r)
      }
      setSize(e, t) {
        this.blurPass.setSize(e, t),
          this.renderTarget.setSize(
            this.resolution.width,
            this.resolution.height
          )
      }
      initialize(e, t, i) {
        this.blurPass.initialize(e, t, i),
          t ||
            i !== THREE.UnsignedByteType ||
            (this.renderTarget.texture.format = THREE.RGBFormat),
          void 0 !== i && (this.renderTarget.texture.type = i)
      }
    },
    shader_default48 =
      'uniform float brightness;uniform float contrast;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=inputColor.rgb+vec3(brightness-0.5);if(contrast>0.0){color/=vec3(1.0-contrast);}else{color*=vec3(1.0+contrast);}outputColor=vec4(min(color+vec3(0.5),1.0),inputColor.a);}',
    BrightnessContrastEffect = class extends Effect {
      constructor({
        blendFunction: e = BlendFunction.NORMAL,
        brightness: t = 0,
        contrast: i = 0
      } = {}) {
        super('BrightnessContrastEffect', shader_default48, {
          blendFunction: e,
          uniforms: new Map([
            ['brightness', new THREE.Uniform(t)],
            ['contrast', new THREE.Uniform(i)]
          ])
        })
      }
    },
    shader_default49 =
      'void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){float sum=inputColor.r+inputColor.g+inputColor.b;outputColor=vec4(vec3(sum/3.0),inputColor.a);}',
    ColorAverageEffect = class extends Effect {
      constructor(e = BlendFunction.NORMAL) {
        super('ColorAverageEffect', shader_default49, { blendFunction: e })
      }
    },
    shader_default51 =
      'varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 color=inputColor;\n#ifdef ALPHA\nvec2 ra=texture2D(inputBuffer,vUvR).ra;vec2 ba=texture2D(inputBuffer,vUvB).ba;color.r=ra.x;color.b=ba.x;color.a=max(max(ra.y,ba.y),inputColor.a);\n#else\ncolor.r=texture2D(inputBuffer,vUvR).r;color.b=texture2D(inputBuffer,vUvB).b;\n#endif\noutputColor=color;}',
    shader_default52 =
      'uniform vec2 offset;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vUvR=uv+offset;vUvB=uv-offset;}',
    ChromaticAberrationEffect = class extends Effect {
      constructor({
        blendFunction: e = BlendFunction.NORMAL,
        offset: t = new THREE.Vector2(0.001, 5e-4)
      } = {}) {
        super('ChromaticAberrationEffect', shader_default51, {
          vertexShader: shader_default52,
          blendFunction: e,
          attributes: EffectAttribute.CONVOLUTION,
          uniforms: new Map([['offset', new THREE.Uniform(t)]])
        })
      }
      get offset() {
        return this.uniforms.get('offset').value
      }
      set offset(e) {
        this.uniforms.get('offset').value = e
      }
      initialize(e, t, i) {
        t ? this.defines.set('ALPHA', '1') : this.defines.delete('ALPHA')
      }
    },
    shader_default54 =
      'uniform sampler2D nearColorBuffer;uniform sampler2D farColorBuffer;uniform sampler2D nearCoCBuffer;uniform float scale;void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){vec4 colorNear=texture2D(nearColorBuffer,uv);vec4 colorFar=texture2D(farColorBuffer,uv);float CoCNear=texture2D(nearCoCBuffer,uv).r;CoCNear=min(CoCNear*scale,1.0);vec4 result=inputColor*(1.0-colorFar.a)+colorFar;result=mix(result,colorNear,CoCNear);outputColor=result;}',
    DepthOfFieldEffect = class extends Effect {
      constructor(
        e,
        {
          blendFunction: t = BlendFunction.NORMAL,
          focusDistance: i = 0,
          focalLength: r = 0.1,
          bokehScale: n = 1,
          width: a = Resizer.AUTO_SIZE,
          height: o = Resizer.AUTO_SIZE
        } = {}
      ) {
        super('DepthOfFieldEffect', shader_default54, {
          blendFunction: t,
          attributes: EffectAttribute.DEPTH,
          uniforms: new Map([
            ['nearColorBuffer', new THREE.Uniform(null)],
            ['farColorBuffer', new THREE.Uniform(null)],
            ['nearCoCBuffer', new THREE.Uniform(null)],
            ['scale', new THREE.Uniform(1)]
          ])
        }),
          (this.camera = e),
          (this.renderTarget = new THREE.WebGLRenderTarget(1, 1, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            stencilBuffer: !1,
            depthBuffer: !1
          })),
          (this.renderTarget.texture.name = 'DoF.Intermediate'),
          (this.renderTarget.texture.generateMipmaps = !1),
          (this.renderTargetMasked = this.renderTarget.clone()),
          (this.renderTargetMasked.texture.name = 'DoF.Masked.Far'),
          (this.renderTargetNear = this.renderTarget.clone()),
          (this.renderTargetNear.texture.name = 'DoF.Bokeh.Near'),
          (this.uniforms.get('nearColorBuffer').value =
            this.renderTargetNear.texture),
          (this.renderTargetFar = this.renderTarget.clone()),
          (this.renderTargetFar.texture.name = 'DoF.Bokeh.Far'),
          (this.uniforms.get('farColorBuffer').value =
            this.renderTargetFar.texture),
          (this.renderTargetCoC = this.renderTarget.clone()),
          (this.renderTargetCoC.texture.format = THREE.RGBFormat),
          (this.renderTargetCoC.texture.name = 'DoF.CoC'),
          (this.renderTargetCoCBlurred = this.renderTargetCoC.clone()),
          (this.renderTargetCoCBlurred.texture.name = 'DoF.CoC.Blurred'),
          (this.uniforms.get('nearCoCBuffer').value =
            this.renderTargetCoCBlurred.texture),
          (this.cocPass = new ShaderPass(new CircleOfConfusionMaterial(e)))
        const s = this.circleOfConfusionMaterial
        ;(s.uniforms.focusDistance.value = i),
          (s.uniforms.focalLength.value = r),
          (this.blurPass = new BlurPass({
            width: a,
            height: o,
            kernelSize: KernelSize.MEDIUM
          })),
          (this.blurPass.resolution.resizable = this),
          (this.maskPass = new ShaderPass(
            new MaskMaterial(this.renderTargetCoC.texture)
          ))
        const l = this.maskPass.getFullscreenMaterial()
        ;(l.maskFunction = MaskFunction.MULTIPLY_RGB_SET_ALPHA),
          (l.colorChannel = ColorChannel.GREEN),
          (this.bokehNearBasePass = new ShaderPass(new BokehMaterial(!1, !0))),
          (this.bokehNearFillPass = new ShaderPass(new BokehMaterial(!0, !0))),
          (this.bokehFarBasePass = new ShaderPass(new BokehMaterial(!1, !1))),
          (this.bokehFarFillPass = new ShaderPass(new BokehMaterial(!0, !1))),
          (this.bokehScale = n),
          (this.target = null)
      }
      get circleOfConfusionMaterial() {
        return this.cocPass.getFullscreenMaterial()
      }
      get resolution() {
        return this.blurPass.resolution
      }
      get bokehScale() {
        return this.uniforms.get('scale').value
      }
      set bokehScale(e) {
        ;[
          this.bokehNearBasePass,
          this.bokehNearFillPass,
          this.bokehFarBasePass,
          this.bokehFarFillPass
        ]
          .map((e) => e.getFullscreenMaterial().uniforms.scale)
          .forEach((t) => {
            t.value = e
          }),
          (this.maskPass.getFullscreenMaterial().uniforms.strength.value = e),
          (this.uniforms.get('scale').value = e)
      }
      calculateFocusDistance(e) {
        const t = this.camera,
          i = t.far - t.near,
          r = t.position.distanceTo(e)
        return Math.min(Math.max(r / i, 0), 1)
      }
      setDepthTexture(e, t = THREE.BasicDepthPacking) {
        const i = this.circleOfConfusionMaterial
        ;(i.uniforms.depthBuffer.value = e), (i.depthPacking = t)
      }
      update(e, t, i) {
        const r = this.renderTarget,
          n = this.renderTargetCoC,
          a = this.renderTargetCoCBlurred,
          o = this.renderTargetMasked,
          s = this.bokehFarBasePass,
          l = this.bokehFarFillPass,
          c = s.getFullscreenMaterial().uniforms,
          h = l.getFullscreenMaterial().uniforms,
          u = this.bokehNearBasePass,
          d = this.bokehNearFillPass,
          f = u.getFullscreenMaterial().uniforms,
          p = d.getFullscreenMaterial().uniforms
        if (null !== this.target) {
          const e = this.calculateFocusDistance(this.target)
          this.circleOfConfusionMaterial.uniforms.focusDistance.value = e
        }
        this.cocPass.render(e, null, n),
          this.blurPass.render(e, n, a),
          this.maskPass.render(e, t, o),
          (c.cocBuffer.value = h.cocBuffer.value = n.texture),
          s.render(e, o, r),
          l.render(e, r, this.renderTargetFar),
          (f.cocBuffer.value = p.cocBuffer.value = a.texture),
          u.render(e, t, r),
          d.render(e, r, this.renderTargetNear)
      }
      setSize(e, t) {
        const i = this.resolution
        let r = [
          this.cocPass,
          this.blurPass,
          this.maskPass,
          this.bokehNearBasePass,
          this.bokehNearFillPass,
          this.bokehFarBasePass,
          this.bokehFarFillPass
        ]
        r.push(this.renderTargetCoC, this.renderTargetMasked),
          r.forEach((i) => i.setSize(e, t))
        const n = i.width,
          a = i.height
        ;(r = [
          this.renderTarget,
          this.renderTargetNear,
          this.renderTargetFar,
          this.renderTargetCoCBlurred
        ]),
          r.forEach((e) => e.setSize(n, a))
        ;[
          this.bokehNearBasePass,
          this.bokehNearFillPass,
          this.bokehFarBasePass,
          this.bokehFarFillPass
        ].forEach((e) => e.getFullscreenMaterial().setTexelSize(1 / n, 1 / a))
      }
      initialize(e, t, i) {
        ;[
          this.cocPass,
          this.maskPass,
          this.bokehNearBasePass,
          this.bokehNearFillPass,
          this.bokehFarBasePass,
          this.bokehFarFillPass
        ].forEach((r) => r.initialize(e, t, i)),
          this.blurPass.initialize(e, t, THREE.UnsignedByteType),
          t ||
            i !== THREE.UnsignedByteType ||
            (this.renderTargetNear.texture.type = THREE.RGBFormat),
          void 0 !== i &&
            ((this.renderTarget.texture.type = i),
            (this.renderTargetNear.texture.type = i),
            (this.renderTargetFar.texture.type = i),
            (this.renderTargetMasked.texture.type = i))
      }
    },
    v = new THREE.Vector3(),
    m = new THREE.Matrix4(),
    shader_default60 =
      'uniform vec3 hue;uniform float saturation;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=vec3(dot(inputColor.rgb,hue.xyz),dot(inputColor.rgb,hue.zxy),dot(inputColor.rgb,hue.yzx));float average=(color.r+color.g+color.b)/3.0;vec3 diff=average-color;if(saturation>0.0){color+=diff*(1.0-1.0/(1.001-saturation));}else{color+=diff*-saturation;}outputColor=vec4(min(color,1.0),inputColor.a);}',
    HueSaturationEffect = class extends Effect {
      constructor({
        blendFunction: e = BlendFunction.NORMAL,
        hue: t = 0,
        saturation: i = 0
      } = {}) {
        super('HueSaturationEffect', shader_default60, {
          blendFunction: e,
          uniforms: new Map([
            ['hue', new THREE.Uniform(new THREE.Vector3())],
            ['saturation', new THREE.Uniform(i)]
          ])
        }),
          this.setHue(t)
      }
      setHue(e) {
        const t = Math.sin(e),
          i = Math.cos(e)
        this.uniforms
          .get('hue')
          .value.set(2 * i, -Math.sqrt(3) * t - i, Math.sqrt(3) * t - i)
          .addScalar(1)
          .divideScalar(3)
      }
    },
    c = new THREE.Color(),
    shader_default62 =
      'void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*time));\n#ifdef PREMULTIPLY\noutputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);\n#else\noutputColor=vec4(noise,inputColor.a);\n#endif\n}',
    NoiseEffect = class extends Effect {
      constructor({
        blendFunction: e = BlendFunction.SCREEN,
        premultiply: t = !1
      } = {}) {
        super('NoiseEffect', shader_default62, { blendFunction: e }),
          (this.premultiply = t)
      }
      get premultiply() {
        return this.defines.has('PREMULTIPLY')
      }
      set premultiply(e) {
        this.premultiply !== e &&
          (e
            ? this.defines.set('PREMULTIPLY', '1')
            : this.defines.delete('PREMULTIPLY'),
          this.setChanged())
      }
    },
    shader_default65 =
      'uniform bool active;uniform vec2 d;void mainUv(inout vec2 uv){if(active){uv=vec2(d.x*(floor(uv.x/d.x)+0.5),d.y*(floor(uv.y/d.y)+0.5));}}',
    PixelationEffect = class extends Effect {
      constructor(e = 30) {
        super('PixelationEffect', shader_default65, {
          uniforms: new Map([
            ['active', new THREE.Uniform(!1)],
            ['d', new THREE.Uniform(new THREE.Vector2())]
          ])
        }),
          (this.resolution = new THREE.Vector2()),
          (this.granularity = e)
      }
      getGranularity() {
        return this.granularity
      }
      setGranularity(e) {
        ;(e = Math.floor(e)) % 2 > 0 && (e += 1)
        const t = this.uniforms
        ;(t.get('active').value = e > 0),
          t.get('d').value.set(e, e).divide(this.resolution),
          (this.granularity = e)
      }
      setSize(e, t) {
        this.resolution.set(e, t), this.setGranularity(this.granularity)
      }
    },
    v2 = new THREE.Vector3(),
    ab = new THREE.Vector3(),
    searchImageDataURL_default =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC',
    areaImageDataURL_default =
      'data:image/png;base64,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',
    shader_default71 =
      'uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}',
    shader_default72 =
      'varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}',
    SMAAEffect = class extends Effect {
      constructor(e, t, i = SMAAPreset.HIGH, r = EdgeDetectionMode.COLOR) {
        super('SMAAEffect', shader_default71, {
          vertexShader: shader_default72,
          blendFunction: BlendFunction.NORMAL,
          attributes: EffectAttribute.CONVOLUTION | EffectAttribute.DEPTH,
          uniforms: new Map([['weightMap', new THREE.Uniform(null)]])
        }),
          (this.renderTargetEdges = new THREE.WebGLRenderTarget(1, 1, {
            minFilter: THREE.LinearFilter,
            stencilBuffer: !1,
            depthBuffer: !1,
            format: THREE.RGBFormat
          })),
          (this.renderTargetEdges.texture.name = 'SMAA.Edges'),
          (this.renderTargetWeights = this.renderTargetEdges.clone()),
          (this.renderTargetWeights.texture.name = 'SMAA.Weights'),
          (this.renderTargetWeights.texture.format = THREE.RGBAFormat),
          (this.uniforms.get('weightMap').value =
            this.renderTargetWeights.texture),
          (this.clearPass = new ClearPass(!0, !1, !1)),
          (this.clearPass.overrideClearColor = new THREE.Color(0)),
          (this.clearPass.overrideClearAlpha = 1),
          (this.edgeDetectionPass = new ShaderPass(
            new EdgeDetectionMaterial(new THREE.Vector2(), r)
          )),
          (this.weightsPass = new ShaderPass(new SMAAWeightsMaterial()))
        const n = new THREE.Texture(e)
        ;(n.name = 'SMAA.Search'),
          (n.magFilter = THREE.NearestFilter),
          (n.minFilter = THREE.NearestFilter),
          (n.format = THREE.RGBAFormat),
          (n.generateMipmaps = !1),
          (n.needsUpdate = !0),
          (n.flipY = !0)
        const a = new THREE.Texture(t)
        ;(a.name = 'SMAA.Area'),
          (a.minFilter = THREE.LinearFilter),
          (a.format = THREE.RGBAFormat),
          (a.generateMipmaps = !1),
          (a.needsUpdate = !0),
          (a.flipY = !1)
        const o = this.weightsPass.getFullscreenMaterial()
        ;(o.uniforms.searchTexture.value = n),
          (o.uniforms.areaTexture.value = a),
          this.applyPreset(i)
      }
      get edgeDetectionMaterial() {
        return this.edgeDetectionPass.getFullscreenMaterial()
      }
      get colorEdgesMaterial() {
        return this.edgeDetectionMaterial
      }
      get weightsMaterial() {
        return this.weightsPass.getFullscreenMaterial()
      }
      setEdgeDetectionThreshold(e) {
        this.edgeDetectionPass
          .getFullscreenMaterial()
          .setEdgeDetectionThreshold(e)
      }
      setOrthogonalSearchSteps(e) {
        this.weightsPass.getFullscreenMaterial().setOrthogonalSearchSteps(e)
      }
      applyPreset(e) {
        const t = this.edgeDetectionMaterial,
          i = this.weightsMaterial
        switch (e) {
          case SMAAPreset.LOW:
            t.setEdgeDetectionThreshold(0.15),
              i.setOrthogonalSearchSteps(4),
              (i.diagonalDetection = !1),
              (i.cornerRounding = !1)
            break
          case SMAAPreset.MEDIUM:
            t.setEdgeDetectionThreshold(0.1),
              i.setOrthogonalSearchSteps(8),
              (i.diagonalDetection = !1),
              (i.cornerRounding = !1)
            break
          case SMAAPreset.HIGH:
            t.setEdgeDetectionThreshold(0.1),
              i.setOrthogonalSearchSteps(16),
              i.setDiagonalSearchSteps(8),
              i.setCornerRounding(25),
              (i.diagonalDetection = !0),
              (i.cornerRounding = !0)
            break
          case SMAAPreset.ULTRA:
            t.setEdgeDetectionThreshold(0.05),
              i.setOrthogonalSearchSteps(32),
              i.setDiagonalSearchSteps(16),
              i.setCornerRounding(25),
              (i.diagonalDetection = !0),
              (i.cornerRounding = !0)
        }
      }
      setDepthTexture(e, t = THREE.BasicDepthPacking) {
        const i = this.edgeDetectionMaterial
        ;(i.uniforms.depthBuffer.value = e), (i.depthPacking = t)
      }
      update(e, t, i) {
        this.clearPass.render(e, this.renderTargetEdges),
          this.edgeDetectionPass.render(e, t, this.renderTargetEdges),
          this.weightsPass.render(
            e,
            this.renderTargetEdges,
            this.renderTargetWeights
          )
      }
      setSize(e, t) {
        const i = this.edgeDetectionPass.getFullscreenMaterial(),
          r = this.weightsPass.getFullscreenMaterial()
        this.renderTargetEdges.setSize(e, t),
          this.renderTargetWeights.setSize(e, t),
          r.uniforms.resolution.value.set(e, t),
          r.uniforms.texelSize.value.set(1 / e, 1 / t),
          i.uniforms.texelSize.value.copy(r.uniforms.texelSize.value)
      }
      dispose() {
        const e = this.weightsPass.getFullscreenMaterial().uniforms
        e.searchTexture.value.dispose(),
          e.areaTexture.value.dispose(),
          super.dispose()
      }
      static get searchImageDataURL() {
        return searchImageDataURL_default
      }
      static get areaImageDataURL() {
        return areaImageDataURL_default
      }
    },
    SMAAPreset = { LOW: 0, MEDIUM: 1, HIGH: 2, ULTRA: 3 },
    shader_default77 =
      'uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;\n#ifdef ESKIL\nvec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));\n#else\nfloat d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));\n#endif\noutputColor=vec4(color,inputColor.a);}',
    VignetteEffect = class extends Effect {
      constructor(e = {}) {
        const t = Object.assign(
          {
            blendFunction: BlendFunction.NORMAL,
            eskil: !1,
            offset: 0.5,
            darkness: 0.5
          },
          e
        )
        super('VignetteEffect', shader_default77, {
          blendFunction: t.blendFunction,
          uniforms: new Map([
            ['offset', new THREE.Uniform(t.offset)],
            ['darkness', new THREE.Uniform(t.darkness)]
          ])
        }),
          (this.eskil = t.eskil)
      }
      get eskil() {
        return this.defines.has('ESKIL')
      }
      set eskil(e) {
        this.eskil !== e &&
          (e ? this.defines.set('ESKIL', '1') : this.defines.delete('ESKIL'),
          this.setChanged())
      }
    },
    SMAAImageLoader = class extends THREE.Loader {
      load(e = () => {}, t = null) {
        4 === arguments.length
          ? ((e = arguments[1]), (t = arguments[3]))
          : (3 !== arguments.length && 'function' == typeof arguments[0]) ||
            ((e = arguments[1]), (t = null))
        const i = this.manager,
          r = new THREE.LoadingManager()
        return new Promise((n, a) => {
          const o = new Image(),
            s = new Image()
          ;(r.onError = (e) => {
            i.itemError(e),
              null !== t
                ? (t(`Failed to load ${e}`), n())
                : a(`Failed to load ${e}`)
          }),
            (r.onLoad = () => {
              const t = [o, s]
              e(t), n(t)
            }),
            o.addEventListener('error', (e) => {
              r.itemError('smaa-search')
            }),
            s.addEventListener('error', (e) => {
              r.itemError('smaa-area')
            }),
            o.addEventListener('load', () => {
              i.itemEnd('smaa-search'), r.itemEnd('smaa-search')
            }),
            s.addEventListener('load', () => {
              i.itemEnd('smaa-area'), r.itemEnd('smaa-area')
            }),
            i.itemStart('smaa-search'),
            i.itemStart('smaa-area'),
            r.itemStart('smaa-search'),
            r.itemStart('smaa-area'),
            (o.src = searchImageDataURL_default),
            (s.src = areaImageDataURL_default)
        })
      }
    },
    TinyState = (function () {
      function e() {
        this.subscriptions = []
      }
      return (
        (e.prototype.subscribe = function (e) {
          var t = this
          return (
            this.subscriptions.push(e),
            function () {
              return t.unsubscribe(e)
            }
          )
        }),
        (e.prototype.unsubscribe = function (e) {
          this.subscriptions = this.subscriptions.filter(function (t) {
            return t !== e
          })
        }),
        (e.prototype.onChange = function () {
          var e = this
          this.subscriptions.forEach(function (t) {
            'function' == typeof t && t(e)
          })
        }),
        (e.prototype.setState = function (e) {
          var t = this
          Object.keys(e).forEach(function (i) {
            t[i] = e[i]
          }),
            this.onChange()
        }),
        e
      )
    })(),
    Effect$1 = (function (e) {
      function t(t, i) {
        var r = e.call(this) || this
        return (
          (r.enabled = !1),
          (r.effect = new t(i)),
          Object.defineProperty(r, 'opacity', {
            enumerable: !0,
            set: function (e) {
              this.effect.blendMode.opacity.value = e
            },
            get: function () {
              return this.effect.blendMode.opacity.value
            }
          }),
          Object.defineProperty(r, 'blendFunction', {
            enumerable: !0,
            set: function (e) {
              this.effect.blendMode.setBlendFunction(Number(e))
            },
            get: function () {
              return this.effect.blendMode.blendFunction
            }
          }),
          (r.blendFunction = BlendFunction.NORMAL),
          r
        )
      }
      return (
        __extends(t, e),
        (t.prototype.toJSON = function () {
          var e,
            t,
            i = __assign({}, this),
            r = Object.getPrototypeOf(this),
            n = Object.getOwnPropertyNames(r)
          try {
            for (var a = __values(n), o = a.next(); !o.done; o = a.next()) {
              var s = o.value,
                l = Object.getOwnPropertyDescriptor(r, s)
              l && 'function' == typeof l.get && (i[s] = this[s])
            }
          } catch (t) {
            e = { error: t }
          } finally {
            try {
              o && !o.done && (t = a.return) && t.call(a)
            } finally {
              if (e) throw e.error
            }
          }
          return (
            ['constructor', 'effect', 'subscriptions'].forEach(function (e) {
              return delete i[e]
            }),
            i
          )
        }),
        (t.prototype.fromJSON = function (e) {
          this.setState(e)
        }),
        t
      )
    })(TinyState),
    Bloom = (function (e) {
      function t() {
        var t = e.call(this, BloomEffect) || this
        return (t.blendFunction = BlendFunction.SCREEN), t
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'intensity', {
          get: function () {
            return this.effect.intensity
          },
          set: function (e) {
            this.effect.intensity = e
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'luminanceThreshold', {
          get: function () {
            return this.effect.luminanceMaterial.threshold
          },
          set: function (e) {
            this.effect.luminanceMaterial.threshold = e
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'luminanceSmoothing', {
          get: function () {
            return this.effect.luminanceMaterial.smoothing
          },
          set: function (e) {
            this.effect.luminanceMaterial.smoothing = e
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'blurScale', {
          get: function () {
            return this.effect.blurPass.scale
          },
          set: function (e) {
            this.effect.blurPass.scale = e
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'kernelSize', {
          get: function () {
            return this.effect.blurPass.kernelSize
          },
          set: function (e) {
            this.effect.blurPass.kernelSize = e
          },
          enumerable: !1,
          configurable: !0
        }),
        t
      )
    })(Effect$1),
    BrightnessContrast = (function (e) {
      function t() {
        return e.call(this, BrightnessContrastEffect) || this
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'contrast', {
          get: function () {
            return this.effect.uniforms.get('contrast').value
          },
          set: function (e) {
            this.effect.uniforms.get('contrast').value = e
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'brightness', {
          get: function () {
            return this.effect.uniforms.get('brightness').value
          },
          set: function (e) {
            this.effect.uniforms.get('brightness').value = e
          },
          enumerable: !1,
          configurable: !0
        }),
        t
      )
    })(Effect$1),
    ChromaticAberration = (function (e) {
      function t() {
        var t = e.call(this, ChromaticAberrationEffect) || this
        return (t.effect.offset = new THREE.Vector2(0.01, 0.01)), t
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'offset', {
          get: function () {
            return [1e3 * this.effect.offset.x, 1e3 * this.effect.offset.y]
          },
          set: function (e) {
            this.effect.offset.set(e[0] / 1e3, e[1] / 1e3)
          },
          enumerable: !1,
          configurable: !0
        }),
        t
      )
    })(Effect$1),
    ColorAverage = (function (e) {
      function t() {
        return e.call(this, ColorAverageEffect) || this
      }
      return __extends(t, e), t
    })(Effect$1),
    HueSaturation = (function (e) {
      function t() {
        var t = e.call(this, HueSaturationEffect) || this
        return (t._hue = 0), t
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'hue', {
          get: function () {
            return this._hue
          },
          set: function (e) {
            ;(this._hue = e), this.effect.setHue(e)
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'saturation', {
          get: function () {
            return this.effect.uniforms.get('saturation').value
          },
          set: function (e) {
            this.effect.uniforms.get('saturation').value = e
          },
          enumerable: !1,
          configurable: !0
        }),
        t
      )
    })(Effect$1),
    Noise = (function (e) {
      function t() {
        var t = e.call(this, NoiseEffect) || this
        return (t.blendFunction = BlendFunction.OVERLAY), t
      }
      return __extends(t, e), t
    })(Effect$1),
    Vignette = (function (e) {
      function t() {
        return e.call(this, VignetteEffect) || this
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'eskil', {
          get: function () {
            return this.effect.eskil
          },
          set: function (e) {
            this.effect.eskil = e
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'darkness', {
          get: function () {
            return this.effect.uniforms.get('darkness').value
          },
          set: function (e) {
            this.effect.uniforms.get('darkness').value = e
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'offset', {
          get: function () {
            return this.effect.uniforms.get('offset').value
          },
          set: function (e) {
            this.effect.uniforms.get('offset').value = e
          },
          enumerable: !1,
          configurable: !0
        }),
        t
      )
    })(Effect$1),
    Bloom$1 = (function (e) {
      function t(t) {
        return e.call(this, DepthOfFieldEffect, t) || this
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'focalLength', {
          get: function () {
            return this.effect.circleOfConfusionMaterial.uniforms.focalLength
              .value
          },
          set: function (e) {
            this.effect.circleOfConfusionMaterial.uniforms.focalLength.value = e
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'focusDistance', {
          get: function () {
            return this.effect.circleOfConfusionMaterial.uniforms.focusDistance
              .value
          },
          set: function (e) {
            this.effect.circleOfConfusionMaterial.uniforms.focusDistance.value =
              e
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'bokehScale', {
          get: function () {
            return this.effect.bokehScale
          },
          set: function (e) {
            this.effect.bokehScale = e
          },
          enumerable: !1,
          configurable: !0
        }),
        t
      )
    })(Effect$1),
    Vignette$1 = (function (e) {
      function t() {
        return e.call(this, PixelationEffect) || this
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'granularity', {
          get: function () {
            return this.effect.getGranularity()
          },
          set: function (e) {
            this.effect.setGranularity(e)
          },
          enumerable: !1,
          configurable: !0
        }),
        t
      )
    })(Effect$1)
  function removeDisabledLayers(e, t) {
    return t && t.enabled && e.push(t.effect), e
  }
  var Post = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t.effects = new Map()),
          (t.loadingManager = new THREE.LoadingManager()),
          (t.smaaImageLoader = new SMAAImageLoader(t.loadingManager)),
          (t.renderPass = new RenderPass()),
          (t.depthPass = new DepthPass()),
          (t.clock = new THREE.Clock()),
          (t.enabled = !1),
          (t.debug = !1),
          t.effects.set('bloom', new Bloom()),
          t.effects.set('chromaticAberration', new ChromaticAberration()),
          t.effects.set('vignette', new Vignette()),
          t.effects.set('noise', new Noise()),
          t.effects.set('colorAverage', new ColorAverage()),
          t.effects.set('hueSaturation', new HueSaturation()),
          t.effects.set('brightnessContrast', new BrightnessContrast()),
          t.effects.set('depthOfField', new Bloom$1()),
          t.effects.set('pixelation', new Vignette$1()),
          t
        )
      }
      return (
        __extends(t, e),
        (t.prototype.reinit = function () {
          if (
            ((this.effectComposer = new EffectComposer(this.renderer)),
            (this.renderPass = new RenderPass(this.scene, this.camera)),
            this.enabled)
          ) {
            var e = new SMAAEffect(
              this.search,
              this.area,
              SMAAPreset.ULTRA,
              EdgeDetectionMode.COLOR
            )
            e.edgeDetectionMaterial.setPredicationMode(PredicationMode.DEPTH),
              e.edgeDetectionMaterial.setEdgeDetectionThreshold(0.05),
              e.edgeDetectionMaterial.setPredicationThreshold(0.002),
              e.edgeDetectionMaterial.setPredicationScale(1),
              (this.depthPass = new DepthPass(this.scene, this.camera)),
              this.effectComposer.addPass(this.renderPass),
              this.effectComposer.addPass(this.depthPass),
              this.effectComposer.addPass(new EffectPass(this.camera, e))
            var t = [
                this.effects.get('chromaticAberration'),
                this.effects.get('bloom'),
                this.effects.get('colorAverage'),
                this.effects.get('hueSaturation'),
                this.effects.get('brightnessContrast'),
                this.effects.get('vignette'),
                this.effects.get('noise')
              ].reduce(removeDisabledLayers, []),
              i = [this.effects.get('pixelation')].reduce(
                removeDisabledLayers,
                []
              )
            i.length > 0 &&
              this.effectComposer.addPass(
                new (EffectPass.bind.apply(
                  EffectPass,
                  __spread([void 0, this.camera], i)
                ))()
              ),
              this.effectComposer.addPass(
                new (EffectPass.bind.apply(
                  EffectPass,
                  __spread([void 0, this.camera], t)
                ))()
              )
          } else this.effectComposer.addPass(this.renderPass)
        }),
        (t.prototype.init = function (e) {
          var t = this,
            i = e.renderer,
            r = e.camera,
            n = e.scene
          ;(this.renderer = i),
            (this.scene = n),
            (this.camera = r),
            this.smaaImageLoader.load(function (e) {
              var i = __read(e, 2),
                r = i[0],
                n = i[1]
              ;(t.search = r), (t.area = n), t.reinit()
            })
        }),
        (t.prototype.fromJSON = function (e) {
          var t = this
          e &&
            (Object.keys(e).forEach(function (i) {
              var r
              null === (r = t.effects.get(i)) ||
                void 0 === r ||
                r.fromJSON(e[i])
            }),
            this.setState({ enabled: e.enabled }))
        }),
        (t.prototype.toJSON = function () {
          var e = {}
          return (
            this.effects.forEach(function (t, i) {
              e[i] = t.toJSON()
            }, e),
            __assign({ enabled: this.enabled }, e)
          )
        }),
        (t.prototype.enable = function () {
          this.setState({ enabled: !0 })
        }),
        (t.prototype.disable = function () {
          this.setState({ enabled: !1 })
        }),
        (t.prototype.toggle = function () {
          this.enabled ? this.disable() : this.enable(), this.reinit()
        }),
        (t.prototype.render = function () {
          var e
          null === (e = this.effectComposer) ||
            void 0 === e ||
            e.render(this.clock.getDelta())
        }),
        t
      )
    })(TinyState),
    Scene = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t.objectType = 'Scene'),
          (t.postprocessing = new Post()),
          (t.alpha = 1),
          (t.backupFog = new THREE.Fog(16777215, 100, 1e3)),
          (t.fogUseBGColor = !1),
          (t.directionalLightState = !0),
          (t.ambientLightState = !0),
          (t.shadowsState = !0),
          (t.wireframeState = !1),
          (t.canvas = {
            mode: 1,
            fullScreen: !0,
            size: { width: 512, height: 512 }
          }),
          (t._color = new THREE.Color(1644825)),
          (t._enableFog = !1),
          (t.name = 'Untitled'),
          t
        )
      }
      return (
        __extends(t, e),
        Object.defineProperty(t.prototype, 'color', {
          get: function () {
            return this._color
          },
          set: function (e) {
            !0 === this.fogUseBGColor && this.backupFog.color.copy(e),
              this._color.copy(e)
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'enableFog', {
          get: function () {
            return null !== this.fog
          },
          set: function (e) {
            ;(this.fog = !0 === e ? this.backupFog : null),
              (this._enableFog = e)
          },
          enumerable: !1,
          configurable: !0
        }),
        (t.prototype.init = function (e, t) {
          ;(this.camera = new CombinedCamera(e, t)),
            this.camera.setDefault(),
            (this.camera.orthoCamera.near = -5e4),
            (this.camera.perspCamera.near = 50),
            (this.camera.orthoCamera.far = 1e5),
            (this.camera.perspCamera.far = 1e5),
            this.camera.updateProjectionMatrix(),
            this.camera.position.set(0, 0, this.camera.targetOffset),
            this.camera.lookAt(new THREE.Vector3(0, 0, -1)),
            this.add(this.camera),
            (this.ambientLight = new THREE.HemisphereLight(
              13882323,
              8553090,
              0.75
            )),
            (this.ambientLight.name = 'Default Ambient Light'),
            this.add(this.ambientLight),
            (this.directionalLight = new THREE.DirectionalLight(
              16777215,
              0.75
            )),
            (this.directionalLight.name = 'Default Directional Light'),
            this.directionalLight.position.set(85e4, 13e5, 1e6),
            (this.activeCamera = this.camera),
            this.activeCamera.add(this.directionalLight)
        }),
        (t.prototype.initFromObjectLoader = function (e) {
          var t = this
          return (
            this.traverse(function (i) {
              i.uuid === e.ambientLight
                ? (t.ambientLight = i)
                : i.uuid === e.directionalLight
                ? (t.directionalLight = i)
                : (i.uuid === e.activeCamera && (t.activeCamera = i),
                  i.uuid === e.camera &&
                    ((t.camera = i), t.camera.setDefault()))
            }),
            this
          )
        }),
        (t.prototype.addDefaultChild = function () {
          var e = new Mesh2D(
            RectangleGeometry.create({
              parameters: { width: 320, height: 320 }
            }),
            new BasicMaterial({ color: 16777215 })
          )
          return (e.position.z = -1), this.add(e), e
        }),
        (t.prototype.raycast = function (e) {
          var t = [],
            i = function (r) {
              var n, a
              try {
                for (
                  var o = __values(r.children), s = o.next();
                  !s.done;
                  s = o.next()
                ) {
                  var l = s.value
                  isEntity$1(l) &&
                    !l.raycastLock &&
                    l.visible &&
                    ((isMeshEntity(l) ||
                      (isHelperableEntity(l) && l.enableHelper)) &&
                      e.intersectObject(l, !1, t),
                    i(l))
                }
              } catch (e) {
                n = { error: e }
              } finally {
                try {
                  s && !s.done && (a = o.return) && a.call(o)
                } finally {
                  if (n) throw n.error
                }
              }
            }
          return i(this), t
        }),
        (t.prototype.traverseEntity = function (e) {
          var t, i
          try {
            for (
              var r = __values(this.children), n = r.next();
              !n.done;
              n = r.next()
            ) {
              var a = n.value
              isEntity$1(a) && this.camera !== a && a.traverseEntity(e)
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              n && !n.done && (i = r.return) && i.call(r)
            } finally {
              if (t) throw t.error
            }
          }
        }),
        (t.prototype.toJSON = function (t) {
          var i,
            r,
            n,
            a,
            o,
            s,
            l = e.prototype.toJSON.call(this, t),
            c = l.object
          return (
            (c.objectType = 'Scene'),
            (c.activeCamera =
              null === (i = this.activeCamera) || void 0 === i
                ? void 0
                : i.uuid),
            (c.camera =
              null === (r = this.camera) || void 0 === r ? void 0 : r.uuid),
            (c.directionalLight =
              null === (n = this.directionalLight) || void 0 === n
                ? void 0
                : n.uuid),
            (c.ambientLight =
              null === (a = this.ambientLight) || void 0 === a
                ? void 0
                : a.uuid),
            (c.color = this.color.toArray()),
            (c.alpha = this.alpha),
            null !== this.background &&
              'toJSON' in this.background &&
              (c.background = this.background.toJSON(t)),
            null !== this.environment &&
              (c.environment = this.environment.toJSON(t)),
            null !== this.fog && (c.fog = this.fog.toJSON()),
            !0 === this.enableFog && (c.enableFog = !0),
            !0 === this.fogUseBGColor && (c.fogUseBGColor = !0),
            !0 === this.directionalLightState && (c.directionalLightState = !0),
            !0 === this.ambientLightState && (c.ambientLightState = !0),
            !0 === this.wireframeState && (c.wireframeState = !0),
            (c.canvas = {
              mode: this.canvas.mode,
              size: {
                width: this.canvas.size.width,
                height: this.canvas.size.height
              }
            }),
            !0 === this.canvas.fullScreen && (c.canvas.fullScreen = !0),
            (null === (o = this.postprocessing) || void 0 === o
              ? void 0
              : o.enabled) &&
              (c.postprocessing =
                null === (s = this.postprocessing) || void 0 === s
                  ? void 0
                  : s.toJSON()),
            l
          )
        }),
        (t.prototype.fromJSON = function (t) {
          var i, r, n, a, o, s
          return (
            e.prototype.fromJSON.call(this, t),
            this.color.fromArray(t.color),
            (this.alpha = t.alpha),
            void 0 !== t.background &&
              Number.isInteger(t.background) &&
              (t.background = new THREE.Color(t.background)),
            t.postprocessing && this.postprocessing.fromJSON(t.postprocessing),
            void 0 !== t.fog &&
              ('Fog' === t.fog.type
                ? (this.backupFog = new THREE.Fog(
                    t.fog.color,
                    t.fog.near,
                    t.fog.far
                  ))
                : 'FogExp2' === t.fog.type &&
                  (this.backupFog = new THREE.FogExp2(
                    t.fog.color,
                    t.fog.density
                  ))),
            (this.enableFog = null !== (i = t.enableFog) && void 0 !== i && i),
            (this.fogUseBGColor =
              null !== (r = t.fogUseBGColor) && void 0 !== r && r),
            (this.directionalLightState =
              null !== (n = t.directionalLightState) && void 0 !== n && n),
            (this.ambientLightState =
              null !== (a = t.ambientLightState) && void 0 !== a && a),
            (this.wireframeState =
              null !== (o = t.wireframeState) && void 0 !== o && o),
            (this.canvas.mode = t.canvas.mode),
            (this.canvas.fullScreen =
              null !== (s = t.canvas.fullScreen) && void 0 !== s && s),
            (this.canvas.size = {
              width: t.canvas.size.width,
              height: t.canvas.size.height
            }),
            this
          )
        }),
        t
      )
    })(Object3DMixin(THREE.Scene)),
    TEXT_TRANSFORM,
    VERTICAL_ALIGN,
    HORIZONTAL_ALIGN,
    TRAVEL_DIRECTION
  !(function (e) {
    ;(e[(e.STANDARD = 1)] = 'STANDARD'),
      (e[(e.UPPERCASE = 2)] = 'UPPERCASE'),
      (e[(e.LOWERCASE = 3)] = 'LOWERCASE')
  })(TEXT_TRANSFORM || (TEXT_TRANSFORM = {})),
    (function (e) {
      ;(e[(e.TOP = 1)] = 'TOP'),
        (e[(e.MIDDLE = 2)] = 'MIDDLE'),
        (e[(e.BOTTOM = 3)] = 'BOTTOM')
    })(VERTICAL_ALIGN || (VERTICAL_ALIGN = {})),
    (function (e) {
      ;(e[(e.LEFT = 1)] = 'LEFT'),
        (e[(e.RIGHT = 2)] = 'RIGHT'),
        (e[(e.CENTER = 3)] = 'CENTER'),
        (e[(e.JUSTIFY = 4)] = 'JUSTIFY')
    })(HORIZONTAL_ALIGN || (HORIZONTAL_ALIGN = {})),
    (function (e) {
      ;(e[(e.TO_RIGHT = 1)] = 'TO_RIGHT'), (e[(e.TO_LEFT = -1)] = 'TO_LEFT')
    })(TRAVEL_DIRECTION || (TRAVEL_DIRECTION = {}))
  var TEMPV2 = new THREE.Vector2(),
    TextLine = (function () {
      function e(e, t, i) {
        ;(this.message = []),
          (this.endLine = !0),
          (this.yLinePos = e),
          (this.lineHeight = t),
          (this.maxCharSize = i),
          (this.nextChar3DPos = new THREE.Vector2(
            0,
            this.yLinePos + this.maxCharSize * this.lineHeight
          )),
          (this.align = HORIZONTAL_ALIGN.LEFT)
      }
      return (
        (e.prototype.addChar3D = function (e, t, i) {
          void 0 === i && (i = this.message.length),
            this.message.splice(i, 0, e),
            e.fontSize > this.maxCharSize
              ? ((this.maxCharSize = e.fontSize),
                (this.nextChar3DPos.y =
                  this.yLinePos + this.maxCharSize * this.lineHeight),
                this.fullUpdate(t))
              : (e.updatePosition(this.nextChar3DPos, t),
                (this.nextChar3DPos.x += e.charSize))
        }),
        (e.prototype.deleteChar3D = function (e) {
          void 0 === e && (e = this.message.length - 1)
          var t = this.message[e]
          return t
            ? (this.message.splice(e, 1),
              (this.nextChar3DPos.x -= t.charSize),
              t)
            : void 0
        }),
        (e.prototype.isEndLine = function (e) {
          this.endLine = e
        }),
        (e.prototype.fullUpdate = function (e, t) {
          void 0 === t && (t = 0), (this.nextChar3DPos.x = 0)
          for (var i = t, r = this.message.length; i < r; i += 1)
            this.message[i].updatePosition(this.nextChar3DPos, e),
              (this.nextChar3DPos.x += this.message[i].charSize)
        }),
        (e.prototype.checkOverFlow = function (e) {
          var t,
            i = this.message.length - 1
          if (i <= 0) return !1
          for (; i >= 0; ) {
            if (' ' !== this.message[i].char) {
              t = this.message[i]
              break
            }
            i -= 1
          }
          return !!(i >= 0 && t && t.localPosition.x + t.charSize > e)
        }),
        (e.prototype.containSpaceOverFlow = function (e) {
          void 0 === e && (e = this.message.length - 1)
          for (var t = e; t >= 0; t -= 1)
            if (' ' === this.message[t].char) return !0
          return !1
        }),
        (e.prototype.containSpace = function (e) {
          if ((void 0 === e && (e = this.message.length - 1), this.endLine))
            return !0
          for (var t = e; t >= 0; t -= 1)
            if (' ' === this.message[t].char) return !0
          return !1
        }),
        (e.prototype.popWord = function (e) {
          void 0 === e && (e = this.message.length - 1)
          var t,
            i = [],
            r = !0
          for (t = e; t >= 0; t -= 1) {
            if (' ' === this.message[t].char) {
              ;(r = !1),
                0 === i.length && ((t -= 1), i.splice(0, 0, this.message[t]))
              break
            }
            i.splice(0, 0, this.message[t])
          }
          return r ? (i = []) : this.message.splice(t + 1, i.length), i
        }),
        (e.prototype.getWord = function (e, t) {
          void 0 === e && (e = 0), void 0 === t && (t = 1)
          var i = [],
            r = e
          for (r = e; ; r += t) {
            if (!this.message[r] || ' ' === this.message[r].char) {
              0 === i.length &&
                this.message[r] &&
                (i.push(this.message[r]), this.message.splice(r, 1))
              break
            }
            t > 0
              ? (i.push(this.message[r]), this.message.splice(r, 1), (r -= t))
              : (i.splice(0, 0, this.message[r]), this.message.splice(r, 1))
          }
          return i
        }),
        (e.prototype.getWordAtIndex = function (e) {
          for (
            var t = [], i = e;
            i < this.message.length && ' ' !== this.message[i].char;
            i++
          )
            t.push(this.message[i])
          for (i = e - 1; i >= 0 && ' ' !== this.message[i].char; i--)
            t.splice(0, 0, this.message[i])
          return t
        }),
        (e.prototype.wordSize = function (e, t) {
          void 0 === e && (e = 0), void 0 === t && (t = -1)
          for (var i = 0, r = e; r >= 0 && r < this.message.length; ) {
            if (' ' === this.message[r].char) {
              0 === i && (i = this.message[r].charSize)
              break
            }
            ;(i += this.message[r].charSize), (r += t)
          }
          return (r < 0 || r >= this.message.length) && !this.endLine
            ? this.message[e]
              ? this.message[e].charSize
              : 999999999
            : 0 === i
            ? 999999999
            : i
        }),
        (e.prototype.spaceLeft = function (e) {
          return e - this.nextChar3DPos.x
        }),
        (e.prototype.popChar = function (e) {
          return (
            void 0 === e && (e = this.message.length - 1),
            (this.nextChar3DPos.x -= this.message[e].charSize),
            this.message.splice(e, 1)
          )
        }),
        (e.prototype.isEmpty = function () {
          return !this.message.length
        }),
        (e.prototype.updateNextCharPosY = function () {
          this.nextChar3DPos.y =
            this.yLinePos + this.maxCharSize * this.lineHeight
        }),
        (e.prototype.updateYLinePos = function (e) {
          ;(this.yLinePos = e), this.updateNextCharPosY()
        }),
        (e.prototype.updatelineHeight = function (e) {
          ;(this.lineHeight = e), this.updateNextCharPosY()
        }),
        (e.prototype.updateFontSize = function (e, t, i) {
          void 0 === t && (t = 0), void 0 === i && (i = this.message.length - 1)
          for (var r = t; r <= i; r += 1) this.message[r].updateFontSize(e)
          ;(this.maxCharSize = e),
            (this.nextChar3DPos.y =
              this.yLinePos + this.maxCharSize * this.lineHeight)
        }),
        (e.prototype.countSpaces = function () {
          for (var e = 0, t = 0; t < this.message.length; t++)
            ' ' === this.message[t].char && (e += 1)
          return e
        }),
        (e.prototype.alignText = function (e, t, i, r, n) {
          switch (i) {
            case HORIZONTAL_ALIGN.LEFT:
              this.leftAlign(e, n)
              break
            case HORIZONTAL_ALIGN.CENTER:
              this.centerAlign(this.spaceLeft(t), e, n)
              break
            case HORIZONTAL_ALIGN.RIGHT:
              this.rightAlign(this.spaceLeft(t), e, n)
              break
            case HORIZONTAL_ALIGN.JUSTIFY:
              this.justifyAlign(this.spaceLeft(t), e, n)
          }
        }),
        (e.prototype.offsetCharacters = function (e, t, i) {
          TEMPV2.set(t, i)
          for (var r = this.message.length, n = 0; n < r; n++)
            this.message[n].updatePosition(
              this.message[n].localPosition.add(TEMPV2),
              e
            )
        }),
        (e.prototype.leftAlign = function (e, t) {
          ;(this.align = HORIZONTAL_ALIGN.LEFT), this.offsetCharacters(e, 0, t)
        }),
        (e.prototype.centerAlign = function (e, t, i) {
          ;(this.align = HORIZONTAL_ALIGN.CENTER),
            this.offsetCharacters(t, e / 2, i)
        }),
        (e.prototype.rightAlign = function (e, t, i) {
          ;(this.align = HORIZONTAL_ALIGN.RIGHT), this.offsetCharacters(t, e, i)
        }),
        (e.prototype.justifyAlign = function (e, t, i) {
          if (((this.align = HORIZONTAL_ALIGN.JUSTIFY), this.endLine))
            this.offsetCharacters(t, 0, i)
          else {
            var r = this.countSpaces()
            if (0 !== r)
              for (var n = e / r, a = 0, o = 0; o < this.message.length; o++)
                ' ' === this.message[o].char && (a += n),
                  TEMPV2.set(a, i),
                  this.message[o].updatePosition(
                    this.message[o].localPosition.add(TEMPV2),
                    t
                  )
            else this.offsetCharacters(t, 0, i)
          }
        }),
        (e.prototype.clone = function () {
          var t = new e(this.yLinePos, this.lineHeight, this.maxCharSize)
          ;(t.nextChar3DPos = this.nextChar3DPos.clone()),
            (t.align = this.align),
            (t.endLine = this.endLine)
          for (var i = 0; i < this.message.length; i++)
            t.message.push(this.message[i].clone())
          return t
        }),
        e
      )
    })(),
    Char3D = (function (e) {
      function t(i, r) {
        var n = i.char,
          a = i.originalChar,
          o = i.fontFamily,
          s = i.letterSpacing,
          l = i.fontSize,
          c = i.LOD,
          h = void 0 === c ? 16 : c
        void 0 === r &&
          (r = new THREE.MeshBasicMaterial({
            color: 0,
            opacity: 1,
            visible: !0,
            transparent: !0,
            side: THREE.DoubleSide
          }))
        var u = this,
          d = t.loadChar(n, o, h)
        return (
          ((u = e.call(this, d.geometry, r) || this).char = n),
          (u.originalChar = null != a ? a : n),
          (u.fontFamily = o),
          (u.letterSpacing = s),
          (u.fontSize = l),
          (u.LOD = h),
          (u.resolution = d.resolution),
          (u.glyphsHa = d.glyphsHa),
          (u.localPosition = new THREE.Vector2()),
          (u.charSize = 0),
          (u.geometry.userData = {
            type: 'CharacterGeometry',
            parameters: {
              char: u.char,
              fontFamily: u.fontFamily,
              letterSpacing: u.letterSpacing,
              fontSize: u.fontSize,
              lod: u.LOD,
              resolution: u.resolution,
              charSize: u.charSize,
              localPosition: u.localPosition
            }
          }),
          u.updateFontSize(u.fontSize),
          u
        )
      }
      return (
        __extends(t, e),
        Object.defineProperty(t, 'FONTS_PATH', {
          get: function () {
            return '_assets/_fonts/'
          },
          enumerable: !1,
          configurable: !0
        }),
        (t.prototype.updatePosition = function (e, t) {
          this.localPosition.copy(e)
          var i = new THREE.Vector3(
            this.localPosition.x,
            -this.localPosition.y,
            0
          )
          this.position.copy(i).add(t)
        }),
        (t.prototype.updateFontSize = function (e) {
          var t = e / this.resolution
          ;(this.fontSize = e),
            this.scale.set(this.fontSize, this.fontSize, 1),
            (this.charSize = this.glyphsHa * t * this.letterSpacing)
        }),
        (t.prototype.updateFontFamily = function (e) {
          if (this.fontFamily !== e) {
            this.fontFamily = e
            var i = t.loadChar(this.char, e, this.LOD)
            ;(this.geometry = i.geometry),
              (this.resolution = i.resolution),
              (this.glyphsHa = i.glyphsHa),
              (this.geometry.userData = {
                type: 'CharacterGeometry',
                parameters: {
                  char: this.char,
                  fontFamily: this.fontFamily,
                  letterSpacing: this.letterSpacing,
                  fontSize: this.fontSize,
                  lod: this.LOD,
                  resolution: this.resolution,
                  charSize: this.charSize,
                  localPosition: this.localPosition
                }
              }),
              this.updateFontSize(this.fontSize)
          }
        }),
        (t.prototype.updateChar = function (e) {
          if (this.char !== e) {
            this.char = e
            var i = t.loadChar(e, this.fontFamily, this.LOD)
            ;(this.geometry = i.geometry),
              (this.resolution = i.resolution),
              (this.glyphsHa = i.glyphsHa),
              (this.geometry.userData = {
                type: 'CharacterGeometry',
                parameters: {
                  char: this.char,
                  fontFamily: this.fontFamily,
                  letterSpacing: this.letterSpacing,
                  fontSize: this.fontSize,
                  lod: this.LOD,
                  resolution: this.resolution,
                  charSize: this.charSize,
                  localPosition: this.localPosition
                }
              }),
              this.updateFontSize(this.fontSize)
          }
        }),
        (t.prototype.updateLetterSpacing = function (e) {
          this.letterSpacing !== e &&
            ((this.letterSpacing = e), this.updateFontSize(this.fontSize))
        }),
        (t.prototype.updateLOD = function (e) {
          if (this.LOD !== e) {
            this.LOD = e
            var i = t.loadChar(this.char, this.fontFamily, this.LOD)
            ;(this.geometry = i.geometry),
              (this.resolution = i.resolution),
              (this.glyphsHa = i.glyphsHa),
              (this.geometry.userData = {
                type: 'CharacterGeometry',
                parameters: {
                  char: this.char,
                  fontFamily: this.fontFamily,
                  letterSpacing: this.letterSpacing,
                  fontSize: this.fontSize,
                  lod: this.LOD,
                  resolution: this.resolution,
                  charSize: this.charSize,
                  localPosition: this.localPosition
                }
              }),
              this.updateFontSize(this.fontSize)
          }
        }),
        (t.prototype.clone = function () {
          return new t({
            char: this.char,
            originalChar: this.originalChar,
            fontFamily: this.fontFamily,
            letterSpacing: this.letterSpacing,
            fontSize: this.fontSize,
            LOD: this.LOD
          }).copy(this)
        }),
        (t.loadFont = function (e) {
          return new Promise(function (i, r) {
            t.fontCache[e]
              ? i(t.fontCache[e])
              : new THREE.FontLoader().load(
                  t.FONTS_PATH + e + '.json',
                  function (r) {
                    ;(t.fontCache[e] = r), i(r)
                  },
                  void 0,
                  r
                )
          })
        }),
        (t.loadChar = function (e, i, r) {
          if (t.charCache[e]) {
            if (t.charCache[e][r] && t.charCache[e][r].fontFamily === i)
              return t.charCache[e][r]
          } else t.charCache[e] = {}
          var n = t.fontCache[i],
            a = n.generateShapes(e, 1)
          return (
            (t.charCache[e][r] = {
              geometry: new THREE.ShapeBufferGeometry(a, r),
              fontFamily: i,
              resolution: n.data.resolution,
              glyphsHa: n.data.glyphs[e].ha
            }),
            t.charCache[e][r]
          )
        }),
        (t.charCache = {}),
        (t.fontCache = {}),
        t
      )
    })(THREE.Mesh),
    TextFrame = (function (e) {
      function t(t, i) {
        void 0 === i &&
          (i = new BasicMaterial({
            color: 16777215,
            transparent: !0,
            opacity: 1,
            visible: !1,
            side: THREE.DoubleSide
          }))
        var r = e.call(this, t, i) || this
        return (
          (r.objectType = 'TextFrame'),
          (r._geometryUserData = t.userData),
          (r.userData.textFrame = {
            hexColor: 6974058,
            opacity: 1,
            visible: !0,
            fontSize: 16,
            lineHeight: 1.5,
            letterSpacing: 1,
            fontFamily: 'roboto_regular',
            textTransform: TEXT_TRANSFORM.STANDARD,
            horizontalAlignment: 1,
            verticalAlignment: VERTICAL_ALIGN.TOP,
            LOD: 16,
            maxLineSize: r._geometryUserData.parameters.width,
            textOrigin: new THREE.Vector3(
              -0.5 * r._geometryUserData.parameters.width,
              0.5 * r._geometryUserData.parameters.height,
              0
            ),
            textLines: []
          }),
          r.createTextLine(),
          r
        )
      }
      return (
        __extends(t, e),
        (t.prototype.raycast = function (t, i) {
          var r = []
          if ((e.prototype.raycast.call(this, t, r), r.length > 0)) i.push(r[0])
          else
            for (var n = [], a = 0, o = this.children.length; a < o; ++a)
              if (
                this.children[a] instanceof Char3D &&
                (t.intersectObject(this.children[a], !1, n), n.length > 0)
              )
                return (n[0].object = this), void i.push(n[0])
        }),
        (t.prototype.updateGeometry = function (t) {
          var i,
            r,
            n = this.userData,
            a = this.geometry.userData,
            o = a.parameters.width,
            s = null === (i = t.parameters) || void 0 === i ? void 0 : i.width,
            l = null === (r = t.parameters) || void 0 === r ? void 0 : r.height,
            c = a.parameters.height,
            h = n.textFrame
          e.prototype.updateGeometry.call(this, t),
            (h.maxLineSize = a.parameters.width),
            h.textOrigin.set(
              -0.5 * a.parameters.width,
              0.5 * a.parameters.height,
              0
            ),
            void 0 !== l && c !== l
              ? (this.checkOverFlow(), this.checkCapacity())
              : void 0 !== s &&
                (o < s ? this.checkCapacity() : o > s && this.checkOverFlow())
        }),
        (t.prototype.checkOverFlow = function (e) {
          void 0 === e && (e = 0)
          for (
            var t = this.userData,
              i = t.textFrame.textOrigin,
              r = t.textFrame.textLines,
              n = e;
            n < r.length;
            n++
          ) {
            r[n].updateYLinePos(this.getNewLinePosition(n)), r[n].fullUpdate(i)
            for (var a = []; r[n].checkOverFlow(t.textFrame.maxLineSize); )
              r[n].containSpaceOverFlow()
                ? a.splice(
                    0,
                    0,
                    r[n].getWord(
                      r[n].message.length - 1,
                      TRAVEL_DIRECTION.TO_LEFT
                    )
                  )
                : a.splice(0, 0, r[n].popChar())
            if (a.length > 0) {
              void 0 === r[n + 1] && (r[n].isEndLine(!1), this.createTextLine())
              for (var o = 0, s = 0; s < a.length; s += 1)
                for (var l = 0; l < a[s].length; l += 1)
                  r[n + 1].addChar3D(a[s][l], i, o), (o += 1)
              r[n + 1].fullUpdate(i)
            }
            r[n].fullUpdate(i)
          }
          this.textFullUpdate(e)
        }),
        (t.prototype.checkCapacity = function (e) {
          void 0 === e && (e = 0)
          for (
            var t = this.userData,
              i = t.textFrame.textOrigin,
              r = t.textFrame.maxLineSize,
              n = t.textFrame.textLines,
              a = e;
            a < n.length;
            a += 1
          )
            if (
              (n[a].updateYLinePos(this.getNewLinePosition(a)),
              n[a].fullUpdate(i),
              n[a - 1])
            )
              for (; !n[a - 1].endLine; ) {
                var o = void 0,
                  s = n[a - 1].spaceLeft(r)
                if (!(n[a].wordSize(0, TRAVEL_DIRECTION.TO_RIGHT) <= s)) {
                  n[a].isEmpty()
                    ? (n[a].endLine && n[a - 1].isEndLine(!0),
                      n.splice(a, 1),
                      (a -= 1))
                    : (n[a].updateYLinePos(this.getNewLinePosition(a)),
                      n[a].fullUpdate(i))
                  break
                }
                o = n[a].containSpace()
                  ? n[a].getWord(0, TRAVEL_DIRECTION.TO_RIGHT)
                  : n[a].popChar(0)
                for (var l = 0; l < o.length; l += 1)
                  o[l] && n[a - 1].addChar3D(o[l], i)
              }
          this.textFullUpdate(e)
        }),
        (t.prototype.createTextLine = function (e) {
          void 0 === e && (e = this.userData.textFrame.textLines.length)
          var t = this.userData.textFrame
          t.textLines.splice(
            e,
            0,
            new TextLine(this.getNewLinePosition(e), t.lineHeight, t.fontSize)
          )
        }),
        (t.prototype.textFullUpdate = function (e) {
          void 0 === e && (e = 0)
          for (
            var t = this.userData.textFrame,
              i = t.textLines,
              r = this.getVerticalAlignmentOffSet(),
              n = e;
            n < i.length;
            n++
          )
            i[n].updateYLinePos(this.getNewLinePosition(n)),
              i[n].fullUpdate(t.textOrigin),
              i[n].alignText(
                t.textOrigin,
                t.maxLineSize,
                t.horizontalAlignment,
                t.verticalAlignment,
                r
              )
        }),
        (t.prototype.getVerticalAlignmentOffSet = function () {
          switch (this.userData.textFrame.verticalAlignment) {
            case VERTICAL_ALIGN.TOP:
              return 0
            case VERTICAL_ALIGN.MIDDLE:
              return this.getRemainingVerticalSpace() / 2
            case VERTICAL_ALIGN.BOTTOM:
              return this.getRemainingVerticalSpace()
            default:
              return 0
          }
        }),
        (t.prototype.getRemainingVerticalSpace = function () {
          var e = this.userData.textFrame.textLines
          return (
            this.geometry.userData.parameters.height -
            this.getNewLinePosition(e.length)
          )
        }),
        (t.prototype.getNewLinePosition = function (e) {
          for (
            var t = this.userData.textFrame.textLines, i = 0, r = 0;
            r < e;
            r += 1
          )
            i += t[r].maxCharSize * t[r].lineHeight
          return i
        }),
        (t.prototype.updateColor = function (e) {
          var t = this.userData
          t.textFrame.hexColor = e
          for (var i = t.textFrame.textLines, r = 0; r < i.length; r++)
            for (var n = i[r].message, a = 0; a < n.length; a++) {
              n[a].material.color.setHex(e)
            }
        }),
        (t.prototype.updateOpacity = function (e) {
          var t = this.userData
          t.textFrame.opacity = e
          for (var i = t.textFrame.textLines, r = 0; r < i.length; r++)
            for (var n = i[r].message, a = 0; a < n.length; a++) {
              n[a].material.opacity = e
            }
        }),
        (t.prototype.updateVisible = function (e) {
          var t = this.userData
          t.textFrame.visible = e
          for (var i = t.textFrame.textLines, r = 0; r < i.length; r++)
            for (var n = i[r].message, a = 0; a < n.length; a++) {
              n[a].material.visible = e
            }
        }),
        (t.prototype.updateFontFamily = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, r, n, a, o
            return __generator(this, function (s) {
              switch (s.label) {
                case 0:
                  return [4, Char3D.loadFont(e)]
                case 1:
                  for (
                    s.sent(),
                      t = this.userData,
                      i = t.textFrame,
                      r = i.textLines,
                      i.fontFamily = e,
                      n = 0;
                    n < r.length;
                    n++
                  )
                    for (a = r[n].message, o = 0; o < a.length; o++)
                      a[o].updateFontFamily(e)
                  return (
                    this.textFullUpdate(),
                    this.checkOverFlow(),
                    this.checkCapacity(),
                    [2]
                  )
              }
            })
          })
        }),
        (t.prototype.updateFontSize = function (e) {
          var t = this.userData.textFrame,
            i = t.textLines,
            r = t.fontSize
          t.fontSize = e
          for (var n = 0; n < i.length; n++) i[n].updateFontSize(e)
          this.textFullUpdate(),
            e > r ? this.checkOverFlow() : e < r && this.checkCapacity()
        }),
        (t.prototype.updateTextTransform = function (e) {
          return __awaiter(this, void 0, void 0, function () {
            var t, i, r, n, a, o
            return __generator(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    (t = this.userData),
                    (i = t.textFrame),
                    [4, Char3D.loadFont(i.fontFamily)]
                  )
                case 1:
                  switch (
                    (s.sent(), (r = i.textLines), (i.textTransform = e), e)
                  ) {
                    case TEXT_TRANSFORM.UPPERCASE:
                      for (n = 0; n < r.length; n++)
                        for (a = r[n].message, o = 0; o < a.length; o++)
                          r[n].message[o].updateChar(a[o].char.toUpperCase())
                      break
                    case TEXT_TRANSFORM.LOWERCASE:
                      for (n = 0; n < r.length; n++)
                        for (a = r[n].message, o = 0; o < a.length; o++)
                          r[n].message[o].updateChar(a[o].char.toLowerCase())
                      break
                    default:
                      for (n = 0; n < r.length; n++)
                        for (a = r[n].message, o = 0; o < a.length; o++)
                          r[n].message[o].updateChar(a[o].originalChar)
                  }
                  return (
                    this.textFullUpdate(),
                    this.checkOverFlow(),
                    this.checkCapacity(),
                    [2]
                  )
              }
            })
          })
        }),
        (t.prototype.updateLetterSpacing = function (e) {
          var t = this.userData,
            i = t.textFrame.textLines
          t.textFrame.letterSpacing = e
          for (var r = 0; r < i.length; r++)
            for (var n = i[r].message, a = 0; a < n.length; a++)
              n[a].updateLetterSpacing(e)
          this.textFullUpdate(), this.checkOverFlow(), this.checkCapacity()
        }),
        (t.prototype.updateLOD = function (e) {
          var t = this.userData
          t.textFrame.LOD = e
          for (var i = t.textFrame.textLines, r = 0; r < i.length; r++);
          this.textFullUpdate(), this.checkOverFlow(), this.checkCapacity()
        }),
        (t.prototype.updateLineHeight = function (e) {
          var t = this.userData,
            i = t.textFrame.textLines
          t.textFrame.lineHeight = e
          for (var r = 0; r < i.length; r++) i[r].updatelineHeight(e)
          this.textFullUpdate()
        }),
        (t.prototype.updateVerticalAlignment = function (e) {
          ;(this.userData.textFrame.verticalAlignment = e),
            this.textFullUpdate()
        }),
        (t.prototype.updateHorizontalAlignment = function (e) {
          ;(this.userData.textFrame.horizontalAlignment = e),
            this.textFullUpdate()
        }),
        (t.prototype.copy = function (t, i) {
          e.prototype.copy.call(this, t, i)
          var r = this.userData,
            n = t.userData,
            a = this.geometry.userData
          r.textFrame.textOrigin = new THREE.Vector3(
            -0.5 * a.parameters.width,
            0.5 * a.parameters.height,
            0
          )
          var o = n.textFrame.textLines
          r.textFrame.textLines = []
          for (var s = 0; s < o.length; s++) {
            var l = o[s].clone(),
              c = l.message
            r.textFrame.textLines.push(l)
            for (var h = 0; h < c.length; h++) this.add(c[h])
          }
          return (
            this.textFullUpdate(), this.updateColor(n.textFrame.hexColor), this
          )
        }),
        (t.prototype.toJSON = function (t) {
          var i = e.prototype.toJSON.call(this, t),
            r = i.object
          r.objectType = 'TextFrame'
          var n = this.userData.textFrame.textLines.map(function (e) {
            var t = e.message.map(function (e) {
              return {
                char: e.char,
                originalChar: e.originalChar,
                fontFamily: e.fontFamily,
                letterSpacing: e.letterSpacing,
                fontSize: e.fontSize,
                LOD: e.LOD
              }
            })
            return {
              align: e.align,
              endLine: e.endLine,
              lineHeight: e.lineHeight,
              maxCharSize: e.maxCharSize,
              yLinePos: e.yLinePos,
              message: t
            }
          })
          return (r.userData.textFrame.textLinesData = n), i
        }),
        (t.prototype.fromJSONasync = function (t) {
          return __awaiter(this, void 0, void 0, function () {
            var i,
              r,
              n = this
            return __generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    e.prototype.fromJSON.call(this, t),
                    void 0 === t.userData
                      ? [3, 2]
                      : ((i = t.userData.textFrame),
                        [4, Char3D.loadFont(i.fontFamily)])
                  )
                case 1:
                  a.sent(),
                    (i.textOrigin = new THREE.Vector3(
                      i.textOrigin.x,
                      i.textOrigin.y,
                      i.textOrigin.z
                    )),
                    (r = new THREE.MeshBasicMaterial({
                      color: i.hexColor,
                      opacity: i.opacity,
                      visible: i.visible,
                      transparent: !0,
                      side: THREE.DoubleSide
                    })),
                    i.textLinesData &&
                      ((i.textLines = i.textLinesData.map(function (e, t) {
                        var a = new TextLine(
                            Number(e.yLinePos),
                            Number(e.lineHeight),
                            Number(e.maxCharSize)
                          ),
                          o = e.message.map(function (e, o) {
                            if (void 0 === e.char) {
                              var s = i.textLines[t].message[o]
                              if ('geometries' in s) {
                                var l = s.geometries[0].userData.parameters
                                Object.assign(e, {
                                  LOD: l.lod,
                                  char: l.char,
                                  fontFamily: l.fontFamily,
                                  fontSize: l.fontSize,
                                  letterSpacing: l.letterSpacing,
                                  originalChar: l.char
                                })
                              }
                            }
                            var c = {
                                char: e.char,
                                fontFamily: e.fontFamily,
                                letterSpacing: Number(e.letterSpacing),
                                fontSize: Number(e.fontSize),
                                LOD: e.LOD
                              },
                              h = new Char3D(c, r.clone())
                            return a.addChar3D(h, i.textOrigin), n.add(h), h
                          })
                        return (a.message = o), a
                      })),
                      (this.userData.textFrame = i)),
                    this.textFullUpdate(),
                    (a.label = 2)
                case 2:
                  return [2, this]
              }
            })
          })
        }),
        (t.VERTICAL_ALIGN = VERTICAL_ALIGN),
        (t.HORIZONTAL_ALIGN = HORIZONTAL_ALIGN),
        (t.TEXT_TRANSFORM = TEXT_TRANSFORM),
        (t.TRAVEL_DIRECTION = TRAVEL_DIRECTION),
        t
      )
    })(AbstractMesh),
    READ_FILE_TYPE
  function loadFile(e, t, i) {
    void 0 === i && (i = READ_FILE_TYPE.ARRAY_BUFFER)
    var r = new FileReader()
    return new Promise(function (n, a) {
      var o = function () {
        a({ error: !0, filename: e.name }),
          t.itemError(e.name),
          t.itemEnd(e.name)
      }
      switch (
        (r.addEventListener('loadstart', function () {
          t.itemStart(e.name)
        }),
        r.addEventListener(
          'load',
          function (e) {
            var t,
              i = null === (t = e.target) || void 0 === t ? void 0 : t.result
            null != i ? n(i) : o()
          },
          !1
        ),
        r.addEventListener('error', o),
        i)
      ) {
        case READ_FILE_TYPE.TEXT:
          r.readAsText(e)
          break
        case READ_FILE_TYPE.BINARY_STRING:
          if (void 0 !== r.readAsBinaryString) {
            r.readAsBinaryString(e)
            break
          }
        case READ_FILE_TYPE.ARRAY_BUFFER:
        default:
          r.readAsArrayBuffer(e)
      }
    })
  }
  !(function (e) {
    ;(e[(e.TEXT = 0)] = 'TEXT'),
      (e[(e.ARRAY_BUFFER = 1)] = 'ARRAY_BUFFER'),
      (e[(e.BINARY_STRING = 2)] = 'BINARY_STRING')
  })(READ_FILE_TYPE || (READ_FILE_TYPE = {}))
  var LoaderMixin = function (e) {
    return function (t) {
      void 0 === t && (t = THREE.DefaultLoadingManager),
        (this.manager = t),
        (this.loader = new e(t))
    }
  }
  function upgrade(e) {
    var t = e.metadata
    return (
      console.info('File format version ' + (null == t ? void 0 : t.version)),
      void 0 === (null == t ? void 0 : t.version)
        ? (console.warn('Unknow file version'), !1)
        : ((t.version <= 1.1 || 4.5 === t.version) &&
            (upGeometryDataV1_1(e.geometries),
            updateInteractionStateDataV1_1(e.interactionStates),
            upObjectDataV1_1(e.object),
            (t.version = 1.2),
            console.warn('File upgraded from v1.1 or inferior to v1.2')),
          1.2 === t.version &&
            (upObjectDataV1_2(e.object, e.object),
            (t.version = 1.3),
            console.warn('File upgraded from v1.2 to v1.3')),
          1.3 === t.version &&
            (upObjectDataV1_3(e.object),
            (t.version = 1.4),
            console.warn('File upgraded from v1.3 to v1.4')),
          !0)
    )
  }
  function upObjectDataV1_1(e) {
    var t, i, r, n, a, o, s, l, c, h
    if (
      void 0 === (null === (s = e.userData) || void 0 === s ? void 0 : s.type)
    )
      if ('OrthographicCamera' === e.type || 'PerspectiveCamera' === e.type) {
        var u = e
        Object.assign(e, {
          objectType: 'CombinedCamera',
          cameraType: u.type,
          isDefaultCamera: !0,
          hiddenMatrix: new THREE.Matrix4().toArray(),
          name: 'Default Camera',
          far: 1e5,
          zoomOrtho: u.zoom,
          zoomPersp: 1,
          nearOrtho: -5e4,
          nearPersp: 50
        }),
          delete e.type,
          void 0 !== u.typeCamera &&
            (Object.assign(e, { cameraType: u.typeCamera }),
            delete e.typeCamera)
      } else
        'Scene' === e.type
          ? (Object.assign(e, { objectType: e.type }), delete e.type)
          : 'HemisphereLight' === e.type
          ? Object.assign(e, { isDefaultAmbientLight: !0 })
          : 'DirectionalLight' === e.type &&
            Object.assign(e, { isDefaultDirectionalLight: !0 })
    if (void 0 !== e.userData) {
      var d = e.userData
      void 0 !== d.type &&
        (Object.assign(e, { objectType: d.type }), delete d.type),
        void 0 !== d.interaction &&
          (Object.assign(e, { interaction: d.interaction }),
          delete d.interaction),
        !0 === d.isDefaultAmbientLight
          ? (Object.assign(e, { isDefaultAmbientLight: !0 }),
            delete d.isDefaultAmbientLight)
          : !0 === d.isDefaultDirectionalLight
          ? (Object.assign(e, { isDefaultDirectionalLight: !0 }),
            delete d.isDefaultDirectionalLight)
          : !0 === d.isDefaultCamera &&
            (Object.assign(e, { isDefaultCamera: !0 }),
            delete d.isDefaultCamera),
        Object.assign(e, {
          raycastLock: d.lock,
          scaleLock: d.scaleLock,
          hiddenMatrix:
            null !==
              (c =
                null === (l = d.hiddenMatrix) || void 0 === l
                  ? void 0
                  : l.elements) && void 0 !== c
              ? c
              : new THREE.Matrix4().toArray()
        }),
        delete d.lock,
        delete d.scaleLock,
        delete d.hiddenMatrix,
        delete d.isEntity
    }
    if (
      void 0 !==
      (null === (h = e.interaction) || void 0 === h ? void 0 : h.events)
    )
      try {
        for (
          var f = __values(e.interaction.events), p = f.next();
          !p.done;
          p = f.next()
        ) {
          var m = p.value
          if (void 0 !== m.targets)
            try {
              for (
                var g = ((r = void 0), __values(m.targets)), v = g.next();
                !v.done;
                v = g.next()
              ) {
                var y = v.value
                void 0 !== y.springControls &&
                  (Object.assign(y, {
                    springParameters: {
                      mass: y.springControls[0],
                      stiffness: y.springControls[1],
                      damping: y.springControls[2],
                      velocity: y.springControls[3]
                    }
                  }),
                  delete y.springControls)
              }
            } catch (e) {
              r = { error: e }
            } finally {
              try {
                v && !v.done && (n = g.return) && n.call(g)
              } finally {
                if (r) throw r.error
              }
            }
        }
      } catch (e) {
        t = { error: e }
      } finally {
        try {
          p && !p.done && (i = f.return) && i.call(f)
        } finally {
          if (t) throw t.error
        }
      }
    if (void 0 !== e.children)
      try {
        for (
          var E = __values(e.children), A = E.next();
          !A.done;
          A = E.next()
        ) {
          upObjectDataV1_1(A.value)
        }
      } catch (e) {
        a = { error: e }
      } finally {
        try {
          A && !A.done && (o = E.return) && o.call(E)
        } finally {
          if (a) throw a.error
        }
      }
  }
  function upGeometryDataV1_1(e) {
    var t, i, r
    if (void 0 !== e)
      try {
        for (var n = __values(e), a = n.next(); !a.done; a = n.next()) {
          var o = a.value
          if (
            void 0 !==
            (null === (r = o.userData) || void 0 === r ? void 0 : r.type)
          ) {
            var s = o.userData.parameters
            'extrudeDepth' in s || Object.assign(s, { extrudeDepth: 0 }),
              'extrudeBevelSize' in s ||
                Object.assign(s, { extrudeBevelSize: 0 }),
              'extrudeBevelSegments' in s ||
                Object.assign(s, { extrudeBevelSegments: 1 })
          }
        }
      } catch (e) {
        t = { error: e }
      } finally {
        try {
          a && !a.done && (i = n.return) && i.call(n)
        } finally {
          if (t) throw t.error
        }
      }
  }
  function updateInteractionStateDataV1_1(e) {
    var t, i
    if (void 0 !== e)
      try {
        for (var r = __values(e), n = r.next(); !n.done; n = r.next()) {
          var a = n.value
          if (void 0 !== a.quaternion) {
            var o = new THREE.Quaternion().fromArray(a.quaternion)
            Object.assign(a, {
              rotation: new THREE.Euler().setFromQuaternion(o).toArray()
            })
          }
        }
      } catch (e) {
        t = { error: e }
      } finally {
        try {
          n && !n.done && (i = r.return) && i.call(r)
        } finally {
          if (t) throw t.error
        }
      }
  }
  function upObjectDataV1_2(e, t) {
    var i, r, n
    if (
      ('HemisphereLight' === e.type || !0 === e.isDefaultAmbientLight
        ? (t.ambientLight = e.uuid)
        : !0 ===
            (null === (n = e.userData) || void 0 === n
              ? void 0
              : n.isDefaultDirectionalLight) ||
          !0 === e.isDefaultDirectionalLight
        ? (t.directionalLight = e.uuid)
        : !0 === e.isDefaultCamera &&
          ((t.camera = e.uuid),
          (t.activeCamera = e.uuid),
          Object.assign(e, { name: 'Default Camera' })),
      void 0 !== e.children)
    )
      try {
        for (
          var a = __values(e.children), o = a.next();
          !o.done;
          o = a.next()
        ) {
          upObjectDataV1_2(o.value, t)
        }
      } catch (e) {
        i = { error: e }
      } finally {
        try {
          o && !o.done && (r = a.return) && r.call(a)
        } finally {
          if (i) throw i.error
        }
      }
  }
  function upObjectDataV1_3(e) {
    var t, i, r, n, a, o, s, l
    if ('Scene' === e.objectType) {
      var c = e.userData,
        h = null !== (t = c.rgb) && void 0 !== t ? t : { r: 25, g: 25, b: 25 },
        u =
          null !== (i = c.fogColor) && void 0 !== i
            ? i
            : { r: 25, g: 25, b: 25 }
      Object.assign(e, {
        color: [h.r / 255, h.g / 255, h.b / 255],
        alpha: c.alpha,
        fogEnable: c.fogEnable,
        fogUseBGColor: c.fogUseBGColor,
        fog: {
          color: [u.r / 255, u.g / 255, u.b / 255],
          near: c.fogNear,
          far: c.fogFar
        },
        directionalLightState: c.directionalLightState,
        ambientLightState: c.ambientLightState,
        shadowsState: c.shadowsState,
        wireframeState: c.wireframeState,
        canvas: {
          mode: null !== (r = c.canvasMode) && void 0 !== r ? r : 1,
          fullScreen: null === (n = c.canvasFullScreen) || void 0 === n || n,
          size: {
            width:
              null !==
                (o =
                  null === (a = c.canvasCustomSize) || void 0 === a
                    ? void 0
                    : a.width) && void 0 !== o
                ? o
                : 512,
            height:
              null !==
                (l =
                  null === (s = c.canvasCustomSize) || void 0 === s
                    ? void 0
                    : s.height) && void 0 !== l
                ? l
                : 512
          }
        }
      }),
        delete c.rgb,
        delete c.alpha,
        delete c.fogEnable,
        delete c.fogUseBGColor,
        delete c.fogColor,
        delete c.fogNear,
        delete c.fogFar,
        delete c.directionalLightState,
        delete c.ambientLightState,
        delete c.shadowsState,
        delete c.wireframeState,
        delete c.canvasMode,
        delete c.canvasFullScreen,
        delete c.canvasCustomSize
    }
  }
  var normal = new THREE.Vector3(0, 0, 1),
    worldNormal = new THREE.Vector3(),
    coplanarPoint = new THREE.Vector3(),
    normalMatrix = new THREE.Matrix3(),
    VectorObject = (function (e) {
      function t(t, i) {
        var r
        void 0 === t && (t = VectorGeometry.create({})),
          void 0 === i && (i = new BasicMaterial({ side: THREE.DoubleSide }))
        var n = e.call(this, t, i) || this
        return (
          (n.recursiveSelection = !1),
          (n.objectType = 'VectorObject'),
          (n.eventDispatcher = new THREE.EventDispatcher()),
          (n._onShapeUpdate = function () {
            if (
              (n.computeSingleBoundingBox(),
              n.geometry.computeBoundingSphere(),
              n.geometry.computeBoundingBox(),
              n.geometry instanceof VectorSurfaceGeometry)
            ) {
              if (n.geometry.updateFromShape()) {
                var e = n.geometry.drawCount,
                  t = n.geometry.userData
                n.updateGeometry(
                  Object.assign(n.geometry.userData, {
                    parameters: Object.assign(t.parameters, {
                      surfaceMaxCount: e + 1e3
                    })
                  })
                )
              }
            } else n.updateGeometry({})
          }),
          (n.castShadow = !0),
          (n.receiveShadow = !0),
          (n.forceComputeSize = !0),
          (n.shape = t.userData.shape),
          null === (r = n.shape.eventDispatcher) ||
            void 0 === r ||
            r.addEventListener('update', n._onShapeUpdate),
          n
        )
      }
      return (
        __extends(t, e),
        (t.prototype.toJSON = function (t) {
          var i = e.prototype.toJSON.call(this, t)
          return (i.object.objectType = 'VectorObject'), i
        }),
        (t.prototype.setHelperVisibility = function () {}),
        (t.prototype.updateGeometry = function (t) {
          if (
            (e.prototype.updateGeometry.call(this, t),
            'userData' in this.geometry)
          ) {
            var i = this.geometry.userData.parameters
            this.eventDispatcher.dispatchEvent({
              type: 'geometryUpdate',
              parameters: i
            })
          }
        }),
        (t.prototype.updateWorldMatrix = function (t, i) {
          e.prototype.updateWorldMatrix.call(this, t, i),
            normalMatrix.getNormalMatrix(this.matrixWorld),
            worldNormal.copy(normal).applyMatrix3(normalMatrix).normalize(),
            this.getWorldPosition(coplanarPoint),
            this.shape.plane.setFromNormalAndCoplanarPoint(
              worldNormal,
              coplanarPoint
            )
        }),
        (t.prototype.clone = function (e) {
          var i = this.shape.clone(),
            r = this.material.clone(),
            n = this.geometry.userData,
            a = new t(
              VectorGeometry.create(Object.assign({}, n, { shape: i })),
              r
            ).copy(this, e)
          return i.update(), a
        }),
        (t.prototype.raycast = function (e, t) {
          AbstractMesh.prototype.raycast.call(this, e, t)
        }),
        t
      )
    })(AbstractMesh),
    GeometryLoader = (function () {
      function e() {
        this._buffers = []
      }
      return (
        (e.prototype.parse = function (e) {
          var t,
            i,
            r,
            n = new THREE.BufferGeometry()
          if (
            ((this._vertexData = e.vertexData),
            this._loadBuffers(this._vertexData.buffers),
            (n.uuid = e.uuid),
            this._vertexData.accessors)
          )
            for (var a = 0, o = this._vertexData.accessors.length; a < o; ++a) {
              var s = this._vertexData.accessors[a].attributeName
              'indices' === s
                ? n.setIndex(this._loadAccessor(a))
                : n.setAttribute(s, this._loadAccessor(a))
            }
          if (null === (r = e.data) || void 0 === r ? void 0 : r.groups)
            try {
              for (
                var l = __values(e.data.groups), c = l.next();
                !c.done;
                c = l.next()
              ) {
                var h = c.value
                n.addGroup(h.start, h.count, h.materialIndex)
              }
            } catch (e) {
              t = { error: e }
            } finally {
              try {
                c && !c.done && (i = l.return) && i.call(l)
              } finally {
                if (t) throw t.error
              }
            }
          return n
        }),
        (e.prototype._loadAccessor = function (e) {
          var t = this._vertexData.accessors[e],
            i = this._loadBufferView(t.bufferView),
            r = WEBGL_TYPE_SIZES[t.type],
            n = new (0, WEBGL_COMPONENT_TYPES[t.componentType])(i.buffer)
          return new THREE.BufferAttribute(n, r)
        }),
        (e.prototype._loadBufferView = function (e) {
          var t = this._vertexData.bufferViews[e],
            i = this._buffers[t.buffer],
            r = t.byteLength || 0,
            n = t.byteOffset || 0
          return i.slice(n, n + r)
        }),
        (e.prototype._loadBuffers = function (e) {
          var t, i
          try {
            for (var r = __values(e), n = r.next(); !n.done; n = r.next()) {
              var a = n.value
              if (a.uri) {
                for (
                  var o = a.uri.slice(a.uri.indexOf('base64') + 7),
                    s = atob(o),
                    l = new Uint8Array(s.length),
                    c = 0;
                  c < s.length;
                  c++
                )
                  l[c] = s.charCodeAt(c)
                this._buffers.push(l)
              }
            }
          } catch (e) {
            t = { error: e }
          } finally {
            try {
              n && !n.done && (i = r.return) && i.call(r)
            } finally {
              if (t) throw t.error
            }
          }
        }),
        e
      )
    })(),
    WEBGL_COMPONENT_TYPES = {
      5120: Int8Array,
      5121: Uint8Array,
      5122: Int16Array,
      5123: Uint16Array,
      5125: Uint32Array,
      5126: Float32Array
    },
    WEBGL_TYPE_SIZES = {
      SCALAR: 1,
      VEC2: 2,
      VEC3: 3,
      VEC4: 4,
      MAT2: 4,
      MAT3: 9,
      MAT4: 16
    }
  function arrayToLibrary(e) {
    var t
    return (
      e instanceof Array
        ? ((t = {}),
          e.forEach(function (e) {
            t[e.uuid] = e
          }))
        : (t = e),
      t
    )
  }
  function getGeometry(e, t) {
    return (
      void 0 === e[t] &&
        console.warn('ObjectLoader > getGeometry: undefined geometry', t),
      e[t]
    )
  }
  function getMaterial(e, t) {
    if (void 0 !== t) {
      if (t instanceof Array) {
        for (var i = [], r = 0, n = t.length; r < n; r++) {
          var a = t[r]
          void 0 === e[a] &&
            console.warn('ObjectLoader > getMaterial: undefined material', a),
            i.push(e[a])
        }
        return i
      }
      return (
        void 0 === e[t] &&
          console.warn('ObjectLoader > getMaterial: undefined material', t),
        e[t]
      )
    }
  }
  var ObjectLoader = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.path = ''), (t.resourcePath = ''), t
      }
      return (
        __extends(t, e),
        (t.prototype.loadFromFile = function (e) {
          var t
          return __awaiter(this, void 0, void 0, function () {
            var i, r
            return __generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, loadFile(e, this.manager, READ_FILE_TYPE.TEXT)]
                case 1:
                  return (
                    (i = n.sent()),
                    ((r = this.parse(JSON.parse(i))).name =
                      null !== (t = e.name.split('.').shift()) && void 0 !== t
                        ? t
                        : e.name),
                    this.manager.itemEnd(e.name),
                    [2, r]
                  )
              }
            })
          })
        }),
        (t.prototype.load = function (e, t, i, r) {
          var n = this,
            a =
              '' === this.path ? THREE.LoaderUtils.extractUrlBase(e) : this.path
          this.resourcePath = this.resourcePath || a
          var o = new THREE.FileLoader(this.manager)
          o.setPath(this.path),
            o.load(
              e,
              function (i) {
                var a = null
                try {
                  a = JSON.parse(i)
                } catch (t) {
                  return (
                    void 0 !== r && r(t),
                    console.warn("ObjectLoader > load: can't parse " + e + '.'),
                    void console.error(t)
                  )
                }
                var o = a.metadata
                void 0 !== o &&
                void 0 !== o.type &&
                'geometry' !== o.type.toLowerCase()
                  ? n.parse(a, t)
                  : console.error("THREE.ObjectLoader: Can't load " + e)
              },
              i,
              r
            )
        }),
        (t.prototype.parse = function (e, t) {
          if (!1 === upgrade(e))
            return console.error('File can not be parser'), new Scene()
          var i = {},
            r = this.parseGeometries(e.geometries),
            n = this.loader.parseImages(e.images, function () {
              void 0 !== t && t(l)
            }),
            a = this.loader.parseTextures(e.textures, n),
            o = arrayToLibrary(this.loader.parseMaterials(e.materials, a)),
            s = this.customParseMaterials(o, arrayToLibrary(a)),
            l = this.parseObject(e.object, r, s, i),
            c = this.parseInteractionStates(e.interactionStates, a)
          return (
            this.parseInteractions(e.object, i, c),
            (void 0 !== e.images && 0 !== e.images.length) ||
              (void 0 !== t && t(l)),
            l
          )
        }),
        (t.prototype.parseGeometries = function (e) {
          var t,
            i,
            r = {}
          if (void 0 !== e)
            for (var n = 0, a = e.length; n < a; n++) {
              var o = e[n],
                s = void 0
              try {
                switch (
                  null === (t = o.userData) || void 0 === t ? void 0 : t.type
                ) {
                  case void 0:
                    s = this.loader.parseGeometries([o])[o.uuid]
                    break
                  case 'NonParametricGeometry':
                    ;(s = o.vertexData
                      ? new GeometryLoader().parse(o)
                      : this.loader.parseGeometries([o])[o.uuid]).userData = {}
                    var l = Object.assign({}, o.userData, { geometry: s })
                    s = NonParametricGeometry.create(l)
                    break
                  default:
                    s = createGeometry(o.userData)
                }
                ;(s.uuid = o.uuid),
                  void 0 !== o.name && (s.name = o.name),
                  (r[o.uuid] = s)
              } catch (e) {
                console.warn(
                  'ObjectLoader > parseGeometries: error parsing geometry of type .',
                  null === (i = o.userData) || void 0 === i ? void 0 : i.type
                ),
                  console.error(e)
              }
            }
          return r
        }),
        (t.prototype.customParseMaterials = function (e, t) {
          var i = {}
          for (var r in e) {
            var n = e[r].userData
            if (void 0 !== n.type) {
              var a = speMaterials[n.type]
              i[r] = a.fromJSON(e[r], t)
            }
          }
          return i
        }),
        (t.prototype.parseObject = function (e, t, i, r) {
          var n, a, o
          if (void 0 !== e.geometry) {
            var s = getGeometry(t, e.geometry),
              l = getMaterial(i, e.material)
            if (s) {
              switch (e.objectType) {
                case 'Mesh2D':
                  o = new Mesh2D(s, l).fromJSON(e)
                  break
                case 'Mesh3D':
                  o = new Mesh3D(s, l).fromJSON(e)
                  break
                case 'NonParametric':
                  o = new NonParametric(s, l).fromJSON(e)
                  break
                case 'TextFrame':
                  ;(o = new TextFrame(s, l))
                    .fromJSONasync(e)
                    .then(function () {})
                    .catch(function () {})
                  break
                case 'VectorObject':
                  o = new VectorObject(s, l).fromJSON(e)
                  break
                default:
                  return void console.warn(
                    'ObjectLoader > parseObject: unsupported object type',
                    e.objectType
                  )
              }
              l || (o.name += ' (Recovered)')
            } else
              ((o = new EmptyObject().fromJSON(e)).name += ' (Recovered)'),
                console.warn('An empty object is created instead')
          } else
            switch (e.objectType) {
              case 'Scene':
                o = new Scene().fromJSON(e)
                break
              case 'CombinedCamera':
                o = new CombinedCamera().fromJSON(e)
                break
              case 'LightDirectional':
                o = new LightDirectional().fromJSON(e)
                break
              case 'LightPoint':
                o = new LightPoint().fromJSON(e)
                break
              case 'LightSpot':
                o = new LightSpot().fromJSON(e)
                break
              case 'EmptyObject':
                o = new EmptyObject().fromJSON(e)
                break
              default:
                if (
                  'HemisphereLight' !== e.type &&
                  'DirectionalLight' !== e.type
                )
                  return void console.warn(
                    'ObjectLoader > parseObject: unsupported object type',
                    e.objectType
                  )
                o = this.loader.parseObject(e, t, i)
            }
          if ((isEntity$1(o) && (r[e.uuid] = o), void 0 !== e.children))
            try {
              for (
                var c = __values(e.children), h = c.next();
                !h.done;
                h = c.next()
              ) {
                var u = h.value,
                  d = this.parseObject(u, t, i, r)
                void 0 !== d && o.add(d)
              }
            } catch (e) {
              n = { error: e }
            } finally {
              try {
                h && !h.done && (a = c.return) && a.call(c)
              } finally {
                if (n) throw n.error
              }
            }
          return o instanceof Scene && o.initFromObjectLoader(e), o
        }),
        (t.prototype.parseInteractionStates = function (e, t) {
          var i = {}
          if (void 0 !== e)
            for (var r = 0, n = e.length; r < n; r++) {
              var a = new InteractionState().fromJSON(e[r], t)
              i[a.uuid] = a
            }
          return i
        }),
        (t.prototype.parseInteractions = function (e, t, i) {
          var r,
            n,
            a = t[e.uuid]
          if (
            (void 0 !== e.interaction &&
              void 0 !== a &&
              (a.interaction = new Interaction(a).fromJSON(
                e.interaction,
                t,
                i
              )),
            void 0 !== e.children)
          )
            try {
              for (
                var o = __values(e.children), s = o.next();
                !s.done;
                s = o.next()
              ) {
                var l = s.value
                this.parseInteractions(l, t, i)
              }
            } catch (e) {
              r = { error: e }
            } finally {
              try {
                s && !s.done && (n = o.return) && n.call(o)
              } finally {
                if (r) throw r.error
              }
            }
        }),
        t
      )
    })(LoaderMixin(THREE.ObjectLoader)),
    RUNTIME_VIEWMODE,
    RUNTIME_QUALITY
  !(function (e) {
    ;(e[(e.FULLSCREEN = 1)] = 'FULLSCREEN'),
      (e[(e.CUSTOM_SIZE = 2)] = 'CUSTOM_SIZE')
  })(RUNTIME_VIEWMODE || (RUNTIME_VIEWMODE = {})),
    (function (e) {
      ;(e.HIGH = 'high'),
        (e.MIDDLE = 'middle'),
        (e.LOW = 'low'),
        (e.DEFAULT = 'default')
    })(RUNTIME_QUALITY || (RUNTIME_QUALITY = {}))
  var Application = (function () {
      function e() {
        ;(this._viewportMode = RUNTIME_VIEWMODE.FULLSCREEN),
          (this._viewportWidth = window.innerWidth),
          (this._viewportHeight = window.innerHeight),
          (this._exportOptions = {
            useHostedRuntime: !1,
            useOrbitControls: !0,
            orbitTarget: new THREE.Vector3(),
            orbitDamped: !1,
            cameraRotate: !0,
            cameraPan: !0,
            cameraZoom: !0,
            quality: RUNTIME_QUALITY.DEFAULT,
            watermark: !0
          }),
          (this._running = !1),
          window.addEventListener('resize', this.resize.bind(this))
      }
      return (
        (e.prototype.start = function (e, $$__react_spline__canvas) {
          var t = this
          Promise.resolve(e)
            .then(function (e) {
              var i,
                r,
                n,
                a,
                o,
                s,
                l,
                c,
                h = new ObjectLoader()
              if (
                ((t._scene = h.parse(e)),
                (t._camera = t._scene.activeCamera),
                e.options)
              ) {
                var u = e.options
                t._exportOptions = {
                  useHostedRuntime:
                    null !== (i = u.useHostedRuntime) && void 0 !== i && i,
                  useOrbitControls:
                    null !== (r = u.useOrbitControls) && void 0 !== r && r,
                  orbitTarget: new THREE.Vector3().fromArray(u.orbitTarget),
                  orbitDamped:
                    null !== (n = u.orbitDamped) && void 0 !== n && n,
                  cameraRotate:
                    null !== (a = u.cameraRotate) && void 0 !== a && a,
                  cameraPan: null !== (o = u.cameraPan) && void 0 !== o && o,
                  cameraZoom: null !== (s = u.cameraZoom) && void 0 !== s && s,
                  quality:
                    null !== (l = u.quality) && void 0 !== l
                      ? l
                      : RUNTIME_QUALITY.DEFAULT,
                  watermark: null !== (c = u.watermark) && void 0 !== c && c
                }
              }
              t.init($$__react_spline__canvas),
                (t._running = !0),
                t.run(),
                t.resize()
            })
            .catch(function (e) {
              console.error(e)
            })
        }),
        (e.prototype.run = function () {
          requestAnimationFrame(this.run.bind(this)), this.render()
        }),
        (e.prototype.render = function () {
          var e, t
          this._running &&
            (this._renderer
              ? (null === (e = this._controls) || void 0 === e || e.update(),
                this._playmode &&
                  !this._playmode.isEnable &&
                  this._playmode.activate(),
                this._scene &&
                  this._camera &&
                  ((
                    null === (t = this._scene.postprocessing) || void 0 === t
                      ? void 0
                      : t.enabled
                  )
                    ? ((this._renderer.autoClear = !0),
                      this._scene.postprocessing.render())
                    : ((this._renderer.autoClear = !0),
                      this._renderer.render(this._scene, this._camera))))
              : console.error(
                  'Application::render >>> tried to renderer without a renderer'
                ))
        }),
        (e.prototype.resize = function () {
          this._running &&
            this._renderer &&
            (this._viewportMode === RUNTIME_VIEWMODE.FULLSCREEN &&
              ((this._viewportWidth = window.innerWidth),
              (this._viewportHeight = window.innerHeight)),
            this._camera &&
              ('PerspectiveCamera' === this._camera.cameraType
                ? (this._camera.aspect =
                    this._viewportWidth / this._viewportHeight)
                : 'OrthographicCamera' === this._camera.cameraType &&
                  ((this._camera.left = -this._viewportWidth / 2),
                  (this._camera.right = this._viewportWidth / 2),
                  (this._camera.top = this._viewportHeight / 2),
                  (this._camera.bottom = -this._viewportHeight / 2)),
              this._camera.updateProjectionMatrix()),
            this._renderer.setSize(this._viewportWidth, this._viewportHeight))
        }),
        (e.prototype.init = function ($$__react_spline__canvas) {
          var e,
            t,
            i,
            r,
            n = $$__react_spline__canvas || document.getElementById('canvas3d')
          if (this._scene && this._camera) {
            if (
              ((
                null === (e = this._scene.postprocessing) || void 0 === e
                  ? void 0
                  : e.enabled
              )
                ? ((this._renderer = new THREE.WebGLRenderer({
                    canvas: n,
                    antialias: !1,
                    stencil: !1,
                    depth: !1,
                    powerPreference: 'high-performance'
                  })),
                  this._scene.postprocessing.init({
                    renderer: this._renderer,
                    camera: this._camera,
                    scene: this._scene
                  }))
                : (this._renderer = new THREE.WebGLRenderer({
                    canvas: n,
                    antialias: !0,
                    alpha: !0,
                    stencil: !0,
                    depth: !0,
                    powerPreference: 'high-performance'
                  })),
              this._renderer.setPixelRatio(window.devicePixelRatio),
              this._renderer.setSize(this._viewportWidth, this._viewportHeight),
              (this._renderer.shadowMap.enabled = !0),
              (this._renderer.shadowMap.type = THREE.PCFSoftShadowMap),
              this._renderer.setClearColor(
                this._scene.color,
                this._scene.alpha
              ),
              (this._viewportMode =
                null !== (t = this._scene.canvas.mode) && void 0 !== t
                  ? t
                  : RUNTIME_VIEWMODE.FULLSCREEN),
              (this._viewportWidth =
                null !== (i = this._scene.canvas.size.width) && void 0 !== i
                  ? i
                  : window.innerWidth),
              (this._viewportHeight =
                null !== (r = this._scene.canvas.size.height) && void 0 !== r
                  ? r
                  : window.innerHeight),
              this._exportOptions.useOrbitControls)
            ) {
              ;(this._controls = new OrbitControls(
                this._camera,
                this._renderer.domElement
              )),
                this._controls.target.copy(this._exportOptions.orbitTarget),
                (this._controls.enableRotate =
                  this._exportOptions.cameraRotate),
                (this._controls.enablePan = this._exportOptions.cameraPan),
                (this._controls.enableZoom = this._exportOptions.cameraZoom),
                (this._controls.enableDamping = this._exportOptions.orbitDamped)
              this._exportOptions.orbitDamped
              ;(this._controls.rotateSpeed = 1), (this._controls.panSpeed = 1)
            }
            this._playmode = new PlayMode(
              this._renderer.domElement,
              this._scene,
              this._camera
            )
          }
        }),
        e
      )
    })(),
    _canvas
  return (
    (THREE.ImageUtils.getDataURL = function (e) {
      if (/^data:/i.test(e.src)) return e.src
      if ('undefined' == typeof HTMLCanvasElement) return e.src
      var t
      if (e instanceof HTMLCanvasElement) t = e
      else {
        void 0 === _canvas &&
          (_canvas = document.createElementNS(
            'http://www.w3.org/1999/xhtml',
            'canvas'
          )),
          (_canvas.width = e.width),
          (_canvas.height = e.height)
        var i = _canvas.getContext('2d')
        e instanceof ImageData
          ? i.putImageData(e, 0, 0)
          : i.drawImage(e, 0, 0, e.width, e.height),
          (t = _canvas)
      }
      return t.toDataURL('image/png')
    }),
    (exports.Application = Application),
    Object.defineProperty(exports, '__esModule', { value: !0 }),
    exports
  )
}
