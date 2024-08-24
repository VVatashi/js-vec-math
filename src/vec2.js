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
        switch (values.length) {
            case 0:
                super(2);
                break;

            case 1:
                if (typeof values[0] === 'number')
                    super(2).fill(values[0]);
                else
                    super(values[0]);
                break;

            default:
                super(values);
        }
    }

    /**
     * @param {number[]|Float32Array} a
     * @param {number[]|Float32Array} b
     */
    static sqrDistance(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];

        return dx * dx + dy * dy;
    }

    /**
     * @param {number[]|Float32Array} a
     * @param {number[]|Float32Array} b
     */
    static distance(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];

        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * @param {number[]|Float32Array} a
     * @param {number[]|Float32Array} b
     */
    static min(a, b) {
        const x = Math.min(a[0], b[0]);
        const y = Math.min(a[1], b[1]);

        return new Vec2(x, y);
    }

    /**
     * @param {number[]|Float32Array} a
     * @param {number[]|Float32Array} b
     */
    static max(a, b) {
        const x = Math.max(a[0], b[0]);
        const y = Math.max(a[1], b[1]);

        return new Vec2(x, y);
    }

    /**
     * @param {number[]|Float32Array} a
     * @param {number[]|Float32Array} b
     * @param {number} t
     */
    static lerp(a, b, t) {
        const x = a[0] * (1 - t) + b[0] * t;
        const y = a[1] * (1 - t) + b[1] * t;

        return new Vec2(x, y);
    }

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

    /** @param {number[]|Float32Array} vec */
    dot(vec) {
        return this[0] * vec[0] + this[1] * vec[1];
    }

    sqrMagnitude() {
        return this[0] * this[0] + this[1] * this[1];
    }

    magnitude() {
        return Math.sqrt(this[0] * this[0] + this[1] * this[1]);
    }

    normalize() {
        const magnitude = Math.sqrt(this[0] * this[0] + this[1] * this[1]);

        this[0] /= magnitude;
        this[1] /= magnitude;

        return this;
    }
}

export default Vec2;
