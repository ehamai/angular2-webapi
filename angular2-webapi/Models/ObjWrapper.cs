using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angular2_webapi.Models
{
    public class ObjWrapper<T>
    {
        public T data { get; set; }
    }
}