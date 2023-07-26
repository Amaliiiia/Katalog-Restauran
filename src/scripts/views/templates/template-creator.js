import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  const foodsData = restaurant.menus.foods;
  const drinksData = restaurant.menus.drinks;
  const reviewsData = restaurant.customerReviews;

  let foodsElement = '';
  let drinksElement = '';
  let reviewsElement = '';

  foodsData.forEach((food) => {
    foodsElement += `<li>${food.name}</li>`;
  });

  drinksData.forEach((drink) => {
    drinksElement += `<li>${drink.name}</li>`;
  });

  reviewsData.forEach((review) => {
    reviewsElement += `<div class="customer-reaview">
      <span class="customer-name">${review.name}</span> 
      <span class="reaview-date">${review.date}</span>
      <p>${review.review}</p>
    </div>`;
  });

  return `
  <div class="utama">
    <picture>
      <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SM + restaurant.pictureId}">
      <source media="(max-width: 900px)" srcset="${CONFIG.BASE_IMAGE_URL_MD + restaurant.pictureId}">
      <source media="(min-width: 900px)" srcset="${CONFIG.BASE_IMAGE_URL_LG + restaurant.pictureId}">

      <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL_LG + restaurant.pictureId}" 
      alt="${restaurant.title}" crossorigin="anonymous" />
    </picture>

    <div class="restaurant__info">
      <h2 class="restaurant__title">${restaurant.name}</h2>
      <br>
      <h4>Alamat</h4>
      <p>${restaurant.address}</p>
      <h4>Kota</h4>
      <p>${restaurant.city}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
      </div>
  </div>

  <div class="test">
      <h4>Deskripsi</h4>
      <p>${restaurant.description} minutes</p>
      
      <h4>Menu</h4>
      <div class="menu">
      <div class="makanan">
      <h5>Makanan</h5>
      <ul>
        ${foodsElement}
      </ul>
      </div>
      <div class="minuman">
      <h5>Minuman</h5>
      <ul>
        ${drinksElement}
      </ul>
      </div>
      </div>
    

    <div class="restaurant__overview">
      <h3>Customer Reviews</h3>
      <ul>
        ${reviewsElement}
      </ul>
    </div>
  </div>
`;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <picture>
        <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SM + restaurant.pictureId}">
        <source media="(max-width: 900px)" srcset="${CONFIG.BASE_IMAGE_URL_MD + restaurant.pictureId}">
        <source media="(min-width: 900px)" srcset="${CONFIG.BASE_IMAGE_URL_LG + restaurant.pictureId}">

        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
            data-src="${restaurant.pictureId
    ? CONFIG.BASE_IMAGE_URL_LG + restaurant.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'}" 
          crossorigin="anonymous"/>

      </picture>
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${
  restaurant.rating
}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${
  restaurant.name
}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
