console.log("test");
const grid = document.querySelector(".grid");
let searchRequest = "winter";
const input = document.querySelector("input");
// const searchBtn = document.querySelector(.fa-search)

const search = (e) => {
  console.log("zqalupa");
  searchRequest = e.target.value;
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }

  getPhoto();
};
input.addEventListener("change", (e) => {
  search(e);
});
const showPhoto = (collection) => {
  collection.map((el) => {
    let img = document.createElement("div");

    img.classList.add("img");
    img.style = `background-image: url(${el.urls.regular}`;
    grid.append(img);
  });
};
const getPhoto = async () => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchRequest}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`
    );

    const data = await response.json();
    showPhoto(data.results);
  } catch (e) {
    console.error(e);
  }
};

getPhoto();
