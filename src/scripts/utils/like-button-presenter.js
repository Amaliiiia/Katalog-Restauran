const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaturant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaturant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _isRestaurantExist(id) {
    const restaturant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaturant;
  },
};
export default LikeButtonPresenter;
