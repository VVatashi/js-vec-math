import { determinant as determinant3 } from './mat3.js';
import Vec3 from './vec3.js';
import Vec4 from './vec4.js';

export const ROWS = 4;
export const COLUMNS = 4;
export const ELEMENTS = COLUMNS * ROWS;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
export /*@__INLINE__*/ function translation(x, y, z) {
    // prettier-ignore
    return  [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        x, y, z, 1,
    ];
}

/** @param {number} a Angle */
export function rotationX(a) {
    const cosA = /*@__PURE__*/ Math.fround(Math.cos(a));
    const sinA = /*@__PURE__*/ Math.fround(Math.sin(a));

    // prettier-ignore
    return  [
        1,     0,    0, 0,
        0,  cosA, sinA, 0,
        0, -sinA, cosA, 0,
        0,     0,    0, 1,
    ];
}

/** @param {number} a Angle */
export function rotationY(a) {
    const cosA = /*@__PURE__*/ Math.fround(Math.cos(a));
    const sinA = /*@__PURE__*/ Math.fround(Math.sin(a));

    // prettier-ignore
    return  [
        cosA, 0, -sinA, 0,
           0, 1,     0, 0,
        sinA, 0,  cosA, 0,
           0, 0,     0, 1,
    ];
}

/** @param {number} a Angle */
export function rotationZ(a) {
    const cosA = /*@__PURE__*/ Math.fround(Math.cos(a));
    const sinA = /*@__PURE__*/ Math.fround(Math.sin(a));

    // prettier-ignore
    return  [
         cosA, sinA, 0, 0,
        -sinA, cosA, 0, 0,
            0,    0, 1, 0,
            0,    0, 0, 1,
    ];
}

/** @param {number} s Scale */
export /*@__INLINE__*/ function scale(s) {
    // prettier-ignore
    return  [
        s, 0, 0, 0,
        0, s, 0, 0,
        0, 0, s, 0,
        0, 0, 0, 1,
    ];
}

/**
 * @param {number[]|Float32Array} position
 * @param {number[]|Float32Array} target
 * @param {number[]|Float32Array} worldUp
 */
export function lookAt(position, target, worldUp) {
    const forward = /*@__PURE__*/ new Vec3(position).subtract(target).normalize();
    const right = /*@__PURE__*/ new Vec3(worldUp).cross(forward).normalize();
    const up = /*@__PURE__*/ new Vec3(forward).cross(right).normalize();

    const tx = /*@__PURE__*/ Vec3.dot(position, right);
    const ty = /*@__PURE__*/ Vec3.dot(position, worldUp);
    const tz = /*@__PURE__*/ Vec3.dot(position, forward);

    // prettier-ignore
    return [
        right[0], up[0], forward[0], 0,
        right[1], up[1], forward[1], 0,
        right[2], up[2], forward[2], 0,
             -tx,   -ty,        -tz, 1,
    ];
}

/**
 * @param {number} left
 * @param {number} right
 * @param {number} bottom
 * @param {number} top
 * @param {number} near
 * @param {number} far
 */
export function orthographicOffCenter(left, right, bottom, top, near, far) {
    const leftRight = /*@__PURE__*/ Math.fround(1 / (left - right));
    const bottomTop = /*@__PURE__*/ Math.fround(1 / (bottom - top));
    const nearFar = /*@__PURE__*/ Math.fround(1 / (near - far));

    const sx = /*@__PURE__*/ Math.fround(-2 * leftRight);
    const sy = /*@__PURE__*/ Math.fround(-2 * bottomTop);
    const sz = /*@__PURE__*/ Math.fround(2 * nearFar);

    const tx = /*@__PURE__*/ Math.fround((left + right) * leftRight);
    const ty = /*@__PURE__*/ Math.fround((top + bottom) * bottomTop);
    const tz = /*@__PURE__*/ Math.fround((far + near) * nearFar);

    // prettier-ignore
    return [
        sx,  0,  0, 0,
         0, sy,  0, 0,
         0,  0, sz, 0,
        tx, ty, tz, 1,
    ];
}

/**
 * @param {number} fovY
 * @param {number} aspectRatio
 * @param {number} near
 * @param {number} far
 */
export function perspectiveFieldOfView(fovY, aspectRatio, near, far) {
    const top = /*@__PURE__*/ Math.fround(Math.tan(fovY / 2) * near);
    const right = /*@__PURE__*/ Math.fround(top * aspectRatio);

    const sx = /*@__PURE__*/ Math.fround(near / right);
    const sy = /*@__PURE__*/ Math.fround(near / top);
    const sz = /*@__PURE__*/ Math.fround(-(far + near) / (far - near));
    const tz = /*@__PURE__*/ Math.fround((-2 * far * near) / (far - near));

    // prettier-ignore
    return [
        sx,  0,  0,  0,
         0, sy,  0,  0,
         0,  0, sz, -1,
         0,  0, tz,  0,
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
            result[COLUMNS * i + j] = /*@__PURE__*/ Vec4.dot(
                [a[COLUMNS * i], a[COLUMNS * i + 1], a[COLUMNS * i + 2], a[COLUMNS * i + 3]],
                [b[j], b[COLUMNS + j], b[COLUMNS * 2 + j], b[COLUMNS * 3 + j]]
            );

    return result;
}

/**
 * @param {number[]|Float32Array} m Matrix
 * @param {number} i Row
 * @param {number} j Columm
 */
export /*@__INLINE__*/ function minor(m, i, j) {
    return /*@__PURE__*/ determinant3(
        m.filter((_, index) => index % 4 !== j).filter((_, index) => Math.floor(index / 3) !== i)
    );
}

/** @param {number[]|Float32Array} m Matrix */
export /*@__INLINE__*/ function determinant(m) {
    return /*@__PURE__*/ Math.fround(
        m[0] * minor(m, 0, 0) - m[1] * minor(m, 0, 1) + m[2] * minor(m, 0, 2) - m[3] * minor(m, 0, 3)
    );
}

/** @param {number[]|Float32Array} m Matrix */
export /*@__INLINE__*/ function transposed(m) {
    // prettier-ignore
    return [
        m[0], m[4],  m[8], m[12],
        m[1], m[5],  m[9], m[13],
        m[2], m[6], m[10], m[14],
        m[3], m[7], m[11], m[15],
    ];
}

/** @param {number[]|Float32Array} m Matrix */
export /*@__INLINE__*/ function cofactor(m) {
    // prettier-ignore
    return [
         minor(m, 0, 0), -minor(m, 0, 1),  minor(m, 0, 2), -minor(m, 0, 3),
        -minor(m, 1, 0),  minor(m, 1, 1), -minor(m, 1, 2),  minor(m, 1, 3),
         minor(m, 2, 0), -minor(m, 2, 1),  minor(m, 2, 2), -minor(m, 2, 3),
        -minor(m, 3, 0),  minor(m, 3, 1), -minor(m, 3, 2),  minor(m, 3, 3),
    ];
}

/** @param {number[]|Float32Array} m Matrix */
export /*@__INLINE__*/ function adjugate(m) {
    return /*@__PURE__*/ transposed(cofactor(m));
}

/** @param {number[]|Float32Array} m Matrix */
export function inverted(m) {
    const det = /*@__PURE__*/ determinant(m);
    if (det === 0) return null;

    const adj = /*@__PURE__*/ adjugate(m);
    for (let i = 0; i < ELEMENTS; i++) adj[i] /= det;

    return adj;
}

export class Mat4 extends Float32Array {
    static get zero() {
        // prettier-ignore
        return [
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
        ];
    }

    static get identity() {
        // prettier-ignore
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];
    }

    static translation = translation;
    static rotationX = rotationX;
    static rotationY = rotationY;
    static rotationZ = rotationZ;
    static scale = scale;
    static lookAt = lookAt;
    static orthographicOffCenter = orthographicOffCenter;
    static perspectiveFieldOfView = perspectiveFieldOfView;
    static multiply = multiply;
    static minor = minor;
    static determinant = determinant;
    static transposed = transposed;
    static cofactor = cofactor;
    static adjugate = adjugate;
    static inverted = inverted;

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
        return [this[COLUMNS * i], this[COLUMNS * i + 1], this[COLUMNS * i + 2], this[COLUMNS * i + 3]];
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
        return [this[j], this[COLUMNS + j], this[COLUMNS * 2 + j], this[COLUMNS * 3 + j]];
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

    /**
     * @param {number} i Row
     * @param {number} j Columm
     */
    /*@__INLINE__*/ minor(i, j) {
        return /*@__PURE__*/ minor(this, i, j);
    }

    /*@__INLINE__*/ determinant() {
        return /*@__PURE__*/ determinant(this);
    }

    transpose() {
        [this[1], this[4]] = [this[4], this[1]];
        [this[2], this[8]] = [this[8], this[2]];
        [this[3], this[12]] = [this[12], this[3]];
        [this[6], this[9]] = [this[9], this[6]];
        [this[7], this[13]] = [this[13], this[7]];
        [this[11], this[14]] = [this[14], this[11]];

        return this;
    }
}

export default Mat4;
