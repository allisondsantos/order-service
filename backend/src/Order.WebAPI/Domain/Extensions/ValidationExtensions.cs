using OrderService.WebAPI.Domain.Validations;
using System.Diagnostics.CodeAnalysis;
using System.Text.RegularExpressions;

namespace OrderService.WebAPI.Domain.Extensions
{
    public static class ValidationExtensions
    {
        public static List<ValidationFail> Add(
            this List<ValidationFail> source,
            string propertyName,
            string message)
        {
            source.Add(new ValidationFail(propertyName, message));
            return source;
        }

        public static List<ValidationFail> Join(
            this List<ValidationFail> source,
            params List<ValidationFail>[] validations)
        {
            foreach (var validation in validations)
            {
                source.AddRange(validation);
            }

            return source;
        }

        public static List<ValidationFail> NotNull(
            this List<ValidationFail> source,
            object? value,
            string propertyName)
        {
            if (value is not null)
                return source;

            return source.Add(propertyName, $"The field '{propertyName}' was not provided.");
        }

        public static List<ValidationFail> NotNullOrWhiteSpace(
            this List<ValidationFail> source,
            string value,
            string propertyName)
        {
            if (!string.IsNullOrWhiteSpace(value))
                return source;

            return source.Add(propertyName, $"The field '{propertyName}' must be provided.");
        }

        public static List<ValidationFail> MaximumLength(
            this List<ValidationFail> source,
            string value,
            int maximumLength,
            string propertyName)
        {
            if (value is null)
                return source;

            if (value.Length <= maximumLength)
                return source;

            return source.Add(propertyName, $"The field '{propertyName}' must contain a maximum of '{maximumLength}' characters.");
        }


        public static List<ValidationFail> GreaterThan(
            this List<ValidationFail> source,
            int value,
            int comparer,
            string propertyName)
        {
            if (value > comparer)
                return source;

            return source.Add(propertyName, $"The field '{propertyName}' must have a value greater than '{comparer}'.");
        }

        public static List<ValidationFail> GreaterThan(
            this List<ValidationFail> source,
            decimal value,
            int comparer,
            string propertyName)
        {
            if (value > comparer)
                return source;

            return source.Add(propertyName, $"The field '{propertyName}' must have a value greater than '{comparer}'.");
        }

        public static List<ValidationFail> IsEmailValid(
            this List<ValidationFail> source,
            string value,
            string propertyName)
        {
            var regex = new Regex(
                @"^(?("")("".+?(?<!\\)""@)|(([0-9a-z]((\.(?!\.))|[-!#\$%&'\*\+/=\?\^`\{\}\|~\w])*)(?<=[0-9a-z])@))(?(\[)(\[(\d{1,3}\.){3}\d{1,3}\])|(([0-9a-z][-\w]*[0-9a-z]*\.)+[a-z0-9][\-a-z0-9]{0,22}[a-z0-9]))$",
                RegexOptions.CultureInvariant | RegexOptions.Singleline | RegexOptions.IgnoreCase,
                TimeSpan.FromSeconds(2)
            );

            if (!string.IsNullOrEmpty(value) && regex.IsMatch(value))
            {
                return source;
            }
            return source.Add(propertyName, "Invalid email address ");
        }
    }
}
