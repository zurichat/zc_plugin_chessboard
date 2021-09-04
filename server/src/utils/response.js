/**
 * Returns response object
 * @param {string} message Response message
 * @param {*} data Data to be returned
 * @param {boolean} success Status of the request
 */

function response(message, data, success) {
    return {
        message: formatMesaage(message),
        data: data || null,
        success: success == null ? true : success
    };
}

function formatMesaage(str) {
    if (!str) return ""

    // Make first letter capitial
    return str.charAt(0).toUpperCase() + str.slice(1)
}

<<<<<<< HEAD
=======
const formtMessage = (objectOrMessage) => {
  return typeof objectOrMessage === "string"
    ? objectOrMessage
    : typeof objectOrMessage === "object" &&
      objectOrMessage &&
      objectOrMessage.message
    ? objectOrMessage.message
    : "";
};

const createResponse = (
  objectOrMessage,
  data,
  status = false,
  additionalData
) => {
  return {
    status: status === false ? "failure" : "success",
    message: objectOrMessage ? formtMessage(objectOrMessage) : undefined,
    ...additionalData,
    data,
  };
};

>>>>>>> be71c77ab8ad17a538d513616fe38a58d96929cb
// Export Module
module.exports = response