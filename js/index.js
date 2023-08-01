import 'dotenv/config'
import { Octokit} from 'octokit';

const octokit = new Octokit({
    auth: process.env.TOKEN
  });
  
async function getSearch(){
    const orgRepos = await octokit.request('GET /repos/{owner}/{repo}', {
        owner: 'facebook',
        repo: 'react'
      });

      console.log(orgRepos.data.full_name);
}

getSearch();