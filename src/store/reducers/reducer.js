import * as actionTypes from '../action';
const initialState={
    topbar:true,
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case actionTypes.TOPBAR:
        return{
            ...state,
            topbar:!state.topbar
        };
    }

}

export default reducer;