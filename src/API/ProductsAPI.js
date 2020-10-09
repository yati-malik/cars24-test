const GetProducts = async(pageNumber) => {
    const response = await fetch('https://yati-malik.github.io/cars24-test/products.json');
    const pages = await response.json();
    let page = 'Page'+pageNumber;
    return pages[page];
};

export default GetProducts;