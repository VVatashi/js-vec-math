/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};

/** @param {number[]|Float32Array} vec */
export /*@__INLINE__*/ function sqrMagnitude(vec) {
    return /*@__PURE__*/ dot(vec, vec);
}

/** @param {number[]|Float32Array} vec */
export /*@__INLINE__*/ function magnitude(vec) {
    return /*@__PURE__*/ Math.sqrt(/*@__PURE__*/ sqrMagnitude(vec));
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function sqrDistance(a, b) {
    return /*@__PURE__*/ sqrMagnitude([
        a[0] - b[0],
        a[1] - b[1],
        a[2] - b[2],
        a[3] - b[3],
    ]);
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function distance(a, b) {
    return /*@__PURE__*/ Math.sqrt(/*@__PURE__*/ sqrDistance(a, b));
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function min(a, b) {
    return [
        /*@__PURE__*/ Math.min(a[0], b[0]),
        /*@__PURE__*/ Math.min(a[1], b[1]),
        /*@__PURE__*/ Math.min(a[2], b[2]),
        /*@__PURE__*/ Math.min(a[3], b[3]),
    ];
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function max(a, b) {
    return [
        /*@__PURE__*/ Math.max(a[0], b[0]),
        /*@__PURE__*/ Math.max(a[1], b[1]),
        /*@__PURE__*/ Math.max(a[2], b[2]),
        /*@__PURE__*/ Math.max(a[3], b[3]),
    ];
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 * @param {number} t
 */
export /*@__INLINE__*/ function lerp(a, b, t) {
    return [
        a[0] * (1 - t) + b[0] * t,
        a[1] * (1 - t) + b[1] * t,
        a[2] * (1 - t) + b[2] * t,
        a[3] * (1 - t) + b[3] * t,
    ];
}

export class Vec4 extends Float32Array {
    static get zero() { return [0, 0, 0, 0]; }
    static get one() { return [1, 1, 1, 1]; }
    static get unitX() { return [1, 0, 0, 0]; }
    static get unitY() { return [0, 1, 0, 0]; }
    static get unitZ() { return [0, 0, 1, 0]; }
    static get unitW() { return [0, 0, 0, 1]; }

    /** @returns {number} */
    get x() { return this[0]; }

    /** @param {number} value */
    set x(value) { this[0] = value; }

    /** @returns {number} */
    get y() { return this[1]; }

    /** @param {number} value */
    set y(value) { this[1] = value; }

    /** @returns {number} */
    get z() { return this[2]; }

    /** @param {number} value */
    set z(value) { this[2] = value; }

    /** @returns {number} */
    get w() { return this[3]; }

    /** @param {number} value */
    set w(value) { this[3] = value; }

    /** @returns {number[]} */
    get xx() { return [this[0], this[0]]; }

    /** @returns {number[]} */
    get xy() { return [this[0], this[1]]; }

    /** @returns {number[]} */
    get xz() { return [this[0], this[2]]; }

    /** @returns {number[]} */
    get xw() { return [this[0], this[3]]; }

    /** @returns {number[]} */
    get yx() { return [this[1], this[0]]; }

    /** @returns {number[]} */
    get yy() { return [this[1], this[1]]; }

    /** @returns {number[]} */
    get yz() { return [this[1], this[2]]; }

    /** @returns {number[]} */
    get yw() { return [this[1], this[3]]; }

    /** @returns {number[]} */
    get zx() { return [this[2], this[0]]; }

    /** @returns {number[]} */
    get zy() { return [this[2], this[1]]; }

    /** @returns {number[]} */
    get zz() { return [this[2], this[2]]; }

    /** @returns {number[]} */
    get zw() { return [this[2], this[3]]; }

    /** @returns {number[]} */
    get wx() { return [this[3], this[0]]; }

    /** @returns {number[]} */
    get wy() { return [this[3], this[1]]; }

    /** @returns {number[]} */
    get wz() { return [this[3], this[2]]; }

    /** @returns {number[]} */
    get ww() { return [this[3], this[3]]; }

    /** @returns {number[]} */
    get xxx() { return [this[0], this[0], this[0]]; }

    /** @returns {number[]} */
    get xxy() { return [this[0], this[0], this[1]]; }

    /** @returns {number[]} */
    get xxz() { return [this[0], this[0], this[2]]; }

    /** @returns {number[]} */
    get xxw() { return [this[0], this[0], this[3]]; }

    /** @returns {number[]} */
    get xyx() { return [this[0], this[1], this[0]]; }

    /** @returns {number[]} */
    get xyy() { return [this[0], this[1], this[1]]; }

    /** @returns {number[]} */
    get xyz() { return [this[0], this[1], this[2]]; }

    /** @returns {number[]} */
    get xyw() { return [this[0], this[1], this[3]]; }

    /** @returns {number[]} */
    get xzx() { return [this[0], this[2], this[0]]; }

    /** @returns {number[]} */
    get xzy() { return [this[0], this[2], this[1]]; }

    /** @returns {number[]} */
    get xzz() { return [this[0], this[2], this[2]]; }

    /** @returns {number[]} */
    get xzw() { return [this[0], this[2], this[3]]; }

    /** @returns {number[]} */
    get xwx() { return [this[0], this[3], this[0]]; }

    /** @returns {number[]} */
    get xwy() { return [this[0], this[3], this[1]]; }

    /** @returns {number[]} */
    get xwz() { return [this[0], this[3], this[2]]; }

    /** @returns {number[]} */
    get xww() { return [this[0], this[3], this[3]]; }

    /** @returns {number[]} */
    get yxx() { return [this[1], this[0], this[0]]; }

    /** @returns {number[]} */
    get yxy() { return [this[1], this[0], this[1]]; }

    /** @returns {number[]} */
    get yxz() { return [this[1], this[0], this[2]]; }

    /** @returns {number[]} */
    get yxw() { return [this[1], this[0], this[3]]; }

    /** @returns {number[]} */
    get yyx() { return [this[1], this[1], this[0]]; }

    /** @returns {number[]} */
    get yyy() { return [this[1], this[1], this[1]]; }

    /** @returns {number[]} */
    get yyz() { return [this[1], this[1], this[2]]; }

    /** @returns {number[]} */
    get yyw() { return [this[1], this[1], this[3]]; }

    /** @returns {number[]} */
    get yzx() { return [this[1], this[2], this[0]]; }

    /** @returns {number[]} */
    get yzy() { return [this[1], this[2], this[1]]; }

    /** @returns {number[]} */
    get yzz() { return [this[1], this[2], this[2]]; }

    /** @returns {number[]} */
    get yzw() { return [this[1], this[2], this[3]]; }

    /** @returns {number[]} */
    get ywx() { return [this[1], this[3], this[0]]; }

    /** @returns {number[]} */
    get ywy() { return [this[1], this[3], this[1]]; }

    /** @returns {number[]} */
    get ywz() { return [this[1], this[3], this[2]]; }

    /** @returns {number[]} */
    get yww() { return [this[1], this[3], this[3]]; }

    /** @returns {number[]} */
    get zxx() { return [this[2], this[0], this[0]]; }

    /** @returns {number[]} */
    get zxy() { return [this[2], this[0], this[1]]; }

    /** @returns {number[]} */
    get zxz() { return [this[2], this[0], this[2]]; }

    /** @returns {number[]} */
    get zxw() { return [this[2], this[0], this[3]]; }

    /** @returns {number[]} */
    get zyx() { return [this[2], this[1], this[0]]; }

    /** @returns {number[]} */
    get zyy() { return [this[2], this[1], this[1]]; }

    /** @returns {number[]} */
    get zyz() { return [this[2], this[1], this[2]]; }

    /** @returns {number[]} */
    get zyw() { return [this[2], this[1], this[3]]; }

    /** @returns {number[]} */
    get zzx() { return [this[2], this[2], this[0]]; }

    /** @returns {number[]} */
    get zzy() { return [this[2], this[2], this[1]]; }

    /** @returns {number[]} */
    get zzz() { return [this[2], this[2], this[2]]; }

    /** @returns {number[]} */
    get zzw() { return [this[2], this[2], this[3]]; }

    /** @returns {number[]} */
    get zwx() { return [this[2], this[3], this[0]]; }

    /** @returns {number[]} */
    get zwy() { return [this[2], this[3], this[1]]; }

    /** @returns {number[]} */
    get zwz() { return [this[2], this[3], this[2]]; }

    /** @returns {number[]} */
    get zww() { return [this[2], this[3], this[3]]; }

    /** @returns {number[]} */
    get wxx() { return [this[3], this[0], this[0]]; }

    /** @returns {number[]} */
    get wxy() { return [this[3], this[0], this[1]]; }

    /** @returns {number[]} */
    get wxz() { return [this[3], this[0], this[2]]; }

    /** @returns {number[]} */
    get wxw() { return [this[3], this[0], this[3]]; }

    /** @returns {number[]} */
    get wyx() { return [this[3], this[1], this[0]]; }

    /** @returns {number[]} */
    get wyy() { return [this[3], this[1], this[1]]; }

    /** @returns {number[]} */
    get wyz() { return [this[3], this[1], this[2]]; }

    /** @returns {number[]} */
    get wyw() { return [this[3], this[1], this[3]]; }

    /** @returns {number[]} */
    get wzx() { return [this[3], this[2], this[0]]; }

    /** @returns {number[]} */
    get wzy() { return [this[3], this[2], this[1]]; }

    /** @returns {number[]} */
    get wzz() { return [this[3], this[2], this[2]]; }

    /** @returns {number[]} */
    get wzw() { return [this[3], this[2], this[3]]; }

    /** @returns {number[]} */
    get wwx() { return [this[3], this[3], this[0]]; }

    /** @returns {number[]} */
    get wwy() { return [this[3], this[3], this[1]]; }

    /** @returns {number[]} */
    get wwz() { return [this[3], this[3], this[2]]; }

    /** @returns {number[]} */
    get www() { return [this[3], this[3], this[3]]; }

    /** @returns {number[]} */
    get xxxx() { return [this[0], this[0], this[0], this[0]]; }

    /** @returns {number[]} */
    get xxxy() { return [this[0], this[0], this[0], this[1]]; }

    /** @returns {number[]} */
    get xxxz() { return [this[0], this[0], this[0], this[2]]; }

    /** @returns {number[]} */
    get xxxw() { return [this[0], this[0], this[0], this[3]]; }

    /** @returns {number[]} */
    get xxyx() { return [this[0], this[0], this[1], this[0]]; }

    /** @returns {number[]} */
    get xxyy() { return [this[0], this[0], this[1], this[1]]; }

    /** @returns {number[]} */
    get xxyz() { return [this[0], this[0], this[1], this[2]]; }

    /** @returns {number[]} */
    get xxyw() { return [this[0], this[0], this[1], this[3]]; }

    /** @returns {number[]} */
    get xxzx() { return [this[0], this[0], this[2], this[0]]; }

    /** @returns {number[]} */
    get xxzy() { return [this[0], this[0], this[2], this[1]]; }

    /** @returns {number[]} */
    get xxzz() { return [this[0], this[0], this[2], this[2]]; }

    /** @returns {number[]} */
    get xxzw() { return [this[0], this[0], this[2], this[3]]; }

    /** @returns {number[]} */
    get xxwx() { return [this[0], this[0], this[3], this[0]]; }

    /** @returns {number[]} */
    get xxwy() { return [this[0], this[0], this[3], this[1]]; }

    /** @returns {number[]} */
    get xxwz() { return [this[0], this[0], this[3], this[2]]; }

    /** @returns {number[]} */
    get xxww() { return [this[0], this[0], this[3], this[3]]; }

    /** @returns {number[]} */
    get xyxx() { return [this[0], this[1], this[0], this[0]]; }

    /** @returns {number[]} */
    get xyxy() { return [this[0], this[1], this[0], this[1]]; }

    /** @returns {number[]} */
    get xyxz() { return [this[0], this[1], this[0], this[2]]; }

    /** @returns {number[]} */
    get xyxw() { return [this[0], this[1], this[0], this[3]]; }

    /** @returns {number[]} */
    get xyyx() { return [this[0], this[1], this[1], this[0]]; }

    /** @returns {number[]} */
    get xyyy() { return [this[0], this[1], this[1], this[1]]; }

    /** @returns {number[]} */
    get xyyz() { return [this[0], this[1], this[1], this[2]]; }

    /** @returns {number[]} */
    get xyyw() { return [this[0], this[1], this[1], this[3]]; }

    /** @returns {number[]} */
    get xyzx() { return [this[0], this[1], this[2], this[0]]; }

    /** @returns {number[]} */
    get xyzy() { return [this[0], this[1], this[2], this[1]]; }

    /** @returns {number[]} */
    get xyzz() { return [this[0], this[1], this[2], this[2]]; }

    /** @returns {number[]} */
    get xyzw() { return [this[0], this[1], this[2], this[3]]; }

    /** @returns {number[]} */
    get xywx() { return [this[0], this[1], this[3], this[0]]; }

    /** @returns {number[]} */
    get xywy() { return [this[0], this[1], this[3], this[1]]; }

    /** @returns {number[]} */
    get xywz() { return [this[0], this[1], this[3], this[2]]; }

    /** @returns {number[]} */
    get xyww() { return [this[0], this[1], this[3], this[3]]; }

    /** @returns {number[]} */
    get xzxx() { return [this[0], this[2], this[0], this[0]]; }

    /** @returns {number[]} */
    get xzxy() { return [this[0], this[2], this[0], this[1]]; }

    /** @returns {number[]} */
    get xzxz() { return [this[0], this[2], this[0], this[2]]; }

    /** @returns {number[]} */
    get xzxw() { return [this[0], this[2], this[0], this[3]]; }

    /** @returns {number[]} */
    get xzyx() { return [this[0], this[2], this[1], this[0]]; }

    /** @returns {number[]} */
    get xzyy() { return [this[0], this[2], this[1], this[1]]; }

    /** @returns {number[]} */
    get xzyz() { return [this[0], this[2], this[1], this[2]]; }

    /** @returns {number[]} */
    get xzyw() { return [this[0], this[2], this[1], this[3]]; }

    /** @returns {number[]} */
    get xzzx() { return [this[0], this[2], this[2], this[0]]; }

    /** @returns {number[]} */
    get xzzy() { return [this[0], this[2], this[2], this[1]]; }

    /** @returns {number[]} */
    get xzzz() { return [this[0], this[2], this[2], this[2]]; }

    /** @returns {number[]} */
    get xzzw() { return [this[0], this[2], this[2], this[3]]; }

    /** @returns {number[]} */
    get xzwx() { return [this[0], this[2], this[3], this[0]]; }

    /** @returns {number[]} */
    get xzwy() { return [this[0], this[2], this[3], this[1]]; }

    /** @returns {number[]} */
    get xzwz() { return [this[0], this[2], this[3], this[2]]; }

    /** @returns {number[]} */
    get xzww() { return [this[0], this[2], this[3], this[3]]; }

    /** @returns {number[]} */
    get xwxx() { return [this[0], this[3], this[0], this[0]]; }

    /** @returns {number[]} */
    get xwxy() { return [this[0], this[3], this[0], this[1]]; }

    /** @returns {number[]} */
    get xwxz() { return [this[0], this[3], this[0], this[2]]; }

    /** @returns {number[]} */
    get xwxw() { return [this[0], this[3], this[0], this[3]]; }

    /** @returns {number[]} */
    get xwyx() { return [this[0], this[3], this[1], this[0]]; }

    /** @returns {number[]} */
    get xwyy() { return [this[0], this[3], this[1], this[1]]; }

    /** @returns {number[]} */
    get xwyz() { return [this[0], this[3], this[1], this[2]]; }

    /** @returns {number[]} */
    get xwyw() { return [this[0], this[3], this[1], this[3]]; }

    /** @returns {number[]} */
    get xwzx() { return [this[0], this[3], this[2], this[0]]; }

    /** @returns {number[]} */
    get xwzy() { return [this[0], this[3], this[2], this[1]]; }

    /** @returns {number[]} */
    get xwzz() { return [this[0], this[3], this[2], this[2]]; }

    /** @returns {number[]} */
    get xwzw() { return [this[0], this[3], this[2], this[3]]; }

    /** @returns {number[]} */
    get xwwx() { return [this[0], this[3], this[3], this[0]]; }

    /** @returns {number[]} */
    get xwwy() { return [this[0], this[3], this[3], this[1]]; }

    /** @returns {number[]} */
    get xwwz() { return [this[0], this[3], this[3], this[2]]; }

    /** @returns {number[]} */
    get xwww() { return [this[0], this[3], this[3], this[3]]; }

    /** @returns {number[]} */
    get yxxx() { return [this[1], this[0], this[0], this[0]]; }

    /** @returns {number[]} */
    get yxxy() { return [this[1], this[0], this[0], this[1]]; }

    /** @returns {number[]} */
    get yxxz() { return [this[1], this[0], this[0], this[2]]; }

    /** @returns {number[]} */
    get yxxw() { return [this[1], this[0], this[0], this[3]]; }

    /** @returns {number[]} */
    get yxyx() { return [this[1], this[0], this[1], this[0]]; }

    /** @returns {number[]} */
    get yxyy() { return [this[1], this[0], this[1], this[1]]; }

    /** @returns {number[]} */
    get yxyz() { return [this[1], this[0], this[1], this[2]]; }

    /** @returns {number[]} */
    get yxyw() { return [this[1], this[0], this[1], this[3]]; }

    /** @returns {number[]} */
    get yxzx() { return [this[1], this[0], this[2], this[0]]; }

    /** @returns {number[]} */
    get yxzy() { return [this[1], this[0], this[2], this[1]]; }

    /** @returns {number[]} */
    get yxzz() { return [this[1], this[0], this[2], this[2]]; }

    /** @returns {number[]} */
    get yxzw() { return [this[1], this[0], this[2], this[3]]; }

    /** @returns {number[]} */
    get yxwx() { return [this[1], this[0], this[3], this[0]]; }

    /** @returns {number[]} */
    get yxwy() { return [this[1], this[0], this[3], this[1]]; }

    /** @returns {number[]} */
    get yxwz() { return [this[1], this[0], this[3], this[2]]; }

    /** @returns {number[]} */
    get yxww() { return [this[1], this[0], this[3], this[3]]; }

    /** @returns {number[]} */
    get yyxx() { return [this[1], this[1], this[0], this[0]]; }

    /** @returns {number[]} */
    get yyxy() { return [this[1], this[1], this[0], this[1]]; }

    /** @returns {number[]} */
    get yyxz() { return [this[1], this[1], this[0], this[2]]; }

    /** @returns {number[]} */
    get yyxw() { return [this[1], this[1], this[0], this[3]]; }

    /** @returns {number[]} */
    get yyyx() { return [this[1], this[1], this[1], this[0]]; }

    /** @returns {number[]} */
    get yyyy() { return [this[1], this[1], this[1], this[1]]; }

    /** @returns {number[]} */
    get yyyz() { return [this[1], this[1], this[1], this[2]]; }

    /** @returns {number[]} */
    get yyyw() { return [this[1], this[1], this[1], this[3]]; }

    /** @returns {number[]} */
    get yyzx() { return [this[1], this[1], this[2], this[0]]; }

    /** @returns {number[]} */
    get yyzy() { return [this[1], this[1], this[2], this[1]]; }

    /** @returns {number[]} */
    get yyzz() { return [this[1], this[1], this[2], this[2]]; }

    /** @returns {number[]} */
    get yyzw() { return [this[1], this[1], this[2], this[3]]; }

    /** @returns {number[]} */
    get yywx() { return [this[1], this[1], this[3], this[0]]; }

    /** @returns {number[]} */
    get yywy() { return [this[1], this[1], this[3], this[1]]; }

    /** @returns {number[]} */
    get yywz() { return [this[1], this[1], this[3], this[2]]; }

    /** @returns {number[]} */
    get yyww() { return [this[1], this[1], this[3], this[3]]; }

    /** @returns {number[]} */
    get yzxx() { return [this[1], this[2], this[0], this[0]]; }

    /** @returns {number[]} */
    get yzxy() { return [this[1], this[2], this[0], this[1]]; }

    /** @returns {number[]} */
    get yzxz() { return [this[1], this[2], this[0], this[2]]; }

    /** @returns {number[]} */
    get yzxw() { return [this[1], this[2], this[0], this[3]]; }

    /** @returns {number[]} */
    get yzyx() { return [this[1], this[2], this[1], this[0]]; }

    /** @returns {number[]} */
    get yzyy() { return [this[1], this[2], this[1], this[1]]; }

    /** @returns {number[]} */
    get yzyz() { return [this[1], this[2], this[1], this[2]]; }

    /** @returns {number[]} */
    get yzyw() { return [this[1], this[2], this[1], this[3]]; }

    /** @returns {number[]} */
    get yzzx() { return [this[1], this[2], this[2], this[0]]; }

    /** @returns {number[]} */
    get yzzy() { return [this[1], this[2], this[2], this[1]]; }

    /** @returns {number[]} */
    get yzzz() { return [this[1], this[2], this[2], this[2]]; }

    /** @returns {number[]} */
    get yzzw() { return [this[1], this[2], this[2], this[3]]; }

    /** @returns {number[]} */
    get yzwx() { return [this[1], this[2], this[3], this[0]]; }

    /** @returns {number[]} */
    get yzwy() { return [this[1], this[2], this[3], this[1]]; }

    /** @returns {number[]} */
    get yzwz() { return [this[1], this[2], this[3], this[2]]; }

    /** @returns {number[]} */
    get yzww() { return [this[1], this[2], this[3], this[3]]; }

    /** @returns {number[]} */
    get ywxx() { return [this[1], this[3], this[0], this[0]]; }

    /** @returns {number[]} */
    get ywxy() { return [this[1], this[3], this[0], this[1]]; }

    /** @returns {number[]} */
    get ywxz() { return [this[1], this[3], this[0], this[2]]; }

    /** @returns {number[]} */
    get ywxw() { return [this[1], this[3], this[0], this[3]]; }

    /** @returns {number[]} */
    get ywyx() { return [this[1], this[3], this[1], this[0]]; }

    /** @returns {number[]} */
    get ywyy() { return [this[1], this[3], this[1], this[1]]; }

    /** @returns {number[]} */
    get ywyz() { return [this[1], this[3], this[1], this[2]]; }

    /** @returns {number[]} */
    get ywyw() { return [this[1], this[3], this[1], this[3]]; }

    /** @returns {number[]} */
    get ywzx() { return [this[1], this[3], this[2], this[0]]; }

    /** @returns {number[]} */
    get ywzy() { return [this[1], this[3], this[2], this[1]]; }

    /** @returns {number[]} */
    get ywzz() { return [this[1], this[3], this[2], this[2]]; }

    /** @returns {number[]} */
    get ywzw() { return [this[1], this[3], this[2], this[3]]; }

    /** @returns {number[]} */
    get ywwx() { return [this[1], this[3], this[3], this[0]]; }

    /** @returns {number[]} */
    get ywwy() { return [this[1], this[3], this[3], this[1]]; }

    /** @returns {number[]} */
    get ywwz() { return [this[1], this[3], this[3], this[2]]; }

    /** @returns {number[]} */
    get ywww() { return [this[1], this[3], this[3], this[3]]; }

    /** @returns {number[]} */
    get zxxx() { return [this[2], this[0], this[0], this[0]]; }

    /** @returns {number[]} */
    get zxxy() { return [this[2], this[0], this[0], this[1]]; }

    /** @returns {number[]} */
    get zxxz() { return [this[2], this[0], this[0], this[2]]; }

    /** @returns {number[]} */
    get zxxw() { return [this[2], this[0], this[0], this[3]]; }

    /** @returns {number[]} */
    get zxyx() { return [this[2], this[0], this[1], this[0]]; }

    /** @returns {number[]} */
    get zxyy() { return [this[2], this[0], this[1], this[1]]; }

    /** @returns {number[]} */
    get zxyz() { return [this[2], this[0], this[1], this[2]]; }

    /** @returns {number[]} */
    get zxyw() { return [this[2], this[0], this[1], this[3]]; }

    /** @returns {number[]} */
    get zxzx() { return [this[2], this[0], this[2], this[0]]; }

    /** @returns {number[]} */
    get zxzy() { return [this[2], this[0], this[2], this[1]]; }

    /** @returns {number[]} */
    get zxzz() { return [this[2], this[0], this[2], this[2]]; }

    /** @returns {number[]} */
    get zxzw() { return [this[2], this[0], this[2], this[3]]; }

    /** @returns {number[]} */
    get zxwx() { return [this[2], this[0], this[3], this[0]]; }

    /** @returns {number[]} */
    get zxwy() { return [this[2], this[0], this[3], this[1]]; }

    /** @returns {number[]} */
    get zxwz() { return [this[2], this[0], this[3], this[2]]; }

    /** @returns {number[]} */
    get zxww() { return [this[2], this[0], this[3], this[3]]; }

    /** @returns {number[]} */
    get zyxx() { return [this[2], this[1], this[0], this[0]]; }

    /** @returns {number[]} */
    get zyxy() { return [this[2], this[1], this[0], this[1]]; }

    /** @returns {number[]} */
    get zyxz() { return [this[2], this[1], this[0], this[2]]; }

    /** @returns {number[]} */
    get zyxw() { return [this[2], this[1], this[0], this[3]]; }

    /** @returns {number[]} */
    get zyyx() { return [this[2], this[1], this[1], this[0]]; }

    /** @returns {number[]} */
    get zyyy() { return [this[2], this[1], this[1], this[1]]; }

    /** @returns {number[]} */
    get zyyz() { return [this[2], this[1], this[1], this[2]]; }

    /** @returns {number[]} */
    get zyyw() { return [this[2], this[1], this[1], this[3]]; }

    /** @returns {number[]} */
    get zyzx() { return [this[2], this[1], this[2], this[0]]; }

    /** @returns {number[]} */
    get zyzy() { return [this[2], this[1], this[2], this[1]]; }

    /** @returns {number[]} */
    get zyzz() { return [this[2], this[1], this[2], this[2]]; }

    /** @returns {number[]} */
    get zyzw() { return [this[2], this[1], this[2], this[3]]; }

    /** @returns {number[]} */
    get zywx() { return [this[2], this[1], this[3], this[0]]; }

    /** @returns {number[]} */
    get zywy() { return [this[2], this[1], this[3], this[1]]; }

    /** @returns {number[]} */
    get zywz() { return [this[2], this[1], this[3], this[2]]; }

    /** @returns {number[]} */
    get zyww() { return [this[2], this[1], this[3], this[3]]; }

    /** @returns {number[]} */
    get zzxx() { return [this[2], this[2], this[0], this[0]]; }

    /** @returns {number[]} */
    get zzxy() { return [this[2], this[2], this[0], this[1]]; }

    /** @returns {number[]} */
    get zzxz() { return [this[2], this[2], this[0], this[2]]; }

    /** @returns {number[]} */
    get zzxw() { return [this[2], this[2], this[0], this[3]]; }

    /** @returns {number[]} */
    get zzyx() { return [this[2], this[2], this[1], this[0]]; }

    /** @returns {number[]} */
    get zzyy() { return [this[2], this[2], this[1], this[1]]; }

    /** @returns {number[]} */
    get zzyz() { return [this[2], this[2], this[1], this[2]]; }

    /** @returns {number[]} */
    get zzyw() { return [this[2], this[2], this[1], this[3]]; }

    /** @returns {number[]} */
    get zzzx() { return [this[2], this[2], this[2], this[0]]; }

    /** @returns {number[]} */
    get zzzy() { return [this[2], this[2], this[2], this[1]]; }

    /** @returns {number[]} */
    get zzzz() { return [this[2], this[2], this[2], this[2]]; }

    /** @returns {number[]} */
    get zzzw() { return [this[2], this[2], this[2], this[3]]; }

    /** @returns {number[]} */
    get zzwx() { return [this[2], this[2], this[3], this[0]]; }

    /** @returns {number[]} */
    get zzwy() { return [this[2], this[2], this[3], this[1]]; }

    /** @returns {number[]} */
    get zzwz() { return [this[2], this[2], this[3], this[2]]; }

    /** @returns {number[]} */
    get zzww() { return [this[2], this[2], this[3], this[3]]; }

    /** @returns {number[]} */
    get zwxx() { return [this[2], this[3], this[0], this[0]]; }

    /** @returns {number[]} */
    get zwxy() { return [this[2], this[3], this[0], this[1]]; }

    /** @returns {number[]} */
    get zwxz() { return [this[2], this[3], this[0], this[2]]; }

    /** @returns {number[]} */
    get zwxw() { return [this[2], this[3], this[0], this[3]]; }

    /** @returns {number[]} */
    get zwyx() { return [this[2], this[3], this[1], this[0]]; }

    /** @returns {number[]} */
    get zwyy() { return [this[2], this[3], this[1], this[1]]; }

    /** @returns {number[]} */
    get zwyz() { return [this[2], this[3], this[1], this[2]]; }

    /** @returns {number[]} */
    get zwyw() { return [this[2], this[3], this[1], this[3]]; }

    /** @returns {number[]} */
    get zwzx() { return [this[2], this[3], this[2], this[0]]; }

    /** @returns {number[]} */
    get zwzy() { return [this[2], this[3], this[2], this[1]]; }

    /** @returns {number[]} */
    get zwzz() { return [this[2], this[3], this[2], this[2]]; }

    /** @returns {number[]} */
    get zwzw() { return [this[2], this[3], this[2], this[3]]; }

    /** @returns {number[]} */
    get zwwx() { return [this[2], this[3], this[3], this[0]]; }

    /** @returns {number[]} */
    get zwwy() { return [this[2], this[3], this[3], this[1]]; }

    /** @returns {number[]} */
    get zwwz() { return [this[2], this[3], this[3], this[2]]; }

    /** @returns {number[]} */
    get zwww() { return [this[2], this[3], this[3], this[3]]; }

    /** @returns {number[]} */
    get wxxx() { return [this[3], this[0], this[0], this[0]]; }

    /** @returns {number[]} */
    get wxxy() { return [this[3], this[0], this[0], this[1]]; }

    /** @returns {number[]} */
    get wxxz() { return [this[3], this[0], this[0], this[2]]; }

    /** @returns {number[]} */
    get wxxw() { return [this[3], this[0], this[0], this[3]]; }

    /** @returns {number[]} */
    get wxyx() { return [this[3], this[0], this[1], this[0]]; }

    /** @returns {number[]} */
    get wxyy() { return [this[3], this[0], this[1], this[1]]; }

    /** @returns {number[]} */
    get wxyz() { return [this[3], this[0], this[1], this[2]]; }

    /** @returns {number[]} */
    get wxyw() { return [this[3], this[0], this[1], this[3]]; }

    /** @returns {number[]} */
    get wxzx() { return [this[3], this[0], this[2], this[0]]; }

    /** @returns {number[]} */
    get wxzy() { return [this[3], this[0], this[2], this[1]]; }

    /** @returns {number[]} */
    get wxzz() { return [this[3], this[0], this[2], this[2]]; }

    /** @returns {number[]} */
    get wxzw() { return [this[3], this[0], this[2], this[3]]; }

    /** @returns {number[]} */
    get wxwx() { return [this[3], this[0], this[3], this[0]]; }

    /** @returns {number[]} */
    get wxwy() { return [this[3], this[0], this[3], this[1]]; }

    /** @returns {number[]} */
    get wxwz() { return [this[3], this[0], this[3], this[2]]; }

    /** @returns {number[]} */
    get wxww() { return [this[3], this[0], this[3], this[3]]; }

    /** @returns {number[]} */
    get wyxx() { return [this[3], this[1], this[0], this[0]]; }

    /** @returns {number[]} */
    get wyxy() { return [this[3], this[1], this[0], this[1]]; }

    /** @returns {number[]} */
    get wyxz() { return [this[3], this[1], this[0], this[2]]; }

    /** @returns {number[]} */
    get wyxw() { return [this[3], this[1], this[0], this[3]]; }

    /** @returns {number[]} */
    get wyyx() { return [this[3], this[1], this[1], this[0]]; }

    /** @returns {number[]} */
    get wyyy() { return [this[3], this[1], this[1], this[1]]; }

    /** @returns {number[]} */
    get wyyz() { return [this[3], this[1], this[1], this[2]]; }

    /** @returns {number[]} */
    get wyyw() { return [this[3], this[1], this[1], this[3]]; }

    /** @returns {number[]} */
    get wyzx() { return [this[3], this[1], this[2], this[0]]; }

    /** @returns {number[]} */
    get wyzy() { return [this[3], this[1], this[2], this[1]]; }

    /** @returns {number[]} */
    get wyzz() { return [this[3], this[1], this[2], this[2]]; }

    /** @returns {number[]} */
    get wyzw() { return [this[3], this[1], this[2], this[3]]; }

    /** @returns {number[]} */
    get wywx() { return [this[3], this[1], this[3], this[0]]; }

    /** @returns {number[]} */
    get wywy() { return [this[3], this[1], this[3], this[1]]; }

    /** @returns {number[]} */
    get wywz() { return [this[3], this[1], this[3], this[2]]; }

    /** @returns {number[]} */
    get wyww() { return [this[3], this[1], this[3], this[3]]; }

    /** @returns {number[]} */
    get wzxx() { return [this[3], this[2], this[0], this[0]]; }

    /** @returns {number[]} */
    get wzxy() { return [this[3], this[2], this[0], this[1]]; }

    /** @returns {number[]} */
    get wzxz() { return [this[3], this[2], this[0], this[2]]; }

    /** @returns {number[]} */
    get wzxw() { return [this[3], this[2], this[0], this[3]]; }

    /** @returns {number[]} */
    get wzyx() { return [this[3], this[2], this[1], this[0]]; }

    /** @returns {number[]} */
    get wzyy() { return [this[3], this[2], this[1], this[1]]; }

    /** @returns {number[]} */
    get wzyz() { return [this[3], this[2], this[1], this[2]]; }

    /** @returns {number[]} */
    get wzyw() { return [this[3], this[2], this[1], this[3]]; }

    /** @returns {number[]} */
    get wzzx() { return [this[3], this[2], this[2], this[0]]; }

    /** @returns {number[]} */
    get wzzy() { return [this[3], this[2], this[2], this[1]]; }

    /** @returns {number[]} */
    get wzzz() { return [this[3], this[2], this[2], this[2]]; }

    /** @returns {number[]} */
    get wzzw() { return [this[3], this[2], this[2], this[3]]; }

    /** @returns {number[]} */
    get wzwx() { return [this[3], this[2], this[3], this[0]]; }

    /** @returns {number[]} */
    get wzwy() { return [this[3], this[2], this[3], this[1]]; }

    /** @returns {number[]} */
    get wzwz() { return [this[3], this[2], this[3], this[2]]; }

    /** @returns {number[]} */
    get wzww() { return [this[3], this[2], this[3], this[3]]; }

    /** @returns {number[]} */
    get wwxx() { return [this[3], this[3], this[0], this[0]]; }

    /** @returns {number[]} */
    get wwxy() { return [this[3], this[3], this[0], this[1]]; }

    /** @returns {number[]} */
    get wwxz() { return [this[3], this[3], this[0], this[2]]; }

    /** @returns {number[]} */
    get wwxw() { return [this[3], this[3], this[0], this[3]]; }

    /** @returns {number[]} */
    get wwyx() { return [this[3], this[3], this[1], this[0]]; }

    /** @returns {number[]} */
    get wwyy() { return [this[3], this[3], this[1], this[1]]; }

    /** @returns {number[]} */
    get wwyz() { return [this[3], this[3], this[1], this[2]]; }

    /** @returns {number[]} */
    get wwyw() { return [this[3], this[3], this[1], this[3]]; }

    /** @returns {number[]} */
    get wwzx() { return [this[3], this[3], this[2], this[0]]; }

    /** @returns {number[]} */
    get wwzy() { return [this[3], this[3], this[2], this[1]]; }

    /** @returns {number[]} */
    get wwzz() { return [this[3], this[3], this[2], this[2]]; }

    /** @returns {number[]} */
    get wwzw() { return [this[3], this[3], this[2], this[3]]; }

    /** @returns {number[]} */
    get wwwx() { return [this[3], this[3], this[3], this[0]]; }

    /** @returns {number[]} */
    get wwwy() { return [this[3], this[3], this[3], this[1]]; }

    /** @returns {number[]} */
    get wwwz() { return [this[3], this[3], this[3], this[2]]; }

    /** @returns {number[]} */
    get wwww() { return [this[3], this[3], this[3], this[3]]; }

    /** @param {number|number[]|Float32Array} values */
    constructor(...values) {
        const components = 4;

        switch (values.length) {
            case 0:
                super(components);
                break;

            case 1:
                if (typeof values[0] === 'number')
                    super(components).fill(values[0]);
                else
                    super(values[0]);
                break;

            default:
                super(values);
        }
    }

    static sqrDistance = sqrDistance;
    static distance = distance;
    static min = min;
    static max = max;
    static lerp = lerp;

    /** @param {number[]|Float32Array} vec */
    add(vec) {
        this[0] += vec[0];
        this[1] += vec[1];
        this[2] += vec[2];
        this[3] += vec[3];

        return this;
    }

    /** @param {number[]|Float32Array} vec */
    subtract(vec) {
        this[0] -= vec[0];
        this[1] -= vec[1];
        this[2] -= vec[2];
        this[3] -= vec[3];

        return this;
    }

    /** @param {number} value */
    multiply(value) {
        this[0] *= value;
        this[1] *= value;
        this[2] *= value;
        this[3] *= value;

        return this;
    }

    /** @param {number} value */
    divide(value) {
        this[0] /= value;
        this[1] /= value;
        this[2] /= value;
        this[3] /= value;

        return this;
    }

    /** @param {number[]|Float32Array} vec */
    /*@__INLINE__*/ dot(vec) {
        return /*@__PURE__*/ dot(this, vec);
    }

    /*@__INLINE__*/ sqrMagnitude() {
        return /*@__PURE__*/ sqrMagnitude(this);
    }

    /*@__INLINE__*/ magnitude() {
        return /*@__PURE__*/ magnitude(this);
    }

    normalize() {
        const length = /*@__PURE__*/ magnitude(this);

        if (length === 0) return this;

        return this.divide(length);
    }
}

export default Vec4;
