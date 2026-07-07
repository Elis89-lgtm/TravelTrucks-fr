export const selectCampers = (state) => state.campers.items;

export const selectLoadingCampers = (state) => state.campers.isLoadingCampers;
export const selectErrorCampers = (state) => state.campers.isErrorCampers;

export const selectCurrentCamper = (state) => state.campers.selectedCampers;

export const selectTotalCampers = (state) => state.campers.total;

export const selectCampersPage = (state) => state.campers.page;
export const selectFilters = (state) => state.campers.filters.filters;
export const selectUniqueLocations = (state) => state.campers.locations || [];

// якщо тримаєш обране у campers
export const selectFavorite = (state) => state.campers.favoritesIds || [];
