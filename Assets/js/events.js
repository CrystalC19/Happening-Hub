// Define an array of events with their title, date, and location
const posts = [
    {
      title: "2024 Presidential debate",
      date: "2024-04-30",
      body: "University of North Texas"
    },
    {
      title: "Cinco de Mayo Celebration",
      date: "2024-05-05",
      body: "Legacy Food Hall"
    },
    {
      title: "Mother's Day Picnic",
      date: "2024-05-12",
      body: "Lake Grapevine"
    },
    {
        title: "Nicki Minaj Concert",
        date: "2024-05-16",
        body: "American Airlines Arena"
    },
    {
        title: "Asian Food and Culture Festival",
        date: "2024-05-25",
        body: "Kay Bailey Hutchinson Convention Center"
    },
    {
        title: "Memorial Day Chili Cookoff",
        date: "2024-05-27",
        body: "Panther Island Pavilion"
    },
    {
        title: "Autism Awareness Golf Tournament",
        date: "2024-06-21",
        body: "Colonial Country Club"
    },
    {
        title: "DJ Khaled Concert",
        date: "2024-07-15",
        body: "Toyota Music Factory"
    },
    {
        title: "Coding Bootcamp Graduation",
        date: "2024-08-13",
        body: "Southern Methodist University"
    },
    {
        title: "Dallas Cowboys vs. Kansas City Chiefs",
        date: "2024-08-26",
        body: "AT&T Stadium"
    }
  ];
  
  // Function to display the manually added posts on the webpage
  function displayPosts() {
    const eventsList = document.getElementById('eventsList');
    
    // Clear previous content
    eventsList.innerHTML = '';
  
    // Loop through each post and create divs to display them
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>Date:</strong> ${post.date}</p>
        <p>${post.body}</p>
        <hr>
      `;
      
      // Append div to the container
      eventsList.appendChild(postDiv);
    });
  }
  
  // Call the function to display posts when the page loads
  window.onload = displayPosts;
  