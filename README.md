# Blavity Take Home

Appraoch:
- After reviewing the "newsapi.org" api, I decided I needed to iterate through the data object, push the relevant info (title, url) from each article into arrays, and store those arrays in state. With that info in state, I could iterate through each array, and render each articles title and url as a list item with a "save" button.
- With this in mind, I separated my components accordingly and then designed a database schema for the saved articles.
- I invoke the GET request to the news api with an event listener to show all news articles. Similarly, I invoke the GET request to the database to show all saved articles. 
- I added a toggle to display either the news or the saved articles.

Tools 
- I used React to take advantage of its fast rendering of the virtual DOM and downward data flow.  
- I used Node and express because of their combined scalability, and the ability to use a single programming language
- I used MongoDB with mongoose because of their simple and quick schema design 

How to run
- install all modules
- click "Get The News" to view all new articles 
- click save to toggle between saving/deleting from the database. First click saves it, second click deletes it
- click "Show Saved Articles" to view all saved articles

Stretch Features:
- Render saved articles on a separate page with a delete button for each article that removes it from the database (instead of having the save button toggle between saving and deleting) 
- Prevent the ability to save the same article multiple times
- Improve styling