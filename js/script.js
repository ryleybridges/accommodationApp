accommodationOptions = [
  {
    id: 1,
    title: 'Novotel Wellington',
    type: 'Hotel',
    lat: -41.283823,
    lng: 174.774631,
    description: 'Novotel Wellington is a 4.5 star hotel located in the heart of the CBD, close to iconic attractions - Te Papa, Cable Car, Botanical Gardens and the Waterfront. Our modern accommodation rooms have a pop of colour and are designed with guest comfort in mind. All rooms feature smart flat screen televisions, working desks and plenty of natural light.',
    image: 'novotel.jpg'
  },
  {
    id: 2,
    title: 'InterContinetal Wellington',
    type: 'Hotel',
    lat: -41.284636,
    lng: 174.776942,
    description: 'The 5-star InterContinental Wellington is located by the harbor waterfront, just 5 mi from Wellington International Airport. It offers an exclusive club lounge, a fitness center, 2 restaurants and a bar. The elegant guest rooms are spacious and well-furnished. All rooms feature a TV with cable channels and a large bathroom with modern amenities and bathrobes. Some rooms include access to the club lounge.',
    image: 'intercontinetal-wellington.jpg'
  },
  {
    id: 3,
    title: 'Boulcott Suites',
    type: 'Hotel',
    lat: -41.289109,
    lng: 174.773975,
    description: 'Centrally located in Wellington, Boulcott Suites is a unique 5-star apartment hotel that has been designed and fully furnished with elegance and style. From studio apartments and spacious single-level suites to fully-equipped executive four bedroom townhouses, Boulcott Suites is ideal if you want quality and space. Some apartments also feature balconies.',
    image: 'boulcott.jpg'
  },
  {
    id: 4,
    title: 'YHA Wellington Backpacker Hostel',
    type: 'Hostel',
    lat: -41.293066,
    lng: 174.783989,
    description: 'Located in the very center of Wellington, this award-winning hostel features 2 fully equipped kitchens and dining areas and a spacious guest lounge room with TV projection screen and free movie hire. 2GB of free WiFi is available each day for all guests.',
    image: 'yha-wellington-exterior-2-2010-1500.jpg'
  },
  {
    id: 5,
    title: 'Nomads Capital Hostel Wellington',
    type: 'Hostel',
    lat: -41.289576,
    lng: 174.777058,
    description: 'Nomads Capital is a 5 star flashpacker hostel right in the heart of Wellington. Five minutes walk from the vibrant Cuba Street, bustling Courtenay Place, beautiful waterfront and award winning Te Papa Museum. With a range of rooms to suit every traveller and budget, and our own on-site bar and Travel Desk, we can take care of your every need while you are in town. This really is the perfect place to stay!',
    image: 'nomads.jpg'
  },
  {
    id: 6,
    title: 'The Marion Hostel',
    type: 'Hostel',
    lat: -41.294208,
    lng: 174.776705,
    description: 'Located in the heart of the city of Wellington,The Marion Hostel offers a range of backpacker accommodations and features a rooftop terrace. It is just a 1-minute walk from Cuba Street where you will find a variety of restaurants, cafes and bars. Free high speed unlimited WiFi is offered throughout the property.',
    image: 'marionhotel.jpg'
  },
  {
    id: 7,
    title: 'The Wellington Container House',
    type: 'House',
    lat: -41.334940,
    lng: 174.757320,
    description: 'This magical and unique holiday home is constructed using 3 vertically stacked shipping containers interlinked by spacious outdoor areas and a spiral staircase. Facilities include a hydrotherapy spa, free fast wifi internet, private cinema room with projector screen, full cooking facilities, designer furniture throughout, a macrocarpa bathhouse and secure parking. The outdoor areas are perfect for entertaining, with a full BBQ, an outdoor shower (for the brave) and your own private waterfall!',
    image: 'containerhouse.jpg'
  },
  {
    id: 8,
    title: 'The Penthouse on Evans Bay',
    type: 'House',
    lat: -41.304027,
    lng: 174.802489,
    description: 'This is a beautiful and sunny waterfront 3-bed penthouse apartment with an enormous balcony/deck, expansive water views overlooking Wellington Harbour and situated equidistant between Wellington City and Wellington Airport.',
    image: 'penthouse.jpg'
  },
  {
    id: 9,
    title: 'Wellington City Cottages',
    type: 'House',
    lat: -41.296782,
    lng: 174.773548,
    description: 'Just 1.2 mi from Oriental Bay, Wellington City Cottages offer self-contained accommodations with a private patio. The property features free WiFi and a lovely garden. Free parking is available on site. City Cottages Wellington are 15 minutes’ walk from the famous Te Papa Museum. Westpac Stadium, the Interislander Ferry Terminal and Wellington International Airport are all just a 10-minute drive away.',
    image: 'citycottage.jpg'
  },
  {
    id: 10,
    title: 'Bella Vista Motel',
    type: 'Motel',
    lat: -41.301914,
    lng: 174.804165,
    description: 'Located within a 10-minute drive from Wellington CBD where you will find shopping, entertainment and other activities, Bella Vista Motel Wellington offers 4-star accommodations with free private parking. Wellington Airport is just a 9-minute drive from the property.',
    image: 'bellavista.jpg'
  },
  {
    id: 11,
    title: 'Marksman Motor Inn',
    type: 'Motel',
    lat: -41.300372,
    lng: 174.778582,
    description: 'The Marksman is conveniently located in central Wellington within walking distance of local attractions, the CBD, Courtenay Place entertainment district, and close to the Interisland Ferry Terminal and Wellington City Airport.',
    image: 'marksman.jpg'
  },
  {
    id: 12,
    title: 'Airport Motor Lodge',
    type: 'Motel',
    lat: -41.325270,
    lng: 174.811649,
    description: 'Located 5 minutes walk or 2 minutes drive from Wellington Airport, Airport Motor Lodge offers fully soundproofed motel. Free onsite parking and a complimentary airport shuttle service are provided.',
    image: 'airportmotorlodge.jpg'
  }
]

function startingPage(){
  var startHTML = document.getElementById('mainPageContainer');
  startHTML.innerHTML += ('<div class="row">');
  startHTML.innerHTML += ('<div class="col d-flex justify-content-center"><img src="images/tourismlogo.png" alt="Tourism New Zealand logo"></div>')
  startHTML.innerHTML += ('</div>');
  startHTML.innerHTML += ('<div class="row">');
  startHTML.innerHTML += ('<div class="col">');
  startHTML.innerHTML += ('<h1 class="mt-3 text-center">BookIt Accommodation</h1>');
  startHTML.innerHTML += ('</div>');
  startHTML.innerHTML += ('</div>');
  startHTML.innerHTML += ('<div class="row">');
  startHTML.innerHTML += ('<div class="col">');
  startHTML.innerHTML += ('</div>');
  startHTML.innerHTML += ('<div class="col">');
  startHTML.innerHTML += ('<button type="button" class="mt-3 btn btn-dark btn-lg d-flex justify-content-center btn-begin" onclick="formPage();">BEGIN</button>')
  startHTML.innerHTML += ('</div>');
  startHTML.innerHTML += ('</div>');
}

// startingPage();

function formPage(){
  $('#mainPageContainer').html('');
  var formHTML = document.getElementById('mainPageContainer');
  formHTML.innerHTML += ('<div class="row"> <div class="col"><h4 class="text-center mt-5">Where are you headed?</h4><input type="text" id="destination" class="form-control"></div> <div class="col"><h4 class="text-center mt-5">When are you heading there?<input type="text" class="form-control" id="datepicker"></div> </div>');
  formHTML.innerHTML += ('<div class="row"><div class="col"><h4 class="text-center mt-5">How many people?</h4><input type="text" class="form-control" id="people"></div><div class="col"><h4 class="text-center mt-5">How many nights?</h4><input type="text" class="form-control" id="nights"></div></div>');
  formHTML.innerHTML += ('<div class="row"><div class="col"><button type="button" id="next" class="btn btn-dark btn-lg mt-5 d-flex justify-content-center" onclick="resultsPage();">Next</button></div></div>');

  $("#next").click(function(){
    var userDestination = document.getElementById('destination').value;
    console.log(userDestination);
    var userDate = document.getElementById('datepicker').value;
    console.log(userDate);
    var userPeople = parseInt(document.getElementById('people').value);
    console.log(userPeople);
    var userNights = parseInt(document.getElementById('nights').value);
    console.log(userNights);
  });


}
formPage();

$( function() {
    $( "#datepicker" ).datepicker();
} );

function resultsPage(){

}

var map;
function initMap(){

}
