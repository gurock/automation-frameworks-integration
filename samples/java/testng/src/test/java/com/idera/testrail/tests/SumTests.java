package com.idera.testrail.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

class SumTests {

    @Test
    void AddTwoNumbers() {
        Assert.assertEquals(3, 1 + 2, "1 + 2 should equal 3");
    }

    @Test
    void AddTwoNumbersWithDecimals() {
        Assert.assertEquals(3, 1.5+1.4, "1.5+1.4 should equal 3");
    }
}

