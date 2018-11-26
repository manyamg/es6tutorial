import moment from 'moment'

//histroy
new Date()    //for the current date and time
//date formatting has very limited methods :
var timestamp = 1504721767;
var timestampDate = new Date(timestamp * 1000);
var day = timestampDate.getDay();
var month = timestampDate.getMonth();
var date = timestampDate.getDate();
var year = timestampDate.getFullYear();
//target output is 'Wed Sep 06 2017'
console.log(`${day} ${month} ${date} ${year}`)
//actual output is

const date = moment() //get current date and time
m = moment('2013-03-01', 'YYYY-MM-DD') //Returns a moment object.

const date = moment(string) //parse date time for given string

/*F
Format	Meaning	Example
YYYY	4-digits Year	2018
YY	2-digits Year	18
M	2-digits Month number, omits leading 0	7
MM	2-digits Month number	07
MMM	3-letters Month name	Jul
MMMM	Full Month name	July
dddd	Full day name	Sunday
gggg	4-digits Week year	2018
gg	2-digits Week year	18
w	Week of the year without leading zero	18
ww	Week of the year with leading zero	18
e	Day of the week, starts at 0	4
D	2-digits day number, omits leading 0	9
DD	2-digits day number	09
Do	Day number with ordinal	9th
T	Indicates the start of the time part	
HH	2-digits hours (24 hour time) from 0 to 23	22
H	2-digits hours (24 hour time) from 0 to 23 without leading 0	22
kk	2-digits hours (24 hour time) from 1 to 24	23
k	2-digits hours (24 hour time) from 1 to 24 without leading 0	23
a/A	am or pm	pm
hh	2-digits hours (12 hour time)	11
mm	2-digits minutes	22
ss	2-digits seconds	40
s	2-digits seconds without leading zero	40
S	1-digits milliseconds	1
SS	2-digits milliseconds	12
SSS	3-digits milliseconds	123
Z	The timezone	+02:00
x	UNIX timestamp in milliseconds	1410432140575
*/

moment().format("YYYY Do MM")

//Moment provides some constants you can use instead of writing your own format:

/*Constant	Format	Example
moment.HTML5_FMT.DATETIME_LOCAL	YYYY-MM-DDTHH:mm	2017-12-14T16:34
moment.HTML5_FMT.DATETIME_LOCAL_SECONDS	YYYY-MM-DDTHH:mm:ss	2017-12-14T16:34:10
moment.HTML5_FMT.DATETIME_LOCAL_MS	YYYY-MM-DDTHH:mm:ss.SSS	2017-12-14T16:34:10.234
moment.HTML5_FMT.DATE	YYYY-MM-DD	2017-12-14
moment.HTML5_FMT.TIME	HH:mm	16:34
moment.HTML5_FMT.TIME_SECONDS	HH:mm:ss	16:34:10
moment.HTML5_FMT.TIME_MS	HH:mm:ss.SSS	16:34:10.234
moment.HTML5_FMT.WEEK	YYYY-[W]WW	2017-W50
moment.HTML5_FMT.MONTH */


//Validating date
moment('2018-13-23').isValid() //false
moment('2018-11-23').isValid() //true

var m = moment("2011-25-08T12:65:20");
m.isValid(); // return false
m.invalidAt(); // return 4 for minutes

//from now   it just shows the difference
moment('2016-11-23').fromNow(true) //2 years
moment('2018-05-23').fromNow(true) //a month
moment('2018-11-23').fromNow(true) //5 months
//moment().isBefore(Moment|String|Number|Date|Array);

//MANIPULATE A DATE
moment('2016-11-23').add(1, 'years')
moment('2016-11-23').subtract(1, 'years')

moment().add(360,'days'); // add 360 Days to current Date
moment().subtract(7,'months') // subtact 7 months from current Date
moment().startOf('year');// set to January 1st, 12:00 am this year
moment().endOf('year');// set the moment to 12-31 23:59:59.999 this year


/*
You can use those values:
years
quarters
months
weeks
days
hours
minutes
seconds
milliseconds */


//More examples
m = moment('2013-03-01', 'YYYY-MM-DD') //To parse date time string:


m.add(1, 'day')
m.subtract(2, 'days')
m.startOf('day')
m.endOf('day')
m.startOf('hour')

m
  .format()
  .format('dddd')
  .format('MMM Do YY') // → "Sep 2nd 07"
  .fromNow() // → "31 minutes ago"
  .calendar() // → "Last Friday at 9:32PM"

  moment().add(7, 'days').subtract(2, 'months').year(2009).hours(3).minutes(6).seconds(9)  //you format your desired time in almost any pattern through their method chaining


moment('20111031', 'YYYYMMDD').fromNow()	//7 years ago
moment('20120620', 'YYYYMMDD').fromNow()	//6 years ago
moment().startOf('day').fromNow()	//16 hours ago
moment().endOf('day').fromNow()	in 8 // hours
moment().startOf('hour').fromNow()	//an hour ago



moment().format('MMMM Do YYYY, h:mm:ss a')	//November 26th 2018, 3:56:02 pm
moment().add('days', 7).format('MMMM Do YYYY, h:mm:ss a')	//December 3rd 2018, 3:56:02 pm
moment().add('days', 7).add('months', 1).format('MMMM Do YYYY, h:mm:ss a')	///January 3rd 2019, 3:56:02 pm
moment().add({days:7,months:1}).format('MMMM Do YYYY, h:mm:ss a')	//January 3rd 2019, 3:56:02 pm
moment().add('milliseconds', 1000000).format('MMMM Do YYYY, h:mm:ss a')	//November 26th 2018, 4:12:42 pm
moment().add('days', 360).format('MMMM Do YYYY, h:mm:ss a')	//November 21st 2019, 3:56:02 pm
moment(new Date(2012,12,3,6,0,0,0)) - moment(new Date(2012,12,3,5,0,0,0))	//3600000
(new Date(2012,12,3,6,0,0,0)) - (new Date(2012,12,3,5,0,0,0))	//3600000
new Date().getTimezoneOffset()//	0
moment(new Date()).zone()	//0
(new Date(2013,2,1,14,22,0,0)) - (new Date(2013,1,30,13,22,0,0))	//-82800000
moment('5/17/2013 1:45PM', 'DD/MM/YYYY hh:mm:ssa').format('MMMM Do YYYY, h:mm:ss a')	//May 5th 2014, 1:45:00 pm
(moment('2014-02-17T16:30:00')).format('MMMM Do YYYY, h:mm:ss a')	//February 17th 2014, 4:30:00 pm
(moment('2014-02-17T16:30:00z')).format('MMMM Do YYYY, h:mm:ss a')//	February 17th 2014, 4:30:00 pm
new Date('2014-02-17T16:30:00z')	//Invalid Date

//Calendar Time
moment().subtract(10, 'days').calendar(); // 05/14/2018  
moment().subtract(6, 'days').calendar();  // Last Friday at 2:03 PM  
moment().subtract(3, 'days').calendar();  // Last Monday at 2:03 PM  
moment().subtract(1, 'days').calendar();  // Yesterday at 2:03 PM  
moment().calendar();                      // Today at 2:03 PM  
moment().add(1, 'days').calendar();       // Tomorrow at 2:03 PM  
moment().add(3, 'days').calendar();       // Sunday at 2:03 PM  
moment().add(10, 'days').calendar();      // Fri, May 25, 2018 10:47 AM 

