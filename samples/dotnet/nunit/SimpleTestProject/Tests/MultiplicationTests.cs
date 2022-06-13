using NUnit.Framework;

namespace SimpleTestProject
{
    [TestFixture]
    public class MultiplicationTests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test, Property("test_id", "33")]
        [TestCase(2, 1, 2)]
        [TestCase(2, 2, 4)]
        [TestCase(2, 3, 5)]
        public void MultiplyDataset(int a, int b, int expected)
        {
            Assert.That(a*b, Is.EqualTo(expected));
        }
    }
}