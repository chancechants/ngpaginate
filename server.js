var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/src/'));

app.get('/getdata', function(req, res) {
    res.json(dummyItems);
    //res.json(500, { error: 'An error has occurred!' });
});

app.listen(8080);

console.log('Express listening on port 8080, open http://localhost:8080');

var dummyItems = [
	{ name: 'Alpha', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-01'}, 
	{ name: 'Bravo', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-02'},
	{ name: 'Charlie', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-03'},
	{ name: 'Delta', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-04'},
	{ name: 'Echo', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-05'}, 
	{ name: 'Foxtrot', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-06'},
	{ name: 'Golf', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-07'},
	{ name: 'Hotel', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-08'},
	{ name: 'India', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-09'}, 
	{ name: 'Juliet', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-10'},
	{ name: 'Kilo', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-11'},
	{ name: 'Lima', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-12'},
	{ name: 'Mike', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-13'}, 
	{ name: 'November', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-14'},
	{ name: 'Oscar', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-15'},
	{ name: 'Papa', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-16'},
	{ name: 'Quebec', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-17'}, 
	{ name: 'Romeo', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-18'},
	{ name: 'Sierra', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-19'},
	{ name: 'Tango', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-20'},
	{ name: 'Alpha', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-21'}, 
	{ name: 'Bravo', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-22'},
	{ name: 'Charlie', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-23'},
	{ name: 'Delta', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-24'},
	{ name: 'Echo', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-25'}, 
	{ name: 'Foxtrot', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-26'},
	{ name: 'Golf', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-27'},
	{ name: 'Hotel', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-28'},
	{ name: 'India', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-29'}, 
	{ name: 'Juliet', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-30'},
	{ name: 'Kilo', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-01-31'},
	{ name: 'Lima', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-01'},
	{ name: 'Mike', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-02'}, 
	{ name: 'November', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-03'},
	{ name: 'Oscar', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-04'},
	{ name: 'Papa', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-05'},
	{ name: 'Quebec', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-06'}, 
	{ name: 'Romeo', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-07'},
	{ name: 'Sierra', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-08'},
	{ name: 'Tango', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-09'},
	{ name: 'Alpha', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-10'}, 
	{ name: 'Bravo', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-11'},
	{ name: 'Charlie', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-12'},
	{ name: 'Delta', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-13'},
	{ name: 'Echo', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-14'}, 
	{ name: 'Foxtrot', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-15'},
	{ name: 'Golf', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-16'},
	{ name: 'Hotel', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-17'},
	{ name: 'India', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-18'}, 
	{ name: 'Juliet', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-19'},
	{ name: 'Kilo', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-20'},
	{ name: 'Lima', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-21'},
	{ name: 'Mike', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-22'}, 
	{ name: 'November', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-23'},
	{ name: 'Oscar', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-24'},
	{ name: 'Papa', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-25'},
	{ name: 'Quebec', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-26'}, 
	{ name: 'Romeo', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-27'},
	{ name: 'Sierra', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-28'},
	{ name: 'Tango', debit: randomTotal(), credit: randomTotal(), city: randomCity(), state: randomState(), joined: '2016-02-29'}
];

function getIndex() {
	if (firstIndex === 1) {
		return 1;
	} else return firstIndex++;
}

function randomTotal() {
    return Math.floor(Math.random() * 500);
}

function randomCity() {
	var city_names = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
	var theCity = city_names[Math.floor(Math.random() * city_names.length)];
	return theCity;

}

function randomState() {
    var states = ["AK","AL","AR","AZ","CA","CO","CT","DE","FL","GA","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"];
    var theST = states[Math.floor(Math.random() * states.length)];
    //console.log(theST);
    return theST;
}