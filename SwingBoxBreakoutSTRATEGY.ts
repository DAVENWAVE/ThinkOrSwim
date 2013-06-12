#############SWING BOX BREAKOUT############
# WGRIFFITH2 (C) 2013
# STRATEGY IS BUILT ON THE FOLLOWING PREMISE(S)
# DAVAS BOX BREAKOUT - NEW THREE DAY HIGH WITH HEAVY VOLUME
# NON-OVER-BOUGHT STOCK BASED ON STOCHASTIC SLOW
# LINEAR TREND QUALITY MUST BE POSITIVE

INPUT SIDE = "LONG";
INPUT PERIODS = 3;

# STOCHASTIC PARAMETERS
INPUT STOCHASTIC_LIMIT = 60;
INPUT KPERIOD = 14;
INPUT DPERIOD = 3;

# TRENDQ PARAMETERS
INPUT TREND_FASTLENGTH = 7;
INPUT TREND_SLOWLENGTH = 15;
INPUT TREND_LENGTH = 3;
INPUT TREND_NOISETYPE = {DEFAULT LINEAR, SQUARED};
INPUT TREND_NOISELENGTH = 90;
INPUT TREND_CORRECTIONFACTOR = 2;
INPUT TREND_MIN = 0;

# SSLIMIT SLOW 
DEF FASTLINE = ROUND(SIMPLEMOVINGAVG(100 * ((CLOSE - LOWEST(LOW, KPERIOD)) / (HIGHEST(HIGH, KPERIOD) - LOWEST(LOW, KPERIOD))), LENGTH = DPERIOD));
DEF SLOWLINE = ROUND(SIMPLEMOVINGAVG(SIMPLEMOVINGAVG(100 * ((CLOSE - LOWEST(LOW, KPERIOD)) / (HIGHEST(HIGH, KPERIOD) - LOWEST(LOW, KPERIOD))), LENGTH = DPERIOD), LENGTH = DPERIOD));
DEF GREENPRICE = FASTLINE > SLOWLINE AND FASTLINE <= STOCHASTIC_LIMIT;

# REQUIREMENTS
DEF TQ = TRENDQUALITY() > TREND_MIN;
DEF NEW_PERIOD = PERIODS - 1;
DEF ENTRYPRICE = ENTRYPRICE();
DEF ROLLINGLOW = LOWEST(DATA = LOW(), LENGTH = PERIODS)[1];
DEF STOP = (LOW <= ROLLINGLOW);
DEF BREAKOUT = (CLOSE > HIGHEST(DATA = CLOSE, LENGTH = NEW_PERIOD)[1]) AND VOLUMEAVG(LENGTH = 20) > VOLUMEAVG(LENGTH = 20).VOLAVG;
DEF SHARES = ROUND(10000 / CLOSE);

#LONG POSITION:
ADDORDER(ORDERTYPE.BUY_TO_OPEN, BREAKOUT IS TRUE AND TQ IS TRUE AND GREENPRICE IS TRUE, TRADESIZE = SHARES, TICKCOLOR = GETCOLOR(0), ARROWCOLOR = GETCOLOR(0), NAME = "LE");
ADDORDER(ORDERTYPE.SELL_TO_CLOSE, STOP IS TRUE, TRADESIZE = SHARES, TICKCOLOR = GETCOLOR(1), ARROWCOLOR = GETCOLOR(1), NAME = "LX");

##################################################