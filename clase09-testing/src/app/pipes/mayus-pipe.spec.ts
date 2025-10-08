import { MayusPipe } from './mayus-pipe';

describe('MayusPipe', () => {
  it('create an instance', () => {
    const pipe = new MayusPipe();
    expect(pipe).toBeTruthy();
  });

  it("debería transformar 'algo' en 'ALGO'", () => {
    const pipe = new MayusPipe();
    expect(pipe.transform('algo')).toBe('ALGO');
  });
});
