using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GitHubRepositoriesExplorer
{
    public class MockDataService
    {
        private List<string> _tokens;

        public MockDataService()
        {
            _tokens = new List<string>() { "a", "b" };
        }

        public List<string> GetTokens() => _tokens;
    }
}
