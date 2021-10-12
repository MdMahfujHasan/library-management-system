// fetch user
const url = `https://jsonplaceholder.typicode.com/users`
fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data))

const displayUser = users => {
    const userInfo = document.getElementById('user-info');
    for (const user of users) {
        const p = document.createElement('p');
        p.innerText = `
        Rank: ${user.id}
        Name: ${user.name}
        Email: ${user.email}
        Phone: ${user.phone}
        Website: ${user.website}
        Company: ${user.company.name}
        `
        p.classList.add('col-4');
        p.classList.add('user-container');
        userInfo.appendChild(p);
    }
}

// book list data
const loadBooks = () => {
    const data = [{ "id": 1, "title": "Software Engineering", "author": "Poly Bhoumik", "price": 250, "image": "https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg", "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "rating": 4.5 }, { "id": 2, "title": "Numerical Analysis", "author": "Md. Imran Hossain", "price": 270, "image": "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg", "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "rating": 4.2 }, { "id": 3, "title": "Computer Graphics", "author": "Md Imtiaz Ahmed", "price": 230, "image": "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-9-CRC.png", "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "rating": 4.7 }, { "id": 4, "title": "Compiler Design", "author": "Prafulla Kumar Saha", "price": 285, "image": "https://www.votetruono.com/wp-content/uploads/2020/04/36-by-Cover-Page-Samples.jpg", "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "rating": 4.1 }, { "id": 5, "title": "System Analysis", "author": "Tahmina Aktar Trisha", "price": 225, "image": "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-10-CRC.png", "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "rating": 4.8 }, { "id": 6, "title": "Computer Network", "author": "Nusrhat Jahan Sarker", "price": 150, "image": "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-1-CRC.png", "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "rating": 4.6 }, { "id": 7, "title": "Artificial Intelligence", "author": "Mizanur Rahman", "price": 115, "image": "https://i.pinimg.com/originals/a6/ea/2c/a6ea2cb9eb96b1cdfcb05b123493b0ff.png", "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "rating": 4.9 }, { "id": 8, "title": "Parallel Processing", "author": "Saidur Rahman", "price": 350, "image": "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-7-CRC.png", "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "rating": 3.9 }, { "id": 9, "title": "Signal Processing", "author": "Tahmina Aktar Trisha", "price": 300, "image": "https://i.pinimg.com/originals/2e/f2/48/2ef248f839fc5bd836363b530de3a32f.png", "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "rating": 4 }, { "id": 10, "title": "Web Engineering", "author": "Safrun Nesa Saira", "price": 425, "image": "https://www.prowesspub.com/img/book-samples/covers/children2.jpg", "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "rating": 4.4 }, { "id": 11, "title": "Image Processing", "author": "Saidur Rahman", "price": 385, "image": "https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg", "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "rating": 4.3 }, { "id": 12, "title": "VLSI Design", "author": "Md. Imran Hossain", "price": 500, "image": "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png", "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.", "rating": 4.9 }]
    displayBooks(data);
}

// display books in website 
const displayBooks = books => {
    const allBooks = books.map(singleBook => singleBook);
    for (const book of allBooks) {
        const image = book.image;
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="show-books">
          <div>
             <img class="book-image" src=${book.image}></img>
          </div>
             <h3 id="book-title">${book.title}</h3>
             <div id="book-elements">
             <strong>By ${book.author}</strong>
             <h3 id="book-price">Price: $${book.price}</h3>
             <strong>Rating: ${book.rating}⭐</strong>
             </div>
             <hr>
             <p id="description">${book.description}</p>
             <button class="btn btn-outline-primary">Buy Now</button>
             <button class="btn btn-outline-success">Borrow</button>
             <button class="btn btn-outline-dark">Details</button>
        </div>
        `;
        document.getElementById("display-books").appendChild(div);
    }
};
loadBooks();