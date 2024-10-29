import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '../slice/Inventory'; 
import orderReducer from '../slice/order/order';
import suppliersReducer from '../slice/supplier/supplier';
import editSupplierReducer from '../slice/supplier/editSupplier';

export const store = configureStore({
    reducer: {
      
      inventory: inventoryReducer,
      order : orderReducer,
      suppliers: suppliersReducer,
      editSupplier: editSupplierReducer
     
     
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;