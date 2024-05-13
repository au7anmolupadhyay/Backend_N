require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubAPI = {
    "login": "au7anmolupadhyay",
    "id": 108249751,
    "node_id": "U_kgDOBnPClw",
    "avatar_url": "https://avatars.githubusercontent.com/u/108249751?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/au7anmolupadhyay",
    "html_url": "https://github.com/au7anmolupadhyay",
    "followers_url": "https://api.github.com/users/au7anmolupadhyay/followers",
    "following_url": "https://api.github.com/users/au7anmolupadhyay/following{/other_user}",
    "gists_url": "https://api.github.com/users/au7anmolupadhyay/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/au7anmolupadhyay/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/au7anmolupadhyay/subscriptions",
    "organizations_url": "https://api.github.com/users/au7anmolupadhyay/orgs",
    "repos_url": "https://api.github.com/users/au7anmolupadhyay/repos",
    "events_url": "https://api.github.com/users/au7anmolupadhyay/events{/privacy}",
    "received_events_url": "https://api.github.com/users/au7anmolupadhyay/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Anmol Upadhyay",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Full-stack Web Developer | \r\nUnder graduation , 3rd Year\r\nChandigarh, India",
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2022-06-27T03:27:19Z",
    "updated_at": "2024-05-13T08:25:03Z"
  }

app.get('/', (req,res) => {
    res.send("welcome to the home page!")
})

app.get('/twitter', (req,res) => {
    res.send("this is the twitter page!")
})

app.get('/login', (req,res) => {
    res.send("<h1>login to our website</h1>")
})

app.get('/github', (req,res) =>{
    res.json(githubAPI)
})

app.listen(process.env.PORT, ()=>{
    console.log(`it is running on ${port}`)
})
