import reverse from '../src/index.js';

test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('123')).toEqual('321');
    expect(reverse('')).toEqual('');
});
