import createDataContext from './createDataContext';

// initial state
const initState = {
  clientPosition: [],
  mapPosition: [52.403596, 16.950051],
  mapZoom: 16,
  markers: [],
  selectedMarker: {}
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
    default:
      return state;
  }
};

// <-- actions

const setMapZoom = dispatch => zoom => {
  dispatch({ type: 'set-zoom', zoom });
};

const setMapPosition = dispatch => position => {
  console.log(position);
  dispatch({ type: 'set-position', position });
};

// actions -->

export const { Context, Provider } = createDataContext(
  mapReducer,
  { setMapZoom, setMapPosition },
  initState
);
