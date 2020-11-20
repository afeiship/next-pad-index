(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.padIndex basic test', function () {
      expect(nx.padIndex(0)).toBe('000');
      expect(nx.padIndex(1)).toBe('001');
      expect(nx.padIndex(100)).toBe('100');
    });
  });
})();
