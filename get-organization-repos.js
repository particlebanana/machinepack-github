/**
 * Module dependencies
 */

var Github = require('github');

module.exports = {

  // https://developer.github.com/v3/repos/#list-organization-repositories
  id: 'get-organization-repos',
  moduleName: 'machinepack-github',
  description: 'Fetch the list of repos in a Github organization.',

  noSideEffects: true,

  inputs: {
    user: {
      type: 'string',
      example: 'balderdashy'
    },
    limit: {
      type: 'integer',
      example: 30
    }
  },

  exits: {
    error: {
      example: {
        "message": "Not Found",
        "documentation_url": "https://developer.github.com/v3"
      }
    },
    success: {
      example: [{
        "id": 1296269,
        "owner": {
          "login": "octocat",
          "id": 1,
          "avatar_url": "https://github.com/images/error/octocat_happy.gif",
          "gravatar_id": "somehexcode",
          "url": "https://api.github.com/users/octocat",
          "html_url": "https://github.com/octocat",
          "followers_url": "https://api.github.com/users/octocat/followers",
          "following_url": "https://api.github.com/users/octocat/following{/other_user}",
          "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
          "organizations_url": "https://api.github.com/users/octocat/orgs",
          "repos_url": "https://api.github.com/users/octocat/repos",
          "events_url": "https://api.github.com/users/octocat/events{/privacy}",
          "received_events_url": "https://api.github.com/users/octocat/received_events",
          "type": "User",
          "site_admin": false
        },
        "name": "Hello-World",
        "full_name": "octocat/Hello-World",
        "description": "This your first repo!",
        "private": false,
        "fork": false,
        "url": "https://api.github.com/repos/octocat/Hello-World",
        "html_url": "https://github.com/octocat/Hello-World",
        "clone_url": "https://github.com/octocat/Hello-World.git",
        "git_url": "git://github.com/octocat/Hello-World.git",
        "ssh_url": "git@github.com:octocat/Hello-World.git",
        "svn_url": "https://svn.github.com/octocat/Hello-World",
        "mirror_url": "git://git.example.com/octocat/Hello-World",
        "homepage": "https://github.com",
        "language": null,
        "forks_count": 9,
        "stargazers_count": 80,
        "watchers_count": 80,
        "size": 108,
        "default_branch": "master",
        "open_issues_count": 0,
        "has_issues": true,
        "has_wiki": true,
        "has_downloads": true,
        "pushed_at": "2011-01-26T19:06:43Z",
        "created_at": "2011-01-26T19:01:12Z",
        "updated_at": "2011-01-26T19:14:43Z",
        "permissions": {
          "admin": false,
          "push": false,
          "pull": true
        }
      }]
    }
  },

  fn: function($i, $x) {
    var github = new Github({
      version: '3.0.0'
    });
    github.repos.getFromOrg({
      org: $i.user||'balderdashy',
      per_page: $i.limit||30,
      page: ($i.skip||0)/($i.limit||30)
    }, $x);
  }

};