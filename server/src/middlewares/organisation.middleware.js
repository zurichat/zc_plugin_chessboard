const CustomError = require("../utils/custom-error");

// Verify the organisationID passed in the request is valid
exports.orgAuth = async (req, res, next) => {
  try {
    let { organisation } = req.headers;

    // Verify if the organisation is valid
    // OMO laterrr

    // If org_id is not set in the header, then set it to the default organisation
    if (
      !organisation ||
      organisation === null ||
      organisation === "null" ||
      organisation === "undefined"
    ) {
      // Use hardcoded organisation
      res.locals.organisation_id = "6145c2d0285e4a18402073f6";

      // For now, we will use the default organisation
      // res.status(400).send(response("Organisation header is required", null, false));
    } else {
      // Set the organisation id in req variable
      res.locals.organisation_id = organisation;
    }

    // Continue to the next request
    next();
  } catch (error) {
    throw new CustomError(`Orgnisation Middleware: ${error}`, 502);
  }
};
