import { Vec4 } from '../src/vec4.js';

test('zero', () => {
    // Act
    const { zero } = Vec4;

    // Assert
    expect(zero).toStrictEqual([0, 0, 0, 0]);
});

test('one', () => {
    // Act
    const { one } = Vec4;

    // Assert
    expect(one).toStrictEqual([1, 1, 1, 1]);
});

test('unitX', () => {
    // Act
    const { unitX } = Vec4;

    // Assert
    expect(unitX).toStrictEqual([1, 0, 0, 0]);
});

test('unitY', () => {
    // Act
    const { unitY } = Vec4;

    // Assert
    expect(unitY).toStrictEqual([0, 1, 0, 0]);
});

test('unitZ', () => {
    // Act
    const { unitZ } = Vec4;

    // Assert
    expect(unitZ).toStrictEqual([0, 0, 1, 0]);
});

test('unitW', () => {
    // Act
    const { unitW } = Vec4;

    // Assert
    expect(unitW).toStrictEqual([0, 0, 0, 1]);
});

test('empty constructor', () => {
    // Act
    const vec = new Vec4();

    // Assert
    expect(vec[0]).toBe(0);
    expect(vec[1]).toBe(0);
    expect(vec[2]).toBe(0);
    expect(vec[3]).toBe(0);
});

test('number constructor', () => {
    // Act
    const vec = new Vec4(3);

    // Assert
    expect(vec[0]).toBe(3);
    expect(vec[1]).toBe(3);
    expect(vec[2]).toBe(3);
    expect(vec[3]).toBe(3);
});

test('4 numbers constructor', () => {
    // Act
    const vec = new Vec4(1, 2, 3, 4);

    // Assert
    expect(vec[0]).toBe(1);
    expect(vec[1]).toBe(2);
    expect(vec[2]).toBe(3);
    expect(vec[3]).toBe(4);
});

test('array constructor', () => {
    // Act
    const vec = new Vec4([4, 5, 6, 7]);

    // Assert
    expect(vec[0]).toBe(4);
    expect(vec[1]).toBe(5);
    expect(vec[2]).toBe(6);
    expect(vec[3]).toBe(7);
});

test('typed array constructor', () => {
    // Act
    const vec = new Vec4(new Float32Array([6, 7, 8, 9]));

    // Assert
    expect(vec[0]).toBe(6);
    expect(vec[1]).toBe(7);
    expect(vec[2]).toBe(8);
    expect(vec[3]).toBe(9);
});

test('x getter', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    const { x } = vec;

    // Assert
    expect(x).toBe(1);
});

test('x setter', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    vec.x = 3;

    // Assert
    expect(vec[0]).toBe(3);
});

test('y getter', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    const { y } = vec;

    // Assert
    expect(y).toBe(2);
});

test('y setter', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    vec.y = 5;

    // Assert
    expect(vec[1]).toBe(5);
});

test('z getter', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    const { z } = vec;

    // Assert
    expect(z).toBe(3);
});

test('z setter', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    vec.z = 5;

    // Assert
    expect(vec[2]).toBe(5);
});

test('w getter', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    const { w } = vec;

    // Assert
    expect(w).toBe(4);
});

test('w setter', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    vec.w = 5;

    // Assert
    expect(vec[3]).toBe(5);
});

test('xx getter', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    const { xx } = vec;

    // Assert
    expect(xx).toStrictEqual([1, 1]);
});

test('xy getter', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    const { xy } = vec;

    // Assert
    expect(xy).toStrictEqual([1, 2]);
});

test('yx getter', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    const { yx } = vec;

    // Assert
    expect(yx).toStrictEqual([2, 1]);
});

test('yy getter', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    const { yy } = vec;

    // Assert
    expect(yy).toStrictEqual([2, 2]);
});

test('sqrDistance', () => {
    // Arrange
    const a = new Vec4(1, 1, 1, 1);
    const b = new Vec4(2, 2, 2, 2);

    // Act
    const value = Vec4.sqrDistance(a, b);

    // Assert
    expect(value).toBe(4);
});

test('distance', () => {
    // Arrange
    const a = new Vec4(1, 1, 1, 1);
    const b = new Vec4(2, 2, 2, 2);

    // Act
    const value = Vec4.distance(a, b);

    // Assert
    expect(value).toBeCloseTo(2);
});

test('min', () => {
    // Arrange
    const a = new Vec4(1, 9, 2, -1);
    const b = new Vec4(5, 7, 9, 1);

    // Act
    const c = Vec4.min(a, b);

    // Assert
    expect(c[0]).toBe(1);
    expect(c[1]).toBe(7);
    expect(c[2]).toBe(2);
    expect(c[3]).toBe(-1);
});

test('max', () => {
    // Arrange
    const a = new Vec4(1, 9, 2, -1);
    const b = new Vec4(5, 7, 9, 1);

    // Act
    const c = Vec4.max(a, b);

    // Assert
    expect(c[0]).toBe(5);
    expect(c[1]).toBe(9);
    expect(c[2]).toBe(9);
    expect(c[3]).toBe(1);
});

test('mix', () => {
    // Arrange
    const a = new Vec4(0, 0, 4, -1);
    const b = new Vec4(2, 2, 2, 1);

    // Act
    const c = Vec4.mix(a, b, 0.5);

    // Assert
    expect(c[0]).toBe(1);
    expect(c[1]).toBe(1);
    expect(c[2]).toBe(3);
    expect(c[3]).toBe(0);
});

test('add', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    vec.add([3, 4, 5, 6]);

    // Assert
    expect(vec[0]).toBe(4);
    expect(vec[1]).toBe(6);
    expect(vec[2]).toBe(8);
    expect(vec[3]).toBe(10);
});

test('subtract', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    vec.subtract([3, 4, 5, 6]);

    // Assert
    expect(vec[0]).toBe(-2);
    expect(vec[1]).toBe(-2);
    expect(vec[2]).toBe(-2);
    expect(vec[3]).toBe(-2);
});

test('multiply', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    vec.multiply(2);

    // Assert
    expect(vec[0]).toBe(2);
    expect(vec[1]).toBe(4);
    expect(vec[2]).toBe(6);
    expect(vec[3]).toBe(8);
});

test('divide', () => {
    // Arrange
    const vec = new Vec4(1, 2, 3, 4);

    // Act
    vec.divide(2);

    // Assert
    expect(vec[0]).toBe(0.5);
    expect(vec[1]).toBe(1);
    expect(vec[2]).toBe(1.5);
    expect(vec[3]).toBe(2);
});

test('dot collinear', () => {
    // Arrange
    const vec = new Vec4(1, 0, 0, 0);

    // Act
    const value = vec.dot([1, 0, 0, 0]);

    // Assert
    expect(value).toBe(1);
});

test('dot perpendicular', () => {
    // Arrange
    const vec = new Vec4(0, 0, 1, 0);

    // Act
    const value = vec.dot([1, 0, 0, 0]);

    // Assert
    expect(value).toBe(0);
});

test('dot 45 degree', () => {
    // Arrange
    const vec = new Vec4(Math.SQRT1_2, 0, Math.SQRT1_2, 0);

    // Act
    const value = vec.dot([1, 0, 0, 0]);

    // Assert
    expect(value).toBeCloseTo(Math.SQRT1_2);
});

test('sqrMagnitude', () => {
    // Arrange
    const vec = new Vec4(1, 1, 1, 1);

    // Act
    const value = vec.sqrMagnitude();

    // Assert
    expect(value).toBe(4);
});

test('magnitude', () => {
    // Arrange
    const vec = new Vec4(1, 1, 1, 1);

    // Act
    const value = vec.magnitude();

    // Assert
    expect(value).toBeCloseTo(2);
});

test('normalize', () => {
    // Arrange
    const vec = new Vec4(1, 1, 1, 1);

    // Act
    vec.normalize();

    // Assert
    expect(vec[0]).toBeCloseTo(0.5);
    expect(vec[1]).toBeCloseTo(0.5);
    expect(vec[2]).toBeCloseTo(0.5);
    expect(vec[3]).toBeCloseTo(0.5);
});

test('normalize zero', () => {
    // Arrange
    const vec = new Vec4(0, 0, 0, 0);

    // Act
    vec.normalize();

    // Assert
    expect(vec[0]).toBe(0);
    expect(vec[1]).toBe(0);
    expect(vec[2]).toBe(0);
    expect(vec[3]).toBe(0);
});
