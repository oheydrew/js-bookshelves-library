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

// const request = fetch(uri + '/books')
const library = []
const libraryDiv = document.getElementById('libraryDiv')

function getBooks(uri) {
  let request = fetch(uri)
  request
     // with ROCKETSHIPS zOMG
    .then(response => response.json())
    .then(parsedJson => { updateLibrary(parsedJson) })
    .catch(error => console.log(error.message))
  }

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

getBooks('http://localhost:3000/books')
getBooks('http://localhost:3000/books')


function updateLibrary(books) {
  library.push(books)

  let bookShelf = createBookShelf(library[library.length-1])
  fillBookShelf(books, bookShelf)
}

function createBookShelf(books) {
  // Create a variable for the "bookShelf" UL element
  let bookShelf = document.createElement('ul')
  bookShelf.className = 'bookShelf'
  bookShelf.id = `bookShelf-${library.length}`

  libraryDiv.appendChild(bookShelf)
  bookShelf = document.getElementById(`bookShelf-${library.length}`)

  addBookShelfHeader(bookShelf)

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
  // bookShelf = document.getElementById(`bookShelf-${library.length}`)

  // Create books and append to <ul>
  books.forEach(book => {
    bookShelf.appendChild(makeBookElement(book))
  })
}

function makeBookElement(book) {
  let bookElement = document.createElement('li')
  bookElement.className = 'book'
  bookElement.textContent = book.title
  return bookElement
  // Create an element and return the element
}
