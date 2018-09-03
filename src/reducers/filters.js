import * as types from '../constants';

// TODO initialize stops filters after tickets fetched
const initialState = [
  {
    type: 'currency',
    options: [
      {
        isActive: true,
        label: 'RUB',
        value: 'rub',
      },
      {
        isActive: false,
        label: 'USD',
        value: 'usd',
      },
      {
        isActive: false,
        label: 'EUR',
        value: 'eur',
      },
    ],
  },
  {
    type: 'stops',
    options: [
      {
        isActive: true,
        label: 'Все',
        value: 'all',
      },
      {
        isActive: true,
        label: 'Без пересадок',
        value: 0,
      },
      {
        isActive: true,
        label: '1 пересадка',
        value: 1,
      },
      {
        isActive: true,
        label: '2 пересадки',
        value: 2,
      },
      {
        isActive: true,
        label: '3 пересадки',
        value: 3,
      },
    ],
  }
];

export default function (state: InitialState = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case types.SET_FILTERS:
      switch(payload.type) {
        case 'stops': {
          return state.map(s => {
            switch(s.type) {
              case 'stops':
                if (payload.only) {
                  return {
                    type: 'stops',
                    options: s.options.map(o => {
                      return {
                        isActive: payload.value === o.value,
                        label: o.label,
                        value: o.value,
                      }
                    }),
                  };
                }

                if (payload.value === 'all') {
                  const isAllFilterActive = s.options.filter(o => o.value === 'all')[0].isActive;

                  return {
                    type: 'stops',
                    options: s.options.map(o => {
                      return {
                        isActive: !isAllFilterActive,
                        label: o.label,
                        value: o.value,
                      }
                    }),
                  };
                } else {
                  const isAllActive = s.options.every(o => o.isActive);
                  const notActiveFilters = s.options.filter(o => o.value !== 'all' && !o.isActive);
                  const isAllSelected = notActiveFilters.length === 1 && notActiveFilters[0].value === payload.value;

                  return {
                    type: payload.type,
                    options: s.options.map(o => {
                      if (o.value === payload.value) {
                        return {
                          isActive: !o.isActive,
                          label: o.label,
                          value: o.value,
                        }
                      } else if (o.value === 'all' && isAllActive) {
                        return {
                          isActive: false,
                          label: o.label,
                          value: o.value,
                        }
                      } else if (isAllSelected) {
                        return {
                          isActive: true,
                          label: o.label,
                          value: o.value,
                        }
                      }

                      return o;
                    }),
                  };
                }
                
              default: return s;
            }
          })
        }

        case 'currency': {
          return state.map(s => {
            switch(s.type) {
              case 'currency':
                return {
                  type: 'currency',
                  options: s.options.map(o => ({
                    isActive: o.value === payload.value,
                    label: o.label,
                    value: o.value,
                  }))
                }
                
              default: return s;
            }
          })
        }

        default: return state;
      }

    default: return state;
  }
}
