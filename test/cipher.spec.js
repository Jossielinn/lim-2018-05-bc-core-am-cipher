describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offest 33', () => {
      assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"),'hijklmnopqrstuvwxyzabcdefg');
    });

    it('debería retornar "123 !," para "123 !," con offest 3', () => {
      assert.equal(cipher.encode(3, "123 !,"),'123 !,');
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () => {
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"),'abcdefghijklmnopqrstuvwxyz');
    });

    it('debería retornar "123 !," para "123 !," con offest 3', () => {
      assert.equal(cipher.decode(3, "123 !,"),'123 !,');
    });

  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
      assert.equal(typeof cipher.createCipherWithOffset(1), 'object');
      assert.equal(typeof cipher.createCipherWithOffset(1).encode, 'function');
      assert.equal(typeof cipher.createCipherWithOffset(1).decode, 'function');
    });

    it('debería retornar Ipmb yE. para Hola xD. con offset 1', () => {
      assert.equal(cipher.createCipherWithOffset(1).encode('Hola xD.'), 'Ipmb yE.');
    });

    it('debería retornar Hola xD. para HIpmb yE. con offset 1', () => {
      assert.equal(cipher.createCipherWithOffset(1).decode('Ipmb yE.'), 'Hola xD.');
    });

  });

});
