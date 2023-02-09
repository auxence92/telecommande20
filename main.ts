function ligne_HàA () {
    for (let index = 0; index < 8; index++) {
        avancer1case()
    }
    reculer1case()
    tourner90()
    avancer1case()
    tourner90()
}
function tourner902 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 22)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 22)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
}
function reculer1case () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    basic.pause(1225)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
}
function ligne_AàH () {
    for (let index = 0; index < 8; index++) {
        avancer1case()
    }
    reculer1case()
    tourner902()
    avancer1case()
    tourner902()
}
function tourner90 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 22)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 24)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
}
function avancer1case () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(1225)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
}
function colonne_1à8 () {
	
}
basic.forever(function () {
	
})
