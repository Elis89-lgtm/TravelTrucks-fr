export const buildCampersQuery = (filters, page, limit) => {
  const { location, bodyType, features } = filters;

  // features -> AC=true&kitchen=true&...
  const featureFlags = {};
  features.forEach((f) => {
    featureFlags[f] = true;
  });

  return {
    page,
    limit,
    ...(location ? { location } : {}),
    ...(bodyType ? { form: bodyType } : {}),
  };
};
