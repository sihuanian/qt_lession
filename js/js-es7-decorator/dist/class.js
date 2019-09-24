"use strict";

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function who(pname) {
  // console.log(target)
  // target.pname = '蜗牛'
  // return target
  return function (target) {
    console.log(target);
    target.pname = pname;
    return target;
  };
}

var // @who('蜗牛')
// @who({
//   name: '蜗牛'
// })
Man = (_dec = who('蜗牛的弟弟'), _dec(_class =
/*#__PURE__*/
function () {
  function Man() {
    _classCallCheck(this, Man);
  }

  _createClass(Man, [{
    key: "xiangqin",
    value: function xiangqin() {
      console.log("".concat(Man.pname, "\u53BB\u76F8\u4EB2\u4E86"));
    }
  }]);

  return Man;
}()) || _class);

var Man1 =
/*#__PURE__*/
function () {
  function Man1() {
    _classCallCheck(this, Man1);
  }

  _createClass(Man1, [{
    key: "xiangqin",
    value: function xiangqin() {
      console.log("\u8717\u725B\u5F1F\u5F1F\u53BB\u76F8\u4EB2\u4E86");
    }
  }]);

  return Man1;
}();

console.log(new Man().xiangqin());