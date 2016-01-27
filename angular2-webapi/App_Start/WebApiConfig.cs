using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Routing;

namespace angular2_webapi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute("get-message", "api/message", new { controller = "Message", action = "GetMessage" }, new { verb = new HttpMethodConstraint("GET") });
        }
    }
}
