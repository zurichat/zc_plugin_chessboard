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

>>>>>>> a0fb237a2da881841425e4a29d0112d9984a569c
// Export Module
module.exports = response