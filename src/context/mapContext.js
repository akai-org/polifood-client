import createDataContext from './createDataContext';

// initial state
const initState = {
  clientPosition: [],
  mapPosition: [52.403596, 16.950051],
  mapZoom: 16,
  markers: [
    {
      id: '1',
      position: [52.403596, 16.950051],
      name: 'Centrum Wykładowe PP',
      address: 'ul. Piotrowo 2'
    },
    {
      id: '2',
      position: [52.402573, 16.947926],
      name: 'Centrum Sportu PP',
      address: 'ul. Piotrowo 4'
    }
  ],
  selectedMarker: {
    id: '',
    position: [],
    name: '',
    address: ''
  },
  popupActive: false
};

// reducer
const mapReducer = (state, action) => {
  switch (action.type) {
    case 'set-zoom': {
      return {
        ...state,
        mapZoom: action.zoom
      };
    }
    case 'set-position':
      return {
        ...state,
        mapPosition: action.position
      };
    case 'open-popup':
      return {
        ...state,
        popupActive: true,
        mapZoom: 17,
        mapPosition: action.marker.position,
        selectedMarker: { ...action.marker }
      };
    case 'close-popup':
      return {
        ...state,
        mapZoom: 16,
        popupActive: false
      };
    default:
      return state;
  }
};

// <-- actions

const setMapZoom = dispatch => zoom => {
  dispatch({ type: 'set-zoom', zoom });
};

const setMapPosition = dispatch => position => {
  dispatch({ type: 'set-position', position });
};

const setCurrentMarker = dispatch => marker => {
  dispatch({ type: 'open-popup', marker });
};

const closePopup = dispatch => () => {
  dispatch({ type: 'close-popup' });
};

// actions -->

export const { Context, Provider } = createDataContext(
  mapReducer,
  { setMapZoom, setMapPosition, setCurrentMarker, closePopup },
  initState
);
