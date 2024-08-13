using OrderService.WebAPI.Domain.Validations;
using System.Runtime.Serialization;

namespace OrderService.WebAPI.Domain.Exceptions
{
    [Serializable]
    [KnownType(typeof(List<ValidationFail>))]
    public class CustomValidationException : Exception
    {
        public CustomValidationException() : base("Validation Failed for one or more properties.")
        {
            Failures = new List<ValidationFail>();
        }

        public CustomValidationException(IEnumerable<ValidationFail> failures) : this()
        {
            Failures.AddRange(failures);
        }

        public CustomValidationException(string propertyName, string message) : this()
        {
            Failures.Add(new ValidationFail(propertyName, message));
        }

        public List<ValidationFail> Failures { get; }

        public override string ToString()
        {
            return
                Message +
                Environment.NewLine +
                string.Join(Environment.NewLine, Failures);
        }
    }
}
