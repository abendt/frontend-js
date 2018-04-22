// @flow

import createMockInstance from "jest-create-mock-instance";
import SoundPlayer from './sound-player';

it('We can check if the consumer called the class constructor', () => {
  const soundPlayer: SoundPlayer = createMockInstance(SoundPlayer);

  soundPlayer.playSoundFile("mySong");

  expect(soundPlayer.playSoundFile).toHaveBeenCalledTimes(1);
  expect(soundPlayer.playSoundFile).toHaveBeenCalledWith("mySong");

});
