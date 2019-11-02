export default {
	MAX_ATTACHMENT_SIZE: 5000000,
	
  STRIPE_KEY: "pk_test_vQQLaz3YMkrqoTlbc3m7duUi00iwYIy3wb",
  
  s3: {
    REGION: "us-east-2",
    BUCKET: "note-related-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://0p23add5d1.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_LtFQU1uph",
    APP_CLIENT_ID: "6jdns1c97vg3iha0sggfo7hek4",
    IDENTITY_POOL_ID: "us-east-2:04df7727-9a58-4e13-b4ab-1ed5359e0df4"
  }
};