const scopes = [
  'scripts',
  'website',
  'playground',
  'vp:*',
  'vp:clipboard',
  'vp:china-search',
]

/** @type {import('cz-git').CommitizenGitOptions} */
module.exports = {
  alias: {
    i: 'wip: initial commit',
    s: 'style: update code format',
    f: 'docs: fix typos',
    r: 'docs: update README',
    b: 'build: bump dependencies',
    c: 'chore: update config',
  },
  scopes,
  maxHeaderLength: 100,
  allowEmptyIssuePrefixs: false,
  allowCustomIssuePrefixs: false,
}
