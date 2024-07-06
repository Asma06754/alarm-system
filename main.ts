basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 715, 926, 255, 255, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
        basic.pause(100)
        basic.showIcon(IconNames.Skull)
    }
    if (input.logoIsPressed()) {
        music.stopAllSounds()
        basic.showIcon(IconNames.Yes)
    }
})
