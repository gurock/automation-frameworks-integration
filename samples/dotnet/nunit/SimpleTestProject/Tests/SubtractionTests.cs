using NUnit.Framework;

namespace SimpleTestProject
{
    [TestFixture]
    [Category("SimpleMaths")]
    public class SubtractionTests
    {
        [Test]
        public void SubtractTwoNumbers()
        {
            Assert.AreEqual(1, 3-2);
        }
    }
}