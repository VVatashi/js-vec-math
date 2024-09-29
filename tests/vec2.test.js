import { expect, test } from '@jest/globals';
import Vec2 from '../src/vec2.js';

test('zero', () => {
    // Act
    const { zero } = Vec2;

    // Assert
    expect(zero).toStrictEqual([0, 0]);
});

test('one', () => {
    // Act
    const { one } = Vec2;

    // Assert
    expect(one).toStrictEqual([1, 1]);
});

test('unitX', () => {
    // Act
    const { unitX } = Vec2;

    // Assert
    expect(unitX).toStrictEqual([1, 0]);
});

test('unitY', () => {
    // Act
    const { unitY } = Vec2;

    // Assert
    expect(unitY).toStrictEqual([0, 1]);
});

test('empty constructor', () => {
    // Act
    const vec = new Vec2();

    // Assert
    expect(vec[0]).toBe(0);
    expect(vec[1]).toBe(0);
});

test('number constructor', () => {
    // Act
    const vec = new Vec2(3);

    // Assert
    expect(vec[0]).toBe(3);
    expect(vec[1]).toBe(3);
});

test('two numbers constructor', () => {
    // Act
    const vec = new Vec2(1, 2);

    // Assert
    expect(vec[0]).toBe(1);
    expect(vec[1]).toBe(2);
});

test('array constructor', () => {
    // Act
    const vec = new Vec2([4, 5]);

    // Assert
    expect(vec[0]).toBe(4);
    expect(vec[1]).toBe(5);
});

test('typed array constructor', () => {
    // Act
    const vec = new Vec2(new Float32Array([8, 9]));

    // Assert
    expect(vec[0]).toBe(8);
    expect(vec[1]).toBe(9);
});

test('x getter', () => {
    // Arrange
    const vec = new Vec2(1, 2);

    // Act
    const { x } = vec;

    // Assert
    expect(x).toBe(1);
});

test('x setter', () => {
    // Arrange
    const vec = new Vec2(1, 2);

    // Act
    vec.x = 3;

    // Assert
    expect(vec[0]).toBe(3);
});

test('y getter', () => {
    // Arrange
    const vec = new Vec2(1, 2);

    // Act
    const { y } = vec;

    // Assert
    expect(y).toBe(2);
});

test('y setter', () => {
    // Arrange
    const vec = new Vec2(1, 2);

    // Act
    vec.y = 5;

    // Assert
    expect(vec[1]).toBe(5);
});

test('xx getter', () => {
    // Arrange
    const vec = new Vec2(1, 2);

    // Act
    const { xx } = vec;

    // Assert
    expect(xx).toStrictEqual([1, 1]);
});

test('xy getter', () => {
    // Arrange
    const vec = new Vec2(1, 2);

    // Act
    const { xy } = vec;

    // Assert
    expect(xy).toStrictEqual([1, 2]);
});

test('yx getter', () => {
    // Arrange
    const vec = new Vec2(1, 2);

    // Act
    const { yx } = vec;

    // Assert
    expect(yx).toStrictEqual([2, 1]);
});

test('yy getter', () => {
    // Arrange
    const vec = new Vec2(1, 2);

    // Act
    const { yy } = vec;

    // Assert
    expect(yy).toStrictEqual([2, 2]);
});

test('sqrDistance', () => {
    // Arrange
    const a = new Vec2(1, 1);
    const b = new Vec2(2, 2);

    // Act
    const value = Vec2.sqrDistance(a, b);

    // Assert
    expect(value).toBe(2);
});

test('distance', () => {
    // Arrange
    const a = new Vec2(1, 1);
    const b = new Vec2(2, 2);

    // Act
    const value = Vec2.distance(a, b);

    // Assert
    expect(value).toBeCloseTo(Math.SQRT2);
});

test('min', () => {
    // Arrange
    const a = new Vec2(1, 9);
    const b = new Vec2(5, 7);

    // Act
    const c = Vec2.min(a, b);

    // Assert
    expect(c[0]).toBe(1);
    expect(c[1]).toBe(7);
});

test('max', () => {
    // Arrange
    const a = new Vec2(1, 9);
    const b = new Vec2(5, 7);

    // Act
    const c = Vec2.max(a, b);

    // Assert
    expect(c[0]).toBe(5);
    expect(c[1]).toBe(9);
});

test('mix', () => {
    // Arrange
    const a = new Vec2(0, 0);
    const b = new Vec2(2, 2);

    // Act
    const c = Vec2.mix(a, b, 0.5);

    // Assert
    expect(c[0]).toBe(1);
    expect(c[1]).toBe(1);
});

test('add', () => {
    // Arrange
    const vec = new Vec2(1, 2);

    // Act
    vec.add([3, 4]);

    // Assert
    expect(vec[0]).toBe(4);
    expect(vec[1]).toBe(6);
});

test('subtract', () => {
    // Arrange
    const vec = new Vec2(1, 2);

    // Act
    vec.subtract([3, 4]);

    // Assert
    expect(vec[0]).toBe(-2);
    expect(vec[1]).toBe(-2);
});

test('multiply', () => {
    // Arrange
    const vec = new Vec2(1, 2);

    // Act
    vec.multiply(2);

    // Assert
    expect(vec[0]).toBe(2);
    expect(vec[1]).toBe(4);
});

test('divide', () => {
    // Arrange
    const vec = new Vec2(1, 2);

    // Act
    vec.divide(2);

    // Assert
    expect(vec[0]).toBe(0.5);
    expect(vec[1]).toBe(1);
});

test('dot collinear', () => {
    // Arrange
    const vec = new Vec2(1, 0);

    // Act
    const value = vec.dot([1, 0]);

    // Assert
    expect(value).toBe(1);
});

test('dot perpendicular', () => {
    // Arrange
    const vec = new Vec2(0, 1);

    // Act
    const value = vec.dot([1, 0]);

    // Assert
    expect(value).toBe(0);
});

test('dot 45 degree', () => {
    // Arrange
    const vec = new Vec2(Math.SQRT1_2, Math.SQRT1_2);

    // Act
    const value = vec.dot([1, 0]);

    // Assert
    expect(value).toBeCloseTo(Math.SQRT1_2);
});

test('sqrMagnitude', () => {
    // Arrange
    const vec = new Vec2(1, 1);

    // Act
    const value = vec.sqrMagnitude();

    // Assert
    expect(value).toBe(2);
});

test('magnitude', () => {
    // Arrange
    const vec = new Vec2(1, 1);

    // Act
    const value = vec.magnitude();

    // Assert
    expect(value).toBeCloseTo(Math.SQRT2);
});

test('normalize', () => {
    // Arrange
    const vec = new Vec2(1, 1);

    // Act
    vec.normalize();

    // Assert
    expect(vec[0]).toBeCloseTo(Math.SQRT1_2);
    expect(vec[1]).toBeCloseTo(Math.SQRT1_2);
});

test('normalize zero', () => {
    // Arrange
    const vec = new Vec2(0, 0);

    // Act
    vec.normalize();

    // Assert
    expect(vec[0]).toBe(0);
    expect(vec[1]).toBe(0);
});
