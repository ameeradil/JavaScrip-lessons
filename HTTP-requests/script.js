// https://swapi.dev/api/planets/
// Get all the planets from this api as one http request
// chain that http requet to get all the other 10 movies from page2
// Use all the 3 methods

// XMLHttpRequest method to do a single request
const myreq = new XMLHttpRequest()
myreq.onload = function(){
	const data = JSON.parse(this.responseText)
	const planetsobj = data.results
	for(planets of planetsobj){
		console.log(planets.name)
	}
}
myreq.onerror = function(){
	console.log("The request can't finished due to error")
}

myreq.open('get', 'https://sdslflkadswapi.dev/api/planets/')

myreq.send()


// XMLHttpRequest method to chain 2 requests
const myreq = new XMLHttpRequest()
myreq.onload = function(){
	const data = JSON.parse(this.responseText)
	const planetsobj = data.results
	for(planets of planetsobj){
		console.log(planets.name)
	}

	const data2 = JSON.parse(this.responseText)
	const page2URL = data2.next


	// starting the next http request
	const myreq2 = new XMLHttpRequest()
	myreq2.onload = function(){
		const data2 = JSON.parse(this.responseText)
		const planetsobj2 = data2.results
		for (planets of planetsobj2){
			console.log(planets.name)
		}
	}
	myreq2.onerror = function(){
		console.log('Error happend on the second request')
	}
	myreq2.open('get', page2URL)

	myreq2.send()

}
myreq.onerror = function(){
	console.log("The request can't finished due to error")
}

myreq.open('get', 'https://swapi.dev/api/planets/')

myreq.send()

//......................................................................................................................................

// Fetch method to do a single request
fetch('https://swapi.dev/api/planets/')
	.then((res)=>{
		if(!res.ok){
			throw new Error("HTTP ERROR")//  https://swapi.dev/api/planets/this error run if there was interner
		}
		return res.json()
	})
	.then((data)=>{
		const planets = data.results
		for (planet of planets){
			console.log(planet.name)
		}
	})
	.catch((err)=>{
		console.log('Request Fail',err.message)
	})


// Fetch method to chain two requests
fetch('https://swapi.dev/api/planets/')
  .then((res) => {
    if (!res.ok) {
      throw new Error("HTTP ERROR"); // this error runs if the server responds with 404/500
    }
    return res.json();
  })
  .then((data) => {
    // Process first page
    const planets = data.results;
    for (const planet of planets) {
      console.log(planet.name);
    }

    // Return the URL for the next page to chain the next fetch
    return fetch(data.next);
  })
  // Here is where we start chaining the second request
  .then((res) => {
    if (!res.ok) {
      throw new Error("HTTP ERROR on page 2");
    }
    return res.json();
  })
  .then((data) => {
    const planets2 = data.results;
    for (const planet of planets2) {
      console.log(planet.name);
    }
  })
  .catch((err) => {
    console.log('Request Fail:', err.message);
  });



// .....................................................................................................................
// Make sure to add the library cdn code to your HTML!!!!!!!!!!
// Axios Library method to do a single request
axios.get('https://swapi.dev/api/planets/')
	.then((res)=>{
		const planets = res.data.results
		for (planet of planets){
			console.log(planet.name)
		}
	})
	.catch((err)=>{
		console.log('ERROR!!!', err.message)
	})



// Axios Library method to do a chained request
axios.get('https://swapi.dev/api/planets/')
	.then((res)=>{
		const planets = res.data.results
		for (planet of planets){
			console.log(planet.name)
		}
		return axios.get(res.data.next)
	})

	//Here is for the second request
	.then((res)=>{
		const planets = res.data.results
		for (planet of planets){
			console.log(planet.name)
		}
	})

	.catch((err)=>{
		console.log('ERROR!!!', err.message)
	})
