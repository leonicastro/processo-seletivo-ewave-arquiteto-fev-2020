using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using FavoDeMel.Domain.Entities;
using FavoDeMel.Domain.Repositories;
using FavoDeMel.Infrastructure.Notifyer;
using Moq;

namespace FavoDeMel.Domain.Test.Mocks.Services
{
    public class MockNotifyerService
    {
        public INotifyerService Setup()
        {
            var mockRepository = new Mock<INotifyerService>();
            mockRepository
                .Setup(x => x.Notify(It.IsAny<string>(), It.IsAny<object>()));
            return mockRepository.Object;
        }
    }
}
