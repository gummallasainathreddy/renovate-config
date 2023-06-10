module.exports = {
  platform: 'github',
  dryRun: true,
  username: 'gummallasainathreddy',
  token: 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,
  gitAuthor: 'Renovate gummallasainathreddy <gummallasainathreddy598@gmail.com>',
  onboarding: true,
  repositories: [
    'gummallasainathreddy/renovate-config',
    'gummallasainathreddy/eks-tomcat',
    'gummallasainathreddy/eks-httpd-app'
  ],
  prBodyColumns: [
    "Package",
    "Update",
    "Change"
  ],
  hostRules: [
    {
      matchHost: "https://maven.pkg.github.com/gummallasainathreddy/*",
      token: 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
    },
    {
      hostType: "docker",
      matchHost: "https://ghcr.io",
      username: "gummallasainathreddy",
      token: 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
    },
    {
      hostType: "helm",
      matchHost: "https://raw.githubusercontent.com/gummallasainathreddy/helm-charts/main",
      username: "gummallasainathreddy",
      token: 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
    }
  ]
};
