module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { scope: "no-release", release: false },
          { scope: "breaking", release: "major" },
          /** v1.1.1 === v(major).(minor).(patch) */
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "style", release: "patch" },
          /** create a test case that will not be tracked */
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
        preset: "conventionalcommits",
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
