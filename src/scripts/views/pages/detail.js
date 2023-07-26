import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Detail Restaurant</h2>
        <div id="restaurant" class="restaurant">

        </div>
        <div id="likeButtonContainer"></div>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        rating: restaurant.rating,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
