# SWINGENTRYRATING
# WGRIFFITH2 (C) 2014

declare lower;
INPUT kPERIOD = 40;
INPUT DPERIOD = 3;

# STOCHASTICSLOW
DEF FASTLINE = STOCHASTICSLOW("D PERIOD" = DPERIOD, "k period" = kPERIOD);
DEF SLOWLINE = STOCHASTICSLOW("D PERIOD" = DPERIOD, "k period" = kPERIOD).SLOWD;

#RSI
DEF NETCHGAVG = WILDERSAVERAGE(CLOSE - CLOSE[1], 14);
DEF TOTCHGAVG = WILDERSAVERAGE(ABSVALUE(CLOSE - CLOSE[1]), 14);
DEF CHGRATIO = IF TOTCHGAVG != 0 THEN NETCHGAVG / TOTCHGAVG ELSE 0;
DEF RSI = ROUND(50 * (CHGRATIO + 1), NUMBEROFDIGITS = 0);
DEF SMA = ROUND(SIMPLEMOVINGAVG(PRICE = RSI, LENGTH = RSI_SMA), 0);

# TEST
DEF GREENPRICE = FASTLINE >= SLOWLINE AND RSI >= SMA;
DEF REDPRICE = FASTLINE < SLOWLINE AND RSI <= SMA;

plot RATING =

if
GREENPRICE
AND CLOSE >= OHLC4[1]
AND LOWEST(FASTLINE[1],2) <= 20
then 1

else if
REDPRICE
AND CLOSE <= OHLC4[1]
AND HIGHEST(FASTLINE[1],2) >= 80
then -1

else 0;