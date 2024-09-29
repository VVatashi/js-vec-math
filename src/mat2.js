import { dot } from './vec2.js';

export const ROWS = 2;
export const COLUMNS = 2;
export const ELEMENTS = COLUMNS * ROWS;

/** @param {number} a Angle */
export function rotation(a) {
    const cosA = Math.fround(Math.cos(a));
    const sinA = Math.fround(Math.sin(a));

    // prettier-ignore
    return  [
         cosA, sinA,
        -sinA, cosA,
    ];
}

/** @param {number} s Scale */
export /*@__INLINE__*/ function scale(s) {
    // prettier-ignore
    return  [
        s, 0,
        0, s,
    ];
}

/**
 * @param {number[]|Float32Array} a Left matrix
 * @param {number[]|Float32Array} b Right matrix
 */
export function multiply(a, b) {
    const result = new Array(ELEMENTS);
    for (i = 0; i < ROWS; i++)
        for (j = 0; j < COLUMNS; j++)
            result[COLUMNS * i + j] = dot([a[COLUMNS * i], a[COLUMNS * i + 1]], [b[j], b[COLUMNS + j]]);

    return result;
}

/** @param {number[]|Float32Array} m Matrix */
export /*@__INLINE__*/ function determinant(m) {
    return /*@__PURE__*/ Math.fround(m[0] * m[3] - m[1] * m[2]);
}

/** @param {number[]|Float32Array} m Matrix */
export /*@__INLINE__*/ function transposed(m) {
    // prettier-ignore
    return [
        m[0], m[2],
        m[1], m[3],
    ];
}

export class Mat2 extends Float32Array {
    static get zero() {
        // prettier-ignore
        return [
            0, 0,
            0, 0,
        ];
    }

    static get identity() {
        // prettier-ignore
        return [
            1, 0,
            0, 1,
        ];
    }

    static rotation = rotation;
    static scale = scale;
    static multiply = multiply;
    static determinant = determinant;
    static transposed = transposed;

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

    /**
     * @param {number} i Row
     * @param {number} j Column
     */
    /*@__INLINE__*/ get(i, j) {
        return this[COLUMNS * i + j];
    }

    /**
     * @param {number} i Row
     * @param {number} j Column
     * @param {number} value
     */
    set(i, j, value) {
        this[COLUMNS * i + j] = value;

        return this;
    }

    /** @param {number} i Row */
    /*@__INLINE__*/ getRow(i) {
        return [this[COLUMNS * i], this[COLUMNS * i + 1]];
    }

    /**
     * @param {number} i Row
     * @param {number[]|Float32Array} values
     * @param {number} offset
     */
    setRow(i, values, offset = 0) {
        for (j = 0; j < COLUMNS; j++) this[COLUMNS * i + j] = values[offset + j];

        return this;
    }

    /** @param {number} j Column */
    /*@__INLINE__*/ getColumn(j) {
        return [this[j], this[COLUMNS + j]];
    }

    /**
     * @param {number} j Column
     * @param {number[]|Float32Array} values
     * @param {number} offset
     */
    setColumn(j, values, offset = 0) {
        for (i = 0; i < ROWS; i++) this[COLUMNS * i + j] = values[offset + i];

        return this;
    }

    /** @param {number[]|Float32Array} m Matrix */
    add(m) {
        for (let i = 0; i < ELEMENTS; i++) this[i] += m[i];

        return this;
    }

    /** @param {number[]|Float32Array} m Matrix */
    subtract(m) {
        for (let i = 0; i < ELEMENTS; i++) this[i] -= m[i];

        return this;
    }

    /** @param {number} value */
    multiply(value) {
        for (let i = 0; i < ELEMENTS; i++) this[i] *= value;

        return this;
    }

    /*@__INLINE__*/ determinant() {
        return /*@__PURE__*/ determinant(this);
    }

    transpose() {
        [this[1], this[2]] = [this[2], this[1]];

        return this;
    }
}

export default Mat2;
