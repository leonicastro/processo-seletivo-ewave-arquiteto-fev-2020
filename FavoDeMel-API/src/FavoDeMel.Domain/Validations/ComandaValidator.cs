
using FavoDeMel.Domain.Entities.Dtos;
using FluentValidation;

namespace FavoDeMel.Domain.Validations
{
    public class ComandaValidator : AbstractValidator<ComandaDto>
    {
        public ComandaValidator()
        {
            ConfigureRules();
        }

        public void ConfigureRules()
        {
            RuleFor(c => c)
                .Cascade(CascadeMode.StopOnFirstFailure);

        }
    }
}
