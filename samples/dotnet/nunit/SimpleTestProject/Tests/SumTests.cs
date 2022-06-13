using NUnit.Framework;

namespace SimpleTestProject
{
    [TestFixture]
    [Category("SimpleMaths")]
    public class SumTests
    {
        [Test]
        public void SumTwoNumbers()
        {
            Assert.AreEqual(2, 1+1);
        }

        [Test]
        public void SumTwoNumbersWithDecimals()
        {
            Assert.AreEqual(2.5, 1 + 1.49);
        }

        [Category("SimpleMaths")]
        class SumMultipleNumbersTests
        {
            [Test]
            public void SumThreeNumbers()
            {
                Assert.AreEqual(3, 1 + 1 + 1);
            }
        }
    }
}