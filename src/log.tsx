import { Detail } from "@raycast/api";


const simpleGit = require('simple-git');
const git = simpleGit();

async function getCommits() {
    try {
        const commits = await git.log();
        const filteredCommits = commits.all.filter((commit:any) => {
            const commitDate = new Date(commit.date);
            const now = new Date();
            const oneDayAgo = new Date(now.setDate(now.getDate() - 1)); // 1天前
            return commitDate > oneDayAgo;
        });

        console.log(filteredCommits);
    } catch (error) {
        console.error('Error fetching commits:', error);
    }
}

// getCommits();

console.log(1);

export default function Command() {
  return <Detail markdown="# Hello 2World" />;
}
