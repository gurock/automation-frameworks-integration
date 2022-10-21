import pytest


def test_sum_two_numbers():
    assert 1 + 1 == 2


def test_sum_two_decimals(record_property):
    record_property("testrail_attachment", "sample_reports/testrail.jpg")
    assert 0.8 + 0.3 == 1.2


@pytest.mark.parametrize("test_input,expected", [("3+5", 8), ("2+4", 6)])
def test_sum_multiple_numbers(test_input, expected):
    assert eval(test_input) == expected
