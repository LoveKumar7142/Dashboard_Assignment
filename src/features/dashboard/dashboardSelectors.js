export const selectCategories = (state) => state.dashboard.categories

export const selectAllWidgets = (state) => {
  const widgets = []
  state.dashboard.categories.forEach((c) => {
    c.widgets.forEach((w) => widgets.push({ ...w, categoryId: c.id, categoryName: c.name }))
  })
  return widgets
}
