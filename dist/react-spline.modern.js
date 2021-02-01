import * as three from 'three';
import anime$1 from 'animejs/lib/anime.es.js';
import { useRef, useEffect, createElement } from 'react';

window.THREE = three;
window.anime = anime$1;
window.SPE = window.SPE || {};
window.SPE_USES_PREVIEW_IMAGE = false;

window.SPE = window.SPE || {};
const UNSIGNED_BYTE = 5121,
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
        default: 1
      },
      minValue: 1,
      maxValue: 128
    },
    heightSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        default: 1
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
        default: 1
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
        default: 1
      },
      minValue: 1,
      maxValue: 64
    },
    heightSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        default: 1
      },
      minValue: 1,
      maxValue: 64
    },
    cornerSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        default: 1
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
        default: 1
      },
      minValue: 1,
      maxValue: 64
    },
    cornerSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        default: 1
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
        default: 1
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
        default: 1
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
        default: 1
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
        default: 1
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
        default: 1
      },
      minValue: 1,
      maxValue: 64
    },
    tubularSegments: {
      scalers: {
        high: 2,
        middle: 1,
        low: 0.5,
        default: 1
      },
      minValue: 1,
      maxValue: 128
    }
  }
};

class SpeGltfDecoder {
  constructor(e) {
    this.mGltfSceneGraph = e, this.mSceneGraph = null, this.mSceneCamera = null, this.mSceneOptions = {}, this.mNodes = [], this.mCameras = [], this.mLights = [], this.mGeometries = [], this.mGeometriesSpe = [], this.mAccessors = [], this.mMaterials = [];
  }

  decode(e) {
    e && (this.mGltfSceneGraph = e), this.mSceneGraph = new SpeScene(), this.mSceneCamera = null, this.mSceneOptions = {}, this.mNodes = [this.mSceneGraph], this.mObjects = {}, this.mCameras = [], this.mLights = [], this.mGeometries = [], this.mGeometriesSpe = [], this.mAccessors = [], this.mMaterials = [], this.mInteractionStates = {}, void 0 !== this.mGltfSceneGraph.spline && (this.mSceneOptions.usePrimitives = void 0 === this.mGltfSceneGraph.spline.usePrimitives || this.mGltfSceneGraph.spline.usePrimitives, this.mSceneOptions.useOrbitControls = void 0 === this.mGltfSceneGraph.spline.useOrbitControls || this.mGltfSceneGraph.spline.useOrbitControls, this.mSceneOptions.bgColor = void 0 !== this.mGltfSceneGraph.spline.bgColor ? this.mGltfSceneGraph.spline.bgColor : new THREE.Color(1644825), this.mSceneOptions.bgAlpha = void 0 !== this.mGltfSceneGraph.spline.bgAlpha ? this.mGltfSceneGraph.spline.bgAlpha : 0, this.mSceneOptions.orbitDamped = void 0 !== this.mGltfSceneGraph.spline.orbitDamped && this.mGltfSceneGraph.spline.orbitDamped, this.mSceneOptions.orbitTarget = void 0 !== this.mGltfSceneGraph.spline.orbitTarget ? this.mGltfSceneGraph.spline.orbitTarget : [0, 0, 0], this.mSceneOptions.cameraType = void 0 !== this.mGltfSceneGraph.spline.cameraType ? this.mGltfSceneGraph.spline.cameraType : 'Orthographic', this.mSceneOptions.cameraRotate = void 0 === this.mGltfSceneGraph.spline.cameraRotate || this.mGltfSceneGraph.spline.cameraRotate, this.mSceneOptions.cameraPan = void 0 === this.mGltfSceneGraph.spline.cameraPan || this.mGltfSceneGraph.spline.cameraPan, this.mSceneOptions.cameraZoom = void 0 === this.mGltfSceneGraph.spline.cameraZoom || this.mGltfSceneGraph.spline.cameraZoom, this.mSceneOptions.viewMode = void 0 !== this.mGltfSceneGraph.spline.viewMode ? this.mGltfSceneGraph.spline.viewMode : SPE_RUNTIME_VIEWMODE_FULLSCREEN, this.mSceneOptions.viewWidth = void 0 !== this.mGltfSceneGraph.spline.viewWidth ? this.mGltfSceneGraph.spline.viewWidth : 1024, this.mSceneOptions.viewHeight = void 0 !== this.mGltfSceneGraph.spline.viewHeight ? this.mGltfSceneGraph.spline.viewHeight : 768, this.mSceneOptions.quality = void 0 !== this.mGltfSceneGraph.spline.quality ? this.mGltfSceneGraph.spline.quality : SPE_RUNTIME_QUALITY_DEFAULT);
    const t = 'function' == typeof Interaction;

    if (t) {
      if (SPE.CachedImages = {}, this.mGltfSceneGraph.spline && this.mGltfSceneGraph.spline.images) {
        const _e = this.mGltfSceneGraph.spline.images;

        for (const [_t, _i] of Object.entries(_e)) {
          const _e2 = new Image();

          _e2.src = _i.url, SPE.CachedImages[_t] = _e2;
        }
      }

      if (SPE.CachedTextures = {}, this.mGltfSceneGraph.spline && this.mGltfSceneGraph.spline.textures) {
        const _e3 = this.mGltfSceneGraph.spline.textures;

        for (const [_t2, _i2] of Object.entries(_e3)) {
          const _e4 = _i2.image,
                _r = SPE.CachedImages[_e4],
                _a = new THREE.Texture(_r, _i2.mapping, _i2.wrap[0], _i2.wrap[1], _i2.magFilter, _i2.minFilter, _i2.format, _i2.type, _i2.anisotropy, _i2.encoding);

          _a.offset.fromArray(_i2.offset), _a.repeat.fromArray(_i2.repeat), _a.center.fromArray(_i2.center), _a.updateMatrix(), SPE.CachedTextures[_t2] = _a;
        }
      }

      if (this.mGltfSceneGraph.spline && this.mGltfSceneGraph.spline.interactionStates) {
        const _e5 = this.mGltfSceneGraph.spline.interactionStates;

        for (const [_t3, _i3] of Object.entries(_e5)) this.mInteractionStates[_t3] = new InteractionState().fromJSON(_i3, SPE.CachedTextures);
      }
    }

    const i = this.mGltfSceneGraph.cameras || [];

    for (let _e6 = 0; _e6 < i.length; _e6++) this._decodeCamera(i[_e6]);

    if (this.mGltfSceneGraph.extensions && this.mGltfSceneGraph.extensions.KHR_lights_punctual && this.mGltfSceneGraph.extensions.KHR_lights_punctual.lights) {
      const _e7 = this.mGltfSceneGraph.extensions.KHR_lights_punctual.lights;

      for (let _t4 = 0; _t4 < _e7.length; _t4++) this._decodeLight(_e7[_t4]);
    }

    this._constructGeometricData();

    const r = this.mGltfSceneGraph.materials || [];

    for (let _e8 = 0; _e8 < r.length; _e8++) this._decodeMaterial(r[_e8]);

    const a = this.mGltfSceneGraph.meshes_spe || [];

    for (let _e9 = 0; _e9 < a.length; _e9++) this._decodeSpeGeometry(a[_e9]);

    const s = this.mGltfSceneGraph.meshes || [];

    for (let _e10 = 0; _e10 < s.length; _e10++) this._decodeGeometry(s[_e10]);

    const n = this.mGltfSceneGraph.nodes || [];

    for (let _e11 = 1; _e11 < n.length; _e11++) this._decodeNode(n[_e11]);

    if (t && this.mGltfSceneGraph.spline && this.mGltfSceneGraph.spline.interactions) {
      const _e12 = this.mGltfSceneGraph.spline.interactions;

      for (let _t5 = 0; _t5 < n.length; _t5++) {
        const _i4 = n[_t5];

        if (void 0 !== _i4.spe_interaction && null !== _i4.spe_interaction) {
          const _r2 = _i4.spe_interaction;

          if (_r2 < _e12.length && _r2 >= 0) {
            const _i5 = _e12[_r2],
                  _a2 = this.mInteractionStates,
                  _s = this.mObjects;

            this.mNodes[_t5].interaction.fromJSON(_i5, _s, _a2);
          }
        }
      }
    }

    const o = this.mGltfSceneGraph.nodes[0],
          h = new SpeStack();

    for (let _e13 = 0; _e13 < o.children.length; _e13++) h.push([o.children[_e13], this.mSceneGraph]);

    for (; !h.empty();) {
      const _e14 = h.pop(),
            _t6 = _e14[0],
            _i6 = _e14[1];

      if (_t6 < this.mNodes.length && _t6 >= 0) {
        const _e15 = this.mNodes[_t6];
        if (!_e15) continue;
        _i6 && _i6.add(_e15);
        const _r3 = this.mGltfSceneGraph.nodes[_t6].children;
        if (void 0 !== _r3) for (let _t7 = 0; _t7 < _r3.length; _t7++) h.push([_r3[_t7], _e15]);
      }
    }

    if (void 0 !== this.mGltfSceneGraph.spline && this.mGltfSceneGraph.spline.fog) {
      const _e16 = this.mGltfSceneGraph.spline.fog,
            _t8 = void 0 !== _e16.color ? _e16.color : 16777215,
            _i7 = void 0 !== _e16.near ? _e16.near : 500,
            _r4 = void 0 !== _e16.far ? _e16.far : 2e3;

      this.mSceneGraph.fog = new THREE.Fog(_t8, _i7, _r4);
    }

    if (void 0 !== this.mGltfSceneGraph.spline && void 0 !== this.mGltfSceneGraph.spline.mainCameraIndex) {
      const _e17 = this.mGltfSceneGraph.spline.mainCameraIndex;
      _e17 < this.mNodes.length && _e17 >= 0 && (this.mSceneCamera = this.mNodes[_e17]);
    }

    return [this.mSceneGraph, this.mSceneCamera, this.mSceneOptions];
  }

  _decodeCamera(e) {
    let t = void 0 !== e.type ? e.type : 'Perspective',
        i = 100,
        r = 100,
        a = 45,
        n = 0.1,
        o = 5e4,
        h = null;

    if ('Perspective' === t) {
      const _t9 = e.perspective ? e.perspective : {},
            l = e.spe_options ? e.spe_options : {};

      a = void 0 !== _t9.yfov ? _t9.yfov : 45, n = void 0 !== _t9.znear ? _t9.znear : 0.1, o = void 0 !== _t9.zfar ? _t9.zfar : 5e4, (h = new SPE.CombinedCamera(i, r, a, n, o)).toPerspective();
      const c = void 0 !== l.zoom ? l.zoom : 1;
      h.zoom = c;
    } else if ('Orthographic' === t) {
      const _t10 = e.orthographic ? e.orthographic : {},
            _s2 = e.spe_options ? e.spe_options : {};

      i = void 0 !== _t10.xmag ? _t10.xmag : 100, r = void 0 !== _t10.ymag ? _t10.ymag : 100, n = void 0 !== _t10.znear ? _t10.znear : 0.1, o = void 0 !== _t10.zfar ? _t10.zfar : 5e4, (h = new SPE.CombinedCamera(i, r, a, n, o)).toOrthographic();
      const l = void 0 !== _s2.zoom ? _s2.zoom : 1;
      h.zoom = l;
    } else console.warn(`SpeGltfDecoder::_decodeCamera >>> unsupported camera type: ${t}. Using Orthographic instead`), (h = new SPE.CombinedCamera(i, r, a, n, o)).toOrthographic();

    this.mCameras.push(h);
  }

  _decodeLight(e) {
    if ('hemispheric' === e.type) {
      const t = new THREE.Color().fromArray(void 0 !== e.color ? e.color : [1, 1, 1]),
            i = new THREE.Color().setHex(8553090),
            r = e.intensity ? e.intensity : 1;
      this.mLights.push(new THREE.HemisphereLight(t, i, r));
    } else if ('directional' === e.type) {
      const t = new SPE.LightDirectional(new THREE.Color().fromArray(e.color), e.intensity),
            i = e.shadows || {};
      t.castShadow = void 0 !== i.castShadow && i.castShadow, t.shadow.camera.right = void 0 !== i.shadowmapViewRight ? i.shadowmapViewRight : 1250, t.shadow.camera.left = void 0 !== i.shadowmapViewLeft ? i.shadowmapViewLeft : -1250, t.shadow.camera.top = void 0 !== i.shadowmapViewTop ? i.shadowmapViewTop : 1250, t.shadow.camera.bottom = void 0 !== i.shadowmapViewBottom ? i.shadowmapViewBottom : -1250, t.shadow.camera.near = void 0 !== i.shadowmapViewNear ? i.shadowmapViewNear : 1, t.shadow.camera.far = void 0 !== i.shadowmapViewFar ? i.shadowmapViewFar : 2500, this.mLights.push(t);
    } else if ('point' === e.type) {
      const t = new THREE.Color().fromArray(void 0 !== e.color ? e.color : [1, 1, 1]),
            i = e.intensity ? e.intensity : 1,
            r = void 0 !== e.range ? e.range : 0,
            a = void 0 !== e.decay ? e.decay : 1,
            s = new SPE.LightPoint(t, i, r, a),
            n = e.shadows || {};
      s.castShadow = void 0 !== n.castShadow && n.castShadow, s.shadow.camera.near = void 0 !== n.shadowmapViewNear ? n.shadowmapViewNear : 1, s.shadow.camera.far = void 0 !== n.shadowmapViewFar ? n.shadowmapViewFar : 2500, this.mLights.push(s);
    } else if ('spot' === e.type) {
      const t = new THREE.Color().fromArray(void 0 !== e.color ? e.color : [1, 1, 1]),
            i = e.intensity ? e.intensity : 1,
            r = void 0 !== e.range ? e.range : 0,
            a = void 0 !== e.decay ? e.decay : 1,
            s = void 0 !== e.innerConeAngle ? e.innerConeAngle : Math.PI / 3,
            n = void 0 !== e.penumbra ? e.penumbra : 0,
            o = new SPE.LightSpot(t, i, r, s, n, a),
            h = e.shadows || {};
      o.castShadow = void 0 !== h.castShadow && h.castShadow, o.shadow.camera.fov = void 0 !== h.shadowmapViewFov ? h.shadowmapViewFov : 2 * THREE.MathUtils.RAD2DEG * s, o.shadow.camera.near = void 0 !== h.shadowmapViewNear ? h.shadowmapViewNear : 1, o.shadow.camera.far = void 0 !== h.shadowmapViewFar ? h.shadowmapViewFar : 2500, this.mLights.push(o);
    } else console.error('SpeGltfDecoder::_decodeLight >>> unsupported light type: ', e.type);
  }

  _constructGeometricData() {
    const e = this.mGltfSceneGraph.buffers,
          t = [];

    for (let _i8 = 0; _i8 < e.length; _i8++) t.push(this._decodeBuffer(e[_i8]));

    const i = this.mGltfSceneGraph.bufferViews,
          r = [];

    for (let _e18 = 0; _e18 < i.length; _e18++) r.push(this._decodeBufferView(i[_e18], t));

    const a = this.mGltfSceneGraph.accessors;

    for (let _e19 = 0; _e19 < a.length; _e19++) this.mAccessors.push(this._decodeAccessor(a[_e19], r));
  }

  _decodeBuffer(e) {
    const t = e.byteLength,
          i = e.uri;

    if (i.indexOf('base64')) {
      const _e20 = i.slice(i.indexOf('base64') + 7),
            r = atob(_e20),
            a = new Uint8Array(_e20.length);

      for (let _e21 = 0; _e21 < r.length; _e21++) a[_e21] = r.charCodeAt(_e21);

      return {
        data: a,
        length: t
      };
    }

    return i.indexOf('.bin') ? (console.error('SpeGltfDecoder::_decodeBuffer >>> encode-from-.bin is not implement yet'), '') : (console.error('SpeGltfDecoder::_decodeBuffer >>> invalid options to parse buffer data'), '');
  }

  _decodeBufferView(e, t) {
    const i = e.byteLength,
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
  }

  _decodeAccessor(e, t) {
    const i = e.bufferView,
          r = e.byteOffset,
          a = e.componentType,
          s = e.count,
          n = e.type;

    if (i < t.length && i >= 0) {
      const _e22 = t[i].data,
            o = this._getAccessorItemSize(n),
            h = s * o * this._getAccessorComponentSize(a),
            l = _e22.slice(r, r + h);

      let c = null;
      return a === UNSIGNED_SHORT ? c = this._createUint16Buffer(l) : a === UNSIGNED_INT ? c = this._createUint32Buffer(l) : a === FLOAT && (c = this._createFloat32Buffer(l)), c ? this._createBufferAttribute(c, o) : (console.error('SpeGltfDecoder::_decodeAccessor >>> invalid component-type given'), null);
    }

    return console.error('SpeGltfDecoder::_decodeAccessor >>> index-out-of-range in bufferViews array'), null;
  }

  _decodeMaterial(e) {
    let [t, i] = Object.entries(e)[0];
    void 0 !== i.extensions && void 0 !== i.extensions.KHR_materials_common ? this._decodeSimpleMaterial(i.extensions.KHR_materials_common, i.spe_options, i.spe_layers) : this._decodePbrMaterial(i);
  }

  _decodeSimpleMaterial(e, t, i) {
    const r = e.technique || 'PHONG',
          a = e.values || {},
          s = t || {},
          n = i || {};

    if ('PHONG' === r) {
      const _e23 = new THREE.Color().fromArray(void 0 !== a.diffuse ? a.diffuse : [0.5, 0.5, 0.5]),
            _t11 = new THREE.Color().fromArray(void 0 !== a.specular ? a.specular : [0.5, 0.5, 0.5]),
            _i9 = new THREE.Color().fromArray(void 0 !== a.emission ? a.emission : [0, 0, 0]),
            _r5 = void 0 !== a.shininess ? a.shininess : 32,
            o = void 0 !== a.transparent && a.transparent,
            h = void 0 !== a.transparency ? a.transparency : 1,
            l = void 0 === s.visible || s.visible,
            c = void 0 !== s.wireframe && s.wireframe,
            d = void 0 !== s.side ? s.side : THREE.FrontSide,
            m = void 0 !== s.flatShading && s.flatShading,
            u = new SpePhongMaterial(n, {
        color: _e23,
        specular: _t11,
        emissive: _i9,
        shininess: _r5,
        transparent: o,
        opacity: h,
        flatShading: m,
        side: d,
        wireframe: c,
        visible: l
      });

      this.mMaterials.push(u);
    } else if ('LAMBERT' === r) {
      const _e24 = new THREE.Color().fromArray(void 0 !== a.diffuse ? a.diffuse : [0.5, 0.5, 0.5]),
            _t12 = new THREE.Color().fromArray(void 0 !== a.emission ? a.emission : [0, 0, 0]),
            _i10 = void 0 !== a.transparent && a.transparent,
            _r6 = void 0 !== a.transparency ? a.transparency : 1,
            o = void 0 === s.visible || s.visible,
            h = void 0 !== s.wireframe && s.wireframe,
            l = void 0 !== s.side ? s.side : THREE.FrontSide,
            c = void 0 !== s.flatShading && s.flatShading,
            d = new SpeLambertMaterial(n, {
        color: _e24,
        emissive: _t12,
        transparent: _i10,
        opacity: _r6,
        flatShading: c,
        side: l,
        wireframe: h,
        visible: o
      });

      this.mMaterials.push(d);
    } else if ('CONSTANT' === r) {
      const _e25 = new THREE.Color().fromArray(void 0 !== a.ambient ? a.ambient : [0.5, 0.5, 0.5]),
            _t13 = void 0 !== a.transparent && a.transparent,
            _i11 = void 0 !== a.transparency ? a.transparency : 1,
            _r7 = void 0 === s.visible || s.visible,
            o = void 0 !== s.wireframe && s.wireframe,
            h = void 0 !== s.side ? s.side : THREE.FrontSide,
            l = void 0 !== s.flatShading && s.flatShading,
            c = new SpeBasicMaterial(n, {
        color: _e25,
        transparent: _t13,
        opacity: _i11,
        flatShading: l,
        side: h,
        wireframe: o,
        visible: _r7
      });

      this.mMaterials.push(c);
    } else if ('TOON' === r) {
      const _e26 = new THREE.Color().fromArray(void 0 !== a.ambient ? a.ambient : [0.5, 0.5, 0.5]),
            _t14 = void 0 !== a.transparent && a.transparent,
            _i12 = void 0 !== a.transparency ? a.transparency : 1,
            _r8 = void 0 === s.visible || s.visible,
            o = void 0 !== s.wireframe && s.wireframe,
            h = void 0 !== s.side ? s.side : THREE.FrontSide,
            l = void 0 !== s.flatShading && s.flatShading,
            c = new SpeToonMaterial(n, {
        color: _e26,
        transparent: _t14,
        opacity: _i12,
        flatShading: l,
        side: h,
        wireframe: o,
        visible: _r8
      });

      this.mMaterials.push(c);
    } else if ('PHYSICAL' === r) {
      const _e27 = new THREE.Color().fromArray(void 0 !== a.ambient ? a.ambient : [0.5, 0.5, 0.5]),
            _t15 = void 0 !== a.transparent && a.transparent,
            _i13 = void 0 !== a.transparency ? a.transparency : 1,
            _r9 = void 0 !== a.roughness ? a.roughness : 0.3,
            o = void 0 !== a.metalness ? a.metalness : 0,
            h = void 0 !== a.reflectivity ? a.reflectivity : 0.5,
            l = void 0 === s.visible || s.visible,
            c = void 0 !== s.wireframe && s.wireframe,
            d = void 0 !== s.side ? s.side : THREE.FrontSide,
            m = void 0 !== s.flatShading && s.flatShading,
            u = new SpePhysicalMaterial(n, {
        color: _e27,
        transparent: _t15,
        opacity: _i13,
        roughness: _r9,
        metalness: o,
        reflectivity: h,
        flatShading: m,
        side: d,
        wireframe: c,
        visible: l
      });

      this.mMaterials.push(u);
    } else if ('ARRAY' === r) {
      const _e28 = void 0 !== a.techniques ? a.techniques : new Array(n.length).fill('CONSTANT'),
            _t16 = [];

      for (let _i14 = 0; _i14 < n.length; _i14++) 'CONSTANT' === _e28[_i14] ? _t16.push(new SpeBasicMaterial(n[_i14], {})) : 'LAMBERT' === _e28[_i14] ? _t16.push(new SpeLambertMaterial(n[_i14], {})) : 'PHONG' === _e28[_i14] ? _t16.push(new SpePhongMaterial(n[_i14], {})) : 'TOON' === _e28[_i14] ? _t16.push(new SpeToonMaterial(n[_i14], {})) : 'PHYSICAL' === _e28[_i14] ? _t16.push(new SpePhysicalMaterial(n[_i14], {})) : (console.error(`SpeGltfDecoder::_decodeSimpleMaterial >>> unsupported technique (${_e28[_i14]}) for element of array of materials`), _t16.push(new SpeBasicMaterial(n[_i14], {})));

      this.mMaterials.push(_t16);
    } else console.error('SpeGltfDecoder::_decodeSimpleMaterial >>> unsupported material type: ', e.technique);
  }

  _decodePbrMaterial(e) {}

  _decodeSpeGeometry(e) {
    const t = void 0 !== e.type ? e.type : 'SphereGeometry',
          i = this._applyQualityScalers(t, void 0 !== e.parameters ? { ...e.parameters
    } : {
      width: 100,
      height: 100,
      depth: 100
    });

    if ('CharacterGeometry' === t) {
      SpeLoadCharData(void 0 !== i.char ? i.char : '.', void 0 !== i.fontFamily ? i.fontFamily : 'roboto_regular', void 0 !== i.lod ? i.lod : 1), this.mGeometriesSpe.push(i);
    } else {
      const _e29 = (0, SPE[t].build)(i);

      this.mGeometriesSpe.push(_e29);
    }
  }

  _applyQualityScalers(e, t) {
    if (void 0 === SPE.QualityModifiers[e]) return t;
    const i = {},
          r = this.mSceneOptions.quality;

    for (const [a, s] of Object.entries(t)) {
      if (void 0 === SPE.QualityModifiers[e][a]) {
        i[a] = s;
        continue;
      }

      const _t17 = SPE.QualityModifiers[e][a].minValue,
            n = SPE.QualityModifiers[e][a].maxValue,
            o = SPE.QualityModifiers[e][a].scalers[r];
      i[a] = Math.max(_t17, Math.min(n, o * s));
    }

    return i;
  }

  _decodeGeometry(e) {
    const t = e.primitives,
          i = e.groups,
          r = e.parameters,
          a = t[0],
          s = a.indices,
          n = a.attributes,
          o = this.mAccessors[s],
          h = {};

    for (let _e30 in n) h[_e30] = this.mAccessors[n[_e30]];

    const l = new THREE.BufferGeometry();
    o && l.setIndex(o);

    for (let _e31 in h) l.setAttribute(_e31.toLowerCase(), h[_e31]);

    if (void 0 !== i) for (let _e32 = 0; _e32 < i.length; _e32++) l.addGroup(i[_e32].start, i[_e32].count, i[_e32].materialIndex);

    if (void 0 !== r) {
      const _e33 = new THREE.Vector3();

      l.computeBoundingBox(), l.boundingBox.getSize(_e33);

      const _t18 = void 0 !== r.width ? r.width : _e33.x,
            _i15 = void 0 !== r.height ? r.height : _e33.y,
            _a3 = void 0 !== r.depth ? r.depth : _e33.z;

      l.scale(Math.abs(_e33.x) < 1e-5 ? 1 : _t18 / _e33.x, Math.abs(_e33.y) < 1e-5 ? 1 : _i15 / _e33.y, Math.abs(_e33.z) < 1e-5 ? 1 : _a3 / _e33.z), l.userData = {
        type: 'NonParametricGeometry',
        parameters: {
          width: _t18,
          height: _i15,
          depth: _a3
        }
      };
    }

    this.mGeometries.push(l);
  }

  _decodeNode(e) {
    if (void 0 !== e.camera) {
      const t = e.camera;

      if (t < this.mCameras.length && t >= 0) {
        const i = this.mCameras[t];
        i.visible = void 0 === e.visible || e.visible, i.position.copy(new THREE.Vector3().fromArray(e.translation ? e.translation : [0, 0, 0])), i.quaternion.copy(new THREE.Quaternion().fromArray(e.rotation ? e.rotation : [0, 0, 0, 1])), i.hiddenMatrix.copy(new THREE.Matrix4().fromArray(e.hiddenMatrix ? e.hiddenMatrix : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])), i.updateMatrix(), this.mNodes.push(i);
        const r = void 0 !== e.uuid ? e.uuid : THREE.MathUtils.generateUUID();
        this.mObjects[r] = i;
      } else console.error('SpeGltfDecoder::_decodeNode >>> couldnt create node for associated camera (index out of bounds)');
    } else if (void 0 !== e.mesh_spe) {
      const t = e.mesh_spe;
      let i = null;
      t < this.mGeometriesSpe.length && t >= 0 ? i = this.mGeometriesSpe[t] : (console.warn('SpeGltfDecoder::_decodeNode >>> couldnt grab any associated geometry for a mesh-node (index out of bounds). Creating a default sphere instead'), i = new THREE.SphereBufferGeometry(1, 10, 10));
      let r = null;

      if (void 0 !== e.material) {
        const _t19 = e.material;
        _t19 < this.mMaterials.length && _t19 >= 0 ? r = this.mMaterials[_t19] : console.warn('SpeGltfDecoder::_decodeNode >>> couldnt grab any associated material for a mesh-node (index out of bounds)');
      }

      r || (console.error('SpeGltfDecoder::_decodeNode >>> mesh-node doesnt have a material. Creating a default phong-material instead'), r = new SpePhongMaterial({}, {
        color: new THREE.Color(16777215),
        specular: new THREE.Color(16777215)
      }));
      const a = void 0 !== e.type ? e.type : 'mesh3d';
      let s = null;
      'mesh3d' === a ? s = new SpeMesh3D(i, r) : 'mesh2d' === a ? s = new SpeMesh2D(i, r) : 'text' === a ? s = new SpeTextContainer(i, r) : 'character' === a ? s = new SpeTextChar3D(i, r) : (console.error(`SpeGltfDecoder::_decodeNode >>> mesh-type ${a} not supported`), s = new SpeMesh3D(i, r)), s.visible = void 0 === e.visible || e.visible, s.castShadow = void 0 === e.castShadow || e.castShadow, s.receiveShadow = void 0 === e.receiveShadow || e.receiveShadow, s.position.copy(new THREE.Vector3().fromArray(e.translation ? e.translation : [0, 0, 0])), s.quaternion.copy(new THREE.Quaternion().fromArray(e.rotation ? e.rotation : [0, 0, 0, 1])), s.scale.copy(new THREE.Vector3().fromArray(e.scale ? e.scale : [1, 1, 1])), s.hiddenMatrix.copy(new THREE.Matrix4().fromArray(e.hiddenMatrix ? e.hiddenMatrix : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])), s.updateMatrix(), this.mNodes.push(s);
      const n = void 0 !== e.uuid ? e.uuid : THREE.MathUtils.generateUUID();
      this.mObjects[n] = s, e.spe_cloner && (s.cloner = new Cloner(s).fromJSON(e.spe_cloner_data), s.add(s.cloner));
    } else if (void 0 !== e.mesh) {
      const t = e.mesh;
      let i = null;
      t < this.mGeometries.length && t >= 0 ? i = this.mGeometries[t] : (console.warn('SpeGltfDecoder::_decodeNode >>> couldnt grab any associated geometry for a mesh-node (index out of bounds). Creating a default sphere instead'), i = new THREE.SphereBufferGeometry(1, 10, 10));
      let r = null;

      if (void 0 !== e.material) {
        const _t20 = e.material;
        _t20 < this.mMaterials.length && _t20 >= 0 ? r = this.mMaterials[_t20] : console.warn('SpeGltfDecoder::_decodeNode >>> couldnt grab any associated material for a mesh-node (index out of bounds)');
      }

      r || (console.warn('SpeGltfDecoder::_decodeNode >>> mesh-node doesnt have a material. Creating a default phong-material instead'), r = new SpePhongMaterial({}, {
        color: new THREE.Color(16777215),
        specular: new THREE.Color(16777215)
      }));
      const a = new SpeMesh3D(i, r);
      a.visible = void 0 === e.visible || e.visible, a.castShadow = void 0 === e.castShadow || e.castShadow, a.receiveShadow = void 0 === e.receiveShadow || e.receiveShadow, a.position.copy(new THREE.Vector3().fromArray(e.translation ? e.translation : [0, 0, 0])), a.quaternion.copy(new THREE.Quaternion().fromArray(e.rotation ? e.rotation : [0, 0, 0, 1])), a.scale.copy(new THREE.Vector3().fromArray(e.scale ? e.scale : [1, 1, 1])), a.hiddenMatrix.copy(new THREE.Matrix4().fromArray(e.hiddenMatrix ? e.hiddenMatrix : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])), a.updateMatrix(), this.mNodes.push(a);
      const s = void 0 !== e.uuid ? e.uuid : THREE.MathUtils.generateUUID();
      this.mObjects[s] = a, e.spe_cloner && (a.cloner = new Cloner(a).fromJSON(e.spe_cloner_data), a.add(a.cloner));
    } else if (void 0 !== e.extensions && void 0 !== e.extensions.KHR_lights_punctual && void 0 !== e.extensions.KHR_lights_punctual.light) {
      const t = e.extensions.KHR_lights_punctual.light;

      if (t < this.mLights.length && t >= 0) {
        const i = this.mLights[t];

        if (i.position.copy(new THREE.Vector3().fromArray(e.translation ? e.translation : [0, 0, 0])), 'SpotLight' === i.type || 'DirectionalLight' === i.type) {
          const _t21 = new THREE.Quaternion().fromArray(e.rotation ? e.rotation : [0, 0, 0, 1]),
                _r10 = new THREE.Matrix4().makeRotationFromQuaternion(_t21),
                a = new THREE.Vector3(_r10.elements[8], _r10.elements[9], _r10.elements[10]);

          i.target.position.x = i.position.x + a.x, i.target.position.y = i.position.y + a.y, i.target.position.z = i.position.z + a.z;
        }

        i.hiddenMatrix && i.hiddenMatrix.copy(new THREE.Matrix4().fromArray(e.hiddenMatrix ? e.hiddenMatrix : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])), i.visible = void 0 === e.visible || e.visible, this.mNodes.push(i);
        const r = void 0 !== e.uuid ? e.uuid : THREE.MathUtils.generateUUID();
        this.mObjects[r] = i;
      } else console.error('SpeGltfDecoder::_decodeNode >>> couldnt create node for associated light (index out of bounds)');
    } else if (e.spe_empty_object) {
      const t = new SpeEmptyObject();
      t.visible = void 0 === e.visible || e.visible, t.position.copy(new THREE.Vector3().fromArray(e.translation ? e.translation : [0, 0, 0])), t.quaternion.copy(new THREE.Quaternion().fromArray(e.rotation ? e.rotation : [0, 0, 0, 1])), t.scale.copy(new THREE.Vector3().fromArray(e.scale ? e.scale : [1, 1, 1])), t.hiddenMatrix.copy(new THREE.Matrix4().fromArray(e.hiddenMatrix ? e.hiddenMatrix : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])), t.updateMatrix(), this.mNodes.push(t);
      const i = void 0 !== e.uuid ? e.uuid : THREE.MathUtils.generateUUID();
      this.mObjects[i] = t;
    } else {
      console.warn('SpeGltfDecoder::_decodeNode >>> Unsupported node, creating a default THREE.Object3D instead');
      const t = new THREE.Object3D();
      t.position.copy(new THREE.Vector3().fromArray(e.translation ? e.translation : [0, 0, 0])), t.quaternion.copy(new THREE.Quaternion().fromArray(e.rotation ? e.rotation : [0, 0, 0, 1])), t.scale.copy(new THREE.Vector3().fromArray(e.scale ? e.scale : [1, 1, 1])), this.mNodes.push(t);
    }
  }

  _getAccessorItemSize(e) {
    return 'SCALAR' === e ? 1 : 'VEC2' === e ? 2 : 'VEC3' === e ? 3 : 'VEC4' === e ? 4 : 'MAT4' === e ? 16 : (console.error('SpeGltfDecoder::_getAccessorItemSize >>> invalid item-type'), 1);
  }

  _getAccessorComponentSize(e) {
    return e === UNSIGNED_BYTE ? 1 : e === UNSIGNED_SHORT ? 2 : e === UNSIGNED_INT ? 4 : e === FLOAT ? 4 : (console.error('SpeGltfDecoder::_getAccessorComponentSize >>> invalid component-type'), 1);
  }

  _createUint16Buffer(e) {
    return new Uint16Array(e.buffer);
  }

  _createUint32Buffer(e) {
    return new Uint32Array(e.buffer);
  }

  _createFloat32Buffer(e) {
    const t = new Float32Array(e.length / Float32Array.BYTES_PER_ELEMENT),
          i = new DataView(new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT));

    for (let r = 0; r < t.length; r++) i.setUint8(0, e[4 * r + 0]), i.setUint8(1, e[4 * r + 1]), i.setUint8(2, e[4 * r + 2]), i.setUint8(3, e[4 * r + 3]), t[r] = i.getFloat32(0, !0);

    return t;
  }

  _createBufferAttribute(e, t) {
    return 'Float32Array' === e.constructor.name ? new THREE.Float32BufferAttribute(e, t) : 'Uint16Array' === e.constructor.name ? new THREE.Uint16BufferAttribute(e, t) : 'Uint32Array' === e.constructor.name ? new THREE.Uint32BufferAttribute(e, t) : (console.error('SpeGltfDecoder::_createBufferAttribute >>> unsupported buffer-array-type'), null);
  }

}

class SpeIMesh extends THREE.Mesh {
  constructor(e, t) {
    super(e, t), this.mLocalTransform = new THREE.Matrix4(), this.mInteraction = 'function' == typeof Interaction ? new Interaction(this) : null;
  }

  get interaction() {
    return this.mInteraction;
  }

  set interaction(e) {
    this.mInteraction = e;
  }

  get hiddenMatrix() {
    return this.mLocalTransform;
  }

  set hiddenMatrix(e) {
    this.mLocalTransform.copy(e);
  }

  set visibility(e) {
    this.visible = e;

    for (let t = 0, i = this.children.length; t < i; ++t) void 0 !== this.children[t].traverseEntity && this.children[t].traverseEntity(function (t) {
      void 0 !== t.objectHelper && !0 === t.visible && (t.objectHelper.visible = e);
    });
  }

  get visibility() {
    return this.visible;
  }

  updateGeometry(e) {
    this.geometry.copy(e);
  }

  computeSingleBoundingBox() {
    this.singleBoundingBox || (this.singleBoundingBox = new SPE.Box3()), this.singleBoundingBox.setFromObjectSize(this, !1), this.singleBoundingBox.computeVertices(), this.singleBoundingBox.computeEdges();
  }

  computeComplexBoundingBox(e) {
    this.complexBoundingBox || (this.complexBoundingBox = new SPE.Box3()), this.complexBoundingBox.setFromObjectSize(this, e);
  }

  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.multiplyMatrices(this.mLocalTransform, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.mLocalTransform), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;

    for (let i = 0, r = t.length; i < r; i++) t[i].updateMatrixWorld(e);
  }

  updateWorldMatrix(e, t) {
    var i = this.parent;
    if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.multiplyMatrices(this.mLocalTransform, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.mLocalTransform), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), !0 === t) for (var r = this.children, a = 0, s = r.length; a < s; a++) r[a].updateWorldMatrix(!1, !0);
  }

  shallowClone(e) {
    return new this.constructor(this.geometry, this.material).shallowCopy(this, e);
  }

  shallowCopy(e, t = !0) {
    let i = e.children;
    if (e.children = [], super.copy(e), e.children = i, this.userDataFromJson(this.userData), !0 === t) for (let _t22 = 0, r = i.length; _t22 < r; ++_t22) {
      let _i16 = e.children[_t22];
      !0 === _i16.userData.isEntity && this.add(_i16.shallowClone());
    }
    return this;
  }

  traverseEntity(e) {
    !function t(i) {
      if (!i.userData.isEntity) return;
      e(i);
      const r = i.children;

      for (let e = 0, _i17 = r.length; e < _i17; ++e) t(r[e]);
    }(this);
  }

  userDataFromJson(e) {
    this.userData = e, this.userData.positionToCenter = new THREE.Vector3(), void 0 !== e.hiddenMatrix && (this.userData.hiddenMatrix = new THREE.Matrix4().fromArray(e.hiddenMatrix.elements)), void 0 === e.lock && (this.userData.lock = !1);
  }

}

class SpeMesh3D extends SpeIMesh {
  constructor(e, t) {
    super(e, t);
  }

}

class SpeMesh2D extends SpeIMesh {
  constructor(e, t) {
    super(e, t);
  }

}

class SpeEmptyObject extends THREE.Group {
  constructor() {
    super(), this.mLocalTransform = new THREE.Matrix4(), this.mInteraction = 'function' == typeof Interaction ? new Interaction(this) : null;
  }

  get interaction() {
    return this.mInteraction;
  }

  set interaction(e) {
    this.mInteraction = e;
  }

  get hiddenMatrix() {
    return this.mLocalTransform;
  }

  set hiddenMatrix(e) {
    this.mLocalTransform.copy(e);
  }

  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.multiplyMatrices(this.mLocalTransform, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.mLocalTransform), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;

    for (let i = 0, r = t.length; i < r; i++) t[i].updateMatrixWorld(e);
  }

  updateWorldMatrix(e, t) {
    var i = this.parent;
    if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.multiplyMatrices(this.mLocalTransform, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.mLocalTransform), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), !0 === t) for (var r = this.children, a = 0, s = r.length; a < s; a++) r[a].updateWorldMatrix(!1, !0);
  }

}

class SpeLayer {
  constructor(e, t = SPE_LAYER_TYPE_COLOR, i = {}) {
    this.mId = e, this.mType = t, this.mNext = null, this.mDefines = {}, this.mUniforms = {}, this.mProgramVertUniforms = '', this.mProgramFragUniforms = '', this.initializeUniformsAndDefines(i);
  }

  get id() {
    return this.mId;
  }

  get type() {
    return this.mType;
  }

  get next() {
    return this.mNext;
  }

  set next(e) {
    this.mNext = e;
  }

  get defines() {
    return this.mDefines;
  }

  get uniforms() {
    return this.mUniforms;
  }

  get paramNames() {
    const e = Object.keys(this.mUniforms),
          t = `f${this.mId}_`,
          i = [];

    for (let r = 0; r < e.length; r++) {
      const a = e[r];
      i.push(a.slice(a.indexOf(t) + t.length));
    }

    return i;
  }

  getValues() {
    const e = `f${this.mId}_`,
          t = {
      type: this.type
    };

    for (const [i, r] of Object.entries(this.mUniforms)) {
      const a = i.slice(i.indexOf(e) + e.length);
      r.value.toArray ? t[a] = r.value.toArray() : t[a] = r.value;
    }

    return t;
  }

  initializeUniformsAndDefines(e) {
    console.error('SpeLayer::initializeUniformsAndDefines >>> virtual method');
  }

  generateUniformsCodeVert() {
    return '\n\r';
  }

  generateUniformsCodeFrag() {
    return '\n\r';
  }

  generateShaderCodeVert(e) {
    return '\n\r';
  }

  generateShaderCodeFrag(e) {
    return '\n\r';
  }

  copy(e) {
    this.mType === e.mType ? (this.mId = e.mId, this.mDefines = { ...e.mDefines
    }, this.copyUniforms(e)) : console.error(`SpeLayer::copy >>> cant copy layer of different type dst=${this.mType}, src=${e.mType}`);
  }

  clone() {
    return SpeLayer.CreateLayer(this.mId, this.mType, this.mUniforms);
  }

  copyUniforms(e) {
    console.error('SpeLayer::copyUniforms >>> virtual method');
  }

  static CreateLayer(e, t, i) {
    return t === SPE_LAYER_TYPE_LIGHTING ? new SpeLayerLighting(e, i) : t === SPE_LAYER_TYPE_COLOR ? new SpeLayerColor(e, i) : t === SPE_LAYER_TYPE_GRADIENT ? new SpeLayerGradient(e, i) : t === SPE_LAYER_TYPE_NORMAL ? new SpeLayerNormal(e, i) : t === SPE_LAYER_TYPE_DEPTH ? new SpeLayerDepth(e, i) : t === SPE_LAYER_TYPE_TEXTURE ? new SpeLayerTexture(e, i) : t === SPE_LAYER_TYPE_NOISE ? new SpeLayerNoise(e, i) : t === SPE_LAYER_TYPE_FRESNEL ? new SpeLayerFresnel(e, i) : t === SPE_LAYER_TYPE_POINTS ? new SpeLayerPoints(e, i) : t === SPE_LAYER_TYPE_LINES ? new SpeLayerLines(e, i) : null;
  }

  static DictToUniforms(e) {
    const t = {};

    for (const [i, r] of Object.entries(e)) t[i] = {
      value: r
    };

    return t;
  }

}

class SpeLayerLighting extends SpeLayer {
  constructor(e, t) {
    super(e, SPE_LAYER_TYPE_LIGHTING, t);
  }

  initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_LIGHTING = '', this.mUniforms[`f${this.mId}_alpha`] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    };
  }

  generateUniformsCodeFrag() {
    return `\n            // SPE: Lighting layer uniforms *****\n            uniform float f${this.mId}_alpha;\n            uniform int f${this.mId}_mode;\n            // **********************************\n        `;
  }

  generateShaderCodeFrag() {
    return `\n            // SPE: Lighting layer frag-shader-code ************************************************\n            // @todo: instead of == use absolute distance for vector comparison\n            if ( outgoingLight != diffuseColor.rgb ) {\n                float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );\n                accumAlpha += ( 1.0 - accumAlpha ) * f${this.mId}_alpha * lightAccu;\n                outgoingLight = spe_blend( diffuseColor.rgb, outgoingLight, f${this.mId}_alpha, f${this.mId}_mode );\n            }\n            // *************************************************************************************\n        `;
  }

  copyUniforms(e) {
    e instanceof SpeLayerLighting && (this.mUniforms[`f${this.mId}_alpha`] = {
      value: e.uniforms[`f${e.id}_alpha`].value
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: e.uniforms[`f${e.id}_mode`].value
    });
  }

}

class SpeLayerColor extends SpeLayer {
  constructor(e, t) {
    super(e, SPE_LAYER_TYPE_COLOR, t);
  }

  initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_COLOR = '', this.mUniforms[`f${this.mId}_alpha`] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms[`f${this.mId}_color`] = {
      value: void 0 !== e.color ? new THREE.Color(e.color.value) : new THREE.Color(SPE_COLOR_DEFAULT)
    };
  }

  generateUniformsCodeFrag() {
    return `\n            // SPE: Color layer uniforms **********\n            uniform float f${this.mId}_alpha;\n            uniform int f${this.mId}_mode;\n            uniform vec3 f${this.mId}_color;\n            // ************************************\n        `;
  }

  generateShaderCodeFrag(e) {
    return `\n            // SPE: Color layer frag-shader-code ***************************************************\n            float f${this.mId}_calpha = f${this.mId}_alpha / clamp( f${this.mId}_alpha + accumAlpha, 0.00001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f${this.mId}_alpha;\n            ${e} = spe_blend( ${e}, f${this.mId}_color, f${this.mId}_calpha, f${this.mId}_mode );\n            // *************************************************************************************\n        `;
  }

  copyUniforms(e) {
    e instanceof SpeLayerColor && (this.mUniforms[`f${this.mId}_alpha`] = {
      value: e.uniforms[`f${e.id}_alpha`].value
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: e.uniforms[`f${e.id}_mode`].value
    }, this.mUniforms[`f${this.mId}_color`] = {
      value: e.uniforms[`f${e.id}_color`].value.clone()
    });
  }

}

class SpeLayerTexture extends SpeLayer {
  constructor(e, t) {
    super(e, SPE_LAYER_TYPE_TEXTURE, t);
  }

  initializeUniformsAndDefines(e) {
    var t;
    this.mDefines.SPE_USE_LAYER_TEXTURE = '', this.mDefines.USE_UV = '', this.mUniforms[`f${this.mId}_alpha`] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms[`f${this.mId}_texture`] = {
      value: void 0 !== e.texture ? (t = e.texture.value, t instanceof THREE.Texture ? t : 'string' == typeof t ? function (e) {
        const t = new Image();
        t.src = e;
        const i = new THREE.Texture(t);
        return i.needsUpdate = !0, i;
      }(t) : (console.error('SpeLayerTexture::get_texture >>> cant retrieve texture from given parameters'), new THREE.Texture())) : new THREE.Texture()
    }, this.mUniforms[`f${this.mId}_mat`] = {
      value: void 0 !== e.mat ? this.mUniforms[`f${this.mId}_texture`].value.matrix.fromArray(void 0 !== e.mat.value.elements ? e.mat.value.elements : e.mat.value) : this.mUniforms[`f${this.mId}_texture`].value.matrix
    }, this.mUniforms[`f${this.mId}_crop`] = {
      value: void 0 !== e.crop ? e.crop.value : 0
    };
  }

  generateUniformsCodeFrag() {
    return `\n            // SPE: Texture layer uniforms ********\n            uniform float f${this.mId}_alpha;\n            uniform int f${this.mId}_mode;\n            uniform sampler2D f${this.mId}_texture;\n            uniform mat3 f${this.mId}_mat;\n            uniform float f${this.mId}_crop;\n            // ************************************\n        `;
  }

  generateShaderCodeFrag(e) {
    return `\n            // SPE: Texture layer frag-shader-code *************************************************\n            vec2 f${this.mId}_vUv = ( f${this.mId}_mat * vec3( vUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;\n            vec4 f${this.mId}_tmp = texture2D( f${this.mId}_texture, f${this.mId}_vUv );\n            vec3 f${this.mId}_col = f${this.mId}_tmp.rgb;\n            float f${this.mId}_lalpha = f${this.mId}_alpha * f${this.mId}_tmp.a;\n            if ( f${this.mId}_crop > 0.5 ) {\n                if ( f${this.mId}_vUv.x < 0.0 || f${this.mId}_vUv.x > 1.0 ||\n                     f${this.mId}_vUv.y < 0.0 || f${this.mId}_vUv.y > 1.0 ) {\n                        f${this.mId}_lalpha = 0.0;\n                }\n            }\n            float f${this.mId}_calpha =  f${this.mId}_lalpha / clamp( f${this.mId}_lalpha + accumAlpha, 0.00001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f${this.mId}_lalpha;\n            ${e} = spe_blend( ${e}, f${this.mId}_col, f${this.mId}_calpha, f${this.mId}_mode );\n            // *************************************************************************************\n        `;
  }

  copyUniforms(e) {
    e instanceof SpeLayerTexture && (this.mUniforms[`f${this.mId}_alpha`] = {
      value: e.uniforms[`f${e.id}_alpha`].value
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: e.uniforms[`f${e.id}_mode`].value
    }, this.mUniforms[`f${this.mId}_texture`] = {
      value: e.uniforms[`f${e.id}_texture`].value.clone()
    }, this.mUniforms[`f${this.mId}_mat`] = {
      value: this.mUniforms[`f${this.mId}_texture`].value.matrix
    }, this.mUniforms[`f${this.mId}_crop`] = {
      value: e.uniforms[`f${e.id}_crop`].value
    });
  }

  static DictToUniforms(e) {
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
  }

}

class SpeLayerNormal extends SpeLayer {
  constructor(e, t) {
    super(e, SPE_LAYER_TYPE_NORMAL, t);
  }

  initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_NORMAL = '', this.mUniforms[`f${this.mId}_alpha`] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms[`f${this.mId}_cnormal`] = {
      value: void 0 !== e.cnormal ? new THREE.Vector3().fromArray(e.cnormal.value) : new THREE.Vector3(1, 1, 1)
    };
  }

  generateUniformsCodeFrag() {
    return `\n            // SPE: Normal layer uniforms ********\n            uniform float f${this.mId}_alpha;\n            uniform int f${this.mId}_mode;\n            uniform vec3 f${this.mId}_cnormal;\n            // ***********************************\n        `;
  }

  generateShaderCodeFrag(e) {
    return `\n            // SPE: Normal layer frag-shader-code **************************************************\n            vec3 f${this.mId}_normal = packNormalToRGB( normal ).rgb;\n            f${this.mId}_normal *= step( vec3(0.5), f${this.mId}_cnormal );\n            float f${this.mId}_calpha = f${this.mId}_alpha / clamp( f${this.mId}_alpha + accumAlpha, 0.00001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f${this.mId}_alpha;\n            ${e} = spe_blend( ${e}, f${this.mId}_normal, f${this.mId}_calpha, f${this.mId}_mode );\n            // *************************************************************************************\n        `;
  }

  copyUniforms(e) {
    e instanceof SpeLayerNormal && (this.mUniforms[`f${this.mId}_alpha`] = {
      value: e.uniforms[`f${e.id}_alpha`].value
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: e.uniforms[`f${e.id}_mode`].value
    }, this.mUniforms[`f${this.mId}_cnormal`] = {
      value: e.uniforms[`f${e.id}_cnormal`].value.clone()
    });
  }

}

class SpeLayerDepth extends SpeLayer {
  constructor(e, t) {
    super(e, SPE_LAYER_TYPE_DEPTH, t);
  }

  initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_DEPTH = '', this.mUniforms[`f${this.mId}_alpha`] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms[`f${this.mId}_near`] = {
      value: void 0 !== e.near ? e.near.value : 700
    }, this.mUniforms[`f${this.mId}_far`] = {
      value: void 0 !== e.far ? e.far.value : 1e3
    }, this.mUniforms[`f${this.mId}_origin`] = {
      value: void 0 !== e.origin ? new THREE.Vector3().fromArray(e.origin.value) : new THREE.Vector3()
    }, this.mUniforms[`f${this.mId}_isVector`] = {
      value: void 0 !== e.isVector ? e.isVector.value : 0
    }, this.mUniforms[`f${this.mId}_colorA`] = {
      value: e.colorA ? new THREE.Color(e.colorA.value) : new THREE.Color()
    }, this.mUniforms[`f${this.mId}_colorB`] = {
      value: e.colorB ? new THREE.Color(e.colorB.value) : new THREE.Color(0, 0, 0)
    };
  }

  generateUniformsCodeFrag() {
    return `\n            // SPE: Depth layer uniforms *************\n            uniform float f${this.mId}_alpha;\n            uniform int f${this.mId}_mode;\n            uniform float f${this.mId}_near;\n            uniform float f${this.mId}_far;\n            uniform float f${this.mId}_isVector;\n            uniform vec3 f${this.mId}_origin;\n            uniform vec3 f${this.mId}_colorA;\n            uniform vec3 f${this.mId}_colorB;\n            // ***************************************\n        `;
  }

  generateShaderCodeFrag(e) {
    return `\n            // SPE: Depth layer frag-shader-code ***************************************************\n            vec3 base${this.mId} = ( f${this.mId}_isVector > 0.5 ) ?  f${this.mId}_origin : cameraPosition;\n            float dist${this.mId} = length( dWorldPosition.xyz - base${this.mId} );\n            float dep${this.mId} = ( dist${this.mId} - f${this.mId}_near ) / ( f${this.mId}_far - f${this.mId}_near );\n            vec3 f${this.mId}_depth =  mix( f${this.mId}_colorB, f${this.mId}_colorA, 1.0 - clamp( dep${this.mId}, 0., 1. ) );\n            float f${this.mId}_calpha = f${this.mId}_alpha / clamp( f${this.mId}_alpha + accumAlpha, 0.001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f${this.mId}_alpha;\n            ${e} = spe_blend( ${e}, f${this.mId}_depth, f${this.mId}_calpha, f${this.mId}_mode );\n            // *************************************************************************************\n        `;
  }

  copyUniforms(e) {
    e instanceof SpeLayerDepth && (this.mUniforms[`f${this.mId}_alpha`] = {
      value: e.uniforms[`f${e.id}_alpha`].value
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: e.uniforms[`f${e.id}_mode`].value
    }, this.mUniforms[`f${this.mId}_near`] = {
      value: e.uniforms[`f${e.id}_near`].value
    }, this.mUniforms[`f${this.mId}_far`] = {
      value: e.uniforms[`f${e.id}_far`].value
    }, this.mUniforms[`f${this.mId}_origin`] = {
      value: e.uniforms[`f${e.id}_origin`].value.clone()
    }, this.mUniforms[`f${this.mId}_isVector`] = {
      value: e.uniforms[`f${e.id}_isVector`].value
    }, this.mUniforms[`f${this.mId}_colorA`] = {
      value: e.uniforms[`f${e.id}_colorA`].value.clone()
    }, this.mUniforms[`f${this.mId}_colorB`] = {
      value: e.uniforms[`f${e.id}_colorB`].value.clone()
    });
  }

}

class SpeLayerNoise extends SpeLayer {
  constructor(e, t) {
    super(e, SPE_LAYER_TYPE_NOISE, t);
  }

  initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_NOISE = '', this.mDefines.SPE_USE_LAYER_TEXTURE = '', this.mDefines.SPE_NOISE_NUM_OCTAVES = '5', this.mDefines.USE_UV = '', this.mUniforms[`f${this.mId}_alpha`] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms[`f${this.mId}_scale`] = {
      value: void 0 !== e.scale ? e.scale.value : 2
    }, this.mUniforms[`f${this.mId}_move`] = {
      value: void 0 !== e.move ? e.move.value : 1
    }, this.mUniforms[`f${this.mId}_distortion`] = {
      value: void 0 !== e.distortion ? new THREE.Vector2().fromArray(e.distortion.value) : new THREE.Vector2(1, 1)
    }, this.mUniforms[`f${this.mId}_fA`] = {
      value: void 0 !== e.fA ? new THREE.Vector2().fromArray(e.fA.value) : new THREE.Vector2(1.7, 9.2)
    }, this.mUniforms[`f${this.mId}_fB`] = {
      value: void 0 !== e.fB ? new THREE.Vector2().fromArray(e.fB.value) : new THREE.Vector2(8.3, 2.8)
    }, this.mUniforms[`f${this.mId}_colorA`] = {
      value: void 0 !== e.colorA ? new THREE.Color(e.colorA.value) : new THREE.Color(0.4, 0.4, 0.4)
    }, this.mUniforms[`f${this.mId}_colorB`] = {
      value: void 0 !== e.colorB ? new THREE.Color(e.colorB.value) : new THREE.Color(0.4, 0.4, 0.4)
    }, this.mUniforms[`f${this.mId}_colorC`] = {
      value: void 0 !== e.colorC ? new THREE.Color(e.colorC.value) : new THREE.Color(1, 1, 1)
    }, this.mUniforms[`f${this.mId}_colorD`] = {
      value: void 0 !== e.colorD ? new THREE.Color(e.colorD.value) : new THREE.Color(1, 1, 1)
    }, this.mUniforms[`f${this.mId}_intA`] = {
      value: void 0 !== e.intA ? e.intA.value : 10
    }, this.mUniforms[`f${this.mId}_intB`] = {
      value: void 0 !== e.intB ? e.intB.value : 10
    }, this.mUniforms[`f${this.mId}_intC`] = {
      value: void 0 !== e.intC ? e.intC.value : 10
    }, this.mUniforms[`f${this.mId}_intD`] = {
      value: void 0 !== e.intD ? e.intD.value : 10
    };
  }

  generateUniformsCodeFrag() {
    return `\n            // SPE: Noise layer uniforms *******************\n            uniform float f${this.mId}_alpha;\n            uniform int f${this.mId}_mode;\n            uniform float f${this.mId}_scale;\n            uniform float f${this.mId}_move;\n            uniform vec2 f${this.mId}_fA;\n            uniform vec2 f${this.mId}_fB;\n            uniform vec2 f${this.mId}_distortion;\n            uniform vec3 f${this.mId}_colorA;\n            uniform vec3 f${this.mId}_colorB;\n            uniform vec3 f${this.mId}_colorC;\n            uniform vec3 f${this.mId}_colorD;\n            uniform float f${this.mId}_intA;\n            uniform float f${this.mId}_intB;\n            uniform float f${this.mId}_intC;\n            uniform float f${this.mId}_intD;\n            // *********************************************\n        `;
  }

  generateShaderCodeFrag(e) {
    return `\n            // SPE: Noise layer frag-shader-code ***************************************************\n            vec2 f${this.mId}_st = vUv * f${this.mId}_scale;\n            vec3 f${this.mId}_color;\n            vec2 f${this.mId}_q = vec2( fbm( f${this.mId}_st ), fbm( f${this.mId}_st + vec2(1.0) ) );\n            vec2 f${this.mId}_r = vec2( fbm( f${this.mId}_st + f${this.mId}_distortion * f${this.mId}_q + f${this.mId}_fA + f${this.mId}_move ),\n                                        fbm( f${this.mId}_st + f${this.mId}_distortion * f${this.mId}_q + f${this.mId}_fB + f${this.mId}_move ) );\n            float f${this.mId}_f = fbm( f${this.mId}_st + f${this.mId}_r );\n            f${this.mId}_color = mix( f${this.mId}_colorA * f${this.mId}_intA, f${this.mId}_colorB * f${this.mId}_intB,\n                         clamp((f${this.mId}_f*f${this.mId}_f)*4.0,0.0,1.0) );\n            f${this.mId}_color = mix( f${this.mId}_color, f${this.mId}_colorC * f${this.mId}_intC,\n                         clamp( length(f${this.mId}_q), 0.0, 1.0 ) );\n            f${this.mId}_color = mix( f${this.mId}_color, f${this.mId}_colorD * f${this.mId}_intD,\n                         clamp( length(f${this.mId}_r.x), 0.0, 1.0 ) );\n            vec3 f${this.mId}_noise = clamp( vec3( f${this.mId}_f * f${this.mId}_color ), 0.0, 1.0 );\n            float f${this.mId}_calpha = f${this.mId}_alpha / clamp( f${this.mId}_alpha + accumAlpha, 0.001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f${this.mId}_alpha;\n            ${e} = spe_blend( ${e}, f${this.mId}_noise, f${this.mId}_calpha, f${this.mId}_mode );\n            // *************************************************************************************\n        `;
  }

  copyUniforms(e) {
    e instanceof SpeLayerNoise && (this.mUniforms[`f${this.mId}_alpha`] = {
      value: e.uniforms[`f${e.id}_alpha`].value
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: e.uniforms[`f${e.id}_mode`].value
    }, this.mUniforms[`f${this.mId}_scale`] = {
      value: e.uniforms[`f${e.id}_scale`].value
    }, this.mUniforms[`f${this.mId}_move`] = {
      value: e.uniforms[`f${e.id}_move`].value
    }, this.mUniforms[`f${this.mId}_distortion`] = {
      value: e.uniforms[`f${e.id}_distortion`].value.clone()
    }, this.mUniforms[`f${this.mId}_fA`] = {
      value: e.uniforms[`f${e.id}_fA`].value.clone()
    }, this.mUniforms[`f${this.mId}_fB`] = {
      value: e.uniforms[`f${e.id}_fB`].value.clone()
    }, this.mUniforms[`f${this.mId}_colorA`] = {
      value: e.uniforms[`f${e.id}_colorA`].value.clone()
    }, this.mUniforms[`f${this.mId}_colorB`] = {
      value: e.uniforms[`f${e.id}_colorB`].value.clone()
    }, this.mUniforms[`f${this.mId}_colorC`] = {
      value: e.uniforms[`f${e.id}_colorC`].value.clone()
    }, this.mUniforms[`f${this.mId}_colorD`] = {
      value: e.uniforms[`f${e.id}_colorD`].value.clone()
    }, this.mUniforms[`f${this.mId}_intA`] = {
      value: e.uniforms[`f${e.id}_intA`].value
    }, this.mUniforms[`f${this.mId}_intB`] = {
      value: e.uniforms[`f${e.id}_intB`].value
    }, this.mUniforms[`f${this.mId}_intC`] = {
      value: e.uniforms[`f${e.id}_intC`].value
    }, this.mUniforms[`f${this.mId}_intD`] = {
      value: e.uniforms[`f${e.id}_intD`].value
    });
  }

}

class SpeLayerFresnel extends SpeLayer {
  constructor(e, t) {
    super(e, SPE_LAYER_TYPE_FRESNEL, t);
  }

  initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_FRESNEL = '', this.mUniforms[`f${this.mId}_alpha`] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms[`f${this.mId}_bias`] = {
      value: void 0 !== e.bias ? e.bias.value : 0.1
    }, this.mUniforms[`f${this.mId}_scale`] = {
      value: void 0 !== e.scale ? e.scale.value : 1
    }, this.mUniforms[`f${this.mId}_intensity`] = {
      value: void 0 !== e.intensity ? e.intensity.value : 2
    }, this.mUniforms[`f${this.mId}_factor`] = {
      value: void 0 !== e.factor ? e.factor.value : 1
    }, this.mUniforms[`f${this.mId}_color`] = {
      value: void 0 !== e.color ? new THREE.Color(e.color.value) : new THREE.Color()
    };
  }

  generateUniformsCodeFrag() {
    return `\n            // SPE: Fresnel layer uniforms *********\n            uniform float f${this.mId}_alpha;\n            uniform int f${this.mId}_mode;\n            uniform float f${this.mId}_bias;\n            uniform float f${this.mId}_scale;\n            uniform float f${this.mId}_intensity;\n            uniform float f${this.mId}_factor;\n            uniform vec3 f${this.mId}_color;\n            // *************************************\n        `;
  }

  generateShaderCodeFrag(e) {
    return `\n            // SPE: Fresnel layer frag-shader-code *************************************************\n            float f${this.mId}_fresnel = f${this.mId}_bias + f${this.mId}_scale * pow( f${this.mId}_factor + dot( normalize( vWorldViewDir ), normalize( vWorldNormal ) ), f${this.mId}_intensity );\n            float f${this.mId}_lalpha = clamp( f${this.mId}_fresnel, 0.0, 1.0 ) * f${this.mId}_alpha;\n            float f${this.mId}_calpha = f${this.mId}_lalpha / clamp( f${this.mId}_lalpha + accumAlpha, 0.001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f${this.mId}_lalpha;\n            ${e} = spe_blend( ${e}, f${this.mId}_color, f${this.mId}_calpha, f${this.mId}_mode );\n            // *************************************************************************************\n        `;
  }

  copyUniforms(e) {
    e instanceof SpeLayerFresnel && (this.mUniforms[`f${this.mId}_alpha`] = {
      value: e.uniforms[`f${e.id}_alpha`].value
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: e.uniforms[`f${e.id}_mode`].value
    }, this.mUniforms[`f${this.mId}_bias`] = {
      value: e.uniforms[`f${e.id}_bias`].value
    }, this.mUniforms[`f${this.mId}_scale`] = {
      value: e.uniforms[`f${e.id}_scale`].value
    }, this.mUniforms[`f${this.mId}_intensity`] = {
      value: e.uniforms[`f${e.id}_intensity`].value
    }, this.mUniforms[`f${this.mId}_factor`] = {
      value: e.uniforms[`f${e.id}_factor`].value
    }, this.mUniforms[`f${this.mId}_color`] = {
      value: e.uniforms[`f${e.id}_color`].value.clone()
    });
  }

}

class SpeLayerGradient extends SpeLayer {
  constructor(e, t) {
    super(e, SPE_LAYER_TYPE_GRADIENT, t);
  }

  initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_GRADIENT = '', this.mDefines.SPE_GRADIENT_MAX_SIZE = '10', this.mDefines.USE_UV = '', this.mUniforms[`f${this.mId}_alpha`] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms[`f${this.mId}_gl_type`] = {
      value: void 0 !== e.gl_type ? e.gl_type.value : 0
    }, this.mUniforms[`f${this.mId}_num`] = {
      value: void 0 !== e.num ? e.num.value : 2
    }, this.mUniforms[`f${this.mId}_smooth`] = {
      value: void 0 !== e.smooth && e.smooth.value
    }, this.mUniforms[`f${this.mId}_colors`] = {
      value: function (e) {
        const t = [];

        for (let i = 0; i < Math.floor(e.length / 4); i++) t.push(new THREE.Vector4(e[4 * i + 0], e[4 * i + 1], e[4 * i + 2], e[4 * i + 3]));

        return t;
      }(void 0 !== e.colors ? e.colors.value : new Array(40).fill())
    }, this.mUniforms[`f${this.mId}_steps`] = {
      value: void 0 !== e.steps ? e.steps.value : new Array(10).fill()
    }, this.mUniforms[`f${this.mId}_offset`] = {
      value: void 0 !== e.offset ? new THREE.Vector2().fromArray(e.offset.value) : new THREE.Vector2(0, 0)
    }, this.mUniforms[`f${this.mId}_morph`] = {
      value: void 0 !== e.morph ? new THREE.Vector2().fromArray(e.morph.value) : new THREE.Vector2(0, 0)
    }, this.mUniforms[`f${this.mId}_angle`] = {
      value: void 0 !== e.angle ? e.angle.value : 0
    };
  }

  generateUniformsCodeFrag() {
    return `\n            // SPE: Gradient layer uniforms ****************\n            uniform float f${this.mId}_alpha;\n            uniform int f${this.mId}_mode;\n            uniform int f${this.mId}_gl_type;\n            uniform int f${this.mId}_num;\n            uniform bool f${this.mId}_smooth;\n            uniform vec4 f${this.mId}_colors[SPE_GRADIENT_MAX_SIZE];\n            uniform float f${this.mId}_steps[SPE_GRADIENT_MAX_SIZE];\n            uniform vec2 f${this.mId}_offset;\n            uniform vec2 f${this.mId}_morph;\n            uniform float f${this.mId}_angle;\n            // *********************************************\n        `;
  }

  generateShaderCodeFrag(e) {
    return `\n            // SPE: Gradient layer frag-shader-code ************************************************\n            vec4 f${this.mId}_color = f${this.mId}_colors[0];\n            vec2 f${this.mId}_m = f${this.mId}_morph / vUv.xy;\n            vec2 f${this.mId}_rot = vec2( 0.5 + f${this.mId}_m.x, f${this.mId}_m.y );\n            vec2 f${this.mId}_dt = vec2(\n                cos( f${this.mId}_angle ) * f${this.mId}_rot.x - sin( f${this.mId}_angle ) * f${this.mId}_rot.y,\n                sin( f${this.mId}_angle ) * f${this.mId}_rot.x + cos( f${this.mId}_angle ) * f${this.mId}_rot.y\n            );\n            vec2 f${this.mId}_pt = ( vUv - 0.5 + f${this.mId}_offset ) / 2.0 + f${this.mId}_dt / 2.0;\n            float f${this.mId}_t = dot( f${this.mId}_pt, f${this.mId}_dt ) / dot( f${this.mId}_dt, f${this.mId}_dt );\n            if ( f${this.mId}_gl_type == 1 ) {\n                f${this.mId}_t = distance (\n                    ( vUv + f${this.mId}_morph ) * 3.0,\n                    ( vUv + f${this.mId}_offset ) + 1.0\n                ) + f${this.mId}_angle;\n            } else if ( f${this.mId}_gl_type == 2 ) {\n                float f${this.mId}_polar = atan(\n                    vUv.x + f${this.mId}_morph.x - 0.5 + f${this.mId}_offset.x,\n                    vUv.y + f${this.mId}_morph.y - 0.5 + f${this.mId}_offset.y\n                ) * -1.0;\n                f${this.mId}_t = fract( ( f${this.mId}_angle / PI / -2.0 ) + 0.5 * ( f${this.mId}_polar / PI ) );\n            }\n            float f${this.mId}_p;\n            for ( int i = 1; i < SPE_GRADIENT_MAX_SIZE; i++ ) {\n                if ( i < f${this.mId}_num ) {\n                    f${this.mId}_p = clamp( ( f${this.mId}_t - f${this.mId}_steps[i-1] ) / ( f${this.mId}_steps[i] - f${this.mId}_steps[i-1] ), 0.0, 1.0 );\n                    f${this.mId}_color = mix( f${this.mId}_color, f${this.mId}_colors[i],\n                        ( f${this.mId}_smooth ) ? smoothstep( 0.0, 1.0, f${this.mId}_p ) : f${this.mId}_p\n                    );\n                } else {\n                    break;\n                }\n            }\n            float f${this.mId}_lalpha = f${this.mId}_alpha * f${this.mId}_color.a;\n            float f${this.mId}_calpha =  f${this.mId}_lalpha / clamp( f${this.mId}_lalpha + accumAlpha, 0.00001, 1.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f${this.mId}_lalpha;\n            ${e} = spe_blend( ${e}, f${this.mId}_color.xyz, f${this.mId}_calpha, f${this.mId}_mode );\n            // *************************************************************************************\n        `;
  }

  getValues() {
    const e = {
      type: this.type
    };
    return e.alpha = this.mUniforms[`f${this.mId}_alpha`].value, e.mode = this.mUniforms[`f${this.mId}_mode`].value, e.gl_type = this.mUniforms[`f${this.mId}_gl_type`].value, e.num = this.mUniforms[`f${this.mId}_num`].value, e.smooth = this.mUniforms[`f${this.mId}_smooth`].value, e.colors = function (e) {
      const t = [];

      for (let i = 0; i < e.length; i++) t.push(e[i].x, e[i].y, e[i].z, e[i].w);

      return t;
    }(this.mUniforms[`f${this.mId}_colors`].value), e.steps = [].concat(this.mUniforms[`f${this.mId}_steps`].value), e.offset = this.mUniforms[`f${this.mId}_offset`].value.toArray(), e.morph = this.mUniforms[`f${this.mId}_morph`].value.toArray(), e.angle = this.mUniforms[`f${this.mId}_angle`].value, e;
  }

  copyUniforms(e) {
    e instanceof SpeLayerGradient && (this.mUniforms[`f${this.mId}_alpha`] = {
      value: e.uniforms[`f${e.id}_alpha`].value
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: e.uniforms[`f${e.id}_mode`].value
    }, this.mUniforms[`f${this.mId}_gl_type`] = {
      value: e.uniforms[`f${e.id}_gl_type`].value
    }, this.mUniforms[`f${this.mId}_num`] = {
      value: e.uniforms[`f${e.id}_num`].value
    }, this.mUniforms[`f${this.mId}_smooth`] = {
      value: e.uniforms[`f${e.id}_smooth`].value
    }, this.mUniforms[`f${this.mId}_colors`] = {
      value: function (e) {
        const t = [];

        for (let i = 0; i < e.length; i++) t.push(e[i].clone());

        return t;
      }(e.uniforms[`f${e.id}_colors`].value)
    }, this.mUniforms[`f${this.mId}_steps`] = {
      value: [].concat(e.uniforms[`f${e.id}_steps`].value)
    }, this.mUniforms[`f${this.mId}_offset`] = {
      value: e.uniforms[`f${e.id}_offset`].value.clone()
    }, this.mUniforms[`f${this.mId}_morph`] = {
      value: e.uniforms[`f${e.id}_morph`].value.clone()
    }, this.mUniforms[`f${this.mId}_angle`] = {
      value: e.uniforms[`f${e.id}_angle`].value
    });
  }

}

class SpeLayerPoints extends SpeLayer {
  constructor(e, t) {
    super(e, SPE_LAYER_TYPE_POINTS, t);
  }

  initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_POINTS = '', this.mUniforms[`f${this.mId}_alpha`] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms[`f${this.mId}_color`] = {
      value: void 0 !== e.color ? new THREE.Color(e.color.value) : new THREE.Color(12237498)
    }, this.mUniforms[`f${this.mId}_useBack`] = {
      value: void 0 === e.useBack || e.useBack.value
    }, this.mUniforms[`f${this.mId}_threshold`] = {
      value: void 0 !== e.threshold ? e.threshold.value : 0.9
    };
  }

  generateUniformsCodeFrag() {
    return `\n            // SPE: Points layer uniforms **************\n            uniform float f${this.mId}_alpha;\n            uniform int f${this.mId}_mode;\n            uniform vec3 f${this.mId}_color;\n            uniform bool f${this.mId}_useBack;\n            uniform float f${this.mId}_threshold;\n            // *****************************************\n        `;
  }

  generateShaderCodeFrag(e) {
    return `\n            // SPE: Points layer frag-shader-code **************************************************\n            float f${this.mId}_dist = length( vBarycentric );\n            float f${this.mId}_edge = aastep( f${this.mId}_threshold, f${this.mId}_dist, 0.00 );\n            float f${this.mId}_factor = gl_FrontFacing ? 1.0 : ( f${this.mId}_useBack ? 0.5 : 0.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f${this.mId}_alpha * f${this.mId}_edge;\n            ${e} = spe_blend( ${e}, f${this.mId}_factor * f${this.mId}_color, f${this.mId}_alpha * f${this.mId}_edge, f${this.mId}_mode );\n            // *************************************************************************************\n        `;
  }

}

class SpeLayerLines extends SpeLayer {
  constructor(e, t) {
    super(e, SPE_LAYER_TYPE_LINES, t);
  }

  initializeUniformsAndDefines(e) {
    this.mDefines.SPE_USE_LAYER_LINES = '', this.mUniforms[`f${this.mId}_alpha`] = {
      value: void 0 !== e.alpha ? e.alpha.value : 1
    }, this.mUniforms[`f${this.mId}_mode`] = {
      value: void 0 !== e.mode ? e.mode.value : SPE_BLENDING_NORMAL
    }, this.mUniforms[`f${this.mId}_color`] = {
      value: void 0 !== e.color ? new THREE.Color(e.color.value) : new THREE.Color(12237498)
    }, this.mUniforms[`f${this.mId}_thickness`] = {
      value: void 0 !== e.thickness ? e.thickness.value : 0.01
    }, this.mUniforms[`f${this.mId}_useBack`] = {
      value: void 0 === e.useBack || e.useBack.value
    }, this.mUniforms[`f${this.mId}_smoothOffset`] = {
      value: void 0 !== e.smoothOffset ? e.smoothOffset.value : 0.03
    };
  }

  generateUniformsCodeFrag() {
    return `\n            // SPE: Lines layer uniforms *************************\n            uniform float f${this.mId}_alpha;\n            uniform int f${this.mId}_mode;\n            uniform vec3 f${this.mId}_color;\n            uniform float f${this.mId}_thickness;\n            uniform bool f${this.mId}_useBack;\n            uniform float f${this.mId}_smoothOffset;\n            // **************************************************\n        `;
  }

  generateShaderCodeFrag(e) {
    return `\n            // SPE: Lines layer frag-shader-code ***************************************************\n            float f${this.mId}_dist = min( vBarycentric.x, min( vBarycentric.y, vBarycentric.z ) );\n            float f${this.mId}_comp_thickness = f${this.mId}_thickness;\n            float f${this.mId}_edge = 1.0 - aastep( f${this.mId}_comp_thickness, f${this.mId}_dist, f${this.mId}_smoothOffset );\n            float f${this.mId}_factor = gl_FrontFacing ? 1.0 : ( f${this.mId}_useBack ? 0.5 : 0.0 );\n            accumAlpha += ( 1.0 - accumAlpha ) * f${this.mId}_alpha * f${this.mId}_edge;\n            ${e} = spe_blend( ${e}, f${this.mId}_factor * f${this.mId}_color, f${this.mId}_alpha * f${this.mId}_edge, f${this.mId}_mode );\n            // *************************************************************************************\n        `;
  }

}

if (!SPE.CreateLayerFromJSON) {
  function preprocess_uniforms(e, t) {
    const i = {},
          r = `f${e}_`;

    for (const _e34 in t) {
      const a = _e34.slice(_e34.indexOf(r) + r.length),
            s = t[_e34].value;

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
            let _e35 = [];

            for (let _t23 = 0; _t23 < s.length; _t23++) _e35 = _e35.concat([s[_t23].x, s[_t23].y]);

            i[a] = {
              name: a,
              value: _e35,
              type: SPE_LAYER_UNIFORM_TYPE_ARRAY_VEC2
            };
          }
        } else if (s instanceof Array && s[0] instanceof Object && 3 === Object.entries(s[0]).length) {
          if (void 0 !== s[0].x && void 0 !== s[0].y && void 0 !== s[0].z) {
            let _e36 = [];

            for (let _t24 = 0; _t24 < s.length; _t24++) _e36 = _e36.concat([s[_t24].x, s[_t24].y, s[_t24].z]);

            i[a] = {
              name: a,
              value: _e36,
              type: SPE_LAYER_UNIFORM_TYPE_ARRAY_VEC3
            };
          }
        } else if (s instanceof Array && s[0] instanceof Object && 4 === Object.entries(s[0]).length) {
          if (void 0 !== s[0].x && void 0 !== s[0].y && void 0 !== s[0].z && void 0 !== s[0].w) {
            let _e37 = [];

            for (let _t25 = 0; _t25 < s.length; _t25++) _e37 = _e37.concat([s[_t25].x, s[_t25].y, s[_t25].z, s[_t25].w]);

            i[a] = {
              name: a,
              value: _e37,
              type: SPE_LAYER_UNIFORM_TYPE_ARRAY_VEC4
            };
          }
        } else if (s instanceof Array && s[0] instanceof THREE.Color) {
          if (void 0 !== s[0].x && void 0 !== s[0].y && void 0 !== s[0].z && void 0 !== s[0].w) {
            let _e38 = [];

            for (let _t26 = 0; _t26 < s.length; _t26++) _e38 = _e38.concat([s[_t26].r, s[_t26].g, s[_t26].b, s[_t26].a]);

            i[a] = {
              name: a,
              value: _e38,
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
        const _e39 = Number(s);

        Number.isInteger(_e39) ? i[a] = {
          name: a,
          value: _e39,
          type: SPE_LAYER_UNIFORM_TYPE_INT
        } : i[a] = {
          name: a,
          value: _e39,
          type: SPE_LAYER_UNIFORM_TYPE_FLOAT
        };
      }
    }

    return i;
  }

  SPE.CreateLayerFromJSON = function (e, t) {
    const i = e.id,
          r = e.type,
          a = preprocess_uniforms(e.id, e.uniforms);
    return SpeLayer.CreateLayer(i, r, a);
  };
}

class SpeLayersList {
  constructor(e) {
    if (this.mHead = null, this.mShader = null, void 0 !== e && Object.keys(e).length > 0) for (let t = 0; t < e.length; t++) this.addLayer(t, e[t].type, e[t].uniforms);else this.addLayer(0, SPE_LAYER_TYPE_COLOR, {}), this.addLayer(1, SPE_LAYER_TYPE_LIGHTING, {});
  }

  get head() {
    return this.mHead;
  }

  set head(e) {
    this.mHead = e;
  }

  get shader() {
    return this.mShader;
  }

  set shader(e) {
    this.mShader = e;
  }

  addLayer(e, t, i) {
    const r = SpeLayer.CreateLayer(e, t, i);

    if (null !== r) {
      if (null === this.mHead) this.mHead = r;else {
        let _e40 = this.mHead;

        for (; _e40.next;) _e40 = _e40.next;

        _e40.next = r;
      }
      return r;
    }

    console.error('SpeLayersList::addLayer >>> couldnt create a layer of type: ', t);
  }

  addLayerBeforeAt(e, t) {
    const i = void 0 !== e.id ? e.id : 100 + Math.floor(999 * Math.random()),
          r = void 0 !== e.type ? e.type : SPE_LAYER_TYPE_COLOR,
          a = 'texture' !== r ? SpeLayer.DictToUniforms(e) : SpeLayerTexture.DictToUniforms(e),
          s = SpeLayer.CreateLayer(i, r, a);
    let n = this.head;
    if (s.next = t, n === t) this.head = s;else {
      for (; n.next !== t;) n = n.next;

      n.next = s;
    }
    return s;
  }

  removeLayer(e) {
    let t = this.head,
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
  }

  getLayer(e) {
    let t = this.head;

    for (; t && t.id != e;) t = t.next;

    return t;
  }

  updateLayerUniform(e, t) {
    const i = this.getLayer(e);
    i && (void 0 !== i.uniforms[t] ? this.mShader.uniforms[t] = {
      value: i.uniforms[t].value
    } : console.error(`SpeLayersList::updateLayerUniform >>> uniform ${t} not found in layer`));
  }

  updateLayerUniformByLayer(e, t) {
    void 0 !== e.uniforms[t] ? this.mShader.uniforms[t] = {
      value: e.uniforms[t].value
    } : console.error(`SpeLayersList::updateLayerUniformByLayer >>> uniform ${t} not found in layer`);
  }

  getUniforms() {
    const e = {};
    let t = this.mHead;

    for (; t;) {
      for (let [i, r] of Object.entries(t.uniforms)) e[i] = r;

      t = t.next;
    }

    return e;
  }

  getDefinesCode() {
    let e = '',
        t = this.mHead;

    for (; t;) {
      for (let [i, r] of Object.entries(t.defines)) e += `#define ${i} ${r}\n`;

      t = t.next;
    }

    return e;
  }

  getVertUniformsCode() {
    let e = '',
        t = this.mHead;

    for (; t;) e += t.generateUniformsCodeVert(), t = t.next;

    return e;
  }

  getFragUniformsCode() {
    let e = '',
        t = this.mHead;

    for (; t;) e += t.generateUniformsCodeFrag(), t = t.next;

    return e;
  }

  getFragShaderCodePreLighting() {
    let e = '',
        t = this.mHead;

    for (; t.type !== SPE_LAYER_TYPE_LIGHTING;) e += t.generateShaderCodeFrag('bef'), t = t.next;

    return e;
  }

  getFragShaderCodeLighting() {
    let e = this.mHead;

    for (; e.type !== SPE_LAYER_TYPE_LIGHTING;) e = e.next;

    return e.generateShaderCodeFrag();
  }

  getFragShaderCodePostLighting() {
    let e = '',
        t = this.mHead;

    for (; t.type !== SPE_LAYER_TYPE_LIGHTING;) t = t.next;

    for (t = t.next; t;) e += t.generateShaderCodeFrag('aft'), t = t.next;

    return e;
  }

}

class SpeBasicMaterial extends THREE.MeshPhongMaterial {
  constructor(e = {}, t = {}) {
    super(t), this.mLayersList = null, Object.keys(e).length > 0 && (this.mLayersList = new SpeLayersList(e), this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this));
  }

  get layersList() {
    return this.mLayersList;
  }

  set layersList(e) {
    this.mLayersList = e, this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this);
  }

  copy(e) {
    if (this.mLayersList) {
      const t = e.layersList;
      e.layersList = void 0, super.copy(e), this.layerList = t.clone();
    } else super.copy(e);

    return this;
  }

}

class SpeLambertMaterial extends THREE.MeshLambertMaterial {
  constructor(e = {}, t = {}) {
    super(t), this.mLayersList = null, Object.keys(e).length > 0 && (this.mLayersList = new SpeLayersList(e), this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this));
  }

  get layersList() {
    return this.mLayersList;
  }

  set layersList(e) {
    this.mLayersList = e, this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this);
  }

  copy(e) {
    if (this.mLayersList) {
      const t = e.layersList;
      e.layersList = void 0, super.copy(e), this.layerList = t.clone();
    } else super.copy(e);

    return this;
  }

}

class SpePhongMaterial extends THREE.MeshPhongMaterial {
  constructor(e = {}, t = {}) {
    super(t), this.mLayersList = null, Object.keys(e).length > 0 && (this.mLayersList = new SpeLayersList(e), this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this));
  }

  get layersList() {
    return this.mLayersList;
  }

  set layersList(e) {
    this.mLayersList = e, this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this);
  }

  copy(e) {
    if (this.mLayersList) {
      const t = e.layersList;
      e.layersList = void 0, super.copy(e), this.layerList = t.clone();
    } else super.copy(e);

    return this;
  }

}

class SpePhysicalMaterial extends THREE.MeshPhysicalMaterial {
  constructor(e = {}, t = {}) {
    void 0 === t.roughness && (t.roughness = 0.3), super(t), this.mLayersList = null, Object.keys(e).length > 0 && (this.mLayersList = new SpeLayersList(e), this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this));
  }

  get layersList() {
    return this.mLayersList;
  }

  set layersList(e) {
    this.mLayersList = e, this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this);
  }

  copy(e) {
    if (this.mLayersList) {
      const t = e.layersList;
      e.layersList = void 0, super.copy(e), this.layerList = t.clone();
    } else super.copy(e);

    return this;
  }

}

class SpeToonMaterial extends THREE.MeshToonMaterial {
  constructor(e = {}, t = {}) {
    super(t), this.mLayersList = null, Object.keys(e).length > 0 && (this.mLayersList = new SpeLayersList(e), this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this));
  }

  get layersList() {
    return this.mLayersList;
  }

  set layersList(e) {
    this.mLayersList = e, this.onBeforeCompile = SpeShaderLib.GetSetupCallback(this);
  }

  copy(e) {
    if (this.mLayersList) {
      const t = e.layersList;
      e.layersList = void 0, super.copy(e), this.layerList = t.clone();
    } else super.copy(e);

    return this;
  }

}

var SpeFontsCache = {},
    SpeCharsCache = {};
const SPE_PATH_FONTS = 'assets/fonts/',
      SPE_DEFAULT_TEXT_FONT = 'roboto_regular',
      SPE_DEFAULT_TEXT_CHARACTER = '.',
      SPE_DEFAULT_TEXT_LOD = 16;

function SpeLoadCharData(e, t, i) {
  if (SpeCharsCache[e]) {
    if (SpeCharsCache[e][i] && SpeCharsCache[e][i].fontFamily === t) return SpeCharsCache[e][i];
  } else SpeCharsCache[e] = {};

  const r = void 0 !== SpeFontsCache[t] ? SpeFontsCache[t] : SpeFontsCache[SPE_DEFAULT_TEXT_FONT],
        a = r.generateShapes(e, 1);
  return SpeCharsCache[e][i] = {
    geometry: new THREE.ShapeBufferGeometry(a, i),
    fontFamily: t,
    resolution: r.data.resolution,
    glyphsHa: r.data.glyphs[e].ha
  }, SpeCharsCache[e][i];
}

class SpeTextChar3D extends SpeIMesh {
  constructor(e, t) {
    const i = void 0 !== e.char ? e.char : SPE_DEFAULT_TEXT_CHARACTER,
          r = void 0 !== e.fontFamily ? e.fontFamily : SPE_DEFAULT_TEXT_FONT,
          a = void 0 !== e.lod ? e.lod : SPE_DEFAULT_TEXT_LOD,
          s = SpeLoadCharData(i, r, a);
    super(s.geometry, t), this.mChar = i, this.mFontFamily = r, this.mLod = a, this.mFontSize = void 0 !== e.fontSize ? e.fontSize : 16, this.mLetterSpacing = void 0 !== e.letterSpacing ? e.letterSpacing : 1, this.mResolution = s.resolution, this.mGlyphsHa = s.glyphsHa, this.mLocalPosition = new THREE.Vector2(), this.mCharSize = this.mGlyphsHa * (this.mFontSize / this.mResolution) * this.mLetterSpacing, this.updateFontSize(this.mFontSize);
  }

  updateFontSize(e) {
    this.mFontSize = e, this.mCharSize = this.mGlyphsHa * (this.mFontSize / this.mResolution) * this.mLetterSpacing, this.scale.set(this.mFontSize, this.mFontSize, 1);
  }

}

class SpeTextContainer extends SpeIMesh {
  constructor(e, t) {
    t.visible = !1, super(e, t);
  }

}

class SpeLoaderManager {
  constructor(e) {
    this.mAssets = e || {}, this.mOnFinishCallback = null, this.mNumAssetsToLoad = 0, this.mNumAssetsLoaded = 0;
  }

  run(e) {
    this.mOnFinishCallback = e;
    const t = void 0 !== this.mAssets.fonts ? this.mAssets.fonts : [],
          i = void 0 !== this.mAssets.images ? this.mAssets.images : [],
          r = void 0 !== this.mAssets.models ? this.mAssets.models : [],
          a = void 0 !== this.mAssets.animations ? this.mAssets.animations : [];
    if (this.mNumAssetsLoaded = 0, this.mNumAssetsToLoad = t.length + i.length + r.length + a.length, this.mNumAssetsToLoad < 1) this.mOnFinishCallback();else {
      const _e41 = this;

      for (let _i19 = 0; _i19 < t.length; _i19++) {
        const _r11 = new THREE.FontLoader(),
              _a4 = t[_i19],
              s = SPE_PATH_FONTS + _a4 + '.json';

        _r11.load(s, function (t) {
          SpeFontsCache[_a4] = t, _e41.mNumAssetsLoaded++, _e41.mNumAssetsLoaded === _e41.mNumAssetsToLoad && _e41.mOnFinishCallback();
        });
      }
    }
  }

}

class SpeRuntime {
  constructor(e, t, i = {}, canvas$1) {
    this.mGltfScene = e, this.mConfig = i, this.mViewportMode = SPE_RUNTIME_VIEWMODE_FULLSCREEN, this.mViewportWidth = window.innerWidth, this.mViewportHeight = window.innerHeight;
    const r = canvas$1;
    this.mRenderer = new THREE.WebGLRenderer({
      antialias: !0,
      alpha: !0,
      canvas: r
    }), this.mRenderer.setPixelRatio(window.devicePixelRatio), this.mRenderer.setSize(this.mViewportWidth, this.mViewportHeight), this.mRenderer.shadowMap.enabled = !0, this.mRenderer.shadowMap.type = THREE.PCFSoftShadowMap, this.mScene = new SpeScene(), this.mSceneOptions = {}, this.mMainCamera = null, this.mOrbitControls = null, this.mPlayHandler = null, this.mRunning = !1, this.mLoaderManager = new SpeLoaderManager(t), this.mLoaderManager.run(this.onRuntimeAssetsLoaded.bind(this));
  }

  run() {
    requestAnimationFrame(this.run.bind(this)), this.onRender();
  }

  onRuntimeAssetsLoaded() {
    console.info('SpeRuntime >>> Finished loading assets for the spline-runtime'), this.loadFromGltf(this.mGltfScene), window.addEventListener('resize', this.onResize.bind(this)), this.mRunning = !0, this.onResize();
  }

  onRender() {
    this.mRunning && (SPE_USES_PREVIEW_IMAGE && (document.querySelector('.spline-preview-image-container').style.display = 'none', SPE_USES_PREVIEW_IMAGE = !1), this.mPlayHandler && !this.mPlayHandler.isEnable && this.mPlayHandler.activate(), this.mOrbitControls && this.mOrbitControls.update(), this.mScene && this.mMainCamera && (this.mRenderer.autoClear = !0, this.mRenderer.render(this.mScene, this.mMainCamera)));
  }

  onResize() {
    this.mRunning && (this.mViewportMode !== SPE_RUNTIME_VIEWMODE_FULLSCREEN && this.mViewportMode !== SPE_RUNTIME_VIEWMODE_FULL_WIDTH || (this.mViewportWidth = window.innerWidth), this.mViewportMode !== SPE_RUNTIME_VIEWMODE_FULLSCREEN && this.mViewportMode !== SPE_RUNTIME_VIEWMODE_FULL_HEIGHT || (this.mViewportHeight = window.innerHeight), this.mMainCamera && ('PerspectiveCamera' === this.mMainCamera.type ? this.mMainCamera.aspect = this.mViewportWidth / this.mViewportHeight : 'OrthographicCamera' === this.mMainCamera.type && (this.mMainCamera.left = -this.mViewportWidth / 2, this.mMainCamera.right = this.mViewportWidth / 2, this.mMainCamera.top = this.mViewportHeight / 2, this.mMainCamera.bottom = -this.mViewportHeight / 2), this.mMainCamera.updateProjectionMatrix()), this.mRenderer && this.mRenderer.setSize(this.mViewportWidth, this.mViewportHeight));
  }

  loadFromGltf(e) {
    const t = new SpeGltfDecoder(e),
          [i, r, a] = t.decode();
    this.mScene = i, this.mMainCamera = r, this.mSceneOptions = a;
    const s = void 0 !== this.mSceneOptions.bgColor ? new THREE.Color().fromArray(this.mSceneOptions.bgColor) : new THREE.Color(1644825),
          n = void 0 !== this.mSceneOptions.bgAlpha ? this.mSceneOptions.bgAlpha : 0;
    this.mRenderer.setClearColor(s, n), this.mViewportMode = this.mSceneOptions.viewMode, this.mViewportWidth = this.mSceneOptions.viewWidth, this.mViewportHeight = this.mSceneOptions.viewHeight, this.mSceneOptions.useOrbitControls && (this.mOrbitControls = new THREE.OrbitControls(this.mMainCamera, this.mRenderer.domElement), this.mOrbitControls.target.fromArray(this.mSceneOptions.orbitTarget), this.mOrbitControls.enableRotate = this.mSceneOptions.cameraRotate, this.mOrbitControls.enablePan = this.mSceneOptions.cameraPan, this.mOrbitControls.enableZoom = this.mSceneOptions.cameraZoom, this.mOrbitControls.enableDamping = this.mSceneOptions.orbitDamped, this.mOrbitControls.rotateSpeed = 1, this.mOrbitControls.panSpeed = 1), 'function' == typeof Interaction && (this.mPlayHandler = new PlayMode(this.mRenderer.domElement, this.mScene, this.mMainCamera));
  }

}

class SpeScene extends THREE.Scene {
  constructor() {
    super();
  }

  traverseEntity(e) {
    function t(i) {
      if (i instanceof SpeMesh3D || i instanceof SpeMesh2D || i instanceof SpeTextContainer || i instanceof THREE.Group || i instanceof SpeEmptyObject || i instanceof SPE.CombinedCamera || i instanceof SPE.LightSpot || i instanceof SPE.LightPoint || i instanceof SPE.LightDirectional) {
        e(i);

        for (let e = 0; e < i.children.length; e++) t(i.children[e]);
      }
    }

    for (let _e42 = 0; _e42 < this.children.length; _e42++) t(this.children[_e42]);
  }

}

class SpeShaderLib {
  static SetupShader(e, t) {
    e.fragmentShader = '\n            /* SPE-Blending helper functions */\n            #define SPE_BLENDING_NORMAL 0\n            #define SPE_BLENDING_MULTIPLY 1\n            #define SPE_BLENDING_SCREEN 2\n            #define SPE_BLENDING_OVERLAY 3\n            vec3 spe_normalBlend( vec3 a, vec3 b, float alpha ) {\n                return mix( a, b, alpha );\n            }\n            vec3 spe_multiplyBlend( vec3 a, vec3 b, float alpha ) {\n                return mix( a, a * b, alpha );\n            }\n            vec3 spe_screenBlend( vec3 a, vec3 b, float alpha ) {\n                vec3 tmp = 1.0 - ( 1.0 - a ) * ( 1.0 - b );\n                return mix( a, tmp, alpha );\n            }\n            vec3 spe_overlayBlend( vec3 a, vec3 b, float alpha ) {\n                vec3 tmp = mix( 1. - 2. * (1. - a) * (1. - b), 2. * a * b, step( a, vec3(.5) ) );\n                return clamp( mix( a, tmp, alpha ), 0.0, 1.0 );\n            }\n            vec3 spe_blend( vec3 a, vec3 b, float alpha, int mode ) {\n                /**/ if ( mode == SPE_BLENDING_NORMAL ) return spe_normalBlend( a, b, alpha );\n                else if ( mode == SPE_BLENDING_MULTIPLY ) return spe_multiplyBlend( a, b, alpha );\n                else if ( mode == SPE_BLENDING_SCREEN ) return spe_screenBlend( a, b, alpha );\n                else if ( mode == SPE_BLENDING_OVERLAY ) return spe_overlayBlend( a, b, alpha );\n                return vec3( 1.0 );\n            }\n            ' + e.fragmentShader, e.vertexShader = '\n            #ifdef SPE_USE_LAYER_FRESNEL\n                varying vec3 vWorldViewDir;\n                varying vec3 vWorldNormal;\n            #endif /* SPE_USE_LAYER_FRESNEL */\n            ' + e.vertexShader, e.fragmentShader = '\n            #ifdef SPE_USE_LAYER_FRESNEL\n                varying vec3 vWorldViewDir;\n                varying vec3 vWorldNormal;\n            #endif /* SPE_USE_LAYER_FRESNEL */\n            ' + e.fragmentShader, e.vertexShader = e.vertexShader.replace('#include <project_vertex>', '\n            #include <project_vertex>\n            #ifdef SPE_USE_LAYER_FRESNEL\n                vec4 fWorldPosition = modelMatrix * vec4( position, 1.0 );\n                vWorldViewDir = isPerspectiveMatrix( projectionMatrix ) ? \n                                    ( fWorldPosition.xyz - cameraPosition ) : vec3( -viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2] );\n                vWorldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\n            #endif /* SPE_USE_LAYER_FRESNEL */\n            '), e.vertexShader = '\n            #if defined( SPE_USE_LAYER_POINTS ) || defined( SPE_USE_LAYER_LINES )\n                attribute vec3 barycentric;\n                varying vec3 vBarycentric;\n            #endif /* SPE_USE_LAYER_POINTS || SPE_USE_LAYER_LINES */\n        ' + e.vertexShader, e.vertexShader = e.vertexShader.replace('#include <begin_vertex>', '\n            #include <begin_vertex>\n            #if defined( SPE_USE_LAYER_POINTS ) || defined( SPE_USE_LAYER_LINES )\n                vBarycentric = barycentric;\n            #endif /* SPE_USE_LAYER_POINTS || SPE_USE_LAYER_LINES */\n            '), e.fragmentShader = '\n            #if defined( SPE_USE_LAYER_POINTS ) || defined( SPE_USE_LAYER_LINES )\n                varying vec3 vBarycentric;\n                float aastep( float threshold, float dist, float smoothOffset ) {\n                    float afwidth = fwidth( dist ) * 0.5;\n                    return smoothstep( threshold - afwidth - smoothOffset, threshold + afwidth + smoothOffset, dist );\n                }\n            #endif /* SPE_USE_LAYER_POINTS || SPE_USE_LAYER_LINES */\n        ' + e.fragmentShader, e.fragmentShader = '\n            #ifdef SPE_USE_LAYER_NOISE\n                float random ( in vec2 _st ) {\n                    return sin(sin(dot(_st.xy, vec2(12.834,77.212))) * 320.3456); // Ale: I am usin sin() instead of fract() to create a different noise.\n                }\n                float noise ( in vec2 _st ) {\n                    vec2 i = floor(_st);\n                    vec2 f = fract(_st);\n                    // Four corners in 2D of a tile\n                    float a = random(i);\n                    float b = random(i + vec2(1.0, 0.0)); // Ale: By incrementing disproportionally these values. You get a geometrical distortion.\n                    float c = random(i + vec2(0.0, 1.0));\n                    float d = random(i + vec2(1.0, 1.0));\n                    vec2 u = f * f * (3.0 - 2.0 * f);\n                    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;\n                }\n                float fbm ( in vec2 _st ) {\n                    float v = 0.0;\n                    float a = 0.5;\n                    vec2 shift = vec2(100.0);\n                    // Rotate to reduce axial bias\n                    mat2 rot = mat2(cos(0.5), sin(0.5),\n                                    -sin(0.5), cos(0.50));\n                    for (int i = 0; i < SPE_NOISE_NUM_OCTAVES; ++i) {\n                        v += a * noise(_st);\n                        _st = rot * _st * 2.0 + shift;\n                        a *= 0.5;\n                    }\n                    return v;\n                }\n            #endif /* SPE_USE_LAYER_NOISE */\n            ' + e.fragmentShader, e.fragmentShader = e.fragmentShader.replace('#include <normal_fragment_begin>', ''), e.fragmentShader = e.fragmentShader.replace('#include <normal_fragment_maps>', ''), t instanceof SpeBasicMaterial && (e.fragmentShader = e.fragmentShader.replace('#include <lights_phong_fragment>\n                #include <lights_fragment_begin>\n                #include <lights_fragment_maps>\n                #include <lights_fragment_end>', ''), e.fragmentShader = e.fragmentShader.replace('vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;', 'vec3 outgoingLight = diffuseColor.rgb;')), t instanceof SpeLambertMaterial && (e.vertexShader = '\n                #ifdef SPE_USE_LAYER_NORMAL\n                    varying vec3 vNormal;\n                #endif /* SPE_USE_LAYER_NORMAL */\n                ' + e.vertexShader, e.vertexShader = e.vertexShader.replace('#include <defaultnormal_vertex>', '\n                #include <defaultnormal_vertex>\n                #ifdef SPE_USE_LAYER_NORMAL\n                    vNormal = normalize( transformedNormal );\n                #endif /* SPE_USE_LAYER_NORMAL */\n                '), e.fragmentShader = '\n                #ifdef SPE_USE_LAYER_NORMAL\n                    varying vec3 vNormal;\n                #endif /* SPE_USE_LAYER_NORMAL */\n                ' + e.fragmentShader, e.fragmentShader = e.fragmentShader.replace('vec4 diffuseColor = vec4( diffuse, opacity );', '\n                #ifdef SPE_USE_LAYER_NORMAL\n                    #include <normal_fragment_begin>\n                    #include <normal_fragment_maps>\n                #endif /* SPE_USE_LAYER_NORMAL */\n                    float accumAlpha = 0.0;\n                    vec3 bef = vec3( 1.0 );\n                    #before\n                    vec4 diffuseColor = vec4( bef, 1.0 );\n                ')), e.vertexShader = e.vertexShader.replace('#include <common>', '\n            #include <common>\n            #ifdef SPE_USE_LAYER_DEPTH\n                varying vec4 dWorldPosition;\n            #endif /* SPE_USE_LAYER_DEPTH */\n            '), e.vertexShader = e.vertexShader.replace('#include <worldpos_vertex>', '\n            #include <worldpos_vertex>\n            #ifdef SPE_USE_LAYER_DEPTH\n                dWorldPosition = modelMatrix * vec4( transformed, 1.0 );\n            #endif\n            '), e.fragmentShader = '\n            #ifdef SPE_USE_LAYER_DEPTH\n                varying vec4 dWorldPosition;\n            #endif /* SPE_USE_LAYER_DEPTH */\n            ' + e.fragmentShader, e.fragmentShader = e.fragmentShader.replace('vec4 diffuseColor = vec4( diffuse, opacity );', '\n                #include <normal_fragment_begin>\n                #include <normal_fragment_maps>\n                float accumAlpha = 0.0;\n                vec3 bef = vec3( 1.0 );\n                #before\n                vec4 diffuseColor = vec4( bef, 1.0 );\n            '), e.fragmentShader = e.fragmentShader.replace('gl_FragColor = vec4( outgoingLight, diffuseColor.a );', '\n                #lighting\n                vec3 aft = outgoingLight;\n                #after\n                gl_FragColor = vec4( aft, accumAlpha * opacity );\n            ');
  }

  static GetSetupCallback(material) {
    let string = '';

    for (let e = 0; e < material.uuid.length; ++e) {
      const t = material.uuid[e];
      '-' != t && (string += t);
    }

    return eval(`shader => {\n            // Hashing required as in issue https://github.com/mrdoob/three.js/issues/13192\n            const __hash___${string} = true;\n            const layersList = material.layersList;\n            // Inject base functionality into both vertex and fragment shaders\n            SpeShaderLib.SetupShader( shader, material );\n            shader.uniforms = THREE.UniformsUtils.merge( [ shader.uniforms, layersList.getUniforms() ] );\n            for ( let [key, uniform] of Object.entries( shader.uniforms ) ) {\n                if ( uniform.value && uniform.value.isTexture ) {\n                    uniform.value.needsUpdate = true;\n                }\n            }\n            // Inject shader-code in fragment shader previous to the lighting step\n            shader.fragmentShader = shader.fragmentShader.replace( '#before', layersList.getFragShaderCodePreLighting() );\n            // Inject shader-code in fragment shader for the lighting step\n            shader.fragmentShader = shader.fragmentShader.replace( '#lighting', layersList.getFragShaderCodeLighting() );\n            // Inject shader-code in fragment shader after the lighting step\n            shader.fragmentShader = shader.fragmentShader.replace( '#after', layersList.getFragShaderCodePostLighting() );\n            // Inject uniforms variables in both vertex and fragment shaders\n            shader.vertexShader = layersList.getVertUniformsCode() + shader.vertexShader;\n            shader.fragmentShader = layersList.getFragUniformsCode() + shader.fragmentShader;\n            // Inject defines in both vertex and fragment shaders\n            shader.vertexShader = layersList.getDefinesCode() + shader.vertexShader;\n            shader.fragmentShader = layersList.getDefinesCode() + shader.fragmentShader;\n            // Link the shader to its related layers-list\n            layersList.shader = shader;\n        }`);
  }

}

class SpeStack {
  constructor() {
    this.elements = [];
  }

  push(e) {
    this.elements.push(e);
  }

  pop() {
    return 0 === this.elements.length ? null : this.elements.pop();
  }

  top() {
    return this.elements[this.elements.length - 1];
  }

  empty() {
    return 0 === this.elements.length;
  }

}

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
  const r = new SPE.Raycaster();
  let a,
      s = {};

  function n(e) {
    r.setFromCamera(m(e), i);
    const t = s[InteractionEvent.TYPE.MOUSE_DOWN];

    for (let _e43 = 0, i = t.length; _e43 < i; ++_e43) if (r.intersectObject(t[_e43].object, !1).length > 0) {
      t[_e43].interactionEvent.dispatch();

      break;
    }
  }

  function o(e) {
    r.setFromCamera(m(e), i);
    const t = s[InteractionEvent.TYPE.MOUSE_UP];

    for (let _e44 = 0, i = t.length; _e44 < i; ++_e44) if (r.intersectObject(t[_e44].object, !1).length > 0) {
      t[_e44].interactionEvent.dispatch();

      break;
    }
  }

  function h(e) {
    r.setFromCamera(m(e), i);
    const t = s[InteractionEvent.TYPE.MOUSE_HOVER].find(e => r.intersectObject(e.object, !1).length > 0),
          n = void 0 !== t ? t.interactionEvent : void 0;
    a !== n && (void 0 !== a && a.dispatchReverse(), void 0 !== t && n.dispatch()), a = n;
  }

  function l(e) {
    const t = -1 * (e.pageX - window.innerWidth / 2),
          i = 1 * (e.pageY - window.innerHeight / 2);
    s[InteractionEvent.TYPE.LOOK_AT].forEach(e => {
      e.object.interaction.lookAt(t, i);
    });
  }

  function c(e) {
    s[InteractionEvent.TYPE.KEY_DOWN].forEach(t => {
      t.interactionEvent.key === e.key && t.interactionEvent.dispatch();
    });
  }

  function d(e) {
    s[InteractionEvent.TYPE.KEY_UP].forEach(t => {
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

    for (const e in InteractionEvent.TYPE) s[InteractionEvent.TYPE[e]] = [];

    t.traverseEntity(function (e) {
      if (void 0 !== e.interaction) {
        e.interaction.start();
        const t = e.interaction.events;

        for (let i = 0, r = t.length; i < r; ++i) s[t[i].type].push({
          interactionEvent: t[i],
          object: e
        });
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
  }, this.update = (i = new THREE.Vector3(), r = new THREE.Quaternion().setFromUnitVectors(e.up, new THREE.Vector3(0, 1, 0)), a = r.clone().invert(), s = new THREE.Vector3(), n = new THREE.Quaternion(), o = 2 * Math.PI, function () {
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
  newState: function (e) {
    const t = new InteractionState();
    return t.name = e, t.update(this.object), this.selectedState = this.states.length, this.states.push(t), t;
  },
  addState: function (e, t) {
    this.states.splice(t, 0, e);
  },
  removeState: function (e) {
    this.selectedState === e && (this.selectedState = void 0), this.states.splice(e, 1);
  },
  selectState: function (e) {
    void 0 !== e && this.states[e].execute(this.object), this.selectedState = e;
  },
  getEventType: function (e) {
    return this.events.find(t => t.type === e);
  },
  hasEventType: function (e, t) {
    return e === InteractionEvent.TYPE.KEY_DOWN || e === InteractionEvent.TYPE.KEY_UP ? void 0 !== t && this.events.some(i => i.type === e && i.key === t) : this.events.some(t => t.type === e);
  },
  newEvent: function () {
    const e = InteractionEvent.ORDER.find(e => !1 === this.hasEventType(e)),
          t = new InteractionEvent(e);
    return this.events.push(t), t;
  },
  addEvent: function (e, t) {
    this.events.splice(t, 0, e);
    const i = this.events[t].targets;

    for (let _e45 = 0, _t27 = i.length; _e45 < _t27; ++_e45) void 0 !== i[_e45].object && Interaction.targets.add(i[_e45]);
  },
  removeEvent: function (e) {
    const t = this.events[e].targets;

    for (let _e46 = 0, i = t.length; _e46 < i; ++_e46) void 0 !== t[_e46].object && Interaction.targets.delete(t[_e46]);

    this.events.splice(e, 1);
  },
  copy: function (e) {
    this.selectedState = e.selectedState;

    for (let t = 0, i = e.states.length; t < i; ++t) this.addState(e.states[t].clone(), t);

    for (let t = 0, i = e.events.length; t < i; ++t) {
      this.addEvent(e.events[t].clone(), t);
      const _i20 = e.events[t].targets;

      for (let r = 0, a = _i20.length; r < a; ++r) {
        const _a5 = _i20[r].clone();

        _i20[r].object === e.object ? (_a5.object = this.object, _a5.state = this.states[e.states.indexOf(_i20[r].state)]) : (_a5.object = _i20[r].object, _a5.state = _i20[r].state), this.events[t].addTarget(_a5, r);
      }
    }

    return this;
  },
  clone: function (e) {
    return new Interaction(e).copy(this);
  },
  toJSON: function (e) {
    const t = {};

    if (t.uuid = this.uuid, void 0 !== this.selectedState && (t.selectedState = this.selectedState), this.states.length > 0) {
      t.states = [];

      for (let a = 0, s = this.states.length; a < s; ++a) t.states.push((i = e.interactionStates, r = this.states[a], void 0 === i[r.uuid] && (i[r.uuid] = r.toJSON(e)), r.uuid));
    }

    var i, r;

    if (this.events.length > 0) {
      t.events = [];

      for (let _i21 = 0, _r12 = this.events.length; _i21 < _r12; ++_i21) t.events.push(this.events[_i21].toJSON(e));
    }

    return t;
  },
  fromJSON: function (e, t, i) {
    if (this.uuid = e.uuid, this.selectedState = e.selectedState, this.states = [], this.events = [], void 0 !== e.states) for (let _t28 = 0, r = e.states.length; _t28 < r; ++_t28) this.states.push(i[e.states[_t28]]);
    if (void 0 !== e.events) for (let r = 0, a = e.events.length; r < a; ++r) this.events.push(new InteractionEvent().fromJSON(e.events[r], t, i));
    return this;
  },
  start: function () {
    if (void 0 !== this.animation && (this.animation.pause(), this.animation = void 0, this._removeBackLayer()), this.states.length > 1) {
      this.states[0].execute(this.object), this.currentState = this.states[0], this.prevState = void 0;
      const e = this.getEventType(InteractionEvent.TYPE.START);
      void 0 !== e && e.targets.length > 0 && this.play(e.targets[0]);
    }
  },
  end: function () {
    void 0 !== this.animation && (this.animation.pause(), this.animation = void 0, this._removeBackLayer()), this.states.length > 1 && this.states[this.selectedState].execute(this.object), this.currentState = void 0, this.prevState = void 0;
  },
  lookAt: function (e, t) {
    const i = new THREE.Vector3(e, t, -600);
    this.object.lookAt(i);
  },
  play: function (e) {
    void 0 !== e.state && this.animate(e.state, e);
  },
  reverse: function (e) {
    this.animate(this.prevState, e);
  },
  _removeBackLayer: function () {
    if (void 0 !== this.object.material) {
      const e = this.object.material;
      if (Array.isArray(e)) for (let t = 0, i = e.length; t < i; ++t) {
        const _i22 = e[t].layersList;
        let r = _i22.head;

        for (; r;) if (r.backLayer) {
          delete r.backLayer;
          const _e47 = r.next;
          _i22.removeLayer(r.id), r = _e47;
        } else r.isBack ? (delete r.isBack, r = r.next) : r = r.next;
      } else {
        const t = e.layersList;
        let i = t.head;

        for (; i;) for (; i;) if (i.backLayer) {
          delete i.backLayer;
          const _e48 = i.next;
          t.removeLayer(i.id), i = _e48;
        } else i.isBack ? (delete i.isBack, i = i.next) : i = i.next;
      }
    }
  },
  getTimingFunction: function (e, t, i) {
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
        return `cubicBezier( ${t[0]}, ${t[1]}, ${t[2]}, ${t[3]} )`;

      case InteractionTarget.EASING.SPRING:
        return `spring( ${i.mass}, ${i.stiffness}, ${i.damping}, ${i.velocity} )`;
    }
  },
  animate: function (e, t) {
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
    }), this.animation.finished.then(() => {
      this._removeBackLayer();
    }), this.animateMatrix(e), this.animateGeometry(e), this.animateMaterial(e), this.animateCamera(e);
  },
  animateMatrix: function (e) {
    if (!1 === this.object.position.equals(e.position)) {
      const _t29 = this.object.position.clone(),
            _i23 = {
        t: 0
      };

      this.animation.add({
        targets: _i23,
        t: 1,
        update: () => {
          this.object.position.lerpVectors(_t29, e.position, _i23.t);
        }
      }, 0);
    }

    if (!1 === this.object.scale.equals(e.scale)) {
      const _t30 = this.object.scale.clone(),
            _i24 = {
        t: 0
      };

      this.animation.add({
        targets: _i24,
        t: 1,
        update: () => {
          this.object.scale.lerpVectors(_t30, e.scale, _i24.t);
        }
      }, 0);
    }

    if (!1 === this.object.rotation.equals(e.rotation)) {
      const _t31 = this.object.quaternion.clone(),
            _i25 = {
        t: 0
      },
            _r13 = {
        x: this.object.rotation.x - e.rotation.x,
        y: this.object.rotation.y - e.rotation.y,
        z: this.object.rotation.z - e.rotation.z
      },
            _a6 = e.rotation.clone(),
            _s3 = 0.01 * THREE.Math.DEG2RAD,
            _n = 359.99 * THREE.Math.DEG2RAD;

      _r13.x === 2 * Math.PI ? 0 === _a6.x ? _a6.x = _s3 : _a6.x === 2 * Math.PI && (_a6.x = _n) : _r13.x === 2 * -Math.PI && (0 === _a6.x ? _a6.x = -_s3 : _a6.x === 2 * Math.PI && (_a6.x = -_n)), _r13.y === 2 * Math.PI ? 0 === _a6.y ? _a6.y = _s3 : _a6.y === 2 * Math.PI && (_a6.y = _n) : _r13.y === 2 * -Math.PI && (0 === _a6.y ? _a6.y = -_s3 : _a6.y === 2 * Math.PI && (_a6.y = -_n)), _r13.z === 2 * Math.PI ? 0 === _a6.z ? _a6.z = _s3 : _a6.z === 2 * Math.PI && (_a6.z = _n) : _r13.z === 2 * -Math.PI && (0 === _a6.z ? _a6.z = -_s3 : _a6.z === 2 * Math.PI && (_a6.z = -_n));

      const _o = new THREE.Quaternion().setFromEuler(_a6);

      this.animation.add({
        targets: _i25,
        t: 1,
        update: () => {
          SPE.Math.slerp(_t31, _o, this.object.quaternion, _i25.t);
        }
      }, 0);
    }

    const t = new THREE.Vector3(),
          i = new THREE.Quaternion(),
          r = new THREE.Vector3(),
          a = new THREE.Vector3(),
          s = new THREE.Quaternion(),
          n = new THREE.Vector3(),
          o = new THREE.Vector3(),
          h = new THREE.Quaternion(),
          l = new THREE.Vector3();

    if (this.object.hiddenMatrix.decompose(t, i, r), e.hiddenMatrix.decompose(a, s, n), !1 === this.object.hiddenMatrix.equals(e.hiddenMatrix)) {
      const _e49 = {
        t: 0
      };
      this.animation.add({
        targets: _e49,
        t: 1,
        update: () => {
          THREE.Quaternion.slerp(i, s, h, _e49.t), o.lerpVectors(t, a, _e49.t), l.lerpVectors(r, n, _e49.t), this.object.hiddenMatrix.compose(o, h, l);
        }
      }, 0);
    }
  },
  animateGeometry: function (e) {
    if (void 0 === this.object.geometry) return;
    const t = this.object.geometry.userData.parameters;
    e.geometry.width === t.width && e.geometry.height === t.height && e.geometry.depth === t.depth || this.animation.add({
      targets: this.object.geometry.userData.parameters,
      width: e.geometry.width,
      height: e.geometry.height,
      depth: e.geometry.depth,
      update: () => {
        const e = SPE[this.object.geometry.userData.type].buildFromGeometry(this.object.geometry, {
          width: t.width,
          height: t.height,
          depth: t.depth
        });
        this.object.updateGeometry(e);
      }
    }, 0);
  },
  animateMaterial: function (e) {
    if (void 0 === this.object.material) return;

    const t = (e, t, i, r) => {
      const a = e.layersList;

      for (let _e50 = 0, s = (r = void 0 !== r ? r : t.paramNames).length; _e50 < s; ++_e50) {
        const _s4 = r[_e50],
              n = `f${t.id}_${_s4}`,
              o = `f${i.id}_${_s4}`,
              h = t.uniforms[n],
              l = i.uniforms[o];
        'mode' !== _s4 && 'boolean' != typeof h.value ? 'number' != typeof h.value ? h.value instanceof THREE.Vector2 ? !1 === h.value.equals(l.value) && this.animation.add({
          targets: h.value,
          x: l.value.x,
          y: l.value.y,
          update: function () {
            a.updateLayerUniformByLayer(t, n);
          }
        }, 0) : h.value instanceof THREE.Vector3 ? !1 === h.value.equals(l.value) && this.animation.add({
          targets: h.value,
          x: l.value.x,
          y: l.value.y,
          z: l.value.z,
          update: function () {
            a.updateLayerUniformByLayer(t, n);
          }
        }, 0) : h.value instanceof THREE.Color && !1 === h.value.equals(l.value) && this.animation.add({
          targets: h.value,
          r: l.value.r,
          g: l.value.g,
          b: l.value.b,
          update: function () {
            a.updateLayerUniformByLayer(t, n);
          }
        }, 0) : h.value !== l.value && this.animation.add({
          targets: h,
          value: l.value,
          update: function () {
            a.updateLayerUniformByLayer(t, n);
          }
        }, 0) : h.value !== l.value && (h.value = l.value, a.updateLayerUniformByLayer(t, n));
      }

      if (t.backLayer) {
        const _e51 = t.backLayer.id,
              _i26 = `f${_e51}_alpha`,
              _r14 = t.backLayer.uniforms[_i26];
        this.animation.add({
          targets: _r14,
          value: 0,
          update: function () {
            a.updateLayerUniform(_e51, _i26);
          }
        }, 0);
      }
    },
          i = (e, t, i) => {
      const r = e.layersList;

      if (void 0 === t.backLayer) {
        const _a7 = i.getValues();

        _a7.alpha = 0, t.backLayer = r.addLayerBeforeAt(_a7, t), t.backLayer.isBack = !0, e.dispose();
      }

      const a = `f${t.id}_alpha`,
            s = `f${t.backLayer.id}_alpha`,
            n = t.uniforms[a],
            o = t.backLayer.uniforms[s];
      this.animation.add({
        targets: n,
        value: 0,
        update: function () {
          r.updateLayerUniformByLayer(t, a);
        }
      }, 0).add({
        targets: o,
        value: i.uniforms[`f${i.id}_alpha`].value,
        update: function () {
          r.updateLayerUniformByLayer(t.backLayer, s);
        }
      }, 0);
    },
          r = (e, i, r) => {
      const a = e.layersList,
            s = `f${i.id}_mat`,
            n = `f${i.id}_texture`,
            o = i.uniforms[n].value,
            h = r.uniforms[`f${r.id}_texture`].value,
            l = i.uniforms[`f${i.id}_crop`],
            c = r.uniforms[`f${r.id}_crop`];

      if (l.value !== c.value && (l.value = c.value, a.updateLayerUniformByLayer(i, `f${i.id}_crop`)), o.wrapS === h.wrapS && o.wrapT === h.wrapT || (o.wrapS = h.wrapS, o.wrapT = h.wrapT, o.needsUpdate = !0, a.updateLayerUniform(i, n)), !1 === o.matrix.equals(h.matrix)) {
        const _e52 = {
          repeatX: o.repeat.x,
          repeatY: o.repeat.y,
          offsetX: o.offset.x,
          offsetY: o.offset.y
        };
        this.animation.add({
          targets: _e52,
          repeatX: h.repeat.x,
          repeatY: h.repeat.y,
          offsetX: h.offset.x,
          offsetY: h.offset.y,
          update: function () {
            o.repeat.set(_e52.repeatX, _e52.repeatY), o.offset.set(_e52.offsetX, _e52.offsetY), o.updateMatrix(), a.updateLayerUniformByLayer(i, s);
          }
        }, 0);
      }

      t(e, i, r, ['alpha', 'mode']);
    },
          a = (e, i, r) => {
      const a = e.layersList,
            s = i.uniforms[`f${i.id}_num`],
            n = r.uniforms[`f${r.id}_num`],
            o = `f${i.id}_steps`,
            h = `f${r.id}_steps`,
            l = i.uniforms[o],
            c = r.uniforms[h],
            d = `f${i.id}_colors`,
            m = `f${r.id}_colors`,
            u = i.uniforms[d],
            p = r.uniforms[m];

      if (s.value <= n.value) {
        const _e53 = u.value[s.value - 1];

        for (let t = s.value; t < n.value; ++t) l.value[t] = 1, a.updateLayerUniformByLayer(i, d), u.value[t].set(_e53.x, _e53.y, _e53.z, _e53.w), a.updateLayerUniformByLayer(i, o);

        s.value !== n.value && (s.value = n.value, a.updateLayerUniformByLayer(i, `f${i.id}_num`));

        for (let _e54 = 0; _e54 < n.value; ++_e54) {
          const t = u.value[_e54],
                _r15 = p.value[_e54];

          if (l.value[_e54] !== c.value[_e54] || !1 === t.equals(_r15)) {
            const _s5 = {
              value: l.value[_e54]
            };
            this.animation.add({
              targets: [_s5, t],
              value: c.value[_e54],
              x: _r15.x,
              y: _r15.y,
              z: _r15.z,
              w: _r15.w,
              update: function () {
                l.value[_e54] = _s5.value, a.updateLayerUniformByLayer(i, o), a.updateLayerUniformByLayer(i, d);
              }
            }, 0);
          }
        }
      } else {
        const _e55 = [];

        for (let _t32 = 0; _t32 < n.value; ++_t32) {
          const _r16 = u.value[_t32],
                _s6 = p.value[_t32];
          l.value[_t32] === c.value[_t32] && !1 !== _r16.equals(_s6) || _e55.push(new Promise(e => {
            const n = {
              value: l.value[_t32]
            };
            this.animation.add({
              targets: [n, _r16],
              value: c.value[_t32],
              x: _s6.x,
              y: _s6.y,
              z: _s6.z,
              w: _s6.w,
              update: function () {
                l.value[_t32] = n.value, a.updateLayerUniformByLayer(i, o), a.updateLayerUniformByLayer(i, d);
              },
              complete: function () {
                e(_t32);
              }
            }, 0);
          }));
        }

        const t = p.value[n.value - 1];

        for (let _r17 = n.value; _r17 < s.value; ++_r17) {
          const _s7 = u.value[_r17];
          l.value[_r17] === c.value[_r17] && !1 !== _s7.equals(t) || _e55.push(new Promise(e => {
            const n = {
              value: l.value[_r17]
            };
            this.animation.add({
              targets: [n, _s7],
              value: 1,
              x: t.x,
              y: t.y,
              z: t.z,
              w: t.w,
              update: function () {
                l.value[_r17] = n.value, a.updateLayerUniformByLayer(i, o), a.updateLayerUniformByLayer(i, d);
              },
              complete: function () {
                e(_r17);
              }
            }, 0);
          }));
        }

        Promise.all(_e55).then(function () {
          s.value = n.value, a.updateLayerUniformByLayer(i, `f${i.id}_num`);
        });
      }

      t(e, i, r, ['alpha', 'mode', 'gl_type', 'smooth', 'offset', 'morph', 'angle']);
    };

    function s(e, s) {
      let n = e.layersList.head,
          o = 0;

      for (; n;) {
        if (!0 === n.isBack) {
          n = n.next;
          continue;
        }

        const h = s.layersList[o++];

        if ('texture' === n.type) {
          const t = n.uniforms[`f${n.id}_texture`].value,
                a = h.uniforms[`f${h.id}_texture`].value;
          t.image === a.image ? r(e, n, h) : i(e, n, h);
        } else 'gradient' === n.type ? n.uniforms[`f${n.id}_gl_type`].value === h.uniforms[`f${h.id}_gl_type`].value ? a(e, n, h) : i(e, n, h) : t(e, n, h);

        n = n.next;
      }
    }

    if (Array.isArray(this.object.material)) for (let _t33 = 0, _i27 = this.object.material.length; _t33 < _i27; ++_t33) s(this.object.material[_t33], e.material[_t33]);else s(this.object.material, e.material);
  },
  animateCamera: function (e) {
    if (!this.object.isCamera) return;
    const t = this.object.isPerspectiveCamera ? e.camera.zoomPersp : e.camera.zoomOrtho;
    this.object.zoom !== t && this.animation.add({
      targets: this.object,
      zoom: t,
      update: () => {
        this.object.updateProjectionMatrix();
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

  newTarget: function (e) {
    const t = new InteractionTarget();
    return t.object = e, e.interaction.states.length > 0 && (t.state = e.interaction.states[e.interaction.states.length - 1]), this.targets.push(t), Interaction.targets.add(t), t;
  },
  addTarget: function (e, t) {
    this.targets.splice(t, 0, e), Interaction.targets.add(e);
  },
  removeTarget: function (e) {
    Interaction.targets.delete(this.targets[e]), this.targets.splice(e, 1);
  },
  dispatchReverse: function () {
    for (let e = 0, t = this.targets.length; e < t; ++e) {
      const _t34 = this.targets[e];
      void 0 !== _t34.state && _t34.object.interaction.reverse(_t34);
    }
  },
  dispatch: function () {
    for (let e = 0, t = this.targets.length; e < t; ++e) {
      const _t35 = this.targets[e];
      void 0 !== _t35.state && _t35.object.interaction.play(_t35);
    }
  },
  copy: function (e) {
    return this.ui.isCollapsed = e.ui.isCollapsed, this;
  },
  clone: function () {
    return new InteractionEvent(this.type, this.key).copy(this);
  },
  toJSON: function (e) {
    const t = {
      type: this._type,
      key: this.key,
      ui: {
        isCollapsed: this.ui.isCollapsed
      }
    };

    if (this.targets.length > 0) {
      t.targets = [];

      for (let i = 0, r = this.targets.length; i < r; ++i) t.targets.push(this.targets[i].toJSON(e));
    }

    return t;
  },
  fromJSON: function (e, t, i) {
    if (this._type = e.type, this.key = e.key, this.targets = [], this.ui = {
      isCollapsed: e.ui.isCollapsed
    }, void 0 !== e.targets) for (let r = 0, a = e.targets.length; r < a; ++r) this.addTarget(new InteractionTarget().fromJSON(e.targets[r], t, i));
    return this;
  }
}, InteractionState.prototype = {
  constructor: InteractionState,
  update: function (e) {
    this.updateMatrix(e), this.updateGeometry(e), this.updateMaterial(e), this.updateCamera(e);
  },

  updateCamera(e) {
    e.isCamera && (this.camera = {
      zoomPersp: e.perspCamera.zoom,
      zoomOrtho: e.orthoCamera.zoom
    });
  },

  updateMatrix: function (e) {
    this.position.copy(e.position), this.rotation.copy(e.rotation), this.scale.copy(e.scale), this.hiddenMatrix.copy(e.hiddenMatrix);
  },
  updateGeometry: function (e) {
    if (void 0 !== e.geometry) {
      const t = e.geometry.userData.parameters;
      this.geometry = {
        width: t.width,
        height: t.height,
        depth: t.depth
      };
    }
  },
  updateMaterial: function (e) {
    if (void 0 !== e.material) if (!0 === Array.isArray(e.material)) {
      this.material = [];

      for (let t = 0, i = e.material.length; t < i; ++t) {
        const _i28 = [];
        let r = e.material[t].layersList.head;

        for (; r;) _i28.push(r.clone()), r = r.next;

        this.material.push({
          layersList: _i28
        });
      }
    } else {
      const t = [];
      let i = e.material.layersList.head;

      for (; i;) t.push(i.clone()), i = i.next;

      this.material = {
        layersList: t
      };
    }
  },
  execute: function (e) {
    if (e.position.copy(this.position), e.rotation.copy(this.rotation), e.scale.copy(this.scale), e.hiddenMatrix.copy(this.hiddenMatrix), void 0 !== e.geometry) {
      const t = e.geometry.userData.parameters;

      if (this.geometry.width !== t.width || this.geometry.height !== t.height || this.geometry.depth !== t.depth) {
        const _t36 = SPE[e.geometry.userData.type].buildFromGeometry(e.geometry, {
          width: this.geometry.width,
          height: this.geometry.height,
          depth: this.geometry.depth
        });

        e.updateGeometry(_t36);
      }
    }

    if (void 0 !== e.material) {
      const t = e.material;
      if (!0 === Array.isArray(t)) for (let _e56 = 0, i = this.material.length; _e56 < i; ++_e56) {
        let _i29 = t[_e56].layersList.head;
        const r = this.material[_e56].layersList;
        let a = 0;

        for (; _i29;) _i29.copy(r[a++]), _i29 = _i29.next;

        t[_e56].dispose();
      } else {
        let _e57 = t.layersList.head;
        const i = this.material.layersList;
        let r = 0;

        for (; _e57;) _e57.copyUniforms(i[r++]), _e57 = _e57.next;

        t.dispose();
      }
    }

    this.camera && (e.zoom = e.isPerspectiveCamera ? this.camera.zoomPersp : this.camera.zoomOrtho, e.updateProjectionMatrix());
  },
  copy: function (e) {
    if (this.name = e.name, this.position.copy(e.position), this.rotation.copy(e.rotation), this.scale.copy(e.scale), this.hiddenMatrix.copy(e.hiddenMatrix), void 0 !== e.geometry && (this.geometry = {
      width: e.geometry.width,
      height: e.geometry.height,
      depth: e.geometry.depth
    }), void 0 !== e.material) if (!0 === Array.isArray(e.material)) {
      this.material = [];

      for (let t = 0, i = e.material.length; t < i; ++t) this.material.push({
        layersList: e.material[t].layersList.map(e => e.clone())
      });
    } else this.material = {
      layersList: e.material.layersList.map(e => e.clone())
    };
    return void 0 !== e.camera && (this.camera = {
      zoomPersp: e.camera.zoomPersp,
      zoomOrtho: e.camera.zoomOrtho
    }), this;
  },
  clone: function () {
    return new InteractionState().copy(this);
  },
  toJSON: function (e) {
    const t = {
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

      for (let i = 0, r = this.material.length; i < r; ++i) t.material.push({
        layersList: this.material[i].layersList.map(t => t.toJSON(e))
      });
    } else t.material = {
      layersList: this.material.layersList.map(t => t.toJSON(e))
    };
    return void 0 !== this.camera && (t.camera = {
      zoomPersp: this.camera.zoomPersp,
      zoomOrtho: this.camera.zoomOrtho
    }), t;
  },
  fromJSON: function (e, t) {
    if (this.uuid = e.uuid, this.name = e.name, this.position.fromArray(e.position), void 0 !== e.rotation) this.rotation.fromArray(e.rotation);else {
      const _t37 = new THREE.Quaternion().fromArray(e.quaternion);

      this.rotation.setFromQuaternion(_t37);
    }
    if (this.scale.fromArray(e.scale), this.hiddenMatrix.fromArray(e.hiddenMatrix), void 0 !== e.geometry && (this.geometry = {
      width: e.geometry.width,
      height: e.geometry.height,
      depth: e.geometry.depth
    }), void 0 !== e.material) if (!0 === Array.isArray(e.material)) {
      this.material = [];

      for (let i = 0, r = e.material.length; i < r; ++i) this.material.push({
        layersList: e.material[i].layersList.map(e => SPE.CreateLayerFromJSON(e, t))
      });
    } else this.material = {
      layersList: e.material.layersList.map(e => SPE.CreateLayerFromJSON(e, t))
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
      const t = e.interaction.states;
      this.state = t.length > 0 ? t[t.length - 1] : void 0;
    } else this.state = void 0;

    this._object = e;
  },

  copy: function (e) {
    return this.easing = e.easing, this.duration = e.duration, this.delay = e.delay, this.cubicControls = [...e.cubicControls], this.springParameters = {
      mass: e.springParameters.mass,
      stiffness: e.springParameters.stiffness,
      damping: e.springParameters.damping,
      velocity: e.springParameters.velocity
    }, this.repeat = e.repeat, this.cycle = e.cycle, this.rewind = e.rewind, this;
  },
  clone: function () {
    return new InteractionTarget().copy(this);
  },
  toJSON: function () {
    const e = {
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
  fromJSON: function (e, t, i) {
    return void 0 !== e.object && (this._object = t[e.object]), void 0 !== e.state && (this.state = i[e.state]), this.easing = e.easing, this.duration = e.duration, this.delay = e.delay, this.cubicControls = [...e.cubicControls], this.repeat = e.repeat, this.cycle = e.cycle, this.rewind = void 0 !== e.rewind && e.rewind, void 0 !== e.springControls ? (this.springParameters.mass = e.springControls[0], this.springParameters.stiffness = e.springControls[1], this.springParameters.damping = e.springControls[2], this.springParameters.velocity = e.springControls[3]) : (this.springParameters.mass = e.springParameters.mass, this.springParameters.stiffness = e.springParameters.stiffness, this.springParameters.damping = e.springParameters.damping, this.springParameters.velocity = e.springParameters.velocity), this;
  }
}, InteractionStatesManager.prototype = {
  updateObject() {
    void 0 !== this.i.selectedState && this.i.states[this.i.selectedState].updateMatrix(this.i.object);
  },

  updateCamera() {
    void 0 !== this.i.selectedState && (this.i.states[this.i.selectedState].updateMatrix(this.i.object), this.i.states[this.i.selectedState].updateCamera(this.i.object));
  },

  updateGeometry() {
    void 0 !== this.i.selectedState && (this.i.states[this.i.selectedState].updateMatrix(this.i.object), this.i.states[this.i.selectedState].updateGeometry(this.i.object));
  },

  updateSceneGraph(e) {
    const t = new THREE.Matrix4(),
          i = new THREE.Matrix4();
    e.updateWorldMatrix(!0, !1);

    for (let r = 0, a = this.i.states.length; r < a; ++r) {
      const _a8 = this.i.states[r];
      t.copy(e.matrixWorld).invert(), null !== this.i.object.parent && (this.i.object.parent.updateWorldMatrix(!0, !1), t.multiply(this.i.object.parent.matrixWorld)), !0 === this.i.object.isLight ? (i.compose(_a8.position, _a8.quaternion, _a8.scale), i.premultiply(t), i.decompose(_a8.position, _a8.quaternion, _a8.scale)) : _a8.hiddenMatrix.premultiply(t);
    }
  },

  updateMaterialLayer(e) {
    if (void 0 === this.i.selectedState) return;
    const t = this.i.object.userData.selectedMaterial;
    (void 0 !== t ? this.i.states[this.i.selectedState].material[t] : this.i.states[this.i.selectedState].material).layersList.find(t => t.id === e.id).copy(e);
  },

  pushMaterialLayer(e) {
    if (0 !== this.i.states.length) if (!0 === Array.isArray(this.i.object.material)) {
      const t = this.i.object.userData.selectedMaterial;

      for (let i = 0, r = this.i.states.length; i < r; ++i) {
        const _r18 = e.clone();

        this.i.selectedState !== i && (_r18.uniforms[`f${_r18.id}_alpha`].value = 0), this.i.states[i].material[t].layersList.push(_r18);
      }
    } else for (let t = 0, i = this.i.states.length; t < i; ++t) {
      const _i30 = e.clone();

      this.i.selectedState !== t && (_i30.uniforms[`f${_i30.id}_alpha`].value = 0), this.i.states[t].material.layersList.push(_i30);
    }
  },

  popMaterialLayer() {
    if (0 !== this.i.states.length) if (!0 === Array.isArray(this.i.object.material)) {
      const e = this.i.object.userData.selectedMaterial;

      for (let t = 0, i = this.i.states.length; t < i; ++t) this.i.states[t].material[e].layersList.pop();
    } else for (let e = 0, t = this.i.states.length; e < t; ++e) this.i.states[e].material.layersList.pop();
  },

  removeMaterialLayer(e) {
    if (0 === this.i.states.length) return;
    let t = [];
    if (!0 === Array.isArray(this.i.object.material)) for (let i = 0, r = this.i.states.length; i < r; ++i) {
      const _r19 = this.i.object.userData.selectedMaterial,
            a = this.i.states[i].material[_r19];
      t.push({
        layer: a.layersList[e]
      }), a.layersList.splice(e, 1);
    } else for (let i = 0, r = this.i.states.length; i < r; ++i) {
      const _r20 = this.i.states[i].material;
      t.push({
        layer: _r20.layersList[e]
      }), _r20.layersList.splice(e, 1);
    }
    return {
      states: t,
      pos: e
    };
  },

  restoreMaterialLayerRemoved(e) {
    if (0 !== this.i.states.length) if (!0 === Array.isArray(this.i.object.material)) for (let t = 0, i = this.i.states.length; t < i; ++t) {
      const _i31 = this.i.object.userData.selectedMaterial;

      this.i.states[t].material[_i31].layersList.splice(e.pos, 0, e.states[t].layer);
    } else for (let t = 0, i = this.i.states.length; t < i; ++t) {
      this.i.states[t].material.layersList.splice(e.pos, 0, e.states[t].layer);
    }
  },

  changeMaterialLayer(e) {
    if (0 === this.i.states.length) return;
    let t,
        i = [];

    if (!0 === Array.isArray(this.i.object.material)) {
      const r = this.i.object.userData.selectedMaterial,
            a = this.i.states[this.i.selectedState].material[r].layersList;

      for (let _i32 = 0, _r21 = a.length; _i32 < _r21; ++_i32) if (a[_i32].id === e.id) {
        t = _i32;
        break;
      }

      for (let _a9 = 0, s = this.i.states.length; _a9 < s; ++_a9) {
        const _s8 = this.i.states[_a9].material[r].layersList[t],
              n = e.clone();
        this.i.selectedState !== _a9 && (n.uniforms[`f${n.id}_alpha`].value = _s8.uniforms[`f${_s8.id}_alpha`].value), this.i.states[_a9].material[r].layersList[t] = n, i.push({
          layer: _s8
        });
      }
    } else {
      const r = this.i.states[this.i.selectedState].material.layersList;

      for (let _i33 = 0, a = r.length; _i33 < a; ++_i33) if (r[_i33].id === e.id) {
        t = _i33;
        break;
      }

      for (let _r22 = 0, a = this.i.states.length; _r22 < a; ++_r22) {
        const _a10 = this.i.states[_r22].material.layersList[t],
              s = e.clone();
        this.i.selectedState !== _r22 && (s.uniforms[`f${s.id}_alpha`].value = _a10.uniforms[`f${_a10.id}_alpha`].value), this.i.states[_r22].material.layersList[t] = s, i.push({
          layer: _a10
        });
      }
    }

    return {
      states: i,
      pos: t
    };
  },

  restoreMaterialLayerChanged(e) {
    if (0 !== this.i.states.length) if (!0 === Array.isArray(this.i.object.material)) {
      const t = this.i.object.userData.selectedMaterial;

      for (let i = 0, r = this.i.states.length; i < r; ++i) this.i.states[i].material[t].layersList[e.pos] = e.states[i].layer;
    } else for (let t = 0, i = this.i.states.length; t < i; ++t) this.i.states[t].material.layersList[e.pos] = e.states[t].layer;
  },

  moveMaterialLayer(e, t) {
    if (0 !== this.i.states.length) if (!0 === Array.isArray(this.i.object.material)) {
      const i = this.i.object.userData.selectedMaterial;

      for (let r = 0, a = this.i.states.length; r < a; ++r) {
        const _a11 = this.i.states[r].material[i].layersList,
              s = _a11[e];
        _a11[e] = _a11[t], _a11[t] = s;
      }
    } else for (let i = 0, r = this.i.states.length; i < r; ++i) {
      const _r23 = this.i.states[i].material.layersList,
            a = _r23[e];
      _r23[e] = _r23[t], _r23[t] = a;
    }
  },

  restoreMaterialLayerMoved(e, t) {
    this.moveMaterialLayer(e, t);
  },

  setMaterialLayers(e) {
    const t = [];

    if (Array.isArray(this.i.object.material)) {
      const i = this.i.object.userData.selectedMaterial;

      for (let r = 0, a = this.i.states.length; r < a; ++r) {
        const _a12 = this.i.states[r].material[i];
        t.push({
          layersList: _a12.layersList
        });
        let s = e.head;

        for (_a12.layersList = []; void 0 !== s;) _a12.layersList.push(s.clone()), s = s.next;
      }
    } else for (let i = 0, r = this.i.states.length; i < r; ++i) {
      const _r24 = this.i.states[i].material;
      t.push({
        layersList: _r24.layersList
      });
      let a = e.head;

      for (_r24.layersList = []; void 0 !== a;) _r24.layersList.push(a.clone()), a = a.next;
    }

    return {
      states: t
    };
  },

  restoreMaterialLayersSet(e) {
    if (Array.isArray(this.i.object.material)) {
      const t = object.userData.selectedMaterial;

      for (let i = 0, r = this.i.states.length; i < r; ++i) this.i.states[i].material[t].layersList = e.states[i].layersList;
    } else for (let t = 0, i = this.i.states.length; t < i; ++t) this.i.states[t].material.layersList = e.states[t].layersList;
  }

}, SPE.ConeGeometry = new function () {
  this.build = function ({
    width: e = 100,
    height: t = e,
    depth: i = e,
    radialSegments: r = 32,
    heightSegments: a = 32,
    openEnded: s,
    thetaStart: n,
    thetaLength: o = 360,
    cornerRadiusTop: h = 0,
    cornerRadiusBottom: l = 0,
    cornerSegments: c = 8
  }) {
    let d;
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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    depth: r = e.userData.parameters.depth,
    radialSegments: a = e.userData.parameters.radialSegments,
    heightSegments: s = e.userData.parameters.heightSegments,
    openEnded: n = e.userData.parameters.openEnded,
    thetaStart: o = e.userData.parameters.thetaStart,
    thetaLength: h = e.userData.parameters.thetaLength,
    cornerRadiusTop: l = e.userData.parameters.cornerRadiusTop,
    cornerRadiusBottom: c = e.userData.parameters.cornerRadiusBottom,
    cornerSegments: d = e.userData.parameters.cornerSegments
  }) {
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
  this.build = function ({
    width: e = 100,
    height: t = e,
    depth: i = e,
    widthSegments: r = 1,
    heightSegments: a = 1,
    depthSegments: s = 1,
    cornerRadius: n = 0,
    cornerSegments: o = 8
  }) {
    let h;
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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    depth: r = e.userData.parameters.depth,
    widthSegments: a = e.userData.parameters.widthSegments,
    heightSegments: s = e.userData.parameters.heightSegments,
    depthSegments: n = e.userData.parameters.depthSegments,
    cornerRadius: o = e.userData.parameters.cornerRadius,
    cornerSegments: h = e.userData.parameters.cornerSegments
  }) {
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
const pi2 = Math.PI / 2;

class RoundedBoxBufferGeometry extends THREE.BufferGeometry {
  constructor(e = 1, t = 1, i = 1, r = 1, a = 1, s = 1, n = 0, o = 4) {
    const h = THREE.Vector3;
    super(), this.type = 'BoxBufferGeometry', this.parameters = {
      width: e,
      height: t,
      depth: i,
      widthSegments: r,
      heightSegments: a,
      depthSegments: s,
      cornerRadius: n,
      cornerSegments: o
    };
    const l = this;
    r = Math.floor(r), a = Math.floor(a), s = Math.floor(s), o = Math.floor(o), n = Math.min(n, e / 2, t / 2, i / 2);
    const c = [],
          d = [],
          m = [],
          u = [];
    let p = 0,
        f = 0;

    function E(e, t, i, r, a, s, o, E, g, y, v) {
      const _ = (s - 2 * n) / g,
            S = (o - 2 * n) / y,
            x = s / 2 - n,
            b = o / 2 - n,
            T = E / 2,
            R = g + 1,
            w = y + 1;

      let M = 0,
          L = 0;
      const I = new h();

      for (let _s9 = 0; _s9 < w; _s9++) {
        const n = _s9 * S - b;

        for (let _o2 = 0; _o2 < R; _o2++) {
          const h = _o2 * _ - x;
          I[e] = h * r, I[t] = n * a, I[i] = T, d.push(I.x, I.y, I.z), I[e] = 0, I[t] = 0, I[i] = E > 0 ? 1 : -1, m.push(I.x, I.y, I.z), u.push(_o2 / g), u.push(1 - _s9 / y), M += 1;
        }
      }

      for (let _e58 = 0; _e58 < y; _e58++) for (let _t38 = 0; _t38 < g; _t38++) {
        const _i34 = p + _t38 + R * _e58,
              _r25 = p + _t38 + R * (_e58 + 1),
              _a13 = p + (_t38 + 1) + R * (_e58 + 1),
              _s10 = p + (_t38 + 1) + R * _e58;

        c.push(_i34, _r25, _s10), c.push(_r25, _a13, _s10), L += 6;
      }

      l.addGroup(f, L, v), f += L, p += M;
    }

    function g(e, t, i, r, a, s, E, g, y, v, _) {
      const S = (E - 2 * n) / v,
            x = E / 2 - n,
            b = g / 2 - n,
            T = y / 2,
            R = v + 1;
      let w = 0,
          M = 0;
      const L = new h(),
            I = new h();

      for (let h = 0; h < o + 1; h++) {
        const l = h / o * pi2,
              c = Math.sin(l) * n,
              p = (1 - Math.cos(l)) * n,
              f = Math.sin(l),
              _E = Math.cos(l);

        L[t] = (b + c) * a, L[i] = (T - p) * s, I[e] = 0, I[t] = f * Math.sign(L[t]), I[i] = _E * Math.sign(L[i]);

        for (let _t39 = 0; _t39 < R; _t39++) {
          const _i35 = _t39 * S - x;

          L[e] = _i35 * r, d.push(L.x, L.y, L.z), m.push(I.x, I.y, I.z), u.push(_t39 / v), u.push(0), w += 1;
        }
      }

      for (let _e59 = 0; _e59 < o; _e59++) for (let _t40 = 0; _t40 < v; _t40++) {
        const _i36 = p + _t40 + R * _e59,
              _r26 = p + _t40 + R * (_e59 + 1),
              _a14 = p + (_t40 + 1) + R * (_e59 + 1),
              _s11 = p + (_t40 + 1) + R * _e59;

        c.push(_i36, _r26, _s11), c.push(_r26, _a14, _s11), M += 6;
      }

      l.addGroup(f, M, _), f += M, p += w;
    }

    function y(r, a, s) {
      const l = new h(),
            f = new h(e / 2, t / 2, i / 2);
      f.subScalar(n);
      const E = [],
            g = r * a * s > 0 ? function (e, t, i) {
        c.push(e, t, i);
      } : function (e, t, i) {
        c.push(e, i, t);
      };

      for (let e = 0; e <= o; e++) {
        const t = [],
              i = pi2 * (1 - e / o),
              h = Math.cos(i),
              c = Math.sin(i);
        let _g = 0;

        for (var y = 0; y <= e; y++) {
          const _i37 = Math.cos(_g),
                o = Math.sin(_g);

          l.x = h * _i37, l.y = c, l.z = h * o;

          const _E2 = f.clone().addScaledVector(l, n);

          d.push(r * _E2.x, a * _E2.y, s * _E2.z), m.push(r * l.x, a * l.y, s * l.z), u.push(0, 0), t.push(p++), _g += pi2 / e;
        }

        E.push(t);
      }

      const v = E.length - 1;

      for (let e = 0; e < v; e++) {
        const t = E[e],
              i = E[e + 1],
              _r27 = t.length - 1;

        g(t[0], i[1], i[0]);

        for (let _e60 = 1; _e60 <= _r27; _e60++) g(t[_e60 - 1], t[_e60], i[_e60]), g(t[_e60], i[_e60 + 1], i[_e60]);
      }
    }

    E('z', 'y', 'x', -1, -1, i, t, e, s, a, 0), E('z', 'y', 'x', 1, -1, i, t, -e, s, a, 1), E('x', 'z', 'y', 1, 1, e, i, t, r, s, 2), E('x', 'z', 'y', 1, -1, e, i, -t, r, s, 3), E('x', 'y', 'z', 1, -1, e, t, i, r, a, 4), E('x', 'y', 'z', -1, -1, e, t, -i, r, a, 5), n > 0 && (g('z', 'y', 'x', -1, -1, 1, i, t, e, s, 0), g('z', 'y', 'x', 1, -1, -1, i, t, e, s, 1), g('z', 'y', 'x', -1, 1, -1, i, t, e, s, 1), g('z', 'y', 'x', 1, 1, 1, i, t, e, s, 0), g('x', 'y', 'z', -1, -1, -1, e, t, i, r, 0), g('x', 'y', 'z', 1, -1, 1, e, t, i, r, 1), g('x', 'y', 'z', -1, 1, 1, e, t, i, r, 0), g('x', 'y', 'z', 1, 1, -1, e, t, i, r, 1), g('y', 'x', 'z', -1, -1, 1, t, e, i, a, 0), g('y', 'x', 'z', 1, -1, -1, t, e, i, a, 1), g('y', 'x', 'z', 1, 1, 1, t, e, i, a, 1), g('y', 'x', 'z', -1, 1, -1, t, e, i, a, 0), y(1, 1, 1), y(-1, 1, 1), y(1, -1, 1), y(-1, -1, 1), y(1, 1, -1), y(-1, 1, -1), y(1, -1, -1), y(-1, -1, -1)), this.setIndex(c), this.setAttribute('position', new THREE.Float32BufferAttribute(d, 3)), this.setAttribute('normal', new THREE.Float32BufferAttribute(m, 3)), this.setAttribute('uv', new THREE.Float32BufferAttribute(u, 2));
  }

}

function flip(e) {
  return new THREE.Vector2(e.y, -e.x);
}

SPE.CylinderGeometry = new function () {
  this.build = function ({
    width: e = 100,
    height: t = e,
    depth: i = e,
    radiusTop: r = e / 2,
    radiusBottom: a = e / 2,
    radialSegments: s = 64,
    heightSegments: n = 1,
    openEnded: o = !1,
    thetaStart: h,
    thetaLength: l = 360,
    cornerRadius: c = 0,
    cornerSegments: d = 8,
    hollow: m = 0
  }) {
    e = Math.abs(e), t = Math.abs(t), i = Math.abs(i);
    let u = e / 2;
    if (r === a) r = u, a = u;else if (r > a) a = a * u / (r = u);else r = r * u / a, a = u;
    let p = new RoundedCylinderBufferGeometry(r, a, t, s, n, o, h, l * Math.PI / 180, c, c, d, m);
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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    depth: r = e.userData.parameters.depth,
    radiusTop: a = e.userData.parameters.radiusTop,
    radiusBottom: s = e.userData.parameters.radiusBottom,
    radialSegments: n = e.userData.parameters.radialSegments,
    heightSegments: o = e.userData.parameters.heightSegments,
    openEnded: h = e.userData.parameters.openEnded,
    thetaStart: l = e.userData.parameters.thetaStart,
    thetaLength: c = e.userData.parameters.thetaLength,
    cornerRadius: d = e.userData.parameters.cornerRadius,
    cornerSegments: m = e.userData.parameters.cornerSegments,
    hollow: u = e.userData.parameters.hollow
  }) {
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

class RoundedCylinderBufferGeometry extends THREE.BufferGeometry {
  constructor(e, t, i, r, a, s, n, o, h, l, c, d, m = !1) {
    super(), this.type = 'RoundedCylinderBufferGeometry', this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: i,
      radialSegments: r,
      heightSegments: a,
      openEnded: s,
      thetaStart: n,
      thetaLength: o,
      cornerRadius: h,
      cornerRadius: l,
      cornerSegments: c,
      hollow: d
    };
    var u = THREE.Vector2,
        p = THREE.Vector3,
        f = THREE.Float32BufferAttribute;
    e = void 0 !== e ? e : 1, t = void 0 !== t ? t : 1, i = i || 1, r = Math.floor(r) || 8, a = Math.floor(a) || 1, s = void 0 !== s && s, n = void 0 !== n ? n : 0, o = void 0 !== o ? o : 2 * Math.PI, s && (h = 0, l = 0);
    const E = [],
          g = [],
          y = [],
          v = [];
    let _ = 0;
    const S = i / 2;
    const x = new p(),
          b = new p();
    m && 0 == e && (e = h), m && 0 == t && (t = l);
    let T = new u(e, S),
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
    const D = T.clone();
    D.x -= H;
    const O = Math.PI - P.angle(),
          $ = P.angle(),
          U = Math.tan($ / 2),
          B = Math.tan(O / 2),
          G = U + B,
          N = d ? G : B,
          z = d ? G : U;

    if (h = Math.min(h, (e - A) / N, P.length() / G), l = Math.min(l, (t - C) / z, P.length() / G), h > 0) {
      const _e61 = h / U;

      w = T.clone().sub(new u(_e61, h)), d && ((L = w.clone()).x -= H - G * h), T.sub(P.clone().setLength(_e61));
    }

    if (l > 0) {
      const _e62 = l / B;

      M = R.clone().sub(new u(_e62, -l)), R.add(P.clone().setLength(_e62)), d && ((I = M.clone()).x -= H - G * l, D.sub(P.clone().setLength(_e62)));
    }

    const V = (P = T.clone().sub(R)).length() < 0.5,
          j = [];

    for (let _c = 0; _c <= r; _c++) {
      const _m = [],
            _p = _c / r,
            _f = _p * o + n,
            _E3 = new u(Math.sin(_f), Math.cos(_f));

      I ? (F(_m, _p, _E3, O, l, I, -1, !0), F(_m, _p, _E3, $, l, M, -1, !1)) : M ? (Y(_m, _E3, M.x, 0, -1), F(_m, _p, _E3, $, l, M, -1, !1)) : s || Y(_m, _E3, t, C, -1);

      const _S = flip(P).normalize();

      if (two2three(_S, _E3, x), !V) for (let _e63 = 0; _e63 <= a; _e63++) {
        const _t41 = _e63 / a,
              _r28 = P.clone().multiplyScalar(_t41).add(R);

        two2three(_r28, _E3, b), g.push(b.x, b.y, b.z), y.push(x.x, x.y, x.z), v.push(_p, 0.5 + b.y / i), _m.push(_++);
      }

      if (L ? (F(_m, _p, _E3, O, h, w, 1, !1), F(_m, _p, _E3, $, h, L, 1, !0)) : w ? (F(_m, _p, _E3, O, h, w, 1, !1), Y(_m, _E3, w.x, 0, 1)) : s || Y(_m, _E3, e, A, 1), d && !V) {
        const _e64 = flip(P).multiplyScalar(-1).normalize();

        two2three(_e64, _E3, x);

        for (let _e65 = 0; _e65 <= a; _e65++) {
          const _t42 = _e65 / a,
                _r29 = P.clone().multiplyScalar(-_t42).add(D);

          two2three(_r29, _E3, b), g.push(b.x, b.y, b.z), y.push(x.x, x.y, x.z), v.push(_p, 0.5 + b.y / i), _m.push(_++);
        }
      }

      d && !s && _m.push(_m[0]), j.push(_m);
    }

    for (let _e66 = 0; _e66 < j.length - 1; _e66++) for (let _t43 = 0; _t43 < j[0].length - 1; _t43++) {
      if (s && d && _t43 == a) continue;
      const _i38 = j[_e66][_t43],
            _r30 = j[_e66 + 1][_t43],
            _n2 = j[_e66 + 1][_t43 + 1],
            _o3 = j[_e66][_t43 + 1],
            _h = g[3 * _n2 + 0],
            _l = g[3 * _n2 + 2];
      E.push(_i38, _r30, _o3), 0 == _h && 0 == _l || E.push(_r30, _n2, _o3);
    }

    function F(e, t, r, a, s, n, o, h) {
      for (let l = 0; l < c + 1; l++) {
        const d = l / c;
        let m = o < 0 ? d : 1 - d;
        h && (m -= 1), m *= a;
        const p = new u(Math.sin(m), Math.cos(m) * o),
              f = p.clone().multiplyScalar(s).add(n);
        two2three(f, r, b), g.push(b.x, b.y, b.z), two2three(p, r, x), y.push(x.x, x.y, x.z), v.push(t, 0.5 + b.y / i), e.push(_++);
      }
    }

    function Y(e, t, i, r, a) {
      const s = new p(),
            n = new u(),
            o = [i, r];
      a < 0 && o.reverse();

      for (const _i39 of o) n.set(_i39, S * a), two2three(n, t, s), g.push(s.x, s.y, s.z), y.push(0, a, 0), v.push(0.5, 0.5), e.push(_++);
    }

    function W(i, r, a) {
      const s = new u(Math.sin(a), Math.cos(a)),
            n = new u(-Math.cos(a), Math.sin(a)),
            o = new p(),
            h = i < 0 ? (e, t, i) => E.push(e, t, i) : (e, t, i) => E.push(e, i, t),
            l = new u((e + t + A + C) / 4, 0);
      two2three(l, s, o), g.push(o.x, o.y, o.z), y.push(n.x, 0, n.y), v.push(0.5, 0.5);
      const c = _++;

      for (const e of r) {
        const t = g.slice(3 * e, 3 * e + 3);
        g.push(...t), y.push(n.x, 0, n.y);

        const _i40 = v.slice(2 * e, 2 * e + 2);

        v.push(..._i40), _++;
      }

      for (let e = c + 1; e < _ - 1; e++) h(c, e, e + 1);

      h(c, _ - 1, c + 1);
    }

    o < 2 * Math.PI && (W(-1, j[0], n), W(1, j[j.length - 1], n + o)), this.setIndex(E), this.setAttribute('position', new f(g, 3)), this.setAttribute('normal', new f(y, 3)), this.setAttribute('uv', new f(v, 2));
  }

}

function two2three(e, t, i) {
  i.x = e.x * t.x, i.y = e.y, i.z = e.x * t.y;
}

function offset3d(e, t, i, r, a, s) {
  const n = t.clone().sub(e),
        o = i.clone().sub(e),
        h = n.angleTo(o);

  if (n.normalize(), o.normalize(), r === a) {
    const _t44 = n.add(o).normalize();

    s.copy(e).addScaledVector(_t44, r / Math.sin(h / 2));
  } else {
    const _t45 = n.angleTo(o);

    s.copy(e), s.addScaledVector(n, a / Math.sin(_t45)), s.addScaledVector(o, r / Math.sin(_t45));
  }
}

function projectOntoLine(e, t, i) {
  const r = e.clone().sub(t),
        a = i.clone().sub(t);
  return r.projectOnVector(a), r.add(t);
}
SPE.CylinderGeometry.RoundedCylinderBufferGeometry = RoundedCylinderBufferGeometry, SPE.EllipseGeometry = new function () {
  this.build = function ({
    width: e = 100,
    height: t = e,
    spikes: i = 128,
    angle: r = 360,
    innerRadius: a = 0
  }) {
    let s;

    if (a > 0) {
      let n = 0.5 * e,
          o = a * n / 100;
      (s = new THREE.RingBufferGeometry(o, n, i, 1, Math.PI / 2, r * Math.PI / 180)).scale(1, Math.abs(t) / Math.abs(e), 1);
    } else {
      let n = 0.5 * (e = Math.abs(e)),
          o = 0.5 * (t = Math.abs(t)),
          h = 0,
          l = 0,
          c = r * Math.PI / 180 * ( -1 ) / i,
          d = new THREE.Shape();

      for (let _e67 = 0; _e67 <= i; _e67++) {
        let _t46 = c * _e67,
            _i41 = h + Math.sin(_t46) * n,
            _r31 = l + Math.cos(_t46) * o;

        d.lineTo(_i41, _r31);
      }

      360 === r && (d.curves = d.curves.slice(1)), s = new THREE.ShapeBufferGeometry(d), SPE.Math.fixUvs(s, e, t);
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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    spikes: r = e.userData.parameters.spikes,
    angle: a = e.userData.parameters.angle,
    innerRadius: s = e.userData.parameters.innerRadius
  }) {
    return this.build({
      width: t,
      height: i,
      spikes: r,
      angle: a,
      innerRadius: s
    });
  };
}(), SPE.IcosahedronGeometry = new function () {
  this.build = function ({
    width: e = 100,
    height: t = e,
    depth: i = e,
    detail: r = 0
  }) {
    e = Math.abs(e), t = Math.abs(t), i = Math.abs(i);
    let a = new THREE.IcosahedronBufferGeometry(0.5 * e, r);
    return a.scale(1, t / e, i / e), a.userData = {
      type: 'IcosahedronGeometry',
      parameters: {
        width: e,
        height: t,
        depth: i,
        detail: r
      }
    }, a;
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    depth: r = e.userData.parameters.depth,
    detail: a = e.userData.parameters.detail
  }) {
    return this.build({
      width: t,
      height: i,
      depth: r,
      detail: a
    });
  };
}(), SPE.PolygonGeometry = new function () {
  this.build = function ({
    width: e = 100,
    height: t = e,
    spikes: i = 5,
    cornerRadius: r = 0,
    extrudeDepth: a = 0,
    extrudeBevelSize: s = 0,
    extrudeBevelSegments: n = 1
  }) {
    let o,
        h = 0.5 * (e = Math.abs(e)),
        l = 0.5 * (t = Math.abs(t)),
        c = 2 * Math.PI / i,
        d = new THREE.Shape();

    for (let _e68 = 0; _e68 <= i; _e68++) {
      let _t47 = c * _e68,
          _i42 = 0 + Math.sin(_t47) * h,
          _r32 = 0 + Math.cos(_t47) * l;

      d.lineTo(_i42, _r32);
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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    spikes: r = e.userData.parameters.spikes,
    cornerRadius: a = e.userData.parameters.cornerRadius,
    extrudeDepth: s = e.userData.parameters.extrudeDepth,
    extrudeBevelSize: n = e.userData.parameters.extrudeBevelSize,
    extrudeBevelSegments: o = e.userData.parameters.extrudeBevelSegments
  }) {
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
  this.build = function ({
    width: e = 100,
    height: t = e,
    depth: i = e,
    radialSegments: r = 4,
    heightSegments: a = 1,
    openEnded: s,
    cornerRadius: n = 0,
    cornerSegments: o = 8
  }) {
    e = Math.abs(e), t = Math.abs(t), i = Math.abs(i);
    let h = new RoundedPyramidBufferGeometry(0.5 * e, t, r, a, s, n, o);
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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    depth: r = e.userData.parameters.depth,
    radialSegments: a = e.userData.parameters.radialSegments,
    heightSegments: s = e.userData.parameters.heightSegments,
    openEnded: n = e.userData.parameters.openEnded,
    cornerRadius: o = e.userData.parameters.cornerRadius,
    cornerSegments: h = e.userData.parameters.cornerSegments
  }) {
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

class RoundedPyramidBufferGeometry extends THREE.BufferGeometry {
  constructor(e = 0.5, t = 1, i = 4, r = 1, a = !1, s = 0, n = 4) {
    const o = THREE.Vector2,
          h = THREE.Vector3;
    super(), this.type = 'RoundedPyramidBufferGeometry', this.parameters = {
      radius: e,
      height: t,
      radialSegments: i,
      heightSegments: r,
      openEnded: a,
      cornerRadius: s,
      cornerSegments: n
    };
    i = Math.floor(Math.max(3, i)), r = Math.floor(r), n = Math.floor(n);
    const l = [],
          c = [],
          d = [],
          m = [];
    let u = 0;

    const p = t / 2,
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

    let I;
    s = Math.min(s, L);
    {
      const _e69 = new h(w.x, w.y, 0),
            _t48 = new h(Math.cos(g) * _e69.x, _e69.y, Math.sin(g) * _e69.x);

      I = _e69.angleTo(_t48);
    }
    const P = s / Math.tan((Math.PI - T.angle()) / 2),
          H = s / Math.tan((Math.PI - I) / 2),
          A = new h();

    if (!a) {
      c.push(_.x, _.y, _.z), d.push(0, -1, 0), m.push(0, 0);

      const _e70 = u++,
            _t49 = [],
            _r33 = x.clone(),
            _a16 = P / Math.cos(Math.PI / i);

      _r33.x -= _a16;

      for (let _e71 = 0; _e71 < i; _e71++) {
        const _a17 = _e71 / i * Math.PI * 2 + f,
              _s12 = new o(Math.sin(_a17), Math.cos(_a17));

        two2three(_r33, _s12, A), c.push(A.x, A.y, A.z), d.push(0, -1, 0), m.push(0, 0), _t49.push(u++);
      }

      for (let _i43 = 0; _i43 < _t49.length; _i43++) l.push(_t49[_i43], _e70, _t49[(_i43 + 1) % _t49.length]);
    }
    {
      const _e72 = new h(),
            _t50 = new h(),
            _r34 = new h(),
            _a18 = new h(),
            _p2 = new h(),
            _E4 = new h();

      for (let _g2 = 0; _g2 < i; _g2++) {
        const _y = _g2 / i * Math.PI * 2 + f,
              _v = (_g2 + 0.5) / i * Math.PI * 2 + f,
              _b = (_g2 + 1) / i * Math.PI * 2 + f,
              _R = new o(Math.sin(_y), Math.cos(_y)),
              _L = new o(Math.sin(_v), Math.cos(_v)),
              _A = new o(Math.sin(_b), Math.cos(_b));

        two2three(x, _R, _t50), two2three(x, _A, _r34), two2three(w, _L, _e72), offset3d(S, _t50, _r34, H, H, _a18), c.push(_a18.x, _a18.y, _a18.z), offset3d(_t50, S, _r34, H, P, _p2), c.push(_p2.x, _p2.y, _p2.z), offset3d(_r34, _t50, S, P, H, _E4), c.push(_E4.x, _E4.y, _E4.z), d.push(_e72.x, _e72.y, _e72.z), d.push(_e72.x, _e72.y, _e72.z), d.push(_e72.x, _e72.y, _e72.z), m.push(0, 0), m.push(0, 0), m.push(0, 0);
        const U = u++,
              B = u++,
              G = u++;

        if (l.push(U, B, G), s > 0) {
          {
            const _e73 = _t50.clone().add(_r34).multiplyScalar(0.5),
                  _i44 = S.clone().sub(_e73).normalize(),
                  _a19 = _.clone().sub(_e73).normalize().add(_i44).normalize().multiplyScalar(-1);

            O(_e73, _E4.clone().sub(_p2), _a19, T.angle());
          }

          let _o4, _f2;

          {
            const _e74 = new h();

            two2three(M, _A, _e74);

            let _t51 = _E4.clone().add(_a18).multiplyScalar(0.5);

            _t51 = projectOntoLine(_t51, _r34, S);

            const _i45 = _E4.clone().sub(_a18);

            [_o4, _f2] = O(_t51, _i45, _e74, I, _a18.y);
          }
          {
            const _e75 = _o4,
                  _t52 = _e75.clone().setY(0).normalize(),
                  _i46 = new h(0, -1, 0),
                  _r35 = _t52.clone().cross(_i46);

            $(_e75, _t52, _i46, _r35);
          }
          {
            const _t53 = T.angle(),
                  _r36 = Math.PI - _t53,
                  _a20 = S.clone();

            _a20.y -= s / Math.sin(_t53 - Math.PI / 2);
            new h();

            const _o5 = new h(),
                  _p3 = [];

            for (let _t54 = 0; _t54 < n; _t54++) {
              const _h2 = [],
                    _l2 = Math.PI / 2 - _r36 * _t54 / n,
                    _f3 = Math.cos(_l2),
                    _E5 = Math.sin(_l2);

              let _g3 = _v;

              for (var D = 0; D <= _t54; D++) {
                const _r37 = Math.cos(_g3),
                      _n3 = Math.sin(_g3);

                _e72.x = _f3 * _n3, _e72.y = _E5, _e72.z = _f3 * _r37, _o5.copy(_a20).addScaledVector(_e72, s), c.push(_o5.x, _o5.y, _o5.z), d.push(_e72.x, _e72.y, _e72.z), m.push(0, 0), _h2.push(u++), _g3 += 2 * Math.PI / _t54 / i;
              }

              _p3.push(_h2);
            }

            _f2.reverse(), _p3.push(_f2);

            const _E6 = _p3.length - 1;

            for (let _e76 = 0; _e76 < _E6; _e76++) {
              const _t55 = _p3[_e76],
                    _i47 = _p3[_e76 + 1],
                    _r38 = _t55.length - 1;

              l.push(_i47[1], _t55[0], _i47[0]);

              for (let _e77 = 1; _e77 <= _r38; _e77++) l.push(_t55[_e77], _t55[_e77 - 1], _i47[_e77]), l.push(_i47[_e77 + 1], _t55[_e77], _i47[_e77]);
            }
          }
        }
      }
    }

    function O(e, t, i, r, a) {
      const o = -r / 2,
            p = (Math.PI - r) / 2,
            f = t.clone().normalize().cross(i);
      e.addScaledVector(i, -s / Math.sin(p));
      const E = new h(),
            g = new h(),
            y = u,
            v = [];

      for (let h = 0; h <= n; h++) {
        const l = o + h / n * r;
        g.set(0, 0, 0), g.addScaledVector(f, Math.sin(l)), g.addScaledVector(i, Math.cos(l));

        for (let _i48 = 0; _i48 <= 1; _i48++) {
          const _r39 = _i48 / 1 - 0.5;

          if (E.copy(e), E.addScaledVector(t, _r39), E.addScaledVector(g, s), null != a) {
            const _e78 = Math.max(0, E.y - a);

            E.addScaledVector(t, -_e78 / t.y);
          }

          c.push(E.x, E.y, E.z), d.push(g.x, g.y, g.z), m.push(0, 0), 0 === _i48 && v.push(u), u++;
        }
      }

      for (let _e79 = 0; _e79 < n; _e79++) for (let _t56 = 0; _t56 < 1; _t56++) {
        const _i49 = y + _t56 + 2 * _e79,
              _r40 = _i49 + 2,
              _a21 = _r40 + 1,
              s = _i49 + 1;

        l.push(_i49, _r40, s), l.push(_r40, _a21, s);
      }

      return [e.clone().addScaledVector(t, 0.5), v];
    }

    function $(e, t, i, r) {
      const a = Math.PI / 2,
            o = R.angle() - a,
            p = [],
            f = new h(),
            E = new h();

      for (let h = 0; h <= n; h++) {
        const l = [],
              _y2 = h / n;

        for (var g = 0; g <= h; g++) {
          const n = ((h ? g / h : 0) - 0.5) * v,
                _p4 = Math.cos(n),
                _ = Math.sin(n),
                S = (a + Math.atan(Math.tan(o) * _p4)) * _y2,
                x = Math.cos(S),
                b = Math.sin(S);

          f.set(0, 0, 0), f.addScaledVector(t, b * _p4), f.addScaledVector(i, x), f.addScaledVector(r, b * _), E.copy(e).addScaledVector(f, s), c.push(E.x, E.y, E.z), d.push(f.x, f.y, f.z), m.push(0, 0), l.push(u++);
        }

        p.push(l);
      }

      const y = p.length - 1;

      for (let _e80 = 0; _e80 < y; _e80++) {
        const _t57 = p[_e80],
              _i50 = p[_e80 + 1],
              _r41 = _t57.length - 1;

        l.push(_t57[0], _i50[1], _i50[0]);

        for (let _e81 = 1; _e81 <= _r41; _e81++) l.push(_t57[_e81 - 1], _t57[_e81], _i50[_e81]), l.push(_t57[_e81], _i50[_e81 + 1], _i50[_e81]);
      }
    }

    this.setIndex(l), this.setAttribute('position', new THREE.Float32BufferAttribute(c, 3)), this.setAttribute('normal', new THREE.Float32BufferAttribute(d, 3)), this.setAttribute('uv', new THREE.Float32BufferAttribute(m, 2));
  }

}

function genHelix(e, t, i, r, a, s, n, o, h, l, c, d) {
  n = Math.round(n), l = Math.round(l), d = Math.round(d);
  const m = [],
        u = [],
        p = [],
        f = [],
        E = [],
        g = [],
        y = [];

  let v,
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

  const B = Math.min(t, r) / 2,
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
    const r = Math.PI / 2;
    T = i * F, w = 2 * Math.PI * (T % V) / V + r, T += Y, R = Math.sin(w) * N, b = Math.cos(w) * G, e ? t.set(b, R, T) : t.set(b, T, R);
  }

  J(I, -1), J(P, 0), H.copy(I);
  const K = I.distanceTo(P),
        Z = K * j + 2 * q,
        Q = Z - q;

  for (let _t58 = 0; _t58 <= j; _t58++) {
    J(M, _t58), U.subVectors(M, H).normalize(), H.copy(M), O.copy(M).setComponent(e + 1, 0).normalize(), $.crossVectors(U, O).normalize();

    const _i51 = 0 == _t58 ? 3 * Math.PI / 2 : k,
          _r42 = 0 == _t58 ? 0 : Q;

    for (let _e82 = 0, _a22 = 0; _e82 <= l; _a22 = ++_e82 * W) {
      if (A.addVectors(I.copy(O).multiplyScalar(o * Math.cos(_a22)), P.copy($).multiplyScalar(o * Math.sin(_a22))), D.copy(A).normalize(), 0 == _t58 || _t58 == j) {
        P.copy(D).multiplyScalar(X), L.addVectors(M, P);

        for (let _a23 = 0, _s13 = _i51; _a23 < d; _s13 = ++_a23 * k + _i51) {
          C.addVectors(I.copy(U).multiplyScalar(q * Math.sin(_s13)), P.copy(D).multiplyScalar(q * Math.cos(_s13))), P.addVectors(L, C), C.normalize(), E.push(P.x, P.y, P.z), g.push(C.x, C.y, C.z);

          const _i52 = (0 == _t58) + Math.sin(_s13);

          y.push((_r42 + q * _i52) / Z, _e82 / l, 0);
        }
      }

      P.addVectors(M, A), u.push(P.x, P.y, P.z), p.push(D.x, D.y, D.z), f.push((q + _t58 * K) / Z, _e82 / l);
    }
  }

  const ee = E.length / 2;

  for (let _e83 = 0; _e83 < d; _e83++) for (let _t59 = 0; _t59 <= l; _t59++) {
    let _i53 = ee + 3 * (_t59 * d + _e83),
        _r43 = 3 * ((l - _t59) * d + d - _e83 - 1);

    u.push(...E.slice(_i53, _i53 + 3)), u.unshift(...E.slice(_r43, _r43 + 3)), p.push(...g.slice(_i53, _i53 + 3)), p.unshift(...g.slice(_r43, _r43 + 3)), f.push(...y.slice(_i53, _i53 + 2)), f.unshift(...y.slice(_r43, _r43 + 2));
  }

  const te = l + 1;

  for (let _e84 = 0; _e84 < j + 2 * d; _e84++) for (let _t60 = 0; _t60 < te - 1; _t60++) S = (v = _e84 * te + _t60) + te, x = (_ = v + 1) + te, m.push(v, _, S, _, x, S);

  v = u.length / 3 - l - 1;

  for (let _e85 = 0; _e85 < l - 2; _e85++) m.push(v, v + _e85 + 1, v + _e85 + 2), m.push(0, _e85 + 2, _e85 + 1);

  let ie = new THREE.BufferGeometry();
  return ie.setIndex(m), ie.setAttribute('position', new THREE.Float32BufferAttribute(u, 3)), ie.setAttribute('normal', new THREE.Float32BufferAttribute(p, 3)), ie.setAttribute('uv', new THREE.Float32BufferAttribute(f, 2)), ie;
}
SPE.RectangleGeometry = new function () {
  this.build = function ({
    width: e = 100,
    height: t = e,
    cornerRadius: i = [0, 0, 0, 0],
    cornerType: r = 1,
    enabledIndieCorners: a = !1,
    extrudeDepth: s = 0,
    extrudeBevelSize: n = 0,
    extrudeBevelSegments: o = 1
  }) {
    e = Math.abs(e), t = Math.abs(t);
    let h = {
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
    let u,
        p = l.x,
        f = c.x,
        E = c.y,
        g = l.y,
        y = new THREE.Shape();
    if (y.moveTo(p, E - m[0]), 1 == r) i[0] > 0 && y.quadraticCurveTo(p, E, p + m[0], E), y.lineTo(f - m[1], E), i[1] > 0 && y.quadraticCurveTo(f, E, f, E - m[1]), y.lineTo(f, g + m[2]), i[2] > 0 && y.quadraticCurveTo(f, g, f - m[2], g), y.lineTo(p + m[3], g), i[3] > 0 && y.quadraticCurveTo(p, g, p, g + m[3]), y.lineTo(p, E - m[0]);else {
      let _e86 = 4 * (Math.SQRT2 - 1) / 3;

      i[0] > 0 && y.bezierCurveTo(p, E + m[0] * (_e86 - 1), p - m[0] * (_e86 - 1), E, p + m[0], E), y.lineTo(f - m[1], E), i[1] > 0 && y.bezierCurveTo(f + m[1] * (_e86 - 1), E, f, E + m[1] * (_e86 - 1), f, E - m[1]), y.lineTo(f, g + m[2]), i[2] > 0 && y.bezierCurveTo(f, g - m[2] * (_e86 - 1), f + m[2] * (_e86 - 1), g, f - m[2], g), y.lineTo(p + m[3], g), i[3] > 0 && y.bezierCurveTo(p - m[3] * (_e86 - 1), g, p, g - m[3] * (_e86 - 1), p, g + m[3]);
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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    cornerRadius: r = e.userData.parameters.cornerRadius,
    cornerType: a = e.userData.parameters.cornerType,
    enabledIndieCorners: s = e.userData.ui.enabledIndieCorners,
    extrudeDepth: n = e.userData.parameters.extrudeDepth,
    extrudeBevelSize: o = e.userData.parameters.extrudeBevelSize,
    extrudeBevelSegments: h = e.userData.parameters.extrudeBevelSegments
  }) {
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
  this.build = function ({
    width: e = 100,
    height: t = e,
    depth: i = e,
    widthSegments: r = 64,
    heightSegments: a = 64,
    phiStart: s,
    phiLength: n,
    thetaStart: o,
    thetaLength: h
  }) {
    e = Math.abs(e), t = Math.abs(t), i = Math.abs(i);
    let l = new THREE.SphereBufferGeometry(0.5 * e, r, a, s, n, o, h);
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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    depth: r = e.userData.parameters.depth,
    widthSegments: a = e.userData.parameters.widthSegments,
    heightSegments: s = e.userData.parameters.heightSegments,
    phiStart: n = e.userData.parameters.phiStart,
    phiLength: o = e.userData.parameters.phiLength,
    thetaStart: h = e.userData.parameters.thetaStart,
    thetaLength: l = e.userData.parameters.thetaLength
  }) {
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
  this.build = function ({
    width: e = 100,
    height: t = e,
    innerRadiusPercent: i = 38.19,
    spikes: r = 5,
    cornerRadius: a = 0,
    angle: s = 360,
    extrudeDepth: n = 0,
    extrudeBevelSize: o = 0,
    extrudeBevelSegments: h = 1
  }) {
    let l,
        c = 0.5 * (e = Math.abs(e)),
        d = 0.5 * (t = Math.abs(t)),
        m = s * Math.PI / 360 / r,
        u = Math.PI / 2 * 3 * -1,
        p = c * i / 100,
        f = d * i / 100,
        E = new THREE.Shape();

    if (3 == r && 50 == i) {
      m = 2 * Math.PI / r;

      for (let _e87 = 0; _e87 <= r; _e87++) {
        let _t61 = m * _e87,
            _i54 = 0 + Math.sin(_t61) * c,
            _r44 = 0 + Math.cos(_t61) * d;

        E.lineTo(_i54, _r44);
      }
    } else {
      E.moveTo(0, 0 + s == 360 ? d : 0);

      for (let _e88 = 0; _e88 < r; _e88++) {
        let _e89 = 0 + Math.cos(u) * c,
            _t62 = 0 + Math.sin(u) * d;

        E.lineTo(_e89, _t62), u += m, _e89 = 0 + Math.cos(u) * p, _t62 = 0 + Math.sin(u) * f, E.lineTo(_e89, _t62), u += m;
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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    innerRadiusPercent: r = e.userData.parameters.innerRadiusPercent,
    spikes: a = e.userData.parameters.spikes,
    cornerRadius: s = e.userData.parameters.cornerRadius,
    angle: n = e.userData.parameters.angle,
    extrudeDepth: o = e.userData.parameters.extrudeDepth,
    extrudeBevelSize: h = e.userData.parameters.extrudeBevelSize,
    extrudeBevelSegments: l = e.userData.parameters.extrudeBevelSegments
  }) {
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
  this.build = function ({
    width: e = 100,
    height: t = e,
    depth: i,
    tubePercent: r = 50,
    radialSegments: a = 128,
    tubularSegments: s = 64,
    arc: n = 2 * Math.PI,
    cornerRadius: o = 30,
    cornerSegments: h = 8
  }) {
    let l = 0.25 * e * r * 0.01,
        c = function (e, t, i, r, a, s, n, o, h, l, c) {
      [t, i] = [i, t], n = t / 2, 1 == (a /= 2 * Math.PI) && (l = 0);
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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    depth: r = e.userData.parameters.depth,
    tubePercent: a = e.userData.parameters.tubePercent,
    radialSegments: s = e.userData.parameters.radialSegments,
    tubularSegments: n = e.userData.parameters.tubularSegments,
    arc: o = e.userData.parameters.arc,
    cornerRadius: h = e.userData.parameters.cornerRadius,
    cornerSegments: l = e.userData.parameters.cornerSegments
  }) {
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
  this.build = function ({
    width: e = 100,
    height: t = e,
    depth: i = 1,
    tube: r = 50,
    tubularSegments: a = 64,
    radialSegments: s = 32,
    p: n = 2,
    q: o = 3
  }) {
    let h = 0.5 * e - r,
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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    depth: r = e.userData.parameters.depth,
    tube: a = e.userData.parameters.tube,
    tubularSegments: s = e.userData.parameters.tubularSegments,
    radialSegments: n = e.userData.parameters.radialSegments,
    p: o = e.userData.parameters.p,
    q: h = e.userData.parameters.q
  }) {
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
  this.build = function ({
    width: e = 100,
    height: t = e,
    depth: i = e,
    segments: r = 64,
    verticalSegments: a = 64,
    points: s = [{
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
    }]
  }) {
    let n = new THREE.Shape();
    n.moveTo(s[0].x, s[0].y), n.bezierCurveTo(s[1].x, s[1].y, s[2].x, s[2].y, s[3].x, s[3].y);
    let o = new THREE.LatheBufferGeometry(n.extractPoints(a).shape, r);
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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    depth: r = e.userData.parameters.depth,
    segments: a = e.userData.parameters.segments,
    verticalSegments: s = e.userData.parameters.verticalSegments,
    points: n = e.userData.parameters.points
  }) {
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
  this.build = function ({
    width: e = 100,
    height: t = e,
    depth: i = e,
    radius: r = 20,
    revolutions: a = 2,
    segments: s = 40,
    pathRadius: n = 10,
    pathType: o = 0,
    pathSegments: h = 30,
    cornerRadius: l = 30,
    cornerSegments: c = 8
  }) {
    let d = genHelix(!1, Math.abs(e), Math.abs(t), Math.abs(i), Math.abs(r), Math.abs(a), Math.abs(s), Math.abs(n), Math.abs(o), Math.abs(h), Math.abs(l), Math.abs(c));
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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    depth: r = e.userData.parameters.depth,
    radius: a = e.userData.parameters.radius,
    revolutions: s = e.userData.parameters.revolutions,
    segments: n = e.userData.parameters.segments,
    pathRadius: o = e.userData.parameters.pathRadius,
    pathType: h = e.userData.parameters.pathType,
    pathSegments: l = e.userData.parameters.pathSegments,
    cornerRadius: c = e.userData.parameters.cornerRadius,
    cornerSegments: d = e.userData.parameters.cornerSegments
  }) {
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
  this.build = function ({
    width: e = 100,
    height: t,
    cornerRadius: i = 0,
    extrudeDepth: r = 0,
    extrudeBevelSize: a = 0,
    extrudeBevelSegments: s = 1,
    isRect: n = !1
  }) {
    e = Math.abs(e);
    let o,
        h = new THREE.Shape();
    if (n) t = t ? Math.abs(t) : e, h.moveTo(0.5 * -e, 0.5 * t), h.lineTo(0.5 * e, 0.5 * -t), h.lineTo(0.5 * -e, 0.5 * -t), h.lineTo(0.5 * -e, 0.5 * t);else {
      let _i55 = {
        x: 0.5 * e,
        y: 0.5 * (t = (t = Math.abs(t)) || e * (Math.sqrt(3) / 2))
      };
      h.moveTo(0, _i55.y), h.lineTo(_i55.x, -_i55.y), h.lineTo(-_i55.x, -_i55.y), h.lineTo(0, _i55.y);
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
          _ = function (e, t, i) {
        i.x = t.x - e.x, i.y = t.y - e.y, i.len = Math.sqrt(i.x * i.x + i.y * i.y), i.nx = i.x / i.len, i.ny = i.y / i.len, i.ang = Math.atan2(i.ny, i.nx);
      };

      for (c = {}, d = {}, n = t.length - 1, o = t[n - 1], e.curves = [], r = 0; r < n; r++) h = t[r % n], l = t[(r + 1) % n], _(h, o, c), _(h, l, d), m = c.nx * d.ny - c.ny * d.nx, u = c.nx * d.nx - c.ny * -d.ny, E = Math.asin(m), p = 1, f = !1, u < 0 ? E < 0 ? E = Math.PI + E : (E = Math.PI - E, p = -1, f = !0) : E > 0 && (p = -1, f = !0), g = 0.5 * E, (v = Math.abs(Math.cos(g) * i / Math.sin(g))) > Math.min(0.5 * c.len, 0.5 * d.len) ? (v = Math.min(0.5 * c.len, 0.5 * d.len), y = Math.abs(v * Math.sin(g) / Math.cos(g))) : y = i, a = h.x + d.nx * v, s = h.y + d.ny * v, a += -d.ny * y * p, s += d.nx * y * p, e.absarc(a, s, y, c.ang + Math.PI / 2 * p, d.ang - Math.PI / 2 * p, f), o = h, h = l;

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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    cornerRadius: r = e.userData.parameters.cornerRadius,
    extrudeDepth: a = e.userData.parameters.extrudeDepth,
    extrudeBevelSize: s = e.userData.parameters.extrudeBevelSize,
    extrudeBevelSegments: n = e.userData.parameters.extrudeBevelSegments,
    isRect: o = e.userData.parameters.isRect
  }) {
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
  this.build = function (e = new THREE.BoxBufferGeometry(100, 100, 100), t) {
    let i = new THREE.BufferGeometry();
    i.copy(e);
    const r = new THREE.Vector3();

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
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height,
    depth: r = e.userData.parameters.depth
  }) {
    return this.build(e, {
      width: t,
      height: i,
      depth: r
    });
  };
}(), SPE.StrokeGeometry = new function () {
  this.build = function (e, t = {}) {
    const i = t.strokeAlignment || 1,
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

    for (let _t63 = s; _t63 < n; _t63 += 3) a.push([e.getAttribute('position').array[_t63], e.getAttribute('position').array[_t63 + 1]]);

    const o = createLineGeo(a, i, r)(THREE);
    return o.userData = {
      type: 'StrokeGeometry',
      parameters: {
        strokeAlignment: i
      }
    }, o.toJSON = function () {
      const t = {};
      return t.uuid = this.uuid, t.type = this.type, '' !== this.name && (t.name = this.name), t.userData = this.userData, t.userData.meshGeometry = e.uuid, t;
    }, o;
  }, this.buildFromGeometry = function (e, t, {
    strokeAlignment: i = t.userData.parameters.strokeAlignment,
    strokeGrowth: r = t.userData.parameters.strokeGrowth
  }) {
    return SPE.StrokeGeometry.build(e, {
      strokeAlignment: i,
      strokeGrowth: r
    });
  };
}(), SPE.TextFrameGeometry = new function () {
  this.build = function ({
    width: e = 100,
    height: t = e
  }) {
    let i = new THREE.PlaneBufferGeometry(e, t);
    return i.userData = {
      type: 'TextFrameGeometry',
      parameters: {
        width: e,
        height: t,
        depth: 0
      }
    }, i;
  }, this.buildFromGeometry = function (e, {
    width: t = e.userData.parameters.width,
    height: i = e.userData.parameters.height
  }) {
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
        _ = function (e, t, i) {
      i.x = t.x - e.x, i.y = t.y - e.y, i.len = Math.sqrt(i.x * i.x + i.y * i.y), i.nx = i.x / i.len, i.ny = i.y / i.len, i.ang = Math.atan2(i.ny, i.nx);
    };

    for (c = {}, d = {}, o = t[(n = t.length) - 2], e.curves = [], r = 1; r < n - 1; r++) h = t[r % n], l = t[(r + 1) % n], _(h, o, c), _(h, l, d), m = c.nx * d.ny - c.ny * d.nx, u = c.nx * d.nx - c.ny * -d.ny, E = Math.asin(m), p = 1, f = !1, u < 0 ? E < 0 ? E = Math.PI + E : (E = Math.PI - E, p = -1, f = !0) : E > 0 && (p = -1, f = !0), g = E / 2, (v = Math.abs(Math.cos(g) * i / Math.sin(g))) > Math.min(c.len / 2, d.len / 2) ? (v = Math.min(c.len / 2, d.len / 2), y = Math.abs(v * Math.sin(g) / Math.cos(g))) : y = i, a = h.x + d.nx * v, s = h.y + d.ny * v, a += -d.ny * y * p, s += d.nx * y * p, e.absarc(a, s, y, c.ang + Math.PI / 2 * p, d.ang - Math.PI / 2 * p, f), o = h, h = l;

    e.closePath();
  }, this.resizeGeometry = function (e, {
    width: t,
    height: i,
    depth: r
  }) {
    t = Math.abs(t), i = Math.abs(i), r = Math.abs(r);
    const a = e.userData.parameters;
    let s, n, o;
    0 === t ? (t = a.width, s = 1) : s = t / a.width, 0 === i ? (i = a.height, n = 1) : n = i / a.height, 0 === r ? (r = a.depth, o = 1) : o = r / a.depth, e.scale(s, n, o), a.width = t, a.height = i, a.depth = r;
  }, this.addBarycentricAttribute = function (e, t) {
    const i = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)],
          r = e.attributes.position,
          a = new Float32Array(3 * r.count);

    for (let _e90 = 0, _t64 = r.count; _e90 < _t64; _e90++) i[_e90 % 3].toArray(a, 3 * _e90);

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

class Cloner extends THREE.Object3D {
  constructor(e, t = {}) {
    super(), this.object = e, this.userData.type = 'Cloner', this.userData.skip = !0, e.computeComplexBoundingBox(!0);
    const i = e.complexBoundingBox.getSize(new THREE.Vector3());
    this.parameters = {
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
    }, this.update(), this.setHideBase(this.parameters.hideBase);
  }

  refreshMaterial() {
    for (let e = 0, t = this.children.length; e < t; ++e) this.children[e].material = this.object.material;
  }

  setHideBase(e) {
    if (void 0 !== this.object.material) {
      if (this.children.length > 0) if (this.object.material.visible = !0, !0 === e) {
        const _e91 = this.object.material.clone();

        for (let t = 0, i = this.children.length; t < i; ++t) this.children[t].material = _e91;
      } else for (let _e92 = 0, t = this.children.length; _e92 < t; ++_e92) this.children[_e92].material = this.object.material;
      this.object.material.visible = !e, this.parameters.hideBase = e;
    }
  }

  update() {
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
  }

  _updateCount() {
    const e = this.parameters,
          t = 'grid' === e.type ? e.gr_count.x * e.gr_count.y * e.gr_count.z : e.count;
    if (this.children.length !== t) if (this.children.length < t) for (let _e93 = 0, i = t - this.children.length; _e93 < i; ++_e93) {
      const _e94 = this.object.shallowClone(!1);

      delete _e94.userData.isEntity, this.add(_e94);
    } else for (let _e95 = 0, i = this.children.length - t; _e95 < i; ++_e95) this.remove(this.children[0]);
  }

  _updateRadial() {
    const e = this.parameters,
          t = e.ra_startAngle * THREE.Math.DEG2RAD,
          i = t - e.ra_endAngle * THREE.Math.DEG2RAD,
          r = new THREE.Euler(e.ra_rotation.x * THREE.Math.DEG2RAD, e.ra_rotation.y * THREE.Math.DEG2RAD, e.ra_rotation.z * THREE.Math.DEG2RAD);
    let a;
    'x' == e.ra_axis && (a = new THREE.Vector3(1, 0, 0)), 'y' == e.ra_axis && (a = new THREE.Vector3(0, 1, 0)), 'z' == e.ra_axis && (a = new THREE.Vector3(0, 0, 1));

    for (let s = 0; s < e.count; s++) {
      const n = this.children[s];
      n.hiddenMatrix.identity(), n.scale.x = e.ra_scale.x + 1, n.scale.y = e.ra_scale.y + 1, n.scale.z = e.ra_scale.z + 1, n.position.setScalar(0);
      const o = i / e.count * s - t;
      'x' == e.ra_axis && n.rotation.set(0, o, 0), 'y' == e.ra_axis && n.rotation.set(0, 0, o), 'z' == e.ra_axis && n.rotation.set(o, 0, 0), n.translateOnAxis(a, e.ra_radius), n.position.add(e.ra_position), !0 === e.ra_align ? (n.rotation.x += r.x, n.rotation.y += r.y, n.rotation.z += r.z) : n.rotation.copy(r);
    }
  }

  _updateLinear() {
    const e = this.parameters,
          t = new THREE.Euler(e.li_rotation.x * THREE.Math.DEG2RAD, e.li_rotation.y * THREE.Math.DEG2RAD, e.li_rotation.z * THREE.Math.DEG2RAD);

    for (let i = 0; i < e.count; i++) {
      const r = this.children[i];
      r.hiddenMatrix.identity(), r.scale.x = e.li_scale.x * i + 1, r.scale.y = e.li_scale.y * i + 1, r.scale.z = e.li_scale.z * i + 1, r.rotation.x = t.x * i, r.rotation.y = t.y * i, r.rotation.z = t.z * i, r.position.x = e.li_position.x * i, r.position.y = e.li_position.y * i, r.position.z = e.li_position.z * i;
    }
  }

  _updateGrid() {
    const e = this.parameters;
    let t = 0;

    if (!0 === e.gr_fromCenter) {
      const i = {
        x: e.gr_count.x % 2 == 0 ? 2 : 1,
        y: e.gr_count.y % 2 == 0 ? 2 : 1,
        z: e.gr_count.z % 2 == 0 ? 2 : 1
      },
            r = new THREE.Vector3(e.gr_size.x * (e.gr_count.x - i.x) * 0.5, e.gr_size.y * (e.gr_count.y - i.y) * 0.5, e.gr_size.z * (e.gr_count.z - i.z) * 0.5);

      for (let _i56 = 0; _i56 < e.gr_count.x; _i56++) for (let a = 0; a < e.gr_count.y; a++) for (let s = 0; s < e.gr_count.z; s++) {
        const n = this.children[t++];
        n.hiddenMatrix.identity(), n.scale.setScalar(1), n.rotation.set(0, 0, 0), n.position.x = e.gr_size.x * _i56 - r.x, n.position.y = e.gr_size.y * a - r.y, n.position.z = e.gr_size.z * s - r.z;
      }
    } else for (let i = 0; i < e.gr_count.x; i++) for (let r = 0; r < e.gr_count.y; r++) for (let a = 0; a < e.gr_count.z; a++) {
      const s = this.children[t++];
      s.hiddenMatrix.identity(), s.scale.setScalar(1), s.rotation.set(0, 0, 0), s.position.x = e.gr_size.x * i, s.position.y = -e.gr_size.y * r, s.position.z = -e.gr_size.z * a;
    }
  }

  toJSON() {
    const e = this.parameters,
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
  }

  fromJSON(e) {
    const t = e.parameters;
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
  }

}
SPE.CombinedCamera = class extends THREE.Camera {
  constructor(e = 100, t = 100, i = 45, r = 0.1, a = 5e4) {
    super(), e = window.innerWidth, t = window.innerHeight, this.orthoCamera = new THREE.OrthographicCamera(-0.5 * e, 0.5 * e, 0.5 * t, -0.5 * t, r, a), this.perspCamera = new THREE.PerspectiveCamera(i, e / t, r, a), this.left = this.orthoCamera.left, this.right = this.orthoCamera.right, this.top = this.orthoCamera.top, this.bottom = this.orthoCamera.bottom, this.view = this.orthoCamera.view, this.far = this.orthoCamera.far, this.isOrthographicCamera = !0, this._type = 'OrthographicCamera', this.aspect = this.perspCamera.aspect, this.fov = this.perspCamera.fov, this.focus = this.perspCamera.focus, this.filmGauge = this.perspCamera.filmGauge, this.filmOffset = this.perspCamera.filmOffset, this.targetOffset = 1e3, this.userData = {
      type: SPE.CombinedCamera.name,
      isEntity: !0,
      lock: !1,
      scaleLock: !1,
      activeCamera: !1,
      hiddenMatrix: new THREE.Matrix4()
    }, this.enableHelper = !1, this.objectHelper = new SPE.CombinedCameraHelper(this), this.interaction = new Interaction(this), this.toOrthographic();
  }

  get hiddenMatrix() {
    return this.userData.hiddenMatrix;
  }

  set hiddenMatrix(e) {
    this.userData.hiddenMatrix.copy(e);
  }

  get geometryHelper() {
    return SPE.CombinedCameraHelper.geometryHelper;
  }

  set visibility(e) {
    this.visible = e, this.objectHelper.visible = e;

    for (let t = 0, i = this.children.length; t < i; ++t) void 0 !== this.children[t].traverseEntity && this.children[t].traverseEntity(function (t) {
      void 0 !== t.objectHelper && !0 === t.visible && (t.objectHelper.visible = e);
    });
  }

  get visibility() {
    return this.visible;
  }

  get type() {
    return this._type;
  }

  set type(e) {
    'PerspectiveCamera' === e ? this.toPerspective() : 'OrthographicCamera' === e && this.toOrthographic();
  }

  get near() {
    return this.isPerspectiveCamera ? this.perspCamera.near : this.isOrthographicCamera ? this.orthoCamera.near : void 0;
  }

  set near(e) {
    this.isPerspectiveCamera ? this.perspCamera.near = e : this.isOrthographicCamera && (this.orthoCamera.near = e);
  }

  get zoom() {
    return this.isPerspectiveCamera ? this.perspCamera.zoom : this.isOrthographicCamera ? this.orthoCamera.zoom : void 0;
  }

  set zoom(e) {
    e < 0 || (this.isPerspectiveCamera ? this.perspCamera.zoom = e : this.isOrthographicCamera && (this.orthoCamera.zoom = e));
  }

  getTarget(e, t) {
    let i;
    return void 0 === e && (console.warn('SPE.CombinedCamera: .getTarget() target is now required'), e = new THREE.Vector3()), i = void 0 === t ? this.getWorldDirection(new THREE.Vector3()).multiplyScalar(this.targetOffset) : t.clone().multiplyScalar(this.targetOffset), e.copy(this.position).add(i), e;
  }

  getViewFrontToObject(e) {
    const t = e.getWorldPosition(new THREE.Vector3()),
          i = e.getWorldDirection(new THREE.Vector3()).multiplyScalar(this.targetOffset);
    return {
      position: t.clone().add(i),
      target: t
    };
  }

  getViewToObject(e) {
    const t = e.getWorldPosition(new THREE.Vector3()),
          i = this.getWorldDirection(new THREE.Vector3()).multiplyScalar(this.targetOffset);
    return {
      position: t.clone().sub(i),
      target: t
    };
  }

  setViewplaneSize(e, t) {
    this.left = 0.5 * -e, this.right = 0.5 * e, this.top = 0.5 * t, this.bottom = 0.5 * -t, this.aspect = e / t, this.updateProjectionMatrix();
  }

  toOrthographic(e) {
    this.orthoCamera.left = this.left, this.orthoCamera.right = this.right, this.orthoCamera.top = this.top, this.orthoCamera.bottom = this.bottom, this.orthoCamera.view = this.view, this.orthoCamera.far = this.far, this.orthoCamera.updateProjectionMatrix(), this.projectionMatrix = this.orthoCamera.projectionMatrix, this.projectionMatrixInverse = this.orthoCamera.projectionMatrixInverse, delete this.isPerspectiveCamera, this.isOrthographicCamera = !0, this._type = 'OrthographicCamera', !0 !== this.enableHelper && !0 !== e || this.objectHelper.update();
  }

  toPerspective(e) {
    this.perspCamera.aspect = this.aspect, this.perspCamera.fov = this.fov, this.perspCamera.view = this.view, this.perspCamera.far = this.far, this.perspCamera.updateProjectionMatrix(), this.projectionMatrix = this.perspCamera.projectionMatrix, this.projectionMatrixInverse = this.perspCamera.projectionMatrixInverse, delete this.isOrthographicCamera, this.isPerspectiveCamera = !0, this._type = 'PerspectiveCamera', !0 !== this.enableHelper && !0 !== e || this.objectHelper.update();
  }

  setFocalLength(e) {
    this.perspCamera.setFocalLength(e), this.toPerspective();
  }

  getFocalLength() {
    return this.perspCamera.getFocalLength();
  }

  getEffectiveFOV() {
    return this.perspCamera.getEffectiveFOV();
  }

  getFilmWidth() {
    return this.perspCamera.getFilmWidth();
  }

  getFilmHeight() {
    return this.perspCamera.getFilmHeight();
  }

  setViewOffset(e, t, i, r, a, s) {
    this.isPerspectiveCamera ? (this.perspCamera.setViewOffset(e, t, i, r, a, s), this.toPerspective()) : this.isOrthographicCamera && (this.orthoCamera.setViewOffset(e, t, i, r, a, s), this.toOrthographic());
  }

  clearViewOffset() {
    this.isPerspectiveCamera ? (this.perspCamera.clearViewOffset(), this.toPerspective()) : this.isOrthographicCamera && (this.orthoCamera.clearViewOffset(), this.toOrthographic());
  }

  updateProjectionMatrix(e) {
    this.isPerspectiveCamera ? this.toPerspective(e) : this.isOrthographicCamera && this.toOrthographic(e);
  }

  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);

    for (var t = this.children, i = 0, r = t.length; i < r; i++) t[i].updateMatrixWorld(e);

    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }

  updateWorldMatrix(e, t) {
    var i = this.parent;
    if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), !0 === t) for (var r = this.children, a = 0, s = r.length; a < s; a++) r[a].updateWorldMatrix(!1, !0);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }

  attach(e) {
    const t = new THREE.Matrix4();
    return this.updateWorldMatrix(!0, !1), t.copy(this.matrixWorld).invert(), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), t.multiply(e.parent.matrixWorld)), void 0 !== e.userData.hiddenMatrix ? e.userData.hiddenMatrix.premultiply(t) : e.applyMatrix4(t), e.updateWorldMatrix(!1, !1), this.add(e), this;
  }

  computeSingleBoundingBox() {
    this.singleBoundingBox || (this.singleBoundingBox = new SPE.Box3()), this.singleBoundingBox.setFromObjectSize(this, !1), this.singleBoundingBox.computeVertices(), this.singleBoundingBox.computeEdges();
  }

  computeComplexBoundingBox(e) {
    this.complexBoundingBox || (this.complexBoundingBox = new SPE.Box3()), this.complexBoundingBox.setFromObjectSize(this, e);
  }

  raycast(e, t) {
    !0 === this.enableHelper && !0 === this.objectHelper.visible && !1 === this.userData.activeCamera && this.objectHelper.raycast(e, t);
  }

  copy(e, t) {
    const i = e.children;
    if (e.children = [], super.copy(e), e.children = i, this.userDataFromJson(this.userData), this.userData.activeCamera = !1, this.userData.isEntity = !0, delete this.userData.isDefaultCamera, this.orthoCamera.copy(e.orthoCamera), this.perspCamera.copy(e.perspCamera), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.far = e.far, this.view = null === e.view ? null : Object.assign({}, e.view), this.isOrthographicCamera = e.isOrthographicCamera, this._type = e._type, this.aspect = e.aspect, this.fov = e.fov, this.focus = e.focus, this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this.isPerspectiveCamera = e.isPerspectiveCamera, this.targetOffset = e.targetOffset, void 0 !== e.enableHelper && (this.enableHelper = e.enableHelper), void 0 !== e.objectHelper && (this.objectHelper.visible = e.objectHelper.visible), void 0 !== e.interaction && this.interaction.copy(e.interaction), !0 === t) for (let _t65 = 0, r = i.length; _t65 < r; ++_t65) {
      const _i57 = e.children[_t65];
      !0 === _i57.userData.isEntity && this.add(_i57.clone());
    }
    return this.updateProjectionMatrix(), this;
  }

  traverseEntity(e) {
    !function t(i) {
      if (!i.userData.isEntity) return;
      e(i);
      const r = i.children;

      for (let e = 0, _i58 = r.length; e < _i58; ++e) t(r[e]);
    }(this);
  }

  userDataFromJson(e) {
    this.userData = e, this.userData.positionToCenter = new THREE.Vector3(), this.userData.hiddenMatrix = new THREE.Matrix4(), void 0 !== e.hiddenMatrix && this.userData.hiddenMatrix.fromArray(e.hiddenMatrix.elements), void 0 === e.lock && (this.userData.lock = !1);
  }

  fromJSON(e) {
    return this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, void 0 !== e.view && (this.view = Object.assign({}, e.view)), void 0 !== e.zoomOrtho && (this.orthoCamera.zoom = e.zoomOrtho), void 0 !== e.nearOrtho && (this.orthoCamera.near = e.nearOrtho), this.far = e.far, this._type = e.type, e.isOrthographicCamera && (this.isOrthographicCamera = e.isOrthographicCamera), this.aspect = e.aspect, this.fov = e.fov, this.focus = e.focus, this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, void 0 !== e.zoomPersp && (this.perspCamera.zoom = e.zoomPersp), void 0 !== e.nearPersp && (this.perspCamera.near = e.nearPersp), e.isPerspectiveCamera && (this.isPerspectiveCamera = e.isPerspectiveCamera), void 0 !== e.targetOffset && (this.targetOffset = e.targetOffset), this.userDataFromJson(this.userData), this.updateProjectionMatrix(), this;
  }

  toJSON(e) {
    let t;
    const i = this.userData;
    return delete this.userData, t = super.toJSON(e), this.userData = i, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.zoomOrtho = this.orthoCamera.zoom, t.object.nearOrtho = this.orthoCamera.near, t.object.far = this.far, t.object.type = this._type, this.isOrthographicCamera && (t.object.isOrthographicCamera = this.isOrthographicCamera), t.object.aspect = this.aspect, t.object.fov = this.fov, t.object.focus = this.focus, t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t.object.zoomPersp = this.perspCamera.zoom, t.object.nearPersp = this.perspCamera.near, this.isPerspectiveCamera && (t.object.isPerspectiveCamera = this.isPerspectiveCamera), t.object.targetOffset = this.targetOffset, t.object.userData = {
      type: SPE.CombinedCamera.name,
      isEntity: i.isEntity,
      lock: i.lock,
      scaleLock: i.scaleLock,
      activeCamera: i.activeCamera,
      hiddenMatrix: {
        elements: i.hiddenMatrix.toArray()
      }
    }, t.object.enableHelper = this.enableHelper, t.object.interaction = this.interaction.toJSON(e), t;
  }

}, SPE.CombinedCameraHelper = class extends THREE.CameraHelper {
  constructor(e) {
    super(e);
    const t = new THREE.SphereGeometry(15, 4, 2),
          i = new THREE.MeshBasicMaterial({
      wireframe: !0,
      fog: !1,
      toneMapped: !1
    }),
          r = new THREE.Mesh(t, i);
    this.add(r), this.isObjectHelper = !0, this.name = `CombinedCameraHelper: ${e.uuid}`;
  }

  raycast(e, t) {
    var i = SPE.CombinedCameraHelper._ray,
        r = SPE.CombinedCameraHelper._sphere,
        a = SPE.CombinedCameraHelper._inverseMatrix,
        s = SPE.CombinedCameraHelper.geometryHelper,
        n = this.camera.matrixWorld;

    if (null === s.boundingSphere && s.computeBoundingSphere(), r.copy(s.boundingSphere), r.applyMatrix4(n), !1 !== e.ray.intersectsSphere(r) && (a.copy(n).invert(), i.copy(e.ray).applyMatrix4(a), null === s.boundingBox || !1 !== i.intersectsBox(s.boundingBox))) {
      var o,
          h,
          l,
          c,
          d,
          m,
          u = s.index,
          p = s.attributes.position,
          f = s.drawRange;

      for (d = Math.max(0, f.start), m = Math.min(u.count, f.start + f.count); d < m; d += 3) h = u.getX(d), l = u.getX(d + 1), c = u.getX(d + 2), (o = E(this.camera, e, i, p, h, l, c)) && (o.faceIndex = Math.floor(d / 3), t.push(o));
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
  }

}, SPE.CombinedCameraHelper._ray = new THREE.Ray(), SPE.CombinedCameraHelper._sphere = new THREE.Sphere(), SPE.CombinedCameraHelper._inverseMatrix = new THREE.Matrix4(), SPE.CombinedCameraHelper.geometryHelper = new THREE.BoxBufferGeometry(30, 30, 30), SPE.LightSpot = class extends THREE.SpotLight {
  constructor(e, t, i, r, a, s) {
    super(e, t, i, r, a, s), this.shadow.mapSize.width = 1024, this.shadow.mapSize.height = 1024, this.userData = {
      type: SPE.LightSpot.name,
      isEntity: !0,
      lock: !1,
      scaleLock: !1,
      hiddenMatrix: new THREE.Matrix4()
    }, this.enableHelper = !1, this.objectHelper = new SPE.SpotLightHelper(this), this.interaction = new Interaction(this), this._gizmos = {};
    const n = this.shadow.camera;
    n.fov = 2 * THREE.MathUtils.RAD2DEG * this.angle, n.aspect = 1, n.near = 100, n.far = 2500;
    const o = new THREE.CameraHelper(this.shadow.camera);
    o.visible = !1, this._gizmos.shadowmap = o, this.update();
  }

  get hiddenMatrix() {
    return this.userData.hiddenMatrix;
  }

  set hiddenMatrix(e) {
    this.userData.hiddenMatrix.copy(e);
  }

  get geometryHelper() {
    return SPE.SpotLightHelper.geometryHelper;
  }

  get gizmos() {
    return this._gizmos;
  }

  set visibility(e) {
    this.visible = e, this.objectHelper.visible = e;

    for (let t = 0, i = this.children.length; t < i; ++t) void 0 !== this.children[t].traverseEntity && this.children[t].traverseEntity(function (t) {
      void 0 !== t.objectHelper && !0 === t.visible && (t.objectHelper.visible = e);
    });
  }

  get visibility() {
    return this.visible;
  }

  showGizmos() {
    for (const [e, t] of Object.entries(this._gizmos)) t instanceof THREE.CameraHelper && (t.visible = !0);
  }

  hideGizmos() {
    for (const [e, t] of Object.entries(this._gizmos)) t instanceof THREE.CameraHelper && (t.visible = !1);
  }

  update() {
    this.shadow.camera.updateProjectionMatrix();

    for (const [e, t] of Object.entries(this._gizmos)) t instanceof THREE.CameraHelper && t.update();
  }

  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0), !0 === this.enableHelper && !0 === this.objectHelper.viisble && this.objectHelper.update();

    for (var t = this.children, i = 0, r = t.length; i < r; i++) t[i].updateMatrixWorld(e);
  }

  updateWorldMatrix(e, t) {
    var i = this.parent;
    if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), !0 === t) for (var r = this.children, a = 0, s = r.length; a < s; a++) r[a].updateWorldMatrix(!1, !0);
  }

  attach(e) {
    const t = new THREE.Matrix4();
    return this.updateWorldMatrix(!0, !1), t.copy(this.matrixWorld).invert(), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), t.multiply(e.parent.matrixWorld)), void 0 !== e.userData.hiddenMatrix ? e.userData.hiddenMatrix.premultiply(t) : e.applyMatrix4(t), e.updateWorldMatrix(!1, !1), this.add(e), this;
  }

  computeSingleBoundingBox() {
    this.singleBoundingBox || (this.singleBoundingBox = new SPE.Box3()), this.singleBoundingBox.setFromObjectSize(this, !1), this.singleBoundingBox.computeVertices(), this.singleBoundingBox.computeEdges();
  }

  computeComplexBoundingBox(e) {
    this.complexBoundingBox || (this.complexBoundingBox = new SPE.Box3()), this.complexBoundingBox.setFromObjectSize(this, e);
  }

  raycast(e, t) {
    this.objectHelper.raycast(e, t);
  }

  copy(e, t) {
    const i = e.children;
    if (e.children = [], super.copy(e), e.children = i, this.userDataFromJson(this.userData), void 0 !== e.enableHelper && (this.enableHelper = e.enableHelper), void 0 !== e.objectHelper && (this.objectHelper.visible = e.objectHelper.visible), void 0 !== e.interaction && this.interaction.copy(e.interaction), !0 === t) for (let _t66 = 0, r = i.length; _t66 < r; ++_t66) {
      const _i59 = e.children[_t66];
      !0 === _i59.userData.isEntity && this.add(_i59.clone());
    }
    return this;
  }

  traverseEntity(e) {
    !function t(i) {
      if (!i.userData.isEntity) return;
      e(i);
      const r = i.children;

      for (let e = 0, _i60 = r.length; e < _i60; ++e) t(r[e]);
    }(this);
  }

  userDataFromJson(e) {
    this.userData = e, void 0 !== e.hiddenMatrix && (this.userData.hiddenMatrix = new THREE.Matrix4().fromArray(e.hiddenMatrix.elements)), void 0 === e.lock && (this.userData.lock = !1);
  }

  toJSON(e) {
    const t = this.userData;
    delete this.userData;
    const i = super.toJSON(e);
    return i.object.userData = {
      type: SPE.LightSpot.name,
      isEntity: t.isEntity,
      lock: t.lock,
      scaleLock: t.scaleLock,
      hiddenMatrix: {
        elements: t.hiddenMatrix.toArray()
      }
    }, i.object.enableHelper = this.enableHelper, i.object.interaction = this.interaction.toJSON(e), this.userData = t, i;
  }

}, SPE.LightPoint = class extends THREE.PointLight {
  constructor(e, t, i, r) {
    super(e, t, i, r), this.shadow.mapSize.width = 1024, this.shadow.mapSize.height = 1024, this.userData = {
      type: SPE.LightPoint.name,
      isEntity: !0,
      lock: !1,
      scaleLock: !1,
      hiddenMatrix: new THREE.Matrix4()
    }, this.enableHelper = !1, this.objectHelper = new SPE.PointLightHelper(this), this.interaction = new Interaction(this), this._gizmos = {};
    const a = this.shadow.camera;
    a.fov = 90, a.aspect = 1, a.near = 100, a.far = 2500;
    const s = new THREE.Vector3(-a.far + this.position.x, -a.far + this.position.y, -a.far + this.position.z),
          n = new THREE.Vector3(a.far + this.position.x, a.far + this.position.y, a.far + this.position.z),
          o = new THREE.Box3(s, n),
          h = new THREE.Box3Helper(o, new THREE.Color(16755200));
    h.visible = !1, this._gizmos.shadowmap = h, this.update();
  }

  get hiddenMatrix() {
    return this.userData.hiddenMatrix;
  }

  set hiddenMatrix(e) {
    this.userData.hiddenMatrix.copy(e);
  }

  get geometryHelper() {
    return SPE.PointLightHelper.geometryHelper;
  }

  get gizmos() {
    return this._gizmos;
  }

  set visibility(e) {
    this.visible = e, this.objectHelper.visible = e;

    for (let t = 0, i = this.children.length; t < i; ++t) void 0 !== this.children[t].traverseEntity && this.children[t].traverseEntity(function (t) {
      void 0 !== t.objectHelper && !0 === t.visible && (t.objectHelper.visible = e);
    });
  }

  get visibility() {
    return this.visible;
  }

  showGizmos() {
    for (const [e, t] of Object.entries(this._gizmos)) t instanceof THREE.Box3Helper && (t.visible = !0);
  }

  hideGizmos() {
    for (const [e, t] of Object.entries(this._gizmos)) t instanceof THREE.Box3Helper && (t.visible = !1);
  }

  update() {
    if (this.shadow && (this.shadow.camera.updateProjectionMatrix(), this._gizmos)) for (const [e, t] of Object.entries(this._gizmos)) if (t instanceof THREE.Box3Helper) {
      const _e96 = this.shadow.camera,
            i = new THREE.Vector3(-_e96.far + this.position.x, -_e96.far + this.position.y, -_e96.far + this.position.z),
            r = new THREE.Vector3(_e96.far + this.position.x, _e96.far + this.position.y, _e96.far + this.position.z);
      t.box.set(i, r), t.updateMatrixWorld(!0);
    }
  }

  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);

    for (var t = this.children, i = 0, r = t.length; i < r; i++) t[i].updateMatrixWorld(e);

    this.update();
  }

  updateWorldMatrix(e, t) {
    var i = this.parent;
    if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), !0 === t) for (var r = this.children, a = 0, s = r.length; a < s; a++) r[a].updateWorldMatrix(!1, !0);
  }

  attach(e) {
    const t = new THREE.Matrix4();
    return this.updateWorldMatrix(!0, !1), t.copy(this.matrixWorld).invert(), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), t.multiply(e.parent.matrixWorld)), void 0 !== e.userData.hiddenMatrix ? e.userData.hiddenMatrix.premultiply(t) : e.applyMatrix4(t), e.updateWorldMatrix(!1, !1), this.add(e), this;
  }

  computeSingleBoundingBox() {
    this.singleBoundingBox || (this.singleBoundingBox = new SPE.Box3()), this.singleBoundingBox.setFromObjectSize(this, !1), this.singleBoundingBox.computeVertices(), this.singleBoundingBox.computeEdges();
  }

  computeComplexBoundingBox(e) {
    this.complexBoundingBox || (this.complexBoundingBox = new SPE.Box3()), this.complexBoundingBox.setFromObjectSize(this, e);
  }

  raycast(e, t) {
    this.objectHelper.raycast(e, t);
  }

  copy(e, t) {
    const i = e.children;
    if (e.children = [], super.copy(e), e.children = i, this.userDataFromJson(this.userData), void 0 !== e.enableHelper && (this.enableHelper = e.enableHelper), void 0 !== e.objectHelper && (this.objectHelper.visible = e.objectHelper.visible), void 0 !== e.interaction && this.interaction.copy(e.interaction), !0 === t) for (let _t67 = 0, r = i.length; _t67 < r; ++_t67) {
      const _i61 = e.children[_t67];
      !0 === _i61.userData.isEntity && this.add(_i61.clone());
    }
    return this;
  }

  traverseEntity(e) {
    !function t(i) {
      if (!i.userData.isEntity) return;
      e(i);
      const r = i.children;

      for (let e = 0, _i62 = r.length; e < _i62; ++e) t(r[e]);
    }(this);
  }

  userDataFromJson(e) {
    this.userData = e, this.userData.positionToCenter = new THREE.Vector3(), void 0 !== e.hiddenMatrix && (this.userData.hiddenMatrix = new THREE.Matrix4().fromArray(e.hiddenMatrix.elements)), void 0 === e.lock && (this.userData.lock = !1);
  }

  toJSON(e) {
    const t = this.userData;
    delete this.userData;
    const i = super.toJSON(e);
    return i.object.userData = {
      type: SPE.LightPoint.name,
      isEntity: t.isEntity,
      lock: t.lock,
      scaleLock: t.scaleLock,
      hiddenMatrix: {
        elements: t.hiddenMatrix.toArray()
      }
    }, i.object.enableHelper = this.enableHelper, i.object.interaction = this.interaction.toJSON(e), this.userData = t, i;
  }

}, SPE.LightDirectional = class extends THREE.DirectionalLight {
  constructor(e, t) {
    super(e, t), this.shadow.mapSize.width = 1024, this.shadow.mapSize.height = 1024, this.userData = {
      type: SPE.LightDirectional.name,
      isEntity: !0,
      lock: !1,
      scaleLock: !1,
      hiddenMatrix: new THREE.Matrix4()
    }, this.enableHelper = !1, this.objectHelper = new SPE.DirectionalLightHelper(this), this.interaction = new Interaction(this), this._gizmos = {};
    const i = this.shadow.camera;
    i.top = 1250, i.bottom = -1250, i.right = 1250, i.left = -1250, i.near = 1, i.far = 2500;
    const r = new THREE.CameraHelper(this.shadow.camera);
    r.visible = !1, this._gizmos.shadowmap = r, this.update();
  }

  get hiddenMatrix() {
    return this.userData.hiddenMatrix;
  }

  set hiddenMatrix(e) {
    this.userData.hiddenMatrix.copy(e);
  }

  get geometryHelper() {
    return SPE.DirectionalLightHelper.geometryHelper;
  }

  get gizmos() {
    return this._gizmos;
  }

  set visibility(e) {
    this.visible = e, this.objectHelper.visible = e;

    for (let t = 0, i = this.children.length; t < i; ++t) void 0 !== this.children[t].traverseEntity && this.children[t].traverseEntity(function (t) {
      void 0 !== t.objectHelper && !0 === t.visible && (t.objectHelper.visible = e);
    });
  }

  get visibility() {
    return this.visible;
  }

  showGizmos() {
    for (const [e, t] of Object.entries(this._gizmos)) t instanceof THREE.CameraHelper && (t.visible = !0);
  }

  hideGizmos() {
    for (const [e, t] of Object.entries(this._gizmos)) t instanceof THREE.CameraHelper && (t.visible = !1);
  }

  update() {
    this.shadow.camera.updateProjectionMatrix();

    for (const [e, t] of Object.entries(this._gizmos)) t instanceof THREE.CameraHelper && t.update();
  }

  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0), !0 === this.enableHelper && this.objectHelper.update();

    for (var t = this.children, i = 0, r = t.length; i < r; i++) t[i].updateMatrixWorld(e);
  }

  updateWorldMatrix(e, t) {
    var i = this.parent;
    if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.multiplyMatrices(this.userData.hiddenMatrix, this.matrix) : (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.userData.hiddenMatrix), this.matrixWorld.multiplyMatrices(this.matrixWorld, this.matrix)), !0 === t) for (var r = this.children, a = 0, s = r.length; a < s; a++) r[a].updateWorldMatrix(!1, !0);
  }

  attach(e) {
    const t = new THREE.Matrix4();
    return this.updateWorldMatrix(!0, !1), t.copy(this.matrixWorld).invert(), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), t.multiply(e.parent.matrixWorld)), void 0 !== e.userData.hiddenMatrix ? e.userData.hiddenMatrix.premultiply(t) : e.applyMatrix4(t), e.updateWorldMatrix(!1, !1), this.add(e), this;
  }

  computeSingleBoundingBox() {
    this.singleBoundingBox || (this.singleBoundingBox = new SPE.Box3()), this.singleBoundingBox.setFromObjectSize(this, !1), this.singleBoundingBox.computeVertices(), this.singleBoundingBox.computeEdges();
  }

  computeComplexBoundingBox(e) {
    this.complexBoundingBox || (this.complexBoundingBox = new SPE.Box3()), this.complexBoundingBox.setFromObjectSize(this, e);
  }

  raycast(e, t) {
    this.objectHelper.raycast(e, t);
  }

  copy(e, t) {
    const i = e.children;
    if (e.children = [], super.copy(e), e.children = i, this.userDataFromJson(this.userData), void 0 !== e.enableHelper && (this.enableHelper = e.enableHelper), void 0 !== e.objectHelper && (this.objectHelper.visible = e.objectHelper.visible), void 0 !== e.interaction && this.interaction.copy(e.interaction), !0 === t) for (let _t68 = 0, r = i.length; _t68 < r; ++_t68) {
      const _i63 = e.children[_t68];
      !0 === _i63.userData.isEntity && this.add(_i63.clone());
    }
    return this;
  }

  traverseEntity(e) {
    !function t(i) {
      if (!i.userData.isEntity) return;
      e(i);
      const r = i.children;

      for (let e = 0, _i64 = r.length; e < _i64; ++e) t(r[e]);
    }(this);
  }

  userDataFromJson(e) {
    this.userData = e, void 0 !== e.hiddenMatrix && (this.userData.hiddenMatrix = new THREE.Matrix4().fromArray(e.hiddenMatrix.elements)), void 0 === e.lock && (this.userData.lock = !1);
  }

  toJSON(e) {
    const t = this.userData;
    delete this.userData;
    const i = super.toJSON(e);
    return i.object.userData = {
      type: SPE.LightDirectional.name,
      isEntity: t.isEntity,
      lock: t.lock,
      scaleLock: t.scaleLock,
      hiddenMatrix: {
        elements: t.hiddenMatrix.toArray()
      }
    }, i.object.enableHelper = this.enableHelper, i.object.interaction = this.interaction.toJSON(e), this.userData = t, i;
  }

}, SPE.SpotLightHelper = class extends THREE.SpotLightHelper {
  constructor(e, t = 6710886) {
    super(e, t), this.isObjectHelper = !0, this.name = `SpotLightHelper: ${e.uuid}`;
  }

  update() {
    const e = SPE.SpotLightHelper._vector,
          t = this.light.distance ? this.light.distance : 1e3,
          i = t * Math.tan(this.light.angle);
    this.cone.scale.set(i, i, t), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  }

  raycast(e, t) {
    var i = SPE.SpotLightHelper._ray,
        r = SPE.SpotLightHelper._sphere,
        a = SPE.SpotLightHelper._inverseMatrix,
        s = SPE.SpotLightHelper.geometryHelper,
        n = this.light.matrixWorld;

    if (null === s.boundingSphere && s.computeBoundingSphere(), r.copy(s.boundingSphere), r.applyMatrix4(n), !1 !== e.ray.intersectsSphere(r) && (a.copy(n).invert(), i.copy(e.ray).applyMatrix4(a), null === s.boundingBox || !1 !== i.intersectsBox(s.boundingBox))) {
      var o,
          h,
          l,
          c,
          d,
          m,
          u = s.index,
          p = s.attributes.position,
          f = s.drawRange;

      for (d = Math.max(0, f.start), m = Math.min(u.count, f.start + f.count); d < m; d += 3) h = u.getX(d), l = u.getX(d + 1), c = u.getX(d + 2), (o = E(this.light, e, i, p, h, l, c)) && (o.faceIndex = Math.floor(d / 3), t.push(o));
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
  }

}, SPE.SpotLightHelper._vector = new THREE.Vector3(), SPE.SpotLightHelper._ray = new THREE.Ray(), SPE.SpotLightHelper._sphere = new THREE.Sphere(), SPE.SpotLightHelper._inverseMatrix = new THREE.Matrix4(), SPE.SpotLightHelper.geometryHelper = new THREE.BoxBufferGeometry(30, 30, 30), SPE.PointLightHelper = class extends THREE.PointLightHelper {
  constructor(e, t = 15, i = 6710886) {
    super(e, t, i), this.isObjectHelper = !0, this.name = `PointLightHelper: ${e.uuid}`;
  }

  raycast(e, t) {
    var i = SPE.PointLightHelper._ray,
        r = SPE.PointLightHelper._sphere,
        a = SPE.PointLightHelper._inverseMatrix,
        s = SPE.PointLightHelper.geometryHelper,
        n = this.light.matrixWorld;

    if (null === s.boundingSphere && s.computeBoundingSphere(), r.copy(s.boundingSphere), r.applyMatrix4(n), !1 !== e.ray.intersectsSphere(r) && (a.copy(n).invert(), i.copy(e.ray).applyMatrix4(a), null === s.boundingBox || !1 !== i.intersectsBox(s.boundingBox))) {
      var o,
          h,
          l,
          c,
          d,
          m,
          u = s.index,
          p = s.attributes.position,
          f = s.drawRange;

      for (d = Math.max(0, f.start), m = Math.min(u.count, f.start + f.count); d < m; d += 3) h = u.getX(d), l = u.getX(d + 1), c = u.getX(d + 2), (o = E(this.light, e, i, p, h, l, c)) && (o.faceIndex = Math.floor(d / 3), t.push(o));
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
  }

}, SPE.PointLightHelper._ray = new THREE.Ray(), SPE.PointLightHelper._sphere = new THREE.Sphere(), SPE.PointLightHelper._inverseMatrix = new THREE.Matrix4(), SPE.PointLightHelper.geometryHelper = new THREE.BoxBufferGeometry(30, 30, 30), SPE.DirectionalLightHelper = class extends THREE.DirectionalLightHelper {
  constructor(e, t = 15, i = 10066329) {
    super(e, t, i), this.isObjectHelper = !0, this.name = `DirectionalLightHelper: ${e.uuid}`;
  }

  raycast(e, t) {
    var i = SPE.DirectionalLightHelper._ray,
        r = SPE.DirectionalLightHelper._sphere,
        a = SPE.DirectionalLightHelper._inverseMatrix,
        s = SPE.DirectionalLightHelper.geometryHelper,
        n = this.light.matrixWorld;

    if (null === s.boundingSphere && s.computeBoundingSphere(), r.copy(s.boundingSphere), r.applyMatrix4(n), !1 !== e.ray.intersectsSphere(r) && (a.copy(n).invert(), i.copy(e.ray).applyMatrix4(a), null === s.boundingBox || !1 !== i.intersectsBox(s.boundingBox))) {
      var o,
          h,
          l,
          c,
          d,
          m,
          u = s.index,
          p = s.attributes.position,
          f = s.drawRange;

      for (d = Math.max(0, f.start), m = Math.min(u.count, f.start + f.count); d < m; d += 3) h = u.getX(d), l = u.getX(d + 1), c = u.getX(d + 2), (o = E(this.light, e, i, p, h, l, c)) && (o.faceIndex = Math.floor(d / 3), t.push(o));
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
  }

}, SPE.DirectionalLightHelper._ray = new THREE.Ray(), SPE.DirectionalLightHelper._sphere = new THREE.Sphere(), SPE.DirectionalLightHelper._inverseMatrix = new THREE.Matrix4(), SPE.DirectionalLightHelper.geometryHelper = new THREE.BoxBufferGeometry(30, 30, 30), SPE.Raycaster = class extends THREE.Raycaster {
  setFromCamera(e, t) {
    t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, -1).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error('THREE.Raycaster: Unsupported camera type.');
  }

  createRaycastLineHelper() {
    const e = new THREE.LineBasicMaterial({
      color: 16711680,
      linewidth: 10
    }),
          t = new THREE.Geometry(),
          i = new THREE.Vector3(this.ray.origin.x, this.ray.origin.y, this.ray.origin.z),
          r = new THREE.Vector3(this.ray.direction.x, this.ray.direction.y, this.ray.direction.z),
          a = new THREE.Vector3().lerpVectors(i, r, 0.5);
    return r.multiplyScalar(0), t.vertices.push(i), t.vertices.push(a), t.vertices.push(r), new THREE.Line(t, e);
  }

}, SPE.Box3 = function (e, t) {
  THREE.Box3.call(this, e, t), this.transform = new THREE.Matrix4();
}, SPE.Box3.prototype = Object.create(THREE.Box3.prototype), SPE.Box3.prototype.constructor = SPE.Box3, SPE.Box3.prototype.setFromObjectSize = function (e, t) {
  e.updateWorldMatrix(!1, !1), this.makeEmpty(), this.transform = e.matrixWorld;
  let i = new THREE.Matrix4().copy(e.matrixWorld).invert();
  return this.expandByObjectSize(e, i, t);
}, SPE.Box3.prototype.expandByObjectSize = function () {
  var e,
      t,
      i = new THREE.Vector3(),
      r = new THREE.Matrix4();
  const a = new THREE.Box3(),
        s = new THREE.Vector3();
  var n;

  function o(o) {
    if (void 0 !== o.geometry) {
      const e = o.geometry.userData.parameters;
      a.setFromArray(o.geometry.getAttribute('position').array), a.getCenter(s), i.set(e.width, e.height, e.depth).multiplyScalar(0.5);
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

      for (t = 0, i = o.length; t < i; t++) a.copy(o[t]), a.applyMatrix4(s.matrixWorld), void 0 !== r && a.applyMatrix4(r), e.expandByPoint(a);
    } else if (n.isBufferGeometry) {
      var h = n.attributes.position;
      if (void 0 !== h) for (t = 0, i = h.count; t < i; t++) a.fromBufferAttribute(h, t).applyMatrix4(s.matrixWorld), void 0 !== r && a.applyMatrix4(r), e.expandByPoint(a);
    }
  }

  return function (t, i) {
    return e = this, t.updateMatrixWorld(!0), r = i, t.traverse(s), this;
  };
}(), SPE.Box3.prototype.computeVertices = function () {
  let e = this.getSize(new THREE.Vector3()).multiplyScalar(0.5);
  var t = this.getCenter(new THREE.Vector3()),
      i = new THREE.Matrix4().copy(this.transform).setPosition(t);
  this.vertices = [new THREE.Vector3(-e.x, e.y, e.z).applyMatrix4(i), new THREE.Vector3(-e.x, -e.y, e.z).applyMatrix4(i), new THREE.Vector3(e.x, -e.y, e.z).applyMatrix4(i), new THREE.Vector3(e.x, e.y, e.z).applyMatrix4(i), new THREE.Vector3(-e.x, e.y, -e.z).applyMatrix4(i), new THREE.Vector3(-e.x, -e.y, -e.z).applyMatrix4(i), new THREE.Vector3(e.x, -e.y, -e.z).applyMatrix4(i), new THREE.Vector3(e.x, e.y, -e.z).applyMatrix4(i)];
}, SPE.Box3.prototype.computeEdges = function () {
  this.vertices || this.computeVertices(), this.edges = [new THREE.Line3().set(this.vertices[0], this.vertices[3]), new THREE.Line3().set(this.vertices[1], this.vertices[2]), new THREE.Line3().set(this.vertices[5], this.vertices[6]), new THREE.Line3().set(this.vertices[4], this.vertices[7]), new THREE.Line3().set(this.vertices[0], this.vertices[1]), new THREE.Line3().set(this.vertices[3], this.vertices[2]), new THREE.Line3().set(this.vertices[7], this.vertices[6]), new THREE.Line3().set(this.vertices[4], this.vertices[5]), new THREE.Line3().set(this.vertices[0], this.vertices[4]), new THREE.Line3().set(this.vertices[1], this.vertices[5]), new THREE.Line3().set(this.vertices[2], this.vertices[6]), new THREE.Line3().set(this.vertices[3], this.vertices[7])];
}, SPE.Box3.prototype.computeFaces = function () {
  this.vertices || this.computeVertices(), this.faces = [new THREE.Vector3().copy(this.vertices[0]).sub(this.vertices[2]).multiplyScalar(0.5).add(this.vertices[2]), new THREE.Vector3().copy(this.vertices[3]).sub(this.vertices[6]).multiplyScalar(0.5).add(this.vertices[6]), new THREE.Vector3().copy(this.vertices[7]).sub(this.vertices[5]).multiplyScalar(0.5).add(this.vertices[5]), new THREE.Vector3().copy(this.vertices[4]).sub(this.vertices[1]).multiplyScalar(0.5).add(this.vertices[1]), new THREE.Vector3().copy(this.vertices[0]).sub(this.vertices[7]).multiplyScalar(0.5).add(this.vertices[7]), new THREE.Vector3().copy(this.vertices[1]).sub(this.vertices[6]).multiplyScalar(0.5).add(this.vertices[6])];
}, SPE.Math = class {
  static slerp(e, t, i, r) {
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
  }

  static getRandomInt(e, t) {
    return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e) + e);
  }

  static getProjection(e, t, i) {
    let r = e.clone().sub(t),
        a = i.clone().sub(t),
        s = t.distanceTo(i);
    return r.dot(a) / s;
  }

  static projectOnVector(e, t) {
    return e.clone().dot(t) / t.length();
  }

  static angle2D(e, t, i, r, a = !1) {
    let s = i - e,
        n = r - t,
        o = Math.atan2(n, s);
    return o *= 180 / Math.PI, a && o < 0 && (o = 360 + o), o;
  }

  static angle3D(e, t, i) {
    let r = e.clone().sub(t),
        a = i.clone().sub(t),
        s = t.distanceTo(e),
        n = t.distanceTo(i),
        o = r.dot(a) / (s * n);
    return Math.acos(o);
  }

  static rotatePosition2D(e, t, i) {
    return {
      x: e * Math.cos(i) - t * Math.sin(i),
      y: e * Math.sin(i) + t * Math.cos(i),
      z: 0
    };
  }

  static rotatePosition3D(e, t) {
    return e.clone().applyMatrix3(SPE.Math.getRotateMatrix(t.x, t.y, t.z));
  }

  static getRotateMatrix(e, t, i) {
    let r = new THREE.Matrix3(),
        a = new THREE.Matrix3(),
        s = new THREE.Matrix3();
    return r.set(1, 0, 0, 0, Math.cos(e), -Math.sin(e), 0, Math.sin(e), Math.cos(e)), a.set(Math.cos(t), 0, Math.sin(t), 0, 1, 0, -Math.sin(t), 0, Math.cos(t)), s.set(Math.cos(i), -Math.sin(i), 0, Math.sin(i), Math.cos(i), 0, 0, 0, 1), r.multiply(a).multiply(s);
  }

  static round(e, t) {
    let i = (e + 'e').split('e');
    return +((i = (Math.round(i[0] + 'e' + (+i[1] + t)) + 'e').split('e'))[0] + 'e' + (+i[1] - t));
  }

  static normalize(e, t, i) {
    return (e - t) / (i - t);
  }

  static lerp(e, t, i) {
    return (i - t) * e + t;
  }

  static map(e, t, i, r, a) {
    return SPE.Math.lerp(SPE.Math.normalize(e, t, i), r, a);
  }

  static clamp(e, t, i) {
    return Math.min(Math.max(e, t), i);
  }

  static getMiddlePointByPerc(e, t, i) {
    let r = t.clone().sub(e),
        a = r.length();
    return r = r.normalize().multiplyScalar(a * i), e.clone().add(r);
  }

  static getVectorDistanceInFloat(e, t) {
    let i = e.x - t.x,
        r = e.y - t.y,
        a = e.z - t.z;
    return Math.sqrt(i * i + r * r + a * a);
  }

  static getVectorDistanceInVector(e, t) {
    let i = e.x - t.x,
        r = e.y - t.y,
        a = e.z - t.z;
    return new THREE.Vector3(i, r, a);
  }

  static getObjectSize(e) {
    let t = new THREE.Vector3();
    return e.geometry.computeBoundingBox(), t.x = e.geometry.boundingBox.max.x - e.geometry.boundingBox.min.x, t.y = e.geometry.boundingBox.max.y - e.geometry.boundingBox.min.y, t.z = e.geometry.boundingBox.max.z - e.geometry.boundingBox.min.z, t;
  }

  static resetTransform(e, t) {
    for (let i = 0; i < t.length; i++) 'all' == e ? (t[i].position.set(0, 0, 0), t[i].scale.set(1, 1, 1), t[i].rotation.set(0, 0, 0)) : 'scale' == e ? t[i].scale.set(1, 1, 1) : t[i].rotation.set(0, 0, 0), t[i].geometry && t[i].geometry.computeBoundingBox();
  }

  static containsObject(e, t) {
    for (let i = 0; i < t.length; i++) if (t[i] === e) return !0;

    return !1;
  }

  static findCentroid(e) {
    let t = new THREE.Vector3(),
        i = e.length;

    for (let _i65 = 0; _i65 < e.length; _i65++) t.set(t.x + e[_i65].position.x, t.y + e[_i65].position.y, t.z + e[_i65].position.z);

    return t.set(t.x / i, t.y / i, t.z / i), t;
  }

  static removeFromArray(e, t) {
    const i = e.indexOf(t);
    e.splice(i, 1);
  }

  static getPositionRelativeToElement(e) {
    let t = e.target.getBoundingClientRect();
    return {
      mx: e.clientX - t.left,
      my: e.clientY - t.top
    };
  }

  static getElementMousePos(e, t) {
    return {
      mx: t.pageX - e.offset().left,
      my: t.pageY - e.offset().top
    };
  }

  static changeColor(e, t) {
    let i = e.geometry.attributes.color.array,
        r = 3 * e.geometry.attributes.color.count,
        a = 1 / (t.steps * r),
        s = new THREE.Color();

    for (let _e97 = 0, n = r; _e97 < n; _e97++) s.set(makeColorGradient(_e97, a, t.phase)), i[3 * _e97] = s.r, i[3 * _e97 + 1] = s.g, i[3 * _e97 + 2] = s.b;

    e.geometry.attributes.color.needsUpdate = !0;
  }

  static getColoredBufferLine(e, t, i) {
    let r,
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

    for (let _e98 = 0, _i66 = o; _e98 < _i66; _e98++) r = n[_e98].x, a = n[_e98].y, s = n[_e98].z, c[3 * _e98] = r, c[3 * _e98 + 1] = a, c[3 * _e98 + 2] = s, u.set(makeColorGradient(_e98, m, t)), d[3 * _e98] = u.r, d[3 * _e98 + 1] = u.g, d[3 * _e98 + 2] = u.b;

    return h.setAttribute('position', new THREE.BufferAttribute(c, 3)), h.setAttribute('color', new THREE.BufferAttribute(d, 3)), new THREE.Line(h, l);
  }

  static makeColorGradient(e, t, i) {
    let r, a, s;
    a = s = r = t;
    let n = i + 2,
        o = i + 4,
        h = 127 * Math.sin(r * e + i) + 128,
        l = 127 * Math.sin(a * e + n) + 128,
        c = 127 * Math.sin(s * e + o) + 128;
    return parseInt('0x' + _byte2Hex(h) + _byte2Hex(l) + _byte2Hex(c));
  }

  static _byte2Hex(e) {
    return String('0123456789ABCDEF'.substr(e >> 4 & 15, 1)) + '0123456789ABCDEF'.substr(15 & e, 1);
  }

  static drawBezierTangent(e, t) {
    let i = new THREE.LineCurve3(e, t).getPoints(1),
        r = new THREE.BufferGeometry().setFromPoints(i);
    return new THREE.Line(r, new THREE.LineBasicMaterial({
      color: 16711680
    }));
  }

  static fixUvs(e, t, i) {
    for (let r = 0; r < e.attributes.uv.array.length; r += 2) e.attributes.uv.array[r] = (e.attributes.uv.array[r] + t / 2) / t, e.attributes.uv.array[r + 1] = 1 - (e.attributes.uv.array[r + 1] - i / 2) / i * -1;
  }

  static flattenArray(e) {
    return e = [].concat.apply([], e);
  }

  static sortNumber(e, t) {
    return e - t;
  }

  static swapArrayValues(e, t, i) {
    let r = e[t];
    e[t] = e[i], e[i] = r;
  }

};

var styles = {"canvas":"_styles-module__canvas__3yjUb","container":"_styles-module__container__1Lxpd"};

const Spline = ({
  scene,
  assets,
  id,
  className,
  style
}) => {
  const canvasRef = useRef();
  useEffect(() => {
    const {
      current
    } = canvasRef;

    if (current != null) {
      current.width = current.width;
    }

    const splineRuntime = new SpeRuntime(scene, assets || {
      fonts: [],
      images: [],
      models: [],
      animations: []
    }, {}, current);
    splineRuntime.run();
  }, [scene, assets]);
  return createElement("div", {
    id: id,
    className: className,
    style: style
  }, createElement("div", {
    className: styles.container
  }, createElement("canvas", {
    id: 'canvas3d',
    className: styles.canvas,
    ref: canvasRef
  })));
};

export { Spline };
//# sourceMappingURL=react-spline.modern.js.map
