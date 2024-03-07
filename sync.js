/**
 * Sync the changes from the main Slidev repository to this repo
 * https://stackoverflow.com/a/63745988
 *
 * Use `bun sync.js` to run this script
 */
/* eslint-disable no-console */
import process from 'node:process'
import { $ } from 'bun'

await $`git remote rm slidev`
await $`git remote add slidev https://github.com/slidevjs/slidev`
await $`git fetch slidev main`

console.log('\nTimestamp of last commit:')
const { stdout: timestamp } = await $`git log -1 --format="%at" main`
console.log('\nCommits since last time:')
const { stdout: hashes } = await $`git log --since="${+(timestamp.toString()) + 1}" slidev/main --format="%H"`

const firstHash = hashes.toString().trim().split('\n').at(-1)
if (!firstHash) {
  console.log('No changes to sync')
  process.exit(0)
}

const command = `git format-patch -k --stdout ${firstHash}...slidev/main --remove-empty -- docs | git am -3 -k --empty=drop`
console.log('\nRunning command:', command)
await $`git format-patch -k --stdout ${firstHash}...slidev/main --remove-empty -- docs | git am -3 -k --empty=drop`
