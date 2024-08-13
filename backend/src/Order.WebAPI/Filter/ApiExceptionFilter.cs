using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OrderService.WebAPI.Application;
using OrderService.WebAPI.Domain.Exceptions;

namespace OrderService.WebAPI.Filter
{
    public class ApiExceptionFilter : ExceptionFilterAttribute
    {
        private readonly IDictionary<Type, Action<ExceptionContext>> _exceptionHandlers;

        public ApiExceptionFilter()
        {
            _exceptionHandlers = new Dictionary<Type, Action<ExceptionContext>>
            {
                { typeof(CustomValidationException), HandlerEntityValidationException },
                { typeof(RecordNotFoundException), HandlerRecordNotFoundException},
                { typeof(UnauthorizedAccessException), HandleUnauthorizedAccessException },
                { typeof(DbUpdateException), HandleDbConstraintException },
            };
        }

        public override void OnException(ExceptionContext context)
        {
            HandleException(context);
            base.OnException(context);
        }

        private void HandleException(ExceptionContext context)
        {
            Type type = context.Exception.GetType();
            if (_exceptionHandlers.TryGetValue(type, out var value))
            {
                value.Invoke(context);
                return;
            }

            if (!context.ModelState.IsValid)
            {
                HandlerInvalidModelStateException(context);
                return;
            }

            HandleUnknownException(context);
        }

        private static void HandleUnknownException(ExceptionContext context)
        {
            var result = new ErrorResponse
            {
                Message = context.Exception.Message,
            };

            context.Result = new ObjectResult(result)
            {
                StatusCode = StatusCodes.Status400BadRequest,
            };

            context.ExceptionHandled = true;
        }

        private static void HandlerInvalidModelStateException(ExceptionContext context)
        {
            var detalhes = new ValidationProblemDetails(context.ModelState);
            context.Result = new BadRequestObjectResult(detalhes);
            context.ExceptionHandled = true;
        }

        private static void HandlerEntityValidationException(ExceptionContext context)
        {
            var exception = (CustomValidationException)context.Exception;
            var result = new ErrorResponse
            {
                Message = exception.Message,
                Errors = exception.Failures,
            };
            context.Result = new BadRequestObjectResult(result);
            context.ExceptionHandled = true;
        }

        private static void HandlerRecordNotFoundException(ExceptionContext context)
        {
            var result = new ErrorResponse
            {
                Message = context.Exception.Message,
            };

            context.Result = new ObjectResult(result)
            {
                StatusCode = StatusCodes.Status404NotFound,
            };
            context.ExceptionHandled = true;

            return;
        }

        private static void HandleDbConstraintException(ExceptionContext context)
        {
            if (context.Exception.InnerException is SqlException { Number: 547 } sqlException &&
                sqlException.Message.Contains("DELETE"))
            {
                var result = new ErrorResponse
                {
                    Message = "It is not possible to remove because the record is in use.",
                };
                context.Result = new ObjectResult(result)
                {
                    StatusCode = StatusCodes.Status409Conflict,
                };
                context.ExceptionHandled = true;

                return;
            }

            HandleUnknownException(context);
        }

        private static void HandleUnauthorizedAccessException(ExceptionContext context)
        {
            var result = new ErrorResponse
            {
                Message = "Authorization denied.",
            };

            context.Result = new ObjectResult(result)
            {
                StatusCode = StatusCodes.Status401Unauthorized,
            };

            context.ExceptionHandled = true;
        }
    }
}
