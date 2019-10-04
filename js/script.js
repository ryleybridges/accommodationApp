var accommodationOptions = [
  {
    id: 1,
    title: 'YHA Wellington Backpacker Hostel',
    type: 'Hostel',
    cost: 30,
    lat: -41.293066,
    lng: 174.783989,
    minNight: 1,
    maxNight: 10,
    minPeople: 1,
    maxPeople: 1,
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
    minNight: 1,
    maxNight: 5,
    minPeople: 1,
    maxPeople: 4,
    description: 'Novotel Wellington is a 4.5 star hotel located in the heart of the CBD, close to iconic attractions - Te Papa, Cable Car, Botanical Gardens and the Waterfront. Our modern accommodation rooms have a pop of colour and are designed with guest comfort in mind.',
    image: 'novotel.jpg'
  },
  {
    id: 3,
    title: 'InterContinental',
    type: 'Hotel',
    cost: 157,
    lat: -41.284636,
    lng: 174.776942,
    minNight: 1,
    maxNight: 5,
    minPeople: 1,
    maxPeople: 4,
    description: 'The 5-star InterContinental Wellington is located by the harbor waterfront, just 5 mi from Wellington International Airport. It offers an exclusive club lounge, a fitness center, 2 restaurants and a bar. The elegant guest rooms are spacious and well-furnished.',
    image: 'intercontinental-wellington.jpg'
  },
  {
    id: 4,
    title: 'Boulcott Suites',
    type: 'Hotel',
    cost: 157,
    lat: -41.289109,
    lng: 174.773975,
    minNight: 1,
    maxNight: 5,
    minPeople: 1,
    maxPeople: 4,
    description: 'Centrally located in Wellington, Boulcott Suites is a unique 5-star apartment hotel that has been designed and fully furnished with elegance and style. They feature studio apartments and spacious single-level suites to fully-equipped executive four bedroom townhouses.',
    image: 'boulcott.jpg'
  },

  {
    id: 5,
    title: 'Nomads Capital Hostel',
    type: 'Hostel',
    cost: 30,
    lat: -41.289576,
    lng: 174.777058,
    minNight: 1,
    maxNight: 10,
    minPeople: 1,
    maxPeople: 1,
    description: 'Nomads Capital is a 5 star flashpacker hostel right in the heart of Wellington. Five minutes walk from the vibrant Cuba Street, bustling Courtenay Place, beautiful waterfront and award winning Te Papa Museum.',
    image: 'nomads.jpg'
  },
  {
    id: 6,
    title: 'The Marion Hostel',
    type: 'Hostel',
    cost: 30,
    lat: -41.294208,
    lng: 174.776705,
    minNight: 1,
    maxNight: 10,
    minPeople: 1,
    maxPeople: 1,
    description: 'Located in the heart of the city of Wellington,The Marion Hostel offers a range of backpacker accommodations and features a rooftop terrace. It is just a 1-minute walk from Cuba Street where you will find a variety of restaurants, cafes and bars.',
    image: 'marionhotel.jpg'
  },
  {
    id: 7,
    title: 'Wellington Container House',
    type: 'House',
    cost: 240,
    lat: -41.334940,
    lng: 174.757320,
    minNight: 2,
    maxNight: 15,
    minPeople: 1,
    maxPeople: 4,
    description: 'This unique holiday home is a Wellington landmark and was built by industrial designer Ross Stevens, and all three levels are homely and offer the modern comforts of a contemporary house with many more unique and quirky features conventional houses do not offer.',
    image: 'containerhouse.jpg'
  },
  {
    id: 8,
    title: 'Airport Motor Lodge',
    type: 'Motel',
    cost: 90,
    lat: -41.325270,
    lng: 174.811649,
    minNight: 3,
    maxNight: 10,
    minPeople: 2,
    maxPeople: 4,
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
    minNight: 2,
    maxNight: 15,
    minPeople: 1,
    maxPeople: 4,
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
    minNight: 2,
    maxNight: 15,
    minPeople: 1,
    maxPeople: 4,
    description: 'Built in 1880, fully renovated in October 2010 and located in the heart of the citys vibrant Cuba Quarter. Hotel quality linen, commerically laundered, and the cottages are professionally cleaned after each stay.',
    image: 'citycottage.jpg'
  },
  {
    id: 11,
    title: 'Bella Vista Motel',
    type: 'Motel',
    cost: 90,
    lat: -41.301914,
    lng: 174.804165,
    minNight: 3,
    maxNight: 10,
    minPeople: 2,
    maxPeople: 4,
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
    minNight: 3,
    maxNight: 10,
    minPeople: 2,
    maxPeople: 4,
    description: 'The Marksman is conveniently located in central Wellington within walking distance of local attractions, the CBD, Courtenay Place entertainment district, and close to the Interisland Ferry Terminal and Wellington City Airport.',
    image: 'marksman.jpg'
  }
];

$('#accommodationPopUp').hide();

function startingPage(){
  var startHTML = document.getElementById('mainPageContainer');
  startHTML.innerHTML += '<div class="row"><div class="col d-flex justify-content-center mt-5"><img src="images/tourismlogo.png" alt="Tourism New Zealand logo"></div></div>';
  startHTML.innerHTML += '<div class="row"><div class="col"><h1 class="mt-3 text-center">BookIt Accommodation</h1></div></div>';
  startHTML.innerHTML += '<div class="row"><div class="col"><button type="button" class="mt-3 btn btn-info btn-lg d-flex justify-content-center btn-begin h-100" onclick="formPage();">START</button></div></div>';
}

startingPage();

function formPage(){
  $('#mainPageContainer').html('');
  $(function(){
      $('#datepicker').datepicker();
  });
  var formHTML = document.getElementById('mainPageContainer');
  formHTML.innerHTML += '<div class="row"> <div class="col col-12 col-md-6"><h4 class="text-center mt-5">Where are you going?</h4><input type="text" id="destination" class="form-control" value="Wellington"></div> <div class="col col-12 col-md-6"><h4 class="text-center mt-5">When are you going there?<input type="text" class="form-control" id="datepicker"></div> </div>';
  formHTML.innerHTML += '<div class="row"><div class="col col-12 col-md-6"><h4 class="text-center mt-5">How many people are going?</h4><input type="number" class="form-control" id="people" min="1" max="4"></div><div class="col col-12 col-md-6"><h4 class="text-center mt-5">How many nights?</h4><input type="number" class="form-control" id="nights" min="1" max="15"></div></div>';
  formHTML.innerHTML += '<div class="row"><div class="col"><button type="button" id="next" class="btn btn-info btn-lg mt-5 d-flex justify-content-center">Next</button></div></div>';

  $('#next').click(function(){
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

function resultsPage(userNights, userDestination, userPeople, userDate){
  $('#mainPageContainer').html('');
  var resultString = '';
  resultString += '<div class="row">';
    for (var i = 0; i < accommodationOptions.length; i++) {

        if((userNights >= accommodationOptions[i].minNight) && (userNights <= accommodationOptions[i].maxNight) && (userPeople >= accommodationOptions[i].minPeople) && (userPeople <= accommodationOptions[i].maxPeople)){
            resultString += '<div class="col col-12 col-md-6 d-inline-block mb-3 mt-1 ml-2 accommodationClick float-left" data-id="'+ accommodationOptions[i].id+'"><div class="card"><img src="images/cards/' + accommodationOptions[i].image + '" class="card-img-top" alt="' + accommodationOptions[i].title + '"><div class="card-body"><h6 class="card-title text-center">' + accommodationOptions[i].title + '</h6><p class="card-text text-center">Cost: $' + accommodationOptions[i].cost * userNights + '</p></div></div></div></div>';
        }

    }
    resultString += '</div>';
    var resultsHTML = document.getElementById('mainPageContainer');
    resultsHTML.innerHTML = resultString;


  var popUp = document.getElementsByClassName('accommodationClick');
  for (var b = 0; b < popUp.length; b++) {
    popUp[b].onclick = function(){
      var id = parseInt(this.dataset.id);
				accommodationPopUp(id, userNights, userPeople, userDate, userDestination);
    };
  }
}

function accommodationPopUp(accommodationID, userNights, userPeople, userDate, userDestination){
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

  document.getElementById('mealInput').innerHTML = '<div class="form-group"><label for="breakfast">Breakfast - $7</label><select class="form-control" id="breakfast"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select><div class="form-group"><label for="lunch">Lunch - $9</label><select class="form-control" id="lunch"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select><div class="form-group"><label for="dinner">Dinner - $10</label><select class="form-control" id="dinner"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select>';

  document.getElementById('bookButton').innerHTML = '<button type="button" class="btn-info btn btn-lg">Book</button>';

  document.getElementById('accommodationPopUp').style.display = 'flex';
	document.body.style.overflow = 'hidden';

  $("#bookButton").click(function(){
    var userBreakfast = document.getElementById('breakfast').value;
    var userLunch = document.getElementById('lunch').value;
    var userDinner = document.getElementById('dinner').value;
    var chosenAccommodation = singleAccommodation;
    var accommodationCost = singleAccommodation.cost * userNights;
    confirmPage(userBreakfast, userLunch, userDinner, chosenAccommodation, accommodationCost, userNights, userPeople, userDate, userDestination);
  });

}

document.getElementById('close').onclick = function(){
	document.getElementById('accommodationPopUp').style.display = 'none';
	document.body.style.overflow = 'scroll';

};

function confirmPage(userBreakfast, userLunch, userDinner, chosenAccommodation, accommodationCost, userNights, userPeople, userDate, userDestination){
  $('#mainPageContainer').html('');
  $('#accommodationPopUp').hide();
  var calcBreakfast = (userBreakfast * 7);
  var calcLunch = (userLunch * 9);
  var calcDinner = (userDinner * 10);
  var overallCost = (accommodationCost + calcBreakfast + calcLunch + calcDinner);

  var confirmHTML = document.getElementById('mainPageContainer');
  confirmHTML.innerHTML += '<div class="row"><div class="col"><h2 class="text-center display-4">Confirmation</h2></div></div>';
  confirmHTML.innerHTML += '<div class="row"><div class="col"><h4 class="text-center">Accommodation Chosen: ' + chosenAccommodation.title + '</h4></div></div>';
  confirmHTML.innerHTML += '<div class="row"><div class="col"><h5 class="text-center">Destination: ' + userDestination + '</h5></div></div>';
  confirmHTML.innerHTML += '<div class="row"><div class="col"><p class="text-center">No. of People: ' + userPeople + '</p></div></div>';
  confirmHTML.innerHTML += '<div class="col"><p class="text-center">Date of Trip: ' + userDate + '</p></div><div class="col"><p class="text-center">No. of Nights: ' + userNights + '</p></div>';
  confirmHTML.innerHTML += '<div class="row"><div class="col"><p class="text-right">No. of People For Breakfast: ' + userBreakfast + '</p></div><div class="col"><p class="text-left">Cost: $' + calcBreakfast + '</p></div></div>';
  confirmHTML.innerHTML += '<div class="row"><div class="col"><p class="text-right">No. of People For Lunch: ' + userLunch + '</p></div><div class="col"><p class="text-left">Cost: $' + calcLunch + '</p></div></div>';
  confirmHTML.innerHTML += '<div class="row"><div class="col"><p class="text-right">No. of People For Dinner: ' + userDinner + '</p></div><div class="col"><p class="text-left">Cost: $' + calcDinner + '</p></div></div>';
  confirmHTML.innerHTML += '<div class="row"><div class="col"><h4 class="text-center">Overall Cost: $' + overallCost + '</h4></div></div>';
  confirmHTML.innerHTML += '<div class="row"><div class="col"><button type="button" id="next" class="btn btn-info btn-lg mt-5 d-flex justify-content-center" onclick="emailPopUp();">Send Confirmation Email</button></div></div>';
}

function emailPopUp(){
  const {value: email} = Swal.fire({
    title: 'Input email address',
    input: 'email',
    inputPlaceholder: 'Enter your email address'
  });

  if (email) {
    Swal.fire('Entered email: ' + email);
  }
}
