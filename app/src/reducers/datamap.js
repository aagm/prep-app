import {
  MAP_DATA_CHANGED
} from '../constants';

const initialState = {
  zoom: null,
  latLng: {
    lat: null,
    lng: null
  },
  zoomPosition: 'topright',
  basemap: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MAP_DATA_CHANGED: {
      return Object.assign({}, state, action.payload);
    }
    default:
      return state;
  }
}
