import { expect, test, it } from '@jest/globals';
import Mat2, { determinant, transposed } from '../src/mat2.js';

it.each([
    [
        // prettier-ignore
        [
             3, 7,
            1, -4,
        ],
        -19,
    ],
    [
        // prettier-ignore
        [
             1, 3,
            -2, 5,
        ],
        11,
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
    const mat = new Mat2([
        1, 2,
        3, 4,
    ]);

    // Act
    const result = transposed(mat);

    // Assert

    // prettier-ignore
    expect(result).toStrictEqual([
        1, 3,
        2, 4,
    ]);
});

test('transpose', () => {
    // Arrange

    // prettier-ignore
    const mat = new Mat2([
        1, 2,
        3, 4,
    ]);

    // Act
    const result = mat.transpose();

    // Assert

    // prettier-ignore
    expect([...result]).toStrictEqual([
        1, 3,
        2, 4,
    ]);
});
