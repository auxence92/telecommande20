function tourner902 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    basic.pause(500)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
}
function reculer1case () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    basic.pause(1225)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
}
function tourner90 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    basic.pause(500)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
}
function avancer1case () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(1225)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
}
reculer1case()
