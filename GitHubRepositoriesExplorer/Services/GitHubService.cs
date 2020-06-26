using GitHubRepositoriesExplorer.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;


namespace GitHubRepositoriesExplorer.Services
{
    public class GitHubService
    {
        public HttpClient Client { get; }

        public GitHubService(HttpClient client)
        {
            client.BaseAddress = new Uri("https://api.github.com/");
            // GitHub API versioning
            client.DefaultRequestHeaders.Add("Accept", "application/vnd.github.v3+json");
            // GitHub requires a user-agent
            client.DefaultRequestHeaders.Add("User-Agent", "GitHubRepositoryExplorer");

            Client = client;
        }

        public async Task<GitHubSearchResponse> FindRepositoriesByNameAsync(string name)
        {           
            using (var stream = await Client.GetStreamAsync($"/search/repositories?q={name}"))
            using (var streamReader = new StreamReader(stream))
            using (var reader = new JsonTextReader(streamReader))
            {
                var serializer = new JsonSerializer();
                var response = serializer.Deserialize<GitHubSearchResponse>(reader);
                return response;
            }            
        }
    }
}
