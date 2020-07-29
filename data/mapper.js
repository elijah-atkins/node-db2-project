module.exports = {
    intToBoolean,
    booleanToint,
    carToBody
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
  function carToBody(project) {
    const result = {
      ...project,

    };
  
    if (project.actions) {
      result.actions = project.actions.map(action => ({
        ...action,
      }));
    }
  
    return result;
  }
