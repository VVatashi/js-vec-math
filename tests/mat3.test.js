import { expect, test, it } from '@jest/globals';
import Mat3, { determinant, transposed } from '../src/mat3.js';

it.each([
    [
        // prettier-ignore
        [
            -2, -1, 2,
             2,  1, 4,
            -3,  3, -1,
        ],
        54,
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
    const mat = new Mat3([
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ]);

    // Act
    const result = transposed(mat);

    // Assert

    // prettier-ignore
    expect(result).toStrictEqual([
        1, 4, 7,
        2, 5, 8,
        3, 6, 9,
    ]);
});

test('transpose', () => {
    // Arrange

    // prettier-ignore
    const mat = new Mat3([
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ]);

    // Act
    const result = mat.transpose();

    // Assert

    // prettier-ignore
    expect([...result]).toStrictEqual([
        1, 4, 7,
        2, 5, 8,
        3, 6, 9,
    ]);
});
