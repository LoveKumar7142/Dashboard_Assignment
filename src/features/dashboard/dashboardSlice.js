import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  categories: [
    {
      id: 'cspm',
      name: 'CSPM Executive dashboard',
      widgets: [
        { id: nanoid(), name: 'Summary', text: 'Random summary text' },
        { id: nanoid(), name: 'Alerts', text: 'Random alerts text' }
      ]
    },
    {
      id: 'eng',
      name: 'Engineering',
      widgets: [
        { id: nanoid(), name: 'Deployments', text: 'Deployment status text' }
      ]
    }
  ]
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: {
      reducer(state, action) {
        const { categoryId, widget } = action.payload
        const cat = state.categories.find((c) => c.id === categoryId)
        if (cat) cat.widgets.push(widget)
      },
      prepare(categoryId, name, text) {
        return { payload: { categoryId, widget: { id: nanoid(), name, text } } }
      }
    },
    removeWidget(state, action) {
      const { categoryId, widgetId } = action.payload
      const cat = state.categories.find((c) => c.id === categoryId)
      if (cat) cat.widgets = cat.widgets.filter((w) => w.id !== widgetId)
    },
    addCategory(state, action) {
      const { id, name } = action.payload
      state.categories.push({ id, name, widgets: [] })
    },
    removeWidgetGlobally(state, action) {
      const widgetId = action.payload
      state.categories.forEach((c) => {
        c.widgets = c.widgets.filter((w) => w.id !== widgetId)
      })
    }
  }
})

export const { addWidget, removeWidget, addCategory, removeWidgetGlobally } = dashboardSlice.actions
export default dashboardSlice.reducer
