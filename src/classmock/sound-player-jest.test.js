// @flow

import SoundPlayer from './sound-player';

jest.mock('./sound-player'); // SoundPlayer is now a mock constructor

function _mock<T>(mockFn: T): JestMockFn<Array<any>,any>  {
    return ((mockFn: any): JestMockFn<Array<any>,any>) ;
}

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
   _mock(SoundPlayer).mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayer = new SoundPlayer();
  soundPlayer.playSoundFile('mySong');

  expect(SoundPlayer).toHaveBeenCalledTimes(1);
  expect(soundPlayer.playSoundFile).toHaveBeenCalledWith('mySong');
});
