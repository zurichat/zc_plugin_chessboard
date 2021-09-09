const axios = require("axios");
const CustomError = require("../utils/custom-error");
const url = "https://api.zuri.chat/users/";

// GET req to zc_core to validate and fetch user details with the provided token
exports.userAuth = async (org, userId, token) => {
  try {
    const response = await axios.get(`${url}${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // destrucures registered organisation of the user from the response
    const { Organizations } = response.data.data;

    // confirm if user belongs to an organizations from the response, the validator returns true
    if (Organizations.indexOf(org) > -1) {
      return true;
    }
    return false;
  } catch (error) {
    throw new CustomError(`Can't verify user from db: ${error}`, 502);
  }
};

/*
    How did I test this; first I registered the user to https://api.zuri.chat/users with the templates below
    { "first_name":"Joshua",
    "last_name":"Monyei",
    "display_name":"KyloJosh",
    "email":"monyeijosh01@gmail.com",
    "password":"zuri1234",
    "phone":"08153468883"}

    Got a response {
        "status": 200,
        "message": "user created",
        "data": {
            "InsertedID": "6139a2dd59842c7444fb01ee"
        }
    }

    Logged in with the credentials to https://api.zuri.chat/auth/login
    {
    "Email":"monyeijosh01@gmail.com",
    "Password": "zuri1234"
    }

    Got a response {
        "status": 200,
        "message": "login successful",
        "data": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJVc2VyIjp7ImlkIjoiNjEzOWEyZGQ1OTg0MmM3NDQ0ZmIwMWVlIiwiZW1haWwiOiJtb255ZWlqb3NoMDFAZ21haWwuY29tIn0sImV4cCI6MTYzMTIxMDQ2MiwiaXNzIjoiYXBpLnp1cmkuY2hhdCJ9.xhuPtzF0rlp3NrKiU4YoTqqwksI2-JkD2INCX-31WXg",
            "user": {
                "id": "6139a2dd59842c7444fb01ee",
                "first_name": "Joshua",
                "last_name": "Monyei",
                "display_name": "KyloJosh",
                "email": "monyeijosh01@gmail.com",
                "phone": "08153468883",
                "status": 0,
                "time_zone": "",
                "created_at": "2021-09-09T05:59:57.709581491Z",
                "updated_at": "0001-01-01T00:00:00Z"
            }
        }
    }

    Send a get request to https://api.zuri.chat/users/6139a2dd59842c7444fb01ee
    {
    "status": 200,
    "message": "user retrieved successfully",
    "data": {
        "DeletedAt": "0001-01-01T00:00:00Z",
        "EmailVerification": {
            "ExpiredAt": "0001-01-01T00:00:00Z",
            "Token": "",
            "Verified": false,
            "id": "000000000000000000000000"
        },
        "Organizations": null,
        "Password": "$2a$14$msOfet7cJkg2oowS2tAF5Orb1pmz6ZNutJPqZmvdofyOnA2EEZN1y",
        "PasswordResets": null,
        "WorkspaceProfiles": null,
        "_id": "6139a2dd59842c7444fb01ee",
        "company": "",
        "created_at": "2021-09-09T07:59:57.709581491+02:00",
        "display_name": "KyloJosh",
        "email": "monyeijosh01@gmail.com",
        "first_name": "Joshua",
        "id": "000000000000000000000000",
        "last_name": "Monyei",
        "phone": "08153468883",
        "settings": null,
        "status": 0,
        "time_zone": "",
        "updated_at": "0001-01-01T00:00:00Z"
         }
    }
    From the response the user is without an organisation yet so we can.t utilize the middleware fully yet

 */
