using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Starter.WebAPI.Angular.AzureAD
{
	public partial class Startup
	{
		public void ConfigureAuth(IAppBuilder app)
		{
			//app.UseWindowsAzureActiveDirectoryBearerAuthentication(
			//	new WindowsAzureActiveDirectoryBearerAuthenticationOptions
			//	{
			//		Audience = ConfigurationManager.AppSettings["ida:Audience"],
			//		Tenant = ConfigurationManager.AppSettings["ida:Tenant"]
			//	});
		}
	}
}