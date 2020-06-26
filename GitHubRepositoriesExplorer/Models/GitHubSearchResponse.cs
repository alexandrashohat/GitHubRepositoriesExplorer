using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GitHubRepositoriesExplorer.Models
{
    public class GitHubSearchResponse
    {
        public int total_count { get; set; }
        public bool incomplete_results { get; set; }
        public List<GitHubSearchResponseItem> items { get; set; }
    }

    public class GitHubSearchResponseItem
    {
        public int id { get; set; }
        public string name { get; set; }
        public string full_name { get; set; }
        public GitHubSearchResponseItemOwner owner { get; set; }
        public string html_url { get; set; }
        public string description { get; set; }
        public string url { get; set; }
    }

    public class GitHubSearchResponseItemOwner
    {
        public int id { get; set; }
        public string avatar_url { get; set; }
        public string url { get; set; }
    }
}
