export const state = () => ({
  bucket: [],
})
export const mutations ={
  addBucket(state, item) {
    state.bucket.push(item)
  },
  changeBucket(state, item){
    const index = state.bucket.findIndex(x => x.id === item.id);
    if(item.numberOfProducts >= 1){
      state.bucket.splice(index, 1, item);
    }else if (item.numberOfProducts <= 0){
      state.bucket.splice(index, 1)
    }
  }
}
