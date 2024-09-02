/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 */
export /*@__INLINE__*/ function cross(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0],
    ];
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
    ];
}

export class Vec3 extends Float32Array {
    static get zero() { return [0, 0, 0]; }
    static get one() { return [1, 1, 1]; }
    static get unitX() { return [1, 0, 0]; }
    static get unitY() { return [0, 1, 0]; }
    static get unitZ() { return [0, 0, 1]; }

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

    /** @returns {number[]} */
    get xx() { return [this[0], this[0]]; }

    /** @returns {number[]} */
    get xy() { return [this[0], this[1]]; }

    /** @returns {number[]} */
    get xz() { return [this[0], this[2]]; }

    /** @returns {number[]} */
    get yx() { return [this[1], this[0]]; }

    /** @returns {number[]} */
    get yy() { return [this[1], this[1]]; }

    /** @returns {number[]} */
    get yz() { return [this[1], this[2]]; }

    /** @returns {number[]} */
    get zx() { return [this[2], this[0]]; }

    /** @returns {number[]} */
    get zy() { return [this[2], this[1]]; }

    /** @returns {number[]} */
    get zz() { return [this[2], this[2]]; }

    /** @returns {number[]} */
    get xxx() { return [this[0], this[0], this[0]]; }

    /** @returns {number[]} */
    get xxy() { return [this[0], this[0], this[1]]; }

    /** @returns {number[]} */
    get xxz() { return [this[0], this[0], this[2]]; }

    /** @returns {number[]} */
    get xyx() { return [this[0], this[1], this[0]]; }

    /** @returns {number[]} */
    get xyy() { return [this[0], this[1], this[1]]; }

    /** @returns {number[]} */
    get xyz() { return [this[0], this[1], this[2]]; }

    /** @returns {number[]} */
    get xzx() { return [this[0], this[2], this[0]]; }

    /** @returns {number[]} */
    get xzy() { return [this[0], this[2], this[1]]; }

    /** @returns {number[]} */
    get xzz() { return [this[0], this[2], this[2]]; }

    /** @returns {number[]} */
    get yxx() { return [this[1], this[0], this[0]]; }

    /** @returns {number[]} */
    get yxy() { return [this[1], this[0], this[1]]; }

    /** @returns {number[]} */
    get yxz() { return [this[1], this[0], this[2]]; }

    /** @returns {number[]} */
    get yyx() { return [this[1], this[1], this[0]]; }

    /** @returns {number[]} */
    get yyy() { return [this[1], this[1], this[1]]; }

    /** @returns {number[]} */
    get yyz() { return [this[1], this[1], this[2]]; }

    /** @returns {number[]} */
    get yzx() { return [this[1], this[2], this[0]]; }

    /** @returns {number[]} */
    get yzy() { return [this[1], this[2], this[1]]; }

    /** @returns {number[]} */
    get yzz() { return [this[1], this[2], this[2]]; }

    /** @returns {number[]} */
    get zxx() { return [this[2], this[0], this[0]]; }

    /** @returns {number[]} */
    get zxy() { return [this[2], this[0], this[1]]; }

    /** @returns {number[]} */
    get zxz() { return [this[2], this[0], this[2]]; }

    /** @returns {number[]} */
    get zyx() { return [this[2], this[1], this[0]]; }

    /** @returns {number[]} */
    get zyy() { return [this[2], this[1], this[1]]; }

    /** @returns {number[]} */
    get zyz() { return [this[2], this[1], this[2]]; }

    /** @returns {number[]} */
    get zzx() { return [this[2], this[2], this[0]]; }

    /** @returns {number[]} */
    get zzy() { return [this[2], this[2], this[1]]; }

    /** @returns {number[]} */
    get zzz() { return [this[2], this[2], this[2]]; }

    /** @param {number|number[]|Float32Array} values */
    constructor(...values) {
        const components = 3;

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

        return this;
    }

    /** @param {number[]|Float32Array} vec */
    subtract(vec) {
        this[0] -= vec[0];
        this[1] -= vec[1];
        this[2] -= vec[2];

        return this;
    }

    /** @param {number} value */
    multiply(value) {
        this[0] *= value;
        this[1] *= value;
        this[2] *= value;

        return this;
    }

    /** @param {number} value */
    divide(value) {
        this[0] /= value;
        this[1] /= value;
        this[2] /= value;

        return this;
    }

    /** @param {number[]|Float32Array} vec */
    /*@__INLINE__*/ dot(vec) {
        return /*@__PURE__*/ dot(this, vec);
    }

    /** @param {number[]|Float32Array} vec */
    /*@__INLINE__*/ cross(vec) {
        [this.x, this.y, this.z] = /*@__PURE__*/ cross(this, vec);

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
