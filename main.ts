basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . # .
        # . . . .
        # . . . .
        # # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # . . # .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # . # .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # # .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # # .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Punchline), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Heart)
    basic.pause(20)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(20)
    basic.showIcon(IconNames.Heart)
    basic.pause(20)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(20)
    basic.showIcon(IconNames.Heart)
    basic.pause(20)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(1000)
})
