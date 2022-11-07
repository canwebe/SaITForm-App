export default function FullDataReducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, [action.name]: action.value }
    case 'CHANGE_DEGREE':
      return { ...state, degree: action.payload, course: '', branch: '' }
    case 'CHANGE_COURSE':
      return { ...state, course: action.payload, branch: '' }
    case 'CHANGE_EDU':
      return {
        ...state,
        educationDetails: {
          ...state.educationDetails,
          [action.varName]: {
            ...state.educationDetails[action.varName],
            [action.name]: action.value,
          },
        },
      }
    case 'CHANGE_IMG':
      return { ...state, file: action.file, imgSrc: action.url }
    default:
      return state
  }
}
