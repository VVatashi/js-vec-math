import { Vec3 } from '../src/vec3.js';

test('zero', () => {
    // Act
    const { zero } = Vec3;

    // Assert
    expect(zero).toStrictEqual([0, 0, 0]);
});

test('one', () => {
    // Act
    const { one } = Vec3;

    // Assert
    expect(one).toStrictEqual([1, 1, 1]);
});

test('unitX', () => {
    // Act
    const { unitX } = Vec3;

    // Assert
    expect(unitX).toStrictEqual([1, 0, 0]);
});

test('unitY', () => {
    // Act
    const { unitY } = Vec3;

    // Assert
    expect(unitY).toStrictEqual([0, 1, 0]);
});

test('unitZ', () => {
    // Act
    const { unitZ } = Vec3;

    // Assert
    expect(unitZ).toStrictEqual([0, 0, 1]);
});

test('empty constructor', () => {
    // Act
    const vec = new Vec3();

    // Assert
    expect(vec[0]).toBe(0);
    expect(vec[1]).toBe(0);
    expect(vec[2]).toBe(0);
});

test('number constructor', () => {
    // Act
    const vec = new Vec3(3);

    // Assert
    expect(vec[0]).toBe(3);
    expect(vec[1]).toBe(3);
    expect(vec[2]).toBe(3);
});

test('3 numbers constructor', () => {
    // Act
    const vec = new Vec3(1, 2, 3);

    // Assert
    expect(vec[0]).toBe(1);
    expect(vec[1]).toBe(2);
    expect(vec[2]).toBe(3);
});

test('array constructor', () => {
    // Act
    const vec = new Vec3([4, 5, 6]);

    // Assert
    expect(vec[0]).toBe(4);
    expect(vec[1]).toBe(5);
    expect(vec[2]).toBe(6);
});

test('typed array constructor', () => {
    // Act
    const vec = new Vec3(new Float32Array([7, 8, 9]));

    // Assert
    expect(vec[0]).toBe(7);
    expect(vec[1]).toBe(8);
    expect(vec[2]).toBe(9);
});

test('x getter', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    const { x } = vec;

    // Assert
    expect(x).toBe(1);
});

test('x setter', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    vec.x = 3;

    // Assert
    expect(vec[0]).toBe(3);
});

test('y getter', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    const { y } = vec;

    // Assert
    expect(y).toBe(2);
});

test('y setter', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    vec.y = 5;

    // Assert
    expect(vec[1]).toBe(5);
});

test('z getter', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    const { z } = vec;

    // Assert
    expect(z).toBe(3);
});

test('z setter', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    vec.z = 5;

    // Assert
    expect(vec[2]).toBe(5);
});

test('xx getter', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    const { xx } = vec;

    // Assert
    expect(xx).toStrictEqual([1, 1]);
});

test('xy getter', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    const { xy } = vec;

    // Assert
    expect(xy).toStrictEqual([1, 2]);
});

test('yx getter', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    const { yx } = vec;

    // Assert
    expect(yx).toStrictEqual([2, 1]);
});

test('yy getter', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    const { yy } = vec;

    // Assert
    expect(yy).toStrictEqual([2, 2]);
});

test('sqrDistance', () => {
    // Arrange
    const a = new Vec3(1, 1, 1);
    const b = new Vec3(2, 2, 2);

    // Act
    const value = Vec3.sqrDistance(a, b);

    // Assert
    expect(value).toBe(3);
});

test('distance', () => {
    // Arrange
    const a = new Vec3(1, 1, 1);
    const b = new Vec3(2, 2, 2);

    // Act
    const value = Vec3.distance(a, b);

    // Assert
    expect(value).toBeCloseTo(Math.sqrt(3));
});

test('min', () => {
    // Arrange
    const a = new Vec3(1, 9, 2);
    const b = new Vec3(5, 7, 9);

    // Act
    const c = Vec3.min(a, b);

    // Assert
    expect(c[0]).toBe(1);
    expect(c[1]).toBe(7);
    expect(c[2]).toBe(2);
});

test('max', () => {
    // Arrange
    const a = new Vec3(1, 9, 2);
    const b = new Vec3(5, 7, 9);

    // Act
    const c = Vec3.max(a, b);

    // Assert
    expect(c[0]).toBe(5);
    expect(c[1]).toBe(9);
    expect(c[2]).toBe(9);
});

test('mix', () => {
    // Arrange
    const a = new Vec3(0, 0, 4);
    const b = new Vec3(2, 2, 2);

    // Act
    const c = Vec3.mix(a, b, 0.5);

    // Assert
    expect(c[0]).toBe(1);
    expect(c[1]).toBe(1);
    expect(c[2]).toBe(3);
});

test('add', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    vec.add([3, 4, 5]);

    // Assert
    expect(vec[0]).toBe(4);
    expect(vec[1]).toBe(6);
    expect(vec[2]).toBe(8);
});

test('subtract', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    vec.subtract([3, 4, 5]);

    // Assert
    expect(vec[0]).toBe(-2);
    expect(vec[1]).toBe(-2);
    expect(vec[2]).toBe(-2);
});

test('multiply', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    vec.multiply(2);

    // Assert
    expect(vec[0]).toBe(2);
    expect(vec[1]).toBe(4);
    expect(vec[2]).toBe(6);
});

test('divide', () => {
    // Arrange
    const vec = new Vec3(1, 2, 3);

    // Act
    vec.divide(2);

    // Assert
    expect(vec[0]).toBe(0.5);
    expect(vec[1]).toBe(1);
    expect(vec[2]).toBe(1.5);
});

test('dot collinear', () => {
    // Arrange
    const vec = new Vec3(1, 0, 0);

    // Act
    const value = vec.dot([1, 0, 0]);

    // Assert
    expect(value).toBe(1);
});

test('dot perpendicular', () => {
    // Arrange
    const vec = new Vec3(0, 1, 0);

    // Act
    const value = vec.dot([1, 0, 0]);

    // Assert
    expect(value).toBe(0);
});

test('dot 45 degree', () => {
    // Arrange
    const vec = new Vec3(Math.SQRT1_2, 0, Math.SQRT1_2);

    // Act
    const value = vec.dot([1, 0, 0]);

    // Assert
    expect(value).toBeCloseTo(Math.SQRT1_2);
});

test('cross', () => {
    // Arrange
    const vec = new Vec3(1, 0, 0);

    // Act
    vec.cross([0, 1, 0]);

    // Assert
    expect(vec[0]).toBe(0);
    expect(vec[1]).toBe(0);
    expect(vec[2]).toBe(1);
});

test('sqrMagnitude', () => {
    // Arrange
    const vec = new Vec3(1, 1, 1);

    // Act
    const value = vec.sqrMagnitude();

    // Assert
    expect(value).toBe(3);
});

test('magnitude', () => {
    // Arrange
    const vec = new Vec3(1, 1, 1);

    // Act
    const value = vec.magnitude();

    // Assert
    expect(value).toBeCloseTo(Math.sqrt(3));
});

test('normalize', () => {
    // Arrange
    const vec = new Vec3(1, 1, 1);

    // Act
    vec.normalize();

    // Assert
    const sqrt1_3 = Math.sqrt(1 / 3);

    expect(vec[0]).toBeCloseTo(sqrt1_3);
    expect(vec[1]).toBeCloseTo(sqrt1_3);
    expect(vec[2]).toBeCloseTo(sqrt1_3);
});

test('normalize zero', () => {
    // Arrange
    const vec = new Vec3(0, 0, 0);

    // Act
    vec.normalize();

    // Assert
    expect(vec[0]).toBe(0);
    expect(vec[1]).toBe(0);
    expect(vec[2]).toBe(0);
});
