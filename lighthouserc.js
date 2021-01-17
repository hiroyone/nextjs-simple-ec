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
      token: "03d0427b-c131-4aa6-a04f-e2e58008412f", // could also use LHCI_TOKEN variable instead
    },
  },
};
