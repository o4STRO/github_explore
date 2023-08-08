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

      var dataRepo = new Object();

      dataRepo = orgRepos.data;
      console.log(dataRepo.full_name);
      console.log(dataRepo.owner.avatar_url);
      console.log(dataRepo.description);

      document.querySelector('#descBox .name').innerHTML
}

getSearch("facebook", "react");