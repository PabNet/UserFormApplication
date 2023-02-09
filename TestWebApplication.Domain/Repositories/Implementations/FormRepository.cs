using System;
using System.Linq;
using System.Threading.Tasks;
using SoapService;
using TestWebApplication.Domain.Repositories.Abstractions;

namespace TestWebApplication.Domain.Repositories.Implementations
{
    public class FormRepository : IFormRepository
    {
        private readonly IICUTech _soapService;

        public FormRepository()
        {
            _soapService = new ICUTechClient();
        }

        public async Task<string> SingIn(RegisterNewCustomerRequest request)
        {
            SplitFullName(request);
            var result = await _soapService.RegisterNewCustomerAsync(request);

            return result.@return;
        }

        private void SplitFullName(RegisterNewCustomerRequest request)
        {
            var fullNameArray = request.FullName.Split(" ");

            request.FirstName = fullNameArray.First();
            request.LastName = fullNameArray.Last();
        }

        public async Task<string> LogIn(LoginRequest request)
        {
            var result = await _soapService.LoginAsync(request);

            return result.@return;
        }
    }
}