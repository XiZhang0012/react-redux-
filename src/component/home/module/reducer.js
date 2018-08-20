const defaultHome = {
    index:1,
    data :[
        {
          year: "1991",
          value: 3
        },
        {
          year: "1992",
          value: 4
        },
        {
          year: "1993",
          value: 3.5
        },
        {
          year: "1994",
          value: 5
        },
        {
          year: "1995",
          value: 4.9
        },
        {
          year: "1996",
          value: 6
        },
        {
          year: "1997",
          value: 7
        },
        {
          year: "1998",
          value: 9
        },
        {
          year: "1999",
          value: 13
        }
      ],
      cols: {
        value: {
          min: 0
        },
        year: {
          range: [0, 1]
        }
      }
}
export default function reducer(state = defaultHome, action) {
    switch (action.type) {
        case 'HM_add':
            return {
                ...state,
                index:state.index+1
        }
        case 'HM_clickRever':
            return {
                ...state,
                index:1
        }
        
        default:
            return state

    }
}

