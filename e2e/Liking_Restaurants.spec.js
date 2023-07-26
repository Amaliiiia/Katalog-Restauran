const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found',
  );
});

Scenario('liking a restaurant', async ({ I }) => {
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found',
  );

  I.amOnPage('/');

  I.waitForElement('.restaurant__title a', 10);

  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  I.waitForElement('.restaurant__title', 10);

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found',
  );

  I.amOnPage('/');

  I.waitForElement('.restaurant__title a', 10);

  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found',
  );
});
