SplashTextOn,400,95,,Selecciona una ventana y preciona CTRL + J.
^j::
WinGetTitle, window, A
WinSet, AlwaysOnTop, Toggle, A
MsgBox, 4096, Listo!, Ventana configurada.
SplashTextOff
return