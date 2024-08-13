namespace OrderService.WebAPI.Domain.Validations
{
    public class ValidationFail
    {
        public ValidationFail(string propertyName, string message)
        {
            PropertyName = propertyName;
            Message = message;
        }

        public string PropertyName { get; }

        public string Message { get; }

        public override string ToString()
        {
            return PropertyName + " : " + Message;
        }
    }
}
