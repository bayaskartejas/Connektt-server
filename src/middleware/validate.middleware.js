export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    if (err.name === "ZodError" && err.issues) {
      return res.status(400).json({
        error: "Validation failed",
        details: err.issues.map((issue) => ({
          field: issue.path.join("."), 
          message: issue.message,
          code: issue.code, 
          expectedValues: issue.values || undefined, 
        })),
      });
    }

    return res.status(500).json({
      error: "Something went wrong during validation",
      details: err.message,
    });
  }
};
