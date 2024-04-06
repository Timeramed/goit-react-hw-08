export const selectLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshingContacts = (state) => state.auth.isRefreshing;
export const selectLoading = (state) => state.auth.isLoading;
