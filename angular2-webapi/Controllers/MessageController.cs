using angular2_webapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace angular2_webapi.Controllers
{
    public class MessageController : ApiController
    {
        [HttpGet]
        public ObjWrapper<MessageModel> GetMessage()
        {
            return new ObjWrapper<MessageModel>()
            {
                data = new MessageModel()
                {
                    message = "Hello World!"
                }
            };
        }
    }
}
