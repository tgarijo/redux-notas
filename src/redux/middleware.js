const actions= [];

const middleware = store => next => action => {

    console.log('Action: ', action);

    const state =  store.getState();

    actions.push(action);
    localStorage.setItem('actions', JSON.stringify(actions));
    
    next(action);

}

export default middleware;

/* old implememtation
function middleware(store) {
    return function (next){
        return function (action) {
            const state =  store.getSate();

            store.dispatch({

            })

            next(action);
        }
        
    }
    
}
*/



