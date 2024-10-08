import MathUtils from '@vvatashi/js-math-utils/src/utils.js';

export const ELEMENTS = 3;

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function dot(a, b) {
    return /*@__PURE__*/ Math.fround(a[0] * b[0] + a[1] * b[1] + a[2] * b[2]);
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function cross(a, b) {
    return [
        /*@__PURE__*/ Math.fround(a[1] * b[2] - a[2] * b[1]),
        /*@__PURE__*/ Math.fround(a[2] * b[0] - a[0] * b[2]),
        /*@__PURE__*/ Math.fround(a[0] * b[1] - a[1] * b[0]),
    ];
}

/** @param {number[]|Float32Array} v Vector */
export /*@__INLINE__*/ function sqrMagnitude(v) {
    return /*@__PURE__*/ dot(v, v);
}

/** @param {number[]|Float32Array} v Vector */
export /*@__INLINE__*/ function magnitude(v) {
    return /*@__PURE__*/ Math.fround(Math.hypot(...v));
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function sqrDistance(a, b) {
    return /*@__PURE__*/ sqrMagnitude([a[0] - b[0], a[1] - b[1], a[2] - b[2]]);
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function distance(a, b) {
    return /*@__PURE__*/ Math.fround(Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]));
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function min(a, b) {
    return [
        /*@__PURE__*/ Math.fround(Math.min(a[0], b[0])),
        /*@__PURE__*/ Math.fround(Math.min(a[1], b[1])),
        /*@__PURE__*/ Math.fround(Math.min(a[2], b[2])),
    ];
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function max(a, b) {
    return [
        /*@__PURE__*/ Math.fround(Math.max(a[0], b[0])),
        /*@__PURE__*/ Math.fround(Math.max(a[1], b[1])),
        /*@__PURE__*/ Math.fround(Math.max(a[2], b[2])),
    ];
}

/**
 * @param {number[]|Float32Array} value
 * @param {number[]|Float32Array} min
 * @param {number[]|Float32Array} max
 */
export /*@__INLINE__*/ function clamp(value, min, max) {
    return [
        /*@__PURE__*/ MathUtils.clamp(value[0], min[0], max[0]),
        /*@__PURE__*/ MathUtils.clamp(value[1], min[1], max[1]),
        /*@__PURE__*/ MathUtils.clamp(value[2], min[2], max[2]),
    ];
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 * @param {number} t
 */
export /*@__INLINE__*/ function mix(a, b, t) {
    return [
        /*@__PURE__*/ MathUtils.mix(a[0], b[0], t),
        /*@__PURE__*/ MathUtils.mix(a[1], b[1], t),
        /*@__PURE__*/ MathUtils.mix(a[2], b[2], t),
    ];
}

/**
 * @param {number[]|Float32Array} edge
 * @param {number[]|Float32Array} t
 */
export /*@__INLINE__*/ function step(edge, t) {
    return [
        /*@__PURE__*/ MathUtils.step(edge[0], t[0]),
        /*@__PURE__*/ MathUtils.step(edge[1], t[1]),
        /*@__PURE__*/ MathUtils.step(edge[2], t[2]),
    ];
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 * @param {number[]|Float32Array} t
 */
export /*@__INLINE__*/ function smoothstep(a, b, t) {
    return [
        /*@__PURE__*/ MathUtils.smoothstep(a[0], b[0], t[0]),
        /*@__PURE__*/ MathUtils.smoothstep(a[1], b[1], t[1]),
        /*@__PURE__*/ MathUtils.smoothstep(a[2], b[2], t[2]),
    ];
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 * @param {number[]|Float32Array} t
 */
export /*@__INLINE__*/ function smootherstep(a, b, t) {
    return [
        /*@__PURE__*/ MathUtils.smootherstep(a[0], b[0], t[0]),
        /*@__PURE__*/ MathUtils.smootherstep(a[1], b[1], t[1]),
        /*@__PURE__*/ MathUtils.smootherstep(a[2], b[2], t[2]),
    ];
}

export class Vec3 extends Float32Array {
    static get zero() {
        return [0, 0, 0];
    }

    static get one() {
        return [1, 1, 1];
    }

    static get unitX() {
        return [1, 0, 0];
    }

    static get unitY() {
        return [0, 1, 0];
    }

    static get unitZ() {
        return [0, 0, 1];
    }

    /** @returns {number} */
    get x() {
        return this[0];
    }

    /** @param {number} value */
    set x(value) {
        this[0] = value;
    }

    /** @returns {number} */
    get y() {
        return this[1];
    }

    /** @param {number} value */
    set y(value) {
        this[1] = value;
    }

    /** @returns {number} */
    get z() {
        return this[2];
    }

    /** @param {number} value */
    set z(value) {
        this[2] = value;
    }

    /** @returns {number[]} */
    get xx() {
        return [this[0], this[0]];
    }

    /** @returns {number[]} */
    get xy() {
        return [this[0], this[1]];
    }

    /** @returns {number[]} */
    get xz() {
        return [this[0], this[2]];
    }

    /** @returns {number[]} */
    get yx() {
        return [this[1], this[0]];
    }

    /** @returns {number[]} */
    get yy() {
        return [this[1], this[1]];
    }

    /** @returns {number[]} */
    get yz() {
        return [this[1], this[2]];
    }

    /** @returns {number[]} */
    get zx() {
        return [this[2], this[0]];
    }

    /** @returns {number[]} */
    get zy() {
        return [this[2], this[1]];
    }

    /** @returns {number[]} */
    get zz() {
        return [this[2], this[2]];
    }

    /** @returns {number[]} */
    get xxx() {
        return [this[0], this[0], this[0]];
    }

    /** @returns {number[]} */
    get xxy() {
        return [this[0], this[0], this[1]];
    }

    /** @returns {number[]} */
    get xxz() {
        return [this[0], this[0], this[2]];
    }

    /** @returns {number[]} */
    get xyx() {
        return [this[0], this[1], this[0]];
    }

    /** @returns {number[]} */
    get xyy() {
        return [this[0], this[1], this[1]];
    }

    /** @returns {number[]} */
    get xyz() {
        return [this[0], this[1], this[2]];
    }

    /** @returns {number[]} */
    get xzx() {
        return [this[0], this[2], this[0]];
    }

    /** @returns {number[]} */
    get xzy() {
        return [this[0], this[2], this[1]];
    }

    /** @returns {number[]} */
    get xzz() {
        return [this[0], this[2], this[2]];
    }

    /** @returns {number[]} */
    get yxx() {
        return [this[1], this[0], this[0]];
    }

    /** @returns {number[]} */
    get yxy() {
        return [this[1], this[0], this[1]];
    }

    /** @returns {number[]} */
    get yxz() {
        return [this[1], this[0], this[2]];
    }

    /** @returns {number[]} */
    get yyx() {
        return [this[1], this[1], this[0]];
    }

    /** @returns {number[]} */
    get yyy() {
        return [this[1], this[1], this[1]];
    }

    /** @returns {number[]} */
    get yyz() {
        return [this[1], this[1], this[2]];
    }

    /** @returns {number[]} */
    get yzx() {
        return [this[1], this[2], this[0]];
    }

    /** @returns {number[]} */
    get yzy() {
        return [this[1], this[2], this[1]];
    }

    /** @returns {number[]} */
    get yzz() {
        return [this[1], this[2], this[2]];
    }

    /** @returns {number[]} */
    get zxx() {
        return [this[2], this[0], this[0]];
    }

    /** @returns {number[]} */
    get zxy() {
        return [this[2], this[0], this[1]];
    }

    /** @returns {number[]} */
    get zxz() {
        return [this[2], this[0], this[2]];
    }

    /** @returns {number[]} */
    get zyx() {
        return [this[2], this[1], this[0]];
    }

    /** @returns {number[]} */
    get zyy() {
        return [this[2], this[1], this[1]];
    }

    /** @returns {number[]} */
    get zyz() {
        return [this[2], this[1], this[2]];
    }

    /** @returns {number[]} */
    get zzx() {
        return [this[2], this[2], this[0]];
    }

    /** @returns {number[]} */
    get zzy() {
        return [this[2], this[2], this[1]];
    }

    /** @returns {number[]} */
    get zzz() {
        return [this[2], this[2], this[2]];
    }

    /** @param {number|number[]|Float32Array} values */
    constructor(...values) {
        switch (values.length) {
            case 0:
                super(ELEMENTS);
                break;

            case 1:
                if (typeof values[0] === 'number') super(ELEMENTS).fill(values[0]);
                else super(values[0]);
                break;

            default:
                super(values);
        }
    }

    static dot = dot;
    static sqrMagnitude = sqrMagnitude;
    static magnitude = magnitude;
    static sqrDistance = sqrDistance;
    static distance = distance;
    static min = min;
    static max = max;
    static clamp = clamp;
    static mix = mix;
    static step = step;
    static smoothstep = smoothstep;
    static smootherstep = smootherstep;

    /**
     * @param {number[]|Float32Array} values
     * @param {number} offset
     */
    copyFrom(values, offset = 0) {
        for (let i = 0; i < ELEMENTS; i++) this[i] = values[offset + i];

        return this;
    }

    /**
     * @param {number[]|Float32Array} values
     * @param {number} offset
     */
    copyTo(values, offset = 0) {
        for (let i = 0; i < ELEMENTS; i++) values[offset + i] = this[i];

        return this;
    }

    /** @param {number[]|Float32Array} v Vector */
    add(v) {
        for (let i = 0; i < ELEMENTS; i++) this[i] += v[i];

        return this;
    }

    /** @param {number[]|Float32Array} v Vector */
    subtract(v) {
        for (let i = 0; i < ELEMENTS; i++) this[i] -= v[i];

        return this;
    }

    /** @param {number} value */
    multiply(value) {
        for (let i = 0; i < ELEMENTS; i++) this[i] *= value;

        return this;
    }

    /** @param {number} value */
    divide(value) {
        for (let i = 0; i < ELEMENTS; i++) this[i] /= value;

        return this;
    }

    /** @param {number[]|Float32Array} v Vector */
    /*@__INLINE__*/ dot(v) {
        return /*@__PURE__*/ dot(this, v);
    }

    /** @param {number[]|Float32Array} v Vector */
    /*@__INLINE__*/ cross(v) {
        [this[0], this[1], this[2]] = /*@__PURE__*/ cross(this, v);

        return this;
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

export default Vec3;
