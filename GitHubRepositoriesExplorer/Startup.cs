using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GitHubRepositoriesExplorer.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace GitHubRepositoriesExplorer
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.Configure<CookiePolicyOptions>(options =>
            //{
            //    // This lambda determines whether user consent for non-essential cookies is needed for a given request.
            //    options.CheckConsentNeeded = context => false;
            //    options.MinimumSameSitePolicy = SameSiteMode.None;
            //});

            //services.AddDistributedMemoryCache();
            services.AddHttpClient<GitHubService>();

            //services.AddSession(options =>
            //{
            //    options.Cookie.Name = ".GitHubRepositoriesExplorer.Session";
            //    options.Cookie.HttpOnly = false;
            //    options.IdleTimeout = TimeSpan.FromHours(24);
            //    options.Cookie.IsEssential = true;
            //});

            services
                .AddSession()
                .AddMvc()
                .AddSessionStateTempDataProvider()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseCors(v => v.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials());
                app.UseDeveloperExceptionPage();
              
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseSession();
            //app.UseCookiePolicy();

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
