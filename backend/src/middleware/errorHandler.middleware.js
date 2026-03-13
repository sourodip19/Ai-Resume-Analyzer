const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  let errorMessage = err.message || "Internal Server Error";
  if (process.env.NODE_ENV == "production" && statusCode == 500) {
    errorMessage = "Something went wrong";
  }
  res.status(statusCode).json({
    success: false,
    message: errorMessage,
    stack: process.env.NODE_ENV == "development" ? err.stack : undefined,
  });
};
export default errorHandler;
