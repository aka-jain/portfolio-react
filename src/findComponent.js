const findComponent = function(routes, componentName){
  const route = routes.find((route) => {
    return route.componentName == componentName
  })
  return route.component
}

export const findRoute = function(routes, componentName){
  const route = routes.find((route) => {
    return route.componentName == componentName
  })
  return route
}

export {findComponent};