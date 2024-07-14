/*checks whether variables' value is available for use within a certain function*/
/*function is anonymous? provide a string as a made-up indicating name*/
//returns true if all checked variables exist
export const checkVariables = (func, ...variables) => {
  if (typeof func !== 'function' && typeof func !== 'string')
    console.error(`${func} cannot be a function name`);

  let evaluation = true;

  variables.forEach((variable, index) => {
    if (variable === null || variable === undefined || Number.isNaN(variable)) {
      console.error(
        `Variable number: ${index + 1} in function: ${
          func.name ? func.name : func
        } is ${variable}.`,
      );
      if (evaluation) evaluation = false;
    }
  });
  return evaluation;
};
