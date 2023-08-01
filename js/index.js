import 'dotenv/config'
import { Octokit} from 'octokit';

const octokit = new Octokit({
    auth: process.env.TOKEN
  });
  
async function getSearch(owner,repo){
    const orgRepos = await octokit.request('GET /repos/{owner}/{repo}', {
        owner: owner,
        repo: repo
      });

      console.log(orgRepos.data);
}

getSearch("facebook", "react");