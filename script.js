//using axiom
//loading file
function fetchLocalFile(){
    axios.get('sample.txt')
    .then(res => {
        document.getElementById('result').innerText=res.data;
    })
    .catch(() => {
        document.getElementById('result').innerText="could not load the file";
    });
}


//random user
function fetchUser(){
    axios.get('https://randomuser.me/api/')
    .then(res => {
        var user= res.data.results[0];
        var html=`<strong>Name:</strong> ${user.name.first} ${user.name.last}<br>
                        <strong>Email:</strong> ${user.email}<br>
                        <img src="${user.picture.medium}" alt="User Picture">`;
         document.getElementById('result').innerHTML=html;
         
    })
    .catch(()=>{

        document.getElementById('result').innerHTML='error fetching user';


    });

}

//random post
function fetchPost() {
    var postId = Math.floor(Math.random() * 100) + 1;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => {
            var post = res.data;
            var html = `<strong>Post Title:</strong> ${post.title}<br>
                        <strong>Body:</strong><br>${post.body}`;
            document.getElementById('result').innerHTML = html;
        })
        .catch(() => {
            document.getElementById('result').innerHTML = 'Error fetching post.';
        });
}

// Posts list
function fetchPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => {
            var posts = res.data;
            var html = '<strong>Posts List:</strong><ul>';
            posts.forEach(post => {
                html += `<li><strong>${post.title}</strong><br>${post.body}</li>`;
            });
            html += '</ul>';
            document.getElementById('result').innerHTML = html;
        })
        .catch(() => {
            document.getElementById('result').innerHTML = 'Error fetching posts.';
        });
}

// Namaz times
function fetchNamazTimes() {
    axios.get('https://api.aladhan.com/v1/timingsByCity?city=Islamabad&country=Pakistan&method=2')
        .then(res => {
            if (res.data.code === 200 && res.data.data && res.data.data.timings) {
                var t = res.data.data.timings;
                var html = `<strong>Namaz Times (Islamabad)</strong><ul>
                            <li>Fajr: ${t.Fajr}</li>
                            <li>Dhuhr: ${t.Dhuhr}</li>
                            <li>Asr: ${t.Asr}</li>
                            <li>Maghrib: ${t.Maghrib}</li>
                            <li>Isha: ${t.Isha}</li>
                            <li>Sunrise: ${t.Sunrise}</li>
                            <li>Sunset: ${t.Sunset}</li>
                            </ul>`;
                document.getElementById('result').innerHTML = html;
            } else {
                document.getElementById('result').innerHTML = 'Could not fetch Namaz times.';
            }
        })
        .catch(() => {
            document.getElementById('result').innerHTML = 'Error fetching Namaz times.';
        });
}

// Random advice
function fetchAdvice() {
    axios.get('https://api.adviceslip.com/advice')
        .then(res => {
            var advice = res.data.slip.advice;
            var html = `<strong>Advice:</strong> "${advice}"`;
            document.getElementById('result').innerHTML = html;
        })
        .catch(() => {
            document.getElementById('result').innerHTML = 'Error fetching advice.';
        });
}

// Random joke
function fetchJoke() {
    axios.get('https://official-joke-api.appspot.com/random_joke')
        .then(res => {
            var joke = res.data;
            var html = `<strong>Joke:</strong> ${joke.setup}<br>
                        <em>${joke.punchline}</em>`;
            document.getElementById('result').innerHTML = html;
        })
        .catch(() => {
            document.getElementById('result').innerHTML = 'Error fetching joke.';
        });
}