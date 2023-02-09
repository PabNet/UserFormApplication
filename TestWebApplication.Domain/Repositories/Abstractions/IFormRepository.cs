using System.Threading.Tasks;
using SoapService;

namespace TestWebApplication.Domain.Repositories.Abstractions
{
    public interface IFormRepository
    {
        public Task<string> SingIn(RegisterNewCustomerRequest request);

        public Task<string> LogIn(LoginRequest request);
    }
}