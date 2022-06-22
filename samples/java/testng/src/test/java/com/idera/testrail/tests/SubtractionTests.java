package com.idera.testrail.tests;

import org.testng.Assert;
import org.testng.annotations.Test;


class SubtractionTests {

    @Test
    void SubtractTwoNumbers() {
        Assert.assertEquals(1, 2 - 1, "Should equal 1");
    }
}
