using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GitHubRepositoriesExplorer.Models;
using GitHubRepositoriesExplorer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Session;
using GitHubRepositoriesExplorer.Utils;

namespace GitHubRepositoriesExplorer.Controllers
{
    [Route("api/github")]
    [ApiController]
    public class GitHubController : ControllerBase
    {
        private readonly ILogger<GitHubController> _logger;
        private readonly GitHubService _gitHub;
        private const string BOOKMARK_SESSION_KEY = "bookmarks";
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
        [HttpGet(BOOKMARK_SESSION_KEY)]
        public ActionResult<List<GitHubSearchResponseItem>> FindBookmarks()
        {
            try
            {
                var ret = SessionHelper.GetObjectFromJson<List<GitHubSearchResponseItem>>(HttpContext.Session, BOOKMARK_SESSION_KEY);
                return ret;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to obtain bookmarks from session store");
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
           
        }
        [HttpPost(BOOKMARK_SESSION_KEY)]
        public ActionResult BookmarkRepository([FromBody] GitHubSearchResponseItem item)
        {              
            try
            {
                var bookmarks = SessionHelper.GetObjectFromJson<List<GitHubSearchResponseItem>>(HttpContext.Session, BOOKMARK_SESSION_KEY);
                if (bookmarks == null)
                {
                    bookmarks = new List<GitHubSearchResponseItem>();
                    HttpContext.Session.initSession();

                }
                else if (bookmarks.Any(v => v.id == item.id)) // assuming that the id is unique
                {
                    return Ok();
                }
                bookmarks.Add(item);
                SessionHelper.SetObjectAsJson(HttpContext.Session, BOOKMARK_SESSION_KEY, bookmarks);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to save bookmarks from session store");
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }


    }
}