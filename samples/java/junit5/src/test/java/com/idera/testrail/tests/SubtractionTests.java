package com.idera.testrail.tests;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SubtractionTests {

    @Test
    @DisplayName("Subtract Two Numbers")
    void SubtractTwoNumbers() {
        assertEquals(1, 2-1, "Should equal 1");
    }
}
