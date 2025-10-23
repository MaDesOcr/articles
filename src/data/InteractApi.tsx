function getAllData(){
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(console.log);

}

export default getAllData;