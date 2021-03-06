"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.significand = exports.exponent = exports.getLowestSetBit = exports.getHighestSetBit = exports.doubleToOctets = exports.doubleToBinaryString = exports.bitLength = exports.lsbExponent = exports.msbExponent = exports.isBitAligned = exports.parseDoubleDetailed = exports.parseDouble = exports.sqrtWithErr = exports.divWithErr = exports.ddDivDdWithError = exports.ddMax = exports.ddMin = exports.ddMultByNeg4 = exports.ddMultByNeg2 = exports.ddDivBy2 = exports.ddMultBy4 = exports.ddMultBy2 = exports.ddSign = exports.ddNegativeOf = exports.ddDivDd = exports.ddDivDouble = exports.ddMultDd = exports.ddMultDouble2 = exports.ddMultDouble1 = exports.ddDiffDd = exports.ddCompare = exports.ddSum = exports.ddProduct = exports.ddAddDd = exports.ddAddDouble = exports.ddAbs = exports.ddSqrt = exports.doubleSqrt = exports.reduceSignificand = exports.twoSum = exports.doubleDivDouble = exports.twoProduct = exports.twoDiff = exports.split = exports.fastTwoSum = exports.fastTwoDiff = exports.operators = void 0;
const dd_min_1 = require("./double-double/binary/dd-min");
Object.defineProperty(exports, "ddMin", { enumerable: true, get: function () { return dd_min_1.ddMin; } });
const dd_max_1 = require("./double-double/binary/dd-max");
Object.defineProperty(exports, "ddMax", { enumerable: true, get: function () { return dd_max_1.ddMax; } });
const dd_sqrt_1 = require("./double-double/unary/dd-sqrt");
Object.defineProperty(exports, "ddSqrt", { enumerable: true, get: function () { return dd_sqrt_1.ddSqrt; } });
const double_sqrt_1 = require("./double-mixed-double-double/double-sqrt");
Object.defineProperty(exports, "doubleSqrt", { enumerable: true, get: function () { return double_sqrt_1.doubleSqrt; } });
const sqrt_with_err_1 = require("./double-with-err/sqrt-with-err");
Object.defineProperty(exports, "sqrtWithErr", { enumerable: true, get: function () { return sqrt_with_err_1.sqrtWithErr; } });
const dd_abs_1 = require("./double-double/unary/dd-abs");
Object.defineProperty(exports, "ddAbs", { enumerable: true, get: function () { return dd_abs_1.ddAbs; } });
const dd_add_double_1 = require("./double-mixed-double-double/dd-add-double");
Object.defineProperty(exports, "ddAddDouble", { enumerable: true, get: function () { return dd_add_double_1.ddAddDouble; } });
const dd_add_dd_1 = require("./double-double/binary/dd-add-dd");
Object.defineProperty(exports, "ddAddDd", { enumerable: true, get: function () { return dd_add_dd_1.ddAddDd; } });
const dd_product_1 = require("./double-double/multi/dd-product");
Object.defineProperty(exports, "ddProduct", { enumerable: true, get: function () { return dd_product_1.ddProduct; } });
const dd_sum_1 = require("./double-double/multi/dd-sum");
Object.defineProperty(exports, "ddSum", { enumerable: true, get: function () { return dd_sum_1.ddSum; } });
const dd_compare_1 = require("./double-double/binary/dd-compare");
Object.defineProperty(exports, "ddCompare", { enumerable: true, get: function () { return dd_compare_1.ddCompare; } });
const dd_diff_dd_1 = require("./double-double/binary/dd-diff-dd");
Object.defineProperty(exports, "ddDiffDd", { enumerable: true, get: function () { return dd_diff_dd_1.ddDiffDd; } });
const dd_mult_double_1 = require("./double-mixed-double-double/dd-mult-double");
Object.defineProperty(exports, "ddMultDouble1", { enumerable: true, get: function () { return dd_mult_double_1.ddMultDouble1; } });
Object.defineProperty(exports, "ddMultDouble2", { enumerable: true, get: function () { return dd_mult_double_1.ddMultDouble2; } });
const dd_mult_by_2_1 = require("./double-double/unary/dd-mult-by-2");
Object.defineProperty(exports, "ddMultBy2", { enumerable: true, get: function () { return dd_mult_by_2_1.ddMultBy2; } });
const dd_mult_by_4_1 = require("./double-double/unary/dd-mult-by-4");
Object.defineProperty(exports, "ddMultBy4", { enumerable: true, get: function () { return dd_mult_by_4_1.ddMultBy4; } });
const dd_div_by_2_1 = require("./double-double/unary/dd-div-by-2");
Object.defineProperty(exports, "ddDivBy2", { enumerable: true, get: function () { return dd_div_by_2_1.ddDivBy2; } });
const dd_mult_by_neg_2_1 = require("./double-double/unary/dd-mult-by-neg-2");
Object.defineProperty(exports, "ddMultByNeg2", { enumerable: true, get: function () { return dd_mult_by_neg_2_1.ddMultByNeg2; } });
const dd_mult_by_neg_4_1 = require("./double-double/unary/dd-mult-by-neg-4");
Object.defineProperty(exports, "ddMultByNeg4", { enumerable: true, get: function () { return dd_mult_by_neg_4_1.ddMultByNeg4; } });
const dd_mult_dd_1 = require("./double-double/binary/dd-mult-dd");
Object.defineProperty(exports, "ddMultDd", { enumerable: true, get: function () { return dd_mult_dd_1.ddMultDd; } });
const dd_div_double_1 = require("./double-mixed-double-double/dd-div-double");
Object.defineProperty(exports, "ddDivDouble", { enumerable: true, get: function () { return dd_div_double_1.ddDivDouble; } });
const dd_div_dd_1 = require("./double-double/binary/dd-div-dd");
Object.defineProperty(exports, "ddDivDd", { enumerable: true, get: function () { return dd_div_dd_1.ddDivDd; } });
const dd_negative_of_1 = require("./double-double/unary/dd-negative-of");
Object.defineProperty(exports, "ddNegativeOf", { enumerable: true, get: function () { return dd_negative_of_1.ddNegativeOf; } });
const dd_sign_1 = require("./double-double/unary/dd-sign");
Object.defineProperty(exports, "ddSign", { enumerable: true, get: function () { return dd_sign_1.ddSign; } });
const fast_two_diff_1 = require("./basic/fast-two-diff");
Object.defineProperty(exports, "fastTwoDiff", { enumerable: true, get: function () { return fast_two_diff_1.fastTwoDiff; } });
const fast_two_sum_1 = require("./basic/fast-two-sum");
Object.defineProperty(exports, "fastTwoSum", { enumerable: true, get: function () { return fast_two_sum_1.fastTwoSum; } });
const split_1 = require("./basic/split");
Object.defineProperty(exports, "split", { enumerable: true, get: function () { return split_1.split; } });
const two_diff_1 = require("./basic/two-diff");
Object.defineProperty(exports, "twoDiff", { enumerable: true, get: function () { return two_diff_1.twoDiff; } });
const two_product_1 = require("./basic/two-product");
Object.defineProperty(exports, "twoProduct", { enumerable: true, get: function () { return two_product_1.twoProduct; } });
const double_div_double_1 = require("./double-mixed-double-double/double-div-double");
Object.defineProperty(exports, "doubleDivDouble", { enumerable: true, get: function () { return double_div_double_1.doubleDivDouble; } });
const two_sum_1 = require("./basic/two-sum");
Object.defineProperty(exports, "twoSum", { enumerable: true, get: function () { return two_sum_1.twoSum; } });
const reduce_significand_1 = require("./basic/reduce-significand");
Object.defineProperty(exports, "reduceSignificand", { enumerable: true, get: function () { return reduce_significand_1.reduceSignificand; } });
const parse_double_1 = require("./double-representation/parse-double");
Object.defineProperty(exports, "parseDouble", { enumerable: true, get: function () { return parse_double_1.parseDouble; } });
Object.defineProperty(exports, "parseDoubleDetailed", { enumerable: true, get: function () { return parse_double_1.parseDoubleDetailed; } });
const is_bit_aligned_1 = require("./double-representation/is-bit-aligned");
Object.defineProperty(exports, "isBitAligned", { enumerable: true, get: function () { return is_bit_aligned_1.isBitAligned; } });
const msb_exponent_1 = require("./double-representation/msb-exponent");
Object.defineProperty(exports, "msbExponent", { enumerable: true, get: function () { return msb_exponent_1.msbExponent; } });
const lsb_exponent_1 = require("./double-representation/lsb-exponent");
Object.defineProperty(exports, "lsbExponent", { enumerable: true, get: function () { return lsb_exponent_1.lsbExponent; } });
const bit_length_1 = require("./double-representation/bit-length");
Object.defineProperty(exports, "bitLength", { enumerable: true, get: function () { return bit_length_1.bitLength; } });
const exponent_1 = require("./double-representation/exponent");
Object.defineProperty(exports, "exponent", { enumerable: true, get: function () { return exponent_1.exponent; } });
const significand_1 = require("./double-representation/significand");
Object.defineProperty(exports, "significand", { enumerable: true, get: function () { return significand_1.significand; } });
const double_to_binary_string_1 = require("./double-representation/double-to-binary-string");
Object.defineProperty(exports, "doubleToBinaryString", { enumerable: true, get: function () { return double_to_binary_string_1.doubleToBinaryString; } });
const double_to_octets_1 = require("./double-representation/double-to-octets");
Object.defineProperty(exports, "doubleToOctets", { enumerable: true, get: function () { return double_to_octets_1.doubleToOctets; } });
const get_max_set_bit_1 = require("./double-representation/get-max-set-bit");
Object.defineProperty(exports, "getHighestSetBit", { enumerable: true, get: function () { return get_max_set_bit_1.getHighestSetBit; } });
Object.defineProperty(exports, "getLowestSetBit", { enumerable: true, get: function () { return get_max_set_bit_1.getLowestSetBit; } });
const dd_div_dd_with_error_1 = require("./double-double-with-error/dd-div-dd-with-error");
Object.defineProperty(exports, "ddDivDdWithError", { enumerable: true, get: function () { return dd_div_dd_with_error_1.ddDivDdWithError; } });
const div_with_err_1 = require("./double-with-err/div-with-err");
Object.defineProperty(exports, "divWithErr", { enumerable: true, get: function () { return div_with_err_1.divWithErr; } });
const operators = {
    //---- basic ----//
    fastTwoDiff: fast_two_diff_1.fastTwoDiff,
    fastTwoSum: fast_two_sum_1.fastTwoSum,
    split: split_1.split,
    twoDiff: two_diff_1.twoDiff,
    twoProduct: two_product_1.twoProduct,
    doubleDivDouble: double_div_double_1.doubleDivDouble,
    twoSum: two_sum_1.twoSum,
    reduceSignificand: reduce_significand_1.reduceSignificand,
    //---- double-double precision ----//
    doubleSqrt: double_sqrt_1.doubleSqrt,
    ddSqrt: dd_sqrt_1.ddSqrt,
    ddAbs: dd_abs_1.ddAbs,
    ddAddDouble: dd_add_double_1.ddAddDouble,
    ddAddDd: dd_add_dd_1.ddAddDd,
    ddProduct: dd_product_1.ddProduct,
    ddSum: dd_sum_1.ddSum,
    ddCompare: dd_compare_1.ddCompare,
    ddDiffDd: dd_diff_dd_1.ddDiffDd,
    ddMultDouble1: dd_mult_double_1.ddMultDouble1,
    ddMultDouble2: dd_mult_double_1.ddMultDouble2,
    ddMultDd: dd_mult_dd_1.ddMultDd,
    ddDivDouble: dd_div_double_1.ddDivDouble,
    ddDivDd: dd_div_dd_1.ddDivDd,
    ddNegativeOf: dd_negative_of_1.ddNegativeOf,
    ddSign: dd_sign_1.ddSign,
    ddMultBy2: dd_mult_by_2_1.ddMultBy2,
    ddMultBy4: dd_mult_by_4_1.ddMultBy4,
    ddDivBy2: dd_div_by_2_1.ddDivBy2,
    ddMultByNeg2: dd_mult_by_neg_2_1.ddMultByNeg2,
    ddMultByNeg4: dd_mult_by_neg_4_1.ddMultByNeg4,
    ddMin: dd_min_1.ddMin,
    ddMax: dd_max_1.ddMax,
    //---- double-double precision error propagation - with error bound on input parameters
    ddDivDdWithError: dd_div_dd_with_error_1.ddDivDdWithError,
    //---- double precision error propagation - with error bound on input parameters
    divWithErr: div_with_err_1.divWithErr,
    sqrtWithErr: sqrt_with_err_1.sqrtWithErr,
    //---- double floating point representation ----//
    parseDouble: parse_double_1.parseDouble,
    parseDoubleDetailed: parse_double_1.parseDoubleDetailed,
    isBitAligned: is_bit_aligned_1.isBitAligned,
    msbExponent: msb_exponent_1.msbExponent,
    lsbExponent: lsb_exponent_1.lsbExponent,
    bitLength: bit_length_1.bitLength,
    doubleToBinaryString: double_to_binary_string_1.doubleToBinaryString,
    doubleToOctets: double_to_octets_1.doubleToOctets,
    getHighestSetBit: get_max_set_bit_1.getHighestSetBit,
    getLowestSetBit: get_max_set_bit_1.getLowestSetBit,
    exponent: exponent_1.exponent,
    significand: significand_1.significand
};
exports.operators = operators;
//# sourceMappingURL=index.js.map