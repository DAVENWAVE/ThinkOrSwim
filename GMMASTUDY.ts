# GMMA
# DREWGRIFFITH15 (C) 2014

INPUT EMA1 = 4;
INPUT EMA2 = 6;
INPUT EMA3 = 8;
INPUT EMA4 = 10;
INPUT EMA5 = 12;
INPUT EMA6 = 20;
INPUT EMA7 = 30;
INPUT EMA8 = 40;
INPUT EMA9 = 50;
INPUT EMA10 = 60;

PLOT GMMA1 = EXPAVERAGE(CLOSE,EMA1);
PLOT GMMA2 = EXPAVERAGE(CLOSE,EMA2);
PLOT GMMA3 = EXPAVERAGE(CLOSE,EMA3);
PLOT GMMA4 = EXPAVERAGE(CLOSE,EMA4);
PLOT GMMA5 = EXPAVERAGE(CLOSE,EMA5);
PLOT GMMA6 = EXPAVERAGE(CLOSE,EMA6);
PLOT GMMA7 = EXPAVERAGE(CLOSE,EMA7);
PLOT GMMA8 = EXPAVERAGE(CLOSE,EMA8);
PLOT GMMA9 = EXPAVERAGE(CLOSE,EMA9);
PLOT GMMA10 = EXPAVERAGE(CLOSE,EMA10);
PLOT SMA200 = EXPAVERAGE(CLOSE,250);

GMMA1.SETDEFAULTCOLOR(GETCOLOR(1));
GMMA1.HIDEBUBBLE();
GMMA2.SETDEFAULTCOLOR(GETCOLOR(1));
GMMA2.HIDEBUBBLE();
GMMA3.SETDEFAULTCOLOR(GETCOLOR(1));
GMMA3.HIDEBUBBLE();
GMMA4.SETDEFAULTCOLOR(GETCOLOR(1));
GMMA4.HIDEBUBBLE();
GMMA5.SETDEFAULTCOLOR(GETCOLOR(1));
GMMA5.HIDEBUBBLE();
GMMA6.SETDEFAULTCOLOR(GETCOLOR(0));
GMMA6.HIDEBUBBLE();
GMMA7.SETDEFAULTCOLOR(GETCOLOR(0));
GMMA7.HIDEBUBBLE();
GMMA8.SETDEFAULTCOLOR(GETCOLOR(0));
GMMA8.HIDEBUBBLE();
GMMA9.SETDEFAULTCOLOR(GETCOLOR(0));
GMMA9.HIDEBUBBLE();
GMMA10.ASSIGNVALUECOLOR(COLOR.RED);
GMMA10.SETLINEWEIGHT(3);
GMMA10.HIDEBUBBLE();
SMA200.ASSIGNVALUECOLOR(COLOR.GREEN);
