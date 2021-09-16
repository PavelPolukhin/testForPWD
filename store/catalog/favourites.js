export const state = () => ({
  favourites: [],
})
export const mutations ={
  addFavorites(state, item) {
    state.favourites.push(item)
  },
  deleteFavorites(state, id) {
    const index = state.favourites.findIndex(x => x.id === id);
    state.favourites.splice(index, 1)
  }
}
