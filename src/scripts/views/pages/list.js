import { createRestaurantItemTemplate } from '../templates/template-creator';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';

const List = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">List Restaurant</h2>
        <div id="restaurant" class="restaurants">
        </div>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await TheRestaurantDbSource.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    console.log(restaurants);
  },
};

export default List;
