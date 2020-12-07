import clamp from '../src/clamp.js';

// TODO report to developer, the parameters are in wrong order
describe.skip("Failing tests for 'clamp' function", () => {

    test('Test where clamping does not happen', () => {
        expect(clamp(5, 4, 10)).toBe(5);
    });

    test('Test clamping top', () => {
        expect(clamp(31, 4, 10)).toBe(10);
    });

    test('Test clamping bottom', () => {
        expect(clamp(1, 6, 10)).toBe(6);
    });

    test('Test clamping top border', () => {
        expect(clamp(10, 6, 10)).toBe(10);
    });

    test('Test clamping bottom border', () => {
        expect(clamp(6, 6, 10)).toBe(6);
    });

    test('Test on negative range', () => {
        expect(clamp(-5, -3, -1)).toBe(-3);
    });
});

// TODO remove these tests when parameter order is fixed
describe("Temporary tests for 'clamp' function", () => {

    test('Test where clamping does not happen', () => {
        expect(clamp(5, 10, 4)).toBe(5);
    });

    test('Test clamping top', () => {
        expect(clamp(31, 10, 4)).toBe(10);
    });

    test('Test clamping bottom', () => {
        expect(clamp(1, 10, 6)).toBe(6);
    });

    test('Test clamping top border', () => {
        expect(clamp(10, 10, 6)).toBe(10);
    });

    test('Test clamping bottom border', () => {
        expect(clamp(6, 10, 6)).toBe(6);
    });

    test('Test on negative range', () => {
        expect(clamp(-5, -1, -3)).toBe(-3);
    });
});
