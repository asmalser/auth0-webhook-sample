const got = require("got");

module.exports = async (req, res, next) => {
  const { body, headers } = req;

  if (!body || !Array.isArray(body)) {
    return res.sendStatus(400);
  }

 // if (headers.authorization !== process.env.AUTH0_LOG_STREAM_TOKEN) {
 //   return res.sendStatus(401);
 // }

  //const failedLogs = body.filter((log) => {
  //  return "f" === log.data.type[0] || /limit/.test(log.data.type);
  //});

  //if (failedLogs.length === 0) {
  //  return res.sendStatus(204);
  //}

  const reqOpts = {
    json: {
      attachments: body.map((log) => {
        return {
          pretext: "*Auth0 log alert*",
          title: log.data.description + " [type: " + log.data.type + "]",
          color: "#ff0000",
          title_link: "https://manage.auth0.com/#/logs/" + log.data.log_id
        };
      }),
    },
  };

  try {
    console.log( JSON.stringify(reqOpts) );
  } catch (error) {
    next(error);
  }
};
