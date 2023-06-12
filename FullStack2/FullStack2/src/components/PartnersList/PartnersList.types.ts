export type TClient = {
  id: string,
  name: string
}

export type TProject = {
  id: string,
  name: string
}


export type TPartner = {
  id?: string, 
  name: string, 
  description: string,
  repositoryGit: string,
  urlDoc: string,
  clients: TClient[],
  projects: TProject[], 
}
