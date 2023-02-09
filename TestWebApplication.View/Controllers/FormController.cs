using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SoapService;
using TestWebApplication.Domain.Repositories.Abstractions;

namespace TestWebApplication.View.Controllers
{
    public class FormController : ControllerBase
    {
        private IFormRepository _repository;

        public FormController(IFormRepository repository)
        {
            this._repository = repository;
        }
        
        [HttpGet, Route("/form")]
        public Task GetFormPage()
        {
           return Response.SendFileAsync("wwwroot/form.html");
        }

        [HttpPost, Route("/signUp")]
        public async Task<string> SignUp(RegisterNewCustomerRequest model)
        {
            var result = await _repository.SingIn(model);
            
            return result;
        }
        
        [HttpPost, Route("/logIn")]
        public async Task<string> LogIn(LoginRequest model)
        {
            var result = await _repository.LogIn(model);
            
            return result;
        }

    }
}