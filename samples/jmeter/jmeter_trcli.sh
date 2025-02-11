clear

bold=$(tput bold)
TRCLI_CONFIG_PATH="C:\Users\patri\Documents\GitRepo\JMeter TestRail Integration\trcli-config.yml"
TRCLI_TEST_FILE="C:\Users\patri\Documents\GitRepo\JMeter TestRail Integration\jmeter_perf_test.jmx"
JMETER_RESULTS="C:\Program Files\apache-jmeter-5.6.3\bin\samples\sample_results.xml"

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