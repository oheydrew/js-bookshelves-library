  // // rocketship syntax: a simple return can be done like:
  // const y = () => 1

  // // instead of the longform
  // const x = function() {
  //   return 1
  // }

  // // This:
  // const z = () => {
  //   console.log("hello")
  // }

  // // Same as: 
  // const z = function() {
  //   console.log("hello")
  // }



// "fetch()" returns a PROMISE

// first, initialize an empty "library" array, to store each library
const library = []

// we grab the main parent library Div, to put our bookshelves in.
const libraryDiv = document.getElementById('libraryDiv')

// Let's feed it some books:
getBooks('http://localhost:3000/books')

// And again! Twice, now. Same books, though.
getBooks('http://localhost:3000/books')

// Our main function: Takes a URI for a json Books object, and then deals with
// the promise return, sending it to "updateLibrary", which makes bookshelves...
function getBooks(uri) {
  let request = fetch(uri)
  request
     // with ROCKETSHIPS zOMG
    .then(response => response.json())
    .then(parsedJson => { updateLibrary(parsedJson) })
    .catch(error => console.log(error.message))
  }
    // Promise handling without the Rocket Syntax:
    // request
    //   .then(function(response){
    //     return response.json() // converting JSON (takes time)
    //   })
    //   .then(function(parsedJson){
    //     updateLibrary(parsedJson)
    //   })
    //   .catch(function(error) {
    //     console.log(error.message)
    //   })

function updateLibrary(books) {
  library.push(books)

  let bookShelf = createBookShelf(library[library.length-1]) // Make a new bookShelf
  fillBookShelf(books, bookShelf) // fill the bookShelf with books!
}

function createBookShelf(books) {
  // Create a variable for the "bookShelf" UL element
  let bookShelf = document.createElement('ul')
  bookShelf.className = 'bookShelf'
  bookShelf.id = `bookShelf-${library.length}`

  // Append the bookShelf to the library
  libraryDiv.appendChild(bookShelf)
  bookShelf = document.getElementById(`bookShelf-${library.length}`)

  // Go make a nice header for the bookshelf!
  addBookShelfHeader(bookShelf)

  // return the bookshef, so it can be used to easily fill with books later.
  return document.getElementById(`bookShelf-${library.length}`)
}

function addBookShelfHeader(bookShelf) {
  let header = document.createElement('span')
  header.className = 'shelfHeader'
  header.id = `header=${library.length}`
  header.textContent = `Bookshelf: ${library.length}`
  bookShelf.appendChild(header)
}

function fillBookShelf(books, bookShelf) {
  // Append books to the bookShelf
  books.forEach(book => {
    bookShelf.appendChild(makeBookElement(book))
  })
}

// Make book elements :D
function makeBookElement(book) {
  let bookElement = document.createElement('li')
  bookElement.className = 'book'
  bookElement.textContent = book.title
  return bookElement
}
