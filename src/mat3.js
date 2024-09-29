import { dot } from './vec3.js';

export const ROWS = 3;
export const COLUMNS = 3;
export const ELEMENTS = COLUMNS * ROWS;

/**
 * @param {number} x
 * @param {number} y
 */
export /*@__INLINE__*/ function translation(x, y) {
    // prettier-ignore
    return  [
        1, 0, 0,
        0, 1, 0,
        x, y, 1,
    ];
}

/** @param {number} a Angle */
export function rotationX(a) {
    const cosA = /*@__PURE__*/ Math.fround(Math.cos(a));
    const sinA = /*@__PURE__*/ Math.fround(Math.sin(a));

    // prettier-ignore
    return  [
        1,     0,    0,
        0,  cosA, sinA,
        0, -sinA, cosA,
    ];
}

/** @param {number} a Angle */
export function rotationY(a) {
    const cosA = /*@__PURE__*/ Math.fround(Math.cos(a));
    const sinA = /*@__PURE__*/ Math.fround(Math.sin(a));

    // prettier-ignore
    return  [
        cosA, 0, -sinA,
           0, 1,     0,
        sinA, 0,  cosA,
    ];
}

/** @param {number} a Angle */
export function rotationZ(a) {
    const cosA = /*@__PURE__*/ Math.fround(Math.cos(a));
    const sinA = /*@__PURE__*/ Math.fround(Math.sin(a));

    // prettier-ignore
    return  [
         cosA, sinA, 0,
        -sinA, cosA, 0,
            0,    0, 1,
    ];
}

export const rotation = rotationZ;

/** @param {number} s Scale */
export /*@__INLINE__*/ function scale(s) {
    // prettier-ignore
    return  [
        s, 0, 0,
        0, s, 0,
        0, 0, 1,
    ];
}

/**
 * @param {number[]|Float32Array} a Left matrix
 * @param {number[]|Float32Array} b Right matrix
 */
export function multiply(a, b) {
    const result = new Array(ELEMENTS);
    for (let i = 0; i < ROWS; i++)
        for (let j = 0; j < COLUMNS; j++)
            result[COLUMNS * i + j] = /*@__PURE__*/ dot(
                [a[COLUMNS * i], a[COLUMNS * i + 1], a[COLUMNS * i + 2]],
                [b[j], b[COLUMNS + j], b[COLUMNS * 2 + j]]
            );

    return result;
}

/** @param {number[]|Float32Array} m Matrix */
export /*@__INLINE__*/ function determinant(m) {
    return /*@__PURE__*/ Math.fround(
        m[0] * m[4] * m[8] +
            m[1] * m[5] * m[6] +
            m[2] * m[3] * m[7] -
            m[2] * m[4] * m[6] -
            m[1] * m[3] * m[8] -
            m[0] * m[5] * m[7]
    );
}

/** @param {number[]|Float32Array} m Matrix */
export /*@__INLINE__*/ function transposed(m) {
    // prettier-ignore
    return [
        m[0], m[3], m[6],
        m[1], m[4], m[7],
        m[2], m[5], m[8],
    ];
}

export class Mat3 extends Float32Array {
    static get zero() {
        // prettier-ignore
        return [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ];
    }

    static get identity() {
        // prettier-ignore
        return [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
        ];
    }

    static translation = translation;
    static rotationX = rotationX;
    static rotationY = rotationY;
    static rotationZ = rotationZ;
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
        return [this[COLUMNS * i], this[COLUMNS * i + 1], this[COLUMNS * i + 2]];
    }

    /**
     * @param {number} i Row
     * @param {number[]|Float32Array} values
     * @param {number} offset
     */
    setRow(i, values, offset = 0) {
        for (let j = 0; j < COLUMNS; j++) this[COLUMNS * i + j] = values[offset + j];

        return this;
    }

    /** @param {number} j Column */
    /*@__INLINE__*/ getColumn(j) {
        return [this[j], this[COLUMNS + j], this[COLUMNS * 2 + j]];
    }

    /**
     * @param {number} j Column
     * @param {number[]|Float32Array} values
     * @param {number} offset
     */
    setColumn(j, values, offset = 0) {
        for (let i = 0; i < ROWS; i++) this[COLUMNS * i + j] = values[offset + i];

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
        [this[1], this[3]] = [this[3], this[1]];
        [this[2], this[6]] = [this[6], this[2]];
        [this[5], this[7]] = [this[7], this[5]];

        return this;
    }
}

export default Mat3;
