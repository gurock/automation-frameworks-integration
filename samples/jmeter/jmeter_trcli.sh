clear

bold=$(tput bold)
TRCLI_CONFIG_PATH="C:\path\to\your\trcli\config\file\trcli-config.yml"
TRCLI_TEST_FILE="C:\path\to\your\trcli\config\file\jmeter_perf_test.jmx"
JMETER_RESULTS="C:\path\to\your\file\sample_results.xml"

echo "($bold)-------------------------------------"
echo "($bold)--- JMeter TestRail Sample Project --"
echo "($bold)-------------------------------------"

echo "($bold)... verify if TRCLI is installed:"
echo
trcli
echo

echo "($bold)... execute JMeter Load Test:"
echo
./jmeter.bat --nongui --testfile "$TRCLI_TEST_FILE"
echo

echo "($bold)... executing TestRail TRCLI to upload results in a new Test Run:"
echo
trcli --yes --config "$TRCLI_CONFIG_PATH" parse_junit --file "$JMETER_RESULTS" --title "JMeter Demo"
echo

echo "($bold)... execution completed. New Test Run created."
