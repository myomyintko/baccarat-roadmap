"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/lodash/_apply.js
  var require_apply = __commonJS({
    "node_modules/lodash/_apply.js"(exports, module) {
      "use strict";
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      module.exports = apply;
    }
  });

  // node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "node_modules/lodash/identity.js"(exports, module) {
      "use strict";
      function identity(value) {
        return value;
      }
      module.exports = identity;
    }
  });

  // node_modules/lodash/_overRest.js
  var require_overRest = __commonJS({
    "node_modules/lodash/_overRest.js"(exports, module) {
      "use strict";
      var apply = require_apply();
      var nativeMax = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      module.exports = overRest;
    }
  });

  // node_modules/lodash/constant.js
  var require_constant = __commonJS({
    "node_modules/lodash/constant.js"(exports, module) {
      "use strict";
      function constant(value) {
        return function() {
          return value;
        };
      }
      module.exports = constant;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      "use strict";
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      "use strict";
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      "use strict";
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      "use strict";
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      "use strict";
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      "use strict";
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      "use strict";
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports, module) {
      "use strict";
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "node_modules/lodash/_coreJsData.js"(exports, module) {
      "use strict";
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "node_modules/lodash/_isMasked.js"(exports, module) {
      "use strict";
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "node_modules/lodash/_toSource.js"(exports, module) {
      "use strict";
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "node_modules/lodash/_baseIsNative.js"(exports, module) {
      "use strict";
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "node_modules/lodash/_getValue.js"(exports, module) {
      "use strict";
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module.exports = getValue;
    }
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "node_modules/lodash/_getNative.js"(exports, module) {
      "use strict";
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "node_modules/lodash/_defineProperty.js"(exports, module) {
      "use strict";
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      module.exports = defineProperty;
    }
  });

  // node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS({
    "node_modules/lodash/_baseSetToString.js"(exports, module) {
      "use strict";
      var constant = require_constant();
      var defineProperty = require_defineProperty();
      var identity = require_identity();
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      module.exports = baseSetToString;
    }
  });

  // node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS({
    "node_modules/lodash/_shortOut.js"(exports, module) {
      "use strict";
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      module.exports = shortOut;
    }
  });

  // node_modules/lodash/_setToString.js
  var require_setToString = __commonJS({
    "node_modules/lodash/_setToString.js"(exports, module) {
      "use strict";
      var baseSetToString = require_baseSetToString();
      var shortOut = require_shortOut();
      var setToString = shortOut(baseSetToString);
      module.exports = setToString;
    }
  });

  // node_modules/lodash/_baseRest.js
  var require_baseRest = __commonJS({
    "node_modules/lodash/_baseRest.js"(exports, module) {
      "use strict";
      var identity = require_identity();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      module.exports = baseRest;
    }
  });

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "node_modules/lodash/_listCacheClear.js"(exports, module) {
      "use strict";
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "node_modules/lodash/eq.js"(exports, module) {
      "use strict";
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports, module) {
      "use strict";
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "node_modules/lodash/_listCacheDelete.js"(exports, module) {
      "use strict";
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "node_modules/lodash/_listCacheGet.js"(exports, module) {
      "use strict";
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "node_modules/lodash/_listCacheHas.js"(exports, module) {
      "use strict";
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "node_modules/lodash/_listCacheSet.js"(exports, module) {
      "use strict";
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "node_modules/lodash/_ListCache.js"(exports, module) {
      "use strict";
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "node_modules/lodash/_stackClear.js"(exports, module) {
      "use strict";
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module.exports = stackClear;
    }
  });

  // node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "node_modules/lodash/_stackDelete.js"(exports, module) {
      "use strict";
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      module.exports = stackDelete;
    }
  });

  // node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "node_modules/lodash/_stackGet.js"(exports, module) {
      "use strict";
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module.exports = stackGet;
    }
  });

  // node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "node_modules/lodash/_stackHas.js"(exports, module) {
      "use strict";
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module.exports = stackHas;
    }
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "node_modules/lodash/_Map.js"(exports, module) {
      "use strict";
      var getNative = require_getNative();
      var root = require_root();
      var Map = getNative(root, "Map");
      module.exports = Map;
    }
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "node_modules/lodash/_nativeCreate.js"(exports, module) {
      "use strict";
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "node_modules/lodash/_hashClear.js"(exports, module) {
      "use strict";
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "node_modules/lodash/_hashDelete.js"(exports, module) {
      "use strict";
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "node_modules/lodash/_hashGet.js"(exports, module) {
      "use strict";
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "node_modules/lodash/_hashHas.js"(exports, module) {
      "use strict";
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "node_modules/lodash/_hashSet.js"(exports, module) {
      "use strict";
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "node_modules/lodash/_Hash.js"(exports, module) {
      "use strict";
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "node_modules/lodash/_mapCacheClear.js"(exports, module) {
      "use strict";
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "node_modules/lodash/_isKeyable.js"(exports, module) {
      "use strict";
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "node_modules/lodash/_getMapData.js"(exports, module) {
      "use strict";
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      "use strict";
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "node_modules/lodash/_mapCacheGet.js"(exports, module) {
      "use strict";
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "node_modules/lodash/_mapCacheHas.js"(exports, module) {
      "use strict";
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "node_modules/lodash/_mapCacheSet.js"(exports, module) {
      "use strict";
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "node_modules/lodash/_MapCache.js"(exports, module) {
      "use strict";
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "node_modules/lodash/_stackSet.js"(exports, module) {
      "use strict";
      var ListCache = require_ListCache();
      var Map = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module.exports = stackSet;
    }
  });

  // node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "node_modules/lodash/_Stack.js"(exports, module) {
      "use strict";
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;
    }
  });

  // node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "node_modules/lodash/_baseAssignValue.js"(exports, module) {
      "use strict";
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      module.exports = baseAssignValue;
    }
  });

  // node_modules/lodash/_assignMergeValue.js
  var require_assignMergeValue = __commonJS({
    "node_modules/lodash/_assignMergeValue.js"(exports, module) {
      "use strict";
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      function assignMergeValue(object, key, value) {
        if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignMergeValue;
    }
  });

  // node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "node_modules/lodash/_createBaseFor.js"(exports, module) {
      "use strict";
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      module.exports = createBaseFor;
    }
  });

  // node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "node_modules/lodash/_baseFor.js"(exports, module) {
      "use strict";
      var createBaseFor = require_createBaseFor();
      var baseFor = createBaseFor();
      module.exports = baseFor;
    }
  });

  // node_modules/lodash/_cloneBuffer.js
  var require_cloneBuffer = __commonJS({
    "node_modules/lodash/_cloneBuffer.js"(exports, module) {
      "use strict";
      var root = require_root();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
      }
      module.exports = cloneBuffer;
    }
  });

  // node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "node_modules/lodash/_Uint8Array.js"(exports, module) {
      "use strict";
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module.exports = Uint8Array2;
    }
  });

  // node_modules/lodash/_cloneArrayBuffer.js
  var require_cloneArrayBuffer = __commonJS({
    "node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
      "use strict";
      var Uint8Array2 = require_Uint8Array();
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
        return result;
      }
      module.exports = cloneArrayBuffer;
    }
  });

  // node_modules/lodash/_cloneTypedArray.js
  var require_cloneTypedArray = __commonJS({
    "node_modules/lodash/_cloneTypedArray.js"(exports, module) {
      "use strict";
      var cloneArrayBuffer = require_cloneArrayBuffer();
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      module.exports = cloneTypedArray;
    }
  });

  // node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "node_modules/lodash/_copyArray.js"(exports, module) {
      "use strict";
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module.exports = copyArray;
    }
  });

  // node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS({
    "node_modules/lodash/_baseCreate.js"(exports, module) {
      "use strict";
      var isObject = require_isObject();
      var objectCreate = Object.create;
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      module.exports = baseCreate;
    }
  });

  // node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "node_modules/lodash/_overArg.js"(exports, module) {
      "use strict";
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "node_modules/lodash/_getPrototype.js"(exports, module) {
      "use strict";
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    }
  });

  // node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "node_modules/lodash/_isPrototype.js"(exports, module) {
      "use strict";
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }
  });

  // node_modules/lodash/_initCloneObject.js
  var require_initCloneObject = __commonJS({
    "node_modules/lodash/_initCloneObject.js"(exports, module) {
      "use strict";
      var baseCreate = require_baseCreate();
      var getPrototype = require_getPrototype();
      var isPrototype = require_isPrototype();
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      module.exports = initCloneObject;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      "use strict";
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "node_modules/lodash/_baseIsArguments.js"(exports, module) {
      "use strict";
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }
  });

  // node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "node_modules/lodash/isArguments.js"(exports, module) {
      "use strict";
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports, module) {
      "use strict";
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "node_modules/lodash/isLength.js"(exports, module) {
      "use strict";
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }
  });

  // node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "node_modules/lodash/isArrayLike.js"(exports, module) {
      "use strict";
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module.exports = isArrayLike;
    }
  });

  // node_modules/lodash/isArrayLikeObject.js
  var require_isArrayLikeObject = __commonJS({
    "node_modules/lodash/isArrayLikeObject.js"(exports, module) {
      "use strict";
      var isArrayLike = require_isArrayLike();
      var isObjectLike = require_isObjectLike();
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      module.exports = isArrayLikeObject;
    }
  });

  // node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "node_modules/lodash/stubFalse.js"(exports, module) {
      "use strict";
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }
  });

  // node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "node_modules/lodash/isBuffer.js"(exports, module) {
      "use strict";
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    }
  });

  // node_modules/lodash/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "node_modules/lodash/isPlainObject.js"(exports, module) {
      "use strict";
      var baseGetTag = require_baseGetTag();
      var getPrototype = require_getPrototype();
      var isObjectLike = require_isObjectLike();
      var objectTag = "[object Object]";
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject;
    }
  });

  // node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      "use strict";
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }
  });

  // node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "node_modules/lodash/_baseUnary.js"(exports, module) {
      "use strict";
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }
  });

  // node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "node_modules/lodash/_nodeUtil.js"(exports, module) {
      "use strict";
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      module.exports = nodeUtil;
    }
  });

  // node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "node_modules/lodash/isTypedArray.js"(exports, module) {
      "use strict";
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }
  });

  // node_modules/lodash/_safeGet.js
  var require_safeGet = __commonJS({
    "node_modules/lodash/_safeGet.js"(exports, module) {
      "use strict";
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      module.exports = safeGet;
    }
  });

  // node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "node_modules/lodash/_assignValue.js"(exports, module) {
      "use strict";
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignValue;
    }
  });

  // node_modules/lodash/_copyObject.js
  var require_copyObject = __commonJS({
    "node_modules/lodash/_copyObject.js"(exports, module) {
      "use strict";
      var assignValue = require_assignValue();
      var baseAssignValue = require_baseAssignValue();
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
          if (newValue === void 0) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      module.exports = copyObject;
    }
  });

  // node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "node_modules/lodash/_baseTimes.js"(exports, module) {
      "use strict";
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module.exports = baseTimes;
    }
  });

  // node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "node_modules/lodash/_isIndex.js"(exports, module) {
      "use strict";
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }
  });

  // node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      "use strict";
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    }
  });

  // node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
      "use strict";
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = nativeKeysIn;
    }
  });

  // node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "node_modules/lodash/_baseKeysIn.js"(exports, module) {
      "use strict";
      var isObject = require_isObject();
      var isPrototype = require_isPrototype();
      var nativeKeysIn = require_nativeKeysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeysIn;
    }
  });

  // node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "node_modules/lodash/keysIn.js"(exports, module) {
      "use strict";
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeysIn = require_baseKeysIn();
      var isArrayLike = require_isArrayLike();
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      module.exports = keysIn;
    }
  });

  // node_modules/lodash/toPlainObject.js
  var require_toPlainObject = __commonJS({
    "node_modules/lodash/toPlainObject.js"(exports, module) {
      "use strict";
      var copyObject = require_copyObject();
      var keysIn = require_keysIn();
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      module.exports = toPlainObject;
    }
  });

  // node_modules/lodash/_baseMergeDeep.js
  var require_baseMergeDeep = __commonJS({
    "node_modules/lodash/_baseMergeDeep.js"(exports, module) {
      "use strict";
      var assignMergeValue = require_assignMergeValue();
      var cloneBuffer = require_cloneBuffer();
      var cloneTypedArray = require_cloneTypedArray();
      var copyArray = require_copyArray();
      var initCloneObject = require_initCloneObject();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isArrayLikeObject = require_isArrayLikeObject();
      var isBuffer = require_isBuffer();
      var isFunction = require_isFunction();
      var isObject = require_isObject();
      var isPlainObject = require_isPlainObject();
      var isTypedArray = require_isTypedArray();
      var safeGet = require_safeGet();
      var toPlainObject = require_toPlainObject();
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
        var isCommon = newValue === void 0;
        if (isCommon) {
          var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      module.exports = baseMergeDeep;
    }
  });

  // node_modules/lodash/_baseMerge.js
  var require_baseMerge = __commonJS({
    "node_modules/lodash/_baseMerge.js"(exports, module) {
      "use strict";
      var Stack = require_Stack();
      var assignMergeValue = require_assignMergeValue();
      var baseFor = require_baseFor();
      var baseMergeDeep = require_baseMergeDeep();
      var isObject = require_isObject();
      var keysIn = require_keysIn();
      var safeGet = require_safeGet();
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
            if (newValue === void 0) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      module.exports = baseMerge;
    }
  });

  // node_modules/lodash/_customDefaultsMerge.js
  var require_customDefaultsMerge = __commonJS({
    "node_modules/lodash/_customDefaultsMerge.js"(exports, module) {
      "use strict";
      var baseMerge = require_baseMerge();
      var isObject = require_isObject();
      function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
        if (isObject(objValue) && isObject(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, void 0, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      module.exports = customDefaultsMerge;
    }
  });

  // node_modules/lodash/_isIterateeCall.js
  var require_isIterateeCall = __commonJS({
    "node_modules/lodash/_isIterateeCall.js"(exports, module) {
      "use strict";
      var eq = require_eq();
      var isArrayLike = require_isArrayLike();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
          return eq(object[index], value);
        }
        return false;
      }
      module.exports = isIterateeCall;
    }
  });

  // node_modules/lodash/_createAssigner.js
  var require_createAssigner = __commonJS({
    "node_modules/lodash/_createAssigner.js"(exports, module) {
      "use strict";
      var baseRest = require_baseRest();
      var isIterateeCall = require_isIterateeCall();
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? void 0 : customizer;
            length = 1;
          }
          object = Object(object);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, index, customizer);
            }
          }
          return object;
        });
      }
      module.exports = createAssigner;
    }
  });

  // node_modules/lodash/mergeWith.js
  var require_mergeWith = __commonJS({
    "node_modules/lodash/mergeWith.js"(exports, module) {
      "use strict";
      var baseMerge = require_baseMerge();
      var createAssigner = require_createAssigner();
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      module.exports = mergeWith;
    }
  });

  // node_modules/lodash/defaultsDeep.js
  var require_defaultsDeep = __commonJS({
    "node_modules/lodash/defaultsDeep.js"(exports, module) {
      "use strict";
      var apply = require_apply();
      var baseRest = require_baseRest();
      var customDefaultsMerge = require_customDefaultsMerge();
      var mergeWith = require_mergeWith();
      var defaultsDeep = baseRest(function(args) {
        args.push(void 0, customDefaultsMerge);
        return apply(mergeWith, void 0, args);
      });
      module.exports = defaultsDeep;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports, module) {
      "use strict";
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "node_modules/lodash/_isKey.js"(exports, module) {
      "use strict";
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module.exports = isKey;
    }
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "node_modules/lodash/memoize.js"(exports, module) {
      "use strict";
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "node_modules/lodash/_memoizeCapped.js"(exports, module) {
      "use strict";
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "node_modules/lodash/_stringToPath.js"(exports, module) {
      "use strict";
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports, module) {
      "use strict";
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "node_modules/lodash/_baseToString.js"(exports, module) {
      "use strict";
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "node_modules/lodash/toString.js"(exports, module) {
      "use strict";
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    }
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "node_modules/lodash/_castPath.js"(exports, module) {
      "use strict";
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "node_modules/lodash/_toKey.js"(exports, module) {
      "use strict";
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "node_modules/lodash/_baseGet.js"(exports, module) {
      "use strict";
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module.exports = baseGet;
    }
  });

  // node_modules/lodash/get.js
  var require_get = __commonJS({
    "node_modules/lodash/get.js"(exports, module) {
      "use strict";
      var baseGet = require_baseGet();
      function get(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get;
    }
  });

  // node_modules/lodash/_baseFindIndex.js
  var require_baseFindIndex = __commonJS({
    "node_modules/lodash/_baseFindIndex.js"(exports, module) {
      "use strict";
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      module.exports = baseFindIndex;
    }
  });

  // node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "node_modules/lodash/_setCacheAdd.js"(exports, module) {
      "use strict";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module.exports = setCacheAdd;
    }
  });

  // node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "node_modules/lodash/_setCacheHas.js"(exports, module) {
      "use strict";
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module.exports = setCacheHas;
    }
  });

  // node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "node_modules/lodash/_SetCache.js"(exports, module) {
      "use strict";
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module.exports = SetCache;
    }
  });

  // node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "node_modules/lodash/_arraySome.js"(exports, module) {
      "use strict";
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      module.exports = arraySome;
    }
  });

  // node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "node_modules/lodash/_cacheHas.js"(exports, module) {
      "use strict";
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      module.exports = cacheHas;
    }
  });

  // node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "node_modules/lodash/_equalArrays.js"(exports, module) {
      "use strict";
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      module.exports = equalArrays;
    }
  });

  // node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "node_modules/lodash/_mapToArray.js"(exports, module) {
      "use strict";
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module.exports = mapToArray;
    }
  });

  // node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "node_modules/lodash/_setToArray.js"(exports, module) {
      "use strict";
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      module.exports = setToArray;
    }
  });

  // node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "node_modules/lodash/_equalByTag.js"(exports, module) {
      "use strict";
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module.exports = equalByTag;
    }
  });

  // node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "node_modules/lodash/_arrayPush.js"(exports, module) {
      "use strict";
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      module.exports = arrayPush;
    }
  });

  // node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
      "use strict";
      var arrayPush = require_arrayPush();
      var isArray = require_isArray();
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module.exports = baseGetAllKeys;
    }
  });

  // node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "node_modules/lodash/_arrayFilter.js"(exports, module) {
      "use strict";
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module.exports = arrayFilter;
    }
  });

  // node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "node_modules/lodash/stubArray.js"(exports, module) {
      "use strict";
      function stubArray() {
        return [];
      }
      module.exports = stubArray;
    }
  });

  // node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "node_modules/lodash/_getSymbols.js"(exports, module) {
      "use strict";
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      module.exports = getSymbols;
    }
  });

  // node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "node_modules/lodash/_nativeKeys.js"(exports, module) {
      "use strict";
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }
  });

  // node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "node_modules/lodash/_baseKeys.js"(exports, module) {
      "use strict";
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    }
  });

  // node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "node_modules/lodash/keys.js"(exports, module) {
      "use strict";
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module.exports = keys;
    }
  });

  // node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "node_modules/lodash/_getAllKeys.js"(exports, module) {
      "use strict";
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module.exports = getAllKeys;
    }
  });

  // node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "node_modules/lodash/_equalObjects.js"(exports, module) {
      "use strict";
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module.exports = equalObjects;
    }
  });

  // node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "node_modules/lodash/_DataView.js"(exports, module) {
      "use strict";
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module.exports = DataView;
    }
  });

  // node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "node_modules/lodash/_Promise.js"(exports, module) {
      "use strict";
      var getNative = require_getNative();
      var root = require_root();
      var Promise2 = getNative(root, "Promise");
      module.exports = Promise2;
    }
  });

  // node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "node_modules/lodash/_Set.js"(exports, module) {
      "use strict";
      var getNative = require_getNative();
      var root = require_root();
      var Set2 = getNative(root, "Set");
      module.exports = Set2;
    }
  });

  // node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "node_modules/lodash/_WeakMap.js"(exports, module) {
      "use strict";
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap = getNative(root, "WeakMap");
      module.exports = WeakMap;
    }
  });

  // node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "node_modules/lodash/_getTag.js"(exports, module) {
      "use strict";
      var DataView = require_DataView();
      var Map = require_Map();
      var Promise2 = require_Promise();
      var Set2 = require_Set();
      var WeakMap = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set2);
      var weakMapCtorString = toSource(WeakMap);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module.exports = getTag;
    }
  });

  // node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
      "use strict";
      var Stack = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module.exports = baseIsEqualDeep;
    }
  });

  // node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "node_modules/lodash/_baseIsEqual.js"(exports, module) {
      "use strict";
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module.exports = baseIsEqual;
    }
  });

  // node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS({
    "node_modules/lodash/_baseIsMatch.js"(exports, module) {
      "use strict";
      var Stack = require_Stack();
      var baseIsEqual = require_baseIsEqual();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === void 0 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      module.exports = baseIsMatch;
    }
  });

  // node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS({
    "node_modules/lodash/_isStrictComparable.js"(exports, module) {
      "use strict";
      var isObject = require_isObject();
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      module.exports = isStrictComparable;
    }
  });

  // node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS({
    "node_modules/lodash/_getMatchData.js"(exports, module) {
      "use strict";
      var isStrictComparable = require_isStrictComparable();
      var keys = require_keys();
      function getMatchData(object) {
        var result = keys(object), length = result.length;
        while (length--) {
          var key = result[length], value = object[key];
          result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
      }
      module.exports = getMatchData;
    }
  });

  // node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS({
    "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
      "use strict";
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
        };
      }
      module.exports = matchesStrictComparable;
    }
  });

  // node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS({
    "node_modules/lodash/_baseMatches.js"(exports, module) {
      "use strict";
      var baseIsMatch = require_baseIsMatch();
      var getMatchData = require_getMatchData();
      var matchesStrictComparable = require_matchesStrictComparable();
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      module.exports = baseMatches;
    }
  });

  // node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "node_modules/lodash/_baseHasIn.js"(exports, module) {
      "use strict";
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      module.exports = baseHasIn;
    }
  });

  // node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "node_modules/lodash/_hasPath.js"(exports, module) {
      "use strict";
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      module.exports = hasPath;
    }
  });

  // node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "node_modules/lodash/hasIn.js"(exports, module) {
      "use strict";
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      module.exports = hasIn;
    }
  });

  // node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS({
    "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
      "use strict";
      var baseIsEqual = require_baseIsEqual();
      var get = require_get();
      var hasIn = require_hasIn();
      var isKey = require_isKey();
      var isStrictComparable = require_isStrictComparable();
      var matchesStrictComparable = require_matchesStrictComparable();
      var toKey = require_toKey();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      module.exports = baseMatchesProperty;
    }
  });

  // node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS({
    "node_modules/lodash/_baseProperty.js"(exports, module) {
      "use strict";
      function baseProperty(key) {
        return function(object) {
          return object == null ? void 0 : object[key];
        };
      }
      module.exports = baseProperty;
    }
  });

  // node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS({
    "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
      "use strict";
      var baseGet = require_baseGet();
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      module.exports = basePropertyDeep;
    }
  });

  // node_modules/lodash/property.js
  var require_property = __commonJS({
    "node_modules/lodash/property.js"(exports, module) {
      "use strict";
      var baseProperty = require_baseProperty();
      var basePropertyDeep = require_basePropertyDeep();
      var isKey = require_isKey();
      var toKey = require_toKey();
      function property3(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      module.exports = property3;
    }
  });

  // node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS({
    "node_modules/lodash/_baseIteratee.js"(exports, module) {
      "use strict";
      var baseMatches = require_baseMatches();
      var baseMatchesProperty = require_baseMatchesProperty();
      var identity = require_identity();
      var isArray = require_isArray();
      var property3 = require_property();
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property3(value);
      }
      module.exports = baseIteratee;
    }
  });

  // node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      "use strict";
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "node_modules/lodash/_baseTrim.js"(exports, module) {
      "use strict";
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module.exports = baseTrim;
    }
  });

  // node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "node_modules/lodash/toNumber.js"(exports, module) {
      "use strict";
      var baseTrim = require_baseTrim();
      var isObject = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // node_modules/lodash/toFinite.js
  var require_toFinite = __commonJS({
    "node_modules/lodash/toFinite.js"(exports, module) {
      "use strict";
      var toNumber = require_toNumber();
      var INFINITY = 1 / 0;
      var MAX_INTEGER = 17976931348623157e292;
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      module.exports = toFinite;
    }
  });

  // node_modules/lodash/toInteger.js
  var require_toInteger = __commonJS({
    "node_modules/lodash/toInteger.js"(exports, module) {
      "use strict";
      var toFinite = require_toFinite();
      function toInteger(value) {
        var result = toFinite(value), remainder = result % 1;
        return result === result ? remainder ? result - remainder : result : 0;
      }
      module.exports = toInteger;
    }
  });

  // node_modules/lodash/findLastIndex.js
  var require_findLastIndex = __commonJS({
    "node_modules/lodash/findLastIndex.js"(exports, module) {
      "use strict";
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== void 0) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
      }
      module.exports = findLastIndex;
    }
  });

  // src/Main.ts
  var { regClass, property } = Laya;
  var Main = class extends Laya.Script {
    // async onEnable(): Promise<void> {
    //     const countDown = this.owner.getChildByName("CountDown") as Laya.Box
    //     const countDownScript = countDown.getComponent(CountDown)
    //     countDownScript.initUI()
    //     while (true) {
    //         countDownScript.initOnline()
    //         await this.sleep(1000)
    //         countDownScript.initWaiting()
    //         await this.sleep(1000)
    //         countDownScript.initOpenCard()
    //         await this.sleep(1000)
    //         countDownScript.initCountDown(5)
    //         await this.sleep(5000)
    //         countDownScript.initNewShoe()
    //         await this.sleep(1000)
    //         countDownScript.initOffline()
    //         await this.sleep(1000)
    //     }
    // }
    // sleep(ms: number) {
    //     return new Promise((resolve) => setTimeout(resolve, ms));
    // }
    onEnable() {
    }
    loadSVG() {
      const sprite = new Laya.Sprite();
      sprite.width = 200;
      sprite.height = 200;
      Laya.loader.load("resources/n_loading.svg", Laya.Loader.IMAGE).then((res) => {
        sprite.graphics.drawImage(res, 0, 0, sprite.width, sprite.height);
      });
      this.owner.addChild(sprite);
    }
    onMouseClick(evt) {
    }
    openDialog() {
      const mainPage = Laya.stage.getChildByName("root").getChildByName("Scene2D").getChildByName("Box");
      Laya.loader.load("Dialog.lh").then((res) => {
        const dialog = res.create();
        dialog.isModal = false;
        dialog.popupEffect = new Laya.Handler(dialog, () => {
          Laya.Tween.from(dialog, { x: (this.owner.width - dialog.width) / 2, y: this.owner.height, alpha: 0 }, 50, Laya.Ease.linearNone).to(dialog, { y: this.owner.height - mainPage.height }, 1e3, Laya.Ease.linearNone, Laya.Handler.create(dialog, () => {
            Laya.Tween.from(dialog, { scaleX: 0.5, scaleY: 0.5, alpha: 0 }, 1e3, Laya.Ease.linearNone).to(dialog, { x: (this.owner.width - dialog.width) / 2, y: (this.owner.height - dialog.height) / 2, scaleX: 1, scaleY: 1, alpha: 1 }, 1e3, Laya.Ease.linearIn);
          }));
        });
        dialog.open();
        dialog.closeHandler = Laya.Handler.create(dialog, () => {
          dialog.removeSelf();
        });
        const closeBtn = dialog.getChildByName("closeBtn");
        closeBtn.clickHandler = new Laya.Handler(dialog, () => {
          dialog.close();
        });
      });
    }
    playVideo() {
      this.videoNode = new Laya.VideoNode();
      this.videoNode.width = this.owner.width;
      this.videoNode.height = this.owner.height;
      this.videoNode.source = "resources/ElephantsDream.mp4";
      this.videoNode.load("resources/ElephantsDream.mp4");
      this.owner.addChild(this.videoNode);
      this.videoNode.play();
    }
  };
  Main = __decorateClass([
    regClass("3UzpODcyRqacwGfMZnunyA")
  ], Main);

  // src/dt_roadmap/Roadmap.ts
  var import_defaultsDeep2 = __toESM(require_defaultsDeep());

  // src/dt_roadmap/BreadPlate.ts
  var import_get2 = __toESM(require_get());
  var import_defaultsDeep = __toESM(require_defaultsDeep());

  // src/dt_roadmap/RoadmapUtilities.ts
  var import_get = __toESM(require_get());
  var RoadmapUtilities = class {
    constructor() {
      this.identityDictionary = {
        b: "banker",
        // banker
        p: "player",
        // player
        t: "tie",
        // tie
        q: "banker",
        // banker banker-pair
        w: "banker",
        // banker banker-pair player-pair
        e: "banker",
        // banker player-pair
        f: "player",
        // player banker-pair
        g: "player",
        // player banker-pair player-pair
        h: "player",
        // player player-pair
        i: "tie",
        // tie banker-pair
        j: "tie",
        // tie banker-pair player-pair
        k: "tie",
        // tie player-pair
        l: "banker",
        // banker
        m: "banker",
        // banker banker-pair
        n: "banker",
        // banker banker-pair player-pair
        o: "banker"
        // banker player-pair
      };
      this.matrix = [];
      this.cols = 0;
      this.previousCoordinates = [0, 0];
    }
    get bankerIdentities() {
      return Object.entries(this.identityDictionary).filter(([_, value]) => value === "banker").map(([key]) => key);
    }
    get playerIdentities() {
      return Object.entries(this.identityDictionary).filter(([_, value]) => value === "player").map(([key]) => key);
    }
    get tieIdentities() {
      return Object.entries(this.identityDictionary).filter(([_, value]) => value === "tie").map(([key]) => key);
    }
    /**
     * Used as utility getter for sub classes
     */
    get hasFullRow() {
      return this.matrix.some((row) => {
        return !!row[this.cols - 1];
      });
    }
    /**
     * Used as utility getter for sub classes
     */
    truncateFirstColumn() {
      return this.matrix.map((row) => {
        return [...row.slice(1), null];
      });
    }
    get roadmap() {
      return this.matrix.map((row) => {
        return row.map((col) => {
          return col ? col.value : 0;
        });
      });
    }
    /**
     * Used as utility getter for sub classes
     */
    get lastColumn() {
      const [prevRow, prevCol] = this.previousCoordinates;
      return this.matrix[prevRow][prevCol] || null;
    }
    getCoordinatesByIndex(matrix, index) {
      for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        const row = matrix[rowIdx];
        for (let colIdx = 0; colIdx < row.length; colIdx++) {
          const col = row[colIdx];
          if (col.index === index) {
            return [rowIdx, colIdx];
          }
        }
      }
      return false;
    }
    getColumnLength(matrix, columnIdx) {
      const coordinates = [0, columnIdx];
      const column = matrix[coordinates[0]][coordinates[1]];
      const rootIdentity = this.identityDictionary[column.value.filter((value) => value !== "t")[0]];
      if (!column) {
        return 0;
      }
      let traversalCount = 1;
      let lastIndex = column.index;
      let isEnd = false;
      while (!isEnd) {
        const bottomCol = (0, import_get.default)(matrix, [coordinates[0] + 1, coordinates[1]], {});
        if (bottomCol.index === lastIndex + 1 && rootIdentity === this.identityDictionary[bottomCol.value.filter((value) => value !== "t")[0]]) {
          lastIndex = bottomCol.index;
          traversalCount++;
          coordinates[0]++;
          continue;
        }
        const rightCol = (0, import_get.default)(matrix, [coordinates[0], coordinates[1] + 1], {});
        if (rightCol.index === lastIndex + 1 && rootIdentity === this.identityDictionary[rightCol.value.filter((value) => value !== "t")[0]]) {
          lastIndex = rightCol.index;
          traversalCount++;
          coordinates[1]++;
          continue;
        }
        isEnd = true;
      }
      return traversalCount;
    }
  };

  // src/dt_roadmap/BreadPlate.ts
  var BreadPlate = class extends RoadmapUtilities {
    constructor(_options) {
      super();
      const options = (0, import_defaultsDeep.default)(_options, {
        results: [],
        rows: 6,
        cols: 9
      });
      this.results = options.results || [];
      this.rows = options.rows || 6;
      this.cols = options.cols || 9;
      this.previousCoordinates = [0, 0];
      this.previousIdentity = null;
      this.index = 0;
      this.matrix = Array.from({ length: this.rows }, () => {
        return Array.from({ length: this.cols }, () => 0);
      });
      this.results.forEach(this.push.bind(this));
    }
    getNextCoordinates() {
      const [prevRow, prevColumn] = this.previousCoordinates;
      if (this.previousIdentity === null) {
        return [0, 0];
      }
      const initialPosition = (0, import_get2.default)(this.matrix, [prevRow + 1, prevColumn]);
      if (initialPosition === 0) {
        return [prevRow + 1, prevColumn];
      }
      return [0, prevColumn + 1];
    }
    push(key) {
      const identity = this.identityDictionary[key];
      if (!identity) {
        console.warn(`${key} is not a valid key.`);
        return;
      }
      const [row, column] = this.getNextCoordinates();
      this.previousCoordinates = [row, column];
      this.previousIdentity = identity;
      this.matrix[row][column] = {
        value: key,
        index: this.index++
      };
      if (this.hasFullRow) {
        this.matrix = this.truncateFirstColumn();
        this.previousCoordinates = [row, column - 1];
      }
    }
    pop() {
      if (this.index === 0) {
        console.warn("No elements to pop.");
        return;
      }
      let [row, column] = this.previousCoordinates;
      if (this.index > 0) {
        this.matrix[row][column] = 0;
        this.index--;
        const lastCoordinates = this.getCoordinatesByIndex(this.matrix, this.index - 1);
        if (lastCoordinates) {
          const lastRow = lastCoordinates[0];
          const lastCol = lastCoordinates[1];
          this.previousCoordinates = [lastRow, lastCol];
          const lastIdentityKey = this.matrix[lastRow][lastCol].value;
          this.previousIdentity = this.identityDictionary[lastIdentityKey];
        }
      } else {
        this.previousCoordinates = [0, 0];
        this.previousIdentity = null;
      }
    }
  };

  // src/dt_roadmap/BigRoad.ts
  var import_findLastIndex = __toESM(require_findLastIndex());
  var import_get3 = __toESM(require_get());
  var BigRoad = class extends RoadmapUtilities {
    constructor(_options) {
      super();
      this.results = _options.results || [];
      this.rows = _options.rows || 6;
      this.cols = _options.cols || 26;
      this.previousCoordinates = [0, 0];
      this.previousIdentity = null;
      this.index = 0;
      this.matrix = Array.from({ length: this.rows }, () => {
        return Array.from({ length: this.cols }, () => 0);
      });
      this.results.forEach(this.push.bind(this));
    }
    getNextCoordinate(identity) {
      const [prevRow, prevColumn] = this.previousCoordinates;
      if (this.previousIdentity === null) {
        return [0, 0];
      }
      if (this.previousIdentity === identity) {
        const bottomPosition = (0, import_get3.default)(this.matrix, [prevRow + 1, prevColumn]);
        if (bottomPosition === 0) {
          return [prevRow + 1, prevColumn];
        }
        return [prevRow, prevColumn + 1];
      }
      const lastColIdx = (0, import_findLastIndex.default)(this.matrix[0], Boolean);
      const initialPosition = (0, import_get3.default)(this.matrix, [0, lastColIdx]);
      if (initialPosition === 0) {
        return [0, lastColIdx];
      }
      return [0, lastColIdx + 1];
    }
    push(key) {
      const identity = this.identityDictionary[key];
      if (!identity) {
        console.warn(`${key} is not a valid key.`);
        return;
      }
      const isTie = this.tieIdentities.includes(key);
      const [nextRow, nextCol] = this.getNextCoordinate(identity);
      const [prevRow, prevCol] = this.previousCoordinates;
      const prevColCell = this.matrix[prevRow][prevCol];
      const prevColValue = (0, import_get3.default)(prevColCell, "value");
      let isPrevTie = false;
      if (prevColValue) {
        isPrevTie = this.tieIdentities.includes(prevColValue[prevColValue.length - 1]);
      }
      if (!isTie && isPrevTie) {
        if (nextRow !== 0 || nextCol !== 0) {
          this.previousCoordinates = [nextRow, nextCol];
          this.previousIdentity = identity;
          this.matrix[nextRow][nextCol] = {
            value: [key],
            index: this.index++,
            tie_count: isTie ? 1 : 0
          };
        } else {
          prevColCell.value.push(key);
          this.previousIdentity = identity;
        }
        return;
      }
      if (isTie && !isPrevTie) {
        if (prevColCell) {
          prevColCell.value.push(key);
          prevColCell.tie_count++;
        } else {
          this.previousCoordinates = [nextRow, nextCol];
          this.matrix[nextRow][nextCol] = {
            value: [key],
            index: this.index++,
            tie_count: isTie ? 1 : 0
          };
        }
        return;
      }
      if (isTie && isPrevTie) {
        prevColCell.value.push(key);
        prevColCell.tie_count++;
        return;
      }
      this.previousCoordinates = [nextRow, nextCol];
      this.previousIdentity = identity;
      this.matrix[nextRow][nextCol] = {
        value: [key],
        index: this.index++,
        tie_count: isTie ? 1 : 0
      };
      if (this.hasFullRow) {
        this.matrix = this.truncateFirstColumn();
        this.previousCoordinates = [nextRow, nextCol - 1];
      }
    }
    pop() {
      if (this.index === 0) {
        console.warn("No elements to pop.");
        return;
      }
      const [row, column] = this.previousCoordinates;
      let cellData = this.matrix[row][column];
      if (Array.isArray(cellData.value) && cellData.value.length > 1) {
        cellData.value.pop();
        cellData.tie_count--;
        this.previousIdentity = this.identityDictionary[cellData.value[cellData.value.length - 1]];
      } else {
        this.matrix[row][column] = 0;
        this.index--;
        if (this.index > 0) {
          const lastCoordinates = this.getCoordinatesByIndex(this.matrix, this.index - 1);
          if (lastCoordinates) {
            const [lastRow, lastColumn] = lastCoordinates;
            this.previousCoordinates = [lastRow, lastColumn];
            const lastIdentityKey = this.matrix[lastRow][lastColumn].value;
            this.previousIdentity = this.identityDictionary[lastIdentityKey];
          } else {
            this.previousCoordinates = [0, 0];
            this.previousIdentity = null;
          }
        } else {
          this.previousCoordinates = [0, 0];
          this.previousIdentity = null;
        }
      }
    }
  };

  // src/dt_roadmap/BigEyeBoy.ts
  var import_get4 = __toESM(require_get());
  var import_findLastIndex2 = __toESM(require_findLastIndex());
  var BigEyeBoy = class extends RoadmapUtilities {
    constructor(_options) {
      super();
      this.rows = _options.rows || 6;
      this.cols = _options.cols || 9;
      this.bigRoadMatrix = _options.bigRoadMatrix || [];
      this.traverseBigRoadScheme();
    }
    reset() {
      this.previousCoordinates = [0, 0];
      this.previousColor = null;
      this.index = 0;
      this.matrix = Array.from({ length: this.rows }, () => {
        return Array.from({ length: this.cols }, () => 0);
      });
    }
    traverseBigRoadScheme() {
      this.reset();
      const B2 = [1, 1];
      const C1 = [0, 2];
      const b2HasValue = this.bigRoadMatrix[B2[0]][B2[1]];
      const c1HasValue = this.bigRoadMatrix[C1[0]][C1[1]];
      if (!c1HasValue && !b2HasValue) {
        return;
      }
      let [initialRow, initialCol] = b2HasValue ? B2 : C1;
      while (true) {
        const col = this.bigRoadMatrix[initialRow][initialCol];
        const isFirstRow = initialRow === 0;
        const nextCoordinates = this.getCoordinatesByIndex(this.bigRoadMatrix, col.index + 1);
        if (isFirstRow) {
          const prevColALength = this.getColumnLength(this.bigRoadMatrix, initialCol - 1);
          const prevColBLength = this.getColumnLength(this.bigRoadMatrix, initialCol - 2);
          this.push(prevColALength === prevColBLength ? "red" : "blue", {
            big_road_index: col.index
          });
          if (nextCoordinates) {
            initialRow = nextCoordinates[0];
            initialCol = nextCoordinates[1];
            continue;
          } else {
            break;
          }
        }
        const leftColLower = this.bigRoadMatrix[initialRow][initialCol - 1];
        const leftColUpper = this.bigRoadMatrix[initialRow - 1][initialCol - 1];
        let leftColLowerValue, leftColUpperValue;
        if (leftColLower) {
          leftColLowerValue = leftColLower.value.filter((value) => value !== "t")[0];
        }
        if (leftColUpper) {
          leftColUpperValue = leftColUpper.value.filter((value) => value !== "t")[0];
        }
        const leftColLowerIdentity = this.identityDictionary[leftColLowerValue];
        const leftColUpperIdentity = this.identityDictionary[leftColUpperValue];
        const isMatch = [
          /**
           * if they are both empty
           */
          leftColLower === leftColUpper,
          /**
           * If they have the same identity
           */
          leftColLowerIdentity === leftColUpperIdentity
        ].some(Boolean);
        this.push(isMatch ? "red" : "blue", {
          big_road_index: col.index
        });
        if (nextCoordinates) {
          initialRow = nextCoordinates[0];
          initialCol = nextCoordinates[1];
          continue;
        } else {
          break;
        }
      }
    }
    getNextCoordinates(color) {
      const [prevRow, prevColumn] = this.previousCoordinates;
      if (this.previousColor === null) {
        return [0, 0];
      }
      if (this.previousColor === color) {
        const bottomPosition = (0, import_get4.default)(this.matrix, [prevRow + 1, prevColumn]);
        if (bottomPosition === 0) {
          return [prevRow + 1, prevColumn];
        }
        return [prevRow, prevColumn + 1];
      }
      const lastColIdx = (0, import_findLastIndex2.default)(this.matrix[0], Boolean);
      const initialPosition = (0, import_get4.default)(this.matrix, [0, lastColIdx]);
      if (initialPosition === 0) {
        return [0, lastColIdx];
      }
      return [0, lastColIdx + 1];
    }
    push(color, _options = {}) {
      if (!["red", "blue"].includes(color)) {
        console.warn(`${color} is not a valid color.`);
        return;
      }
      const options = Object.assign({
        big_road_index: void 0
      }, _options);
      const [row, column] = this.getNextCoordinates(color);
      this.previousCoordinates = [row, column];
      this.previousColor = color;
      this.matrix[row][column] = {
        value: color,
        index: this.index++,
        big_road_index: options.big_road_index
      };
      if (this.hasFullRow) {
        this.matrix = this.truncateFirstColumn();
        this.previousCoordinates = [row, column - 1];
      }
    }
    pop() {
      if (this.index === 0) {
        console.warn("No elements to pop.");
        return;
      }
      let [row, column] = this.previousCoordinates;
      if (this.index > 0) {
        this.matrix[row][column] = 0;
        this.index--;
        const lastCoordinates = this.getCoordinatesByIndex(this.matrix, this.index - 1);
        if (lastCoordinates) {
          const lastRow = lastCoordinates[0];
          const lastCol = lastCoordinates[1];
          this.previousCoordinates = [lastRow, lastCol];
          this.previousColor = this.matrix[lastRow][lastCol].value;
        }
      } else {
        this.previousCoordinates = [0, 0];
        this.previousColor = null;
      }
    }
  };

  // src/dt_roadmap/SmallRoad.ts
  var import_get5 = __toESM(require_get());
  var import_findLastIndex3 = __toESM(require_findLastIndex());
  var SmallRoad = class extends RoadmapUtilities {
    constructor(_options) {
      super();
      this.rows = _options.rows || 6;
      this.cols = _options.cols || 9;
      this.bigRoadMatrix = _options.bigRoadMatrix || [];
      this.traverseBigRoadScheme();
    }
    reset() {
      this.previousCoordinates = [0, 0];
      this.previousColor = null;
      this.index = 0;
      this.matrix = Array.from({ length: this.rows }, () => {
        return Array.from({ length: this.cols }, () => 0);
      });
    }
    traverseBigRoadScheme() {
      this.reset();
      const C2 = [1, 2];
      const D1 = [0, 3];
      const c2HasValue = this.bigRoadMatrix[C2[0]][C2[1]];
      const d1HasValue = this.bigRoadMatrix[D1[0]][D1[1]];
      if (!c2HasValue && !d1HasValue) {
        return;
      }
      let [initialRow, initialCol] = c2HasValue ? C2 : D1;
      while (true) {
        const col = this.bigRoadMatrix[initialRow][initialCol];
        const isFirstRow = initialRow === 0;
        const nextCoordinates = this.getCoordinatesByIndex(this.bigRoadMatrix, col.index + 1);
        if (isFirstRow) {
          const prevColALength = this.getColumnLength(this.bigRoadMatrix, initialCol - 1);
          const prevColBLength = this.getColumnLength(this.bigRoadMatrix, initialCol - 3);
          this.push(prevColALength === prevColBLength ? "red" : "blue", {
            big_road_index: col.index
          });
          if (nextCoordinates) {
            initialRow = nextCoordinates[0];
            initialCol = nextCoordinates[1];
            continue;
          } else {
            break;
          }
        }
        const leftColLower = this.bigRoadMatrix[initialRow][initialCol - 2];
        const leftColUpper = this.bigRoadMatrix[initialRow - 1][initialCol - 2];
        let leftColLowerValue, leftColUpperValue;
        if (leftColLower) {
          leftColLowerValue = leftColLower.value.filter((value) => value !== "t")[0];
        }
        if (leftColUpper) {
          leftColUpperValue = leftColUpper.value.filter((value) => value !== "t")[0];
        }
        const leftColLowerIdentity = this.identityDictionary[leftColLowerValue];
        const leftColUpperIdentity = this.identityDictionary[leftColUpperValue];
        const isMatch = [
          /**
           * if they are both empty
           */
          leftColLower === leftColUpper,
          /**
           * If they have the same identity
           */
          leftColLowerIdentity === leftColUpperIdentity
        ].some(Boolean);
        this.push(isMatch ? "red" : "blue", {
          big_road_index: col.index
        });
        if (nextCoordinates) {
          initialRow = nextCoordinates[0];
          initialCol = nextCoordinates[1];
          continue;
        } else {
          break;
        }
      }
    }
    getNextCoordinates(color) {
      const [prevRow, prevColumn] = this.previousCoordinates;
      if (this.previousColor === null) {
        return [0, 0];
      }
      if (this.previousColor === color) {
        const bottomPosition = (0, import_get5.default)(this.matrix, [prevRow + 1, prevColumn]);
        if (bottomPosition === 0) {
          return [prevRow + 1, prevColumn];
        }
        return [prevRow, prevColumn + 1];
      }
      const lastColIdx = (0, import_findLastIndex3.default)(this.matrix[0], Boolean);
      const initialPosition = (0, import_get5.default)(this.matrix, [0, lastColIdx]);
      if (initialPosition === 0) {
        return [0, lastColIdx];
      }
      return [0, lastColIdx + 1];
    }
    push(color, _options = {}) {
      if (!["red", "blue"].includes(color)) {
        return console.warn(`${color} is not a valid color.`);
      }
      const options = Object.assign(
        {
          big_road_index: void 0
        },
        _options
      );
      const [row, column] = this.getNextCoordinates(color);
      this.previousCoordinates = [row, column];
      this.previousColor = color;
      this.matrix[row][column] = {
        value: color,
        index: this.index++,
        big_road_index: options.big_road_index
      };
      if (this.hasFullRow) {
        this.matrix = this.truncateFirstColumn();
        this.previousCoordinates = [row, column - 1];
      }
    }
    pop() {
      if (this.index === 0) {
        console.warn("No elements to pop.");
        return;
      }
      let [row, column] = this.previousCoordinates;
      if (this.index > 0) {
        this.matrix[row][column] = 0;
        this.index--;
        const lastCoordinates = this.getCoordinatesByIndex(this.matrix, this.index - 1);
        if (lastCoordinates) {
          const lastRow = lastCoordinates[0];
          const lastCol = lastCoordinates[1];
          this.previousCoordinates = [lastRow, lastCol];
          this.previousColor = this.matrix[lastRow][lastCol].value;
        }
      } else {
        this.previousCoordinates = [0, 0];
        this.previousColor = null;
      }
    }
  };

  // src/dt_roadmap/CockroachPig.ts
  var import_get6 = __toESM(require_get());
  var import_findLastIndex4 = __toESM(require_findLastIndex());
  var CockroachPig = class extends RoadmapUtilities {
    constructor(_options) {
      super();
      this.rows = _options.rows || 6;
      this.cols = _options.cols || 9;
      this.bigRoadMatrix = _options.bigRoadMatrix || [];
      this.traverseBigRoadScheme();
    }
    reset() {
      this.previousCoordinates = [0, 0];
      this.previousColor = null;
      this.index = 0;
      this.matrix = Array.from({ length: this.rows }, () => {
        return Array.from({ length: this.cols }, () => 0);
      });
    }
    traverseBigRoadScheme() {
      this.reset();
      const D2 = [1, 3];
      const E1 = [0, 4];
      const d2HasValue = this.bigRoadMatrix[D2[0]][D2[1]];
      const e1HasValue = this.bigRoadMatrix[E1[0]][E1[1]];
      if (!d2HasValue && !e1HasValue) {
        return;
      }
      let [initialRow, initialCol] = d2HasValue ? D2 : E1;
      while (true) {
        const col = this.bigRoadMatrix[initialRow][initialCol];
        const isFirstRow = initialRow === 0;
        const nextCoordinates = this.getCoordinatesByIndex(this.bigRoadMatrix, col.index + 1);
        if (isFirstRow) {
          const prevColALength = this.getColumnLength(this.bigRoadMatrix, initialCol - 1);
          const prevColBLength = this.getColumnLength(this.bigRoadMatrix, initialCol - 4);
          this.push(prevColALength === prevColBLength ? "red" : "blue", {
            big_road_index: col.index
          });
          if (nextCoordinates) {
            initialRow = nextCoordinates[0];
            initialCol = nextCoordinates[1];
            continue;
          } else {
            break;
          }
        }
        const leftColLower = this.bigRoadMatrix[initialRow][initialCol - 3];
        const leftColUpper = this.bigRoadMatrix[initialRow - 1][initialCol - 3];
        let leftColLowerValue, leftColUpperValue;
        if (leftColLower) {
          leftColLowerValue = leftColLower.value.filter((value) => value !== "t")[0];
        }
        if (leftColUpper) {
          leftColUpperValue = leftColUpper.value.filter((value) => value !== "t")[0];
        }
        const leftColLowerIdentity = this.identityDictionary[leftColLowerValue];
        const leftColUpperIdentity = this.identityDictionary[leftColUpperValue];
        const isMatch = [
          /**
           * if they are both empty
           */
          leftColLower === leftColUpper,
          /**
           * If they have the same identity
           */
          leftColLowerIdentity === leftColUpperIdentity
        ].some(Boolean);
        this.push(isMatch ? "red" : "blue", {
          big_road_index: col.index
        });
        if (nextCoordinates) {
          initialRow = nextCoordinates[0];
          initialCol = nextCoordinates[1];
          continue;
        } else {
          break;
        }
      }
    }
    getNextCoordinates(color) {
      const [prevRow, prevColumn] = this.previousCoordinates;
      if (this.previousColor === null) {
        return [0, 0];
      }
      if (this.previousColor === color) {
        const bottomPosition = (0, import_get6.default)(this.matrix, [prevRow + 1, prevColumn]);
        if (bottomPosition === 0) {
          return [prevRow + 1, prevColumn];
        }
        return [prevRow, prevColumn + 1];
      }
      const lastColIdx = (0, import_findLastIndex4.default)(this.matrix[0], Boolean);
      const initialPosition = (0, import_get6.default)(this.matrix, [0, lastColIdx]);
      if (initialPosition === 0) {
        return [0, lastColIdx];
      }
      return [0, lastColIdx + 1];
    }
    push(color, _options = {}) {
      if (!["red", "blue"].includes(color)) {
        return console.warn(`${color} is not a valid color.`);
      }
      const options = Object.assign(
        {
          big_road_index: void 0
        },
        _options
      );
      const [row, column] = this.getNextCoordinates(color);
      this.previousCoordinates = [row, column];
      this.previousColor = color;
      this.matrix[row][column] = {
        value: color,
        index: this.index++,
        big_road_index: options.big_road_index
      };
      if (this.hasFullRow) {
        this.matrix = this.truncateFirstColumn();
        this.previousCoordinates = [row, column - 1];
      }
    }
    pop() {
      if (this.index === 0) {
        console.warn("No elements to pop.");
        return;
      }
      let [row, column] = this.previousCoordinates;
      if (this.index > 0) {
        this.matrix[row][column] = 0;
        this.index--;
        const lastCoordinates = this.getCoordinatesByIndex(this.matrix, this.index - 1);
        if (lastCoordinates) {
          const lastRow = lastCoordinates[0];
          const lastCol = lastCoordinates[1];
          this.previousCoordinates = [lastRow, lastCol];
          this.previousColor = this.matrix[lastRow][lastCol].value;
        }
      } else {
        this.previousCoordinates = [0, 0];
        this.previousColor = null;
      }
    }
  };

  // src/dt_roadmap/Roadmap.ts
  function attachToContext(obj, ctx) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        ctx[key] = obj[key];
      }
    }
  }
  var Roadmap = class {
    constructor(_options) {
      const options = (0, import_defaultsDeep2.default)(_options, {
        results: [],
        config: {
          breadplate: {
            show_options: false,
            rows: 6,
            cols: 9
          },
          bigroad: {
            show_options: false,
            rows: 6,
            cols: 26
          },
          bigeyeboy: {
            show_options: false,
            rows: 6,
            cols: 26
          },
          smallroad: {
            show_options: false,
            rows: 6,
            cols: 19
          },
          cockroachPig: {
            show_options: false,
            rows: 6,
            cols: 19
          }
        }
      });
      attachToContext(options, this);
      this.breadplate = new BreadPlate({
        results: this.results,
        rows: this.config.breadplate.rows,
        cols: this.config.breadplate.cols
      });
      this.bigroad = new BigRoad({
        results: this.results,
        rows: this.config.bigroad.rows,
        cols: this.config.bigroad.cols
      });
      this.bigeyeboy = new BigEyeBoy({
        bigRoadMatrix: this.bigroad.matrix,
        rows: this.config.bigeyeboy.rows,
        cols: this.config.bigeyeboy.cols
      });
      this.smallroad = new SmallRoad({
        bigRoadMatrix: this.bigroad.matrix,
        rows: this.config.smallroad.rows,
        cols: this.config.smallroad.cols
      });
      this.cockroachPig = new CockroachPig({
        bigRoadMatrix: this.bigroad.matrix,
        rows: this.config.cockroachPig.rows,
        cols: this.config.cockroachPig.cols
      });
    }
    push(key) {
      this.results.push(key);
      this.breadplate.push(key);
      this.bigroad.push(key);
      this.bigeyeboy.bigRoadMatrix = this.bigroad.matrix;
      this.bigeyeboy.traverseBigRoadScheme();
      this.smallroad.bigRoadMatrix = this.bigroad.matrix;
      this.smallroad.traverseBigRoadScheme();
      this.cockroachPig.bigRoadMatrix = this.bigroad.matrix;
      this.cockroachPig.traverseBigRoadScheme();
    }
    pop() {
      this.results.pop();
      this.breadplate.pop();
      this.bigroad.pop();
      this.bigeyeboy.pop();
      this.smallroad.pop();
      this.cockroachPig.pop();
    }
  };

  // src/dt_roadmap/DragonTigerRoadmap.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var DragonTigerRoadmap = class extends Laya.Script {
    onEnable() {
      this.initRoadMapBoxs();
      this.initControlBtns();
    }
    initRoadMapBoxs() {
      this.roadmapBox = this.owner.getChildByName("roadmap");
      this.initBeadPlateRoad();
      this.initBigRoad();
      this.initBigEyeRoad();
      this.initSmallRoad();
      this.initCockroachRoad();
      this.initRoadmapData();
    }
    initBeadPlateRoad() {
      this.beadPlateRoadBox = this.roadmapBox.getChildByName("bead_plate_box");
      this.beadPlatePanel = this.beadPlateRoadBox.getChildByName("panel");
      this.beadPlatePanel.scrollType = Laya.ScrollType.Horizontal;
      this.beadPlatePanel.elasticEnabled = true;
      this.beadPlateSprite = this.beadPlateRoadBox.getChildByName("panel").getChildByName("sprite");
      this.beadPlatePanel.graphics.clear();
    }
    initBigRoad() {
      this.bigRoadBox = this.roadmapBox.getChildByName("big_road_box");
      this.bigRoadPanel = this.bigRoadBox.getChildByName("panel");
      this.bigRoadPanel.scrollType = Laya.ScrollType.Horizontal;
      this.bigRoadPanel.elasticEnabled = true;
      this.bigRoadSprite = this.bigRoadBox.getChildByName("panel").getChildByName("sprite");
      this.bigRoadSprite.graphics.clear();
    }
    initBigEyeRoad() {
      this.bigEyeRoadBox = this.roadmapBox.getChildByName("three_road_box").getChildByName("big_eye_box");
      this.bigEyeRoadPanel = this.bigEyeRoadBox.getChildByName("panel");
      this.bigEyeRoadPanel.scrollType = Laya.ScrollType.Horizontal;
      this.bigEyeRoadPanel.elasticEnabled = true;
      this.bigEyeRoadSprite = this.bigEyeRoadBox.getChildByName("panel").getChildByName("sprite");
      this.bigEyeRoadSprite.graphics.clear();
    }
    initSmallRoad() {
      this.smallRoadBox = this.roadmapBox.getChildByName("three_road_box").getChildByName("small_box");
      this.smallRoadPanel = this.smallRoadBox.getChildByName("panel");
      this.smallRoadPanel.scrollType = Laya.ScrollType.Horizontal;
      this.smallRoadPanel.elasticEnabled = true;
      this.smallRoadSprite = this.smallRoadBox.getChildByName("panel").getChildByName("sprite");
      this.smallRoadSprite.graphics.clear();
    }
    initCockroachRoad() {
      this.cockroachRoadBox = this.roadmapBox.getChildByName("three_road_box").getChildByName("cockroach_box");
      this.cockroachRoadPanel = this.cockroachRoadBox.getChildByName("panel");
      this.cockroachRoadPanel.scrollType = Laya.ScrollType.Horizontal;
      this.cockroachRoadPanel.elasticEnabled = true;
      this.cockroachRoadSprite = this.cockroachRoadBox.getChildByName("panel").getChildByName("sprite");
      this.cockroachRoadSprite.graphics.clear();
    }
    initControlBtns() {
      const controlBox = this.owner.getChildByName("control");
      const dragonBtn = controlBox.getChildByName("dragon_btn");
      dragonBtn.clickHandler = new Laya.Handler(this, () => {
        this.roadmap.push("p");
        this.renderRoadmapUI();
      });
      const tigerBtn = controlBox.getChildByName("tiger_btn");
      tigerBtn.clickHandler = new Laya.Handler(this, () => {
        this.roadmap.push("b");
        this.renderRoadmapUI();
      });
      const tieBtn = controlBox.getChildByName("tie_btn");
      tieBtn.clickHandler = new Laya.Handler(this, () => {
        this.roadmap.push("t");
        this.renderRoadmapUI();
      });
      const clearBtn = controlBox.getChildByName("clear_btn");
      clearBtn.clickHandler = new Laya.Handler(this, () => {
        this.initRoadmapData();
        this.beadPlateSprite.graphics.clear();
        this.bigRoadSprite.graphics.clear();
        this.bigEyeRoadSprite.graphics.clear();
        this.smallRoadSprite.graphics.clear();
        this.cockroachRoadSprite.graphics.clear();
        this.resetPredictions();
      });
    }
    initPredictions() {
      const predictionsBox = this.owner.getChildByName("predictions");
      const setSkin = (item, color, type) => {
        if (color === "red") {
          item.skin = `resources/dt/red${type}.png`;
        } else if (color === "blue") {
          item.skin = `resources/dt/blue${type}.png`;
        } else {
          item.skin = null;
        }
      };
      const initRoadmapValues = (boxName, newResult) => {
        const box = predictionsBox.getChildByName(boxName);
        const valueItems = [0, 1, 2].map((i) => box.getChildByName("Box").getChildByName(`item${i}`));
        this.roadmap.push(newResult);
        setSkin(valueItems[0], this.roadmap.bigeyeboy.previousColor, "");
        setSkin(valueItems[1], this.roadmap.smallroad.previousColor, "_full");
        setSkin(valueItems[2], this.roadmap.cockroachPig.previousColor, "_stick");
        this.roadmap.pop();
      };
      initRoadmapValues("tiger", "b");
      initRoadmapValues("dragon", "p");
    }
    resetPredictions() {
      const predictionsBox = this.owner.getChildByName("predictions");
      const initRoadmapValues = (boxName) => {
        const box = predictionsBox.getChildByName(boxName);
        const valueItems = [0, 1, 2].map((i) => box.getChildByName("Box").getChildByName(`item${i}`));
        valueItems[0].skin = null;
        valueItems[1].skin = null;
        valueItems[2].skin = null;
      };
      initRoadmapValues("dragon");
      initRoadmapValues("tiger");
    }
    initRoadmapData() {
      this.roadmap = new Roadmap({
        results: [],
        config: {
          breadplate: {
            rows: 6,
            cols: 100
          },
          bigroad: {
            rows: 6,
            cols: 100
          },
          bigeyeboy: {
            rows: 6,
            cols: 100
          },
          smallroad: {
            rows: 6,
            cols: 100
          },
          cockroachPig: {
            rows: 6,
            cols: 100
          }
        }
      });
    }
    renderRoadmapUI() {
      this.renderBeadPlateData();
      this.renderBigRoadData();
      this.renderBigEyeRoadData();
      this.renderSmallRoadmData();
      this.renderCockroachRoadmData();
      this.initPredictions();
      console.clear();
      console.log(this.roadmap.bigeyeboy);
    }
    renderBeadPlateData() {
      const cmdWidth = this.beadPlateRoadBox.width / 6;
      const cmdHeight = this.beadPlateRoadBox.height / 6;
      const drawWidth = Math.min(cmdWidth, cmdHeight);
      const matrix = this.roadmap.breadplate.matrix;
      let rowIndex = this.roadmap.breadplate.previousCoordinates[0];
      let colIndex = this.roadmap.breadplate.previousCoordinates[1];
      const cell = matrix[rowIndex][colIndex];
      if (cell && cell.value) {
        const centerX = colIndex * cmdWidth + cmdWidth / 2 - drawWidth * 0.4;
        const centerY = rowIndex * cmdHeight + cmdHeight / 2 - drawWidth * 0.4;
        let imgUrl;
        switch (cell.value) {
          case "p":
            imgUrl = "resources/dt/dragon.png";
            break;
          case "b":
            imgUrl = "resources/dt/tiger.png";
            break;
          case "t":
            imgUrl = "resources/dt/tie.png";
            break;
          case "k":
            imgUrl = "resources/dt/tie-blue.png";
            break;
          case "i":
            imgUrl = "resources/dt/tie-red.png";
            break;
          default:
            break;
        }
        if (imgUrl) {
          Laya.loader.load(imgUrl).then((res) => {
            this.beadPlateSprite.graphics.drawImage(res, centerX, centerY, drawWidth * 0.7, drawWidth * 0.7);
          });
        }
      }
      this.beadPlateSprite.width = cmdWidth * (colIndex + 1);
      Laya.timer.frameOnce(1, this, () => {
        this.beadPlatePanel.refresh();
        this.beadPlatePanel.scrollTo(this.beadPlateSprite.width, 0);
      });
    }
    renderBigRoadData() {
      const cmdWidth = this.bigRoadBox.width / 16;
      const cmdHeight = this.bigRoadBox.height / 6;
      const boxWidth = Math.min(cmdWidth, cmdHeight);
      const matrix = this.roadmap.bigroad.matrix;
      let rowIndex = this.roadmap.bigroad.previousCoordinates[0];
      let colIndex = this.roadmap.bigroad.previousCoordinates[1];
      const cell = matrix[rowIndex][colIndex];
      if (cell && cell.value) {
        let centerX, centerY, imgUrl;
        centerX = colIndex * cmdWidth + cmdWidth / 2 - boxWidth * 0.5;
        centerY = rowIndex * cmdHeight + cmdHeight / 2 - boxWidth * 0.4;
        const cellName = Array.from(new Set(cell.value)).sort().join("");
        switch (cellName) {
          case "p":
            imgUrl = "resources/dt/blue.png";
            break;
          case "b":
            imgUrl = "resources/dt/red.png";
            break;
          case "pt":
            imgUrl = "resources/dt/blue_tie.png";
            break;
          case "bt":
            imgUrl = "resources/dt/red_tie.png";
            break;
          default:
            break;
        }
        if (imgUrl) {
          Laya.loader.load(imgUrl).then((res) => {
            this.bigRoadSprite.graphics.drawImage(res, centerX, centerY, boxWidth * 0.7, boxWidth * 0.7);
          });
        }
      }
      this.bigRoadSprite.autoSize = true;
      Laya.timer.frameOnce(1, this, () => {
        this.bigRoadPanel.refresh();
        this.bigRoadPanel.scrollTo(cmdWidth * colIndex, 0);
      });
    }
    renderBigEyeRoadData() {
      const cmdWidth = this.bigEyeRoadBox.width / 20;
      const cmdHeight = this.bigEyeRoadBox.height / 6;
      const boxWidth = Math.min(cmdWidth, cmdHeight);
      const matrix = this.roadmap.bigeyeboy.matrix;
      let rowIndex = this.roadmap.bigeyeboy.previousCoordinates[0];
      let colIndex = this.roadmap.bigeyeboy.previousCoordinates[1];
      const cell = matrix[rowIndex][colIndex];
      if (cell && cell.value) {
        const centerX = colIndex * cmdWidth + cmdWidth / 2 - boxWidth * 0.4;
        const centerY = rowIndex * boxWidth + boxWidth / 2 - boxWidth * 0.2;
        let imgUrl;
        switch (cell.value) {
          case "blue":
            imgUrl = "resources/dt/blue_small.png";
            break;
          case "red":
            imgUrl = "resources/dt/red_small.png";
            break;
          default:
            break;
        }
        if (imgUrl) {
          Laya.loader.load(imgUrl).then((res) => {
            this.bigEyeRoadSprite.graphics.drawImage(res, centerX, centerY, boxWidth * 0.8, boxWidth * 0.8);
          });
        }
      }
      this.bigEyeRoadSprite.autoSize = true;
      Laya.timer.frameOnce(1, this, () => {
        this.bigEyeRoadPanel.refresh();
        this.bigEyeRoadPanel.scrollTo(boxWidth * colIndex, 0);
      });
    }
    renderSmallRoadmData() {
      const cmdWidth = this.smallRoadBox.width / 10;
      const cmdHeight = this.smallRoadBox.height / 6;
      const boxWidth = Math.min(cmdWidth, cmdHeight);
      const matrix = this.roadmap.smallroad.matrix;
      let rowIndex = this.roadmap.smallroad.previousCoordinates[0];
      let colIndex = this.roadmap.smallroad.previousCoordinates[1];
      const cell = matrix[rowIndex][colIndex];
      if (cell && cell.value) {
        const centerX = colIndex * boxWidth + boxWidth / 2 - boxWidth * 0.4;
        const centerY = rowIndex * cmdHeight + cmdHeight / 2 - boxWidth * 0.4;
        let imgUrl;
        switch (cell.value) {
          case "blue":
            imgUrl = "resources/dt/blue_full.png";
            break;
          case "red":
            imgUrl = "resources/dt/red_full.png";
            break;
          default:
            break;
        }
        if (imgUrl) {
          Laya.loader.load(imgUrl).then((res) => {
            this.smallRoadSprite.graphics.drawImage(res, centerX, centerY, boxWidth * 0.7, boxWidth * 0.7);
          });
        }
      }
      this.smallRoadSprite.autoSize = true;
      Laya.timer.frameOnce(1, this, () => {
        this.smallRoadPanel.refresh();
        this.smallRoadPanel.scrollTo(cmdWidth * colIndex, 0);
      });
    }
    renderCockroachRoadmData() {
      const cmdWidth = this.cockroachRoadBox.width / 10;
      const cmdHeight = this.cockroachRoadBox.height / 6;
      const boxWidth = Math.min(cmdWidth, cmdHeight);
      const matrix = this.roadmap.cockroachPig.matrix;
      let rowIndex = this.roadmap.cockroachPig.previousCoordinates[0];
      let colIndex = this.roadmap.cockroachPig.previousCoordinates[1];
      const cell = matrix[rowIndex][colIndex];
      if (cell && cell.value) {
        const centerX = colIndex * cmdWidth + cmdWidth / 2 - boxWidth * 0.4;
        const centerY = rowIndex * cmdHeight + cmdHeight / 2 - boxWidth * 0.4;
        let imgUrl;
        switch (cell.value) {
          case "blue":
            imgUrl = "resources/dt/blue_stick.png";
            break;
          case "red":
            imgUrl = "resources/dt/red_stick.png";
            break;
          default:
            break;
        }
        if (imgUrl) {
          Laya.loader.load(imgUrl).then((res) => {
            this.cockroachRoadSprite.graphics.drawImage(res, centerX, centerY, boxWidth * 0.7, boxWidth * 0.7);
          });
        }
      }
      this.cockroachRoadSprite.autoSize = true;
      Laya.timer.frameOnce(1, this, () => {
        this.cockroachRoadPanel.refresh();
        this.cockroachRoadPanel.scrollTo(boxWidth * colIndex, 0);
      });
    }
  };
  DragonTigerRoadmap = __decorateClass([
    regClass2("xOj4US8sSdqUtkCAiJCnUg")
  ], DragonTigerRoadmap);
})();
