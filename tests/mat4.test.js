import { expect, test, it } from '@jest/globals';
import Mat4, { COLUMNS, determinant, ROWS, transposed } from '../src/mat4.js';

it.each([
    [
        // prettier-ignore
        [
             1, 0,  4, -6,
             2, 5,  0,  3,
            -1, 2,  3,  5,
             2, 1, -2,  3,
        ],
        318,
    ],
])('expect determinant(%j) to be %p', (value, expected) => {
    // Act
    const result = determinant(value);

    // Assert
    expect(result).toStrictEqual(expected);
});

test('transposed', () => {
    // Arrange

    // prettier-ignore
    const mat = new Mat4([
         0,  1,  2,  3,
         4,  5,  6,  7,
         8,  9, 10, 11,
        12, 13, 14, 15,
    ]);

    // Act
    const result = transposed(mat);

    // Assert

    // prettier-ignore
    expect(result).toStrictEqual([
        0, 4,  8, 12,
        1, 5,  9, 13,
        2, 6, 10, 14,
        3, 7, 11, 15,
    ]);
});

test('transpose', () => {
    // Arrange

    // prettier-ignore
    const mat = new Mat4([
         0,  1,  2,  3,
         4,  5,  6,  7,
         8,  9, 10, 11,
        12, 13, 14, 15,
    ]);

    // Act
    const result = mat.transpose();

    // Assert

    // prettier-ignore
    expect([...result]).toStrictEqual([
        0, 4,  8, 12,
        1, 5,  9, 13,
        2, 6, 10, 14,
        3, 7, 11, 15,
    ]);
});

it.each([
    [Mat4.identity, Mat4.identity],
    [Mat4.scale(2), Mat4.scale(0.5)],
    [Mat4.translation(1, 2, 3), Mat4.translation(-1, -2, -3)],
    [Mat4.rotationY(Math.PI / 3), Mat4.rotationY(-Math.PI / 3)],
])('expect inverted(%j) to be %j', (value, expected) => {
    // Act
    const result = Mat4.inverted(value);

    // Assert
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            expect(result[COLUMNS * i + j]).toBeCloseTo(expected[COLUMNS * i + j]);
        }
    }
});
