document.addEventListener('DOMContentLoaded', () => {
  let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
  let decks = JSON.parse(localStorage.getItem('decks')) || [{ id: 1, name: 'Default Deck', cards: [] }]; // Initial deck
  let currentCardIndex = 0;
  let cardContent = document.getElementById('flashcard-content');
  let flashcardDiv = document.getElementById('flashcard');
  let nextButton = document.getElementById('next-button');
  let prevButton = document.getElementById('prev-button');
  let deleteButton = document.getElementById('delete-button');
  let deckAdditionButton = document.getElementById('deck-addition-button');
  let deckList = document.getElementById('deck-list');
  let addDeckButton = document.getElementById('add-deck-button');
  let deleteDeckButton = document.getElementById('delete-deck-button');
  let currentDeckId = 1;

  let cardRevealed = false;

  function displayCard() {
      if (flashcards.length > 0) {
          cardContent.textContent = flashcards[currentCardIndex].term;
          cardRevealed = false;
      } else {
          cardContent.textContent = 'No flashcards available.';
      }
  }

  flashcardDiv.addEventListener('click', () => {
      if (flashcards.length > 0 && !cardRevealed) {
          cardContent.textContent = flashcards[currentCardIndex].definition;
          cardRevealed = true;
      }
  });

  nextButton.addEventListener('click', () => {
      currentCardIndex = (currentCardIndex + 1) % flashcards.length;
      displayCard();
  });

  prevButton.addEventListener('click', () => {
      currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
      displayCard();
  });

  function renderDecks() {
      deckList.innerHTML = '';
      decks.forEach(deck => {
          let li = document.createElement('li');
          li.textContent = deck.name;
          let viewButton = document.createElement('button');
          viewButton.textContent = 'View';
          viewButton.classList.add('view-deck-button');
          viewButton.addEventListener('click', () => {
              currentDeckId = deck.id;
          });
          li.appendChild(viewButton);
          deckList.appendChild(li);
      });
  }

  addDeckButton.addEventListener('click', () => {
      let deckName = prompt('Enter Deck Name');
      if (deckName) {
          let newDeck = { id: Date.now(), name: deckName, cards: [] };
          decks.push(newDeck);
          localStorage.setItem('decks', JSON.stringify(decks));
          renderDecks();
      }
  });

  deleteDeckButton.addEventListener('click', () => {
      decks = decks.filter(deck => deck.id !== currentDeckId);
      localStorage.setItem('decks', JSON.stringify(decks));
      renderDecks();
      currentDeckId = decks[0].id;
  });

  deckAdditionButton.addEventListener('click', () => {
      if (flashcards.length > 0) {
          let cardId = currentCardIndex;
          let currentDeck = decks.find(deck => deck.id === currentDeckId);
          if(currentDeck && !currentDeck.cards.includes(cardId)){
              currentDeck.cards.push(cardId);
              localStorage.setItem('decks', JSON.stringify(decks));
              alert(`Card added to deck: ${currentDeck.name}`);
          }
      }
  });

  deleteButton.addEventListener('click', () => {
      let cardId = currentCardIndex;
      let currentDeck = decks.find(deck => deck.id === currentDeckId);
      if(currentDeck && currentDeck.cards.includes(cardId)){
          currentDeck.cards = currentDeck.cards.filter(card => card !== cardId);
          localStorage.setItem('decks', JSON.stringify(decks));
          alert(`Card removed from deck: ${currentDeck.name}`);
      }
  });

  renderDecks();
  displayCard();
});