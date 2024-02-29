# auth0-webhook-sample

Configure Auth0 to send log events to this webhook using an HTTP event stream.

To create a new stream point to your deployed Express application, follow the instructions at auth0.com/docs/customize/log-streams/custom-log-streams. 

Use the following field values:

- Payload URL: URL to your deployed webhook like https://[host domain]/api/logs
- Authorization Token: Value configured above
- Content Type: Use "application/json"
- Content Format: Use "JSON Array"
