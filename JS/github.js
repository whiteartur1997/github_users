class GitHub {
  constructor() {
    this.clientId = "269dbb2a090a336efbda";
    this.clientSecret = "299d18c15568e0d91dd52ccd10b77aed928ac148";
    this.reposCount = 5;
    this.reposSort = "created: asc"
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}
    ?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
    per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}
    &client_secret=${this.clientSecret}`)
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    }
  }
}