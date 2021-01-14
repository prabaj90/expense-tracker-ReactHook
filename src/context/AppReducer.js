export default (state, action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
         const id = action.payload;
         return{
             ...state,
             transactions: state.transactions.filter(transaction => transaction.id !== id)
         }
         case 'ADD_TRANSACTION':
         return{
             ...state,
             transactions: [action.payload, ...state.transactions]
         }
        default: return state;
    }
}