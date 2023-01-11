module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "strapi-mygogle.appspot.com",
        basePath: "",
        publicFiles: false,
        uniform: false,
      },
    },
  },
  //...
});
