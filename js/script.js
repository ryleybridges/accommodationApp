var accommodationOptions = [
  {
    id: 1,
    title: 'YHA Wellington Backpacker Hostel',
    type: 'Hostel',
    cost: 30,
    lat: -41.293066,
    lng: 174.783989,
    description: 'Located in the very center of Wellington, this award-winning hostel features 2 fully equipped kitchens and dining areas and a spacious guest lounge room with TV projection screen and free movie hire. 2GB of free WiFi is available each day for all guests.',
    image: 'yha-wellington-exterior-2-2010-1500.jpg'
  },
  {
    id: 2,
    title: 'Novotel Wellington',
    type: 'Hotel',
    cost: 157,
    lat: -41.283823,
    lng: 174.774631,
    description: 'Novotel Wellington is a 4.5 star hotel located in the heart of the CBD, close to iconic attractions - Te Papa, Cable Car, Botanical Gardens and the Waterfront. Our modern accommodation rooms have a pop of colour and are designed with guest comfort in mind. All rooms feature smart flat screen televisions, working desks and plenty of natural light.',
    image: 'novotel.jpg'
  },
  {
    id: 3,
    title: 'InterContinental',
    type: 'Hotel',
    cost: 157,
    lat: -41.284636,
    lng: 174.776942,
    description: 'The 5-star InterContinental Wellington is located by the harbor waterfront, just 5 mi from Wellington International Airport. It offers an exclusive club lounge, a fitness center, 2 restaurants and a bar. The elegant guest rooms are spacious and well-furnished. All rooms feature a TV with cable channels and a large bathroom with modern amenities and bathrobes. Some rooms include access to the club lounge.',
    image: 'intercontinental-wellington.jpg'
  },
  {
    id: 4,
    title: 'Boulcott Suites',
    type: 'Hotel',
    cost: 157,
    lat: -41.289109,
    lng: 174.773975,
    description: 'Centrally located in Wellington, Boulcott Suites is a unique 5-star apartment hotel that has been designed and fully furnished with elegance and style. From studio apartments and spacious single-level suites to fully-equipped executive four bedroom townhouses, Boulcott Suites is ideal if you want quality and space. Some apartments also feature balconies.',
    image: 'boulcott.jpg'
  },

  {
    id: 5,
    title: 'Nomads Capital Hostel',
    type: 'Hostel',
    cost: 30,
    lat: -41.289576,
    lng: 174.777058,
    description: 'Nomads Capital is a 5 star flashpacker hostel right in the heart of Wellington. Five minutes walk from the vibrant Cuba Street, bustling Courtenay Place, beautiful waterfront and award winning Te Papa Museum. With a range of rooms to suit every traveller and budget, and our own on-site bar and Travel Desk, we can take care of your every need while you are in town. This really is the perfect place to stay!',
    image: 'nomads.jpg'
  },
  {
    id: 6,
    title: 'The Marion Hostel',
    type: 'Hostel',
    cost: 30,
    lat: -41.294208,
    lng: 174.776705,
    description: 'Located in the heart of the city of Wellington,The Marion Hostel offers a range of backpacker accommodations and features a rooftop terrace. It is just a 1-minute walk from Cuba Street where you will find a variety of restaurants, cafes and bars. Free high speed unlimited WiFi is offered throughout the property.',
    image: 'marionhotel.jpg'
  },
  {
    id: 7,
    title: 'Wellington Container House',
    type: 'House',
    cost: 240,
    lat: -41.334940,
    lng: 174.757320,
    description: 'This magical and unique holiday home is constructed using 3 vertically stacked shipping containers interlinked by spacious outdoor areas and a spiral staircase. Facilities include a hydrotherapy spa, free fast wifi internet, private cinema room with projector screen, full cooking facilities, designer furniture throughout, a macrocarpa bathhouse and secure parking. The outdoor areas are perfect for entertaining, with a full BBQ, an outdoor shower (for the brave) and your own private waterfall!',
    image: 'containerhouse.jpg'
  },
  {
    id: 8,
    title: 'Airport Motor Lodge',
    type: 'Motel',
    cost: 90,
    lat: -41.325270,
    lng: 174.811649,
    description: 'Located 5 minutes walk or 2 minutes drive from Wellington Airport, Airport Motor Lodge offers fully soundproofed motel. Free onsite parking and a complimentary airport shuttle service are provided.',
    image: 'airportmotorlodge.jpg'
  },
  {
    id: 9,
    title: 'The Penthouse',
    type: 'House',
    cost: 240,
    lat: -41.304027,
    lng: 174.802489,
    description: 'This is a beautiful and sunny waterfront 3-bed penthouse apartment with an enormous balcony/deck, expansive water views overlooking Wellington Harbour and situated equidistant between Wellington City and Wellington Airport.',
    image: 'penthouse.jpg'
  },
  {
    id: 10,
    title: 'Wellington City Cottages',
    type: 'House',
    cost: 240,
    lat: -41.296782,
    lng: 174.773548,
    description: 'Just 1.2 mi from Oriental Bay, Wellington City Cottages offer self-contained accommodations with a private patio. The property features free WiFi and a lovely garden. Free parking is available on site. City Cottages Wellington are 15 minutes’ walk from the famous Te Papa Museum. Westpac Stadium, the Interislander Ferry Terminal and Wellington International Airport are all just a 10-minute drive away.',
    image: 'citycottage.jpg'
  },
  {
    id: 11,
    title: 'Bella Vista Motel',
    type: 'Motel',
    cost: 90,
    lat: -41.301914,
    lng: 174.804165,
    description: 'Located within a 10-minute drive from Wellington CBD where you will find shopping, entertainment and other activities, Bella Vista Motel Wellington offers 4-star accommodations with free private parking. Wellington Airport is just a 9-minute drive from the property.',
    image: 'bellavista.jpg'
  },
  {
    id: 12,
    title: 'Marksman Motor Inn',
    type: 'Motel',
    cost: 90,
    lat: -41.300372,
    lng: 174.778582,
    description: 'The Marksman is conveniently located in central Wellington within walking distance of local attractions, the CBD, Courtenay Place entertainment district, and close to the Interisland Ferry Terminal and Wellington City Airport.',
    image: 'marksman.jpg'
  }
];

$('#accommodationPopUp').hide();

function startingPage(){
  var startHTML = document.getElementById('mainPageContainer');
  startHTML.innerHTML += '<div class="row">';
  startHTML.innerHTML += '<div class="col d-flex justify-content-center mt-5"><img src="images/tourismlogo.png" alt="Tourism New Zealand logo"></div>';
  startHTML.innerHTML += '</div>';
  startHTML.innerHTML += '<div class="row">';
  startHTML.innerHTML += '<div class="col">';
  startHTML.innerHTML += '<h1 class="mt-3 text-center display-4">BookIt Accommodation</h1>';
  startHTML.innerHTML += '</div>';
  startHTML.innerHTML += '</div>';
  startHTML.innerHTML += '<div class="row">';
  startHTML.innerHTML += '<div class="col">';
  startHTML.innerHTML += '</div>';
  startHTML.innerHTML += '<div class="col">';
  startHTML.innerHTML += '<button type="button" class="mt-3 btn btn-info btn-lg d-flex justify-content-center btn-begin" onclick="formPage();">START</button>';
  startHTML.innerHTML += '</div>';
  startHTML.innerHTML += '</div>';
}

startingPage();

function formPage(){
  $('#mainPageContainer').html('');
  $(function(){
      $('#datepicker').datepicker();
  });
  var formHTML = document.getElementById('mainPageContainer');
  formHTML.innerHTML += '<div class="row"> <div class="col"><h4 class="text-center mt-6">Where are you going?</h4><input type="text" id="destination" class="form-control" value="Wellington"></div> <div class="col"><h4 class="text-center mt-6">When are you going there?<input type="text" class="form-control" id="datepicker"></div> </div>';
  formHTML.innerHTML += '<div class="row"><div class="col"><h4 class="text-center mt-5">How many people are going?</h4><input type="number" class="form-control" id="people" min="1" max="4"></div><div class="col"><h4 class="text-center mt-5">How many nights?</h4><input type="number" class="form-control" id="nights" min="1" max="15"></div></div>';
  formHTML.innerHTML += '<div class="row"><div class="col"><button type="button" id="next" class="btn btn-info btn-lg mt-5 d-flex justify-content-center">Next</button></div></div>';

  $("#next").click(function(){
    var userDestination = document.getElementById('destination').value;
    var userDate = document.getElementById('datepicker').value;
    var userPeople = document.getElementById('people').value;
    var userNights = document.getElementById('nights').value;

    if(userDestination === ''){
        Swal.fire({
          title: 'Invalid!',
          text: 'You did not enter all of the required information correctly. Please enter it before proceeding.',
          type: 'error',
          confirmButtonText: 'Ok'
        });
    }else if(userDate === ''){
      Swal.fire({
        title: 'Invalid!',
        text: 'You did not enter all of the required information correctly. Please enter it before proceeding.',
        type: 'error',
        confirmButtonText: 'Ok'
      });
    }else if(userPeople === ''){
      Swal.fire({
        title: 'Invalid!',
        text: 'You did not enter all of the required information correctly. Please enter it before proceeding.',
        type: 'error',
        confirmButtonText: 'Ok'
      });
    }else if(userNights === ''){
      Swal.fire({
        title: 'Invalid!',
        text: 'You did not enter all of the required information correctly. Please enter it before proceeding.',
        type: 'error',
        confirmButtonText: 'Ok'
      });
    }else {
      resultsPage(userNights, userDestination, userPeople, userDate);
    }
  });

}

// formPage();

// resultsPage();

function resultsPage(userNights, userDestination, userPeople, userDate){
  $('#mainPageContainer').html('');
   if (userPeople == 1) {
    var accommodationHotels =  accommodationOptions.filter(function(hotel) {
     	 return hotel.type == "Hotel";
    });
    var accommodationHouses = accommodationOptions.filter(function(house){
      return house.type == "House";
    });
    var accommodationHostels = accommodationOptions.filter(function(hostel){
      return hostel.type == "Hostel";
    });
    var relevantAccommodation = accommodationHotels.concat(accommodationHouses, accommodationHostels);
  } else if(userPeople == 2) {
    var accommodationMotels = accommodationOptions.filter(function(motel){
      return motel.type == "Motel";
    });
    var accommodationHotels =  accommodationOptions.filter(function(hotel) {
  	   return hotel.type == "Hotel";
     });
     var accommodationHouses = accommodationOptions.filter(function(house){
       return house.type == "House";
     });
     var relevantAccommodation = accommodationMotels.concat(accommodationHotels, accommodationHouses);
  } else if(userPeople == 3){
    var accommodationMotels = accommodationOptions.filter(function(motel){
      return motel.type == "Motel";
    });
    var accommodationHouses = accommodationOptions.filter(function(house){
      return house.type == "House";
    });
    var relevantAccommodation = accommodationMotels.concat(accommodationHouses);
  } else{
    var accommodationMotels = accommodationOptions.filter(function(motel){
      return motel.type == "Motel";
    });
    var accommodationHouses = accommodationOptions.filter(function(house){
      return house.type == "House";
    });
    var relevantAccommodation = accommodationMotels.concat(accommodationHouses);
  }

  var resultsHTML = document.getElementById('mainPageContainer');
  resultsHTML.innerHTML += '<div class="row">';
  for (var i = 0; i < relevantAccommodation.length; i++) {
    resultsHTML.innerHTML += '<div class="col-sm-3 d-inline-block col-md-3 mb-3 mt-1 accommodationClick" data-id="'+relevantAccommodation[i].id+'"><div class="card" style="width:14rem;"><img src="images/cards/' + relevantAccommodation[i].image + '" class="card-img-top" alt="' + relevantAccommodation[i].title + '"><div class="card-body"><h6 class="card-title text-center">' + relevantAccommodation[i].title + '</h6><p class="card-text text-center">Cost: $' + relevantAccommodation[i].cost * userNights + '</p></div></div></div>';
  }
  resultsHTML.innerHTML += '</div>';

  var popUp = document.getElementsByClassName('accommodationClick');
  for (var b = 0; b < popUp.length; b++) {
    popUp[b].onclick = function(){
      var id = parseInt(this.dataset.id);
				accommodationPopUp(id);
    }
  }
}

function accommodationPopUp(accommodationID){
  var singleAccommodation;
	for (var y = 0; y < accommodationOptions.length; y++){
		if(accommodationOptions[y].id === accommodationID){
			singleAccommodation = accommodationOptions[y];
			break;
		}
  }

  document.getElementById('accommodationImage').src = 'images/'+singleAccommodation.image;
	document.getElementById('accommodationTitle').innerText = singleAccommodation.title;

	document.getElementById('accommodationDescription').innerText = singleAccommodation.description;

  document.getElementById('mealInput').innerHTML = '<div class="form-group"><label for="breakfast">Breakfast - $7</label><select class="form-control" id="breakfast"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select><div class="form-group"><label for="lunch">Lunch - $9</label><select class="form-control" id="lunch"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select><div class="form-group"><label for="dinner">Dinner - $11</label><select class="form-control" id="dinner"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>';

  document.getElementById('bookButton').innerHTML = '<button type="button" class="btn-info btn btn-lg" onclick="confirmPage();">Book</button>';

  document.getElementById('accommodationPopUp').style.display = 'flex';
	document.body.style.overflow = 'hidden';

}

document.getElementById('close').onclick = function(){
	document.getElementById('accommodationPopUp').style.display = 'none';
	document.body.style.overflow = 'scroll';

  var userBreakfast = document.getElementById('breakfast').value;
  var userLunch = document.getElementById('lunch').value;
  var userDinner = document.getElementById('dinner').value;
  confirmPage(userBreakfast, userLunch, userDinner);
};

function confirmPage(userBreakfast, userLunch, userDinner){
  $('#mainPageContainer').hide();
  $('#accommodationPopUp').hide();
  var confirmPage = document.getElementById('mainPageContainer');
  confirmPage.innerHTML += '<div class="row"><h5 class="text-center display-3">Confirmation</h5></div>';
  confirmPage.innerHTML += '<div class="row"><div class="col"><button type="button" id="next" class="btn btn-info btn-lg mt-5 d-flex justify-content-center" onclick="emailPopUp();">Send Confirmation Email</button></div></div>';
}

function emailPopUp(){
  const {value: email} = Swal.fire({
    title: 'Input email address',
    input: 'email',
    inputPlaceholder: 'Enter your email address'
  })

  if (email) {
    Swal.fire('Entered email: ' + email)
  }
}

// confirmPage();
