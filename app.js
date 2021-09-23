document.getElementById('search-btn').addEventListener('click', function () {
    const searchText = document.getElementById('search-bar').value;
    fetch(``)
        .then(res => res.json())
        .then(data => console.log(data))
})