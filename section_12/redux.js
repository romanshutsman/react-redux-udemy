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