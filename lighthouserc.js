module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      staticDistDir: "./out",
      url: ["/"],
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "http://localhost:9001/",
      token: "48f57bd2-caef-4d2e-b2b9-0aad65fb09a8", // could also use LHCI_TOKEN variable instead
    },
  },
};
