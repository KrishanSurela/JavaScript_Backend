const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//Higher Order Function=> “Those functions that accept functions as parameters or returns function”  This is referring to higher-order functions in programming.

// const asyncHandler = (fun) => {()=>{}};//HOF

// const asyncHandler = (fun) => ()=>{};//HOF

// const asyncHandler = (fun) => async ()=>{}

// const asyncHandler = (fun) => async (req, res, next) => {
//   try {
//     await fun(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
