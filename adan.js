function openModal(type) {
  document.getElementById("authModal").style.display = "flex";
  switchForm(type);
}

function closeModal() {
  document.getElementById("authModal").style.display = "none";
}

window.onclick = function (event) {
  const modalAuth = document.getElementById("authModal");
  const modalList = document.getElementById("myListModal");
  const modalHistory = document.getElementById("historyModal");
  const modalFullPlayer = document.getElementById("fullMovieModal");

  if (event.target === modalAuth) closeModal();
  if (event.target === modalList) closeListModal();
  if (event.target === modalHistory) closeHistoryModal();
  if (event.target === modalFullPlayer) closeFullMoviePlayer();
};

function switchForm(type) {
  document.getElementById("loginForm").style.display =
    type === "login" ? "block" : "none";
  document.getElementById("signupForm").style.display =
    type === "signup" ? "block" : "none";
}

function searchMovies() {
  const input = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".screenshot-card").forEach((card) => {
    const title = card.getAttribute('data-title').toLowerCase();
    card.style.display = title.includes(input) ? "" : "none";
  });
}

const movies = [
  {
    title: "Avengers",
    year: "2012",
    genre: "Action, Sci-Fi",
    desc: "Earth's mightiest heroes must come together and learn to fight as a team to stop Loki.",
    trailer: "https://youtu.be/bLer55y58u8",
    poster: "avengers.jpg",
    servers: [
      { name: "Server 1 (HD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { name: "Server 2 (FHD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  },
  {
    title: "Iron Man",
    year: "2008",
    genre: "Action, Adventure",
    desc: "After being held captive, Tony Stark builds a high-tech suit of armor to fight evil.",
    trailer: "https://youtu.be/8ugaeA-nMTc",
    poster: "ironman.jpg",
    servers: [
      { name: "Server 1 (HD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { name: "Server 2 (FHD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  },
  {
    title: "Black Panther",
    year: "2018",
    genre: "Action, Drama",
    desc: "T'Challa returns to Wakanda to take his rightful place as king.",
    trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
    poster: "blackpanther.jpg",
    servers: [      
      { name: "Server 1 (HD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { name: "Server 2 (FHD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  },
  {
    title: "Spider-Man",
    year: "2021",
    genre: "Action, Fantasy",
    desc: "Peter Parker faces a multiverse crisis.",
    trailer: "https://www.youtube.com/watch?v=rt-2cxAiPJk",
    poster: "spiderman.jpg",
    servers: [
      { name: "Server 1 (HD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { name: "Server 2 (FHD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  },
  {
    title: "Thor",
    year: "2011",
    genre: "Action, Fantasy",
    desc: "Thor must prove himself worthy after being banished from Asgard.",
    trailer: "https://www.youtube.com/watch?v=JOddp-nlNvQ",
    poster: "thor.jpg",
    servers: [
      { name: "Server 1 (HD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { name: "Server 2 (FHD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  },
  {
    title: "Doctor Strange",
    year: "2016",
    genre: "Action, Fantasy",
    desc: "A brilliant surgeon discovers the mystic arts after a tragic accident.",
    trailer: "https://www.youtube.com/embed/HSzx-zryEgM",
    poster: "doctorstrange.jpg",
    servers: [
      { name: "Server 1 (HD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { name: "Server 2 (FHD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  },
  {
    title: "Captain America",
    year: "2011",
    genre: "Action, War",
    desc: "Steve Rogers becomes Captain America to fight HYDRA.",
    trailer: "https://www.youtube.com/embed/JerVrbLldXw",
    poster: "captainamerica.jpg",
    servers: [
      { name: "Server 1 (HD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { name: "Server 2 (FHD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  },
  {
    title: "Hulk",
    year: "2008",
    genre: "Action, Sci-Fi",
    desc: "Bruce Banner becomes the Hulk after a gamma radiation accident.",
    trailer: "https://www.youtube.com/embed/xbqNb2PFKKA",
    poster: "hulk.jpg",
    servers: [
      { name: "Server 1 (HD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { name: "Server 2 (FHD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  },
  {
    title: "Deadpool and Wolverine",
    year: "2024",
    genre: "Action, Comedy",
    desc: "The merc with a mouth teams up with Wolverine for a chaotic adventure.",
    trailer: "https://www.youtube.com/embed/Idh8n5XuYIA",
    poster: "deadpool.jpg",
    servers: [
      { name: "Server 1 (HD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { name: "Server 2 (FHD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  },
  {
    title: "Shang-Chi",
    year: "2021",
    genre: "Action, Fantasy",
    desc: "A martial arts master confronts the mysterious Ten Rings.",
    trailer: "https://www.youtube.com/embed/giWIr7U1deA",
    poster: "shangchi.jpg",
    servers: [
      { name: "Server 1 (HD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { name: "Server 2 (FHD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  },
  {
    title: "Fantastic Four",
    year: "2015",
    genre: "Action, Sci-Fi",
    desc: "Four young outsiders teleport to an alternate universe, gaining powers.",
    trailer: "https://www.youtube.com/embed/_rRoD28-WgU",
    poster: "fantastic four.jpg",
    servers: [
      { name: "Server 1 (HD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { name: "Server 2 (FHD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  },
  {
    title: "Guardians of The Galaxy",
    year: "2014",
    genre: "Action, Comedy",
    desc: "A group of intergalactic criminals band together to save the universe.",
    trailer: "https://www.youtube.com/embed/d96cjJhvlMA",
    poster: "gotg.jpg",
    servers: [
      { name: "Server 1 (HD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { name: "Server 2 (FHD)", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ]
  }
];

document.querySelectorAll(".screenshot-card").forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.getAttribute('data-title');
    const movie = movies.find((m) => m.title === title);
    
    if (!movie) {
        const movieData = {
            title: title,
            year: card.getAttribute('data-year'),
            genre: card.getAttribute('data-genre'),
            desc: card.getAttribute('data-desc'),
            trailer: card.getAttribute('data-trailer'),
            poster: card.querySelector('img').src.split('/').pop() 
        };
        showMovieDetail(movieData);
    } else {
        showMovieDetail(movie);
    }
  });
});

function showMovieDetail(movie) {
  document.getElementById("movieDetailModal").style.display = "flex";
  document.getElementById("detailTitle").innerText = movie.title;
  document.getElementById("detailYearGenre").innerText =
    `${movie.year} • ${movie.genre}`;
  document.getElementById("detailDesc").innerText = movie.desc;

  document.getElementById("watchNowBtn").onclick = () => openFullMoviePlayer(movie.title);

  let trailer = movie.trailer;
  
  if (trailer && trailer.includes("?")) {
    trailer = trailer.split('?')[0];
  }

  if (trailer && trailer.includes("watch?v=")) {
    trailer = trailer.replace("watch?v=", "embed/");
  } else if (trailer && trailer.includes("youtu.be/")) {
    trailer = trailer.replace("youtu.be/", "www.youtube.com/embed/");
  }
  
  if (trailer && trailer.includes("embed/")) {
      trailer += "?autoplay=1";
  } else {
      trailer = ""; 
  }

  document.getElementById("movieTrailer").src = trailer;
}

function closeMovieDetail() {
  document.getElementById("movieDetailModal").style.display = "none";
  document.getElementById("movieTrailer").src = ""; 
}

function renderMovieCards(containerId, storageKey) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 
    const list = JSON.parse(localStorage.getItem(storageKey)) || [];
    const isHistory = storageKey === 'watchHistory';

    if (list.length === 0) {
      container.innerHTML = `<p style="text-align: center; color: #aaa; grid-column: 1 / -1; margin-top: 20px;">Your ${isHistory ? 'history' : 'list'} is empty.</p>`;
      return;
    }

    const listToRender = isHistory ? list.slice().reverse() : list;

    listToRender.forEach(title => {
      const movie = movies.find(m => m.title === title);
      
      if (movie) {
        const card = document.createElement("div");
        card.className = "list-item";
        
        card.innerHTML = `
          <img src="${movie.poster}" alt="${movie.title}" />
          <p>${movie.title}</p>
        `;

        const removeBtn = document.createElement('button');
        
        removeBtn.className = isHistory ? 'remove-history-btn' : 'remove-list-btn'; 
        removeBtn.innerText = '×';
        
        removeBtn.onclick = (event) => {
            event.stopPropagation(); 
            if (isHistory) {
                removeHistoryItem(title);
            } else {
                removeFromList(title); 
            }
        };
        card.appendChild(removeBtn);
        

        card.onclick = () => {
            showMovieDetail(movie);
            if (containerId === 'myListContainer') closeListModal();
            if (containerId === 'historyContainer') closeHistoryModal();
        };
        container.appendChild(card);
      }
    });
}

function addToList() {
  const title = document.getElementById("detailTitle").innerText;

  let list = JSON.parse(localStorage.getItem("myList")) || [];
  if (!list.includes(title)) list.push(title);

  localStorage.setItem("myList", JSON.stringify(list));
  alert(`${title} added to My List!`);
}

function removeFromList(movieTitle) {
    let list = JSON.parse(localStorage.getItem("myList")) || [];
    // Filter out the movie to be removed
    list = list.filter(title => title !== movieTitle);
    localStorage.setItem("myList", JSON.stringify(list));
    
    renderMovieCards("myListContainer", "myList");
}


function openListModal() {
  document.getElementById("myListModal").style.display = "flex";
  renderMovieCards("myListContainer", "myList");
}

function closeListModal() {
  document.getElementById("myListModal").style.display = "none";
}

function addToHistory(movieTitle) {
  let history = JSON.parse(localStorage.getItem("watchHistory")) || [];
  
  history = history.filter(title => title !== movieTitle);
  
  history.push(movieTitle);
  localStorage.setItem("watchHistory", JSON.stringify(history));
}

function openHistory() {
  document.getElementById("historyModal").style.display = "flex";
  renderMovieCards("historyContainer", "watchHistory");
}

function removeHistoryItem(movieTitle) {
    let history = JSON.parse(localStorage.getItem("watchHistory")) || [];
    history = history.filter(title => title !== movieTitle);
    localStorage.setItem("watchHistory", JSON.stringify(history));
    
    renderMovieCards("historyContainer", "watchHistory");
}

function closeHistoryModal() {
  document.getElementById("historyModal").style.display = "none";
}

function openFullMoviePlayer(movieTitle) {
  const movie = movies.find(m => m.title === movieTitle);
  if (!movie || !movie.servers || movie.servers.length === 0) {
    alert("Full movie links are not available for this title.");
    return;
  }

  closeMovieDetail(); 

  document.getElementById("playerMovieTitle").innerText = movie.title;
  document.getElementById("fullMovieModal").style.display = "flex";

  addToHistory(movieTitle); 

  const serverContainer = document.getElementById("serverSelection");
  serverContainer.innerHTML = ""; 

  movie.servers.forEach((server, index) => {
    const btn = document.createElement("button");
    btn.className = "server-btn";
    btn.innerText = server.name;
    btn.onclick = () => selectServer(server.url, btn); 
    serverContainer.appendChild(btn);

    if (index === 0) {
      selectServer(server.url, btn);
    }
  });
}

function closeFullMoviePlayer() {
  document.getElementById("fullMovieModal").style.display = "none";
  document.getElementById("fullMovieVideo").src = ""; 
}

function selectServer(serverUrl, buttonElement) {
  const videoPlayer = document.getElementById("fullMovieVideo");
  videoPlayer.src = serverUrl;
  
  document.querySelectorAll(".server-btn").forEach(btn => btn.classList.remove('active'));
  
  if (buttonElement) {
    buttonElement.classList.add('active');
  }

  videoPlayer.play();
}

// Player Controls
function changeVolume(value) {
  document.getElementById("fullMovieVideo").volume = value;
}

function skipForward() {
  const video = document.getElementById("fullMovieVideo");
  video.currentTime += 10; 
}

function skipBackward() {
  const video = document.getElementById("fullMovieVideo");
  video.currentTime -= 10; 
}

function toggleFullscreen() {
  const videoContainer = document.querySelector('.movie-player-container');
  if (!document.fullscreenElement) {
    if (videoContainer.requestFullscreen) {
      videoContainer.requestFullscreen();
    } else if (videoContainer.webkitRequestFullscreen) { 
      videoContainer.webkitRequestFullscreen();
    } else if (videoContainer.msRequestFullscreen) { 
      videoContainer.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { 
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { 
      document.msExitFullscreen();
    }
  }
}

function toggleProfileDropdown() {
  const drop = document.getElementById("profileDropdown");
  drop.style.display = drop.style.display === "flex" ? "none" : "flex";
}

function loginUser(username) {
  localStorage.setItem("loggedUser", username);
  updateUI();
}

function finishSignup() {
  const username =
    document.querySelector("#signupForm input[type='text']").value.trim();
  if (username) {
    loginUser(username);
    closeModal();
  } else {
    alert("Please enter a username.");
  }
}

function finishLogin() {
  const username =
    document.querySelector("#loginForm input[type='text']").value.trim();
  if (username) {
    loginUser(username);
    closeModal();
  } else {
    alert("Please enter a username.");
  }
}

function logout() {
  localStorage.removeItem("loggedUser");
  document.getElementById("profileDropdown").style.display = "none";
  updateUI();
}

function updateUI() {
  const user = localStorage.getItem("loggedUser");
  document.getElementById("loginBtn").style.display = user ? "none" : "block";
  document.getElementById("profileMenu").style.display = user ? "flex" : "none";

  if (user) {
    document.getElementById("profileName").innerText = user;
  }
}
updateUI();