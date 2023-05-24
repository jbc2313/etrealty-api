# API for etrealty/homestead realty next.js frontend
## Updated info from mls every day.
## PostgresQL db
### Jest as testrunner.
### Might move to vitest..
### db hosted on Rails.com
### Prisma is the ORM
### TypeScript is #1

# *ET/HOMESTEAD REALTY*

### Current Development Status
--------------------------------------

> This api can currently check the mls,
> add new homes to the db,
> check homes in db against homes in mls api,
> update home in db with new info from mls api,
> mark homes in db as unlisted if they are unlisted in mls api,

#### COMPLETED
---------------------------------
> Need a main file/function that calls the mls API
> The db feed and db update function will be called from main file/function.
> the jobs that need to run everyday,
> feed the db with new propertys from mls api,
> check db propertys against mls api for updates/unlist,
> That way I am only calling the api once for all the functions that need it.
> Need to setup cron job to run every 3 hours,

#### TODO
-------------------------------
> Changing the api source to MLSGRID.
> Change Everything to work with MLSGRID now.
> Working on rewriting this api basically from scratch.
> Currently working on figuring out all the values the new api gives for each home. So i can update the Prisma Schema.



#### Useful commands for debugging MLSGRID json
-------------------------------------------------

- get only the keys of the json's key-value pairs.
`jq ".value[1] | keys_unsorted" >file< `

- look at a specfic key/value
`jq ".value[] | {HMS_MaintenanceProvidedYN}" 50results-MLSGRID-initial.json`

- sort the keys by frequencey of occurence
`sort <file> | uniq -c | sort -n`

- Remove the quotes around the sorted keys
`awk -F'"' '{print $2}' sortedkeys_50.txt`
