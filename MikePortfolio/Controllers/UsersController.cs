using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MikePortfolio.Controllers
{
    public class UsersController : BaseApiController
    {
        public bool Get(string userName)
        {
            return TheRepository.UserNameExists(userName);
        }
    }
}
