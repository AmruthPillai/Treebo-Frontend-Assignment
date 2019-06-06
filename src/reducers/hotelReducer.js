let initState = {
  hotels: []
};

const mergeById = (a1, a2) =>
  a1.map(itm => ({
    ...a2.find((item) => (item.id === itm.id) && item),
    ...itm
  }));

export default (state = initState, action) => {
  switch (action.type) {
    case 'GET_HOTELS':
      return { hotels: [...state.hotels, ...action.payload] }
    case 'EMBED_PRICES':
      return { hotels: mergeById(state.hotels, action.payload) }
    case 'GET_DETAILS':
      return {
        hotels: state.hotels.map(hotel => {
          return { ...hotel, details: { ...action.payload } }
        })
      }
    default:
      return state
  }
}