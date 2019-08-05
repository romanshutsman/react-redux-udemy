// ACTIONS

const createPolicy = (name, amount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name,
            amount
        }
    }
}
const deletePolicy = (name, amount) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    }
}
const createClaim = (name, amountToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name,
            amountToCollect
        }
    }
}

//REDUCERS

const claimsHistory = (oldListOfClaims = [], action) => {
    if(action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload]
    }
    return oldListOfClaims;
 }


 const accounting = (bagOfMoney = 100, action) => {
    if(action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountToCollect;
    } else if(action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount
    } 
    return bagOfMoney;
 }

 const policies = (listOfPolicies = [], action) => {
     if(action.type === 'CREATE_POLICY') {
         return [...listOfPolicies, action.payload.name]
     } else if(action.type === 'DELETE_POLICY') {
         return listOfPolicies.filter(name => name !== action.payload.name)
     } 
     return listOfPolicies
 };

 // STORE

 const { createStore, combineReducers } = Redux;

 const ourDepartments = combineReducers({
     accounting,
     claimsHistory,
     policies
 });
 
 const store = createStore(ourDepartments);

 const action = createPolicy('Alex', 20);

 store.dispatch(action);

 store.dispatch(createClaim('Alex', 120));

 store.dispatch(deletePolicy('Alex'))

 store.getState();