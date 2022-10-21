package com.idera.testrail.tests;

import com.testrail.junit.customjunitxml.TestRailTestReporter;
import com.testrail.junit.customjunitxml.TestRailTestReporterParameterResolver;
import com.testrail.junit.customjunitxml.annotations.TestRail;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(TestRailTestReporterParameterResolver.class)
class SumTests {

    @Test
    @DisplayName("Add Two Numbers")
    void AddTwoNumbers() {
        assertEquals(3, 1+2, "1 + 2 should equal 3");
    }

    @Test
    @DisplayName("Add Two Numbers With Decimals")
    void AddTwoNumbersWithDecimals(TestRailTestReporter customReporter) {
        customReporter.setProperty("testrail_attachment", "sample_reports/testrail.jpg");
        assertEquals(3, 1.5+1.4, "1.5+1.4 should equal 3");
    }

    @Nested
    class AddMoreNumbersTests {

        @Test
        @DisplayName("Add Three Numbers")
        void AddThreeNumbers() {
            assertEquals(3, 1+1+1, "1+1+1 should equal 3");
        }
    }
}