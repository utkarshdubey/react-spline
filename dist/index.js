function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var three = require('three');
var anime$1 = _interopDefault(require('animejs/lib/anime.es.js'));

var styles = {"canvas":"_styles-module__canvas__3yjUb","container":"_styles-module__container__1Lxpd"};

window.THREE = three;
window.anime = anime$1;
window.SPE = window.SPE || {};
window.SPE_USES_PREVIEW_IMAGE = false;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

window.SPE = window.SPE || {};
var UNSIGNED_BYTE = 5121,
    UNSIGNED_SHORT = 5123,
    UNSIGNED_INT = 5125,
    FLOAT = 5126,
    SPE_LAYER_TYPE_LIGHTING = 'light',
    SPE_LAYER_TYPE_COLOR = 'color',
    SPE_LAYER_TYPE_GRADIENT = 'gradient',
    SPE_LAYER_TYPE_NORMAL = 'normal',
    SPE_LAYER_TYPE_DEPTH = 'depth',
    SPE_LAYER_TYPE_TEXTURE = 'texture',
    SPE_LAYER_TYPE_NOISE = 'noise',
    SPE_LAYER_TYPE_FRESNEL = 'fresnel',
    SPE_LAYER_TYPE_POINTS = 'points',
    SPE_LAYER_TYPE_LINES = 'lines',
    SPE_LAYER_UNIFORM_TYPE_BOOL = 0,
    SPE_LAYER_UNIFORM_TYPE_INT = 1,
    SPE_LAYER_UNIFORM_TYPE_FLOAT = 2,
    SPE_LAYER_UNIFORM_TYPE_VEC2 = 3,
    SPE_LAYER_UNIFORM_TYPE_VEC3 = 4,
    SPE_LAYER_UNIFORM_TYPE_VEC4 = 5,
    SPE_LAYER_UNIFORM_TYPE_COLOR = 6,
    SPE_LAYER_UNIFORM_TYPE_ARRAY_INT = 7,
    SPE_LAYER_UNIFORM_TYPE_ARRAY_FLOAT = 8,
    SPE_LAYER_UNIFORM_TYPE_ARRAY_VEC2 = 9,
    SPE_LAYER_UNIFORM_TYPE_ARRAY_VEC3 = 10,
    SPE_LAYER_UNIFORM_TYPE_ARRAY_VEC4 = 11,
    SPE_LAYER_UNIFORM_TYPE_ARRAY_COLOR = 12,
    SPE_LAYER_UNIFORM_TYPE_MAT3 = 13,
    SPE_LAYER_UNIFORM_TYPE_MAT4 = 14,
    SPE_LAYER_UNIFORM_TYPE_SAMPLER_2D = 15,
    SPE_COLOR_DEFAULT = 8026746,
    SPE_BLENDING_NORMAL = 0,
    SPE_RUNTIME_VIEWMODE_FULLSCREEN = 1,
    SPE_RUNTIME_VIEWMODE_FULL_WIDTH = 3,
    SPE_RUNTIME_VIEWMODE_FULL_HEIGHT = 4,
    SPE_RUNTIME_QUALITY_DEFAULT = 'default';
SPE.QualityModifiers = {
  SphereGeometry: {
    widthSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 128
    },
    heightSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 128
    }
  },
  CubeGeometry: {
    cornerSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 128
    }
  },
  ConeGeometry: {
    radialSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 64
    },
    heightSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 64
    },
    cornerSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 64
    }
  },
  CylinderGeometry: {
    radialSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 64
    },
    cornerSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 64
    }
  },
  EllipseGeometry: {
    spikes: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 64
    }
  },
  PolygonGeometry: {
    extrudeBevelSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 16
    }
  },
  RectangleGeometry: {
    extrudeBevelSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 16
    }
  },
  StarGeometry: {
    extrudeBevelSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 16
    }
  },
  TorusGeometry: {
    radialSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 64
    },
    tubularSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        "default": 1
      },
      minValue: 1,
      maxValue: 128
    }
  }
};

var SpeGltfDecoder = /*#__PURE__*/function () {
  function SpeGltfDecoder(e) {
    this.mGltfSceneGraph = e, this.mSceneGraph = null, this.mSceneCamera = null, this.mSceneOptions = {}, this.mNodes = [], this.mCameras = [], this.mLights = [], this.mGeometries = [], this.mGeometriesSpe = [], this.mAccessors = [], this.mMaterials = [];
  }

  var _proto = SpeGltfDecoder.prototype;

  _proto.decode = function decode(e) {
    e && (this.mGltfSceneGraph = e), this.mSceneGraph = new SpeScene(), this.mSceneCamera = null, this.mSceneOptions = {}, this.mNodes = [this.mSceneGraph], this.mObjects = {}, this.mCameras = [], this.mLights = [], this.mGeometries = [], this.mGeometriesSpe = [], this.mAccessors = [], this.mMaterials = [], this.mInteractionStates = {}, void 0 !== this.mGltfSceneGraph.spline && (this.mSceneOptions.usePrimitives = void 0 === this.mGltfSceneGraph.spline.usePrimitives || this.mGltfSceneGraph.spline.usePrimitives, this.mSceneOptions.useOrbitControls = void 0 === this.mGltfSceneGraph.spline.useOrbitControls || this.mGltfSceneGraph.spline.useOrbitControls, this.mSceneOptions.bgColor = void 0 !== this.mGltfSceneGraph.spline.bgColor ? this.mGltfSceneGraph.spline.bgColor : new THREE.Color(1644825), this.mSceneOptions.bgAlpha = void 0 !== this.mGltfSceneGraph.spline.bgAlpha ? this.mGltfSceneGraph.spline.bgAlpha : 0, this.mSceneOptions.orbitDamped = void 0 !== this.mGltfSceneGraph.spline.orbitDamped && this.mGltfSceneGraph.spline.orbitDamped, this.mSceneOptions.orbitTarget = void 0 !== this.mGltfSceneGraph.spline.orbitTarget ? this.mGltfSceneGraph.spline.orbitTarget : [0, 0, 0], this.mSceneOptions.cameraType = void 0 !== this.mGltfSceneGraph.spline.cameraType ? this.mGltfSceneGraph.spline.cameraType : 'Orthographic', this.mSceneOptions.cameraRotate = void 0 === this.mGltfSceneGraph.spline.cameraRotate || this.mGltfSceneGraph.spline.cameraRotate, this.mSceneOptions.cameraPan = void 0 === this.mGltfSceneGraph.spline.cameraPan || this.mGltfSceneGraph.spline.cameraPan, this.mSceneOptions.cameraZoom = void 0 === this.mGltfSceneGraph.spline.cameraZoom || this.mGltfSceneGraph.spline.cameraZoom, this.mSceneOptions.viewMode = void 0 !== this.mGltfSceneGraph.spline.viewMode ? this.mGltfSceneGraph.spline.viewMode : SPE_RUNTIME_VIEWMODE_FULLSCREEN, this.mSceneOptions.viewWidth = void 0 !== this.mGltfSceneGraph.spline.viewWidth ? this.mGltfSceneGraph.spline.viewWidth : 1024, this.mSceneOptions.viewHeight = void 0 !== this.mGltfSceneGraph.spline.viewHeight ? this.mGltfSceneGraph.spline.viewHeight : 768, this.mSceneOptions.quality = void 0 !== this.mGltfSceneGraph.spline.quality ? this.mGltfSceneGraph.spline.quality : SPE_RUNTIME_QUALITY_DEFAULT);
    var t = 'function' == typeof Interaction;

    if (t) {
      if (SPE.CachedImages = {}, this.mGltfSceneGraph.spline && this.mGltfSceneGraph.spline.images) {
        var _e = this.mGltfSceneGraph.spline.images;

        for (var _i = 0, _Object$entries = Object.entries(_e); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _Object$entries[_i],
              _t = _Object$entries$_i[0],
              _i2 = _Object$entries$_i[1];

          var _e2 = new Image();

          _e2.src = _i2.url, SPE.CachedImages[_t] = _e2;
        }
      }

      if (SPE.CachedTextures = {}, this.mGltfSceneGraph.spline && this.mGltfSceneGraph.spline.textures) {
        var _e3 = this.mGltfSceneGraph.spline.textures;

        for (var _i3 = 0, _Object$entries2 = Object.entries(_e3); _i3 < _Object$entries2.length; _i3++) {
          var _Object$entries2$_i = _Object$entries2[_i3],
              _t2 = _Object$entries2$_i[0],
              _i4 = _Object$entries2$_i[1];

          var _e4 = _i4.image,
              _r = SPE.CachedImages[_e4],
              _a = new THREE.Texture(_r, _i4.mapping, _i4.wrap[0], _i4.wrap[1], _i4.magFilter, _i4.minFilter, _i4.format, _i4.type, _i4.anisotropy, _i4.encoding);

          _a.offset.fromArray(_i4.offset), _a.repeat.fromArray(_i4.repeat), _a.center.fromArray(_i4.center), _a.updateMatrix(), SPE.CachedTextures[_t2] = _a;
        }
      }

      if (this.mGltfSceneGraph.spline && this.mGltfSceneGraph.spline.interactionStates) {
        var _e5 = this.mGltfSceneGraph.spline.interactionStates;

        for (var _i5 = 0, _Object$entries3 = Object.entries(_e5); _i5 < _Object$entries3.length; _i5++) {
          var _Object$entries3$_i = _Object$entries3[_i5],
              _t3 = _Object$entries3$_i[0],
              _i6 = _Object$entries3$_i[1];
          this.mInteractionStates[_t3] = new InteractionState().fromJSON(_i6, SPE.CachedTextures);
        }
      }
    }

    var i = this.mGltfSceneGraph.cameras || [];

    for (var _e6 = 0; _e6 < i.length; _e6++) {
      this._decodeCamera(i[_e6]);
    }

    if (this.mGltfSceneGraph.extensions && this.mGltfSceneGraph.extensions.KHR_lights_punctual && this.mGltfSceneGraph.extensions.KHR_lights_punctual.lights) {
      var _e7 = this.mGltfSceneGraph.extensions.KHR_lights_punctual.lights;

      for (var _t4 = 0; _t4 < _e7.length; _t4++) {
        this._decodeLight(_e7[_t4]);
      }
    }

    this._constructGeometricData();

    var r = this.mGltfSceneGraph.materials || [];

    for (var _e8 = 0; _e8 < r.length; _e8++) {
      this._decodeMaterial(r[_e8]);
    }

    var a = this.mGltfSceneGraph.meshes_spe || [];

    for (var _e9 = 0; _e9 < a.length; _e9++) {
      this._decodeSpeGeometry(a[_e9]);
    }

    var s = this.mGltfSceneGraph.meshes || [];

    for (var _e10 = 0; _e10 < s.length; _e10++) {
      this._decodeGeometry(s[_e10]);
    }

    var n = this.mGltfSceneGraph.nodes || [];

    for (var _e11 = 1; _e11 < n.length; _e11++) {
      this._decodeNode(n[_e11]);
    }

    if (t && this.mGltfSceneGraph.spline && this.mGltfSceneGraph.spline.interactions) {
      var _e12 = this.mGltfSceneGraph.spline.interactions;

      for (var _t5 = 0; _t5 < n.length; _t5++) {
        var _i7 = n[_t5];

        if (void 0 !== _i7.spe_interaction && null !== _i7.spe_interaction) {
          var _r2 = _i7.spe_interaction;

          if (_r2 < _e12.length && _r2 >= 0) {
            var _i8 = _e12[_r2],
                _a2 = this.mInteractionStates,
                _s = this.mObjects;

            this.mNodes[_t5].interaction.fromJSON(_i8, _s, _a2);
          }
        }
      }
    }

    var o = this.mGltfSceneGraph.nodes[0],
        h = new SpeStack();

    for (var _e13 = 0; _e13 < o.children.length; _e13++) {
      h.push([o.children[_e13], this.mSceneGraph]);
    }

    for (; !h.empty();) {
      var _e14 = h.pop(),
          _t6 = _e14[0],
          _i9 = _e14[1];

      if (_t6 < this.mNodes.length && _t6 >= 0) {
        var _e15 = this.mNodes[_t6];
        if (!_e15) continue;
        _i9 && _i9.add(_e15);
        var _r3 = this.mGltfSceneGraph.nodes[_t6].children;
        if (void 0 !== _r3) for (var _t7 = 0; _t7 < _r3.length; _t7++) {
          h.push([_r3[_t7], _e15]);
        }
      }
    }

    if (void 0 !== this.mGltfSceneGraph.spline && this.mGltfSceneGraph.spline.fog) {
      var _e16 = this.mGltfSceneGraph.spline.fog,
          _t8 = void 0 !== _e16.color ? _e16.color : 16777215,
          _i10 = void 0 !== _e16.near ? _e16.near : 500,
          _r4 = void 0 !== _e16.far ? _e16.far : 2e3;

      this.mSceneGraph.fog = new THREE.Fog(_t8, _i10, _r4);
    }

    if (void 0 !== this.mGltfSceneGraph.spline && void 0 !== this.mGltfSceneGraph.spline.mainCameraIndex) {
      var _e17 = this.mGltfSceneGraph.spline.mainCameraIndex;
      _e17 < this.mNodes.length && _e17 >= 0 && (this.mSceneCamera = this.mNodes[_e17]);
    }

    return [this.mSceneGraph, this.mSceneCamera, this.mSceneOptions];
  };

  _proto._decodeCamera = function _decodeCamera(e) {
    var t = void 0 !== e.type ? e.type : 'Perspective',
        i = 100,
        r = 100,
        a = 45,
        n = 0.1,
        o = 5e4,
        h = null;

    if ('Perspective' === t) {
      var _t9 = e.perspective ? e.perspective : {},
          l = e.spe_options ? e.spe_options : {};

      a = void 0 !== _t9.yfov ? _t9.yfov : 45, n = void 0 !== _t9.znear ? _t9.znear : 0.1, o = void 0 !== _t9.zfar ? _t9.zfar : 5e4, (h = new SPE.CombinedCamera(i, r, a, n, o)).toPerspective();
      var c = void 0 !== l.zoom ? l.zoom : 1;
      h.zoom = c;
    } else if ('Orthographic' === t) {
      var _t10 = e.orthographic ? e.orthographic : {},
          _s2 = e.spe_options ? e.spe_options : {};

      i = void 0 !== _t10.xmag ? _t10.xmag : 100, r = void 0 !== _t10.ymag ? _t10.ymag : 100, n = void 0 !== _t10.znear ? _t10.znear : 0.1, o = void 0 !== _t10.zfar ? _t10.zfar : 5e4, (h = new SPE.CombinedCamera(i, r, a, n, o)).toOrthographic();

      var _l = void 0 !== _s2.zoom ? _s2.zoom : 1;

      h.zoom = _l;
    } else console.warn("SpeGltfDecoder::_decodeCamera >>> unsupported camera type: " + t + ". Using Orthographic instead"), (h = new SPE.CombinedCamera(i, r, a, n, o)).toOrthographic();

    this.mCameras.push(h);
  };

  _proto._decodeLight = function _decodeLight(e) {
    if ('hemispheric' === e.type) {
      var t = new THREE.Color().fromArray(void 0 !== e.color ? e.color : [1, 1, 1]),
          i = new THREE.Color().setHex(8553090),
          r = e.intensity ? e.intensity : 1;
      this.mLights.push(new THREE.HemisphereLight(t, i, r));
    } else if ('directional' === e.type) {
      var _t11 = new SPE.LightDirectional(new THREE.Color().fromArray(e.color), e.intensity),
          _i11 = e.shadows || {};

      _t11.castShadow = void 0 !== _i11.castShadow && _i11.castShadow, _t11.shadow.camera.right = void 0 !== _i11.shadowmapViewRight ? _i11.shadowmapViewRight : 1250, _t11.shadow.camera.left = void 0 !== _i11.shadowmapViewLeft ? _i11.shadowmapViewLeft : -1250, _t11.shadow.camera.top = void 0 !== _i11.shadowmapViewTop ? _i11.shadowmapViewTop : 1250, _t11.shadow.camera.bottom = void 0 !== _i11.shadowmapViewBottom ? _i11.shadowmapViewBottom : -1250, _t11.shadow.camera.near = void 0 !== _i11.shadowmapViewNear ? _i11.shadowmapViewNear : 1, _t11.shadow.camera.far = void 0 !== _i11.shadowmapViewFar ? _i11.shadowmapViewFar : 2500, this.mLights.push(_t11);
    } else if ('point' === e.type) {
      var _t12 = new THREE.Color().fromArray(void 0 !== e.color ? e.color : [1, 1, 1]),
          _i12 = e.intensity ? e.intensity : 1,
          _r5 = void 0 !== e.range ? e.range : 0,
          a = void 0 !== e.decay ? e.decay : 1,
          s = new SPE.LightPoint(_t12, _i12, _r5, a),
          n = e.shadows || {};

      s.castShadow = void 0 !== n.castShadow && n.castShadow, s.shadow.camera.near = void 0 !== n.shadowmapViewNear ? n.shadowmapViewNear : 1, s.shadow.camera.far = void 0 !== n.shadowmapViewFar ? n.shadowmapViewFar : 2500, this.mLights.push(s);
    } else if ('spot' === e.type) {
      var _t13 = new THREE.Color().fromArray(void 0 !== e.color ? e.color : [1, 1, 1]),
          _i13 = e.intensity ? e.intensity : 1,
          _r6 = void 0 !== e.range ? e.range : 0,
          _a3 = void 0 !== e.decay ? e.decay : 1,
          _s3 = void 0 !== e.innerConeAngle ? e.innerConeAngle : Math.PI / 3,
          _n = void 0 !== e.penumbra ? e.penumbra : 0,
          o = new SPE.LightSpot(_t13, _i13, _r6, _s3, _n, _a3),
          h = e.shadows || {};

      o.castShadow = void 0 !== h.castShadow && h.castShadow, o.shadow.camera.fov = void 0 !== h.shadowmapViewFov ? h.shadowmapViewFov : 2 * THREE.MathUtils.RAD2DEG * _s3, o.shadow.camera.near = void 0 !== h.shadowmapViewNear ? h.shadowmapViewNear : 1, o.shadow.camera.far = void 0 !== h.shadowmapViewFar ? h.shadowmapViewFar : 2500, this.mLights.push(o);
    } else console.error('SpeGltfDecoder::_decodeLight >>> unsupported light type: ', e.type);
  };

  _proto._constructGeometricData = function _constructGeometricData() {
    var e = this.mGltfSceneGraph.buffers,
        t = [];

    for (var _i14 = 0; _i14 < e.length; _i14++) {
      t.push(this._decodeBuffer(e[_i14]));
    }

    var i = this.mGltfSceneGraph.bufferViews,
        r = [];

    for (var _e18 = 0; _e18 < i.length; _e18++) {
      r.push(this._decodeBufferView(i[_e18], t));
    }

    var a = this.mGltfSceneGraph.accessors;

    for (var _e19 = 0; _e19 < a.length; _e19++) {
      this.mAccessors.push(this._decodeAccessor(a[_e19], r));
    }
  };

  _proto._decodeBuffer = function _decodeBuffer(e) {
    var t = e.byteLength,
        i = e.uri;

    if (i.indexOf('base64')) {
      var _e20 = i.slice(i.indexOf('base64') + 7),
          r = atob(_e20),
          a = new Uint8Array(_e20.length);

      for (var _e21 = 0; _e21 < r.length; _e21++) {
        a[_e21] = r.charCodeAt(_e21);
      }

      return {
        data: a,
        length: t
      };
    }

    return i.indexOf('.bin') ? (console.error('SpeGltfDecoder::_decodeBuffer >>> encode-from-.bin is not implement yet'), '') : (console.error('SpeGltfDecoder::_decodeBuffer >>> invalid options to parse buffer data'), '');
  };

  _proto._decodeBufferView = function _decodeBufferView(e, t) {
    var i = e.byteLength,
        r = e.byteOffset,
        a = e.buffer,
        s = e.target;

    if (a < t.length && a >= 0) {
      return {
        data: t[a].data.slice(r, r + i),
        length: i,
        target: s
      };
    }

    return console.error('SpeGltfDecoder::_decodeBufferView >>> index-out-of-range in buffers array'), {};
  };

  _proto._decodeAccessor = function _decodeAccessor(e, t) {
    var i = e.bufferView,
        r = e.byteOffset,
        a = e.componentType,
        s = e.count,
        n = e.type;

    if (i < t.length && i >= 0) {
      var _e22 = t[i].data,
          o = this._getAccessorItemSize(n),
          h = s * o * this._getAccessorComponentSize(a),
          l = _e22.slice(r, r + h);

      var c = null;
      return a === UNSIGNED_SHORT ? c = this._createUint16Buffer(l) : a === UNSIGNED_INT ? c = this._createUint32Buffer(l) : a === FLOAT && (c = this._createFloat32Buffer(l)), c ? this._createBufferAttribute(c, o) : (console.error('SpeGltfDecoder::_decodeAccessor >>> invalid component-type given'), null);
    }

    return console.error('SpeGltfDecoder::_decodeAccessor >>> index-out-of-range in bufferViews array'), null;
  };

  _proto._decodeMaterial = function _decodeMaterial(e) {
    var _Object$entries$ = Object.entries(e)[0],
        i = _Object$entries$[1];
    void 0 !== i.extensions && void 0 !== i.extensions.KHR_materials_common ? this._decodeSimpleMaterial(i.extensions.KHR_materials_common, i.spe_options, i.spe_layers) : this._decodePbrMaterial(i);
  };

  _proto._decodeSimpleMaterial = function _decodeSimpleMaterial(e, t, i) {
    var r = e.technique || 'PHONG',
        a = e.values || {},
        s = t || {},
        n = i || {};

    if ('PHONG' === r) {
      var _e23 = new THREE.Color().fromArray(void 0 !== a.diffuse ? a.diffuse : [0.5, 0.5, 0.5]),
          _t14 = new THREE.Color().fromArray(void 0 !== a.specular ? a.specular : [0.5, 0.5, 0.5]),
          _i15 = new THREE.Color().fromArray(void 0 !== a.emission ? a.emission : [0, 0, 0]),
          _r7 = void 0 !== a.shininess ? a.shininess : 32,
          o = void 0 !== a.transparent && a.transparent,
          h = void 0 !== a.transparency ? a.transparency : 1,
          l = void 0 === s.visible || s.visible,
          c = void 0 !== s.wireframe && s.wireframe,
          d = void 0 !== s.side ? s.side : THREE.FrontSide,
          m = void 0 !== s.flatShading && s.flatShading,
          u = new SpePhongMaterial(n, {
        color: _e23,
        specular: _t14,
        emissive: _i15,
        shininess: _r7,
        transparent: o,
        opacity: h,
        flatShading: m,
        side: d,
        wireframe: c,
        visible: l
      });

      this.mMaterials.push(u);
    } else if ('LAMBERT' === r) {
      var _e24 = new THREE.Color().fromArray(void 0 !== a.diffuse ? a.diffuse : [0.5, 0.5, 0.5]),
          _t15 = new THREE.Color().fromArray(void 0 !== a.emission ? a.emission : [0, 0, 0]),
          _i16 = void 0 !== a.transparent && a.transparent,
          _r8 = void 0 !== a.transparency ? a.transparency : 1,
          _o = void 0 === s.visible || s.visible,
          _h = void 0 !== s.wireframe && s.wireframe,
          _l2 = void 0 !== s.side ? s.side : THREE.FrontSide,
          _c = void 0 !== s.flatShading && s.flatShading,
          _d = new SpeLambertMaterial(n, {
        color: _e24,
        emissive: _t15,
        transparent: _i16,
        opacity: _r8,
        flatShading: _c,
        side: _l2,
        wireframe: _h,
        visible: _o
      });

      this.mMaterials.push(_d);
    } else if ('CONSTANT' === r) {
      var _e25 = new THREE.Color().fromArray(void 0 !== a.ambient ? a.ambient : [0.5, 0.5, 0.5]),
          _t16 = void 0 !== a.transparent && a.transparent,
          _i17 = void 0 !== a.transparency ? a.transparency : 1,
          _r9 = void 0 === s.visible || s.visible,
          _o2 = void 0 !== s.wireframe && s.wireframe,
          _h2 = void 0 !== s.side ? s.side : THREE.FrontSide,
          _l3 = void 0 !== s.flatShading && s.flatShading,
          _c2 = new SpeBasicMaterial(n, {
        color: _e25,
        transparent: _t16,
        opacity: _i17,
        flatShading: _l3,
        side: _h2,
        wireframe: _o2,
        visible: _r9
      });

      this.mMaterials.push(_c2);
    } else if ('TOON' === r) {
      var _e26 = new THREE.Color().fromArray(void 0 !== a.ambient ? a.ambient : [0.5, 0.5, 0.5]),
          _t17 = void 0 !== a.transparent && a.transparent,
          _i18 = void 0 !== a.transparency ? a.transparency : 1,
          _r10 = void 0 === s.visible || s.visible,
          _o3 = void 0 !== s.wireframe && s.wireframe,
          _h3 = void 0 !== s.side ? s.side : THREE.FrontSide,
          _l4 = void 0 !== s.flatShading && s.flatShading,
          _c3 = new SpeToonMaterial(n, {
        color: _e26,
        transparent: _t17,
        opacity: _i18,
        flatShading: _l4,
        side: _h3,
        wireframe: _o3,
        visible: _r10
      });

      this.mMaterials.push(_c3);
    } else if ('PHYSICAL' === r) {
      var _e27 = new THREE.Color().fromArray(void 0 !== a.ambient ? a.ambient : [0.5, 0.5, 0.5]),
          _t18 = void 0 !== a.transparent && a.transparent,
          _i19 = void 0 !== a.transparency ? a.transparency : 1,
          _r11 = void 0 !== a.roughness ? a.roughness : 0.3,
          _o4 = void 0 !== a.metalness ? a.metalness : 0,
          _h4 = void 0 !== a.reflectivity ? a.reflectivity : 0.5,
          _l5 = void 0 === s.visible || s.visible,
          _c4 = void 0 !== s.wireframe && s.wireframe,
          _d2 = void 0 !== s.side ? s.side : THREE.FrontSide,
          _m = void 0 !== s.flatShading && s.flatShading,
          _u = new SpePhysicalMaterial(n, {
        color: _e27,
        transparent: _t18,
        opacity: _i19,
        roughness: _r11,
        metalness: _o4,
        reflectivity: _h4,
        flatShading: _m,
        side: _d2,
        wireframe: _c4,
        visible: _l5
      });

      this.mMaterials.push(_u);
    } else if ('ARRAY' === r) {
      var _e28 = void 0 !== a.techniques ? a.techniques : new Array(n.length).fill('CONSTANT'),
          _t19 = [];

      for (var _i20 = 0; _i20 < n.length; _i20++) {
        'CONSTANT' === _e28[_i20] ? _t19.push(new SpeBasicMaterial(n[_i20], {})) : 'LAMBERT' === _e28[_i20] ? _t19.push(new SpeLambertMaterial(n[_i20], {})) : 'PHONG' === _e28[_i20] ? _t19.push(new SpePhongMaterial(n[_i20], {})) : 'TOON' === _e28[_i20] ? _t19.push(new SpeToonMaterial(n[_i20], {})) : 'PHYSICAL' === _e28[_i20] ? _t19.push(new SpePhysicalMaterial(n[_i20], {})) : (console.error("SpeGltfDecoder::_decodeSimpleMaterial >>> unsupported technique (" + _e28[_i20] + ") for element of array of materials"), _t19.push(new SpeBasicMaterial(n[_i20], {})));
      }

      this.mMaterials.push(_t19);
    } else console.error('SpeGltfDecoder::_decodeSimpleMaterial >>> unsupported material type: ', e.technique);
  };

  _proto._decodePbrMaterial = function _decodePbrMaterial(e) {};

  _proto._decodeSpeGeometry = function _decodeSpeGeometry(e) {
    var t = void 0 !== e.type ? e.type : 'SphereGeometry',
        i = this._applyQualityScalers(t, void 0 !== e.parameters ? _extends({}, e.parameters) : {
      width: 100,
      height: 100,
      depth: 100
    });

    if ('CharacterGeometry' === t) {
      SpeLoadCharData(void 0 !== i["char"] ? i["char"] : '.', void 0 !== i.fontFamily ? i.fontFamily : 'roboto_regular', void 0 !== i.lod ? i.lod : 1), this.mGeometriesSpe.push(i);
    } else {
      var _e29 = (0, SPE[t].build)(i);

      this.mGeometriesSpe.push(_e29);
    }
  };

  _proto._applyQualityScalers = function _applyQualityScalers(e, t) {
    if (void 0 === SPE.QualityModifiers[e]) return t;
    var i = {},
        r = this.mSceneOptions.quality;

    for (var _i21 = 0, _Object$entries4 = Object.entries(t); _i21 < _Object$entries4.length; _i21++) {
      var _Object$entries4$_i = _Object$entries4[_i21],
          a = _Object$entries4$_i[0],
          s = _Object$entries4$_i[1];

      if (void 0 === SPE.QualityModifiers[e][a]) {
        i[a] = s;
        continue;
      }

      var _t20 = SPE.QualityModifiers[e][a].minValue,
          n = SPE.QualityModifiers[e][a].maxValue,
          o = SPE.QualityModifiers[e][a].scalers[r];
      i[a] = Math.max(_t20, Math.min(n, o * s));
    }

    return i;
  };

  _proto._decodeGeometry = function _decodeGeometry(e) {
    var t = e.primitives,
        i = e.groups,
        r = e.parameters,
        a = t[0],
        s = a.indices,
        n = a.attributes,
        o = this.mAccessors[s],
        h = {};

    for (var _e30 in n) {
      h[_e30] = this.mAccessors[n[_e30]];
    }

    var l = new THREE.BufferGeometry();
    o && l.setIndex(o);

    for (var _e31 in h) {
      l.setAttribute(_e31.toLowerCase(), h[_e31]);
    }

    if (void 0 !== i) for (var _e32 = 0; _e32 < i.length; _e32++) {
      l.addGroup(i[_e32].start, i[_e32].count, i[_e32].materialIndex);
    }

    if (void 0 !== r) {
      var _e33 = new THREE.Vector3();

      l.computeBoundingBox(), l.boundingBox.getSize(_e33);

      var _t21 = void 0 !== r.width ? r.width : _e33.x,
          _i22 = void 0 !== r.height ? r.height : _e33.y,
          _a4 = void 0 !== r.depth ? r.depth : _e33.z;

      l.scale(Math.abs(_e33.x) < 1e-5 ? 1 : _t21 / _e33.x, Math.abs(_e33.y) < 1e-5 ? 1 : _i22 / _e33.y, Math.abs(_e33.z) < 1e-5 ? 1 : _a4 / _e33.z), l.userData = {
        type: 'NonParametricGeometry',
        parameters: {
          width: _t21,
          height: _i22,
          depth: _a4
        }
      };
    }

    this.mGeometries.push(l);
  };

  _proto._decodeNode = function _decodeNode(e) {
    if (void 0 !== e.camera) {
      var t = e.camera;

      if (t < this.mCameras.length && t >= 0) {
        var i = this.mCameras[t];
        i.visible = void 0 === e.visible || e.visible, i.position.copy(new THREE.Vector3().fromArray(e.translation ? e.translation : [0, 0, 0])), i.quaternion.copy(new THREE.Quaternion().fromArray(e.rotation ? e.rotation : [0, 0, 0, 1])), i.hiddenMatrix.copy(new THREE.Matrix4().fromArray(e.hiddenMatrix ? e.hiddenMatrix : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])), i.updateMatrix(), this.mNodes.push(i);
        var r = void 0 !== e.uuid ? e.uuid : THREE.MathUtils.generateUUID();
        this.mObjects[r] = i;
      } else console.error('SpeGltfDecoder::_decodeNode >>> couldnt create node for associated camera (index out of bounds)');
    } else if (void 0 !== e.mesh_spe) {
      var _t22 = e.mesh_spe;
      var _i23 = null;
      _t22 < this.mGeometriesSpe.length && _t22 >= 0 ? _i23 = this.mGeometriesSpe[_t22] : (console.warn('SpeGltfDecoder::_decodeNode >>> couldnt grab any associated geometry for a mesh-node (index out of bounds). Creating a default sphere instead'), _i23 = new THREE.SphereBufferGeometry(1, 10, 10));
      var _r12 = null;

      if (void 0 !== e.material) {
        var _t23 = e.material;
        _t23 < this.mMaterials.length && _t23 >= 0 ? _r12 = this.mMaterials[_t23] : console.warn('SpeGltfDecoder::_decodeNode >>> couldnt grab any associated material for a mesh-node (index out of bounds)');
      }

      _r12 || (console.error('SpeGltfDecoder::_decodeNode >>> mesh-node doesnt have a material. Creating a default phong-material instead'), _r12 = new SpePhongMaterial({}, {
        color: new THREE.Color(16777215),
        specular: new THREE.Color(16777215)
      }));
      var a = void 0 !== e.type ? e.type : 'mesh3d';
      var s = null;
      'mesh3d' === a ? s = new SpeMesh3D(_i23, _r12) : 'mesh2d' === a ? s = new SpeMesh2D(_i23, _r12) : 'text' === a ? s = new SpeTextContainer(_i23, _r12) : 'character' === a ? s = new SpeTextChar3D(_i23, _r12) : (console.error("SpeGltfDecoder::_decodeNode >>> mesh-type " + a + " not supported"), s = new SpeMesh3D(_i23, _r12)), s.visible = void 0 === e.visible || e.visible, s.castShadow = void 0 === e.castShadow || e.castShadow, s.receiveShadow = void 0 === e.receiveShadow || e.receiveShadow, s.position.copy(new THREE.Vector3().fromArray(e.translation ? e.translation : [0, 0, 0])), s.quaternion.copy(new THREE.Quaternion().fromArray(e.rotation ? e.rotation : [0, 0, 0, 1])), s.scale.copy(new THREE.Vector3().fromArray(e.scale ? e.scale : [1, 1, 1])), s.hiddenMatrix.copy(new THREE.Matrix4().fromArray(e.hiddenMatrix ? e.hiddenMatrix : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])), s.updateMatrix(), this.mNodes.push(s);
      var n = void 0 !== e.uuid ? e.uuid : THREE.MathUtils.generateUUID();
      this.mObjects[n] = s, e.spe_cloner && (s.cloner = new Cloner(s).fromJSON(e.spe_cloner_data), s.add(s.cloner));
    } else if (void 0 !== e.mesh) {
      var _t24 = e.mesh;
      var _i24 = null;
      _t24 < this.mGeometries.length && _t24 >= 0 ? _i24 = this.mGeometries[_t24] : (console.warn('SpeGltfDecoder::_decodeNode >>> couldnt grab any associated geometry for a mesh-node (index out of bounds). Creating a default sphere instead'), _i24 = new THREE.SphereBufferGeometry(1, 10, 10));
      var _r13 = null;

      if (void 0 !== e.material) {
        var _t25 = e.material;
        _t25 < this.mMaterials.length && _t25 >= 0 ? _r13 = this.mMaterials[_t25] : console.warn('SpeGltfDecoder::_decodeNode >>> couldnt grab any associated material for a mesh-node (index out of bounds)');
      }

      _r13 || (console.warn('SpeGltfDecoder::_decodeNode >>> mesh-node doesnt have a material. Creating a default phong-material instead'), _r13 = new SpePhongMaterial({}, {
        color: new THREE.Color(16777215),
        specular: new THREE.Color(16777215)
      }));

      var _a5 = new SpeMesh3D(_i24, _r13);

      _a5.visible = void 0 === e.visible || e.visible, _a5.castShadow = void 0 === e.castShadow || e.castShadow, _a5.receiveShadow = void 0 === e.receiveShadow || e.receiveShadow, _a5.position.copy(new THREE.Vector3().fromArray(e.translation ? e.translation : [0, 0, 0])), _a5.quaternion.copy(new THREE.Quaternion().fromArray(e.rotation ? e.rotation : [0, 0, 0, 1])), _a5.scale.copy(new THREE.Vector3().fromArray(e.scale ? e.scale : [1, 1, 1])), _a5.hiddenMatrix.copy(new THREE.Matrix4().fromArray(e.hiddenMatrix ? e.hiddenMatrix : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])), _a5.updateMatrix(), this.mNodes.push(_a5);

      var _s4 = void 0 !== e.uuid ? e.uuid : THREE.MathUtils.generateUUID();

      this.mObjects[_s4] = _a5, e.spe_cloner && (_a5.cloner = new Cloner(_a5).fromJSON(e.spe_cloner_data), _a5.add(_a5.cloner));
    } else if (void 0 !== e.extensions && void 0 !== e.extensions.KHR_lights_punctual && void 0 !== e.extensions.KHR_lights_punctual.light) {
      var _t26 = e.extensions.KHR_lights_punctual.light;

      if (_t26 < this.mLights.length && _t26 >= 0) {
        var _i25 = this.mLights[_t26];

        if (_i25.position.copy(new THREE.Vector3().fromArray(e.translation ? e.translation : [0, 0, 0])), 'SpotLight' === _i25.type || 'DirectionalLight' === _i25.type) {
          var _t27 = new THREE.Quaternion().fromArray(e.rotation ? e.rotation : [0, 0, 0, 1]),
              _r15 = new THREE.Matrix4().makeRotationFromQuaternion(_t27),
              _a6 = new THREE.Vector3(_r15.elements[8], _r15.elements[9], _r15.elements[10]);

          _i25.target.position.x = _i25.position.x + _a6.x, _i25.target.position.y = _i25.position.y + _a6.y, _i25.target.position.z = _i25.position.z + _a6.z;
        }

        _i25.hiddenMatrix && _i25.hiddenMatrix.copy(new THREE.Matrix4().fromArray(e.hiddenMatrix ? e.hiddenMatrix : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])), _i25.visible = void 0 === e.visible || e.visible, this.mNodes.push(_i25);

        var _r14 = void 0 !== e.uuid ? e.uuid : THREE.MathUtils.generateUUID();

        this.mObjects[_r14] = _i25;
      } else console.error('SpeGltfDecoder::_decodeNode >>> couldnt create node for associated light (index out of bounds)');
    } else if (e.spe_empty_object) {
      var _t28 = new SpeEmptyObject();

      _t28.visible = void 0 === e.visible || e.visible, _t28.position.copy(new THREE.Vector3().fromArray(e.translation ? e.translation : [0, 0, 0])), _t28.quaternion.copy(new THREE.Quaternion().fromArray(e.rotation ? e.rotation : [0, 0, 0, 1])), _t28.scale.copy(new THREE.Vector3().fromArray(e.scale ? e.scale : [1, 1, 1])), _t28.hiddenMatrix.copy(new THREE.Matrix4().fromArray(e.hiddenMatrix ? e.hiddenMatrix : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])), _t28.updateMatrix(), this.mNodes.push(_t28);

      var _i26 = void 0 !== e.uuid ? e.uuid : THREE.MathUtils.generateUUID();

      this.mObjects[_i26] = _t28;
    } else {
      console.warn('SpeGltfDecoder::_decodeNode >>> Unsupported node, creating a default THREE.Object3D instead');

      var _t29 = new THREE.Object3D();

      _t29.position.copy(new THREE.Vector3().fromArray(e.translation ? e.translation : [0, 0, 0])), _t29.quaternion.copy(new THREE.Quaternion().fromArray(e.rotation ? e.rotation : [0, 0, 0, 1])), _t29.scale.copy(new THREE.Vector3().fromArray(e.scale ? e.scale : [1, 1, 1])), this.mNodes.push(_t29);
    }
  };

  _proto._getAccessorItemSize = function _getAccessorItemSize(e) {
    return 'SCALAR' === e ? 1 : 'VEC2' === e ? 2 : 'VEC3' === e ? 3 : 'VEC4' === e ? 4 : 'MAT4' === e ? 16 : (console.error('SpeGltfDecoder::_getAccessorItemSize >>> invalid item-type'), 1);
  };

  _proto._getAccessorComponentSize = function _getAccessorComponentSize(e) {
    return e === UNSIGNED_BYTE ? 1 : e === UNSIGNED_SHORT ? 2 : e === UNSIGNED_INT ? 4 : e === FLOAT ? 4 : (console.error('SpeGltfDecoder::_getAccessorComponentSize >>> invalid component-type'), 1);
  };

  _proto._createUint16Buffer = function _createUint16Buffer(e) {
    return new Uint16Array(e.buffer);
  };

  _proto._createUint32Buffer = function _createUint32Buffer(e) {
    return new Uint32Array(e.buffer);
  };

  _proto._createFloat32Buffer = function _createFloat32Buffer(e) {
    var t = new Float32Array(e.length / Float32Array.BYTES_PER_ELEMENT),
        i = new DataView(new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT));

    for (var r = 0; r < t.length; r++) {
      i.setUint8(0, e[4 * r + 0]), i.setUint8(1, e[4 * r + 1]), i.setUint8(2, e[4 * r + 2]), i.setUint8(3, e[4 * r + 3]), t[r] = i.getFloat32(0, !0);
    }

    return t;
  };

  _proto._createBufferAttribute = function _createBufferAttribute(e, t) {
    return 'Float32Array' === e.constructor.name ? new THREE.Float32BufferAttribute(e, t) : 'Uint16Array' === e.constructor.name ? new THREE.Uint16BufferAttribute(e, t) : 'Uint32Array' === e.constructor.name ? new THREE.Uint32BufferAttribute(e, t) : (console.error('SpeGltfDecoder::_createBufferAttribute >>> unsupported buffer-array-type'), null);
  };

  return SpeGltfDecoder;
}();

var SpeIMesh = /*#__PURE__*/function (_THREE$Mesh) {
  _inheritsLoose(SpeIMesh, _THREE$Mesh);

  function SpeIMesh(e, t) {
    var _this;

    _this = _THREE$Mesh.call(this, e, t) || this, _this.mLocalTransform = new THREE.Matrix4(), _this.mInteraction = 'function' == typeof Interaction ? new Interaction(_assertThisInitialized(_this)) : null;
    return _this;
  }

  var _proto2 = SpeIMesh.prototype;

  _proto2.updateGeometry = function updateGeometry(e) {
    this.geometry.copy(e);
  };

  _proto2.computeSingleBoundingBox = function computeSingleBoundingBox() {
    this.singleBoundingBox || (this.singleBoundingBox = new SPE.Box3()), this.singleBoundingBox.setFromObjectSize(this, !1), this.singleBoundingBox.computeVertices(), this.singleBoundingBox.computeEdges();
  };

  _proto2.computeComplexBoundingBox = function computeComplexBoundingBox(e) {
    this.complexBoundingBox || (this.complexBoundingBox = new SPE.Box3()), this.complexBoundingBox.setFromObjectSize(this, e);
  };

  _proto2.updateMatrixWorld = function updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.multiplyMatrices(this.mLocalTransform, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.mLocalTransform), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    var t = this.children;

    for (var i = 0, r = t.length; i < r; i++) {
      t[i].updateMatrixWorld(e);
    }
  };

  _proto2.updateWorldMatrix = function updateWorldMatrix(e, t) {
    var i = this.parent;
    if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.multiplyMatrices(this.mLocalTransform, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.mLocalTransform), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), !0 === t) for (var r = this.children, a = 0, s = r.length; a < s; a++) {
      r[a].updateWorldMatrix(!1, !0);
    }
  };

  _proto2.shallowClone = function shallowClone(e) {
    return new this.constructor(this.geometry, this.material).shallowCopy(this, e);
  };

  _proto2.shallowCopy = function shallowCopy(e, t) {
    if (t === void 0) {
      t = !0;
    }

    var i = e.children;
    if (e.children = [], _THREE$Mesh.prototype.copy.call(this, e), e.children = i, this.userDataFromJson(this.userData), !0 === t) for (var _t30 = 0, r = i.length; _t30 < r; ++_t30) {
      var _i27 = e.children[_t30];
      !0 === _i27.userData.isEntity && this.add(_i27.shallowClone());
    }
    return this;
  };

  _proto2.traverseEntity = function traverseEntity(e) {
    !function t(i) {
      if (!i.userData.isEntity) return;
      e(i);
      var r = i.children;

      for (var _e34 = 0, _i28 = r.length; _e34 < _i28; ++_e34) {
        t(r[_e34]);
      }
    }(this);
  };

  _proto2.userDataFromJson = function userDataFromJson(e) {
    this.userData = e, this.userData.positionToCenter = new THREE.Vector3(), void 0 !== e.hiddenMatrix && (this.userData.hiddenMatrix = new THREE.Matrix4().fromArray(e.hiddenMatrix.elements)), void 0 === e.lock && (this.userData.lock = !1);
  };

  _createClass(SpeIMesh, [{
    key: "interaction",
    get: function get() {
      return this.mInteraction;
    },
    set: function set(e) {
      this.mInteraction = e;
    }
  }, {
    key: "hiddenMatrix",
    get: function get() {
      return this.mLocalTransform;
    },
    set: function set(e) {
      this.mLocalTransform.copy(e);
    }
  }, {
    key: "visibility",
    set: function set(e) {
      this.visible = e;

      for (var t = 0, i = this.children.length; t < i; ++t) {
        void 0 !== this.children[t].traverseEntity && this.children[t].traverseEntity(function (t) {
          void 0 !== t.objectHelper && !0 === t.visible && (t.objectHelper.visible = e);
        });
      }
    },
    get: function get() {
      return this.visible;
    }
  }]);

  return SpeIMesh;
}(THREE.Mesh);

var SpeMesh3D = /*#__PURE__*/function (_SpeIMesh) {
  _inheritsLoose(SpeMesh3D, _SpeIMesh);

  function SpeMesh3D(e, t) {
    return _SpeIMesh.call(this, e, t) || this;
  }

  return SpeMesh3D;
}(SpeIMesh);

var SpeMesh2D = /*#__PURE__*/function (_SpeIMesh2) {
  _inheritsLoose(SpeMesh2D, _SpeIMesh2);

  function SpeMesh2D(e, t) {
    return _SpeIMesh2.call(this, e, t) || this;
  }

  return SpeMesh2D;
}(SpeIMesh);

var SpeEmptyObject = /*#__PURE__*/function (_THREE$Group) {
  _inheritsLoose(SpeEmptyObject, _THREE$Group);

  function SpeEmptyObject() {
    var _this2;

    _this2 = _THREE$Group.call(this) || this, _this2.mLocalTransform = new THREE.Matrix4(), _this2.mInteraction = 'function' == typeof Interaction ? new Interaction(_assertThisInitialized(_this2)) : null;
    return _this2;
  }

  var _proto3 = SpeEmptyObject.prototype;

  _proto3.updateMatrixWorld = function updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.multiplyMatrices(this.mLocalTransform, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.mLocalTransform), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    var t = this.children;

    for (var i = 0, r = t.length; i < r; i++) {
      t[i].updateMatrixWorld(e);
    }
  };

  _proto3.updateWorldMatrix = function updateWorldMatrix(e, t) {
    var i = this.parent;
    if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.multiplyMatrices(this.mLocalTransform, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.mLocalTransform), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), !0 === t) for (var r = this.children, a = 0, s = r.length; a < s; a++) {
      r[a].updateWorldMatrix(!1, !0);
    }
  };

  _createClass(SpeEmptyObject, [{
    key: "interaction",
    get: function get() {
      return this.mInteraction;
    },
    set: function set(e) {
      this.mInteraction = e;
    }
  }, {
    key: "hiddenMatrix",
    get: function get() {
      return this.mLocalTransform;
    },
    set: function set(e) {
      this.mLocalTransform.copy(e);
    }
  }]);

  return SpeEmptyObject;
}(THREE.Group);

var SpeLayer = /*#__PURE__*/function () {
  function SpeLayer(e, t, i) {
    if (t === void 0) {
      t = SPE_LAYER_TYPE_COLOR;
    }

    if (i === void 0) {
      i = {};
    }
    this.mId = e, this.mType = t, this.mNext = null, this.mDefines = {}, this.mUniforms = {}, this.mProgramVertUniforms = '', this.mProgramFragUniforms = '', this.initializeUniformsAndDefines(i);
  }

  var _proto4 = SpeLayer.prototype;

  _proto4.getValues = function getValues() {
    var e = "f" + this.mId + "_",
        t = {
      type: this.type
    };

    for (var _i29 = 0, _Object$entries5 = Object.entries(this.mUniforms); _i29 < _Object$entries5.length; _i29++) {
      var _Object$entries5$_i = _Object$entries5[_i29],
          i = _Object$entries5$_i[0],
          r = _Object$entries5$_i[1];
      var a = i.slice(i.indexOf(e) + e.length);
      r.value.toArray ? t[a] = r.value.toArray() : t[a] = r.value;
    }

    return t;
  };

  _proto4.initializeUniformsAndDefines = function initializeUniformsAndDefines(e) {
    console.error('SpeLayer::initializeUniformsAndDefines >>> virtual method');
  };

  _proto4.generateUniformsCodeVert = function generateUniformsCodeVert() {
    return '\n\r';
  };

  _proto4.generateUniformsCodeFrag = function generateUniformsCodeFrag() {
    return '\n\r';
  };

  _proto4.generateShaderCodeVert = function generateShaderCodeVert(e) {
    return '\n\r';
  };

  _proto4.generateShaderCodeFrag = function generateShaderCodeFrag(e) {
    return '\n\r';
  };

  _proto4.copy = function copy(e) {
    this.mType === e.mType ? (this.mId = e.mId, this.mDefines = _extends({}, e.mDefines), this.copyUniforms(e)) : console.error("SpeLayer::copy >>> cant copy layer of different type dst=" + this.mType + ", src=" + e.mType);
  };

  _proto4.clone = function clone() {
    return SpeLayer.CreateLayer(this.mId, this.mType, this.mUniforms);
  };

  _proto4.copyUniforms = function copyUniforms(e) {
    console.error('SpeLayer::copyUniforms >>> virtual method');
  };

  SpeLayer.CreateLayer = function CreateLayer(e, t, i) {
    return t === SPE_LAYER_TYPE_LIGHTING ? new SpeLayerLighting(e, i) : t === SPE_LAYER_TYPE_COLOR ? new SpeLayerColor(e, i) : t === SPE_LAYER_TYPE_GRADIENT ? new SpeLayerGradient(e, i) : t === SPE_LAYER_TYPE_NORMAL ? new SpeLayerNormal(e, i) : t === SPE_LAYER_TYPE_DEPTH ? new SpeLayerDepth(e, i) : t === SPE_LAYER_TYPE_TEXTURE ? new SpeLayerTexture(e, i) : t === SPE_LAYER_TYPE_NOISE ? new SpeLayerNoise(e, i) : t === SPE_LAYER_TYPE_FRESNEL ? new SpeLayerFresnel(e, i) : t === SPE_LAYER_TYPE_POINTS ? new SpeLayerPoints(e, i) : t === SPE_LAYER_TYPE_LINES ? new SpeLayerLines(e, i) : null;
  };

  SpeLayer.DictToUniforms = function DictToUniforms(e) {
    var t = {};

    for (var _i30 = 0, _Object$entries6 = Object.entries(e); _i30 < _Object$entries6.length; _i30++) {
      var _Object$entries6$_i = _Object$entries6[_i30],
          i = _Object$entries6$_i[0],
          r = _Object$entries6$_i[1];
      t[i] = {
        value: r
      };
    }

    return t;
  };

  _createClass(SpeLayer, [{
    key: "id",
    get: function get() {
      return this.mId;
    }
  }, {
    key: "type",
    get: function get() {
      return this.mType;
    }
  }, {
    key: "next",
    get: function get() {
      return this.mNext;
    },
    set: function set(e) {
      this.mNext = e;
    }
  }, {
    key: "defines",
    get: function get() {
      return this.mDefines;
    }
  }, {
    key: "uniforms",
    get: function get() {
      return this.mUniforms;
    }
  }, {
    key: "paramNames",
    get: function get() {
      var e = Object.keys(this.mUniforms),
          t = "f" + this.mId + "_",
          i = [];

      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        i.push(a.slice(a.indexOf(t) + t.length));
      }

      return i;
    }
  }]);

  return SpeLayer;
}();

var SpeLayerLighting = /*#__PURE__*/function (_SpeLayer) {
  _inheritsLoose(SpeLayerLighting, _SpeLayer);

  function SpeLayerLighting(e, t) {
    return _SpeLayer.call(this, e, SPE_LAYER_TYPE_LIGHTING, t) || this;
  }

  var _proto5 = SpeLayerLighting.prototype;

  _proto5.initializeUniformsAndDefines = function initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_LIGHTING = '', this.mUniforms["f" + this.mId + "_alpha"] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    };
  };

  _proto5.generateUniformsCodeFrag = function generateUniformsCodeFrag() {
    return "\n            // SPE: Lighting layer uniforms *****\n            uniform float f" + this.mId + "_alpha;\n            uniform int f" + this.mId + "_mode;\n            // **********************************\n        ";
  };

  _proto5.generateShaderCodeFrag = function generateShaderCodeFrag() {
    return "\n            // SPE: Lighting layer frag-shader-code ************************************************\n            // @todo: instead of == use absolute distance for vector comparison\n            if ( outgoingLight != diffuseColor.rgb ) {\n                float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );\n                accumAlpha += ( 1.0 - accumAlpha ) * f" + this.mId + "_alpha * lightAccu;\n                outgoingLight = spe_blend( diffuseColor.rgb, outgoingLight, f" + this.mId + "_alpha, f" + this.mId + "_mode );\n            }\n            // *************************************************************************************\n        ";
  };

  _proto5.copyUniforms = function copyUniforms(e) {
    e instanceof SpeLayerLighting && (this.mUniforms["f" + this.mId + "_alpha"] = {
      value: e.uniforms["f" + e.id + "_alpha"].value
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: e.uniforms["f" + e.id + "_mode"].value
    });
  };

  return SpeLayerLighting;
}(SpeLayer);

var SpeLayerColor = /*#__PURE__*/function (_SpeLayer2) {
  _inheritsLoose(SpeLayerColor, _SpeLayer2);

  function SpeLayerColor(e, t) {
    return _SpeLayer2.call(this, e, SPE_LAYER_TYPE_COLOR, t) || this;
  }

  var _proto6 = SpeLayerColor.prototype;

  _proto6.initializeUniformsAndDefines = function initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_COLOR = '', this.mUniforms["f" + this.mId + "_alpha"] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms["f" + this.mId + "_color"] = {
      value: void 0 !== e.color ? new THREE.Color(e.color.value) : new THREE.Color(SPE_COLOR_DEFAULT)
    };
  };

  _proto6.generateUniformsCodeFrag = function generateUniformsCodeFrag() {
    return "\n            // SPE: Color layer uniforms **********\n            uniform float f" + this.mId + "_alpha;\n            uniform int f" + this.mId + "_mode;\n            uniform vec3 f" + this.mId + "_color;\n            // ************************************\n        ";
  };

  _proto6.generateShaderCodeFrag = function generateShaderCodeFrag(e) {
    return "\n            // SPE: Color layer frag-shader-code ***************************************************\n            float f" + this.mId + "_calpha = f" + this.mId + "_alpha / clamp( f" + this.mId + "_alpha + accumAlpha, 0.00001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f" + this.mId + "_alpha;\n            " + e + " = spe_blend( " + e + ", f" + this.mId + "_color, f" + this.mId + "_calpha, f" + this.mId + "_mode );\n            // *************************************************************************************\n        ";
  };

  _proto6.copyUniforms = function copyUniforms(e) {
    e instanceof SpeLayerColor && (this.mUniforms["f" + this.mId + "_alpha"] = {
      value: e.uniforms["f" + e.id + "_alpha"].value
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: e.uniforms["f" + e.id + "_mode"].value
    }, this.mUniforms["f" + this.mId + "_color"] = {
      value: e.uniforms["f" + e.id + "_color"].value.clone()
    });
  };

  return SpeLayerColor;
}(SpeLayer);

var SpeLayerTexture = /*#__PURE__*/function (_SpeLayer3) {
  _inheritsLoose(SpeLayerTexture, _SpeLayer3);

  function SpeLayerTexture(e, t) {
    return _SpeLayer3.call(this, e, SPE_LAYER_TYPE_TEXTURE, t) || this;
  }

  var _proto7 = SpeLayerTexture.prototype;

  _proto7.initializeUniformsAndDefines = function initializeUniformsAndDefines(e) {
    var t;
    this.mDefines.SPE_USE_LAYER_TEXTURE = '', this.mDefines.USE_UV = '', this.mUniforms["f" + this.mId + "_alpha"] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms["f" + this.mId + "_texture"] = {
      value: void 0 !== e.texture ? (t = e.texture.value, t instanceof THREE.Texture ? t : 'string' == typeof t ? function (e) {
        var t = new Image();
        t.src = e;
        var i = new THREE.Texture(t);
        return i.needsUpdate = !0, i;
      }(t) : (console.error('SpeLayerTexture::get_texture >>> cant retrieve texture from given parameters'), new THREE.Texture())) : new THREE.Texture()
    }, this.mUniforms["f" + this.mId + "_mat"] = {
      value: void 0 !== e.mat ? this.mUniforms["f" + this.mId + "_texture"].value.matrix.fromArray(void 0 !== e.mat.value.elements ? e.mat.value.elements : e.mat.value) : this.mUniforms["f" + this.mId + "_texture"].value.matrix
    }, this.mUniforms["f" + this.mId + "_crop"] = {
      value: void 0 !== e.crop ? e.crop.value : 0
    };
  };

  _proto7.generateUniformsCodeFrag = function generateUniformsCodeFrag() {
    return "\n            // SPE: Texture layer uniforms ********\n            uniform float f" + this.mId + "_alpha;\n            uniform int f" + this.mId + "_mode;\n            uniform sampler2D f" + this.mId + "_texture;\n            uniform mat3 f" + this.mId + "_mat;\n            uniform float f" + this.mId + "_crop;\n            // ************************************\n        ";
  };

  _proto7.generateShaderCodeFrag = function generateShaderCodeFrag(e) {
    return "\n            // SPE: Texture layer frag-shader-code *************************************************\n            vec2 f" + this.mId + "_vUv = ( f" + this.mId + "_mat * vec3( vUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;\n            vec4 f" + this.mId + "_tmp = texture2D( f" + this.mId + "_texture, f" + this.mId + "_vUv );\n            vec3 f" + this.mId + "_col = f" + this.mId + "_tmp.rgb;\n            float f" + this.mId + "_lalpha = f" + this.mId + "_alpha * f" + this.mId + "_tmp.a;\n            if ( f" + this.mId + "_crop > 0.5 ) {\n                if ( f" + this.mId + "_vUv.x < 0.0 || f" + this.mId + "_vUv.x > 1.0 ||\n                     f" + this.mId + "_vUv.y < 0.0 || f" + this.mId + "_vUv.y > 1.0 ) {\n                        f" + this.mId + "_lalpha = 0.0;\n                }\n            }\n            float f" + this.mId + "_calpha =  f" + this.mId + "_lalpha / clamp( f" + this.mId + "_lalpha + accumAlpha, 0.00001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f" + this.mId + "_lalpha;\n            " + e + " = spe_blend( " + e + ", f" + this.mId + "_col, f" + this.mId + "_calpha, f" + this.mId + "_mode );\n            // *************************************************************************************\n        ";
  };

  _proto7.copyUniforms = function copyUniforms(e) {
    e instanceof SpeLayerTexture && (this.mUniforms["f" + this.mId + "_alpha"] = {
      value: e.uniforms["f" + e.id + "_alpha"].value
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: e.uniforms["f" + e.id + "_mode"].value
    }, this.mUniforms["f" + this.mId + "_texture"] = {
      value: e.uniforms["f" + e.id + "_texture"].value.clone()
    }, this.mUniforms["f" + this.mId + "_mat"] = {
      value: this.mUniforms["f" + this.mId + "_texture"].value.matrix
    }, this.mUniforms["f" + this.mId + "_crop"] = {
      value: e.uniforms["f" + e.id + "_crop"].value
    });
  };

  SpeLayerTexture.DictToUniforms = function DictToUniforms(e) {
    return {
      alpha: {
        value: e.alpha
      },
      mode: {
        value: e.mode
      },
      texture: {
        value: e.texture
      },
      mat: {
        value: e.texture.matrix
      },
      crop: {
        value: e.crop
      }
    };
  };

  return SpeLayerTexture;
}(SpeLayer);

var SpeLayerNormal = /*#__PURE__*/function (_SpeLayer4) {
  _inheritsLoose(SpeLayerNormal, _SpeLayer4);

  function SpeLayerNormal(e, t) {
    return _SpeLayer4.call(this, e, SPE_LAYER_TYPE_NORMAL, t) || this;
  }

  var _proto8 = SpeLayerNormal.prototype;

  _proto8.initializeUniformsAndDefines = function initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_NORMAL = '', this.mUniforms["f" + this.mId + "_alpha"] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms["f" + this.mId + "_cnormal"] = {
      value: void 0 !== e.cnormal ? new THREE.Vector3().fromArray(e.cnormal.value) : new THREE.Vector3(1, 1, 1)
    };
  };

  _proto8.generateUniformsCodeFrag = function generateUniformsCodeFrag() {
    return "\n            // SPE: Normal layer uniforms ********\n            uniform float f" + this.mId + "_alpha;\n            uniform int f" + this.mId + "_mode;\n            uniform vec3 f" + this.mId + "_cnormal;\n            // ***********************************\n        ";
  };

  _proto8.generateShaderCodeFrag = function generateShaderCodeFrag(e) {
    return "\n            // SPE: Normal layer frag-shader-code **************************************************\n            vec3 f" + this.mId + "_normal = packNormalToRGB( normal ).rgb;\n            f" + this.mId + "_normal *= step( vec3(0.5), f" + this.mId + "_cnormal );\n            float f" + this.mId + "_calpha = f" + this.mId + "_alpha / clamp( f" + this.mId + "_alpha + accumAlpha, 0.00001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f" + this.mId + "_alpha;\n            " + e + " = spe_blend( " + e + ", f" + this.mId + "_normal, f" + this.mId + "_calpha, f" + this.mId + "_mode );\n            // *************************************************************************************\n        ";
  };

  _proto8.copyUniforms = function copyUniforms(e) {
    e instanceof SpeLayerNormal && (this.mUniforms["f" + this.mId + "_alpha"] = {
      value: e.uniforms["f" + e.id + "_alpha"].value
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: e.uniforms["f" + e.id + "_mode"].value
    }, this.mUniforms["f" + this.mId + "_cnormal"] = {
      value: e.uniforms["f" + e.id + "_cnormal"].value.clone()
    });
  };

  return SpeLayerNormal;
}(SpeLayer);

var SpeLayerDepth = /*#__PURE__*/function (_SpeLayer5) {
  _inheritsLoose(SpeLayerDepth, _SpeLayer5);

  function SpeLayerDepth(e, t) {
    return _SpeLayer5.call(this, e, SPE_LAYER_TYPE_DEPTH, t) || this;
  }

  var _proto9 = SpeLayerDepth.prototype;

  _proto9.initializeUniformsAndDefines = function initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_DEPTH = '', this.mUniforms["f" + this.mId + "_alpha"] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms["f" + this.mId + "_near"] = {
      value: void 0 !== e.near ? e.near.value : 700
    }, this.mUniforms["f" + this.mId + "_far"] = {
      value: void 0 !== e.far ? e.far.value : 1e3
    }, this.mUniforms["f" + this.mId + "_origin"] = {
      value: void 0 !== e.origin ? new THREE.Vector3().fromArray(e.origin.value) : new THREE.Vector3()
    }, this.mUniforms["f" + this.mId + "_isVector"] = {
      value: void 0 !== e.isVector ? e.isVector.value : 0
    }, this.mUniforms["f" + this.mId + "_colorA"] = {
      value: e.colorA ? new THREE.Color(e.colorA.value) : new THREE.Color()
    }, this.mUniforms["f" + this.mId + "_colorB"] = {
      value: e.colorB ? new THREE.Color(e.colorB.value) : new THREE.Color(0, 0, 0)
    };
  };

  _proto9.generateUniformsCodeFrag = function generateUniformsCodeFrag() {
    return "\n            // SPE: Depth layer uniforms *************\n            uniform float f" + this.mId + "_alpha;\n            uniform int f" + this.mId + "_mode;\n            uniform float f" + this.mId + "_near;\n            uniform float f" + this.mId + "_far;\n            uniform float f" + this.mId + "_isVector;\n            uniform vec3 f" + this.mId + "_origin;\n            uniform vec3 f" + this.mId + "_colorA;\n            uniform vec3 f" + this.mId + "_colorB;\n            // ***************************************\n        ";
  };

  _proto9.generateShaderCodeFrag = function generateShaderCodeFrag(e) {
    return "\n            // SPE: Depth layer frag-shader-code ***************************************************\n            vec3 base" + this.mId + " = ( f" + this.mId + "_isVector > 0.5 ) ?  f" + this.mId + "_origin : cameraPosition;\n            float dist" + this.mId + " = length( dWorldPosition.xyz - base" + this.mId + " );\n            float dep" + this.mId + " = ( dist" + this.mId + " - f" + this.mId + "_near ) / ( f" + this.mId + "_far - f" + this.mId + "_near );\n            vec3 f" + this.mId + "_depth =  mix( f" + this.mId + "_colorB, f" + this.mId + "_colorA, 1.0 - clamp( dep" + this.mId + ", 0., 1. ) );\n            float f" + this.mId + "_calpha = f" + this.mId + "_alpha / clamp( f" + this.mId + "_alpha + accumAlpha, 0.001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f" + this.mId + "_alpha;\n            " + e + " = spe_blend( " + e + ", f" + this.mId + "_depth, f" + this.mId + "_calpha, f" + this.mId + "_mode );\n            // *************************************************************************************\n        ";
  };

  _proto9.copyUniforms = function copyUniforms(e) {
    e instanceof SpeLayerDepth && (this.mUniforms["f" + this.mId + "_alpha"] = {
      value: e.uniforms["f" + e.id + "_alpha"].value
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: e.uniforms["f" + e.id + "_mode"].value
    }, this.mUniforms["f" + this.mId + "_near"] = {
      value: e.uniforms["f" + e.id + "_near"].value
    }, this.mUniforms["f" + this.mId + "_far"] = {
      value: e.uniforms["f" + e.id + "_far"].value
    }, this.mUniforms["f" + this.mId + "_origin"] = {
      value: e.uniforms["f" + e.id + "_origin"].value.clone()
    }, this.mUniforms["f" + this.mId + "_isVector"] = {
      value: e.uniforms["f" + e.id + "_isVector"].value
    }, this.mUniforms["f" + this.mId + "_colorA"] = {
      value: e.uniforms["f" + e.id + "_colorA"].value.clone()
    }, this.mUniforms["f" + this.mId + "_colorB"] = {
      value: e.uniforms["f" + e.id + "_colorB"].value.clone()
    });
  };

  return SpeLayerDepth;
}(SpeLayer);

var SpeLayerNoise = /*#__PURE__*/function (_SpeLayer6) {
  _inheritsLoose(SpeLayerNoise, _SpeLayer6);

  function SpeLayerNoise(e, t) {
    return _SpeLayer6.call(this, e, SPE_LAYER_TYPE_NOISE, t) || this;
  }

  var _proto10 = SpeLayerNoise.prototype;

  _proto10.initializeUniformsAndDefines = function initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_NOISE = '', this.mDefines.SPE_USE_LAYER_TEXTURE = '', this.mDefines.SPE_NOISE_NUM_OCTAVES = '5', this.mDefines.USE_UV = '', this.mUniforms["f" + this.mId + "_alpha"] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms["f" + this.mId + "_scale"] = {
      value: void 0 !== e.scale ? e.scale.value : 2
    }, this.mUniforms["f" + this.mId + "_move"] = {
      value: void 0 !== e.move ? e.move.value : 1
    }, this.mUniforms["f" + this.mId + "_distortion"] = {
      value: void 0 !== e.distortion ? new THREE.Vector2().fromArray(e.distortion.value) : new THREE.Vector2(1, 1)
    }, this.mUniforms["f" + this.mId + "_fA"] = {
      value: void 0 !== e.fA ? new THREE.Vector2().fromArray(e.fA.value) : new THREE.Vector2(1.7, 9.2)
    }, this.mUniforms["f" + this.mId + "_fB"] = {
      value: void 0 !== e.fB ? new THREE.Vector2().fromArray(e.fB.value) : new THREE.Vector2(8.3, 2.8)
    }, this.mUniforms["f" + this.mId + "_colorA"] = {
      value: void 0 !== e.colorA ? new THREE.Color(e.colorA.value) : new THREE.Color(0.4, 0.4, 0.4)
    }, this.mUniforms["f" + this.mId + "_colorB"] = {
      value: void 0 !== e.colorB ? new THREE.Color(e.colorB.value) : new THREE.Color(0.4, 0.4, 0.4)
    }, this.mUniforms["f" + this.mId + "_colorC"] = {
      value: void 0 !== e.colorC ? new THREE.Color(e.colorC.value) : new THREE.Color(1, 1, 1)
    }, this.mUniforms["f" + this.mId + "_colorD"] = {
      value: void 0 !== e.colorD ? new THREE.Color(e.colorD.value) : new THREE.Color(1, 1, 1)
    }, this.mUniforms["f" + this.mId + "_intA"] = {
      value: void 0 !== e.intA ? e.intA.value : 10
    }, this.mUniforms["f" + this.mId + "_intB"] = {
      value: void 0 !== e.intB ? e.intB.value : 10
    }, this.mUniforms["f" + this.mId + "_intC"] = {
      value: void 0 !== e.intC ? e.intC.value : 10
    }, this.mUniforms["f" + this.mId + "_intD"] = {
      value: void 0 !== e.intD ? e.intD.value : 10
    };
  };

  _proto10.generateUniformsCodeFrag = function generateUniformsCodeFrag() {
    return "\n            // SPE: Noise layer uniforms *******************\n            uniform float f" + this.mId + "_alpha;\n            uniform int f" + this.mId + "_mode;\n            uniform float f" + this.mId + "_scale;\n            uniform float f" + this.mId + "_move;\n            uniform vec2 f" + this.mId + "_fA;\n            uniform vec2 f" + this.mId + "_fB;\n            uniform vec2 f" + this.mId + "_distortion;\n            uniform vec3 f" + this.mId + "_colorA;\n            uniform vec3 f" + this.mId + "_colorB;\n            uniform vec3 f" + this.mId + "_colorC;\n            uniform vec3 f" + this.mId + "_colorD;\n            uniform float f" + this.mId + "_intA;\n            uniform float f" + this.mId + "_intB;\n            uniform float f" + this.mId + "_intC;\n            uniform float f" + this.mId + "_intD;\n            // *********************************************\n        ";
  };

  _proto10.generateShaderCodeFrag = function generateShaderCodeFrag(e) {
    return "\n            // SPE: Noise layer frag-shader-code ***************************************************\n            vec2 f" + this.mId + "_st = vUv * f" + this.mId + "_scale;\n            vec3 f" + this.mId + "_color;\n            vec2 f" + this.mId + "_q = vec2( fbm( f" + this.mId + "_st ), fbm( f" + this.mId + "_st + vec2(1.0) ) );\n            vec2 f" + this.mId + "_r = vec2( fbm( f" + this.mId + "_st + f" + this.mId + "_distortion * f" + this.mId + "_q + f" + this.mId + "_fA + f" + this.mId + "_move ),\n                                        fbm( f" + this.mId + "_st + f" + this.mId + "_distortion * f" + this.mId + "_q + f" + this.mId + "_fB + f" + this.mId + "_move ) );\n            float f" + this.mId + "_f = fbm( f" + this.mId + "_st + f" + this.mId + "_r );\n            f" + this.mId + "_color = mix( f" + this.mId + "_colorA * f" + this.mId + "_intA, f" + this.mId + "_colorB * f" + this.mId + "_intB,\n                         clamp((f" + this.mId + "_f*f" + this.mId + "_f)*4.0,0.0,1.0) );\n            f" + this.mId + "_color = mix( f" + this.mId + "_color, f" + this.mId + "_colorC * f" + this.mId + "_intC,\n                         clamp( length(f" + this.mId + "_q), 0.0, 1.0 ) );\n            f" + this.mId + "_color = mix( f" + this.mId + "_color, f" + this.mId + "_colorD * f" + this.mId + "_intD,\n                         clamp( length(f" + this.mId + "_r.x), 0.0, 1.0 ) );\n            vec3 f" + this.mId + "_noise = clamp( vec3( f" + this.mId + "_f * f" + this.mId + "_color ), 0.0, 1.0 );\n            float f" + this.mId + "_calpha = f" + this.mId + "_alpha / clamp( f" + this.mId + "_alpha + accumAlpha, 0.001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f" + this.mId + "_alpha;\n            " + e + " = spe_blend( " + e + ", f" + this.mId + "_noise, f" + this.mId + "_calpha, f" + this.mId + "_mode );\n            // *************************************************************************************\n        ";
  };

  _proto10.copyUniforms = function copyUniforms(e) {
    e instanceof SpeLayerNoise && (this.mUniforms["f" + this.mId + "_alpha"] = {
      value: e.uniforms["f" + e.id + "_alpha"].value
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: e.uniforms["f" + e.id + "_mode"].value
    }, this.mUniforms["f" + this.mId + "_scale"] = {
      value: e.uniforms["f" + e.id + "_scale"].value
    }, this.mUniforms["f" + this.mId + "_move"] = {
      value: e.uniforms["f" + e.id + "_move"].value
    }, this.mUniforms["f" + this.mId + "_distortion"] = {
      value: e.uniforms["f" + e.id + "_distortion"].value.clone()
    }, this.mUniforms["f" + this.mId + "_fA"] = {
      value: e.uniforms["f" + e.id + "_fA"].value.clone()
    }, this.mUniforms["f" + this.mId + "_fB"] = {
      value: e.uniforms["f" + e.id + "_fB"].value.clone()
    }, this.mUniforms["f" + this.mId + "_colorA"] = {
      value: e.uniforms["f" + e.id + "_colorA"].value.clone()
    }, this.mUniforms["f" + this.mId + "_colorB"] = {
      value: e.uniforms["f" + e.id + "_colorB"].value.clone()
    }, this.mUniforms["f" + this.mId + "_colorC"] = {
      value: e.uniforms["f" + e.id + "_colorC"].value.clone()
    }, this.mUniforms["f" + this.mId + "_colorD"] = {
      value: e.uniforms["f" + e.id + "_colorD"].value.clone()
    }, this.mUniforms["f" + this.mId + "_intA"] = {
      value: e.uniforms["f" + e.id + "_intA"].value
    }, this.mUniforms["f" + this.mId + "_intB"] = {
      value: e.uniforms["f" + e.id + "_intB"].value
    }, this.mUniforms["f" + this.mId + "_intC"] = {
      value: e.uniforms["f" + e.id + "_intC"].value
    }, this.mUniforms["f" + this.mId + "_intD"] = {
      value: e.uniforms["f" + e.id + "_intD"].value
    });
  };

  return SpeLayerNoise;
}(SpeLayer);

var SpeLayerFresnel = /*#__PURE__*/function (_SpeLayer7) {
  _inheritsLoose(SpeLayerFresnel, _SpeLayer7);

  function SpeLayerFresnel(e, t) {
    return _SpeLayer7.call(this, e, SPE_LAYER_TYPE_FRESNEL, t) || this;
  }

  var _proto11 = SpeLayerFresnel.prototype;

  _proto11.initializeUniformsAndDefines = function initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_FRESNEL = '', this.mUniforms["f" + this.mId + "_alpha"] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms["f" + this.mId + "_bias"] = {
      value: void 0 !== e.bias ? e.bias.value : 0.1
    }, this.mUniforms["f" + this.mId + "_scale"] = {
      value: void 0 !== e.scale ? e.scale.value : 1
    }, this.mUniforms["f" + this.mId + "_intensity"] = {
      value: void 0 !== e.intensity ? e.intensity.value : 2
    }, this.mUniforms["f" + this.mId + "_factor"] = {
      value: void 0 !== e.factor ? e.factor.value : 1
    }, this.mUniforms["f" + this.mId + "_color"] = {
      value: void 0 !== e.color ? new THREE.Color(e.color.value) : new THREE.Color()
    };
  };

  _proto11.generateUniformsCodeFrag = function generateUniformsCodeFrag() {
    return "\n            // SPE: Fresnel layer uniforms *********\n            uniform float f" + this.mId + "_alpha;\n            uniform int f" + this.mId + "_mode;\n            uniform float f" + this.mId + "_bias;\n            uniform float f" + this.mId + "_scale;\n            uniform float f" + this.mId + "_intensity;\n            uniform float f" + this.mId + "_factor;\n            uniform vec3 f" + this.mId + "_color;\n            // *************************************\n        ";
  };

  _proto11.generateShaderCodeFrag = function generateShaderCodeFrag(e) {
    return "\n            // SPE: Fresnel layer frag-shader-code *************************************************\n            float f" + this.mId + "_fresnel = f" + this.mId + "_bias + f" + this.mId + "_scale * pow( f" + this.mId + "_factor + dot( normalize( vWorldViewDir ), normalize( vWorldNormal ) ), f" + this.mId + "_intensity );\n            float f" + this.mId + "_lalpha = clamp( f" + this.mId + "_fresnel, 0.0, 1.0 ) * f" + this.mId + "_alpha;\n            float f" + this.mId + "_calpha = f" + this.mId + "_lalpha / clamp( f" + this.mId + "_lalpha + accumAlpha, 0.001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f" + this.mId + "_lalpha;\n            " + e + " = spe_blend( " + e + ", f" + this.mId + "_color, f" + this.mId + "_calpha, f" + this.mId + "_mode );\n            // *************************************************************************************\n        ";
  };

  _proto11.copyUniforms = function copyUniforms(e) {
    e instanceof SpeLayerFresnel && (this.mUniforms["f" + this.mId + "_alpha"] = {
      value: e.uniforms["f" + e.id + "_alpha"].value
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: e.uniforms["f" + e.id + "_mode"].value
    }, this.mUniforms["f" + this.mId + "_bias"] = {
      value: e.uniforms["f" + e.id + "_bias"].value
    }, this.mUniforms["f" + this.mId + "_scale"] = {
      value: e.uniforms["f" + e.id + "_scale"].value
    }, this.mUniforms["f" + this.mId + "_intensity"] = {
      value: e.uniforms["f" + e.id + "_intensity"].value
    }, this.mUniforms["f" + this.mId + "_factor"] = {
      value: e.uniforms["f" + e.id + "_factor"].value
    }, this.mUniforms["f" + this.mId + "_color"] = {
      value: e.uniforms["f" + e.id + "_color"].value.clone()
    });
  };

  return SpeLayerFresnel;
}(SpeLayer);

var SpeLayerGradient = /*#__PURE__*/function (_SpeLayer8) {
  _inheritsLoose(SpeLayerGradient, _SpeLayer8);

  function SpeLayerGradient(e, t) {
    return _SpeLayer8.call(this, e, SPE_LAYER_TYPE_GRADIENT, t) || this;
  }

  var _proto12 = SpeLayerGradient.prototype;

  _proto12.initializeUniformsAndDefines = function initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_GRADIENT = '', this.mDefines.SPE_GRADIENT_MAX_SIZE = '10', this.mDefines.USE_UV = '', this.mUniforms["f" + this.mId + "_alpha"] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms["f" + this.mId + "_gl_type"] = {
      value: void 0 !== e.gl_type ? e.gl_type.value : 0
    }, this.mUniforms["f" + this.mId + "_num"] = {
      value: void 0 !== e.num ? e.num.value : 2
    }, this.mUniforms["f" + this.mId + "_smooth"] = {
      value: void 0 !== e.smooth && e.smooth.value
    }, this.mUniforms["f" + this.mId + "_colors"] = {
      value: function (e) {
        var t = [];

        for (var i = 0; i < Math.floor(e.length / 4); i++) {
          t.push(new THREE.Vector4(e[4 * i + 0], e[4 * i + 1], e[4 * i + 2], e[4 * i + 3]));
        }

        return t;
      }(void 0 !== e.colors ? e.colors.value : new Array(40).fill())
    }, this.mUniforms["f" + this.mId + "_steps"] = {
      value: void 0 !== e.steps ? e.steps.value : new Array(10).fill()
    }, this.mUniforms["f" + this.mId + "_offset"] = {
      value: void 0 !== e.offset ? new THREE.Vector2().fromArray(e.offset.value) : new THREE.Vector2(0, 0)
    }, this.mUniforms["f" + this.mId + "_morph"] = {
      value: void 0 !== e.morph ? new THREE.Vector2().fromArray(e.morph.value) : new THREE.Vector2(0, 0)
    }, this.mUniforms["f" + this.mId + "_angle"] = {
      value: void 0 !== e.angle ? e.angle.value : 0
    };
  };

  _proto12.generateUniformsCodeFrag = function generateUniformsCodeFrag() {
    return "\n            // SPE: Gradient layer uniforms ****************\n            uniform float f" + this.mId + "_alpha;\n            uniform int f" + this.mId + "_mode;\n            uniform int f" + this.mId + "_gl_type;\n            uniform int f" + this.mId + "_num;\n            uniform bool f" + this.mId + "_smooth;\n            uniform vec4 f" + this.mId + "_colors[SPE_GRADIENT_MAX_SIZE];\n            uniform float f" + this.mId + "_steps[SPE_GRADIENT_MAX_SIZE];\n            uniform vec2 f" + this.mId + "_offset;\n            uniform vec2 f" + this.mId + "_morph;\n            uniform float f" + this.mId + "_angle;\n            // *********************************************\n        ";
  };

  _proto12.generateShaderCodeFrag = function generateShaderCodeFrag(e) {
    return "\n            // SPE: Gradient layer frag-shader-code ************************************************\n            vec4 f" + this.mId + "_color = f" + this.mId + "_colors[0];\n            vec2 f" + this.mId + "_m = f" + this.mId + "_morph / vUv.xy;\n            vec2 f" + this.mId + "_rot = vec2( 0.5 + f" + this.mId + "_m.x, f" + this.mId + "_m.y );\n            vec2 f" + this.mId + "_dt = vec2(\n                cos( f" + this.mId + "_angle ) * f" + this.mId + "_rot.x - sin( f" + this.mId + "_angle ) * f" + this.mId + "_rot.y,\n                sin( f" + this.mId + "_angle ) * f" + this.mId + "_rot.x + cos( f" + this.mId + "_angle ) * f" + this.mId + "_rot.y\n            );\n            vec2 f" + this.mId + "_pt = ( vUv - 0.5 + f" + this.mId + "_offset ) / 2.0 + f" + this.mId + "_dt / 2.0;\n            float f" + this.mId + "_t = dot( f" + this.mId + "_pt, f" + this.mId + "_dt ) / dot( f" + this.mId + "_dt, f" + this.mId + "_dt );\n            if ( f" + this.mId + "_gl_type == 1 ) {\n                f" + this.mId + "_t = distance (\n                    ( vUv + f" + this.mId + "_morph ) * 3.0,\n                    ( vUv + f" + this.mId + "_offset ) + 1.0\n                ) + f" + this.mId + "_angle;\n            } else if ( f" + this.mId + "_gl_type == 2 ) {\n                float f" + this.mId + "_polar = atan(\n                    vUv.x + f" + this.mId + "_morph.x - 0.5 + f" + this.mId + "_offset.x,\n                    vUv.y + f" + this.mId + "_morph.y - 0.5 + f" + this.mId + "_offset.y\n                ) * -1.0;\n                f" + this.mId + "_t = fract( ( f" + this.mId + "_angle / PI / -2.0 ) + 0.5 * ( f" + this.mId + "_polar / PI ) );\n            }\n            float f" + this.mId + "_p;\n            for ( int i = 1; i < SPE_GRADIENT_MAX_SIZE; i++ ) {\n                if ( i < f" + this.mId + "_num ) {\n                    f" + this.mId + "_p = clamp( ( f" + this.mId + "_t - f" + this.mId + "_steps[i-1] ) / ( f" + this.mId + "_steps[i] - f" + this.mId + "_steps[i-1] ), 0.0, 1.0 );\n                    f" + this.mId + "_color = mix( f" + this.mId + "_color, f" + this.mId + "_colors[i],\n                        ( f" + this.mId + "_smooth ) ? smoothstep( 0.0, 1.0, f" + this.mId + "_p ) : f" + this.mId + "_p\n                    );\n                } else {\n                    break;\n                }\n            }\n            float f" + this.mId + "_lalpha = f" + this.mId + "_alpha * f" + this.mId + "_color.a;\n            float f" + this.mId + "_calpha =  f" + this.mId + "_lalpha / clamp( f" + this.mId + "_lalpha + accumAlpha, 0.00001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f" + this.mId + "_lalpha;\n            " + e + " = spe_blend( " + e + ", f" + this.mId + "_color.xyz, f" + this.mId + "_calpha, f" + this.mId + "_mode );\n            // *************************************************************************************\n        ";
  };

  _proto12.getValues = function getValues() {
    var e = {
      type: this.type
    };
    return e.alpha = this.mUniforms["f" + this.mId + "_alpha"].value, e.mode = this.mUniforms["f" + this.mId + "_mode"].value, e.gl_type = this.mUniforms["f" + this.mId + "_gl_type"].value, e.num = this.mUniforms["f" + this.mId + "_num"].value, e.smooth = this.mUniforms["f" + this.mId + "_smooth"].value, e.colors = function (e) {
      var t = [];

      for (var i = 0; i < e.length; i++) {
        t.push(e[i].x, e[i].y, e[i].z, e[i].w);
      }

      return t;
    }(this.mUniforms["f" + this.mId + "_colors"].value), e.steps = [].concat(this.mUniforms["f" + this.mId + "_steps"].value), e.offset = this.mUniforms["f" + this.mId + "_offset"].value.toArray(), e.morph = this.mUniforms["f" + this.mId + "_morph"].value.toArray(), e.angle = this.mUniforms["f" + this.mId + "_angle"].value, e;
  };

  _proto12.copyUniforms = function copyUniforms(e) {
    e instanceof SpeLayerGradient && (this.mUniforms["f" + this.mId + "_alpha"] = {
      value: e.uniforms["f" + e.id + "_alpha"].value
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: e.uniforms["f" + e.id + "_mode"].value
    }, this.mUniforms["f" + this.mId + "_gl_type"] = {
      value: e.uniforms["f" + e.id + "_gl_type"].value
    }, this.mUniforms["f" + this.mId + "_num"] = {
      value: e.uniforms["f" + e.id + "_num"].value
    }, this.mUniforms["f" + this.mId + "_smooth"] = {
      value: e.uniforms["f" + e.id + "_smooth"].value
    }, this.mUniforms["f" + this.mId + "_colors"] = {
      value: function (e) {
        var t = [];

        for (var i = 0; i < e.length; i++) {
          t.push(e[i].clone());
        }

        return t;
      }(e.uniforms["f" + e.id + "_colors"].value)
    }, this.mUniforms["f" + this.mId + "_steps"] = {
      value: [].concat(e.uniforms["f" + e.id + "_steps"].value)
    }, this.mUniforms["f" + this.mId + "_offset"] = {
      value: e.uniforms["f" + e.id + "_offset"].value.clone()
    }, this.mUniforms["f" + this.mId + "_morph"] = {
      value: e.uniforms["f" + e.id + "_morph"].value.clone()
    }, this.mUniforms["f" + this.mId + "_angle"] = {
      value: e.uniforms["f" + e.id + "_angle"].value
    });
  };

  return SpeLayerGradient;
}(SpeLayer);

var SpeLayerPoints = /*#__PURE__*/function (_SpeLayer9) {
  _inheritsLoose(SpeLayerPoints, _SpeLayer9);

  function SpeLayerPoints(e, t) {
    return _SpeLayer9.call(this, e, SPE_LAYER_TYPE_POINTS, t) || this;
  }

  var _proto13 = SpeLayerPoints.prototype;

  _proto13.initializeUniformsAndDefines = function initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_POINTS = '', this.mUniforms["f" + this.mId + "_alpha"] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms["f" + this.mId + "_color"] = {
      value: void 0 !== e.color ? new THREE.Color(e.color.value) : new THREE.Color(12237498)
    }, this.mUniforms["f" + this.mId + "_useBack"] = {
      value: void 0 === e.useBack || e.useBack.value
    }, this.mUniforms["f" + this.mId + "_threshold"] = {
      value: void 0 !== e.threshold ? e.threshold.value : 0.9
    };
  };

  _proto13.generateUniformsCodeFrag = function generateUniformsCodeFrag() {
    return "\n            // SPE: Points layer uniforms **************\n            uniform float f" + this.mId + "_alpha;\n            uniform int f" + this.mId + "_mode;\n            uniform vec3 f" + this.mId + "_color;\n            uniform bool f" + this.mId + "_useBack;\n            uniform float f" + this.mId + "_threshold;\n            // *****************************************\n        ";
  };

  _proto13.generateShaderCodeFrag = function generateShaderCodeFrag(e) {
    return "\n            // SPE: Points layer frag-shader-code **************************************************\n            float f" + this.mId + "_dist = length( vBarycentric );\n            float f" + this.mId + "_edge = aastep( f" + this.mId + "_threshold, f" + this.mId + "_dist, 0.00 );\n            float f" + this.mId + "_factor = gl_FrontFacing ? 1.0 : ( f" + this.mId + "_useBack ? 0.5 : 0.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f" + this.mId + "_alpha * f" + this.mId + "_edge;\n            " + e + " = spe_blend( " + e + ", f" + this.mId + "_factor * f" + this.mId + "_color, f" + this.mId + "_alpha * f" + this.mId + "_edge, f" + this.mId + "_mode );\n            // *************************************************************************************\n        ";
  };

  return SpeLayerPoints;
}(SpeLayer);

var SpeLayerLines = /*#__PURE__*/function (_SpeLayer10) {
  _inheritsLoose(SpeLayerLines, _SpeLayer10);

  function SpeLayerLines(e, t) {
    return _SpeLayer10.call(this, e, SPE_LAYER_TYPE_LINES, t) || this;
  }

  var _proto14 = SpeLayerLines.prototype;

  _proto14.initializeUniformsAndDefines = function initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_LINES = '', this.mUniforms["f" + this.mId + "_alpha"] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms["f" + this.mId + "_mode"] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms["f" + this.mId + "_color"] = {
      value: void 0 !== e.color ? new THREE.Color(e.color.value) : new THREE.Color(12237498)
    }, this.mUniforms["f" + this.mId + "_thickness"] = {
      value: void 0 !== e.thickness ? e.thickness.value : 0.01
    }, this.mUniforms["f" + this.mId + "_useBack"] = {
      value: void 0 === e.useBack || e.useBack.value
    }, this.mUniforms["f" + this.mId + "_smoothOffset"] = {
      value: void 0 !== e.smoothOffset ? e.smoothOffset.value : 0.03
    };
  };

  _proto14.generateUniformsCodeFrag = function generateUniformsCodeFrag() {
    return "\n            // SPE: Lines layer uniforms *************************\n            uniform float f" + this.mId + "_alpha;\n            uniform int f" + this.mId + "_mode;\n            uniform vec3 f" + this.mId + "_color;\n            uniform float f" + this.mId + "_thickness;\n            uniform bool f" + this.mId + "_useBack;\n            uniform float f" + this.mId + "_smoothOffset;\n            // **************************************************\n        ";
  };

  _proto14.generateShaderCodeFrag = function generateShaderCodeFrag(e) {
    return "\n            // SPE: Lines layer frag-shader-code ***************************************************\n            float f" + this.mId + "_dist = min( vBarycentric.x, min( vBarycentric.y, vBarycentric.z ) );\n            float f" + this.mId + "_comp_thickness = f" + this.mId + "_thickness;\n            float f" + this.mId + "_edge = 1.0 - aastep( f" + this.mId + "_comp_thickness, f" + this.mId + "_dist, f" + this.mId + "_smoothOffset );\n            float f" + this.mId + "_factor = gl_FrontFacing ? 1.0 : ( f" + this.mId + "_useBack ? 0.5 : 0.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f" + this.mId + "_alpha * f" + this.mId + "_edge;\n            " + e + " = spe_blend( " + e + ", f" + this.mId + "_factor * f" + this.mId + "_color, f" + this.mId + "_alpha * f" + this.mId + "_edge, f" + this.mId + "_mode );\n            // *************************************************************************************\n        ";
  };

  return SpeLayerLines;
}(SpeLayer);

if (!SPE.CreateLayerFromJSON) {
  var preprocess_uniforms = function preprocess_uniforms(e, t) {
    var i = {},
        r = "f" + e + "_";

    for (var _e35 in t) {
      var a = _e35.slice(_e35.indexOf(r) + r.length),
          s = t[_e35].value;

      if ('boolean' == typeof s) i[a] = {
        name: a,
        value: s,
        type: SPE_LAYER_UNIFORM_TYPE_BOOL
      };else if ('number' == typeof s) Number.isInteger(s) ? i[a] = {
        name: a,
        value: s,
        type: SPE_LAYER_UNIFORM_TYPE_INT
      } : i[a] = {
        name: a,
        value: s,
        type: SPE_LAYER_UNIFORM_TYPE_FLOAT
      };else if ('string' != typeof s || isNaN(s)) {
        if (s instanceof Object && 2 === Object.entries(s).length) void 0 !== s.x && void 0 !== s.y && (i[a] = {
          name: a,
          value: [s.x, s.y],
          type: SPE_LAYER_UNIFORM_TYPE_VEC2
        });else if (s instanceof Object && 3 === Object.entries(s).length) void 0 !== s.x && void 0 !== s.y && void 0 !== s.z && (i[a] = {
          name: a,
          value: [s.x, s.y, s.z],
          type: SPE_LAYER_UNIFORM_TYPE_VEC3
        });else if (s instanceof Object && 4 === Object.entries(s).length) void 0 !== s.x && void 0 !== s.y && void 0 !== s.z && void 0 !== s.w ? i[a] = {
          name: a,
          value: [s.x, s.y, s.z, s.w],
          type: SPE_LAYER_UNIFORM_TYPE_VEC4
        } : void 0 !== s.r && void 0 !== s.g && void 0 !== s.b && void 0 !== s.a && (i[a] = {
          name: a,
          value: [s.r, s.g, s.b, s.a],
          type: SPE_LAYER_UNIFORM_TYPE_COLOR
        });else if (s instanceof Array && 'number' == typeof s[0]) Number.isInteger(s[0]) ? i[a] = {
          name: a,
          value: [].concat(s),
          type: SPE_LAYER_UNIFORM_TYPE_ARRAY_INT
        } : i[a] = {
          name: a,
          value: [].concat(s),
          type: SPE_LAYER_UNIFORM_TYPE_ARRAY_FLOAT
        };else if (s instanceof Array && s[0] instanceof Object && 2 === Object.entries(s[0]).length) {
          if (void 0 !== s[0].x && void 0 !== s[0].y) {
            var _e36 = [];

            for (var _t31 = 0; _t31 < s.length; _t31++) {
              _e36 = _e36.concat([s[_t31].x, s[_t31].y]);
            }

            i[a] = {
              name: a,
              value: _e36,
              type: SPE_LAYER_UNIFORM_TYPE_ARRAY_VEC2
            };
          }
        } else if (s instanceof Array && s[0] instanceof Object && 3 === Object.entries(s[0]).length) {
          if (void 0 !== s[0].x && void 0 !== s[0].y && void 0 !== s[0].z) {
            var _e37 = [];

            for (var _t32 = 0; _t32 < s.length; _t32++) {
              _e37 = _e37.concat([s[_t32].x, s[_t32].y, s[_t32].z]);
            }

            i[a] = {
              name: a,
              value: _e37,
              type: SPE_LAYER_UNIFORM_TYPE_ARRAY_VEC3
            };
          }
        } else if (s instanceof Array && s[0] instanceof Object && 4 === Object.entries(s[0]).length) {
          if (void 0 !== s[0].x && void 0 !== s[0].y && void 0 !== s[0].z && void 0 !== s[0].w) {
            var _e38 = [];

            for (var _t33 = 0; _t33 < s.length; _t33++) {
              _e38 = _e38.concat([s[_t33].x, s[_t33].y, s[_t33].z, s[_t33].w]);
            }

            i[a] = {
              name: a,
              value: _e38,
              type: SPE_LAYER_UNIFORM_TYPE_ARRAY_VEC4
            };
          }
        } else if (s instanceof Array && s[0] instanceof THREE.Color) {
          if (void 0 !== s[0].x && void 0 !== s[0].y && void 0 !== s[0].z && void 0 !== s[0].w) {
            var _e39 = [];

            for (var _t34 = 0; _t34 < s.length; _t34++) {
              _e39 = _e39.concat([s[_t34].r, s[_t34].g, s[_t34].b, s[_t34].a]);
            }

            i[a] = {
              name: a,
              value: _e39,
              type: SPE_LAYER_UNIFORM_TYPE_ARRAY_COLOR
            };
          }
        } else s instanceof Object && 1 === Object.entries(s).length ? void 0 !== s.elements && s.elements instanceof Array && (9 === s.elements.length ? i[a] = {
          name: a,
          value: [].concat(s.elements),
          type: SPE_LAYER_UNIFORM_TYPE_MAT3
        } : 16 === s.elements.length ? i[a] = {
          name: a,
          value: [].concat(s.elements),
          type: SPE_LAYER_UNIFORM_TYPE_MAT4
        } : console.error('SpeLayer::preprocess_uniforms >>> unsupported matrix-type of uniform: ', s.elements)) : 'string' == typeof s ? i[a] = {
          name: a,
          value: SPE.CachedTextures[s],
          type: SPE_LAYER_UNIFORM_TYPE_SAMPLER_2D
        } : console.error('SpeLayer::preprocess_uniforms >>> unsupported uniform-value: ', s);
      } else {
        var _e40 = Number(s);

        Number.isInteger(_e40) ? i[a] = {
          name: a,
          value: _e40,
          type: SPE_LAYER_UNIFORM_TYPE_INT
        } : i[a] = {
          name: a,
          value: _e40,
          type: SPE_LAYER_UNIFORM_TYPE_FLOAT
        };
      }
    }

    return i;
  };

  SPE.CreateLayerFromJSON = function (e, t) {
    var i = e.id,
        r = e.type,
        a = preprocess_uniforms(e.id, e.uniforms);
    return SpeLayer.CreateLayer(i, r, a);
  };
}

var SpeLayersList = /*#__PURE__*/function () {
  function SpeLayersList(e) {
    if (this.mHead = null, this.mShader = null, void 0 !== e && Object.keys(e).length > 0) for (var t = 0; t < e.length; t++) {
      this.addLayer(t, e[t].type, e[t].uniforms);
    } else this.addLayer(0, SPE_LAYER_TYPE_COLOR, {}), this.addLayer(1, SPE_LAYER_TYPE_LIGHTING, {});
  }

  var _proto15 = SpeLayersList.prototype;

  _proto15.addLayer = function addLayer(e, t, i) {
    var r = SpeLayer.CreateLayer(e, t, i);

    if (null !== r) {
      if (null === this.mHead) this.mHead = r;else {
        var _e41 = this.mHead;

        for (; _e41.next;) {
          _e41 = _e41.next;
        }

        _e41.next = r;
      }
      return r;
    }

    console.error('SpeLayersList::addLayer >>> couldnt create a layer of type: ', t);
  };

  _proto15.addLayerBeforeAt = function addLayerBeforeAt(e, t) {
    var i = void 0 !== e.id ? e.id : 100 + Math.floor(999 * Math.random()),
        r = void 0 !== e.type ? e.type : SPE_LAYER_TYPE_COLOR,
        a = 'texture' !== r ? SpeLayer.DictToUniforms(e) : SpeLayerTexture.DictToUniforms(e),
        s = SpeLayer.CreateLayer(i, r, a);
    var n = this.head;
    if (s.next = t, n === t) this.head = s;else {
      for (; n.next !== t;) {
        n = n.next;
      }

      n.next = s;
    }
    return s;
  };

  _proto15.removeLayer = function removeLayer(e) {
    var t = this.head,
        i = void 0,
        r = 0;
    if (t.id == e) this.head = t.next;else for (r = 1, i = t, t = t.next; null != t;) {
      if (t.id == e) {
        i.next = t.next;
        break;
      }

      r++, i = t, t = t.next;
    }
    return r;
  };

  _proto15.getLayer = function getLayer(e) {
    var t = this.head;

    for (; t && t.id != e;) {
      t = t.next;
    }

    return t;
  };

  _proto15.updateLayerUniform = function updateLayerUniform(e, t) {
    var i = this.getLayer(e);
    i && (void 0 !== i.uniforms[t] ? this.mShader.uniforms[t] = {
      value: i.uniforms[t].value
    } : console.error("SpeLayersList::updateLayerUniform >>> uniform " + t + " not found in layer"));
  };

  _proto15.updateLayerUniformByLayer = function updateLayerUniformByLayer(e, t) {
    void 0 !== e.uniforms[t] ? this.mShader.uniforms[t] = {
      value: e.uniforms[t].value
    } : console.error("SpeLayersList::updateLayerUniformByLayer >>> uniform " + t + " not found in layer");
  };

  _proto15.getUniforms = function getUniforms() {
    var e = {};
    var t = this.mHead;

    for (; t;) {
      for (var _i31 = 0, _Object$entries7 = Object.entries(t.uniforms); _i31 < _Object$entries7.length; _i31++) {
        var _Object$entries7$_i = _Object$entries7[_i31],
            i = _Object$entries7$_i[0],
            r = _Object$entries7$_i[1];
        e[i] = r;
      }

      t = t.next;
    }

    return e;
  };

  _proto15.getDefinesCode = function getDefinesCode() {
    var e = '',
        t = this.mHead;

    for (; t;) {
      for (var _i32 = 0, _Object$entries8 = Object.entries(t.defines); _i32 < _Object$entries8.length; _i32++) {
        var _Object$entries8$_i = _Object$entries8[_i32],
            i = _Object$entries8$_i[0],
            r = _Object$entries8$_i[1];
        e += "#define " + i + " " + r + "\n";
      }

      t = t.next;
    }

    return e;
  };

  _proto15.getVertUniformsCode = function getVertUniformsCode() {
    var e = '',
        t = this.mHead;

    for (; t;) {
      e += t.generateUniformsCodeVert(), t = t.next;
    }

    return e;
  };

  _proto15.getFragUniformsCode = function getFragUniformsCode() {
    var e = '',
        t = this.mHead;

    for (; t;) {
      e += t.generateUniformsCodeFrag(), t = t.next;
    }

    return e;
  };

  _proto15.getFragShaderCodePreLighting = function getFragShaderCodePreLighting() {
    var e = '',
        t = this.mHead;

    for (; t.type !== SPE_LAYER_TYPE_LIGHTING;) {
      e += t.generateShaderCodeFrag('bef'), t = t.next;
    }

    return e;
  };

  _proto15.getFragShaderCodeLighting = function getFragShaderCodeLighting() {
    var e = this.mHead;

    for (; e.type !== SPE_LAYER_TYPE_LIGHTING;) {
      e = e.next;
    }

    return e.generateShaderCodeFrag();
  };

  _proto15.getFragShaderCodePostLighting = function getFragShaderCodePostLighting() {
    var e = '',
        t = this.mHead;

    for (; t.type !== SPE_LAYER_TYPE_LIGHTING;) {
      t = t.next;
    }

    for (t = t.next; t;) {
      e += t.generateShaderCodeFrag('aft'), t = t.next;
    }

    return e;
  };

  _createClass(SpeLayersList, [{
    key: "head",
    get: function get() {
      return this.mHead;
    },
    set: function set(e) {
      this.mHead = e;
    }
  }, {
    key: "shader",
    get: function get() {
      return this.mShader;
    },
    set: function set(e) {
      this.mShader = e;
    }
  }]);

  return SpeLayersList;
}();

var SpeBasicMaterial = /*#__PURE__*/function (_THREE$MeshPhongMater) {
  _inheritsLoose(SpeBasicMaterial, _THREE$MeshPhongMater);

  function SpeBasicMaterial(e, t) {
    var _this3;

    if (e === void 0) {
      e = {};
    }

    if (t === void 0) {
      t = {};
    }

    _this3 = _THREE$MeshPhongMater.call(this, t) || this, _this3.mLayersList = null, Object.keys(e).length > 0 && (_this3.mLayersList = new SpeLayersList(e), _this3.onBeforeCompile = SpeShaderLib.GetSetupCallback(_assertThisInitialized(_this3)));
    return _this3;
  }

  var _proto16 = SpeBasicMaterial.prototype;

  _proto16.copy = function copy(e) {
    if (this.mLayersList) {
      var t = e.layersList;
      e.layersList = void 0, _THREE$MeshPhongMater.prototype.copy.call(this, e), this.layerList = t.clone();
    } else _THREE$MeshPhongMater.prototype.copy.call(this, e);

    return this;
  };

  _createClass(SpeBasicMaterial, [{
    key: "layersList",
    get: function get() {
      return this.mLayersList;
    },
    set: function set(e) {
      this.mLayersList = e, this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this);
    }
  }]);

  return SpeBasicMaterial;
}(THREE.MeshPhongMaterial);

var SpeLambertMaterial = /*#__PURE__*/function (_THREE$MeshLambertMat) {
  _inheritsLoose(SpeLambertMaterial, _THREE$MeshLambertMat);

  function SpeLambertMaterial(e, t) {
    var _this4;

    if (e === void 0) {
      e = {};
    }

    if (t === void 0) {
      t = {};
    }

    _this4 = _THREE$MeshLambertMat.call(this, t) || this, _this4.mLayersList = null, Object.keys(e).length > 0 && (_this4.mLayersList = new SpeLayersList(e), _this4.onBeforeCompile = SpeShaderLib.GetSetupCallback(_assertThisInitialized(_this4)));
    return _this4;
  }

  var _proto17 = SpeLambertMaterial.prototype;

  _proto17.copy = function copy(e) {
    if (this.mLayersList) {
      var t = e.layersList;
      e.layersList = void 0, _THREE$MeshLambertMat.prototype.copy.call(this, e), this.layerList = t.clone();
    } else _THREE$MeshLambertMat.prototype.copy.call(this, e);

    return this;
  };

  _createClass(SpeLambertMaterial, [{
    key: "layersList",
    get: function get() {
      return this.mLayersList;
    },
    set: function set(e) {
      this.mLayersList = e, this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this);
    }
  }]);

  return SpeLambertMaterial;
}(THREE.MeshLambertMaterial);

var SpePhongMaterial = /*#__PURE__*/function (_THREE$MeshPhongMater2) {
  _inheritsLoose(SpePhongMaterial, _THREE$MeshPhongMater2);

  function SpePhongMaterial(e, t) {
    var _this5;

    if (e === void 0) {
      e = {};
    }

    if (t === void 0) {
      t = {};
    }

    _this5 = _THREE$MeshPhongMater2.call(this, t) || this, _this5.mLayersList = null, Object.keys(e).length > 0 && (_this5.mLayersList = new SpeLayersList(e), _this5.onBeforeCompile = SpeShaderLib.GetSetupCallback(_assertThisInitialized(_this5)));
    return _this5;
  }

  var _proto18 = SpePhongMaterial.prototype;

  _proto18.copy = function copy(e) {
    if (this.mLayersList) {
      var t = e.layersList;
      e.layersList = void 0, _THREE$MeshPhongMater2.prototype.copy.call(this, e), this.layerList = t.clone();
    } else _THREE$MeshPhongMater2.prototype.copy.call(this, e);

    return this;
  };

  _createClass(SpePhongMaterial, [{
    key: "layersList",
    get: function get() {
      return this.mLayersList;
    },
    set: function set(e) {
      this.mLayersList = e, this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this);
    }
  }]);

  return SpePhongMaterial;
}(THREE.MeshPhongMaterial);

var SpePhysicalMaterial = /*#__PURE__*/function (_THREE$MeshPhysicalMa) {
  _inheritsLoose(SpePhysicalMaterial, _THREE$MeshPhysicalMa);

  function SpePhysicalMaterial(e, t) {
    var _this6;

    if (e === void 0) {
      e = {};
    }

    if (t === void 0) {
      t = {};
    }

    void 0 === t.roughness && (t.roughness = 0.3), _this6 = _THREE$MeshPhysicalMa.call(this, t) || this, _this6.mLayersList = null, Object.keys(e).length > 0 && (_this6.mLayersList = new SpeLayersList(e), _this6.onBeforeCompile = SpeShaderLib.GetSetupCallback(_assertThisInitialized(_this6)));
    return _this6;
  }

  var _proto19 = SpePhysicalMaterial.prototype;

  _proto19.copy = function copy(e) {
    if (this.mLayersList) {
      var t = e.layersList;
      e.layersList = void 0, _THREE$MeshPhysicalMa.prototype.copy.call(this, e), this.layerList = t.clone();
    } else _THREE$MeshPhysicalMa.prototype.copy.call(this, e);

    return this;
  };

  _createClass(SpePhysicalMaterial, [{
    key: "layersList",
    get: function get() {
      return this.mLayersList;
    },
    set: function set(e) {
      this.mLayersList = e, this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this);
    }
  }]);

  return SpePhysicalMaterial;
}(THREE.MeshPhysicalMaterial);

var SpeToonMaterial = /*#__PURE__*/function (_THREE$MeshToonMateri) {
  _inheritsLoose(SpeToonMaterial, _THREE$MeshToonMateri);

  function SpeToonMaterial(e, t) {
    var _this7;

    if (e === void 0) {
      e = {};
    }

    if (t === void 0) {
      t = {};
    }

    _this7 = _THREE$MeshToonMateri.call(this, t) || this, _this7.mLayersList = null, Object.keys(e).length > 0 && (_this7.mLayersList = new SpeLayersList(e), _this7.onBeforeCompile = SpeShaderLib.GetSetupCallback(_assertThisInitialized(_this7)));
    return _this7;
  }

  var _proto20 = SpeToonMaterial.prototype;

  _proto20.copy = function copy(e) {
    if (this.mLayersList) {
      var t = e.layersList;
      e.layersList = void 0, _THREE$MeshToonMateri.prototype.copy.call(this, e), this.layerList = t.clone();
    } else _THREE$MeshToonMateri.prototype.copy.call(this, e);

    return this;
  };

  _createClass(SpeToonMaterial, [{
    key: "layersList",
    get: function get() {
      return this.mLayersList;
    },
    set: function set(e) {
      this.mLayersList = e, this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this);
    }
  }]);

  return SpeToonMaterial;
}(THREE.MeshToonMaterial);

var SpeFontsCache = {},
    SpeCharsCache = {};
var SPE_PATH_FONTS = 'assets/fonts/',
    SPE_DEFAULT_TEXT_FONT = 'roboto_regular',
    SPE_DEFAULT_TEXT_CHARACTER = '.',
    SPE_DEFAULT_TEXT_LOD = 16;

function SpeLoadCharData(e, t, i) {
  if (SpeCharsCache[e]) {
    if (SpeCharsCache[e][i] && SpeCharsCache[e][i].fontFamily === t) return SpeCharsCache[e][i];
  } else SpeCharsCache[e] = {};

  var r = void 0 !== SpeFontsCache[t] ? SpeFontsCache[t] : SpeFontsCache[SPE_DEFAULT_TEXT_FONT],
      a = r.generateShapes(e, 1);
  return SpeCharsCache[e][i] = {
    geometry: new THREE.ShapeBufferGeometry(a, i),
    fontFamily: t,
    resolution: r.data.resolution,
    glyphsHa: r.data.glyphs[e].ha
  }, SpeCharsCache[e][i];
}

var SpeTextChar3D = /*#__PURE__*/function (_SpeIMesh3) {
  _inheritsLoose(SpeTextChar3D, _SpeIMesh3);

  function SpeTextChar3D(e, t) {
    var _this8;

    var i = void 0 !== e["char"] ? e["char"] : SPE_DEFAULT_TEXT_CHARACTER,
        r = void 0 !== e.fontFamily ? e.fontFamily : SPE_DEFAULT_TEXT_FONT,
        a = void 0 !== e.lod ? e.lod : SPE_DEFAULT_TEXT_LOD,
        s = SpeLoadCharData(i, r, a);
    _this8 = _SpeIMesh3.call(this, s.geometry, t) || this, _this8.mChar = i, _this8.mFontFamily = r, _this8.mLod = a, _this8.mFontSize = void 0 !== e.fontSize ? e.fontSize : 16, _this8.mLetterSpacing = void 0 !== e.letterSpacing ? e.letterSpacing : 1, _this8.mResolution = s.resolution, _this8.mGlyphsHa = s.glyphsHa, _this8.mLocalPosition = new THREE.Vector2(), _this8.mCharSize = _this8.mGlyphsHa * (_this8.mFontSize / _this8.mResolution) * _this8.mLetterSpacing, _this8.updateFontSize(_this8.mFontSize);
    return _this8;
  }

  var _proto21 = SpeTextChar3D.prototype;

  _proto21.updateFontSize = function updateFontSize(e) {
    this.mFontSize = e, this.mCharSize = this.mGlyphsHa * (this.mFontSize / this.mResolution) * this.mLetterSpacing, this.scale.set(this.mFontSize, this.mFontSize, 1);
  };

  return SpeTextChar3D;
}(SpeIMesh);

var SpeTextContainer = /*#__PURE__*/function (_SpeIMesh4) {
  _inheritsLoose(SpeTextContainer, _SpeIMesh4);

  function SpeTextContainer(e, t) {
    var _this9;
    t.visible = !1, _this9 = _SpeIMesh4.call(this, e, t) || this;
    return _this9;
  }

  return SpeTextContainer;
}(SpeIMesh);

var SpeLoaderManager = /*#__PURE__*/function () {
  function SpeLoaderManager(e) {
    this.mAssets = e || {}, this.mOnFinishCallback = null, this.mNumAssetsToLoad = 0, this.mNumAssetsLoaded = 0;
  }

  var _proto22 = SpeLoaderManager.prototype;

  _proto22.run = function run(e) {
    var _this10 = this;

    this.mOnFinishCallback = e;
    var t = void 0 !== this.mAssets.fonts ? this.mAssets.fonts : [],
        i = void 0 !== this.mAssets.images ? this.mAssets.images : [],
        r = void 0 !== this.mAssets.models ? this.mAssets.models : [],
        a = void 0 !== this.mAssets.animations ? this.mAssets.animations : [];
    if (this.mNumAssetsLoaded = 0, this.mNumAssetsToLoad = t.length + i.length + r.length + a.length, this.mNumAssetsToLoad < 1) this.mOnFinishCallback();else {
      (function () {
        var e = _this10;

        var _loop = function _loop(_i34) {
          var r = new THREE.FontLoader(),
              a = t[_i34],
              s = SPE_PATH_FONTS + a + '.json';
          r.load(s, function (t) {
            SpeFontsCache[a] = t, e.mNumAssetsLoaded++, e.mNumAssetsLoaded === e.mNumAssetsToLoad && e.mOnFinishCallback();
          });
        };

        for (var _i34 = 0; _i34 < t.length; _i34++) {
          _loop(_i34);
        }
      })();
    }
  };

  return SpeLoaderManager;
}();

var SpeRuntime = /*#__PURE__*/function () {
  function SpeRuntime(e, t, i) {
    if (i === void 0) {
      i = {};
    }
    this.mGltfScene = e, this.mConfig = i, this.mViewportMode = SPE_RUNTIME_VIEWMODE_FULLSCREEN, this.mViewportWidth = window.innerWidth, this.mViewportHeight = window.innerHeight;
    var r = document.getElementById('canvas3d');
    this.mRenderer = new THREE.WebGLRenderer({
      antialias: !0,
      alpha: !0,
      canvas: r
    }), this.mRenderer.setPixelRatio(window.devicePixelRatio), this.mRenderer.setSize(this.mViewportWidth, this.mViewportHeight), this.mRenderer.shadowMap.enabled = !0, this.mRenderer.shadowMap.type = THREE.PCFSoftShadowMap, this.mScene = new SpeScene(), this.mSceneOptions = {}, this.mMainCamera = null, this.mOrbitControls = null, this.mPlayHandler = null, this.mRunning = !1, this.mLoaderManager = new SpeLoaderManager(t), this.mLoaderManager.run(this.onRuntimeAssetsLoaded.bind(this));
  }

  var _proto23 = SpeRuntime.prototype;

  _proto23.run = function run() {
    requestAnimationFrame(this.run.bind(this)), this.onRender();
  };

  _proto23.onRuntimeAssetsLoaded = function onRuntimeAssetsLoaded() {
    console.info('SpeRuntime >>> Finished loading assets for the spline-runtime'), this.loadFromGltf(this.mGltfScene), window.addEventListener('resize', this.onResize.bind(this)), this.mRunning = !0, this.onResize();
  };

  _proto23.onRender = function onRender() {
    this.mRunning && (SPE_USES_PREVIEW_IMAGE && (document.querySelector('.spline-preview-image-container').style.display = 'none', SPE_USES_PREVIEW_IMAGE = !1), this.mPlayHandler && !this.mPlayHandler.isEnable && this.mPlayHandler.activate(), this.mOrbitControls && this.mOrbitControls.update(), this.mScene && this.mMainCamera && (this.mRenderer.autoClear = !0, this.mRenderer.render(this.mScene, this.mMainCamera)));
  };

  _proto23.onResize = function onResize() {
    this.mRunning && (this.mViewportMode !== SPE_RUNTIME_VIEWMODE_FULLSCREEN && this.mViewportMode !== SPE_RUNTIME_VIEWMODE_FULL_WIDTH || (this.mViewportWidth = window.innerWidth), this.mViewportMode !== SPE_RUNTIME_VIEWMODE_FULLSCREEN && this.mViewportMode !== SPE_RUNTIME_VIEWMODE_FULL_HEIGHT || (this.mViewportHeight = window.innerHeight), this.mMainCamera && ('PerspectiveCamera' === this.mMainCamera.type ? this.mMainCamera.aspect = this.mViewportWidth / this.mViewportHeight : 'OrthographicCamera' === this.mMainCamera.type && (this.mMainCamera.left = -this.mViewportWidth / 2, this.mMainCamera.right = this.mViewportWidth / 2, this.mMainCamera.top = this.mViewportHeight / 2, this.mMainCamera.bottom = -this.mViewportHeight / 2), this.mMainCamera.updateProjectionMatrix()), this.mRenderer && this.mRenderer.setSize(this.mViewportWidth, this.mViewportHeight));
  };

  _proto23.loadFromGltf = function loadFromGltf(e) {
    var t = new SpeGltfDecoder(e),
        _t$decode = t.decode(),
        i = _t$decode[0],
        r = _t$decode[1],
        a = _t$decode[2];

    this.mScene = i, this.mMainCamera = r, this.mSceneOptions = a;
    var s = void 0 !== this.mSceneOptions.bgColor ? new THREE.Color().fromArray(this.mSceneOptions.bgColor) : new THREE.Color(1644825),
        n = void 0 !== this.mSceneOptions.bgAlpha ? this.mSceneOptions.bgAlpha : 0;
    this.mRenderer.setClearColor(s, n), this.mViewportMode = this.mSceneOptions.viewMode, this.mViewportWidth = this.mSceneOptions.viewWidth, this.mViewportHeight = this.mSceneOptions.viewHeight, this.mSceneOptions.useOrbitControls && (this.mOrbitControls = new THREE.OrbitControls(this.mMainCamera, this.mRenderer.domElement), this.mOrbitControls.target.fromArray(this.mSceneOptions.orbitTarget), this.mOrbitControls.enableRotate = this.mSceneOptions.cameraRotate, this.mOrbitControls.enablePan = this.mSceneOptions.cameraPan, this.mOrbitControls.enableZoom = this.mSceneOptions.cameraZoom, this.mOrbitControls.enableDamping = this.mSceneOptions.orbitDamped, this.mOrbitControls.rotateSpeed = 1, this.mOrbitControls.panSpeed = 1), 'function' == typeof Interaction && (this.mPlayHandler = new PlayMode(this.mRenderer.domElement, this.mScene, this.mMainCamera));
  };

  return SpeRuntime;
}();

var SpeScene = /*#__PURE__*/function (_THREE$Scene) {
  _inheritsLoose(SpeScene, _THREE$Scene);

  function SpeScene() {
    return _THREE$Scene.call(this) || this;
  }

  var _proto24 = SpeScene.prototype;

  _proto24.traverseEntity = function traverseEntity(e) {
    function t(i) {
      if (i instanceof SpeMesh3D || i instanceof SpeMesh2D || i instanceof SpeTextContainer || i instanceof THREE.Group || i instanceof SpeEmptyObject || i instanceof SPE.CombinedCamera || i instanceof SPE.LightSpot || i instanceof SPE.LightPoint || i instanceof SPE.LightDirectional) {
        e(i);

        for (var _e42 = 0; _e42 < i.children.length; _e42++) {
          t(i.children[_e42]);
        }
      }
    }

    for (var _e43 = 0; _e43 < this.children.length; _e43++) {
      t(this.children[_e43]);
    }
  };

  return SpeScene;
}(THREE.Scene);

var SpeShaderLib = /*#__PURE__*/function () {
  function SpeShaderLib() {}

  SpeShaderLib.SetupShader = function SetupShader(e, t) {
    e.fragmentShader = '\n            /* SPE-Blending helper functions */\n            #define SPE_BLENDING_NORMAL 0\n            #define SPE_BLENDING_MULTIPLY 1\n            #define SPE_BLENDING_SCREEN 2\n            #define SPE_BLENDING_OVERLAY 3\n            vec3 spe_normalBlend( vec3 a, vec3 b, float alpha ) {\n                return mix( a, b, alpha );\n            }\n            vec3 spe_multiplyBlend( vec3 a, vec3 b, float alpha ) {\n                return mix( a, a * b, alpha );\n            }\n            vec3 spe_screenBlend( vec3 a, vec3 b, float alpha ) {\n                vec3 tmp = 1.0 - ( 1.0 - a ) * ( 1.0 - b );\n                return mix( a, tmp, alpha );\n            }\n            vec3 spe_overlayBlend( vec3 a, vec3 b, float alpha ) {\n                vec3 tmp = mix( 1. - 2. * (1. - a) * (1. - b), 2. * a * b, step( a, vec3(.5) ) );\n                return clamp( mix( a, tmp, alpha ), 0.0, 1.0 );\n            }\n            vec3 spe_blend( vec3 a, vec3 b, float alpha, int mode ) {\n                /**/ if ( mode == SPE_BLENDING_NORMAL ) return spe_normalBlend( a, b, alpha );\n                else if ( mode == SPE_BLENDING_MULTIPLY ) return spe_multiplyBlend( a, b, alpha );\n                else if ( mode == SPE_BLENDING_SCREEN ) return spe_screenBlend( a, b, alpha );\n                else if ( mode == SPE_BLENDING_OVERLAY ) return spe_overlayBlend( a, b, alpha );\n                return vec3( 1.0 );\n            }\n            ' + e.fragmentShader, e.vertexShader = '\n            #ifdef SPE_USE_LAYER_FRESNEL\n                varying vec3 vWorldViewDir;\n                varying vec3 vWorldNormal;\n            #endif /* SPE_USE_LAYER_FRESNEL */\n            ' + e.vertexShader, e.fragmentShader = '\n            #ifdef SPE_USE_LAYER_FRESNEL\n                varying vec3 vWorldViewDir;\n                varying vec3 vWorldNormal;\n            #endif /* SPE_USE_LAYER_FRESNEL */\n            ' + e.fragmentShader, e.vertexShader = e.vertexShader.replace('#include <project_vertex>', '\n            #include <project_vertex>\n            #ifdef SPE_USE_LAYER_FRESNEL\n                vec4 fWorldPosition = modelMatrix * vec4( position, 1.0 );\n                vWorldViewDir = isPerspectiveMatrix( projectionMatrix ) ? \n                                    ( fWorldPosition.xyz - cameraPosition ) : vec3( -viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2] );\n                vWorldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\n            #endif /* SPE_USE_LAYER_FRESNEL */\n            '), e.vertexShader = '\n            #if defined( SPE_USE_LAYER_POINTS ) || defined( SPE_USE_LAYER_LINES )\n                attribute vec3 barycentric;\n                varying vec3 vBarycentric;\n            #endif /* SPE_USE_LAYER_POINTS || SPE_USE_LAYER_LINES */\n        ' + e.vertexShader, e.vertexShader = e.vertexShader.replace('#include <begin_vertex>', '\n            #include <begin_vertex>\n            #if defined( SPE_USE_LAYER_POINTS ) || defined( SPE_USE_LAYER_LINES )\n                vBarycentric = barycentric;\n            #endif /* SPE_USE_LAYER_POINTS || SPE_USE_LAYER_LINES */\n            '), e.fragmentShader = '\n            #if defined( SPE_USE_LAYER_POINTS ) || defined( SPE_USE_LAYER_LINES )\n                varying vec3 vBarycentric;\n                float aastep( float threshold, float dist, float smoothOffset ) {\n                    float afwidth = fwidth( dist ) * 0.5;\n                    return smoothstep( threshold - afwidth - smoothOffset, threshold + afwidth + smoothOffset, dist );\n                }\n            #endif /* SPE_USE_LAYER_POINTS || SPE_USE_LAYER_LINES */\n        ' + e.fragmentShader, e.fragmentShader = '\n            #ifdef SPE_USE_LAYER_NOISE\n                float random ( in vec2 _st ) {\n                    return sin(sin(dot(_st.xy, vec2(12.834,77.212))) * 320.3456); // Ale: I am usin sin() instead of fract() to create a different noise.\n                }\n                float noise ( in vec2 _st ) {\n                    vec2 i = floor(_st);\n                    vec2 f = fract(_st);\n                    // Four corners in 2D of a tile\n                    float a = random(i);\n                    float b = random(i + vec2(1.0, 0.0)); // Ale: By incrementing disproportionally these values. You get a geometrical distortion.\n                    float c = random(i + vec2(0.0, 1.0));\n                    float d = random(i + vec2(1.0, 1.0));\n                    vec2 u = f * f * (3.0 - 2.0 * f);\n                    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;\n                }\n                float fbm ( in vec2 _st ) {\n                    float v = 0.0;\n                    float a = 0.5;\n                    vec2 shift = vec2(100.0);\n                    // Rotate to reduce axial bias\n                    mat2 rot = mat2(cos(0.5), sin(0.5),\n                                    -sin(0.5), cos(0.50));\n                    for (int i = 0; i < SPE_NOISE_NUM_OCTAVES; ++i) {\n                        v += a * noise(_st);\n                        _st = rot * _st * 2.0 + shift;\n                        a *= 0.5;\n                    }\n                    return v;\n                }\n            #endif /* SPE_USE_LAYER_NOISE */\n            ' + e.fragmentShader, e.fragmentShader = e.fragmentShader.replace('#include <normal_fragment_begin>', ''), e.fragmentShader = e.fragmentShader.replace('#include <normal_fragment_maps>', ''), t instanceof SpeBasicMaterial && (e.fragmentShader = e.fragmentShader.replace('#include <lights_phong_fragment>\n                #include <lights_fragment_begin>\n                #include <lights_fragment_maps>\n                #include <lights_fragment_end>', ''), e.fragmentShader = e.fragmentShader.replace('vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;', 'vec3 outgoingLight = diffuseColor.rgb;')), t instanceof SpeLambertMaterial && (e.vertexShader = '\n                #ifdef SPE_USE_LAYER_NORMAL\n                    varying vec3 vNormal;\n                #endif /* SPE_USE_LAYER_NORMAL */\n                ' + e.vertexShader, e.vertexShader = e.vertexShader.replace('#include <defaultnormal_vertex>', '\n                #include <defaultnormal_vertex>\n                #ifdef SPE_USE_LAYER_NORMAL\n                    vNormal = normalize( transformedNormal );\n                #endif /* SPE_USE_LAYER_NORMAL */\n                '), e.fragmentShader = '\n                #ifdef SPE_USE_LAYER_NORMAL\n                    varying vec3 vNormal;\n                #endif /* SPE_USE_LAYER_NORMAL */\n                ' + e.fragmentShader, e.fragmentShader = e.fragmentShader.replace('vec4 diffuseColor = vec4( diffuse, opacity );', '\n                #ifdef SPE_USE_LAYER_NORMAL\n                    #include <normal_fragment_begin>\n                    #include <normal_fragment_maps>\n                #endif /* SPE_USE_LAYER_NORMAL */\n                    float accumAlpha = 0.0;\n                    vec3 bef = vec3( 1.0 );\n                    #before\n                    vec4 diffuseColor = vec4( bef, 1.0 );\n                ')), e.vertexShader = e.vertexShader.replace('#include <common>', '\n            #include <common>\n            #ifdef SPE_USE_LAYER_DEPTH\n                varying vec4 dWorldPosition;\n            #endif /* SPE_USE_LAYER_DEPTH */\n            '), e.vertexShader = e.vertexShader.replace('#include <worldpos_vertex>', '\n            #include <worldpos_vertex>\n            #ifdef SPE_USE_LAYER_DEPTH\n                dWorldPosition = modelMatrix * vec4( transformed, 1.0 );\n            #endif\n            '), e.fragmentShader = '\n            #ifdef SPE_USE_LAYER_DEPTH\n                varying vec4 dWorldPosition;\n            #endif /* SPE_USE_LAYER_DEPTH */\n            ' + e.fragmentShader, e.fragmentShader = e.fragmentShader.replace('vec4 diffuseColor = vec4( diffuse, opacity );', '\n                #include <normal_fragment_begin>\n                #include <normal_fragment_maps>\n                float accumAlpha = 0.0;\n                vec3 bef = vec3( 1.0 );\n                #before\n                vec4 diffuseColor = vec4( bef, 1.0 );\n            '), e.fragmentShader = e.fragmentShader.replace('gl_FragColor = vec4( outgoingLight, diffuseColor.a );', '\n                #lighting\n                vec3 aft = outgoingLight;\n                #after\n                gl_FragColor = vec4( aft, accumAlpha * opacity );\n            ');
  };

  SpeShaderLib.GetSetupCallback = function GetSetupCallback(material) {
    var string = '';

    for (var e = 0; e < material.uuid.length; ++e) {
      var t = material.uuid[e];
      '-' != t && (string += t);
    }

    return eval("shader => {\n            // Hashing required as in issue https://github.com/mrdoob/three.js/issues/13192\n            const __hash___" + string + " = true;\n            const layersList = material.layersList;\n            // Inject base functionality into both vertex and fragment shaders\n            SpeShaderLib.SetupShader( shader, material );\n            shader.uniforms = THREE.UniformsUtils.merge( [ shader.uniforms, layersList.getUniforms() ] );\n            for ( let [key, uniform] of Object.entries( shader.uniforms ) ) {\n                if ( uniform.value && uniform.value.isTexture ) {\n                    uniform.value.needsUpdate = true;\n                }\n            }\n            // Inject shader-code in fragment shader previous to the lighting step\n            shader.fragmentShader = shader.fragmentShader.replace( '#before', layersList.getFragShaderCodePreLighting() );\n            // Inject shader-code in fragment shader for the lighting step\n            shader.fragmentShader = shader.fragmentShader.replace( '#lighting', layersList.getFragShaderCodeLighting() );\n            // Inject shader-code in fragment shader after the lighting step\n            shader.fragmentShader = shader.fragmentShader.replace( '#after', layersList.getFragShaderCodePostLighting() );\n            // Inject uniforms variables in both vertex and fragment shaders\n            shader.vertexShader = layersList.getVertUniformsCode() + shader.vertexShader;\n            shader.fragmentShader = layersList.getFragUniformsCode() + shader.fragmentShader;\n            // Inject defines in both vertex and fragment shaders\n            shader.vertexShader = layersList.getDefinesCode() + shader.vertexShader;\n            shader.fragmentShader = layersList.getDefinesCode() + shader.fragmentShader;\n            // Link the shader to its related layers-list\n            layersList.shader = shader;\n        }");
  };

  return SpeShaderLib;
}();

var SpeStack = /*#__PURE__*/function () {
  function SpeStack() {
    this.elements = [];
  }

  var _proto25 = SpeStack.prototype;

  _proto25.push = function push(e) {
    this.elements.push(e);
  };

  _proto25.pop = function pop() {
    return 0 === this.elements.length ? null : this.elements.pop();
  };

  _proto25.top = function top() {
    return this.elements[this.elements.length - 1];
  };

  _proto25.empty = function empty() {
    return 0 === this.elements.length;
  };

  return SpeStack;
}();

function Interaction(e) {
  this.uuid = THREE.MathUtils.generateUUID(), this.object = e, this.states = [], this.events = [], this.statesManager = new InteractionStatesManager(this);
}

function InteractionEvent(e, t) {
  this.targets = [], this._type = e, this.key = t, this.ui = {
    isCollapsed: !1
  };
}

function InteractionState() {
  this.uuid = THREE.MathUtils.generateUUID(), this.position = new THREE.Vector3(), this.rotation = new THREE.Euler(), this.scale = new THREE.Vector3(), this.hiddenMatrix = new THREE.Matrix4();
}

function InteractionTarget() {
  this.easing = InteractionTarget.EASING.EASE_IN_OUT, this.duration = 1e3, this.delay = 0, this.cubicControls = [0.5, 0.05, 0.1, 0.3], this.springParameters = {
    mass: 1,
    stiffness: 80,
    damping: 10,
    velocity: 0
  }, this.repeat = !1, this.cycle = !1, this.rewind = !1, this.url = '';
}

function InteractionStatesManager(e) {
  this.i = e;
}

function PlayMode(e, t, i) {
  var r = new SPE.Raycaster();
  var a,
      s = {};

  function n(e) {
    r.setFromCamera(m(e), i);
    var t = s[InteractionEvent.TYPE.MOUSE_DOWN];

    for (var _e44 = 0, _i35 = t.length; _e44 < _i35; ++_e44) {
      if (r.intersectObject(t[_e44].object, !1).length > 0) {
        t[_e44].interactionEvent.dispatch();

        break;
      }
    }
  }

  function o(e) {
    r.setFromCamera(m(e), i);
    var t = s[InteractionEvent.TYPE.MOUSE_UP];

    for (var _e45 = 0, _i36 = t.length; _e45 < _i36; ++_e45) {
      if (r.intersectObject(t[_e45].object, !1).length > 0) {
        t[_e45].interactionEvent.dispatch();

        break;
      }
    }
  }

  function h(e) {
    r.setFromCamera(m(e), i);
    var t = s[InteractionEvent.TYPE.MOUSE_HOVER].find(function (e) {
      return r.intersectObject(e.object, !1).length > 0;
    }),
        n = void 0 !== t ? t.interactionEvent : void 0;
    a !== n && (void 0 !== a && a.dispatchReverse(), void 0 !== t && n.dispatch()), a = n;
  }

  function l(e) {
    var t = -1 * (e.pageX - window.innerWidth / 2),
        i = 1 * (e.pageY - window.innerHeight / 2);
    s[InteractionEvent.TYPE.LOOK_AT].forEach(function (e) {
      e.object.interaction.lookAt(t, i);
    });
  }

  function c(e) {
    s[InteractionEvent.TYPE.KEY_DOWN].forEach(function (t) {
      t.interactionEvent.key === e.key && t.interactionEvent.dispatch();
    });
  }

  function d(e) {
    s[InteractionEvent.TYPE.KEY_UP].forEach(function (t) {
      t.interactionEvent.key === e.key && t.interactionEvent.dispatch();
    });
  }

  function m(t) {
    var i = e.getBoundingClientRect();
    return {
      x: (t.clientX - i.left) / i.width * 2 - 1,
      y: -(t.clientY - i.top) / i.height * 2 + 1
    };
  }
  this.activate = function () {
    this.isEnable = !0;

    for (var _e46 in InteractionEvent.TYPE) {
      s[InteractionEvent.TYPE[_e46]] = [];
    }

    t.traverseEntity(function (e) {
      if (void 0 !== e.interaction) {
        e.interaction.start();
        var _t35 = e.interaction.events;

        for (var _i37 = 0, _r16 = _t35.length; _i37 < _r16; ++_i37) {
          s[_t35[_i37].type].push({
            interactionEvent: _t35[_i37],
            object: e
          });
        }
      }
    }), s[InteractionEvent.TYPE.MOUSE_DOWN].length > 0 && e.addEventListener('pointerdown', n, !1), s[InteractionEvent.TYPE.MOUSE_UP].length > 0 && e.addEventListener('pointerup', o, !1), s[InteractionEvent.TYPE.MOUSE_HOVER].length > 0 && e.addEventListener('pointermove', h, !1), s[InteractionEvent.TYPE.LOOK_AT].length > 0 && e.addEventListener('mousemove', l, !1), s[InteractionEvent.TYPE.KEY_DOWN].length > 0 && document.addEventListener('keydown', c, !1), s[InteractionEvent.TYPE.KEY_UP].length > 0 && document.addEventListener('keyup', d, !1);
  }, this.deactivate = function () {
    t.traverseEntity(function (e) {
      void 0 !== e.interaction && e.interaction.end();
    }), s[InteractionEvent.TYPE.MOUSE_DOWN].length > 0 && e.removeEventListener('pointerdown', n), s[InteractionEvent.TYPE.MOUSE_UP].length > 0 && e.removeEventListener('pointerup', o), s[InteractionEvent.TYPE.MOUSE_HOVER].length > 0 && e.removeEventListener('pointermove', h), s[InteractionEvent.TYPE.LOOK_AT].length > 0 && e.removeEventListener('pointermove', l, !1), s[InteractionEvent.TYPE.KEY_DOWN].length > 0 && document.removeEventListener('keydown', c), s[InteractionEvent.TYPE.KEY_UP].length > 0 && document.removeEventListener('keyup', d), s = {}, this.isEnable = !1;
  }, this.reset = function () {
    t.traverseEntity(function (e) {
      e.interaction.start();
    });
  };
}
THREE.OrbitControls = function (e, t) {
  var i, r, a, s, n, o;
  void 0 === t && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = e, this.domElement = t, this.enabled = !0, this.target = new THREE.Vector3(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40
  }, this.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN
  }, this.touches = {
    ONE: THREE.TOUCH.ROTATE,
    TWO: THREE.TOUCH.DOLLY_PAN
  }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function () {
    return f.phi;
  }, this.getAzimuthalAngle = function () {
    return f.theta;
  }, this.saveState = function () {
    h.target0.copy(h.target), h.position0.copy(h.object.position), h.zoom0 = h.object.zoom;
  }, this.reset = function () {
    h.target.copy(h.target0), h.object.position.copy(h.position0), h.object.zoom = h.zoom0, h.object.updateProjectionMatrix(), h.dispatchEvent(l), h.update(), u = m.NONE;
  }, this.update = (i = new THREE.Vector3(), r = new THREE.Quaternion().setFromUnitVectors(e.up, new THREE.Vector3(0, 1, 0)), a = r.clone().inverse(), s = new THREE.Vector3(), n = new THREE.Quaternion(), o = 2 * Math.PI, function () {
    var e = h.object.position;
    i.copy(e).sub(h.target), i.applyQuaternion(r), f.setFromVector3(i), h.autoRotate && u === m.NONE && P(2 * Math.PI / 60 / 60 * h.autoRotateSpeed), h.enableDamping ? (f.theta += E.theta * h.dampingFactor, f.phi += E.phi * h.dampingFactor) : (f.theta += E.theta, f.phi += E.phi);
    var t = h.minAzimuthAngle,
        c = h.maxAzimuthAngle;
    return isFinite(t) && isFinite(c) && (t < -Math.PI ? t += o : t > Math.PI && (t -= o), c < -Math.PI ? c += o : c > Math.PI && (c -= o), f.theta = t < c ? Math.max(t, Math.min(c, f.theta)) : f.theta > (t + c) / 2 ? Math.max(t, f.theta) : Math.min(c, f.theta)), f.phi = Math.max(h.minPolarAngle, Math.min(h.maxPolarAngle, f.phi)), f.makeSafe(), f.radius *= g, f.radius = Math.max(h.minDistance, Math.min(h.maxDistance, f.radius)), !0 === h.enableDamping ? h.target.addScaledVector(y, h.dampingFactor) : h.target.add(y), i.setFromSpherical(f), i.applyQuaternion(a), e.copy(h.target).add(i), h.object.lookAt(h.target), !0 === h.enableDamping ? (E.theta *= 1 - h.dampingFactor, E.phi *= 1 - h.dampingFactor, y.multiplyScalar(1 - h.dampingFactor)) : (E.set(0, 0, 0), y.set(0, 0, 0)), g = 1, !!(v || s.distanceToSquared(h.object.position) > p || 8 * (1 - n.dot(h.object.quaternion)) > p) && (h.dispatchEvent(l), s.copy(h.object.position), n.copy(h.object.quaternion), v = !1, !0);
  }), this.dispose = function () {
    h.domElement.removeEventListener('contextmenu', ee, !1), h.domElement.removeEventListener('pointerdown', W, !1), h.domElement.removeEventListener('wheel', q, !1), h.domElement.removeEventListener('touchstart', K, !1), h.domElement.removeEventListener('touchend', Q, !1), h.domElement.removeEventListener('touchmove', Z, !1), h.domElement.ownerDocument.removeEventListener('pointermove', k, !1), h.domElement.ownerDocument.removeEventListener('pointerup', X, !1), h.domElement.removeEventListener('keydown', J, !1);
  };

  var h = this,
      l = {
    type: 'change'
  },
      c = {
    type: 'start'
  },
      d = {
    type: 'end'
  },
      m = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
  },
      u = m.NONE,
      p = 1e-6,
      f = new THREE.Spherical(),
      E = new THREE.Spherical(),
      g = 1,
      y = new THREE.Vector3(),
      v = !1,
      _ = new THREE.Vector2(),
      S = new THREE.Vector2(),
      x = new THREE.Vector2(),
      b = new THREE.Vector2(),
      T = new THREE.Vector2(),
      R = new THREE.Vector2(),
      w = new THREE.Vector2(),
      M = new THREE.Vector2(),
      L = new THREE.Vector2();

  function I() {
    return Math.pow(0.95, h.zoomSpeed);
  }

  function P(e) {
    E.theta -= e;
  }

  function H(e) {
    E.phi -= e;
  }

  var A,
      C = (A = new THREE.Vector3(), function (e, t) {
    A.setFromMatrixColumn(t, 0), A.multiplyScalar(-e), y.add(A);
  }),
      D = function () {
    var e = new THREE.Vector3();
    return function (t, i) {
      !0 === h.screenSpacePanning ? e.setFromMatrixColumn(i, 1) : (e.setFromMatrixColumn(i, 0), e.crossVectors(h.object.up, e)), e.multiplyScalar(t), y.add(e);
    };
  }(),
      O = function () {
    var e = new THREE.Vector3();
    return function (t, i) {
      var r = h.domElement;

      if (h.object.isPerspectiveCamera) {
        var a = h.object.position;
        e.copy(a).sub(h.target);
        var s = e.length();
        s *= Math.tan(h.object.fov / 2 * Math.PI / 180), C(2 * t * s / r.clientHeight, h.object.matrix), D(2 * i * s / r.clientHeight, h.object.matrix);
      } else h.object.isOrthographicCamera ? (C(t * (h.object.right - h.object.left) / h.object.zoom / r.clientWidth, h.object.matrix), D(i * (h.object.top - h.object.bottom) / h.object.zoom / r.clientHeight, h.object.matrix)) : (console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.'), h.enablePan = !1);
    };
  }();

  function $(e) {
    h.object.isPerspectiveCamera ? g /= e : h.object.isOrthographicCamera ? (h.object.zoom = Math.max(h.minZoom, Math.min(h.maxZoom, h.object.zoom * e)), h.object.updateProjectionMatrix(), v = !0) : (console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'), h.enableZoom = !1);
  }

  function U(e) {
    h.object.isPerspectiveCamera ? g *= e : h.object.isOrthographicCamera ? (h.object.zoom = Math.max(h.minZoom, Math.min(h.maxZoom, h.object.zoom / e)), h.object.updateProjectionMatrix(), v = !0) : (console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'), h.enableZoom = !1);
  }

  function B(e) {
    _.set(e.clientX, e.clientY);
  }

  function G(e) {
    b.set(e.clientX, e.clientY);
  }

  function N(e) {
    if (1 == e.touches.length) _.set(e.touches[0].pageX, e.touches[0].pageY);else {
      var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
          i = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);

      _.set(t, i);
    }
  }

  function z(e) {
    if (1 == e.touches.length) b.set(e.touches[0].pageX, e.touches[0].pageY);else {
      var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
          i = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      b.set(t, i);
    }
  }

  function V(e) {
    var t = e.touches[0].pageX - e.touches[1].pageX,
        i = e.touches[0].pageY - e.touches[1].pageY,
        r = Math.sqrt(t * t + i * i);
    w.set(0, r);
  }

  function j(e) {
    if (1 == e.touches.length) S.set(e.touches[0].pageX, e.touches[0].pageY);else {
      var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
          i = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      S.set(t, i);
    }
    x.subVectors(S, _).multiplyScalar(h.rotateSpeed);
    var r = h.domElement;
    P(2 * Math.PI * x.x / r.clientHeight), H(2 * Math.PI * x.y / r.clientHeight), _.copy(S);
  }

  function F(e) {
    if (1 == e.touches.length) T.set(e.touches[0].pageX, e.touches[0].pageY);else {
      var t = 0.5 * (e.touches[0].pageX + e.touches[1].pageX),
          i = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      T.set(t, i);
    }
    R.subVectors(T, b).multiplyScalar(h.panSpeed), O(R.x, R.y), b.copy(T);
  }

  function Y(e) {
    var t = e.touches[0].pageX - e.touches[1].pageX,
        i = e.touches[0].pageY - e.touches[1].pageY,
        r = Math.sqrt(t * t + i * i);
    M.set(0, r), L.set(0, Math.pow(M.y / w.y, h.zoomSpeed)), $(L.y), w.copy(M);
  }

  function W(e) {
    if (!1 !== h.enabled) switch (e.pointerType) {
      case 'mouse':
      case 'pen':
        !function (e) {
          var t;

          switch (e.preventDefault(), h.domElement.focus ? h.domElement.focus() : window.focus(), e.button) {
            case 0:
              t = h.mouseButtons.LEFT;
              break;

            case 1:
              t = h.mouseButtons.MIDDLE;
              break;

            case 2:
              t = h.mouseButtons.RIGHT;
              break;

            default:
              t = -1;
          }

          switch (t) {
            case THREE.MOUSE.DOLLY:
              if (!1 === h.enableZoom) return;
              !function (e) {
                w.set(e.clientX, e.clientY);
              }(e), u = m.DOLLY;
              break;

            case THREE.MOUSE.ROTATE:
              if (e.ctrlKey || e.metaKey || e.shiftKey) {
                if (!1 === h.enablePan) return;
                G(e), u = m.PAN;
              } else {
                if (!1 === h.enableRotate) return;
                B(e), u = m.ROTATE;
              }

              break;

            case THREE.MOUSE.PAN:
              if (e.ctrlKey || e.metaKey || e.shiftKey) {
                if (!1 === h.enableRotate) return;
                B(e), u = m.ROTATE;
              } else {
                if (!1 === h.enablePan) return;
                G(e), u = m.PAN;
              }

              break;

            default:
              u = m.NONE;
          }

          u !== m.NONE && (h.domElement.ownerDocument.addEventListener('pointermove', k, !1), h.domElement.ownerDocument.addEventListener('pointerup', X, !1), h.dispatchEvent(c));
        }(e);
    }
  }

  function k(e) {
    if (!1 !== h.enabled) switch (e.pointerType) {
      case 'mouse':
      case 'pen':
        !function (e) {
          if (!1 === h.enabled) return;

          switch (e.preventDefault(), u) {
            case m.ROTATE:
              if (!1 === h.enableRotate) return;
              !function (e) {
                S.set(e.clientX, e.clientY), x.subVectors(S, _).multiplyScalar(h.rotateSpeed);
                var t = h.domElement;
                P(2 * Math.PI * x.x / t.clientHeight), H(2 * Math.PI * x.y / t.clientHeight), _.copy(S), h.update();
              }(e);
              break;

            case m.DOLLY:
              if (!1 === h.enableZoom) return;
              !function (e) {
                M.set(e.clientX, e.clientY), L.subVectors(M, w), L.y > 0 ? $(I()) : L.y < 0 && U(I()), w.copy(M), h.update();
              }(e);
              break;

            case m.PAN:
              if (!1 === h.enablePan) return;
              !function (e) {
                T.set(e.clientX, e.clientY), R.subVectors(T, b).multiplyScalar(h.panSpeed), O(R.x, R.y), b.copy(T), h.update();
              }(e);
          }
        }(e);
    }
  }

  function X(e) {
    if (!1 !== h.enabled) switch (e.pointerType) {
      case 'mouse':
      case 'pen':
        !function (e) {
          if (!1 === h.enabled) return;
          h.domElement.ownerDocument.removeEventListener('pointermove', k, !1), h.domElement.ownerDocument.removeEventListener('pointerup', X, !1), h.dispatchEvent(d), u = m.NONE;
        }();
    }
  }

  function q(e) {
    !1 === h.enabled || !1 === h.enableZoom || u !== m.NONE && u !== m.ROTATE || (e.preventDefault(), e.stopPropagation(), h.dispatchEvent(c), function (e) {
      e.deltaY < 0 ? U(I()) : e.deltaY > 0 && $(I()), h.update();
    }(e), h.dispatchEvent(d));
  }

  function J(e) {
    !1 !== h.enabled && !1 !== h.enableKeys && !1 !== h.enablePan && function (e) {
      var t = !1;

      switch (e.keyCode) {
        case h.keys.UP:
          O(0, h.keyPanSpeed), t = !0;
          break;

        case h.keys.BOTTOM:
          O(0, -h.keyPanSpeed), t = !0;
          break;

        case h.keys.LEFT:
          O(h.keyPanSpeed, 0), t = !0;
          break;

        case h.keys.RIGHT:
          O(-h.keyPanSpeed, 0), t = !0;
      }

      t && (e.preventDefault(), h.update());
    }(e);
  }

  function K(e) {
    if (!1 !== h.enabled) {
      switch (e.preventDefault(), e.touches.length) {
        case 1:
          switch (h.touches.ONE) {
            case THREE.TOUCH.ROTATE:
              if (!1 === h.enableRotate) return;
              N(e), u = m.TOUCH_ROTATE;
              break;

            case THREE.TOUCH.PAN:
              if (!1 === h.enablePan) return;
              z(e), u = m.TOUCH_PAN;
              break;

            default:
              u = m.NONE;
          }

          break;

        case 2:
          switch (h.touches.TWO) {
            case THREE.TOUCH.DOLLY_PAN:
              if (!1 === h.enableZoom && !1 === h.enablePan) return;
              !function (e) {
                h.enableZoom && V(e), h.enablePan && z(e);
              }(e), u = m.TOUCH_DOLLY_PAN;
              break;

            case THREE.TOUCH.DOLLY_ROTATE:
              if (!1 === h.enableZoom && !1 === h.enableRotate) return;
              !function (e) {
                h.enableZoom && V(e), h.enableRotate && N(e);
              }(e), u = m.TOUCH_DOLLY_ROTATE;
              break;

            default:
              u = m.NONE;
          }

          break;

        default:
          u = m.NONE;
      }

      u !== m.NONE && h.dispatchEvent(c);
    }
  }

  function Z(e) {
    if (!1 !== h.enabled) switch (e.preventDefault(), e.stopPropagation(), u) {
      case m.TOUCH_ROTATE:
        if (!1 === h.enableRotate) return;
        j(e), h.update();
        break;

      case m.TOUCH_PAN:
        if (!1 === h.enablePan) return;
        F(e), h.update();
        break;

      case m.TOUCH_DOLLY_PAN:
        if (!1 === h.enableZoom && !1 === h.enablePan) return;
        !function (e) {
          h.enableZoom && Y(e), h.enablePan && F(e);
        }(e), h.update();
        break;

      case m.TOUCH_DOLLY_ROTATE:
        if (!1 === h.enableZoom && !1 === h.enableRotate) return;
        !function (e) {
          h.enableZoom && Y(e), h.enableRotate && j(e);
        }(e), h.update();
        break;

      default:
        u = m.NONE;
    }
  }

  function Q(e) {
    !1 !== h.enabled && (h.dispatchEvent(d), u = m.NONE);
  }

  function ee(e) {
    !1 !== h.enabled && e.preventDefault();
  }

  h.domElement.addEventListener('contextmenu', ee, !1), h.domElement.addEventListener('pointerdown', W, !1), h.domElement.addEventListener('wheel', q, !1), h.domElement.addEventListener('touchstart', K, !1), h.domElement.addEventListener('touchend', Q, !1), h.domElement.addEventListener('touchmove', Z, !1), h.domElement.addEventListener('keydown', J, !1), -1 === h.domElement.tabIndex && (h.domElement.tabIndex = 0), this.update();
}, THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype), THREE.OrbitControls.prototype.constructor = THREE.OrbitControls, THREE.MapControls = function (e, t) {
  THREE.OrbitControls.call(this, e, t), this.screenSpacePanning = !1, this.mouseButtons.LEFT = THREE.MOUSE.PAN, this.mouseButtons.RIGHT = THREE.MOUSE.ROTATE, this.touches.ONE = THREE.TOUCH.PAN, this.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;
}, THREE.MapControls.prototype = Object.create(THREE.EventDispatcher.prototype), THREE.MapControls.prototype.constructor = THREE.MapControls, Interaction.targets = new Set(), Interaction.prototype = {
  constructor: Interaction,
  newState: function newState(e) {
    var t = new InteractionState();
    return t.name = e, t.update(this.object), this.selectedState = this.states.length, this.states.push(t), t;
  },
  addState: function addState(e, t) {
    this.states.splice(t, 0, e);
  },
  removeState: function removeState(e) {
    this.selectedState === e && (this.selectedState = void 0), this.states.splice(e, 1);
  },
  selectState: function selectState(e) {
    void 0 !== e && this.states[e].execute(this.object), this.selectedState = e;
  },
  getEventType: function getEventType(e) {
    return this.events.find(function (t) {
      return t.type === e;
    });
  },
  hasEventType: function hasEventType(e, t) {
    return e === InteractionEvent.TYPE.KEY_DOWN || e === InteractionEvent.TYPE.KEY_UP ? void 0 !== t && this.events.some(function (i) {
      return i.type === e && i.key === t;
    }) : this.events.some(function (t) {
      return t.type === e;
    });
  },
  newEvent: function newEvent() {
    var _this11 = this;

    var e = InteractionEvent.ORDER.find(function (e) {
      return !1 === _this11.hasEventType(e);
    }),
        t = new InteractionEvent(e);
    return this.events.push(t), t;
  },
  addEvent: function addEvent(e, t) {
    this.events.splice(t, 0, e);
    var i = this.events[t].targets;

    for (var _e47 = 0, _t36 = i.length; _e47 < _t36; ++_e47) {
      void 0 !== i[_e47].object && Interaction.targets.add(i[_e47]);
    }
  },
  removeEvent: function removeEvent(e) {
    var t = this.events[e].targets;

    for (var _e48 = 0, i = t.length; _e48 < i; ++_e48) {
      void 0 !== t[_e48].object && Interaction.targets["delete"](t[_e48]);
    }

    this.events.splice(e, 1);
  },
  copy: function copy(e) {
    this.selectedState = e.selectedState;

    for (var t = 0, i = e.states.length; t < i; ++t) {
      this.addState(e.states[t].clone(), t);
    }

    for (var _t37 = 0, _i38 = e.events.length; _t37 < _i38; ++_t37) {
      this.addEvent(e.events[_t37].clone(), _t37);
      var _i39 = e.events[_t37].targets;

      for (var r = 0, a = _i39.length; r < a; ++r) {
        var _a7 = _i39[r].clone();

        _i39[r].object === e.object ? (_a7.object = this.object, _a7.state = this.states[e.states.indexOf(_i39[r].state)]) : (_a7.object = _i39[r].object, _a7.state = _i39[r].state), this.events[_t37].addTarget(_a7, r);
      }
    }

    return this;
  },
  clone: function clone(e) {
    return new Interaction(e).copy(this);
  },
  toJSON: function toJSON(e) {
    var t = {};

    if (t.uuid = this.uuid, void 0 !== this.selectedState && (t.selectedState = this.selectedState), this.states.length > 0) {
      t.states = [];

      for (var a = 0, s = this.states.length; a < s; ++a) {
        t.states.push((i = e.interactionStates, r = this.states[a], void 0 === i[r.uuid] && (i[r.uuid] = r.toJSON(e)), r.uuid));
      }
    }

    var i, r;

    if (this.events.length > 0) {
      t.events = [];

      for (var _i40 = 0, _r17 = this.events.length; _i40 < _r17; ++_i40) {
        t.events.push(this.events[_i40].toJSON(e));
      }
    }

    return t;
  },
  fromJSON: function fromJSON(e, t, i) {
    if (this.uuid = e.uuid, this.selectedState = e.selectedState, this.states = [], this.events = [], void 0 !== e.states) for (var _t38 = 0, r = e.states.length; _t38 < r; ++_t38) {
      this.states.push(i[e.states[_t38]]);
    }
    if (void 0 !== e.events) for (var _r18 = 0, a = e.events.length; _r18 < a; ++_r18) {
      this.events.push(new InteractionEvent().fromJSON(e.events[_r18], t, i));
    }
    return this;
  },
  start: function start() {
    if (void 0 !== this.animation && (this.animation.pause(), this.animation = void 0, this._removeBackLayer()), this.states.length > 1) {
      this.states[0].execute(this.object), this.currentState = this.states[0], this.prevState = void 0;
      var e = this.getEventType(InteractionEvent.TYPE.START);
      void 0 !== e && e.targets.length > 0 && this.play(e.targets[0]);
    }
  },
  end: function end() {
    void 0 !== this.animation && (this.animation.pause(), this.animation = void 0, this._removeBackLayer()), this.states.length > 1 && this.states[this.selectedState].execute(this.object), this.currentState = void 0, this.prevState = void 0;
  },
  lookAt: function lookAt(e, t) {
    var i = new THREE.Vector3(e, t, -600);
    this.object.lookAt(i);
  },
  play: function play(e) {
    void 0 !== e.state && this.animate(e.state, e);
  },
  reverse: function reverse(e) {
    this.animate(this.prevState, e);
  },
  _removeBackLayer: function _removeBackLayer() {
    if (void 0 !== this.object.material) {
      var e = this.object.material;
      if (Array.isArray(e)) for (var t = 0, i = e.length; t < i; ++t) {
        var _i41 = e[t].layersList;
        var r = _i41.head;

        for (; r;) {
          if (r.backLayer) {
            delete r.backLayer;
            var _e49 = r.next;
            _i41.removeLayer(r.id), r = _e49;
          } else r.isBack ? (delete r.isBack, r = r.next) : r = r.next;
        }
      } else {
        var _t39 = e.layersList;
        var _i42 = _t39.head;

        for (; _i42;) {
          for (; _i42;) {
            if (_i42.backLayer) {
              delete _i42.backLayer;
              var _e50 = _i42.next;
              _t39.removeLayer(_i42.id), _i42 = _e50;
            } else _i42.isBack ? (delete _i42.isBack, _i42 = _i42.next) : _i42 = _i42.next;
          }
        }
      }
    }
  },
  getTimingFunction: function getTimingFunction(e, t, i) {
    switch (e) {
      case InteractionTarget.EASING.LINEAR:
        return 'cubicBezier( 0, 0, 1, 1 )';

      case InteractionTarget.EASING.EASE:
        return 'cubicBezier( .25, .1, .25, 1 )';

      case InteractionTarget.EASING.EASE_IN:
        return 'cubicBezier( .42, 0, 1, 1 )';

      case InteractionTarget.EASING.EASE_OUT:
        return 'cubicBezier( 0, 0, .58, 1 )';

      case InteractionTarget.EASING.EASE_IN_OUT:
        return 'cubicBezier( .42, 0, .58, 1 )';

      case InteractionTarget.EASING.CUBIC:
        return "cubicBezier( " + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + " )";

      case InteractionTarget.EASING.SPRING:
        return "spring( " + i.mass + ", " + i.stiffness + ", " + i.damping + ", " + i.velocity + " )";
    }
  },
  animate: function animate(e, t) {
    var _this12 = this;

    this.currentState !== e && (this.prevState = this.currentState, this.currentState = e), void 0 !== this.animation && this.animation.pause(), this._removeBackLayer(), !0 === t.cycle && !0 === t.repeat ? this.animation = anime.timeline({
      duration: t.duration,
      delay: t.delay / 2,
      endDelay: t.delay / 2,
      direction: 'alternate',
      loop: !0,
      rewind: t.rewind,
      easing: this.getTimingFunction(t.easing, t.cubicControls, t.springParameters)
    }) : !0 === t.cycle && !1 === t.repeat ? this.animation = anime.timeline({
      duration: t.duration,
      delay: t.delay,
      endDelay: t.delay / 2,
      direction: 'alternate',
      rewind: t.rewind,
      easing: this.getTimingFunction(t.easing, t.cubicControls, t.springParameters)
    }) : !1 === t.cycle && !0 === t.repeat ? this.animation = anime.timeline({
      duration: t.duration,
      delay: t.delay,
      direction: 'normal',
      loop: !0,
      easing: this.getTimingFunction(t.easing, t.cubicControls, t.springParameters)
    }) : this.animation = anime.timeline({
      duration: t.duration,
      delay: t.delay,
      direction: 'normal',
      easing: this.getTimingFunction(t.easing, t.cubicControls, t.springParameters)
    }), this.animation.finished.then(function () {
      _this12._removeBackLayer();
    }), this.animateMatrix(e), this.animateGeometry(e), this.animateMaterial(e), this.animateCamera(e);
  },
  animateMatrix: function animateMatrix(e) {
    var _this13 = this;

    if (!1 === this.object.position.equals(e.position)) {
      var _t40 = this.object.position.clone(),
          _i43 = {
        t: 0
      };

      this.animation.add({
        targets: _i43,
        t: 1,
        update: function update() {
          _this13.object.position.lerpVectors(_t40, e.position, _i43.t);
        }
      }, 0);
    }

    if (!1 === this.object.scale.equals(e.scale)) {
      var _t41 = this.object.scale.clone(),
          _i44 = {
        t: 0
      };

      this.animation.add({
        targets: _i44,
        t: 1,
        update: function update() {
          _this13.object.scale.lerpVectors(_t41, e.scale, _i44.t);
        }
      }, 0);
    }

    if (!1 === this.object.rotation.equals(e.rotation)) {
      var _t42 = this.object.quaternion.clone(),
          _i45 = {
        t: 0
      },
          _r19 = {
        x: this.object.rotation.x - e.rotation.x,
        y: this.object.rotation.y - e.rotation.y,
        z: this.object.rotation.z - e.rotation.z
      },
          _a8 = e.rotation.clone(),
          _s5 = 0.01 * THREE.Math.DEG2RAD,
          _n2 = 359.99 * THREE.Math.DEG2RAD;

      _r19.x === 2 * Math.PI ? 0 === _a8.x ? _a8.x = _s5 : _a8.x === 2 * Math.PI && (_a8.x = _n2) : _r19.x === 2 * -Math.PI && (0 === _a8.x ? _a8.x = -_s5 : _a8.x === 2 * Math.PI && (_a8.x = -_n2)), _r19.y === 2 * Math.PI ? 0 === _a8.y ? _a8.y = _s5 : _a8.y === 2 * Math.PI && (_a8.y = _n2) : _r19.y === 2 * -Math.PI && (0 === _a8.y ? _a8.y = -_s5 : _a8.y === 2 * Math.PI && (_a8.y = -_n2)), _r19.z === 2 * Math.PI ? 0 === _a8.z ? _a8.z = _s5 : _a8.z === 2 * Math.PI && (_a8.z = _n2) : _r19.z === 2 * -Math.PI && (0 === _a8.z ? _a8.z = -_s5 : _a8.z === 2 * Math.PI && (_a8.z = -_n2));

      var _o5 = new THREE.Quaternion().setFromEuler(_a8);

      this.animation.add({
        targets: _i45,
        t: 1,
        update: function update() {
          SPE.Math.slerp(_t42, _o5, _this13.object.quaternion, _i45.t);
        }
      }, 0);
    }

    var t = new THREE.Vector3(),
        i = new THREE.Quaternion(),
        r = new THREE.Vector3(),
        a = new THREE.Vector3(),
        s = new THREE.Quaternion(),
        n = new THREE.Vector3(),
        o = new THREE.Vector3(),
        h = new THREE.Quaternion(),
        l = new THREE.Vector3();

    if (this.object.hiddenMatrix.decompose(t, i, r), e.hiddenMatrix.decompose(a, s, n), !1 === this.object.hiddenMatrix.equals(e.hiddenMatrix)) {
      var _e51 = {
        t: 0
      };
      this.animation.add({
        targets: _e51,
        t: 1,
        update: function update() {
          THREE.Quaternion.slerp(i, s, h, _e51.t), o.lerpVectors(t, a, _e51.t), l.lerpVectors(r, n, _e51.t), _this13.object.hiddenMatrix.compose(o, h, l);
        }
      }, 0);
    }
  },
  animateGeometry: function animateGeometry(e) {
    var _this14 = this;

    if (void 0 === this.object.geometry) return;
    var t = this.object.geometry.userData.parameters;
    e.geometry.width === t.width && e.geometry.height === t.height && e.geometry.depth === t.depth || this.animation.add({
      targets: this.object.geometry.userData.parameters,
      width: e.geometry.width,
      height: e.geometry.height,
      depth: e.geometry.depth,
      update: function update() {
        var e = SPE[_this14.object.geometry.userData.type].buildFromGeometry(_this14.object.geometry, {
          width: t.width,
          height: t.height,
          depth: t.depth
        });

        _this14.object.updateGeometry(e);
      }
    }, 0);
  },
  animateMaterial: function animateMaterial(e) {
    var _this15 = this;

    if (void 0 === this.object.material) return;

    var t = function t(e, _t43, i, r) {
      var a = e.layersList;

      var _loop2 = function _loop2(_e52, _s6) {
        var s = r[_e52],
            n = "f" + _t43.id + "_" + s,
            o = "f" + i.id + "_" + s,
            h = _t43.uniforms[n],
            l = i.uniforms[o];
        'mode' !== s && 'boolean' != typeof h.value ? 'number' != typeof h.value ? h.value instanceof THREE.Vector2 ? !1 === h.value.equals(l.value) && _this15.animation.add({
          targets: h.value,
          x: l.value.x,
          y: l.value.y,
          update: function update() {
            a.updateLayerUniformByLayer(_t43, n);
          }
        }, 0) : h.value instanceof THREE.Vector3 ? !1 === h.value.equals(l.value) && _this15.animation.add({
          targets: h.value,
          x: l.value.x,
          y: l.value.y,
          z: l.value.z,
          update: function update() {
            a.updateLayerUniformByLayer(_t43, n);
          }
        }, 0) : h.value instanceof THREE.Color && !1 === h.value.equals(l.value) && _this15.animation.add({
          targets: h.value,
          r: l.value.r,
          g: l.value.g,
          b: l.value.b,
          update: function update() {
            a.updateLayerUniformByLayer(_t43, n);
          }
        }, 0) : h.value !== l.value && _this15.animation.add({
          targets: h,
          value: l.value,
          update: function update() {
            a.updateLayerUniformByLayer(_t43, n);
          }
        }, 0) : h.value !== l.value && (h.value = l.value, a.updateLayerUniformByLayer(_t43, n));
      };

      for (var _e52 = 0, _s6 = (r = void 0 !== r ? r : _t43.paramNames).length; _e52 < _s6; ++_e52) {
        _loop2(_e52);
      }

      if (_t43.backLayer) {
        var _e53 = _t43.backLayer.id,
            _i46 = "f" + _e53 + "_alpha",
            _r20 = _t43.backLayer.uniforms[_i46];

        _this15.animation.add({
          targets: _r20,
          value: 0,
          update: function update() {
            a.updateLayerUniform(_e53, _i46);
          }
        }, 0);
      }
    },
        i = function i(e, t, _i47) {
      var r = e.layersList;

      if (void 0 === t.backLayer) {
        var _a9 = _i47.getValues();

        _a9.alpha = 0, t.backLayer = r.addLayerBeforeAt(_a9, t), t.backLayer.isBack = !0, e.dispose();
      }

      var a = "f" + t.id + "_alpha",
          s = "f" + t.backLayer.id + "_alpha",
          n = t.uniforms[a],
          o = t.backLayer.uniforms[s];

      _this15.animation.add({
        targets: n,
        value: 0,
        update: function update() {
          r.updateLayerUniformByLayer(t, a);
        }
      }, 0).add({
        targets: o,
        value: _i47.uniforms["f" + _i47.id + "_alpha"].value,
        update: function update() {
          r.updateLayerUniformByLayer(t.backLayer, s);
        }
      }, 0);
    },
        r = function r(e, i, _r21) {
      var a = e.layersList,
          s = "f" + i.id + "_mat",
          n = "f" + i.id + "_texture",
          o = i.uniforms[n].value,
          h = _r21.uniforms["f" + _r21.id + "_texture"].value,
          l = i.uniforms["f" + i.id + "_crop"],
          c = _r21.uniforms["f" + _r21.id + "_crop"];

      if (l.value !== c.value && (l.value = c.value, a.updateLayerUniformByLayer(i, "f" + i.id + "_crop")), o.wrapS === h.wrapS && o.wrapT === h.wrapT || (o.wrapS = h.wrapS, o.wrapT = h.wrapT, o.needsUpdate = !0, a.updateLayerUniform(i, n)), !1 === o.matrix.equals(h.matrix)) {
        var _e54 = {
          repeatX: o.repeat.x,
          repeatY: o.repeat.y,
          offsetX: o.offset.x,
          offsetY: o.offset.y
        };

        _this15.animation.add({
          targets: _e54,
          repeatX: h.repeat.x,
          repeatY: h.repeat.y,
          offsetX: h.offset.x,
          offsetY: h.offset.y,
          update: function update() {
            o.repeat.set(_e54.repeatX, _e54.repeatY), o.offset.set(_e54.offsetX, _e54.offsetY), o.updateMatrix(), a.updateLayerUniformByLayer(i, s);
          }
        }, 0);
      }

      t(e, i, _r21, ['alpha', 'mode']);
    },
        a = function a(e, i, r) {
      var a = e.layersList,
          s = i.uniforms["f" + i.id + "_num"],
          n = r.uniforms["f" + r.id + "_num"],
          o = "f" + i.id + "_steps",
          h = "f" + r.id + "_steps",
          l = i.uniforms[o],
          c = r.uniforms[h],
          d = "f" + i.id + "_colors",
          m = "f" + r.id + "_colors",
          u = i.uniforms[d],
          p = r.uniforms[m];

      if (s.value <= n.value) {
        var _e55 = u.value[s.value - 1];

        for (var _t44 = s.value; _t44 < n.value; ++_t44) {
          l.value[_t44] = 1, a.updateLayerUniformByLayer(i, d), u.value[_t44].set(_e55.x, _e55.y, _e55.z, _e55.w), a.updateLayerUniformByLayer(i, o);
        }

        s.value !== n.value && (s.value = n.value, a.updateLayerUniformByLayer(i, "f" + i.id + "_num"));

        var _loop3 = function _loop3(_e56) {
          var t = u.value[_e56],
              r = p.value[_e56];

          if (l.value[_e56] !== c.value[_e56] || !1 === t.equals(r)) {
            var _s7 = {
              value: l.value[_e56]
            };

            _this15.animation.add({
              targets: [_s7, t],
              value: c.value[_e56],
              x: r.x,
              y: r.y,
              z: r.z,
              w: r.w,
              update: function update() {
                l.value[_e56] = _s7.value, a.updateLayerUniformByLayer(i, o), a.updateLayerUniformByLayer(i, d);
              }
            }, 0);
          }
        };

        for (var _e56 = 0; _e56 < n.value; ++_e56) {
          _loop3(_e56);
        }
      } else {
        (function () {
          var e = [];

          var _loop4 = function _loop4(_t45) {
            var r = u.value[_t45],
                s = p.value[_t45];
            l.value[_t45] === c.value[_t45] && !1 !== r.equals(s) || e.push(new Promise(function (e) {
              var n = {
                value: l.value[_t45]
              };

              _this15.animation.add({
                targets: [n, r],
                value: c.value[_t45],
                x: s.x,
                y: s.y,
                z: s.z,
                w: s.w,
                update: function update() {
                  l.value[_t45] = n.value, a.updateLayerUniformByLayer(i, o), a.updateLayerUniformByLayer(i, d);
                },
                complete: function complete() {
                  e(_t45);
                }
              }, 0);
            }));
          };

          for (var _t45 = 0; _t45 < n.value; ++_t45) {
            _loop4(_t45);
          }

          var t = p.value[n.value - 1];

          var _loop5 = function _loop5(_r22) {
            var s = u.value[_r22];
            l.value[_r22] === c.value[_r22] && !1 !== s.equals(t) || e.push(new Promise(function (e) {
              var n = {
                value: l.value[_r22]
              };

              _this15.animation.add({
                targets: [n, s],
                value: 1,
                x: t.x,
                y: t.y,
                z: t.z,
                w: t.w,
                update: function update() {
                  l.value[_r22] = n.value, a.updateLayerUniformByLayer(i, o), a.updateLayerUniformByLayer(i, d);
                },
                complete: function complete() {
                  e(_r22);
                }
              }, 0);
            }));
          };

          for (var _r22 = n.value; _r22 < s.value; ++_r22) {
            _loop5(_r22);
          }

          Promise.all(e).then(function () {
            s.value = n.value, a.updateLayerUniformByLayer(i, "f" + i.id + "_num");
          });
        })();
      }

      t(e, i, r, ['alpha', 'mode', 'gl_type', 'smooth', 'offset', 'morph', 'angle']);
    };

    function s(e, s) {
      var n = e.layersList.head,
          o = 0;

      for (; n;) {
        if (!0 === n.isBack) {
          n = n.next;
          continue;
        }

        var h = s.layersList[o++];

        if ('texture' === n.type) {
          var _t46 = n.uniforms["f" + n.id + "_texture"].value,
              _a10 = h.uniforms["f" + h.id + "_texture"].value;
          _t46.image === _a10.image ? r(e, n, h) : i(e, n, h);
        } else 'gradient' === n.type ? n.uniforms["f" + n.id + "_gl_type"].value === h.uniforms["f" + h.id + "_gl_type"].value ? a(e, n, h) : i(e, n, h) : t(e, n, h);

        n = n.next;
      }
    }

    if (Array.isArray(this.object.material)) for (var _t47 = 0, _i48 = this.object.material.length; _t47 < _i48; ++_t47) {
      s(this.object.material[_t47], e.material[_t47]);
    } else s(this.object.material, e.material);
  },
  animateCamera: function animateCamera(e) {
    var _this16 = this;

    if (!this.object.isCamera) return;
    var t = this.object.isPerspectiveCamera ? e.camera.zoomPersp : e.camera.zoomOrtho;
    this.object.zoom !== t && this.animation.add({
      targets: this.object,
      zoom: t,
      update: function update() {
        _this16.object.updateProjectionMatrix();
      }
    }, 0);
  }
}, InteractionEvent.TYPE = {
  MOUSE_DOWN: 0,
  MOUSE_UP: 1,
  MOUSE_HOVER: 2,
  MOUSE_ENTER: 3,
  MOUSE_LEAVE: 4,
  KEY_DOWN: 5,
  KEY_UP: 6,
  START: 7,
  LOOK_AT: 8,
  SCROLL: 9
}, InteractionEvent.ORDER = [InteractionEvent.TYPE.MOUSE_DOWN, InteractionEvent.TYPE.MOUSE_UP, InteractionEvent.TYPE.MOUSE_HOVER, InteractionEvent.TYPE.KEY_DOWN], InteractionEvent.prototype = {
  constructor: InteractionEvent,

  get type() {
    return this._type;
  },

  set type(e) {
    this._type = e, e !== InteractionEvent.TYPE.KEY_DOWN && e !== InteractionEvent.TYPE.KEY_UP && (this.key = void 0);
  },

  newTarget: function newTarget(e) {
    var t = new InteractionTarget();
    return t.object = e, e.interaction.states.length > 0 && (t.state = e.interaction.states[e.interaction.states.length - 1]), this.targets.push(t), Interaction.targets.add(t), t;
  },
  addTarget: function addTarget(e, t) {
    this.targets.splice(t, 0, e), Interaction.targets.add(e);
  },
  removeTarget: function removeTarget(e) {
    Interaction.targets["delete"](this.targets[e]), this.targets.splice(e, 1);
  },
  dispatchReverse: function dispatchReverse() {
    for (var e = 0, t = this.targets.length; e < t; ++e) {
      var _t48 = this.targets[e];
      void 0 !== _t48.state && _t48.object.interaction.reverse(_t48);
    }
  },
  dispatch: function dispatch() {
    for (var e = 0, t = this.targets.length; e < t; ++e) {
      var _t49 = this.targets[e];
      void 0 !== _t49.state && _t49.object.interaction.play(_t49);
    }
  },
  copy: function copy(e) {
    return this.ui.isCollapsed = e.ui.isCollapsed, this;
  },
  clone: function clone() {
    return new InteractionEvent(this.type, this.key).copy(this);
  },
  toJSON: function toJSON(e) {
    var t = {
      type: this._type,
      key: this.key,
      ui: {
        isCollapsed: this.ui.isCollapsed
      }
    };

    if (this.targets.length > 0) {
      t.targets = [];

      for (var i = 0, r = this.targets.length; i < r; ++i) {
        t.targets.push(this.targets[i].toJSON(e));
      }
    }

    return t;
  },
  fromJSON: function fromJSON(e, t, i) {
    if (this._type = e.type, this.key = e.key, this.targets = [], this.ui = {
      isCollapsed: e.ui.isCollapsed
    }, void 0 !== e.targets) for (var r = 0, a = e.targets.length; r < a; ++r) {
      this.addTarget(new InteractionTarget().fromJSON(e.targets[r], t, i));
    }
    return this;
  }
}, InteractionState.prototype = {
  constructor: InteractionState,
  update: function update(e) {
    this.updateMatrix(e), this.updateGeometry(e), this.updateMaterial(e), this.updateCamera(e);
  },
  updateCamera: function updateCamera(e) {
    e.isCamera && (this.camera = {
      zoomPersp: e.perspCamera.zoom,
      zoomOrtho: e.orthoCamera.zoom
    });
  },
  updateMatrix: function updateMatrix(e) {
    this.position.copy(e.position), this.rotation.copy(e.rotation), this.scale.copy(e.scale), this.hiddenMatrix.copy(e.hiddenMatrix);
  },
  updateGeometry: function updateGeometry(e) {
    if (void 0 !== e.geometry) {
      var t = e.geometry.userData.parameters;
      this.geometry = {
        width: t.width,
        height: t.height,
        depth: t.depth
      };
    }
  },
  updateMaterial: function updateMaterial(e) {
    if (void 0 !== e.material) if (!0 === Array.isArray(e.material)) {
      this.material = [];

      for (var t = 0, i = e.material.length; t < i; ++t) {
        var _i49 = [];
        var r = e.material[t].layersList.head;

        for (; r;) {
          _i49.push(r.clone()), r = r.next;
        }

        this.material.push({
          layersList: _i49
        });
      }
    } else {
      var _t50 = [];
      var _i50 = e.material.layersList.head;

      for (; _i50;) {
        _t50.push(_i50.clone()), _i50 = _i50.next;
      }

      this.material = {
        layersList: _t50
      };
    }
  },
  execute: function execute(e) {
    if (e.position.copy(this.position), e.rotation.copy(this.rotation), e.scale.copy(this.scale), e.hiddenMatrix.copy(this.hiddenMatrix), void 0 !== e.geometry) {
      var t = e.geometry.userData.parameters;

      if (this.geometry.width !== t.width || this.geometry.height !== t.height || this.geometry.depth !== t.depth) {
        var _t51 = SPE[e.geometry.userData.type].buildFromGeometry(e.geometry, {
          width: this.geometry.width,
          height: this.geometry.height,
          depth: this.geometry.depth
        });

        e.updateGeometry(_t51);
      }
    }

    if (void 0 !== e.material) {
      var _t52 = e.material;
      if (!0 === Array.isArray(_t52)) for (var _e57 = 0, i = this.material.length; _e57 < i; ++_e57) {
        var _i51 = _t52[_e57].layersList.head;
        var r = this.material[_e57].layersList;
        var a = 0;

        for (; _i51;) {
          _i51.copy(r[a++]), _i51 = _i51.next;
        }

        _t52[_e57].dispose();
      } else {
        var _e58 = _t52.layersList.head;
        var _i52 = this.material.layersList;
        var _r23 = 0;

        for (; _e58;) {
          _e58.copyUniforms(_i52[_r23++]), _e58 = _e58.next;
        }

        _t52.dispose();
      }
    }

    this.camera && (e.zoom = e.isPerspectiveCamera ? this.camera.zoomPersp : this.camera.zoomOrtho, e.updateProjectionMatrix());
  },
  copy: function copy(e) {
    if (this.name = e.name, this.position.copy(e.position), this.rotation.copy(e.rotation), this.scale.copy(e.scale), this.hiddenMatrix.copy(e.hiddenMatrix), void 0 !== e.geometry && (this.geometry = {
      width: e.geometry.width,
      height: e.geometry.height,
      depth: e.geometry.depth
    }), void 0 !== e.material) if (!0 === Array.isArray(e.material)) {
      this.material = [];

      for (var t = 0, i = e.material.length; t < i; ++t) {
        this.material.push({
          layersList: e.material[t].layersList.map(function (e) {
            return e.clone();
          })
        });
      }
    } else this.material = {
      layersList: e.material.layersList.map(function (e) {
        return e.clone();
      })
    };
    return void 0 !== e.camera && (this.camera = {
      zoomPersp: e.camera.zoomPersp,
      zoomOrtho: e.camera.zoomOrtho
    }), this;
  },
  clone: function clone() {
    return new InteractionState().copy(this);
  },
  toJSON: function toJSON(e) {
    var t = {
      uuid: this.uuid,
      name: this.name,
      position: this.position.toArray(),
      rotation: this.rotation.toArray(),
      scale: this.scale.toArray(),
      hiddenMatrix: this.hiddenMatrix.toArray()
    };
    if (void 0 !== this.geometry && (t.geometry = {
      width: this.geometry.width,
      height: this.geometry.height,
      depth: this.geometry.depth
    }), void 0 !== this.material) if (!0 === Array.isArray(this.material)) {
      t.material = [];

      for (var i = 0, r = this.material.length; i < r; ++i) {
        t.material.push({
          layersList: this.material[i].layersList.map(function (t) {
            return t.toJSON(e);
          })
        });
      }
    } else t.material = {
      layersList: this.material.layersList.map(function (t) {
        return t.toJSON(e);
      })
    };
    return void 0 !== this.camera && (t.camera = {
      zoomPersp: this.camera.zoomPersp,
      zoomOrtho: this.camera.zoomOrtho
    }), t;
  },
  fromJSON: function fromJSON(e, t) {
    if (this.uuid = e.uuid, this.name = e.name, this.position.fromArray(e.position), void 0 !== e.rotation) this.rotation.fromArray(e.rotation);else {
      var _t53 = new THREE.Quaternion().fromArray(e.quaternion);

      this.rotation.setFromQuaternion(_t53);
    }
    if (this.scale.fromArray(e.scale), this.hiddenMatrix.fromArray(e.hiddenMatrix), void 0 !== e.geometry && (this.geometry = {
      width: e.geometry.width,
      height: e.geometry.height,
      depth: e.geometry.depth
    }), void 0 !== e.material) if (!0 === Array.isArray(e.material)) {
      this.material = [];

      for (var i = 0, r = e.material.length; i < r; ++i) {
        this.material.push({
          layersList: e.material[i].layersList.map(function (e) {
            return SPE.CreateLayerFromJSON(e, t);
          })
        });
      }
    } else this.material = {
      layersList: e.material.layersList.map(function (e) {
        return SPE.CreateLayerFromJSON(e, t);
      })
    };
    return void 0 !== e.camera && (this.camera = {
      zoomPersp: e.camera.zoomPersp,
      zoomOrtho: e.camera.zoomOrtho
    }), this;
  }
}, InteractionTarget.EASING = {
  LINEAR: 0,
  EASE: 1,
  EASE_IN: 2,
  EASE_OUT: 3,
  EASE_IN_OUT: 4,
  CUBIC: 5,
  SPRING: 6
}, InteractionTarget.prototype = {
  constructor: InteractionTarget,

  get sp_mass() {
    return this.springParameters.mass;
  },

  set sp_mass(e) {
    this.springParameters.mass = e;
  },

  get sp_stiffness() {
    return this.springParameters.stiffness;
  },

  set sp_stiffness(e) {
    this.springParameters.stiffness = e;
  },

  get sp_damping() {
    return this.springParameters.damping;
  },

  set sp_damping(e) {
    this.springParameters.damping = e;
  },

  get sp_velocity() {
    return this.springParameters.velocity;
  },

  set sp_velocity(e) {
    this.springParameters.velocity = e;
  },

  get interaction() {
    return void 0 !== this._object ? this._object.interaction : void 0;
  },

  get object() {
    return this._object;
  },

  set object(e) {
    if (void 0 !== e) {
      var t = e.interaction.states;
      this.state = t.length > 0 ? t[t.length - 1] : void 0;
    } else this.state = void 0;

    this._object = e;
  },

  copy: function copy(e) {
    return this.easing = e.easing, this.duration = e.duration, this.delay = e.delay, this.cubicControls = [].concat(e.cubicControls), this.springParameters = {
      mass: e.springParameters.mass,
      stiffness: e.springParameters.stiffness,
      damping: e.springParameters.damping,
      velocity: e.springParameters.velocity
    }, this.repeat = e.repeat, this.cycle = e.cycle, this.rewind = e.rewind, this;
  },
  clone: function clone() {
    return new InteractionTarget().copy(this);
  },
  toJSON: function toJSON() {
    var e = {
      easing: this.easing,
      duration: this.duration,
      delay: this.delay,
      cubicControls: this.cubicControls,
      springParameters: {
        mass: this.springParameters.mass,
        stiffness: this.springParameters.stiffness,
        damping: this.springParameters.damping,
        velocity: this.springParameters.velocity
      },
      repeat: this.repeat,
      cycle: this.cycle,
      rewind: this.rewind
    };
    return void 0 !== this.object && (e.object = this.object.uuid), void 0 !== this.state && (e.state = this.state.uuid), e;
  },
  fromJSON: function fromJSON(e, t, i) {
    return void 0 !== e.object && (this._object = t[e.object]), void 0 !== e.state && (this.state = i[e.state]), this.easing = e.easing, this.duration = e.duration, this.delay = e.delay, this.cubicControls = [].concat(e.cubicControls), this.repeat = e.repeat, this.cycle = e.cycle, this.rewind = void 0 !== e.rewind && e.rewind, void 0 !== e.springControls ? (this.springParameters.mass = e.springControls[0], this.springParameters.stiffness = e.springControls[1], this.springParameters.damping = e.springControls[2], this.springParameters.velocity = e.springControls[3]) : (this.springParameters.mass = e.springParameters.mass, this.springParameters.stiffness = e.springParameters.stiffness, this.springParameters.damping = e.springParameters.damping, this.springParameters.velocity = e.springParameters.velocity), this;
  }
}, InteractionStatesManager.prototype = {
  updateObject: function updateObject() {
    void 0 !== this.i.selectedState && this.i.states[this.i.selectedState].updateMatrix(this.i.object);
  },
  updateCamera: function updateCamera() {
    void 0 !== this.i.selectedState && (this.i.states[this.i.selectedState].updateMatrix(this.i.object), this.i.states[this.i.selectedState].updateCamera(this.i.object));
  },
  updateGeometry: function updateGeometry() {
    void 0 !== this.i.selectedState && (this.i.states[this.i.selectedState].updateMatrix(this.i.object), this.i.states[this.i.selectedState].updateGeometry(this.i.object));
  },
  updateSceneGraph: function updateSceneGraph(e) {
    var t = new THREE.Matrix4(),
        i = new THREE.Matrix4();
    e.updateWorldMatrix(!0, !1);

    for (var r = 0, a = this.i.states.length; r < a; ++r) {
      var _a11 = this.i.states[r];
      t.getInverse(e.matrixWorld), null !== this.i.object.parent && (this.i.object.parent.updateWorldMatrix(!0, !1), t.multiply(this.i.object.parent.matrixWorld)), !0 === this.i.object.isLight ? (i.compose(_a11.position, _a11.quaternion, _a11.scale), i.premultiply(t), i.decompose(_a11.position, _a11.quaternion, _a11.scale)) : _a11.hiddenMatrix.premultiply(t);
    }
  },
  updateMaterialLayer: function updateMaterialLayer(e) {
    if (void 0 === this.i.selectedState) return;
    var t = this.i.object.userData.selectedMaterial;
    (void 0 !== t ? this.i.states[this.i.selectedState].material[t] : this.i.states[this.i.selectedState].material).layersList.find(function (t) {
      return t.id === e.id;
    }).copy(e);
  },
  pushMaterialLayer: function pushMaterialLayer(e) {
    if (0 !== this.i.states.length) if (!0 === Array.isArray(this.i.object.material)) {
      var t = this.i.object.userData.selectedMaterial;

      for (var i = 0, r = this.i.states.length; i < r; ++i) {
        var _r24 = e.clone();

        this.i.selectedState !== i && (_r24.uniforms["f" + _r24.id + "_alpha"].value = 0), this.i.states[i].material[t].layersList.push(_r24);
      }
    } else for (var _t54 = 0, _i53 = this.i.states.length; _t54 < _i53; ++_t54) {
      var _i54 = e.clone();

      this.i.selectedState !== _t54 && (_i54.uniforms["f" + _i54.id + "_alpha"].value = 0), this.i.states[_t54].material.layersList.push(_i54);
    }
  },
  popMaterialLayer: function popMaterialLayer() {
    if (0 !== this.i.states.length) if (!0 === Array.isArray(this.i.object.material)) {
      var e = this.i.object.userData.selectedMaterial;

      for (var t = 0, i = this.i.states.length; t < i; ++t) {
        this.i.states[t].material[e].layersList.pop();
      }
    } else for (var _e59 = 0, _t55 = this.i.states.length; _e59 < _t55; ++_e59) {
      this.i.states[_e59].material.layersList.pop();
    }
  },
  removeMaterialLayer: function removeMaterialLayer(e) {
    if (0 === this.i.states.length) return;
    var t = [];
    if (!0 === Array.isArray(this.i.object.material)) for (var i = 0, r = this.i.states.length; i < r; ++i) {
      var _r25 = this.i.object.userData.selectedMaterial,
          a = this.i.states[i].material[_r25];
      t.push({
        layer: a.layersList[e]
      }), a.layersList.splice(e, 1);
    } else for (var _i55 = 0, _r26 = this.i.states.length; _i55 < _r26; ++_i55) {
      var _r27 = this.i.states[_i55].material;
      t.push({
        layer: _r27.layersList[e]
      }), _r27.layersList.splice(e, 1);
    }
    return {
      states: t,
      pos: e
    };
  },
  restoreMaterialLayerRemoved: function restoreMaterialLayerRemoved(e) {
    if (0 !== this.i.states.length) if (!0 === Array.isArray(this.i.object.material)) for (var t = 0, i = this.i.states.length; t < i; ++t) {
      var _i56 = this.i.object.userData.selectedMaterial;

      this.i.states[t].material[_i56].layersList.splice(e.pos, 0, e.states[t].layer);
    } else for (var _t56 = 0, _i57 = this.i.states.length; _t56 < _i57; ++_t56) {
      this.i.states[_t56].material.layersList.splice(e.pos, 0, e.states[_t56].layer);
    }
  },
  changeMaterialLayer: function changeMaterialLayer(e) {
    if (0 === this.i.states.length) return;
    var t,
        i = [];

    if (!0 === Array.isArray(this.i.object.material)) {
      var r = this.i.object.userData.selectedMaterial,
          a = this.i.states[this.i.selectedState].material[r].layersList;

      for (var _i58 = 0, _r28 = a.length; _i58 < _r28; ++_i58) {
        if (a[_i58].id === e.id) {
          t = _i58;
          break;
        }
      }

      for (var _a12 = 0, s = this.i.states.length; _a12 < s; ++_a12) {
        var _s8 = this.i.states[_a12].material[r].layersList[t],
            n = e.clone();
        this.i.selectedState !== _a12 && (n.uniforms["f" + n.id + "_alpha"].value = _s8.uniforms["f" + _s8.id + "_alpha"].value), this.i.states[_a12].material[r].layersList[t] = n, i.push({
          layer: _s8
        });
      }
    } else {
      var _r29 = this.i.states[this.i.selectedState].material.layersList;

      for (var _i59 = 0, _a13 = _r29.length; _i59 < _a13; ++_i59) {
        if (_r29[_i59].id === e.id) {
          t = _i59;
          break;
        }
      }

      for (var _r30 = 0, _a14 = this.i.states.length; _r30 < _a14; ++_r30) {
        var _a15 = this.i.states[_r30].material.layersList[t],
            _s9 = e.clone();

        this.i.selectedState !== _r30 && (_s9.uniforms["f" + _s9.id + "_alpha"].value = _a15.uniforms["f" + _a15.id + "_alpha"].value), this.i.states[_r30].material.layersList[t] = _s9, i.push({
          layer: _a15
        });
      }
    }

    return {
      states: i,
      pos: t
    };
  },
  restoreMaterialLayerChanged: function restoreMaterialLayerChanged(e) {
    if (0 !== this.i.states.length) if (!0 === Array.isArray(this.i.object.material)) {
      var t = this.i.object.userData.selectedMaterial;

      for (var i = 0, r = this.i.states.length; i < r; ++i) {
        this.i.states[i].material[t].layersList[e.pos] = e.states[i].layer;
      }
    } else for (var _t57 = 0, _i60 = this.i.states.length; _t57 < _i60; ++_t57) {
      this.i.states[_t57].material.layersList[e.pos] = e.states[_t57].layer;
    }
  },
  moveMaterialLayer: function moveMaterialLayer(e, t) {
    if (0 !== this.i.states.length) if (!0 === Array.isArray(this.i.object.material)) {
      var i = this.i.object.userData.selectedMaterial;

      for (var r = 0, a = this.i.states.length; r < a; ++r) {
        var _a16 = this.i.states[r].material[i].layersList,
            s = _a16[e];
        _a16[e] = _a16[t], _a16[t] = s;
      }
    } else for (var _i61 = 0, _r31 = this.i.states.length; _i61 < _r31; ++_i61) {
      var _r32 = this.i.states[_i61].material.layersList,
          _a17 = _r32[e];
      _r32[e] = _r32[t], _r32[t] = _a17;
    }
  },
  restoreMaterialLayerMoved: function restoreMaterialLayerMoved(e, t) {
    this.moveMaterialLayer(e, t);
  },
  setMaterialLayers: function setMaterialLayers(e) {
    var t = [];

    if (Array.isArray(this.i.object.material)) {
      var i = this.i.object.userData.selectedMaterial;

      for (var r = 0, a = this.i.states.length; r < a; ++r) {
        var _a18 = this.i.states[r].material[i];
        t.push({
          layersList: _a18.layersList
        });
        var s = e.head;

        for (_a18.layersList = []; void 0 !== s;) {
          _a18.layersList.push(s.clone()), s = s.next;
        }
      }
    } else for (var _i62 = 0, _r33 = this.i.states.length; _i62 < _r33; ++_i62) {
      var _r34 = this.i.states[_i62].material;
      t.push({
        layersList: _r34.layersList
      });
      var _a19 = e.head;

      for (_r34.layersList = []; void 0 !== _a19;) {
        _r34.layersList.push(_a19.clone()), _a19 = _a19.next;
      }
    }

    return {
      states: t
    };
  },
  restoreMaterialLayersSet: function restoreMaterialLayersSet(e) {
    if (Array.isArray(this.i.object.material)) {
      var t = object.userData.selectedMaterial;

      for (var i = 0, r = this.i.states.length; i < r; ++i) {
        this.i.states[i].material[t].layersList = e.states[i].layersList;
      }
    } else for (var _t58 = 0, _i63 = this.i.states.length; _t58 < _i63; ++_t58) {
      this.i.states[_t58].material.layersList = e.states[_t58].layersList;
    }
  }
}, SPE.ConeGeometry = new function () {
  this.build = function (_ref) {
    var _ref$width = _ref.width,
        e = _ref$width === void 0 ? 100 : _ref$width,
        _ref$height = _ref.height,
        t = _ref$height === void 0 ? e : _ref$height,
        _ref$depth = _ref.depth,
        i = _ref$depth === void 0 ? e : _ref$depth,
        _ref$radialSegments = _ref.radialSegments,
        r = _ref$radialSegments === void 0 ? 32 : _ref$radialSegments,
        _ref$heightSegments = _ref.heightSegments,
        a = _ref$heightSegments === void 0 ? 32 : _ref$heightSegments,
        s = _ref.openEnded,
        n = _ref.thetaStart,
        _ref$thetaLength = _ref.thetaLength,
        o = _ref$thetaLength === void 0 ? 360 : _ref$thetaLength,
        _ref$cornerRadiusTop = _ref.cornerRadiusTop,
        h = _ref$cornerRadiusTop === void 0 ? 0 : _ref$cornerRadiusTop,
        _ref$cornerRadiusBott = _ref.cornerRadiusBottom,
        l = _ref$cornerRadiusBott === void 0 ? 0 : _ref$cornerRadiusBott,
        _ref$cornerSegments = _ref.cornerSegments,
        c = _ref$cornerSegments === void 0 ? 8 : _ref$cornerSegments;
    var d;
    return e = Math.abs(e), t = Math.abs(t), i = Math.abs(i), (d = h > 0 || l > 0 || o < 360 ? new SPE.CylinderGeometry.RoundedCylinderBufferGeometry(0, e / 2, t, r, a, s, n, o * Math.PI / 180, h, l, c, 0, !0) : new THREE.ConeBufferGeometry(e / 2, t, r, a, s)).scale(1, 1, i / e), d.userData = {
      type: 'ConeGeometry',
      parameters: {
        width: e,
        height: t,
        depth: i,
        radialSegments: r,
        heightSegments: a,
        openEnded: s,
        thetaStart: n,
        thetaLength: o,
        cornerRadiusTop: h,
        cornerRadiusBottom: l,
        cornerSegments: c
      }
    }, d;
  }, this.buildFromGeometry = function (e, _ref2) {
    var _ref2$width = _ref2.width,
        t = _ref2$width === void 0 ? e.userData.parameters.width : _ref2$width,
        _ref2$height = _ref2.height,
        i = _ref2$height === void 0 ? e.userData.parameters.height : _ref2$height,
        _ref2$depth = _ref2.depth,
        r = _ref2$depth === void 0 ? e.userData.parameters.depth : _ref2$depth,
        _ref2$radialSegments = _ref2.radialSegments,
        a = _ref2$radialSegments === void 0 ? e.userData.parameters.radialSegments : _ref2$radialSegments,
        _ref2$heightSegments = _ref2.heightSegments,
        s = _ref2$heightSegments === void 0 ? e.userData.parameters.heightSegments : _ref2$heightSegments,
        _ref2$openEnded = _ref2.openEnded,
        n = _ref2$openEnded === void 0 ? e.userData.parameters.openEnded : _ref2$openEnded,
        _ref2$thetaStart = _ref2.thetaStart,
        o = _ref2$thetaStart === void 0 ? e.userData.parameters.thetaStart : _ref2$thetaStart,
        _ref2$thetaLength = _ref2.thetaLength,
        h = _ref2$thetaLength === void 0 ? e.userData.parameters.thetaLength : _ref2$thetaLength,
        _ref2$cornerRadiusTop = _ref2.cornerRadiusTop,
        l = _ref2$cornerRadiusTop === void 0 ? e.userData.parameters.cornerRadiusTop : _ref2$cornerRadiusTop,
        _ref2$cornerRadiusBot = _ref2.cornerRadiusBottom,
        c = _ref2$cornerRadiusBot === void 0 ? e.userData.parameters.cornerRadiusBottom : _ref2$cornerRadiusBot,
        _ref2$cornerSegments = _ref2.cornerSegments,
        d = _ref2$cornerSegments === void 0 ? e.userData.parameters.cornerSegments : _ref2$cornerSegments;
    return this.build({
      width: t,
      height: i,
      depth: r,
      radialSegments: a,
      heightSegments: s,
      openEnded: n,
      thetaStart: o,
      thetaLength: h,
      cornerRadiusTop: l,
      cornerRadiusBottom: c,
      cornerSegments: d
    });
  };
}(), SPE.CubeGeometry = new function () {
  this.build = function (_ref3) {
    var _ref3$width = _ref3.width,
        e = _ref3$width === void 0 ? 100 : _ref3$width,
        _ref3$height = _ref3.height,
        t = _ref3$height === void 0 ? e : _ref3$height,
        _ref3$depth = _ref3.depth,
        i = _ref3$depth === void 0 ? e : _ref3$depth,
        _ref3$widthSegments = _ref3.widthSegments,
        r = _ref3$widthSegments === void 0 ? 1 : _ref3$widthSegments,
        _ref3$heightSegments = _ref3.heightSegments,
        a = _ref3$heightSegments === void 0 ? 1 : _ref3$heightSegments,
        _ref3$depthSegments = _ref3.depthSegments,
        s = _ref3$depthSegments === void 0 ? 1 : _ref3$depthSegments,
        _ref3$cornerRadius = _ref3.cornerRadius,
        n = _ref3$cornerRadius === void 0 ? 0 : _ref3$cornerRadius,
        _ref3$cornerSegments = _ref3.cornerSegments,
        o = _ref3$cornerSegments === void 0 ? 8 : _ref3$cornerSegments;
    var h;
    return e = Math.abs(e), t = Math.abs(t), i = Math.abs(i), (h = 0 == n ? new THREE.BoxBufferGeometry(e, t, i, r, a, s) : new RoundedBoxBufferGeometry(e, t, i, r, a, s, n, o)).userData = {
      type: 'CubeGeometry',
      parameters: {
        width: e,
        height: t,
        depth: i,
        widthSegments: r,
        heightSegments: a,
        depthSegments: s,
        cornerRadius: n,
        cornerSegments: o
      }
    }, h;
  }, this.buildFromGeometry = function (e, _ref4) {
    var _ref4$width = _ref4.width,
        t = _ref4$width === void 0 ? e.userData.parameters.width : _ref4$width,
        _ref4$height = _ref4.height,
        i = _ref4$height === void 0 ? e.userData.parameters.height : _ref4$height,
        _ref4$depth = _ref4.depth,
        r = _ref4$depth === void 0 ? e.userData.parameters.depth : _ref4$depth,
        _ref4$widthSegments = _ref4.widthSegments,
        a = _ref4$widthSegments === void 0 ? e.userData.parameters.widthSegments : _ref4$widthSegments,
        _ref4$heightSegments = _ref4.heightSegments,
        s = _ref4$heightSegments === void 0 ? e.userData.parameters.heightSegments : _ref4$heightSegments,
        _ref4$depthSegments = _ref4.depthSegments,
        n = _ref4$depthSegments === void 0 ? e.userData.parameters.depthSegments : _ref4$depthSegments,
        _ref4$cornerRadius = _ref4.cornerRadius,
        o = _ref4$cornerRadius === void 0 ? e.userData.parameters.cornerRadius : _ref4$cornerRadius,
        _ref4$cornerSegments = _ref4.cornerSegments,
        h = _ref4$cornerSegments === void 0 ? e.userData.parameters.cornerSegments : _ref4$cornerSegments;
    return this.build({
      width: t,
      height: i,
      depth: r,
      widthSegments: a,
      heightSegments: s,
      depthSegments: n,
      cornerRadius: o,
      cornerSegments: h
    });
  };
}();
var pi2 = Math.PI / 2;

var RoundedBoxBufferGeometry = /*#__PURE__*/function (_THREE$BufferGeometry) {
  _inheritsLoose(RoundedBoxBufferGeometry, _THREE$BufferGeometry);

  function RoundedBoxBufferGeometry(e, t, i, r, a, s, n, o) {
    var _this17;

    if (e === void 0) {
      e = 1;
    }

    if (t === void 0) {
      t = 1;
    }

    if (i === void 0) {
      i = 1;
    }

    if (r === void 0) {
      r = 1;
    }

    if (a === void 0) {
      a = 1;
    }

    if (s === void 0) {
      s = 1;
    }

    if (n === void 0) {
      n = 0;
    }

    if (o === void 0) {
      o = 4;
    }

    var h = THREE.Vector3;
    _this17 = _THREE$BufferGeometry.call(this) || this, _this17.type = 'BoxBufferGeometry', _this17.parameters = {
      width: e,
      height: t,
      depth: i,
      widthSegments: r,
      heightSegments: a,
      depthSegments: s,
      cornerRadius: n,
      cornerSegments: o
    };

    var l = _assertThisInitialized(_this17);

    r = Math.floor(r), a = Math.floor(a), s = Math.floor(s), o = Math.floor(o), n = Math.min(n, e / 2, t / 2, i / 2);
    var c = [],
        d = [],
        m = [],
        u = [];
    var p = 0,
        f = 0;

    function E(e, t, i, r, a, s, o, E, g, y, v) {
      var _ = (s - 2 * n) / g,
          S = (o - 2 * n) / y,
          x = s / 2 - n,
          b = o / 2 - n,
          T = E / 2,
          R = g + 1,
          w = y + 1;

      var M = 0,
          L = 0;
      var I = new h();

      for (var _s10 = 0; _s10 < w; _s10++) {
        var _n3 = _s10 * S - b;

        for (var _o6 = 0; _o6 < R; _o6++) {
          var _h5 = _o6 * _ - x;

          I[e] = _h5 * r, I[t] = _n3 * a, I[i] = T, d.push(I.x, I.y, I.z), I[e] = 0, I[t] = 0, I[i] = E > 0 ? 1 : -1, m.push(I.x, I.y, I.z), u.push(_o6 / g), u.push(1 - _s10 / y), M += 1;
        }
      }

      for (var _e60 = 0; _e60 < y; _e60++) {
        for (var _t59 = 0; _t59 < g; _t59++) {
          var _i64 = p + _t59 + R * _e60,
              _r35 = p + _t59 + R * (_e60 + 1),
              _a20 = p + (_t59 + 1) + R * (_e60 + 1),
              _s11 = p + (_t59 + 1) + R * _e60;

          c.push(_i64, _r35, _s11), c.push(_r35, _a20, _s11), L += 6;
        }
      }

      l.addGroup(f, L, v), f += L, p += M;
    }

    function g(e, t, i, r, a, s, E, g, y, v, _) {
      var S = (E - 2 * n) / v,
          x = E / 2 - n,
          b = g / 2 - n,
          T = y / 2,
          R = v + 1;
      var w = 0,
          M = 0;
      var L = new h(),
          I = new h();

      for (var _h6 = 0; _h6 < o + 1; _h6++) {
        var _l6 = _h6 / o * pi2,
            _c5 = Math.sin(_l6) * n,
            _p = (1 - Math.cos(_l6)) * n,
            _f = Math.sin(_l6),
            _E = Math.cos(_l6);

        L[t] = (b + _c5) * a, L[i] = (T - _p) * s, I[e] = 0, I[t] = _f * Math.sign(L[t]), I[i] = _E * Math.sign(L[i]);

        for (var _t60 = 0; _t60 < R; _t60++) {
          var _i65 = _t60 * S - x;

          L[e] = _i65 * r, d.push(L.x, L.y, L.z), m.push(I.x, I.y, I.z), u.push(_t60 / v), u.push(0), w += 1;
        }
      }

      for (var _e61 = 0; _e61 < o; _e61++) {
        for (var _t61 = 0; _t61 < v; _t61++) {
          var _i66 = p + _t61 + R * _e61,
              _r36 = p + _t61 + R * (_e61 + 1),
              _a21 = p + (_t61 + 1) + R * (_e61 + 1),
              _s12 = p + (_t61 + 1) + R * _e61;

          c.push(_i66, _r36, _s12), c.push(_r36, _a21, _s12), M += 6;
        }
      }

      l.addGroup(f, M, _), f += M, p += w;
    }

    function y(r, a, s) {
      var l = new h(),
          f = new h(e / 2, t / 2, i / 2);
      f.subScalar(n);
      var E = [],
          g = r * a * s > 0 ? function (e, t, i) {
        c.push(e, t, i);
      } : function (e, t, i) {
        c.push(e, i, t);
      };

      for (var _e62 = 0; _e62 <= o; _e62++) {
        var _t62 = [],
            _i67 = pi2 * (1 - _e62 / o),
            _h7 = Math.cos(_i67),
            _c6 = Math.sin(_i67);

        var _g = 0;

        for (var y = 0; y <= _e62; y++) {
          var _i68 = Math.cos(_g),
              _o7 = Math.sin(_g);

          l.x = _h7 * _i68, l.y = _c6, l.z = _h7 * _o7;

          var _E2 = f.clone().addScaledVector(l, n);

          d.push(r * _E2.x, a * _E2.y, s * _E2.z), m.push(r * l.x, a * l.y, s * l.z), u.push(0, 0), _t62.push(p++), _g += pi2 / _e62;
        }

        E.push(_t62);
      }

      var v = E.length - 1;

      for (var _e63 = 0; _e63 < v; _e63++) {
        var _t63 = E[_e63],
            _i69 = E[_e63 + 1],
            _r37 = _t63.length - 1;

        g(_t63[0], _i69[1], _i69[0]);

        for (var _e64 = 1; _e64 <= _r37; _e64++) {
          g(_t63[_e64 - 1], _t63[_e64], _i69[_e64]), g(_t63[_e64], _i69[_e64 + 1], _i69[_e64]);
        }
      }
    }

    E('z', 'y', 'x', -1, -1, i, t, e, s, a, 0), E('z', 'y', 'x', 1, -1, i, t, -e, s, a, 1), E('x', 'z', 'y', 1, 1, e, i, t, r, s, 2), E('x', 'z', 'y', 1, -1, e, i, -t, r, s, 3), E('x', 'y', 'z', 1, -1, e, t, i, r, a, 4), E('x', 'y', 'z', -1, -1, e, t, -i, r, a, 5), n > 0 && (g('z', 'y', 'x', -1, -1, 1, i, t, e, s, 0), g('z', 'y', 'x', 1, -1, -1, i, t, e, s, 1), g('z', 'y', 'x', -1, 1, -1, i, t, e, s, 1), g('z', 'y', 'x', 1, 1, 1, i, t, e, s, 0), g('x', 'y', 'z', -1, -1, -1, e, t, i, r, 0), g('x', 'y', 'z', 1, -1, 1, e, t, i, r, 1), g('x', 'y', 'z', -1, 1, 1, e, t, i, r, 0), g('x', 'y', 'z', 1, 1, -1, e, t, i, r, 1), g('y', 'x', 'z', -1, -1, 1, t, e, i, a, 0), g('y', 'x', 'z', 1, -1, -1, t, e, i, a, 1), g('y', 'x', 'z', 1, 1, 1, t, e, i, a, 1), g('y', 'x', 'z', -1, 1, -1, t, e, i, a, 0), y(1, 1, 1), y(-1, 1, 1), y(1, -1, 1), y(-1, -1, 1), y(1, 1, -1), y(-1, 1, -1), y(1, -1, -1), y(-1, -1, -1)), _this17.setIndex(c), _this17.setAttribute('position', new THREE.Float32BufferAttribute(d, 3)), _this17.setAttribute('normal', new THREE.Float32BufferAttribute(m, 3)), _this17.setAttribute('uv', new THREE.Float32BufferAttribute(u, 2));
    return _this17;
  }

  return RoundedBoxBufferGeometry;
}(THREE.BufferGeometry);

function flip(e) {
  return new THREE.Vector2(e.y, -e.x);
}

SPE.CylinderGeometry = new function () {
  this.build = function (_ref5) {
    var _ref5$width = _ref5.width,
        e = _ref5$width === void 0 ? 100 : _ref5$width,
        _ref5$height = _ref5.height,
        t = _ref5$height === void 0 ? e : _ref5$height,
        _ref5$depth = _ref5.depth,
        i = _ref5$depth === void 0 ? e : _ref5$depth,
        _ref5$radiusTop = _ref5.radiusTop,
        r = _ref5$radiusTop === void 0 ? e / 2 : _ref5$radiusTop,
        _ref5$radiusBottom = _ref5.radiusBottom,
        a = _ref5$radiusBottom === void 0 ? e / 2 : _ref5$radiusBottom,
        _ref5$radialSegments = _ref5.radialSegments,
        s = _ref5$radialSegments === void 0 ? 64 : _ref5$radialSegments,
        _ref5$heightSegments = _ref5.heightSegments,
        n = _ref5$heightSegments === void 0 ? 1 : _ref5$heightSegments,
        _ref5$openEnded = _ref5.openEnded,
        o = _ref5$openEnded === void 0 ? !1 : _ref5$openEnded,
        h = _ref5.thetaStart,
        _ref5$thetaLength = _ref5.thetaLength,
        l = _ref5$thetaLength === void 0 ? 360 : _ref5$thetaLength,
        _ref5$cornerRadius = _ref5.cornerRadius,
        c = _ref5$cornerRadius === void 0 ? 0 : _ref5$cornerRadius,
        _ref5$cornerSegments = _ref5.cornerSegments,
        d = _ref5$cornerSegments === void 0 ? 8 : _ref5$cornerSegments,
        _ref5$hollow = _ref5.hollow,
        m = _ref5$hollow === void 0 ? 0 : _ref5$hollow;
    e = Math.abs(e), t = Math.abs(t), i = Math.abs(i);
    var u = e / 2;
    if (r === a) r = u, a = u;else if (r > a) a = a * u / (r = u);else r = r * u / a, a = u;
    var p = new RoundedCylinderBufferGeometry(r, a, t, s, n, o, h, l * Math.PI / 180, c, c, d, m);
    return p.scale(1, 1, i / e), p.userData = {
      type: 'CylinderGeometry',
      parameters: {
        width: e,
        height: t,
        depth: i,
        radiusTop: r,
        radiusBottom: a,
        radialSegments: s,
        heightSegments: n,
        openEnded: o,
        thetaStart: h,
        thetaLength: l,
        cornerRadius: c,
        cornerSegments: d,
        hollow: m
      }
    }, p;
  }, this.buildFromGeometry = function (e, _ref6) {
    var _ref6$width = _ref6.width,
        t = _ref6$width === void 0 ? e.userData.parameters.width : _ref6$width,
        _ref6$height = _ref6.height,
        i = _ref6$height === void 0 ? e.userData.parameters.height : _ref6$height,
        _ref6$depth = _ref6.depth,
        r = _ref6$depth === void 0 ? e.userData.parameters.depth : _ref6$depth,
        _ref6$radiusTop = _ref6.radiusTop,
        a = _ref6$radiusTop === void 0 ? e.userData.parameters.radiusTop : _ref6$radiusTop,
        _ref6$radiusBottom = _ref6.radiusBottom,
        s = _ref6$radiusBottom === void 0 ? e.userData.parameters.radiusBottom : _ref6$radiusBottom,
        _ref6$radialSegments = _ref6.radialSegments,
        n = _ref6$radialSegments === void 0 ? e.userData.parameters.radialSegments : _ref6$radialSegments,
        _ref6$heightSegments = _ref6.heightSegments,
        o = _ref6$heightSegments === void 0 ? e.userData.parameters.heightSegments : _ref6$heightSegments,
        _ref6$openEnded = _ref6.openEnded,
        h = _ref6$openEnded === void 0 ? e.userData.parameters.openEnded : _ref6$openEnded,
        _ref6$thetaStart = _ref6.thetaStart,
        l = _ref6$thetaStart === void 0 ? e.userData.parameters.thetaStart : _ref6$thetaStart,
        _ref6$thetaLength = _ref6.thetaLength,
        c = _ref6$thetaLength === void 0 ? e.userData.parameters.thetaLength : _ref6$thetaLength,
        _ref6$cornerRadius = _ref6.cornerRadius,
        d = _ref6$cornerRadius === void 0 ? e.userData.parameters.cornerRadius : _ref6$cornerRadius,
        _ref6$cornerSegments = _ref6.cornerSegments,
        m = _ref6$cornerSegments === void 0 ? e.userData.parameters.cornerSegments : _ref6$cornerSegments,
        _ref6$hollow = _ref6.hollow,
        u = _ref6$hollow === void 0 ? e.userData.parameters.hollow : _ref6$hollow;
    return this.build({
      width: t,
      height: i,
      depth: r,
      radiusTop: a,
      radiusBottom: s,
      radialSegments: n,
      heightSegments: o,
      openEnded: h,
      thetaStart: l,
      thetaLength: c,
      cornerRadius: d,
      cornerSegments: m,
      hollow: u
    });
  };
}();

var RoundedCylinderBufferGeometry = /*#__PURE__*/function (_THREE$BufferGeometry2) {
  _inheritsLoose(RoundedCylinderBufferGeometry, _THREE$BufferGeometry2);

  function RoundedCylinderBufferGeometry(e, t, i, r, a, s, n, o, h, l, c, d, m) {
    var _this18$parameters;

    var _this18;

    if (m === void 0) {
      m = !1;
    }

    _this18 = _THREE$BufferGeometry2.call(this) || this, _this18.type = 'RoundedCylinderBufferGeometry', _this18.parameters = (_this18$parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: i,
      radialSegments: r,
      heightSegments: a,
      openEnded: s,
      thetaStart: n,
      thetaLength: o,
      cornerRadius: h
    }, _this18$parameters["cornerRadius"] = l, _this18$parameters.cornerSegments = c, _this18$parameters.hollow = d, _this18$parameters);
    var u = THREE.Vector2,
        p = THREE.Vector3,
        f = THREE.Float32BufferAttribute;
    e = void 0 !== e ? e : 1, t = void 0 !== t ? t : 1, i = i || 1, r = Math.floor(r) || 8, a = Math.floor(a) || 1, s = void 0 !== s && s, n = void 0 !== n ? n : 0, o = void 0 !== o ? o : 2 * Math.PI, s && (h = 0, l = 0);
    var E = [],
        g = [],
        y = [],
        v = [];
    var _ = 0;
    var S = i / 2;
    var x = new p(),
        b = new p();
    m && 0 == e && (e = h), m && 0 == t && (t = l);
    var T = new u(e, S),
        R = new u(t, -S),
        w = null,
        M = null,
        L = null,
        I = null,
        P = T.clone().sub(R),
        H = 0,
        A = 0,
        C = 0;
    d > 0 && (H = Math.min(e, t) * (1 - d), A = e - H, C = t - H);
    var D = T.clone();
    D.x -= H;
    var O = Math.PI - P.angle(),
        $ = P.angle(),
        U = Math.tan($ / 2),
        B = Math.tan(O / 2),
        G = U + B,
        N = d ? G : B,
        z = d ? G : U;

    if (h = Math.min(h, (e - A) / N, P.length() / G), l = Math.min(l, (t - C) / z, P.length() / G), h > 0) {
      var _e65 = h / U;

      w = T.clone().sub(new u(_e65, h)), d && ((L = w.clone()).x -= H - G * h), T.sub(P.clone().setLength(_e65));
    }

    if (l > 0) {
      var _e66 = l / B;

      M = R.clone().sub(new u(_e66, -l)), R.add(P.clone().setLength(_e66)), d && ((I = M.clone()).x -= H - G * l, D.sub(P.clone().setLength(_e66)));
    }

    var V = (P = T.clone().sub(R)).length() < 0.5,
        j = [];

    for (var _c7 = 0; _c7 <= r; _c7++) {
      var _m2 = [],
          _p2 = _c7 / r,
          _f2 = _p2 * o + n,
          _E3 = new u(Math.sin(_f2), Math.cos(_f2));

      I ? (F(_m2, _p2, _E3, O, l, I, -1, !0), F(_m2, _p2, _E3, $, l, M, -1, !1)) : M ? (Y(_m2, _E3, M.x, 0, -1), F(_m2, _p2, _E3, $, l, M, -1, !1)) : s || Y(_m2, _E3, t, C, -1);

      var _S = flip(P).normalize();

      if (two2three(_S, _E3, x), !V) for (var _e67 = 0; _e67 <= a; _e67++) {
        var _t64 = _e67 / a,
            _r38 = P.clone().multiplyScalar(_t64).add(R);

        two2three(_r38, _E3, b), g.push(b.x, b.y, b.z), y.push(x.x, x.y, x.z), v.push(_p2, 0.5 + b.y / i), _m2.push(_++);
      }

      if (L ? (F(_m2, _p2, _E3, O, h, w, 1, !1), F(_m2, _p2, _E3, $, h, L, 1, !0)) : w ? (F(_m2, _p2, _E3, O, h, w, 1, !1), Y(_m2, _E3, w.x, 0, 1)) : s || Y(_m2, _E3, e, A, 1), d && !V) {
        var _e68 = flip(P).multiplyScalar(-1).normalize();

        two2three(_e68, _E3, x);

        for (var _e69 = 0; _e69 <= a; _e69++) {
          var _t65 = _e69 / a,
              _r39 = P.clone().multiplyScalar(-_t65).add(D);

          two2three(_r39, _E3, b), g.push(b.x, b.y, b.z), y.push(x.x, x.y, x.z), v.push(_p2, 0.5 + b.y / i), _m2.push(_++);
        }
      }

      d && !s && _m2.push(_m2[0]), j.push(_m2);
    }

    for (var _e70 = 0; _e70 < j.length - 1; _e70++) {
      for (var _t66 = 0; _t66 < j[0].length - 1; _t66++) {
        if (s && d && _t66 == a) continue;
        var _i70 = j[_e70][_t66],
            _r40 = j[_e70 + 1][_t66],
            _n4 = j[_e70 + 1][_t66 + 1],
            _o8 = j[_e70][_t66 + 1],
            _h8 = g[3 * _n4 + 0],
            _l7 = g[3 * _n4 + 2];
        E.push(_i70, _r40, _o8), 0 == _h8 && 0 == _l7 || E.push(_r40, _n4, _o8);
      }
    }

    function F(e, t, r, a, s, n, o, h) {
      for (var _l8 = 0; _l8 < c + 1; _l8++) {
        var _d3 = _l8 / c;

        var _m3 = o < 0 ? _d3 : 1 - _d3;

        h && (_m3 -= 1), _m3 *= a;

        var _p3 = new u(Math.sin(_m3), Math.cos(_m3) * o),
            _f3 = _p3.clone().multiplyScalar(s).add(n);

        two2three(_f3, r, b), g.push(b.x, b.y, b.z), two2three(_p3, r, x), y.push(x.x, x.y, x.z), v.push(t, 0.5 + b.y / i), e.push(_++);
      }
    }

    function Y(e, t, i, r, a) {
      var s = new p(),
          n = new u(),
          o = [i, r];
      a < 0 && o.reverse();

      for (var _i71 = 0, _o9 = o; _i71 < _o9.length; _i71++) {
        var _i72 = _o9[_i71];
        n.set(_i72, S * a), two2three(n, t, s), g.push(s.x, s.y, s.z), y.push(0, a, 0), v.push(0.5, 0.5), e.push(_++);
      }
    }

    function W(i, r, a) {
      var s = new u(Math.sin(a), Math.cos(a)),
          n = new u(-Math.cos(a), Math.sin(a)),
          o = new p(),
          h = i < 0 ? function (e, t, i) {
        return E.push(e, t, i);
      } : function (e, t, i) {
        return E.push(e, i, t);
      },
          l = new u((e + t + A + C) / 4, 0);
      two2three(l, s, o), g.push(o.x, o.y, o.z), y.push(n.x, 0, n.y), v.push(0.5, 0.5);
      var c = _++;

      for (var _iterator = _createForOfIteratorHelperLoose(r), _step; !(_step = _iterator()).done;) {
        var _e72 = _step.value;

        var _t67 = g.slice(3 * _e72, 3 * _e72 + 3);

        g.push.apply(g, _t67), y.push(n.x, 0, n.y);

        var _i73 = v.slice(2 * _e72, 2 * _e72 + 2);

        v.push.apply(v, _i73), _++;
      }

      for (var _e71 = c + 1; _e71 < _ - 1; _e71++) {
        h(c, _e71, _e71 + 1);
      }

      h(c, _ - 1, c + 1);
    }

    o < 2 * Math.PI && (W(-1, j[0], n), W(1, j[j.length - 1], n + o)), _this18.setIndex(E), _this18.setAttribute('position', new f(g, 3)), _this18.setAttribute('normal', new f(y, 3)), _this18.setAttribute('uv', new f(v, 2));
    return _this18;
  }

  return RoundedCylinderBufferGeometry;
}(THREE.BufferGeometry);

function two2three(e, t, i) {
  i.x = e.x * t.x, i.y = e.y, i.z = e.x * t.y;
}

function offset3d(e, t, i, r, a, s) {
  var n = t.clone().sub(e),
      o = i.clone().sub(e),
      h = n.angleTo(o);

  if (n.normalize(), o.normalize(), r === a) {
    var _t68 = n.add(o).normalize();

    s.copy(e).addScaledVector(_t68, r / Math.sin(h / 2));
  } else {
    var _t69 = n.angleTo(o);

    s.copy(e), s.addScaledVector(n, a / Math.sin(_t69)), s.addScaledVector(o, r / Math.sin(_t69));
  }
}

function projectOntoLine(e, t, i) {
  var r = e.clone().sub(t),
      a = i.clone().sub(t);
  return r.projectOnVector(a), r.add(t);
}
SPE.CylinderGeometry.RoundedCylinderBufferGeometry = RoundedCylinderBufferGeometry, SPE.EllipseGeometry = new function () {
  this.build = function (_ref7) {
    var _ref7$width = _ref7.width,
        e = _ref7$width === void 0 ? 100 : _ref7$width,
        _ref7$height = _ref7.height,
        t = _ref7$height === void 0 ? e : _ref7$height,
        _ref7$spikes = _ref7.spikes,
        i = _ref7$spikes === void 0 ? 128 : _ref7$spikes,
        _ref7$angle = _ref7.angle,
        r = _ref7$angle === void 0 ? 360 : _ref7$angle,
        _ref7$innerRadius = _ref7.innerRadius,
        a = _ref7$innerRadius === void 0 ? 0 : _ref7$innerRadius;
    var s;

    if (a > 0) {
      var n = 0.5 * e,
          o = a * n / 100;
      (s = new THREE.RingBufferGeometry(o, n, i, 1, Math.PI / 2, r * Math.PI / 180)).scale(1, Math.abs(t) / Math.abs(e), 1);
    } else {
      var _a22 = !0,
          _n5 = 0.5 * (e = Math.abs(e)),
          _o10 = 0.5 * (t = Math.abs(t)),
          _h9 = 0,
          _l9 = 0,
          _c8 = r * Math.PI / 180 * (_a22 ? -1 : 1) / i,
          _d4 = new THREE.Shape();

      for (var _e73 = 0; _e73 <= i; _e73++) {
        var _t70 = _c8 * _e73,
            _i74 = _h9 + Math.sin(_t70) * _n5,
            _r41 = _l9 + Math.cos(_t70) * _o10;

        _d4.lineTo(_i74, _r41);
      }

      360 === r && (_d4.curves = _d4.curves.slice(1)), s = new THREE.ShapeBufferGeometry(_d4), SPE.Math.fixUvs(s, e, t);
    }

    return s.userData = {
      type: 'EllipseGeometry',
      parameters: {
        width: e,
        height: t,
        depth: 0,
        spikes: i,
        angle: r,
        innerRadius: a
      }
    }, s;
  }, this.buildFromGeometry = function (e, _ref8) {
    var _ref8$width = _ref8.width,
        t = _ref8$width === void 0 ? e.userData.parameters.width : _ref8$width,
        _ref8$height = _ref8.height,
        i = _ref8$height === void 0 ? e.userData.parameters.height : _ref8$height,
        _ref8$spikes = _ref8.spikes,
        r = _ref8$spikes === void 0 ? e.userData.parameters.spikes : _ref8$spikes,
        _ref8$angle = _ref8.angle,
        a = _ref8$angle === void 0 ? e.userData.parameters.angle : _ref8$angle,
        _ref8$innerRadius = _ref8.innerRadius,
        s = _ref8$innerRadius === void 0 ? e.userData.parameters.innerRadius : _ref8$innerRadius;
    return this.build({
      width: t,
      height: i,
      spikes: r,
      angle: a,
      innerRadius: s
    });
  };
}(), SPE.IcosahedronGeometry = new function () {
  this.build = function (_ref9) {
    var _ref9$width = _ref9.width,
        e = _ref9$width === void 0 ? 100 : _ref9$width,
        _ref9$height = _ref9.height,
        t = _ref9$height === void 0 ? e : _ref9$height,
        _ref9$depth = _ref9.depth,
        i = _ref9$depth === void 0 ? e : _ref9$depth,
        _ref9$detail = _ref9.detail,
        r = _ref9$detail === void 0 ? 0 : _ref9$detail;
    e = Math.abs(e), t = Math.abs(t), i = Math.abs(i);
    var a = new THREE.IcosahedronBufferGeometry(0.5 * e, r);
    return a.scale(1, t / e, i / e), a.userData = {
      type: 'IcosahedronGeometry',
      parameters: {
        width: e,
        height: t,
        depth: i,
        detail: r
      }
    }, a;
  }, this.buildFromGeometry = function (e, _ref10) {
    var _ref10$width = _ref10.width,
        t = _ref10$width === void 0 ? e.userData.parameters.width : _ref10$width,
        _ref10$height = _ref10.height,
        i = _ref10$height === void 0 ? e.userData.parameters.height : _ref10$height,
        _ref10$depth = _ref10.depth,
        r = _ref10$depth === void 0 ? e.userData.parameters.depth : _ref10$depth,
        _ref10$detail = _ref10.detail,
        a = _ref10$detail === void 0 ? e.userData.parameters.detail : _ref10$detail;
    return this.build({
      width: t,
      height: i,
      depth: r,
      detail: a
    });
  };
}(), SPE.PolygonGeometry = new function () {
  this.build = function (_ref11) {
    var _ref11$width = _ref11.width,
        e = _ref11$width === void 0 ? 100 : _ref11$width,
        _ref11$height = _ref11.height,
        t = _ref11$height === void 0 ? e : _ref11$height,
        _ref11$spikes = _ref11.spikes,
        i = _ref11$spikes === void 0 ? 5 : _ref11$spikes,
        _ref11$cornerRadius = _ref11.cornerRadius,
        r = _ref11$cornerRadius === void 0 ? 0 : _ref11$cornerRadius,
        _ref11$extrudeDepth = _ref11.extrudeDepth,
        a = _ref11$extrudeDepth === void 0 ? 0 : _ref11$extrudeDepth,
        _ref11$extrudeBevelSi = _ref11.extrudeBevelSize,
        s = _ref11$extrudeBevelSi === void 0 ? 0 : _ref11$extrudeBevelSi,
        _ref11$extrudeBevelSe = _ref11.extrudeBevelSegments,
        n = _ref11$extrudeBevelSe === void 0 ? 1 : _ref11$extrudeBevelSe;
    var o,
        h = 0.5 * (e = Math.abs(e)),
        l = 0.5 * (t = Math.abs(t)),
        c = 2 * Math.PI / i,
        d = new THREE.Shape();

    for (var _e74 = 0; _e74 <= i; _e74++) {
      var _t71 = c * _e74,
          _i75 = 0 + Math.sin(_t71) * h,
          _r42 = 0 + Math.cos(_t71) * l;

      d.lineTo(_i75, _r42);
    }

    return 0 !== r && SPE.Geometry.Utils.roundShapePolygon(d, d.getPoints(), r), (o = a > 0 ? new THREE.ExtrudeBufferGeometry(d, {
      curveSegments: 64,
      steps: 1,
      depth: a,
      bevelEnabled: !0,
      bevelThickness: s,
      bevelSize: s,
      bevelOffset: 0,
      bevelSegments: n
    }) : new THREE.ShapeBufferGeometry(d, 32)).userData = {
      type: 'PolygonGeometry',
      parameters: {
        width: e,
        height: t,
        depth: 0,
        spikes: i,
        cornerRadius: r,
        extrudeDepth: a,
        extrudeBevelSize: s,
        extrudeBevelSegments: n
      }
    }, SPE.Math.fixUvs(o, e, t), o;
  }, this.buildFromGeometry = function (e, _ref12) {
    var _ref12$width = _ref12.width,
        t = _ref12$width === void 0 ? e.userData.parameters.width : _ref12$width,
        _ref12$height = _ref12.height,
        i = _ref12$height === void 0 ? e.userData.parameters.height : _ref12$height,
        _ref12$spikes = _ref12.spikes,
        r = _ref12$spikes === void 0 ? e.userData.parameters.spikes : _ref12$spikes,
        _ref12$cornerRadius = _ref12.cornerRadius,
        a = _ref12$cornerRadius === void 0 ? e.userData.parameters.cornerRadius : _ref12$cornerRadius,
        _ref12$extrudeDepth = _ref12.extrudeDepth,
        s = _ref12$extrudeDepth === void 0 ? e.userData.parameters.extrudeDepth : _ref12$extrudeDepth,
        _ref12$extrudeBevelSi = _ref12.extrudeBevelSize,
        n = _ref12$extrudeBevelSi === void 0 ? e.userData.parameters.extrudeBevelSize : _ref12$extrudeBevelSi,
        _ref12$extrudeBevelSe = _ref12.extrudeBevelSegments,
        o = _ref12$extrudeBevelSe === void 0 ? e.userData.parameters.extrudeBevelSegments : _ref12$extrudeBevelSe;
    return this.build({
      width: t,
      height: i,
      spikes: r,
      cornerRadius: a,
      extrudeDepth: s,
      extrudeBevelSize: n,
      extrudeBevelSegments: o
    });
  };
}(), SPE.PyramidGeometry = new function () {
  this.build = function (_ref13) {
    var _ref13$width = _ref13.width,
        e = _ref13$width === void 0 ? 100 : _ref13$width,
        _ref13$height = _ref13.height,
        t = _ref13$height === void 0 ? e : _ref13$height,
        _ref13$depth = _ref13.depth,
        i = _ref13$depth === void 0 ? e : _ref13$depth,
        _ref13$radialSegments = _ref13.radialSegments,
        r = _ref13$radialSegments === void 0 ? 4 : _ref13$radialSegments,
        _ref13$heightSegments = _ref13.heightSegments,
        a = _ref13$heightSegments === void 0 ? 1 : _ref13$heightSegments,
        s = _ref13.openEnded,
        _ref13$cornerRadius = _ref13.cornerRadius,
        n = _ref13$cornerRadius === void 0 ? 0 : _ref13$cornerRadius,
        _ref13$cornerSegments = _ref13.cornerSegments,
        o = _ref13$cornerSegments === void 0 ? 8 : _ref13$cornerSegments;
    e = Math.abs(e), t = Math.abs(t), i = Math.abs(i);
    var h = new RoundedPyramidBufferGeometry(0.5 * e, t, r, a, s, n, o);
    return h.scale(1, 1, i / e), h.userData = {
      type: 'PyramidGeometry',
      parameters: {
        width: e,
        height: t,
        depth: i,
        radialSegments: r,
        heightSegments: a,
        openEnded: s,
        cornerRadius: n,
        cornerSegments: o
      }
    }, h;
  }, this.buildFromGeometry = function (e, _ref14) {
    var _ref14$width = _ref14.width,
        t = _ref14$width === void 0 ? e.userData.parameters.width : _ref14$width,
        _ref14$height = _ref14.height,
        i = _ref14$height === void 0 ? e.userData.parameters.height : _ref14$height,
        _ref14$depth = _ref14.depth,
        r = _ref14$depth === void 0 ? e.userData.parameters.depth : _ref14$depth,
        _ref14$radialSegments = _ref14.radialSegments,
        a = _ref14$radialSegments === void 0 ? e.userData.parameters.radialSegments : _ref14$radialSegments,
        _ref14$heightSegments = _ref14.heightSegments,
        s = _ref14$heightSegments === void 0 ? e.userData.parameters.heightSegments : _ref14$heightSegments,
        _ref14$openEnded = _ref14.openEnded,
        n = _ref14$openEnded === void 0 ? e.userData.parameters.openEnded : _ref14$openEnded,
        _ref14$cornerRadius = _ref14.cornerRadius,
        o = _ref14$cornerRadius === void 0 ? e.userData.parameters.cornerRadius : _ref14$cornerRadius,
        _ref14$cornerSegments = _ref14.cornerSegments,
        h = _ref14$cornerSegments === void 0 ? e.userData.parameters.cornerSegments : _ref14$cornerSegments;
    return this.build({
      width: t,
      height: i,
      depth: r,
      radialSegments: a,
      heightSegments: s,
      openEnded: n,
      cornerRadius: o,
      cornerSegments: h
    });
  };
}();

var RoundedPyramidBufferGeometry = /*#__PURE__*/function (_THREE$BufferGeometry3) {
  _inheritsLoose(RoundedPyramidBufferGeometry, _THREE$BufferGeometry3);

  function RoundedPyramidBufferGeometry(e, t, i, r, a, s, n) {
    var _this19;

    if (e === void 0) {
      e = 0.5;
    }

    if (t === void 0) {
      t = 1;
    }

    if (i === void 0) {
      i = 4;
    }

    if (r === void 0) {
      r = 1;
    }

    if (a === void 0) {
      a = !1;
    }

    if (s === void 0) {
      s = 0;
    }

    if (n === void 0) {
      n = 4;
    }

    var o = THREE.Vector2,
        h = THREE.Vector3;
    _this19 = _THREE$BufferGeometry3.call(this) || this, _this19.type = 'RoundedPyramidBufferGeometry', _this19.parameters = {
      radius: e,
      height: t,
      radialSegments: i,
      heightSegments: r,
      openEnded: a,
      cornerRadius: s,
      cornerSegments: n
    };
    i = Math.floor(Math.max(3, i)), r = Math.floor(r), n = Math.floor(n);
    var l = [],
        c = [],
        d = [],
        m = [];
    var u = 0;

    var p = t / 2,
        f = Math.PI / i,
        E = e * Math.cos(Math.PI / i),
        g = 2 * Math.PI / i,
        y = (i - 2) * Math.PI / i,
        v = Math.PI - y,
        _ = new h(0, -p, 0),
        S = new h(0, p, 0),
        x = new o(e, -p),
        b = new o(E, -p),
        T = new o().copy(S).sub(b),
        R = new o().copy(S).sub(x),
        w = new o(T.y, -T.x).normalize(),
        M = new o(R.y, -R.x).normalize(),
        L = e * Math.cos(Math.PI / i) * Math.tan((Math.PI - T.angle()) / 2) - 1e-8;

    var I;
    s = Math.min(s, L);
    {
      var _e75 = new h(w.x, w.y, 0),
          _t72 = new h(Math.cos(g) * _e75.x, _e75.y, Math.sin(g) * _e75.x);

      I = _e75.angleTo(_t72);
    }
    var P = s / Math.tan((Math.PI - T.angle()) / 2),
        H = s / Math.tan((Math.PI - I) / 2),
        A = new h();

    if (!a) {
      c.push(_.x, _.y, _.z), d.push(0, -1, 0), m.push(0, 0);

      var _e76 = u++,
          _t73 = [],
          _r43 = x.clone(),
          _a23 = P / Math.cos(Math.PI / i);

      _r43.x -= _a23;

      for (var _e77 = 0; _e77 < i; _e77++) {
        var _a24 = _e77 / i * Math.PI * 2 + f,
            _s13 = new o(Math.sin(_a24), Math.cos(_a24));

        two2three(_r43, _s13, A), c.push(A.x, A.y, A.z), d.push(0, -1, 0), m.push(0, 0), _t73.push(u++);
      }

      for (var _i76 = 0; _i76 < _t73.length; _i76++) {
        l.push(_t73[_i76], _e76, _t73[(_i76 + 1) % _t73.length]);
      }
    }
    {
      var _e78 = new h(),
          _t74 = new h(),
          _r44 = new h(),
          _a25 = new h(),
          _p4 = new h(),
          _E4 = new h();

      for (var _g2 = 0; _g2 < i; _g2++) {
        var _y = _g2 / i * Math.PI * 2 + f,
            _v = (_g2 + 0.5) / i * Math.PI * 2 + f,
            _b = (_g2 + 1) / i * Math.PI * 2 + f,
            _R = new o(Math.sin(_y), Math.cos(_y)),
            _L = new o(Math.sin(_v), Math.cos(_v)),
            _A = new o(Math.sin(_b), Math.cos(_b));

        two2three(x, _R, _t74), two2three(x, _A, _r44), two2three(w, _L, _e78), offset3d(S, _t74, _r44, H, H, _a25), c.push(_a25.x, _a25.y, _a25.z), offset3d(_t74, S, _r44, H, P, _p4), c.push(_p4.x, _p4.y, _p4.z), offset3d(_r44, _t74, S, P, H, _E4), c.push(_E4.x, _E4.y, _E4.z), d.push(_e78.x, _e78.y, _e78.z), d.push(_e78.x, _e78.y, _e78.z), d.push(_e78.x, _e78.y, _e78.z), m.push(0, 0), m.push(0, 0), m.push(0, 0);
        var U = u++,
            B = u++,
            G = u++;

        if (l.push(U, B, G), s > 0) {
          {
            var _e79 = _t74.clone().add(_r44).multiplyScalar(0.5),
                _i77 = S.clone().sub(_e79).normalize(),
                _a26 = _.clone().sub(_e79).normalize().add(_i77).normalize().multiplyScalar(-1);

            O(_e79, _E4.clone().sub(_p4), _a26, T.angle());
          }

          var _o11 = void 0,
              _f4 = void 0;

          {
            var _e80 = new h();

            two2three(M, _A, _e80);

            var _t75 = _E4.clone().add(_a25).multiplyScalar(0.5);

            _t75 = projectOntoLine(_t75, _r44, S);

            var _i78 = _E4.clone().sub(_a25);

            var _O = O(_t75, _i78, _e80, I, _a25.y);

            _o11 = _O[0];
            _f4 = _O[1];
          }
          {
            var _e81 = _o11,
                _t76 = _e81.clone().setY(0).normalize(),
                _i79 = new h(0, -1, 0),
                _r45 = _t76.clone().cross(_i79);

            $(_e81, _t76, _i79, _r45);
          }
          {
            var _t77 = T.angle(),
                _r46 = Math.PI - _t77,
                _a27 = S.clone();

            _a27.y -= s / Math.sin(_t77 - Math.PI / 2);
            new h();

            var _o12 = new h(),
                _p5 = [];

            for (var _t78 = 0; _t78 < n; _t78++) {
              var _h10 = [],
                  _l10 = Math.PI / 2 - _r46 * _t78 / n,
                  _f5 = Math.cos(_l10),
                  _E6 = Math.sin(_l10);

              var _g3 = _v;

              for (var D = 0; D <= _t78; D++) {
                var _r47 = Math.cos(_g3),
                    _n6 = Math.sin(_g3);

                _e78.x = _f5 * _n6, _e78.y = _E6, _e78.z = _f5 * _r47, _o12.copy(_a27).addScaledVector(_e78, s), c.push(_o12.x, _o12.y, _o12.z), d.push(_e78.x, _e78.y, _e78.z), m.push(0, 0), _h10.push(u++), _g3 += 2 * Math.PI / _t78 / i;
              }

              _p5.push(_h10);
            }

            _f4.reverse(), _p5.push(_f4);

            var _E5 = _p5.length - 1;

            for (var _e82 = 0; _e82 < _E5; _e82++) {
              var _t79 = _p5[_e82],
                  _i80 = _p5[_e82 + 1],
                  _r48 = _t79.length - 1;

              l.push(_i80[1], _t79[0], _i80[0]);

              for (var _e83 = 1; _e83 <= _r48; _e83++) {
                l.push(_t79[_e83], _t79[_e83 - 1], _i80[_e83]), l.push(_i80[_e83 + 1], _t79[_e83], _i80[_e83]);
              }
            }
          }
        }
      }
    }

    function O(e, t, i, r, a) {
      var o = -r / 2,
          p = (Math.PI - r) / 2,
          f = t.clone().normalize().cross(i);
      e.addScaledVector(i, -s / Math.sin(p));
      var E = new h(),
          g = new h(),
          y = u,
          v = [];

      for (var _h11 = 0; _h11 <= n; _h11++) {
        var _l11 = o + _h11 / n * r;

        g.set(0, 0, 0), g.addScaledVector(f, Math.sin(_l11)), g.addScaledVector(i, Math.cos(_l11));

        for (var _i81 = 0; _i81 <= 1; _i81++) {
          var _r49 = _i81 / 1 - 0.5;

          if (E.copy(e), E.addScaledVector(t, _r49), E.addScaledVector(g, s), null != a) {
            var _e84 = Math.max(0, E.y - a);

            E.addScaledVector(t, -_e84 / t.y);
          }

          c.push(E.x, E.y, E.z), d.push(g.x, g.y, g.z), m.push(0, 0), 0 === _i81 && v.push(u), u++;
        }
      }

      for (var _e85 = 0; _e85 < n; _e85++) {
        for (var _t80 = 0; _t80 < 1; _t80++) {
          var _i82 = y + _t80 + 2 * _e85,
              _r50 = _i82 + 2,
              _a28 = _r50 + 1,
              _s14 = _i82 + 1;

          l.push(_i82, _r50, _s14), l.push(_r50, _a28, _s14);
        }
      }

      return [e.clone().addScaledVector(t, 0.5), v];
    }

    function $(e, t, i, r) {
      var a = Math.PI / 2,
          o = R.angle() - a,
          p = [],
          f = new h(),
          E = new h();

      for (var _h12 = 0; _h12 <= n; _h12++) {
        var _l12 = [],
            _y2 = _h12 / n;

        for (var g = 0; g <= _h12; g++) {
          var _n7 = ((_h12 ? g / _h12 : 0) - 0.5) * v,
              _p6 = Math.cos(_n7),
              _2 = Math.sin(_n7),
              _S2 = (a + Math.atan(Math.tan(o) * _p6)) * _y2,
              _x = Math.cos(_S2),
              _b2 = Math.sin(_S2);

          f.set(0, 0, 0), f.addScaledVector(t, _b2 * _p6), f.addScaledVector(i, _x), f.addScaledVector(r, _b2 * _2), E.copy(e).addScaledVector(f, s), c.push(E.x, E.y, E.z), d.push(f.x, f.y, f.z), m.push(0, 0), _l12.push(u++);
        }

        p.push(_l12);
      }

      var y = p.length - 1;

      for (var _e86 = 0; _e86 < y; _e86++) {
        var _t81 = p[_e86],
            _i83 = p[_e86 + 1],
            _r51 = _t81.length - 1;

        l.push(_t81[0], _i83[1], _i83[0]);

        for (var _e87 = 1; _e87 <= _r51; _e87++) {
          l.push(_t81[_e87 - 1], _t81[_e87], _i83[_e87]), l.push(_t81[_e87], _i83[_e87 + 1], _i83[_e87]);
        }
      }
    }

    _this19.setIndex(l), _this19.setAttribute('position', new THREE.Float32BufferAttribute(c, 3)), _this19.setAttribute('normal', new THREE.Float32BufferAttribute(d, 3)), _this19.setAttribute('uv', new THREE.Float32BufferAttribute(m, 2));
    return _this19;
  }

  return RoundedPyramidBufferGeometry;
}(THREE.BufferGeometry);

function genHelix(e, t, i, r, a, s, n, o, h, l, c, d) {
  n = Math.round(n), l = Math.round(l), d = Math.round(d);
  var m = [],
      u = [],
      p = [],
      f = [],
      E = [],
      g = [],
      y = [];

  var v,
      _,
      S,
      x,
      b,
      T,
      R,
      w,
      M = new THREE.Vector3(),
      L = new THREE.Vector3(),
      I = new THREE.Vector3(),
      P = new THREE.Vector3(),
      H = (new THREE.Vector3(), new THREE.Vector3()),
      A = new THREE.Vector3(),
      C = new THREE.Vector3(),
      D = new THREE.Vector3(),
      O = new THREE.Vector3(),
      $ = new THREE.Vector3(),
      U = new THREE.Vector3();

  var B = Math.min(t, r) / 2,
      G = B - o,
      N = B - o,
      z = i - 2 * o + 0.001,
      V = z / s,
      j = Math.ceil(n * s),
      F = z / j,
      Y = -z / 2,
      W = 2 * Math.PI / l,
      k = Math.PI / 2 / d,
      X = Math.min((1 - c / 100) * o, o - 0.1),
      q = o - X;

  function J(t, i) {
    var r = Math.PI / 2;
    T = i * F, w = 2 * Math.PI * (T % V) / V + r, T += Y, R = Math.sin(w) * N, b = Math.cos(w) * G, e ? t.set(b, R, T) : t.set(b, T, R);
  }

  J(I, -1), J(P, 0), H.copy(I);
  var K = I.distanceTo(P),
      Z = K * j + 2 * q,
      Q = Z - q;

  for (var _t82 = 0; _t82 <= j; _t82++) {
    J(M, _t82), U.subVectors(M, H).normalize(), H.copy(M), O.copy(M).setComponent(e + 1, 0).normalize(), $.crossVectors(U, O).normalize();

    var _i84 = 0 == _t82 ? 3 * Math.PI / 2 : k,
        _r52 = 0 == _t82 ? 0 : Q;

    for (var _e88 = 0, _a29 = 0; _e88 <= l; _a29 = ++_e88 * W) {
      if (A.addVectors(I.copy(O).multiplyScalar(o * Math.cos(_a29)), P.copy($).multiplyScalar(o * Math.sin(_a29))), D.copy(A).normalize(), 0 == _t82 || _t82 == j) {
        P.copy(D).multiplyScalar(X), L.addVectors(M, P);

        for (var _a30 = 0, _s15 = _i84; _a30 < d; _s15 = ++_a30 * k + _i84) {
          C.addVectors(I.copy(U).multiplyScalar(q * Math.sin(_s15)), P.copy(D).multiplyScalar(q * Math.cos(_s15))), P.addVectors(L, C), C.normalize(), E.push(P.x, P.y, P.z), g.push(C.x, C.y, C.z);

          var _i85 = (0 == _t82) + Math.sin(_s15);

          y.push((_r52 + q * _i85) / Z, _e88 / l, 0);
        }
      }

      P.addVectors(M, A), u.push(P.x, P.y, P.z), p.push(D.x, D.y, D.z), f.push((q + _t82 * K) / Z, _e88 / l);
    }
  }

  var ee = E.length / 2;

  for (var _e89 = 0; _e89 < d; _e89++) {
    for (var _t83 = 0; _t83 <= l; _t83++) {
      var _i86 = ee + 3 * (_t83 * d + _e89),
          _r53 = 3 * ((l - _t83) * d + d - _e89 - 1);

      u.push.apply(u, E.slice(_i86, _i86 + 3)), u.unshift.apply(u, E.slice(_r53, _r53 + 3)), p.push.apply(p, g.slice(_i86, _i86 + 3)), p.unshift.apply(p, g.slice(_r53, _r53 + 3)), f.push.apply(f, y.slice(_i86, _i86 + 2)), f.unshift.apply(f, y.slice(_r53, _r53 + 2));
    }
  }

  var te = l + 1;

  for (var _e90 = 0; _e90 < j + 2 * d; _e90++) {
    for (var _t84 = 0; _t84 < te - 1; _t84++) {
      S = (v = _e90 * te + _t84) + te, x = (_ = v + 1) + te, m.push(v, _, S, _, x, S);
    }
  }

  v = u.length / 3 - l - 1;

  for (var _e91 = 0; _e91 < l - 2; _e91++) {
    m.push(v, v + _e91 + 1, v + _e91 + 2), m.push(0, _e91 + 2, _e91 + 1);
  }

  var ie = new THREE.BufferGeometry();
  return ie.setIndex(m), ie.setAttribute('position', new THREE.Float32BufferAttribute(u, 3)), ie.setAttribute('normal', new THREE.Float32BufferAttribute(p, 3)), ie.setAttribute('uv', new THREE.Float32BufferAttribute(f, 2)), ie;
}
SPE.RectangleGeometry = new function () {
  this.build = function (_ref15) {
    var _ref15$width = _ref15.width,
        e = _ref15$width === void 0 ? 100 : _ref15$width,
        _ref15$height = _ref15.height,
        t = _ref15$height === void 0 ? e : _ref15$height,
        _ref15$cornerRadius = _ref15.cornerRadius,
        i = _ref15$cornerRadius === void 0 ? [0, 0, 0, 0] : _ref15$cornerRadius,
        _ref15$cornerType = _ref15.cornerType,
        r = _ref15$cornerType === void 0 ? 1 : _ref15$cornerType,
        _ref15$enabledIndieCo = _ref15.enabledIndieCorners,
        a = _ref15$enabledIndieCo === void 0 ? !1 : _ref15$enabledIndieCo,
        _ref15$extrudeDepth = _ref15.extrudeDepth,
        s = _ref15$extrudeDepth === void 0 ? 0 : _ref15$extrudeDepth,
        _ref15$extrudeBevelSi = _ref15.extrudeBevelSize,
        n = _ref15$extrudeBevelSi === void 0 ? 0 : _ref15$extrudeBevelSi,
        _ref15$extrudeBevelSe = _ref15.extrudeBevelSegments,
        o = _ref15$extrudeBevelSe === void 0 ? 1 : _ref15$extrudeBevelSe;
    e = Math.abs(e), t = Math.abs(t);
    var h = {
      x: 0.5 * e,
      y: 0.5 * t
    },
        l = {
      x: -h.x,
      y: -h.y
    },
        c = {
      x: h.x,
      y: h.y
    };

    function d(i, r, a) {
      return r > e && a > t ? Math.min(i * e / r, i * t / a) : r > e ? i * e / r : a > t ? i * t / a : i;
    }

    var m = [];
    m[0] = 0 === i[0] ? 0 : d(i[0], i[0] + i[3], i[0] + i[1]), m[1] = 0 === i[1] ? 0 : d(i[1], i[1] + i[2], i[1] + i[0]), m[2] = 0 === i[2] ? 0 : d(i[2], i[2] + i[1], i[2] + i[3]), m[3] = 0 === i[3] ? 0 : d(i[3], i[3] + i[0], i[3] + i[2]);
    var u,
        p = l.x,
        f = c.x,
        E = c.y,
        g = l.y,
        y = new THREE.Shape();
    if (y.moveTo(p, E - m[0]), 1 == r) i[0] > 0 && y.quadraticCurveTo(p, E, p + m[0], E), y.lineTo(f - m[1], E), i[1] > 0 && y.quadraticCurveTo(f, E, f, E - m[1]), y.lineTo(f, g + m[2]), i[2] > 0 && y.quadraticCurveTo(f, g, f - m[2], g), y.lineTo(p + m[3], g), i[3] > 0 && y.quadraticCurveTo(p, g, p, g + m[3]), y.lineTo(p, E - m[0]);else {
      var _e92 = 4 * (Math.SQRT2 - 1) / 3;

      i[0] > 0 && y.bezierCurveTo(p, E + m[0] * (_e92 - 1), p - m[0] * (_e92 - 1), E, p + m[0], E), y.lineTo(f - m[1], E), i[1] > 0 && y.bezierCurveTo(f + m[1] * (_e92 - 1), E, f, E + m[1] * (_e92 - 1), f, E - m[1]), y.lineTo(f, g + m[2]), i[2] > 0 && y.bezierCurveTo(f, g - m[2] * (_e92 - 1), f + m[2] * (_e92 - 1), g, f - m[2], g), y.lineTo(p + m[3], g), i[3] > 0 && y.bezierCurveTo(p - m[3] * (_e92 - 1), g, p, g - m[3] * (_e92 - 1), p, g + m[3]);
    }
    return y.lineTo(p, E - m[0]), (u = s > 0 ? new THREE.ExtrudeBufferGeometry(y, {
      curveSegments: 64,
      steps: 1,
      depth: s,
      bevelEnabled: !0,
      bevelThickness: n,
      bevelSize: n,
      bevelOffset: 0,
      bevelSegments: o
    }) : new THREE.ShapeBufferGeometry(y, 32)).userData = {
      type: 'RectangleGeometry',
      ui: {
        enabledIndieCorners: a
      },
      parameters: {
        width: e,
        height: t,
        depth: 0,
        cornerRadius: i,
        cornerType: r,
        extrudeDepth: s,
        extrudeBevelSize: n,
        extrudeBevelSegments: o
      }
    }, SPE.Math.fixUvs(u, e, t), u;
  }, this.buildFromGeometry = function (e, _ref16) {
    var _ref16$width = _ref16.width,
        t = _ref16$width === void 0 ? e.userData.parameters.width : _ref16$width,
        _ref16$height = _ref16.height,
        i = _ref16$height === void 0 ? e.userData.parameters.height : _ref16$height,
        _ref16$cornerRadius = _ref16.cornerRadius,
        r = _ref16$cornerRadius === void 0 ? e.userData.parameters.cornerRadius : _ref16$cornerRadius,
        _ref16$cornerType = _ref16.cornerType,
        a = _ref16$cornerType === void 0 ? e.userData.parameters.cornerType : _ref16$cornerType,
        _ref16$enabledIndieCo = _ref16.enabledIndieCorners,
        s = _ref16$enabledIndieCo === void 0 ? e.userData.ui.enabledIndieCorners : _ref16$enabledIndieCo,
        _ref16$extrudeDepth = _ref16.extrudeDepth,
        n = _ref16$extrudeDepth === void 0 ? e.userData.parameters.extrudeDepth : _ref16$extrudeDepth,
        _ref16$extrudeBevelSi = _ref16.extrudeBevelSize,
        o = _ref16$extrudeBevelSi === void 0 ? e.userData.parameters.extrudeBevelSize : _ref16$extrudeBevelSi,
        _ref16$extrudeBevelSe = _ref16.extrudeBevelSegments,
        h = _ref16$extrudeBevelSe === void 0 ? e.userData.parameters.extrudeBevelSegments : _ref16$extrudeBevelSe;
    return this.build({
      width: t,
      height: i,
      cornerRadius: r,
      cornerType: a,
      enabledIndieCorners: s,
      extrudeDepth: n,
      extrudeBevelSize: o,
      extrudeBevelSegments: h
    });
  };
}(), SPE.SphereGeometry = new function () {
  this.build = function (_ref17) {
    var _ref17$width = _ref17.width,
        e = _ref17$width === void 0 ? 100 : _ref17$width,
        _ref17$height = _ref17.height,
        t = _ref17$height === void 0 ? e : _ref17$height,
        _ref17$depth = _ref17.depth,
        i = _ref17$depth === void 0 ? e : _ref17$depth,
        _ref17$widthSegments = _ref17.widthSegments,
        r = _ref17$widthSegments === void 0 ? 64 : _ref17$widthSegments,
        _ref17$heightSegments = _ref17.heightSegments,
        a = _ref17$heightSegments === void 0 ? 64 : _ref17$heightSegments,
        s = _ref17.phiStart,
        n = _ref17.phiLength,
        o = _ref17.thetaStart,
        h = _ref17.thetaLength;
    e = Math.abs(e), t = Math.abs(t), i = Math.abs(i);
    var l = new THREE.SphereBufferGeometry(0.5 * e, r, a, s, n, o, h);
    return l.scale(1, t / e, i / e), l.userData = {
      type: 'SphereGeometry',
      parameters: {
        width: e,
        height: t,
        depth: i,
        widthSegments: r,
        heightSegments: a,
        phiStart: s,
        phiLength: n,
        thetaStart: o,
        thetaLength: h
      }
    }, l;
  }, this.buildFromGeometry = function (e, _ref18) {
    var _ref18$width = _ref18.width,
        t = _ref18$width === void 0 ? e.userData.parameters.width : _ref18$width,
        _ref18$height = _ref18.height,
        i = _ref18$height === void 0 ? e.userData.parameters.height : _ref18$height,
        _ref18$depth = _ref18.depth,
        r = _ref18$depth === void 0 ? e.userData.parameters.depth : _ref18$depth,
        _ref18$widthSegments = _ref18.widthSegments,
        a = _ref18$widthSegments === void 0 ? e.userData.parameters.widthSegments : _ref18$widthSegments,
        _ref18$heightSegments = _ref18.heightSegments,
        s = _ref18$heightSegments === void 0 ? e.userData.parameters.heightSegments : _ref18$heightSegments,
        _ref18$phiStart = _ref18.phiStart,
        n = _ref18$phiStart === void 0 ? e.userData.parameters.phiStart : _ref18$phiStart,
        _ref18$phiLength = _ref18.phiLength,
        o = _ref18$phiLength === void 0 ? e.userData.parameters.phiLength : _ref18$phiLength,
        _ref18$thetaStart = _ref18.thetaStart,
        h = _ref18$thetaStart === void 0 ? e.userData.parameters.thetaStart : _ref18$thetaStart,
        _ref18$thetaLength = _ref18.thetaLength,
        l = _ref18$thetaLength === void 0 ? e.userData.parameters.thetaLength : _ref18$thetaLength;
    return this.build({
      width: t,
      height: i,
      depth: r,
      widthSegments: a,
      heightSegments: s,
      phiStart: n,
      phiLength: o,
      thetaStart: h,
      thetaLength: l
    });
  };
}(), SPE.StarGeometry = new function () {
  this.build = function (_ref19) {
    var _ref19$width = _ref19.width,
        e = _ref19$width === void 0 ? 100 : _ref19$width,
        _ref19$height = _ref19.height,
        t = _ref19$height === void 0 ? e : _ref19$height,
        _ref19$innerRadiusPer = _ref19.innerRadiusPercent,
        i = _ref19$innerRadiusPer === void 0 ? 38.19 : _ref19$innerRadiusPer,
        _ref19$spikes = _ref19.spikes,
        r = _ref19$spikes === void 0 ? 5 : _ref19$spikes,
        _ref19$cornerRadius = _ref19.cornerRadius,
        a = _ref19$cornerRadius === void 0 ? 0 : _ref19$cornerRadius,
        _ref19$angle = _ref19.angle,
        s = _ref19$angle === void 0 ? 360 : _ref19$angle,
        _ref19$extrudeDepth = _ref19.extrudeDepth,
        n = _ref19$extrudeDepth === void 0 ? 0 : _ref19$extrudeDepth,
        _ref19$extrudeBevelSi = _ref19.extrudeBevelSize,
        o = _ref19$extrudeBevelSi === void 0 ? 0 : _ref19$extrudeBevelSi,
        _ref19$extrudeBevelSe = _ref19.extrudeBevelSegments,
        h = _ref19$extrudeBevelSe === void 0 ? 1 : _ref19$extrudeBevelSe;
    var l,
        c = 0.5 * (e = Math.abs(e)),
        d = 0.5 * (t = Math.abs(t)),
        m = s * Math.PI / 360 / r,
        u = Math.PI / 2 * 3 * -1,
        p = c * i / 100,
        f = d * i / 100,
        E = new THREE.Shape();

    if (3 == r && 50 == i) {
      m = 2 * Math.PI / r;

      for (var _e93 = 0; _e93 <= r; _e93++) {
        var _t85 = m * _e93,
            _i87 = 0 + Math.sin(_t85) * c,
            _r54 = 0 + Math.cos(_t85) * d;

        E.lineTo(_i87, _r54);
      }
    } else {
      E.moveTo(0, 0 + s == 360 ? d : 0);

      for (var _e94 = 0; _e94 < r; _e94++) {
        var _e95 = 0 + Math.cos(u) * c,
            _t86 = 0 + Math.sin(u) * d;

        E.lineTo(_e95, _t86), u += m, _e95 = 0 + Math.cos(u) * p, _t86 = 0 + Math.sin(u) * f, E.lineTo(_e95, _t86), u += m;
      }

      E.lineTo(0, 0 + s == 360 ? d : 0);
    }

    return 0 !== a && SPE.Geometry.Utils.roundShapePolygon(E, E.getPoints(), a), (l = n > 0 ? new THREE.ExtrudeBufferGeometry(E, {
      steps: 1,
      depth: n,
      bevelEnabled: !0,
      bevelThickness: o,
      bevelSize: o,
      bevelOffset: 0,
      bevelSegments: h
    }) : new THREE.ShapeBufferGeometry(E)).userData = {
      type: 'StarGeometry',
      parameters: {
        width: e,
        height: t,
        depth: 0,
        innerRadiusPercent: i,
        spikes: r,
        cornerRadius: a,
        angle: s,
        extrudeDepth: n,
        extrudeBevelSize: o,
        extrudeBevelSegments: h
      }
    }, SPE.Math.fixUvs(l, e, t), l;
  }, this.buildFromGeometry = function (e, _ref20) {
    var _ref20$width = _ref20.width,
        t = _ref20$width === void 0 ? e.userData.parameters.width : _ref20$width,
        _ref20$height = _ref20.height,
        i = _ref20$height === void 0 ? e.userData.parameters.height : _ref20$height,
        _ref20$innerRadiusPer = _ref20.innerRadiusPercent,
        r = _ref20$innerRadiusPer === void 0 ? e.userData.parameters.innerRadiusPercent : _ref20$innerRadiusPer,
        _ref20$spikes = _ref20.spikes,
        a = _ref20$spikes === void 0 ? e.userData.parameters.spikes : _ref20$spikes,
        _ref20$cornerRadius = _ref20.cornerRadius,
        s = _ref20$cornerRadius === void 0 ? e.userData.parameters.cornerRadius : _ref20$cornerRadius,
        _ref20$angle = _ref20.angle,
        n = _ref20$angle === void 0 ? e.userData.parameters.angle : _ref20$angle,
        _ref20$extrudeDepth = _ref20.extrudeDepth,
        o = _ref20$extrudeDepth === void 0 ? e.userData.parameters.extrudeDepth : _ref20$extrudeDepth,
        _ref20$extrudeBevelSi = _ref20.extrudeBevelSize,
        h = _ref20$extrudeBevelSi === void 0 ? e.userData.parameters.extrudeBevelSize : _ref20$extrudeBevelSi,
        _ref20$extrudeBevelSe = _ref20.extrudeBevelSegments,
        l = _ref20$extrudeBevelSe === void 0 ? e.userData.parameters.extrudeBevelSegments : _ref20$extrudeBevelSe;
    return this.build({
      width: t,
      height: i,
      innerRadiusPercent: r,
      spikes: a,
      cornerRadius: s,
      angle: n,
      extrudeDepth: o,
      extrudeBevelSize: h,
      extrudeBevelSegments: l
    });
  };
}(), SPE.TorusGeometry = new function () {
  this.build = function (_ref21) {
    var _ref21$width = _ref21.width,
        e = _ref21$width === void 0 ? 100 : _ref21$width,
        _ref21$height = _ref21.height,
        t = _ref21$height === void 0 ? e : _ref21$height,
        i = _ref21.depth,
        _ref21$tubePercent = _ref21.tubePercent,
        r = _ref21$tubePercent === void 0 ? 50 : _ref21$tubePercent,
        _ref21$radialSegments = _ref21.radialSegments,
        a = _ref21$radialSegments === void 0 ? 128 : _ref21$radialSegments,
        _ref21$tubularSegment = _ref21.tubularSegments,
        s = _ref21$tubularSegment === void 0 ? 64 : _ref21$tubularSegment,
        _ref21$arc = _ref21.arc,
        n = _ref21$arc === void 0 ? 2 * Math.PI : _ref21$arc,
        _ref21$cornerRadius = _ref21.cornerRadius,
        o = _ref21$cornerRadius === void 0 ? 30 : _ref21$cornerRadius,
        _ref21$cornerSegments = _ref21.cornerSegments,
        h = _ref21$cornerSegments === void 0 ? 8 : _ref21$cornerSegments;

    var l = 0.25 * e * r * 0.01,
        c = function (e, t, i, r, a, s, n, o, h, l, c) {
      var _ref22;
      (_ref22 = [i, t], t = _ref22[0], i = _ref22[1], _ref22), n = t / 2, 1 == (a /= 2 * Math.PI) && (l = 0);
      return genHelix(!0, e, t, i, r, a, s, n, o, h, l, c);
    }(e, t, i = i || 2 * l, 0, n, a, 0, 0, s, o, h);

    return c.scale(1, t / e, 1), c.userData = {
      type: 'TorusGeometry',
      parameters: {
        width: e,
        height: t,
        depth: i,
        tubePercent: r,
        radialSegments: a,
        tubularSegments: s,
        arc: n,
        cornerRadius: o,
        cornerSegments: h
      }
    }, c;
  }, this.buildFromGeometry = function (e, _ref23) {
    var _ref23$width = _ref23.width,
        t = _ref23$width === void 0 ? e.userData.parameters.width : _ref23$width,
        _ref23$height = _ref23.height,
        i = _ref23$height === void 0 ? e.userData.parameters.height : _ref23$height,
        _ref23$depth = _ref23.depth,
        r = _ref23$depth === void 0 ? e.userData.parameters.depth : _ref23$depth,
        _ref23$tubePercent = _ref23.tubePercent,
        a = _ref23$tubePercent === void 0 ? e.userData.parameters.tubePercent : _ref23$tubePercent,
        _ref23$radialSegments = _ref23.radialSegments,
        s = _ref23$radialSegments === void 0 ? e.userData.parameters.radialSegments : _ref23$radialSegments,
        _ref23$tubularSegment = _ref23.tubularSegments,
        n = _ref23$tubularSegment === void 0 ? e.userData.parameters.tubularSegments : _ref23$tubularSegment,
        _ref23$arc = _ref23.arc,
        o = _ref23$arc === void 0 ? e.userData.parameters.arc : _ref23$arc,
        _ref23$cornerRadius = _ref23.cornerRadius,
        h = _ref23$cornerRadius === void 0 ? e.userData.parameters.cornerRadius : _ref23$cornerRadius,
        _ref23$cornerSegments = _ref23.cornerSegments,
        l = _ref23$cornerSegments === void 0 ? e.userData.parameters.cornerSegments : _ref23$cornerSegments;
    return this.build({
      width: t,
      height: i,
      depth: r,
      tubePercent: a,
      radialSegments: s,
      tubularSegments: n,
      arc: o,
      cornerRadius: h,
      cornerSegments: l
    });
  };
}(), SPE.TorusKnotGeometry = new function () {
  this.build = function (_ref24) {
    var _ref24$width = _ref24.width,
        e = _ref24$width === void 0 ? 100 : _ref24$width,
        _ref24$height = _ref24.height,
        t = _ref24$height === void 0 ? e : _ref24$height,
        _ref24$depth = _ref24.depth,
        i = _ref24$depth === void 0 ? 1 : _ref24$depth,
        _ref24$tube = _ref24.tube,
        r = _ref24$tube === void 0 ? 50 : _ref24$tube,
        _ref24$tubularSegment = _ref24.tubularSegments,
        a = _ref24$tubularSegment === void 0 ? 64 : _ref24$tubularSegment,
        _ref24$radialSegments = _ref24.radialSegments,
        s = _ref24$radialSegments === void 0 ? 32 : _ref24$radialSegments,
        _ref24$p = _ref24.p,
        n = _ref24$p === void 0 ? 2 : _ref24$p,
        _ref24$q = _ref24.q,
        o = _ref24$q === void 0 ? 3 : _ref24$q;
    var h = 0.5 * e - r,
        l = new THREE.TorusKnotBufferGeometry(h, r, a, s, n, o);
    return l.userData = {
      type: 'TorusKnotGeometry',
      parameters: {
        width: e,
        height: t,
        depth: i,
        tube: r,
        tubularSegments: a,
        radialSegments: s,
        p: n,
        q: o
      }
    }, l;
  }, this.buildFromGeometry = function (e, _ref25) {
    var _ref25$width = _ref25.width,
        t = _ref25$width === void 0 ? e.userData.parameters.width : _ref25$width,
        _ref25$height = _ref25.height,
        i = _ref25$height === void 0 ? e.userData.parameters.height : _ref25$height,
        _ref25$depth = _ref25.depth,
        r = _ref25$depth === void 0 ? e.userData.parameters.depth : _ref25$depth,
        _ref25$tube = _ref25.tube,
        a = _ref25$tube === void 0 ? e.userData.parameters.tube : _ref25$tube,
        _ref25$tubularSegment = _ref25.tubularSegments,
        s = _ref25$tubularSegment === void 0 ? e.userData.parameters.tubularSegments : _ref25$tubularSegment,
        _ref25$radialSegments = _ref25.radialSegments,
        n = _ref25$radialSegments === void 0 ? e.userData.parameters.radialSegments : _ref25$radialSegments,
        _ref25$p = _ref25.p,
        o = _ref25$p === void 0 ? e.userData.parameters.p : _ref25$p,
        _ref25$q = _ref25.q,
        h = _ref25$q === void 0 ? e.userData.parameters.q : _ref25$q;
    return this.build({
      width: t,
      height: i,
      depth: r,
      tube: a,
      tubularSegments: s,
      radialSegments: n,
      p: o,
      q: h
    });
  };
}(), SPE.LatheGeometry = new function () {
  this.build = function (_ref26) {
    var _ref26$width = _ref26.width,
        e = _ref26$width === void 0 ? 100 : _ref26$width,
        _ref26$height = _ref26.height,
        t = _ref26$height === void 0 ? e : _ref26$height,
        _ref26$depth = _ref26.depth,
        i = _ref26$depth === void 0 ? e : _ref26$depth,
        _ref26$segments = _ref26.segments,
        r = _ref26$segments === void 0 ? 64 : _ref26$segments,
        _ref26$verticalSegmen = _ref26.verticalSegments,
        a = _ref26$verticalSegmen === void 0 ? 64 : _ref26$verticalSegmen,
        _ref26$points = _ref26.points,
        s = _ref26$points === void 0 ? [{
      x: 0,
      y: -50,
      id: 0
    }, {
      x: 50,
      y: -50,
      id: 1
    }, {
      x: 50,
      y: 50,
      id: 2
    }, {
      x: 0,
      y: 50,
      id: 3
    }] : _ref26$points;
    var n = new THREE.Shape();
    n.moveTo(s[0].x, s[0].y), n.bezierCurveTo(s[1].x, s[1].y, s[2].x, s[2].y, s[3].x, s[3].y);
    var o = new THREE.LatheBufferGeometry(n.extractPoints(a).shape, r);
    return o.rotateZ(Math.PI), o.userData = {
      type: 'LatheGeometry',
      parameters: {
        width: e,
        height: t,
        depth: i,
        segments: r,
        verticalSegments: a,
        points: s
      }
    }, o;
  }, this.buildFromGeometry = function (e, _ref27) {
    var _ref27$width = _ref27.width,
        t = _ref27$width === void 0 ? e.userData.parameters.width : _ref27$width,
        _ref27$height = _ref27.height,
        i = _ref27$height === void 0 ? e.userData.parameters.height : _ref27$height,
        _ref27$depth = _ref27.depth,
        r = _ref27$depth === void 0 ? e.userData.parameters.depth : _ref27$depth,
        _ref27$segments = _ref27.segments,
        a = _ref27$segments === void 0 ? e.userData.parameters.segments : _ref27$segments,
        _ref27$verticalSegmen = _ref27.verticalSegments,
        s = _ref27$verticalSegmen === void 0 ? e.userData.parameters.verticalSegments : _ref27$verticalSegmen,
        _ref27$points = _ref27.points,
        n = _ref27$points === void 0 ? e.userData.parameters.points : _ref27$points;
    return this.build({
      width: t,
      height: i,
      depth: r,
      segments: a,
      verticalSegments: s,
      points: n
    });
  };
}(), SPE.HelixGeometry = new function () {
  this.build = function (_ref28) {
    var _ref28$width = _ref28.width,
        e = _ref28$width === void 0 ? 100 : _ref28$width,
        _ref28$height = _ref28.height,
        t = _ref28$height === void 0 ? e : _ref28$height,
        _ref28$depth = _ref28.depth,
        i = _ref28$depth === void 0 ? e : _ref28$depth,
        _ref28$radius = _ref28.radius,
        r = _ref28$radius === void 0 ? 20 : _ref28$radius,
        _ref28$revolutions = _ref28.revolutions,
        a = _ref28$revolutions === void 0 ? 2 : _ref28$revolutions,
        _ref28$segments = _ref28.segments,
        s = _ref28$segments === void 0 ? 40 : _ref28$segments,
        _ref28$pathRadius = _ref28.pathRadius,
        n = _ref28$pathRadius === void 0 ? 10 : _ref28$pathRadius,
        _ref28$pathType = _ref28.pathType,
        o = _ref28$pathType === void 0 ? 0 : _ref28$pathType,
        _ref28$pathSegments = _ref28.pathSegments,
        h = _ref28$pathSegments === void 0 ? 30 : _ref28$pathSegments,
        _ref28$cornerRadius = _ref28.cornerRadius,
        l = _ref28$cornerRadius === void 0 ? 30 : _ref28$cornerRadius,
        _ref28$cornerSegments = _ref28.cornerSegments,
        c = _ref28$cornerSegments === void 0 ? 8 : _ref28$cornerSegments;
    var d = genHelix(!1, Math.abs(e), Math.abs(t), Math.abs(i), Math.abs(r), Math.abs(a), Math.abs(s), Math.abs(n), Math.abs(o), Math.abs(h), Math.abs(l), Math.abs(c));
    return d.userData = {
      type: 'HelixGeometry',
      parameters: {
        height: t,
        width: e,
        depth: i,
        radius: r,
        revolutions: a,
        segments: s,
        pathRadius: n,
        pathType: o,
        pathSegments: h,
        cornerRadius: l,
        cornerSegments: c
      }
    }, d;
  }, this.buildFromGeometry = function (e, _ref29) {
    var _ref29$width = _ref29.width,
        t = _ref29$width === void 0 ? e.userData.parameters.width : _ref29$width,
        _ref29$height = _ref29.height,
        i = _ref29$height === void 0 ? e.userData.parameters.height : _ref29$height,
        _ref29$depth = _ref29.depth,
        r = _ref29$depth === void 0 ? e.userData.parameters.depth : _ref29$depth,
        _ref29$radius = _ref29.radius,
        a = _ref29$radius === void 0 ? e.userData.parameters.radius : _ref29$radius,
        _ref29$revolutions = _ref29.revolutions,
        s = _ref29$revolutions === void 0 ? e.userData.parameters.revolutions : _ref29$revolutions,
        _ref29$segments = _ref29.segments,
        n = _ref29$segments === void 0 ? e.userData.parameters.segments : _ref29$segments,
        _ref29$pathRadius = _ref29.pathRadius,
        o = _ref29$pathRadius === void 0 ? e.userData.parameters.pathRadius : _ref29$pathRadius,
        _ref29$pathType = _ref29.pathType,
        h = _ref29$pathType === void 0 ? e.userData.parameters.pathType : _ref29$pathType,
        _ref29$pathSegments = _ref29.pathSegments,
        l = _ref29$pathSegments === void 0 ? e.userData.parameters.pathSegments : _ref29$pathSegments,
        _ref29$cornerRadius = _ref29.cornerRadius,
        c = _ref29$cornerRadius === void 0 ? e.userData.parameters.cornerRadius : _ref29$cornerRadius,
        _ref29$cornerSegments = _ref29.cornerSegments,
        d = _ref29$cornerSegments === void 0 ? e.userData.parameters.cornerSegments : _ref29$cornerSegments;
    return this.build({
      width: t,
      height: i,
      depth: r,
      radius: a,
      revolutions: s,
      segments: n,
      pathRadius: o,
      pathType: h,
      pathSegments: l,
      cornerRadius: c,
      cornerSegments: d
    });
  };
}(), SPE.TriangleGeometry = new function () {
  this.build = function (_ref30) {
    var _ref30$width = _ref30.width,
        e = _ref30$width === void 0 ? 100 : _ref30$width,
        t = _ref30.height,
        _ref30$cornerRadius = _ref30.cornerRadius,
        i = _ref30$cornerRadius === void 0 ? 0 : _ref30$cornerRadius,
        _ref30$extrudeDepth = _ref30.extrudeDepth,
        r = _ref30$extrudeDepth === void 0 ? 0 : _ref30$extrudeDepth,
        _ref30$extrudeBevelSi = _ref30.extrudeBevelSize,
        a = _ref30$extrudeBevelSi === void 0 ? 0 : _ref30$extrudeBevelSi,
        _ref30$extrudeBevelSe = _ref30.extrudeBevelSegments,
        s = _ref30$extrudeBevelSe === void 0 ? 1 : _ref30$extrudeBevelSe,
        _ref30$isRect = _ref30.isRect,
        n = _ref30$isRect === void 0 ? !1 : _ref30$isRect;
    e = Math.abs(e);
    var o,
        h = new THREE.Shape();
    if (n) t = t ? Math.abs(t) : e, h.moveTo(0.5 * -e, 0.5 * t), h.lineTo(0.5 * e, 0.5 * -t), h.lineTo(0.5 * -e, 0.5 * -t), h.lineTo(0.5 * -e, 0.5 * t);else {
      var _i88 = {
        x: 0.5 * e,
        y: 0.5 * (t = (t = Math.abs(t)) || e * (Math.sqrt(3) / 2))
      };
      h.moveTo(0, _i88.y), h.lineTo(_i88.x, -_i88.y), h.lineTo(-_i88.x, -_i88.y), h.lineTo(0, _i88.y);
    }
    return 0 !== i && function (e, t, i) {
      var r,
          a,
          s,
          n,
          o,
          h,
          l,
          c,
          d,
          m,
          u,
          p,
          f,
          E,
          g,
          y,
          v,
          _ = function _(e, t, i) {
        i.x = t.x - e.x, i.y = t.y - e.y, i.len = Math.sqrt(i.x * i.x + i.y * i.y), i.nx = i.x / i.len, i.ny = i.y / i.len, i.ang = Math.atan2(i.ny, i.nx);
      };

      for (c = {}, d = {}, n = t.length - 1, o = t[n - 1], e.curves = [], r = 0; r < n; r++) {
        h = t[r % n], l = t[(r + 1) % n], _(h, o, c), _(h, l, d), m = c.nx * d.ny - c.ny * d.nx, u = c.nx * d.nx - c.ny * -d.ny, E = Math.asin(m), p = 1, f = !1, u < 0 ? E < 0 ? E = Math.PI + E : (E = Math.PI - E, p = -1, f = !0) : E > 0 && (p = -1, f = !0), g = 0.5 * E, (v = Math.abs(Math.cos(g) * i / Math.sin(g))) > Math.min(0.5 * c.len, 0.5 * d.len) ? (v = Math.min(0.5 * c.len, 0.5 * d.len), y = Math.abs(v * Math.sin(g) / Math.cos(g))) : y = i, a = h.x + d.nx * v, s = h.y + d.ny * v, a += -d.ny * y * p, s += d.nx * y * p, e.absarc(a, s, y, c.ang + Math.PI / 2 * p, d.ang - Math.PI / 2 * p, f), o = h, h = l;
      }

      e.closePath();
    }(h, h.getPoints(), i), (o = r > 0 ? new THREE.ExtrudeBufferGeometry(h, {
      curveSegments: 64,
      steps: 1,
      depth: r,
      bevelEnabled: !0,
      bevelThickness: a,
      bevelSize: a,
      bevelOffset: 0,
      bevelSegments: s
    }) : new THREE.ShapeBufferGeometry(h, 32)).userData = {
      type: 'TriangleGeometry',
      parameters: {
        width: e,
        height: t,
        depth: 0,
        cornerRadius: i,
        extrudeDepth: r,
        extrudeBevelSize: a,
        extrudeBevelSegments: s,
        isRect: n
      }
    }, SPE.Math.fixUvs(o, e, t), o;
  }, this.buildFromGeometry = function (e, _ref31) {
    var _ref31$width = _ref31.width,
        t = _ref31$width === void 0 ? e.userData.parameters.width : _ref31$width,
        _ref31$height = _ref31.height,
        i = _ref31$height === void 0 ? e.userData.parameters.height : _ref31$height,
        _ref31$cornerRadius = _ref31.cornerRadius,
        r = _ref31$cornerRadius === void 0 ? e.userData.parameters.cornerRadius : _ref31$cornerRadius,
        _ref31$extrudeDepth = _ref31.extrudeDepth,
        a = _ref31$extrudeDepth === void 0 ? e.userData.parameters.extrudeDepth : _ref31$extrudeDepth,
        _ref31$extrudeBevelSi = _ref31.extrudeBevelSize,
        s = _ref31$extrudeBevelSi === void 0 ? e.userData.parameters.extrudeBevelSize : _ref31$extrudeBevelSi,
        _ref31$extrudeBevelSe = _ref31.extrudeBevelSegments,
        n = _ref31$extrudeBevelSe === void 0 ? e.userData.parameters.extrudeBevelSegments : _ref31$extrudeBevelSe,
        _ref31$isRect = _ref31.isRect,
        o = _ref31$isRect === void 0 ? e.userData.parameters.isRect : _ref31$isRect;
    return this.build({
      width: t,
      height: i,
      cornerRadius: r,
      extrudeDepth: a,
      extrudeBevelSize: s,
      extrudeBevelSegments: n,
      isRect: o
    });
  };
}(), SPE.NonParametricGeometry = new function () {
  this.build = function (e, t) {
    if (e === void 0) {
      e = new THREE.BoxBufferGeometry(100, 100, 100);
    }

    var i = new THREE.BufferGeometry();
    i.copy(e);
    var r = new THREE.Vector3();

    if (i.computeBoundingBox(), i.boundingBox.getSize(r), t) {
      var a = t.width ? t.width : r.x,
          s = t.height ? t.height : r.y,
          n = t.depth ? t.depth : r.z;
      i.scale(0 === r.x ? 1 : a / r.x, 0 === r.y ? 1 : s / r.y, 0 === r.z ? 1 : n / r.z);
    } else a = r.x, s = r.y, n = r.z;

    return i.userData = {
      type: 'NonParametricGeometry',
      parameters: {
        width: a,
        height: s,
        depth: n
      }
    }, i;
  }, this.buildFromGeometry = function (e, _ref32) {
    var _ref32$width = _ref32.width,
        t = _ref32$width === void 0 ? e.userData.parameters.width : _ref32$width,
        _ref32$height = _ref32.height,
        i = _ref32$height === void 0 ? e.userData.parameters.height : _ref32$height,
        _ref32$depth = _ref32.depth,
        r = _ref32$depth === void 0 ? e.userData.parameters.depth : _ref32$depth;
    return this.build(e, {
      width: t,
      height: i,
      depth: r
    });
  };
}(), SPE.StrokeGeometry = new function () {
  this.build = function (e, t) {
    if (t === void 0) {
      t = {};
    }

    var i = t.strokeAlignment || 1,
        r = t.strokeGrowth || 1,
        a = [];

    switch (e.userData.type) {
      case 'PolygonGeometry':
        var s = 3,
            n = e.getAttribute('position').array.length - 3;
        break;

      case 'StarGeometry':
        s = 0, n = e.getAttribute('position').array.length - 3;
        break;

      default:
        s = 0, n = e.getAttribute('position').array.length;
    }

    for (var _t87 = s; _t87 < n; _t87 += 3) {
      a.push([e.getAttribute('position').array[_t87], e.getAttribute('position').array[_t87 + 1]]);
    }

    var o = createLineGeo(a, i, r)(THREE);
    return o.userData = {
      type: 'StrokeGeometry',
      parameters: {
        strokeAlignment: i
      }
    }, o.toJSON = function () {
      var t = {};
      return t.uuid = this.uuid, t.type = this.type, '' !== this.name && (t.name = this.name), t.userData = this.userData, t.userData.meshGeometry = e.uuid, t;
    }, o;
  }, this.buildFromGeometry = function (e, t, _ref33) {
    var _ref33$strokeAlignmen = _ref33.strokeAlignment,
        i = _ref33$strokeAlignmen === void 0 ? t.userData.parameters.strokeAlignment : _ref33$strokeAlignmen,
        _ref33$strokeGrowth = _ref33.strokeGrowth,
        r = _ref33$strokeGrowth === void 0 ? t.userData.parameters.strokeGrowth : _ref33$strokeGrowth;
    return SPE.StrokeGeometry.build(e, {
      strokeAlignment: i,
      strokeGrowth: r
    });
  };
}(), SPE.TextFrameGeometry = new function () {
  this.build = function (_ref34) {
    var _ref34$width = _ref34.width,
        e = _ref34$width === void 0 ? 100 : _ref34$width,
        _ref34$height = _ref34.height,
        t = _ref34$height === void 0 ? e : _ref34$height;
    var i = new THREE.PlaneBufferGeometry(e, t);
    return i.userData = {
      type: 'TextFrameGeometry',
      parameters: {
        width: e,
        height: t,
        depth: 0
      }
    }, i;
  }, this.buildFromGeometry = function (e, _ref35) {
    var _ref35$width = _ref35.width,
        t = _ref35$width === void 0 ? e.userData.parameters.width : _ref35$width,
        _ref35$height = _ref35.height,
        i = _ref35$height === void 0 ? e.userData.parameters.height : _ref35$height;
    return this.build({
      width: t,
      height: i
    });
  };
}(), SPE.Geometry = {}, SPE.Geometry.Utils = new function () {
  this.roundShapePolygon = function (e, t, i) {
    var r,
        a,
        s,
        n,
        o,
        h,
        l,
        c,
        d,
        m,
        u,
        p,
        f,
        E,
        g,
        y,
        v,
        _ = function _(e, t, i) {
      i.x = t.x - e.x, i.y = t.y - e.y, i.len = Math.sqrt(i.x * i.x + i.y * i.y), i.nx = i.x / i.len, i.ny = i.y / i.len, i.ang = Math.atan2(i.ny, i.nx);
    };

    for (c = {}, d = {}, o = t[(n = t.length) - 2], e.curves = [], r = 1; r < n - 1; r++) {
      h = t[r % n], l = t[(r + 1) % n], _(h, o, c), _(h, l, d), m = c.nx * d.ny - c.ny * d.nx, u = c.nx * d.nx - c.ny * -d.ny, E = Math.asin(m), p = 1, f = !1, u < 0 ? E < 0 ? E = Math.PI + E : (E = Math.PI - E, p = -1, f = !0) : E > 0 && (p = -1, f = !0), g = E / 2, (v = Math.abs(Math.cos(g) * i / Math.sin(g))) > Math.min(c.len / 2, d.len / 2) ? (v = Math.min(c.len / 2, d.len / 2), y = Math.abs(v * Math.sin(g) / Math.cos(g))) : y = i, a = h.x + d.nx * v, s = h.y + d.ny * v, a += -d.ny * y * p, s += d.nx * y * p, e.absarc(a, s, y, c.ang + Math.PI / 2 * p, d.ang - Math.PI / 2 * p, f), o = h, h = l;
    }

    e.closePath();
  }, this.resizeGeometry = function (e, _ref36) {
    var t = _ref36.width,
        i = _ref36.height,
        r = _ref36.depth;
    t = Math.abs(t), i = Math.abs(i), r = Math.abs(r);
    var a = e.userData.parameters;
    var s, n, o;
    0 === t ? (t = a.width, s = 1) : s = t / a.width, 0 === i ? (i = a.height, n = 1) : n = i / a.height, 0 === r ? (r = a.depth, o = 1) : o = r / a.depth, e.scale(s, n, o), a.width = t, a.height = i, a.depth = r;
  }, this.addBarycentricAttribute = function (e, t) {
    var i = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)],
        r = e.attributes.position,
        a = new Float32Array(3 * r.count);

    for (var _e96 = 0, _t88 = r.count; _e96 < _t88; _e96++) {
      i[_e96 % 3].toArray(a, 3 * _e96);
    }

    e.setAttribute(t, new THREE.Float32BufferAttribute(a, 3));
  }, this.removeBarycentricAttribute = function (e, t) {
    e.deleteAttribute(t);
  }, this.loadFromUrl = function (e) {
    return new Promise(function (t, i) {
      new THREE.BufferGeometryLoader().load(e, function (e) {
        t(e);
      });
    });
  };
}();

var Cloner = /*#__PURE__*/function (_THREE$Object3D) {
  _inheritsLoose(Cloner, _THREE$Object3D);

  function Cloner(e, t) {
    var _this20;

    if (t === void 0) {
      t = {};
    }

    _this20 = _THREE$Object3D.call(this) || this, _this20.object = e, _this20.userData.type = 'Cloner', _this20.userData.skip = !0, e.computeComplexBoundingBox(!0);
    var i = e.complexBoundingBox.getSize(new THREE.Vector3());
    _this20.parameters = {
      type: void 0 !== t.type ? t.type : 'radial',
      hideBase: void 0 !== t.hideBase && t.hideBase,
      count: void 0 !== t.count ? t.count : 3,
      ra_radius: void 0 !== t.ra_radius ? t.ra_radius : 2 * Math.max(i.x, i.y),
      ra_startAngle: void 0 !== t.ra_startAngle ? t.ra_startAngle : 0,
      ra_endAngle: void 0 !== t.ra_endAngle ? t.ra_endAngle : 360,
      ra_align: void 0 !== t.ra_align && t.ra_align,
      ra_axis: void 0 !== t.ra_axis ? t.ra_axis : 'y',
      ra_scale: void 0 !== t.ra_scale ? t.ra_scale.clone() : new THREE.Vector3(),
      ra_rotation: void 0 !== t.ra_rotation ? t.ra_rotation.clone() : new THREE.Euler(),
      ra_position: void 0 !== t.ra_position ? t.ra_position.clone() : new THREE.Vector3(),
      li_scale: void 0 !== t.li_scale ? t.li_scale.clone() : new THREE.Vector3(),
      li_rotation: void 0 !== t.li_rotation ? t.li_rotation.clone() : new THREE.Euler(),
      li_position: void 0 !== t.li_position ? t.li_position.clone() : new THREE.Vector3(i.x + 0.1 * i.x, 0, 0).round(),
      gr_count: void 0 !== t.gr_count ? t.gr_count.clone() : new THREE.Vector3(2, 2, 2),
      gr_size: void 0 !== t.gr_size ? t.gr_size.clone() : new THREE.Vector3(i.x + 0.1 * i.x, i.y + 0.1 * i.y, i.z + 0.1 * i.z).round(),
      gr_fromCenter: void 0 === t.gr_fromCenter || t.gr_fromCenter
    }, _this20.update(), _this20.setHideBase(_this20.parameters.hideBase);
    return _this20;
  }

  var _proto27 = Cloner.prototype;

  _proto27.refreshMaterial = function refreshMaterial() {
    for (var e = 0, t = this.children.length; e < t; ++e) {
      this.children[e].material = this.object.material;
    }
  };

  _proto27.setHideBase = function setHideBase(e) {
    if (void 0 !== this.object.material) {
      if (this.children.length > 0) if (this.object.material.visible = !0, !0 === e) {
        var _e97 = this.object.material.clone();

        for (var t = 0, i = this.children.length; t < i; ++t) {
          this.children[t].material = _e97;
        }
      } else for (var _e98 = 0, _t89 = this.children.length; _e98 < _t89; ++_e98) {
        this.children[_e98].material = this.object.material;
      }
      this.object.material.visible = !e, this.parameters.hideBase = e;
    }
  };

  _proto27.update = function update() {
    switch (this._updateCount(), this.parameters.type) {
      case 'radial':
        this._updateRadial();

        break;

      case 'linear':
        this._updateLinear();

        break;

      case 'grid':
        this._updateGrid();

    }
  };

  _proto27._updateCount = function _updateCount() {
    var e = this.parameters,
        t = 'grid' === e.type ? e.gr_count.x * e.gr_count.y * e.gr_count.z : e.count;
    if (this.children.length !== t) if (this.children.length < t) for (var _e99 = 0, i = t - this.children.length; _e99 < i; ++_e99) {
      var _e100 = this.object.shallowClone(!1);

      delete _e100.userData.isEntity, this.add(_e100);
    } else for (var _e101 = 0, _i89 = this.children.length - t; _e101 < _i89; ++_e101) {
      this.remove(this.children[0]);
    }
  };

  _proto27._updateRadial = function _updateRadial() {
    var e = this.parameters,
        t = e.ra_startAngle * THREE.Math.DEG2RAD,
        i = t - e.ra_endAngle * THREE.Math.DEG2RAD,
        r = new THREE.Euler(e.ra_rotation.x * THREE.Math.DEG2RAD, e.ra_rotation.y * THREE.Math.DEG2RAD, e.ra_rotation.z * THREE.Math.DEG2RAD);
    var a;
    'x' == e.ra_axis && (a = new THREE.Vector3(1, 0, 0)), 'y' == e.ra_axis && (a = new THREE.Vector3(0, 1, 0)), 'z' == e.ra_axis && (a = new THREE.Vector3(0, 0, 1));

    for (var s = 0; s < e.count; s++) {
      var n = this.children[s];
      n.hiddenMatrix.identity(), n.scale.x = e.ra_scale.x + 1, n.scale.y = e.ra_scale.y + 1, n.scale.z = e.ra_scale.z + 1, n.position.setScalar(0);

      var _o13 = i / e.count * s - t;

      'x' == e.ra_axis && n.rotation.set(0, _o13, 0), 'y' == e.ra_axis && n.rotation.set(0, 0, _o13), 'z' == e.ra_axis && n.rotation.set(_o13, 0, 0), n.translateOnAxis(a, e.ra_radius), n.position.add(e.ra_position), !0 === e.ra_align ? (n.rotation.x += r.x, n.rotation.y += r.y, n.rotation.z += r.z) : n.rotation.copy(r);
    }
  };

  _proto27._updateLinear = function _updateLinear() {
    var e = this.parameters,
        t = new THREE.Euler(e.li_rotation.x * THREE.Math.DEG2RAD, e.li_rotation.y * THREE.Math.DEG2RAD, e.li_rotation.z * THREE.Math.DEG2RAD);

    for (var i = 0; i < e.count; i++) {
      var r = this.children[i];
      r.hiddenMatrix.identity(), r.scale.x = e.li_scale.x * i + 1, r.scale.y = e.li_scale.y * i + 1, r.scale.z = e.li_scale.z * i + 1, r.rotation.x = t.x * i, r.rotation.y = t.y * i, r.rotation.z = t.z * i, r.position.x = e.li_position.x * i, r.position.y = e.li_position.y * i, r.position.z = e.li_position.z * i;
    }
  };

  _proto27._updateGrid = function _updateGrid() {
    var e = this.parameters;
    var t = 0;

    if (!0 === e.gr_fromCenter) {
      var i = {
        x: e.gr_count.x % 2 == 0 ? 2 : 1,
        y: e.gr_count.y % 2 == 0 ? 2 : 1,
        z: e.gr_count.z % 2 == 0 ? 2 : 1
      },
          r = new THREE.Vector3(e.gr_size.x * (e.gr_count.x - i.x) * 0.5, e.gr_size.y * (e.gr_count.y - i.y) * 0.5, e.gr_size.z * (e.gr_count.z - i.z) * 0.5);

      for (var _i90 = 0; _i90 < e.gr_count.x; _i90++) {
        for (var a = 0; a < e.gr_count.y; a++) {
          for (var s = 0; s < e.gr_count.z; s++) {
            var n = this.children[t++];
            n.hiddenMatrix.identity(), n.scale.setScalar(1), n.rotation.set(0, 0, 0), n.position.x = e.gr_size.x * _i90 - r.x, n.position.y = e.gr_size.y * a - r.y, n.position.z = e.gr_size.z * s - r.z;
          }
        }
      }
    } else for (var _i91 = 0; _i91 < e.gr_count.x; _i91++) {
      for (var _r55 = 0; _r55 < e.gr_count.y; _r55++) {
        for (var _a31 = 0; _a31 < e.gr_count.z; _a31++) {
          var _s16 = this.children[t++];
          _s16.hiddenMatrix.identity(), _s16.scale.setScalar(1), _s16.rotation.set(0, 0, 0), _s16.position.x = e.gr_size.x * _i91, _s16.position.y = -e.gr_size.y * _r55, _s16.position.z = -e.gr_size.z * _a31;
        }
      }
    }
  };

  _proto27.toJSON = function toJSON() {
    var e = this.parameters,
        t = {};
    return t.parameters = {
      type: e.type,
      hideBase: e.hideBase,
      count: e.count,
      ra_radius: e.ra_radius,
      ra_startAngle: e.ra_startAngle,
      ra_endAngle: e.ra_endAngle,
      ra_align: e.ra_align,
      ra_axis: e.ra_axis,
      ra_scale: e.ra_scale.toArray(),
      ra_rotation: e.ra_rotation.toArray(),
      ra_position: e.ra_position.toArray(),
      li_scale: e.li_scale.toArray(),
      li_rotation: e.li_rotation.toArray(),
      li_position: e.li_position.toArray(),
      gr_count: e.gr_count.toArray(),
      gr_size: e.gr_size.toArray(),
      gr_fromCenter: e.gr_fromCenter
    }, t;
  };

  _proto27.fromJSON = function fromJSON(e) {
    var t = e.parameters;
    return this.parameters = {
      type: t.type,
      hideBase: t.hideBase,
      count: t.count,
      ra_radius: t.ra_radius,
      ra_startAngle: t.ra_startAngle,
      ra_endAngle: t.ra_endAngle,
      ra_align: t.ra_align,
      ra_axis: t.ra_axis,
      ra_scale: new THREE.Vector3().fromArray(t.ra_scale),
      ra_rotation: new THREE.Vector3().fromArray(t.ra_rotation),
      ra_position: new THREE.Vector3().fromArray(t.ra_position),
      li_scale: new THREE.Vector3().fromArray(t.li_scale),
      li_rotation: new THREE.Vector3().fromArray(t.li_rotation),
      li_position: new THREE.Vector3().fromArray(t.li_position),
      gr_count: new THREE.Vector3().fromArray(t.gr_count),
      gr_size: new THREE.Vector3().fromArray(t.gr_size),
      gr_fromCenter: t.gr_fromCenter
    }, this.update(), this.setHideBase(this.parameters.hideBase), this;
  };

  return Cloner;
}(THREE.Object3D);
SPE.CombinedCamera = /*#__PURE__*/function (_THREE$Camera) {
  _inheritsLoose(_class, _THREE$Camera);

  function _class(e, t, i, r, a) {
    var _this21;

    if (e === void 0) {
      e = 100;
    }

    if (t === void 0) {
      t = 100;
    }

    if (i === void 0) {
      i = 45;
    }

    if (r === void 0) {
      r = 0.1;
    }

    if (a === void 0) {
      a = 5e4;
    }

    _this21 = _THREE$Camera.call(this) || this, e = window.innerWidth, t = window.innerHeight, _this21.orthoCamera = new THREE.OrthographicCamera(-0.5 * e, 0.5 * e, 0.5 * t, -0.5 * t, r, a), _this21.perspCamera = new THREE.PerspectiveCamera(i, e / t, r, a), _this21.left = _this21.orthoCamera.left, _this21.right = _this21.orthoCamera.right, _this21.top = _this21.orthoCamera.top, _this21.bottom = _this21.orthoCamera.bottom, _this21.view = _this21.orthoCamera.view, _this21.far = _this21.orthoCamera.far, _this21.isOrthographicCamera = !0, _this21._type = 'OrthographicCamera', _this21.aspect = _this21.perspCamera.aspect, _this21.fov = _this21.perspCamera.fov, _this21.focus = _this21.perspCamera.focus, _this21.filmGauge = _this21.perspCamera.filmGauge, _this21.filmOffset = _this21.perspCamera.filmOffset, _this21.targetOffset = 1e3, _this21.userData = {
      type: SPE.CombinedCamera.name,
      isEntity: !0,
      lock: !1,
      scaleLock: !1,
      activeCamera: !1,
      hiddenMatrix: new THREE.Matrix4()
    }, _this21.enableHelper = !1, _this21.objectHelper = new SPE.CombinedCameraHelper(_assertThisInitialized(_this21)), _this21.interaction = new Interaction(_assertThisInitialized(_this21)), _this21.toOrthographic();
    return _this21;
  }

  var _proto28 = _class.prototype;

  _proto28.getTarget = function getTarget(e, t) {
    var i;
    return void 0 === e && (console.warn('SPE.CombinedCamera: .getTarget() target is now required'), e = new THREE.Vector3()), i = void 0 === t ? this.getWorldDirection(new THREE.Vector3()).multiplyScalar(this.targetOffset) : t.clone().multiplyScalar(this.targetOffset), e.copy(this.position).add(i), e;
  };

  _proto28.getViewFrontToObject = function getViewFrontToObject(e) {
    var t = e.getWorldPosition(new THREE.Vector3()),
        i = e.getWorldDirection(new THREE.Vector3()).multiplyScalar(this.targetOffset);
    return {
      position: t.clone().add(i),
      target: t
    };
  };

  _proto28.getViewToObject = function getViewToObject(e) {
    var t = e.getWorldPosition(new THREE.Vector3()),
        i = this.getWorldDirection(new THREE.Vector3()).multiplyScalar(this.targetOffset);
    return {
      position: t.clone().sub(i),
      target: t
    };
  };

  _proto28.setViewplaneSize = function setViewplaneSize(e, t) {
    this.left = 0.5 * -e, this.right = 0.5 * e, this.top = 0.5 * t, this.bottom = 0.5 * -t, this.aspect = e / t, this.updateProjectionMatrix();
  };

  _proto28.toOrthographic = function toOrthographic(e) {
    this.orthoCamera.left = this.left, this.orthoCamera.right = this.right, this.orthoCamera.top = this.top, this.orthoCamera.bottom = this.bottom, this.orthoCamera.view = this.view, this.orthoCamera.far = this.far, this.orthoCamera.updateProjectionMatrix(), this.projectionMatrix = this.orthoCamera.projectionMatrix, this.projectionMatrixInverse = this.orthoCamera.projectionMatrixInverse, delete this.isPerspectiveCamera, this.isOrthographicCamera = !0, this._type = 'OrthographicCamera', !0 !== this.enableHelper && !0 !== e || this.objectHelper.update();
  };

  _proto28.toPerspective = function toPerspective(e) {
    this.perspCamera.aspect = this.aspect, this.perspCamera.fov = this.fov, this.perspCamera.view = this.view, this.perspCamera.far = this.far, this.perspCamera.updateProjectionMatrix(), this.projectionMatrix = this.perspCamera.projectionMatrix, this.projectionMatrixInverse = this.perspCamera.projectionMatrixInverse, delete this.isOrthographicCamera, this.isPerspectiveCamera = !0, this._type = 'PerspectiveCamera', !0 !== this.enableHelper && !0 !== e || this.objectHelper.update();
  };

  _proto28.setFocalLength = function setFocalLength(e) {
    this.perspCamera.setFocalLength(e), this.toPerspective();
  };

  _proto28.getFocalLength = function getFocalLength() {
    return this.perspCamera.getFocalLength();
  };

  _proto28.getEffectiveFOV = function getEffectiveFOV() {
    return this.perspCamera.getEffectiveFOV();
  };

  _proto28.getFilmWidth = function getFilmWidth() {
    return this.perspCamera.getFilmWidth();
  };

  _proto28.getFilmHeight = function getFilmHeight() {
    return this.perspCamera.getFilmHeight();
  };

  _proto28.setViewOffset = function setViewOffset(e, t, i, r, a, s) {
    this.isPerspectiveCamera ? (this.perspCamera.setViewOffset(e, t, i, r, a, s), this.toPerspective()) : this.isOrthographicCamera && (this.orthoCamera.setViewOffset(e, t, i, r, a, s), this.toOrthographic());
  };

  _proto28.clearViewOffset = function clearViewOffset() {
    this.isPerspectiveCamera ? (this.perspCamera.clearViewOffset(), this.toPerspective()) : this.isOrthographicCamera && (this.orthoCamera.clearViewOffset(), this.toOrthographic());
  };

  _proto28.updateProjectionMatrix = function updateProjectionMatrix(e) {
    this.isPerspectiveCamera ? this.toPerspective(e) : this.isOrthographicCamera && this.toOrthographic(e);
  };

  _proto28.updateMatrixWorld = function updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);

    for (var t = this.children, i = 0, r = t.length; i < r; i++) {
      t[i].updateMatrixWorld(e);
    }

    this.matrixWorldInverse.getInverse(this.matrixWorld);
  };

  _proto28.updateWorldMatrix = function updateWorldMatrix(e, t) {
    var i = this.parent;
    if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), !0 === t) for (var r = this.children, a = 0, s = r.length; a < s; a++) {
      r[a].updateWorldMatrix(!1, !0);
    }
    this.matrixWorldInverse.getInverse(this.matrixWorld);
  };

  _proto28.attach = function attach(e) {
    var t = new THREE.Matrix4();
    return this.updateWorldMatrix(!0, !1), t.getInverse(this.matrixWorld), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), t.multiply(e.parent.matrixWorld)), void 0 !== e.userData.hiddenMatrix ? e.userData.hiddenMatrix.premultiply(t) : e.applyMatrix4(t), e.updateWorldMatrix(!1, !1), this.add(e), this;
  };

  _proto28.computeSingleBoundingBox = function computeSingleBoundingBox() {
    this.singleBoundingBox || (this.singleBoundingBox = new SPE.Box3()), this.singleBoundingBox.setFromObjectSize(this, !1), this.singleBoundingBox.computeVertices(), this.singleBoundingBox.computeEdges();
  };

  _proto28.computeComplexBoundingBox = function computeComplexBoundingBox(e) {
    this.complexBoundingBox || (this.complexBoundingBox = new SPE.Box3()), this.complexBoundingBox.setFromObjectSize(this, e);
  };

  _proto28.raycast = function raycast(e, t) {
    !0 === this.enableHelper && !0 === this.objectHelper.visible && !1 === this.userData.activeCamera && this.objectHelper.raycast(e, t);
  };

  _proto28.copy = function copy(e, t) {
    var i = e.children;
    if (e.children = [], _THREE$Camera.prototype.copy.call(this, e), e.children = i, this.userDataFromJson(this.userData), this.userData.activeCamera = !1, this.userData.isEntity = !0, delete this.userData.isDefaultCamera, this.orthoCamera.copy(e.orthoCamera), this.perspCamera.copy(e.perspCamera), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.far = e.far, this.view = null === e.view ? null : Object.assign({}, e.view), this.isOrthographicCamera = e.isOrthographicCamera, this._type = e._type, this.aspect = e.aspect, this.fov = e.fov, this.focus = e.focus, this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this.isPerspectiveCamera = e.isPerspectiveCamera, this.targetOffset = e.targetOffset, void 0 !== e.enableHelper && (this.enableHelper = e.enableHelper), void 0 !== e.objectHelper && (this.objectHelper.visible = e.objectHelper.visible), void 0 !== e.interaction && this.interaction.copy(e.interaction), !0 === t) for (var _t90 = 0, r = i.length; _t90 < r; ++_t90) {
      var _i92 = e.children[_t90];
      !0 === _i92.userData.isEntity && this.add(_i92.clone());
    }
    return this.updateProjectionMatrix(), this;
  };

  _proto28.traverseEntity = function traverseEntity(e) {
    !function t(i) {
      if (!i.userData.isEntity) return;
      e(i);
      var r = i.children;

      for (var _e102 = 0, _i93 = r.length; _e102 < _i93; ++_e102) {
        t(r[_e102]);
      }
    }(this);
  };

  _proto28.userDataFromJson = function userDataFromJson(e) {
    this.userData = e, this.userData.positionToCenter = new THREE.Vector3(), this.userData.hiddenMatrix = new THREE.Matrix4(), void 0 !== e.hiddenMatrix && this.userData.hiddenMatrix.fromArray(e.hiddenMatrix.elements), void 0 === e.lock && (this.userData.lock = !1);
  };

  _proto28.fromJSON = function fromJSON(e) {
    return this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, void 0 !== e.view && (this.view = Object.assign({}, e.view)), void 0 !== e.zoomOrtho && (this.orthoCamera.zoom = e.zoomOrtho), void 0 !== e.nearOrtho && (this.orthoCamera.near = e.nearOrtho), this.far = e.far, this._type = e.type, e.isOrthographicCamera && (this.isOrthographicCamera = e.isOrthographicCamera), this.aspect = e.aspect, this.fov = e.fov, this.focus = e.focus, this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, void 0 !== e.zoomPersp && (this.perspCamera.zoom = e.zoomPersp), void 0 !== e.nearPersp && (this.perspCamera.near = e.nearPersp), e.isPerspectiveCamera && (this.isPerspectiveCamera = e.isPerspectiveCamera), void 0 !== e.targetOffset && (this.targetOffset = e.targetOffset), this.userDataFromJson(this.userData), this.updateProjectionMatrix(), this;
  };

  _proto28.toJSON = function toJSON(e) {
    var t;
    var i = this.userData;
    return delete this.userData, t = _THREE$Camera.prototype.toJSON.call(this, e), this.userData = i, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.zoomOrtho = this.orthoCamera.zoom, t.object.nearOrtho = this.orthoCamera.near, t.object.far = this.far, t.object.type = this._type, this.isOrthographicCamera && (t.object.isOrthographicCamera = this.isOrthographicCamera), t.object.aspect = this.aspect, t.object.fov = this.fov, t.object.focus = this.focus, t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t.object.zoomPersp = this.perspCamera.zoom, t.object.nearPersp = this.perspCamera.near, this.isPerspectiveCamera && (t.object.isPerspectiveCamera = this.isPerspectiveCamera), t.object.targetOffset = this.targetOffset, t.object.userData = {
      type: SPE.CombinedCamera.name,
      isEntity: i.isEntity,
      lock: i.lock,
      scaleLock: i.scaleLock,
      activeCamera: i.activeCamera,
      hiddenMatrix: {
        elements: i.hiddenMatrix.toArray()
      }
    }, t.object.enableHelper = this.enableHelper, t.object.interaction = this.interaction.toJSON(e), t;
  };

  _createClass(_class, [{
    key: "hiddenMatrix",
    get: function get() {
      return this.userData.hiddenMatrix;
    },
    set: function set(e) {
      this.userData.hiddenMatrix.copy(e);
    }
  }, {
    key: "geometryHelper",
    get: function get() {
      return SPE.CombinedCameraHelper.geometryHelper;
    }
  }, {
    key: "visibility",
    set: function set(e) {
      this.visible = e, this.objectHelper.visible = e;

      for (var t = 0, i = this.children.length; t < i; ++t) {
        void 0 !== this.children[t].traverseEntity && this.children[t].traverseEntity(function (t) {
          void 0 !== t.objectHelper && !0 === t.visible && (t.objectHelper.visible = e);
        });
      }
    },
    get: function get() {
      return this.visible;
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    },
    set: function set(e) {
      'PerspectiveCamera' === e ? this.toPerspective() : 'OrthographicCamera' === e && this.toOrthographic();
    }
  }, {
    key: "near",
    get: function get() {
      return this.isPerspectiveCamera ? this.perspCamera.near : this.isOrthographicCamera ? this.orthoCamera.near : void 0;
    },
    set: function set(e) {
      this.isPerspectiveCamera ? this.perspCamera.near = e : this.isOrthographicCamera && (this.orthoCamera.near = e);
    }
  }, {
    key: "zoom",
    get: function get() {
      return this.isPerspectiveCamera ? this.perspCamera.zoom : this.isOrthographicCamera ? this.orthoCamera.zoom : void 0;
    },
    set: function set(e) {
      e < 0 || (this.isPerspectiveCamera ? this.perspCamera.zoom = e : this.isOrthographicCamera && (this.orthoCamera.zoom = e));
    }
  }]);

  return _class;
}(THREE.Camera), SPE.CombinedCameraHelper = /*#__PURE__*/function (_THREE$CameraHelper) {
  _inheritsLoose(_class2, _THREE$CameraHelper);

  function _class2(e) {
    var _this22;

    _this22 = _THREE$CameraHelper.call(this, e) || this;
    var t = new THREE.SphereGeometry(15, 4, 2),
        i = new THREE.MeshBasicMaterial({
      wireframe: !0,
      fog: !1,
      toneMapped: !1
    }),
        r = new THREE.Mesh(t, i);
    _this22.add(r), _this22.isObjectHelper = !0, _this22.name = "CombinedCameraHelper: " + e.uuid;
    return _this22;
  }

  var _proto29 = _class2.prototype;

  _proto29.raycast = function raycast(e, t) {
    var i = SPE.CombinedCameraHelper._ray,
        r = SPE.CombinedCameraHelper._sphere,
        a = SPE.CombinedCameraHelper._inverseMatrix,
        s = SPE.CombinedCameraHelper.geometryHelper,
        n = this.camera.matrixWorld;

    if (null === s.boundingSphere && s.computeBoundingSphere(), r.copy(s.boundingSphere), r.applyMatrix4(n), !1 !== e.ray.intersectsSphere(r) && (a.getInverse(n), i.copy(e.ray).applyMatrix4(a), null === s.boundingBox || !1 !== i.intersectsBox(s.boundingBox))) {
      var o,
          h,
          l,
          c,
          d,
          m,
          u = s.index,
          p = s.attributes.position,
          f = s.drawRange;

      for (d = Math.max(0, f.start), m = Math.min(u.count, f.start + f.count); d < m; d += 3) {
        h = u.getX(d), l = u.getX(d + 1), c = u.getX(d + 2), (o = E(this.camera, e, i, p, h, l, c)) && (o.faceIndex = Math.floor(d / 3), t.push(o));
      }
    }

    function E(e, t, i, r, a, s, n) {
      var o = new THREE.Vector3(),
          h = new THREE.Vector3(),
          l = new THREE.Vector3(),
          c = new THREE.Vector3(),
          d = new THREE.Vector3();
      if (o.fromBufferAttribute(r, a), h.fromBufferAttribute(r, s), l.fromBufferAttribute(r, n), null === i.intersectTriangle(o, h, l, !1, c)) return null;
      d.copy(c), d.applyMatrix4(e.matrixWorld);
      var m = t.ray.origin.distanceTo(d);
      return m < t.near || m > t.far ? null : {
        distance: m,
        point: d.clone(),
        object: e
      };
    }
  };

  return _class2;
}(THREE.CameraHelper), SPE.CombinedCameraHelper._ray = new THREE.Ray(), SPE.CombinedCameraHelper._sphere = new THREE.Sphere(), SPE.CombinedCameraHelper._inverseMatrix = new THREE.Matrix4(), SPE.CombinedCameraHelper.geometryHelper = new THREE.BoxBufferGeometry(30, 30, 30), SPE.LightSpot = /*#__PURE__*/function (_THREE$SpotLight) {
  _inheritsLoose(_class3, _THREE$SpotLight);

  function _class3(e, t, i, r, a, s) {
    var _this23;

    _this23 = _THREE$SpotLight.call(this, e, t, i, r, a, s) || this, _this23.shadow.mapSize.width = 1024, _this23.shadow.mapSize.height = 1024, _this23.userData = {
      type: SPE.LightSpot.name,
      isEntity: !0,
      lock: !1,
      scaleLock: !1,
      hiddenMatrix: new THREE.Matrix4()
    }, _this23.enableHelper = !1, _this23.objectHelper = new SPE.SpotLightHelper(_assertThisInitialized(_this23)), _this23.interaction = new Interaction(_assertThisInitialized(_this23)), _this23._gizmos = {};
    var n = _this23.shadow.camera;
    n.fov = 2 * THREE.MathUtils.RAD2DEG * _this23.angle, n.aspect = 1, n.near = 100, n.far = 2500;
    var o = new THREE.CameraHelper(_this23.shadow.camera);
    o.visible = !1, _this23._gizmos.shadowmap = o, _this23.update();
    return _this23;
  }

  var _proto30 = _class3.prototype;

  _proto30.showGizmos = function showGizmos() {
    for (var _i94 = 0, _Object$entries9 = Object.entries(this._gizmos); _i94 < _Object$entries9.length; _i94++) {
      var _Object$entries9$_i = _Object$entries9[_i94],
          t = _Object$entries9$_i[1];
      t instanceof THREE.CameraHelper && (t.visible = !0);
    }
  };

  _proto30.hideGizmos = function hideGizmos() {
    for (var _i95 = 0, _Object$entries10 = Object.entries(this._gizmos); _i95 < _Object$entries10.length; _i95++) {
      var _Object$entries10$_i = _Object$entries10[_i95],
          t = _Object$entries10$_i[1];
      t instanceof THREE.CameraHelper && (t.visible = !1);
    }
  };

  _proto30.update = function update() {
    this.shadow.camera.updateProjectionMatrix();

    for (var _i96 = 0, _Object$entries11 = Object.entries(this._gizmos); _i96 < _Object$entries11.length; _i96++) {
      var _Object$entries11$_i = _Object$entries11[_i96],
          t = _Object$entries11$_i[1];
      t instanceof THREE.CameraHelper && t.update();
    }
  };

  _proto30.updateMatrixWorld = function updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0), !0 === this.enableHelper && !0 === this.objectHelper.viisble && this.objectHelper.update();

    for (var t = this.children, i = 0, r = t.length; i < r; i++) {
      t[i].updateMatrixWorld(e);
    }
  };

  _proto30.updateWorldMatrix = function updateWorldMatrix(e, t) {
    var i = this.parent;
    if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), !0 === t) for (var r = this.children, a = 0, s = r.length; a < s; a++) {
      r[a].updateWorldMatrix(!1, !0);
    }
  };

  _proto30.attach = function attach(e) {
    var t = new THREE.Matrix4();
    return this.updateWorldMatrix(!0, !1), t.getInverse(this.matrixWorld), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), t.multiply(e.parent.matrixWorld)), void 0 !== e.userData.hiddenMatrix ? e.userData.hiddenMatrix.premultiply(t) : e.applyMatrix4(t), e.updateWorldMatrix(!1, !1), this.add(e), this;
  };

  _proto30.computeSingleBoundingBox = function computeSingleBoundingBox() {
    this.singleBoundingBox || (this.singleBoundingBox = new SPE.Box3()), this.singleBoundingBox.setFromObjectSize(this, !1), this.singleBoundingBox.computeVertices(), this.singleBoundingBox.computeEdges();
  };

  _proto30.computeComplexBoundingBox = function computeComplexBoundingBox(e) {
    this.complexBoundingBox || (this.complexBoundingBox = new SPE.Box3()), this.complexBoundingBox.setFromObjectSize(this, e);
  };

  _proto30.raycast = function raycast(e, t) {
    this.objectHelper.raycast(e, t);
  };

  _proto30.copy = function copy(e, t) {
    var i = e.children;
    if (e.children = [], _THREE$SpotLight.prototype.copy.call(this, e), e.children = i, this.userDataFromJson(this.userData), void 0 !== e.enableHelper && (this.enableHelper = e.enableHelper), void 0 !== e.objectHelper && (this.objectHelper.visible = e.objectHelper.visible), void 0 !== e.interaction && this.interaction.copy(e.interaction), !0 === t) for (var _t91 = 0, r = i.length; _t91 < r; ++_t91) {
      var _i97 = e.children[_t91];
      !0 === _i97.userData.isEntity && this.add(_i97.clone());
    }
    return this;
  };

  _proto30.traverseEntity = function traverseEntity(e) {
    !function t(i) {
      if (!i.userData.isEntity) return;
      e(i);
      var r = i.children;

      for (var _e103 = 0, _i98 = r.length; _e103 < _i98; ++_e103) {
        t(r[_e103]);
      }
    }(this);
  };

  _proto30.userDataFromJson = function userDataFromJson(e) {
    this.userData = e, void 0 !== e.hiddenMatrix && (this.userData.hiddenMatrix = new THREE.Matrix4().fromArray(e.hiddenMatrix.elements)), void 0 === e.lock && (this.userData.lock = !1);
  };

  _proto30.toJSON = function toJSON(e) {
    var t = this.userData;
    delete this.userData;

    var i = _THREE$SpotLight.prototype.toJSON.call(this, e);

    return i.object.userData = {
      type: SPE.LightSpot.name,
      isEntity: t.isEntity,
      lock: t.lock,
      scaleLock: t.scaleLock,
      hiddenMatrix: {
        elements: t.hiddenMatrix.toArray()
      }
    }, i.object.enableHelper = this.enableHelper, i.object.interaction = this.interaction.toJSON(e), this.userData = t, i;
  };

  _createClass(_class3, [{
    key: "hiddenMatrix",
    get: function get() {
      return this.userData.hiddenMatrix;
    },
    set: function set(e) {
      this.userData.hiddenMatrix.copy(e);
    }
  }, {
    key: "geometryHelper",
    get: function get() {
      return SPE.SpotLightHelper.geometryHelper;
    }
  }, {
    key: "gizmos",
    get: function get() {
      return this._gizmos;
    }
  }, {
    key: "visibility",
    set: function set(e) {
      this.visible = e, this.objectHelper.visible = e;

      for (var t = 0, i = this.children.length; t < i; ++t) {
        void 0 !== this.children[t].traverseEntity && this.children[t].traverseEntity(function (t) {
          void 0 !== t.objectHelper && !0 === t.visible && (t.objectHelper.visible = e);
        });
      }
    },
    get: function get() {
      return this.visible;
    }
  }]);

  return _class3;
}(THREE.SpotLight), SPE.LightPoint = /*#__PURE__*/function (_THREE$PointLight) {
  _inheritsLoose(_class4, _THREE$PointLight);

  function _class4(e, t, i, r) {
    var _this24;

    _this24 = _THREE$PointLight.call(this, e, t, i, r) || this, _this24.shadow.mapSize.width = 1024, _this24.shadow.mapSize.height = 1024, _this24.userData = {
      type: SPE.LightPoint.name,
      isEntity: !0,
      lock: !1,
      scaleLock: !1,
      hiddenMatrix: new THREE.Matrix4()
    }, _this24.enableHelper = !1, _this24.objectHelper = new SPE.PointLightHelper(_assertThisInitialized(_this24)), _this24.interaction = new Interaction(_assertThisInitialized(_this24)), _this24._gizmos = {};
    var a = _this24.shadow.camera;
    a.fov = 90, a.aspect = 1, a.near = 100, a.far = 2500;
    var s = new THREE.Vector3(-a.far + _this24.position.x, -a.far + _this24.position.y, -a.far + _this24.position.z),
        n = new THREE.Vector3(a.far + _this24.position.x, a.far + _this24.position.y, a.far + _this24.position.z),
        o = new THREE.Box3(s, n),
        h = new THREE.Box3Helper(o, new THREE.Color(16755200));
    h.visible = !1, _this24._gizmos.shadowmap = h, _this24.update();
    return _this24;
  }

  var _proto31 = _class4.prototype;

  _proto31.showGizmos = function showGizmos() {
    for (var _i99 = 0, _Object$entries12 = Object.entries(this._gizmos); _i99 < _Object$entries12.length; _i99++) {
      var _Object$entries12$_i = _Object$entries12[_i99],
          t = _Object$entries12$_i[1];
      t instanceof THREE.Box3Helper && (t.visible = !0);
    }
  };

  _proto31.hideGizmos = function hideGizmos() {
    for (var _i100 = 0, _Object$entries13 = Object.entries(this._gizmos); _i100 < _Object$entries13.length; _i100++) {
      var _Object$entries13$_i = _Object$entries13[_i100],
          t = _Object$entries13$_i[1];
      t instanceof THREE.Box3Helper && (t.visible = !1);
    }
  };

  _proto31.update = function update() {
    if (this.shadow && (this.shadow.camera.updateProjectionMatrix(), this._gizmos)) for (var _i101 = 0, _Object$entries14 = Object.entries(this._gizmos); _i101 < _Object$entries14.length; _i101++) {
      var _Object$entries14$_i = _Object$entries14[_i101],
          t = _Object$entries14$_i[1];

      if (t instanceof THREE.Box3Helper) {
        var _e104 = this.shadow.camera,
            i = new THREE.Vector3(-_e104.far + this.position.x, -_e104.far + this.position.y, -_e104.far + this.position.z),
            r = new THREE.Vector3(_e104.far + this.position.x, _e104.far + this.position.y, _e104.far + this.position.z);
        t.box.set(i, r), t.updateMatrixWorld(!0);
      }
    }
  };

  _proto31.updateMatrixWorld = function updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);

    for (var t = this.children, i = 0, r = t.length; i < r; i++) {
      t[i].updateMatrixWorld(e);
    }

    this.update();
  };

  _proto31.updateWorldMatrix = function updateWorldMatrix(e, t) {
    var i = this.parent;
    if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), !0 === t) for (var r = this.children, a = 0, s = r.length; a < s; a++) {
      r[a].updateWorldMatrix(!1, !0);
    }
  };

  _proto31.attach = function attach(e) {
    var t = new THREE.Matrix4();
    return this.updateWorldMatrix(!0, !1), t.getInverse(this.matrixWorld), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), t.multiply(e.parent.matrixWorld)), void 0 !== e.userData.hiddenMatrix ? e.userData.hiddenMatrix.premultiply(t) : e.applyMatrix4(t), e.updateWorldMatrix(!1, !1), this.add(e), this;
  };

  _proto31.computeSingleBoundingBox = function computeSingleBoundingBox() {
    this.singleBoundingBox || (this.singleBoundingBox = new SPE.Box3()), this.singleBoundingBox.setFromObjectSize(this, !1), this.singleBoundingBox.computeVertices(), this.singleBoundingBox.computeEdges();
  };

  _proto31.computeComplexBoundingBox = function computeComplexBoundingBox(e) {
    this.complexBoundingBox || (this.complexBoundingBox = new SPE.Box3()), this.complexBoundingBox.setFromObjectSize(this, e);
  };

  _proto31.raycast = function raycast(e, t) {
    this.objectHelper.raycast(e, t);
  };

  _proto31.copy = function copy(e, t) {
    var i = e.children;
    if (e.children = [], _THREE$PointLight.prototype.copy.call(this, e), e.children = i, this.userDataFromJson(this.userData), void 0 !== e.enableHelper && (this.enableHelper = e.enableHelper), void 0 !== e.objectHelper && (this.objectHelper.visible = e.objectHelper.visible), void 0 !== e.interaction && this.interaction.copy(e.interaction), !0 === t) for (var _t92 = 0, r = i.length; _t92 < r; ++_t92) {
      var _i102 = e.children[_t92];
      !0 === _i102.userData.isEntity && this.add(_i102.clone());
    }
    return this;
  };

  _proto31.traverseEntity = function traverseEntity(e) {
    !function t(i) {
      if (!i.userData.isEntity) return;
      e(i);
      var r = i.children;

      for (var _e105 = 0, _i103 = r.length; _e105 < _i103; ++_e105) {
        t(r[_e105]);
      }
    }(this);
  };

  _proto31.userDataFromJson = function userDataFromJson(e) {
    this.userData = e, this.userData.positionToCenter = new THREE.Vector3(), void 0 !== e.hiddenMatrix && (this.userData.hiddenMatrix = new THREE.Matrix4().fromArray(e.hiddenMatrix.elements)), void 0 === e.lock && (this.userData.lock = !1);
  };

  _proto31.toJSON = function toJSON(e) {
    var t = this.userData;
    delete this.userData;

    var i = _THREE$PointLight.prototype.toJSON.call(this, e);

    return i.object.userData = {
      type: SPE.LightPoint.name,
      isEntity: t.isEntity,
      lock: t.lock,
      scaleLock: t.scaleLock,
      hiddenMatrix: {
        elements: t.hiddenMatrix.toArray()
      }
    }, i.object.enableHelper = this.enableHelper, i.object.interaction = this.interaction.toJSON(e), this.userData = t, i;
  };

  _createClass(_class4, [{
    key: "hiddenMatrix",
    get: function get() {
      return this.userData.hiddenMatrix;
    },
    set: function set(e) {
      this.userData.hiddenMatrix.copy(e);
    }
  }, {
    key: "geometryHelper",
    get: function get() {
      return SPE.PointLightHelper.geometryHelper;
    }
  }, {
    key: "gizmos",
    get: function get() {
      return this._gizmos;
    }
  }, {
    key: "visibility",
    set: function set(e) {
      this.visible = e, this.objectHelper.visible = e;

      for (var t = 0, i = this.children.length; t < i; ++t) {
        void 0 !== this.children[t].traverseEntity && this.children[t].traverseEntity(function (t) {
          void 0 !== t.objectHelper && !0 === t.visible && (t.objectHelper.visible = e);
        });
      }
    },
    get: function get() {
      return this.visible;
    }
  }]);

  return _class4;
}(THREE.PointLight), SPE.LightDirectional = /*#__PURE__*/function (_THREE$DirectionalLig) {
  _inheritsLoose(_class5, _THREE$DirectionalLig);

  function _class5(e, t) {
    var _this25;

    _this25 = _THREE$DirectionalLig.call(this, e, t) || this, _this25.shadow.mapSize.width = 1024, _this25.shadow.mapSize.height = 1024, _this25.userData = {
      type: SPE.LightDirectional.name,
      isEntity: !0,
      lock: !1,
      scaleLock: !1,
      hiddenMatrix: new THREE.Matrix4()
    }, _this25.enableHelper = !1, _this25.objectHelper = new SPE.DirectionalLightHelper(_assertThisInitialized(_this25)), _this25.interaction = new Interaction(_assertThisInitialized(_this25)), _this25._gizmos = {};
    var i = _this25.shadow.camera;
    i.top = 1250, i.bottom = -1250, i.right = 1250, i.left = -1250, i.near = 1, i.far = 2500;
    var r = new THREE.CameraHelper(_this25.shadow.camera);
    r.visible = !1, _this25._gizmos.shadowmap = r, _this25.update();
    return _this25;
  }

  var _proto32 = _class5.prototype;

  _proto32.showGizmos = function showGizmos() {
    for (var _i104 = 0, _Object$entries15 = Object.entries(this._gizmos); _i104 < _Object$entries15.length; _i104++) {
      var _Object$entries15$_i = _Object$entries15[_i104],
          t = _Object$entries15$_i[1];
      t instanceof THREE.CameraHelper && (t.visible = !0);
    }
  };

  _proto32.hideGizmos = function hideGizmos() {
    for (var _i105 = 0, _Object$entries16 = Object.entries(this._gizmos); _i105 < _Object$entries16.length; _i105++) {
      var _Object$entries16$_i = _Object$entries16[_i105],
          t = _Object$entries16$_i[1];
      t instanceof THREE.CameraHelper && (t.visible = !1);
    }
  };

  _proto32.update = function update() {
    this.shadow.camera.updateProjectionMatrix();

    for (var _i106 = 0, _Object$entries17 = Object.entries(this._gizmos); _i106 < _Object$entries17.length; _i106++) {
      var _Object$entries17$_i = _Object$entries17[_i106],
          t = _Object$entries17$_i[1];
      t instanceof THREE.CameraHelper && t.update();
    }
  };

  _proto32.updateMatrixWorld = function updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0), !0 === this.enableHelper && this.objectHelper.update();

    for (var t = this.children, i = 0, r = t.length; i < r; i++) {
      t[i].updateMatrixWorld(e);
    }
  };

  _proto32.updateWorldMatrix = function updateWorldMatrix(e, t) {
    var i = this.parent;
    if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), !0 === t) for (var r = this.children, a = 0, s = r.length; a < s; a++) {
      r[a].updateWorldMatrix(!1, !0);
    }
  };

  _proto32.attach = function attach(e) {
    var t = new THREE.Matrix4();
    return this.updateWorldMatrix(!0, !1), t.getInverse(this.matrixWorld), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), t.multiply(e.parent.matrixWorld)), void 0 !== e.userData.hiddenMatrix ? e.userData.hiddenMatrix.premultiply(t) : e.applyMatrix4(t), e.updateWorldMatrix(!1, !1), this.add(e), this;
  };

  _proto32.computeSingleBoundingBox = function computeSingleBoundingBox() {
    this.singleBoundingBox || (this.singleBoundingBox = new SPE.Box3()), this.singleBoundingBox.setFromObjectSize(this, !1), this.singleBoundingBox.computeVertices(), this.singleBoundingBox.computeEdges();
  };

  _proto32.computeComplexBoundingBox = function computeComplexBoundingBox(e) {
    this.complexBoundingBox || (this.complexBoundingBox = new SPE.Box3()), this.complexBoundingBox.setFromObjectSize(this, e);
  };

  _proto32.raycast = function raycast(e, t) {
    this.objectHelper.raycast(e, t);
  };

  _proto32.copy = function copy(e, t) {
    var i = e.children;
    if (e.children = [], _THREE$DirectionalLig.prototype.copy.call(this, e), e.children = i, this.userDataFromJson(this.userData), void 0 !== e.enableHelper && (this.enableHelper = e.enableHelper), void 0 !== e.objectHelper && (this.objectHelper.visible = e.objectHelper.visible), void 0 !== e.interaction && this.interaction.copy(e.interaction), !0 === t) for (var _t93 = 0, r = i.length; _t93 < r; ++_t93) {
      var _i107 = e.children[_t93];
      !0 === _i107.userData.isEntity && this.add(_i107.clone());
    }
    return this;
  };

  _proto32.traverseEntity = function traverseEntity(e) {
    !function t(i) {
      if (!i.userData.isEntity) return;
      e(i);
      var r = i.children;

      for (var _e106 = 0, _i108 = r.length; _e106 < _i108; ++_e106) {
        t(r[_e106]);
      }
    }(this);
  };

  _proto32.userDataFromJson = function userDataFromJson(e) {
    this.userData = e, void 0 !== e.hiddenMatrix && (this.userData.hiddenMatrix = new THREE.Matrix4().fromArray(e.hiddenMatrix.elements)), void 0 === e.lock && (this.userData.lock = !1);
  };

  _proto32.toJSON = function toJSON(e) {
    var t = this.userData;
    delete this.userData;

    var i = _THREE$DirectionalLig.prototype.toJSON.call(this, e);

    return i.object.userData = {
      type: SPE.LightDirectional.name,
      isEntity: t.isEntity,
      lock: t.lock,
      scaleLock: t.scaleLock,
      hiddenMatrix: {
        elements: t.hiddenMatrix.toArray()
      }
    }, i.object.enableHelper = this.enableHelper, i.object.interaction = this.interaction.toJSON(e), this.userData = t, i;
  };

  _createClass(_class5, [{
    key: "hiddenMatrix",
    get: function get() {
      return this.userData.hiddenMatrix;
    },
    set: function set(e) {
      this.userData.hiddenMatrix.copy(e);
    }
  }, {
    key: "geometryHelper",
    get: function get() {
      return SPE.DirectionalLightHelper.geometryHelper;
    }
  }, {
    key: "gizmos",
    get: function get() {
      return this._gizmos;
    }
  }, {
    key: "visibility",
    set: function set(e) {
      this.visible = e, this.objectHelper.visible = e;

      for (var t = 0, i = this.children.length; t < i; ++t) {
        void 0 !== this.children[t].traverseEntity && this.children[t].traverseEntity(function (t) {
          void 0 !== t.objectHelper && !0 === t.visible && (t.objectHelper.visible = e);
        });
      }
    },
    get: function get() {
      return this.visible;
    }
  }]);

  return _class5;
}(THREE.DirectionalLight), SPE.SpotLightHelper = /*#__PURE__*/function (_THREE$SpotLightHelpe) {
  _inheritsLoose(_class6, _THREE$SpotLightHelpe);

  function _class6(e, t) {
    var _this26;

    if (t === void 0) {
      t = 6710886;
    }

    _this26 = _THREE$SpotLightHelpe.call(this, e, t) || this, _this26.isObjectHelper = !0, _this26.name = "SpotLightHelper: " + e.uuid;
    return _this26;
  }

  var _proto33 = _class6.prototype;

  _proto33.update = function update() {
    var e = SPE.SpotLightHelper._vector,
        t = this.light.distance ? this.light.distance : 1e3,
        i = t * Math.tan(this.light.angle);
    this.cone.scale.set(i, i, t), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  };

  _proto33.raycast = function raycast(e, t) {
    var i = SPE.SpotLightHelper._ray,
        r = SPE.SpotLightHelper._sphere,
        a = SPE.SpotLightHelper._inverseMatrix,
        s = SPE.SpotLightHelper.geometryHelper,
        n = this.light.matrixWorld;

    if (null === s.boundingSphere && s.computeBoundingSphere(), r.copy(s.boundingSphere), r.applyMatrix4(n), !1 !== e.ray.intersectsSphere(r) && (a.getInverse(n), i.copy(e.ray).applyMatrix4(a), null === s.boundingBox || !1 !== i.intersectsBox(s.boundingBox))) {
      var o,
          h,
          l,
          c,
          d,
          m,
          u = s.index,
          p = s.attributes.position,
          f = s.drawRange;

      for (d = Math.max(0, f.start), m = Math.min(u.count, f.start + f.count); d < m; d += 3) {
        h = u.getX(d), l = u.getX(d + 1), c = u.getX(d + 2), (o = E(this.light, e, i, p, h, l, c)) && (o.faceIndex = Math.floor(d / 3), t.push(o));
      }
    }

    function E(e, t, i, r, a, s, n) {
      var o = new THREE.Vector3(),
          h = new THREE.Vector3(),
          l = new THREE.Vector3(),
          c = new THREE.Vector3(),
          d = new THREE.Vector3();
      if (o.fromBufferAttribute(r, a), h.fromBufferAttribute(r, s), l.fromBufferAttribute(r, n), null === i.intersectTriangle(o, h, l, !1, c)) return null;
      d.copy(c), d.applyMatrix4(e.matrixWorld);
      var m = t.ray.origin.distanceTo(d);
      return m < t.near || m > t.far ? null : {
        distance: m,
        point: d.clone(),
        object: e
      };
    }
  };

  return _class6;
}(THREE.SpotLightHelper), SPE.SpotLightHelper._vector = new THREE.Vector3(), SPE.SpotLightHelper._ray = new THREE.Ray(), SPE.SpotLightHelper._sphere = new THREE.Sphere(), SPE.SpotLightHelper._inverseMatrix = new THREE.Matrix4(), SPE.SpotLightHelper.geometryHelper = new THREE.BoxBufferGeometry(30, 30, 30), SPE.PointLightHelper = /*#__PURE__*/function (_THREE$PointLightHelp) {
  _inheritsLoose(_class7, _THREE$PointLightHelp);

  function _class7(e, t, i) {
    var _this27;

    if (t === void 0) {
      t = 15;
    }

    if (i === void 0) {
      i = 6710886;
    }

    _this27 = _THREE$PointLightHelp.call(this, e, t, i) || this, _this27.isObjectHelper = !0, _this27.name = "PointLightHelper: " + e.uuid;
    return _this27;
  }

  var _proto34 = _class7.prototype;

  _proto34.raycast = function raycast(e, t) {
    var i = SPE.PointLightHelper._ray,
        r = SPE.PointLightHelper._sphere,
        a = SPE.PointLightHelper._inverseMatrix,
        s = SPE.PointLightHelper.geometryHelper,
        n = this.light.matrixWorld;

    if (null === s.boundingSphere && s.computeBoundingSphere(), r.copy(s.boundingSphere), r.applyMatrix4(n), !1 !== e.ray.intersectsSphere(r) && (a.getInverse(n), i.copy(e.ray).applyMatrix4(a), null === s.boundingBox || !1 !== i.intersectsBox(s.boundingBox))) {
      var o,
          h,
          l,
          c,
          d,
          m,
          u = s.index,
          p = s.attributes.position,
          f = s.drawRange;

      for (d = Math.max(0, f.start), m = Math.min(u.count, f.start + f.count); d < m; d += 3) {
        h = u.getX(d), l = u.getX(d + 1), c = u.getX(d + 2), (o = E(this.light, e, i, p, h, l, c)) && (o.faceIndex = Math.floor(d / 3), t.push(o));
      }
    }

    function E(e, t, i, r, a, s, n) {
      var o = new THREE.Vector3(),
          h = new THREE.Vector3(),
          l = new THREE.Vector3(),
          c = new THREE.Vector3(),
          d = new THREE.Vector3();
      if (o.fromBufferAttribute(r, a), h.fromBufferAttribute(r, s), l.fromBufferAttribute(r, n), null === i.intersectTriangle(o, h, l, !1, c)) return null;
      d.copy(c), d.applyMatrix4(e.matrixWorld);
      var m = t.ray.origin.distanceTo(d);
      return m < t.near || m > t.far ? null : {
        distance: m,
        point: d.clone(),
        object: e
      };
    }
  };

  return _class7;
}(THREE.PointLightHelper), SPE.PointLightHelper._ray = new THREE.Ray(), SPE.PointLightHelper._sphere = new THREE.Sphere(), SPE.PointLightHelper._inverseMatrix = new THREE.Matrix4(), SPE.PointLightHelper.geometryHelper = new THREE.BoxBufferGeometry(30, 30, 30), SPE.DirectionalLightHelper = /*#__PURE__*/function (_THREE$DirectionalLig2) {
  _inheritsLoose(_class8, _THREE$DirectionalLig2);

  function _class8(e, t, i) {
    var _this28;

    if (t === void 0) {
      t = 15;
    }

    if (i === void 0) {
      i = 10066329;
    }

    _this28 = _THREE$DirectionalLig2.call(this, e, t, i) || this, _this28.isObjectHelper = !0, _this28.name = "DirectionalLightHelper: " + e.uuid;
    return _this28;
  }

  var _proto35 = _class8.prototype;

  _proto35.raycast = function raycast(e, t) {
    var i = SPE.DirectionalLightHelper._ray,
        r = SPE.DirectionalLightHelper._sphere,
        a = SPE.DirectionalLightHelper._inverseMatrix,
        s = SPE.DirectionalLightHelper.geometryHelper,
        n = this.light.matrixWorld;

    if (null === s.boundingSphere && s.computeBoundingSphere(), r.copy(s.boundingSphere), r.applyMatrix4(n), !1 !== e.ray.intersectsSphere(r) && (a.getInverse(n), i.copy(e.ray).applyMatrix4(a), null === s.boundingBox || !1 !== i.intersectsBox(s.boundingBox))) {
      var o,
          h,
          l,
          c,
          d,
          m,
          u = s.index,
          p = s.attributes.position,
          f = s.drawRange;

      for (d = Math.max(0, f.start), m = Math.min(u.count, f.start + f.count); d < m; d += 3) {
        h = u.getX(d), l = u.getX(d + 1), c = u.getX(d + 2), (o = E(this.light, e, i, p, h, l, c)) && (o.faceIndex = Math.floor(d / 3), t.push(o));
      }
    }

    function E(e, t, i, r, a, s, n) {
      var o = new THREE.Vector3(),
          h = new THREE.Vector3(),
          l = new THREE.Vector3(),
          c = new THREE.Vector3(),
          d = new THREE.Vector3();
      if (o.fromBufferAttribute(r, a), h.fromBufferAttribute(r, s), l.fromBufferAttribute(r, n), null === i.intersectTriangle(o, h, l, !1, c)) return null;
      d.copy(c), d.applyMatrix4(e.matrixWorld);
      var m = t.ray.origin.distanceTo(d);
      return m < t.near || m > t.far ? null : {
        distance: m,
        point: d.clone(),
        object: e
      };
    }
  };

  return _class8;
}(THREE.DirectionalLightHelper), SPE.DirectionalLightHelper._ray = new THREE.Ray(), SPE.DirectionalLightHelper._sphere = new THREE.Sphere(), SPE.DirectionalLightHelper._inverseMatrix = new THREE.Matrix4(), SPE.DirectionalLightHelper.geometryHelper = new THREE.BoxBufferGeometry(30, 30, 30), SPE.Raycaster = /*#__PURE__*/function (_THREE$Raycaster) {
  _inheritsLoose(_class9, _THREE$Raycaster);

  function _class9() {
    return _THREE$Raycaster.apply(this, arguments) || this;
  }

  var _proto36 = _class9.prototype;

  _proto36.setFromCamera = function setFromCamera(e, t) {
    t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, -1).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error('THREE.Raycaster: Unsupported camera type.');
  };

  _proto36.createRaycastLineHelper = function createRaycastLineHelper() {
    var e = new THREE.LineBasicMaterial({
      color: 16711680,
      linewidth: 10
    }),
        t = new THREE.Geometry(),
        i = new THREE.Vector3(this.ray.origin.x, this.ray.origin.y, this.ray.origin.z),
        r = new THREE.Vector3(this.ray.direction.x, this.ray.direction.y, this.ray.direction.z),
        a = new THREE.Vector3().lerpVectors(i, r, 0.5);
    return r.multiplyScalar(0), t.vertices.push(i), t.vertices.push(a), t.vertices.push(r), new THREE.Line(t, e);
  };

  return _class9;
}(THREE.Raycaster), SPE.Box3 = function (e, t) {
  THREE.Box3.call(this, e, t), this.transform = new THREE.Matrix4();
}, SPE.Box3.prototype = Object.create(THREE.Box3.prototype), SPE.Box3.prototype.constructor = SPE.Box3, SPE.Box3.prototype.setFromObjectSize = function (e, t) {
  e.updateWorldMatrix(!1, !1), this.makeEmpty(), this.transform = e.matrixWorld;
  var i = new THREE.Matrix4().getInverse(e.matrixWorld);
  return this.expandByObjectSize(e, i, t);
}, SPE.Box3.prototype.expandByObjectSize = function () {
  var e,
      t,
      i = new THREE.Vector3(),
      r = new THREE.Matrix4();
  var a = new THREE.Box3(),
      s = new THREE.Vector3();
  var n;

  function o(o) {
    if (void 0 !== o.geometry) {
      var _e107 = o.geometry.userData.parameters;
      a.setFromArray(o.geometry.getAttribute('position').array), a.getCenter(s), i.set(_e107.width, _e107.height, _e107.depth).multiplyScalar(0.5);
    } else void 0 !== o.geometryHelper && !0 === n ? (a.setFromArray(o.geometryHelper.getAttribute('position').array), a.getCenter(s), a.getSize(i).multiplyScalar(0.5)) : (s.setScalar(0), i.setScalar(0));

    r.copy(e).multiply(o.matrixWorld), o.userData.positionToCenter = s, 0 === i.x && 0 === i.y && 0 === i.z ? t.push(new THREE.Vector3(s.x, s.y, s.z).applyMatrix4(r)) : t.push(new THREE.Vector3(-i.x, i.y, i.z).add(s).applyMatrix4(r), new THREE.Vector3(-i.x, -i.y, i.z).add(s).applyMatrix4(r), new THREE.Vector3(i.x, -i.y, i.z).add(s).applyMatrix4(r), new THREE.Vector3(i.x, i.y, i.z).add(s).applyMatrix4(r), new THREE.Vector3(-i.x, i.y, -i.z).add(s).applyMatrix4(r), new THREE.Vector3(-i.x, -i.y, -i.z).add(s).applyMatrix4(r), new THREE.Vector3(i.x, -i.y, -i.z).add(s).applyMatrix4(r), new THREE.Vector3(i.x, i.y, -i.z).add(s).applyMatrix4(r));
  }

  return function (i, r, a) {
    return e = r, n = i.enableHelper, t = [], !0 === a ? (i.traverseEntity(o), this.setFromPoints(t)) : (o(i), this.setFromPoints(t)), this;
  };
}(), SPE.Box3.prototype.getCenter = function (e) {
  return (e = THREE.Box3.prototype.getCenter.call(this, e)).applyMatrix4(this.transform), e;
}, SPE.Box3.prototype.setFromObject = function (e, t) {
  return this.makeEmpty(), this.expandByObject(e, t);
}, SPE.Box3.prototype.expandByObject = function () {
  var e,
      t,
      i,
      r,
      a = new THREE.Vector3();

  function s(s) {
    var n = s.geometry;
    if (void 0 !== n) if (n.isGeometry) {
      var o = n.vertices;

      for (t = 0, i = o.length; t < i; t++) {
        a.copy(o[t]), a.applyMatrix4(s.matrixWorld), void 0 !== r && a.applyMatrix4(r), e.expandByPoint(a);
      }
    } else if (n.isBufferGeometry) {
      var h = n.attributes.position;
      if (void 0 !== h) for (t = 0, i = h.count; t < i; t++) {
        a.fromBufferAttribute(h, t).applyMatrix4(s.matrixWorld), void 0 !== r && a.applyMatrix4(r), e.expandByPoint(a);
      }
    }
  }

  return function (t, i) {
    return e = this, t.updateMatrixWorld(!0), r = i, t.traverse(s), this;
  };
}(), SPE.Box3.prototype.computeVertices = function () {
  var e = this.getSize(new THREE.Vector3()).multiplyScalar(0.5);
  var t = this.getCenter(new THREE.Vector3()),
      i = new THREE.Matrix4().copy(this.transform).setPosition(t);
  this.vertices = [new THREE.Vector3(-e.x, e.y, e.z).applyMatrix4(i), new THREE.Vector3(-e.x, -e.y, e.z).applyMatrix4(i), new THREE.Vector3(e.x, -e.y, e.z).applyMatrix4(i), new THREE.Vector3(e.x, e.y, e.z).applyMatrix4(i), new THREE.Vector3(-e.x, e.y, -e.z).applyMatrix4(i), new THREE.Vector3(-e.x, -e.y, -e.z).applyMatrix4(i), new THREE.Vector3(e.x, -e.y, -e.z).applyMatrix4(i), new THREE.Vector3(e.x, e.y, -e.z).applyMatrix4(i)];
}, SPE.Box3.prototype.computeEdges = function () {
  this.vertices || this.computeVertices(), this.edges = [new THREE.Line3().set(this.vertices[0], this.vertices[3]), new THREE.Line3().set(this.vertices[1], this.vertices[2]), new THREE.Line3().set(this.vertices[5], this.vertices[6]), new THREE.Line3().set(this.vertices[4], this.vertices[7]), new THREE.Line3().set(this.vertices[0], this.vertices[1]), new THREE.Line3().set(this.vertices[3], this.vertices[2]), new THREE.Line3().set(this.vertices[7], this.vertices[6]), new THREE.Line3().set(this.vertices[4], this.vertices[5]), new THREE.Line3().set(this.vertices[0], this.vertices[4]), new THREE.Line3().set(this.vertices[1], this.vertices[5]), new THREE.Line3().set(this.vertices[2], this.vertices[6]), new THREE.Line3().set(this.vertices[3], this.vertices[7])];
}, SPE.Box3.prototype.computeFaces = function () {
  this.vertices || this.computeVertices(), this.faces = [new THREE.Vector3().copy(this.vertices[0]).sub(this.vertices[2]).multiplyScalar(0.5).add(this.vertices[2]), new THREE.Vector3().copy(this.vertices[3]).sub(this.vertices[6]).multiplyScalar(0.5).add(this.vertices[6]), new THREE.Vector3().copy(this.vertices[7]).sub(this.vertices[5]).multiplyScalar(0.5).add(this.vertices[5]), new THREE.Vector3().copy(this.vertices[4]).sub(this.vertices[1]).multiplyScalar(0.5).add(this.vertices[1]), new THREE.Vector3().copy(this.vertices[0]).sub(this.vertices[7]).multiplyScalar(0.5).add(this.vertices[7]), new THREE.Vector3().copy(this.vertices[1]).sub(this.vertices[6]).multiplyScalar(0.5).add(this.vertices[6])];
}, SPE.Math = /*#__PURE__*/function () {
  function _class10() {}

  _class10.slerp = function slerp(e, t, i, r) {
    if (0 === r) return i.copy(e);
    if (1 === r) return i.copy(t);
    var a = e.w * t.w + e.x * t.x + e.y * t.y + e.z * t.z;
    if (a >= 1) return i.copy(e);
    var s = 1 - a * a;

    if (s <= Number.EPSILON) {
      var n = 1 - r;
      return i.w = n * e.w + r * t.w, i.x = n * e.x + r * t.x, i.y = n * e.y + r * t.y, i.z = n * e.z + r * t.z, i.normalize(), i;
    }

    var o = Math.sqrt(s),
        h = Math.atan2(o, a),
        l = Math.sin((1 - r) * h) / o,
        c = Math.sin(r * h) / o;
    return i.w = e.w * l + t.w * c, i.x = e.x * l + t.x * c, i.y = e.y * l + t.y * c, i.z = e.z * l + t.z * c, i;
  };

  _class10.getRandomInt = function getRandomInt(e, t) {
    return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e) + e);
  };

  _class10.getProjection = function getProjection(e, t, i) {
    var r = e.clone().sub(t),
        a = i.clone().sub(t),
        s = t.distanceTo(i);
    return r.dot(a) / s;
  };

  _class10.projectOnVector = function projectOnVector(e, t) {
    return e.clone().dot(t) / t.length();
  };

  _class10.angle2D = function angle2D(e, t, i, r, a) {
    if (a === void 0) {
      a = !1;
    }

    var s = i - e,
        n = r - t,
        o = Math.atan2(n, s);
    return o *= 180 / Math.PI, a && o < 0 && (o = 360 + o), o;
  };

  _class10.angle3D = function angle3D(e, t, i) {
    var r = e.clone().sub(t),
        a = i.clone().sub(t),
        s = t.distanceTo(e),
        n = t.distanceTo(i),
        o = r.dot(a) / (s * n);
    return Math.acos(o);
  };

  _class10.rotatePosition2D = function rotatePosition2D(e, t, i) {
    return {
      x: e * Math.cos(i) - t * Math.sin(i),
      y: e * Math.sin(i) + t * Math.cos(i),
      z: 0
    };
  };

  _class10.rotatePosition3D = function rotatePosition3D(e, t) {
    return e.clone().applyMatrix3(SPE.Math.getRotateMatrix(t.x, t.y, t.z));
  };

  _class10.getRotateMatrix = function getRotateMatrix(e, t, i) {
    var r = new THREE.Matrix3(),
        a = new THREE.Matrix3(),
        s = new THREE.Matrix3();
    return r.set(1, 0, 0, 0, Math.cos(e), -Math.sin(e), 0, Math.sin(e), Math.cos(e)), a.set(Math.cos(t), 0, Math.sin(t), 0, 1, 0, -Math.sin(t), 0, Math.cos(t)), s.set(Math.cos(i), -Math.sin(i), 0, Math.sin(i), Math.cos(i), 0, 0, 0, 1), r.multiply(a).multiply(s);
  };

  _class10.round = function round(e, t) {
    var i = (e + 'e').split('e');
    return +((i = (Math.round(i[0] + 'e' + (+i[1] + t)) + 'e').split('e'))[0] + 'e' + (+i[1] - t));
  };

  _class10.normalize = function normalize(e, t, i) {
    return (e - t) / (i - t);
  };

  _class10.lerp = function lerp(e, t, i) {
    return (i - t) * e + t;
  };

  _class10.map = function map(e, t, i, r, a) {
    return SPE.Math.lerp(SPE.Math.normalize(e, t, i), r, a);
  };

  _class10.clamp = function clamp(e, t, i) {
    return Math.min(Math.max(e, t), i);
  };

  _class10.getMiddlePointByPerc = function getMiddlePointByPerc(e, t, i) {
    var r = t.clone().sub(e),
        a = r.length();
    return r = r.normalize().multiplyScalar(a * i), e.clone().add(r);
  };

  _class10.getVectorDistanceInFloat = function getVectorDistanceInFloat(e, t) {
    var i = e.x - t.x,
        r = e.y - t.y,
        a = e.z - t.z;
    return Math.sqrt(i * i + r * r + a * a);
  };

  _class10.getVectorDistanceInVector = function getVectorDistanceInVector(e, t) {
    var i = e.x - t.x,
        r = e.y - t.y,
        a = e.z - t.z;
    return new THREE.Vector3(i, r, a);
  };

  _class10.getObjectSize = function getObjectSize(e) {
    var t = new THREE.Vector3();
    return e.geometry.computeBoundingBox(), t.x = e.geometry.boundingBox.max.x - e.geometry.boundingBox.min.x, t.y = e.geometry.boundingBox.max.y - e.geometry.boundingBox.min.y, t.z = e.geometry.boundingBox.max.z - e.geometry.boundingBox.min.z, t;
  };

  _class10.resetTransform = function resetTransform(e, t) {
    for (var i = 0; i < t.length; i++) {
      'all' == e ? (t[i].position.set(0, 0, 0), t[i].scale.set(1, 1, 1), t[i].rotation.set(0, 0, 0)) : 'scale' == e ? t[i].scale.set(1, 1, 1) : t[i].rotation.set(0, 0, 0), t[i].geometry && t[i].geometry.computeBoundingBox();
    }
  };

  _class10.containsObject = function containsObject(e, t) {
    for (var i = 0; i < t.length; i++) {
      if (t[i] === e) return !0;
    }

    return !1;
  };

  _class10.findCentroid = function findCentroid(e) {
    var t = new THREE.Vector3(),
        i = e.length;

    for (var _i109 = 0; _i109 < e.length; _i109++) {
      t.set(t.x + e[_i109].position.x, t.y + e[_i109].position.y, t.z + e[_i109].position.z);
    }

    return t.set(t.x / i, t.y / i, t.z / i), t;
  };

  _class10.removeFromArray = function removeFromArray(e, t) {
    var i = e.indexOf(t);
    e.splice(i, 1);
  };

  _class10.getPositionRelativeToElement = function getPositionRelativeToElement(e) {
    var t = e.target.getBoundingClientRect();
    return {
      mx: e.clientX - t.left,
      my: e.clientY - t.top
    };
  };

  _class10.getElementMousePos = function getElementMousePos(e, t) {
    return {
      mx: t.pageX - e.offset().left,
      my: t.pageY - e.offset().top
    };
  };

  _class10.changeColor = function changeColor(e, t) {
    var i = e.geometry.attributes.color.array,
        r = 3 * e.geometry.attributes.color.count,
        a = 1 / (t.steps * r),
        s = new THREE.Color();

    for (var _e108 = 0, n = r; _e108 < n; _e108++) {
      s.set(makeColorGradient(_e108, a, t.phase)), i[3 * _e108] = s.r, i[3 * _e108 + 1] = s.g, i[3 * _e108 + 2] = s.b;
    }

    e.geometry.attributes.color.needsUpdate = !0;
  };

  _class10.getColoredBufferLine = function getColoredBufferLine(e, t, i) {
    var r,
        a,
        s,
        n = i.vertices,
        o = i.vertices.length,
        h = new THREE.BufferGeometry(),
        l = new THREE.LineBasicMaterial({
      vertexColors: THREE.VertexColors
    }),
        c = new Float32Array(3 * o),
        d = new Float32Array(3 * o),
        m = 1 / (e * o),
        u = new THREE.Color();

    for (var _e109 = 0, _i110 = o; _e109 < _i110; _e109++) {
      r = n[_e109].x, a = n[_e109].y, s = n[_e109].z, c[3 * _e109] = r, c[3 * _e109 + 1] = a, c[3 * _e109 + 2] = s, u.set(makeColorGradient(_e109, m, t)), d[3 * _e109] = u.r, d[3 * _e109 + 1] = u.g, d[3 * _e109 + 2] = u.b;
    }

    return h.setAttribute('position', new THREE.BufferAttribute(c, 3)), h.setAttribute('color', new THREE.BufferAttribute(d, 3)), new THREE.Line(h, l);
  };

  _class10.makeColorGradient = function makeColorGradient(e, t, i) {
    var r, a, s;
    a = s = r = t;
    var n = i + 2,
        o = i + 4,
        h = 127 * Math.sin(r * e + i) + 128,
        l = 127 * Math.sin(a * e + n) + 128,
        c = 127 * Math.sin(s * e + o) + 128;
    return parseInt('0x' + _byte2Hex(h) + _byte2Hex(l) + _byte2Hex(c));
  };

  _class10._byte2Hex = function _byte2Hex(e) {
    return String('0123456789ABCDEF'.substr(e >> 4 & 15, 1)) + '0123456789ABCDEF'.substr(15 & e, 1);
  };

  _class10.drawBezierTangent = function drawBezierTangent(e, t) {
    var i = new THREE.LineCurve3(e, t).getPoints(1),
        r = new THREE.BufferGeometry().setFromPoints(i);
    return new THREE.Line(r, new THREE.LineBasicMaterial({
      color: 16711680
    }));
  };

  _class10.fixUvs = function fixUvs(e, t, i) {
    for (var r = 0; r < e.attributes.uv.array.length; r += 2) {
      e.attributes.uv.array[r] = (e.attributes.uv.array[r] + t / 2) / t, e.attributes.uv.array[r + 1] = 1 - (e.attributes.uv.array[r + 1] - i / 2) / i * -1;
    }
  };

  _class10.flattenArray = function flattenArray(e) {
    return e = [].concat.apply([], e);
  };

  _class10.sortNumber = function sortNumber(e, t) {
    return e - t;
  };

  _class10.swapArrayValues = function swapArrayValues(e, t, i) {
    var r = e[t];
    e[t] = e[i], e[i] = r;
  };

  return _class10;
}();

var Spline = function Spline(_ref) {
  var scene = _ref.scene,
      assets = _ref.assets;
  React.useEffect(function () {
    var splineRuntime = new SpeRuntime(scene, assets);
    splineRuntime.run();
  }, []);
  return React.createElement("div", null, React.createElement("div", {
    className: styles.container
  }, React.createElement("canvas", {
    id: 'canvas3d',
    className: styles.canvas
  })));
};

exports.Spline = Spline;
//# sourceMappingURL=index.js.map
