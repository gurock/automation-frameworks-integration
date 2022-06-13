package com.idera.testrail.tests;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;


class MultiplicationTests {

    @Test
    void MultiplyTwoNumbers() {
        assertEquals(4, 2*2, "Should equal 4");
    }
}