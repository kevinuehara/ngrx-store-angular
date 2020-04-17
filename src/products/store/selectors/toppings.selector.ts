import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromFeature from "../reducers";
import * as fromToppings from "../reducers/toppings.reducer";

export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductState) => state.toppings
);

export const getToppingsEntities = createSelector(
  getToppingsState,
  fromToppings.getToppingEntitites
);

export const getAllToppings = createSelector(
  getToppingsEntities,
  (entities) => {
    console.log(entities)
    return Object.keys(entities).map((id) => entities[parseInt(id, 10)]);
  }
);

export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoaded
)

export const getToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoading
)
