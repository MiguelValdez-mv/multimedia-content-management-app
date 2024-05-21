export const catchErrors = (cb) => (req, res, next) => cb(req, res).catch(next);

export const errorHandler = (err, req, res, next) => {
  res
    .status(500)
    .send({ message: err.message || "An unexpected error has ocurred" });
};
