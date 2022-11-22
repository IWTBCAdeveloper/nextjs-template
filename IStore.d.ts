// #region Interface Imports
import { InitiReducer } from "./redux/reducers";
// #endregion Interface Imports

export interface IStore {
  init: InitiReducer;
}
