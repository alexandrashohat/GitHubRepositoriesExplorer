using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GitHubRepositoriesExplorer.Models;
using GitHubRepositoriesExplorer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GitHubRepositoriesExplorer.Controllers
{
    [Route("api/github")]
    [ApiController]
    public class GitHubController : ControllerBase
    {
        private readonly ILogger<GitHubController> _logger;
        private readonly GitHubService _gitHub;
        public GitHubController(ILogger<GitHubController> logger, GitHubService gitHub)
        {
            _logger = logger;
            _gitHub = gitHub;

        }
        [HttpGet("search/{name}")]
        public Task<GitHubSearchResponse> FindRepositoriesByNameAsync(string name)
        {
            return _gitHub.FindRepositoriesByNameAsync(name);
        }
    }
}