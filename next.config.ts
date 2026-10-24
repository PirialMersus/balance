import type { NextConfig } from "next";

const isGithubActionsDeployment = Boolean(process.env.GITHUB_ACTIONS);
const repositoryPathPrefix = "/balance";

const nextConfig: NextConfig = {
  output: isGithubActionsDeployment ? "export" : undefined,
  basePath: isGithubActionsDeployment ? repositoryPathPrefix : "",
  assetPrefix: isGithubActionsDeployment ? repositoryPathPrefix : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
