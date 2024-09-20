import { MathUtils } from '../node_modules/@vvatashi/js-math-utils/src/utils.js';

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function dot(a, b) {
    return /*@__PURE__*/ Math.fround(a[0] * b[0] + a[1] * b[1]);
};

/** @param {number[]|Float32Array} vec */
export /*@__INLINE__*/ function sqrMagnitude(vec) {
    return /*@__PURE__*/ dot(vec, vec);
}

/** @param {number[]|Float32Array} vec */
export /*@__INLINE__*/ function magnitude(vec) {
    return /*@__PURE__*/ Math.fround(Math.hypot(...vec));
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function sqrDistance(a, b) {
    return /*@__PURE__*/ sqrMagnitude([a[0] - b[0], a[1] - b[1]]);
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function distance(a, b) {
    return /*@__PURE__*/ Math.fround(Math.hypot(a[0] - b[0], a[1] - b[1]));
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function min(a, b) {
    return [
        /*@__PURE__*/ Math.fround(Math.min(a[0], b[0])),
        /*@__PURE__*/ Math.fround(Math.min(a[1], b[1])),
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
    ];
}

export class Vec2 extends Float32Array {
    static get zero() { return [0, 0]; }
    static get one() { return [1, 1]; }
    static get unitX() { return [1, 0]; }
    static get unitY() { return [0, 1]; }

    /** @returns {number} */
    get x() { return this[0]; }

    /** @param {number} value */
    set x(value) { this[0] = value; }

    /** @returns {number} */
    get y() { return this[1]; }

    /** @param {number} value */
    set y(value) { this[1] = value; }

    /** @returns {number[]} */
    get xx() { return [this[0], this[0]]; }

    /** @returns {number[]} */
    get xy() { return [this[0], this[1]]; }

    /** @returns {number[]} */
    get yx() { return [this[1], this[0]]; }

    /** @returns {number[]} */
    get yy() { return [this[1], this[1]]; }

    /** @param {number|number[]|Float32Array} values */
    constructor(...values) {
        const components = 2;

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

    /** @param {number[]|Float32Array} vec */
    add(vec) {
        this[0] += vec[0];
        this[1] += vec[1];

        return this;
    }

    /** @param {number[]|Float32Array} vec */
    subtract(vec) {
        this[0] -= vec[0];
        this[1] -= vec[1];

        return this;
    }

    /** @param {number} value */
    multiply(value) {
        this[0] *= value;
        this[1] *= value;

        return this;
    }

    /** @param {number} value */
    divide(value) {
        this[0] /= value;
        this[1] /= value;

        return this;
    }

    perpendicularLeft() {
        const temp = this[0];
        this[0] = -this[1];
        this[1] = temp;

        return this;
    }

    perpendicularRight() {
        const temp = this[0];
        this[0] = this[1];
        this[1] = -temp;

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

export default Vec2;
