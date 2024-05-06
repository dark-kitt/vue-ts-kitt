/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { scope: "no-release", release: false },
          { scope: "breaking", release: "major" },

          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "style", release: "patch" },

          { type: "test", release: false }
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"]
        }
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "angular",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"]
        },
        writerOpts: {
          commitsSort: ["scope", "subject"]
        }
      }
    ],
    "@semantic-release/npm"
  ]
};
