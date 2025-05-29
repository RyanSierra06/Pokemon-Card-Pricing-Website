# Pokemon Card Pricing Website

Used a React + Vite set up to create a front end website that uses the Pokemon TCG Api to create a databse of every pokemon card currently released as well as its current market price and other data associated with the card.

Check out the website here (hosted on GitHub Pages): https://ryansierra06.github.io/Pokemon-Card-Pricing-Website/

Theres 4 different pages I created:
- 1: The "home" page (the first page the user sees) with a list of every set
- 2: The cards page which lists the entire list of cards from the given set the user clicks
- 3: The search page which lists all the cards that the user searches for from the search bar
- 4: The cards info page which shows the information of the card the user presses from either the cards page or the search page

All pages except for the info page use a map of different components to display the given data
- For example, theres a PokemonCardComponent which gets mapped to show all the cards from a search or a set, as well as a SetCardComponent which is mapped to show every set released from 1999 all the way to the present.

The website dynamically scales as well to account for new sets added, so when the API updates to add new english sets as they release, the website will update to display those changes too.

<img width="1510" alt="Screenshot 2025-05-28 at 11 01 49 PM" src="https://github.com/user-attachments/assets/40980d0e-d52f-410a-a2b2-cd7f8f07d5b5" />
<img width="1511" alt="Screenshot 2025-05-28 at 11 01 25 PM" src="https://github.com/user-attachments/assets/a54238c8-0981-4fcb-952a-3b2e5bfe7d99" />
<img width="1511" alt="Screenshot 2025-05-28 at 11 01 04 PM" src="https://github.com/user-attachments/assets/c4e8371a-0af9-48ff-b0b2-37ffa1a6db7b" />
<img width="1511" alt="Screenshot 2025-05-28 at 11 00 39 PM" src="https://github.com/user-attachments/assets/0a9ac241-605b-4d21-b9e9-bc29e35f0c0f" />
